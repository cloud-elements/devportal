---
heading: Autotask CRM
seo: Authenticate | Autotask CRM | Cloud Elements API Docs
title: Authenticate
description: Authenticate
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 50
elementKey: autotaskcrm
hdOrcrm: crm
parent: Back to Element Guides
order: 20
---

{% include Elements/autotask/authenticate.md%}

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
    "id": 50,
    "name": "Autotask CRM",
    "hookName": "AutotaskCRM",
    "key": "autotaskcrm",
    "description": "Add an Autotask CRM Instance to connect your existing Autotask account to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your Autotask CRM account information to add an instance.",
    "image": "elements/provider_autotask.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have an Autotask.com account, you can create one at <a href=\"http://www.autotask.com\" target=\"_blank\">Autotask CRM Signup</a>",
    "signupURL": "http://www.autotask.com",
    "defaultTransformations": [  ],
    "objectMetadata": [  ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": false,
    "extendable": true,
    "beta": false,
    "authentication": {
        "type": "basic"
    },
    "extended": false,
    "hub": "crm",
    "protocolType": "soap",
    "parameters": [  ],
    "private": false
    },
    "elementId": 50,
    "tags": [
      "Docs"
      ],
    "provisionInteractions": [  ],
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
        "id": 12345
      }
}
```
