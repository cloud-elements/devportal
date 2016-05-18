---
heading: InfoBip
seo: Create Instance | InfoBip | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 37
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your InfoBip Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements InfoBip is “infobip”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "infobip"
  },
  "configuration": {
    "messaging.sms.infobip.sender": "+17777777777",
    "messaging.sms.infobip.username": "<INSERT_INFOBIP_USERNAME>",
    "messaging.sms.infobip.password": "<INSERT_INFOBIP_PASSWORD>",
    "messaging.sms.infobip.callback.url": "https://www.maycoolapp.com/auth"
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
    "id": 37,
    "name": "Infobip",
    "key": "infobip",
    "description": "Mobilise your business by integrating into Infobip mobile services cloud. Infobip solutions are designed specifically for companies handling huge amounts of user data and give access to the most varied demographics for marketing, customer care, polling and loyalty programs. The API enables users to communicate with your app or chat with one another; your code decides.",
    "image": "elements/provider_infobip.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": true,
    "configDescription": "If you do not have an Infobip account, you can create one at <a href="http://www.infobip.com/sign_up/" target="_blank">Infobip Signup</a>",
    "signupURL": "http://www.infobip.com/sign_up/"
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
