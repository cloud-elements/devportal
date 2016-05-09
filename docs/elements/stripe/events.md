---
heading: Stripe
title: Events
description: Enable Stripe events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 475
parent: Back to Element Guides
order: 30
---

## Events

There are no extra configurations needed to enable Stripe events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "stripe"
  },
  "configuration": {
    "username":  "<INSERT_STRIPE_API_KEY>",
    "password": "<INSERT_STRIPE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
