---
heading: Lithium Response
seo: Events | Lithium Response | Cloud Elements API Docs
title: Events
description: Enable Lithium Response events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 814
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Lithium Response.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "lithiumlsw"
  },
  "configuration": {
    "username": "<INSERT_LITHIUM_USERNAME>",
    "password": "<INSERT_LITHIUM_PASSWORD>",
    "baseUrl": "<INSERT_LITHIUM_RESPONSE_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
