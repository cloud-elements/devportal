---
heading: Sage One
seo: Events | Sage One | Cloud Elements API Docs
title: Events
description: Enable Sage One events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3458
elementKey: sageone
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the endpoint. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up polling for the `customers` resource. You can also copy the `customers` configuration to poll other resources. See [Configure Polling Through API](#configure-polling-through-api) for more information.

<span style="color:red">Alternatively, if there are multiple supported resources, you can go with something like this:</span>

You can set up events for the following resources:

* Account
* Lead
* Contact
* Opportunity
* Other objects that include `created`, `updated`, and `deleted` data.

## Polling

You can configure polling through the UI or in the JSON body of the `/instances` API call.

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
7. Switch **Events Enabled** on.
8. Add an Event Notification Callback URL.
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

{% include note.html content="The endpoint returns an Element token upon successful completion. Retain the token for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Get an authorization grant code by completing the steps in [Getting a redirect URL](authenticate.html#getting-a-redirect-url) and  [Authenticating users and receiving the authorization grant code](authenticate.html#authenticating-users-and-receiving-the-authorization-grant-code).
1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element":{
        "key":"{{page.elementKey}}"
      },
      "providerData":{
        "code": "<AUTHORIZATION_GRANT_CODE>"
      },
      "configuration":{
        "oauth.api.key": "<CLIENT_ID>",
        "oauth.api.secret": "<CLIENT_SECRET>",
        "signature.secret": "<SIGNING_SECRET>",
        "apim.subscription.key": "<SUBSCRIPTION_PRIMARY_KEY_or_APIM_SUBSCRIPTION_KEY>",
        "country": "<COUNTRY_CODE>",
        "oauth.callback.url": "<CALLBACK_URL>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "http://mycoolapp.com",
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "customers":{
            "url":"/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' and attributes='created_at,updated_at",
            "idField":"id",
            "datesConfiguration":{
              "updatedDateField":"updated_at",
              "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
              "updatedDateTimezone":"GMT",
              "createdDateField":"created_at",
              "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
              "createdDateTimezone":"GMT"
            }
          }
        }
      },
      "tags":[
        "Test"
      ],
      "name":"API_Polling"
    }
    ```

    {% include note.html content="To poll additional resources, copy the <code>customers</code> configuration and replace <code>customers</code> with the name of the resource. " %}

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.


### Example JSON with Polling

instance JSON with polling events enabled:

```json
{
  "element":{
    "key":"sageone"
  },
  "providerData":{
    "code":"1c6ff4089d58d80e86482ab7d5b97f15dd7b041d"
  },
  "configuration":{
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxx",
    "signature.secret": "xxxxxxxxxxxxxxxxxxxxxxxxx",
    "apim.subscription.key": "xxxxxxxxxxxxxxxxxxxxxxxxx",
    "country": "US",
    "oauth.callback.url": "https://mycoolapp.com",
    "event.notification.enabled":true,
    "event.notification.callback.url":"http://mycoolapp.com",
    "event.poller.refresh_interval":"15",
    "event.poller.configuration":{
      "customers":{
        "url":"/hubs/finance/customers?where=lastModifiedDate>='${date:yyyy-MM-dd'T'HH:mm:ss'Z'}' and attributes='created_at,updated_at",
        "idField":"id",
        "datesConfiguration":{
          "updatedDateField":"updated_at",
          "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
          "updatedDateTimezone":"GMT",
          "createdDateField":"created_at",
          "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
          "createdDateTimezone":"GMT"
        }
      }
    }
  },
  "tags":[
    "Test"
  ],
  "name":"API_Polling"
}
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| `oauth.callback.url` | The Callback URL  for the connected app you created for {{page.heading}}. This is the Callback URL that you recorded in [API Provider Setup section](setup.html).  |
| `oauth.api.key` | The key obtained from registering your app with the provider. This is the **Client ID** that you recorded in [API Provider Setup section](setup.html). |  string |
| `oauth.api.secret` | The client secret obtained from registering your app with the provider.  This is the **Client Secret** that you recorded in [API Provider Setup section](setup.html).| string |
| `signature.secret` | The signing secret obtained from registering your app with the provider.  This is the **Signing Secret** that you recorded in [API Provider Setup section](setup.html). | string |
| APIM Subscription Key</br> `apim.subscription.key` | The subscription primary key obtained from subscribing to the Sage One API.  This is the **Primary Key** that you recorded in [API Provider Setup section](setup.html). <br> {% include note.html content=" When authenticating through the UI, you can use the default or your own subscription primary key. " %} | string |
| `country` | The two digit country code associated with the account of the authenticating user. | string |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling </br>`"event.poller.configuration"` | Resource to poll along with its configuration. | JSON Object |
| customers</br>`"event.poller.configuration": "{\"customers\"...}"`|*Optional*</br>The {{page.heading}} `customers` resource available for polling. |JSON object |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
