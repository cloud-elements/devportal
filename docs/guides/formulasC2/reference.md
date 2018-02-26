---
heading: Building Formulas
seo: Formula Steps | Formula Step Types | Cloud Element Formulas
title: Formula Triggers, Steps, and Variables
description: Reference for Triggers, Steps, and Variables
layout: sidebarleft
restContentVersion: referenceAPI.html
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
redirect_from:
  - /docs/guides/formulas/forumulaSteps.html
order: 15
---

# Triggers, Steps, and Variables

{% include Formulas/reference-intro.md%}

{% include callout.html content="<strong>On this page</strong></br><a href=#triggers>Triggers</a></br><a href=#step-types>Step Types</a></br><a href=#formula-variables>Formula Variables</a>" type="info" %}

## Triggers

Triggers are the actions that kick off a formula. Triggers can be one of the following types:

* [Event](#event)
* [Element Request](#element-request)
* [Scheduled](#scheduled)
* [Manual](#manual)

### Event <img src="img/trigger-icon-event.png" alt="Event" class="inlineImage">

You can set up triggers that listen for an event to happen on an element instance. To set up this trigger, you must use an Element Instance Variable that, when specified in a formula instance, refers to an element instance that is configured to use webhooks or polling to listen for events.

To set up an Event trigger, you must specify an Element Instance Variable. Click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage"> to find or create a variable to represent the element instance that will kick off a formula instance when an event occurs.

If an Event trigger's Element Instance is set up for polling instead of webhooks, then each object that is found while polling triggers a separate formula execution. For example, if the poller finds five changes, five different formula executions kick off.

To see event triggers in action, see the following examples:

* [CRM to Messages](examples.html)
* [Add New Contact Created in One System to Another](examples.html#add-new-contact-created-in-one-system-to-another)

{% include Formulas/scope-trigger-event.md %}

### Element Request <img src="img/trigger-icon-erequest.png" alt="Element Request" class="inlineImage">

Triggered any time a specific API call is made to a given Element Instance. To set up this trigger, you must use an Element Instance Variable that, when specified in a formula instance, refers to an element instance.

When you set up an Element Request trigger, specify the following parameters:

* Element Instance Variable: Click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage"> to find or create a variable to represent the element that will kick off a formula instance when the specified API call occurs.
* Method:  {{site.data.table-desc.formula-method}}.
* API: The endpoint, such as `hubs/crm/contacts`.

### Scheduled <img src="img/trigger-icon-scheduled.png" alt="Scheduled" class="inlineImage">

Triggered at times specified by a Cron job. We recommend that you review the many reference pages for Cron jobs online.

{% include note.html content=" The minimum scheduled frequency is 15 minutes." %}

In general, the Cron format consists of:

| Minute </br>0-59| Hour</br>0-23   | Day of Month</br>1-31   | Month of Year</br>1-12   | Day of Week</br>1-7</br>Monday-Sunday   | Year</br>1900-3000   |
| :------------- | :------------- | :------------- | :------------- | :------------- |:------------- |
|  \*  |  \*  |  \*  |  \*  |  \*  |  \*  |

#### Examples

* Run every 15 minutes

        	0 0/15 * 1/1 * ? *

* Run every Monday at noon

        0 0 12 ? * MON *

* 8.00 PM every weekday (Mon-Fri):

        	0 0 8 ? * MON,TUE,WED,THU,FRI *

* midnight on 1st ,10th & 15th of month

        0 0 0 1,10,15 1/1 ? *

To see a Scheduled trigger in action, see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

### Manual <img src="img/trigger-icon-manual.png" alt="Manual" class="inlineImage">

Triggered via a manual API call to `POST /formulas/instances/:id/executions`. Manual triggers do not require any specific configuration. You can use formulas triggered manually as synchronous API calls. See [Formula as a Resource](faar.html) for setup instructions.

To see a Scheduled trigger in action, see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

## Step Types

{% include Formulas/step-types-intro.md%}

### ActiveMQ Request <img src="img/step-icon-amqpRequest.png" alt="ActiveMQ Request" class="inlineImage">

The ActiveMQ Request (`amqpRequest`) step type uses the AMQP protocol to post a message to an MQ server such as RabbitMQ.
![ActiveMQ Request](img/step-amq.png)

When you set up an ActiveMQ Request step, include the following information:

{% include Formulas/table-amq.md %}

{% include Formulas/scope-amq.md %}


### Element API Request <img src="img/step-icon-elementRequest.png" alt="Element API Request" class="inlineImage">

The Element API Request (`elementRequest`) step makes an API call to a specific Element Instance.
![Element API Request](img/step-elementRequest.png)

To see an Element API Request step in action see:

* [CRM to Messages](examples.html#crm-to-messages)
* [Add New Contact Created in One System to Another](examples.html#add-new-contact-created-in-one-system-to-another)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

When you set up an Element API Request step, include the following information:

{% include Formulas/table-element-request.md %}

{% include Formulas/scope-elementRequest.md %}

### HTTP Request <img src="img/step-icon-httpRequest.png" alt="HTTP Request" class="inlineImage">

The HTTP Request (`httpRequest`) step make an HTTP/S call to any URL/endpoint.
![Element API Request](img/step-httpRequest.png)

When you set up an HTTP Request step, include the following information:

{% include Formulas/table-http-request.md %}

{% include Formulas/scope-httpRequest.md %}

### JS Filter <img src="img/step-icon-filter.png" alt="JS Filter" class="inlineImage">

Use the JS Filter (true/false) (`filter`) step to write custom Javascript that *must* return true or false. As with all steps, you must include a name. See [Javascript in Formulas](javascript.html) for more information about working with Javascript in formulas.
![JS Filter](img/step-filter.png)

Use JS Filter steps to specify only certain event types, field values, or other information. You can also use filters to split formulas into different paths.

* If a filter returns `true`, the formula executes the left, or OnSuccess <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">, step.
* If a filter returns `false`, the formula executes the tight, or OnFailure <img src="img/btn-onFailure.png" alt="OnFailure" class="inlineImage">, step.

To see a JS Filter step in action see:

* [Retrieve, Transform, and Sync Contact](examples.html#add-new-contact-created-in-one-system-to-another)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

{% include Formulas/scope-filter.md %}

### JS Script <img src="img/step-icon-script.png" alt="JS Script" class="inlineImage">

Use the JS Script (`script`) step to write custom Javascript that *must* pass a valid JSON object to the `done` callback. As with all steps, you must include a name. See [Javascript in Formulas](javascript.html) for more information about working with Javascript in formulas.
![JS Script](img/step-script.png)

Use JS Script steps to build objects to use in request steps for query parameters or the request body.

{% include note.html content="If you use <code>console.log</code> in a JS Script step, the output is added to the body of the step. If you reference the script step in another step as just <code>${steps.stepName}</code>, the <code>console.log</code> output is added to the step context and can cause errors. Prevent this by declaring what to include in the step body by adding it to <code>done</code>.  For example, <code>done({body.variableName})</code>.  " %}

To see a JS Script step in action see:

* [CRM to Messages](examples.html#crm-to-messages)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

{% include Formulas/scope-script.md %}

### Loop Over Variable <img src="img/step-icon-loop.png" alt="Loop Over Variable" class="inlineImage">

Use the Loop Over Variable (`loop`) step to loop over a list of objects from a previous step or trigger. Set `onSuccess` to the first step in the loop. When you have reached the last step in the loop set the onSuccess field to the loop step, this will restart the loop for the next object. If you need to continue on after the loop is completed, set `onFailure` to the next step to execute after the loop is completed. For a loop step, `onFailure` is executed when the loop has been executed for all objects in the list.

![Loop Over Variable](img/step-loop.png)

When you set up a Loop Over Variable step, include the following information:

{% include Formulas/table-loop.md %}

{% include Formulas/scope-loop.md %}

### Platform API Request <img src="img/step-icon-request.png" alt="Alt Text" class="inlineImage">

The Platform API Request (`request`) step makes an API call to one of our platform APIs.
![Platform API Request](img/step-request.png)

When you set up a Platform API Request step, include the following information:

{% include Formulas/table-element-request.md %}

{% include Formulas/scope-request.md %}


### Retry Formula on Failure <img src="img/step-icon-retryFormulaExecution.png" alt="Retry Formula on Failure" class="inlineImage">

Retry Formula on Failure (`retryFormulaExecution`) retries a formula instance execution with the same input data. You can configure the number of retry attempts, with a maximum of 7 attempts. The retry time is set based upon an exponential backoff in minutes. The equation used for the exponential backoff is `round(e^x)` where `x` is the retry attempt number.
![Platform API Request](img/step-retryFormulaExecution.png)

When you set up a Retry Formula on Failure step, include the following information:

{% include Formulas/table-retry.md %}

{% include Formulas/scope-retry.md %}

### Stream File <img src="img/step-icon-stream.png" alt="Stream File" class="inlineImage">

Stream File (`elementRequestStream`) steps move a file from one Element Instance to another. Stream Files steps configure two API requests instead of just one. One request downloads the date from an element instance, and the second request uploads the data to another. Use the response body of the download request as the request body of the upload request.
![Stream File](img/step-elementRequestStream.png)

To see a Stream File step in action see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data).

When you set up a Stream File step, include the following information:

{% include Formulas/table-stream.md %}

{% include Formulas/scope-stream.md %}

### Sub-Formula <img src="img/step-icon-sub.png" alt="Sub-Formula" class="inlineImage">

Sub-Formula (`formula`) steps run another formula instance.
![Stream File](img/step-formula.png)


When you set up a Sub-Formula step, include the following information:

{% include Formulas/table-formula.md %}

{% include Formulas/scope-formula.md %}

## Formula Variables

Formulas include two types of variables that you must specify when you run a formula instance:

* Element Instance Variable: A variable that is replaced by a specific element when you run a formula instance.
* Value Variable: A variable that is replaced by a configurable value when you run a formula instance.

Formula variables are limited to the formula and cannot have the same name. However, you can name variables in different formulas with the same name like "originInstance" or "destinationInstance."

### Formula Variable Scope

Formula variables contribute to the formula context and you refer to them by their Formula Step Variable Name. This name is always `config.variableName`. So, if you create an Element Instance Variable called `originInstance`, you refer to it as `${config.originInstance}`. A Value Variable called `objectName` is referred to as `${config.objectName}`.
