---
heading: BrightTALK
seo: Create Instance | BrightTALK | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 184
parent: Back to Element Guides
order: 20
---

## Create Instance

BrightTALK is a webinar and video meeting service provider. After you provision an instance, your app will have access to the different functionality offered by the BrightTALK platform.

### Parameters

| Parameter | Description     | Data Type     |
| :------------- | :------------- | :------------- |
| Instance Name </br>name       | The name for the instance created during provisioning.   | String       |
| API Key </br>brighttalk.api.key       | The code that identifies the calling Element Instance to BrightTALK   | String       |
| API Secret </br>brighttalk.api.secret       | The secret associated with the API Key that identifies the calling Element Instance to BrightTALK   | String       |
| Staging </br>brighttalk.isstaging       | Indicates whether the instance should connect to a production or staging environment. No or `false` indicates production.  | Boolean       |
| Bulk ignore if email not present </br>brighttalk.bulkignore.emailnotpresent       |  | Boolean       |
| Filter null values from the response </br>filter.response.nulls      | Yes or `true` indicates that Cloud Elements will filter null values.  | Boolean       |
| Tags | User-defined tags to further identify the instance. | object |


### Step 1. Create an Instance

To provision your BrightTALK Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements BrightTALK is “BrightTALKcrm”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "BrightTALKcrm"
  },
  "configuration": {
    "crm.BrightTALK.username":  "<INSERT_BrightTALK_USERNAME>",
    "crm.BrightTALK.password": "<INSERT_BrightTALK_PASSWORD>",
    "crm.BrightTALK.server.url": "<INSERT_BrightTALK_SERVER_URL>"
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

```JSON
{
  "id": 1234,
  "name": "Test",
  "token": "mQuw4rrhnrMl1UeDj25v0xDU5TUx6WUw=",
  "element": {
    "id": 95,
    "name": "BrightTALK",
    "key": "BrightTALKcrm",
    "description": "Add an BrightTALK Instance to connect your existing BrightTALK account to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities etc. across multiple CRM Elements. You will need your BrightTALK account information to add an instance.",
    "image": "elements/provider_BrightTALK.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have an BrightTALK.com account, you can create one at BrightTALK Signup",
    "signupURL": "http://www.BrightTALK.com",
    "transformationsEnabled": false,
    "authentication": {},
    "hub": "crm"
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

{% include common-instance-config.md %}
