---
heading: Pipedrive
title: Events
description: Enable Pipedrive events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 167
parent: Back to Element Guides
order: 30
---

## Events

There are no extra configurations needed to enable Pipedrive events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "pipedrive"
  },
  "configuration": {
    "pipedrive.email": "<INSERT_PIPEDRIVE_EMAIL>",
    "pipedrive.password": "<INSERT_PIPEDRIVE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
