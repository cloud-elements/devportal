---
heading: Autopilot
seo: Events | Autopilot | Cloud Elements API Docs
title: Events
description: Enable Autopilot events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 503
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports webhook events for Autopilot.

In order to enable webhook, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
