---
heading: Pipedrive
seo: Create Instance | Pipedrive | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 167
parent: Back to Element Guides
order: 15
---

## Create Instance

Pipedrive is a CRM system. When you provision an instance, your app will have access to the different functionality offered by the Pipedrive platform.

### Step 1. Create an Instance

To provision your Pipedrive Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Pipedrive is "pipedrive".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "pipedrive"
  },
  "configuration": {
    "pipedrive.email": "<INSERT_PIPEDRIVE_EMAIL>",
    "pipedrive.password": "<INSERT_PIPEDRIVE_PASSWORD>"
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
  "token": "bHtCEV5ufn8BB6FaXn/fBxs2LBqpHvE4A0=",
  "element": {
    "id": 16,
    "name": "Pipedrive Beta",
    "key": "pipedrive",
    "description": "Add an Pipedrive Instance to connect your existing Pipedrive account to the CRM Hub, allowing you to manage contacts, accounts, opportunities etc. across multiple CRM Elements. You will need your Pipedrive account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/501332028000702464/rDOcFppt.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
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
    "base.url": "https://api.pipedrive.com/v1",
    "pagination.offset": "true",
    "event.notification.instance.finder": null,
    "event.notification.callback.url": null,
    "pagination.max": "100",
    "pipedrive.email": "PIPEDRIVE_EMAIL",
    "event.vendor.type": "webhook",
    "pipedrive.api.token": "PIPEDRIVE_API_TOKEN",
    "pipedrive.password": "PIPEDRIVE_PASSWORD",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
