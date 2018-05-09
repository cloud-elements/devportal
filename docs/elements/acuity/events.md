---
heading: Acuity Scheduling
apiProvider: Acuity Scheduling # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Events | Acuity Scheduling | Cloud Elements API Docs
title: Events
description: Enable Acuity Scheduling events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementKey: acuityscheduling
elementId: 6156
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret  #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports webhook events for {{page.heading}}. After receiving an event, Cloud Elements standardizes the payload and sends an event to the configured callback URL of your authenticated element instance. For more information about webhooks at {{page.apiProvider}} including the currently available webhooks, see [{{page.apiProvider}}'s webhooks documentation](https://developers.acuityscheduling.com/docs/webhooks).

After you set up webhook events in Cloud Elements, you also need to configure webhooks at {{page.apiProvider}} with the Webhook URL provided after authentication. See [Webhook Configuration](#webhook-configuration).


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

After successfully authenticating, open the authenticated instance that you just created, and then copy the Webhook URL. You'll use the url to [configure webhooks at {{page.apiProvider}}](#webhook-configuration).

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
{% include_relative includes/config-fields.md %},
        "event.notification.enabled": true,
        "event.notification.callback.url": "<CALLBACK_URL>"
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
3. Set up [webhooks at the API provider][#webhook-configuration].


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
{% include_relative includes/config-example.md %},
    "event.notification.enabled": true,
    "event.notification.callback.url": "https://mycoolapp.com/events"
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
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Webhook Configuration

Use the Webhook URL we generated after you authenticated the element Instance to set up webhooks at {{page.apiProvider}}. Before you begin, [review the {{page.apiProvider}} documentation on webhooks](https://developers.acuityscheduling.com/docs/webhooks).

1. Log in to your account at [{{page.heading}}](https://secure.acuityscheduling.com/login.php).
2. On the left, click **Business Settings**, and then click **Integrations**.
![integrations](img/integrations.png)
3. Scroll to the API section, find **Webhooks**, and then click **Set Up**.
4. In the new window, enter the Webhook URL from the authenticated element instance in any of the webhook types that u want to receive events for.
6. Click **Save Settings**.
