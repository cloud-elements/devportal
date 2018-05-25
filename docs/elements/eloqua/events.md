---
heading: Oracle Eloqua
seo: Events | Oracle Eloqua | Cloud Elements API Docs
title: Events
description: Enable Oracle Eloqua events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 27
elementKey: eloqua
parent: Back to Element Guides
order: 30
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#configure-polling-through-the-ui>Configure Polling Through the UI</a></br><a
href=#configure-polling-through-api>Configure Polling Through API</a></br><a
href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up polling for resources that include <code>created</code>, <code>updated</code>, and <code>deleted</code> data through our API.

## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-polling-through-api) .

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. To enable hash verification in the headers of event callbacks, click Show Optional Fields, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an **Event Notification Callback URL**.
4. Use the **Event poller refresh interval (mins)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
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
        "oauth.api.key": "<CLIENT_ID>",
        "oauth.api.secret": "<CLIENT_SECRET>",
        "oauth.callback.url": "<CALLBACK_URL>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "http://mycoolapp.com",
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "contacts":{
            "url":"/hubs/marketing/contacts?where=lastUpdatedAt>='${date:10 digit integer Unix time}'",
            "idField":"id",
            "datesConfiguration":{
              "updatedDateField":"C_DateModified",
              "updatedDateFormat":"10 digit integer Unix time'",
              "updatedDateTimezone":"GMT",
              "createdDateField":"C_DateCreated",
              "createdDateFormat":"10 digit integer Unix time",
              "createdDateTimezone":"GMT"
            }
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


### Example JSON with Polling

instance JSON with polling events enabled:

```json
{
  "element":{
    "key":"sageone"
  },
  "providerData":{
    "code":"1c6ff4089d58d80e86482ab7d5b97f15dd7b041d"
  },
  "configuration":{
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxx",
    "oauth.callback.url": "https://mycoolapp.com",
    "event.notification.enabled":true,
    "event.notification.callback.url":"http://mycoolapp.com",
    "event.poller.refresh_interval":"15",
    "event.poller.configuration":{
      "contacts":{
        "url":"/hubs/marketing/contacts?where=lastUpdatedAt>='${518862600}'",
        "idField":"id",
        "datesConfiguration":{
          "updatedDateField":"C_DateModified",
          "updatedDateFormat":"518862600'",
          "updatedDateTimezone":"GMT",
          "createdDateField":"C_DateCreated",
          "createdDateFormat":"518862600",
          "createdDateTimezone":"GMT"
        }
      }
    }
  },
  "tags":[
    "Test"
  ],
  "name":"API_Polling"
}
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| `code` | The authorization grant code returned from the API provider in an OAuth2 authentication workflow. | string |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth.callback.url` | The Callback URL  for the connected app you created for {{page.heading}}. This is the Callback URL that you recorded in [API Provider Setup section](setup.html).  |
| `oauth.api.key` | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | The client secret obtained from registering your app with the provider.  This is the **Client Secret** that you recorded in [API Provider Setup section](setup.html).| string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | Optional*. Configuration parameters for polling. | JSON object |
| contacts  | The polling event configuration of the contacts resource. | JSON object |
| URL</br>`url` | The url to query for updates to the resource.  | String |
| ID Field</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| Advanced Filtering</br>`datesConfiguration` | Configuration parameters for dates in polling | JSON Object |
| Updated Date Field</br>`updatedDateField` | The field that identifies an updated object. | String |
| Updated Date Format</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| Created Date Field</br>`createdDateField` | The field that identifies a created object. | String |
| Created Date Format</br>`createdDateFormat` | The date format of the field that identifies a created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
