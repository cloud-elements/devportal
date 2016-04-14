---
heading: SugarCRM
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 170
parent: Back to Element Guides
order: 15
---

## Create Instance

SugarCRM is a CRM system. When you provision an instance, your app will have access to the different functionality offered by the SugarCRM platform.

### Step 1. Create an Instance

To provision your SugarCRM Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements SugarCRM is “sugarcrmv2”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "sugarcrmv2"
  },
   "configuration": {
       "oauth.api.key": "<INSERT_SUGARCRM_CONSUMER_KEY>",
       "oauth.api.secret": "<INSERT_SUGARCRM_CONSUMER_SECRET>",
       "oauth.callback.url": "https://console.cloud-elements.com/elements/jsp/home.jsp",
       "site.url": "<INSERT_SUGARCRM_UNIQUE_URL>",
       "username": "<INSERT_SUGARCRM_USERNAME>",
       "password": "<INSERT_SUGARCRM_PASSWORD>"
   },
  "tags": [
    "<INSERT_TAGS>"
  ],
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
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 1234,
  "name": "Test",
  "token": "CxpGZOkJ8BkL4oG3mGSurj8DYiTAUY=",
  "element": {
    "id": 1234,
    "name": "SugarCRM Beta",
    "key": "sugarcrmv2",
    "description": "Add a SugarCRM Instance to connect your existing SugarCRM account to the CRM Hub, allowing you to manage contacts, leads, accounts, opportunities, etc. across multiple CRM Elements. You will need your SugarCRM account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/476756189934395393/aqcFdWXX_400x400.jpeg",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{site.url}/rest/v10",
    "oauth.api.secret": "SURGARCRM_CONSUMER_KEY",
    "bulk.query.field_name": "date_modified",
    "site.url": "yourdomain.sugarondemand.com",
    "oauth.token.url": "https://{site.url}/rest/v10/oauth2/token",
    "pagination.max": "100",
    "event.vendor.type": "webhook",
    "oauth.user.token": "OAUTH_USER_TOKEN",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
    "bulk.attribute.created_time": "date_entered",
    "password": "SUGARCRM_PASSWORD",
    "pagination.type": "offset",
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://console.cloud-elements.com/elements/jsp/home.jsp",
    "oauth.user.refresh_token": "OAUTH_REFRESH_TOKEN",
    "bulk.attribute.modified_time": "date_modified",
    "oauth.user.refresh_interval": "3600",
    "oauth.api.key": "SUGARCRM_API_KEY",
    "oauth.user.refresh_time": "1432311980589",
    "username": "SUGAR_USERNAME",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
