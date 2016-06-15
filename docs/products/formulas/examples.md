---
heading: Formulas
seo: Formula Examples | Formulas | Cloud Elements API Docs
title: Examples
description: View JSON examples of all of the different types of triggers and steps.
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
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

> **NOTE:** The `${crm.instance.id}` refers to a formula variable that will be assigned to a specific element instance when creating an instance of this formula.

> **NOTE:** There must be a field called `objectId` in the `trigger.event` JSON object for the above API call to work.

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

> **NOTE:** The `${crm.instance.id}` refers to a formula variable that will be assigned to a specific element instance when creating an instance of this formula.

> **NOTE:** The above API call will pass any key/values returned from a previous step named `buildQuery` as query parameters to `GET /hubs/crm/contacts`.

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
