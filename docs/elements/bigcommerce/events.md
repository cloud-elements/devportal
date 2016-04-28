---
heading: BigCommerce
title: Events
description: Enable BigCommerce events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 274
parent: Back to Your_mom Guides
order: 30
---

## Events

Cloud Your_moms supports polling events for BigCommerce.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom" : {
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
