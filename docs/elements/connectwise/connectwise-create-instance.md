---
heading: ConnectWise
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 198
parent: Back to Element Guides
order: 15
---

## Create Instance

ConnectWise is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the ConnectWise platform.

Optionally, you may provision an instance to specific features like CRM. Cloud Elements supports some help desk and CRM functionality.  Below are examples of each method beginning with help desk.

To provision your ConnectWise Element, use the /instances API.

### Step 1. Call the /instances API

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements ConnectWise help desk is connectwisehd.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
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
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 1234,
  "name": "Test",
  "token": "LAERvPvrdkE/Qqm9F+z8BuWAmYY9OzYqI=",
  "element": {
    "id": 117,
    "name": "ConnectWise",
    "key": "connectwisehd",
    "description": "Add a ConnectWise Instance to connect your existing ConnectWise account to the Help Desk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your ConnectWise account information to add an instance.",
    "image": "elements/provider_connectwise.png",
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

##### CRM

This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements ConnectWise CRM is connectwisecrm.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "connectwisecrm"
  },
  "configuration": {
    "crm.connectwise.username": "<INSERT_CONNECTWISE_USERNAME>",
    "crm.connectwise.password": "<INSERT_CONNECTWISE_PASSWORD>",
    "crm.connectwise.server.url": "<INSERT_CONNECTWISE_SERVER_URL>",
    "crm.connectwise.company": "<INSERT_CONNECTWISE_COMPANY>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
