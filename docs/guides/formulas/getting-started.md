---
heading: Formulas
seo: Formulas Getting Started | Formulas | Cloud Elements API Docs
title: Getting Started
description: Learn how to create formulas in Cloud Elements.
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 3
---

# Getting Started
Before building your first formula, it is good to know a few things about the internal Formula API and how the Formula engine works.

# Formulas API

## Formula Context
Each different type of step produces different step execution values that are added to the formula "context".  The formula context is then passed from step-to-step, allowing you to use these values in any subsequent steps in your formula.  Below are the different values that each different step type produces:

> **NOTE:** Any step execution values that are added to the context are always name-spaced under `steps.<your-step-name>`.

### `elementRequest` or `request` step:
```json
{
  "my-step-name": {
    "request": {
        "query": "{}",
        "body": "{\"Name\":\"New Account Name\"}",
        "method": "POST",
        "path": "{}",
        "uri": "/elements/api-v2/hubs/crm/accounts",
        "headers": "{\"authorization\":\"Element /ABC=, User DEF=, Organization GHI\",\"content-length\":\"14\",\"host\":\"jjwyse.ngrok.io\",\"content-type\":\"application/json}"
    },
    "response": {
      "code": "200",
      "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}",
      "body": "{\"Id\": \"001tx3WcAAI\", \"Name\": \"New Account Name\"}"
    }
  }
}
```

### `httpRequest` step:
```json
{
  "my-step-name": {
    "request": {
        "query": "{}",
        "body": "{\"Name\":\"New Account Name\"}",
        "method": "POST",
        "url": "https://api.myservice.com:443/myresource",
        "path": "{}",
        "headers": "{\"authorization\":\"mysessionid\",\"content-type\":\"application/json}"
    },
    "response": {
      "code": "200",
      "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}",
      "body": "{\"id\": \"237648\", \"name\": \"My New Resource Name\"}"
    }
  }
}
```
> **NOTE:** The `url` attribute is required, the value of which must be a valid `http` or `https` URL.

### `elementRequestStream` step:
```json
{
  "my-step-name": {
    "download": {
        "request": {
              "query": "{}",
              "method": "POST",
              "uri": "/elements/api-v2/hubs/crm/accounts",
              "headers": "{\"authorization\":\"Element /ABC=, User DEF=, Organization GHI\",\"content-length\":\"14\",\"host\":\"jjwyse.ngrok.io\",\"content-type\":\"application/json}"
          },
          "response": {
              "code": "200",
              "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}"
          }
      },
      "upload": {
          "request": {
              "query": "{}",
              "method": "POST",
              "uri": "/elements/api-v2/hubs/crm/accounts",
              "headers": "{\"authorization\":\"Element /ABC=, User DEF=, Organization GHI\",\"content-length\":\"14\",\"host\":\"jjwyse.ngrok.io\",\"content-type\":\"application/json}"
            ,
            "response": {
                "code": "200",
                "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}",
                "body": "{\"Id\": \"001tx3WcAAI\", \"Name\": \"New Account Name\"}"
            }
        }
    }
}
```

### `amqpRequest` step:
```json
{
  "my-step-name": {
    "request": {
        "body": "{\"message\":\"This is a test message.\"}",
        "url": "amqp://otqaqsml:tPpXwTl7-iMtezRmyJmD-y2U_XbroYpW@jaguar.rmq.cloudamqp.com/otqaqsml",
        "exchange": "main",
        "queue": "myqueue"
    }
  }
}
```
> **NOTE:** The `url` and `queue` attributes are required. The AMQP URL has to adhere to the conventions described in the following document - https://www.rabbitmq.com/uri-spec.html. If the AMQP request succeeds, the associated `onSuccess` step is executed, else the `onFailure` step.

### `script` step:
A script step adds whatever object is passed to the JS `done` callback onto the formula "context".  For example, if you have a step named `my-script-step` that looks like:

```javascript
done({
  foo: 'bar',
  object: {
    someKey: 'someValue'
  }
});
```

You could now reference `steps.my-script-step.foo`, `steps.my-script-step.object` or `steps.my-script-step.object.someKey` in any subsequent steps when needed.

### `loop` step:
A loop step makes available the current object being processed and the index to each step executed inside of that loop.  For example, if we have a `loop` step named `looper`, any steps that are run inside of that loop would have access to `looper.index` and `looper.entry`.

### `filter` or `notification` steps:
These steps simply pass a boolean into the JS `done` callback function.  That boolean is made available under the key titled `continue`, for example:

```json
{
  "my-step-name": {
    "continue": "true"
  }
}
```

> **NOTE:** In the above example, `true` was passed to the `done` callback.

```json
{
  "my-step-name": {
    "continue": "false"
  }
}
```

> **NOTE:** In the above example, `false` was passed to the `done` callback.

### `formula` step:
These steps execute a sub-formula from the current formula.  The values that are added to the formula context after a `formula` step finishes executing are whatever the last step that executed in the sub-formula makes available.  Therefore, it's common practice to have a specific step in the sub-formula that basically aggregates and "returns" whatever data is needed in the parent's formula context.

### `retryFormulaExecution` step:
Steps of this type truncate the formula execution and schedule a retry execution for a later time based upon the retry attempt number. The equation used to determine the retry time is `round(e^x)`, where `x` is the retry attempt number. The result of this equation is used to schedule a retry in minutes. The step execution response value for this step, is a `string` such as

```json
{
  "id": "53067",
  "key": "retry.error",
  "value": "Formula instance execution scheduled for retry at approximately 2016-12-05T08:52:37-07:00"
}
```

In the above example, the step name in the formula is `retry`, and the value of the step execution indicates the time when the formula execution will be retried.

## Javascript
There are many step types that allow you to write your own custom Javascript.  The function signature for all JS-related step types looks like:

```javascript
/**
 * @param  trigger The trigger that started this execution
 * @param  steps   The list of steps that have been executed up until this point for this execution and all of their step execution values
 * @param  info    Metadata about this formula
 * @param  config  The configuration values set on the formula instance (config variables)
 * @param  done    The callback function that you will need to call at the end of your script step
 */
function (trigger, steps, info, config, done) {
  // your Javascript will be executed here
}
```

> __PROTIP:__ For all scripts, Javascript `strict` mode is enforced.

> __PROTIP:__ You can use `console.log` to log things in your formula and help debug.

> __PROTIP:__ You can use `notify.email` to send an email notification.  

> __PROTIP:__ ES6 is supported.

> __PROTIP:__ The function parameters are immutable, meaning they cannot be assigned to directly. In order to change an object or value passed into the function, first copy it to your own local variable and then make the necessary changes.

### Additional functionality

__Functions__

* `console.log(str)`: Log something from the script. This logged value will be returned in an array called `console`, which will be available to see as a step execution value. Takes a `string` as a parameter.
* `throw(str)`: Force a script to exit with an error message. The error message will be available to see as a step execution value. Takes a `string` as a parameter.
* `notify.email(to, subject, body)`: Send an email notification directly from a Javascript step.  `to` can be a single email or a comma separated list of emails, `subject` is the subject of the email and `body` is the body of the email. A value will be returned in an array called `notify`, which will be available to see as a step execution value. Takes three `string` parameters. You can reference anything from the context when passing in `to`, `subject` or `body` in the same way you can access these variables elsewhere in the Javascript. For example:
```
notify.email(steps.previous-step.email, steps.previous-step.subject, steps.previous-step.emailPrefix + '<br>This is the main body.');
```

__Libraries__

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

### Examples

Example `trigger` object:

```json
{
  "eventId": 11211123,
  "instanceId": 231232132,
  "type": "event",
  "event": {
    "date": "2016-06-01T04:09:10Z",
    "elementKey": "sfdc",
    "eventType": "UPDATED",
    "objectId": "n005i000003sgTd0AAE",
    "objectType": "Contact"
  }
}
```

> **NOTE:** The above `trigger` example is for an `event` type trigger.

Example `steps` object:

```json
{
  "PreviousStepName": {
    "StepExecutionKey":  "StepExecutionValue",
    "AnotherStepExecutionKey":  "AnotherStepExecutionValue"
  },
  "AnotherPreviousStepName": {
    "StepExecutionKey":  "StepExecutionValue"
  }
}
```

> **NOTE:** Each different step type has different step execution values that they will add to the formula "context".  See above for what each type of step adds to this context.

Example `info` object:

```json
{
  "formulaId": 123,
  "formulaName": "my formula name",
  "formulaInstanceId": 456,
  "formulaInstanceName": "my formula instance name",
  "formulaExecutionId": 789
}
```

The `done` function is simply a callback function that should be called to terminate the given step.  For `script` type steps, this `done` callback takes a Javascript object whereas for `filter` or `notification` steps, the `done` callback just takes a `boolean`.

### Example `script` step:

```javascript
done({
  payload: {
    subject: 'Frozen Yogurt',
    to: 'joseph.pulaski@old-school.com',
    from: 'frank.ricard@old-school.com',
    message: 'Contact ' + trigger.event.objectId + ' was updated!'
  }
});
```

> **NOTE:** This is an example script step that is building a JSON payload in order to send an email in a later step.

### Example `filter` step:

```javascript
done(trigger.event.eventType === 'UPDATED' && trigger.event.objectType === 'Contact');
```

> **NOTE:** This is an example `filter` step that will pass `true` to our `done` callback if the event we received in our trigger is from a Contact that was updated in the service that we are listening for events.
