---
heading: ServiceNow OAuth
seo: Create Instance | ServiceNow OAuth | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 566
parent: Back to Element Guides
order: 20
---

## Create Instance

ServiceNow OAuth is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the ServiceNow OAuth platform.

__NOTE__: ServiceNow requires you "wake up" your instance.  These instructions are included in this guide. For more information the ServiceNow API, please visit the [ServiceNow developer docs](http://wiki.servicenow.com/index.php?title=REST_API)

### Step 1. Create an Instance

To provision your ServiceNow OAuth Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements ServiceNow OAuth is "servicenowoauth".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "servicenowoauth"
  },
  "providerData": {
    "code": "1000"  // NOTE: ServiceNow does not require a callback URL so please leave this field as 1000
  },
  "configuration": {
    "username":"<INSERT_SERVICENOW_USERNAME>",
    "password":"<INSERT_SERVICENOW_PASSWORD>",
    "oauth.api.key":"<INSERT_SERVICENOW_CLIENT_ID>",
    "oauth.api.secret":"<INSERT_SERVICENOW_CLIENT_SECRET>",
    "servicenow.subdomain":"<INSERT_SERVICENOW_SUBDOMAIN>"
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
  "token": "YT70SDqDVrhw/TMD5oV831Yurfjk6E=",
  "element": {
    "id": 566,
    "name": "ServiceNow OAuth Beta",
    "hookName": "ServiceNow",
    "key": "servicenowoauth",
    "description": "ServiceNow is changing the way people work, offering service management for every department in the enterprise including IT, human resources, facilities & more.",
    "image": "https://pbs.twimg.com/profile_images/378800000041139697/cf1e6299ecb533ed82725abe96bb96a9_400x400.png",
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
    "bulk.add_metadata": "true",
    "base.url": "https://{subdomain}.service-now.com/api/now/v1/table",
    "event.vendor.type": "polling",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ss",
    "bulk.attribute.created_time": "sys_created_on",
    "password": "********",
    "bulk.relations": "{}",
    "pagination.type": "offset",
    "grant_type": "password",
    "oauth.callback.url": "https://console.cloud-elements.com/elements/jsp/home.jsp",
    "event.notification.signature.key": "",
    "oauth.user.refresh_token": "ZiNp5l5CeTEaK_2P1td786q3S_nrCqwCOlBJvcBI4KnhoiFUBqFhhQY7PpTw",
    "oauth.token.revoke_url": "https://{servicenow.subdomain}.service-now.com/oauth_revoke_token.do",
    "oauth.user.refresh_interval": "1799",
    "oauth.api.key": "SERVICE_NOW_CLIENT_ID",
    "event.notification.enabled": "false",
    "oauth.api.secret": "SERVICE_NOW_CLIENT_SECRET",
    "bulk.query.field_name": "sys_updated_on",
    "oauth.token.url": "https://{servicenow.subdomain}.service-now.com/oauth_token.do",
    "pagination.max": "200",
    "servicenow.subdomain": "SERVICENOW_SUBDOMAIN",
    "oauth.token.refresh_url": "https://{servicenow.subdomain}.service-now.com/oauth_token.do",
    "oauth.user.token": "NJ5KwawtowNIQ4pV7_skMF7lbn5WER3vzNTFq17LUDyuBhKg8F70xUWAYKpg5IExzRw",
    "bulk.query.operator": ">=",
    "oauth.authorization.url": "https://console.cloud-elements.com/elements/jsp/home.jsp?code=1000",
    "bulk.query.download_format": "json",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "oauth.user.refresh_time": "14658476",
    "oauth.basic.header": "true",
    "username": ""
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "externalAuthentication": "none",
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}

Once you have instantiated your Element Instance, ServiceNow requires to be "woken up".

To wake a Cloud Elements ServiceNow Element instance perform the following:

* Login to the wake up instance URL with the [Developer portal](https://developer.servicenow.com/app.do#!/instance) credentials
* There is a status screen rendering information on when the instance was booted
* Login to the instance with the instance login creds

After 10 days of no activity, the instance is deleted and we have to create a new one
![ServiceNow OAuth Wake up Instance](http://cloud-elements.com/wp-content/uploads/2016/06/ServiceNowAPI7.png)
