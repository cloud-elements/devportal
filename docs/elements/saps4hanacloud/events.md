---
heading: SAP S/4 HANA Cloud
apiProvider: SAP S/4HANA Cloud # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Events | SAP S/4 HANA Cloud | Cloud Elements API Docs
title: Events
description: Enable SAP S/4 HANA Cloud events for your application.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6374
elementKey: saps4hanacloud
username: user  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 25
---

# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#polling>Polling</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports polling events for {{page.heading}}. After receiving an event, Cloud Elements standardizes the payload and sends an event to the configured callback URL of your authenticated element instance.

You can set up polling for the `business-partners` resource. You can also copy the `business-partners` configuration to poll other resources. See [Configure Polling Through API](#configure-polling-through-api) for more information.

## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-polling-through-api) .

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.apiProvider}}](authenticate.html) .
2. To enable hash verification in the headers of event callbacks, click **Show Optional Fields**, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
4. Use the **Event poller refresh interval (mins)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Log in to {{page.apiProvider}}, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs#test-an-element-instance) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

### Configure Polling Through API

Use the `/instances` endpoint to authenticate with {{page.apiProvider}} and create an element instance with polling enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with polling:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element":{
        "key":"{{page.elementKey}}"
      },
      "configuration":{
        "username": "<{{page.apiProvider}} {{page.username}}>",
        "password": "<{{page.apiProvider}} {{page.password}}>",
        "saps4hanacloud.url": "<URL of you S/4HANA account>",
        "event.vendor.type": "polling",
        "event.notification.enabled": true,
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "business-partners":{
            "url":"/hubs/erp/business-partners?where=CreationDate>='${gmtDate:yyyy-MM-dd'T'HH:mm:ss}' or LastChangeDate>='${date:yyyy-MM-dd'T'HH:mm:ss}'",
            "idField":"BusinessPartner",
            "datesConfiguration":{
              "updatedDateField":"updatedDate",
              "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
              "updatedDateTimezone":"GMT",
              "createdDateField":"createdDate",
              "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
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


### Example cURL with Polling

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
    "username": "xxxxxxxxxxxxxxxxxx",
    "password": "xxxxxxxxxxxxxxxxxxxxxxxx",
    "saps4hanacloud.url": "https://myserver.s4hana.ondemand.com",
    "event.notification.enabled": true,
    "event.vendor.type": "polling",
    "event.poller.refresh_interval": "15",
    "event.poller.configuration":{
      "business-partners":{
        "url":"/hubs/erp/business-partners?where=CreationDate>='${gmtDate:yyyy-MM-dd'T'HH:mm:ss}' or LastChangeDate>='${date:yyyy-MM-dd'T'HH:mm:ss}'",
        "idField":"BusinessPartner",
        "datesConfiguration":{
          "updatedDateField":"updatedDate",
          "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "updatedDateTimezone":"GMT",
          "createdDateField":"createdDate",
          "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "createdDateTimezone":"GMT"
          }
    	}
    }
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance with Polling"
}'
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| Username</br>`username` | The {{page.heading}} {{page.username}} that you noted in [API Provider Setup](setup.html). |  string |
| Password</br>`password` | The {{page.heading}} {{page.password}} that you noted in [API Provider Setup](setup.html). | string |
|  **SAP S/4 HANA Cloud URL**</br>`saps4hanacloud.url` |  The URL of you S/4HANA account, for example `https://myserver.s4hana.ondemand.com`   | string  |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
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
