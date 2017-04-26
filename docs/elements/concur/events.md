---
heading: Concur
seo: Events | Concur | Cloud Elements API Docs
title: Events
description: Enable Concur events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 4933
parent: Back to Element Guides
order: 25
---

# Events

{% include polling_and_webhooks_defined.md %}

__On this page__

[Webhooks](#webhooks)

[Polling](#polling)

## Webhooks

You can configure webhooks through the UI or in the JSON body of the `/instances` API call.

### Configure Webhooks Through the UI

To add webhooks when authenticating through the UI:

1. In the Event Configuration section, switch on __Events Enabled__.
2. Add an Event Notification Callback URL.
3. Optionally include an Event Notification Signature Key.

When finished adding your webhook configuration, the Event Configuration section should look like this:

![Webhooks Eabled](img/Webhooks.png)

### Configure Webhooks Through API

To add webhooks when authenticating through the `/instances` API call, add the following to the `configuration` object in the JSON body.

```json
{
  "event.notification.enabled": "true",
"event.vendor.type": "webhook",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.notification.signature.key": "<INSERT_SIGNATURE_KEY>"
}
```

__Note__: `event.notification.signature.key` is optional.

#### Example JSON with Webhooks

```json
{
  "element": {
    "key": "woocommercerest"
  },
  "configuration": {
     "store.url": "http://mycoolstore.com",
     "oauth.api.key": "<CONSUMER_KEY>",
     "oauth.api.secret": "<CONSUMER_SECRET>",
     "filter.response.nulls": true,
     "event.vendor.type": "webhook",
     "event.notification.callback.url": "http://mycoolstore.com",
     "event.notification.signature.key": "123456"
  },
  "tags": [
     "Docs"
  ],
  "name": "ConcurForDocs"
}
```

## Polling

You can configure Polling through the UI or in the JSON body of the `/instances` API call.

### Configure Polling Through the UI

To add polling when authenticating through the UI:

1. Switch on __Events Enabled__.
2. Add an Event Notification Callback URL.
3. Optionally include an Event Notification Signature Key.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select each object that you want to poll for changes.
6. Optionally, click the pencil icon to further configure polling.

When finished adding your polling configuration, the Event Configuration section should look like this:

![Webhooks Eabled](img/Polling.png)

### Configure Polling Through API

To add polling when authenticating through the `/instances` API call, add the following to the `configuration` object in the JSON body.

```json
{
"event.notification.enabled": "true",
"event.vendor.type": "webhook",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.notification.signature.key": "<INSERT_SIGNATURE_KEY>",
 "event.poller.configuration": "{}"
}
```

__Note__: `event.notification.signature.key` is optional.

#### Example JSON with Polling

```json
{
  "element": {
    "key": "woocommercerest"
  },
  "configuration": {
     "store.url": "http://mycoolstore.com",
     "oauth.api.key": "<CONSUMER_KEY>",
     "oauth.api.secret": "<CONSUMER_SECRET>",
     "filter.response.nulls": true,
     "event.vendor.type": "polling",
     "event.notification.callback.url": "http://mycoolstore.com",
     "event.notification.signature.key": "123456",
     "event.poller.configuration": {
       "customers": {
         "url": "/hubs/ecommerce/customers",
         "idField": "id",
         "datesConfiguration": {
            "updatedDateField": "date_modified",
            "updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ss",
            "updatedDateTimezone": "GMT",
            "createdDateField": "date_created",
            "createdDateFormat": "yyyy-MM-dd'T'HH:mm:ss",
            "createdDateTimezone": "GMT"
         }
       }
  },
  "tags": [
     "Docs"
  ],
  "name": "ConcurForDocs"
}
```
