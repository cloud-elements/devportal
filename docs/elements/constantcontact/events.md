---
heading: Constant Contact
seo: Events | Constant Contact | Cloud Elements API Docs
title: Events
description: Enable Constant Contact events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3929
elementKey: constantcontact
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a><</br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up events for the following resources:

* campaigns
* contacts
* lists

{% include note.html content="You can set up polling for other resources that include <code>created</code>, <code>updated</code>, and <code>deleted</code> data through our API. Copy the configuration of one of the default resources, and replace the name with the resource that you want to poll.  " %}

## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API call](#configure-polling-through-api) .

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}


### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the basic information required to create an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. Enable events: Switch **Events Enabled** on.

    | Cloud Elements 2.0 | Earlier UI  |
    | :------------- | :------------- |
    | Switch **Events Enabled** on. </br>![event-enabled-on](/assets/img/elements/event-enabled-on.png)|  In **Event Notifications Enabled**, select **True**.</br>![event-enabled-true](/assets/img/elements/event-enabled-true.png) |

8. Add an **Event Notification Callback URL**.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select and configure the resources to poll.

    | Cloud Elements 2.0 | Earlier UI  |
    | :------------- | :------------- |
    | Select the resources to poll. </br>Optionally, click the pencil icon to further configure polling.</br>![Configure Polling](/assets/img/elements/configure-polling2.gif) | Edit the JSON to add or remove resources and optionally change the Event Poller Resources Configuration . </br>![Configure Polling](/assets/img/elements/configure-polling.png) |

9. In Cloud Elements 2.0, optionally type or select one or more tags to add to the authenticated element instance.
7. Click __Create Instance__ (Cloud Elements 2.0) or __Next__ (earlier UI).
8. If using the earlier UI, optionally add tags.
9. Note the **Token** and **ID** and save them for all future requests using the element instance.
8. Take a look at the documentation for the element resources now available to you.

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
          "campaigns":{
            "url":"/hubs/marketing/campaigns?where=modified_since='${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
            "idField":"id",
            "datesConfiguration":{
              "updatedDateField":"modified_date",
              "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
              "createdDateField":"modified_date",
              "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'"
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
    "key":"{{page.elementKey}}"
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
      "campaigns":{
        "url":"/hubs/marketing/campaigns?where=modified_since='${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField":"id",
        "datesConfiguration":{
          "updatedDateField":"modified_date",
          "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
          "createdDateField":"modified_date",
          "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'"
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

API parameters not shown in the {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth.callback.url` | The Callback URL  for the connected app you created for {{page.heading}}. This is the Callback URL that you noted at the end of the [API Provider Setup section](setup.html).  |
| `oauth.api.key` | The key obtained from registering your app with the provider. This is the **Client ID** that you noted at the end of the [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | The client secret obtained from registering your app with the provider.  This is the **Client Secret** that you noted at the end of the [API Provider Setup section](setup.html).| string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | Optional*. Configuration parameters for polling. | JSON object |
| campaigns  | The configuration of the customer resource. | JSON object |
| URL</br>`url` | The url to query for updates to the resource.  | String |
| ID Field</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| Advanced Filtering</br>`datesConfiguration` | Configuration parameters for dates in polling | JSON Object |
| Updated Date Field</br>`updatedDateField` | The field that identifies an updated object. | String |
| Updated Date Format</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| Created Date Field</br>`createdDateField` | The field that identifies an created object. | String |
| Created Date Format</br>`createdDateFormat` | The date format of the field that identifies an created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
