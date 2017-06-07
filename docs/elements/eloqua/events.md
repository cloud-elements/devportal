---
heading: Eloqua
seo: Events | Eloqua | Cloud Elements API Docs
title: Events
description: Enable Eloqua events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 27
elementKey: 'eloqua'
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling-events-via-cloud-elements-platform-ui>Polling via Platform</a></br><a
href=#polling-events-via-an-api-call>Polling via API call</a></br><a  
href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.


#### Polling Events via Cloud Elements Platform (UI)

In order to enable polling, you need to set `Event Notifications Enabled: True` and set the `Event poller refresh interval:` to how often you would like to have the polling job (minutes) performed.

#### Polling Events via an API Call

However, if you are setting up an instance via an API call, in order to enable polling, you will need to add these extra configurations to your instance `JSON`.

**For more information**, please visit our [Configure Polling Through API](#configure-polling-through-api) page.

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```
**NOTE:** The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.


## Parameters

Here is an example instance JSON with polling events enabled for {{page.heading}}:

```json
{
  "element": {
    "key": "eloqua"
  },
  "providerData": {
    "code": "<INSERT_CODE_ON_RETURN_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<INSERT_ELOQUA_CLIENT_ID>",
    "oauth.api.secret": "<INSERT_ELOQUA_CLIENT_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<add your tag>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
