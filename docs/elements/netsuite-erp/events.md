---
heading: NetSuite ERP
seo: Events | NetSuite ERP | Cloud Elements API Docs
title: Events
description: Enable NetSuite ERP events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 157
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

### ERP

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "netsuiteerp"
  },
  "configuration": {
    "user.username": "<INSERT_NETSUITE_EMAIL>",
    "user.password": "<INSERT_NETSUITE_PASSWORD>",
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "cases": {
        "url": "/hubs/erp/case?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
          "createdDateFormat": "milliseconds"
        }
      },
      "contacts": {
        "url": "/hubs/erp/contacts?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
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
