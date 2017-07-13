---
heading: NetSuite 2016 ERP
seo: Events | NetSuite 2016 ERP | Cloud Elements API Docs
title: Events
description: Enable NetSuite 2016 ERP events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 987
elementKey: netsuiteerpv2
parent: Back to Element Guides
order: 30
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling-events-via-cloud-elements-platform-ui>Polling via Platform</a></br><a
href=#polling-events-via-an-api-call>Polling via API call</a></br><a  
href=#parameters>Parameters</a>" type="info" %}
## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}. Polling can be set up for one specific resource (i.e. `accounts`) or for multiple resources.


#### Polling Events via Cloud Elements Platform (UI)

If you are using Cloud Elements' platform, by default, MS Dynamics polling is setup to gather the following resources:

`customers`, `employees`, `estimates`, `invoices`, `journal-entries`, `payments`, `products`, `purchase-orders`, `time-activities`, `vendor-payments`, and `vendors`.

In order to enable polling, you need to set `Event Notifications Enabled: True` and set the `Event poller refresh interval:` to how often you would like to have the polling job (minutes) performed.


#### Polling Events via an API Call

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

**For more information**, please visit our [Configure Polling Through API](#configure-polling-through-api) page.

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

**NOTE:** The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

Instance JSON with polling events enabled:

## Parameters
Basic Authentication NetSuite 2016

<span style="color:red">Alternatively, if there are multiple supported resources, you can go with something like this:</span>

You can set up events for the following resources:

- Customers
- Employees
- Estimates
- Invoices
- Journal-entries
- Payments
- Products
- Purchase-orders
- Time-activities
- Vendor-payments
- Vendors

## Polling

You can configure polling through the UI or in the JSON body of the `/instances` API call.

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC. " %}

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Sign in to Cloud Elements, and then search for the element in our Elements Catalog.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    |  ![Search](../img/Element-Search2.png)  |  ![Search](../img/Element-Search.png)  |

3. Create an element instance.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Hover over the element card, and then click __Create Instance__.</br> ![Create Instance](../img/Create-Instance.gif)  | Click __Add Instance__.</br> ![Search](../img/Add-Instance.png)  |

5. Enter a name for the element instance.
7. Switch **Events Enabled** on.
8. Add an Event Notification Callback URL.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select and configure the resources to poll.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Select the resources to poll. </br>Optionally, click the pencil icon to further configure polling. | Edit the JSON to add or remove resources and optionally change the `datesConfiguration`.  |

7. Click __Create Instance__ (latest UI) or __Next__ (earlier UI).
8. Optionally add tags in the earlier UI:
     1. On the Tag It page, enter any tags that might help further define the instance.
      * To add more than one tag, click __Add__ after each tag.
      ![Add tag](../img/Add-Tag.png)
     1. Click __Done__.
9. Note the **Token** and **ID** and save them for all future requests using the element instance.
8. Take a look at the documentation for the element resources now available to you.
### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance. " %}

To authenticate an element instance with polling:

1. Get an authorization grant code by completing the steps in [Getting a redirect URL](authenticate.html#getting-a-redirect-url) and [Authenticating users and receiving the authorization grant code](authenticate.html#authenticating-users-and-receiving-the-authorization-grant-code).
2. Construct a JSON body as shown below (see [Parameters](#parameters)):

  ```json
   {
  "element": {
   "key": "netsuiteerpv2"
  },
  "configuration": {
    "user.username":"<INSERT_NETSUITE_USERNAME>",
    "user.password":"<INSERT_NETSUITE_PASSWORD",
    "netsuite.accountId":"<INSERT_NETSUITE_ACCOUNT_ID",
    "netsuite.sandbox": "false",
    "netsuite.sso.roleId": "3",
    "authentication.type": "Basic",
    "netsuite.appId":"<INSERT_NETSUITE_APP_ID>"

  },
  "tags": [
   "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>",
         "event.notification.enabled": true,
       "event.notification.callback.url": "http://mycoolapp.com",
       "event.poller.refresh_interval": "<minutes>",
       "event.poller.configuration":{
         "customers":{
           "url":"/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' and attributes='created_at,updated_at",
           "idField":"id",
           "datesConfiguration":{
             "updatedDateField":"updated_at",
             "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
             "updatedDateTimezone":"GMT",
             "createdDateField":"created_at",
             "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
             "createdDateTimezone":"GMT"
           }
         }
       }
     }
  ```

3. Call the following, including the JSON body you constructed in the previous step:

  ```
   POST /instances
  ```

  {% include note.html content="Make sure that you include the User and Organization keys in the header. See [the Overview](index.html#authenticating-with-cloud-elements) for details. " %}

4. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

### Example JSON with Polling

instance JSON with polling events enabled:

```json
{
"element": {
"key": "netsuiteerpv2"
},
"configuration": {
 "user.username":"<INSERT_NETSUITE_USERNAME>",
 "user.password":"<INSERT_NETSUITE_PASSWORD",
 "netsuite.accountId":"<INSERT_NETSUITE_ACCOUNT_ID",
 "netsuite.sandbox": "false",
 "netsuite.sso.roleId": "3",
 "authentication.type": "Basic",
 "netsuite.appId":"<INSERT_NETSUITE_APP_ID>"

},
      "event.notification.enabled": true,
    "event.notification.callback.url": "http://mycoolapp.com",
    "event.poller.refresh_interval": "<minutes>",
    "event.poller.configuration":{
      "customers":{
        "url":"/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' and attributes='created_at,updated_at",
        "idField":"id",
        "datesConfiguration":{
          "updatedDateField":"updated_at",
          "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
          "updatedDateTimezone":"GMT",
          "createdDateField":"created_at",
          "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
          "createdDateTimezone":"GMT"
        }
      }
    },
    "tags": [
    "<INSERT_TAGS>"
    ],
    "name": "<INSERT_INSTANCE_NAME>",
}
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

Parameter                                                                | Description                                                                                    | Data Type
:----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- | :----------
'key'                                                                    | The element key.<br>
{{page.elementKey}}                                                       | string
Name<br>
`name`                                                          | The name for the element instance created during authentication.                               | Body
Events Enabled<br>
`event.notification.enabled`                          | _Optional_. Identifies that events are enabled for the element instance.<br>
Default: `false`. | boolean
Event Notification Callback URL<br>
`event.notification.callback.url`    | The URL where you want Cloud Elements to send the events.                                      | string
Event poller refresh interval (mins)<br>
`event.poller.refresh_interval` | A number in minutes to identify how often the poller should check for changes.                 | number
Configure Polling<br>
`event.poller.configuration`                       | Optional*. Configuration parameters for polling.                                               | JSON object
URL<br>
`url`                                                            | The url to query for updates to the resource.                                                  | String
ID Field<br>
`idField`                                                   | The field in the resource that is used to uniquely identify it.                                | String
Advanced Filtering<br>
`datesConfiguration`                              | Configuration parameters for dates in polling                                                  | JSON Object
Updated Date Field<br>
`updatedDateField`                                | The field that identifies an updated object.                                                   | String
Updated Date Format<br>
`updatedDateFormat`                              | The date format of the field that identifies an updated object.                                | String
Created Date Field<br>
`createdDateField`                                | The field that identifies an created object.                                                   | String
Created Date Format<br>
`createdDateFormat`                              | The date format of the field that identifies an created object.                                | String
tags                                                                     | _Optional_. User-defined tags to further identify the instance.                                | string


## Webhooks

Webhooks are not supported for this endpoint
