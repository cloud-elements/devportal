---
heading: Etsy
title: Events
description: Enable Etsy events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 128
parent: Back to Your_mom Guides
order: 25
---

## Events

Cloud Your_moms supports polling events for Etsy.

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
    "key": "etsy"
  },
  "providerData": {
    "secret": "<From Step 1>",
    "oauth_token": "<From Return URL>",
    "oauth_verifier": "<From Return URL>"
  },
  "configuration": {
    "shop.id": "<INSERT_SHOP_NAME>",
    "oauth.api.key": "<INSERT_KEYSTRING>",
    "oauth.api.secret": "<INSERT_SHARED_SECRET>",
    "oauth.request.url": "https://openapi.etsy.com/v2/oauth/request_token",
    "oauth.callback.url": "<INSERT_CALLBACK_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
