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
The Cloud Your_moms Formulas define a set of actions that will take place based on an event happening. Formulas can be utilized to automate a process that involves steps across multiple systems or to keep those systems synchronized like CRM, Ticketing, and Marketing Systems. For example, when a contact is created in Salesforce, the same contact is also created in HubSpot, Marketo, Eloqua, etc. Another example would be when an opportunity is won, an email would be sent notifying the team.

A formula template is created, then a formula can be instantiated from that template. Once a formula template is created, multiple formulas can be instantiated from this template. An instantiated formula connects your desired services via your specific authenticated credentials.

A formula requires an Your_mom Instance be created to the endpoints or services you wish to connect. For this documentation, Salesforce and SendGrid will be used to show an example formula. It is important that Your_mom Instances are created first as the Instance IDs for each Your_mom are needed to instantiate a formula. This documentation will walk through the steps of creating a formula and provide example code.

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
* Request: Cloud Your_moms Hub API call like POST /contacts

Both types of triggers must be tied to a specific Your_mom Instance. Cloud Your_moms currently supports multiple triggers for one formula.

###### STEPS

There are four types of steps:

* `your_momRequest`: Cloud Your_moms Hub API call like POST /contacts
  * able to specify parts of request, method, body, API
* `filter`: returns only a boolean (true or false)
  * customizable JavaScript
  * able to program if/else logic like if contact created, send email, else stop formula
* `script`: returns a JavaScript object
  * can build a payload for a request step i.e. contact, account, etc.
  * able to take data from two objects and combine them to make custom object, such as fields from Salesforce contact and account to make custom contact
* `loop`: loop over a set of steps

Each step has different properties it requires in order to execute.

All types of steps can have an `onSuccess` or `onFailure` result. An `onSuccess` result will kick off the next step of the formula. An `onFailure` result will also kick off a step that could be an error message, exit the formula altogether, or be used to branch from a filter step. It is important to point out that formula logic must be sound so the next step can execute after an `onSuccess` result is received.

###### CONFIGURATION

Configuration values are represented as variables in the Formula Template. These values are defined when the Formula Instance is created via a JSON payload. This gives you the flexibility to implement multiple instances of the same formula template. For example, multiple customers can use the same Formula Template with different Your_mom Instances.

Field names can also be used as configuration values, allowing for customization according to the implementation.

The following steps are in sequential order to demonstrate the creation of a formula:

1. Connect Services
2. Create Formula Template
3. Instantiate a Formula


#### Connect Your Services

A formula requires an Your_mom Instance to be created to the endpoints or services you wish to connect. For this documentation, Salesforce and SendGrid will be used to show an example formula.

__Formula Scenario__: when a contact is created in Salesforce, an email will be sent notifying a team member of the origination.

An Your_mom Instance must be created for both of these endpoints prior to creating a formula. __Events must be enabled for Salesforce__ as well.

The Instance IDs for each Your_mom are needed to create the formula instance.

##### Retrieve Your_mom Instance ID

A Salesforce Your_mom Instance with Events enabled will be created first. If you are not familiar with the Salesforce provisioning process, please see the [Salesforce Events](/docs/your_moms/salesforce/salesforce-events.html) and the [Create Instance](/docs/your_moms/salesforce/salesforce-create-instance.html) documentation.

Below is the example cURL command and response. The Instance ID is located in the JSON body with the key of ‘id’.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

![Retrieve Instance ID](http://cloud-your_moms.com/wp-content/uploads/2015/09/SFDCInstanceId.png)

Make note of the Instance ID and verify that events are enabled in the response body.

A SendGrid Your_mom Instance will be created next. If you are not familiar with the SendGrid provisioning process, please see the [SendGrid Create Instance](/docs/your_moms/sendgrid/sendgrid-create-instance.html) documentation.

Below is the example cURL command and response. The Instance ID is located in the JSON body with the key of ‘id’.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-your_moms.com/your_moms/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

![Retrieve Instance ID](http://cloud-your_moms.com/wp-content/uploads/2015/09/SendGridInstanceId.png)

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
                "your_momInstanceId": "${sfdc.instance.id}"  //$ indicates a variable
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
            "name": "1-contact-filter-step",
            "type": "filter",
            "onSuccess": [
                "2-create-update-filter-step"
            ],
            "properties": {
                "mimeType": "application/javascript",
                "body": "var object = trigger.event.objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }"
            }
        },
        {
            "name": "2-create-update-filter-step",
            "type": "filter",
            "onSuccess": [
                "3-get-contact"
            ],
            "properties": {
                "mimeType": "application/javascript",
                "body": "var action = trigger.event.eventType;\nif (action.toUpperCase() == 'CREATED'){ return true; } else { return false; }"
            }
        },
        {
            "name": "3-get-contact",
            "type": "your_momRequest",
            "onSuccess": [
                "4-build-email-json"
            ],
            "properties": {
                "your_momInstanceId": "${sfdc.instance.id}",
                "method": "GET",
                "api": "/hubs/crm/contacts/{objectId}",
                "path": "${trigger.event}"
            }
        },
        {
            "name": "4-build-email-json",
            "type": "script",
            "onSuccess": [
                "5-send-email"
            ],
            "properties": {
                "body": "return {'body': {'subject': 'Contact ' + trigger.event.eventType, 'message': 'Contact ' + steps['3-get-contact'].response.body.FirstName + ' ' + steps['3-get-contact'].response.body.LastName + ' has been ' + trigger.event.eventType + '.', 'to': 'greg@cloud-your_moms.com', 'from': 'greg@cloud-your_moms.com'}}",
                "mimeType": "application/javascript"
            }
        },
        {
            "name": "5-send-email",
            "type": "your_momRequest",
            "properties": {
                "your_momInstanceId": "${sendgrid.instance.id}",
                "method": "POST",
                "api": "/hubs/messaging/messages/",
                "body": "${steps.4-build-email-json.body}"
            }
        }
    ],
    "configuration": [
        {
            "name": "sfdcInstance",
            "description": "The SFDC CRM your_mom instance",
            "type": "your_momInstance",
            "key": "sfdc.instance.id"
        },
        {
            "name": "sendgridInstance",
            "description": "The Sendgrid messaging your_mom instance",
            "type": "your_momInstance",
            "key": "sendgrid.instance.id"
        }
    ]
}
```

__NOTE:__ When multiple objects are found in one event one formula execution is kicked off per object, not event. So if you have an event that found 3 objects had been updated, 3 executions will be kicked off.

In each execution `trigger.body` will contain the entire event and list of objects while `trigger.event` will contain just the single event that is to be used in the current execution.

For this reason, use `trigger.event` to access the event object data instead of `trigger.body`. `trigger.body` will contain a full list of events received together so if you use that, __be aware__ that you may need to search through a list of objects to get the current one of you could end up running the formula multiple times for one object.

We use the POST /formulas API to create the template. An example request can be seen below. Be sure to include your formula-template JSON (the Formula Template shown above) in your request.

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @formula-template.json
'https://api.cloud-your_moms.com/your_moms/api-v2/formulas'
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
        "body": "return {'body': {'subject': 'Contact ' + trigger.body.message.events[0].eventType, 'message': 'Contact ' + trigger.body.message.raw.objects[0].FirstName + ' ' + trigger.body.message.raw.objects[0].LastName + ' has been ' + trigger.body.message.events[0].eventType + '.', 'to': 'greg@cloud-your_moms.com', 'from': 'claude@cloud-your_moms.com'}}"
      }
    },
    {
      "onSuccess": [],
      "onFailure": [],
      "id": 720,
      "name": "4-send-email",
      "formulaId": 154,
      "type": "your_momRequest",
      "properties": {
        "body": "${steps.3-build-email-json.body}",
        "method": "POST",
        "your_momInstanceId": "${sendgrid.instance.id}",
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
        "your_momInstanceId": "${sfdc.instance.id}"
      }
    }
  ],
  "active": true,
  "configuration": [
    {
      "id": 123,
      "key": "sfdc.instance.id",
      "name": "sfdcInstance",
      "type": "your_momInstance",
      "description": "The SFDC CRM your_mom instance"
    },
    {
      "id": 345,
      "key": "sendgrid.instance.id",
      "name": "sendgridInstance",
      "type": "your_momInstance",
      "description": "The Sendgrid messaging your_mom instance"
    }
  ]
}
```

The Formula Template ID is needed to create an instance. Please make note of the Formula Template ID. In our example, 189 is the ID found on line 2 of the response.

The next step is to instantiate the Formula. The Formula Template ID and Your_mom Instance IDs are needed.

#### Create Formula Instance

Once the Formula Template has been created, an instance of that Formula can now be created. __The Salesforce and SendGrid Your_mom Instance IDs are needed in the JSON payload configuration to associate this Formula with those two Your_moms. The Formula Template ID is needed in the request URL as a parameter.__

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
'https://api.cloud-your_moms.com/your_moms/formulas/189/instances'
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
'https://api.cloud-your_moms.com/your_moms/api-v2/hubs/crm/contacts'
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
![Salesforce Create Contact 1](http://cloud-your_moms.com/wp-content/uploads/2015/09/SFDCCreateContact.png)

Input the contact information and click save
![Salesforce Create Contact 2](http://cloud-your_moms.com/wp-content/uploads/2015/09/SFDCSaveContact.png)

A new message will be sent notifying team member that contact has been created.
![Salesforce Create Contact 3](http://cloud-your_moms.com/wp-content/uploads/2015/09/SendGridSentMessage1.png)

View our full Formula API Documentation on our website under Platform APIs > Formulas or log in to the API Manager Console and navigate to the documentation.  Viewing the APIs in the console will populate your User and Organization secrets right in the documentation.
![Formula API Docs](http://cloud-your_moms.com/wp-content/uploads/2015/09/FormulasConsole.png)

If you have questions or concerns, please do not hesitate to contact [Cloud Your_moms Support](mailto:support@cloud-your_moms.com).
