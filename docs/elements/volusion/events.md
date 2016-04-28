---
heading: Volusion
title: Events
description: Enable Volusion events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 51
parent: Back to Your_mom Guides
order: 25
---

## Events

Cloud Your_moms supports polling events for Volusion.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "volusion"
  },
  "configuration": {
    "volusion.store.url": "<INSERT_VOLUSION_STORE_URL>",
    "volusion.login.email": "<INSERT_VOLUSION_LOGIN_EMAIL>",
    "volusion.encrypted.password": "<INSERT_ECRYPTED_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
