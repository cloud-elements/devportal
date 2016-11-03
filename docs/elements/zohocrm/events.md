---
heading: Zoho CRM
seo: Events | Zoho CRM | Cloud Elements API Docs
title: Events
description: Enable Zoho CRM events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 44
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
    "key": "zohocrm"
  },
  "configuration": {
    "crm.zohocrm.username": "<INSERT_NETSUITE_EMAIL>",
    "crm.zohocrm.password": "<INSERT_NETSUITE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where='Modified Time'>'${dateTimeZone:{TimeZone}:yyyy-MM-dd HH:mm:ss}'",
        "idField": "ACCOUNTID",
        "datesConfiguration": {
          "updatedDateField": "['Modified Time']",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "['Created Time']",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "{TimeZone}"
        }
      },
      "activities-calls": {
        "url": "/hubs/crm/activities-calls?where='Modified Time'>'${dateTimeZone:{TimeZone}:yyyy-MM-dd HH:mm:ss}'",
        "idField": "ACTIVITYID",
        "datesConfiguration": {
          "updatedDateField": "['Modified Time']",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "['Created Time']",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "{TimeZone}"
        }
      },
      "activities-events": {
        "url": "/hubs/crm/activities-events?where='Modified Time'>'${dateTimeZone:{TimeZone}:yyyy-MM-dd HH:mm:ss}'",
        "idField": "ACTIVITYID",
        "datesConfiguration": {
          "updatedDateField": "['Modified Time']",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "['Created Time']",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "{TimeZone}"
        }
      },
      "campaigns": {
        "url": "/hubs/crm/campaigns?where='Modified Time'>'${dateTimeZone:{TimeZone}:yyyy-MM-dd HH:mm:ss}'",
        "idField": "CAMPAIGNID",
        "datesConfiguration": {
          "updatedDateField": "['Modified Time']",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "['Created Time']",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "{TimeZone}"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where='Modified Time'>'${dateTimeZone:{TimeZone}:yyyy-MM-dd HH:mm:ss}'",
        "idField": "CONTACTID",
        "datesConfiguration": {
          "updatedDateField": "['Modified Time']",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "['Created Time']",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "{TimeZone}"
        }
      },
      "leads": {
        "url": "/hubs/crm/leads?where='Modified Time'>'${dateTimeZone:{TimeZone}:yyyy-MM-dd HH:mm:ss}'",
        "idField": "LEADID",
        "datesConfiguration": {
          "updatedDateField": "['Modified Time']",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "['Created Time']",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "{TimeZone}"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where='Modified Time'>'${dateTimeZone:{TimeZone}:yyyy-MM-dd HH:mm:ss}'",
        "idField": "POTENTIALID",
        "datesConfiguration": {
          "updatedDateField": "['Modified Time']",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "['Created Time']",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "{TimeZone}"
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
