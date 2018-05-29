# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance
6. In **Server URL** enter your server URL which is typically your ConnectWise URL prepended with `api-`.
7. In **Company**, **Username**, and **Password** enter the credentials that you use to log in to ConnectWise.
8. In **WSDL Path** enter the WSDL path that you identified in [API Provider Setup](setup.html).
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

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
        "helpdesk.connectwise.username": "<INSERT_CONNECTWISE_USERNAME>",
        "helpdesk.connectwise.password": "<INSERT_CONNECTWISE_PASSWORD>",
        "helpdesk.connectwise.server.url": "<INSERT_CONNECTWISE_SERVER_URL>",
        "helpdesk.connectwise.company": "<INSERT_CONNECTWISE_COMPANY>"
      },
      "tags": [
    	"Docs"
      ],
      "name": "ConnectWise_Instance"
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
  -H 'Authorization: User <INSERT>, Organization <INSERT>'  \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "configuration": {
    "helpdesk.connectwise.username": "xxxxxxxx",
    "helpdesk.connectwise.password": "xxxxxxxxxxxxxx",
    "helpdesk.connectwise.server.url": "http://api-cloudelements.connectwisedev.com",
    "helpdesk.connectwise.company": "cloudelements"
  },
  "tags": [
    "Docs"
  ],
  "name": "ConnectWise_Instance"
}
'
```

## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Heading | Heading   | Data Type |
| :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| Server URL</br>`helpdesk.connectwise.server.url` | The url of your ConnectWise site with `api-` appended. | string |
| Company</br>`company` | The company name that you use to log in. |  string |
| User Name</br>`public.key` |  Your ConnectWise user name. | string |
| Password </br>`private.key` | Your ConnectWise password. | string |
| WSDL Path</br> `helpdesk.connectwise.wsdl.path` | The WSDL path appears in the URL that ConnectWise redirects you to after you log in. For example, in `https://my.connectwise.com/v2017_2/ConnectWise.aspx?locale=en_US&session=...`, the WSDL path is `/v2017_2/apis/2.0/`. | string |
| Filter null values from the response </br>`filter.response.nulls` | *Optional*. Determines if null values in the response JSON should be filtered from the response. Yes or `true` indicates that Cloud Elements will filter null values. </br>Default: `true`  | boolean |
| tags | *Optional*. User-defined tags to further identify the instance. | string |

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
    "id": 117,
    "name": "ConnectWise",
    "key": "connectwisehd",
    "description": "Add a ConnectWise Instance to connect your existing ConnectWise account to the Help Desk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your ConnectWise account information to add an instance.",
    "image": "elements/provider_connectwise.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have a ConnectWise account, you can find out more about them at ConnectWise",
    "transformationsEnabled": true,
    "authentication": {},
    "hub": "helpdesk",
    "parameters": []
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "configuration": {
    "event.notification.subscription.id": null,
    "helpdesk.connectwise.company": "company_f",
    "helpdesk.connectwise.wsdl.path": "/v2015_3/apis/2.0/",
    "event.notification.callback.url": null,
    "helpdesk.connectwise.server.url": "sample.connectwisedev.com",
    "helpdesk.connectwise.username": "api1",
    "helpdesk.connectwise.password": "api1",
    "event.notification.enabled": null
  },
  "eventsEnabled": false,
  "cachingEnabled": false
}
```
