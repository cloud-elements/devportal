---
heading: Expensify
seo: Events | Expensify | Cloud Elements API Docs
title: Events
description: Enable Expensify events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 675
parent: Back to Element Guides
order: 30
---

## Events

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "expensify"
  },
  "configuration": {
    "partner.user.id":  "<INSERT_EXPENSIFY_EMAIL>",
    "partner.user.secret": "<INSERT_EXPENSIFY_PARTNER_USER_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
