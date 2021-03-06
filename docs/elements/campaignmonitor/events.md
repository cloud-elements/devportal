---
heading: Campaign Monitor
seo: Events | Campaign Monitor | Cloud Elements API Docs
title: Events
description: Enable Campaign Monitor events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3928
elementKey: campaignmonitor
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports webhook events for {{page.heading}}. For more information about webhooks at {{page.heading}} including the currently available webhooks, see [{{page.heading}}'s' webhooks documentation](https://developer.box.com/docs/getting-started-with-webhooks-v2).

## Webhooks

You can configure webhooks [through the UI](#configure-webhooks-through-the-ui) or in the JSON body of the `/instances` [API call](#configure-webhooks-through-api) .

### Configure Webhooks Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with webhooks:

1. Complete the [authentication steps(authenticate.html#authenticate-through-the-ui)] up to naming the authenticated element instance.
2. Click **Show Optional Fields** to show the **List IDs** field.
3. Enter a comma separated list of List IDs that represent the lists that you want to monitor with events. See [Find a List ID in API Provider Setup](setup.html#find-a-list-id) for more information about locating the List IDs.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an **Event Notification Callback URL**.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. If using the earlier UI, optionally add tags.
9. Note the **Token** and **ID** and save them for all future requests using the element instance.
8. Take a look at the documentation for the element resources now available to you.

### Configure Webhooks Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with webhooks enabled.

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
        "events.list.ids": "<LIST_IDS>"
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
    "oauth.callback.url": "<CALLBACK_URL>",
    "oauth.api.key": "<CONSUMER_KEY>",
    "oauth.api.secret": "<CONSUMER_SECRET>"
    "event.notification.enabled": true,
    "event.notification.callback.url": "<CALLBACK_URL>",
    "events.list.ids": "<LIST_IDS>"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

## Parameters

API parameters not shown in the {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth.callback.url` | The URL where you want to redirect users after they grant access. This is the **Callback URL** that you noted in the [API Provider Setup section](setup.html).  |
| `oauth.api.key` | The Client ID from {{page.heading}}. This is the **Client ID** that you noted in the [API Provider Setup section](setup.html) |  string |
| `oauth.api.secret` | The Client Secret from {{page.heading}}. This is the **Client Secret** that you noted in the [API Provider Setup section](setup.html)| string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| List IDs</br>`events.list.ids` | A comma separated list of  API Subscriber List IDs for lists that you want to monitor. This is the **List ID** that you noted in the [API Provider Setup section](setup.html).  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
