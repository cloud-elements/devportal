---
heading: Mixpanel
seo: Authenticate | Mixpanel | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 4441
elementKey: mixpanel
username: API Secret  # In Basic authentication, this is the term that we have mapped to our "username" parameter
password: password # In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. You will need your **API Secret**  that you identified in [API Provider Setup](setup.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **{{page.username}}** enter the credentials that you identified in [API Provider Setup](setup.html).
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Authenticate**.

After successfully authenticating, we give you several options for next steps with the authenticated element instance. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs#test-an-element-instance) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).


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
        "username": "<{{page.heading}} {{page.username}}>"
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
    "username": "xxxxxxxxxxxxxxxxxx"
  },
  "tags": [
    "Docs"
  ],
  "name": "API Instance"
}'
```
## Parameters

API parameters not shown in {{site.console}} are in `code formatting`.

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `key` | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| {{page.username}}</br>`username` | The {{page.heading}} {{page.username}} that you noted in [API Provider Setup](setup.html). |  string |
| tags | {{site.data.glossary.element-auth-tags}} | string |

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id": 12345,
  "name": "API Instance",
  "createdDate": "2017-08-07T18:46:38Z",
  "token": "ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "element": {
      "id": 13973,
      "name": "Mixpanel",
      "key": "mixpanel",
      "description": "Add an Mixpanel element to connect to your existing mixpanel account, allowing you to create activities, users and download activities and users",
      "image": "https://uxcam.com/images/mixpanel-logo.png",
      "active": true,
      "deleted": false,
      "typeOauth": false,
      "trialAccount": false,
      "resources": [ ],
      "transformationsEnabled": true,
      "bulkDownloadEnabled": true,
      "bulkUploadEnabled": false,
      "cloneable": true,
      "extendable": false,
      "beta": false,
      "authentication": {
          "type": "basic"
      },
      "extended": false,
      "hub": "general",
      "protocolType": "http",
      "parameters": [  ],
      "private": false
    },
    "elementId": 13973,
    "tags": [
        "Docs"
    ],
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {    },
    "eventsEnabled": false,
    "traceLoggingEnabled": false,
    "cachingEnabled": false,
    "externalAuthentication": "none",
    "user": {
        "id": 12345
      }
}
```
