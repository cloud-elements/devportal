---
heading: Formulas
seo: Formula FAQs | Formulas | Cloud Elements API Docs
title: FAQs
description: Frequently Asked Questions
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 7
---

# FAQs
Questions are broken down into the following groups:

* [Javascript](#javascript)
* [Debugging](#debugging)

## Javascript

* **How do I go about writing Javascript for certain step types?**

Certain types of formula steps allow you to write custom Javascript in order to go about accomplishing whatever you may need to in your formula.  Below is a guide on how to go about writing your custom Javascript, as well as some pro-tips and FAQs.

* **What is the function signature for Javascript-related steps?**

The function signature for all Javascript-related steps looks like:

```javascript
/**
 * @param  trigger The trigger that started this execution
 * @param  steps   The list of steps that have been executed up until this point for this execution
 * @param  info    Some metadata about this formula
 * @param  done    The callback function that you will need to call at the end of your script step
 */
function (trigger, steps, info, done) {
  // your Javascript will go here
}
```

> __PROTIP:__ For all scripts, Javascript `strict` mode is enforced.

> __PROTIP:__ You can use `console.log` to log things in your formula and help debug.

> __PROTIP:__ ES6 is supported.

#### `trigger`

Example Javascript object for an `event` trigger type:

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

#### `steps`

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

#### `info`

```json
{
  "formulaId": 123,
  "formulaName": "my formula name",
  "formulaInstanceId": 456,
  "formulaInstanceName": "my formula instance name",
  "formulaExecutionId": 789
}
```

#### `done`

Simply a callback function that should be called to terminate the given step.  For `script` type steps, this `done` callback takes a Javascript object whereas for `filter` steps, the `done` callback just takes a `boolean`.

* **What does an example `script` step look like?**
Script steps return a Javascript object containing all of the step execution values that should be made available to future formula steps during the current execution.  Here is an example script step that is building our JSON payload we need in order to send an email in a later step:

```javascript
done({
  payload: {
    subject: 'Frozen Yogurt',
    to: 'joseph.pulaski@old-school.com',
    from: 'frank.ricard@old-school.com',
    message: 'Contact ' + ${trigger.event.objectId} + ' was updated!'
  }
});
```

* **What does an example `filter` step look like?**
Filter steps return a `boolean` indicating whether or not the `onSuccess` or `onFailure` step of the formula should run next.  Below is an example `filter` step that will return `true` if the event we received in our trigger is because a `Contact` was updated in the service that we are listening for events.

```javascript
done(trigger.event.eventType === 'UPDATED' && trigger.event.objectType === 'Contact');
```

* **Can I use external Javascript libraries in my Javascript?**
Some external Javascript libraries are supported.  For the most up-to-date list, or to request a new library be supported, contact [Cloud Elements Support](mailto:support@cloud-elements.com).

## Debugging
* **How do I go about debugging a formula instance execution?**
As always, everything we do is API-first, so you can always use the formula platform APIs to retrieve details about an execution including all of that execution's step executions and step execution values.  To view all platform APIs for formulas, click on "API Docs" in the right-hand panel.

That being said, it's much easier to view executions through the UI.  To do so, simply login to the Cloud Elements Console UI, and click on "Executions" in the left-hand panel under the
