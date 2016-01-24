---
heading: ServiceNow
title: Events
description: Enable ServiceNow events for your application.
layout: docs
order: 30
---

## Events

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "servicenow"
  },
  "configuration": {
    "username":"<INSERT_SERVICENOW_USERNAME>",
    "password":"<INSERT_SERVICENOW_PASSWORD>",
    "servicenow.subdomain":"<INSERT_SERVICENOW_SUBDOMAIN_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
