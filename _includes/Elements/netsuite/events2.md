## Polling

You can configure polling through the UI or in the JSON body of the `/instances` API call.

{% include note.html content="Unless configured for a specific time zone, polling occurs in UTC." %}

### Configure Polling Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with polling, sign in to Cloud Elements, and then create a new element instance as described in [authentication](authenticate.html). During configuration of the new instance:

1. Switch **Events Enabled** on.
1. Add an Event Notification Callback URL.
1. Use the __Event poller refresh interval (mins)__ slider or enter a number in minutes to specify how often Cloud Elements should poll for changes.

5. Select the resources to poll.
6. Advanced users can further configure polling:
  - Click <img src="/assets/img/platform-icons/code.png" alt="Code Button" class="inlineImage"> to edit the polling configuration JSON directly.
  ![Configure Polling UI](/assets/img/elements/configure-polling-json.gif)
  - Click <img src="/assets/img/platform-icons/pencil.png" alt="Edit Button" class="inlineImage"> to access the poller configuration.
  ![Configure Polling JSON](/assets/img/elements/configure-polling2.gif)

Once you're done with event configuration, you can complete the steps to finish creating the instance, which will have events enabled.

### Configure Polling Through API

To authenticate an element instance with polling, sign in to Cloud Elements, and then create a new element instance as described in [authentication](authenticate.html). When using the API, there are additional parameters used to enable and configure polling events on the new instance.

### Example JSON with Polling

This example JSON shows the parameters that can be sent to the `/instances` API to enable and configure polling. The example shows configuration of polling for `Customers` objects, but you can set whichever types of objects that you wish.

```json
{
  "element":{
    "key": "{{page.elementKey}}"
  },
  "configuration": {
    "netsuite.sandbox": false,
    "netsuite.accountId": "my_account_id",
    "netsuite.single.session": true,
    "netsuite.single.session.key": "my_unique_key",
    "authentication.type": "Basic",
    "user.username": "my@somewhere.com",
    "user.password": "my_secret_password",
    "netsuite.appId": "my_app_id",
    "event.notification.enabled": true,
    "event.notification.callback.url": "http://mycoolapp.com",
    "event.poller.refresh_interval": "15",
    "event.poller.configuration": {
      "{{page.pollObject}}": {
        "url": "/hubs/finance/customers?where=lastModifiedDate>'${gmtDate:yyyy-MM-dd'T'HH:mm:ssXXX}'",
        "idField": "internalId",
        "filterByUpdatedDate": true,
        "datesConfiguration": {
          "updatedDateField": "lastModifiedDate",
          "updatedDateFormat": "milliseconds",
          "createdDateField": "dateCreated",
          "createdDateFormat": "milliseconds"
        }
      }
    }
  },
  "tags": [
    "Testing"
  ],
  "name": "NetSuite Polling"
}
```

## Parameters

{% include note.html content="Non-event related parameters are described in <a href=authenticate.html>Authenticate</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| Events Enabled</br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Event Poller Refresh Interval</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number|
| Configur Polling</br>`event.poller.configuration`  | *Optional*. Configuration parameters for polling. | JSON object |
| `<object_type>`  | One or more JSON objects that correspond to configuration for that type. `object_type` can be `customers`, `invoices`, etc. | JSON object |
| `url` | The url to query for updates to the resource.  | String |
| `idField` | The field in the resource that is used to uniquely identify it.  | String |
| `datesConfiguration` | Configuration parameters for dates in polling | JSON Object. |
| `updatedDateField` | The field that identifies an updated object. | String |
| `updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| `createdDateField` | The field that identifies a created object. | String |
| `createdDateFormat` | The date format of the field that identifies a created object.  | String |
