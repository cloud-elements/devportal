---
heading: Magento 2.0
seo: Events | Magento 2.0 | Cloud Elements API Docs
title: Events
description: Enable Magento 2.0 events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 815
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Magento 2.0.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "magentov20"
  },
  "configuration": {
    "userName": "<INSERT_MAGENTO_USERNAME>",
    "password": "<INSERT_MAGENTO_PASSWORD>",
    "site": "<INSERT_MAGENTO_STORE_URL>",
    "user": "true",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
