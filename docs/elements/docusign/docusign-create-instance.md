---
heading: DocuSign
seo: Create Instance | DocuSign | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 158
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your DocuSign Element, use the /instances API.

### Step 1. Call the /instances API

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Element token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this element instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements DocuSign is "docusign".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "docusign"
  },
    "configuration": {
    "username": "<INSERT_DOCUSIGN_USERNAME>",
    "password": "<INSERT_DOCUSIGN_PASSWORD>",
    "oauth.api.key": "<INSERT_DOCUSIGN_INTEGRATOR_KEY>",
    "docusign.environment": "<INSERT_DOCUSIGN_ENVIRONMENT>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

Here is an example cURL command to create an instance using /instances API.

Example Request:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @instance.json
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 12,
  "name": "Test",
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",
  "element": {
    "id": 161,
    "name": "DocuSign Beta",
    "key": "docusign",
    "description": "The future of business is digital. DocuSign helps businesses of all sizes easily and securely sign, send, and manage documents in the cloud, with unmatched availability and legal enforceability.",
    "image": "https://pbs.twimg.com/profile_images/462034747871358976/i1asGWHM.jpeg",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "hub": "esignature",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://demo.docusign.net/restapi/v2/accounts/998083",
    "oauth.token.url": "https://{docusign.environment}.docusign.net/restapi/v2/oauth2/token",
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "oauth.scope": "api",
    "oauth.user.token": "DOCUSIGN_USER_TOKEN",
    "pagination.offset": "false",
    "password": "DOCUSIGN_PASSWORD",
    "event.notification.callback.url": null,
    "event.poller.refresh_interval": "5",
    "oauth.user.refresh_token": null,
    "event.poller.urls": "envelopes|/hubs/esignature/envelopes?where=from_date='${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
    "oauth.user.refresh_interval": "3600",
    "oauth.api.key": "DOCUSIGN_ITEGRATOR_KEY",
    "oauth.user.refresh_time": null,
    "docusign.environment": "demo",
    "username": "DOCUSIGN_USERNAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
