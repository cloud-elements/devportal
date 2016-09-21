---
heading: Chargify
seo: Events | Chargify | Cloud Elements API Docs
title: Events
description: Enable Chargify events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 525
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Chargify.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "chargify"
  },
  "configuration": {
    "username":  "<INSERT_CHARGIFY_API_KEY>",
    "password": "<INSERT_CHARGIFY_PASSWORD>",
    "site": "<INSERT_CHARGIFY_SUBDOMAIN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
