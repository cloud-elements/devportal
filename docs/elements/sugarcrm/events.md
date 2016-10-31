---
heading: SugarCRM
seo: Events | SugarCRM | Cloud Elements API Docs
title: Events
description: Enable SugarCRM events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 170
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
    "key": "sugarcrmv2"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SUGARCRM_CONSUMER_KEY>",
    "oauth.api.secret": "<INSERT_SUGARCRM_CONSUMER_SECRET>",
    "oauth.callback.url": "https://console.cloud-elements.com/elements/jsp/home.jsp",
    "site.url": "<INSERT_SUGARCRM_UNIQUE_URL>",
    "username": "<INSERT_SUGARCRM_USERNAME>",
    "password": "<INSERT_SUGARCRM_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "users": {
        "url": "/hubs/crm/users?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "leads": {
        "url": "/hubs/crm/leads?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "tasks": {
        "url": "/hubs/crm/tasks?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "campaigns": {
        "url": "/hubs/crm/campaigns?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "incidents": {
        "url": "/hubs/crm/incidents?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "activities-emails": {
        "url": "/hubs/crm/activities-emails?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "activities-calls": {
        "url": "/hubs/crm/activities-calls?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "activities-events": {
        "url": "/hubs/crm/activities-events?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "accounts": {
        "url": "/hubs/crm/accounts?where=date_modified>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "date_entered",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
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
