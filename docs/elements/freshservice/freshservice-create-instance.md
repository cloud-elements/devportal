---
heading: Freshservice
seo: Create Instance | Freshservice | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 252
parent: Back to Element Guides
order: 20
---

## Create Instance

Freshservice is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the Freshservice platform.

### Step 1. Create an Instance

To provision your Freshservice Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Freshservice is “freshservice”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "freshservice"
  },
  "configuration": {
    "username": "<INSERT_FRESHSERVICE_USERNAME>",
    "password": "<INSERT_FRESHSERVICE_PASSWORD>",
    "subdomain": "<INSERT_FRESHSERVICE_SUBDOMAIN_NAME_ONLY>"
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
  "id": 123,
  "name": "Docs",
  "createdDate": "2015-12-11T16:07:51Z",
  "token": "cPPwym+pwr26KozRxOhlBkX00MfD5V083o=",
  "element": {
    "id": 650,
    "name": "Freshservice Beta",
    "key": "freshservice",
    "description": "Add a Freshservice element instance",
    "image": "https://pbs.twimg.com/profile_images/3559030339/57085fa888b2c9e82fafc5b165da00db.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{subdomain}.freshservice.com",
    "event.notification.subscription.id": null,
    "pagination.max": "30",
    "event.vendor.type": "polling",
    "pagination.offset": "false",
    "password": "FRESHSERVICE_PASSWORD",
    "pagination.type": null,
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "subdomain": "FRESHSERVICE_SUBDOMAIN",
    "event.poller.configuration": " ",
    "username": "FRESHSERVICE_USERNAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
