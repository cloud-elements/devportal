---
heading: MailJet Marketing
seo: Create Instance | MailJet Marketing | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 87
parent: Back to Element Guides
order: 15
---

## Create Instance

MailJet Marketing is a Marketing system. When you provision an instance, your app will have access to the different functionality offered by the MailJet Marketing platform.

### Step 1. Create an Instance

To provision your MailJet Marketing Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements MailJet Marketing is “mailjetmarketing”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "mailjetmarketing"
  },
  "configuration": {
    "mailjetmarketing.api.key": "<INSERT_MAILJECT_API_KEY>",
    "mailjetmarketing.api.secret": "<INSERT_MAILJECT_API_SECRET>"
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
  "token": "r5Bw7cRiyiyNh913Dw03uxijgu28zA0=",
  "element": {
    "id": 84,
    "name": "MailJet Marketing Beta",
    "key": "mailjetmarketing",
    "description": "Add a MailJet Instance to connect your existing MailJet account to the Messaging Hub, allowing you to send, receive and manage email and SMS messages etc. across multiple Messaging Elements. You will need your MailJet account information, or use our trial account to add an instance.",
    "image": "elements/provider_mailjet.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "existingAccountDescription": "Give Cloud Elements access to your existing
 MailJet accountEntern  details for using Cloud Elements MailJet Account",
    "configDescription": "If you do not have a MailJet account, you can create one at MailJet",
    "signupURL": "https://www.mailjet.com/signup/?p=CElements",
    "transformationsEnabled": false,
    "authentication": {},
    "hub": "marketing",
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

{% include common-instance-config.md %}
