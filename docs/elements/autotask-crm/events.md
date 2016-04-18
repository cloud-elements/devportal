---
heading: Autotask CRM
title: Events
description: Enable Autotask CRM events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 50
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Autotask.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "autotaskcrm"
  },
  "configuration": {
    "crm.autotask.username":  "<INSERT_AUTOTASK_USERNAME>",
    "crm.autotask.password": "<INSERT_AUTOTASK_PASSWORD>",
    "crm.autotask.server.url": "<INSERT_AUTOTASK_SERVER_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
