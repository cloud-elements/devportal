---
heading: Citrix ShareFile
seo: Events | Citrix ShareFile | Cloud Elements API Docs
title: Events
description: Enable Citrix ShareFile events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 450
elementKey: sharefile
apiKey: Client Id #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 30
---

# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include note.html content="Sharefile webhooks do not currently support created or updated events for folders. If you need these types of events, use polling. For more information on what events are supported by Sharefile webhooks, review their <a href=https://api.sharefile.com/rest/webhooks/events.aspx>webhooks documentation<a>.   " %}


{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#webhooks>Webhooks</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports [polling](#polling) events and [webhooks](#webhooks) for {{page.heading}}. After receiving an event, Cloud Elements standardizes the payload and sends an event to the configured callback URL of your authenticated element instance.

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. To enable hash verification in the headers of event callbacks, click **Show Optional Fields**, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. In **Event Type** select **Polling**.
8. Add an **Event Notification Callback URL**.
4. Use the **Event poller refresh interval (mins)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Get an authorization grant code by completing the steps in [Getting a redirect URL](authenticate.html#getting-a-redirect-url) and  [Authenticating users and receiving the authorization grant code](authenticate.html#authenticating-users-and-receiving-the-authorization-grant-code).
1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element":{
        "key":"{{page.elementKey}}"
      },
      "providerData":{
        "code": "<AUTHORIZATION_GRANT_CODE>"
      },
      "configuration":{
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>",
        "document.root.folder.name": "</ROOT_DIR>",
        "sharefile.subdomain": "<SUBDOMAIN>",
        "event.notification.enabled": true,
        "event.vendor.type": "polling",
        "event.notification.callback.url": "http://mycoolapp.com",
        "event.notification.signature.key": "123456",
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "documents":{
            "url":"/hubs/documents/events/poll/documents?where=lastmodifieddate='${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
            "idField":"id",
            "datesConfiguration":{
              "updatedDateField":"CreationDate",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "updatedDateTimezone": "GMT",
              "createdDateField": "ProgenyEditDate",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "createdDateTimezone": "GMT"            }
          }
        }
      },
      "tags":[
        "<Add_Your_Tag>"
      ],
      "name":"<INSTANCE_NAME>"
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.


### Example cURL with Polling

```bash
curl -X POST \
https://api.cloud-elements.com/elements/api-v2/instances \
-H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
-H 'content-type: application/json' \
-d '{
"element": {
  "key": "{{page.elementKey}}"
},
"providerData":{
  "code": "<AUTHORIZATION_GRANT_CODE>"
},
"configuration": {
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "document.root.folder.name": "/top",
    "sharefile.subdomain": "cloud-elements",
    "event.notification.enabled": true,
    "event.vendor.type": "polling",
	  "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
    "event.poller.refresh_interval": "15",
    "event.poller.configuration":{
    	"documents": {
        "url": "/hubs/documents/events/poll/documents?where=lastmodifieddate='${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "CreationDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "updatedDateTimezone": "GMT",
          "createdDateField": "ProgenyEditDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateTimezone": "GMT"
            }
    	}
    }
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance with Polling"
}'
```

## Polling Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | {{site.data.glossary.element-auth-grant-code}}  | string |
|  Name</br>`name` |   {{site.data.glossary.element-auth-name}}   | Body  |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you noted in [API Provider Setup](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you noted in [API Provider Setup](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-api-key}} This is the **{{page.callbackURL}}** that you noted in [API Provider Setup](setup.html).  |
|  Sharefile Root Folder</br>`document.root.folder.name` |  The root folder. The /top folder is the root level folder.   |  string  |
|  Subdomain</br>`sharefile.subdomain` | The subdomain part of your Sharefile url. For example, if your url is `https://cloud-elements.sharefile.com` enter `cloud-elements`.  | string  |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | _Optional_. Configuration parameters for polling. | JSON object |
| Resource to Poll  | The polling event configuration of the resource that you will monitor. | JSON object |
| URL</br>`url` | The url to query for updates to the resource.  | String |
| ID Field</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| Advanced Filtering</br>`datesConfiguration` | Configuration parameters for dates in polling | JSON Object |
| Updated Date Field</br>`updatedDateField` | The field that identifies an updated object. | String |
| Updated Date Format</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| Created Date Field</br>`createdDateField` | The field that identifies a created object. | String |
| Created Date Format</br>`createdDateFormat` | The date format of the field that identifies a created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Webhooks

You can configure webhooks [through the UI](#configure-webhooks-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-webhooks-through-api) .

### Configure Webhooks Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with webhooks:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. To enable hash verification in the headers of event callbacks, click **Show Optional Fields**, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. In **Event Type** select **Webhook**.
8. Add an **Event Notification Callback URL**.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

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
        "oauth.callback.url": "https;//mycoolapp.com",
        "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
        "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
        "document.root.folder.name": "/top",
        "sharefile.subdomain": "cloud-elements",
        "event.notification.enabled": true,
        "event.vendor.type": "webhook",
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
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "document.root.folder.name": "/top",
    "sharefile.subdomain": "cloud-elements",
    "event.notification.enabled": true,
    "event.vendor.type": "webhook",
    "event.notification.callback.url": "https://mycoolapp.com/events",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

## Webhook Parameters

API parameters not shown in the {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | {{site.data.glossary.element-auth-grant-code}}  | string |
|  Name</br>`name` |   {{site.data.glossary.element-auth-name}}   | Body  |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html).  |
|  Sharefile Root Folder</br>`document.root.folder.name` |  The root folder. The /top folder is the root level folder.   |  string  |
|  Subdomain</br>`sharefile.subdomain` | The subdomain part of your Sharefile url. For example, if your url is `https://cloud-elements.sharefile.com` enter `cloud-elements`.  | string  |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Callback Notification Signature Key </br>`event.notification.signature.key` | *Optional*. A user-defined key for added security to show that events have not been tampered with. | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
