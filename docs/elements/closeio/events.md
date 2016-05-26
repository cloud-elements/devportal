---
heading: Close.io
seo: Events | Close.io | Cloud Elements API Docs
title: Events
description: Enable Close.io events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 166
parent: Back to Element Guides
order: 30
---

## Events

Cloud Elements supports both polling and webhook events for Close.io.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "closeio"
  },
  "configuration": {
    "username": "<INSERT_CLOSE_IO_API_KEY>",
    "password": "<INSERT_CLOSE_IO_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

### Webhooks

Close.io requires an extra specification to be entered once an Element instance has been created. The Close.io Instance ID must be 64 base encoded, then included in the webhook callback URL. This document will walk you through the entire workflow:

* create an instance
* retrieve the instance ID
* 64base Encode Instance ID
* webhook setup

## Create Instance

To provision your Close.io Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Close.io is “closeio”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "closeio"
  },
  "configuration": {
    "username": "<INSERT_CLOSE_IO_API_KEY>",
    "password": "<INSERT_CLOSE_IO_PASSWORD>"
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
  "id": 12,
  "name": "Test",
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",
  "element": {
    "id": 146,
    "name": "Close.io Beta",
    "key": "closeio",
    "description": "Add a Close.io CRM Instance to connect your existing Close.io account to the CRM Hub, allowing you to manage contacts, accounts, opportunities, etc. across multiple CRM Elements. You will need your Close.io CRM account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/497905627948015616/vNCOkr1Z.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "transformationsEnabled": true,
    "authentication": {
      "type": "basic"
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
    "base.url": "https://app.close.io/api/v1",
    "pagination.offset": "true",
    "password": "CLOSE_IO_PASSOWRD",
    "pagination.max": "100",
    "username": "CLOSE_IO_API_KEY"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

Retrieve Instance ID from the create instance response:
![Close.io Retrieve Instance ID](http://cloud-elements.com/wp-content/uploads/2015/08/Close.ioWebHookID.png)

Copy the Instance ID and go to a 64Base Encoding website.

Here is a sample site that will 64 base encode your instance ID: [https://www.base64encode.org/](https://www.base64encode.org/).

Copy the ID, encode it, then copy the encoded ID.

Place the ID in the following URL:

`https://api.cloud-elements.com/elements/api-v2/events/closeio/{INSERT_64BASE_ENCODED_INSTANCE_ID}`

An example of the URL once the Instance ID has been encoded:

`https://api.cloud-elements.com/elements/api-v2/events/closeio/MjA5MzE=`

Currently, webhooks cannot be setup via the Close.io UI.
Close.io requests an email be sent with the URL of webhook and they will POST data to that endpoint.

Excerpt from the [Close.io Developer Docs](http://developer.close.io/):

------------

Webhooks

Send us an email at [support@close.io](mailto:support@close.io) with the URL of your webhook and we will POST the data to that endpoint for each created/updated lead. Here's an example payload:

```JSON
{
    'model': 'lead',
    'event': 'create',  # create|update|delete|merge
    'data': { ... }  # serialized object, same as the response of `/lead/{id}/`. In the case of a delete it will just be the 'id' of the object. A merge event will have the source_id and destination_id in the payload.
}
```

A webhook request is attempted up to 3 times with retries taking place every 5 minutes.

-----------

End Excerpt

Include the following URL with 64Base encoded Instance ID in your email message to Close.io:
`https://api.cloud-elements.com/elements/api-v2/events/closeio/{INSERT_64BASE_ENCODED_INSTANCE_ID}`
