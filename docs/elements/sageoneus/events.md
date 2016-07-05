---
heading: Sage One US
seo: Events | Sage One US | Cloud Elements API Docs
title: Events
description: Enable Sage One US events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 653
parent: Back to Element Guides
order: 25
---

## Events

Cloud Elements supports polling events for Sage One US.

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
    "key": "sageoneus"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SAGEONE_US_CLIENT_ID>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
