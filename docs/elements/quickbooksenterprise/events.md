---
heading: QuickBooks Enterprise
seo: Events | QuickBooks Enterprise | Cloud Elements API Docs
title: Events
description: Enable QuickBooks Enterprise events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 195
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "quickbooksonprem"
  },
  "configuration": {
    "app.name": "<INSERT_QUICKBOOKS_ENTERPRISE_APP_NAME>",
    "host.ip": "<INSERT_QUICKBOOKS_ENTERPRISE_HOST_IP>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "bills": {
        "url": "/hubs/finance/bills?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "credit-memos": {
        "url": "/hubs/finance/credit-memos?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "item-receipts": {
        "url": "/hubs/finance/item-receipts?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "invoices": {
        "url": "/hubs/finance/invoices?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "journal-entries": {
        "url": "/hubs/finance/journal-entries?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "payments": {
        "url": "/hubs/finance/payments?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "sales-receipts": {
        "url": "/hubs/finance/sales-receipts?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "purchase-orders": {
        "url": "/hubs/finance/purchase-orders?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "sales-orders": {
        "url": "/hubs/finance/sales-orders?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "TxnID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "customers": {
        "url": "/hubs/finance/customers?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "employees": {
        "url": "/hubs/finance/employees?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "products": {
        "url": "/hubs/finance/products?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "vendors": {
        "url": "/hubs/finance/vendors?where=TimeModified >= '#{'$'}{gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "ListID",
        "datesConfiguration": {
          "updatedDateField": "TimeModified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "TimeCreated",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
