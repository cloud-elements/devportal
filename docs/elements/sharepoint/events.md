---
heading: Sharepoint
seo: Events | Sharepoint | Cloud Elements API Docs
title: Events
description: Enable Sharepoint events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 30
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "sharepoint"
  },
  "providerData": {
    "code": "Code on the Return URL"
  },
  "configuration": {
    "oauth.callback.url": "https://www.yourcallbackurl.com",
    "oauth.api.key": "<INSERT_SHAREPOINT_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_SHAREPOINT_CLIENT_SECRET>",
    "sharepoint.document.library": "<INSERT_SHAREPOINT_DOCUMENT_LIBRARY_NAME>",
    "oauth.scope": "Web.Write Web.Read Web.Manage",
    "sharepoint.site.address": "<INSERT_SHAREPOINT_SITE_ADDRESS_NAME>",
    "document.tagging": false,
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.urls": "documents"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
