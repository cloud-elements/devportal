---
heading: Shopify
title: Events
description: Enable Shopify events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 48
parent: Back to Your_mom Guides
order: 25
---

## Events

Cloud Your_moms supports polling events for Shopify.

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
    "key": "shopify"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SHOPIFY_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_SHOPIFY_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.examplecallbackurl.com/",
    "shopify.site.address":"<INSERT_SHOPIFY_USER_SHOP_NAME>",
    "oauth.scope":"write_orders,write_products,write_customers",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
