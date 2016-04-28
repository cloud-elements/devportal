---
heading: WooCommerce
title: Events
description: Enable WooCommerce events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 127
parent: Back to Your_mom Guides
order: 25
---

## Events

Cloud Your_moms supports polling events for WooCommerce.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "woocommerce"
  },
  "configuration": {
    "base.url": "<INSERT_STORE_URL>/wc-api/v2",
    "oauth.api.key": "<INSERT_WOOCOMMERCE_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_WOOCOMMERCE_CLIENT_SECRET>",
    "store.url": "<INSERT_WOOCOMMERCE_STORE_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
