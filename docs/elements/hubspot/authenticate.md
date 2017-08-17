---
heading: Hubspot Marketing
seo: Authenticate | Hubspot Marketing | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with Hubspot Marketing
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 43
elementKey: hubspot
parent: Back to Element Guides
order: 20
---

{% include Elements/Hubspot/authenticate.md %}

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `58772` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 58772,
  "name": "API Instance",
  "createdDate": "2017-08-01T16:12:43Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxx/9DROw=",
  "element": {
    "id": 43,
    "name": "Hubspot Marketing",
    "hookName": "HubSpot",
    "key": "hubspot",
    "description": "Add a HubSpot Instance to connect your existing HubSpot account to the Marketing Hub, allowing you to manage accounts, campaigns, contacts, leads etc. across multiple Marketing Elements. You will need your HubSpot account information to add an instance.",
    "image": "elements/provider_hubspot.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "If you do not have a HubSpot account, you can create one at <a href=\"http://www.hubspot.com\" target=\"_blank\">HubSpot Signup</a>",
    "defaultTransformations": [  ],
    "objectMetadata": [  ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": false,
    "extendable": true,
    "beta": false,
    "authentication": {
        "type": "oauth2"
    },
    "extended": false,
    "hub": "marketing",
    "protocolType": "http",
    "parameters": [],
    "private": false
      },
      "elementId": {{page.elementId}},
      "tags": [
        "Docs"
        ],
      "provisionInteractions": [],
      "valid": true,
      "disabled": false,
      "maxCacheSize": 0,
      "cacheTimeToLive": 0,
      "configuration": {    },
      "eventsEnabled": false,
      "traceLoggingEnabled": false,
      "cachingEnabled": false,
      "externalAuthentication": "none",
      "user": {
          "id": 3306
      }
    }
 }
```
