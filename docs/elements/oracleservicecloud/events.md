---
heading: Oracle Service Cloud
title: Events
description: Enable Oracle Service Cloud events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 88
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

```json
{
  "element": {
    "key": "servicecloud"
  },
  "configuration": {
  	"helpdesk.servicecloud.username":  "<INSERT_SERVICECLOUD_USERNAME>",
  	"helpdesk.servicecloud.password":  "<INSERT_SERVICECLOUD_PASSWORD>",
  	"helpdesk.servicecloud.endpointurl":  "https://<host_name>/cgi-bin/<interface>.cfg/services/soap?wsdl",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
