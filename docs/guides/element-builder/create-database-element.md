---
heading: Element Builder
seo: Create Database Element via Element Builder UI | Element Builder | Cloud Elements API Docs
title: Create Database Element
description: Create Database Element via the the Element Builder UI.
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 5
---

## Create a Database Element BETA

Element Builder gives you the ability to create custom integrations to cloud services using the Cloud Elements API Management Platform.  We are currently testing our BETA version.  __Currently only endpoints with a REST API, PostgreSql, MySql and SqlServer database elements can be built using Element Builder__.  Please [contact us](mailto:support@cloud-elements.com) if you are interested in participating in our round of BETA testing.

This guide will demonstrate how to build a __Database Element only__.
Please view the [Element Builder Documentation](index.html) for more information on how to build Elements for endpoints with a REST API.

__For this guide, a sample database was created called `mydb`.  This database contains two tables: `customers` and `addresses`.  This guide will demonstrate creating `CRUD` (Create, Read, Update, and Delete) customer API calls, as well as, creating a `C` addresses API call and complex query API call.__

- [Element Builder Tabs](#element-builder-tabs])
    - [Info Tab](#info-tab)
    - [Configuration Tab](#configuration-tab)
    - [Instance Tab](#instance-tab)
    - [Resources Tab](#resources-tab)
    - [Models Tab](#models-tab)
    - [Events Tab](#events-tab)
    - [Bulk Tab](#bulk-tab)
    - [Documentation Tab](#documentation-tab)
- [Admin Dashboard](#admin-dashboard)
    - [Import our Sample Element](#import-out-sample-element)
- [Support](#support)

PostGreSQL will be used for this demonstration.

In order to create a PostgreSQL Database Element, the following steps are required:

1. Create a Database
2. Obtain the following for creating a connection to that Database:

* Database Host: e.g. `123.123.1.123:5432`
* Database Name
* Database Username
* Database Password

The PostgreSQL Element leverages the tables contained within your PostgreSQL database and transforms them into a collection of resources. RESTful methods (POST, GET, PATCH, DELETE) are used to interact with these resources (accounts, contacts, files). The columns in the table become the modeling attributes used to send payloads with each API call.
For example a database with the following columns of data:

| name    | phone        | address  |
|---------|--------------|----------|
| Jon Doe | 333-333-3333 | 123 Main |

transforms to this JSON body:

```JSON
{
  "name": "Jon Doe",
  "phone": 333-333-3333,
  "address": "123 Main"
}
```

If the table __contains__ a __primary key__, the Retrieve, Update, and Delete by ID APIs can be generated.
If a table __does not__ have a primary key or __contains multiple__ primary keys, the Retrieve, Update, and Delete by ID APIs cannot be generated.

#### New Database Element

##### Element Builder Tabs

Log in to the [Cloud Elements API Manager](https://console.cloud-elements.com/elements/jsp/login.jsp)

Click “Elements Builder”
![Element Builder Info 1](http://cloud-elements.com/wp-content/uploads/2015/04/Info1.png)

Click “Build Element”
![Element Builder Info 2](http://cloud-elements.com/wp-content/uploads/2015/04/Info2.png)

#### Info Tab

Select a Hub e.g. DB
Hubs map resources from a collection of endpoints (What we call Elements) into a uniform set of APIs.
Add a new hub from the dropdown menu to create a new collection if our defaults do not meet your needs.

Name of the new Element, e.g. MyPostGreSQL Element

Add a description for the new Element.
e.g. Add a MyPostGreSQL Instance to connect your existing MyPostGreSQL Database to the Database Hub, allowing you to manage your objects across multiple Database Elements. You will need your PostgreSQL account information to add an instance.

Add a URL to an image or logo to represent the new Element.

Select the type of authentication the endpoint expects. The four types supported by Cloud Elements are Basic, OAuth 1, OAuth 2, and Custom.
When building Database Elements, select the `Custom` auth type.
__Custom__ authentication is completely user defined, such as a username and password exchanged for an API key with some type of expiration involved.

Select `JDBC` protocol

Click “Next”
![Database Info 1](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseInfo1.png)

#### Configuration Tab

By selecting `JDBC` protocol, this will load the default values needed to configure the Element.
Select the appropriate JDBC URL.  In our example: `jdbc:postgresql://{db.host}/{db.name}`

Select the page size, e.g. 100 objects per page.

Select the paging type.
Page is the default, but Offset is available to view portions of data, as well as, Cursor to move through large data sets.

Select the Accept Header and the Content Type Header
Cloud Elements supports two types: JSON and XML.
Please select the type the endpoint expects. In our example, Cloud Elements expects JSON payloads.

Under the Add Configuration panel > `Key: jdbc.driver.classname` > click `Edit`

![Database Configuration 1](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseConfiguration1.png)

In the 'Default Value' Field, input: `org.postgresql.Driver`

Click Done

Click “Next”

![Database Configuration 1](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseConfiguration2.png)

Configurations, Parameters, and Hooks will not be covered in this guide as the defaults have been set.

However, here are some definitions:

* __Configuration__: A value which is stored when a connection to the endpoint is created. This value is populated via user input and will be used when invoking the API, e.g. an api_key and api_secret.
* __Parameter__: A globally defined value that will apply to all API calls. Parameters can be sent as a header, path, query, body.
* __Hooks__: Pre-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).
Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint.

#### Instance Tab

Test the connection to the endpoint by creating an instance.

Input a name for the instance, e.g. MyPostGreSQL Element Instance 1

* Database Host: e.g. `localhost:5432`
* Database Username
* Database Password
* Database Name

Click “Create Instance”

![Database Instance 1](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseElement1.png)

#### Resources Tab

Add entities/resources to your Element within the Resources Tab.  Resources will need an HTTP verb like POST, GET, PATCH, PUT, or DELETE associated with it.  If the Element being created can be identified with one of Cloud Elements current hubs, pre-built resources can be used to get started in mapping out resources.

##### ADDING RESOURCE: GET /customers

For this example, the GET /customers resource will be added to our PostgreSQL Element.

Click “+ Add” > API

Input the Path: `/customers`

Input the Vendor Path: `select * from customer offset :offset limit :limit` – this can be any valid named SQL query

Input the Method: `GET`

Input the Description – what your users will see when they view the API documentation, e.g. "Retrieve a list of customers"

Click “Add Parameter” > Page
![Database Resources 1](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources1.png)

Input the Parameter Fields:

* __Name:__ page
* __Vendor Name:__ offset
* __Type:__ Query
* __Vendor Type:__ Query
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ Request
* __Is it Required:__ NO
* __Description:__ The text of your status update

Click “Done”
![Database Resources 2](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources2.png)

Click “Add Parameter” > pageSize

Input the Parameter Fields:

* __Name:__ page
* __Vendor Name:__ offset
* __Type:__ Query
* __Vendor Type:__ Query
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ Request
* __Is it Required:__ NO
* __Description:__ The number of resources to return in a given page

Click “Done”
![Database Resources 3](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources3.png)

Click “Try it out!”
![Database Resources 4](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources4.png)

This will open up the API Documentation sliding Panel.

__NOTE:  The default pageSize will be 50 if not populated with a number of your choice.__
Click the Try it out button to test the call.

View the response on the left hand side panel.

View the vendor request and response on the right hand side panel.  This is very useful when debugging and API call.  This guide will not go into debugging, however you can view tips [debugging tips](element-builder-api-debugging.html) in the general Element Builder documentation.
Click the 'X' in the corner to close the sliding panel.
![Database Resources 5](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources5.png)

##### ADDING RESOURCE: POST /customers

Click “+ Add” > API

Input the Path: `/customers`

Input the Vendor Path: `insert into customer
(
  first_name, last_name, email, mobile_phone
)
values
  (
      :first_name,
      :last_name,
      :email,
      :mobile_phone
  )
returning first_name, last_name, email, mobile_phone, customer_id, created_dt` – this can be any valid named SQL query

Input the Method: `POST`

Input the Description – what your users will see when they view the API documentation, e.g. "Create a customer"

Click “Add Parameter” > Blank

Input the Parameter Fields:

* __Name:__ body
* __Vendor Name:__ body
* __Type:__ BODY
* __Vendor Type:__ QUERY
* __Data Type:__ customers
* __Vendor Data Type:__ customers
* __Parameter Source:__ Request
* __Is it Required:__ No
* __Description:__ The customer body

Click “Done”

Click “Try it out!”
![Database Resources 6](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources6.png)

This will open up the API Documentation sliding Panel.

Input the following customer JSON body:

```JSON
{
  "last_name": "Snow",
  "first_name": "Jon",
  "email": "jonsnow@got.com"
}
```

Click the Try it out button to test the call.

View the response on the left hand side panel.

```JSON
{
  "created_dt": 1464096203573,
  "last_name": "Snow",
  "customer_id": 102,
  "first_name": "Jon",
  "email": "jonsnow@got.com"
}
```

View the vendor request and response on the right hand side panel.  This is very useful when debugging and API call.
__NOTE:  Since we did not populate all customer values, i.e. `mobile_phone`, the value will be captured as `null`__
Click the 'X' in the corner to close the sliding panel.
![Database Resources 7](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources7.png)

##### ADDING RESOURCE: GET /customers/{id}

Click “+ Add” > API

Input the Path: `/customers/{id}`

Input the Vendor Path: `select * from customer where customer_id = :id` – this can be any valid named SQL query

Input the Method: `GET`

Input the Description – what your users will see when they view the API documentation, e.g. 'Get a customer by ID'

Click “Add Parameter” > Id

Input the Parameter Fields:

* __Name:__ id
* __Vendor Name:__ id
* __Type:__ PATH
* __Vendor Type:__ QUERY
* __Data Type:__ number
* __Vendor Data Type:__ number
* __Parameter Source:__ Request
* __Is it Required:__ Yes
* __Description:__ The ID of the customer

Click “Done”

Click “Try it out!”
![Database Resources 8](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources8.png)

This will open up the API Documentation sliding Panel.

Input the ID of the customer.  In our example: `102`

Click the Try it out button to test the call.

View the response on the left hand side panel.

View the vendor request and response on the right hand side panel.  This is very useful when debugging and API call.
Click the 'X' in the corner to close the sliding panel.
![Database Resources 9](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources9.png)

##### ADDING RESOURCE: PUT /customers/{id}

Click “+ Add” > API

Input the Path: `/customers/{id}`

Input the Vendor Path: `update customer set first_name = :first_name, last_name = :last_name, email= :email,
  mobile_phone =:mobile_phone where customer_id = :customer_id
returning first_name, last_name, email, mobile_phone, customer_id;` – this can be any valid named SQL query

Input the Method: `PUT`

Input the Description – what your users will see when they view the API documentation, e.g. "Update a customer"

Click “Add Parameter” > Blank

Input the Parameter Fields:

* __Name:__ body
* __Vendor Name:__ body
* __Type:__ BODY
* __Vendor Type:__ QUERY
* __Data Type:__ customers
* __Vendor Data Type:__ customers
* __Parameter Source:__ Request
* __Is it Required:__ No
* __Description:__ The customer object

Click “Done”

Click “Add Parameter” > Id

Input the Parameter Fields:

* __Name:__ id
* __Vendor Name:__ customer_id
* __Type:__ PATH
* __Vendor Type:__ QUERY
* __Data Type:__ number
* __Vendor Data Type:__ number
* __Parameter Source:__ Request
* __Is it Required:__ Yes
* __Description:__ The customer ID

Click “Done”

Click “Try it out!”
![Database Resources 10](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources10.png)

This will open up the API Documentation sliding Panel.

Input the ID of the customer.  In our example: `102`
Input the customer JSON to update the object:

```JSON
{
  "last_name": "Snow",
  "first_name": "Jon",
  "email": "jonsnow@got.com",
  "mobile_phone": "303-333-3333"
}
```

Click the Try it out button to test the call.

View the response on the left hand side panel.

View the vendor request and response on the right hand side panel.  This is very useful when debugging and API call.
Click the 'X' in the corner to close the sliding panel.
![Database Resources 11](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources11.png)

##### ADDING RESOURCE: DELETE /customers/{id}

Click “+ Add” > API

Input the Path: `/customers/{id}`

Input the Vendor Path: `select * from customer where customer_id = :id` – this can be any valid named SQL query

Input the Method: `DELETE`

Input the Description – what your users will see when they view the API documentation, e.g. 'Delete a customer by ID'

Click “Add Parameter” > Id

Input the Parameter Fields:

* __Name:__ id
* __Vendor Name:__ id
* __Type:__ PATH
* __Vendor Type:__ QUERY
* __Data Type:__ number
* __Vendor Data Type:__ number
* __Parameter Source:__ Request
* __Is it Required:__ Yes
* __Description:__ The ID of the customer

Click “Done”

Click “Try it out!”
![Database Resources 12](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources12.png)

This will open up the API Documentation sliding Panel.

Input the ID of the customer.  In our example: `102`

Click the Try it out button to test the call.

View the response on the left hand side panel.

View the vendor request and response on the right hand side panel.  This is very useful when debugging and API call.
Click the 'X' in the corner to close the sliding panel.
![Database Resources 13](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources13.png)

##### ADDING RESOURCE: POST /addresses

Click “+ Add” > API

Input the Path: `/addresses`

Input the Vendor Path: `insert into address
(
  street1, street2, state, postal_code, country, customer_id
)
values
  (
      :street1,
      :street2,
      :state,
      :postal_code,
      :country,
      :customer_id
  )
returning street1, street2, state, postal_code, country, customer_id, address_id, created_dt` – this can be any valid named SQL query

Input the Method: `POST`

Input the Description – what your users will see when they view the API documentation, e.g. "Create an address"

Click “Add Parameter” > Blank

Input the Parameter Fields:

* __Name:__ body
* __Vendor Name:__ body
* __Type:__ BODY
* __Vendor Type:__ QUERY
* __Data Type:__ addresses
* __Vendor Data Type:__ addresses
* __Parameter Source:__ Request
* __Is it Required:__ No
* __Description:__ The address body

Click “Done”

Click “Try it out!”
![Database Resources 14](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources14.png)

This will open up the API Documentation sliding Panel.

Input the following customer JSON body:

```JSON
{
  "street1": "123 Main",
  "street2": "PO Box 123",
  "state": "CO",
  "country": "USA",
  "customer_id": 104
}
```

Click the Try it out button to test the call.

View the response on the left hand side panel.

```JSON
{
  "country": "USA",
  "created_dt": 1464111347732,
  "address_id": 109,
  "street1": "123 Main",
  "street2": "PO Box 123",
  "state": "CO",
  "customer_id": 104
}
```

View the vendor request and response on the right hand side panel.  This is very useful when debugging and API call.
__NOTE:  Since we did not populate all address values, i.e. `postal_code `, the value will be captured as `null`__
Click the 'X' in the corner to close the sliding panel.
![Database Resources 15](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources15.png)

##### ADDING COMPLEX QUERIES: GET /customersDetails

Click “+ Add” > API

Input the Path: `/customersDetails`

Input the Vendor Path: `select c.*, a.* from customer c
  inner join address a on a.customer_id = c.customer_id
{where}
offset :offset limit :limit` – this can be any valid named SQL query
__NOTE The `{where}` indicates a place holder.  This will replace the placeholder with an empty value so the script works correctly on our side.  The `where` is a standard Cloud Elements placeholder.  If a where does not exist, this will satisfy that requirement.__

Input the Method: `GET`

Input the Description – what your users will see when they view the API documentation, e.g. 'Retrieve a list of customer details including address'

Click “Add Parameter” > Page

Input the Parameter Fields:

* __Name:__ page
* __Vendor Name:__ offset
* __Type:__ QUERY
* __Vendor Type:__ QUERY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ Request
* __Is it Required:__ NO
* __Description:__ The text of your status update

Click “Done”

Click “Add Parameter” > pageSize

Input the Parameter Fields:

* __Name:__ page
* __Vendor Name:__ offset
* __Type:__ QUERY
* __Vendor Type:__ QUERY
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ Request
* __Is it Required:__ NO
* __Description:__ The number of resources to return in a given page

Click “Done”

Click “Add Parameter” > Where

Input the Parameter Fields:

* __Name:__ where
* __Vendor Name:__ where
* __Type:__ QUERY
* __Vendor Type:__ PATH
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ Request
* __Is it Required:__ NO
* __Description:__ The CEQL search expression

Click “Done”

Click “Try it out!”
![Database Resources 16](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources16.png)

This will open up the API Documentation sliding Panel.

Input the search expression in the where field:  `last_name='Snow'`

Click the Try it out button to test the call.

View the complex query response on the left hand side panel.

View the vendor request and response on the right hand side panel.  This is very useful when debugging and API call.
Click the 'X' in the corner to close the sliding panel.
![Database Resources 17](http://cloud-elements.com/wp-content/uploads/2016/05/DatabaseResources17.png)

#### Models Tab

Below is an excerpt from our general Element Builder documentation.
It will cover Model functionality

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

Events are currently not supported for Database Elements.  We'll keep you posted on this feature.

#### Bulk Tab

Below is an excerpt from our general Element Builder documentation.
It will cover Bulk functionality

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

Below is an excerpt from our general Element Builder documentation.
It will cover Documentation functionality


View the newly created API documentation for Element.  Try out the API calls right from Element Builder.

View the new Element documentation by selecting an instance from the dropdown: “Change Instances”.
![Element Builder Documentation 1](http://cloud-elements.com/wp-content/uploads/2015/04/Documentation2.png)

If an instance has not been created, click “Add Instance”.
![Element Builder Documentation 2](http://cloud-elements.com/wp-content/uploads/2015/04/Documentation1.png)

Try It Out:  Click on a resource, e.g. GET /users

Input the query parameter: q=’jonsmith’

Click “Try it out!”
![Element Builder Documentation 3](http://cloud-elements.com/wp-content/uploads/2015/04/Documentation3.png)

View the response.
![Element Builder Documentation 4](http://cloud-elements.com/wp-content/uploads/2015/04/Documentation4.png)

Click “Done”
![Element Builder Documentation 5](http://cloud-elements.com/wp-content/uploads/2015/04/Admin1.png)

#### Admin Dashboard

Within the in Admin Dashboard, the following functions are available to exercise on all Elements created using Element Builder:

* __Edit an Element:__ change a URL, add a resource, edit configurations
* __Deactivate:__ deactivates an Element, temporarily removing it from the catalog
* __Delete:__ deletes an Element, permanently removing it from the catalog
* __Export:__ exports Element JSON, this JSON can be imported at a later time

To access the Element admin functions, click on the gear.

To import Element JSON, click “Import Element” and follow the prompts.  All functionality will be available based on the last state of the Element prior to export.
![Element Builder Admin Dashboard 1](http://cloud-elements.com/wp-content/uploads/2016/02/AdminClone1.png)

#### Import our Sample Element

Below is the JSON needed to create our sample DB Element.

[Download Sample JSON][1]

[1]:{{ site.url }}/download/sampleDbElement.json

![Element Builder Import Element](http://cloud-elements.com/wp-content/uploads/2016/05/ImportElement1.png)

#### Ground2Cloud Connector

Cloud Elements supports two ways of connecting a Database:
* Connect Directly via IP Address and Port Number
* Use Cloud Elements [Ground2Cloud](/docs/products/ground-2-cloud/index.html) service

{% include padding-all.html %}

###  Option 1: Connecting Directly via IP Address and Port Number

This method would require a port be exposed so a connection can be made with Cloud Elements.
When creating an instance, the user would input the IP Address and Port Number exposed publicly.

{% include padding-all.html %}

###  Option 2: Connecting via Ground2Cloud

The Ground2Cloud integration consists of two parts: Client and Server.
The Ground2Cloud Client creates a tunnel to a public Ground2Cloud Server, and enables requests from the Cloud Elements Production Cloud to transparently pass through that tunnel to reach the Client Service.
![Cloud Elements Ground2Cloud 1](/assets/img/ground2cloud/how-it-works.png)

The Ground2Cloud Client installation program is a self-unpacking executable. Once it finishes running, the Ground2Cloud Client is installed as Windows Service which constantly runs to keep this tunnel open. You generally don’t have to worry about this; once installed, the service automatically restarts in case of failure, or when your Windows machine is rebooted.

The installer also installs a GUI (Graphical User Interface) program, which can be used to monitor and manage the Ground2Cloud Client. When launched, it opens a window with simple dialogs that let you browse logs files, change configuration, and perform other management operations. Details on how to use the GUI is described in the [User’s Manual](/docs/products/ground-2-cloud/index.html).

If you are interested in using our Ground2Cloud Service, please [contact us](info@cloud-elements.com) for details.

#### Support

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
