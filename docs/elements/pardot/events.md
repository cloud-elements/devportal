---
heading: Pardot
seo: Events | Pardot | Cloud Elements API Docs
title: Events
description: Enable Pardot events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 90
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.urls": "<SEE_BELOW>"
```

NOTE: The `objects` in the `event.poller.urls` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "pardot"
  },
  "configuration": {
    "apikey.user.name":  "<INSERT_PARDOT_USERNAME>",
    "apikey.user.password": "<INSERT_PARDOT_PASSWORD>",
    "apikey.user.key": "<INSERT_PARDOT_API_USER_KEY>",
    "provider.version": "4",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.urls": "contacts|leads"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
