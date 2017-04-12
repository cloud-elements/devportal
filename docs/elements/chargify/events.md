---
heading: Chargify
seo: Events | Chargify | Cloud Elements API Docs
title: Events
description: Enable Chargify events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 525
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
    "key": "chargify"
  },
  "configuration": {
    "username": "<INSERT_CHARGIFY_API_KEY>",
    "password": "<INSERT_CHARGIFY_PASSWORD>",
    "site": "<INSERT_CHARGIFY_SUBDOMAIN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "customers": {
        "url": "/hubs/payment/customers?where=direction = 'desc'",
        "idField": "customer.id",
        "datesConfiguration": {
          "updatedDateField": "customer.updated_at",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "customer.created_at",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "products": {
        "url": "/hubs/payment/products?where=direction = 'desc'",
        "idField": "product.id",
        "datesConfiguration": {
          "updatedDateField": "product.updated_at",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "product.created_at",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "subscriptions": {
        "url": "/hubs/payment/subscriptions?where=direction = 'desc'",
        "idField": "subscription.id",
        "datesConfiguration": {
          "updatedDateField": "subscription.updated_at",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "subscription.created_at",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
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
