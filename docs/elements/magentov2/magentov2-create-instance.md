---
heading: Magento 2.0
seo: Create Instance | Magento 2.0 | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 815
parent: Back to Element Guides
order: 15
---

## Create Instance

Magento 2.0 is a Finance Platform. When you provision an instance, your app will have access to the different functionality offered by the Magento 2.0 platform.

### Step 1. Create an Instance

To provision your Magento 2.0 Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Magento 2.0 is "magentov20".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "magentov20"
  },
  "configuration": {
    "userName": "<INSERT_MAGENTO_USERNAME>",
    "password": "<INSERT_MAGENTO_PASSWORD>",
    "site": "<INSERT_MAGENTO_STORE_URL>",
    "user": "true"
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
  "id": 1234,
  "name": "Test",
  "token": "mQuw4rrhnrMl1UeDj25v0xDU5TUx6WUw=",
  "element": {
    "id": 499,
    "name": "Magento 2.0",
    "hookName": "MagentoSoap",
    "key": "magentov20",
    "description": "Magento Commerce is the leading provider of open omnichannel innovation. Our open source digital commerce platform and cloud-based omnichannel solutions empower merchants to integrate digital and physical shopping experiences.",
    "image": "https://upload.wikimedia.org/wikipedia/en/c/c2/Magento_logo.png",
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
    "base.url": "{store.url}/index.php/api/v2_soap/index/",
    "bulk.add_metadata": null,
    "bulk.query.field_name": "created_at",
    "pagination.max": "200",
    "event.vendor.type": "polling",
    "store.url": "https://magento.my-store.com",
    "userName": "MAGENTO_USERNAME",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd HH:mm:ss",
    "bulk.query.download_format": "JSON",
    "bulk.attribute.created_time": "created_at",
    "password": "MAGENTO_PASSWORD",
    "bulk.relations": null,
    "pagination.type": "page",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "authentication.time": "1464195352093",
    "expires_in": "3600",
    "session.id": "6c4a640c66e1d0d52f95d0f4e5677da8",
    "pagination.page.startindex": "1",
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
