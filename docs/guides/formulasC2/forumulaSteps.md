---
heading: Formulas
seo: Formula Steps | Formula Step Types | Cloud Element Formulas
title: Formula Step Types
description: An overview of all the available formula steps
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 3
---



## ActiveMQ Request

The ActiveMQ Request uses the AMQP protocol to post a message to an MQ server such as RabbitMQ.

When you set up an ActiveMQ Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}} <br><span style="color:red">Needs to be unique?</span> | Y |
|  URL  |  Specifies the AMQP URL endpoint of the MQ Server. The structure of the URL is as specified in the following documentation - https://www.rabbitmq.com/uri-spec.html  | Y |
|  Queue  |  Indicates the name of the queue of the MQ server to which the message should be posted.  | Y |
|  Message  |  The JSON payload to post to the server.</br><span style="color:red">Confirm this</span>  | Y |
|  Exchange  |  The name of the MQ server exchange to which the message should be posted.  | N |

## Element API Request

This step makes an API call to a specific Element Instance.

<span style="color:red">This is actually calling an element instance variable. Clarify.</span>

When you set up an Element API Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
|  Element Instance Variable  |  Specifies the element instance that recieves the API call.  | Y |
|  Method  |  {{site.data.table-desc.method}} | Y |
|  API  |  The endpoint, such as `hubs/crm/contacts`.  | Y |
|  Headers  |  {{site.data.table-desc.headers}} </br><span style="color:red">Like what?</span> | N |
|  Query  |  {{site.data.table-desc.query}} </br><span style="color:red">Like what?</span> | N |
| Path | {{site.data.table-desc.path}} <span style="color:red">Help!</span>| N |
| Body | {{site.data.table-desc.body}}<span style="color:red">Help!</span> | N |
| Acceptable Codes | {{site.data.table-desc.acceptable-codes}}<span style="color:red">Help!</span> | N |
| Retry on Failure | {{site.data.table-desc.retry-failure}} | N |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |
| Retry Delay | {{site.data.table-desc.retry-delay}} <span style="color:red">Is this right?</span> | N |
| Retry Status Codes | {{site.data.table-desc.retry-failure}}<span style="color:red">Help!</span> | N |


## HTTP Request

Makes an HTTP/S call to any URL/endpoint. <span style="color:red">Why? When would you use this? The info in Skeletor calls this an API call.</span>

When you set up an HTTP Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
|  Method  |  {{site.data.table-desc.method}} | Y |
| HTTP/S URL | The full URL of the request. | Y |
| Headers  |  {{site.data.table-desc.headers}} </br><span style="color:red">Like what?</span> | N |
| Query  |  {{site.data.table-desc.query}} </br><span style="color:red">Like what?</span> | N |
| Path | {{site.data.table-desc.path}} <span style="color:red">Help!</span>| N |
| Body | {{site.data.table-desc.body}}<span style="color:red">Help!</span> | N |
| Acceptable Codes | {{site.data.table-desc.acceptable-codes}}<span style="color:red">Help!</span> | N |
| Retry on Failure | {{site.data.table-desc.retry-failure}} | N |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |
| Retry Delay | {{site.data.table-desc.retry-delay}} <span style="color:red">Is this right?</span> | N |
| Retry Status Codes | {{site.data.table-desc.retry-failure}}<span style="color:red">Help!</span> | N |

## JS Filter
Use the JS Filter (true/false) step to write custom Javascript that *must* return true or false. As with all steps, you must include a name.

* If a filter returns `true`, the formula executes the left, or success, step.
* If a filter returns `false`, the formula executes the tight, or failure, step.

<span style="color:red">This could use an example</span>

## JS Script

Use the JS Script step to write custom Javascript that *must* pass a valid JSON object to the `done` callback. As with all steps, you must include a name.

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

## Loop Over Variable

Use the Loop Over Variable step to loop over a list of objects from a previous step or trigger.

When you set up an Element API Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
|  List  |  A list of objects to loop over. <span style="color:red">Comma separated, any particular format or limitations?</span> | Y |

<span style="color:red">Confirm this info... lots of questions here.</span>

To Use a loop step:

* You must provide it with a list of objects to loop over.
* Set the `onSuccess` field to the first step in the loop.
* When you have reached the last step in the loop set the `onSuccess` field to the loop step, this will restart the loop for the next object.
* If you need to continue on after the loop is completed, you can set the loop step onFailure to the next step to execute after the loop is completed. For a loop step, `onFailure` is executed when the loop has been executed for all objects in the list.

## Platform API Request
Makes an API call to one of our platform APIs.

When you set up an Platform API Request step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
|  Method  |  {{site.data.table-desc.method}} | Y |
|  API  |  The endpoint, such as `hubs/crm/contacts`.  | Y |
|  Headers  |  {{site.data.table-desc.headers}} </br><span style="color:red">Like what?</span> | N |
|  Query  |  {{site.data.table-desc.query}} </br><span style="color:red">Like what?</span> | N |
| Path | {{site.data.table-desc.path}} <span style="color:red">Help!</span>| N |
| Body | {{site.data.table-desc.body}}<span style="color:red">Help!</span> | N |
| Acceptable Codes | {{site.data.table-desc.acceptable-codes}}<span style="color:red">Help!</span> | N |
| Retry on Failure | {{site.data.table-desc.retry-failure}} | N |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |
| Retry Delay | {{site.data.table-desc.retry-delay}} <span style="color:red">Is this right?</span> | N |
| Retry Status Codes | {{site.data.table-desc.retry-failure}}<span style="color:red">Help!</span> | N |

## Retry Formula on Failure

Retries a formula instance execution with the same input data. You can configure the number of retry attempts, with a maximum of 7 attempts. The retry time is set based upon an exponential backoff in minutes. The equation used for the exponential backoff is `round(e^x)` where `x` is the retry attempt number.

When you set up an Retry Formula on Failure step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
| Max Retry Attempts | {{site.data.table-desc.max-retry}} | N |

## Element Request Stream

An Element Request Stream is used to stream a file from one Element Instance to another. In this step, you are outlining two API calls instead of just one. These are separated by using **Download** to refer to the first API that will download the data and **Upload** to refer to the second API call which uploads the data. The response body of the download request is used as the request body of the upload request.

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

## Sub-Formula

When you set up an Element Request Stream step, include the following information:

| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
|  Name  |  {{site.data.table-desc.name}}  | Y |
| Sub-Formula (ID)  |  The ID of the formula. <span style="color:red">Where do you get this/</span>  | Y |

## Notification Step

<span style="color:red">Where did thi go?</span>

Custom Javascript that *must* pass a boolean to the `done` callback.  If true, an email will be sent to the registered "notification email" address for the formula instance.
