---
heading: Pipedrive
seo: Events | Pipedrive | Cloud Elements API Docs
title: Events
description: Enable Pipedrive events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 167
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Cloud Elements supports both Polling and Webhook events for Pipedrive.

### Polling

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

NOTE: The `objects` in the `event.poller.configuration` are the default configurations we support.  Feel free to remove any objects that do not fit your needs.

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "pipedrive"
  },
  "configuration": {
    "pipedrive.email": "<INSERT_PIPEDRIVE_EMAIL>",
    "pipedrive.password": "<INSERT_PIPEDRIVE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.vendor.type": "polling",
    "event.poller.configuration": {
      "accounts": {
        "url": "/hubs/crm/accounts?where=update_time>'${date:yyyy-MM-dd HH:mm:ss}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "update_time",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "add_time",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "contacts": {
        "url": "/hubs/crm/contacts?where=update_time>'${date:yyyy-MM-dd HH:mm:ss}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "update_time",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "add_time",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      "opportunities": {
        "url": "/hubs/crm/opportunities?where=update_time>'${date:yyyy-MM-dd HH:mm:ss}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "update_time",
          "updatedDateFormat": "yyyy-MM-dd HH:mm:ss",
          "createdDateField": "add_time",
          "createdDateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      }
    }
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

### Webhooks

Pipedrive requires an extra specification to be entered once an Element instance has been created. The Pipedrive Instance ID must be 64 base encoded, then included in the webhook callback URL. This document will walk you through the entire workflow:

* create an instance
* retrieve the instance ID
* 64base Encode Instance ID
* webhook setup

### Step 1. Create an Instance

To provision your Pipedrive Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Pipedrive is "pipedrive".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "pipedrive"
  },
  "configuration": {
    "pipedrive.email": "<INSERT_PIPEDRIVE_EMAIL>",
    "pipedrive.password": "<INSERT_PIPEDRIVE_PASSWORD>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
    "event.vendor.type": "webhook"
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
  "token": "bHtCEV5ufn8BB6FaXn/fBxs2LBqpHvE4A0=",
  "element": {
    "id": 16,
    "name": "Pipedrive Beta",
    "key": "pipedrive",
    "description": "Add an Pipedrive Instance to connect your existing Pipedrive account to the CRM Hub, allowing you to manage contacts, accounts, opportunities etc. across multiple CRM Elements. You will need your Pipedrive account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/501332028000702464/rDOcFppt.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "transformationsEnabled": true,
    "authentication": {
      "type": "custom"
    },
    "hub": "crm",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://api.pipedrive.com/v1",
    "pagination.offset": "true",
    "event.notification.instance.finder": null,
    "event.notification.callback.url": null,
    "pagination.max": "100",
    "pipedrive.email": "PIPEDRIVE_EMAIL",
    "event.vendor.type": "webhook",
    "pipedrive.api.token": "PIPEDRIVE_API_TOKEN",
    "pipedrive.password": "PIPEDRIVE_PASSWORD",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

Retrieve Instance ID from the create instance response:
![Pipedrive Retrieve Instance ID](http://cloud-elements.com/wp-content/uploads/2015/08/PipedriveWebHookID.png)

Copy the Instance ID and go to a 64Base Encoding website.

Here is a sample site that will 64 base encode your instance ID: [https://www.base64encode.org/](https://www.base64encode.org/).

Copy the ID, encode it, then copy the encoded ID.

Place the ID in the following URL:

`https://api.cloud-elements.com/elements/api-v2/events/pipedrive/{INSERT_64BASE_ENCODED_INSTANCE_ID}`

An example of the URL once the Instance ID has been encoded:

`https://api.cloud-elements.com/elements/api-v2/events/pipedrive/MjA5MzE=`

Log in to your Pipedrive Account.

1. Click "Settings"

2. Under Push Notifications, click "Create new notification"
![Pipedrive Wehhook Setup step 1](http://cloud-elements.com/wp-content/uploads/2016/05/PipedriveWebhooks1.png)

3. Select the User

4. Input the following URL with the base64 encoded Instance ID: `https://api.cloud-elements.com/elements/api-v2/events/pipedrive/{INSERT_64BASE_ENCODED_INSTANCE_ID}`

5. Input desired events

6. Click "Save"
![Pipedrive Wehhook Setup step 2](http://cloud-elements.com/wp-content/uploads/2016/05/PipedriveWebhooks2.png)

Webhook Events are now implemented for Pipedrive.
