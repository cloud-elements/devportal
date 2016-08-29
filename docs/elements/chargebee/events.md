---
heading: Chargebee
seo: Events | Chargebee | Cloud Elements API Docs
title: Events
description: Enable Chargebee events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 451
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Chargebee.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "chargebee"
  },
  "configuration": {
    "site":"<INSERT_CHARGEBEE_SUBDOMAIN>",
    "username":"<INSERT_CHARGEBEE_API_KEY>",
    "password":"<INSERT_CHARGEBEE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
