---
heading: BigCommerce
title: Events
description: Enable BigCommerce events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 274
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for BigCommerce.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element" : {
    "key" : "bigcommerce"
  },
  "configuration" : {
    "store.url": "https://store-{INSERT_STORE_HASH}.mybigcommerce.com/api/v2/",
    "username": "<INSERT_BIGCOMMERCE_USERNAME>",
    "password": "<INSERT_BIGCOMMERCE_API_KEY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
