---
heading: Oracle Service Cloud
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 88
parent: Back to Element Guides
order: 20
---

## Create Instance

Oracle Service Cloud is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the Oracle Service Cloud platform.

### Step 1. Create an Instance

To provision your Oracle Service Cloud Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Oracle Service Cloud is “servicecloud”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "servicecloud"
  },
  "configuration": {
  	"helpdesk.servicecloud.username":  "<INSERT_SERVICECLOUD_USERNAME>",
  	"helpdesk.servicecloud.password":  "<INSERT_SERVICECLOUD_PASSWORD>",
  	"helpdesk.servicecloud.endpointurl":  "https://<host_name>/cgi-bin/<interface>.cfg/services/soap?wsdl"
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

```JSON
{
  "id": 12,
  "name": "TestWP",
  "token": "nbL4QohEoI3L3CGbqFFhNBkRISldtNQ=",
  "element": {
    "id": 58,
    "name": "Oracle ServiceCloud",
    "key": "servicecloud",
    "description": "Oracle Service Cloud combines Web, Social and Contact Center experiences for a unified, cross-channel service solution in the Cloud, enabling organizations to increase sales and adoption, build trust and strengthen relationships, and reduce costs and effort. Integrate your applications with Oracle Service Cloud using Cloud Elements",
    "image": "elements/provider_servicecloud.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have an Servicecloud account, you can create one at Service Cloud Register",
    "signupURL": "https://go.oracle.com/LP=674",
    "transformationsEnabled": true,
    "hub": "helpdesk"
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
