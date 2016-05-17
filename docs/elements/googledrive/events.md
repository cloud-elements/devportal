---
heading: Google Drive
seo: Events | Google Drive | Cloud Elements API Docs
title: Events
description: Enable Google Drive events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Google Drive.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
    "element": {
      "key": "googledrive"
    },
    "providerData": {
      "code": "Code on Return the URL"
    },
    "configuration": {
      "oauth.api.key": "<INSERT_GOOGLE_DRIVE_CLIENT_ID>",
      "oauth.api.secret": "<INSERT_GOOGLE_DRIVE_CLIENT_SECRET>",
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
