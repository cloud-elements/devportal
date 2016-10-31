---
heading: Intacct
seo: Events | Intacct | Cloud Elements API Docs
title: Events
description: Enable Intacct events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 921
parent: Back to Element Guides
order: 30
---

## Events

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "intacct"
  },
  "configuration": {
    "intacct.user.company.id": "<INSERT_INTACCT_COMPANY_ID>",
    "intacct.user.id": "<INSERT_INTACCT_USER_ID>",
    "intacct.user.password": "<INSERT_INTACCT_USER_PASSWORD>",
    "intacct.sender.id": "<INSERT_INTACCT_SENDER_ID>",
    "intacct.sender.password": "<INSERT_INTACCT_SENDER_PASSWORD>",
    "intacct.control.id": "<INSERT_INTACCT_CONTROL_ID>",  //unique value like myTestId,
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "vendors": {
        "url": "/hubs/finance/vendors?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "vendorid",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "customers": {
        "url": "/hubs/finance/customers?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "customerid",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "sales-orders": {
        "url": "/hubs/finance/sales-orders?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "transactionid",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "ledger-accounts": {
        "url": "/hubs/finance/ledger-accounts?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "glaccountno",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "transactions": {
        "url": "/hubs/finance/transactions?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "key"
      },
      "projects": {
        "url": "/hubs/finance/projects?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "key",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "employees": {
        "url": "/hubs/finance/employees?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "employeeid",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "invoices": {
        "url": "/hubs/finance/invoices?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "key",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "purchase-orders": {
        "url": "/hubs/finance/purchase-orders?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "transactionid",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "vouchers": {
        "url": "/hubs/finance/vouchers?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "key",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "bills": {
        "url": "/hubs/finance/bills?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "key",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "journals": {
        "url": "/hubs/finance/journals?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "symbol",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whencreated",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "payments": {
        "url": "/hubs/finance/payments?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "key",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
        }
      },
      "items": {
        "url": "/hubs/finance/items?where=whenmodified>'${gmtDate:MM/dd/yyyy HH:mm:ss}'",
        "idField": "itemid",
        "datesConfiguration": {
          "updatedDateField": "whenmodified",
          "updatedDateFormat": "MM/dd/yyyy HH:mm:ss",
          "createdDateField": "whenmodified",
          "createdDateFormat": "MM/dd/yyyy HH:mm:ss"
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
