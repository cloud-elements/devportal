---
heading: SAP S/4 BAPI
apiProvider: SAP S/4 # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Authenticate | SAP S/4 BAPI | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6354
elementKey: saps4bapi
username: user  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 20
---

{% include Elements/sapbapi/authenticate.md%}

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2018-04-04T20:44:36Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=",
  "element": {
      "id": 6354,
      "name": "SAP S/4 BAPI",
      "hookName": "SapBapi",
      "key": "saps4bapi",
      "description": "Add a SAP Element to connect your existing S4 to the ERP Hub, allowing you to manage all of your ERP activities across multiple ERP Elements. You will need your SAP account information to add an instance.",
      "image": "elements/custom-element-default-logo.png",
      "logo": "sap",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "resources": [ ],
      "transformationsEnabled": true,
      "bulkDownloadEnabled": false,
      "bulkUploadEnabled": false,
      "cloneable": true,
      "extendable": true,
      "beta": false,
      "authentication": {
          "type": "custom"
      },
      "extended": false,
      "useModelsForMetadata": true,
      "hub": "erp",
      "protocolType": "sapbapi",
      "parameters": [  ],
      "private": false
    },
    "elementId": 6354,
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
    "user": {  }
}
```
