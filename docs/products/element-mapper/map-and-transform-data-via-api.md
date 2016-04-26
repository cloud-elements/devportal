---
heading: Element Mapper
title: Map and Transform Data via the Element Mapper API
description: Get up and running with Element Mapper API.
apis: API Docs
layout: docs
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 4
---

### Transformations Usage Guide

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
