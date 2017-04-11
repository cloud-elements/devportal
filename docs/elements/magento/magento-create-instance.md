---
heading: Magento Beta
seo: Create Instance | Magento | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 356
parent: Back to Element Guides
order: 15
---

## Create Instance

Magento is a Finance Platform. When you provision an instance, your app will have access to the different functionality offered by the Magento platform.

### Step 1. Get Elements OAuth Token

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/token
* Request Body: None
* Query Parameters:

* __key__ - magento
* __apiKey__ - the API key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app,
* __siteAddress__ - your Magento Store URL e.g. mycompany.magento.com

Description: The result of this API invocation returns a requestToken and Secret from the endpoint, which are used to retrieve the redirect URL.  The requestToken is used in the GET /elements/{keyOrId}/oauth/url call.

Each of the OAuth API calls will be shown below.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/magento/oauth/token?apiKey=INSERT_MAGENTO_API_KEY4&apiSecret=INSERT_MAGENTO_API_SECRET&callbackUrl=https%3A%2F%2Fwww.mycoolapp.com/auth&siteAddress=https%3A%2F%2Fwww.mycoolapp.com'
```

Response:

```json
{
  "token": "qyprd1Twij60MH06lKGUZTJwx7tbzpPQx6aZnvKe0xI7",
  "secret": "KKSbL0J2wLGMqhMXTEh1ERkSx9tsIbAHUevF"
}
```

Magento expects a token and secret. These are contained in the response to the initial GET request. Please make note of the token and secret. The token is needed in the GET /elements/{keyOrId}/oauth/url call which is shown below.

### Step 2. Get Elements OAuth URL

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{keyOrId}/oauth/url
* Request Body: None
* Query Parameters:

* __key__ - magento
* __apiKey__ - the API key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app,
* __siteAddress__ - your Magento Store URL e.g. mycompany.magento.com
* __requestToken__ - the token obtained from the GET /elements/{keyOrId}/oauth/token call (previous step).

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/magento/oauth/url?apiKey=INSERT_MAGENTO_API_KEY&apiSecret=INSERT_MAGENTO_API_SECRET&callbackUrl=https%3A%2F%2Fwww.mycoolapp.com/auth&requestToken=INSERT_REQUEST_TOKEN&siteAddress=https%3A%2F%2Fwww.mycoolapp.com'
```

Response:

```json
{
  "oauthUrl": "https://www.mycoolapp.com/admin/oauth_authorize?oauth_token=dc323a3fe83a4f23ecb7976d&oauth_callback=https%3A%2F%2Fwww.cloud-elements.com%3Fstate%3Dmagento",
  "element": "magento"
}
```

### Step 3. Create an Instance

Your application should now redirect to the oauthUrl returned in step 2, which in turn will present the OAuth authentication and authorization page to the user.

HANDLE CALLBACK FROM THE ENDPOINT

After the user successfully authenticates, the provided callback URL is executed. The callback URL will contain several parameters, listed below.  These additional parameters, along with the original API key and API secret are required for the Create Instance API.

The parameters that you will need to parse from the callback URL are listed below, along with an example of what the callback URL should look like.
__oauth_token__
__oauth_verifier__
__secret__

`http://mycoolapp.com/auth?state=magento&oauth_token=qyprdlGChtClXwBpAw1vm1fJSC3mQqS3dGX0PPphEzNEUI9s&oauth_verifier=br6qctk&secret=12345674687464354`

To provision your Magento Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Magento is "magento".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "magento"
  },
  "providerData": {
       "oauth_token": "<OAUTH_TOKEN_RETURNED_IN_OAUTH_EXCHANGE>",
       "oauth_verifier": "<OAUTH_VERIFIER_RETURNED_IN_OAUTH_EXCHANGE>",
       "secret": "<SECRET_RETURNED_IN_OAUTH_EXCHANGE>"
   },
  "configuration": {
  	"oauth.api.key":"<INSERT_MAGENTO_API_KEY>",
  	"oauth.api.secret":"<INSERT_MAGENTO_API_SECRET>",
    "oauth.callback.url":"<INSERT_CALLBACK_URL>",
    "store.url":"<INSERT_MAGENTO_STORE_URL>"
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
  "id": 123,
  "name": "Test",
  "token": "Ck9PmTdQ4WLe221gRtM0VAp2+trCYHBsEtA=",
  "element": {
    "id": 356,
    "name": "Magento",
    "key": "magento",
    "description": "Magento Commerce is the leading provider of open omnichannel innovation. Our open source digital commerce platform and cloud-based omnichannel solutions empower merchants to integrate digital and physical shopping experiences.",
    "image": "https://upload.wikimedia.org/wikipedia/en/c/c2/Magento_logo.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "authentication": {
      "type": "oauth1"
    },
    "hub": "ecommerce",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "{store.url}/api/rest",
    "oauth.api.secret": "MAGENTO_API_SECRET",
    "bulk.add_metadata": null,
    "oauth.token.url": "{store.url}/oauth/token",
    "bulk.query.field_name": "",
    "pagination.max": "100",
    "oauth.user.token.secret": "USER_TOKEN_SECRET",
    "store.url": "https://www.mycoolapp.com",
    "oauth.request.url": "{store.url}/oauth/initiate",
    "oauth.user.token": "OAUTH_USER_TOKEN",
    "bulk.query.operator": ">=",
    "bulk.query.date_mask": "yyyy-MM-dd'T'HH:mm:ssXXX",
    "oauth.authorization.url": "{store.url}/admin/oauth_authorize",
    "bulk.attribute.created_time": "created_at",
    "bulk.query.download_format": "JSON",
    "pagination.type": "page",
    "bulk.relations": null,
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.request.authorization.type": "header",
    "oauth.api.key": "MAGENTO_API_KEY"
  },
  "eventsEnabled": false,
  "traceLoggingEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

{% include common-instance-config.md %}
