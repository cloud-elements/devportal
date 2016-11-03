---
heading: Autotask CRM
seo: Events | Autotask CRM | Cloud Elements API Docs
title: Events
description: Enable Autotask CRM events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 50
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
NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "autotaskcrm"
  },
  "configuration": {
    "crm.autotask.username": "<INSERT_AUTOTASK_USERNAME>",
    "crm.autotask.password": "<INSERT_AUTOTASK_PASSWORD>",
    "crm.autotask.server.url": "<INSERT_AUTOTASK_SERVER_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where=lastActivityDate>='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastActivityDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "createDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ",
          "createdDateField": "createDate",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssZ"
        }
      },
      "tasks": {
        "url": "/hubs/crm/tasks?where=lastActivityDateTime>='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
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
