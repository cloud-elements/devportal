---
heading: Xero
seo: Authenticate | Xero | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 40
elementKey: xero
apiKey: Consumer Key #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Consumer Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: OAuth callback domain #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 2.0 framework and you will need to sign in to {{page.heading}} as part of the process.

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **API Secret**, enter the {{page.apiSecret}} of the Cloud Elements app &mdash; contact support for the credentials.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](/docs/guides/elements/instances.html) associated with the instance, [map the instance to a common resource](/docs/guides/common-resources/mapping.html), or [use it in a formula template](/docs/guides/formulasC2/build-template.html).

## Authenticate Through API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send a request to our `/instances` endpoint. The end result is the same, though: an authenticated element instance with a  **token** and **id**.

Authenticating through API follows a multi-step OAuth 1.0 process that involves:

{% include workflow.html displayNames="Request Token,Authorization URL,Authorize Access,Authenticate Instance" links="#get-a-request-token-and-secret,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active=" "%}

* [Get a Request Token and Secret](#get-a-request-token-and-secret). Use the request token to exchange for a more permanent token. Use the secret later to authenticate the element instance.
* [Get the Authorization URL](#get-authorization-url). Get the authorization URL to provide the app user to grant access.
* [Authorize access](#authorize-access). A user user logs in and authorizes your app. The API provider makes a call back to the specified url with the credentials needed to authenticate an element instance.
* [Authenticate the element instance](#authenticating-the-element-instance). Using the access token, secret, and other credentials from theA PI provider, authenticate to create an element instance at Cloud Elements.

### Get a Request Token and Secret

{% include workflow.html displayNames="Request Token,Authorization URL,Authorize Access,Authenticate Instance" links="#get-a-request-token-and-secret,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Request Token"%}

```
GET /elements/{{page.elementKey}}/oauth/token?apiKey={xeroConsumerKey}&apiSecret={xeroConsumerSecret}&callbackUrl={OAuthCallbackURL}
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| `apiKey` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |
| `apiSecret` |    {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html).  |
| `callbackUrl` |   {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html)   |

#### Example cURL

```bash
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/token?apiKey=2OFxxxxxxxxxxxxxxxxxxxxxx&apiSecret=7SMxxxxxxxxxxxxxxxxxxxxxx&callbackUrl=https%3A%2F%2Fmycoolapp.com%2Fauth'
```

#### Example Response

```json
{
    "secret": "NU3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "token": "ELOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

### Get Authorization URL

{% include workflow.html displayNames="Request Token,Authorization URL,Authorize Access,Authenticate Instance" links="#get-a-request-token-and-secret,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authorization URL"%}

Use the `token` in the previous response as the `requestToken` to get a URL where the user can log in to the API provider and authorize access.

```
GET /elements/{{page.elementKey}}/oauth/url?apiKey={xeroConsumerKey}&apiSecret={xeroConsumerSecret}&callbackUrl={OAuthCallbackURL}&requestToken={tokenFromPreviousRequest}
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| `apiKey` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |
| `apiSecret` |    {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html).  |
| `callbackUrl` |   {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html)   |
| `requestToken`  | The token returned by the previous `GET /elements/{{page.elementKey}}/oauth/token?` request. |

#### Example cURL

```bash
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=2OFxxxxxxxxxxxxxxxxxxxxxx&apiSecret=7SMxxxxxxxxxxxxxxxxxxxxxx&callbackUrl=https%3A%2F%2Fmycoolapp.com%2Fauth&requestToken=ELOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
```

#### Example Response

```json
{
  "oauthUrl": "https://api.xero.com/oauth/Authorize?oauth_token=ELOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": "xero"
}
```

### Authorize Access

{% include workflow.html displayNames="Request Token,Authorization URL,Authorize Access,Authenticate Instance" links="#get-a-request-token-and-secret,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authorize Access"%}

Provide the `oauthUrl` from the previous step to your users. After they authenticate, {{page.heading}} swaps the request token for a more permanent access token. The response looks like this and includes additional parameters needed to authenticate an element instance:

```json
{
  "args": {
    "oauth_token": "ELOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "oauth_verifier": "451nnnnnnn",
    "org": "kfNxxxxxxxxxxxxxxxxxxxxxx",
    "state": "xero"
  },
  "headers": {    },
  "origin": "nnn.nnnn.nn.nnn",
  "url": "https://mycoolapp.com/auth?state=xero&oauth_token=ELOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&oauth_verifier=451nnnnnnn&org=kfNxxxxxxxxxxxxxxxxxxxxxx"
}
```

#### Parameters

| Response Parameter | Description   |
| :------------- | :------------- |
| `oauth_token` | The Access Token required to authenticate with {{page.heading}}.  |
| `oauth_verifier` | A unique identifier. |
| `org`  | The organization code associated with the user.  |
| `state` | {{site.data.glossary.element-auth-state}} (`{{page.elementKey}}`) .  |

### Authenticating the Element Instance

{% include workflow.html displayNames="Request Token,Authorization URL,Authorize Access,Authenticate Instance" links="#get-a-request-token-and-secret,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Instance"%}

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):


    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "providerData": {
        "oauth_token": "<oauth_token-FROM-PREVIOUS-RESPONSE>",
        "oauth_verifier": "<oauth_verifier-FROM-PREVIOUS-RESPONSE>",
        "org": "<org-FROM-PREVIOUS-RESPONSE>",
        "secret": "<secret-FROM-STEP-1-RESPONSE>"
      },
      "configuration": {
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>"
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

#### Example cURL

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
    "oauth_token": "B5BYxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "oauth_verifier": "451nnnnnnn",
    "org": "kfNxxxxxxxxxxxxxxxxxxxxxx
    "secret": "NU3xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "configuration": {
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "2OFxxxxxxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "7SMxxxxxxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| `oauth_token` | The Access Token required to authenticate with {{page.heading}} returned in [Step 3. Authorize Access](#authorize-access).  | string |
| `oauth_verifier` | A unique identifier returned in [Step 3. Authorize Access](#authorize-access). |string |
| `org`  | The organization code associated with the user returned in [Step 3. Authorize Access](#authorize-access).  |string |
| `secret` | The `secret` returned in [Step 1. Get a Request Token and Secret](#get-a-request-token-and-secret).  | string |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you noted in [API Provider Setup](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you noted in [API Provider Setup](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-api-key}} This is the **{{page.callbackURL}}** that you noted in [API Provider Setup](setup.html).  | string |
| tags | {{site.data.glossary.element-auth-tags}} | string |

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
      "id": 44,
      "name": "Xero",
      "hookName": "Xero",
      "key": "xero",
      "description": "Xero Finance Element",
      "image": "elements/provider_xero.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "configDescription": "If you do not have an Xero account, you can create one at <a href=\"http://www.xero.com\" target=\"_blank\">Xero Signup</a>",
      "signupURL": "https://www.xero.com/#signup",
      "defaultTransformations": [     ],
      "objectMetadata": {    },
      "transformationsEnabled": true,
      "bulkDownloadEnabled": true,
      "bulkUploadEnabled": true,
      "cloneable": false,
      "extendable": false,
      "beta": true,
      "authentication": {
          "type": "oauth1"
      },
      "extended": false,
      "hub": "finance",
      "protocolType": "http",
      "parameters": [],
      "private": false
    },
    "elementId": 44,
    "tags": [
      "Docs"
      ],
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "providerData": {    },
    "configuration": {    },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false,
    "externalAuthentication": "none",
    "user": {
        "id": 12345
      }
}
```
