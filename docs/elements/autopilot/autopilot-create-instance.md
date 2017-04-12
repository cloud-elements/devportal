---
heading: Autopilot
seo: Create Instance | Autopilot | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 528
parent: Back to Element Guides
order: 20
---

## Create Instance

Autopilot is a Marketing Platform. When you provision an instance, your app will have access to the different functionality offered by the Autopilot platform.

### Step 1. Create an Instance

To provision your Autopilot Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Autopilot is "autopilot".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "autopilot"
  },
  "configuration": {
    "api.key":  "<INSERT_AUTOPILOT_API_KEY>"
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
      "id": 503,
      "name": "AutoPilot",
      "key": "autopilot",
      "description": "Easy and visual marketing software for automating the customer journey",
      "image": "http://dfsm9194vna0o.cloudfront.net/695418-0-BrandMarqueBlack.png",
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
      "base.url": "https://api2.autopilothq.com/v1",
      "bulk.add_metadata": null,
      "event.notification.subscription.id": null,
      "bulk.query.field_name": "",
      "pagination.max": "100",
      "autopilot.hook.contactadded.id": "",
      "event.vendor.type": "webhooks",
      "bulk.query.operator": ">=",
      "bulk.query.date_mask": null,
      "bulk.attribute.created_time": "",
      "bulk.query.download_format": "JSON",
      "api.key": "AUTOPILOT_API_KEY",
      "event.notification.instance.finder": "autopilot123",
      "pagination.type": "cursor",
      "bulk.relations": null,
      "event.notification.callback.url": "false",
      "autopilot.hook.contactupdated.id": "",
      "authentication.time": "",
      "pagination.page.startindex": "1",
      "event.notification.enabled": "false"
    },
    "eventsEnabled": false,
    "eventsNotificationCallbackUrl": "false",
    "externalAuthentication": "none",
    "traceLoggingEnabled": false,
    "cachingEnabled": false
  }
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
