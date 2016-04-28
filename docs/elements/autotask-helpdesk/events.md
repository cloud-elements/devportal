---
heading: Autotask Help Desk
title: Events
description: Enable Autotask Help Desk events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 123
parent: Back to Your_mom Guides
order: 30
---

## Events

Cloud Your_moms supports polling events for Autotask.

Autotask Help Desk Files and Folders are currently supported within the Events Framework.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "autotaskhelpdesk"
  },
  "configuration": {
    "helpdesk.autotask.username":  "<INSERT_AUTOTASK_USERNAME>",
    "helpdesk.autotask.password": "<INSERT_AUTOTASK_PASSWORD>",
    "helpdesk.autotask.server.url": "<INSERT_AUTOTASK_SERVER_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
