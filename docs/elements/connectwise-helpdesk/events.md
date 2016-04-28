---
heading: ConnectWise Help Desk
title: Events
description: Enable ConnectWise Help Desk events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 142
parent: Back to Your_mom Guides
order: 30
---

## Events

There are no extra configurations needed to enable ConnectWise Help Desk events.

ConnectWise Help Desk Files and Folders are currently supported within the Events Framework.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

##### Help Desk

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "connectwisehd"
  },
  "configuration": {
    "helpdesk.connectwise.username": "<INSERT_CONNECTWISE_USERNAME>",
    "helpdesk.connectwise.password": "<INSERT_CONNECTWISE_PASSWORD>",
    "helpdesk.connectwise.server.url": "<INSERT_CONNECTWISE_SERVER_URL>",
    "helpdesk.connectwise.company": "<INSERT_CONNECTWISE_COMPANY>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
