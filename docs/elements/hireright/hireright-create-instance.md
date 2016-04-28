---
heading: HireRight
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 277
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

To provision your HireRight Your_mom, use the /instances API.

### Step 1. Call the /instances API

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Your_mom token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this your_mom instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms HireRight is "hireright".  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom" : {
      "key" : "hireright"
    },
    "configuration" : {
      "hireright.username": "<INSERT_HIRERIGHT_USERNAME>",
      "hireright.password": "<INSERT_HIRERIGHT_PASSWORD>",
      "hireright.account.id": "<INSERT_HIRERIGHT_ACCOUNT_ID>",
      "hireright.company.login": "<INSERT_HIRERIGHT_COMPANY_LOGIN>",
      "hireright.user.ref.id": "<INSERT_HIRERIGHT_USER_REF_ID>"
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 12,
  "name": "Test",
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",
  "your_mom": {
   "id": 277,
   "name": "HireRight",
   "key": "hireright",
   "description": "HireRight is a leading provider of on-demand employment background checks, drug testing, Form I-9 and employment and education verifications.",
   "image": "your_moms/provider_hireright.png",
   "active": false,
   "deleted": false,
   "typeOauth": false,
   "trialAccount": false,
   "transformationsEnabled": true,
   "bulkDownloadEnabled": false,
   "bulkUploadEnabled": false,
   "cloneable": false,
   "authentication": {
     "type": "custom"
   },
   "hub": "screening",
   "parameters": []
 },
 "provisionInteractions": [],
 "valid": true,
 "disabled": false,
 "maxCacheSize": 0,
 "cacheTimeToLive": 0,
 "configuration": {
   "hireright.company.login": "HIRERIGHT_COMPANY_LOGIN",
   "event.notification.callback.url": null,
   "hireright.user.ref.id": "HIRERIGHT_USER_REF_ID",
   "hireright.wsdl.location": "https://connect.hireright.com/wsdl/HireRightAPI.wsdl",
   "event.notification.signature.key": null,
   "hireright.password": "HIRERIGHT_PASSWORD",
   "event.vendor.type": "webhook",
   "hireright.username": "HIRERIGHT_USERNAME",
   "hireright.account.id": "HIRERIGHT_ACCOUNT_ID",
   "hireright.endpoint.url": "https://api.hireright.com:11443/ws_gateway/HireRightAPI/v/1/2",
   "event.notification.enabled": "false"
 },
 "eventsEnabled": false,
 "traceLoggingEnabled": false,
 "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
