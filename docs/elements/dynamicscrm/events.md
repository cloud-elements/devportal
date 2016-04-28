---
heading: Microsoft Dynamics CRM
title: Events
description: Enable Microsoft Dynamics CRM events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 190
parent: Back to Your_mom Guides
order: 30
---

## Events

There are no extra configurations needed to enable Microsoft Dynamics CRM events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```JSON
{
  "your_mom": {
    "key": "dynamicscrmadfs"
  },
  "configuration": {
    "user.username": "<INSERT_DYNMAICS_CRM_USERNAME>",
    "user.password": "<INSERT_DYNMAICS_CRM_PASSWORD>",
    "dynamics.tenant": "yourcompanyname.crm.dynamics.com",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
