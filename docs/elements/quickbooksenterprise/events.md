---
heading: QuickBooks Enterprise
seo: Events | QuickBooks Enterprise | Cloud Elements API Docs
title: Events
description: Enable QuickBooks Enterprise events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 195
elementKey: quickbooksonprem
parent: Back to Element Guides
order: 30
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up events for the following resources:

* bills
* credit-memos
* item-receipts
* invoices
* journal-entries
* payments
* sales-receipts
* purchase-orders
* sales-orders
* customers
* employees
* products
* vendors
* Other objects that include `created`, `updated`, and `deleted` data.

## Polling

You can configure polling through the UI or in the JSON body of the `/instances` API call.

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}


### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
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

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element":{
        "key":"{{page.elementKey}}"
      },
      "configuration":{
        "app.name":"<INSERT_QUICKBOOKS_ENTERPRISE_APP_NAME>",
        "host.ip":"<INSERT_QUICKBOOKS_ENTERPRISE_HOST_IP>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "http://mycoolapp.com",
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "bills": {
            "url": "/hubs/finance/bills?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "credit-memos": {
            "url": "/hubs/finance/credit-memos?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "item-receipts": {
            "url": "/hubs/finance/item-receipts?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "invoices": {
            "url": "/hubs/finance/invoices?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "journal-entries": {
            "url": "/hubs/finance/journal-entries?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "payments": {
            "url": "/hubs/finance/payments?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "sales-receipts": {
            "url": "/hubs/finance/sales-receipts?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "purchase-orders": {
            "url": "/hubs/finance/purchase-orders?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "sales-orders": {
            "url": "/hubs/finance/sales-orders?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "TxnID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "customers": {
            "url": "/hubs/finance/customers?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "ListID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "employees": {
            "url": "/hubs/finance/employees?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "ListID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "products": {
            "url": "/hubs/finance/products?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "ListID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
            }
          },
          "vendors": {
            "url": "/hubs/finance/vendors?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
            "idField": "ListID",
            "datesConfiguration": {
              "updatedDateField": "TimeModified",
              "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
              "createdDateField": "TimeCreated",
              "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
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
  "configuration":{
    "app.name":"<INSERT_QUICKBOOKS_ENTERPRISE_APP_NAME>",
    "host.ip":"<INSERT_QUICKBOOKS_ENTERPRISE_HOST_IP>",
    "event.notification.enabled":true,
    "event.notification.callback.url":"http://mycoolapp.com",
    "event.poller.refresh_interval":"15",
    "event.poller.configuration":{
      "bills": {
        "url": "/hubs/finance/bills?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "credit-memos": {
        "url": "/hubs/finance/credit-memos?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "item-receipts": {
        "url": "/hubs/finance/item-receipts?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "invoices": {
        "url": "/hubs/finance/invoices?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "journal-entries": {
        "url": "/hubs/finance/journal-entries?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "payments": {
        "url": "/hubs/finance/payments?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "sales-receipts": {
        "url": "/hubs/finance/sales-receipts?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "purchase-orders": {
        "url": "/hubs/finance/purchase-orders?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "sales-orders": {
        "url": "/hubs/finance/sales-orders?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "customers": {
        "url": "/hubs/finance/customers?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "employees": {
        "url": "/hubs/finance/employees?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "products": {
        "url": "/hubs/finance/products?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "vendors": {
        "url": "/hubs/finance/vendors?where=TimeModified >= '${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
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
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `app.name` | The {{page.heading}} app name. |  string |
| `host.ip` | The {{page.heading}} host IP. |  string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | Optional*. Configuration parameters for polling. | JSON object |
| bills  | The configuration of the bills resource. | JSON object |
| URL</br>`url` | The url to query for updates to the resource.  | String |
| ID Field</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| Advanced Filtering</br>`datesConfiguration` | Configuration parameters for dates in polling | JSON Object |
| Updated Date Field</br>`updatedDateField` | The field that identifies an updated object. | String |
| Updated Date Format</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| Created Date Field</br>`createdDateField` | The field that identifies a created object. | String |
| Created Date Format</br>`createdDateFormat` | The date format of the field that identifies a created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
