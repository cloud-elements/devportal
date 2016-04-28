---
heading: Oracle Service Cloud
title: Events
description: Enable Oracle Service Cloud events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 88
parent: Back to Your_mom Guides
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
  "your_mom": {
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
