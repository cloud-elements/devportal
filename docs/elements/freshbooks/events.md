---
heading: FreshBooks
seo: Events | FreshBooks | Cloud Elements API Docs
title: Events
description: Enable FreshBooks events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 172
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable events, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with events enabled:

```JSON
{
  "element": {
    "key": "freshbooks"
  },
  "providerData": {
       "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
       "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
       "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
   },
  "configuration": {
  	"oauth.api.key":"<INSERT_FRESHBOOKS_API_KEY>",
  	"oauth.api.secret":"<INSERT_FRESHBOOKS_API_SECRET>",
    "freshbooks.site.address":"<INSERT_FRESHBOOKS_SITE_ADDRESS>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
