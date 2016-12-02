---
heading: Taxify
seo: Create Instance | Taxify | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 320
parent: Back to Element Guides
order: 15
---

## Create Instance

Taxify is a CRM system. When you provision an instance, your app will have access to the different functionality offered by the Taxify platform.

### Step 1. Create an Instance

To provision your Taxify Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Taxify is "taxify".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "taxify"
  },
   "configuration": {
       "api.key": "<INSERT_TAXIFY_API_KEY>"
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
    "name": "Taxify",
    "key": "taxify",
    "description": "Put your monthly tax compliance on autopilot. Taxify prepares, submits, and pays your U.S. sales tax filings automatically.",
    "image": "https://pbs.twimg.com/profile_images/621714602074619904/w2K5p8C3.png",
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
    "base.url": "https://ws.taxify.co/taxify/1.0/core/JSONService.asmx",
    "api.key": "TAXIFY_API_KEY",
    "pagination.type": null,
    "event.notification.callback.url": null,
    "pagination.max": "100",
    "event.vendor.type": "webhook",
    "partner.key": "TAXIFY_PARTNER_KEY",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
