---
heading: Magento SOAP V1.9
seo: Events | Magento SOAP V1.9 | Cloud Elements API Docs
title: Events
description: Enable Magento SOAP V1.9 events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 526
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Magento SOAP V1.9.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "magentosoapv19"
  },
  "configuration": {
    "userName": "<INSERT_MAGENTO_USERNAME>",
    "password": "<INSERT_MAGENTO_PASSWORD>",
    "store.url": "<INSERT_MAGENTO_STORE_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
