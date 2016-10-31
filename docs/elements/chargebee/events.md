---
heading: Chargebee
seo: Events | Chargebee | Cloud Elements API Docs
title: Events
description: Enable Chargebee events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 451
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

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "chargebee"
  },
  "configuration": {
    "site": "<INSERT_CHARGEBEE_SUBDOMAIN>",
    "username": "<INSERT_CHARGEBEE_API_KEY>",
    "password": "<INSERT_CHARGEBEE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "events": {
        "url": "/hubs/payment/events?where=start_time='${epoch:s}'",
        "idField": ""
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
