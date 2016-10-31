---
heading: NetSuite 2016 Finance
seo: Events | NetSuite 2016 Finance | Cloud Elements API Docs
title: Events
description: Enable NetSuite 2016 Finance events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 988
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

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

#### Basic Authentication NetSuite 2016

```JSON
{
  "element": {
    "key": "netsuitefinancev2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "user.username": "<INSERT_NETSUITE_EMAIL>",
    "user.password": "<INSERT_NETSUITE_PASSWORD>",
    "netsuite.sso.roleId": "3",
    "netsuite.appId": "<INSERT_NETSUITE_APP_ID>",
    "authentication.type": "Basic",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
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
      },
      "employees": {
        "url": "/hubs/finance/employees?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      },
      "estimates": {
        "url": "/hubs/finance/estimates?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "invoices": {
        "url": "/hubs/finance/invoices?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "journal-entries": {
        "url": "/hubs/finance/journal-entries?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/payments?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/products?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "purchase-orders": {
        "url": "/hubs/finance/purchase-orders?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/time-activities?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "tranDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "vendor-payments": {
        "url": "/hubs/finance/vendor-payments?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/vendors?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

#### Token Based Authentication

```JSON
{
  "element": {
    "key": "netsuitefinancev2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "netsuite.sso.roleId": "3",
    "authentication.type": "TokenBasedAuthentication",
    "consumer_key": "<INSERT_NETSUITE_CONSUMER_KEY>",
    "consumer_secret": "<INSERT_NETSUITE_CONSUMER_SECRET>",
    "token_id": "<INSERT_NETSUITE_ACCESS_TOKEN_ID>",
    "token_secret": "<INSERT_NETSUITE_ACCESS_TOKEN_SECRET>",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
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
      },
      "employees": {
        "url": "/hubs/finance/employees?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      },
      "estimates": {
        "url": "/hubs/finance/estimates?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "invoices": {
        "url": "/hubs/finance/invoices?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "journal-entries": {
        "url": "/hubs/finance/journal-entries?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/payments?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/products?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "purchase-orders": {
        "url": "/hubs/finance/purchase-orders?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/time-activities?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "tranDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "vendor-payments": {
        "url": "/hubs/finance/vendor-payments?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
        "url": "/hubs/finance/vendors?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
