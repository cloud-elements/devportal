---
heading: Expensify
seo: Events | Expensify | Cloud Elements API Docs
title: Events
description: Enable Expensify events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 675
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
    "key": "expensify"
  },
  "configuration": {
    "partner.user.id": "<INSERT_EXPENSIFY_EMAIL>",
    "partner.user.secret": "<INSERT_EXPENSIFY_PARTNER_USER_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "reports": {
        "url": "/hubs/payment/reports?where=startDate ='${date:yyyy-MM-dd}'",
        "idField": "reportId",
        "datesConfiguration": {
          "updatedDateField": "created",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateTimezone": "GMT"
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
