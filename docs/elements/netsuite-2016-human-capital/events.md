---
heading: NetSuite 2016 Human Capital
seo: Events | NetSuite 2016 Human Capital | Cloud Elements API Docs
title: Events
description: Enable NetSuite 2016 Human Capital events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 988
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

#### Basic Authentication NetSuite 2016

```JSON
{
  "element": {
    "key": "netsuitehcv2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "user.username": "<INSERT_NETSUITE_EMAIL>",
    "user.password": "<INSERT_NETSUITE_PASSWORD>",
    "netsuite.single.session.key": "<INSERT_NETSUITE_EMAIL>",
    "netsuite.single.session": "true",
    "netsuite.sso.roleId": "3",
    "netsuite.appId": "<INSERT_NETSUITE_APP_ID>",
    "authentication.type": "Basic",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "employees": {
        "url": "/hubs/humancapital/employees?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      }
    }
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
    "key": "netsuitecrmv2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "netsuite.sso.roleId": "3",
    "authentication.type": "TokenBasedAuthentication",
    "consumer_key": "<INSERT_NETSUITE_CONSUMER_KEY>",
    "consumer_secret": "<INSERT_NETSUITE_CONSUMER_SECRET>",
    "token_id": "<INSERT_NETSUITE_ACCESS_TOKEN_ID>",
    "token_secret": "<INSERT_NETSUITE_ACCESS_TOKEN_SECRET>",
    "netsuite.single.session.key": "<INSERT_NETSUITE_EMAIL>",
    "netsuite.single.session": "true",
    "netsuite.sandbox": "false",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.poller.configuration": {
      "employees": {
        "url": "/hubs/humancapital/employees?where=lastModifiedDate>${epoch}",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
