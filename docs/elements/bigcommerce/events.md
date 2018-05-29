---
heading: BigCommerce
seo: Events | BigCommerce | Cloud Elements API Docs
title: Events
description: Enable BigCommerce events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 274
elementKey: bigcommerce
apiKey: Key Name
apiSecret: Secret Name
callbackURL: Callback URL Name
parent: Back to Element Guides
order: 30
---

# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}.

You can set up events for the following resources:

* orders
* products
* customers

{% include note.html content="You can set up polling for other resources that include <code>created</code>, <code>updated</code>, and <code>deleted</code> data through our API. Copy the configuration of one of the default resources, and replace the name with the resource that you want to poll.  " %}

## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-polling-through-api) .

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}


### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an **Event Notification Callback URL**.
4. Use the **Event poller refresh interval (mins)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element":{
        "key":"{{page.elementKey}}"
      },
      "configuration":{
        "username": "xxxxxxxxxxxxxxxxxx",
        "password": "xxxxxxxxxxxxxxxxxxxxxxxx",
        "store.url": "https://store-wuxeae6.mybigcommerce.com/api/v2",
        "event.notification.enabled": true,
        "event.notification.callback.url": "http://mycoolapp.com",
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "contacts":{
            "url":"/hubs/crm/contacts?where=lastUpdated>'${gmtDate:yyyy-MM-dd'T'HH:mm:ss'Z'}'",
            "idField":"id",
            "datesConfiguration":{
              "updatedDateField":"_info.lastUpdated",
              "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
              "updatedDateTimezone":"GMT",
              "createdDateField":"_info.lastUpdated",
              "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
              "createdDateTimezone":"GMT"
            }
          }
        }
      },
      "tags":[
        "<Add_Your_Tag>"
      ],
      "name":"<INSTANCE_NAME>"
    }
    ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include the User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.


### Example JSON with Polling

instance JSON with polling events enabled:

```json
{
  "element":{
    "key":"{{page.elementKey}}"
  },
  "configuration":{
    "oauth.api.key": "xxxxxxxxxxxxxxxxxx",
    "oauth.api.secret": "xxxxxxxxxxxxxxxxxxxxxx",
    "oauth.callback.url": "https://mycoolapp.com",
    "event.notification.enabled":true,
    "event.notification.callback.url":"http://mycoolapp.com",
    "event.poller.refresh_interval":"15",
    "event.poller.configuration": {
      "orders": {
        "url": "/hubs/ecommerce/orders?where=min_date_modified='${date:EEE, dd MMM yyyy HH:mm:ss Z}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateField": "date_created",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z"
        }
      },
      "products": {
        "url": "/hubs/ecommerce/products?where=min_date_modified='${date:EEE, dd MMM yyyy HH:mm:ss Z}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateField": "date_created",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z"
        }
      },
      "customers": {
        "url": "/hubs/ecommerce/customers?where=min_date_modified='${date:EEE, dd MMM yyyy HH:mm:ss Z}'",
        "idField": "id",
        "datesConfiguration": {
          "updatedDateField": "date_modified",
          "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
          "createdDateField": "date_created",
          "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z"
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
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| Username</br>`username` | The Username of the BigCommerce Legacy API Account that you noted in [API Provider Setup](setup.html). |  string |
| API Token</br>`password` | The API Token of the BigCommerce Legacy API Account that you noted in [API Provider Setup](setup.html). | string |
| API Path</br>`store.url` | The API Path of the BigCommerce Legacy API Account that you noted in [API Provider Setup](setup.html).  |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event poller refresh interval (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configure Polling</br>`event.poller.configuration`  | _Optional_. Configuration parameters for polling. | JSON object |
| Resource to Poll  | The polling event configuration of the resource that you will monitor. | JSON object |
| URL</br>`url` | The url to query for updates to the resource.  | String |
| ID Field</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| Advanced Filtering</br>`datesConfiguration` | Configuration parameters for dates in polling | JSON Object |
| Updated Date Field</br>`updatedDateField` | The field that identifies an updated object. | String |
| Updated Date Format</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| Created Date Field</br>`createdDateField` | The field that identifies a created object. | String |
| Created Date Format</br>`createdDateFormat` | The date format of the field that identifies a created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
