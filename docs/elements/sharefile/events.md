---
heading: ShareFile
title: Events
description: Enable ShareFile events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 450
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
    "key": "shareFile"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SHAREFILE_UNIQUE_IDENTIFIER>",
    "oauth.api.secret": "<INSERT_SHAREFILE_CLIENT_SECRET>",
    "sharefile.callback.url": "https://www.my_cool_app.com/auth",
    "sharefile.subdomain": "<INSERT_SHAREFILE_SUB_DOMAIN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
