# Authenticate with {{page.apiProvider}}

You can authenticate with {{page.apiProvider}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.apiProvider}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.apiProvider}} and create an element instance. You will need your **{{page.username}}**,  **{{page.password}}**, **Host Name**, **Instance Number**, and **System Id**  that you identified in [API Provider Setup](setup.html).

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **Username** and **Password** enter the **{{page.username}}** and **{{page.password}}** that you identified in [API Provider Setup](setup.html).
7. In **Host Name** enter the URL of your {{page.apiProvider}} account.
8. In **Instance Number** and **System Id** enter the information from the System Entry Properties that you identified in [API Provider Setup](setup.html).
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
    "username": "<{{page.apiProvider}} {{page.username}}>",
    "password": "<{{page.apiProvider}} {{page.password}}>",
    "sap.host.name": "<URL of your {{page.apiProvider}} account>",
    "sap.instance.number":"<From {{page.apiProvider}} System Entry Properties>",
    "sap.system.id":"<From {{page.apiProvider}} System Entry Properties>"
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
"username": "xxxxxxxxxxxxxxxxxx",
"password": "xxxxxxxxxxxxxxxxxxxxxxxx",
"sap.host.name": "108.24.145.246"
"sap.instance.number":"00",
"sap.system.id":"100"
},
"tags": [
"Docs"
],
"name": "API Instance"
}'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
| Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| **Username**</br>`username` | The {{page.heading}} {{page.username}} that you noted in [API Provider Setup](setup.html). |  string |
| **Password**</br>`password` | The {{page.heading}} {{page.password}} that you noted in [API Provider Setup](setup.html). | string |
|  **Host Name**</br>`sap.host.name` |  The URL or IP address of your {{page.apiProvider}} account, for example `108.24.145.246`   | string  |
| **Instance Number**</br>`sap.instance.number`  | The Instance Number found in the SAP system's System Entry Properties. |
| **System ID**</br>`sap.system.id`  |  The System ID found in the SAP system's System Entry Properties.  |
| tags | {{site.data.glossary.element-auth-tags}} | string |
