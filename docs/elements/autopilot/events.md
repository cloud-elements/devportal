---
heading: Autopilot
seo: Events | Autopilot | Cloud Elements API Docs
title: Events
description: Enable Autopilot events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 528
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports webhook events for Autopilot.

In order to enable webhooks, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with webhook events enabled:

```json
{
  "element": {
    "key": "autopilot"
  },
  "configuration": {
    "api.key":  "<INSERT_AUTOPILOT_API_KEY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
