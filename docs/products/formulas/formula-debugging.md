---
heading: Formulas
title: Formula Debugging
description: View debugging tips when working with formulas.
layout: docs
order: 20
---

### Formula Debugging

Cloud Elements offers ways to investigate the execution of each step in a formula to check for errors in steps, as well as, JSON payloads being returned.

There are a few steps to perform in order to view the formula execution that can all be done via an API call. The formula template ID is needed, as well as, the formula instance ID.

First, you can use the GET /formulas API call to view your formula template ID. The ID is located at the top of the response right above the name of the formula. Below is an example of this call.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/formulas'
```

Example of Successful Response:

```json
[
{
    "id": 190,
    "name": "SFDC Contact to HubSpot",
    "description": "When a contact is created in Salesforce, create or update the contact in HubSpot.",
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
          "body": "var object = trigger.body.message.events[0].objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }",
          "mimeType": "application/javascript"
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
          "body": "var action = trigger.body.message.events[0].eventType;\nif (action.toUpperCase() == 'CREATED'){ return true; } else { return false; }",
          "mimeType": "application/javascript"
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
          "api": "/hubs/crm/contact/{objectId}",
          "path": "${trigger.body.message.events[0]}",
          "mimeType": "application/javascript"
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
          "method": "POST",
          "elementInstanceId": "${hubspot.instance.id}",
          "body": "${3-get-formulaContact.response.body}",
          "api": "/hubs/marketing/formulaContact",
          "mimeType": "application/javascript"
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
    "active": true,
    "singleThreaded": false,
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

While retrieving the ID is one facet of this call, the response body also presents an opportunity to review the steps of the formula.

The next step is to retrieve the formula instance ID. Not be confused with the formula template ID we retrieved in the previous step. Remember a formula template is not put into action until it is instantiated.

Use the GET /formulas/instances API call to view your formula instance ID. The ID is located at the top of the response right above the name of the formula. Below is an example of this call.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/formulas'
```

Example of Successful Response:

```json
[
{
    "id": 890,
    "formula": {
      "id": 155,
      "name": "SFDC Contact to HubSpot",
      "description": "When a contact is created or updated in Salesforce, create or update the contact in HubSpot.",
      "userId": 9723,
      "accountId": 9834,
      "createdDate": "2015-09-21T22:31:40Z",
      "active": true,
      "singleThreaded": false,
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
    },
    "name": "SFDC Contact to HubSpot",
    "createdDate": "2015-09-21T22:43:58Z",
    "active": true,
    "configuration": {
      "hubspot.instance.id": "341985",
      "sfdc.instance.id": "341984"
    }
  }
]
```

In this example, the ID is ‘890’. This formula instance ID along with the formula template ID are needed to make the formula executions call.

Use the GET /formulas/{id}/instances/{instanceId}/executions API call to view all of the executions made by that formula. This will return IDs for each formula execution. To look at a specific execution, the ID of that execution is needed. The ID is located at the top of the response right above the name of the formula. Below is an example of this call.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/formulas/190/instances/890/executions'
```

Example of Successful Response:

```json
[
  {
    "id": 123456,
    "formulaInstanceId": 890,
    "createdDate": "2015-09-21T22:46:30Z",
    "updatedDate": "2015-09-21T22:46:31Z"
  },
  {
    "id": 123457,
    "formulaInstanceId": 890,
    "createdDate": "2015-09-22T16:18:40Z",
    "updatedDate": "2015-09-22T16:18:41Z"
  }
]
```

This formula has executed two times. Specific details about each of the steps including error codes and JSON payloads can be viewed by referencing the formula execution ID. The second ID in the list will be used to retrieve formula execution details.

Use the `GET /formulas/{id}/instances/{instanceId}/executions/{executionId}` API call to view all of the executions made by that formula. This will return IDs for each formula execution. To look at a specific execution, the ID of that execution is needed. The ID is located at the top of the response right above the name of the formula. Using the second ID ‘123457’ retrieved from the previous step, a sample call will be made.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/formulas/190/instances/890/executions/123457'
```

Example of Successful Response:

```json
{
  "id": 123457,
  "formulaInstanceId": 70,
  "stepExecutions": [
    {
      "id": 12348900,
      "stepExecutionValues": [
        {
          "id": 1299837,
          "key": "trigger.body",
          "value": "{\"severity\":\"medium\",\"createdDate\":\"Tue Sep 22 19:48:03 UTC 2015\",\"topic\":\"instance-341984-sfdc-events\",\"action\":\"create\",\"id\":\"162595\",\"message\":{\"elementKey\":\"sfdc\",\"eventId\":\"12345\",\"accountId\":8237,\"companyId\":928,\"instance_id\":128908,\"instanceId\":123210,\"instanceName\":\"Formula Contact\",\"raw\":{\"objects\":[{\"ST_unsubscribe__c\":false,\"LastModifiedDate\":\"2015-09-22T19:52:16.000+0000\",\"IsDeleted\":false,\"SFSSDupeCatcher__Override_DupeCatcher__c\":false,\"Email\":\"jon@acme.com\",\"IsEmailBounced\":false,\"DoNotCall\":false,\"FirstName\":\"Jon\",\"HasOptedOutOfEmail\":false,\"HasOptedOutOfFax\":false,\"ST_Unsubscribe_Value__c\":\"Blast\",\"SystemModstamp\":\"2015-09-22T19:52:16.000+0000\",\"OwnerId\":\"006i0001VNdeABG\",\"CreatedById\":\"004i0001VNdeABG\",\"Phone\":\"(444) 444-4444\",\"CreatedDate\":\"2015-09-22T19:52:16.000+0000\",\"attributes\":{\"type\":\"Contact\",\"url\":\"/services/data/v34.0/sobjects/Contact/004i002z4e3XBAQ\"},\"Id\":\"008i002z4e3XABQ\",\"LastName\":\"Smith\",\"ST_synchable__c\":false,\"LastModifiedById\":\"002i0001VNdeABG\"}],\"action\":\"insert\"},\"userId\":1234,\"events\":[{\"date\":\"2015-09-22T19:52:16Z\",\"elementKey\":\"sfdc\",\"eventType\":\"CREATED\",\"objectId\":\"008i002z4e3XABQ\",\"objectType\":\"Contact\"}]},\"user\":\"cloud-elements\"}"
        },
        {
          "id": 892807707,
          "key": "trigger.type",
          "value": "event"
        }
      ],
      "status": "success",
      "createdDate": "2015-09-22 19:48:03.912633",
      "stepName": "trigger"
    },
    {
      "id": 730771237,
      "stepExecutionValues": [],
      "status": "success",
      "createdDate": "2015-09-22 19:48:03.921208",
      "updatedDate": "2015-09-22 19:48:03.937855",
      "stepName": "1-contact-filter-step"
    },
    {
      "id": 183801490,
      "stepExecutionValues": [],
      "status": "success",
      "createdDate": "2015-09-22 19:48:03.941238",
      "updatedDate": "2015-09-22 19:48:03.958176",
      "stepName": "2-create-filter-step"
    },
    {
      "id": 787973797,
      "stepExecutionValues": [
        {
          "id": 1230098,
          "key": "3-get-formulaContact.request.body"
        },
        {
          "id": 1230099,
          "key": "3-get-formulaContact.request.headers",
          "value": "{\"Authorization\":\"Element m02akfzTVFsQXpNxHI0e1oYI2Kf1OX6UD52CwyO5Zk4=, User X6paf8FfICCPxXBz35MXNcn9B87eAWFp4r//v5jXK74=, Organization 99c50ea36917376729aadece3ef89458\",\"Elements-Formula-Request-Id\":\"2246365\",\"Elements-Formula-Execution-Id\":\"314741\",\"Elements-Formula-Id\":\"155\",\"Elements-Formula-Step\":\"3-get-formulaContact\"}"
        },
        {
          "id": 1230000,
          "key": "3-get-formulaContact.request.method",
          "value": "GET"
        },
        {
          "id": 1230002,
          "key": "3-get-formulaContact.request.uri",
          "value": "https://api.cloud-elements.com/elements/api-v2/hubs/crm/contact/008i002z4e3XABQ"
        },
        {
          "id": 1230003,
          "key": "3-get-formulaContact.response.body",
          "value": "{\"requestId\":\"5601b17ce4b0309f82411091\",\"message\":\"Not found\",\"providerMessage\":\"ERROR: NOT_FOUND - The requested resource does not exist\"}"
        },
        {
          "id": 1230004,
          "key": "3-get-formulaContact.response.code",
          "value": "404"
        },
        {
          "id": 1230005,
          "key": "3-get-formulaContact.response.headers",
          "value": "{\"date\":\"Tue, 22 Sep 2015 20:02:31 GMT\",\"content-length\":\"139\",\"set-cookie\":\"JSESSIONID=73CC2427FF16FEA53C536FDC8E1-n1.elements7; Path=/elements/; HttpOnly\",\"server\":\"nginx/1.6.0\",\"elements-request-id\":\"5601b17ce4b0309f8091\",\"connection\":\"keep-alive\",\"content-type\":\"application/json;charset=UTF-8\",\"Content-Type\":\"application/json\"}"
        }
      ],
      "status": "failed",
      "createdDate": "2015-09-22 19:48:04.044512",
      "updatedDate": "2015-09-22 19:48:05.494155",
      "stepName": "3-get-formulaContact"
    }
  ],
  "createdDate": "2015-09-22T19:48:03Z",
  "updatedDate": "2015-09-22T19:48:05Z"
}
```

The response will display each step and whether or not the step was successful. If a failure occurred, an error code is returned with a status message. In this example, the formula failed at the 3-get-formulaContact. Upon closer inspection, the path to the resource in Salesforce is not correct. Let’s take a look:

The path in our current URL in step 3 is ‘https://api.cloud-elements.com/elements/api-v2/hubs/crm/contact/008i002z4e3XABQ’. We have the correct object ID. This can be found in the response body of the first step of the formula, but ‘contact’ should be ‘contacts’ in the URL.

The formula template will need to be updated with the correct URL in step 3.

Formula templates can be updated using the `PUT /formulas/{id}` API. Simply make the change in the formula template JSON and include it with the API call. An example call can be seen below with contact changed to contacts in the URL of step 3.

```bash
curl -X PUT
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @formula-template.json
'https://api.cloud-elements.com/elements/api-v2/formulas/190'
```

Corrected Formula Template JSON:

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
      "onSuccess": [
        "1-contact-filter-step"
      ]
    }
  ],

  "steps": [
    {
	  "name": "1-contact-filter-step",
		"type": "filter",
		"onSuccess": [
			"2-create-filter-step"
		],
      "properties": {
        "mimeType": "application/javascript",
        "body": "var object = trigger.body.message.events[0].objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }"
      }
    },
    {
      "name": "2-create-filter-step",
      "type": "filter",
      "onSuccess": [
        "3-get-formulaContact"
      ],
      "properties": {
        "mimeType": "application/javascript",
        "body": "var action = trigger.body.message.events[0].eventType;\nif (action.toUpperCase() == 'CREATED'){ return true; } else { return false; }"
      }
    },
    {
      "name": "3-get-formulaContact",
      "type": "elementRequest",
      "onSuccess": [
        "4-create-formulaContact-hubspot"
      ],
      "properties": {
        "elementInstanceId": "${sfdc.instance.id}",
        "path": "${trigger.body.message.events[0]}",
        "mimeType": "application/javascript",
        "method": "GET",
        "api": "/hubs/crm/contacts/{objectId}"  //Corrected URL to contacts
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

Example of Successful Response:

```json
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
          "body": "var object = trigger.body.message.events[0].objectType;\nif (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }",
          "mimeType": "application/javascript"
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
          "body": "var action = trigger.body.message.events[0].eventType;\nif (action.toUpperCase() == 'CREATED'){ return true; } else { return false; }",
          "mimeType": "application/javascript"
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
          "path": "${trigger.body.message.events[0]}",
          "mimeType": "application/javascript"
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
          "method": "POST",
          "elementInstanceId": "${hubspot.instance.id}",
          "body": "${3-get-formulaContact.response.body}",
          "api": "/hubs/marketing/formulaContact",
          "mimeType": "application/javascript"
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
    "active": true,
    "singleThreaded": false,
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

The formula can be executed again with the creation of a contact in Salesforce. Since the correct URL is now present, the contact will be created successfully in HubSpot.

Each of the API calls displayed above can be made in our API Manager Console.

Log in to the Console.

Navigate to ‘Platform APIs’, then select ‘Formulas’. All available formula APIs can be executed.
![Formula APIs](http://cloud-elements.com/wp-content/uploads/2015/09/FormulaAPICalls.png)

##### COMMON DEBUGGING TECHNIQUES

Below is a list of common debugging techniques.

* View specific formula executions by ID
    * If applicable review the response bodies that come back within each step
    * View error codes and messages for each step
* Review steps or formula template and make sure logic is sound
* Check to make sure the JSON for an object like a contact is correct
    * Perform a GET /contacts call for an endpoint and check to make sure the JSON matches the JSON on the formula step
    * If it is a custom object, perform a GET /{objectName} call to that endpoint to check the object fields are returning correctly

[Cloud Elements Support](mailto:support@cloud-elements.com) is always here to help, so please don’t hesitate to email us with questions or concerns.
