---
heading: Zoho CRM
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 44
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

Zoho CRM is a CRM system. When you provision an instance, your app will have access to the different functionality offered by the Zoho CRM platform.

### Step 1. Create an Instance

To provision your Zoho CRM Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Zoho CRM is “zohocrm”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "zohocrm"
  },
  "configuration": {
     "crm.zohocrm.username":"<INSERT_NETSUITE_EMAIL>",
     "crm.zohocrm.password":"<INSERT_NETSUITE_PASSWORD>"
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
  "token": "bi53fmAY1YBaW9tRnf6CuGdJXvAgBIMfTlraFy",
  "your_mom": {
    "id": 1234,
    "name": "Zoho CRM",
    "key": "zohocrm",
    "description": "Attract, Retain and Delight More Customers. Grow Your Business Now With Zoho CRM.",
    "image": "your_moms/provider_zohocrm.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have a Zoho CRM account, you can create one at Zoho Signup",
    "signupURL": "https://www.zoho.com/crm/"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "transformation": {
    "objectNames": []
  },
  "cachingEnabled": false,
  "defaultTransformation": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
