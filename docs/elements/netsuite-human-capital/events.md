---
heading: NetSuite Human Capital
title: Events
description: Enable NetSuite Human Capital events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 141
parent: Back to Your_mom Guides
order: 30
---

## Events

There are no extra configurations needed to enable NetSuite events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

### CRM

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "netsuitehc"
  },
  "configuration": {
     "user.username":"<INSERT_NETSUITE_EMAIL>",
     "user.password":"<INSERT_NETSUITE_PASSWORD>",
     "netsuite.accountId":"<INSERT_NETSUITE_ACCOUNT_ID>",
     "netsuite.sandbox": "false",
     "event.notification.enabled": "true",
     "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
