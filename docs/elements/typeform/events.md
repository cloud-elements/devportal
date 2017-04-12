---
heading: Typeform
seo: Events | Typeform | Cloud Elements API Docs
title: Events
description: Enable Typeform events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 339
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "typeform"
  },
  "configuration": {
    "api.key": "<INSERT_TYPEFORM_API_KEY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
