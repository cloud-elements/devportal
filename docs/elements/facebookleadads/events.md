---
heading: Facebook Lead Ads
seo: Events | Facebook Lead Ads | Cloud Elements API Docs
title: Events
description: Enable Facebook Lead Ads events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 202
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

### Set Up Events for Facebook Lead Ads

The Facebook Lead Ads element supports webhooks. For Facebook Lead Ads events to work with Cloud Elements, you must [set up webhooks for the endpoint](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/retrieving/v2.8), and then configure each element instance.

### Set up the Element Instance

To enable events, add these extra configurations to your instance JSON:

In order to enable polling, add these extra configurations to your instance JSON:

```json
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.notification.signature.key":"<INSERT_YOUR_APP_ID>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "facebookleadads"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_FACEBOOK_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_FACEBOOK_CLIENT_SECRET>",
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.scope": "<INSERT_FACEBOOK_LEVEL_OF_PERMISSION>" ,
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.notification.signature.key":"<INSERT_YOUR_APP_ID>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

__Note__: For webhooks, enter at least "manage_pages" for `oauth.scope`.
