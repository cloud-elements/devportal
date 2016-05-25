---
heading: Twilio SMS V2
seo: Create Instance | Twilio SMS V2 | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 503
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your Twilio SMS V2 Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Twilio SMS V2 is "twiliov2".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "twiliov2"
  },
  "configuration": {
    "username":  "<INSERT_TWILIO_ACCOUNT_SID>",
    "password": "<INSERT_TWILIO_AUTHTOKEN>"
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
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",
  "element": {
      "id": 503,
      "name": "Twilio V2",
      "key": "twiliov2",
      "description": "Add a Twilio Instance to connect your existing Twilio account to the Messaging Hub, allowing you to send, receive and manage email, MMS, and SMS messages etc. across multiple Messaging Elements. You will need your Twilio account information, or use our trial account to add an instance.",
      "image": "elements/provider_twilio.png",
      "active": true,
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
      "base.url": "https://api.twilio.com/2010-04-01/Accounts",
      "password": "********",
      "pagination.type": "page",
      "event.poller.refresh_interval": "15",
      "event.notification.callback.url": null,
      "pagination.max": "100",
      "event.vendor.type": "polling",
      "event.poller.configuration": "{\"messages\":{\"url\":\"/hubs/messaging/messages?where=DateSent='${date:yyyy-MM-dd'T'HH:mm:ssXXX}'\",\"idField\":\"sid\"}}",
      "pagination.page.startindex": "0",
      "username": "TWILIO_ACCOUNT_SID",
      "event.notification.enabled": "false"
    },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "externalAuthentication": "none",
    "cachingEnabled": false
  }
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
