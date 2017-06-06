---
heading: Volusion
seo: Events | Volusion | Cloud Elements API Docs
title: Events
description: Enable Volusion events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 51
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for Volusion.

### Polling

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "volusion"
  },
  "configuration": {
    "volusion.store.url": "<INSERT_VOLUSION_STORE_URL>",
    "volusion.login.email": "<INSERT_VOLUSION_LOGIN_EMAIL>",
    "volusion.encrypted.password": "<INSERT_ECRYPTED_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
