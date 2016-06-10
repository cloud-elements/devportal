---
heading: Formulas
seo: Formula Trigger and Step Types | Formulas | Cloud Elements API Docs
title: Trigger and Step Types
description: View example Trigger and Step Types.
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 11
---

## Formula Trigger and Step Types

The purpose of this section is to provide some example Trigger and Step types.

### Triggers

A `trigger` is what will initiate the formula to run.
We currently support the following types of triggers:

* `event`: when a certain API request is made to a specific element
* `elementRequest`: Cloud Elements Hub API call like `POST /contacts`
* `scheduled`: requires a cron expression which specifies how often to kick off the formula

Both types of triggers must be tied to a specific Element Instance. Cloud Elements currently supports multiple triggers for one formula.

#### elementRequest

```JSON
{
  "type": "elementRequest",
  "properties": {
        "elementInstanceId": "${crm.instance.id}", //crm.instance.id is a config key
        "api": "/hubs/crm/accounts", //any hub api
        "method": "GET"
  },
  "onSuccess": [
        "step1"
  ]
}
```

#### event

Available data:

`trigger.body` - contains the full event including the raw provider data and full list of events received
`trigger.event` - the one event that should be used in this execution; access it here instead of through the body
`trigger.eventId`
`trigger.type` - event

```JSON
{
  "type": "event",
  "properties": {
        "elementInstanceId": "${crm.instance.id}" //crm.instance.id is a config key
  },
  "onSuccess": [
        "step1"
  ]
}
```

#### scheduled

```bash
1	Saturday, June 11, 2016 12:00 PM
2	Sunday, June 12, 2016 12:00 PM
3	Monday, June 13, 2016 12:00 PM
4	Tuesday, June 14, 2016 12:00 PM
5	Wednesday, June 15, 2016 12:00 PM
```

### Steps

JavaScript

Some step types use Javascript to run. Both the `filter` and `script` steps use JavaScript.

>Notes about JavaScript: Objects that are available in your scripts are actually Java objects. For example, arrays from triggers or previous steps must be treated as Java arrays. To treat them as native JavaScript arrays, it is possible to use `Java.from(arr)` to get a native representation of the Java `List`. As shown below, the trigger response body starts as a Java `List`, but is converted to a JavaScript `array` which allows it to be used with native JS calls.

>```JavaScript
var body = Java.from(trigger.response.body);
orig.push({'new': 'object'});
```

>Java `Map`s are easier to deal with, since they are treated more or less like a Javascript object, in that it is possible to use dot-notation and index key notation for accessing and setting values, like so:

>```JavaScript
var obj = steps.first.obj;  // dot-notation
obj['val'] = 'someval';  // index key notation
```

#### filter

A filter step must return a boolean. `onSuccess` is executed when `true` is returned and `onFailure` is executed when `false` is returned. Common uses:

* filtering out based on event type, a field value, etc. (this is done when `false` is returned and there is no `onFailure`)
* Splitting a formula into 2 paths

Example:

```JSON
{
  "name": "contact-filter-step",
  "type": "filter",
  "onSuccess": [
    "create-update-filter-step"
  ],
  "properties": {
    "mimeType": "application/javascript",
    "body": "var object = trigger.body.message.events[0].objectType; if (object.toUpperCase() == 'CONTACT'){ return true; } else { return false; }"
  }
}
```

#### script

A script step must return an object. Common uses:

* building objects to use in request steps for query params, request body, etc.

Example:

```JSON
{
  "name": "build-email-json",
  "type": "script",
  "onSuccess": [
    "4-send-email"
  ],
  "properties": {
    "body": "return {'body': {'subject': 'Contact ' + trigger.body.message.events[0].eventType, 'message': 'Contact ' + trigger.body.message.raw.objects[0].FirstName + ' ' + trigger.body.message.raw.objects[0].LastName + ' has been ' + trigger.body.message.events[0].eventType + '.', 'to': 'jon@acme.com', 'from': 'jon@acme.com'}}",
    "mimeType": "application/javascript"
  }
}
```

#### elementRequest

Executes a Cloud Elements Hub API. This step must be tied to an element instance.

Examples:

```JSON
{
  "name": "send-email",
  "type": "elementRequest",
  "properties": {
     "elementInstanceId": "${messaging.instance.id}", //messaging.instance.id is a config key
     "method": "POST",
     "api": "/hubs/messaging/messages/",
     "body": "${steps.build-email-json.body}"
  }
}
```

```JSON
{
  "name": "get-contact",
  "type": "elementRequest",
  "properties": {
     "elementInstanceId": "${crm.instance.id}", //crm.instance.id is a config key
     "method": "GET",
     "api": "/hubs/crm/contacts/{objectId}", //objectId will be populated when the request is made
     "path": "${trigger.body.message.events[0]}" //trigger.body.message.events[0] contains an objectId
  }
}
```

```JSON
{
  "name": "search-contacts",
  "type": "elementRequest",
  "properties": {
     "elementInstanceId": "${crm.instance.id}", //crm.instance.id is a config key
     "method": "GET",
     "api": "/hubs/crm/contacts",
     "query": "${steps.buildQuery}" //buildQuery returns a map and all key: value pairs will be added as params
  }
}
```

#### request

Executes a Cloud Elements Platform API. This step is not tied to an element instance.

#### loop

Executes the following steps in a loop. You must provide it with a list of objects to loop over. Set the `onSuccess` field to the first step in the loop. When you have reached the last step in the loop set the `onSuccess` field to the loop step, this will restart the loop for the next object. If you need to continue on after the loop is completed, you can set the loop step `onFailure` to the next step to execute after the loop is completed. For a loop step `onFailure` is executed when the loop has been executed for all objects in the list.

In the loop you can access the following variable: 1. loopStep.entry - the current object in the list you are looping over 2. loopStep.index - the index of that object in the list

Examples:

```JSON
{
  "name": "6-list-loop",
  "type": "loop",
  "onSuccess": [
     "7-build-list-body" // this is the first step in the loop
  ],
  "list": "${steps.step5.listToLoopOver}" //listToLoopOver is a list of objects
},
{
  "name": "7-build-list-body",
  "type": "script",
  "onSuccess": [
    "7-2-get-customList-name"
  ]
  "properties": {
    "mimeType": "application/javascript",
    "body": "var key = config.stContactFieldName; var body = {}; body[key] = steps['4-create-contact'].response.body.Id; body.Name = steps['6-list-loop'].entry; return {'body': body};"
  }
},
{
  "name": "7-2-get-customList-name",
  "type": "script",
  "onSuccess": [
    "8-create-list"
  ],
  "properties": {
     "mimeType": "application/javascript",
     "body": "return {'stListObject': config.stListObjectName};"
  }
},
{
  "name": "8-create-list",
  "type": "elementRequest",
  "onSuccess": [
    "6-list-loop" //this is the last step in the loop, it will start the loop over when it has completed
  ],
  "onFailure": [
    "6-list-loop" //I have added this so that if one request in the list fails it will continue to try to execute for the rest of the items in the list.
  ],
  "properties": {
    "elementInstanceId": "${sfdc.instance.id}",
    "api": "/hubs/crm/{stListObject}",
    "method": "POST",
    "body": "${steps.7-build-list-body.body}",
    "path": "${steps.7-2-get-customList-name}"
  }
}
```

We want to hear from you.  Please do not hesitate to contact [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.  We appreciate your feedback.
