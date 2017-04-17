---
heading: Element Builder
seo: Create Element via Element Builder UI | Element Builder | Cloud Elements API Docs
title: Create Element via Element Builder UI
description: Create a new Element via the Element Builder UI.
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 3
---

## Element Builder UI BETA

Element Builder gives you the ability to create custom integrations to cloud services using the Cloud Elements API Management Platform.  We are currently testing our BETA version.  __Currently only endpoints with a REST API can be built using Element Builder__.  Please [contact us](mailto:support@cloud-elements.com) if you are interested in participating in our round of BETA testing.

Twitter will be used for this demonstration.  A new Twitter connected app must be created prior to building the Element.

Cloud Elements strongly recommends researching the endpoint prior to starting any work in Element Builder.  It is important to answer the following questions about an endpoint:

* Is there public API Documentation?
* Is the public API REST?
* Does the endpoint require a connected app with an API key and secret be created?
* What type of Authentication is expected (Basic, OAuth 1, OAuth 2)?
* Does the endpoint support search by last updated date or have webhook support for events?

Prior to beginning work, research was done on the Twitter API.  The following was discovered:

* Twitter API Documentation: [https://dev.twitter.com/overview/documentation](https://dev.twitter.com/overview/documentation)
* API is REST
* Connected app required to connect to the endpoint
* Authentication Type: __OAuth 1.0a__
* Twitter does support search by last date updated

The Twitter API is well documented with example calls of authentication, each entity/resource, and even code samples.  This is not always the case with every endpoint.

Let’s get started with the construction of the Twitter Element by first creating a new Twitter connected app.

Follow these steps to set up a Twitter application with the endpoint.

Via a web browser, go to [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new).

1. Click “Create application”.

2. Enter you callback URL. For this example, let’s assume that the URL for your application is: `https://www.mycoolapp.com/oauth`
![Twitter Connected App step 1](/assets/img/element-builder/twitter-connected-app-1.png)

3. Click “Yes, I agree”.

4. Click “Create your Twitter application”.
![Twitter Connected App step 2](/assets/img/element-builder/twitter-connected-app-2.png)

5. Click “Keys and Access Tokens”.

6. Copy “API Key”.

7. Copy “API Secret”.
![Twitter Connected App step 3](/assets/img/element-builder/twitter-connected-app-3.png)

The next step is to log in to the [Cloud Elements API Manager](https://console.cloud-elements.com/elements/jsp/login.jsp) and begin building the Twitter Element.

#### Create New elements

Log in to the [Cloud Elements API Manager](https://console.cloud-elements.com/elements/jsp/login.jsp)

Click “Elements Builder”
![Element Builder Info 1](http://cloud-elements.com/wp-content/uploads/2015/04/Info1.png)

Click “Build Element”
![Element Builder Info 2](http://cloud-elements.com/wp-content/uploads/2015/04/Info2.png)

#### Info Tab

Select a Hub e.g. Social
Hubs map resources from a collection of endpoints (What we call Elements) into a uniform set of APIs.
Add a new hub from the dropdown menu to create a new collection if our defaults do not meet your needs.

Name of the new Element, e.g. Twitter or My Twitter Element

Add a description for the new Element.
e.g. Add a Twitter Instance to connect your existing Twitter account to the Social Hub, allowing you to manage your statuses, pictures, etc. across multiple Social Elements. You will need your Twitter account information to add an instance.

Add a URL to an image or logo to represent the new Element.

Select the type of authentication the endpoint expects. The four types supported by Cloud Elements are Basic, OAuth 1, OAuth 2, and Custom.
* __Basic__ is a type of authentication where an enduser provides a username and password. It is not always the username and password, some endpoints ask for the API key and secret without disclosing the enduser’s credentials.
* The __OAuth 1__ protocol enables authentication to the endpoint without requiring users to expose their credentials. OAuth 1 is a 3 step authentication process. It is an older protocol. The OAuth 1 protocol involves signing the payload on every request and thus is used by many financial services.
* __OAuth 2__ authentication is a newer two step process employed by many of the today’s modern cloud services like Google.
* __Custom__ authentication is completely user defined, such as a username and password exchanged for an API key with some type of expiration involved.

Click “Next”
![Element Builder Info 3](http://cloud-elements.com/wp-content/uploads/2015/04/Info3.png)

#### Configuration Tab

Add the base URL to the endpoint.  The base URL is the endpoint where all API requests will be sent, e.g. [https://api.twitter.com/1.1](https://api.twitter.com/1.1).
The Base URL can be found in most endpoint API Documentation within the Overview, Authentication, or Resources/Entities sections.
The Twitter Base URL can be found in the Resources/Entities section.

Select the page size, e.g. 100 objects per page.

Select the paging type.
Page is the default, but Offset is available to view portions of data, as well as, Cursor to move through large data sets.

Input the OAuth Authorization URL
Most endpoints have this information in the Authentication section of the API Documentation.
Twitter’s OAuth Authorization URL can be found at [https://dev.twitter.com/oauth/reference/get/oauth/authorize](https://dev.twitter.com/oauth/reference/get/oauth/authorize).

Input the OAuth API Key
The API Key is generated when the connected app is created.

Input the OAuth API Secret
The API Secret is generated when the connected app is created.

Input the OAuth Callback URL
The same callback URL used when the connected app was created. In our example: `https://www.mycoolapp.com/oauth`.

Input the OAuth Token URL
Most endpoints have this information in the Authentication section of the API Documentation.
Twitter’s OAuth Token URL can be found at [https://dev.twitter.com/oauth/reference/post/oauth/access_token](https://dev.twitter.com/oauth/reference/post/oauth/access_token).

Input the OAuth Scope (Optional)
Some endpoints require read and write privileges to objects. This information can be found in the Authentication section of most endpoint API documentation.

Input the OAuth Token URL
Most endpoints have this information in the Authentication section of the API Documentation.
Twitter’s OAuth Token URL can be found at [https://dev.twitter.com/oauth/reference/post/oauth/request_token](https://dev.twitter.com/oauth/reference/post/oauth/request_token).

Select the OAuth Request Authorization Type
Cloud Elements supports two types: Query and Header
Query will send the request in the URL path, while Header will send the request as a header.

Select the Accept Header and the Content Type Header
Cloud Elements supports two types: JSON and XML.
Please select the type the endpoint expects. In our example, Twitter expects JSON payloads.

Click “Next”

Configurations, Parameters, and Hooks will not be covered in this guide as Twitter does not require any beyond the defaults provided by Element Builder.

However, here are some definitions:

* __Configuration__: A value which is stored when a connection to the endpoint is created. This value is populated via user input and will be used when invoking the API, e.g. an api_key and api_secret.
* __Parameter__: A globally defined value that will apply to all API calls. Parameters can be sent as a header, path, query, body.
* __Hooks__: Pre-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).
Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint.
![Element Builder Configuration 1](http://cloud-elements.com/wp-content/uploads/2015/04/Configuration1.png)

#### Instance Tab

Test the connection to the endpoint by creating an instance.

Input a name for the instance, e.g. Test

Click “Create Instance”

In our example, this will take us through the Twitter OAuth 1.0a workflow.  A login screen will be presented, credentials inputted, and authorization of the app granting permission to the Twitter user profile.

Click “Next”
![Element Builder Instance 1](http://cloud-elements.com/wp-content/uploads/2015/04/Instance1.png)

#### Resources Tab

Add entities/resources to your Element within the Resources Tab.  Resources will need an HTTP verb like POST, GET, PATCH, PUT, or DELETE associated with it.  If the Element being created can be identified with one of Cloud Elements current hubs, pre-built resources can be used to get started in mapping out resources.

We will begin adding a resource from one of the pre-built items available since we added Twitter to the Social Hub.  Once we complete adding that resource, we will add one from scratch.

##### ADDING A RESOURCE FROM CLOUD ELEMENTS PRE-BUILT API CALLS

The endpoint API documentation will be needed to find out the following:

* vendor path of the resource
* HTTP verb
* JSON payload if applicable

In our example, Twitter was placed within the Social hub.  There are 5 pre-built resources available.  See screenshot.

To add a pre-built resource click the “arrow” and the resource will be added.  In our example, we will add the GET /users resource from the pre-built list.

Click the arrow in the GET /users resource
![Element Builder Resources 1](http://cloud-elements.com/wp-content/uploads/2015/04/Resource1.png)

The pre-built GET /users API call will have some fields already populated.  In order to complete the resource fields, the endpoint documentation will be needed.

In our example, Twitter provides API documentation for the GET /users/search resource here:  [https://dev.twitter.com/rest/reference/get/users/search](https://dev.twitter.com/rest/reference/get/users/search)

The Twitter documentation reveals the vendor path to the resource:
[https://api.twitter.com/1.1/users/search.json](https://api.twitter.com/1.1/users/search.json)

Since the base URL was inputted on the Configuration Tab, only the `/users/search.json` is needed.

Select the “Type” , e.g. API as we are adding an API

Input `/users/search.json` in the “Vendor Path” field

The method and description have been populated as well.  We will touch on these when we add a resource from scratch in the next section.

The parameters will need to be added next.  A parameter must be defined on the Cloud Elements side and the vendor side.  For example, in our GET /users API call, the pageSize will be what Cloud Elements expects.  Twitter expects count instead of pageSize.  We reflect these name variations within the parameter fields.  Let’s take a look at this example in the Element Builder UI.

The column on the left is what Cloud Elements expects.  The column on the right is what the endpoint expects, in this case, Twitter.  Let’s take a look at the fields:

* __Name:__ Cloud Elements uses pageSize when getting the number of records on a page.
* __Vendor Name:__ What the endpoint expects.  In our example, Twitter refers to “count” as the number of records on a page.
* __Type:__ Query – Cloud Elements is sending the endpoint a query request.
* __Vendor Type:__ Query – the endpoint expects a query search in this API call.
* __Data Type:__ Integer – the data type (string, integer, etc)
* __Vendor Data Type:__ Integer – data type the endpoint expects
* __Parameter Source:__ Request – the request is coming from Cloud Elements to the endpoint.  The reverse is also possible, Cloud Elements receives a response from the endpoint.  In our example, we are sending a `GET` request to Twitter.
* __Is it Required?:__  If the endpoint expects this parameter on every API call, select “yes”.  If it is optional, select “no”.
* __Description:__  input a description of the parameter, e.g. the number of objects to be returned.
![Element Builder Resources 2](http://cloud-elements.com/wp-content/uploads/2015/04/TwitterParameter1.png)

Click “Add Parameter”

Populate the parameter with the data above

Click “Done”

The information required for the vendor fields was found in Twitter’s API documentation: [https://dev.twitter.com/rest/reference/get/users/search](https://dev.twitter.com/rest/reference/get/users/search).
![Element Builder Resources 3](http://cloud-elements.com/wp-content/uploads/2015/04/TwitterParameter.png)

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

Let’s add the other two parameters needed to complete the GET /users API call: page and where.  These three parameters are needed by Cloud Elements to properly make a GET request on a resource.  We’ll use the Twitter API documentation once again to complete the parameters.

Let’s begin with the page parameter.

Click “Add Parameter”

Input each of the fields:
* __Name:__ page
* __Vendor Name:__ page – taken from the Twitter documentation
* __Type:__ Query
* __Vendor Type:__ Query
* __Data Type:__ integer
* __Vendor Data Type:__ integer – taken from the Twitter documentation
* __Parameter Source:__ request – Cloud Elements is making the request
* __Is it Required?:__ No – according the Twitter documentation it is optional
* __Description:__ Specifies the page of results to retrieve.

Click “Done”
![Element Builder Resources 4](http://cloud-elements.com/wp-content/uploads/2015/04/TwitterParameter2.png)

One pre-built parameters were included in the GET /users call.  The vendor fields must be completed.

Under “where” click “Edit”
![Element Builder Resources 5](http://cloud-elements.com/wp-content/uploads/2015/04/TwitterParameter3.png)

Input each of the vendor fields:
* __Vendor Name:__ converter:toQueryParameters – this is to convert the call from the Cloud Elements Query Language (CEQL) to a vendor query
* __Vendor Type:__ Query
* __Vendor Data Type:__ string – taken from the Twitter documentation
* __Parameter Source:__ request – Cloud Elements is making the request
Is it Required?: Yes – according the Twitter documentation it is required
* __Description:__ The CEQL search expression. The only valid field to search by is ‘q’ which represents the users’ username

Click “Done”
![Element Builder Resources 6](http://cloud-elements.com/wp-content/uploads/2015/04/TwitterParameter4.png)

Test out the newly created API by clicking “Try it out”

This action will open a sliding panel displaying the newly created API call.
![Element Builder Resources 7](http://cloud-elements.com/wp-content/uploads/2015/04/TryItOut1.png)

In the ‘where’ field, input ‘q=”jonsmith”‘
The q=’username’ is the format in which Twitter expects query requests.  Information taken again from the endpoint’s API documentation.

Click “Try it out!”
![Element Builder Resources 8](http://cloud-elements.com/wp-content/uploads/2015/04/TryItOut2.png)

This action will execute the API call.  The column on the right will show you information regarding the vendor request – what Cloud Elements sends to the endpoint.  This is very helpful when trying to debug an API call.
The column on the right displays the object returned from the executed API call.
![Element Builder Resources 9](http://cloud-elements.com/wp-content/uploads/2015/04/TryItOut3.png)

##### ADDING A RESOURCE FROM SCRATCH

Adding a resource from scratch is very similar to using one of Cloud Elements pre-built resources with the exception of completing a few more fields.

For this example, the POST /statuses resource will be added to our Twitter Element, otherwise known as tweeting.  The API documentation will be needed found here: [https://dev.twitter.com/rest/reference/post/statuses/update](https://dev.twitter.com/rest/reference/post/statuses/update).

Looking at the API documentation, the tweet must be sent as JSON in the form of a query within the URL.  The only required parameter is ‘status’.  This parameter will be added, however the other optional parameters will not for this demonstration.
![Element Builder Resources 10](http://cloud-elements.com/wp-content/uploads/2015/04/TwitterParameterPOST.png)

Click “+ Add”

Select the Resource Type, e.g. “API”

Input the Path: `/hubs/social/statuses`

Input the Vendor Path: `/statuses/update.json` – taken from the Twitter API documentation

Input the Method: `POST`

Input the Vendor Method: `POST`

Input the Description – what your users will see when they view the API documentation, e.g. “Create a new status for your profile”
![Element Builder Resources 12](http://cloud-elements.com/wp-content/uploads/2015/04/AddResource1.png)

Click “Add Parameter”

Input the Parameter Fields:
* __Name:__ status
* __Vendor Name:__ status
* __Type:__ Query
* __Vendor Type:__ Query
* __Data Type:__ string
* __Vendor Data Type:__ string
* __Parameter Source:__ Request
* __Is it Required:__ Yes
* __Description:__ The text of your status update

Click “Done”

Click “Try it out” and test the new resource
![Element Builder Resources 12](http://cloud-elements.com/wp-content/uploads/2015/04/AddResource2.png)

Input a Tweet

Click “Try it out!”
![Element Builder Resources 13](http://cloud-elements.com/wp-content/uploads/2015/04/AddResource3.png)

View the response

Again, this screen can be used to inspect and debug requests and hooks.

To add more resources, repeat the steps outlined above.
![Element Builder Resources 13](http://cloud-elements.com/wp-content/uploads/2015/04/AddResource4.png)

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

Events:  Cloud Elements currently supports building integrations with polling or webhooks capability.  Polling is a mechanism where Cloud Elements executes the configured query every __n minutes__ and capture the changed information.  Webhooks are when the provider lets Cloud Elements know what information has changed.

__Polling:__  In order to enable polling, the endpoint must support querying an object by last updated date.

__Webhooks:__ In order to enable webhooks, the endpoint must support them.  Note additional endpoint setup may be required prior to creating your Element.  An event hook script must be defined that transforms the inbound event data to a format that Cloud Elements supports.

Twitter supports a create_at field.  However, they do not support an updated_at field.  Since the updated_at field is not supported, polling will occur on objects created since a certain day and time.

Let’s take a look at an example.

Partial JSON payload of Twitter `GET /users resource`:

```JSON
[
  {
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_background_tile": true,
    "profile_sidebar_border_color": "C0DEED",
    "name": "Twitter API",
///////////////////////////////////////////////////////
////"created_at": "Wed May 23 06:01:13 +0000 2007",////
///////////////////////////////////////////////////////
    "profile_image_url":
    ...
  }
]
```

We’ll be using the `created_at` field in our where clause below.

Select “Yes” for “Enable Events and setup events configuration

Select “Polling”

Under the “users” resource click “Edit”
![Element Builder Events 1](http://cloud-elements.com/wp-content/uploads/2015/04/Events1.png)

In the “Where field with operator” field, input `created_at` with operator `>`, or `created_at >`

Select a date format that the endpoint expects. This information is available under the endpoint API documentation.

Under the advanced section, input `created_at` in the Update Date Field and Created Date Field.

Select the same Date format as above to match what the endpoint expects.

Click “Done”
![Element Builder Events 2](http://cloud-elements.com/wp-content/uploads/2015/04/Events21.png)

#### Bulk Tab

Cloud Elements supports bulk download of objects in JSON format if the endpoint support filter by date.

The following fields are required to enable bulk download:

Bulk Query Time Format:  Select a time format from the dropdown list.  The time format must match the endpoint’s supported time format for queries.
Bulk Query Field Name:  Provide an object and an operator in the Bulk Query Field Name, e.g. where orders >= “{time_format}”.
Bulk Query Operator: The Bulk Query Operator can be set to “=” or “>=”.

Twitter supports a create_at field.  However, they do not support an updated_at field.  Since the updated_at field is not supported, bulk download will occur on objects created since a certain day and time.

Let’s take a look at an example.

Partial JSON payload of Twitter GET /users resource:

```JSON
[
  {
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_background_tile": true,
    "profile_sidebar_border_color": "C0DEED",
    "name": "Twitter API",
///////////////////////////////////////////////////////
////"created_at": "Wed May 23 06:01:13 +0000 2007",////
///////////////////////////////////////////////////////
    "profile_image_url":
    ...
  }
]
```

We’ll be using the `created_at` field in the Bulk Query Field Name below.

61. In the Bulk Query Field Name, input `created_at`

62. Select the Bulk Query Date Format, the format the endpoint expects.  This can be found in the endpoint API documentation.

63. Input a Bulk Query Operator.  The Bulk Query Operator can be set to `=` or `>=`.

64. Click “Done”
![Element Builder Bulk 1](http://cloud-elements.com/wp-content/uploads/2015/04/Bulk1.png)

#### Documentation Tab

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

#### Support

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
