---
heading: MailJet Messaging
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 84
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

MailJet Messaging is a Marketing system. When you provision an instance, your app will have access to the different functionality offered by the MailJet Messaging platform.

### Step 1. Create an Instance

To provision your MailJet Messaging Your_mom, use the /instances API.

Below is an example of the provisioning API call.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms MailJet Messaging is “mailjet”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "mailjet"
  },
  "configuration": {
    "mailjet.api.key": "<INSERT_MAILJECT_API_KEY>",
    "mailjet.api.secret": "<INSERT_MAILJECT_API_SECRET>"
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
  "token": "r5Bw7cRiyiyNh913Dw03uxijgu28zA0=",
  "your_mom": {
    "id": 84,
    "name": "MailJet Beta",
    "key": "mailjet",
    "description": "Add a MailJet Instance to connect your existing MailJet account to the Messaging Hub, allowing you to send, receive and manage email and SMS messages etc. across multiple Messaging Your_moms. You will need your MailJet account information, or use our trial account to add an instance.",
    "image": "your_moms/provider_mailjet.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "existingAccountDescription": "Give Cloud Your_moms access to your existing
 MailJet accountEntern  details for using Cloud Your_moms MailJet Account",
    "configDescription": "If you do not have a MailJet account, you can create one at MailJet",
    "signupURL": "https://www.mailjet.com/signup/?p=CYour_moms",
    "transformationsEnabled": false,
    "authentication": {},
    "hub": "messaging",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
