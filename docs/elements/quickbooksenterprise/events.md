---
heading: QuickBooks Enterprise
seo: Events | QuickBooks Enterprise | Cloud Elements API Docs
title: Events
description: Enable QuickBooks Enterprise events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 195
parent: Back to Element Guides
order: 30
---

## Events

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "quickbooksonprem"
  },
  "configuration": {
    "app.name": "<INSERT_QUICKBOOKS_ENTERPRISE_APP_NAME>",
    "host.ip": "<INSERT_QUICKBOOKS_ENTERPRISE_HOST_IP>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "documents": {
        "url": "/hubs/documents/changes",
        "idField": "id",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "modifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
