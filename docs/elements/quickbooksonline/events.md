---
heading: QuickBooks Online
seo: Events | QuickBooks Online | Cloud Elements API Docs
title: Events
description: Enable QuickBooks Online events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 39
elementKey: quickbooks
apiKey: Client ID #In OAuth2 this is what the provider calls the apiKey, like Client ID, Consumer Key, API Key, or just Key
apiSecret: Client Secret #In OAuth2 this is what the provider calls the apiSecret, like Client Secret, Consumer Secret, API Secret, or just Secret
callbackURL: Redirect URI #In OAuth2 this is what the provider calls the callbackURL, like Redirect URL, App URL, or just Callback URL
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports [polling](#polling) events and [webhooks](#webhooks) for {{page.heading}}. After receiving an event, Cloud Elements standardizes the payload and sends an event to the configured callback URL of your authenticated element instance.

## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-polling-through-api) .

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}

You can set up events for the following resources:

* bill-payments
* bills
* classes
* credit-memos
* credit-terms
* currencies
* customers
* employees
* invoices
* journal-entries
* ledger-accounts
* payment-methods
* payments
* products
* purchase-orders
* refund-receipts
* sales-receipts
* tax-codes
* tax-rates
* time-activities
* vendor-credits
* vendors

### Configure Polling Through the UI

For more information about each field described here, see [Polling Parameters](#polling-parameters).

To authenticate an element instance with polling:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
2. To enable hash verification in the headers of event callbacks, click **Show Optional Fields**, and then add a key to **Callback Notification Signature Key**.
7. Switch **Events Enabled** on.
8. In **Event Vendor Type**, select **Polling**.
8. Add an **Event Notification Callback URL**.
4. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)
7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Complete the authentication steps for the [OAuth 2.0](authenticate.html#authenticate-with-oauth-2-0) or [OAuth 1.0](authenticate.html#authenticate-with-oauth-1-0) authentication up to constructing the final authentication JSON body.
1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    **OAuth 2.0**

    ```json
       {
         "element":{
           "key":"{{page.elementKey}}"
         },
         "providerData":{
           "code": "<AUTHORIZATION_GRANT_CODE>",
           "realmId": "<REALMID_FROM_PREVIOUS_STEP>"
         },
         "configuration":{
           "oauth.callback.url": "<CALLBACK_URL>",
           "oauth.api.key": "<CONSUMER_KEY>",
         	"oauth.api.secret": "<CONSUMER_SECRET>",
           "authentication.type" : "oauth2",
           "scope" : "com.intuit.quickbooks.accounting openid profile email phone address",
           "event.notification.enabled": true,
           "event.vendor.type": "polling",
           "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
           "event.notification.signature.key": "<OPTIONAL_SIGNATURE_KEY>",
            "event.poller.refresh_interval": "15",
           "event.poller.urls": "bill-paymentsbillsclassescredit-memoscredit-termscurrenciescustomersemployeesinvoicesjournal-entriesledger-accountspayment-methodspaymentsproductspurchase-ordersrefund-receiptssales-receiptstax-codestax-ratestime-activitiesvendor-creditsvendors"
         },
         "tags":[
           "<Add_Your_Tag>"
         ],
         "name":"<INSTANCE_NAME>"
       }
       ```

      **OAuth 1.0**

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
       "filter.response.nulls": true,
       "event.notification.enabled": true,
       "event.vendor.type": "polling",
       "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
       "event.notification.signature.key": "<OPTIONAL_SIGNATURE_KEY>",
      "event.poller.refresh_interval": "15",
       "event.poller.urls": "bill-paymentsbillsclassescredit-memoscredit-termscurrenciescustomersemployeesinvoicesjournal-entriesledger-accountspayment-methodspaymentsproductspurchase-ordersrefund-receiptssales-receiptstax-codestax-ratestime-activitiesvendor-creditsvendors"
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


### Example cURL with Polling

**OAuth 2.0**

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
    "code": "xxxxxxxxxxxxxxxxxxxxxxx",
    "realmId": "xxxxxxxxxxxxxxxxx"
  },
  "configuration": {
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx"
    "authentication.type" : "oauth2",
    "scope" : "com.intuit.quickbooks.accounting openid profile email phone address",
    "event.notification.enabled": true,
    "event.vendor.type": "polling",
    "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxx",
    "event.poller.refresh_interval": "15",
    "event.poller.urls": "bill-paymentsbillsclassescredit-memoscredit-termscurrenciescustomersemployeesinvoicesjournal-entriesledger-accountspayment-methodspaymentsproductspurchase-ordersrefund-receiptssales-receiptstax-codestax-ratestime-activitiesvendor-creditsvendors"
    },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

**OAuth 1.0**

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
    "event.notification.enabled": true,
    "event.vendor.type": "polling",
    "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxx",
    "event.poller.refresh_interval": "15",
    "event.poller.urls": "bill-paymentsbillsclassescredit-memoscredit-termscurrenciescustomersemployeesinvoicesjournal-entriesledger-accountspayment-methodspaymentsproductspurchase-ordersrefund-receiptssales-receiptstax-codestax-ratestime-activitiesvendor-creditsvendors"
  },
  "tags": [
    "For Docs",
    "tag 2"
  ],
  "name": "QBO_Instance"
}'
```

### Polling Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Vendor Event Type </br>`event.vendor.type` | *Optional*. Identifies the type of events enabled for the instance, either `webhook` or `polling`. | string |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Callback Notification Signature Key </br>`event.notification.signature.key` | *Optional*. A user-defined key for added security to show that events have not been tampered with. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| `event.poller.urls`  | The objects that should be polled. |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Webhooks

You can configure webhooks [through the UI](#configure-webhooks-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-webhooks-through-api) .

### Configure Webhooks Through the UI

For more information about each field described here, see [Webhook Parameters](#webhook-parameters).

To authenticate an element instance with webhooks:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
2. To enable hash verification in the headers of event callbacks, click **Show Optional Fields**, and then add a key to **Callback Notification Signature Key**.
7. Switch **Events Enabled** on.
8. In **Event Vendor Type**, select **Webhook**.
8. Add an **Event Notification Callback URL**.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)
7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Configure Webhooks Through API

Use the `/instances` endpoint to authenticate with {{page.apiProvider}} and create an element instance with webhooks enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with webhooks:

1. Get an authorization grant code by completing the steps in [Getting a redirect URL](authenticate.html#getting-a-redirect-url) and  [Authenticating users and receiving the authorization grant code](authenticate.html#authenticating-users-and-receiving-the-authorization-grant-code).
1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    **OAuth 2.0**

    ```json
       {
         "element":{
           "key":"{{page.elementKey}}"
         },
         "providerData":{
           "code": "<AUTHORIZATION_GRANT_CODE>",
           "realmId": "<REALMID_FROM_PREVIOUS_STEP>"
         },
         "configuration":{
           "oauth.callback.url": "<CALLBACK_URL>",
           "oauth.api.key": "<CONSUMER_KEY>",
         	"oauth.api.secret": "<CONSUMER_SECRET>",
           "authentication.type" : "oauth2",
           "scope" : "com.intuit.quickbooks.accounting openid profile email phone address",
           "event.notification.enabled": true,
           "event.vendor.type": "webhooks",
           "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
           "event.notification.signature.key": "<OPTIONAL_SIGNATURE_KEY>"
          },
         "tags":[
           "<Add_Your_Tag>"
         ],
         "name":"<INSTANCE_NAME>"
       }
       ```

      **OAuth 1.0**

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
       "filter.response.nulls": true,
       "event.notification.enabled": true,
       "event.vendor.type": "webhook",
       "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
       "event.notification.signature.key": "<OPTIONAL_SIGNATURE_KEY>"
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


### Example cURL with Polling

**OAuth 2.0**

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
    "code": "xxxxxxxxxxxxxxxxxxxxxxx",
    "realmId": "xxxxxxxxxxxxxxxxx"
  },
  "configuration": {
    "oauth.callback.url": "https;//mycoolapp.com",
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxxxx"
    "authentication.type" : "oauth2",
    "scope" : "com.intuit.quickbooks.accounting openid profile email phone address",
    "event.notification.enabled": true,
    "event.vendor.type": "webhook",
    "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxx"
    },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

**OAuth 1.0**

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
    "event.notification.enabled": true,
    "event.vendor.type": "webhook",
    "event.notification.callback.url": "https://api.cloud-elements.com/elements/api-v2/events/{{page.elementKey}}/",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "For Docs",
    "tag 2"
  ],
  "name": "QBO_Instance"
}'
```

## Webhook Parameters

API parameters not shown in the {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Vendor Event Type </br>`event.vendor.type` | *Optional*. Identifies the type of events enabled for the instance, either `webhook` or `polling`. | string |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Callback Notification Signature Key </br>`event.notification.signature.key` | *Optional*. A user-defined key for added security to show that events have not been tampered with. | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
