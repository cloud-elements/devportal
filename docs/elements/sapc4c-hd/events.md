---
heading: SAP Hybris Cloud for Customer Helpdesk
seo: Events | SAP Hybris Cloud for Customer Helpdesk | Cloud Elements API Docs
title: Events
description: Enable SAP Anywhere events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3522
parent: Back to Element Guides
order: 25
---

# Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for the following {{page.heading}} resources:

* accounts
* contacts
* incidents
* incidents-statuses

{% include callout.html content="<strong>On this page</strong></br><a href=#configure-polling-through-the-ui>Configure Polling Through the UI</a></br><a href=#configure-polling-through-api>Configure Polling Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-curl>Example cURL</br><a href=#example-response>Example Response</a></a>" type="info" %}

## Configure Polling Through the UI

Use {{site.console}} to authenticate with SAP Hybris Cloud for Customer and create an element instance with polling enabled.

To authenticate an element instance with polling:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. Complete the required parameters in the Configuration section: **Subdomain**, **Username**, and **Password**. See [Parameters](#parameters) for descriptions.
7. Switch **Events Enabled** on.
8. Add an Event Notification Callback URL.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)
7. Click **Create Instance**.
8. Optionally add tags in the earlier UI

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Configure Polling Through API

Use the `/instances` endpoint to authenticate with SAP Hybris Cloud for Customer and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
        "element": {
          "key": "sapc4chd"
        },
        "configuration": {
          "subdomain": "<domain>.crm.ondemand.com",
          "username": "<YOUR_SAP_Hybris Cloud for Customer_USERNAME>",
          "password": "<YOUR_SAP_Hybris Cloud for Customer_PASSWORD>",
          "event.notification.enabled": true,
          "event.notification.callback.url": "http://mycoolapp.com",
          "event.poller.refresh_interval": "15",
          "accounts": {
            "url": "/hubs/helpdesk/accounts?where=ChangedOn>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}",
           "idField": "ObjectID",
           "datesConfiguration": {
             "updatedDateField": "ChangedOn",
             "updatedDateFormat": "milliseconds",
             "createdDateField": "CreatedOn",
             "createdDateFormat": "milliseconds"
           },
            "contacts": {
              "url": "/hubs/helpdesk/contacts?where=ChangedOn>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
              "idField": "ObjectID",
              "datesConfiguration": {
                "updatedDateField": "ChangedOn",
                "updatedDateFormat": "milliseconds",
                "createdDateField": "CreatedOn",
                "createdDateFormat": "milliseconds"
              }
            },
            "incidents": {
              "url": "/hubs/helpdesk/incidents?where=ChangedOn>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}",
              "idField": "ObjectID",
              "datesConfiguration": {
                "updatedDateField": "ChangedOn",
                "updatedDateFormat": "milliseconds",
                "createdDateField": "CreatedOn",
                "createdDateFormat": "milliseconds"
              }
            },
            "incidents-statuses": {
              "url": "/hubs/helpdesk/incidents-statuses?where=ChangedOn>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}",
              "idField": "ObjectID",
              "datesConfiguration": {
                "updatedDateField": "ChangedOn",
                "updatedDateFormat": "milliseconds",
                "createdDateField": "CreatedOn",
                "createdDateFormat": "milliseconds"
              }
            }
          },
        },
        "tags": [
          "ElementDocs"
          ],
        "name": "<AUTHENTICATED_INSTANCE_NAME>"
    }
    ```
1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>sapc4chd  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| Subdomain </br>`subdomain`| The url of your {{page.heading}} site. Replace <domain> in the default url with your own information.    |   |string |
| Username | Your user name for {{page.heading}}. | String |
| Password | Your password for {{page.heading}}. | String |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling </br>`"event.poller.configuration"` | Resource to poll along with its configuration. | JSON Object |
| accounts</br>`"event.poller.configuration": "{\"accounts\"...}"`|*Optional*</br>The {{page.heading}} `accounts` resource available for polling. |JSON object |
| contacts</br>`"event.poller.configuration": "{\"contacts\"...}"`  | *Optional*</br>The {{page.heading}} `contacts` resource available for polling.  |JSON object |
| leads</br>`"event.poller.configuration": "{\"leads\"...}"`  | *Optional*</br>The {{page.heading}} `incidents` resource available for polling.  |JSON object |
| opportunities</br>`"event.poller.configuration": "{\"opportunities\"...}"`  | *Optional*</br>The {{page.heading}} `incidents-statuses` resource available for polling.  |JSON object |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example cURL

```
curl -X POST \
  https://staging.cloud-elements.com/elements/api-v2/instances \
  -H 'Authorization: User <INSERT>, Organization <INSERT>'  \
  -H 'content-type: application/json' \
  -d '{
  "element": {
	"key": "sapc4chd"
  },
  "configuration": {
    "subdomain": "<domain>.crm.ondemand.com",
    "username": "<USERNAME>",
    "password": "<YOUR_SAP_Hybris Cloud for Customer_PASSWORD>",
          "event.notification.enabled": true,
          "event.notification.callback.url": "http://mycoolapp.com",
          "event.poller.refresh_interval": "15",
          "incidents": {
            "url": "/hubs/helpdesk/incidents?where=ChangedOn>='\''${date:yyyy-MM-dd'\''T'\''HH:mm:ss'\''Z'\''}",
           "idField": "ObjectID",
           "datesConfiguration": {
             "updatedDateField": "ChangedOn",
             "updatedDateFormat": "milliseconds",
             "createdDateField": "CreatedOn",
             "createdDateFormat": "milliseconds"
           }
}
  },
  "tags": [
	"ElementDocs"
  ],
  "name": "<AUTHENTICATED_INSTANCE_NAME>"
}
'
```

## Example Response

```json
{
  "id": 50753,
  "name": "SAPHybris Cloud for CustomerAPI1",
  "createdDate": "2017-05-19T14:00:59Z",
  "token": "4RFxtlivv2BW9oAoO64wCnLvwwps4SPCf6LyCUq8Ihg=",
  "element": {
    "id": 5354,
    "name": "SAP Hybris Cloud for Customer Helpdesk",
    "key": "sapc4chd",
    "description": "Add a SAP Cloud for Customer (Hybris Cloud for Customer) Instance to connect your existing SAP Cloud for Customer (Hybris Cloud for Customer) account to the Helpdesk Hub, allowing you to manage accounts, contacts, incidents, etc. across multiple Helpdesk Elements. You will need your SAP Cloud for Customer (Hybris Cloud for Customer) account information to add an instance.",
    "image": "elements/provider_sapc4c.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "extendable": false,
    "beta": false,
    "authentication": {
      "type": "basic"
    },
    "extended": false,
    "hub": "Helpdesk",
    "protocolType": "odata",
    "parameters": [
      {
        "id": 3990,
        "createdDate": "2017-05-17T09:37:05Z",
        "name": "subdomain",
        "vendorName": "siteUrl",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "elementId": 5353,
        "required": false
      }
    ],
    "private": false
  },
  "elementId": 5353,
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {  },
  "eventsEnabled": true,
  "eventsNotificationCallbackUrl": "http://mycoolapp.com",
  "subscriptionId": 1157990,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {  }
}
```
