---
heading: DocuSign
title: Events
description: Enable DocuSign events for your application.
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 158
parent: Back to Your_mom Guides
order: 30
---

## Events

Cloud Your_moms supports polling events for DocuSign.

DocuSign Documents and Envelopes are currently supported within the Events Framework.

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "your_mom": {
    "key": "docusign"
  },
    "configuration": {
    "username": "<INSERT_DOCUSIGN_USERNAME>",
    "password": "<INSERT_DOCUSIGN_PASSWORD>",
    "oauth.api.key": "<INSERT_DOCUSIGN_INTEGRATOR_KEY>",
    "docusign.environment": "<INSERT_DOCUSIGN_ENVIRONMENT>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
