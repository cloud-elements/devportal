## Polling

You can configure polling [through the UI](#configure-polling-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-polling-through-api) .

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC.  " %}

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling:

1. Enter the basic information required to authenticate an element instance as described in [Authenticate with {{page.heading}}](authenticate.html) .
2. Enable events: Switch **Events Enabled** on.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Switch **Events Enabled** on. </br>![event-enabled-on](../img/event-enabled-on.png)|  In **Event Notifications Enabled**, select **True**.</br>![event-enabled-true](../img/event-enabled-true.png) |

8. Add an **Event Notification Callback URL**.
5. Optionally include an **Event Notification Signature Key** to identify if events have been tampered with.
4. Use the **Event poller refresh interval (mins)** slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.
5. Select and configure the resources to poll.

    | Cloud Elements 2.0 | Earlier UI  |
    | :------------- | :------------- |
    | Select the resources to poll. </br>Optionally, click the pencil icon to further configure polling.</br>![Configure Polling](../img/configure-polling2.gif) | Edit the JSON to add or remove resources and optionally change the Event Poller Resources Configuration . </br>![Configure Polling](../img/configure-polling.png) |

9. In Cloud Elements 2.0, optionally type or select one or more tags to add to the authenticated element instance.
7. Click **Create Instance** (Cloud Elements 2.0) or **Next** (earlier UI).
8. If using the earlier UI, optionally add tags to the authenticated element instance.
9. Note the **Token** and **ID** and save them for all future requests using the element instance.

    | Cloud Elements 2.0 | Earlier UI  |
    | :------------- | :------------- |
    | ![Authenticated Element Instance 2.0](../img/element-instance.png) | ![Authenticated Element Instance 1.0](../img/element-instance1.png)  |

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
        "{{page.hdOrcrm}}.autotask.username": "<AUTOTASK_USERNAME>",
        "{{page.hdOrcrm}}.autotask.password": "<AUTOTASK_PASSWORD>",
      	"{{page.hdOrcrm}}.autotask.server.url": "<AUTOTASK_LOGIN_URL>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "http://mycoolapp.com",
        "event.poller.refresh_interval": "<minutes>",
        "event.poller.configuration":{
          "{{page.pollObject}}":{
            "url":"/hubs/{{page.hdOrcrm}}/{{page.pollObject}}?where=lastActivityDate>='${date:yyyy-MM-dd'T'HH:mm:ssZ}''",
            "idField":"id",
            "datesConfiguration":{
              "updatedDateField":"lastActivityDate",
              "updatedDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'",
              "createdDateField":"createDate",
              "createdDateFormat":"yyyy-MM-dd'T'HH:mm:ss'Z'"
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
  "{{page.hdOrcrm}}.autotask.username": "xxxxxxxxxxxxxxxxxx",
  "{{page.hdOrcrm}}.autotask.password": "xxxxxxxxxxxxxxxxxxxxxxxx",
  "{{page.hdOrcrm}}.autotask.server.url": "https://ww2.autotask.net",
    "event.notification.enabled": true,
	  "event.notification.callback.url": "https://my.cloudelements.io/elements/api-v2/events/woocommercerest/",
    "event.poller.refresh_interval": "15",
    "event.poller.configuration":{
    	"{{site.pollObject}}": {
    		"url":"/hubs/{{page.hdOrcrm}}/{{page.pollObject}}?where=lastActivityDate>='${date:yyyy-MM-dd'T'HH:mm:ssZ}'",
            "idField":"id",
            "datesConfiguration":{
              "updatedDateField":"date_modified",
              "updatedDateFormat":"yyyy-MM-dd'\''T'\''HH:mm:ss'\''",
              "createdDateField":"date_created",
              "createdDateFormat":"yyyy-MM-dd'\''T'\''HH:mm:ss'\''"
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
| Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| Username</br>`{{page.hdOrcrm}}.autotask.username` | The AutoTask Username. |  string |
| Password</br>`{{page.hdOrcrm}}.autotask.password` | The AutoTask Password. |  string |
| Server URL</br>`{{page.hdOrcrm}}.autotask.server.url` | The AutoTask login URL. |  string |
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
| Created Date Field</br>`createdDateField` | The field that identifies an created object. | String |
| Created Date Format</br>`createdDateFormat` | The date format of the field that identifies an created object.  | String |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
