---
heading: Formulas
seo: Formulas Getting Started | Formulas | Cloud Elements API Docs
title: Getting Started
description: Learn how to create formulas in Cloud Elements.
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 3
---

# Getting Started

## Creating Formulas via UI

The Cloud Elements Formulas define a set of actions that will take place based on an event happening. Formulas can be utilized to automate a process that involves steps across multiple systems or to keep those systems up to date like CRM, Ticketing, and Marketing Systems. For example, when a contact is created in Salesforce, the same contact is also created in HubSpot, Marketo, Eloqua, etc. Another example would be when an opportunity is won, an email would be sent notifying the team.

### Overview

A formula requires an Element Instance be created to the endpoints or services you wish to connect. For this documentation, Salesforce and SendGrid will be used to show an example formula. The use case presented is when a contact is created or updated in Salesforce, an email will be sent notifying the user of the origination or change. An Element Instance must be created for both of these endpoints prior to creating a formula. Events must be enabled for Salesforce as well. The Instance IDs for each Element are needed to create the formula.

### Connect Services

The first step in creating a formula is to connect the desired services. Salesforce and SendGrid Element Instance IDs are needed in the formula execution. Salesforce will be created first. Events will be enabled for the Salesforce Element Instance. If you are unfamiliar with setting up your Salesforce connected app, please view the [endpoint setup documentation](/docs/elements/salesforce/salesforce-endpoint-setup.html).

Log in to the Cloud Elements API Manager Console.

* Select “CRM” under Elements Catalog
* Click “Add Instance” for Salesforce.com
![Formula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance1.png)

* Name Instance
* Set polling event refresh interval (default is every 5 minutes)
* Select “polling” as Event Type
* Select “True” to enable events
* Input app callback URL
* Select Objects to Monitor (Salesforce is case sensitive), Contact for this example
* Select “Next”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance2.png)

* Log in to your Salesforce account to authorize the app
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance3.png)

* Click “Next”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance4.png)

__CREATE SENDGRID ELEMENT INSTANCE__

* Select “Messaging” under Elements Catalog
* Click “Add Instance” for SendGrid
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/Fomulas5.png)

* Name the Instance
* Input credentials
* Click “Next”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/Fomulas6.png)

* Click “Done”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/Fomulas7.png)

### Formula Overview

Once Element Instances for the desired services have been instantiated, a formula template can be created.

There are 3 parts that make up a formula template:

* Configuration
* Variables
* Steps

Each part will be defined, then an example formula template for the Salesforce and SendGrid formula will be shown.

#### Configuration

Name your formula.

#### Variables

Configuration values are represented as variables in the Formula Template. These values are defined when the Formula Instance is created. This gives you the flexibility to implement multiple instances of the same formula template. For example, multiple customers can use the same Formula Template with different Element Instances.

Field names can also be used as configuration values, allowing for customization according to the implementation.

#### Triggers

A `trigger` is what will initiate the formula to run.
We currently support the following types of triggers:

* `event`: polling and webhook type of events
* `elementRequest`: Cloud Elements Hub API call like `POST /contacts`
* `scheduled`: requires a cron expression which specifies how often to kick off the formula

Both types of triggers must be tied to a specific Element Instance. Cloud Elements currently supports multiple triggers for one formula.

#### Steps

There are four types of steps:

* `elementRequest`: Cloud Elements Hub API call like POST /contacts
  * specify parts of request, method, body, API: example will be shown below
* `filter`: returns only a boolean (true or false)
  * customizable JavaScript
  * able to do if/else logic like if contact created, send email, else stop formula
* `script`: returns a JavaScript object
  * build a payload for a request step
  * take data from two objects and combine them to make custom object, such as fields from Salesforce contact and account to make custom contact
* `loop`: loop over a set of steps

Each step has different properties it requires in order to execute.

All types of steps can have an `onSuccess` and `onFailure`.

Again, once the template is completed, it can be activated or instantiated.

Let’s take a look at example.

### Building a Formula

Prior to inputting any triggers or steps, it is advisable to think about the desired outcome of the formula.

In our example, the desired outcome is to be notified via email when a new contact has been added or updated in Salesforce.

In this formula, a `Salesforce` and `SendGrid Element Instance` are needed.  The contact being created in __Salesforce__ will serve as the `trigger` putting our formula into action, ultimately ending with an email being sent via __SendGrid__.

As we go through the creation of the formula template, configuration will be done first, followed by variable creation (We will reference the Element Instances as variables).  Then a trigger will be created, as well as, the steps needed by the formula.  Finally we will connect the trigger to each of our steps.  Once the formula template is complete, we will activate or instantiate it.

* Under Formulas, select “Formulas Catalog”
* Click Build Formula
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/FormulaTemplate1.png)

* Name the formula and click "GO"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI1.png)

A window presenting a few options will render.  A trigger is needed to kick off a formula.  An `event` trigger will be used in our example formula, this guide will walk through the trigger creation.  Additionally, We will be creating our formula variables in the steps window.

__NOTE__ If you are not sure of the event type, please feel free to create your variables first.

![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI2.png)

* Select the Salesforce Element Instance created from earlier in this guide.
* Click Save
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI3.png)

Steps may now be added in addition to the trigger.  Clicking the `+` button will present the current steps available.
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI4.png))

* Click `filter` step
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI5.png)

* Name the Step i.e. `1-filter-crm-event`
* Input the following JavaScript:

```JavaScript
return trigger.event.eventType === 'UPDATED' && trigger.event.objectType === 'Contact';
```

This JavaScript is going to filter out any `eventTypes` with the value of `UPDATED` AND and `objectType` of  `Contact`.  We want to check for any Contacts being updated in the system.

* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI6.png)

* Add a `script` step
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI7.png)

* Name the Step i.e. `2-create-email-body`
* Input the following JavaScript:

```JavaScript
var message = {
  "subject": "CRM Contact Updated",
  "to": "jon@acme.com",
  "from": "jon@acme.com",
  "message": "Contact  with ID: '" + trigger.event.objectId + "' was updated!"
};
return message;
```

This JavaScript is building the email message body that will be sent to the user notifying her a contact has been updated.

* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI8.png)

* Add an `elementRequest` step
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI9.png)

This step will build the API call `POST /messages`

* Name the step `3-send-email`
* Select the SendGrid Element Instance created earlier is this guide
* Select `POST` for the method as this will be a new message
* Input the rest of the path for the API call: `/hubs/messaging?version=1.2/messages`
Our system will provide an autocomplete once the `/` is inputed
* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI10.png)

Now that we have our `trigger` and `steps` created, we will connect them sequentially to complete our formula template.

* Click the gear icon and select edit
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI11.png)

* In the `On Success:` panel, select the appropriate step in the sequence: `1-filter-crm-event`
* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI12.png)

We will edit the steps in the same fashion, by clicking the gear icon and selecting edit.
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI13.png)

* In the `1-filter-crm-event` > in the `On Success` panel, select the appropriate step in the sequence: `2-create-email-body`
* Click Save
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI14.png)

* Click the gear and select edit for the `2-create-email-body` > in the `On Success` panel, select the appropriate step in the sequence: `3-send-email`
* Click Save
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI15.png)

Our formula template is now complete.  From the steps panel, view which step comes next by clicking an individual step.  The `onSuccess` will change to green and the `onFailure` will change to red.
This view also provides options to edit, copy, and delete any trigger or step.
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI16.png)

#### TRY IT OUT

Want to try your formula template out prior to putting into production?

* Select "Try It Out"
* Name the Formula Instance
* Input a Notification Email
* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI17.png)

* Select the Formula Instance
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI18.png)


#### CREATE FORMULA INSTANCE

Now that the formula template is complete, it’s time to activate or instantiate it.

Instantiate Formula Template:
Close the Formula Template Window by clicking the “X” in the top right corner

* Under “Formula Catalog” locate the formula that was just created and click “Add Instance”
![Fromula UI Create Instance](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUIInstance1.png)

* Input the Formula Instance Name: `SFDC Contact > SendGrid Prod`
* Check "Active"
* Input an email: a notification message will be sent when the formula is done
* Click "Done"
![Fromula UI Create Instance](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUIInstance2.png)

Once complete, head over to Salesforce and log in to your account.
Create a contact and watch for an email.

* Click the gear icon to Edit, Clone, Delete, and Export the Formula Template
![Fromula UI Create Instance](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUIInstance3.png)

Feel free to import the sample JSON of the Formula template we just created and experiment with it.

[Download Sample Formula Template JSON][2]

[2]:{{ site.url }}/download/SFDCContactSendGridEmail.json

## Creating Formulas via API

### Overview
The Cloud Elements Formulas define a set of actions that will take place based on an event happening. Formulas can be utilized to automate a process that involves steps across multiple systems or to keep those systems synchronized like CRM, Ticketing, and Marketing Systems. For example, when a contact is created in Salesforce, the same contact is also created in HubSpot, Marketo, Eloqua, etc. Another example would be when an opportunity is won, an email would be sent notifying the team.

A formula template is created, then a formula can be instantiated from that template. Once a formula template is created, multiple formulas can be instantiated from this template. An instantiated formula connects your desired services via your specific authenticated credentials.

A formula requires an Element Instance be created to the endpoints or services you wish to connect. For this documentation, Salesforce and SendGrid will be used to show an example formula. It is important that Element Instances are created first as the Instance IDs for each Element are needed to instantiate a formula. This documentation will walk through the steps of creating a formula and provide example code.

#### Formula Templates

There are 4 parts that make up a formula template:

* Name and Description
* Configuration
* Trigger(s)
* Steps

#### Name and Description

Name your formula and give it a description. You may want to describe the flow of steps or overall goal of the formula.

#### Triggers

There are three types of triggers:

* Event: polling and webhook type of events
* Request: Cloud Elements Hub API call like `POST /contacts`

Both types of triggers must be tied to a specific Element Instance.

###### Steps

There are four types of steps:

* `elementRequest`: Cloud Elements Hub API call like POST /contacts
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
            "type": "elementRequest",
            "onSuccess": [
                "4-build-email-json"
            ],
            "properties": {
                "elementInstanceId": "${sfdc.instance.id}",
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
                "body": "return {'body': {'subject': 'Contact ' + trigger.event.eventType, 'message': 'Contact ' + steps['3-get-contact'].response.body.FirstName + ' ' + steps['3-get-contact'].response.body.LastName + ' has been ' + trigger.event.eventType + '.', 'to': 'greg@cloud-elements.com', 'from': 'greg@cloud-elements.com'}}",
                "mimeType": "application/javascript"
            }
        },
        {
            "name": "5-send-email",
            "type": "elementRequest",
            "properties": {
                "elementInstanceId": "${sendgrid.instance.id}",
                "method": "POST",
                "api": "/hubs/messaging/messages/",
                "body": "${steps.4-build-email-json.body}"
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

__NOTE:__ When multiple objects are found in one event one formula execution is kicked off per object, not event. So if you have an event that found 3 objects had been updated, 3 executions will be kicked off.

In each execution `trigger.body` will contain the entire event and list of objects while `trigger.event` will contain just the single event that is to be used in the current execution.

For this reason, use `trigger.event` to access the event object data instead of `trigger.body`. `trigger.body` will contain a full list of events received together so if you use that, __be aware__ that you may need to search through a list of objects to get the current one of you could end up running the formula multiple times for one object.

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
