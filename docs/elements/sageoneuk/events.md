---
heading: Sage One UK
seo: Events | Sage One UK | Cloud Elements API Docs
title: Events
description: Enable Sage One UK events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 686
parent: Back to Element Guides
order: 25
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports polling events for Sage One UK.

### Polling

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
    "key": "sageoneuk"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_SAGEONE_US_CLIENT_ID>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "expenditures": {
        "url": "/hubs/sageaccounting/expenditures?where=from_date='${gmtDate:dd/MM/yyyy}' AND to_date='31/12/9999'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date",
          "updatedDateFormat": "dd/MM/yyyy",
          "createdDateField": "date",
          "createdDateFormat": "dd/MM/yyyy"
        }
      },
      "incomes": {
        "url": "/hubs/sageaccounting/incomes?where=from_date='${gmtDate:dd/MM/yyyy}' AND to_date='31/12/9999'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date",
          "updatedDateFormat": "dd/MM/yyyy",
          "createdDateField": "date",
          "createdDateFormat": "dd/MM/yyyy"
        }
      },
      "sales-invoices": {
        "url": "/hubs/sageaccounting/sales-invoices?where=from_date='${gmtDate:dd/MM/yyyy}' AND to_date='31/12/9999'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date",
          "updatedDateFormat": "dd/MM/yyyy",
          "createdDateField": "date",
          "createdDateFormat": "dd/MM/yyyy"
        }
      },
      "transactions": {
        "url": "/hubs/sageaccounting/transactions?where=updated_from_date='${gmtDate:yyyy-MM-dd}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "last_updated",
          "updatedDateFormat": "dd/MM/yyyy",
          "createdDateField": "entry_date",
          "createdDateFormat": "dd/MM/yyyy"
        }
      },
      "purchase-invoices": {
        "url": "/hubs/sageaccounting/purchase-invoices?where=from_date='${gmtDate:dd/MM/yyyy}' AND to_date='31/12/9999'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date",
          "updatedDateFormat": "dd/MM/yyyy",
          "createdDateField": "date",
          "createdDateFormat": "dd/MM/yyyy"
        }
      }
    }
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```

{% include padding-all.html %}

{% include padding-all.html %}

{% include padding-all.html %}
