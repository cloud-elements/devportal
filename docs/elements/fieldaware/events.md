---
heading: FieldAware
seo: Events | FieldAware | Cloud Elements API Docs
title: Events
description: Enable FieldAware events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1062
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for FieldAware.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "fieldawarev2"
  },
  "configuration": {
    "api_key":"<INSERT_FIELDAWARE_API_KEY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
