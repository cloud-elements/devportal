---
heading: Formulas
seo: How It Works | Formulas | Cloud Elements API Docs
title: How It Works
description: What are Formulas and how do they work?
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 2
---

# How It Works
There are a few different terms you should become familiar with in order to better grasp formulas.  First off, just like there are Elements and then instances of those Elements, our platform supports formulas and then instances of those formulas.  An instance is a materialized formula, with all of the necessary inputs (variables) that are needed for that formula to go about executing.  Once you have a formula instance, that instance will then have a list of executions.  An execution represents a single time that a specific formula instance ran.

# Terminology: Formula

There are a few different pieces that make up a formula:

## Variables
A variable is something that will be populated when a formula instance is created.  Just like when creating an instance of an Element you may need to provide things like "username" or "password" in order to materialize that Element.  In the same way you can specify what inputs (or variables) are needed in order to create an instance of a formula.  You can then reference those variables in your formula trigger or throughout any of your formula steps.

We currently support the following types of variables:

* `value`: Any free text input.
* `elementInstance`: A specific Element Instance.

Defined variables live under the `config` context and can be accessed via the `${config.<var>}` syntax, where `<var>` is replaced with the name of the variable. For example, if a variable named `max.count` is defined, then it can be accessed using `${config.max.count}`.

> **PROTIP:** Variables allow you to create generic formulas that are not tied to specific endpoints.  For example, variables would allow you to create one formula, where each of your customers could have their own instance with their own endpoints plugged in.

## Trigger
A trigger is what will cause the formula to begin executing.  We currently support the following types of triggers:

* `event`: An event is received for a specific Element Instance.
* `elementRequest`: An API call is made to a specific Element Instance.
* `scheduled`: Runs based on a given cron string.
* `manual`: Is only kicked off manually (via an API call to `POST /formulas/instances/:id/executions`).

Once the formula is triggered, the sequence of steps will begin executing.  The first step that will be run is whatever step you have defined as the "on success" step in your trigger.

> **NOTE:** Minimum `scheduled` frequency is 15 minutes.

> **NOTE:** If you have an `event` type trigger and that trigger's Element Instance is setup for polling (as opposed to webhooks) then each object that is found while polling will trigger a separate execution.  So, for example, if the poller finds five changes then you will have five different executions kick off.

## Steps
A formula is typically made up of many different types of steps that, when combined, accomplish some specific workflow.  Steps are laid out as a binary tree, with one branch being what step to run upon success and the other branch being what step to run upon failure.  A formula execution comes to an end when no next step is defined.

We currently support the following types of steps:

* `elementRequest`: Makes an API call to a specific Element Instance.
* `request`: Makes an API call to one of our platform APIs.
* `httpRequest`: Makes an HTTP/S call to any URL/endpoint.
* `elementRequestStream`: Makes two Element API calls to download data and then stream that to the second API without storing the streamed data in the context. This can be used to move files and make bulk download and upload API calls.
* `amqpRequest`: Makes a call via the AMQP protocol to any supported AMQP server. The currently supported AMQP servers are `RabbitMQ`.
* `script`: Custom Javascript that *must* pass a valid JSON object to the `done` callback.
* `filter`: Custom Javascript that *must* pass a boolean to the `done` callback.  If true, the "on success" step will be executed.  Upon false, the "on failure" step will be executed.
* `notification`: Custom Javascript that *must* pass a boolean to the `done` callback.  If true, an email will be sent to the registered "notification email" address for the formula instance.
* `loop`: Loops over a list of objects from a previous step or trigger and calls the defined "on success" step for each item in the list.  Once each item has been processed, the "on failure" step is then called to continue executing the formula.
* `formula`: Executes a sub-formula from the current formula.
* `retryFormulaExecution`: Retries a formula instance execution with the same input data. The number of retry attempts can be configured, with a maximum of 5 attempts, and the retry time is set based upon an exponential backoff in minutes. The equation used for the exponential backof is `round(e^x)` where `x` is the retry attempt number.

# Terminology: Formula Instances

Once a formula has been created, in order to have that formula begin executing, at least one formula instance will need to be created.  When creating a formula instance, you simply give it a name, and populate all of the required "variables".

> **PROTIP:** Cloud Elements currently supports formula and/or formula instance creation via API and via the Formula Builder UI.

# Terminology: Formula Instance Execution

An execution is a single time that a formula instance ran.  Each execution has a list of step executions, which represent each individual step in that formula that was executed.  Lastly, each of these step executions will have zero to many step execution values associated with it.  These step execution values are the potential inputs and outputs for each of these steps.

> **PROTIP:** Each execution and step execution have an associated `status`.  This `status` for formula step executions can be `pending`, `success` or `failed`, while that for formula instance executions can be one of `pending`, `success`, `failed` or `retry`.

> **PROTIP:** The step execution values are what can be referenced throughout your formula in order to chain steps together and reference previous data in your formula.  The step execution values make up, what we call, the formula "context".
