// TODO - JJW - re-work this page using the Formula Builder UI.  I think defining this as a place for "more complex use cases" would be good and then have a video as well as the example JSON available for download at the bottom.

---
heading: Formulas
seo: Formula Use Cases | Formulas | Cloud Elements API Docs
title: Use Cases
description: View common example use cases demonstrating the functionality of formulas.
layout: sidebarelementdoc
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 5
---

# Example Use Cases
Now that you are familiar with what a formula is and how to go about creating one, lets talk through some more complex, real-world use cases.

The first use case that will be discussed is when a contact is created in the CRM system e.g Salesforce, SugarCRM, etc., the same contact is created in the Marketing System e.g. HubSpot, MailJet, etc.

In this example, a contact will be created in Salesforce, then created in HubSpot via a Formula. This example will also show how to create a custom contact that will take custom values out of Salesforce and map them to create the new contact in HubSpot using Cloud Elements Transformations Service. This document will show screen shots with step by step directions on how to create the custom contact, map the appropriate fields for that contact,and create a Formula defining the steps needed to create a contact from a CRM System in a Marketing System.

NOTE: This page assumes you have an Element Instance created for Salesforce and HubSpot and have the Salesforce Element set up to receive events. The Salesforce and HubSpot Instance IDs are needed to instantiate a Formula. Directions on this process can be found in the [Connect Services](formulas-via-api.html) section of the Formula User Guide.

#### Create Custom Contact

Log in to [Cloud Elements](https://console.cloud-elements.com).

Select ‘My Objects’ and click ‘Add/Edit Object’.
![Create Custom Contact 1](http://cloud-elements.com/wp-content/uploads/2015/09/CreateCustomContact1.png)

Click ‘New’
![Create Custom Contact 2](http://cloud-elements.com/wp-content/uploads/2015/09/CreateCustomContact2.png)

Name the object. For this demonstration, we will name the object formulaContact.

Select object level. For this demonstration, we will select Organization (Contact will be available from the Top Level of you Company on down).

Click ‘Add Field’.

Name fields e.g. FirstName, LastName, Email, Phone. (These are the key values in Salesforce)

Select data type – for this demonstration all types will be set to ‘string’.

Click ‘Green Checkmark’.

Click ‘Save’ and close the window by clicking ‘X’ in top right corner.
![Create Custom Contact 3](http://cloud-elements.com/wp-content/uploads/2015/09/CreateCustomContact31.png)

Select ‘My Instances’.

Navigate to your HubSpot Element Instance. Click ‘Transformations’.
![Create Custom Contact 4](http://cloud-elements.com/wp-content/uploads/2015/09/CreateCustomContact4.png)

Select the custom object created, for this example, ‘formulaContact’.
![Create Custom Contact 5](http://cloud-elements.com/wp-content/uploads/2015/09/CreateCustomContact51.png)

Select ‘contacts’ from list of objects.

Select ‘Yes’ under ‘IGNORE UNMAPPED’.

Drag and drop the fields from the HubSpot contact to the formulaContact. This will map those values from the formulaContact to the new Contact that will be created in HubSpot. These values will be pulled from the values entered in Salesforce. For this example, FirstName, LastName, Email, and Phone will be mapped from Salesforce to HubSpot to create the new contact.

Click ‘Save’.
![Create Custom Contact 6](http://cloud-elements.com/wp-content/uploads/2015/09/CreateCustomContact61.png)

#### Create The Formula Template

Below is the JSON needed to create a template of this formula. Please don’t forget to view the comments in the JSON as they provide quick hints about flow. If you are unfamiliar with formula templates, please view the Formula Templates section of this document.

```json
{
  "name": "SFDC Contact to HubSpot",
  "description": "When a contact is created in Salesforce, create the contact in HubSpot.",
  "triggers": [
    {
      "type": "event",
      "properties": {
        "elementInstanceId": "${sfdc.instance.id}"
      },
      "onSuccess": [ "1-contact-filter-step" ]
    }
  ],
  "steps": [
    {
	  "name": "1-contact-filter-step",
		"type": "filter",
		"onSuccess": [ "2-create-filter-step" ],
      "properties": {
        "body": "var object = trigger.body.message.events[0].objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }"
      }
    },
    {
      "name": "2-create-filter-step",
      "type": "filter",
      "onSuccess": [ "3-get-formulaContact" ],
      "properties": {
        "body": "var action = trigger.body.message.events[0].eventType;\nif (action.toUpperCase() == 'CREATED'){ return true; } else { return false; }"
      }
    },
    {
      "name": "3-get-formulaContact",
      "type": "elementRequest",
      "onSuccess": [ "4-create-formulaContact-hubspot" ],
      "properties": {
        "elementInstanceId": "${sfdc.instance.id}",
        "path": "${trigger.body.message.events[0]}",
        "method": "GET",
        "api": "/hubs/crm/contacts/{objectId}"
      }
    },
    {
      "name": "4-create-formulaContact-hubspot",
      "type": "elementRequest",
      "properties": {
        "elementInstanceId": "${hubspot.instance.id}",
        "mimeType": "application/javascript",
        "method": "POST",
        "api": "/hubs/marketing/formulaContact",
        "body": "${3-get-formulaContact.response.body}"
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
      "name": "hubspotInstance",
      "description": "The HubSpot marketing element instance",
      "type": "elementInstance",
      "key": "hubspot.instance.id"
    }
  ]
}
```

We use the POST /formulas API to create the template. An example request can be seen below. Be sure to include your formula-template JSON (the Formula Template shown above) in your request.

```
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @formula-template.json
'https://api.cloud-elements.com/elements/api-v2/formulas'
```

Example of Successful Response:

```json
[
  {
    "id": 190,
    "name": "SFDC Contact to HubSpot",
    "description": "When a contact is created or updated in Salesforce, create or update the contact in HubSpot.",
    "userId": 9723,
    "accountId": 9834,
    "createdDate": "2015-09-21T22:31:40Z",
    "steps": [
      {
        "onSuccess": [
          "2-create-filter-step"
        ],
        "onFailure": [],
        "id": 721,
        "name": "1-contact-filter-step",
        "formulaId": 155,
        "type": "filter",
        "properties": {
          "body": "var object = trigger.body.message.events[0].objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }"
        }
      },
      {
        "onSuccess": [
          "3-get-formulaContact"
        ],
        "onFailure": [],
        "id": 722,
        "name": "2-create-filter-step",
        "formulaId": 155,
        "type": "filter",
        "properties": {
          "body": "var action = trigger.body.message.events[0].eventType;\nif (action.toUpperCase() == 'CREATED'){ return true; } else { return false; }"
        }
      },
      {
        "onSuccess": [
          "4-create-formulaContact-hubspot"
        ],
        "onFailure": [],
        "id": 723,
        "name": "3-get-formulaContact",
        "formulaId": 155,
        "type": "elementRequest",
        "properties": {
          "method": "GET",
          "elementInstanceId": "${sfdc.instance.id}",
          "api": "/hubs/crm/contacts/{objectId}",
          "path": "${trigger.body.message.events[0]}"
        }
      },
      {
        "onSuccess": [],
        "onFailure": [],
        "id": 724,
        "name": "4-create-formulaContact-hubspot",
        "formulaId": 155,
        "type": "elementRequest",
        "properties": {
          "body": "${3-get-formulaContact.response.body}",
          "method": "POST",
          "elementInstanceId": "${hubspot.instance.id}",
          "api": "/hubs/marketing/formulaContact"
        }
      }
    ],
    "triggers": [
      {
        "id": 100,
        "type": "event",
        "formulaId": 155,
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
    "singleThreaded": false,
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
        "key": "hubspot.instance.id",
        "name": "hubspotInstance",
        "type": "elementInstance",
        "description": "The HubSpot marketing element instance"
      }
    ]
  }
]
```

The Formula Template ID is needed to create an instance. Please make note of the Formula Template ID.

#### Create Formula Instance

Once the Formula Template has been created, an instance of that Formula can now be created. The Salesforce and HubSpot Element Instance IDs are needed in the JSON payload configuration to associate this Formula with those two Elements.

Below is the instance-formula JSON needed to create a Formula Instance:

```json
{
    "name": "Demo",
    "configuration": {
        "sfdc.instance.id": "123",
        "hubspot.instance.id": "345"
    }
}
```

To create an Instance of a Formula, use the POST /formulas/{id}/instances API. In our example above, the Formula Instance ID is 190. This ID will be included as a URL parameter in the request.

Below is an example request:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @instance-formula.json
'https://api.cloud-elements.com/elements/formulas/190/instances'
```
Example of Successful Response:

```json
{
  "id": 100,
  "formula": {
    "id": 190,
    "active": true
  },
  "name": "Demo",
  "createdDate": "2015-09-15T18:09:32Z",
  "active": true,
  "configuration": {
    "huspot.instance.id": "345",
    "sfdc.instance.id": "123"
  }
}
```
Once an Instance of the Formula has been created, create a contact in Salesforce via API or UI. For this example, creating via API will be shown.  This request will trigger the formula steps and an email will be delivered to the user.

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

```json
{
  "Email": "jon@acme.com",
  "Phone": "333-333-3333",
  "FirstName": "Jon",
  "LastName": "Smith",
  "Id": "003i000IhAAI"
}
```

Log in to HubSpot and view your newly created contact.

More example use cases will be coming soon.  What would you like to see next?  [Contact us](mailto:support@cloud-elements.com) with your example use case.
