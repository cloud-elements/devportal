---
heading: ServiceNow OAuth
seo: Events | ServiceNow OAuth | Cloud Elements API Docs
title: Events
description: Enable ServiceNow OAuth events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 566
parent: Back to Element Guides
order: 30
---

## Events

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```JSON
{
  "element": {
    "key": "servicenowoauth"
  },
  "providerData": {
    "code": "1000"  // NOTE: ServiceNow does not require a callback URL so please leave this field as 1000
  },
  "configuration": {
    "username":"<INSERT_SERVICENOW_USERNAME>",
    "password":"<INSERT_SERVICENOW_PASSWORD>",
    "oauth.api.key":"<INSERT_SERVICENOW_CLIENT_ID>",
    "oauth.api.secret":"<INSERT_SERVICENOW_CLIENT_SECRET>",
    "servicenow.subdomain":"<INSERT_SERVICENOW_SUBDOMAIN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
