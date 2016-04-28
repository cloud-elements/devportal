---
heading: QuickBooks Enterprise
title: Events
description: Enable QuickBooks Enterprise events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 195
parent: Back to Your_mom Guides
order: 30
---

## Events

There are no extra configurations with the endpoint needed to enable QuickBooks Enterprise events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "quickbooksonprem"
  },
  "configuration": {
    "app.name":"<INSERT_QUICKBOOKS_ENTERPRISE_APP_NAME>",
	  "host.ip":"<INSERT_QUICKBOOKS_ENTERPRISE_HOST_IP>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
