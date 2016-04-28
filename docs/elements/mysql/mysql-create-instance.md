---
heading: MySQL
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 479
parent: Back to Element Guides
order: 20
---

## Create Instance Directly via IP Address and Port Number

The following is required to create a MySQL Element Instance:

* Database Host: e.g. `123.123.1.123:3306`
* Database Name
* Database Username
* Database Password

### Step 1. Create an Instance

To provision your MySQL Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements MySQL is "mysql".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

__CONNECTING DIRECTLY VIA IP ADDRESS AND PORT NUMBER__

```json
{
  "element": {
    "key": "mysql"
  },
  "configuration" : {
      "db.host": "<INSERT_DATABASE_HOST_EG_123.123.1.123:3306>",
      "db.name": "<INSERT_DATABASE_NAME>",
      "username": "<INSERT_DATABASE_USERNAME>",
      "password":  "<INSERT_DATABASE_PASSWORD>"
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
  "token": "VAnlQ/V28PT+M62kdajlsd90eHHtUJai+Efq8=",
  "id": 479,
      "name": "MySQL",
      "key": "mysql",
      "description": "Add a MySQL element to connect your existing MySQL database, allowing you to manage data for your database tables. You will need your MySQL database information to add an instance.",
      "image": "elements/provider_mysql.png",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "transformationsEnabled": true,
      "bulkDownloadEnabled": false,
      "bulkUploadEnabled": false,
      "cloneable": false,
      "authentication": {
        "type": "custom"
      },
      "hub": "db"
    },
  {
    "valid": true,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {},
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false
  }
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

## Create Instance Directly via Ground2Cloud

The following is required to create a MySQL Element Instance:

* Database Host: e.g. `g2c.cloud-elements.com:12345`
* Database Name
* Database Username
* Database Password

### Step 1. Create an Instance

To provision your MySQL Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements MySQL is "mysql".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

__CONNECTING DIRECTLY VIA GROUND2CLOUD__

```json
{
  "element": {
    "key": "mysql"
  },
  "configuration" : {
      "db.host": "<INSERT_DATABASE_HOST_EG_g2c.cloud-elements.com:12345>",
      "db.name": "<INSERT_DATABASE_NAME>",
      "username": "<INSERT_DATABASE_USERNAME>",
      "password":  "<INSERT_DATABASE_PASSWORD>"
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
  "token": "VAnlQ/V28PT+M62kdajlsd90eHHtUJai+Efq8=",
  "id": 479,
      "name": "MySQL",
      "key": "mysql",
      "description": "Add a MySQL element to connect your existing MySQL database, allowing you to manage data for your database tables. You will need your MySQL database information to add an instance.",
      "image": "elements/provider_mysql.png",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "transformationsEnabled": true,
      "bulkDownloadEnabled": false,
      "bulkUploadEnabled": false,
      "cloneable": false,
      "authentication": {
        "type": "custom"
      },
      "hub": "db"
    },
  {
    "valid": true,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {},
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false
  }
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
