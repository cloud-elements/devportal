---
heading: Oracle Sales Cloud
seo: Create Instance | Oracle Sales Cloud | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 1948
parent: Back to Element Guides
order: 15
---

## Create Instance

Oracle Sales Cloud is a CRM system. When you provision an instance, your app will have access to the different functionality offered by the Oracle Sales Cloud platform.

### Step 1. Create an Instance

To provision your Oracle Sales Cloud Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Oracle Sales Cloud is "oraclesalescloud".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "oraclesalescloud"
  },
  "configuration": {
    "username": "<INSERT_ORACLE_SALES_CLOUD_USERNAME>",
    "password": "<INSERT_ORACLE_SALES_CLOUD_PASSWORD>",
    "site.url": "<INSERT_ORACLE_SALES_CLOUD_SERVER_URL>"
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
  "token": "OF/+1epqoOahKecYhzAjJQTFjUwWqXD+s=",
  "element": {
	"id": 1948,
	"name": "Oracle Sales Cloud",
	"key": "oraclesalescloud",
	"description": "Add an Oracle Sales Cloud Instance to connect your existing Oracle Sales Cloud account to the CRM Hub, allowing you to manage your accounts, opportunities, contacts, leads, users, etc. across multiple CRM Elements. You will need your Oracle Sales Cloud account information to add an instance.",
	"image": "elements/provider_salescloud.jpg",
	"active": true,
	"deleted": false,
	"typeOauth": false,
	"trialAccount": false,
	"resources": [],
	"private": false
},
"provisionInteractions": [],
"valid": true,
"disabled": false,
"maxCacheSize": 0,
"cacheTimeToLive": 0,
"configuration": {
	"bulk.add_metadata": null,
	"base.url": "https://{site.url}",
	"bulk.query.field_name": "",
	"site.url": "MySite.oracle.com",
	"pagination.max": "100",
	"event.vendor.type": "polling",
	"bulk.query.operator": ">=",
	"bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss'Z'",
	"bulk.attribute.created_time": "CreationDate",
	"bulk.query.download_format": "JSON",
	"password": "********",
	"pagination.type": "page",
	"bulk.relations": null,
	"event.poller.refresh_interval": "15",
	"event.notification.callback.url": null,
	"pagination.page.startindex": "0",
	"username": "USERNAME",
	"event.notification.enabled": "false"
},
"eventsEnabled": false,
"traceLoggingEnabled": false,
"cachingEnabled": false,
"externalAuthentication": "none"
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
