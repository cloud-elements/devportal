---
heading: Infusionsoft eCommerce
title: Events
description: Enable Infusionsoft eCommerce events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 321
parent: Back to Your_mom Guides
order: 30
---

## Events

There are no extra configurations needed to enable Infusionsoft eCommerce events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

### eCommerce

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "infusionsoftecommerce"
  },
  "providerData": {
    "code": "Code on the Return URL"
  },
  "configuration": {
    "oauth.callback.url": "https://www.yourcallbackurl.com",
    "oauth.api.key": "<INSERT_INFUSIONSOFT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_INFUSIONSOFT_CLIENT_SECRET>",
    "document.tagging": false,
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
