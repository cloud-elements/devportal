---
heading: Infusionsoft CRM
seo: Authenticate | Infusionsoft CRM | Cloud Elements API Docs
title: Authenticate
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 191
elementKey: infusionsoftcrm
apiKey: Key Name #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Secret Name #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Callback URL Name #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 20
---
{% include Elements/infusionsoft/authenticate.md%}

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
      "id": 191,
      "name": "Infusionsoft",
      "hookName": "Infusionsoft",
      "key": "infusionsoftcrm",
      "description": "Add an Infusionsoft Instance to connect your existing Infusionsoft account to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your Infusionsoft account information to add an instance.",
      "image": "https://pbs.twimg.com/profile_images/378800000727744956/dd537d4a5255fc3aef14d27ec04a823a_400x400.png",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "bulkDownloadEnabled": false,
      "bulkUploadEnabled": false,
      "cloneable": true,
      "extendable": true,
      "beta": true,
      "authentication": {
          "type": "oauth2"
      },
      "extended": false,
      "hub": "crm",
      "protocolType": "http",
      "parameters": [  ]
    },
    "elementId": 191,
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
        "id": 12345
      }
}
```
