---
heading: Eloqua
seo: Events | Eloqua | Cloud Elements API Docs
title: Events
description: Enable Eloqua events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 27
parent: Back to Element Guides
order: 30
---

## Events

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "eloqua"
  },
  "providerData": {
    "code": "<INSERT_CODE_ON_RETURN_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<INSERT_ELOQUA_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_ELOQUA_CLIENT_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<add your tag>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
