---
heading: Build Formulas
seo: Build a Formula Template | Formulas | Cloud Elements API Docs
title: Build a Formula Template
description: How to build a formula template
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 5
---

# Formula Templates

Formula templates enable you to create a single template for a formula that you can reuse with withe different elements, different resources, or other inputs. After you create a formula template, you can then create a formula instance where you replace the values and element instances with actual values. This approach helps you build efficient and reusable formulas.

## Build a Formula Template

Formula templates are comprised of a trigger that kicks off the formula, steps that execute as a result of the trigger, and variables to represent input required to run an instance of the formula. You can create formulas that use triggers that are kicked off when something happens to an element instance, you can schedule triggers, or you can manually kick off a trigger. See [Triggers, Steps, and Variables](reference.html) for more information about each component.

As you build a formula, you also build context consisting of triggers, variables, steps, and values created by steps. You can refer to that context in later steps in the formula. Consider each component as a building block that has a name and information that you can refer to. For example, in a formula that sends an email notification when a contact is added, you build the body of the email in one step and refer to the body in a later step when you actually send the message. See [Reference Syntax](#reference-syntax) for way to refer to triggers,

{% include note.html content="These steps are intended to get you started building a formula instance. Consider using some of <a href=examples.html>the example formulas</a> to get a deeper understanding of how to build a formula template.  " %}

To build a new formula template:

1. Click **Formulas**, and then on the Formulas page, click **Create New Formula**.
![New Formula Template](img/new-formula.png)
3. Click **Create New Formula**.
4. Enter a name for your formula, and then click **Create**.

    {{site.console}} provides you a list of triggers. For details about each trigger, see [Triggers, Steps, and Variables](reference.html).
    ![Triggers](img/triggers.png)

5. Select your trigger.
    * Choose **Event** for a formula triggered by an event configured on an Element.
    * Choose **Element Request** for a formula triggered when a specific API call is made to an element.
    * Choose **Scheduled** for a formula to occur at a specific time or regular interval.
    * Chose **Manual** to trigger the formula with an API call to `POST /formulas/instances/:id/executions`.

    {% include note.html content="You cannot change a trigger in a formula template after you create it.  " %}

6. Complete the trigger properties, which vary based on the selected trigger.
    * For **Event** provide an [Element Instance Variable](reference.html/#formula-variables).
    * For **Element Request** provide an [Element Instance Variable](reference.html/#formula-variables), an API method, and API endpoint.
    * For **Scheduled** provide a [Cron schedule](reference.html/#scheduled).
    * For **Manual** you do not need to provide any additional properties.
7. Click **Save**.

    {{site.console}} shows the first trigger node in the formula visualization.
    ![Trigger](img/viz-trigger.png)

6. Add any variables that you will need to run the formula instance.
  5. Click **Variables**.
  ![Variables](img/variables.png)
  6. Select the type of variable and enter a name.

        Takes note of the Formula Step Variable Name, which is how you will [refer to the variable](#reference-syntax) throughout the formula.

  8. Click **Save**.

5. Add your first step. In the formula visualization, click <img src="img/btn-add-step.gif" alt="Add a Step" class="inlineImage">.
6. Select the type of step that you want to add.
7. Complete the step properties, and then click **Save**. For details on each step, see [Element Instance Variable](reference.html/#formula-variables).

    {{site.console}} shows the first trigger node and the step that you just created in the formula visualization. Note that the step nodes include **onSuccess** <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage"> and **onFailure** <img src="img/btn-onFailure.png" alt="OnFailure" class="inlineImage"> buttons.
    ![Trigger](img/viz-trigger-step.png)

7. To add another step, either click **onSuccess** <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage"> or **onFailure** <img src="img/btn-onFailure.png" alt="OnFailure" class="inlineImage">, depending on the previous step.
8. Continue adding steps until you complete the formula template.
8. After you complete the formula, [test it](#test-formula-templates).

{% include note.html content="Your formula template is saved in the background as you add each component." %}

## Test Formula Templates

You can test a formula template as you build it. When you test a formula template, you can either use an existing formula instance or create a new formula instance.

{% include tip.html content=" If you plan to use the formula instance that you create while testing only for testing, consider appending the name test to it. " %}

To test a formula template:

1. At the top of the formula visualization, click **Setup Test**.
![Setup Test](img/set-up-test.png)
2. Click **Select Instance**.
3. Either choose an existing formula instance (and skip down to the Select Trigger step) or click **Add New Instance**.
  4. Enter a name for the new formula instance.
  5. For each variable, click the variable and add an element instance or enter a value.
  6. Click **Create Instance**.
  7. Select the instance that you just created.
8. Click **Select Trigger**.
9. Provide trigger information, depending on the type of trigger.

## Create Variable

You can create two types of variables: Element Instance variables that will be replaced by element instances and Value variables that will be replaced by values entered at the formula instance. When you create a variable, note the Formula Step Variable Name which is how you refer to variable in the formula context. See [Formula Variables](reference.html/#formula-variables) for more about variables in the formula context.

To create a formula variable:

1. Open the formula template. On the Formulas page, hover over the Formula Card, and then click Open.
5. Click **Variables**.
![Variables](img/variables.png)
2. Select the type of variable to create.
3. Enter a name for the variable. You can include spaces, but spaces are removed to create the Formula Step Variable Name, which is how the variable is referred to in the formula context.
4. Click **Save**.

## Edit and Delete Variables

You can edit the name of a variable or remove a variable from a formula template.

{% include note.html content="You cannot delete a formula variable if an instance of the formula exists.  " %}

To edit or delete a formula variable:

1. Open the formula template. On the Formulas page, hover over the Formula Card, and then click Open.
5. Click **Variables**.
![Variables](img/variables.png)
2. Click **Edit Variable**.
3. Select the variable to edit or delete, and then:
  * Edit the name, and then click **Save**.
  * Click **Delete**.

## Review Executions

You can troubleshoot formulas by reviewing executions. The executions are split into three columns from left to right:

* Formula Executions &mdash; the list of executions of the selected formula template. Failed executions are clearly marked.
* Steps &mdash;The steps in the formula and an indication of their success <img src="img/icon-step-success.png" alt="Success" class="inlineImage"> or failure <img src="img/icon-step-failure.png" alt="Failure" class="inlineImage">.
* values &mdash;The details associated with the selected step.
![Formula Instance Executions](img/instance-executions.png)

{% include note.html content="To review executions, you must have a formula instance. Otherwise the Executions button is unavailable.  " %}

To review executions

1. Open the formula template. On the Formulas page, hover over the Formula Card, and then click Open.
2. Click **Executions**.
![Variables](img/executions.png)
3. Click the execution to review.
4. Click the step to review.

## Create a Copy of a Formula Template

You can create a formula template based on an existing template or from a Cloud Element sample formula, resulting in a copy of the template.

To create a copy of a formula template:

1. Click **Formulas**, and then on the Formulas page, click **Create New Formula**.
![New Formula Template](img/new-formula.png)
3. Click **Create From Existing Formula**.
  * To use one of your existing formula templates, select the template.
  * To use a Cloud Elements formula template, click CE Sample Formulas, and then select the formula.
4. Enter a name for your formula, and then click **Create**.


## Parallel Executions

To help formula instances execute the formula steps as efficiently as possible, formula instances take advantage of multithreaded executions. That is, multiple steps in a formula instance can make API calls at the same time. Some API providers do not allow multiple API calls from the same account at the same time. If this happens, you can change a formula template or an individual formula instance to execute one step at a time. This makes the formula less efficient and results in an increase to the overall execution time.

To change a formula from the default multithreaded execution to single threaded:

* In the formula template or formula instance JSON, update `singleThreaded` to `true`:

```json
"singleThreaded": true
```

## Delete a Formula Template

You can delete a formula template if the template has no instances associated with it. If the formula template includes instances, [delete those first](formula-instance.html/#delete-a-formula-instance).

To delete a formula template:

1. Navigate to the Formulas page.
2. Hover over the Formula Template card, and then click **Delete**.
3. Confirm the deletion.

## Deactivate a Formula Template

You can deactivate a formula template to prevent any executions of formula instances of the template.

{% include note.html content="You can also deactivate a specific formula instance. See <a href=formula-instance/#deactivate-a-formula-instance>Deactivate a Formula Instance</a>. " %}

To deactivate a formula:

1. Open the formula template. From the Formulas page, hover over the Formula Template card, and then click **Open**.
2. At the top of the page, switch the **Active** slider off.
![Active](img/active.gif)
