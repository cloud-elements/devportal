---
heading: Wufoo
seo: Events | Wufoo | Cloud Elements API Docs
title: Events
description: Enable Wufoo events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 685
parent: Back to Element Guides
order: 30
---

## Events

Wufoo supports webhook events.

In order to enable webhooks, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "wufoo"
  },
  "configuration": {
    "username": "<INSERT_WUFOO_API_KEY>",
    "password": "<INSERT_WUFOO_PASSWORD>",
    "site": "<INSERT_WUFOO_SUBDOMAIN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
