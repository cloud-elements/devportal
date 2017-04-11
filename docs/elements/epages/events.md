---
heading: ePages
seo: Events | ePages | Cloud Elements API Docs
title: Events
description: Enable ePages events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1595
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for ePages.

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
  "element" : {
      "key" : "epages"
    },
    "configuration" : {
    "epages.access.token": "<INSERT_EPAGES_ACCESS_TOKEN>",
    "base.url": "<INSERT_EPAGES_BASE_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "customers": {
        "url": "/hubs/ecommerce/customers",
        "idField": "customerId",
        "datesConfiguration": {
          "updatedDateField": "creationDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "creationDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        }
      },
      "orders": {
        "url": "/hubs/ecommerce/orders?where=updatedFrom='${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "orderId",
        "datesConfiguration": {
          "updatedDateField": "creationDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "creationDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
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
