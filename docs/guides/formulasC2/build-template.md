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
order: 4
---

# Build a Formula Template

Formula templates enable you to create a single template formula and use variables in place of values actual authenticated element instances. You can then create a formula instance where you replace the values and element instances with actual values. This approach helps you build efficient and reusable formulas.

## Build a Formula Template

Follow the instructions in this section to create a formula template. When finished, you will      .

Formulas involve naming, selecting a trigger, add steps,

Create variables - flexible formulas, no hard-coded instances.
Thinks about any possible variables.
When naming things, remember that you will often refer back to them so make the names clear.


To create a new common resource:

1. Click **Formulas**.
2. On the Formulas page, click **Create New Formula**.
3. Click **Create New Formula**.
4. Enter a name for your formula, and then click **Create**.
5. Select your trigger.
6. Complete the trigger properties.
7. Click Save.
6. Add any variables.
  7. These will be asked for when you create an instance. These are limited to the formula.
6. Add your first step.
7. Add a success step.
8. Add a failure step.
8. Test
8. Review executions

## Review Executions

## Create Variable

Naming: You can use white space, but we'll smash it together and camelCase it.

## Add Steps

## Triggers
Triggers

* Event: Listens for an event on an element. Need to have events enabled on the instance.
  * Properties: Element Instance Variable

## Referncing other steps

## Transformations

How can I transform data from a trigger?

Ask Greg for a diagram explaining template & instances

## Troubleshooting

Look for events - waited long enough? are events configured on the instance.

## Examples

### CRM to Messages

This example listens for an event on a CRM element and then sends an email with that event information using a messaging element.

| Trigger | Step Types   | Prerequisites | Template JSON  |
| :------------- | :------------- |:------------- |:------------- |
|  Event  |  <ul><li>JS Script</li><li>Element Request</li></ul>  | <ul><li>CRM hub element instance with events</li><li>Messaging hub authenticated element instance</li></ul> | [Formula JSON][4]  |

To create a formula that listens for an event and emails a message:

1. [Build a formula template](#build-a-formula-template) and select **Event** as the trigger.
2. Because the trigger is a change to a CRM element, add an element instance variable that refers to a CRM element.
  3. Click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">.
  3. Click **Add New Variable**, and then click **Element Instance**.
  4. Enter a name for your CRM variable. In this example, we'll use `crmElement`.
  5. Click **Save**.
  6. Select the variable that you just created (`crmElement`), and then click **Save** on the Edit event: "trigger" page.

        Your formula visualization should like like the following example:
        ![Trigger](img/viz-trigger.png)

4. Add another element instance variable for the messaging element.
  5. Click **Variables**.
  ![Trigger](img/variables.png)
  7. Click **Element Instance**.
  8. Enter a name. For this tutorial we'll call it `messagingElement`.
  9. Click **Save**.
5. In the formula visualization, click <img src="img/btn-add-step.gif" alt="Add a Step" class="inlineImage"> to add a step.
6. Create a JS Script step that constructs a message when the trigger happens.
  7. Click **JS Script**.
  8. Enter a name for the script. We'll call it `constructBody`.
  8. Enter a script that constructs a message, such as the example below.

        ```js
        done( {
          "subject": "CRM Event Occurred",
          "to": "receipient@cloud-elements.com",
          "from": "sender@cloud-elements.com",
          "message": `${trigger.event.objectType} with ID ${trigger.event.objectId} was ${trigger.event.eventType}`
        });
        ```
  1. Click **Save**.
  5. Under the **constructBody** step, click the **OnSuccess** button  <img src="img/btn-onSucces.pngf" alt="OnSuccess" class="inlineImage">.
  6. Create an Element API Request step to send the message that you created in the previous step.
    7. Click **Element API Request**.
    8. Enter a name for the step. We'll call it `sendEmail`.
    9. In **Element Instance Variable**, click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">, and then select the **messagingElement** variable that we created earlier.
    9. In **Method**, select **POST** because the formula will submit a POST request to send an email.
    10. In **API**, enter the API used to send email messages. In this case, enter `hubs/messaging/messages`.
    11. Click **Show Advanced**.
    12. Scroll to **Body** and enter the reference to the email that we constructed earlier. In this case, type `${steps/constructBody}`.
    13. Click **Save**.

Your formula is finished. It should include a trigger and two steps: the first constructs an email and the second sends a message.

## Test a Formula

1. Click **Setup Test**.
![Setup Test](img/set-up-test.png)
2. Click **Select Instance**.
3. Select an existing formula instance or click **Add New Instance** to create one.
  4. Enter a name for the Formula Instance.
  5. Assign variables.
  6. Click **Show Advanced**.

  <span style="color:red">What are these notifications for???</span>

  7. Enter an **Email**.
  8. Enter a **Webhook URL**.
  9. Click **Create Instance**.
  10. Select the Formula Instance
11. Click **Select Trigger**.
12. Select an event, and then click **Save**.
13. Click **Run**.


# Building Your First Formula
To get started creating your own formulas, you can use the Formula Builder UI or our platform formula APIs.  If you are just getting started, we would recommend building formulas via the UI to help familiarize yourself with the different pieces of a formula and how they work.

> **NOTE:** The Formula Builder UI leverages *only* our platform formula APIs, so anything you can do in the UI can also be done via our APIs.

# Creating Formulas via UI
To get started, we are going to demonstrate how to create a very simple formula that leverages a few of the different step types.  This formula will listen for events from a CRM element, and then send an email using the Messaging hub.

> **NOTE:** For this documentation, it is assumed you have an instance of Salesforce and SendGrid already provisioned, and events *must* be enabled for Salesforce.

## Formula Builder I: Creating Your First Formula
{% include vimeo-player-full-width.html id=170863091 %}
{% include padding-all.html %}

## Formula Builder II: Using Filter Steps In Your Formula
{% include vimeo-player-full-width.html id=170861196 %}
{% include padding-all.html %}

## Formula Builder III: Using Variables In Your Formula
{% include vimeo-player-full-width.html id=170862318 %}
{% include padding-all.html %}

> **NOTE:** Sample JSON available from the videos above:
[Formula JSON][1], [Formula Instance JSON][2], [Formula Instance Execution JSON][3].

[1]:{{ site.url }}/download/crm-to-messaging-formula.json
[2]:{{ site.url }}/download/crm-to-messaging-formula-instance.json
[3]:{{ site.url }}/download/crm-to-messaging-formula-instance-execution.json
[4]:{{ site.url }}/download/crm-to-message.json


# Creating Formulas via API

In order to go about creating formulas and formula instances via the API, please reference our "API Docs" section on the right side panel.

> **PROTIP:** An easy way to get started using the APIs is to create a formula using the UI and then "Export" it via the Console UI.  This simply downloads the JSON representation of that formula and you can then go about manipulating and using that JSON in our platform formula APIs.

> **NOTE:** The platform formula APIs show a sub-resource of a formula called `configuration`.  This is what we call "Variables" throughout our documentation and in the Formula Builder UI.
