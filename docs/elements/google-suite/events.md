---
heading: Google Suite
apiProvider: Google # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Events | Google Suite | Cloud Elements API Docs
title: Events
description: Enable Element Name events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5601
elementKey: googlesuite
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Authorized redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}. After receiving an event, Cloud Elements standardizes the payload and sends an event to the configured callback URL of your authenticated element instance.

## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-polling-through-api) .

You can set up events for the following resources:

* calendars/{calendarId}/changed-events
* calendars/primary/changed-events
* changed-groups
* changed-messages

{% include note.html content="You can set up polling for other resources that include <code>created</code>, <code>updated</code>, and <code>deleted</code> data through our API. Copy the configuration of one of the default resources, and replace the name with the resource that you want to poll.  " %}

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an **Event Notification Callback URL**.
4. Use the **Event poller refresh interval (mins)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs#test-an-element-instance) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.apiProvider}} and create an element instance with polling enabled.

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
        "oauth.api.key": "<{{page.apiProvider}} app {{page.apiKey}}>",
      	"oauth.api.secret": "<{{page.apiProvider}} app {{page.apiSecret}}>",
        "oauth.callback.url": "<{{page.apiProvider}} app {{page.callbackURL}}>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "http://mycoolapp.com",
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "calendars/{calendarId}/changed-events": {
            "url": "/hubs/general/calendars/{calendarId}/changed-events",
            "idField": "",
            "datesConfiguration": {
              "updatedDateField": "updated",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "updatedDateTimezone": "GMT",
              "createdDateField": "created",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "createdDateTimezone": "GMT"
            }
          },
          "calendars/primary/changed-events": {
            "url": "/hubs/general/calendars/primary/changed-events",
            "idField": "",
            "datesConfiguration": {
              "updatedDateField": "updated",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "updatedDateTimezone": "GMT",
              "createdDateField": "created",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "createdDateTimezone": "GMT"
            }
          },
          "changed-groups": {
            "url": "/hubs/general/changed-groups",
            "idField": "id",
            "datesConfiguration": {
              "updatedDateField": "metadata.updateTime",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "updatedDateTimezone": "GMT",
              "createdDateField": "metadata.updateTime",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "createdDateTimezone": "GMT"
            }
          },
          "changed-messages": {
            "url": "/hubs/general/changed-messages",
            "idField": "id"
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
  	"oauth.api.key": "xxxxxxxxxxxxxxxxxx",
  	"oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "oauth.callback.url":"https://auth.mycoolapp.com/oauth",
    "event.notification.enabled": true,
	  "event.notification.callback.url": "https://cloud-element.com/elements/api-v2/events/page.elementKey/",
    "event.poller.refresh_interval": "15",
    "event.poller.configuration":{
      "calendars/{calendarId}/changed-events": {
        "url": "/hubs/general/calendars/{calendarId}/changed-events",
        "idField": "",
        "datesConfiguration": {
          "updatedDateField": "updated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateTimezone": "GMT"
        }
      },
      "calendars/primary/changed-events": {
        "url": "/hubs/general/calendars/primary/changed-events",
        "idField": "",
        "datesConfiguration": {
          "updatedDateField": "updated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateTimezone": "GMT"
        }
      },
      "changed-groups": {
        "url": "/hubs/general/changed-groups",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "metadata.updateTime",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "updatedDateTimezone": "GMT",
          "createdDateField": "metadata.updateTime",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateTimezone": "GMT"
        }
      },
      "changed-messages": {
        "url": "/hubs/general/changed-messages",
        "idField": "id"
      }
    }
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance with Polling"
}'
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | {{site.data.glossary.element-auth-grant-code}}  | string |
|  Name</br>`name` |   {{site.data.glossary.element-auth-name}}   | Body  |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you noted in [API Provider Setup](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you noted in [API Provider Setup](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-api-key}} This is the **{{page.callbackURL}}** that you noted in [API Provider Setup](setup.html).  |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | _Optional_. Configuration parameters for polling. | JSON object |
| Resource to Poll  | The polling event configuration of the resource that you will monitor. | JSON object |
| URL</br>`url` | The url to query for updates to the resource.  | String |
| ID Field</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
