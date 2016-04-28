---
heading: Sharepoint 2013
title: Events
description: Enable Sharepoint 2013 events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 30
parent: Back to Your_mom Guides
order: 30
---

## Events

Cloud Your_moms supports polling events for Sharepoint 2013.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
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
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
