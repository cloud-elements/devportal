---
heading: SAP SAP C4C CRM
seo: Events | SAP SAP C4C CRM | Cloud Elements API Docs
title: Events
description: Enable SAP Anywhere events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1468
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports both webhook events for SAP Anywhere.

### Webhooks

The following JSON may be used to create a SAP Anywhere Instance with webhooks enabled:

```json
{
  "element": {
    "key": "sapanywhere"
  },
  "providerData": {
    "code": "<CODE_ON_THE_RETURN_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<INSERT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_CLIENT_SECRET>",
    "event.notification.enabled": "true",
    "event.vendor.type": "webhook",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<ADD_YOUR_TAG>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
