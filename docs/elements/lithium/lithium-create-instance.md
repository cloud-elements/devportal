---
heading: Lithium Response
seo: Create Instance | Lithium Response | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 814
parent: Back to Element Guides
order: 15
---

## Create Instance

Lithium Response is a Social Platform. When you provision an instance, your app will have access to the different functionality offered by the Lithium Response platform.

### Step 1. Create an Instance

To provision your Lithium Response Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Lithium Response is "lithiumlsw".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "lithiumlsw"
  },
  "configuration": {
    "username": "<INSERT_LITHIUM_USERNAME>",
    "password": "<INSERT_LITHIUM_PASSWORD>",
    "baseUrl": "<INSERT_LITHIUM_RESPONSE_URL>"
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
   "id": 814,
   "name": "Lithium Response",
   "hookName": "Lithium",
   "key": "lithiumlsw",
   "description": "People share. Get in on the conversation.",
   "image": "http://www.lithium.com/assets/template/img/logo-green.png",
   "active": false,
   "deleted": false,
   "typeOauth": false,
   "trialAccount": false,
   "resources": []
 },
 "provisionInteractions": [],
 "valid": true,
 "disabled": false,
 "maxCacheSize": 0,
 "cacheTimeToLive": 0,
 "configuration": {
   "base.url": "https://{baseUrl}/api/v2",
   "bulk.add_metadata": null,
   "bulk.query.field_name": "",
   "pagination.max": "10",
   "event.vendor.type": "polling",
   "bulk.query.operator": null,
   "bulk.query.date_mask": "milliseconds",
   "bulk.attribute.created_time": "",
   "bulk.query.download_format": "JSON",
   "password": "********",
   "baseUrl": "my.response.lithium.com",
   "pagination.type": "offset",
   "bulk.relations": null,
   "event.poller.refresh_interval": "15",
   "event.notification.callback.url": null,
   "event.poller.configuration": "{\"authors\":{\"url\":\"/hubs/social/authors/changes?where=startEpochMillis ='${epoch:ms}'\",\"idField\":\"lswUuid\"}}",
   "username": "USERNAME",
   "event.notification.enabled": "false"
 },
 "eventsEnabled": false,
 "traceLoggingEnabled": false,
 "externalAuthentication": "none",
 "cachingEnabled": false,
 "user": {
   "id": 9723
 }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
