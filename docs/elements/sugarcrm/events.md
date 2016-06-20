---
heading: SugarCRM
seo: Events | SugarCRM | Cloud Elements API Docs
title: Events
description: Enable SugarCRM events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 170
parent: Back to Element Guides
order: 30
---

## Events

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

### CRM

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "sugarcrmv2"
  },
   "configuration": {
       "oauth.api.key": "<INSERT_SUGARCRM_CONSUMER_KEY>",
       "oauth.api.secret": "<INSERT_SUGARCRM_CONSUMER_SECRET>",
       "oauth.callback.url": "https://console.cloud-elements.com/elements/jsp/home.jsp",
       "site.url": "<INSERT_SUGARCRM_UNIQUE_URL>",
       "username": "<INSERT_SUGARCRM_USERNAME>",
       "password": "<INSERT_SUGARCRM_PASSWORD>",
       "event.notification.enabled": "true",
       "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
