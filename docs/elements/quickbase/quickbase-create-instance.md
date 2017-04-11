---
heading: QuickBase
seo: Create Instance | QuickBase | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 475
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the QuickBase platform.

### Step 1. Create an Instance

To provision your QuickBase Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements QuickBase is "quickbase".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "quickbase"
  },
  "configuration": {
    "subdomain":"<INSERT_QUICKBASE_SUBDOMAIN>",
    "quickbase.user": "<INSERT_QUICKBASE_USER_EMAIL>",
    "quickbase.password": "<INSERT_QUICKBASE_USER_PASSWORD>",
    "quickbase.appname": "<INSERT_QUICKBASE_APP_NAME>",
    "quickbase.apptoken": "<INSERT_QUICKBASE_APP_TOKEN>"
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
    "id": 376,
    "name": "QuickBase",
    "hookName": "QuickBase",
    "key": "quickbase",
    "description": "Add a QuickBase element to connect your existing QuickBase database, allowing you to manage data for your database tables. You will need your QuickBase database information to add an instance.",
    "image": "elements/provider_quickbase.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [    ]
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "bulk.add_metadata": null,
    "base.url": "https://{subdomain}/db",
    "event.vendor.type": "polling",
    "quickbase.apptoken": "quickbase.apptoken",
    "bulk.query.date_mask": null,
    "bulk.attribute.created_time": "date_created",
    "bulk.relations": null,
    "pagination.type": "offset",
    "quickbase.userid": "quickbase.userid",
    "expires_in": "43200",
    "event.notification.enabled": "false",
    "bulk.query.field_name": "date_modified",
    "pagination.max": "200",
    "quickbase.password": "********",
    "quickbase.user": "quickbase.user.email",
    "bulk.query.operator": ">=",
    "bulk.query.download_format": "JSON",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "subdomain": "my-subdomain.quickbase.com",
    "quickbase.objects": "[ {\n  \"Contacts\" : \"bmaeex55u\"\n}, {\n  \"Table #1\" : \"bmaeexk7j\"\n} ]",
    "authentication.time": "1477668814516",
    "quickbase.appname": "Test DB",
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
    "id": 1,
    "emailAddress": "system",
    "firstName": "Default System",
    "lastName": "User"
  }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
