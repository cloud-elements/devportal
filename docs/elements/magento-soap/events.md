---
heading: Magento SOAP V1.9
seo: Events | Magento SOAP V1.9 | Cloud Elements API Docs
title: Events
description: Enable Magento SOAP V1.9 events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 526
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
    "key": "magentosoapv19"
  },
  "configuration": {
    "userName": "<INSERT_MAGENTO_USERNAME>",
    "password": "<INSERT_MAGENTO_PASSWORD>",
    "store.url": "<INSERT_MAGENTO_STORE_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "shipments": {
        "url": "/hubs/ecommerce/shipments?where=updated_at>='${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "increment_id",
        "datesConfiguration": {
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "customers": {
        "url": "/hubs/ecommerce/customers?where=updated_at>='${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "customer_id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "orders": {
        "url": "/hubs/ecommerce/orders?where=updated_at>='${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "increment_id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "invoices": {
        "url": "/hubs/ecommerce/invoices?where=updated_at>='${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "increment_id",
        "datesConfiguration": {
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "products": {
        "url": "/hubs/ecommerce/products?where=updated_at>='${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "product_id"
      },
      "credit-memos": {
        "url": "/hubs/ecommerce/credit-memos?where=updated_at>='${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "increment_id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
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
