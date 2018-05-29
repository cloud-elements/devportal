# Events

Cloud Elements supports events via polling or webhooks depending on the API provider. If you would like to see more information on our Events framework, please see the [Event Management Guide](/docs/platform/event-management/index.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#supported-events-and-resources>Supported Events and Resources</a></br><a href=#webhooks>Webhooks</a></br><a href=#parameters>Parameters</a>" type="info" %}

## Supported Events and Resources

Cloud Elements supports webhook events for {{page.heading}}. For more information about webhooks at {{page.heading}} including the currently available webhooks, see [{{page.heading}}'s webhooks documentation](https://developer.connectwise.com/Manage/Developer_Guide/Callbacks).

## Webhooks

You can configure webhooks [through the UI](#configure-webhooks-through-the-ui) or in the JSON body of the `/instances` [API request](#configure-webhooks-through-api) .

### Configure Webhooks Through the UI

For more information about each field described here, see [Parameters](#parameters).

To authenticate an element instance with webhooks:

1. Complete the [authentication steps(authenticate.html#authenticate-through-the-ui)] up to entering the Shopify URL.
2. To enable hash verification in the headers of event callbacks, click Show Optional Fields, and then add a key to **Callback Notification Signature Key**.
2. Enable events: Switch **Events Enabled** on.
![event-enabled-on](/assets/img/elements/event-enabled-on.png)
8. Add an **Event Notification Callback URL**.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

### Configure Webhooks Through API

Use the `/instances` endpoint to authenticate with {{page.heading}} and create an element instance with webhooks enabled.

{% include note.html content="The endpoint returns an element instance token and id upon successful completion. Retain the token and id for all subsequent requests involving this element instance.  " %}

To authenticate an element instance with webhooks:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "helpdesk.connectwise.username": "<INSERT_CONNECTWISE_USERNAME>",
        "helpdesk.connectwise.password": "<INSERT_CONNECTWISE_PASSWORD>",
        "helpdesk.connectwise.server.url": "<INSERT_CONNECTWISE_SERVER_URL>",
        "helpdesk.connectwise.company": "<INSERT_CONNECTWISE_COMPANY>",
        "event.notification.enabled": true,
        "event.notification.callback.url": "<CALLBACK_URL>",
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
    "helpdesk.connectwise.username": "xxxxxxxx",
    "helpdesk.connectwise.password": "xxxxxxxxxxxxxx",
    "helpdesk.connectwise.server.url": "http://api-cloudelements.connectwisedev.com",
    "helpdesk.connectwise.company": "cloudelements",
    "event.notification.enabled": true,
    "event.notification.callback.url": "https://mycoolapp.com/events",
    "event.notification.signature.key": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```

## Parameters

API parameters not shown in the {{site.console}} are in `code formatting`.

<add custom element-specific params at the bottom of the table>

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>connectwisecrmrest  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| Server URL</br>`helpdesk.connectwise.server.url` | The url of your ConnectWise site with `api-` appended. | string |
| Company</br>`company` | The company name that you use to log in. |  string |
| User Name</br>`public.key` |  Your ConnectWise user name. | string |
| Password </br>`private.key` | Your ConnectWise password. | string |
| WSDL Path</br> `helpdesk.connectwise.wsdl.path` | The WSDL path appears in the URL that ConnectWise redirects you to after you log in. For example, in `https://my.connectwise.com/v2017_2/ConnectWise.aspx?locale=en_US&session=...`, the WSDL path is `/v2017_2/apis/2.0/`. | string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`  | boolean |
| Events Enabled </br>`event.notification.enabled` | *Optional*. Identifies that events are enabled for the element instance.</br>Default: `false`.  | boolean |
| Event Notification Callback URL</br>`event.notification.callback.url` |  The URL where you want Cloud Elements to send the events. | string |
| Callback Notification Signature Key </br>`event.notification.signature.key` | *Optional*. A user-defined key for added security to show that events have not been tampered with. | string |
| tags | *Optional*. User-defined tags to further identify the instance. | string |
