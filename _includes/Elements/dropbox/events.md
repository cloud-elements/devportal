Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports webhook events for {{page.heading}}. For more information about webhooks at {{page.heading}} including the currently available webhooks, see [{{page.heading}}'s webhooks documentation](https://www.dropbox.com/developers/reference/webhooks).

## Webhooks

You can configure webhooks [through the UI](#configure-webhooks-through-the-ui) or [through API](#configure-webhooks-through-api) in the JSON body of the `/instances` API call. Before you begin, make sure that you set up webhooks as described in  [API Provider Setup](setup.html#set-up-events).

### Configure Webhooks Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with webhooks:

1. Complete the [basic authentication steps(authenticate.html#authenticate-through-the-ui)].
2. To enable hash verification in the headers of event callbacks, click Show Optional Fields, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an **Event Notification Callback URL**. This should match the **Webhooks URI** for the application.
8. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

### Configure Webhooks Through API

To add webhooks when authenticating through the `/instances` API call, add the following to the `configuration` object in the JSON body. For more information about each parameter described here, see [Parameters](#parameters).

```json
{
"event.notification.enabled": true,
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.notification.signature.key": "<INSERT_KEY>"
}
```
{% include note.html content="<code>event.notification.signature.key</code> is optional.  " %}

### Example JSON with Webhooks

Instance JSON with webhooks events enabled:

```json
        {
          "element": {
            "key": "{{page.elementKey}}"
          },
          "providerData": {
            "code": "<AUTHORIZATION_GRANT_CODE>"
          },
          "configuration": {
            "oauth.api.key": "<CLIENT_ID>",
            "oauth.api.secret": "<CLIENT_SECRET>",
            "oauth.callback.url": "https://www.mycoolapp.com/auth",
            "event.notification.enabled": true,
            "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
            "event.notification.signature.key": "<INSERT_KEY>"
          },
          "tags": [
            "<ADD_YOUR_TAGS>"
          ],
          "name": "<INSTANCE_NAME>"
        }
```

## Parameters

API parameters are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | The authorization grant code returned from the API provider in an OAuth2 authentication workflow. | string |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| `authentication.type` | Identifies how you are authenticating with {{page.heading}}. Either `oauth2` or `apiKey`. | string |
| `oauth.callback.url` | OAuth 2.0 authentication only. The URL where you want to redirect users after they grant access. This is the **Redirect URI** that you noted in the [API Provider Setup section](setup.html).  | string  |
| `oauth.api.key` | OAuth 2.0 authentication only. The Client ID from {{page.heading}}. This is the **App key** that you noted in the [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | OAuth 2.0 authentication only. The Client Secret from {{page.heading}}. This is the **App secret** that you noted in the [API Provider Setup section](setup.html). | string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where your app can receive events. This is the **Webhook URI** that you noted in the [API Provider Setup section](setup.html).   | string |
| Callback Notification Signature Key </br>`event.notification.signature.key` | *Optional*</br>A user-defined key for added security to show that events have not been tampered with. This can be any custom value that you want passed to the callback handler listening at the provided Event Notification Callback URL.| string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
