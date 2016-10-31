---
heading: HubSpot
seo: Events | HubSpot | Cloud Elements API Docs
title: Events
description: Enable HubSpot events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 43
parent: Back to Element Guides
order: 30
---

## Events

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```JSON
{
  "element": {
    "key": "hubspot"
  },
  "providerData": {
    "apikey": "<INSERT HUBSPOT_OAUTH_CLIENT_ID>",
    "access_token": "<ACCESS_TOKEN RETURNED IN OAUTH EXCHANGE>",
    "refresh_token": "<REFRESH_TOKEN RETURNED IN OAUTH EXCHANGE>",
    "expires_in": "<TIME FRAME IN WHICH REFRESH TOKEN EXPIRES (seconds)>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT HUBSPOT_OAUTH_CLIENT_ID>",
    "oauth.api.secret": "<INSERT HUBSPOT_OAUTH_PORTAL_ID>",
    "oauth.callback.url": "www.samplecallbackurl.com",
    "oauth.scope": "contacts-rw+offline",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.urls": "contacts|accounts"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
