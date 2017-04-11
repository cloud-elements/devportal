---
heading: ConnectWise Help Desk
seo: Events | ConnectWise Help Desk | Cloud Elements API Docs
title: Events
description: Enable ConnectWise Help Desk events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 142
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

##### Help Desk

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "connectwisehd"
  },
  "configuration": {
    "helpdesk.connectwise.username": "<INSERT_CONNECTWISE_USERNAME>",
    "helpdesk.connectwise.password": "<INSERT_CONNECTWISE_PASSWORD>",
    "helpdesk.connectwise.server.url": "<INSERT_CONNECTWISE_SERVER_URL>",
    "helpdesk.connectwise.company": "<INSERT_CONNECTWISE_COMPANY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
