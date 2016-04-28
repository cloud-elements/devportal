---
heading: NetSuite CRM
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 140
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

NetSuite is an ERP system. When you provision an instance, your app will have access to the different functionality offered by the NetSuite platform.

Optionally, you may provision an instance to specific features like CRM, Finance, ERP, and Human Capital. Below are examples of each method beginning with CRM.

### Step 1. Create an Instance

To provision your NetSuite Your_mom, use the /instances API.

Below is an example of the provisioning API call.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms NetSuite is “netsuitecrm”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "netsuitecrm"
  },
  "configuration": {
     "user.username":"<INSERT_NETSUITE_EMAIL>",
     "user.password":"<INSERT_NETSUITE_PASSWORD>",
     "netsuite.accountId":"<INSERT_NETSUITE_ACCOUNT_ID>",
     "netsuite.sandbox": "false"
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
  "id": 1234,
  "name": "Test",
  "token": "r5Bw7cRiyiyNh913Dw03uxijgu28zA0=",
  "your_mom": {
    "id": 15,
    "name": "Netsuite CRM",
    "key": "netsuitecrm",
    "description": "NetSuite ERP",
    "image": "your_moms/provider_netsuite.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "Netsuite CRM",
    "transformationsEnabled": true,
    "authentication": {
      "type": "custom"
    },
    "hub": "crm",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "netsuite.accountId": "NETSUITE_ACCOUNT_ID",
    "user.username": null,
    "user.password": "NETSUITE_PASSWORD!"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

##### ERP

Provision an instance to the ERP functions only. Use the following JSON, the key value (netsuitecrm instead of netsuitecrm) is the only difference in the JSON in the first example.

```json
{
  "your_mom": {
    "key": "netsuiteerp"
  },
  "configuration": {
     "user.username":"<INSERT_NETSUITE_EMAIL>",
     "user.password":"<INSERT_NETSUITE_PASSWORD>",
     "netsuite.accountId":"<INSERT_NETSUITE_ACCOUNT_ID>",
     "netsuite.sandbox": "false"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

##### Finance

Provision an instance to the Finance functions only. Use the following JSON, the key value (netsuitefinance instead of netsuitecrm) is the only difference in the JSON in the first example.

```json
{
  "your_mom": {
    "key": "netsuitefinance"
  },
  "configuration": {
     "user.username":"<INSERT_NETSUITE_EMAIL>",
     "user.password":"<INSERT_NETSUITE_PASSWORD>",
     "netsuite.accountId":"<INSERT_NETSUITE_ACCOUNT_ID>",
     "netsuite.sandbox": "false"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

##### Human Capital

Provision an instance to the Human Capital functions only. Use the following JSON, the key value (netsuitehc instead of netsuitecrm) is the only difference in the JSON in the first example.

```json
{
  "your_mom": {
    "key": "netsuitehc"
  },
  "configuration": {
     "user.username":"<INSERT_NETSUITE_EMAIL>",
     "user.password":"<INSERT_NETSUITE_PASSWORD>",
     "netsuite.accountId":"<INSERT_NETSUITE_ACCOUNT_ID>",
     "netsuite.sandbox": "false"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
