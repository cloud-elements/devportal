---
heading: Building Formulas
seo: Formula Steps | Formula Step Types | Cloud Element Formulas
title: Formula Triggers, Steps, and Variables JSON
description: Reference for Triggers, Steps, and Variables
layout: sidebarleft
uiContentVersion: reference
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
redirect_from:
  - /docs/guides/formulasC2/referenceapi.html
order: 18
---

# Triggers, Steps, and Variables

{% include Formulas/reference-intro.md%}

{% include callout.html content="<strong>On this page</strong></br><a href=#json-example>JSON Example</a></br><a href=#triggers>Triggers</a></br><a href=#step-types>Step Types</a></br><a href=#formula-variables>Formula Variables</a>" type="info" %}


## JSON Example

You can build a formula with an API request to the `POST /formulas` endpoint. Your formula JSON includes the triggers, steps and variables that make up your formula. The `configuration` object contains your variables, while the `triggers` and `steps` objects contain their relevant information. See the sample file below:

```json
{
  "name": "Formula Name",
  "description": "Formula Description.",
  "configuration": [{
      "name": "instanceName",
      "type": "elementInstance",
      "key": "instanceName"
    },
    {
      "name": "instanceName2",
      "type": "elementInstance",
      "key": "instanceName2"
    }{
      "name": "valueName",
      "type": "value",
      "key": "valueName"
    }
  ],
  "triggers": [{
    "type": "event",
    "properties": {
      "elementInstanceId": "${instanceName}"
    },
    "onSuccess": ["step1"]
  }],
  "steps": [{
      "name": "step1",
      "type": "filter",
      "properties": {
        "body": "done(trigger.event.eventType === 'UPDATED' && trigger.event.objectType === 'Contact');"
      },
      "onSuccess": [ "step2" ]
    },
    {
      "name": "step2",
      "type": "script",
      "properties": {
        "body": "done({\n  \"subject\": \"CRM Event Occurred\",\n  \"to\": \"recipient@cloud-elements.com\",\n  \"from\": \"sender@cloud-elements.com\",\n  \"message\": `${trigger.event.objectType} with ID ${trigger.event.objectId} was ${trigger.event.eventType}`\n});"
      },
      "onSuccess": ["step3"]
    },
    {
      "name": "step3",
      "type": "elementRequest",
      "properties": {
        "method": "POST",
        "elementInstanceId": "${instanceName2}",
        "api": "/messages",
        "body": "${steps.step2}"
      }
    }
  ]
}


```

## Triggers

Triggers are the actions that kick off a formula. Triggers can be one of the following types:

* [Event](#event)
* [Element Request](#element-request)
* [Scheduled](#scheduled)
* [Manual](#manual)

### Event

You can set up triggers that listen for an event to happen on an element instance. To set up this trigger, you must use an Element Instance Variable that, when specified in a formula instance, refers to an element instance that is configured to use webhooks or polling to listen for events.

To set up an Event trigger:

* Specify the `type` as `event`.
* For  `elementInstanceId` include the Element Instance Variable that triggers the formula.

```json
{
  "triggers": [
    {
      "type": "event",
      "properties": {
      "elementInstanceId": "${config.crmElement}"
    },
  "onSuccess": ["step1"]
    }
  ]
}
```

If an Event trigger's Element Instance is set up for polling instead of webhooks, then each object that is found while polling triggers a separate formula execution. For example, if the poller finds five changes, five different formula executions kick off.

To see event triggers in action, see the following examples:

* [CRM to Messages](examples.html)
* [Add New Contact Created in One System to Another](examples.html#add-new-contact-created-in-one-system-to-another)

{% include Formulas/scope-trigger-event.md %}

### Element Request

Triggered any time a specific API call is made to a given Element Instance. To set up this trigger, you must use an Element Instance Variable that, when specified in a formula instance, refers to an element instance.

To set up an Element Request trigger:

* Specify the `type` as `elementRequest`.
* In `properties`:
  * For `elementInstanceId`, include the Element Instance Variable that triggers the formula.
  * For `method`, specify a valid API verb. {{site.data.table-desc.formula-method}}
  * For `api` enter the endpoint, such as `hubs/crm/contacts`

```json
{
   "triggers":[
      {
         "type":"elementRequest",
         "properties":{
            "method":"POST",
            "elementInstanceId":"${config.crmInstance}",
            "api":"/contacts"
         },
         "onSuccess":[
            "step1"
         ]
      }
   ]
}
  ```

### Scheduled

Triggered at times specified by a Cron job. We recommend that you review the many reference pages for Cron jobs online.

{% include note.html content=" The minimum scheduled frequency is 15 minutes." %}

In general, the Cron format consists of:

| Minute </br>0-59| Hour</br>0-23   | Day of Month</br>1-31   | Month of Year</br>1-12   | Day of Week</br>1-7</br>Monday-Sunday   | Year</br>1900-3000   |
| :------------- | :------------- | :------------- | :------------- | :------------- |:------------- |
|  \*  |  \*  |  \*  |  \*  |  \*  |  \*  |

#### Examples

* Run each minute

        	0 0/1 * 1/1 * ? *

* Run every Monday at noon

        0 0 12 ? * MON *

* 8.00 PM every weekday (Mon-Fri):

        	0 0 8 ? * MON,TUE,WED,THU,FRI *

* midnight on 1st ,10th & 15th of month

        0 0 0 1,10,15 1/1 ? *

To set up a Schedule trigger:

* Specify the `type` as `scheduled`.
* For `cron` enter a cron string.

```json
{
	"triggers": [{
		"type": "scheduled",
		"properties": {
			"cron": "0 0 12 ? * MON *"
		},
		"onSuccess": ["step1"]
	}]
}
  ```

To see a Scheduled trigger in action, see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)


### Manual

Triggered via a manual API call to `POST /formulas/instances/:id/executions`. Manual triggers do not require any specific configuration. You can use formulas triggered manually as synchronous API calls. See [Formula as a Resource](faar.html) for setup instructions.

To set up a Manual trigger specify the `type` as `manual`.

```json
{
   "triggers":[
      {
         "type":"manual",
         "properties":{

         },
         "onSuccess":[
            "step1"
         ]
      }
   ]
}
  ```

To see a Manual trigger in action, see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

## Step Types

{% include Formulas/step-types-intro.md%}

### ActiveMQ Request

The ActiveMQ Request (`amqpRequest`) step type uses the AMQP protocol to post a message to an MQ server such as RabbitMQ.

```json
{
"steps": [{
  "name": "stepName",
  "onFailure": [],
  "type": "amqpRequest",
  "properties": {
    "exchange": "MQ server exchange",
    "body": "${steps.transform-event.response}",
    "queue": "queue",
    "url": "amqp://user:pass@host:10000/vhost"
    },
  "onSuccess": ["nextStepName"]
  }]
}
```

When you set up an ActiveMQ Request step, include the following information:

{% include Formulas/table-amq.md %}

{% include Formulas/scope-amq.md %}

### Element API Request

The Element API Request (`elementRequest`) step makes an API call to a specific Element Instance.

```json
{
"steps": [{
  "name": "stepName",
  "onFailure": [],
  "type": "elementRequest",
  "properties": {
    "elementInstanceId": "${config.elementVariable}",
    "method": "POST",
    "api": "/messages",
    "headers": "Header content",
    "query": "query string",
    "path": "path string",
    "body": "Body content",
    "acceptableStatusCodes": "200,201",
    "retry": "true",
    "retryAttempts": "5",
    "retryDelay": "401",
    "retryStatusCodes": "500,501"
    },
  "onSuccess": ["nextStepName"]
  }]
}
```

To see an Element API Request step in action see:

* [CRM to Messages](examples.html#crm-to-messages)
* [Add New Contact Created in One System to Another](examples.html#add-new-contact-created-in-one-system-to-another)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)


When you set up an Element API Request step, include the following information:

{% include Formulas/table-element-request.md %}

{% include Formulas/scope-elementRequest.md %}

### HTTP Request

The HTTP Request (`httpRequest`) step make an HTTP/S call to any URL/endpoint.

```json
{
"steps": [{
  "name": "stepName",
  "onFailure": [],
  "type": "httpRequest",
  "properties": {
    "method": "POST",
    "url": "https://mycoolapp.com/api",
    "headers": "Header content",
    "query": "query string",
    "path": "path string",
    "body": "Body content",
    "acceptableStatusCodes": "200,201",
    "retry": "true",
    "retryAttempts": "5",
    "retryDelay": "401",
    "retryStatusCodes": "500,501"
    },
  "onSuccess": ["nextStepName"]
  }]
}
```

When you set up an HTTP Request step, include the following information:

{% include Formulas/table-http-request.md %}

{% include Formulas/scope-httpRequest.md %}

### JS Filter
Use the JS Filter (true/false) (`filter`) step to write custom Javascript that *must* return true or false. As with all steps, you must include a name. See [Javascript in Formulas](javascript.html) for more information about working with Javascript in formulas.

Use JS Filter steps to specify only certain event types, field values, or other information. You can also use filters to split formulas into different paths.

* If a filter returns `true`, the formula executes the left, or OnSuccess <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">, step.
* If a filter returns `false`, the formula executes the tight, or OnFailure <img src="img/btn-onFailure.png" alt="OnFailure" class="inlineImage">, step.

```json
{
		"name": "stepName",
		"onFailure": [],
		"type": "filter",
		"properties": {
			"body": "Javacript, for example: let status = trigger.args.status;\n\nif (status && status === \"COMPLETED\") {\n  done(true);\n} else {\n  done(false);\n}"
		},
		"onSuccess": ["nextStepName"]
}
```

To see a JS Filter step in action see:

* [Add New Contact Created in One System to Another](examples.html#add-new-contact-created-in-one-system-to-another)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

{% include Formulas/scope-filter.md %}

### JS Script

Use the JS Script (`script`) step to write custom Javascript that *must* pass a valid JSON object to the `done` callback. As with all steps, you must include a name. See [Javascript in Formulas](javascript.html) for more information about working with Javascript in formulas.

```json
{
	"steps": [{
		"name": "stepName",
		"onFailure": [],
		"type": "script",
		"properties": {
			"body": "Javacript, for example: done({\n  \"subject\": \"CRM Event Occurred\",\n  \"to\": \"recipient@gmail.com\",\n  \"from\": \"sender@cloud-elements.com\",\n  \"message\": `${trigger.event.objectType} with ID ${trigger.event.objectId} was ${trigger.event.eventType}`\n});"
		},
		"onSuccess": ["nextStepName"]
	}]
}
  ```
  {% include note.html content="If you use <code>console.log</code> in a JS Script step, the output is added to the body of the step. If you reference the script step in another step as just <code>${steps.stepName}</code>, the <code>console.log</code> output is added to the step context and can cause errors. Prevent this by declaring what to include in the step body by adding it to <code>done</code>.  For example, <code>done({body.variableName})</code>.  " %}

To see a JS Script step in action see:

* [CRM to Messages](examples.html#crm-to-messages)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

{% include Formulas/scope-script.md %}

### Loop Over Variable

Use the Loop Over Variable (`loop`) step to loop over a list of objects from a previous step or trigger. Set `onSuccess` to the first step in the loop. When you have reached the last step in the loop set the onSuccess field to the loop step, this will restart the loop for the next object. If you need to continue on after the loop is completed, set `onFailure` to the next step to execute after the loop is completed. For a loop step, `onFailure` is executed when the loop has been executed for all objects in the list.

```json
{
	"steps": [{
		"name": "stepName",
		"onFailure": [],
		"type": "loop",
		"properties": {
			"list": "steps.step1.body"
		},
		"onSuccess": ["nextStepName"]
	}]
}
  ```

  When you set up a Loop Over Variable step, include the following information:

  {% include Formulas/table-loop.md %}

  {% include Formulas/scope-loop.md %}

### Platform API Request

The Platform API Request (`request`) step makes an API call to one of our platform APIs.

```json
{
"steps": [{
  "name": "stepName",
  "onFailure": [],
  "type": "request",
  "properties": {
    "elementInstanceId": "${config.elementVariable}",
    "method": "POST",
    "api": "/instances",
    "headers": "Header content",
    "query": "query string",
    "path": "path string",
    "body": "Body content",
    "acceptableStatusCodes": "200,201",
    "retry": "true",
    "retryAttempts": "5",
    "retryDelay": "401",
    "retryStatusCodes": "500,501"
    },
  "onSuccess": ["nextStepName"]
  }]
}
```

When you set up a Platform API Request step, include the following information:

{% include Formulas/table-element-request.md %}

{% include Formulas/scope-request.md %}

### Retry Formula on Failure

Retry Formula on Failure (`retryFormulaExecution`) retries a formula instance execution with the same input data. You can configure the number of retry attempts, with a maximum of 7 attempts. The retry time is set based upon an exponential backoff in minutes. The equation used for the exponential backoff is `round(e^x)` where `x` is the retry attempt number.

```json
{
"steps": [{
  "name": "stepName",
  "onFailure": [],
  "type": "retryFormulaExecution",
  "properties": {
    "retryAttempts": "5"
    },
  "onSuccess": ["nextStepName"]
  }]
}
```

When you set up a Retry Formula on Failure step, include the following information:

{% include Formulas/table-retry.md %}

{% include Formulas/scope-retry.md %}

### Stream File

Stream File (`elementRequestStream`) steps move a file from one Element Instance to another. Stream Files steps configure two API requests instead of just one. One request downloads the date from an element instance, and the second request uploads the data to another. Use the response body of the download request as the request body of the upload request.

```json
{
"steps": [{
  "name": "stepName",
  "onFailure": [],
  "type": "elementRequestStream",
  "properties": {
		"uploadElementInstanceId": "${config.uploadElementVariable}",
		"uploadMethod": "POST",
		"downloadQuery": "Query string",
		"uploadQuery": "Query string",
		"uploadApi": "/bulk/${config.objectname}",
		"uploadHeaders": "${steps.previousStep.uploadHeaders}",
		"uploadFormData": "${steps.previousStep.formData}",
		"downloadMethod": "GET",
		"downloadElementInstanceId": "${config.downloadElementVariable}",
		"downloadHeaders": "${steps.previousStep.downloadHeaders}",
		"uploadFormDataName": "${steps.previousStep.formParameter}",
		"downloadApi": "/bulk/${trigger.args.id}/${config.objectname}"
    },
  "onSuccess": ["nextStepName"]
  }]
}
```

To see a Stream File step in action see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data).

When you set up a Stream File step, include the following information:

{% include Formulas/table-stream.md %}

{% include Formulas/scope-stream.md %}

### Sub-Formula <img src="img/step-icon-sub.png" alt="Alt Text" class="inlineImage">

Sub-Formula (`formula`) steps run another formula instance.

```json
{
"steps": [{
  "name": "stepName",
  "onFailure": [],
  "type": "formula",
  "properties": {
		"formulaId": "11448"
    },
  "onSuccess": ["nextStepName"]
  }]
}
```

When you set up a Sub-Formula step, include the following information:

{% include Formulas/table-formula.md %}

{% include Formulas/scope-formula.md %}

## Formula Variables

Formulas include two types of variables that you must specify when you run a formula instance:

* Element Instance Variable: A variable that is replaced by a specific element when you run a formula instance.
* Value Variable: A variable that is replaced by a configurable value when you run a formula instance.

Formula variables are limited to the formula and cannot have the same name. However, you can name variables in different formulas with the same name like "originInstance" or "destinationInstance."
