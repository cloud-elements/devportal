---
heading: ServiceNow
title: Create Instance
description: Create Instance
layout: docs
order: 20
---

## Create Instance

ServiceNow is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the ServiceNow platform.

### Step 1. Create an Instance

To provision your ServiceNow Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements ServiceNow is “servicenow”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "servicenow"
  },
  "configuration": {
    "username":"<INSERT_SERVICENOW_USERNAME>",
    "password":"<INSERT_SERVICENOW_PASSWORD>",
    "servicenow.subdomain":"<INSERT_SERVICENOW_SUBDOMAIN_URL>"
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
  "token": "YT70SDqDVrhw/TMD5oV831Yurfjk6E=",
  "element": {
    "id": 140,
    "name": "ServiceNow Beta",
    "key": "servicenow",
    "description": "ServiceNow is changing the way people work, offering service management for every department in the enterprise including IT, human resources, facilities & more.",
    "image": "https://pbs.twimg.com/profile_images/378800000041139697/cf1e6299ecb533ed82725abe96bb96a9_400x400.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "transformationsEnabled": true,
    "authentication": {
      "type": "basic"
    },
    "hub": "helpdesk",
    "parameters": [
      {
        "id": 39,
        "createdDate": "2015-04-17T16:45:19Z",
        "name": "servicenow.subdomain",
        "vendorName": "subdomain",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "elementId": 140,
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
    "base.url": "https://{subdomain}.service-now.com/api/now/v1/table",
    "event.notification.instance.finder": null,
    "pagination.offset": "true",
    "password": "password",
    "event.notification.callback.url": null,
    "pagination.max": "200",
    "servicenow.subdomain": "https://subdomain.service-now.com/",
    "event.vendor.type": "webhook",
    "username": "username",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
