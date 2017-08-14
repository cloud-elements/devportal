---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Resources
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 40
---

# Custom Resources

{% include workflow.html displayNames="Info,Authentication,Configuration,Parameters,Hooks,Events,Bulk,Resources" links="define-info.html,auth.html,config.html,config.html#set-up-parameters,hooks.html,events.html,bulk.html,resources.html" active="Resources"%}

[Extend an element by adding resources](#extend-element) to existing elements or [define resources for a custom element](#add-resources) all within a familiar API documentation format. As you create new resources, keep the API documentation of the API provider close. You will refer to it often.

If you are creating an element, certain resources automatically appear based on the hub. For example, if you create an element in the CRM hub, Cloud Elements creates endpoints resources like accounts, contacts, leads, and opportunities. The resources created differ from hub to hub, but we will always create the following resources:

* /ping
* /objects
* /objectName

{% include note.html content="Throughout this section, we provide several examples. To keep them consistent, we are using the use case of adding a <code>/deals</code> resource to a CRM element.  " %}

## Extend Element

You can add resources to an existing element from the element card. To add a resource, point to an element card, and then click **My Resources**. After you arrive on the editable Resources page, follow the instructions in [Add Resources](#add-resources).


## Add Resources

Adding a resource is a multi-step process. You do not need to complete each step. For example, adding hooks is a step to complete only for advanced or complex use cases or events are configured differently on only one or two resources, not all.

Begin by adding a resource and providing basic information about the resource as a whole. For each endpoint, provide a description and add any endpoint-level configuration. If needed, add parameters to pass along with each request to each endpoint. Add or remove endpoints if needed. And lastly, write hooks needed to perform complex tasks.

### Provide Basic Resource Info

{% include workflow.html displayNames="Info,Description & Configuration,Parameters,Endpoints,Hooks" links="#provide-basic-resource-info,#add-description-and-configure,#add-parameters,#add-hooks#add-endpoints" active="Info"%}

1. Click **Add a new resource**.
2. Identify if the resource is a child resource, such as `/users/{id}/tasks` or `/contacts/{id}/tasks`.
3. In **Cloud Elements Resource Name** add the name of the resource as you want to see it in Cloud Elements. For example, enter `deals` to add a `/deals` resource to a CRM element. The name you choose is what appears in the API documentation and also creates an endpoint in the hub. For example, the new `GET /deals` endpoint appears as **GET /deals** in the docs and is accessible via the `hubs/crm/deals` endpoint.
![deals in the docs](img/deals-swagger.png)

{% include note.html content="To remain consistent with Cloud Elements naming conventions, we recommend that you name the resources in the plural form. For example, `/deals` not `/deal`.  " %}

4. In **Vendor Resource Name** add the path to the resource at the API provider. The value that you enter is appended directly to the Base URL. If your Base URL ends with a slash `/` then do not enter a slash before the resource name. If your Base URL does not ned in a slash `/`, then add one before the resource name.
5. In **Primary Key** enter the property that uniquely identifies the resource. Primary keys are typically ID fields associated with the resource. In this example, a primary key could be `dealID`.
6. In **Created Date Key** and **Updated Date Key** enter the properties that identify the created and updated dates. Created and updated date keys vary widely, but can be `created`, `createdate`, or `timecreated` and  `updated`, `lastModified`, or `dateModified`.
7. Select the methods to add. You will define the methods that you select when you [set up the endpoints](#add-description-and-configure). Make sure that the methods that you select are supported by the API provider.

    For a new deals resource with all methods, our basic resource information looks like this:
    ![Basic Resource Information](img/resource-basic-info.png)

8. Click **Go**.

### Add Description and Configure

{% include workflow.html displayNames="Info,Description & Configuration,Parameters,Endpoints,Hooks" links="#provide-basic-resource-info,#add-description-and-configure,#add-parameters,#add-hooks#add-endpoints" active="Description & Configuration"%}

After you provide the basic information to create a resource, Cloud Elements shows the resource in an editable API documentation format. Use the Endpoints tab to configure each of the endpoints created from the combination of the resource and the methods that you selected in the previous step. If you did not select the correct methods in the previous step, you can add or remove endpoints on the Endpoints tab.

If you have any authenticated element instances for the element, they appear on the left. Select an element instance to test the endpoints as you build them.

To set up endpoints:

1. Expand an endpoint, and then click **Go** or <img src="img/resource-pencil.png" alt="Edit" class="inlineImage">.

    {% include note.html content="After you edit an endpoint for the first time, the <b>Go</b> button is replace by a toolbar. " %}

2. Enter a description. This appears in the API documentation and should help a user understand what the request is for and what to expect in the response. A description of the `GET /deals` endpoint could be: "Retrieves a list of deals. Use CEQL to filter by related fields like company and contact."

    {% include tip.html content="The descriptions that you enter for each endpoint should help a user understand what the endpoint does. Keep the descriptions short, no more than three sentences. Start with a verb associated with a method like gets, retrieves, checks, creates, returns, updates, or deletes. Then describe what resource is being manipulated and add any other helpful information about required fields, filtering, or formatting. " %}

3. After you complete your description, click or tab out of the description.
5. Add a **Root Key** to identify the top level field of the resource and limit what you send or receive. For example, enter `data` if `GET /contacts` returns an array of objects with a root key of `data`.
6. In **Pagination Type** select to override the default pagination settings of the element. If you select nothing, the default is **Supported**.
7. In **Next Resource** select another endpoint if your use case requires requests to multiple endpoints one after another.
8. Continue to [Add Parameters](#add-parameters).

### Add Parameters

{% include workflow.html displayNames="Info,Description & Configuration,Parameters,Endpoints,Hooks" links="#provide-basic-resource-info,#add-description-and-configure,#add-parameters,#add-hooks#add-endpoints" active="Parameters"%}

Endpoint parameters allow you to pass various properties to the endpoint. Use the endpoint parameters to configure searches, pagination, ids, and required fields. You can configure most required and optional parameters for most endpoints. Cloud Elements provides some default common parameters for each method, except DELETE.

#### Default Parameters for each Method

| GET | GET {id} | POST, PATCH & PUT| DELETE |
| :------------- | :------------- | :------------- | :------------- |
|  **where**: CEQL search expression.  |  **id**: The id of a specific object. | **body**: The object payload to create or update.  | No default, but the id of the deleted object is a common parameter. |
|  **page**: The next token or link to get additional results.   |  |   |  |
|  **pageSize**: The number of records to return.  |   |  |   |

See [Configure Default Parameters](#configure-default-parameters) for specific information about each default parameter. You do not need to keep the default parameters. Click <img src="img/resource-trash.png" alt="Delete" class="inlineImage">.

To add parameters:

Map parameters that you send as part of the request from Cloud Elements on the left side of the page to parameters available to the resource at the API provider on the right side. The right and left side division is presented as **Cloud Elements Receives As** and **Vendor Receives as** in the example below.
![Add parameters UI](img/resource-parameter.png)

To define a parameter :

1. Select an endpoint, and then click **Go** or <img src="img/resource-pencil.png" alt="Edit" class="inlineImage">.
2. If you need to add a parameter, click **Add New Parameter**.
3. In **Parameter Name**, enter the name of the parameter. The name appears in the API documentation in some cases or can be a value passed to the API provider.
4. In **Parameter Description** enter a brief description of the parameter. If the parameter appears in the API documentation, this description also appears.
5. In **Vendor Name** enter the name of the parameter to map to. For example, if you are adding an `id` parameter, **Vendor Name** should be the unique id field for the resource like `dealId`.
6. In **Parameter Type** and **Vendor Type** select how Cloud Elements and the API provider pass the parameter. See [Parameter Types](#parameter-types)for more information about the available type.
8. In **Parameter Datatype** and **Vendor Datatype** select the data type of the parameter.
  * integer - 32 bit binary signed integer
  * long - 32 bit binary signed integer
  * float - a kind of number
  * double -  a kind of number
  * string - any text enclosed within quotes
  * byte - 	base64 encoded characters
  * binary - any sequence of octets
  * boolean - true/false
  * date - As defined by full-date - RFC3339
  * dateTime - 	As defined by date-time - RFC3339
  * password - A hint to UIs to obscure input.
8. If the **Parameter Type** is `body`, enter the name of an existing model in **Model Name**.
9. If you want to switch the standard workflow where the parameters on the left are part of the request, click **Parameter Source**, and then select **Request**. ID, GET,
10. To make the parameter a required part of the request, switch **Required** on.
11. Take your next steps:
* If you need to add any more endpoints, continue to [Add Endpoints](#add-endpoints).
* If the resource requires more logic to interact with it, continue to [Add Hooks](#add-hooks).
* If you need to perform endpoint level configuration of events or bulk, continue to Events or Bulk.

#### Parameter Types

| Parameter | Description   |
| :------------- | :------------- |
|  configuration  |  passed as a header parameter. Example, X-MyHeader: Value  |
|  header  |  passed as a path parameter. Example, separate resource for object by id  |
|  path  |  Passed as a request body parameter. Example, body. Is this part of the body or everything in the body? can you apss more than one bodies?  |
|  body  |  Passed as a query string parameter. If you select this, Model appears. Example /deals?properties=dealName.  |
|  query  |    |
|  form  |  passed as form-data |
|  multipart  |  passed as multipart content   |
|  value  |  the value is the value of the Parameter Name  |
|  bodyField  |  Body  |
|  prevBody  |  Body  |
|  prevBodyField  | CE Only Body  |
|  value  |  Body  |
| bodyToken |Vendor Only |
| no-op | Vendor Only |

#### Configure Default Parameters

In the example use case of building a `/deals` resource, each method provided a default parameter. The following table describes how each was set up.

| Method | Parameter   | Description |
| :------------- | :------------- | :------------- |
|  GET  |  where   |  The **where** parameter implements a CEQL search expression parameter in the endpoint. </br> To configure, check the API documentation to confirm that the endpoint supports searches. If it does, next identify the parameter used to search and enter it as the **Vendor Name**. </br>Now, identify how the query is passed (in the header, as a query paramter, etc.) and in what format. Select the **Vendor Type** and **Vendor Datatype** to match. |
|  GET  |  page   |  The **page** parameter identifies the link or token to identify a set of paginated records. </br> To configure, check the API documentation for pagination information. If it supports pagination, next identify the parameter used to identify page numbers as the **Vendor Name**. </br>Now, identify how the parameter is passed (in the header, as a query paramter, etc.) and in what format. Select the **Vendor Type** and **Vendor Datatype** to match. |
|  GET  |  pageSize  |  The **pageSize** parameter identifies the number of records to return. </br> To configure, check the API documentation for pagination information. If it supports pagination, next identify the parameter used to limit results as the **Vendor Name**. </br>Now, identify how the parameter is passed (in the header, as a query parameter, etc.) and in what format. Select the **Vendor Type** and **Vendor Datatype** to match. |
| POST | To add or create data using the body of a request, use a body parameter to define it. In **Model Name**, select the name of a model to provide an an example of the JSON body required to add or create data.|
| GET object/{id} | A common GET endpoint is specific data by `id`. To set up a `GET /object/{id}` endpoint, map the **Parameter Name** to the parameter at the API Provider (**Vendor Name**) that uniquely identifies the data. This is usually an `id` parameter or something more specific like `objectId` or, in our examples, `dealID`. The Parameter Name does not need to be id, but it must match the value in the curly brackets in the endpoint. |

### Add Hooks

{% include workflow.html displayNames="Info,Description & Configuration,Parameters,Endpoints,Hooks" links="#provide-basic-resource-info,#add-description-and-configure,#add-parameters,#add-hooks#add-endpoints" active="Hooks"%}

You can create  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.gloss_entry}}">resource hooks</a> to manipulate any part of a request or response or to operate on a configuration. Resource hooks work differently than <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.gloss_entry}}">global hooks</a> because they happen only on requests and responses related to a specific endpoint. [Custom Hooks](hooks.html) provides detailed information about using hooks and includes examples.

To create a resource hook:

1. In the endpoint edit view, click **Add a pre-request hook** or **Add a post-response hook** depending on what you need to manipulate.
2. Write the script needed for your use case. See [Custom Hooks](hooks.html) for more information about the functions and libraries available to you.
3. Save the endpoint.

### Add Endpoints

{% include workflow.html displayNames="Info,Description & Configuration,Parameters,Endpoints,Hooks" links="#provide-basic-resource-info,#add-description-and-configure,#add-parameters,#add-hooks#add-endpoints" active="Endpoints"%}

You can add a new endpoint for a resource.

To add an endpoint:

1. Under the last endpoint associated with the resource, click **Add a new endpoint**.
2. Select the Method for the new endpoint. The left side represents the Cloud Elements side of the endpoint.
3. On the right side, select the vendor method associate with the endpoint, and then enter the URL of that endpoint.
4. Click **Go**, and then follow the steps to [add a description and configuration information](#add-description-and-configuration), [add parameters](#add-parameters), and [add hooks](#add-hooks).

## Add Models

To add a model:

1. Click **Models**.
2. Find the resource, expand it, and then click <img src="img/resource-pencil.png" alt="pencil" class="inlineImage">.
3.
3.



## Endpoint Descriptions

The descriptions that you enter for each endpoint should help a user understand what the endpoint does. In general, we recommend a short description of no more than three sentences. Starting with a verb &mdash; like gets, retrieves, checks, creates, returns, updates, or deletes &mdash; and then describe what resource is being manipulated.

| Method | Suggested Description   |
| :------------- | :------------- |
|  GET  |  Gets a list of RESOURCE_NAMEs.</br>Retrieves a list of RESOURCE_NAMEs. Use the CEQL expression to filter the list of RESOURCE_NAMEs  |
| POST | Create a RESOURCE_NAMEs.

### Element Builder Workflow

If you are coming from Element Builder, you're at the last step of the workflow:

## Step 1: define the resource

To add a resources:

1. Switch to Edit Mode.
2. Click Add Resources.
3. If the resource is a child resource to another resource, switch **Is this a child resource?** on.
3. Create your resource name and map it: <do we need to add that you do or don't need the slash?>
  * In **Cloud Elements Resource Name** enter the name of the resource as you want it to appear in the API docs and in requests.
  * In **Vendor Resource Name** enter the name of the resource at the API provider.
3. Enter the following fields needed to ???
  * Primary Key
  * Created Date Key
  * Updated Date Key
4. Select the methods to use to interact with the resource.
5. Click **Go**.
![Add Resource Step 1](img/add-resource1.png)

You move to the endpoint step

## Configure the endpoint

Endpoints are configured with some defaults:

* GET
  * where
  * page
  * pageSize
  *

To configure the endpoint:

1. On the endpoints tab, select the endpoint to configure, and then click **Go**.
2. Each parameter include as Cloud Elements side and a vendor side


## Delete

If you no longer need an endpoint, click <img src="img/resource-trash.png" alt="Delete" class="inlineImage">, and then confirm the deletion. To completely remove a resource, delete all of the endpoints associated with it.

## Copy
