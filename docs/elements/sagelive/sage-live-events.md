---
heading: Sage Live
seo: Events | Sage Live | Cloud Elements API Docs
title: Events
description: Enable Sage Live events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 676
parent: Back to Element Guides
order: 25
---

## Events

Cloud Elements supports polling events for Sage Live.

### Polling

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
    "key": "sagelive"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "dimensions": {
        "url": "/hubs/sageaccounting/dimensions?where=LastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      },
      "ledger-accounts": {
        "url": "/hubs/sageaccounting/ledger-accounts?where=LastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      },
      "journals": {
        "url": "/hubs/sageaccounting/journals?where=LastModifiedDate >'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      },
      "tags": {
        "url": "/hubs/sageaccounting/tags?where=LastModifiedDate >'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      },
      "bill-numbers": {
        "url": "/hubs/sageaccounting/bill-numbers?where=LastModifiedDate >'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      },
      "customers": {
        "url": "/hubs/sageaccounting/customers?where=LastModifiedDate >'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      },
      "employees": {
        "url": "/hubs/sageaccounting/employees?where=LastModifiedDate >'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      },
      "vendors": {
        "url": "/hubs/sageaccounting/vendors?where=LastModifiedDate >'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "Id",
        "datesConfiguration": {
          "updatedDateField": "LastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ",
          "createdDateField": "CreatedDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSSZ"
        }
      }
    }
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```

{% include padding-all.html %}

{% include padding-all.html %}
