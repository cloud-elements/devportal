---
heading: Twilio SMS V2
seo: Events | Twilio SMS V2 | Cloud Elements API Docs
title: Events
description: Enable Twilio SMS V2 events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 503
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
    "key": "twiliov2"
  },
  "configuration": {
    "username":  "<INSERT_TWILIO_ACCOUNT_SID>",
    "password": "<INSERT_TWILIO_AUTHTOKEN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
