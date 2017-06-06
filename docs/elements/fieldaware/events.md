---
heading: FieldAware
seo: Events | FieldAware | Cloud Elements API Docs
title: Events
description: Enable FieldAware events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1062
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "fieldawarev2"
  },
  "configuration": {
    "api_key": "<INSERT_FIELDAWARE_API_KEY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "changes": {
        "url": "/hubs/fsa/changes",
        "idField": "id"
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
