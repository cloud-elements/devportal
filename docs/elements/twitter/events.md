---
heading: Twitter
seo: Events | Twitter | Cloud Elements API Docs
title: Events
description: Enable Twitter events for your application.
layout: docs
breadcrumbs: /docs/elements.html
elementId: 1359
parent: Back to Element Guides
order: 30
---

## Events

{% include polling_and_webhooks_defined.md %}

Things to be aware of when enabling events for Twitter:

1. There are no updated dates so all `event_types` are `CREATED`
2. For `statuses` and `users`, there are some things you have to specify the username or screenname
3. And you can’t query by `created_time` so we are just querying the full thing and then parsing through the response, (potentially super messy)

In order to enable polling, add these extra configurations to your instance JSON:

```JSON
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACK_URL>",
"event.poller.configuration": "<SEE_BELOW>"
```

instance JSON with polling events enabled:

Twitter Follows the OAuth1 Authorization protocol.

For more information about the Twitter API, please view their [API documentation](https://dev.twitter.com/overview/api).

### Step 1. Get Elements OAuth Token

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/token
* Request Body: None
* Query Parameters:

* __key__ - twitter
* __apiKey–__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /elements/{key}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/twitter/oauth/token?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=https://www.mycoolapp.com/oauth&state=twitter'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "KKSbL0J2wLGMqhMXTEh1ERkSx9tsIbAHUevF"
}
```

Twitter expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /elements/{key}/oauth/url call which is shown below.

### Step 2. Get Elements OAuth URL

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/url
* Request Body: None
* Query Parameters:

* __key__ - twitter
* __apiKey–__ - the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app,
* __requestToken__ - the token obtained from the GET /elements/{key}/oauth/token call (previous step).

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/twitter/oauth/url?apiKey=insert_fake_api_key&apiSecret=insert_fake_api_secret&callbackUrl=https://www.mycoolapp.com/oauth&requestToken=insert_fake_request_token&state=twitter'
```

Response:

```json
{
    "element": "twitter",
    "oauthUrl": "https://appcenter.intuit.com/Connect/Begin?oauth_token=qyprdJHtIbwm3sGOoOCvXuv2Cs8fsQrZFjJWe4HEZAyb0&oauth_callback=http%3A%2F%2Fwww.cloud-elements.com%3Fstate%3Dtwitter"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__

```bash
https://www.mycoolapp.com/oauth?state=twitter&oauth_token=qyprdlGChtClXwBpAw1vm1fJSC3mQqS3dGX0PPphEzNEUI9s&oauth_verifier=br6qctk
```

These values will be used to create an Instance. An example of this process along with sample JSON will be shown in the next section.

To provision your Twitter Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Twitter is “twitter”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "twitter"
  },
  "providerData": {
    "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
    "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
    "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_QUICKBOOKS_API_KEY>",
    "oauth.api.secret": "<INSERT_QUICKBOOKS_API_SECRET>",
    "oauth.callback.url": "<SAME CALLBACK URL USED IN STEP 2>",
    "event.poller.configuration": {
      "direct-messages/received-messages": {
        "url": "/hubs/social/direct-messages/received-messages?where=created_at='${date:MM/dd/yyy'T'HH:mm:ssXXX}'",
        "idField": "id_str",
        "datesConfiguration": {
          "updatedDateField": "created_at",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created_at",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateTimezone": "GMT"
        }
      },
      "direct-messages/sent-messages": {
        "url": "/hubs/social/direct-messages/sent-messages?where=created_at='${date:MM/dd/yyy'T'HH:mm:ssXXX}'",
        "idField": "id_str",
        "datesConfiguration": {
          "updatedDateField": "created_at",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created_at",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateTimezone": "GMT"
        }
      },
      "lists": {
        "url": "/hubs/social/lists?where=created_at='${date:MM/dd/yyy'T'HH:mm:ssXXX}'",
        "idField": "id_str",
        "datesConfiguration": {
          "updatedDateField": "created_at",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created_at",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateTimezone": "GMT"
        }
      },
      "statuses": {
        "url": "/hubs/social/statuses?where=q='Example Screen Name'",
        "idField": "id_str",
        "datesConfiguration": {
          "updatedDateField": "created_at",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created_at",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateTimezone": "GMT"
        }
      },
      "users": {
        "url": "/hubs/social/users?where=q='example'",
        "idField": "id_str",
        "datesConfiguration": {
          "updatedDateField": "created_at",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "updatedDateTimezone": "GMT",
          "createdDateField": "created_at",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateTimezone": "GMT"
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
  "name": "test",
  "token": "3sU/S/kZC46BaABPS7EAuhT+ukiEHkI=",
  "element": {
    "id": 1359,
    "name": "Twitter",
    "key": "twitter",
    "description": "Add a Twitter Instance to connect your existing Twitter account to the Social Hub, allowing you to manage statuses and followers across multiple Social Elements. You will need your Twitter account information to add an instance.",
    "image": "https://abs.twimg.com/a/1426096855/images/oauth_application.png",
    "active": false,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "authentication": {
      "type": "oauth1"
    },
    "hub": "social",
    "protocolType": "http",
    "parameters": [],
    "private": false
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://api.twitter.com/1.1",
    "oauth.api.secret": "DYLgpG9rFNzW34X0LU4Ik2ZSgvK0rkltOniDKk4GzAy6kqrsXi",
    "oauth.token.url": "https://api.twitter.com/oauth/access_token",
    "oauth.user.token.secret": "lPibXGVLtgURx9TwJcstN9dZkGBEriO2VyT7aicXbmWex",
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "oauth.request.url": "https://api.twitter.com/oauth/request_token",
    "oauth.user.token": "794566698309472260-Ro9v0o4q8HXgmyS5aoOqs2mwQHK3Bga",
    "oauth.authorization.url": "https://api.twitter.com/oauth/authorize",
    "pagination.type": "page",
    "event.poller.refresh_interval": "15",
    "event.notification.callback.url": null,
    "oauth.request.authorization.type": "query",
    "oauth.callback.url": "http://localhost:8080/elements/jsp/home.jsp",
    "oauth.api.key": "kN7fdmMLD0XMU2Fqvbadww8mi",
    "event.poller.configuration": "{\"direct-messages/received-messages\":{\"url\":\"/hubs/social/direct-messages/received-messages?where=created_at='${date:MM/dd/yyy'T'HH:mm:ssXXX}'\",\"idField\":\"id_str\",\"datesConfiguration\":{\"updatedDateField\":\"created_at\",\"updatedDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"updatedDateTimezone\":\"GMT\",\"createdDateField\":\"created_at\",\"createdDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"createdDateTimezone\":\"GMT\"}},\"direct-messages/sent-messages\":{\"url\":\"/hubs/social/direct-messages/sent-messages?where=created_at='${date:MM/dd/yyy'T'HH:mm:ssXXX}'\",\"idField\":\"id_str\",\"datesConfiguration\":{\"updatedDateField\":\"created_at\",\"updatedDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"updatedDateTimezone\":\"GMT\",\"createdDateField\":\"created_at\",\"createdDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"createdDateTimezone\":\"GMT\"}},\"lists\":{\"url\":\"/hubs/social/lists?where=created_at='${date:MM/dd/yyy'T'HH:mm:ssXXX}'\",\"idField\":\"id_str\",\"datesConfiguration\":{\"updatedDateField\":\"created_at\",\"updatedDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"updatedDateTimezone\":\"GMT\",\"createdDateField\":\"created_at\",\"createdDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"createdDateTimezone\":\"GMT\"}},\"statuses\":{\"url\":\"/hubs/social/statuses?where=q='Example Screen Name'\",\"idField\":\"id_str\",\"datesConfiguration\":{\"updatedDateField\":\"created_at\",\"updatedDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"updatedDateTimezone\":\"GMT\",\"createdDateField\":\"created_at\",\"createdDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"createdDateTimezone\":\"GMT\"}},\"users\":{\"url\":\"/hubs/social/users?where=q='example'\",\"idField\":\"id_str\",\"datesConfiguration\":{\"updatedDateField\":\"created_at\",\"updatedDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"updatedDateTimezone\":\"GMT\",\"createdDateField\":\"created_at\",\"createdDateFormat\":\"EEE, dd MMM yyyy HH:mm:ss Z\",\"createdDateTimezone\":\"GMT\"}}}",
    "pagination.page.startindex": "0",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
    "id": 9723
  }
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
