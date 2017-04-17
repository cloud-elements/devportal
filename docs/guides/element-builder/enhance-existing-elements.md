---
heading: Element Builder
seo: Enhance Element via Element Builder UI | Element Builder | Cloud Elements API Docs
title: Enhance Element via Element Builder UI
description: Enhance existing Elements via the the Element Builder UI.
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 4
---

## Enhancing Existing Elements

Element Builder gives you the ability to create custom integrations to cloud services using the Cloud Elements API Management Platform.  We are currently testing our BETA version.  __Currently only endpoints with a REST API can be built using Element Builder__.  Please [contact us](mailto:support@cloud-elements.com) if you are interested in participating in our round of BETA testing.

This guide will demonstrate how to add resources/entities to existing Elements.  An existing Element is defined as an integration built by Cloud Elements and is currently present in our public catalog.

The FreshBooks Element will be used for this demonstration.  In this guide, the expense resource will be added to the existing FreshBooks Element.  POST, GET, PATCH, DELETE, and GET by ID methods are available for the expense object.  All of these methods will be added.

Cloud Elements strongly recommends researching the endpoint prior to starting any work in Element Builder.  It is important to answer the following questions about an endpoint:

* Is there public API Documentation?
* Is the public API REST?
* Does the endpoint require a connected app with an API key and secret be created?
* What type of Authentication is expected (Basic, OAuth 1, OAuth 2)?

Prior to beginning work, research was done on the FreshBooks API.  The following was discovered:

* FreshBooks API Documentation: [https://www.freshbooks.com/developers/](https://www.freshbooks.com/developers/)
* API is REST
* Connected app required to connect to the endpoint
* Authentication Type: __OAuth 1.0a__

Let’s get started by cloning the current FreshBooks Element in Cloud Elements public catalog.

#### Clone Existing Element

Login to the [Cloud Elements API Manager Console](https://console.cloud-elements.com/elements/jsp/login.jsp)

Click “Elements Catalog” and select “Finance”

Under FreshBooks, click the gear and click “Clone”
![Element Builder UI Clone 1](http://cloud-elements.com/wp-content/uploads/2016/02/Clone1.png)

This action will bring up the Elements Builder Admin Dashboard.

Click the gear and select “Edit”
![Element Builder UI Clone 2](http://cloud-elements.com/wp-content/uploads/2016/02/Clone2.png)

#### Info Tab

The Element Info Screen will render.

The __Hub, Name, Description, Image URL__, and __Authentication Type__ will be auto populated based on the settings within the Cloud Elements public catalog.  You are free to change these settings, however leaving them as is will ensure the default Element functionality.

For this example, the __Name__ attribute will be changed.

Customize the Name of the Element, e.g. “FreshBooks Custom”

Click “Next”
![Element Builder UI Info 1](http://cloud-elements.com/wp-content/uploads/2016/02/InfoClone1.png)

#### Configuration Tab

The Configuration Tab contains all of the configs needed to create an instance or connection to the endpoint.  These configs are customizable, but leaving the default values intact will ensure the Element provisions as it currently does in the Cloud Elements public catalog.

No configs will be changed, click “Next”
![Element Builder UI Configuration 1](http://cloud-elements.com/wp-content/uploads/2016/02/ConfigClone11.png)

#### Instance Tab

Test the connection to the endpoint by creating an instance.

Name the Instance

Input FreshBooks site address, e.g. ‘myfreshbookssite’

In our example, this will take us through the FreshBooks OAuth 1.0a workflow.  A login screen will be presented, credentials inputted, and authorization of the app granting permission to the FreshBooks app.

Click “Create Instance”

Click “Next”
![Element Builder UI Instance 1](http://cloud-elements.com/wp-content/uploads/2016/02/InstanceClone1.png)

#### Resources Tab

Add or edit entities/resources to your Element within the Resources Tab.  Resources will need an HTTP verb like POST, GET, PATCH, PUT, or DELETE associated with it.  Since FreshBooks is a current public Element, the existing API resources are available to copy, then edit the information to speed up your workflow.  This guide will demonstrate copying a current resource, then editing it, as well as, adding a resource from scratch.

Let’s begin by copying a current resource, then editing it

As mentioned in the introduction, the __expense__ resource will be used as our example.

The FreshBooks expense API documentation can be found here: [https://www.freshbooks.com/developers/docs/expenses](https://www.freshbooks.com/developers/docs/expenses)

After thoroughly reviewing the API documentation, the following methods are available:

* POST
* GET
* PATCH
* DELETE
* GET by ID

FreshBooks responses are formatted as XML.  Cloud Elements expects responses and payloads be sent as JSON.  Elements Builder will handle the formatting of requests under the covers.

##### COPYING A CURRENT RESOURCE THEN EDITING THAT RESOURCE

The endpoint API documentation will be needed to find out the following:

* vendor path of the resource
* HTTP verb
* JSON/XML payload if applicable

In our example, let’s copy the `GET /customers` resource and use it as a base to add the `GET /expenses` resource.

Click the Copy Icon to copy the resource
![Element Builder UI Resources 1](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone1.png)

The copy of the GET /customers API call will have some fields already populated.  Let’s take a look at the populated fields, as well as, which ones will need to be edited:

Fields that can __remain the same:__

* __Resource Type:__  API
* __Vendor Path:__ `/xml-in`
  * The resource will be sent as a parameter (documented in next section)
* __Method:__ `GET`
* __Vendor Method:__ `POST`
* __Request Root Key:__ blank

Fields that __require editing:__

* __Path:__ `/hubs/finance/customers_copy`
* __Response Root Key:__ `response.clients.client`
* __Description:__ Search for customers
![Element Builder UI Resources 2](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone2.png)

In order to complete the GET /expenses resource, and input the proper values for the API call, the endpoint documentation will be needed.

In our example, FreshBooks provides API documentation for the expense.list resource here:  [https://www.freshbooks.com/developers/docs/expenses#expense.get](https://www.freshbooks.com/developers/docs/expenses#expense.get)

The __Response Root Key__ of the expense object is `response.expenses.expense`
![Element Builder UI Resources 3](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone3.png)

The __Path__ value must reflect the path to the resource, e.g. `GET /expenses`.  The correct Path is `/hubs/finance/expenses`

The __Description__ must reflect the correct resource, e.g. expenses.
The correct Description is __Search for expenses__.

__Let’s update our values__.

Input the correct values for the following:

* __Path:__ `/hubs/finance/expenses`
* __Response Root Key:__ `response.expenses.expense`
* __Description:__ Search for expenses
![Element Builder UI Resources 4](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone5.png)

The parameters will need to be edited next.  A parameter must be defined on the Cloud Elements side and the vendor side.

In our example, the only parameter that needs to be edited is the Request/Body.  Let’s take a look at this example in the Element Builder UI.

Click the pencil icon or “Edit” to view the parameter:
![Element Builder UI Resources 5](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone6.png)

The column on the left is what Cloud Elements expects.  The column on the right is what the endpoint expects, in this case, FreshBooks.  Let’s take a look at the fields:

* __Name:__ Cloud Elements uses a JSON payload to indicate the FreshBooks method, as well as, FreshBooks paging parameters – the paging parameters can be found here: [https://www.freshbooks.com/developers/pagination](https://www.freshbooks.com/developers/pagination)
* __Vendor Name:__ What the endpoint expects.  In our example, FreshBooks expects the method and paging parameters to be sent in the body of the request, hence ‘body’ is the Vendor Name – this is based on the FreshBooks expense API documentation.
* __Type:__ Value – Cloud Elements is sending the endpoint this exact value.
* __Vendor Type:__ Body – the endpoint expects the resource as a parameter in the body of the request.
* __Data Type:__ string – the data type (string, integer, etc)
* __Vendor Data Type:__ string – data type the endpoint expects
* __Parameter Source:__ Request – the request is coming from Cloud Elements to the endpoint.  The reverse is also possible, Cloud Elements receives a response from the endpoint.  In our example, we are sending a `GET` request to FreshBooks.
* __Is it Required?:__  If the endpoint expects this parameter on every API call, select “yes”.  If it is optional, select “no”.  In our example, it is required.
* __Description:__  input a description of the parameter, e.g. the request body.
![Element Builder UI Resources 6](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone7.png)

The only field that requires updating is the Name field.  It currently has
`{"request":{"@method":"client.list", "page": "{page}", "per_page": "{pageSize}"}}`

It must be updated with:

`{"request":{"@method":"expense.list", "page": "{page}", "per_page": "{pageSize}"}}`

Let’s update the Name field in the next step:

Update __Name__ with `{“request”:{“@method”:”expense.list”, “page”: “{page}”, “per_page”: “{pageSize}”}}`

Click “Done”
![Element Builder UI Resources 7](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone8.png)

Test out the newly created API call right from Elements Builder.

Click “Try it out”

This action will open the documentation panel.
![Element Builder UI Resources 8](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone9.png)

Scroll down and locate the “Try it out!” button and click
![Element Builder UI Resources 9](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone101.png)

View the response to the `GET /expenses` call

View Request, Pre-Hook (if applicable), and Vendor Request
Cloud Elements provides some debugging features within the Docs Try it out panel. View the request Cloud Elements Sends, as well as, the Vendor Request. Pre-Hooks are also available for view if applicable.

The same is true for the Vendor Response and Post-Hook which can be found below the Request, Pre-Hook, and Vendor Request.
![Element Builder UI Resources 10](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone11.png)

Cloud Elements supports the following parameter types:

Configuration: value that has been saved to the instance
Header: value to be added in the header of the API request
Path: value to be added to the URL of the API request
Body: value to be sent with as data such as a JSON payload with the API request
Query: query request
Form: needed when multiple items must be sent in parts such as an ID, followed by the body
Multipart: needed when performing a file upload
Value: an exact value to be sent with the API request
Body Field: field sent in the body of the request
Body Token: token sent in the body of the request

##### ADDING A RESOURCE FROM SCRATCH

Next we will add the `POST /expenses` API call.

Click “Add”

This will render a blank resource.
![Element Builder UI Resources 11](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone12.png)

Input values for the following fields:

* __Resource Type:__  API
* __Path:__ `/hubs/finance/expenses`
* __Vendor Path:__ `/xml-in`
* __Method:__ `POST`
* __Vendor Method:__ `POST`
* __Request Root Key:__ blank
* __Response Root Key:__  response
* __Description:__ Create an expense

Click Add Parameter
![Element Builder UI Resources 12](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone132.png)

FreshBooks expects the resource to be sent in the body of the request so we need to add two parameters to satisfy this requirement.

Input values for the following fields:

* __Name:__ expenses
* __Vendor Name:__ expenses
* __Type:__ BODY
* __Vendor Type:__ BODY_TOKEN
* __Data Type:__ expenses
* __Vendor Data Type:__ expenses
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The expense

Click “Done”

Click “Add Parameter”
![Element Builder UI Resources 13](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone142.png)

Input values for the following fields:

* __Name:__ `{“request”:{“@method”:”expense.create”, “expense”: {expenses}}}`
* __Vendor Name:__ body
* __Type:__ VALUE
* __Vendor Type:__ BODY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The request body

Click “Done”

Click “Try it out”
![Element Builder UI Resources 14](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone15.png)

Test the creation of the expense object.  We will need the necessary key value pairs from the FreshBooks API documentation:  [https://www.freshbooks.com/developers/docs/expenses#expense.create](https://www.freshbooks.com/developers/docs/expenses#expense.create)

The object is formatted in XML, Cloud Elements expects JSON.  View the JSON version of the expense object below.

Input the expense JSON payload:

```JSON
{
    "date": "2016-02-09 00:00:00",
    "amount": 100,
    "compound_tax": 0,
    "client_id": 0,
    "folder": "active",
    "category_id": 3051239,
    "project_id": 0,
    "vendor": "Acme",
    "staff_id": 1,
    "updated": "2016-02-09 12:52:49",
    "status": 0,
    "has_receipt": 0
  }
```

Click “Try it out!”
![Element Builder UI Resources 15](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone16.png)

View the response

View the Request, Pre-Hook (if applicable), Vendor Request, as well as, the Vendor Response, and Post-Hook (if applicable) for debugging purposes
![Element Builder UI Resources 16](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone17.png)

Let’s finish up the CRUD cycle by adding the remaining API calls, `PATCH`, `DELETE`, and `GET by ID`.

`PATCH /expenses/{id}`

Click “Add”

Input values for the following fields:

* __Resource Type:__  API
* __Path:__ `/hubs/finance/expenses/{expenseId}`
* __Vendor Path:__ `/xml-in`
* __Method:__ `PATCH`
* __Vendor Method:__ `POST`
* __Request Root Key:__ blank
* __Response Root Key:__  response
* __Description:__ Update an expense

Click Add Parameter

Input the following values:

* __Name:__ expenseId
* __Vendor Name:__ expense_id
* __Type:__ PATH
* __Vendor Type:__ QUERY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The expense ID

Click “Done”

Click Add Parameter

Input the following values:

* __Name:__ expenses
* __Vendor Name:__ expenses
* __Type:__ BODY
* __Vendor Type:__ BODY_TOKEN
* __Data Type:__ expenses
* __Vendor Data Type:__ expenses
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The expense

Click “Done”

Click Add Parameter

Input the following values:

* __Name:__ `{“request”:{“@method”:”expense.update”, “expense”: {expenses}}}`
* __Vendor Name:__ body
* __Type:__ VALUE
* __Vendor Type:__ BODY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The request body

Click “Done”

`DELETE /expenses/{id}`

Click “Add”

Input values for the following fields:

* __Resource Type:__  API
* __Path:__ `/hubs/finance/expenses/{expenseId}`
* __Vendor Path:__ `/xml-in`
* __Method:__ `DELETE`
* __Vendor Method:__ `POST`
* __Request Root Key:__ blank
* __Response Root Key:__  response
* __Description:__ Delete an expense

Click Add Parameter

Input the following values:

* __Name:__ expenseId
* __Vendor Name:__ expense_id
* __Type:__ PATH
* __Vendor Type:__ QUERY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The expense ID

Click “Done”

Click Add Parameter

Input the following values:

* __Name:__ `{“request”:{“@method”:”expense.delete, “expense”: {expenses}}}`
* __Vendor Name:__ body
* __Type:__ VALUE
* __Vendor Type:__ BODY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The request body

Click “Done”

`GET /expenses/{id}`

Click “Add”

Input values for the following fields:

* __Resource Type:__  API
* __Path:__ `/hubs/finance/expenses/{expenseId}`
* __Vendor Path:__ `/xml-in`
* __Method:__ `GET`
* __Vendor Method:__ `POST`
* __Request Root Key:__ blank
* __Response Root Key:__  response
* __Description:__ Retrieve an expense by ID

Click Add Parameter

Input the following values:

* __Name:__ expenseId
* __Vendor Name:__ expense_id
* __Type:__ PATH
* __Vendor Type:__ QUERY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The expense ID

Click “Done”

Click Add Parameter

Input the following values:

* __Name:__ `{“request”:{“@method”:”expense.get, “expense”: {expenses}}}`
* __Vendor Name:__ body
* __Type:__ VALUE
* __Vendor Type:__ BODY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ REQUEST
* __Is it Required?:__  YES
* __Description:__  The request body

Click “Done”

Continue to add resources by following the same steps outlined above.

Click Next in the top right corner.
![Element Builder UI Resources 17](http://cloud-elements.com/wp-content/uploads/2016/02/AddResourceClone18.png)

#### ADDENDUM:  Models Tab

The Models Tab is an additional feature with some __optional functionality__ to make resource creation more streamlined.

__NOTE:__  This functionality is only available for endpoints with JSON payloads.  SOAP endpoints or endpoints with XML payloads are not currently supported.

The Freshdesk endpoint will be referenced in this portion of the documentation.

The Models Tab allows the user to build resource models via customization, as well as, an import function.

We will take a look at the Freshdesk Company endpoint which we will map to the Account resource.

A review of the Freshdesk API documentation is needed prior to making any changes to the resource.  The docs can be found here:  [https://developer.freshdesk.com/api/#view_company](https://developer.freshdesk.com/api/#view_company)

##### MODEL CUSTOMIZATION

Click on the Models Tab.  If you have any unsaved progress, an alert will appear asking if you want to save your changes.

The current list of API resources will render.

Select a model to edit.  In our example, we will be viewing the GET /accounts resource.
![Element Builder Models 1](http://cloud-elements.com/wp-content/uploads/2015/04/EBModelsCustomize1.png)

Looking at the “updated_at” field, we can see the value is a date.
![Element Builder Models 2](http://cloud-elements.com/wp-content/uploads/2015/04/EBModelsCustomize2.png)

In our model, the data type is set to string.
![Element Builder Models 3](http://cloud-elements.com/wp-content/uploads/2015/04/EBModelsCustomize3.png)

This can be modified within the code editor.

Change “type” to “date”

Click “Save Model” to update the resource
![Element Builder Models 4](http://cloud-elements.com/wp-content/uploads/2015/04/EBModelsCustomize4.png)

##### IMPORT MODELS

To import a model, head to the endpoint API documentation.  Navigate to the desired resource and locate the example response.

Copy the response payload.
![Element Builder Models 5](http://cloud-elements.com/wp-content/uploads/2015/04/EBModelsImport1.png)

Select the resource in the list: GET /accounts

Click “Generate from Payload”
![Element Builder Models 6](http://cloud-elements.com/wp-content/uploads/2015/04/EBModelsImport2.png)

Paste in the model

Click “Generate Model”

The model is now built. If you wish to make any changes, they can be made right in the code editor panel. Just remember to save your changes.
![Element Builder Models 7](http://cloud-elements.com/wp-content/uploads/2015/04/EBModelsImport3.png)

#### Events Tab

Events:  Cloud Elements currently supports building integrations with polling or webhooks capability.  Polling is a mechanism where Cloud Elements executes the configured query __every n minutes__ and captures the changed information.

Webhooks are when the provider lets Cloud Elements know what information has changed.

* __NOTE: 90% of the time polling will be used as the mechanism for capturing events.__  Cloud Elements recommends not using webhook type events if the endpoint does not have an API for creating webhooks.

* __Polling:__  In order to enable polling, the endpoint must support querying an object by last updated date.

* __Webhooks:__ In order to enable webhooks, the endpoint must support them.  Note additional endpoint setup may be required prior to creating your Element.  An event hook script must be defined that transforms the inbound event data to a format that Cloud Elements supports.

While FreshBooks supports webhooks, they do not have an API to create them.  Polling will be used as our event mechanism in this case.

Let’s take a look at the FreshBooks API documentation: [https://www.freshbooks.com/developers/docs/expenses#expense.list](https://www.freshbooks.com/developers/docs/expenses#expense.list)

FreshBooks has a query API – expense.list which supports the date_from field:
![Element Builder UI Events 1](http://cloud-elements.com/wp-content/uploads/2016/02/EventsBlank1.png)

This information will be used to create our polling events.

First let’s take a look at the expense object:

```JSON
{
    "date": "2016-02-11 00:00:00",
    "amount": 200,
    "compound_tax": 0,
    "client_id": 0,
    "folder": "active",
    "category_id": 123456,
    "project_id": 0,
    "vendor": "Acme",
    "staff_id": 1,
    "expense_id": "00001234567",
   ///////////////////////////////////
   /"updated": "2016-02-11 12:40:51",/
   ///////////////////////////////////
    "status": 0,
    "has_receipt": 0
  }
```

FreshBooks supports an updated field.  However, they do not support a `created_at` field.  Since the `created_at` field is not supported, polling will occur on objects updated on or after a certain day and time.

Using the following information:

* `expense.list` query parameter `date_from`
* updated field within the expense object

The polling event query can be constructed.

Select “Yes” for “Enable Events and setup events configuration”

Select “Polling”

Set Event Poller Refresh Interval to desired time in minutes

Under the “expenses” resource click “Edit”
![Element Builder UI Events 2](http://cloud-elements.com/wp-content/uploads/2016/02/EventsBlank2.png)

In the Where field with operator” field, input `date_from` with operator `=`, or `date_from=`

Select a date format that the endpoint expects
This information is available under the endpoint API documentation.

Input `expense_id` in the ID Field – `expense_id` is how FreshBooks references the object ID – must input what the endpoint expects

Under the advanced section, input `updated` in the Update Date Field

Select the same Date format as above to match what the endpoint expects

Click “Done”
![Element Builder UI Events 3](http://cloud-elements.com/wp-content/uploads/2016/02/EventsBlank3.png)

Events can be added to specific resources by repeating the steps outlined above.  When all desired events have been created, click “Next”.
![Element Builder UI Events 4](http://cloud-elements.com/wp-content/uploads/2016/02/EventsBlank4.png)

#### Bulk Tab

Cloud Elements supports bulk download of objects in JSON format if the endpoint supports filter by date.

The following fields are required to enable bulk download:

* __Bulk Query Time Format:__ Select a time format from the dropdown list. The time format must match the endpoint’s supported time format for queries.
* __Bulk Query Field Name:__ Provide an object and an operator in the Bulk Query Field Name, e.g. where orders >= “{time_format}”. This field may be left blank if you wish to include bulk download on all objects.
* __Bulk Query Operator:__ The Bulk Query Operator can be set to “=” or “>=”.

Let’s take a look at the FreshBooks API documentation: [https://www.freshbooks.com/developers/docs/expenses#expense.list](https://www.freshbooks.com/developers/docs/expenses#expense.list)

FreshBooks has a query API – `expense.list` which supports the `date_from` field:
![Element Builder UI Bulk 1](http://cloud-elements.com/wp-content/uploads/2016/02/EventsBlank1.png)

This information will be used to create our bulk query.

First let’s take a look at the expense object:

```JSON
{
    "date": "2016-02-11 00:00:00",
    "amount": 200,
    "compound_tax": 0,
    "client_id": 0,
    "folder": "active",
    "category_id": 123456,
    "project_id": 0,
    "vendor": "Acme",
    "staff_id": 1,
    "expense_id": "00001234567",
   ///////////////////////////////////
   /"updated": "2016-02-11 12:40:51",/
   ///////////////////////////////////
    "status": 0,
    "has_receipt": 0
  }
```

FreshBooks supports an updated field.  However, they do not support a `created_at` field.  Since the `created_at` field is not supported, bulk querying will occur on objects updated on or after a certain day and time.

Using the following information:

* `expense.list` query parameter `date_from`
* updated field within the expense object

The bulk query can be constructed.

The Bulk Query Field Name will be blank so all objects can be queried

Select the Bulk Query Date Format, the format the endpoint expects.  This can be found in the endpoint API documentation.

Input a Bulk Query Operator.  The Bulk Query Operator can be set to `=` or `>=`
In our example, it will be set to `=` since we are querying `date_from`.

Click “Next”
![Element Builder UI Bulk 2](http://cloud-elements.com/wp-content/uploads/2016/02/BulkClone1.png)

#### Documentation Tab

View the newly created API documentation for your Element.  Try out the API calls right from Element Builder.

View the new Element documentation by selecting an instance from the dropdown: “Change Instances”.
![Element Builder UI Documentation 1](http://cloud-elements.com/wp-content/uploads/2016/02/DocsClone1.png)

Element Builder will present the option to create an instance of one has note been created.

Try It Out:  Click on a resource, e.g. GET /customers

Click “Try it out!”
![Element Builder UI Documentation 2](http://cloud-elements.com/wp-content/uploads/2016/02/DocsClone2.png)

View the response.
![Element Builder UI Documentation 3](http://cloud-elements.com/wp-content/uploads/2016/02/DocsClone3.png)

Continue to view resources as desired, then click “Done”.
![Element Builder UI Documentation 4](http://cloud-elements.com/wp-content/uploads/2016/02/DocsClone4.png)

#### Admin Dashboard

Within the in Admin Dashboard, the following functions are available to exercise on all Elements created using Element Builder:

* __Edit an Element:__ change a URL, add a resource, edit configurations
* __Deactivate:__ deactivates an Element, temporarily removing it from the catalog
* __Delete:__ deletes an Element, permanently removing it from the catalog
* __Export:__ exports Element JSON, this JSON can be imported at a later time

To access the Element admin functions, click on the gear.

To import Element JSON, click “Import Element” and follow the prompts.  All functionality will be available based on the last state of the Element prior to export.
![Element Builder Admin Dashboard 1](http://cloud-elements.com/wp-content/uploads/2016/02/AdminClone1.png)

#### Support

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
