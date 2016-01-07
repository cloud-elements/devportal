---
heading: Element Builder
title: Create Element via API
description: Create a new Twitter Element.
layout: docs
order: 3
---

## Create Element

To create your Twitter Element, use the /elements API.

Below is an example of the provisioning API call.

HTTP Headers: Authorization- User <user secret>, Organization <organization secret>
HTTP Verb: POST
Request URL: /elements
Request Body: Required – see below
Query Parameters: None

Description: An Element as well as any resources included in the JSON payload is created upon successful execution of this API. This Element will be available in the Elements Catalog. In our example, the Twitter JSON payload includes the resource POST /statuses which gives the user the ability to ‘tweet’.

A sample request illustrating the /elements API is shown below.

HTTP Headers:

`Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>`

Input JSON file name element.json:  This element.json file must be included with your instance request.  Please fill your information to provision

```json
{
    "name": "Twitter",
    "description": "Twitter is the best way to connect with people, express yourself and discover what's happening.",
    "hub": "Social",
    "image": "https://abs.twimg.com/a/1426096855/images/oauth_application.png",
    "authentication": {
        "type": "oauth1"
    },
    "configuration": [
        {
            "key": "base.url",
            "defaultValue": "https://api.twitter.com/1.1"
        },
        {
            "key": "oauth.authorization.url",
            "defaultValue": "https://api.twitter.com/oauth/authorize"
        },
        {
            "key": "oauth.api.key",
            "defaultValue": "<INSERT_TWITTER_API_KEYgt;"
        },
        {
            "key": "oauth.api.secret",
            "defaultValue": "<INSERT_TWITTER_API_SECRETgt;"
        },
        {
            "key": "oauth.callback.url",
            "defaultValue": "https://www.mycoolapp.com/oauth"
        },
        {
            "key": "oauth.token.url",
            "defaultValue": "https://api.twitter.com/oauth/access_token"
        },
        {
            "key": "oauth.request.url",
            "defaultValue": "https://api.twitter.com/oauth/request_token"
        }
    ],
    "resources": [
        {
            "path": "/statuses",
            "vendorPath": "/statuses/update.json",
            "method": "POST",
            "vendorMethod": "POST",
            "description": "For tweets",
            "parameters": [
                {
                    "name": "status",
                    "vendorName": "status",
                    "description": "The text of your status update.",
                    "required": true,
                    "type": "query",
                    "vendorType": "query",
                    "dataType": "string",
                    "vendorDataType": "string"
                }
            ]
        }
    ]
}
```

Here is an example cURL command to create an instance using /instances API.

Example Request:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @element.json
'https://api.cloud-elements.com/elements/api-v2/elements'
```
If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```json
{
  "id": 1,
  "name": "Twitter",
  "key": "twitter",
  "description": "Twitter is the best way to connect with people, express yourself and discover what's happening.",
  "image": "https://abs.twimg.com/a/1426096855/images/oauth_application.png",
  "active": true,
  "deleted": false,
  "typeOauth": false,
  "trialAccount": false,
  "configuration": [
    {
      "name": "Base URL",
      "key": "base.url",
      "description": "Twitter Base URL",
      "defaultValue": "https://api.twitter.com/1.1",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_1000",
      "hideFromConsole": true,
      "required": false
    },
    {
      "name": "Max Page Size (or limit)",
      "key": "pagination.max",
      "description": "Twitter Max Page Size (or limit)",
      "defaultValue": "100",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_32",
      "hideFromConsole": true,
      "required": false
    },
    {
      "name": "Vendor Event Type",
      "key": "event.vendor.type",
      "description": "Twitter Vendor Event Type",
      "defaultValue": "webhook",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": true,
      "type": "TEXTFIELD_32",
      "hideFromConsole": true,
      "required": false
    },
    {
      "name": "Event Notification Instance Finder",
      "key": "event.notification.instance.finder",
      "description": "Twitter Event Notification Instance Finder",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_64",
      "hideFromConsole": true,
      "required": false
    },
    {
      "name": "OAuth Authorization URL",
      "key": "oauth.authorization.url",
      "description": "Twitter OAuth Authorization URL",
      "defaultValue": "https://api.twitter.com/oauth/authorize",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": true,
      "type": "TEXTFIELD_1000",
      "hideFromConsole": true,
      "required": true
    },
    {
      "name": "Pagination Offset",
      "key": "pagination.offset",
      "description": "Twitter Pagination Offset",
      "defaultValue": "false",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "BOOLEAN",
      "hideFromConsole": true,
      "required": false
    },
    {
      "name": "OAuth User Secret",
      "key": "oauth.user.token.secret",
      "description": "Twitter OAuth User Secret",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": true,
      "type": "TEXTFIELD_128",
      "hideFromConsole": true,
      "required": true
    },
    {
      "name": "OAuth Access Token",
      "key": "oauth.user.token",
      "description": "Twitter OAuth Access Token",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": true,
      "type": "TEXTFIELD_32",
      "hideFromConsole": true,
      "required": false
    },
    {
      "name": "OAuth Request URL",
      "key": "oauth.request.url",
      "description": "Twitter OAuth Request URL",
      "defaultValue": "https://api.twitter.com/oauth/request_token",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_128",
      "hideFromConsole": true,
      "required": true
    },
    {
      "name": "OAuth Token URL",
      "key": "oauth.token.url",
      "description": "Twitter OAuth Token URL",
      "defaultValue": "https://api.twitter.com/oauth/access_token",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": true,
      "type": "TEXTFIELD_1000",
      "hideFromConsole": true,
      "required": true
    },
    {
      "name": "OAuth Callback URL",
      "key": "oauth.callback.url",
      "description": "Twitter OAuth Callback URL",
      "defaultValue": "https://www.cloud-elements.com/elements/jsp/home.jsp",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_1000",
      "hideFromConsole": true,
      "required": true
    },
    {
      "name": "OAuth API Secret",
      "key": "oauth.api.secret",
      "description": "Twitter OAuth API Secret",
      "defaultValue": "TWITTER_API_SECRET",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_128",
      "hideFromConsole": true,
      "required": true
    },
    {
      "name": "OAuth API Key",
      "key": "oauth.api.key",
      "description": "Twitter OAuth API Key",
      "defaultValue": "TWITTER_API_KEY",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_128",
      "hideFromConsole": true,
      "required": true
    },
    {
      "name": "Enabled/Disable Event Notifications",
      "key": "event.notification.enabled",
      "description": "Twitter Enabled/Disable Event Notifications",
      "defaultValue": "false",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "BOOLEAN",
      "hideFromConsole": false,
      "required": false
    },
    {
      "name": "Event Notification Callback URL",
      "key": "event.notification.callback.url",
      "description": "Twitter Event Notification Callback URL",
      "resellerConfig": false,
      "companyConfig": false,
      "active": true,
      "internal": false,
      "type": "TEXTFIELD_128",
      "hideFromConsole": false,
      "required": false
    }
  ],
  "resources": [
    {
      "id": 352,
      "createdDate": "2015-04-23T21:16:59Z",
      "description": "For tweets",
      "path": "/hubs/social/statuses",
      "vendorPath": "/statuses/update.json",
      "method": "POST",
      "vendorMethod": "POST",
      "parameters": [
        {
          "id": 511,
          "resourceId": 352,
          "createdDate": "2015-04-23T21:16:59Z",
          "name": "status",
          "vendorName": "status",
          "description": "The text of your status update.",
          "type": "query",
          "vendorType": "query",
          "dataType": "string",
          "vendorDataType": "string",
          "source": "request",
          "required": true
        }
      ],
      "type": "api"
    }
  ],
  "transformationsEnabled": true,
  "authentication": {
    "type": "oauth1"
  },
  "hub": "social",
  "parameters": []
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code. Make sure you do not have spaces after the in the cURL command.
