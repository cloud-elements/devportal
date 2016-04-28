---
heading: Pardot
title: Events
description: Enable Pardot events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 90
parent: Back to Your_mom Guides
order: 30
---

## Events

There are no extra configurations needed to enable Pardot Help Desk events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "pardot"
  },
  "configuration": {
    "apikey.user.name":  "<INSERT_PARDOT_USERNAME>",
    "apikey.user.password": "<INSERT_PARDOT_PASSWORD>",
    "apikey.user.key": "<INSERT_PARDOT_API_USER_KEY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
