---
heading: Freshdesk
seo: Events | Freshdesk | Cloud Elements API Docs
title: Events
description: Enable Freshdesk events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 491
elementKey: freshdeskv2
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Freshdesk requires an extra specification to be entered once an Element instance has been created. The Freshdesk Instance ID must be 64 base encoded, then included in the webhook callback URL. This document will walk you through the entire workflow:

* create an instance
* retrieve the instance ID
* 64base Encode Instance ID
* webhook setup

### Step 1. Create an Instance

To provision your Freshdesk Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Freshdesk is “freshdesk”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```JSON
{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "configuration": {
    "subdomain": "<YOUR_SOBDOMAIN>",
    "username": "<YOUR_API_KEY",
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

```JSON
{
  "id": 1234,
  "name": "FreshDesk",
  "token": "/sO6vVsB2eXhOlgvNR/p+G7wC/+rhY5M=",
  "element": {
    "id": 491,
    "name": "Freshdesk V2",
    "key": "freshdeskv2",
    "description": "Add a Freshdesk Instance to connect your existing Freshdesk account to the Help Desk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your Freshdesk account information to add an instance.",
    "image": "https://pbs.twimg.com/profile_images/3159951933/1511f0f59e3f239a8ef707b1db3a42e3.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "hub": "helpdesk",
    "parameters": [
      {
        "id": 38,
        "createdDate": "2015-04-08T19:53:48Z",
        "name": "subdomain",
        "vendorName": "subdomain",
        "type": "configuration",
        "vendorType": "path",
        "source": "request",
        "elementId": 130,
        "required": false
      }
    ]
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{subdomain}.freshdesk.com",
    "pagination.offset": "false",
    "password": "password",
    "pagination.max": "30",
    "subdomain": "https://sample.freshdesk.com",
    "username": "sample@sample.com"
    "event.notification.callback.url": "https//www.mycoolapp.com/events"
  },
  "eventsEnabled": true,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

Retrieve Instance ID from the create instance response:
![Freshdesk Retrieve Instance ID](http://cloud-elements.com/wp-content/uploads/2015/08/FreshdeskWebHookID.png)

Copy the Instance ID and go to a 64Base Encoding website.

Here is a sample site that will 64 base encode your instance ID: [https://www.base64encode.org/](https://www.base64encode.org/).

Copy the ID, encode it, then copy the encoded ID.

Place the ID in the following URL:

`https://api.cloud-elements.com/elements/api-v2/events/freshdesk/{INSERT_64BASE_ENCODED_INSTANCE_ID}`

An example of the URL once the Instance ID has been encoded:

`https://api.cloud-elements.com/elements/api-v2/events/freshdesk/MjA5MzE=`

Log in to your Freshdesk domain.

1. Click “Admin”

2. Under Helpdesk Productivity, select “Observer”
![Freshdesk Wehhook Setup step 1](http://cloud-elements.com/wp-content/uploads/2015/08/FreshdeskWebHook1.png)


3. Select “New Rule”
![Freshdesk Wehhook Setup step 2](http://cloud-elements.com/wp-content/uploads/2015/08/FreshdeskWebHook2.png)

4. Name the Rule

5. Add an Event

6. Select person to perform events

7. Select condition(s)

8. Under “Select Actions”

9. Choose “Trigger Webhook”
![Freshdesk Wehhook Setup step 3](http://cloud-elements.com/wp-content/uploads/2015/08/FreshdeskWebHook3.png)

10. Select POST

11. Insert the following URL with the base64 encoded Instance ID: `https://api.cloud-elements.com/elements/api-v2/events/freshdesk/{INSERT_BASE64_ENCODED_INSTANCE_ID}` Content should be set to JSON

12. Select Content

13. Click “Save”
![Freshdesk Wehhook Setup step 4](http://cloud-elements.com/wp-content/uploads/2015/08/FreshdeskWebHook4.png)

Events are now implemented for Freshdesk.
