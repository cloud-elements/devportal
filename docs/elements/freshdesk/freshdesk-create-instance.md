---
heading: Freshdesk
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 144
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

Freshdesk is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the Freshdesk platform.

### Step 1. Create an Instance

To provision your Freshdesk Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Freshdesk is “freshdesk”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```JSON
{
  "your_mom": {
    "key": "freshdesk"
  },
  "configuration": {
    "username": "<INSERT_FRESHDESK_USERNAME>",
    "password": "<INSERT_FRESHDESK_PASSWORD>",
    "subdomain": "<INSERT_FRESHDESK_SUBDOMAIN_URL>"
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
  "token": "/sO6vVsB2eXhOlgvNR/p+G7wC/+rhY5M=",
  "your_mom": {
    "id": 130,
    "name": "Freshdesk Beta",
    "key": "freshdesk",
    "description": "Add a Freshdesk Instance to connect your existing Freshdesk account to the Help Desk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Your_moms. You will need your Freshdesk account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/3159951933/1511f0f59e3f239a8ef707b1db3a42e3.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "hub": "helpdesk",
    "parameters": [
      {
        "id": 38,
        "createdDate": "2015-04-08T19:53:48Z",
        "name": "subdomain",
        "vendorName": "subdomain",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "your_momId": 130,
        "required": false
      }
    ]
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{subdomain}.freshdesk.com",
    "pagination.offset": "false",
    "password": "password",
    "pagination.max": "30",
    "subdomain": "https://sample.freshdesk.com",
    "username": "sample@sample.com"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
