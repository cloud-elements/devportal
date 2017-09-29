---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Authenticate With Events - APIs
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: sidebarleft
uiContentVersion: provisioning-console.html
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 15
sitemap: false
---

# Authenticate an Element Instance with Events

This section provides a summary of how to authenticate an element instance with events. Each element is different, so take a look at the [Events section of the specific Element guide](/docs/elements.html). You can authenticate  via <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.ce-ui}}">Cloud Elements</a> or APIs. Use the UI/API switch at the top of this page to switch between UI or API steps.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-an-element-instance-with-polling>Authenticate an Element Instance with Polling</a></br><a href=#polling-configuration>Polling Configuration</a></br><a href=#polling-parameters>Polling Parameters</a></br><a href=#authenticate-an-element-instance-with-webhooks>Authenticate an Element Instance with Webhooks</a></br><a href=#webhook-configuration>Webhook Configuration</a></br><a href=#webhook-parameters>Webhook Parameters</a>" type="info" %}

## Authenticate an Element Instance with Polling

Authenticating an element instance with events works the same as authenticating an instance, you just need to turn on events and set a few more parameters.

To authenticate an element instance with polling events add the polling configuration to the JSON body of your `POST /instances` request. See the Authentication and Events sections of the [Element Guide](/docs/elements.html) for the element that you want to monitor for element-specific steps.

For more information about each field described here, see [Polling Parameters](#polling-parameters).

## Polling Configuration

In the `configuration` JSON object, add the following event and polling configuration parameters when authenticating an element instance with polling events:

* `event.notification.enabled: true`
* `event.vendor.type: polling`
* `event.notification.callback.url: <YOUR_CALLBACK_URL>`
* ` event.notification.signature.key: <OPTIONAL_SIGNATURE_KEY>`
* `event.poller.refresh_interval: <NUMBER IN MINUTES>`
* `event.poller.configuration: <POLLING_CONFIGURATION>`

Here is an example of an element that uses Basic authentication with the required polling configuration values. The usual body to authenticate an element instance only includes the `username` and `password` parameters, the rest are event and polling-specific parameters.

```json
{
  "element":{
    "key":"elementKey"
  },
  "configuration":{
    "username": "xxxxxxxxxxxxxxxxxx",
    "password": "xxxxxxxxxxxxxxxxxxxxxx",
    "event.notification.enabled": true,
    "event.vendor.type": "polling",
    "event.notification.callback.url": "http://mycoolapp.com",
    "event.poller.refresh_interval": "<minutes>",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxxxxx",
    "event.poller.configuration":{
      "contacts":{
        "url":"/hubs/crm/contacts?where=lastUpdated>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
        "idField":"id",
        "datesConfiguration":{
          "updatedDateField":"_info.lastUpdated",
          "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
          "updatedDateTimezone":"GMT",
          "createdDateField":"_info.lastUpdated",
          "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
          "createdDateTimezone":"GMT"
        }
      }
    }
  },
  "tags":[
    "<Add_Your_Tag>"
  ],
  "name":"<INSTANCE_NAME>"
}
```

{% include events/polling-parameters.md%}

## Authenticate an Element Instance with Webhooks

Authenticating an element instance with events works the same as authenticating an instance, you just need to turn on events and set a few more parameters.

To authenticate an element instance with webhook events add the webhook configuration to the JSON body of your `POST /instances` request. See the Authentication and Events sections of the [Element Guide](/docs/elements.html) for the element that you want to monitor for element-specific steps.

{% include note.html content="When you authenticate an element instance with webhook events, make sure that you check the Element Guide for any additional setup you need at the API provider." %}

For more information about each field described here, see [Webhooks Parameters](#webhook-parameters).

## Webhook Configuration

In the `configuration` JSON object, add the following event and webhook configuration parameters when authenticating an element instance with webhook events:

* `event.notification.enabled: true`
* `event.vendor.type: webhooks`
* `event.notification.callback.url: <YOUR_CALLBACK_URL>`
* ` event.notification.signature.key: <OPTIONAL_SIGNATURE_KEY>`

Here is an example of an element that uses Basic authentication with the required polling configuration values. The usual body to authenticate an element instance only includes the `username` and `password` parameters, the rest are event and polling-specific parameters.

```json
{
  "element":{
    "key":"elementKey"
  },
  "configuration":{
    "username": "xxxxxxxxxxxxxxxxxx",
    "password": "xxxxxxxxxxxxxxxxxxxxxx",
    "event.notification.enabled": true,
    "event.vendor.type": "webhooks",
    "event.notification.callback.url": "http://mycoolapp.com",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "tags":[
    "<Add_Your_Tag>"
  ],
  "name":"<INSTANCE_NAME>"
}
```

{% include events/webhook-parameters.md%}
