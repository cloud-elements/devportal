---
heading: Eloqua
title: Events
description: Enable Eloqua events for your application.
layout: docs
order: 30
---

## Events

There are no extra configurations needed to enable Eloqua Help Desk events.

Eloqua Help Desk Files and Folders are currently supported within the Events Framework.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<add your tag>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
