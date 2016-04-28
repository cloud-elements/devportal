---
heading: Pardot
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 90
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

Pardot is a Marketing Platform. When you provision an instance, your app will have access to the different functionality offered by the Pardot platform.

### Step 1. Create an Instance

To provision your Pardot Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Pardot is “pardot”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```JSON
{
  "your_mom": {
    "key": "pardot"
  },
  "configuration": {
    "apikey.user.name":  "<INSERT_PARDOT_USERNAME>",
    "apikey.user.password": "<INSERT_PARDOT_PASSWORD>",
    "apikey.user.key": "<INSERT_PARDOT_API_USER_KEY>"
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

```JSON
{
  "id": 1234,
  "name": "Test",
  "token": "mQuw4rrhnrMl1UeDj25v0xDU5TUx6WUw=",
  "your_mom": {
    "id": 95,
    "name": "Pardot Helpdesk",
    "key": "autotaskhelpdesk",
    "description": "Add an Pardot Helpdesk Instance to connect your existing Pardot account to the Helpdesk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Your_moms. You will need your Pardot Helpdesk account information to add an instance.",
    "image": "your_moms/provider_autotask.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have an Pardot.com account, you can create one at Pardot CRM Signup",
    "signupURL": "http://www.autotask.com",
    "transformationsEnabled": false,
    "authentication": {},
    "hub": "helpdesk"
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
