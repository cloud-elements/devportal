---
heading: OneDrive Business
title: Events
description: Enable OneDrive Business events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 178
parent: Back to Your_mom Guides
order: 30
---

## Events

Cloud Your_moms supports polling events for OneDrive Business.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "onedrivebusiness"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ONEDRIVE_BUSINESS_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_ONEDRIVE_BUSINESS_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.yourcallbackurl.com/oauth2callback",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
