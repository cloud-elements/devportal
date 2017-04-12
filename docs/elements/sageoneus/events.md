---
heading: Sage One US
seo: Events | Sage One US | Cloud Elements API Docs
title: Events
description: Enable Sage One US events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 653
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for Sage One US.

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
    "key": "sageoneus"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SAGEONE_US_CLIENT_ID>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "expenses": {
        "url": "/hubs/sageaccounting/expenses?where=updated_or_created_since='${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "UTC",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateTimezone": "UTC"
        }
      },
      "contacts": {
        "url": "/hubs/sageaccounting/contacts?where=updated_or_created_since='${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}' ",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "UTC",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateTimezone": "UTC"
        }
      },
      "sales-invoices": {
        "url": "/hubs/sageaccounting/sales-invoices?where=updated_or_created_since='${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "UTC",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateTimezone": "UTC"
        }
      },
      "products": {
        "url": "/hubs/sageaccounting/products?where=updated_or_created_since='${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id"
      },
      "purchase-invoices": {
        "url": "/hubs/sageaccounting/purchase-invoices?where=updated_or_created_since='${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id"
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
