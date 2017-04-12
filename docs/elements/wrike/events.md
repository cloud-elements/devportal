---
heading: Wrike
seo: Events | Wrike | Cloud Elements API Docs
title: Events
description: Enable Wrike events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 127
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable events, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with webhook events enabled:

```json
{
  "element": {
    "key": "wrike"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_WRIKE_API_KEY>",
    "oauth.api.secret": "<INSERT_WRIKE_API_SECRET>",
    "oauth.callback.url": "https://www.my_cool_app.com",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
