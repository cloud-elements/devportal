---
heading: DocuSign
seo: Events | DocuSign | Cloud Elements API Docs
title: Events
description: Enable DocuSign events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 158
parent: Back to Element Guides
order: 30
---

### Events

Cloud Elements supports polling and webhook events for DocuSign.

DocuSign Documents and Envelopes are currently supported within the Events Framework.

#### Polling

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "docusign"
  },
    "configuration": {
    "username": "<INSERT_DOCUSIGN_USERNAME>",
    "password": "<INSERT_DOCUSIGN_PASSWORD>",
    "oauth.api.key": "<INSERT_DOCUSIGN_INTEGRATOR_KEY>",
    "docusign.environment": "<INSERT_DOCUSIGN_ENVIRONMENT>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

#### Webhooks

Cloud Elements Supports webhooks when `creating` an envelope.  With webhooks enabled, a notification will be sent upon successful creation of an envelop
See the [DocuSign documentation](https://www.docusign.com/developer-center/recipes/webhook-status) or more information on DocuSign webhooks.

In order to enable webhooks, add these three extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "docusign"
  },
    "configuration": {
    "username": "<INSERT_DOCUSIGN_USERNAME>",
    "password": "<INSERT_DOCUSIGN_PASSWORD>",
    "oauth.api.key": "<INSERT_DOCUSIGN_INTEGRATOR_KEY>",
    "docusign.environment": "<INSERT_DOCUSIGN_ENVIRONMENT>",
    "event.notification.enabled": "true",
    "vendor.event.type": "webhooks",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
