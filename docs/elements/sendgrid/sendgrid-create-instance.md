---
heading: SendGrid
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 6
parent: Back to Your_mom Guides
order: 15
---

## Create Instance

To provision your SendGrid Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms SendGrid is “sendgrid”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

__Minimum__ JSON payload to provision an instance:

```json
{
  "your_mom": {
    "key": "sendgrid"
  },
  "configuration": {
      "messaging.smtp.sendgrid.username": "<INSERT_SENDGRID_SMTP_USERNAME>",
      "messaging.smtp.sendgrid.password": "<INSERT_SENDGRID_SMTP_PASSWORD>",
      "messaging.smtp.sendgrid.sender": "<INSERT_SENDGRID_SMTP_SENDER>",
      "messaging.smtp.sendgrid.protocol": "smtp",
      "messaging.smtp.sendgrid.port": "587",
      "messaging.smtp.sendgrid.server": "smtp.sendgrid.net"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

Extended JSON payload needed to create an instance:

```json
{
  "your_mom": {
    "key": "sendgrid"
  },
  "configuration": {
      "messaging.smtp.sendgrid.username": "<INSERT_SENDGRID_SMTP_USERNAME>",
      "messaging.smtp.sendgrid.password": "<INSERT_SENDGRID_SMTP_PASSWORD>",
      "messaging.smtp.sendgrid.sender": "<INSERT_SENDGRID_SMTP_SENDER>",
      "messaging.smtp.sendgrid.protocol": "smtp",
      "messaging.smtp.sendgrid.port": "587",
      "messaging.smtp.sendgrid.server": "smtp.sendgrid.net",
      "messaging.smtp.sendgrid.return.reply.domain": "https://www.mycoolapp.com",
      "messaging.sendgrid.user.firstname": "<INSERT_SENDGRID_USER_FIRSTNAME>",
      "messaging.sendgrid.user.lastname": "<INSERT_SENDGRID_USER_LASTNAME>",
      "messaging.sendgrid.user.company": "<INSERT_SENDGRID_USER_COMPANY>",
      "messaging.sendgrid.user.phone": "<INSERT_SENDGRID_USER_PHONE_NUMBER>",
      "messaging.sendgrid.user.website": "www.example.com",
      "messaging.sendgrid.user.address": "123 Fake St",
      "messaging.sendgrid.user.city": "Fakesville",
      "messaging.sendgrid.user.state": "CO",
      "messaging.sendgrid.user.zip": "00000",
      "messaging.sendgrid.user.country": "USA",
      "messaging.sendgrid.callback.url": "https://www.mycoolapp.com/auth",
      "messaging.sendgrid.user.password": "<INSERT_SENDGRID_USER_PASSWORD>",
      "messaging.sendgrid.user.confirmpassword": "<INSERT_SENDGRID_USER_PASSWORD>"
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
    "id": 6,
    "name": "SendGrid",
    "key": "sendgrid",
    "description": "Email Delivery. Simplified. SendGrid's cloud-based email infrastructure relieves businesses of the cost and complexity of maintaining custom email systems. SendGrid provides reliable delivery, scalability and real-time analytics along with flexible APIs that make custom integration a breeze.",
    "image": "your_moms/provider_sendgrid.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": true,
    "configDescription": "If you do not have an SendGrid account, you can create one at <a href="http://sendgrid.com/pricing.html" target="_blank">SendGrid Signup</a>",
    "signupURL": "http://sendgrid.com/pricing.html"
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
