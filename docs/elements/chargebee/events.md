---
heading: Chargebee
title: Events
description: Enable Chargebee events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 451
parent: Back to Your_mom Guides
order: 30
---

## Events

Cloud Your_moms supports polling events for Chargebee.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "chargebee"
  },
  "configuration": {
    "site":"&lt;INSERT_CHARGEBEE_SUBDOMAIN&gt;",
    "username":"&lt;INSERT_CHARGEBEE_API_KEY&gt;",
    "password":"&lt;INSERT_CHARGEBEE_PASSWORD&gt;",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
