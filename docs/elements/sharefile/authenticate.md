---
heading: Citrix ShareFile
seo: Authenticate | Citrix ShareFile | Cloud Elements API Docs
title: Authenticate
description: Authenticate
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 450
elementKey: sharefile
apiKey: Client Id #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. You will need your **{{page.apiKey}}**  and **{{page.apiSecret}}** that you identified in [API Provider Setup](setup.html).

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Authenticate](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **Sharefile API Key** and **Sharefile API Secret** enter the Sharefile **{{page.apiKey}}** and **{{page.apiSecret}}** that you identified in [API Provider Setup](setup.html).
7. In **Sharefile Root Folder** set your root folder.
8. Click **Show Optional Fields**.
9. In **Subdomain** enter the subdomain part of your Sharefile url. For example, if your url is `https://cloud-elements.sharefile.com` enter `cloud-elements`.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Authenticate**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send a request to our `/instances` endpoint. The end result is the same, though: an authenticated element instance with a  **token** and **id**.

Authenticating through API follows a multi-step OAuth 2.0 process that involves:

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active=" "%}

* [Getting a redirect URL](#getting-a-redirect-url). This URL sends users to the vendor to log in to their account.
* [Authenticating users and receiving the authorization grant code](#authenticating-users-and-receiving-the-authorization-grant-code). After the user logs in, the vendor makes a callback to the specified url with an authorization grant code.
* [Authenticating the element instance](#authenticating-the-element-instance). Using the authorization code from the vendor, authenticate with the vendor to create an element instance at Cloud Elements.

### Getting a Redirect URL

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Redirect URL"%}

Use the following API call to request a redirect URL where the user can authenticate with the service provider. Replace `{keyOrId}` with the element key, `{{page.elementKey}}`.

```bash
curl -X GET /elements/{keyOrId}/oauth/url?apiKey=<api_key>&apiSecret=<api_secret>&callbackUrl=<url>&siteAddress=<url>
```

#### Query Parameters

| Query Parameter | Description   |
| :------------- | :------------- |
| apiKey |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you recorded in [API Provider Setup section](setup.html). |
| apiSecret |    {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you recorded in [API Provider Setup section](setup.html).  |
| callbackUrl |   {{site.data.glossary.element-auth-oauth-callback}} This is the **{{page.callbackURL}}** that you recorded in [API Provider Setup section](setup.html)   |

#### Example cURL

```bash
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/elements/{{page.elementKey}}/oauth/url?apiKey=fake_api_key&apiSecret=fake_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state={{page.elementKey}}' \
```

#### Example Response

Use the `oauthUrl` in the response to allow users to authenticate with the vendor.


```json
{
"oauthUrl": "https://secure.sharefile.com/oauth/authorize?client_id=tkRrJHtoCrJG1kq3D22aQD8UNhocboRw&response_type=code&redirect_uri=https%3A%2F%2Fhttpbin.org%2Fget&state=sharefile",
"element": "{{page.elementKey}}"
}
```

### Authenticating Users and Receiving the Authorization Grant Code

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Users"%}

Provide the response from the previous step to the users. After they authenticate, {{page.heading}} provides the following information in the response:

* code
* state

| Response Parameter | Description   |
| :------------- | :------------- |
| code | {{site.data.glossary.element-auth-grant-code}} |
| state | {{site.data.glossary.element-auth-state}} (`{{page.elementKey}}`) . |

{% include note.html content="If the user denies authentication and/or authorization, there will be a query string parameter called <code>error</code> instead of the <code>code</code> parameter. In this case, your application can handle the error gracefully." %}

### Authenticating the Element Instance

{% include workflow.html displayNames="Redirect URL,Authenticate Users,Authenticate Instance" links="#getting-a-redirect-url,#authenticating-users-and-receiving-the-authorization-grant-code,#authenticating-the-element-instance" active="Authenticate Instance"%}

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
        "code": "<AUTHORIZATION_GRANT_CODE>"
      },
      "configuration": {
        "oauth.callback.url": "<CALLBACK_URL>",
        "oauth.api.key": "<CONSUMER_KEY>",
      	"oauth.api.secret": "<CONSUMER_SECRET>",
        "document.root.folder.name": "</ROOT_DIR>",
        "sharefile.subdomain": "<SUBDOMAIN>"
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
    "code": "xxxxxxxxxxxxxxxxxxxxxxx"
  },
  "configuration": {
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "document.root.folder.name": "/top",
    "sharefile.subdomain": "cloud-elements"
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
| `code` | {{site.data.glossary.element-auth-grant-code}} | string |
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| `oauth.api.key` |  {{site.data.glossary.element-auth-api-key}} This is the **{{page.apiKey}}** that you noted in [API Provider Setup](setup.html). |  string |
| `oauth.api.secret` | {{site.data.glossary.element-auth-api-secret}} This is the **{{page.apiSecret}}** that you noted in [API Provider Setup](setup.html). | string |
| `oauth.callback.url` | {{site.data.glossary.element-auth-api-key}} This is the **{{page.callbackURL}}** that you noted in [API Provider Setup](setup.html).  | string |
|  Sharefile Root Folder</br>`document.root.folder.name` |  The root folder. The /top folder is the root level folder.   |  string  |
|  Subdomain</br>`sharefile.subdomain` | The subdomain part of your Sharefile url. For example, if your url is `https://cloud-elements.sharefile.com` enter `cloud-elements`.  | string  |
| tags | {{site.data.glossary.element-auth-tags}} | string |

## Example Response for an Authenticated Element Instance

```json
{
  "id": 1234,
  "name": "Test",
  "token": "zg1dx35BCjiKo+pbTQS3dxcAKlfZcNVOWtI=",
  "element": {
    "id": 450,
    "name": "Sharefile",
    "key": "sharefile",
    "description": "Sharefile Element",
    "image": "https://lh6.googleusercontent.com/--zcBqgYsBHE/AAAAAAAAAAI/AAAAAAAAAks/ICvceS9qZ-I/s0-c-k-no-ns/photo.jpg",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "transformationsEnabled": true,
    "bulkDownloadEnabled": false,
    "bulkUploadEnabled": false,
    "cloneable": true,
    "authentication": {
      "type": "oauth2"
    },
    "hub": "documents",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "base.url": "https://{sharefile.subdomain}.sf-api.com/sf/v3",
    "oauth.api.secret": "SHAREFILE_API_SECRET",
    "event.notification.subscription.id": null,
    "pagination.max": "100",
    "event.vendor.type": "polling",
    "oauth.user.token": "ydDkYnjaxBiywa8jYBub2UQikA7SqlnD$$FRvqiwAdMEtRijHvyqeD",
    "sharefile.token.url": "https://secure.sharefile.com/oauth/token?grant_type=authorization_code",
    "pagination.type": "",
    "event.poller.refresh_interval": "5",
    "event.notification.callback.url": null,
    "event.notification.signature.key": null,
    "oauth.user.refresh_token": "ydDkYnjaxBiywa8jYBub2UQikA7SqlnD$$t5A4a5oU7FYJeZwa4V7LZzrl82AmdG9xmH8",
    "sharefile.subdomain": "cloudelements",
    "event.poller.urls": "documents|/hubs/documents/events/poll/documents?where=lastmodifieddate='${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
    "sharefile.auth.url": "https://secure.sharefile.com/oauth/index.aspx",
    "oauth.api.key": "SHAREFILE_API_KEY",
    "sharefile.callback.url": "https://httpbin.org/get",
    "oauth.user.refresh_time": "1461625686998",
    "sharefile.format": "json",
    "event.notification.enabled": "false"
  },
  "eventsEnabled": false,
  "cachingEnabled": false,
  "traceLoggingEnabled": false
}
```
