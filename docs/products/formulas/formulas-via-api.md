---
heading: Formulas
title: Create Formula via API
description: Learn how to create formulas via API and start syncing cloud services.
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 5
---

## Create Formula via API

#### Overview
The Cloud Elements Formulas define a set of actions that will take place based on an event happening. Formulas can be utilized to automate a process that involves steps across multiple systems or to keep those systems synchronized like CRM, Ticketing, and Marketing Systems. For example, when a contact is created in Salesforce, the same contact is also created in HubSpot, Marketo, Eloqua, etc. Another example would be when an opportunity is won, an email would be sent notifying the team.

A formula template is created, then a formula can be instantiated from that template. Once a formula template is created, multiple formulas can be instantiated from this template. An instantiated formula connects your desired services via your specific authenticated credentials.

A formula requires an Element Instance be created to the endpoints or services you wish to connect. For this documentation, Salesforce and SendGrid will be used to show an example formula. It is important that Element Instances are created first as the Instance IDs for each Element are needed to instantiate a formula. This documentation will walk through the steps of creating a formula and provide example code.

##### Formula Templates

There are 4 parts that make up a formula template:

* Name and Description
* Trigger(s)
* Steps
* Configuration

###### NAME AND DESCRIPTION

Name your formula and give it a description. You may want to describe the flow of steps or overall goal of the formula.

###### TRIGGERS

There are two types of triggers:

* Event: polling and webhook type of events
* Request: Cloud Elements Hub API call like POST /contacts

Both types of triggers must be tied to a specific Element Instance. Cloud Elements currently supports multiple triggers for one formula.

###### STEPS

There are four types of steps:

* elementRequest: Cloud Elements Hub API call like POST /contacts
  * able to specify parts of request, method, body, API
* filter: returns only a boolean (true or false)
  * customizable JavaScript
  * able to program if/else logic like if contact created, send email, else stop formula
* script: returns a JavaScript object
  * can build a payload for a request step i.e. contact, account, etc.
  * able to take data from two objects and combine them to make custom object, such as fields from Salesforce contact and account to make custom contact
* loop: loop over a set of steps

Each step has different properties it requires in order to execute.

All types of steps can have an “onSuccess” or “onFailure” result. An onSuccess result will kick off the next step of the formula. An onFailure result will also kick off a step that could be an error message, exit the formula altogether, or be used to branch from a filter step. It is important to point out that formula logic must be sound so the next step can execute after an onSuccess result is received.

###### CONFIGURATION

Configuration values are represented as variables in the Formula Template. These values are defined when the Formula Instance is created via a JSON payload. This gives you the flexibility to implement multiple instances of the same formula template. For example, multiple customers can use the same Formula Template with different Element Instances.

Field names can also be used as configuration values, allowing for customization according to the implementation.

The following steps are in sequential order to demonstrate the creation of a formula:

1. Connect Services
2. Create Formula Template
3. Instantiate a Formula


#### Connect Your Services

A formula requires an Element Instance to be created to the endpoints or services you wish to connect. For this documentation, Salesforce and SendGrid will be used to show an example formula.

__Formula Scenario__: when a contact is created in Salesforce, an email will be sent notifying a team member of the origination.

An Element Instance must be created for both of these endpoints prior to creating a formula. __Events must be enabled for Salesforce__ as well.

The Instance IDs for each Element are needed to create the formula instance.

##### Retrieve Element Instance ID

A Salesforce Element Instance with Events enabled will be created first. If you are not familiar with the Salesforce provisioning process, please see the [Salesforce Events](/docs/elements/salesforce/salesforce-events.html) and the [Create Instance](/docs/elements/salesforce/salesforce-create-instance.html) documentation.

Below is the example cURL command and response. The Instance ID is located in the JSON body with the key of ‘id’.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

![Retrieve Instance ID](http://cloud-elements.com/wp-content/uploads/2015/09/SFDCInstanceId.png)

Make note of the Instance ID and verify that events are enabled in the response body.

A SendGrid Element Instance will be created next. If you are not familiar with the SendGrid provisioning process, please see the [SendGrid Create Instance](/docs/elements/sendgrid/sendgrid-create-instance.html) documentation.

Below is the example cURL command and response. The Instance ID is located in the JSON body with the key of ‘id’.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

![Retrieve Instance ID](http://cloud-elements.com/wp-content/uploads/2015/09/SendGridInstanceId.png)

#### Example Formula Template

Below is an example Formula Template formatted as a JSON payload. Each of the parts of defined above can be found in the example payload below. Don’t forget to view the comments within the payload. This payload will be included in your Formula Template creation request.

```JSON
{
    ///////////////////////////////////////
    //    Input Name and Description     //
    ///////////////////////////////////////

    "name": "Send email when contact is created or updated.",
    "description": "An email is sent containing the contacts name when a contact is Salesforce is updated or created.",

    ///////////////////////////////////////
    //Trigger needed to initiate formula//
    ///////////////////////////////////////

    "triggers": [
        {
            "type": "event",
            "properties": {
                "elementInstanceId": "${sfdc.instance.id}"  //$ indicates a variable
            },
            "onSuccess": [
                "1-contact-filter-step"
            ]
        }
    ],

    ///////////////////////////////////////
    //      Steps of the formula        //
    ///////////////////////////////////////

    "steps": [
        {
            "name": "1-contact-filter-step",   //Name of first step
            "type": "filter",                  //Type of trigger - filter
            "onSuccess": [
                "2-create-update-filter-step"  //Action taken on success
            ],
            "properties": {
                "mimeType": "application/javascript",
                "body": "var object = trigger.body.message.events[0].objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }"
            }
        },
        {
            "name": "2-create-update-filter-step",
            "type": "filter",
            "onSuccess": [
                "3-build-email-json"
            ],
            "properties": {
                "mimeType": "application/javascript",
                "body": "var action = trigger.body.message.events[0].eventType;\nif (action.toUpperCase() == 'UPDATED' || action.toUpperCase() == 'CREATED'){ return true; } else { return false; }"
            }
        },
        {
            "name": "3-build-email-json",
            "type": "script",  //Type of trigger - script - object payload created in properties.body below
            "onSuccess": [
                "4-send-email"
            ],
            "properties": {
                "body": "return {'body': {'subject': 'Contact ' + trigger.body.message.events[0].eventType, 'message': 'Contact ' + trigger.body.message.raw.objects[0].FirstName + ' ' + trigger.body.message.raw.objects[0].LastName + ' has been ' + trigger.body.message.events[0].eventType + '.', 'to': 'greg@cloud-elements.com', 'from': 'claude@cloud-elements.com'}}",
                "mimeType": "application/javascript"
            }
        },
        {
            "name": "4-send-email",
            "type": "elementRequest",  //Trigger Type - elementRequest - will trigger an API call - POST /messages
            "properties": {
                "elementInstanceId": "${sendgrid.instance.id}",  //SengGrid Element Instance ID needed
                "method": "POST",  //HTTP Method
                "api": "/hubs/messaging/messages/",  //URL
                "body": "${steps.3-build-email-json.body}"  //Object created from step 3
            }
        }
    ],
    "configuration": [
        {
            "name": "sfdcInstance",
            "description": "The SFDC CRM element instance",
            "type": "elementInstance",
            "key": "sfdc.instance.id"
        },
        {
            "name": "sendgridInstance",
            "description": "The Sendgrid messaging element instance",
            "type": "elementInstance",
            "key": "sendgrid.instance.id"
        }
    ]
}
```

We use the POST /formulas API to create the template. An example request can be seen below. Be sure to include your formula-template JSON (the Formula Template shown above) in your request.

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @formula-template.json
'https://api.cloud-elements.com/elements/api-v2/formulas'
```

Example of Successful Response:

```json
{
  "id": 189,
  "name": "Example Formula Template - Create/Update Users for Sfdc Contacts/Leads",
    "description": "When a contact or lead is created or updated in Salesforce a user is updated or created in Acme App and team member notified via an email message sent using SendGrid",
  "userId": 1234,
  "accountId": 5678,
  "createdDate": "2015-09-15T18:06:58Z",
  "steps": [
    {
      "onSuccess": [
        "2-create-update-filter-step"
      ],
      "onFailure": [],
      "id": 717,
      "name": "1-contact-filter-step",
      "formulaId": 154,
      "type": "filter",
      "properties": {
        "mimeType": "application/javascript",
        "body": "var object = trigger.body.message.events[0].objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }"
      }
    },
    {
      "onSuccess": [
        "3-build-email-json"
      ],
      "onFailure": [],
      "id": 718,
      "name": "2-create-update-filter-step",
      "formulaId": 154,
      "type": "filter",
      "properties": {
        "mimeType": "application/javascript",
        "body": "var action = trigger.body.message.events[0].eventType;\nif (action.toUpperCase() == 'UPDATED' || action.toUpperCase() == 'CREATED'){ return true; } else { return false; }"
      }
    },
    {
      "onSuccess": [
        "4-send-email"
      ],
      "onFailure": [],
      "id": 719,
      "name": "3-build-email-json",
      "formulaId": 154,
      "type": "script",
      "properties": {
        "mimeType": "application/javascript",
        "body": "return {'body': {'subject': 'Contact ' + trigger.body.message.events[0].eventType, 'message': 'Contact ' + trigger.body.message.raw.objects[0].FirstName + ' ' + trigger.body.message.raw.objects[0].LastName + ' has been ' + trigger.body.message.events[0].eventType + '.', 'to': 'greg@cloud-elements.com', 'from': 'claude@cloud-elements.com'}}"
      }
    },
    {
      "onSuccess": [],
      "onFailure": [],
      "id": 720,
      "name": "4-send-email",
      "formulaId": 154,
      "type": "elementRequest",
      "properties": {
        "body": "${steps.3-build-email-json.body}",
        "method": "POST",
        "elementInstanceId": "${sendgrid.instance.id}",
        "api": "/hubs/messaging/messages/"
      }
    }
  ],
  "triggers": [
    {
      "id": 99,
      "type": "event",
      "formulaId": 154,
      "async": true,
      "onSuccess": [
        "1-contact-filter-step"
      ],
      "onFailure": [],
      "properties": {
        "elementInstanceId": "${sfdc.instance.id}"
      }
    }
  ],
  "active": true,
  "configuration": [
    {
      "id": 123,
      "key": "sfdc.instance.id",
      "name": "sfdcInstance",
      "type": "elementInstance",
      "description": "The SFDC CRM element instance"
    },
    {
      "id": 345,
      "key": "sendgrid.instance.id",
      "name": "sendgridInstance",
      "type": "elementInstance",
      "description": "The Sendgrid messaging element instance"
    }
  ]
}
```

The Formula Template ID is needed to create an instance. Please make note of the Formula Template ID. In our example, 189 is the ID found on line 2 of the response.

The next step is to instantiate the Formula. The Formula Template ID and Element Instance IDs are needed.

#### Create Formula Instance

Once the Formula Template has been created, an instance of that Formula can now be created. __The Salesforce and SendGrid Element Instance IDs are needed in the JSON payload configuration to associate this Formula with those two Elements. The Formula Template ID is needed in the request URL as a parameter.__

Below is the instance-formula JSON needed to create a Formula Instance:

```json
{
    "formula": {
        "active": true
    },
    "name": "Demo",
    "active": true,
    "configuration": {
        "sfdc.instance.id": "123",
        "sendgrid.instance.id": "345"
    }
}
```
To create an Instance of a Formula, use the POST /formulas/{id}/instances API. In our example template, the __Formula Instance ID is 189__. This ID will be included as a URL parameter in the request.

Below is an example request:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @instance-formula.json
'https://api.cloud-elements.com/elements/formulas/189/instances'
```
Example of Successful Response:

```json
{
  "id": 100,
  "formula": {
    "id": 189,
    "active": true
  },
  "name": "Demo",
  "createdDate": "2015-09-15T18:09:32Z",
  "active": true,
  "configuration": {
    "sendgrid.instance.id": "345",
    "sfdc.instance.id": "123"
  }
}
```

Once an Instance of the Formula has been created, create a contact in Salesforce via API or UI. This will trigger the formula steps and an email will be delivered to the team member.

Contact Creation via API:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @contact.json
'https://api.cloud-elements.com/elements/api-v2/hubs/crm/contacts'
```
Contact JSON needed to create the contact. Include in your request.

```json
{
  "Phone": "333-333-3333",
  "Email": "jon@acme.com",
  "FirstName": "Jon",
  "LastName": "Smith"
}
```

Example of Successful Response:

```json{
  "Email": "jon@acme.com",
  "Phone": "333-333-3333",
  "FirstName": "Jon",
  "LastName": "Smith",
  "Id": "003i000IhAAI"
}
```

Or create a new contact in the Salesforce UI.

Log in to Salesforce and click create a new contact.
![Salesforce Create Contact 1](http://cloud-elements.com/wp-content/uploads/2015/09/SFDCCreateContact.png)

Input the contact information and click save
![Salesforce Create Contact 2](http://cloud-elements.com/wp-content/uploads/2015/09/SFDCSaveContact.png)

A new message will be sent notifying team member that contact has been created.
![Salesforce Create Contact 3](http://cloud-elements.com/wp-content/uploads/2015/09/SendGridSentMessage1.png)

View our full Formula API Documentation on our website under Platform APIs > Formulas or log in to the API Manager Console and navigate to the documentation.  Viewing the APIs in the console will populate your User and Organization secrets right in the documentation.
![Formula API Docs](http://cloud-elements.com/wp-content/uploads/2015/09/FormulasConsole.png)

If you have questions or concerns, please do not hesitate to contact [Cloud Elements Support](mailto:support@cloud-elements.com).
