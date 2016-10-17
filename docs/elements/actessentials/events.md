---
heading: Act Essentials
seo: Events | Act Essentials | Cloud Elements API Docs
title: Events
description: Enable Act Essentials events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1160
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Act Essentials.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element" : {
      "key" : "actessentials"
    },
    "configuration" : {
      "username": "<INSERT_ACT_ESSENTIALS_API_KEY>",
      "password": "<INSERT_ACT_ESSENTIALS_DEVELOPER_KEY>",
      "event.notification.enabled": "true",
      "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
