# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports both webhooks and polling events for {{page.heading}}.

You can set up events for the following resources:

* Accounts
* Contacts
* Other objects that include `created`, `updated`, and `deleted` data.

## Polling

You can configure polling through the UI or in the JSON body of the `/instances` API call.

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}


### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Complete the [authentication steps(authenticate.html#authenticate-through-the-ui)] up to completing **Create Bulk Properties for Migration**.
2. To enable hash verification in the headers of event callbacks, click Show Optional Fields, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. In **Vendor Event Type**, select **Polling**.
8. Add an **Event Notification Callback URL**.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)
8. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).


### Configure Polling Through API

To add polling when authenticating through the `/instances` API call, add the following to the `configuration` object in the JSON body. For more information about each parameter described here, see [Parameters](#parameters).

```json
{
"event.notification.enabled": true,
"event.vendor.type": "polling",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.notification.signature.key": "<INSERT_KEY>",
"event.objects": "<COMMA_SEPARATED_LIST>",
"event.poller.refresh_interval": "<TIME_IN_MINUTES>"
}
```
{% include note.html content="<code>event.notification.signature.key</code> is optional.  " %}

### Example JSON with Polling

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "providerData": {
    "code": "<AUTHORIZATION_GRANT_CODE>"
  },
  "configuration": {
    "authentication.type": "oauth2 OR apiKey",
    "oauth.callback.url": "<OAUTH2_ONLY_CALLBACK_URL>",
    "oauth.api.key": "<OAUTH2_ONLY_CONSUMER_KEY>",
    "oauth.api.secret": "<OAUTH2_ONLY_CONSUMER_SECRET>",
    "hubspot.authorization.apikey":"<API_KEY_ONLY_HAPIKEY>",
    "create.bulk.properties": "false",
    "filter.response.nulls": true,
    "event.notification.enabled": true,
    "event.vendor.type": "polling",
    "event.notification.callback.url": "https://mycoolapp.com",
    "event.notification.signature.key": "12345",
    "event.poller.refresh_interval": "5",
    "event.poller.configuration":{
      "accounts":{
        "url":"/hubs/crm/contacts?where=lastmodifieddate='${date}'",
        "idField":"vid",
        "filterByUpdatedDate":true,
        "datesConfiguration":{
          "updatedDateField":"properties.lastmodifieddate",
          "updatedDateFormat":"milliseconds",
          "createdDateField":"properties.createdate",
          "createdDateFormat":"milliseconds",
          "createdCheckTolerance": 10
        }
      }
    }
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<INSTANCE_NAME>"
}
```

## Webhooks

You can configure webhooks [through the UI](#configure-webhooks-through-the-ui) or [through API](#configure-webhooks-through-api) in the JSON body of the `/instances` API call. First, you must [set up webhooks in Hubspot](#set-up-webhooks).

### Set Up Webhooks

Follow these steps to set up your Hubspot application with the endpoint.

1. Via a web browser, log in to your Hubspot developer account at [https://app.hubspot.com/login](https://app.hubspot.com/login).
1. In the developer app dashboard select the app that you'd like to send webhooks for.
1. Select the **Webhook Subscriptions** nav item and then select **configure**.
1. In the webhook URL field, enter:
  * https://console.cloud-elements.com
1. In the concurrent requests field, leave the default value of 10 and click **Save**.
1. Next, you'll need to set up individual subscriptions for each object and event type for which you'd like to receive a notification. Do this by clicking **Create Subscription**.
1. Now, follow the prompts to configure the subscription.

### Configure Webhooks Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with webhooks:

1. Complete the [authentication steps(authenticate.html#authenticate-through-the-ui)] up to completing **Create Bulk Properties for Migration**.
2. To enable hash verification in the headers of event callbacks, click Show Optional Fields, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. In **Vendor Event Type**, select **Webhooks**.
8. Add an **Event Notification Callback URL**.
8. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

### Configure Webhooks Through API

To add webhooks when authenticating through the `/instances` API call, add the following to the `configuration` object in the JSON body. For more information about each parameter described here, see [Parameters](#parameters).

```json
{
"event.notification.enabled": true,
"event.vendor.type": "polling",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.notification.signature.key": "<INSERT_KEY>",
"event.objects": "<COMMA_SEPARATED_LIST>"
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
    "authentication.type": "oauth2 OR apiKey",
    "oauth.callback.url": "<OAUTH2_ONLY_CALLBACK_URL>",
    "oauth.api.key": "<OAUTH2_ONLY_CONSUMER_KEY>",
    "oauth.api.secret": "<OAUTH2_ONLY_CONSUMER_SECRET>",
    "hubspot.authorization.apikey":"<API_KEY_ONLY_HAPIKEY>",
    "create.bulk.properties": "false",
    "filter.response.nulls": true,
    "event.notification.enabled": true,
    "event.vendor.type": "webhooks",
    "event.notification.callback.url": "https://mycoolapp.com",
    "event.notification.signature.key": "12345",
    "event.objects": "Contact,Account"
  },
  "tags": [
    "<Add_Your_Tag>"
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
| Create Bulk Properties for Migration</br>`create.bulk.properties` |  Identifies if you want to create custom properties in Hubspot for bulk uploads. |  string, must be `true` (Yes) or `false` (No) |
| `oauth.callback.url` | OAuth 2.0 authentication only. The URL where you want to redirect users after they grant access. This is the **Callback URL** that you noted in the [API Provider Setup section](setup.html).  | string  |
| `oauth.api.key` | OAuth 2.0 authentication only. The Client ID from {{page.heading}}. This is the **Client ID** that you noted in the [API Provider Setup section](setup.html) |  string |
| `oauth.api.secret` | OAuth 2.0 authentication only. The Client Secret from {{page.heading}}. This is the **Client Secret** that you noted in the [API Provider Setup section](setup.html)| string |
| Hubspot API Key</br>`hubspot.authorization.apikey` | API Key authentication only. The hubspot API key that you noted in the [API Provider Setup section](setup.html) | string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`  | boolean |
| Event Type </br>`event.vendor.type` | *Optional*. Identifies the type of events enabled for the instance, either `webhook` or `polling`. | string |
| Event Notification Callback URL</br>`event.notification.callback.url` |  *For webhooks and polling.*</br>The URL where your app can receive events.   | string |
| Callback Notification Signature Key </br>`event.notification.signature.key` | *For webhooks and polling.*</br>*Optional*</br>A user-defined key for added security to show that events have not been tampered with. This can be any custom value that you want passed to the callback handler listening at the provided Event Notification Callback URL.| string |
| Objects to Monitor for Changes</br>`event.objects`|  *For webhooks and polling.*</br>*Optional*</br>Comma separated list of objects to monitor for changes. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | *For polling only.*</br>A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | Optional*. Configuration parameters for polling. | JSON object |
| resource name </br>e.g., contact, account, etc.  | The configuration of an individual resource. | JSON object |
| URL</br>`url` | The url to query for updates.  | String |
| ID Field</br>`idField` | The field that is used to uniquely identify an object.  | String |
| Advanced Filtering</br>`datesConfiguration` | Configuration parameters for dates in polling | JSON Object |
| Updated Date Field</br>`updatedDateField` | The field that identifies an updated object. | String |
| Updated Date Format</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| Created Date Field</br>`createdDateField` | The field that identifies a created object. | String |
| Created Date Format</br>`createdDateFormat` | The date format of the field that identifies a created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
