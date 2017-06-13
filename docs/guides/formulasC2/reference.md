---
heading: Formulas
seo: Formula Steps | Formula Step Types | Cloud Element Formulas
title: Formula Triggers, Steps, and Variables
description: Reference for Triggers, Steps, and Variables
layout: sidebarleft
restContentVersion: referenceAPI
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 10
---

# Triggers, Steps, and Variables

Formulas are comprised of triggers that kick off formulas, steps that the trigger executes, and variables used to define inputs to the formula instance. The triggers, steps, and variables build up context that you can refer to as you build a formula. For example, a JS Script step might build a JSON payload that you can refer to in a later step as `$steps.stepName`. You can refer to variables as `$config.variableName`.

This sections provides configuration information about each formula component.

{% include callout.html content="<strong>On this page</strong></br><a href=#triggers>Triggers</a></br><a href=#steps>Steps</a></br><a href=#formula-variables>Formula Variables</a>" type="info" %}

## Triggers

Triggers are the actions that kick off a formula. Triggers can be one of the following type:

* [Event](#event)
* [Element Request](#element-request)
* [Scheduled](#scheduled)
* [Manual](#manual)

### Event

You can set up triggers that listen for an event to happen on an element instance. To set up this trigger, you must use an Element Instance Variable that, when specified in a formula instance, refers to an element instance that is configured to use webhooks or polling to listen for events.

To set up an Event trigger, you must specify an Element Instance Variable. Click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage"> to find or create a variable to represent the element instance that will kick off a formula instance when an event occurs.

If an Event trigger's Element Instance is set up for polling instead of webhooks, then each object that is found while polling triggers a separate formula execution. For example, if the poller finds five changes, five different formula executions kick off.


To see event triggers in action, see the following examples:

* [CRM to Messages](examples.html)
* [Retrieve, Transform, and Sync Contact](examples.html#retrieve-transform-and-sync-contact)

### Element Request

Triggered anytime a specific API call is made to a given Element Instance. To set up this trigger, you must use an Element Instance Variable that, when specified in a formula instance, refers to an element instance.

When you set up an Element Request trigger, specify the following parameters:

* Element Instance Variable: Click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage"> to find or create a variable to represent the element that will kick off a formula instance when the specified API call occurs.
* Method:  {{site.data.table-desc.formula-method}}.
* API: The endpoint, such as `hubs/crm/contacts`.

### Scheduled

Triggered at times specified by a Cron job. We recommend that you review the many reference pages for Cron jobs online.

{% include note.html content=" The minimum scheduled frequency is 15 minutes." %}

In general, the Cron format consists of:

| Minute </br>0-59| Hour</br>0-23   | Day of Month</br>1-31   | Month of Year</br>1-12   | Day of Week</br>1-7</br>Monday-Sunday   | Year</br>1900-3000   |
| :------------- | :------------- | :------------- | :------------- | :------------- |:------------- |
|  \*  |  \*  |  \*  |  \*  |  \*  |  \*  |

#### Examples

* Run each minute

        * * * * * *

* Run every Monday at noon

        0 12 * * 1 *

* 8.00 PM every weekday (Mon-Fri) only in December:

        0	20	*	12	1-5

* midnight on 1st ,10th & 15th of month

        0	0	1,10,15	*	*

To see Scheduled trigger in action, see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)


### Manual

Triggered via a manual API call to `POST /formulas/instances/:id/executions`. Manual triggers do not require any specific configuration.

To see a Scheduled trigger in action, see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

## Step Types

You can choose from several different types of steps to make up your formula. You can refer to any step with the `$steps.stepName syntax`. Because you refer to the step by name, each step name must be unique within each formula. However, you can reuse a step in name in a different formula.

You can use the following types of steps in your formulas:

* [ActiveMQ Request](#activemq-request)
* [Element API Request](#element-api-request)
* [HTTP Request](#http-request)
* [JS Filter](#js-filter)
* [JS Script](#js-script)
* [Loop Over Variable](#loop-over-variable)
* [Platform API Request](#platform-api-request)
* [Retry Formula on Failure](#retry-formula-on-failure)
* [Stream](#stream-file)
* [Sub-Formula](#sub-formula)


### ActiveMQ Request

The ActiveMQ Request (amqpRequest) uses the AMQP protocol to post a message to an MQ server such as RabbitMQ.

{% include note.html content="The ActiveMQ Request's type in the JSON is amqpRequest." %}

When you set up an ActiveMQ Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.step-name}}  | Y |
|  URL  |  Specifies the AMQP URL endpoint of the MQ Server. The structure of the URL is specified in [RabbitMQ URI Specification]( https://www.rabbitmq.com/uri-spec.html)  | Y |
|  Queue  |  Indicates the name of the queue of the MQ server to which the message should be posted.  | Y |
|  Message  |  The JSON payload to post to the server.  | Y |
|  Exchange  |  The name of the MQ server exchange to which the message should be posted.  | N |

### Element API Request

This step makes an API call to a specific Element Instance.

To see an Element API Request step in action see:

* [CRM to Messages](examples.html#crm-to-messages)
* [Retrieve, Transform, and Sync Contact](examples.html#retrieve-transform-and-sync-contact)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)


When you set up an Element API Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.step-name}}  | Y |
|  Element Instance Variable  |  Specifies the element instance that receives the API call.  | Y |
|  Method  |  {{site.data.table-desc.formula-method}} | Y |
|  API  |  The endpoint, such as `hubs/crm/contacts`.  | Y |
|  Headers  |  {{site.data.table-desc.formula-headers}}  | N |
|  Query  |  {{site.data.table-desc.formula-query}}  | N |
| Path | {{site.data.table-desc.formula-path}} | N |
| Body | {{site.data.table-desc.formula-body}} | N |
| Acceptable Codes | {{site.data.table-desc.acceptable-codes}} | N |
| Retry on Failure | {{site.data.table-desc.retry-failure}} | N |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |
| Retry Delay | {{site.data.table-desc.retry-delay}}  | N |
| Retry Status Codes | {{site.data.table-desc.retry-failure}} | N |


### HTTP Request

Makes an HTTP/S call to any URL/endpoint. <span style="color:red">Why? When would you use this? The info in Skeletor calls this an API call.</span>

When you set up an HTTP Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
|  Method  |  {{site.data.table-desc.method}} | Y |
| HTTP/S URL | The full URL of the request. | Y |
|  Headers  |  {{site.data.table-desc.headers}}  | N |
|  Query  |  {{site.data.table-desc.query}}  | N |
| Path | {{site.data.table-desc.path}} | N |
| Body | {{site.data.table-desc.body}} | N |
| Acceptable Codes | {{site.data.table-desc.acceptable-codes}} | N |
| Retry on Failure | {{site.data.table-desc.retry-failure}} | N |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |
| Retry Delay | {{site.data.table-desc.retry-delay}}  | N |
| Retry Status Codes | {{site.data.table-desc.retry-failure}} | N |

### JS Filter
Use the JS Filter (true/false) step to write custom Javascript that *must* return true or false. As with all steps, you must include a name.

* If a filter returns `true`, the formula executes the left, or success, step.
* If a filter returns `false`, the formula executes the tight, or failure, step.

To see a JS Filter step in action see:

* [Retrieve, Transform, and Sync Contact](examples.html#retrieve-transform-and-sync-contact)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)


<span style="color:red">This could use an example: filtering CRM email example</span>

### JS Script

Use the JS Script step to write custom Javascript that *must* pass a valid JSON object to the `done` callback. As with all steps, you must include a name.

To see a JS Script step in action see:

* [CRM to Messages](examples.html#crm-to-messages)
* [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data)

The javascript here is powered by Node.js and has the following packages available to it:

<span style="color:red">Still accurate? What about the library below? Is it the same across all areas of the app?</span>

* CE: Our custom library that provides some common functionality. It is not necessary to `require` this library, it is available by default.
 * `CE.randomString()`: Generate a random string (approx. 10 characters long).
 * `CE.randomEmail()`: Generate a random email address.
 * `CE.md5(str)`: Create an MD5 hash from a string value. Takes a `string` as a parameter. Returns a `string`.
 * `CE.b64(str)`: Encode a string in base64. Takes a `string` as a parameter. Returns a `string`.
 * `CE.hmac(algo)(enc)(secret, str)`: HMAC hash a string (_str_) using the provided secret (_secret_), algorithm (_algo_), and encoding (_enc_). See https://nodejs.org/api/crypto.html#crypto_class_hmac for more information about the algorithm and encoding parameters.
 * `CE.hmac[algo][enc](secret, str)`: This is a set of convenience functions that allow HMAC hashing using some common algorithms and encodings. For example, `CE.hmacSha1Hex(secret, str)` will create an HMAC SHA1 hash of the provided string, using the provided secret, and return a hex string.  You can replace _algo_ and _enc_ with the following values:
 _algo_: `Sha1`, `Sha256`, `Md5`
 _enc_: `Hex`, `base64`
* Lodash: The popular `lodash` library. To use this library, simply `require` it in your script. It is possible to use the library modules, as well, such as `lodash/fp`.
* Util: The standard Node `util` library. To use, `require` it in your script.

### Loop Over Variable

Use the Loop Over Variable step to loop over a list of objects from a previous step or trigger.

When you set up an Element API Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
|  List  |  A list of objects to loop over. <span style="color:red">Comma separated, any particular format or limitations?</span> | Y |

refers to something
${steps.presviousScript.someNumber} (previous script step returns a number\

${config.variableName}

formula context built up as you travers the formulas




<span style="color:red">Confirm this info... lots of questions here.</span>

To Use a loop step:

* You must provide it with a list of objects to loop over.
* Set the `onSuccess` field to the first step in the loop.
* When you have reached the last step in the loop set the `onSuccess` field to the loop step, this will restart the loop for the next object.
* If you need to continue on after the loop is completed, you can set the loop step onFailure to the next step to execute after the loop is completed. For a loop step, `onFailure` is executed when the loop has been executed for all objects in the list.

### Platform API Request

Makes an API call to one of our platform APIs.

When you set up an Platform API Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
|  Method  |  {{site.data.table-desc.method}} | Y |
|  API  |  The endpoint, such as `hubs/crm/contacts`.  | Y |
|  Headers  |  {{site.data.table-desc.headers}}  | N |
|  Query  |  {{site.data.table-desc.query}}  | N |
| Path | {{site.data.table-desc.path}} | N |
| Body | {{site.data.table-desc.body}} | N |
| Acceptable Codes | {{site.data.table-desc.acceptable-codes}} | N |
| Retry on Failure | {{site.data.table-desc.retry-failure}} | N |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |
| Retry Delay | {{site.data.table-desc.retry-delay}}  | N |
| Retry Status Codes | {{site.data.table-desc.retry-failure}} | N |

### Retry Formula on Failure

Retries a formula instance execution with the same input data. You can configure the number of retry attempts, with a maximum of 7 attempts. The retry time is set based upon an exponential backoff in minutes. The equation used for the exponential backoff is `round(e^x)` where `x` is the retry attempt number.

When you set up an Retry Formula on Failure step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |

### Stream File

A Stream File step is used to stream a file from one Element Instance to another. In this step, you are outlining two API calls instead of just one. These are separated by using **Download** to refer to the first API that will download the data and **Upload** to refer to the second API call which uploads the data. The response body of the download request is used as the request body of the upload request.

To see a JS Script step in action see [Bulk Transfer CRM Data](examples.html#bulk-transfer-crm-data).


When you set up an Element Request Stream step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
| Download/Upload Element Instance Variable  |  Specifies the element instance that receives the API call.  | Y |
| Download/Upload Method  |  {{site.data.table-desc.method}} | Y |
| Download/Upload API  |  The endpoint, such as `hubs/crm/contacts`.  | Y |
| Download/UploadHeaders  |  {{site.data.table-desc.headers}} </br><span style="color:red">Like what?</span> | N |
| Download/UploadQuery  |  {{site.data.table-desc.query}} </br><span style="color:red">Like what?</span> | N |
| Upload Form Data | <span style="color:red">What?</span> | N |
| Upload Form Parameter Name | <span style="color:red">What?</span> | N |

form data you get as part of an api call. Much lke body.

### Sub-Formula

When you set up an Element Request Stream step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
| Sub-Formula (ID)  |  The ID of the formula. <span style="color:red">Where do you get this/</span>  | Y |

## Formula Variables

Formulas include two types of variables that you must specify when you run a formula instance:

* Element Instance Variable: A variable that is replaced by a specific element when you run a formula instance.
* Value Variable: A variable that is replaced by a configurable value when you run a formula instance.

Formula variables are limited to the formula and cannot have the same name. However, you can name variables in different formulas with the same name like "originInstance" or "destinationInstance."
