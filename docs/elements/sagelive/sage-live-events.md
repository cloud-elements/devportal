---
heading: Sage Live
seo: Events | Sage Live | Cloud Elements API Docs
title: Events
description: Enable Sage Live events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 676
parent: Back to Element Guides
order: 25
---

## Events

Cloud Elements supports polling events for Sage Live.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "sagelive"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```

{% include padding-all.html %}

{% include padding-all.html %}
