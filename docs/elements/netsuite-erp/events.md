---
heading: NetSuite ERP
seo: Events | NetSuite ERP | Cloud Elements API Docs
title: Events
description: Enable NetSuite ERP events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 157
parent: Back to Element Guides
order: 30
---

## Events

There are no extra configurations needed to enable NetSuite events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

### ERP

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "netsuiteerp"
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
