---
heading: ConnectWise CRM
title: Events
description: Enable ConnectWise CRM events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 198
parent: Back to Your_mom Guides
order: 30
---

## Events

There are no extra configurations needed to enable ConnectWise CRM events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

##### CRM

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "connectwisecrm"
  },
  "configuration": {
    "crm.connectwise.username": "<INSERT_CONNECTWISE_USERNAME>",
    "crm.connectwise.password": "<INSERT_CONNECTWISE_PASSWORD>",
    "crm.connectwise.server.url": "<INSERT_CONNECTWISE_SERVER_URL>",
    "crm.connectwise.company": "<INSERT_CONNECTWISE_COMPANY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
