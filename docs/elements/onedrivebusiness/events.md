---
heading: Microsoft OneDrive for Business Beta
seo: Events | Microsoft OneDrive for Business Beta | Cloud Elements API Docs
title: Events
description: Enable Microsoft OneDrive for Business Beta events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 178
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
    "key": "onedrivebusiness"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ONEDRIVE_BUSINESS_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_ONEDRIVE_BUSINESS_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.yourcallbackurl.com/oauth2callback",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "documents": {
        "url": "/hubs/documents/changes",
        "idField": "id",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "modifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "createdDate",
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
