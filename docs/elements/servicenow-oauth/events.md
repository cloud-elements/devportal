---
heading: ServiceNow OAuth
seo: Events | ServiceNow OAuth | Cloud Elements API Docs
title: Events
description: Enable ServiceNow OAuth events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 566
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

```JSON
{
  "element": {
    "key": "servicenowoauth"
  },
  "providerData": {
    "code": "1000"  // NOTE: ServiceNow does not require a callback URL so please leave this field as 1000
  },
  "configuration": {
    "username":"<INSERT_SERVICENOW_USERNAME>",
    "password":"<INSERT_SERVICENOW_PASSWORD>",
    "oauth.api.key":"<INSERT_SERVICENOW_CLIENT_ID>",
    "oauth.api.secret":"<INSERT_SERVICENOW_CLIENT_SECRET>",
    "servicenow.subdomain":"<INSERT_SERVICENOW_SUBDOMAIN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/helpdesk/accounts?where=sys_updated_on>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField": "sys_id",
        "datesConfiguration": {
          "updatedDateField": "sys_updated_on",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "sys_created_on",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "contacts": {
        "url": "/hubs/helpdesk/contacts?where=sys_updated_on>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField": "sys_id",
        "datesConfiguration": {
          "updatedDateField": "sys_updated_on",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "sys_created_on",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "agents": {
        "url": "/hubs/helpdesk/agents?where=sys_updated_on>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField": "sys_id",
        "datesConfiguration": {
          "updatedDateField": "sys_updated_on",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "sys_created_on",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "incidents": {
        "url": "/hubs/helpdesk/incidents?where=sys_updated_on>'${date:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField": "sys_id",
        "datesConfiguration": {
          "updatedDateField": "sys_updated_on",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "updatedDateTimezone": "PST",
          "createdDateField": "sys_created_on",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateTimezone": "PST"
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
