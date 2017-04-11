---
heading: Magento 2.0
seo: Events | Magento 2.0 | Cloud Elements API Docs
title: Events
description: Enable Magento 2.0 events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 815
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
    "key": "magentov20"
  },
  "configuration": {
    "userName": "<INSERT_MAGENTO_USERNAME>",
    "password": "<INSERT_MAGENTO_PASSWORD>",
    "site": "<INSERT_MAGENTO_STORE_URL>",
    "user": "true",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "shipments": {
        "url": "/hubs/ecommerce/shipments?where=updated_at>'${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "entity_id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "credit-memos": {
        "url": "/hubs/ecommerce/credit-memos?where=updated_at>'${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "entity_id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "customers": {
        "url": "/hubs/ecommerce/customers?where=updated_at>'${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "invoices": {
        "url": "/hubs/ecommerce/invoices?where=updated_at>'${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "entity_id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "orders": {
        "url": "/hubs/ecommerce/orders?where=updated_at>'${gmtDate:yyyy-MM-dd HH:mm:ss}'",
        "idField": "entity_id",
        "datesConfiguration": {
          "updatedDateField": "updated_at",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "created_at",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "products": {
        "url": "/hubs/ecommerce/products?where=updated_at>'${gmtDate:yyyy-MM-dd HH:mm:ss}' ",
        "idField": "id",
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
