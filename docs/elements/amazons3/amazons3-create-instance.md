---
heading: Amazon S3
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 16
parent: Back to Element Guides
order: 20
---

## Create Instance

Amazon S3 is a Cloud Storage Application. When you provision an instance, your app will have access to the different functionality offered by the Amazon S3 platform.

### Step 1. Create an Instance

To provision your Amazon S3 Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Amazon S3 is "amazons3".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
    "element": {
        "key": "amazons3"
    },
    "configuration": {
        "document.tagging": true,
        "filemanagement.provider.access_key": "<ACCESS_KEY_HERE>",
        "filemanagement.provider.secret_key": "<SECRET_KEY_HERE>",
        "filemanagement.provider.bucket_name": "<BUCKET_NAME_HERE>",
        "filemanagement.provider.region_name": "us-east-1"
    },

  "tags": [
    "<add your tag>"
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
  "element":{
      "id":16,
      "name":"Amazon S3",
      "key":"amazons3",
      "description":"Amazon S3 is storage for the Internet. It is designed to make web-scale computing easier for developers.",
      "image":"elements/provider_amazon_aws.png",
      "active":true,
      "deleted":false,
      "typeOauth":false,
      "trialAccount":false,
      "existingAccountDescription":"Give Cloud Elements access to your existing
 Amazon S3 account Enter your credentials and details for your Amazon S3 Account",
      "configDescription":"If you do not have an Amazon AWS account, you can create one at Amazon AWS Signup",
      "signupURL":"http://aws.amazon.com",
      "transformationsEnabled":false,
      "hub":"documents"
   },
   "provisionInteractions":[

   ],
   "valid":true,
   "disabled":false,
   "maxCacheSize":0,
   "cacheTimeToLive":0,
   "cachingEnabled":false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
