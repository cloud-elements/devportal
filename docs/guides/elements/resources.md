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
simple_map: false
map_name: usermap
box_number: 5
---

# Custom Resources

Add resources to existing elements or define resources for a custom element all within a familiar API documentation format.

## Add

Add resources as part of the element builder flow or as part of extending an element.

Throughout this section, we provide several examples. To keep them consistent, we are using the use case of adding a `/deals` resource to a CRM element.

To add a resource:

### Provide Basic Resource Info

1. Click **Add a new resource**.
2. Identify if the resource is a child resource, such as `/users/{id}/tasks` or `/contacts/{id}/tasks`.
3. In **Cloud Elements Resource Name** add the name of the resource as you want to see it in Cloud Elements. For example, enter `deals` to add a `/deals` resource to a CRM element. The name you choose is what appears in the API documentation, such as **GET /deals **and in the hub endpoint, such as `hubs/crm/deals`.
4. In **Vendor Resource Name** add the name of the resource at the API provider. No slash `/` is required before the resource name. In this example, enter `deals`.
5. In **Primary Key** enter the property that uniquely identifies the rsource. Primary keys are typically ID fields associated with the resource. In this example, a primary key could be `dealID`.
6. In **Created Date Key** and **Updated Date Key** enter the properties that identify the created and updated dates. Created and updated date keys vary widely, but can be `created`, `createdate`, or `timecreated` and  `updated`, `lastModified`, or `dateModified`.
7. Select the methods to add. You will define the methods that you select in the next step. Make sure that the methods that you select are supported by the API provider.
8. Click **Go**.

### Set Up Endpoints

After you provide the basic information to create a resource, Cloud Elements shows the resource in an editable API documentation format. Use the Endpoints tab to configure each of the endpoints created from the combination of the resource and the methods that you selected in the previous step. If you did not select the correct methods in the previous step, you can add or remove endpoints on the Endpoints tab.

If you have any authenticated element instances for the element, they appear on the left. Select an element instance to test the endpoints as you build them.

To set up endpoints:

1. Select an endpoint, and then click **Go**.
2. Enter a description. This appears in the API documentation and should help a user understand what the request is for and what to expect in the response. A description of the `GET /deals` endpoint could be: "Retrieves a list of deals. Use CEQL to filter by related fields like company and contact."
    {% include tip.html content="The descriptions that you enter for each endpoint should help a user understand what the endpoint does. Keep the descriptions short, no more than three sentences. Start with a verb associated with a method, like gets, retrieves, checks, creates, returns, updates, or deletes. Then describe what resource is being manipulated and add any other helpful information about required fields, filtering, or formatting. " %}
3. After you complete your description, click or tab out of the description.
4. Depending on the method, different default parameters appear.
5. Before you test add a Root Key


### Adding Parameters to Endpoints

Endpoint parameters allow you to pass various parameters to the endpoint. Use the endpoint parameters to configure searches, pagination, and required fields. You can configure most required and optional parameters for most endpoints. Some common parameters for each methods are offered as defaults for you to configure.

| GET | GET {id} | POST  | PATCH | DELETE |  |
| :------------- | :------------- |
|  **where**: CEQL where queries.  |  **id**: The id of a specific object | Object payload to create.  | Object payload to update.  | The id of the deleted object. | 
|  **page**: The next token or link to get additional results.   |   |   | The id of the updated object.  | The id of the deleted object. |
|  **pageSize**: The number of records to return.   |   |   |   |  |


To add a parameter:




## Endpoint Descriptions

The descriptions that you enter for each endpoint should help a user understand what the endpoint does. In general, we recommend a short description of no more than three sentences. Starting with a verb &mdash; like gets, retrieves, checks, creates, returns, updates, or deletes &mdash; and then describe what resource is being manipulated.

| Method | Suggested Description   |
| :------------- | :------------- |
|  GET  |  Gets a list of RESOURCE_NAMEs.</br>Retrieves a list of RESOURCE_NAMEs. Use the CEQL expression to filter the list of RESOURCE_NAMEs  |
| POST | Create a RESOURCE_NAMEs.

### Element Builder Workflow

If you are coming from Element Builder, you're at the last step of the workflow:

{% include maps/usermap.html%}

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

## Extend
