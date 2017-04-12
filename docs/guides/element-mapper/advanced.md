---
heading: Element Mapper
seo: Element Mapper Advanced Examples | Element Mapper | Cloud Elements API Docs
title: Advanced
description: View different advanced examples of Element Mapper in action.
layout: sidebarleft
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 5
---

# Advanced Examples
Below are a handful of advanced examples of leveraging Element Mapper.

# Create Custom Objects

### My Object

Add object definitions to resources like accounts and contacts so they can be mapped to other cloud service applications.

#### Currently Supported Services

The My Object resource can be used with Elements in all of our Hubs with the exception of Documents and Messaging.

This guide will walk you through the creation of an Object via the Cloud Elements API Manager Console.

Log in to the [Cloud Elements API Manager Console](https://console.cloud-elements.com/elements/jsp/login.jsp)

Click “My Objects”
![Element Mapper My Object 1](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject1.png)

Click “Add/Edit Object”
![Element Mapper My Object 2](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject2.png)

Click “New Object”
![Element Mapper My Object 3](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject3.png)

Name the Object

Select Object Level: Organization will include your company and your customers.

Click “Add Field”
![Element Mapper My Object 4](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject4.png)

Name your field to map.

Select which data type, e.g. string, number, etc.

Click “green check mark”
![Element Mapper My Object 5](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject5.png)

Click “Save” when you have finished entering the fields you wish to map to the resource.
![Element Mapper My Object 6](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject6.png)

Click “X” to close.
![Element Mapper My Object 7](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject7.png)

Click “My Instances”

Click “Transformations”
(Salesforce will be used for this demonstration)
![Element Mapper My Object 8](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject8.png)

Click “My Objects”

Select “MyContact”
(The object you created earlier in the workflow)
![Element Mapper My Object 9](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject9.png)

Click the drop down menu on the right.

Select “Contact” from the list of Salesforce resources
![Element Mapper My Object 10](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject10.png)

Drag and drop the fields you wish to map to Salesforce on top of the fields you created for the object.
![Element Mapper My Object 11](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject11.png)

Optionally decide whether or not to ignore the unmapped fields from Salesforce.  We will ignore unmapped fields for this demonstration.

Click “Save”
![Element Mapper My Object 12](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject12.png)

Click “X” to close
![Element Mapper My Object 13](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject13.png)

Click “Documentation” to open API docs for the Salesforce instance

Scroll down towards the bottom of the list and select “GET /{objectName} to expand the docs.
![Element Mapper My Object 14](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject14.png)

Input “MyContact” in the objectName field

Click “Try it out!”
![Element Mapper My Object 15](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject15.png)

View the contact data displaying the fields mapped to that object.
![Element Mapper My Object 16](http://cloud-elements.com/wp-content/uploads/2015/06/MyObject16.png)

# Array Support

#### Mapping Arrays to Flat Fields

Regular expressions are now available within an object via Element Mapper.
These expressions will give you the ability to map an array to a flat field.
Custom objects can be formatted in JSON, then created via the transformation APIs or via the Element Mapper UI.

The transformations APIs can be found under Platform APIs > Organizations > Create Transformations for Element in Organization of the documentation menu.  Or, log in to the Cloud Elements API Manager and navigate to the API DOCS > Platform APIs > Organizations.

Let’s take a look at an example:

```JSON
{
  "account": {
    "vendorName": "Account",
    "fields": [
      {
        "path": "AppleIpadName",
        "vendorPath": "Products[id=4].name" //Get the value of the name field from the Products array where id = 4
      },
      {
        "path": "AppleProductName",
        "vendorPath": "Products[?(@.id==2)].name" //Get the value of the name field from the Products array where id = 2
      },
      {
        "path": "AppleNewProductName",
        "vendorPath": "details.Products[?(@.id==2)].name" //Get the details of an object from the Products array where id = 2
      },
      {
        "path": "AppleProductTouchId",
        "vendorPath": "Products[?(@.id==2)].features.touchId" // Get the touchId value from the Products array with id=2 which is inside the features object
      },
      {
        "path": "AppleTouchProductId",
        "vendorPath": "Products[?(@.features.touchId==true)].id" //Get the Id of the array where touchId = true
      },
      {
        "path": "AppleProductId",
        "vendorPath": "Products[0].id" //Id value of the Products array at index 0
      },
      {
        "path": "AppleProductsCount",
        "vendorPath": "Products[*].size()" //Count of the Products array
      }
    ]
  }
}
```

Mapping flat fields to an array can also be done via the Element Mapper UI.
A QuickBooks custom customer will be used. This document assumes a QuickBooks instance has been created. If an instance has not been created, please review the QuickBooks Documentation under Elements > QuickBooks > Endpoint Setup and Create Instance found in the left hand side of the documentation menu.

Log in to the [Cloud Elements API Manger Console](https://console.cloud-elements.com/elements/jsp/login.jsp).

Navigate to ‘My Instances’

Navigate to the QuickBooks Instance and select ‘Transformations’ to open the Element Mapper UI
![Element Mapper Array Support 1](http://cloud-elements.com/wp-content/uploads/2015/10/FlatArrays1.png)

Select ‘customer’ from the dropdown list of objects
![Element Mapper Array Support 2](http://cloud-elements.com/wp-content/uploads/2015/10/FlatArrays2.png)

Select ‘New Object’
![Element Mapper Array Support 3](http://cloud-elements.com/wp-content/uploads/2015/10/FlatArrays3.png)

Name the object, myCustomers will be used for this example

Check ‘Yes’ for IGNORE UNMAPPED – this will only display the fields mapped to the myCustomers object. NOTE: A few fields have already been dragged and dropped from the right column for this example.

Click ‘+ Add Field’ A phone number will be added to this object and mapped to an array

Complete the following

* Name the field: myPhone
* Select data type: string
* Select the field to map: primaryPhone.freeFormNumber

Click the green check mark to save field

Click ‘Save’ to save the object

Click ‘Try it out’ to see your newly created object
![Element Mapper Array Support 4](http://cloud-elements.com/wp-content/uploads/2015/10/FlatArrays4.png)

View the transformed object and the original object

The primaryPhone.freeFormNumber field was mapped to the myPhone field – an array mapped to a flat field.
![Element Mapper Array Support 5](http://cloud-elements.com/wp-content/uploads/2015/10/FlatArrays5.png)

If you have any questions regarding mapping flat fields to an array, please contact [Cloud Elements Support](mailto:support@cloud-elements.com).

# Transformations API Usage

The purpose of the Transformation APIs (Beta) is to give you the option of defining what an object would look like in your app.

The Transformation APIs allow you to:

* manage custom object and custom data fields
* map custom data fields to and from the format that your application uses and expects
* programmatically persist and maintain transformations for each of your client’s CRM, Marketing, and Help Desk services

#### An important note concerning workflow:

__The objects referenced in your transform must exist (i.e. have been registered via the process outlined above), before registering the transform. Otherwise the transform registration will fail.
Below is an example of the Supplemental Address Object defined in Salesforce and SugarCRM, and what it would look like in your application by utilizing the Transformation APIs.__

In order to access the Organizations APIs, you must sign up for Cloud Elements Service.  You will need your __Organization__ and __User Secrets__ to make successful Transformations API calls.  These are generated for you when you sign up for our service.  __Details on how to sign up and where to find your Organization and User Secrets are documented in the next section.__
![Element Mapper APIs 1](http://cloud-elements.com/wp-content/uploads/2014/10/transformGrahpic1.png)

#### Signup for the Cloud Elements Service

To sign up for the Cloud Elements service, using a web browser, go to: [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

You can create a new account with Cloud Elements using the “Sign Up” link shown here, or sign up for Cloud Elements service using your Google or GitHub account. When signing up via GitHub, you must set a public email address in GitHub profile. Screen shots on how to set a public email are below. If you choose not to use GitHub to sign up, you will then be required to validate your new account via a confirmation link that will be sent to your email. You will reset your password to one of your choice after your initial login.
![CRM Hub Quick Start Guide 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuideSignup.png)

##### Setting a Public Email in GitHub

Navigate to your settings in GitHub.
![Element Mapper APIs 2](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub2.gif)

Type in your public email in the designated field and click “Update Profile”.

All set!

The first step is to sign up for Cloud Elements Service.
![Element Mapper APIs 3](http://cloud-elements.com/wp-content/uploads/2014/08/gitHub21.gif)

After completing this process, click “Secrets” in the top right corner. Make note of the Org and User secrets as they needed to provision an Element Instance. The Secrets option is available from the top ribbon at all times.
![Element Mapper APIs 4](http://cloud-elements.com/wp-content/uploads/2016/04/CloudElementsSecrets.png)

#### How to Use the Transformation APIs

The first step is to create an object and define its properties. For instance, let’s assume you want your account object to contain the fields ID, First Name, and Last Name. You would define that object with those definitions. Next, create a transformation to map an account object from an endpoint to the account object created for you app. For example, the endpoint’s account object has SID, first_name, and last_name as its properties. You can map your object to reference the SID as ID, first_name as firstName, and last_name as lastName.

This document will show examples of how to create, retrieve, and delete an object. Next, examples on how to use the transformation APIs to map endpoint objects to your objects will be shown.

##### Example Object Definition API Calls

`POST /organizations/objects/{objectName}/definitions`

Create the default object of type {objectName} for an organization.

Below is an example cURL command demonstrating the `POST /organizations/objects/{objectName}/definitions` API call and successful response.  The `-d` is the data needed for successful object creation.  This is test data that was created for this demonstration.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X POST
-H 'Authorization: User , Organization '
-H 'Content-Type: application/json'
-d @account.json
'https://api.cloud-elements.com/elements/api-v2/organizations/objects/account/definitions'
```

account.json – JSON file needed to create object

```JSON
{
  "fields": [
    {
      "path": "id",
      "type": "string"
    }
  ]
}
```

Example of Successful Response:

```JSON
{
  "fields": [
    {
      "type": "string",
      "path": "id"
    }
  ],
  "level": "organization"
}
```

`GET /organizations/objects/definitions`

Retrieve all of the object definitions within an organization.

Below is an example cURL command demonstrating the `GET /organizations/objects/definitions` API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User , Organization '
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions'
```

Example of Successful Response:

```JSON
{
 "account": {
   "fields": [
     {
       "type": "string",
       "path": "id"
     }
   ]
 },
 "contact": {
   "fields": [
     {
       "type": "string",
       "path": "id"
     }
   ]
 },
 "lead": {
   "fields": [
     {
       "type": "string",
       "path": "id"
     }
   ]
 },
 "opportunity": {
   "fields": [
     {
       "type": "string",
       "path": "id"
     }
   ]
 },
 "product": {
   "fields": [
     {
       "type": "string",
       "path": "id"
     }
   ]
 },
 "incident": {
   "fields": [
     {
       "type": "string",
       "path": "id"
     }
   ]
 },
 "user": {
   "fields": [
     {
       "type": "string",
       "path": "id"
     }
   ]
 },
 "level": "organization"
}
```

`DELETE /organizations/objects/definitions`

Delete all object definitions within an organization.

__NOTE: This API call will delete all of the objects you have defined at the Organization Level. Please be careful.__

Below is an example cURL command demonstrating the `DELETE /organizations/objects/definitions` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X DELETE
-H 'Authorization: User , Organization '
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions'
```

Example of Successful Response:

```bash
HTTP 200 on success
```

Transformations allow you to map an endpoint’s object to the custom object that you just created. For example to transform the account object you just created to the endpoint object, you would use the JSON below.

##### Example Transformations API Calls

`POST /organizations/elements/{key}/transformations/{objectName}`

Update the default transformation for an element within an organization. The key field denotes the Element being referenced in the API call, i.e. sfdc (Salesforce).

Below is an example cURL command demonstrating the `POST /organizations/elements/{key}/transformations/{objectName}`API call and successful response. The `-d `is the data needed for a successful update of a transformation. This is test data that was created for this demonstration. Please make sure your quotes are straight in the cURL command.

```bash
curl -X POST
-H 'Authorization: User , Organization '
-H 'Content-Type:application/json'
-d @posttransform.json
'https://api.cloud-elements.com/elements/api-v2/organizations/elements/sfdc/transformations/account'
```

createtransform.json: – JSON file needed to update transformation

```JSON
{
  "vendorName": "Account",
  "fields": [
    {
      "path": "id",
      "vendorPath": "Id"
    }
  ]
}
```

Example of Successful Response:

```JSON
{
  "level": "organization",
  "vendorName": "Account",
  "startDate": "2014-12-12 18:03:32.012321",
  "fields": [
    {
      "path": "id",
      "vendorPath": "Id"
    }
  ]
}
```

`GET /organizations/elements/{key}/transformations/{objectName}`

Retrieve the default transformation for a specific element within an organization. The key field denotes the Element being referenced in the API call, i.e. sfdc (Salesforce).

Below is an example cURL command demonstrating the `GET /organizations/elements/{key}/transformations/{objectName}` API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User , Organization '
-H 'Content-Type:application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/elements/sfdc/transformations/account'
```

Example of Successful Response:

```JSON
{
  "level": "organization",
  "vendorName": "Account",
  "startDate": "2014-12-12 18:03:32.012321",
  "fields": [
    {
      "path": "id",
      "vendorPath": "Id"
    }
  ]
}
```

`DELETE /organizations/elements/{key}/transformations/{objectName}`

Delete the default transformation for an element within an organization. The key field denotes the Element being referenced in the API call, i.e. sfdc (Salesforce).

Below is an example cURL command demonstrating the `DELETE /organizations/elements/{key}/transformations/{objectName}` API call and successful response. Please make sure your quotes are straight in the cURL command.

```curl -X DELETE
-H 'Authorization: User , Organization '
-H 'Content-Type:application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/elements/sfdc/transformations/account'
```

Example of Successful Response:

```bash
HTTP 200 on success
```

#### Support

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-elements.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.

Looking to take a deeper dive into Transformations? Check out our [TechTip](http://support.cloud-elements.com/hc/en-us/articles/203746359-Data-Collection-Steps-for-Troubleshooting-Objects-and-Transforms) for more in-depth look into Transformations.
