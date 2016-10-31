---
heading: Microsoft Dynamics CRM
seo: Events | MS Dynamics CRM | Cloud Elements API Docs
title: Events
description: Enable Microsoft Dynamics CRM events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 190
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

```JSON
{
  "element": {
    "key": "dynamicscrmadfs"
  },
  "configuration": {
    "user.username": "<INSERT_DYNMAICS_CRM_USERNAME>",
    "user.password": "<INSERT_DYNMAICS_CRM_PASSWORD>",
    "dynamics.tenant": "yourcompanyname.crm.dynamics.com",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "leads": {
        "url": "/hubs/crm/leads?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "tasks": {
        "url": "/hubs/crm/tasks?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "notes": {
        "url": "/hubs/crm/notes?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
          "createdDateFormat": "milliseconds"
        }
      },
      "activities": {
        "url": "/hubs/crm/activities?where=fetchChanges='true'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "attributes.modifiedon",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "attributes.createdon",
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
