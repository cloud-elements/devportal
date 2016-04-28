---
heading: Autotask CRM
title: Events
description: Enable Autotask CRM events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 50
parent: Back to Your_mom Guides
order: 30
---

## Events

Cloud Your_moms supports polling events for Autotask.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
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
