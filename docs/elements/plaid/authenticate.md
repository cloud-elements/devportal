---
heading: Plaid
apiProvider: Plaid # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Authenticate | Plaid | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5865
elementKey: plaid
username: username  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.apiProvider}}

You can authenticate with {{page.apiProvider}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.apiProvider}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.apiProvider}} and create an element instance.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. Enter the required Plaid information that you identified in [API Provider Setup](setup.html):
  - **Plaid Public Key**: Enter your **public_key**.
  - **Plaid Secret**: Enter your **secret**.
  - **subdomain**: Enter **sandbox**, **production**, or **development** depending on your [API environment](https://plaid.com/docs/quickstart/#api-environments).
  - **Plaid Client Id**: Enter your **client_id**.
6. Enter the user's bank information:
  - **User's Bank Password**
  - **User's Bank Username**
  - **User's Bank Name**. This must match an Institution in Plaid.
7. If you want access to products other than Auth and Transactions, click **Show Optional Fields**, and then add the products that you want to access to the comma separated list. For example, `auth, transactions, identity, income`.

    {% include note.html content="Identity and Income are not available by default. If you do not have access to the specified products you cannot authenticate an element instance." %}

9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send a request to our `/instances` endpoint. The end result is the same, though: an authenticated element instance with a  **token** and **id**.

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):


    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "public_key": "<{{page.apiProvider}} public_key>",
        "secret": "<{{page.apiProvider}} secret>",
        "client_id": "<{{page.apiProvider}} client_id>",
        "subdomain": "<{{page.apiProvider}} API environment>",
        "password": "User's password",
        "username": "User's user name",
        "bank_name": "Supported Plaid Institution Name",
        "products": "<Comma separated list of products>"
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
    "public_key": "xxxxxxxxxxxxxxxxxx",
    "secret": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "client_id": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "subdomain": "sandbox",
    "username": "user_good",
    "password": "pass_good",
    "bank_name": "Tartan Bank",
    "products": "auth, transactions"
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

- **User's Bank Name**. This must match an Institution in Plaid.
7. If you want access to products other than Auth and Transactions, click **Show Optional Fields**, and then add the products that you want to access to the comma separated list. For example, `auth, transactions, identity, income`.


| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| Plaid Public Key</br>`public_key` | The Plaid **public_key** that you noted in [API Provider Setup](setup.html). |  string |
| Plaid Secret</br>`secret` | The Plaid **secret** that you noted in [API Provider Setup](setup.html). | string |
| Plaid Client Id</br>`client_id`   | The Plaid **client_id** that you noted in [API Provider Setup](setup.html). | string |
| subdomain</br>`subdomain`   | The Plaid [API environment](https://plaid.com/docs/quickstart/#api-environments) (sandbox, production, or development) to integrate with.  | string  |
| User' Bank Username</br>`username`   | The user's bank user name.   | string  |
| User' Bank Password</br>`password`   |  The user's bank password.  | string  |
| User's Bank Name   | The name of the user's bank that must match an Institution in Plaid  | string  |
| Products</br>`products`   | A comma-separated list of [Plaid products](https://plaid.com/docs/api/#auth). | string  |
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
    "id": 5865,
    "name": "Plaid",
    "key": "plaid",
    "description": "Plaid enables applications to connect with users’ bank accounts",
    "image": "elements/custom-element-default-logo.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "resources": [ ],
    "transformationsEnabled": true,
    "bulkDownloadEnabled": true,
    "bulkUploadEnabled": true,
    "cloneable": true,
    "extendable": true,
    "beta": false,
    "authentication": {
        "type": "custom"
    },
    "extended": false,
    "hub": "finance",
    "protocolType": "http",
    "parameters": [  ],
    "private": false
    },
  "elementId": 5865,
  "tags": [
      "Docs"
  ],
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {    },
  "eventsEnabled": false,
  "eventsNotificationCallbackUrl": "false",
  "traceLoggingEnabled": false,
  "cachingEnabled": false,
  "externalAuthentication": "none",
  "user": {
    "id": 12345
    }
}
```
