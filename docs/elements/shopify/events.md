---
heading: Shopify
seo: Events | Shopify | Cloud Elements API Docs
title: Events
description: Enable Shopify events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 48
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable events, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
