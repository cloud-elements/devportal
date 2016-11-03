---
heading: NetSuite Finance
seo: Events | NetSuite Finance | Cloud Elements API Docs
title: Events
description: Enable NetSuite Finance events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 155
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
    "key": "netsuitefinance"
  },
  "configuration": {
    "user.username": "<INSERT_NETSUITE_EMAIL>",
    "user.password": "<INSERT_NETSUITE_PASSWORD>",
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "invoices": {
        "url": "/hubs/finance/invoice?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "customers": {
        "url": "/hubs/finance/customers?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      },
      "employees": {
        "url": "/hubs/finance/employees?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      },
      "journal-entries": {
        "url": "/hubs/finance/journal-entries?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "payments": {
        "url": "/hubs/finance/payments?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "products": {
        "url": "/hubs/finance/products?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "vendors": {
        "url": "/hubs/finance/vendors?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      },
      "return-authorizations": {
        "url": "/hubs/finance/return-authorizations?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "credit-memos": {
        "url": "/hubs/finance/credit-memos?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "customer-refunds": {
        "url": "/hubs/finance/customer-refunds?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "vendor-payments": {
        "url": "/hubs/finance/vendor-payments?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "time-activities": {
        "url": "/hubs/finance/time-activities?where=lastModified>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
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
