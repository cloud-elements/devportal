---
heading: Ecwid
seo: Create Instance | Ecwid | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 52
parent: Back to Element Guides
order: 15
---

## Create Instance

To provision your Ecwid Element, use the /instances API.

### Step 1. Call the /instances API

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Ecwid now has two types of authentication- Oauth2 or custom.

#### Oauth2

```bash
curl -X GET \
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=<key>&apiSecret=<secret>&callbackUrl=<callback>' \
```

### Authenticating Users and Receiving the Authorization Grant Code

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Users"%}

Provide the `oauthUrl` in the response from the previous step to the users. After users authenticate, {{page.apiProvider}} provides the following information in the response:

* code
* state

| Response Parameter | Description   |
| :------------- | :------------- |
| code | {{site.data.glossary.element-auth-grant-code}} |
| state | {{site.data.glossary.element-auth-state}} (`{{page.elementKey}}`) . |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

### Authenticating the Element Instance

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Instance"%}

Use the `code` from the previous step and the `/instances` endpoint to authenticate with {{page.apiProvider}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):


    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "providerData": {
        "code": "<AUTHORIZATION_GRANT_CODE>"
      },
      "configuration": {
        "oauth.api.key": "<{{page.apiProvider}} app {{page.apiKey}}>",
      	"oauth.api.secret": "<{{page.apiProvider}} app {{page.apiSecret}}>",
        "oauth.callback.url": "<{{page.apiProvider}} app {{page.callbackURL}} >"
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

#### Example Request

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
    "code": "xxxxxxxxxxxxxxxxxxxxxxx"
  },
  "configuration": {
    "oauth.api.key": "Rand0MAP1-key",
    "oauth.api.secret": "fak3AP1-s3Cr3t",
    "oauth.callback.url": "https;//mycoolapp.com",
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

#### Custom Authentication

In order to create an Ecwid instance with custom Authentication (note this is a legacy version of Ecwid so if you do not already have your store ID, order API Key, adn Product API Key you should use oauth2), you will need the Store ID, Order API Key, and Product API Key. For instructions on how to retrieve those credentials, please see our Ecwid Endpoint Setup.
NOTE: Ecwid currently supports the the GET, PUT/PATCH, DELETE API calls. POST is not available at this time.

Description: An Element token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this element instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Ecwid is “ecwid”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "ecwid"
  },
  "configuration": {
    "ecwid.order.key": "<INSERT_API_ORDER_SECRET>",
    "ecwid.product.key": "<INSERT_API_PRODUCT_KEY>",
    "ecwid.store.id": "<INSERT_STORE_ID>"
 },
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
  "id": 12345,
  "name": "test",
  "token": "dsPr6AheLIS8pt7rp8E81bSKEkx9Ftr+9Y",
  "element": {
    "id": 42,
    "name": "Ecwid",
    "key": "ecwid",
    "description": "Ecwid is everything you need to sell anywhere.",
    "image": "elements/provider_ecwid.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have a Ecwid account, you can create one at Ecwid Signup"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "cachingEnabled": false
}
```
Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.

{% include common-instance-config.md %}
