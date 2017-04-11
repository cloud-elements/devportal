---
heading: QuickBase
seo: Events | QuickBase | Cloud Elements API Docs
title: Events
description: Enable QuickBase events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 475
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

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
    "key": "quickbase"
  },
  "configuration": {
    "subdomain":"<INSERT_QUICKBASE_SUBDOMAIN>",
    "quickbase.user": "<INSERT_QUICKBASE_USER_EMAIL>",
    "quickbase.password": "<INSERT_QUICKBASE_USER_PASSWORD>",
    "quickbase.appname": "<INSERT_QUICKBASE_APP_NAME>",
    "quickbase.apptoken": "<INSERT_QUICKBASE_APP_TOKEN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "<INSERT_objectName>": {
        "url": "/hubs/db/{objectName}?where=date_modified>'${epoch}'",
        "idField": "record_id_",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "date_created",
          "createdDateFormat": "milliseconds"
        }
      }
    },
    "tags": [
      "<INSERT_TAGS>"
    ],
    "name": "<INSERT_INSTANCE_NAME>"
  }
}
```
