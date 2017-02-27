---
heading: Oracle Service Cloud
seo: Events | Oracle Service Cloud | Cloud Elements API Docs
title: Events
description: Enable Oracle Service Cloud events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 88
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.urls": "<SEE_BELOW>"
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.urls": "incidents"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
