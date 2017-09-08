---
heading: Quickbooks Online
seo: Authenticate | Quickbooks Online | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
elementKey: quickbooks
parent: Back to Element Guides
order: 20
---


# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 1 framework and you will need to sign in to {{page.heading}} as part of the process.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for the element in our Elements Catalog.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    |  ![Search](../img/Element-Search2.png)  |  ![Search](../img/Element-Search.png)  |

3. Create an element instance.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Hover over the element card, and then click __Create Instance__.</br> ![Create Instance](../img/Create-Instance.gif)  | Click __Add Instance__.</br> ![Search](../img/Add-Instance.png)  |

5. Enter a name for the element instance.

7. Click __Create Instance__ (latest UI) or __Next__ (earlier UI).
8. Optionally add tags in the earlier UI:
     1. On the Tag It page, enter any tags that might help further define the instance.
      * To add more than one tag, click __Add__ after each tag.
      ![Add tag](../img/Add-Tag.png)
     1. Click __Done__.
8. Provide your Quickbooks Online, and then allow the connection.
9. Note the **Token** and **ID** and save them for all future requests using the element instance.
8. Take a look at the documentation for the element resources now available to you.

## Authenticate Through API

Quickbooks Online has two possible authentication methods when authenticating via the APIs:

* [Oauth 1.0](#oauth-1-0)
* [Token Based Authentication](#token-based-authentication)

### Oauth 1.0

Authenticating through API is a multi-step process that involves:

* [Getting an Oauth token](#getting-an-oauth-token). This call requests a token needed to complete the authentication process.
* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

#### Getting an Oauth Token
Use the following API call to request an Oauth Token. Replace 'keyOrId' with the element key, `{{page.elementKey}}`. You will also need to replace 'api_key', 'api_secret' and 'callbackUrl'.

```bash
GET /elements/{keyOrId}/oauth/token?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>
```

##### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Consumer Key** that you noted at the end of the [API Provider Setup section](setup.html).  |
| apiSecret |  The secret obtained from registering your app with the provider.  This is the **Consumer Secret** that you noted at the end of the [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. This is the **Callback URL** that you noted at the end of the [Endpoint Setup section](quickbooks-endpoint-setup.html).  |

##### Example cURL
```
curl -X GET
-H 'Content-Type: application/json'
https://api.cloud-elements.com/elements/api-v2/elements/elements/{keyOrId}/oauth/token?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>'
```

##### Example Response

```json
{
  "secret": "xxxxxx",
  "token": "xxxxxxx"
}
```
You will use the token returned on this call to get the redirect URL and to provison the instance. The secret returned will be used as the oauth.api.user.secret.

#### Getting a Redirect URL

Use the following API call to request a redirect URL where the user can authenticate with the API provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&requestToken=insert_fake_request_token&state=quickbooks
```

##### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Consumer Key** that you noted at the end of the [API Provider Setup section](setup.html).  |
| apiSecret |  The secret obtained from registering your app with the provider.  This is the **Consumer Secret** that you noted at the end of the [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. This is the **Callback URL** that you noted at the end of the [Endpoint Setup section](quickbooks-endpoint-setup.html).  |
| requestToken | The token returned from the previous step.

##### Example cURL

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state={{page.elementKey}}'
```

##### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
"element": "{{page.elementKey}}",
"oauthUrl": "https://appcenter.intuit.com/Connect/Begin?oauth_token=<fake_token>&oauth_callback=<fake_callback>%3Fstate%3D{{page.elementKey}}"
}
```

#### Authenticating Users and Receiving the Authorization Grant Code

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

* oauth_verifier
* realmId

| Response Parameter | Description   |
| :------------- | :------------- |
| oauth_verifier | The Authorization Grant Code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint.|
| realmID | The unique identifier for the authorized Quickbooks Online company. |
| dataSource | This value determines what data source should be used for the connection. |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

#### Authenticating the Element Instance

Use the `/instances` endpoint to authenticate with Quickbooks and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "providerData": {
        "oauth_token": "<OAUTH_TOKEN>",
        "realmId": "<REALMID>",
        "oauth_verifier": "<OAUTH_VERIFIER>",
        "secret": "<OAUTH_USER_SECRET>",
        "state": "quickbooks",
        "dataSource": "<dataSource>"
      },
      "configuration": {
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>",
        "filter.response.nulls": true
      },
      "tags": [
        "<Add_Your_Tag>"
      ],
      "name": "<INSTANCE_NAME>"
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

##### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "providerData": {
    "oauth_token": "<OAUTH_TOKEN>",
    "realmId": "<REALMID>",
    "oauth_verifier": "<OAUTH_VERIFIER>",
    "secret": "<OAUTH_USER_SECRET>",
    "state": "quickbooks",
    "dataSource": "QBO"
  },
  "configuration": {
    "oauth.callback.url": "<CALLBACK_URL>",
    "oauth.api.key": "<CONSUMER_KEY>",
    "oauth.api.secret": "<CONSUMER_SECRET>"
  },
  "tags": [
    "For Docs",
    "tag 2"
  ],
  "name": "QBO_Instance"
}'
```
##### Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth_verifier` | A verification code generated by Intuit that an App is supposed to pass back during the get_access_token step. |
| `oauth_token` | The token retrieve in the [Getting an Oauth Token step](#getting-an-oauth-token). |
| `secret` | A secret to establish the ownership of the token. |
| `realmId` | The unique Identifier for the authorized quickbooks company, which is returned after authentication in Quickbooks Online. |
| `state` | This should always be {{page.elementKey}} |
| `dataSource` | This value determines what data source should be used for the connection. It is returned after authentication. |
| `oauth.callback.url` | The Callback URL from Quickbooks. This is the Callback URL that you noted at the end of the [Endpoint Setup section](quickbooks-endpoint-setup.html).  |
| `oauth.api.key` | The Consumer Key from Quickbooks. This is the Consumer Key that you noted at the end of the [Endpoint Setup section](quickbooks-endpoint-setup.html) |  string |
| `oauth.api.secret` | The Consumer Secret from Quickbooks. This is the Consumer Secret that you noted at the end of the [Endpoint Setup section](quickbooks-edpoint-setup.html)| string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`.  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

##### Example Response

```json
{
    "id": 123,
    "name": "test",
    "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
    "element": {
        "id": 39,
        "name": "QuickBooks Online",
        "key": "quickbooks",
        "description": "Add a QuickBooks Online Instance to connect your existing QuickBooks Online account to the Finance Hub, allowing you to manage your customers, employees, invoices, purchase orders etc. across multiple Finance Elements. You will need your QuickBooks Online account information to add an instance.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "If you do not have an QuickBooks account, you can create one at <a href=\"http://quickbooks.intuit.com/signup/\" target=\"_blank\">QuickBooks Signup</a>",
        "signupURL": "http://quickbooks.intuit.com/signup/"
    },
    "provisionInteractions": [],
    "valid": true,
    "eventsEnabled": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```

### Token Based Authentication

The Quickbooks Online element also allows for token based authentication. To provision an instance using this method, you are still required to have all of the oauth information ahead of time.

#### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "quickbooks"
  },
  "configuration": {
    "oauth.callback.url":"<INSERT_CALLBACK_URL>",
    "quickbooks.datasource": "<INSERT_DATASOURCE>",
    "oauth.user.refresh_interval": "<INSERT_REFRESH_INTERVAL>",
    "quickbooks.realm.id" : "<INSERT_REALM_ID>",
    "oauth.user.token":"<INSERT_USER_TOKEN>",
    "oauth.user.token.secret":"<INSERT_USER_TOKEN_SECRET>",
    "oauth.api.key": "<INSERT_API_KEY>",
    "oauth.api.secret": "<INSERT_API_SECRET>"
  },
  "tags": [
    "QBO Token"
  ],
  "name": "QBO Token",
  "externalAuthentication": "initial"
}'
```

#### Parameters for Token Based Authentication

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `"oauth.user.refresh_interval"` | In seconds, the amount of time that should pass before a refresh needs to take place. The default for Quickbooks Online is 151 days or 13046400. |
| `oauth.user.token` | The token retrieve in the [Getting an Oauth Token step](#getting-an-oauth-token). |
| `oauth.user.token.secret` | A secret to establish the ownership of the token. |
| `quickbooks.realm.id` | The unique Identifier for the authorized Quickbooks company. |
| `state` | This should always be {{page.elementKey}} |
| `quickbooks.dataSource` | This value determines what data source should be used for the connection. |
| `oauth.callback.url` | The Callback URL from Quickbooks. This is the Callback URL that you noted at the end of the [Endpoint Setup section](quickbooks-endpoint-setup.html).  |
| `oauth.api.key` | The Consumer Key from Quickbooks. This is the Consumer Key that you noted at the end of the [Endpoint Setup section](quickbooks-endpoint-setup.html) |  string |
| `oauth.api.secret` | The Consumer Secret from Quickbooks. This is the Consumer Secret that you noted at the end of the [Endpoint Setup section](quickbooks-edpoint-setup.html)| string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`.  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

#### Example Response

```json
{
    "id": 123,
    "name": "test",
    "token": "3sU/S/kZD36BaABPS7EAuSGHF+1wsthT+mvoukiE",
    "element": {
        "id": 39,
        "name": "QuickBooks Online",
        "key": "quickbooks",
        "description": "Add a QuickBooks Online Instance to connect your existing QuickBooks Online account to the Finance Hub, allowing you to manage your customers, employees, invoices, purchase orders etc. across multiple Finance Elements. You will need your QuickBooks Online account information to add an instance.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "If you do not have an QuickBooks account, you can create one at <a href=\"http://quickbooks.intuit.com/signup/\" target=\"_blank\">QuickBooks Signup</a>",
        "signupURL": "http://quickbooks.intuit.com/signup/"
    },
    "provisionInteractions": [],
    "valid": true,
    "eventsEnabled": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```
