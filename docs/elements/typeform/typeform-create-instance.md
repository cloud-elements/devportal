---
heading: Typeform
seo: Create Instance | Typeform | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 339
parent: Back to Element Guides
order: 20
---

## Create Instance

When you provision an instance, your app will have access to the different functionality offered by the Typeform platform.

### Step 1. Create an Instance

To provision your Typeform Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Typeform is "typeform".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "typeform"
  },
  "configuration": {
    "api.key": "<INSERT_TYPEFORM_API_KEY>"
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
    "id": 845,
    "name": "typeform",
    "key": "typeform",
    "description": "Add a Typeform Instance to connect your existing Typeform account to the Cloud Storage and Documents Hub, allowing you to manage forms. You will need your Typeform account information to add an instance.",
    "image": "http://cloud-elements.com/wp-content/uploads/2016/01/provider_typeform.png",
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
    "base.url": "https://api.typeform.io/v0.4",
    "event.notification.subscription.id": null,
    "api.key": "TYPFORM_API_KEY",
    "event.notification.instance.finder": "",
    "pagination.type": null,
    "event.notification.callback.url": "false",
    "pagination.max": "100",
    "event.notification.signature.key": null,
    "event.vendor.type": "webhooks",
    "authentication.time": null,
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "eventsNotificationCallbackUrl": "false",
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
