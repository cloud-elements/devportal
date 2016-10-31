---
heading: Act Essentials
seo: Events | Act Essentials | Cloud Elements API Docs
title: Events
description: Enable Act Essentials events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1251
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports polling events for Act Essentials.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "actessentialsoauth"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ACT_ESSENTIALS_API_KEY>",
    "oauth.api.secret": "<INSERT_ACT_ESSENTIALS_API_SECRET>",
    "oauth.callback.url": "<INSERT_OAUTH_CALLBACK_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>",
    "event.poller.configuration": {
      "campaigns": {
        "url": "/hubs/crm/campaigns?where=sendDate>'${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastUpdated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=lastUpdated>'${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastUpdated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=lastUpdated>'${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastUpdated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        }
      },
      "lists": {
        "url": "/hubs/crm/lists?where=lastUpdated>'${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastUpdated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        }
      },
      "metadata": {
        "url": "/hubs/crm/metadata?where=lastUpdated>'${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastUpdated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
        }
      },
      "activities": {
        "url": "/hubs/crm/activities?where=lastUpdated>'${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastUpdated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
        }
      },
      "interactions": {
        "url": "/hubs/crm/interactions?where=lastUpdated>'${date:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "lastUpdated",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateField": "created",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
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
