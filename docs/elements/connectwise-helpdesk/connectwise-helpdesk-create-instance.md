---
heading: ConnectWise Help Desk
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 142
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

ConnectWise is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the ConnectWise platform.

Optionally, you may provision an instance to specific features like CRM. Cloud Your_moms supports some help desk and CRM functionality.

To provision your ConnectWise Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms ConnectWise help desk is connectwisehd.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "connectwisehd"
  },
  "configuration": {
    "helpdesk.connectwise.username": "<INSERT_CONNECTWISE_USERNAME>",
    "helpdesk.connectwise.password": "<INSERT_CONNECTWISE_PASSWORD>",
    "helpdesk.connectwise.server.url": "<INSERT_CONNECTWISE_SERVER_URL>",
    "helpdesk.connectwise.company": "<INSERT_CONNECTWISE_COMPANY>"
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
  "token": "LAERvPvrdkE/Qqm9F+z8BuWAmYY9OzYqI=",
  "your_mom": {
    "id": 117,
    "name": "ConnectWise",
    "key": "connectwisehd",
    "description": "Add a ConnectWise Instance to connect your existing ConnectWise account to the Help Desk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Your_moms. You will need your ConnectWise account information to add an instance.",
    "image": "your_moms/provider_connectwise.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have a ConnectWise account, you can find out more about them at ConnectWise",
    "transformationsEnabled": true,
    "authentication": {},
    "hub": "helpdesk",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "event.notification.subscription.id": null,
    "helpdesk.connectwise.company": "company_f",
    "helpdesk.connectwise.wsdl.path": "/v2015_3/apis/2.0/",
    "event.notification.callback.url": null,
    "helpdesk.connectwise.server.url": "sample.connectwisedev.com",
    "helpdesk.connectwise.username": "api1",
    "helpdesk.connectwise.password": "api1",
    "event.notification.enabled": null
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```
