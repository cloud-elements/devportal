---
heading: SFTP Beta
seo: Create Instance | SFTP | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1742
parent: Back to Element Guides
order: 20
---

## Create Instance Directly via Hostname and Port Number

The following is required to create a SFTP Element Instance:

* Hostname: e.g. `cm.mycoolapp.com`
* Port e.g. `22`
* SFTP Username
* SFTP Password
* Home Directory e.g. `/` or `/home`

### Step 1. Create an Instance

To provision your SFTP Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements SFTP is "sftp".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.


```json
{
  "element": {
    "key": "sftp"
  },
  "configuration" : {
  	  "hostname": "<INSERT_SFTP_HOSTNAME_EG_cm.mycoolapp.com>",
  	  "port": "<INSERT_SFTP_PORT_EG_22>",
      "username": "<INSERT_DATABASE_USERNAME>",
      "password":  "<INSERT_DATABASE_PASSWORD>",
      "home_directory": "<INSERT_SFTP_HOME_DIRECTORY_EG_/home>"
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
  "token": "VAnlQ/V28PT+M62kdajlsd90eHHtUJai+Efq8=",
  "element": {
    "id": 2753,
    "name": "SFTP Element Beta",
    "key": "sftp",
    "description": "Add a sftp Instance to connect your existing sftp account to the Documents Hub, allowing you to manage all of your Document activities across multiple Documents Elements. You will need your sftp account information to add an instance.",
    "image": "elements/provider_sftp.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "Sftp",
    "transformationsEnabled": false,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": false,
    "authentication": {
      "type": "basic"
    },
    "hub": "documents",
    "protocolType": "sftp",
    "parameters": [],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "event.notification.subscription.id": null,
    "password": "********",
    "hostname": "cm.mycoolapp.com",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "port": "22",
    "home_directory": "/home",
    "event.notification.signature.key": null,
    "event.vendor.type": "polling",
    "event.poller.configuration": "",
    "username": "USERNAME",
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
