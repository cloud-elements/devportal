---
heading: NetSuite 2016 ERP
seo: Events | NetSuite 2016 ERP | Cloud Elements API Docs
title: Events
description: Enable NetSuite 2016 ERP events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 987
parent: Back to Element Guides
order: 30
---

## Events

There are no extra configurations needed to enable NetSuite events.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

#### Basic Authentication NetSuite 2016

```JSON
{
  "element": {
    "key": "netsuiteerpv2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "user.username": "<INSERT_NETSUITE_EMAIL>",
    "user.password": "<INSERT_NETSUITE_PASSWORD>",
    "netsuite.sso.roleId": "3",
    "netsuite.appId": "<INSERT_NETSUITE_APP_ID>",
    "authentication.type": "Basic",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

#### Token Based Authentication

```JSON
{
  "element": {
    "key": "netsuiteerpv2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "netsuite.sso.roleId": "3",
    "authentication.type": "TokenBasedAuthentication",
    "consumer_key": "<INSERT_NETSUITE_CONSUMER_KEY>",
    "consumer_secret": "<INSERT_NETSUITE_CONSUMER_SECRET>",
    "token_id": "<INSERT_NETSUITE_ACCESS_TOKEN_ID>",
    "token_secret": "<INSERT_NETSUITE_ACCESS_TOKEN_SECRET>",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
