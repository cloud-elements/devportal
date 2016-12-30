---
heading: NetSuite 2016 CRM
seo: Create Instance | NetSuite 2016 CRM | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 988
parent: Back to Element Guides
order: 15
---

## Create Instance

NetSuite is an ERP system. When you provision an instance, your app will have access to the different functionality offered by the NetSuite platform.

### Step 1. Create an Instance

To provision your NetSuite Element, use the /instances API.

Below is an example of the provisioning API call.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements NetSuite is "netsuitecrmv2".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

#### Basic Authentication NetSuite 2016

```JSON
{
  "element": {
    "key": "netsuitecrmv2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "user.username": "<INSERT_NETSUITE_EMAIL>",
    "user.password": "<INSERT_NETSUITE_PASSWORD>",
    "netsuite.single.session.key": "<INSERT_NETSUITE_EMAIL>",
    "netsuite.single.session": "true",
    "netsuite.sso.roleId": "3",
    "netsuite.appId": "<INSERT_NETSUITE_APP_ID>",
    "authentication.type": "Basic",
    "netsuite.sandbox": "false"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

#### Token Based Authentication

```JSON
{
  "element": {
    "key": "netsuitecrmv2"
  },
  "configuration": {
    "netsuite.accountId": "<INSERT_NETSUITE_ACCOUNT_ID>",
    "netsuite.sso.roleId": "3",
    "authentication.type": "TokenBasedAuthentication",
    "consumer_key": "<INSERT_NETSUITE_CONSUMER_KEY>",
    "consumer_secret": "<INSERT_NETSUITE_CONSUMER_SECRET>",
    "token_id": "<INSERT_NETSUITE_ACCESS_TOKEN_ID>",
    "token_secret": "<INSERT_NETSUITE_ACCESS_TOKEN_SECRET>",
    "netsuite.single.session.key": "<INSERT_NETSUITE_EMAIL>",
    "netsuite.single.session": "true",
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
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 1234,
  "name": "Test",
  "token": "r5Bw7cRiyiyNh913Dw03uxijgu28zA0=",
  "element": {
    "id": 15,
    "name": "Netsuite CRM",
    "key": "netsuitecrmv2",
    "description": "NetSuite CRM",
    "image": "elements/provider_netsuite.png",
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

{% include common-instance-config.md %}
