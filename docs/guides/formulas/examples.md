---
heading: Formulas
seo: Formula Examples | Formulas | Cloud Elements API Docs
title: Examples
description: View JSON examples of all of the different types of triggers and steps.
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 7
---

# Examples
Below are some JSON examples of all of the different types of triggers and steps that are currently available:

> **NOTE:** When creating a formula using the Formula Builder UI, these JSON snippets are abstracted and generated for you.

# Triggers

## Example `elementRequest` triggers:

```json
{
  "type": "elementRequest",
  "properties": {
    "elementInstanceId": "${crm.instance.id}",
    "api": "/hubs/crm/accounts",
    "method": "GET"
  },
  "onSuccess": [ "step1" ]
}
```

> **NOTE:** The `${crm.instance.id}` refers to a formula variable that will be assigned to a specific element instance when creating an instance of this formula.

> **NOTE:** This trigger will listen for calls to `GET /hubs/crm/accounts` on the `${crm.instance.id}` element instance and then call the step named `step1`.

## Example `event` triggers:

```json
{
  "type": "event",
  "properties": {
    "elementInstanceId": "${crm.instance.id}"
  },
  "onSuccess": [ "step1" ]
}
```

> **NOTE:** This trigger will listen for events on the `${crm.instance.id}` element instance and then call the step named `step1`.

## Example `scheduled` triggers:

```json
{
  "type": "scheduled",
  "properties": {
    "cron": "0 0/60 * 1/1 * ? *"
  },
  "onSuccess": [ "step1" ]
}
```

> **NOTE:** Based on the cron string, this trigger will run every hour and will first call the step named `step1`.

# Steps

## Example `filter` steps:

```json
{
  "name": "contact-filter-step",
  "type": "filter",
  "onSuccess": [ "create-update-filter-step" ],
  "properties": {
    "body": "done(trigger.event.objectType.toUpperCase() === 'CONTACT' && trigger.event.eventType === 'UPDATED');"
  }
}
```

> **NOTE:** The above script step assumes the trigger for this formula is an `event` type trigger.

> **NOTE:** The above filter step passes `true` to the `done` callback if the event that triggered this formula execution is based on an event for an updated contact.

> **NOTE:** The above filter step has no `onFailure` step(s) defined, therefore it will stop executing if this step passed `false` into the `done` callback.

## Example `script` steps:

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

> **NOTE:** The above script step assumes the trigger for this formula is an `event` type trigger.

> **NOTE:** The above script step constructs a JSON object that is then passed to the step named `send-email` and is used as the JSON payload to send an email to an element in our messaging hub.

## Example `elementRequest` steps:

```json
{
  "name": "send-email",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${messaging.instance.id}",
     "method": "POST",
     "api": "/hubs/messaging/messages",
     "body": "${steps.build-email-json.body}"
  }
}
```

> **NOTE:** The `${messaging.instance.id}` refers to a formula variable that will be assigned to a specific element instance when creating an instance of this formula.

> **NOTE:** The above step makes an API call to the `${messaging.instance.id}` element instance, using the JSON returned from a previous `script` step named `build-email-json`.  See `script` example above with step named `build-email-json` for that example.

```json
{
  "name": "get-contact",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "/hubs/crm/contacts/{objectId}",
     "path": "${trigger.event}"
  }
}
```

> **NOTE:** There must be a field called `objectId` in the `trigger.event` JSON object for the above API call to work.

```json
{
  "name": "get-object",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "/hubs/crm/${config.resource.name}/{objectId}",
     "path": "${trigger.event}"
  }
}
```

> **NOTE:** There must be a configured variable called `resource.name` for the above API call to work.

> **NOTE:** When context variables, i.e., variables in the configuration, previous steps or int the trigger are used in the `api` for `elementRequest` steps, the format of the reference is `${<var>}`, where `<var>` is the name of the variable.

> **NOTE:** There must be a field called `objectId` in the `trigger.event` JSON object for the above API call to work.

```json
{
  "name": "get-object",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "/hubs/crm/${config.resource.name}/${trigger.event.objectId}"
  }
}
```

> **NOTE:** Context variables, including those in the `trigger` object can be referenced directly in the `api` without the need to provide these as a map/object in the `path`. In the above example, the `${trigger.event.objectId}` can be used instead of what was demonstrated in the previous example.

```json
{
  "name": "get-object",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "${config.api.uri}"
  }
}
```

> **NOTE:** The entire `api` can also be configured as a variable as shown above via the `${config.api.uri}` variable, which means there is a configuration variable called `api.uri` that needs to exist.

```json
{
  "name": "search-contacts",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "/hubs/crm/contacts",
     "query": "${steps.buildQuery}"
  }
}
```

> **NOTE:** The above API call will pass any key/values returned from a previous step named `buildQuery` as query parameters to `GET /hubs/crm/contacts`.

```json
{
  "name": "search-contacts",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "/hubs/crm/contacts",
     "query": "${steps.buildQuery}",
     "retry": "true",
     "retryAttempts": "3",
     "retryDelay": "500",
     "retryStatusCodes": "500,502,503"
  }
}
```

> **NOTE:** The above API call leverages the optional retry properties.  With the above properties, if the API call fails with a `500`, `502` or `503` then we will retry that API call up to 3 times.

```json
{
  "name": "search-contacts",
  "type": "elementRequest",
  "onSuccess": [ "some-other-step" ],
  "properties": {
     "elementInstanceId": "${crm.instance.id}",
     "method": "GET",
     "api": "/hubs/crm/contacts?param1=${config.param1.value}"
  }
}
```

> **NOTE:** Instead of configuring a map via a `script` step to provide query parameters and values, these can be provided on the URI via configuration variables as demonstrated above via the `${config.param1.value}` configuration variable. This is *not* a best practice, i.e., adding query parameters directly to the URI, but can be done if absolutely necessary.


## Example `request` steps:

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

> **NOTE:** These steps will look the same as any `elementRequest` except they do *not* need an `elementInstanceId` property since these API calls are not element instance API calls but instead just calls to one of our platform APIs.

> **NOTE:** Variables for the `api` attribute can be used similar to that in the `elementRequest` step type.

## Example `httpRequest` steps:

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
> **NOTE:** The `httpRequest` step is primarily the same as any `request` step with the following exceptions.
>
> * The `url` attribute, with a valid `HTTP` or `HTTPS` URL, is required.


> **NOTE:** Variables for the `url` attribute can be used similar to that in the `elementRequest` and `request` step types.

## Example `elementRequestStream` steps:

```json
{
  "id": 372,
  "onSuccess": [ "some-other-step" ],
  "onFailure": [ "some-step-to-handle-failure" ],
  "name": "bulk-download-upload",
  "type": "elementRequestStream",
  "properties": {
    "downloadElementInstanceId": "${config.source}",
    "downloadMethod": "GET",
    "downloadApi": "/hubs/crm/bulk/${trigger.args.bulkQueryId}/${config.object.name}",
    "downloadQuery": "",
    "downloadHeaders": "",
    "uploadElementInstanceId": "${config.target}",
    "uploadMethod": "POST",
    "uploadApi": "/hubs/crm/bulk/${config.object.name}",
    "uploadHeaders": "",
    "uploadQuery": "",
    "uploadFormData": "${steps.previous-step.targetMetadata}",
    "uploadFormDataName": "${steps.previous-step.targetMetadataName}"
  }
}
```

```json
{
  "id": 372,
  "onSuccess": [ "some-other-step" ],
  "onFailure": [ "some-step-to-handle-failure" ],
  "name": "move-file",
  "type": "elementRequestStream",
  "properties": {
    "downloadElementInstanceId": "${config.source}",
    "downloadMethod": "GET",
    "downloadApi": "/hubs/documents/files",
    "downloadQuery": "${steps.previous-step.sourceQuery}",
    "uploadElementInstanceId": "${config.target}",
    "uploadApi": "/hubs/documents/files",
    "uploadMethod": "POST",
    "uploadQuery": "${steps.previous-step.targetQuery}"
  }
}
```

> **NOTE:** The `elementRequestStream` step is primarily the same as any `request` step with the following exceptions.
>
> * In this step you are outlining two API calls instead of just one. These are separated by using `download` to refer to the first API that will download the data and `upload` to refer to the second API call which uploads the data. The response body of the download request is used as the request body of the upload request.


## Example `amqpRequest` steps:

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
> **NOTE:** The `amqpRequest` uses the `AMQP` protocol to post a message to an MQ server, e.g., `RabbitMQ`, etc.
>
> * The `url` parameter is required, and is used to specify the `AMQP` URL endpoint of the MQ Server. The structure of the URL is as specified in the following documentation - https://www.rabbitmq.com/uri-spec.html
> * The `exchange` parameter is optional, and indicates the name of the MQ server exchange to which the message should be posted.
> * The `queue` attribute is required and indicates the name of queue of the MQ server to which the message should be posted.
> * The `body`, as for the other request types, is the `JSON` payload to post to the MQ server.

## Example `loop` steps:

```json
{
  "configuration": [{
      "name": "sfdc.instance.id",
      "description": "The SFDC element instance that will trigger this formula.",
      "type": "elementInstance",
      "key": "sfdc.instance.id"
    }
  ],
  "name": "loop-formula",
  "triggers": [{
    "type": "event",
    "properties": {
      "elementInstanceId": "${sfdc.instance.id}"
    },
    "onSuccess": [ "create-list" ]
  }],
  "steps": [{
      "name": "create-list",
      "type": "script",
      "properties": {
        "mimeType": "application/javascript",
        "body": "\nconst list = [];\nfor (var i = 0; i < 5; i ++) {\n  list.push({ name: 'churros-name-' + i, index: i });\n}\n\ndone({ list: list });"
      },
      "onSuccess": [ "looper" ]
    },
    {
      "name": "get-element-by-key",
      "type": "request",
      "properties": {
        "method": "GET",
        "api": "/elements/sfdc"
      },
      "onSuccess": [ "looper" ]
    },
    {
      "name": "last-step",
      "type": "filter",
      "properties": {
        "mimeType": "application/javascript",
        "body": "done(true);"
      }
    },
    {
      "name": "looper",
      "onFailure": [ "last-step" ],
      "type": "loop",
      "properties": {
        "list": "${steps.create-list.list}"
      },
      "onSuccess": [ "get-element-by-key" ]
    }
  ]
}
```

> **NOTE:** The above JSON snippet is for an entire formula and not just a loop step, so you can see how steps interact with each other when using a `loop` step type.

> **NOTE:** Executes the following steps in a loop. You must provide it with a list of objects to loop over. Set the `onSuccess` field to the first step in the loop. When you have reached the last step in the loop set the `onSuccess` field to the loop step, this will restart the loop for the next object. If you need to continue on after the loop is completed, you can set the loop step `onFailure` to the next step to execute after the loop is completed. For a loop step `onFailure` is executed when the loop has been executed for all objects in the list.

> **NOTE:** For a step that is running inside of a loop you can access `loopStep.entry`, which is the current object in the list you are looping over and `loopStep.index`, which is the the index of the object in the list.

### Example `formula` step:

```json
{
  "name": "a-sub-formula-step",
  "type": "formula",
  "properties": {
    "formulaId": "SUB_FORMULA_ID"
  }
}
```

> **NOTE:** The `formulaId` property is abstracted in the Formula Builder UI, allowing you to just select the sub-formula by its name.

> **NOTE:** The `onSuccess` or `onFailure` of a `formula` type step is based around whether the *entire* sub-formula was successful or failed and not just the final step of the sub-formula.

> **NOTE:** The step execution values available to your parent formula are based on the *last* step of that sub-formula.  So whatever values the last step in your sub-formula makes available, those will be available in the parent formula's context.

```json
{
  "name": "a-sub-formula-step",
  "type": "formula",
  "properties": {
    "formulaId": "SUB_FORMULA_ID",
    "args": "previous-step.build-args",
    "subFormulaConfigs": "previous-step.build-configs"
  }
}
```

> **NOTE:** The above JSON snippet shows an example of a step leveraging the optional `args` and `subFormulaConfigs` properties. Both point to a value that was constructed from a previous step. The args can be accessed in the sub-formula using `trigger.args`. The subFormulaConfigs can be accessed in the sub-formula using `config` for example: `config.crmInstanceId`. 

> **NOTE:** If the sub-formula requires variables to be set, then those variables can either be set in the parent formula instance using the same config names or passed in via the `subFormulaConfigs` property. All sub-formulas inherit their parent formula's configuration values. If you pass in the `subFormulaConfigs` these are added to the list of existing configs from the parent and the sub-formula has access to the parent's configs and those passed in with the values in `subFormulaConfigs` taking precedence.

## Example `retryFormulaExecution` steps:

```json
{
  "name": "retry",
  "type": "retryFormulaExecution",
  "properties": {
    "retryAttempts": "3"
  }
}
```

> **NOTE:** The above snippet shows an example of a `retryFormulaExecution` step. In this example, the formula is set to attempt up to `3` retries. If the condition that required a formula execution retry, e.g., a service endpoint used by the formula being down for an extended period of time, is resolved between retries, then upon execution retry, the above step will NOT get executed and the formula should complete execution successfully.

> **NOTE:** The *maximum* allowable number of retries for a given formula instance execution is `5`.
