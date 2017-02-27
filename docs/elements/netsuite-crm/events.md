---
heading: NetSuite CRM
seo: Events | NetSuite CRM | Cloud Elements API Docs
title: Events
description: Enable NetSuite CRM events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 140
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

### CRM

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "netsuitecrm"
  },
  "configuration": {
    "user.username": "<INSERT_NETSUITE_EMAIL>",
    "user.password": "<INSERT_NETSUITE_PASSWORD>",
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where=lastModifiedDate >= '${epoch:ms}'",
        "filterByUpdatedDate": true,
        "idField": "internalId",
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        },
        "createdCheckTolerance": 2,
        "pageSize": 200
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=lastModifiedDate >= '${epoch:ms}'",
        "filterByUpdatedDate": true,
        "idField": "internalId",
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        },
        "createdCheckTolerance": 2,
        "pageSize": 200
      },
      "leads": {
        "url": "/hubs/crm/leads?where=lastModifiedDate >= '${epoch:ms}'",
        "filterByUpdatedDate": true,
        "idField": "internalId",
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        },
        "createdCheckTolerance": 2,
        "pageSize": 200
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=lastModifiedDate >= '${epoch:ms}'",
        "filterByUpdatedDate": true,
        "idField": "internalId",
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        },
        "createdCheckTolerance": 2,
        "pageSize": 200
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
