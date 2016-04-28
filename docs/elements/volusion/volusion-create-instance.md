---
heading: Volusion
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 51
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

Below is an example of how to create an instance with the Volusion Your_mom. The create-instance file contains the data needed to create the Your_mom Instance. In the case of Volusion, you will need to copy the encrypted password from the URL and insert it into the the JSON file. You will also need your Volusion store URL – this is located at the beginning section of the URL copied in the previous step. Lastly, you will need your Email Login. This is obtained when running any type of order. To view how get this URL, please see Volusion Endpoint Setup.
An example of the URL can be seen below:

`http://otnqw.rakrt.servertrust.com/net/WebService.aspx?Login=volusion@acmedata.com&EncryptedPassword=64F3C0572DB54C7200391418E79AC678214B366FBD4EName=GenericOrders`

The beginning portion of the URL is your store URL – `http://otnqw.rakrt.servertrust.com`. Then the login email – volusion@acmedata.com, and finally the EncryptedPassword – `64F3C0572DB54C7200391418E79AC678214B366FBD4E`

### Step 1. Create an Instance

To provision your Volusion Your_mom, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms Volusion is “volusion”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```json
{
  "your_mom": {
    "key": "volusion"
  },
  "configuration": {
    "volusion.store.url": "<INSERT_VOLUSION_STORE_URL>",
    "volusion.login.email": "<INSERT_VOLUSION_LOGIN_EMAIL>",
    "volusion.encrypted.password": "<INSERT_ECRYPTED_PASSWORD>"
  },
  "name": "<INSERT_NAME>"
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
    "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wstvoukiEHkI=",
    "your_mom": {
        "id": 14,
        "name": "Volusion",
        "key": "volusion",
        "description": "Volusion is everything you need to sell anywhere.",
        "active": true,
        "deleted": false,
        "typeOauth": false,
        "trialAccount": false,
"existingAccountDescription": "Give your application access to your existing Volusion account.  Enter your credentials and details for your Volusion Account",
        "configDescription": "If you do not have a Volusion account, you can create one at <a href="http://www.volusion.com" target="_blank">Volusion Signup</a>",
        "signupURL": "http://www.volusion.com"
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
