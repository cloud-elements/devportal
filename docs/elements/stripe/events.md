---
heading: Cloud Elements for Stripe
seo: Events | Cloud Elements for Stripe | Cloud Elements API Docs
title: Events
description: Enable Cloud Elements for Stripe events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 475
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

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
    "key": "stripe"
  },
  "configuration": {
    "username": "<INSERT_STRIPE_API_KEY>",
    "password": "<INSERT_STRIPE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "events": {
        "url": "/hubs/payment/events?where=created >'${epoch:s}'",
        "idField": "id"
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
