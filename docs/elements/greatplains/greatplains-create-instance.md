---
heading: Microsoft Dynamics Great Plains
title: Create Instance
description: Create Instance
layout: docs
order: 20
---

## Create Instance

Microsoft Dynamics Great Plains is a Finance Platform. When you provision an instance, your app will have access to the different functionality offered by the Microsoft Dynamics Great Plains platform.

### Step 1. Create an Instance

To provision your Microsoft Dynamics Great Plains Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Microsoft Dynamics Great Plains is “greatplains”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "greatplains"
  },
  "configuration": {
    "greatplains.user.name":"<INSERT_GREAT_PLAINS_USERNAME>",
	  "greatplains.user.password":"<INSERT_GREAT_PLAINS_PASSWORD>",
	  "greatplains.company.name":"<INSERT_GREAT_PLAINS_COMPANY_NAME>",
	  "greatplains.service.url":"https://<INSERT_GREAT_PLAINS_HOST>:/DynamicsGPWebServices/DynamicsGPService.asmx;"
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
  "id": 123,
  "name": "Test",
  "token": "U7VE7kA/LoXkW8OJW27EX6sALHr7VKj0=",
  "element": {
    "id": 123,
    "name": "Microsoft Great Plains Beta",
    "key": "greatplains",
    "description": "Add a Microsoft Dynamics Instance to connect your existing Microsoft Dynamics account to the Finance Hub, allowing you to manage customers, employees, invoices, purchase orders, etc. across multiple Finance Elements. You will need your Microsoft Dynamics account information to add an instance.",
    "image": "elements/provider_greatplains.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "existingAccountDescription": "This integrates to th Microsoft Legacy Great Plains Web Services.",
    "configDescription": "Use this to configure your Great Plains account with your hosted provider. ",
    "transformationsEnabled": true,
    "authentication": {},
    "hub": "finance",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
