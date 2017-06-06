---
heading: Etsy
seo: Events | Etsy | Cloud Elements API Docs
title: Events
description: Enable Etsy events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 128
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for Etsy.

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
  "element": {
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
