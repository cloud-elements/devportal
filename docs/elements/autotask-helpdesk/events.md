---
heading: Autotask Help Desk
seo: Events | Autotask Help Desk | Cloud Elements API Docs
title: Events
description: Enable Autotask Help Desk events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 123
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

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "autotaskhelpdesk"
  },
  "configuration": {
    "helpdesk.autotask.username": "<INSERT_AUTOTASK_USERNAME>",
    "helpdesk.autotask.password": "<INSERT_AUTOTASK_PASSWORD>",
    "helpdesk.autotask.server.url": "<INSERT_AUTOTASK_SERVER_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "attachments": {
        "url": "/hubs/helpdesk/attachments?where=lastActivityDate>='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastActivityDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "createDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "comments": {
        "url": "/hubs/helpdesk/comments?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "createDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "incidents": {
        "url": "/hubs/helpdesk/tasks?where=lastActivityDateTime>='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastActivityDateTime",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "createDateTime",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
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
