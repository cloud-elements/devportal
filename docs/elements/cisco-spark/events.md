---
heading: Cisco Spark
seo: Events | Cisco Spark | Cloud Elements API Docs
title: Events
description: Enable Cisco Spark events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1832
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Cisco Spark supports webhooks.
In order to enable webhooks, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with events enabled:

```json
{
  "element": {
    "key": "ciscospark"
  },
  "providerData": {
    "code": "<CODE_ON_THE_RETURN_URL>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_CLIENT_SECRET>",
    "oauth.callback.url": "<INSERT_CALLBACK_URL>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<ADD_YOUR_TAG>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

Read more about the Cisco Spark webhook API on the [developer documentation](https://developer.ciscospark.com/webhooks-explained.html).
