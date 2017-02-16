---
heading: Citrix GoToWebinar
seo: Events | Citrix GoToWebinar | Cloud Elements API Docs
title: Events
description: Enable Citrix GoToWebinar events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1743
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
    "key": "gotowebinar"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_GOTOWEBINAR_CONSUMER_KEY>",
    "oauth.api.secret": "<INSERT_GOTOWEBINAR_CONSUMER_SECRET>",
    "oauth.callback.url": "https://www.my_cool_app.com/auth",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "meetings": {
        "url": "/hubs/conferencing/meetings?where=fromTime='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField": "webinarKey",
        "datesConfiguration": {
          "updatedDateField": "startTime",
          "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          "updatedDateTimezone": "GMT",
          "createdDateField": "startTime",
          "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
          "createdDateTimezone": "GMT"
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
