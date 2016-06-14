---
heading: Formulas
seo: How It Works | Formulas | Cloud Elements API Docs
title: How It Works
description: What are formulas and how do they work?
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 2
---

# How It Works
There are a few different terms you should become familiar with in order to better grasp formulas.  First off, just like there are elements and then instances of those elements, our platform supports formulas and then instances of those formulas.  An instance is a materialized formula, with all of the necessary inputs (variables) that are needed for that formula to go about executing.  Once you have a formula instance, that instance will then have a list of executions.  An execution represents a single time that a specific formula instance ran.

# Terminology: Formula

There are a few different pieces that make up a formula:

## Variables
A variable is something that will be populated when a formula instance is created.  Just like when creating an instance of an element you may need to provide things like "username" or "password" in order to materialize that element, in the same way you can specify what inputs (or variables) are needed in order to create an instance of a formula.  You can then reference those variables in your formula trigger or throughout any of your formula steps.

We currently support the following types of variables:

* `value`: Any free text input
* `elementInstance`: A specific element instance

## Trigger
A trigger is what will cause the formula to begin executing.  We currently support the following types of triggers:

* `event`: An event is received for a specific element instance.
* `elementRequest`: An API call is made to a specific element instance.
* `scheduled`: Runs based on a given cron string.

> **NOTE:** Minimum `scheduled` frequency is 15 minutes.

Once the formula is triggered, the sequence of steps will begin executing.  The first step that will be run is whatever step you have defined as the `onSuccess` step in your trigger.

## Steps
A formula is typically made up of many different types of steps that, when combined, accomplish some specific workflow.  Steps are laid out as a binary tree, with one branch being what step to run upon success and the other branch being what step to run upon failure.  A formula execution comes to an end when no next step is defined.

We currently support the following types of steps:

* `elementRequest`: Makes an API call to a specific element instance.
* `request`: Makes an API call to one of our platform APIs.
* `script`: Custom Javascript that *must* pass a valid JSON object to the `done` callback.
* `filter`: Custom Javascript that *must* pass a boolean to the `done` callback.  If true, the "on success" step will be executed.  Upon false, the "on failure" step will be executed.
* `notification`: Custom Javascript that *must* pass a boolean to the `done` callback.  If true, an email will be sent to the registered "notification email" address for the formula instance.
* `loop`: Loops over a list of objects from a previous step or trigger and calls the defined "on success" step for each item in the list.  Once each item has been processed, the "on failure" step is then called to continue executing the formula.

# Terminology: Formula Instances

Once a formula has been created, in order to have that formula begin executing, at least one formula instance will need to be created.  When creating a formula instance, you just simply populate all of the defined "variables" for the formula.

> **PROTIP:** Cloud Elements currently supports formula and/or formula instance creation via API and via the Formula Builder UI, which can be found in the Cloud Elements Console.

# Terminology: Formula Instance Execution

An execution is a single time that a formula instance ran.  Each execution has a list of step executions, which represent each individual step in that formula that was executed.  Lastly, each of these step executions will have zero to many step execution values associated with it.  These step execution values are the potential inputs and outputs for each of these steps.  

> **PROTIP:** Each execution and step execution have an associated `status`.  This `status` can be `pending`, `success` or `failed`.

> **PROTIP:** The step execution values are also what can be referenced throughout your formula in order to chain steps together and reference previous logic in your formula.
