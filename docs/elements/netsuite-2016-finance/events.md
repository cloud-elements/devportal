---
heading: NetSuite 2016 Finance
seo: Events | NetSuite 2016 Finance | Cloud Elements API Docs
title: Events
description: Enable NetSuite 2016 Finance events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 988
elementKey: netsuitefinancev2
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the
endpoint. If you would like to see more information on our Events
framework, please see the [Event Management
Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up events for the following resources:

* Customers
* Invoices
* Journal Entries
* Payments
* Products
* Purchase Orders
* Time Activities
* Vendor Payments
* Vendors
* Other objects that include `created`, `updated`, and `deleted` data.

## Polling

You can configure polling through the UI or in the JSON body of the
`/instances` API call.

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC." %}

### Configure Polling Through the UI

For more information about each field described here, see
[Parameters](#parameters).

To authenticate an element instance with polling, sign in to Cloud
Elements, and then create a new element instance as described in
[authentication](authenticate.html). During configuration of the new
instance:

1. Switch **Events Enabled** on.

1. Add an Event Notification Callback URL.

1. Use the __Event poller refresh interval (mins)__ slider or enter a
number in minutes to specify how often Cloud Elements should poll for
changes.

1. Select and configure the resources to poll.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Select the resources to poll. </br>Optionally, click the pencil icon to further configure polling. | Edit the JSON to add or remove resources and optionally change the `datesConfiguration`.  |

Once you're done with event configuration, you can complete the steps to
finish creating the instance, which will have events enabled.

### Configure Polling Through API

To authenticate an element instance with polling, sign in to Cloud
Elements, and then create a new element instance as described in
[authentication](authenticate.html). When using the API, there are
additional parameters used to enable and configure polling events on the
new instance.

### Example JSON with Polling

This example JSON shows the parameters that can be sent to the
`/instances` API to enable and configure polling. The example shows
configuration of polling for "Customers" objects, but you can set
whichever types of objects you wish.

```json
{
  "element":{
    "key": "netsuitefinancev2"
  },
  "configuration": {
    "other_parameters...": "...",
    "event.notification.enabled": true,
    "event.notification.callback.url": "http://mycoolapp.com",
    "event.poller.refresh_interval": "15",
    "event.poller.configuration": {
      "customers": {
        "url": "/hubs/finance/customers?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      }
    }
  },
  "tags": [
    "Accounting"
  ],
  "name": "NetSuite Polling"
}
```

## Parameters

{% include note.html content="Non-event related parameters are described in <a href=authenticate.html>Authenticate</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| `event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| `event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| `event.poller.configuration`  | *Optional*. Configuration parameters for polling. | JSON object |
| `<object_type>`  | One or more JSON objects that correspond to configuration for that type. `object_type` can be `customers`, `invoices`, etc. | JSON object |
| `url` | The url to query for updates to the resource.  | String |
| `idField` | The field in the resource that is used to uniquely identify it.  | String |
| `datesConfiguration` | Configuration parameters for dates in polling | JSON Object. |
| `updatedDateField` | The field that identifies an updated object. | String |
| `updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| `createdDateField` | The field that identifies an created object. | String |
| `createdDateFormat` | The date format of the field that identifies an created object.  | String |

