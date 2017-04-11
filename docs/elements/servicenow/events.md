---
heading: ServiceNow
seo: Events | ServiceNow | Cloud Elements API Docs
title: Events
description: Enable ServiceNow events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 145
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
    "key": "servicenow"
  },
  "configuration": {
    "username": "<INSERT_SERVICENOW_USERNAME>",
    "password": "<INSERT_SERVICENOW_PASSWORD>",
    "servicenow.subdomain": "<INSERT_SERVICENOW_SUBDOMAIN_URL>",
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
