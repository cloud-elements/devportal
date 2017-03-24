---
heading: Formulas
seo: Formula Steps | Formula Step Types | Cloud Element Formulas
title: Formula Step Types
description: An overview of all the available formula steps
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 3
---

## amqp Request Step
The `amqpRequest` uses the `AMQP` protocol to post a message to an MQ server, e.g., `RabbitMQ`, etc.

* The `url` parameter is required and is used to specify the `AMQP` URL endpoint of the MQ Server. The structure of the URL is as specified in the following documentation - https://www.rabbitmq.com/uri-spec.html  
* The `exchange` parameter is optional and indicates the name of the MQ server exchange to which the message should be posted.  
* The `queue` attribute is required and indicates the name of the queue of the MQ server to which the message should be posted.  
* The `body`, as for the other request types, is the `JSON` payload to post to the MQ server.  

```json
{
  "id": 373,
  "onSuccess": [ "some-other-step" ],
  "onFailure": [ "some-step-to-handle-failure" ],
  "name": "send-amqp-event",
  "type": "amqpRequest",
  "properties": {
    "body": "${steps.transform-event.response}",
    "url": "amqp://otqaqsml:tPpXwTl7-iMtezRmyJmD-y2U_XbroYpW@jaguar.rmq.cloudamqp.com/otqaqsml",
    "exchange": "",
    "queue": "myqueue"
  }
}
```

## Element Request Step
This step makes an API call to a specific Element Instance.

This step has three required properties:

* `elementInstanceId`
* `method`
* `path`

The other optional properties are:

* `headers`
* `query`
* `body`

**Note:** These optional parameters need be references to an object from a previous step in the formula

```json
{
  "name": "get-contact",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "/hubs/crm/contacts/{objectId}"
  }
}
```

## Element Request Stream Step
An Element Request Stream is used to steam a file from one Element Instance to another. In this step, you are outlining two API calls instead of just one. These are separated by using `download` to refer to the first API that will download the data and `upload` to refer to the second API call which uploads the data. The response body of the download request is used as the request body of the upload request.

Each of the two API calls in the Stream Step have the same properties as an Element Request Step.

## Filter Step
Custom Javascript that *must* return true or false.

* If a filter returns `true`, the step linked to `onSucess` will be executed.
* If a filter returns `false`, the step linked to `onFailure` will be executed. 

```json
{
  "name": "contact-filter-step",
  "type": "filter",
  "onSuccess": [ "some-step" ],
  "onFailure": [ "some-other-step"]
  "properties": {
    "body": "done(trigger.event.objectType.toUpperCase() === 'CONTACT' && trigger.event.eventType === 'UPDATED');"
  }
}
```

## Formula Step
Executes a different formula instance

```json
{
  "name": "a-sub-formula-step",
  "type": "formula",
  "properties": {
    "formulaId": "OTHER_FORMULA_ID"
  }
}
```

## http Request Step
Makes an HTTP/S call to any URL/endpoint.

Required properties:

* `url`, with HTTP or HTTPS 
* `Method`

Option properties:

* `query`
* `path`
* `headers`
* `body`

**Note:** Thes optional parameters must refer to an object from a previous step.

```json
{
  "id": 372,
  "onSuccess": [ "some-other-step" ],
  "onFailure": [ "some-step-to-handle-failure" ],
  "name": "send-event",
  "type": "httpRequest",
  "properties": {
    "method": "POST",
    "query": {},
    "path": {},
    "headers": {},
    "body": "${steps.transform-event.response}",
    "url": "http://localhost:2222/events"
  }
}
```

## Loop Step
Loops over a list of objects from a previous step or trigger.

To Use a formula step:

* You must provide it with a list of objects to loop over. 
* Set the onSuccess field to the first step in the loop. 
* When you have reached the last step in the loop set the onSuccess field to the loop step, this will restart the loop for the next object. 
* If you need to continue on after the loop is completed, you can set the loop step onFailure to the next step to execute after the loop is completed. For a loop step, onFailure is executed when the loop has been executed for all objects in the list.

## Notification Step
Custom Javascript that *must* pass a boolean to the `done` callback.  If true, an email will be sent to the registered "notification email" address for the formula instance.

## Retry Formula Execution Step
Retries a formula instance execution with the same input data. The number of retry attempts can be configured, with a maximum of 5 attempts, and the retry time is set based upon an exponential backoff in minutes. The equation used for the exponential backoff is `round(e^x)` where `x` is the retry attempt number.

* `retryAttempts` is a required property

## Request Step
Makes an API call to one of our platform APIs.

These steps will look the same as any elementRequest except they do not need an elementInstanceId property since these API calls are not element instance API calls but instead just calls to one of our platform APIs.

```json
{
  "name": "get-instances",
  "type": "request",
  "onSuccess": [ "some-other-step" ],
  "properties": {
    "api": "/instances",
    "method": "GET"
  }
}
```

## Script Step
Custom Javascript that *must* pass a valid JSON object to the `done` callback. The javascript here is powered by Node.js and has the following packages available to it

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

```json
{
  "name": "build-email-json",
  "type": "script",
  "onSuccess": [ "send-email" ],
  "properties": {
    "body": "done({ body: { subject: 'Contact Updated', message: 'Contact ' + trigger.event.objectId + ' was updated', to: 'frank.ricard@old-school.com', from: 'joseph-pulaski@old-school.com' } });"
  }
}
```
