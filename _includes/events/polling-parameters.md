## Polling Parameters

Labels and buttons on the UI correspond to parameters in the JSON. The table below shows UI labels and buttons in **bold** and the equivalent parameters in the configuration JSON object in `code formatting`.
![UI and JSON](/assets/img/events/ui-to-json.png)

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| **Events Enabled** </br>`event.notification.enabled` | Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| **Event Type**</br>`event.vendor.type` |  The type of event, either `polling` or `webhook`. | string |
| **Event Notification Callback URL**</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| **Event poller refresh interval** (mins)</br>`event.poller.refresh_interval`  | A number in minutes to identify how often the poller should check for changes. |  number |
| **Callback Notification Signature Key** </br>`event.notification.signature.key` | *Optional*. A user-defined key for added security to show that events have not been tampered with. | string |
| **Configure Polling**</br>`event.poller.configuration`  | Configuration parameters for polling.</br> {% include tip.html content="The default polling configuration represents the optimal configuration. Although you can change anything in the poller configuration, we recommend that you do so rarely and in conjunction with Cloud Elements support.  " %}  | JSON object |
| **Resource to Poll** </br>`resourceName` (e.g., `contacts`) | The polling event configuration of the resource that you will monitor. | JSON object |
| **URL**</br>`url` | The url to query for updates to the resource.  | String |
| **ID Field**</br>`idField` | The field in the resource that is used to uniquely identify it.  | String |
| **Advanced Filtering**</br>`datesConfiguration` | Configuration parameters for dates in polling. | JSON Object |
| **Updated Date Field**</br>`updatedDateField` | The field that identifies an updated object. | String |
| **Updated Date Format**</br>`updatedDateFormat` | The date format of the field that identifies an updated object.  | String |
| **Created Date Field**</br>`createdDateField` | The field that identifies a created object. | String |
| **Created Date Format**</br>`createdDateFormat` | The date format of the field that identifies a created object.  | String |
