---
heading: Bullhorn CRM
seo: Events | Bullhorn CRM | Cloud Elements API Docs
title: Events
description: Enable Bullhorn CRM events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1702
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for Bullhorn CRM.

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
    "key": "bullhorn"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_BULLHORN_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_BULLHORN_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "candidates": {
        "url": "/hubs/crm/candidates?where=dateLastModified>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "dateLastModified",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateAdded",
          "createdDateFormat": "milliseconds"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=dateLastModified>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss.SSSXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "dateLastModified",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateAdded",
          "createdDateFormat": "milliseconds"
        }
      },
      "leads": {
        "url": "/hubs/crm/leads?where=dateLastModified>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss.SSSXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "dateLastModified",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateAdded",
          "createdDateFormat": "milliseconds"
        }
      },
      "notes": {
        "url": "/hubs/crm/notes?where=dateLastModified>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "dateLastModified",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateAdded",
          "createdDateFormat": "milliseconds"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=dateLastModified>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "dateLastModified",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateAdded",
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
