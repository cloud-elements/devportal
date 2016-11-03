---
heading: Brandfolder
seo: Events | Brandfolder | Cloud Elements API Docs
title: Events
description: Enable Brandfolder events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 492
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Brandfolder requires an extra specification to be entered once an Element instance has been created. The Brandfolder Instance ID must be 64 base encoded, then included in the webhook callback URL. This document will walk you through the entire workflow:

* create an instance
* retrieve the instance ID
* 64base Encode Instance ID
* webhook setup

### Step 1. Call the /instances API

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Brandfolder is "brandfolder".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "brandfolder"
  },
  "configuration": {
    "api-token": "<INSERT_BRANDFOLDER_USER_TOKEN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_EVENT_CALLBACK_URL>"
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
  "token": "cuED0/DezalhhzK2OtO6kMP7NvPnMyNcRDZc=",
  "element": {
    "id": 489,
    "name": "Brandfolder",
    "hookName": "Brandfolder",
    "key": "brandfolder",
    "description": "Add an Brandfolder Instance to connect your existing Brandfolder account to the General Hub, allowing you to manage assets and attachments across multiple Elements. You will need your Brandfolder account information to add an instance.",
    "image": "https://assets.brandfolder.com/6xnhmr5n/original/brandfolder_logo_black.png",
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
    "base.url": "https://api.brandfolder.com/v2",
    "event.notification.subscription.id": null,
    "event.notification.instance.finder": "",
    "pagination.type": "cursor",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "api-token": "BRANDFOLDER_USER_TOKEN",
    "pagination.max": "50",
    "event.vendor.type": "webhooks",
    "authentication.time": "",
    "event.poller.configuration": "{\"brandfolders\":{\"url\":\"/hubs/general/brandfolders?where=updated_dt>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'\",\"idField\":\"id\"},\"organizations\":{\"url\":\"/hubs/general/organizations?where=updated_dt>'${date:yyyy-MM-dd'T'HH:mm:ssXXX}'\",\"idField\":\"id\"}}",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "externalAuthentication": "none",
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

Retrieve Instance ID from the create instance response:
![Brandfolder Retrieve Instance ID](http://cloud-elements.com/wp-content/uploads/2015/08/FreshdeskWebHookID.png)

Copy the Instance ID and go to a 64Base Encoding website.

Here is a sample site that will 64 base encode your instance ID: [https://www.base64encode.org/](https://www.base64encode.org/).

Copy the ID, encode it, then copy the encoded ID.

Place the ID in the following URL:

`https://api.cloud-elements.com/elements/api-v2/events/brandfolder/{INSERT_64BASE_ENCODED_INSTANCE_ID}`

An example of the URL once the Instance ID has been encoded:

`https://api.cloud-elements.com/elements/api-v2/events/brandfolder/MjA5MzE=`

Set up your webhook:

Via a web browser, go to [https://brandfolder.com/signin](https://brandfolder.com/signin) and login to your account.

Under Organizations, select the Brandfolder you wish to have webhook events
![Brandfolder Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2016/05/BrandfolderWebhooks1.png)

Under Settings, select Analytics and Events
![Brandfolder Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2016/05/BrandfolderWebhooks2.png)

In the Zapier Integration, input the following URL: `https://console.cloud-elements.com/elements/api-v2/events/brandfolder/{base64_encoded_URL}`
![Brandfolder Webhooks step 1](http://cloud-elements.com/wp-content/uploads/2016/05/BrandfolderWebhooks3.png)

In order to enable webhooks, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "brandfolder"
  },
  "configuration": {
    "api-token": "<INSERT_BRANDFOLDER_USER_TOKEN>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
