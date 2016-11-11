---
heading: Salesforce Marketing Cloud
seo: Create Instance | Salesforce Marketing Cloud | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1357
parent: Back to Element Guides
order: 20
---

## Create Instance

Salesforce is a Customer Success Platform. When you provision an instance, your app will have access to the different functionality offered by the Salesforce platform.

### Step 1. Create an Instance

To provision your Salesforce Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Salesforce is "salesforcemarketingcloud".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "salesforcemarketingcloud"
  },
  "configuration": {
    "clientId": "<INSERT_CLIENT_ID>",
    "clientSecret": "<INSERT_CLIENT_SECRET>"
  },
  "tags": [
    "<ADD_YOUR_TAG>"
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
  "id": 123,
  "name": "test",
  "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
  "element": {
    "id": 2102,
    "name": "Salesforce Marketing Cloud",
    "key": "salesforcemarketingcloud",
    "description": "Add a Salesforce Marketing Cloud Instance to connect your existing Salesforce Marketing Cloud account to the Marketing Hub, allowing you to manage activities, campaigns, and contacts across multiple Marketing Elements and other Salesforce services. You will need your Salesforce Marketing Cloud account information to add an instance.",
    "image": "elements/provider_sfdcmarketingcloud.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "authentication": {
      "type": "custom"
    },
    "hub": "marketing",
    "protocolType": "http",
    "parameters": [
      {
        "id": 1672,
        "createdDate": "2016-11-04T04:26:24Z",
        "name": "requestToken",
        "vendorName": "Authorization",
        "type": "configuration",
        "vendorType": "header",
        "source": "request",
        "elementId": 2102,
        "required": false
      }
    ],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://www.exacttargetapis.com/",
    "bulk.add_metadata": null,
    "clientId": "CLIENT_ID",
    "bulk.query.field_name": "modifiedDate",
    "pagination.max": "50",
    "bulk.query.operator": ">",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
    "bulk.query.download_format": "JSON",
    "pagination.type": "page",
    "bulk.relations": null,
    "clientSecret": "CLIENT_SECRET",
    "authentication.time": "1478271074092",
    "requestToken": "1234MCAIDADAL",
    "expires_in": "3477",
    "pagination.page.startindex": "1"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
