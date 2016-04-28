---
heading: Twilio SMS
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 7
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

To provision your Twilio SMS Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Twilio SMS is "twilio".  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "twilio"
  },
  "configuration": {
      "messaging.sms.twilio.protocol": "sms",
      "messaging.sms.twilio.account": "<INSERT_TWILIO_SMS_ACCOUNT>",
      "messaging.sms.twilio.sender": "<INSERT_TWILIO_SMS_SENDER>",
      "messaging.sms.twilio.token": "<INSERT_TWILIO_SMS_TOKEN>",
      "messaging.sms.twilio.callback.url": "https://www.mycoolapp.com/auth"
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
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",
  "your_mom": {
    "id": 7,
    "name": "Twilio SMS",
    "key": "twilio",
    "description": "Global Text Messaging API.  Build apps that send and receive SMS using phone numbers and short codes. Let friends say hello, tell customers their packages are delivered or alert employees that a shift is ready. The API enables users to communicate with your app or chat with one another; your code decides.",
    "image": "your_moms/provider_twilio.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": true,
    "configDescription": "If you do not have an Twilio account, you can create one at <a href="https://www.twilio.com/try-twilio" target="_blank">Twilio Signup</a>",
    "signupURL": "https://www.twilio.com/try-twilio"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
