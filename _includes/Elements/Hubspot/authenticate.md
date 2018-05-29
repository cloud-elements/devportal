# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#oauth-api-authentication>OAuth API Authentication</a></br><a href=#api-key-api-authentication>API Key API Authentication</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication follows the typical OAuth 2 framework and you will need to sign in to {{page.heading}} as part of the process.

When you authenticate through the Cloud Elements UI, you pass different scopes depending on the Cloud Elements version (see below). If you cannot authenticate with the default scopes used by the UI, you can pass specific scopes when [authenticating via API](#authenticate-through-api).

If you are configuring events, see the [Events section](events.html).

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. Choose the **Authentication Type**.
  * **oauth2**: Skip to the next step.
  * **apiKey**: Add your HAPIKey that you noted in the [API Provider Setup](setup.html).
8. Click **Show Optional Fields**.  Enter the HAPIKey in **Hubspot API Key**.
7. To allow for bulk uploads, set **Create Bulk Properties for Migration** to **True**.
8. Ignore any other settings.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

## Authenticate Through API

You can authenticate with {{page.heading}} in one of two ways: **OAuth 2.0** and **API Keys**. {{page.heading}} recommends API Keys for prototyping and OAuth 2.0 for production integrations. For more information, review {{page.heading}}'s [Authentication Overview](https://developers.hubspot.com/docs/methods/auth/oauth-overview). Go to the section that matches your authentication method:

* [OAuth API Authentication](#oauth-api-authentication)
* [API Key API Authentication](#api-key-api-authentication)

## OAuth API Authentication

Authenticating through API using OAuth 2.0 is a multi-step process that involves:

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active=" "%}

* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

### Getting a Redirect URL

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Redirect URL"%}

Use `GET /{page.elementKey}/oauth/url` to request a redirect URL and pass scope to Hubspot. The scope parameter values that you include in the request must match the permissions granted to the authorizing user and their account. Some scopes apply only to Marketing accounts (such as content, reports, social, and automation) while others apply to both Marketing and CRM accounts (such as contacts, timeline, and files). If you include Marketing scopes when authenticating with Hubspot CRM, users will receive a Permissions error if their account does not include Marketing permissions.

To be certain that your users can authenticate, you should pass the specific scopes granted to the users and their account. Review the [Hubspot OAuth 2.0 scope documentation](https://developers.hubspot.com/docs/methods/oauth2/initiate-oauth-integration#scopes) for the complete list of scopes.

However, if you do not pass any scopes or pass scope without any values, see the table below for the default scopes passed with the `GET /{page.elementKey}/oauth/url` request.

| Scope Parameter| Default Scope   |
| :------------- | :------------- |
| Hubspot CRM with no scope parameter</br>ex. `GET /{page.elementKey}/oauth/url?apiKey=...&apiSecret=...&callbackUrl=...` |  contacts, timeline, and files  |
| Hubspot CRM with a scope parameter with no value</br>ex. `GET /hubspotcrm/oauth/url?apiKey=...&apiSecret=...&callbackUrl=...&scope=`   | contacts, timeline, files, content, reports, social, automation, forms  |
| Hubspot Marketing with no scope parameter</br>ex. `GET /{hubspot}/oauth/url?apiKey=...&apiSecret=...&callbackUrl=...` |  contacts, timeline, files, content, reports, social, automation, forms  |
| Hubspot Marketing with a scope parameter with no value</br>ex. `GET /hubspot/oauth/url?apiKey=...&apiSecret=...&callbackUrl=...&scope=`   | contacts, timeline, files, content, reports, social, automation, forms  |

The examples below include recommended scope values. For Hubspot Marketing Basic account users, we recommend not including the automation scope.

Use the following API call to request a redirect URL where the user can authenticate with the service provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
curl -X GET "/elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&scope={{page.scopes}}"
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html).  |
| apiSecret |  The secret obtained from registering your app with the provider.  This is the **Consumer Secret** that you recorded in [API Provider Setup section](setup.html).   |
| callbackUrl | The URL that will receive the code from the vendor to be used to create an element instance. |
| scope   | A space separated set of Hubspot scopes that your app can access. Scopes listed in this parameter are required for your app, and the user will see an error if they do not have access to any scope that you included.   |

#### Example cURL

```bash
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state={{page.elementKey}}&scope={{page.scopes}}' \
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.

```json
{
"element": "{{page.elementKey}}",
"oauthUrl": "https://login.hubpot.com/services/oauth2/authorize?response_type=code&client_id=fake_api_key&client_secret=xyz789&scope=full%20refresh_token&redirect_uri=https://www.mycoolapp.com/auth&state={{page.elementKey}}"
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

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

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
        "authentication.type": "oauth2",
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>",
        "create.bulk.properties": "false",
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
    "code": "xoz8AFqScK2ngM04kSSM"
  },
  "configuration": {
    "authentication.type": "oauth2",
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "create.bulk.properties": "false",
    "filter.response.nulls": true
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

## API Key API Authentication

To authenticate using a Hubspot HAPIkey:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):


    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "hubspot.authorization.apikey":"3a9990ff-bf17-40b1-9ce1-e1702e36ab51",
        "authentication.type": "apiKey",
        "create.bulk.properties": "false",
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
  "configuration": {
    "hubspot.authorization.apikey":"xxxxxxxxxxxxxxxxxxxxxxxx",
    "authentication.type": "apiKey",
    "create.bulk.properties": "false"
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
| `code` | The authorization grant code returned from the API provider in an OAuth2 authentication workflow. | string |
|  Name</br>`name` |  The name for the element instance created during authentication.   | string  |
| `authentication.type` | Identifies how you are authenticating with {{page.heading}}. Either `oauth2` or `apiKey`. | string |
| Create Bulk Properties for Migration</br>`create.bulk.properties` |  Identifies if you want to create custom properties in Hubspot for bulk uploads. |  string, must be `true` (Yes) or `false` (No) |
| `oauth.callback.url` | OAuth 2.0 authentication only. The URL where you want to redirect users after they grant access. This is the **Callback URL** that you noted in the [API Provider Setup section](setup.html).  | string  |
| `oauth.api.key` | OAuth 2.0 authentication only. The Client ID from {{page.heading}}. This is the **Client ID** that you noted in the [API Provider Setup section](setup.html) |  string |
| `oauth.api.secret` | OAuth 2.0 authentication only. The Client Secret from {{page.heading}}. This is the **Client Secret** that you noted in the [API Provider Setup section](setup.html)| string |
| Hubspot API Key</br>`hubspot.authorization.apikey` | API Key authentication only. The hubspot API key that you noted in the [API Provider Setup section](setup.html) | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
