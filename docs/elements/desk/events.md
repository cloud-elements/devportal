---
heading: Desk.com
seo: Events | Desk.com | Cloud Elements API Docs
title: Events
description: Enable Desk.com events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 286
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

instance JSON with events enabled:

```JSON
{
  "element": {
    "key": "desk"
  },
  "providerData": {
    "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
    "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
    "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_DESK_API_KEY>",
    "oauth.api.secret": "<INSERT_DESK_API_SECRET>",
    "oauth.callback.url": "<INSERT_CALLBACK_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "incidents": {
        "url": "/hubs/helpdesk/incidents?where=updated_at>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id"
      },
      "contacts": {
        "url": "/hubs/helpdesk/contacts?where=updated_at>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "id"
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
