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

# General

## **My formula is not running.**
First off, that's not a question.  Secondly, if your formula is not running, check the following:

* Have you created a formula instance of the formula?
* Is the trigger's element instance active?
* If the trigger is an event type, are events enabled for the trigger's element instance?
* If you click on "Events" in the LHS of the Console UI, can you see that we are receiving events for this element instance?
* Are both the formula and formula instance set to "active"?
* If you click on "Executions" in the LHS of the Console UI, can you see that it's running but failing somewhere?

## **How do I go about debugging a formula instance execution?**
As always, everything we do is API-first, so you can always use the formula platform APIs to retrieve details about an execution including all of that execution's step executions and step execution values.  To view all platform APIs for formulas, click on "API Docs" in the right-hand panel.

That being said, our Console UI leverages those APIs for you so sometimes it can be easier to view executions there.  To do so, simply login to the Cloud Elements Console UI, and click on "Executions" in the left-hand panel under the "Formulas" heading.

![ExecutionsScreen](/assets/img/formulas/executions.gif)

## **What step execution values are available?**
Each different type of step produces different step execution values that you can use in subsequent steps in your formula.  Below are the different values that each different type produces:

### `elementRequest` or `request` step:
// TODO - JJW

### `script` step:
// TODO - JJW

## **How fast do formulas run?**
Unfortunately, this is a *very* difficult question to answer.  That being said, the speed of a given formula is dependent upon things like:

* How many steps does it have?  
* What type of steps are running?
* How fast are the `elementRequest` step endpoints' APIs?
* How many concurrent formulas does your Cloud Elements' account have running?

# Javascript

## **What is the function signature for Javascript-related steps?**

```javascript
/**
 * @param  trigger The trigger that started this execution
 * @param  steps   The list of steps that have been executed up until this point for this execution and all of their step execution values
 * @param  info    Metadata about this formula
 * @param  done    The callback function that you will need to call at the end of your script step
 */
function (trigger, steps, info, done) {
  // your Javascript will be executed here
}
```

> __PROTIP:__ For all scripts, Javascript `strict` mode is enforced.

> __PROTIP:__ You can use `console.log` to log things in your formula and help debug.

> __PROTIP:__ ES6 is supported.

## **What do each of the parameters in the function signature above look like?**


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

## **What does an example `script` step look like?**

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

## **What does an example `filter` step look like?**

```javascript
done(trigger.event.eventType === 'UPDATED' && trigger.event.objectType === 'Contact');
```

> **NOTE:** This is an example `filter` step that will pass `true` to our `done` callback if the event we received in our trigger is from a `Contact` that was updated in the service that we are listening for events.

## **Can I use external Javascript libraries in my Javascript?**
Some external Javascript libraries are supported.  For the most up-to-date list, or to request a new library be supported, contact [Cloud Elements Support](mailto:support@cloud-elements.com).
