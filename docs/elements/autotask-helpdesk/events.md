---
heading: Autotask Help Desk
seo: Events | Autotask Help Desk | Cloud Elements API Docs
title: Events
description: Enable Autotask Help Desk events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 123
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Autotask.

Autotask Help Desk Files and Folders are currently supported within the Events Framework.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
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
