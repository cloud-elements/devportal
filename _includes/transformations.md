## Transformations

### Introduction

The purpose of the Transformation APIs (Beta) is to give you the option of defining what an object would look like in your app.

The Transformation APIs allow you to:

* manage custom object and custom data fields
* map custom data fields to and from the format that your application uses and expects
* programmatically persist and maintain transformations for each of your client’s CRM, Marketing, and Help Desk services

__An important note concerning workflow:

The objects referenced in your transform must exist (i.e. have been registered via the process outlined above), before registering the transform. Otherwise the transform registration will fail.
Below is an example of the Supplemental Address Object defined in Salesforce and SugarCRM, and what it would look like in your application by utilizing the Transformation APIs.__

In order to access the Organizations APIs, you must sign up for Cloud Elements Service.  You will need your Organization and User Secrets to make successful Transformations API calls.  These are generated for you when you sign up for our service.

### Using the APIs

The first step is to create an object and define its properties. For instance, let’s assume you want your account object to contain the fields ID, First Name, and Last Name. You would define that object with those definitions. Next, create a transformation to map an account object from an endpoint to the account object created for you app. For example, the endpoint’s account object has SID, first_name, and last_name as its properties. You can map your object to reference the SID as ID, first_name as firstName, and last_name as lastName.

This document will show examples of how to create, retrieve, and delete an object. Next, examples on how to use the transformation APIs to map endpoint objects to your objects will be shown.

### Example Object Definitions

POST /organizations/objects/{objectName}/definitions
Create the default object of type {objectName} for an organization.

Below is an example cURL command demonstrating the POST /organizations/objects/{objectName}/definitions API call and successful response.  The -d is the data needed for successful object creation.  This is test data that was created for this demonstration.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X POST
-H 'Authorization: User , Organization '
-H 'Content-Type: application/json'
-d @account.json
'https://api.cloud-elements.com/elements/api-v2/organizations/objects/account/definitions'
```

account.json – JSON file needed to create object

```javascript
{
  "fields": [
    {
      "path": "id",
      "type": "string"
    }
  ]
}
```

Example of Successful Response

```javascript
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

GET /organizations/objects/definitions
Retrieve all of the object definitions within an organization.

Below is an example cURL command demonstrating the GET /organizations/objects/definitions API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User , Organization '
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions'
```

Example of Successful Response:

```javascript
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

DELETE /organizations/objects/definitions
Delete all object definitions within an organization.

__NOTE: This API call will delete all of the objects you have defined at the Organization Level. Please be careful.__

Below is an example cURL command demonstrating the DELETE /organizations/objects/definitions API call and successful response. Please make sure your quotes are straight in the cURL command.

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

### Example API calls

POST /organizations/elements/{key}/transformations/{objectName}
Update the default transformation for an element within an organization. The key field denotes the Element being referenced in the API call, i.e. sfdc.

Below is an example cURL command demonstrating the POST /organizations/elements/{key}/transformations/{objectName} API call and successful response. The -d is the data needed for a successful update of a transformation. This is test data that was created for this demonstration. Please make sure your quotes are straight in the cURL command.

```bash
curl -X POST
-H 'Authorization: User , Organization '
-H 'Content-Type:application/json'
-d @posttransform.json
'https://api.cloud-elements.com/elements/api-v2/organizations/elements/sfdc/transformations/account'
```

createtransform.json: – JSON file needed to update transformation

```javascript
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

```javascript
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

GET /organizations/elements/{key}/transformations/{objectName}
Retrieve the default transformation for a specific element within an organization. The key field denotes the Element being referenced in the API call, i.e. sfdc.

Below is an example cURL command demonstrating the GET /organizations/elements/{key}/transformations/{objectName} API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User , Organization '
-H 'Content-Type:application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/elements/sfdc/transformations/account'
```

Example of Successful Response:

```javascript
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

DELETE /organizations/elements/{key}/transformations/{objectName}
Delete the default transformation for an element within an organization. The key field denotes the Element being referenced in the API call, i.e. sfdc

Below is an example cURL command demonstrating the DELETE /organizations/elements/{key}/transformations/{objectName} API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X DELETE
-H 'Authorization: User , Organization '
-H 'Content-Type:application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/elements/sfdc/transformations/account'
```

Example of Successful Response:

```javascript
HTTP 200 on success
```
