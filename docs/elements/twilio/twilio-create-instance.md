---
heading: Twilio SMS
seo: Create Instance | Twilio SMS | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 7
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your Twilio SMS Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Twilio SMS is "twilio".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
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
    "id": 7,
    "name": "Twilio SMS",
    "key": "twilio",
    "description": "Global Text Messaging API.  Build apps that send and receive SMS using phone numbers and short codes. Let friends say hello, tell customers their packages are delivered or alert employees that a shift is ready. The API enables users to communicate with your app or chat with one another; your code decides.",
    "image": "elements/provider_twilio.png",
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

{% include common-instance-config.md %}
