---
heading: PayPal
seo: Events | PayPal | Cloud Elements API Docs
title: Events
description: Enable PayPal events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 90
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable __webhooks__, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "paypalv2"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_PAYPAL_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_PAYPAL_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "paypalv2.sandbox": false // default - if you wish to instantiate a sandbox account - then change to true,
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_EVENT_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
