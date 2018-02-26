## Webhook Parameters

Labels and buttons on the UI correspond to parameters in the JSON. The table below shows UI labels and buttons in **bold** and the equivalent parameters in the configuration JSON object in `code formatting`.
![UI and JSON](/assets/img/events/ui-to-json-hooks.png)

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| **Events Enabled** </br>`event.notification.enabled` | Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| **Event Type**</br>`event.vendor.type` |  The type of event, either `polling` or `webhook`. | string |
| **Event Notification Callback URL**</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| **Callback Notification Signature Key** </br>`event.notification.signature.key` | *Optional*. A user-defined key for added security to show that events have not been tampered with. | string |
