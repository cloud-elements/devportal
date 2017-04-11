---
heading: GoodData
seo: Create Instance | GoodData | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1469
parent: Back to Element Guides
order: 15
---

## Create Instance

You will need your GoodData Username, Password, and SiteAddress.

Please see the [GoodData API Documentation](https://developer.gooddata.com/api#/introduction/) for more information.

The [GoodData Getting Started Guide](https://developer.gooddata.com/getting-started) also provides information about how to sign up, as well as, information on the GoodData API.

When you provision an instance, your app will have access to the different functionality offered by the GoodData platform.

### Step 1. Create an Instance

To provision your GoodData Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements GoodData is "pipedrive".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "gooddata"
  },
  "configuration": {
    "username": "<INSERT_GOODDATA_USERNAME>",
    "password": "<INSERT_GOODDATA_PASSWORD>",
    "siteAddress": "<INSERT_GOODDATA_SITEADDRESS>"
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
  "id": 1234,
  "name": "Test",
  "token": "bHtCEV5ufn8BB6FaXn/fBxs2LBqpHvE4A0=",
  "element": {
    "id": 1469,
    "name": "GoodData",
    "key": "gooddata",
    "description": "GoodData’s cloud-based, multi-tenant platform can deliver reports on data from various sources, while allowing users to carry out ad-hoc analysis to answer pressing business questions.",
    "image": "https://www.gooddata.com/sites/default/files/images/GoodData_Vertical_Black.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [    ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "authentication": {
      "type": "basic"
    },
    "hub": "db",
    "protocolType": "http",
    "parameters": [
      {
        "id": 956,
        "createdDate": "2016-11-20T17:19:13Z",
        "name": "siteAddress",
        "vendorName": "siteAddress",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "elementId": 1469,
        "required": false
      },
      {
        "id": 967,
        "createdDate": "2016-11-27T11:02:44Z",
        "name": "userId",
        "vendorName": "userId",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "elementId": 1469,
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
    "base.url": "https://{siteAddress}/gdc",
    "filter.response.nulls": "true",
    "password": "********",
    "pagination.type": "page",
    "pagination.max": "100",
    "profileId": "",
    "siteAddress": "secure.gooddata.com",
    "userId": "ba21346d7bed5b1a5967e",
    "pagination.page.startindex": "1",
    "username": "USERNAME"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
