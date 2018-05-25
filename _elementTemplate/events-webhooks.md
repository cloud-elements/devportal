---
heading: Name of Element
apiProvider: Company Name # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Events | Name of Element | Cloud Elements API Docs
title: Events
description: Enable Element Name events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: nn
elementKey: fake
apiKey: Key Name
apiSecret: Secret Name
callbackURL: Callback URL Name
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports webhook events for {{page.heading}}. After receiving an event, Cloud Elements standardizes the payload and sends an event to the configured callback URL of your authenticated element instance. For more information about webhooks at {{page.apiProvider}} including the currently available webhooks, see [{{page.apiProvider}}'s webhooks documentation](https://www.campaignmonitor.com/api/webhooks/).

## Webhooks

You can configure webhooks [through the UI](#configure-webhooks-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-webhooks-through-api) .

### Configure Webhooks Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with webhooks:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.apiProvider}}](authenticate.html) .
2. To enable hash verification in the headers of event callbacks, click Show Optional Fields, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an **Event Notification Callback URL**.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Log in to {{page.apiProvider}}, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs#test-an-element-instance) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

### Configure Webhooks Through API

Use the `/instances` endpoint to authenticate with {{page.apiProvider}} and create an element instance with webhooks enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with webhooks:

1. Get an authorization grant code by completing the steps in [Getting a redirect URL](authenticate.html#getting-a-redirect-url) and  [Authenticating users and receiving the authorization grant code](authenticate.html#authenticating-users-and-receiving-the-authorization-grant-code).
1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "providerData": {
        "code": "<AUTHORIZATION_GRANT_CODE>"
      },
      "configuration": {
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "<CALLBACK_URL>",
        "event.notification.signature.key": "<OPTIONAL_SIGNATURE_KEY>"
      },
      "tags": [
        "<Add_Your_Tag>"
      ],
      "name": "<INSTANCE_NAME>"
    }

    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.


#### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "providerData": {
    "code": "xoz8AFqScK2ngM04kSSM"
  },
  "configuration": {
    "oauth.callback.url": "https://mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxx"
    "event.notification.enabled": true,
    "event.notification.callback.url": "https://mycoolapp.com/events",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

## Parameters

API parameters not shown in the {{site.console}} are in `code formatting`.

<add custom element-specific params at the bottom of the table>

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | {{site.data.glossary.element-auth-grant-code}}  | string |
|  Name</br>`name` |   {{site.data.glossary.element-auth-name}}   | Body  |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html).  | string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Callback Notification Signature Key </br>`event.notification.signature.key` | *Optional*. A user-defined key for added security to show that events have not been tampered with. | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
