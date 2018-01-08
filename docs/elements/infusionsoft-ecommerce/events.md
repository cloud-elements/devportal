---
heading: Infusionsoft Online Sales
seo: Events | Infusionsoft Online Sales | Cloud Elements API Docs
title: Events
description: Enable Infusionsoft Online Sales events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 321
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

### eCommerce

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "infusionsoftecommerce"
  },
  "providerData": {
    "code": "Code on the Return URL"
  },
  "configuration": {
    "oauth.callback.url": "https://www.yourcallbackurl.com",
    "oauth.api.key": "<INSERT_INFUSIONSOFT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_INFUSIONSOFT_CLIENT_SECRET>",
    "document.tagging": false,
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "orders": {
        "url": "/hubs/ecommerce/orders?where=since='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "modification_date",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
          "createdDateField": "creation_date",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
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
