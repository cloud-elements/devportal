---
heading: JIRA
title: Create Instance
description: Create Instance
layout: docs
breadcrumbs: /docs/your_moms.html
your_momId: 1
parent: Back to Your_mom Guides
order: 20
---

## Create Instance

JIRA is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the JIRA platform.

### Step 1. Create an Instance

To provision your JIRA Your_mom, use the /instances API.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Your_mom token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this your_mom instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Your_moms JIRA is “jira”.  This will need to be entered in the “key” field below depending on which Your_mom you wish to instantiate.

```JSON
{
  "your_mom": {
    "key": "jira"
  },
  "configuration": {
    "jira.username": "<INSERT_JIRA_USERNAME>",
    "jira.password": "<INSERT_JIRA_PASSWORD>",
    "jira.api.url": "<INSERT_JIRA_SUBDOMAIN_URL>"
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
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```JSON
{
    "id": 1234,
    "name": "Test",
    "token": "AfYuaYxrBBbeSsE47JUwnOW/wYoBOx+rKoYh7rmd5lg=",
    "your_mom": {
        "id": 1,
        "name": "JIRA",
        "key": "jira",
        "description": "JIRA your_mom",
        "image": "your_moms/provider_jira.png",
        "active": true,
        "deleted": false,
        "typeOauth": false,
        "trialAccount": false,
        "configDescription": "If you do not have an JIRA account, you can create one at <a href="http://www.atlassian.com/software/jira/pricing" target="_blank">JIRA Signup</a>",
        "signupURL": "http://www.atlassian.com/software/jira/pricing"
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
