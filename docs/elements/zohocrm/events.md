---
heading: Zoho CRM
seo: Events | Zoho CRM | Cloud Elements API Docs
title: Events
description: Enable Zoho CRM events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 44
parent: Back to Element Guides
order: 30
---

## Events

There are no extra configurations needed to enable Zoho CRM events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "zohocrm"
  },
  "configuration": {
     "crm.zohocrm.username":"<INSERT_NETSUITE_EMAIL>",
     "crm.zohocrm.password":"<INSERT_NETSUITE_PASSWORD>",
     "event.notification.enabled": "true",
     "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
