---
heading: BambooHR
apiProvider: BambooHR # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Authenticate | BambooHR | Cloud Elements API Docs
title: Authenticate
description: Authenticate an element instance with the API provider
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6315
elementKey: bamboohr
username: API key  #In Basic authentication, this is the term that we have mapped to our "username" parameter
password: BambooHR Domain #In Basic authentication, this is the term that we have mapped to our "password" parameter
parent: Back to Element Guides
order: 20
---

# Authenticate with {{page.apiProvider}}

You can authenticate with {{page.apiProvider}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.apiProvider}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-api>Authenticate Through API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response-for-an-authenticated-element-instance>Example Response for an Authenticated Element Instance</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.apiProvider}} and create an element instance. You will need your **{{page.username}}**  and **{{page.password}}** that you identified in [API Provider Setup](setup.html).

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
5. Enter a name for the element instance.
6. In **API Key** and **Company Name** enter the  **{{page.username}}** and **{{page.password}}** that you identified in [API Provider Setup](setup.html).
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual data resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/formula-template).

## Authenticate Through API

Send a request to our `/instances` endpoint to authenticate an element instance. When finished note the **token** and **id**.

To authenticate an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
{% include_relative includes/config-fields.md %}
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
    "company.name": "Acme"
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
|  Name</br>`name` |  {{site.data.glossary.element-auth-name}}  | string  |
| API Key</br>`username` | The {{page.heading}} {{page.username}} assigned to the user that you noted in [API Provider Setup](setup.html). |  string |
| Company Name</br>`company.name` | The BambooHR Domain Name. The Domain Name appears in the url of your account. For example, in `https://company_name.bamboohr.com/` the Domain Name is `company_name`. | string |
| tags | {{site.data.glossary.element-auth-tags}} | string |

## Example Response for an Authenticated Element Instance

In this example, the instance ID is `12345` and the instance token starts with "ABC/D...". The actual values returned to you will be unique: make sure you save them for future requests to this new instance.

```json
{
  "id":12345,
  "name":"API Instance",
  "createdDate":"2018-05-25T15:56:22Z",
  "token":"ABC/Dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=",
  "element":{
    "id":6315,
    "name":"Bamboo HR",
    "hookName":"BambooHR",
    "key":"bamboohr",
    "description":"The API can be used to manipulate employee data and to generate reports in several formats.",
    "image":"elements/custom-element-default-logo.png",
    "active":false,
    "deleted":false,
    "typeOauth":false,
    "trialAccount":false,
    "resources":[  ],
    "transformationsEnabled":true,
    "bulkDownloadEnabled":true,
    "bulkUploadEnabled":true,
    "cloneable":true,
    "extendable":true,
    "beta":false,
    "authentication":{
      "type":"basic"
    },
    "extended":false,
    "useModelsForMetadata":true,
    "hub":"humancapital",
    "protocolType":"http",
    "parameters":[  ],
    "private":false
  },
  "elementId":6315,
  "tags":[
    "Docs"
  ],
  "provisionInteractions":[

  ],
  "valid":true,
  "disabled":false,
  "maxCacheSize":0,
  "cacheTimeToLive":0,
  "configuration":{  },
  "eventsEnabled":false,
  "traceLoggingEnabled":false,
  "cachingEnabled":false,
  "externalAuthentication":"none",
  "user":{
    "id":123456,
    "emailAddress":"claude.elements@cloud-elements.com",
    "firstName":"Claude",
    "lastName":"Elements"
  }
}
```
