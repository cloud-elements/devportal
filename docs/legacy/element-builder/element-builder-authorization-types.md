---
heading: Element Builder
seo: Authorization Types | Element Builder | Cloud Elements API Docs
title: Authorization Types
description: View example Authorization Types that can be built using the Element Builder UI.
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 6
---

## Authorization Types

This section will provide some tech tips on authentication.

Have a tech tip suggestion? Please contact [Support](mailto:support@cloud-elements.com).

#### Authorization Tips

Element Builder supports 4 types of endpoint authorization:

* OAuth 1
* OAuth 2
* Basic Authorization
* Custom Authorization

The purpose of the Authorization Tech Tip is to provide examples of each of the authentication.  OAuth 1 was demonstrated in the Element Builder UI guide with the Twitter endpoint under the Configuration.  Examples of the remaining auth types will be shown below.

Cloud Elements strongly encourages researching the endpoint authorization prior to building a new Element. The authorization type can typically be found in the Overview or Authentication portion of the endpoint API documentation.

##### OAUTH 2

Box will be used to demonstrate the OAuth 2 authentication type.  As a best practice, researching the Box API documentation to see what the endpoint expects in terms of auth requests should be the first step.  The Box API documentation can be found here: [https://box-content.readme.io/docs/oauth-20](https://box-content.readme.io/docs/oauth-20).

This excerpt is from the Box API docs:
>Before you can start using OAuth2 with your application, you’ll need to tell Box a bit of information about your application

>Register your application [here](https://app.box.com/login?redirect_url=%2Fdevelopers%2Fservices%2Fedit%2F).
Set your redirect url
Select your scope
Make a note of both your client_id and client_secret.

Box provides further information about scope in their docs as well.  It is important to choose what kind of functionality you want your application to have prior to starting work on your Element.

Now that we familiar with the Box auth flow, let’s take a look at the Configuration tab in Element Builder – this is where the authentication type setup occurs.

###### CONFIGURATION TAB

Add the base URL to the endpoint. The base URL is the endpoint where all API requests will be sent, e.g. [https://api.box.com/2.0](https://api.box.com/2.0).
The Base URL can be found in most endpoint API Documentation within the Overview, Authentication, or Resources/Entities sections.
The Box Base URL can be found in the Get Started with the Box Content API section

Select the page size, e.g. 100 objects per page and select the paging type.. Page is the default, but Offset is available to view portions of data, as well as, Cursor to move through large data sets.

Input the following values:

__Input the OAuth Authorization URL:__  `https://app.box.com/api/oauth2/authorize`
Most endpoints have this information in the Authentication section of the API Documentation.
Box’s OAuth Authorization URL can be found at [https://box-content.readme.io/docs/oauth-20](https://box-content.readme.io/docs/oauth-20).

__Input the OAuth API Key__
The API Key is generated when the connected app is created.

__Input the OAuth API Secret__
The API Secret is generated when the connected app is created.

__Input the OAuth Callback URL__
The same callback URL used when the connected app was created. In our example: `https://www.mycoolapp.com/oauth`.

__Input the OAuth Token URL:__ `https://app.box.com/api/oauth2/token`
Most endpoints have this information in the Authentication section of the API Documentation.
Box’s OAuth Token URL can be found at [https://box-content.readme.io/docs/oauth-20](https://box-content.readme.io/docs/oauth-20).

__Input the OAuth Scope (Optional):__ `Read and write all, files and folders`
Some endpoints require read and write privileges to objects. Scope information for Box can be found here: [https://box-content.readme.io/docs/oauth-20](https://box-content.readme.io/docs/oauth-20).

__Select Header and Content-Type:__ application/json
Select the type that the endpoint expects.

Let’s define what a __Configuration, Parameter, and Hook__ are prior to moving on.

* __Configuration:__ A value which is stored when a connection to the endpoint is created. This value is populated via user input and will be used when invoking the API, e.g. an api_key and api_secret.
* __Parameter:__ A globally defined value that will apply to all API calls. Parameters can be sent as a header, path, query, body.
* __Hooks:__ Pre-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).
Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint.
![Element Builder OAuth2 1](http://cloud-elements.com/wp-content/uploads/2015/04/AuthorizationFAQ1.png)

Box does have some configurations that need to be stored, however, they do not need to visible for the User in the Elements Builder UI.  These values are necessary to track event data and support user functionality for the Box Element.  __NOTE: This example may not be the same for other endpoints.__

To add a configuration, begin by clicking “Add Configuration”

Input values and select whether it is required and is visible in the Element Builder UI

Click “Done”

Continue to add additional configurations needed by the endpoint if applicable.

Click “Next”
![Element Builder OAuth2 2](http://cloud-elements.com/wp-content/uploads/2015/04/AuthorizationFAQ2.png)

This will take you to the Instance Tab where you can create a connection to the endpoint and test out the authentication.

Box does not require any Parameters or Hooks be sent on authorization requests

Tech Tips for adding Parameters and Hooks will be coming soon.

##### BASIC

Close.io will be used to demonstrate the Basic authentication type.  As a best practice, researching the Close.io API documentation to see what the endpoint expects in terms of auth requests should be the first step.  The Close.io API documentation can be found here: http://developer.close.io/.

This excerpt is from the Close.io API docs:

>Authentication

>HTTP Basic authentication. The API key acts as the username. API keys are per-organization and can be generated and deleted in the Settings page.

>Example cURL request with an api key.
`curl "https://app.close.io/api/v1/me/" -u yourapikey:`

>notice the ‘:’ at the end of the api key. This is used because the key is sent as the username with a blank password.

>API Base URL:
`https://app.close.io/api/v1`

Close.io provides further information about custom fields and supported objects in their docs as well.  It is important to choose what kind of functionality you want your application to have prior to starting work on your Element.

Now that we familiar with the Close.io auth flow, let’s take a look at the Configuration tab in Element Builder – this is where the authentication type setup occurs.

###### CONFIGURATION TAB

Add the base URL to the endpoint. The base URL is the endpoint where all API requests will be sent, e.g. `https://app.close.io.com/api/v1`.
The Base URL can be found in most endpoint API Documentation within the Overview, Authentication, or Resources/Entities sections.
The Close.io Base URL can be found in the Welcome section.

Select the page size, e.g. 100 objects per page and select the paging type.. Page is the default, but Offset is available to view portions of data, as well as, Cursor to move through large data sets.

Select __Header__ and __Content-Type:__ `application/json`

Let’s define what a __Configuration, Parameter, and Hook__ are prior to moving on.

* __Configuration:__ A value which is stored when a connection to the endpoint is created. This value is populated via user input and will be used when invoking the API, e.g. an api_key and api_secret.
* __Parameter:__ A globally defined value that will apply to all API calls. Parameters can be sent as a header, path, query, body.
* __Hooks:__ Pre-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).
Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint.
![Element Builder Basic 1](http://cloud-elements.com/wp-content/uploads/2015/04/AuthorizationFAQ3.png)

If we look back at the authentication excerpt from the Close.io API docs:

>Example cURL request with an api key.
`curl "https://app.close.io/api/v1/me/" -u yourapikey:`

>notice the ‘:’ at the end of the api key. This is used because the key is sent as the username with a blank password.

The user will need to provide an API key.  This will be sent as a configuration.

To add a configuration, begin by clicking “Add Configuration”

Input values the endpoint expects:
* __Key:__ username
* __Name:__ API Key
* __Type:__ Select TEXTFIELD_32
* __Description:__ The API key, needed to make API requests to Close.io
* __Default Value:__ Blank (Optional)
* __Is it Required?:__ Select “Yes” it is required by Close.io
Hide from console?: Select “No” as we will need the user to input this value

Click “Done”

Referring back to the Close.io API docs, the password will be sent as a blank field – this input is not needed by the user, but must be sent with the request.  We need to add that configuration.

Click “Add Configuration”

Input values the endpoint expects:
* __Key:__ password
* __Name:__ Password
* __Type:__ Select TEXTFIELD_32
* __Description:__ This should always be blank for Close.io
* __Default Value:__ Blank (Optional)
* __Is it Required?:__ Select “No”
* __Hide from console?:__ Select “Yes” as we will not need the user to input this value

Add any additional configurations needed.  The other two displayed in the screen shot are related to adding Bulk functionality to the Close.io Element.

Click “Next”
![Element Builder Basic 2](http://cloud-elements.com/wp-content/uploads/2015/04/AuthorizationFAQ4.png)

This will take you to the Instance Tab where you can create a connection to the endpoint and test out the authentication.

Close.io does not require any Parameters or Hooks be sent on authorization requests

Tech Tips for adding Parameters and Hooks will be coming soon.

##### CUSTOM

Typeform will be used to demonstrate the Custom authentication type.  As a best practice, researching the Typeform API documentation to see what the endpoint expects in terms of auth requests should be the first step.  The Typeform API documentation can be found here: http://docs.typeform.io/docs/.

This excerpt is from the Typeform API docs:

>Authentication

>To be able to authenticate your API calls, you need to sign up for an API-key. It’s a painless step and this documentation will be here waiting for you when you come back.

>You authenticate your API calls by adding a header to the requests you make. At this point in time, you will only be able to have a single API key per account (contact us if you need more). Be sure to keep your API key secret, since it will have access to perform actions on your behalf.

Typeform provides further information about supported objects in their docs as well.  It is important to choose what kind of functionality you want your application to have prior to starting work on your Element.

Now that we familiar with the Typeform auth flow, let’s take a look at the Configuration tab in Element Builder – this is where the authentication type setup occurs.

###### CONFIGURATION TAB

Add the base URL to the endpoint. The base URL is the endpoint where all API requests will be sent, e.g. https://api.typeform.io/v0.4.
The Base URL can be found in most endpoint API Documentation within the Overview, Authentication, or Resources/Entities sections.
The Typeform Base URL can be found in the General > Versioning section.

Select the page size, e.g. 100 objects per page and select the paging type.. Page is the default, but Offset is available to view portions of data, as well as, Cursor to move through large data sets.

Select __Header__ and __Content-Type:__ application/json

Let’s define what a __Configuration, Parameter, and Hook__ are prior to moving on.

* __Configuration:__ A value which is stored when a connection to the endpoint is created. This value is populated via user input and will be used when invoking the API, e.g. an api_key and api_secret.
* __Parameter:__ A globally defined value that will apply to all API calls. Parameters can be sent as a header, path, query, body.
* __Hooks:__ Pre-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).
Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint.

If we look back at the authentication excerpt from the Typeform API docs:

>You authenticate your API calls by adding a header to the requests you make. At this point in time, you will only be able to have a single API key per account (contact us if you need more). Be sure to keep your API key secret, since it will have access to perform actions on your behalf.

The user will need to provide an API key.  This will be sent as a configuration.

To add a configuration, begin by clicking “Add Configuration”

Input values the endpoint expects:
* __Key:__ api.key
* __Name:__ API Key
* __Type:__ Select TEXTFIELD_128
* __Description:__ Typeform API Key
* __Default Value:__ Blank (Optional)
* __Is it Required?:__ Select “Yes” it is required by Close.io
* __Hide from console?:__ Select “No” as we will need the user to input this value

Click “Done”
![Element Builder Custom 1](http://cloud-elements.com/wp-content/uploads/2015/04/AuthorizationFAQ5.png)

Referring back to the Typeform API docs:

>You authenticate your API calls by adding a header to the requests you make.

Since the API Key will need to be sent as a header, it must also be added as a parameter.  According to the Tyepform API docs, they refer to the API token as “X-API-TOKEN” in the header.  This will be inputted as such.

Click “Add Parameter”

Input the following Fields:
* __Name:__ api.key
* __Vendor Name:__ X-API-TOKEN
* __Type:__ CONFIGURATION
* __Vendor Type:__ HEADER
* __Data Type:__ String, Integer, etc
* __Vendor Data Type:__ String, Integer, etc
* __Parameter Source:__ REQUEST
* __Is it Required?:__ Select “NO”
* __Description:__ Token to be sent as a header

Click “Done”

Click “Next”
![Element Builder Custom 2](http://cloud-elements.com/wp-content/uploads/2015/04/AuthorizationFAQ6.png)

This will take you to the Instance Tab where you can create a connection to the endpoint and test out the authentication.

Typeform does not require any Hooks be sent on authorization requests

Tech Tips for adding Hooks will be coming soon.

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
