---
heading: Adobe eSign
seo: Events | Adobe eSign | Cloud Elements API Docs
title: Events
description: Enable Adobe eSign events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 426
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Adobe eSign.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "adobe-esign"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ADOBE_ESIGN_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_ADOBE_ESIGN_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.scope": "agreement_read:account agreement_send:account agreement_write:account library_read:account library_write:account user_login:account user_read:account user_write:account widget_read:account widget_write:account workflow_read:account workflow_write:account",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
