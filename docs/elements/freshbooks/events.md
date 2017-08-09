---
heading: FreshBooks Classic
seo: Events | FreshBooks Classic | Cloud Elements API Docs
title: Events
description: Enable FreshBooks Classic events for your application.
layout: sidebarelementdoc
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
    "key": "FreshBooks Classic"
  },
  "providerData": {
       "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
       "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
       "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
   },
  "configuration": {
  	"oauth.api.key":"<INSERT_FreshBooks Classic_API_KEY>",
  	"oauth.api.secret":"<INSERT_FreshBooks Classic_API_SECRET>",
    "FreshBooks Classic.site.address":"<INSERT_FreshBooks Classic_SITE_ADDRESS>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
