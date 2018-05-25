---
heading: Shopify
seo: Authenticate | Shopify | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 48
elementKey: shopify
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 2 framework and you will need to sign in to {{page.heading}} as part of the process.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **Shopify Site Address** enter the personalized portion of your `myshopify.com` URL. For example, in `https://cloud-elements.myshopify.com` just enter `cloud-elements`.
7. Click **Create Instance**.
8. Provide your Shopify credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is a multi-step process that involves:

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active=" "%}

* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

### Getting a Redirect URL

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Redirect URL"%}

Use the following API call to request a redirect URL where the user can authenticate with the vendor. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html).  |
| apiSecret |  The client secret obtained from registering your app with the provider.  This is the **Client Secret** that you recorded in [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. This is the **Callback URL** that you recorded in [API Provider Setup section](setup.html).  |

#### Example cURL

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state={{page.elementKey}}'
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
"element": "{{page.elementKey}}",
"oauthUrl": "https://SHOPIFYSHOPNAME.myshopify.com/admin/oauth/authorize?client_id=fake_client_id&scope=write_orders,write_products,write_customers&redirect_uri=https://www.mycoolapp.com/auth&state=shopify"
}
```

### Authenticating Users and Receiving the Authorization Grant Code

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Users"%}

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

* code
* state

| Response Parameter | Description   |
| :------------- | :------------- |
| code | The Authorization Grant Code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint.|
| state | A customizable identifier, typically the element key (`{{page.elementKey}}`) . |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

### Authenticating the Element Instance

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Instance"%}

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance. If you are configuring events, see the [Events section](events.html).

{% include note.html content="The endpoint returns an Element id and token upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To create an element instance:

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
                "oauth.api.key": "<LIENT_ID>",
                "oauth.api.secret": "<CLIENT_SECRET>",
                "oauth.callback.url": "https://www.examplecallbackurl.com/",
                "shopify.site.address":"<SHOPIFY_USER_SHOP_NAME>",
                "oauth.scope":"write_orders,write_products,write_customers"
              },
              "tags": [
                "<Add_Your_Tag>"
              ],
              "name": "<Insert_Instance_Name>"
            }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

9. Note the **Token** and **ID** and save them for all future requests using the element instance.

#### Example cURL

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
    "element": {
      "key": "shopify"
    },
    "providerData": {
      "code": "8aa74ff8ae16ba3ca19d12cbdea83aff16bddcd7"
    },
    "configuration": {
      "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
      "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxx",
      "shopify.site.address": "mycoolapp",
      "oauth.scope": "write_orders,write_products,write_customers",
      "oauth.callback.url": "https://mycoolapp.com"
    },
    "tags": [
      "Test"
    ],
    "name": "ShopifyInstance"
  }'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth.callback.url` | The Callback URL  for the connected app you created for {{page.heading}}. This is the Callback URL that you recorded in [API Provider Setup section](setup.html).  |
| `oauth.api.key` | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | The client secret obtained from registering your app with the provider.  This is the **Client Secret** that you recorded in [API Provider Setup section](setup.html).| string |
| Shopify Site Address</br> `shopify.site.address` | The personalized portion of your `myshopify.com` URL. For example, in `https://cloud-elements.myshopify.com` just enter `cloud-elements`. | string |
| `oauth.scope` | The permissions granted to the user when they authenticate to your application | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 48,
    "name": "Shopify Beta",
    "key": "shopify",
    "description": "Add a Shopify Instance to connect your existing Shopify account to the eCommerce Hub, allowing you to manage orders and products across multiple eCommerce Elements. You will need your Shopify account information to add an instance.",
    "image": "elements/provider_shopify.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "configDescription": "If you do not have an Shopify account, you can create one at",
    "signupURL": "https://www.shopify.com/login",
    "transformationsEnabled": true,
    "authentication": {
      "type": "oauth2"
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
    "oauth.api.secret": "SHOPIFY_API_SECRET",
    "event.notification.subscription.id": null,
    "event.notification.callback.url": null,
    "oauth.callback.url": "https://examplecallbackurl.com",
    "shopify.site.address": "SHOP_NAME",
    "oauth.scope": "write_orders,write_products,write_customers",
    "oauth.api.key": "SHOPIFY_API_KEY",
    "oauth.user.token": "f9a67e985bee7c6352c739d1ddcdb0f9",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```
