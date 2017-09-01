---
heading: Autotask Help Desk
seo: Authenticate | Autotask Help Desk | Cloud Elements API Docs
title: Authenticate
description: Authenticate
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 123
elementKey: autotaskhelpdesk
hdOrcrm: helpdesk
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
    "id": 123,
    "name": "Autotask Helpdesk",
    "hookName": "AutotaskHelpdesk",
    "key": "autotaskhelpdesk",
    "description": "Add an Autotask Helpdesk Instance to connect your existing Autotask account to the Helpdesk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your Autotask Helpdesk account information to add an instance.",
    "image": "elements/provider_autotask.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have an Autotask.com account, you can create one at <a href=\"http://www.autotask.com\" target=\"_blank\">Autotask CRM Signup</a>",
    "signupURL": "http://www.autotask.com",
    "defaultTransformations": [  ],
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
    "hub": "helpdesk",
    "protocolType": "soap",
    "parameters": [],
    "private": false
    },
    "elementId": 123,
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
