---
heading: WooCommerce
seo: Events | WooCommerce | Cloud Elements API Docs
title: Events
description: Enable WooCommerce events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 127
parent: Back to Element Guides
order: 25
---

## Events

Cloud Elements supports polling events for WooCommerce.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
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
