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

Formula templates are comprised of a trigger that kicks off the formula, and steps that execute as a result of the trigger. You can create formulas that use triggers that are kicked off when something happens to an element instance, you can schedule triggers, or you can manually kick off a trigger.

Formulas involve naming, selecting a trigger, add steps,

Create variables - flexible formulas, no hard-coded instances.
Thinks about any possible variables.
When naming things, remember that you will often refer back to them so make the names clear.


To create a new formula template:

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

| Trigger | Step Types   | Variable Types | Prerequisites | Template JSON  |
| :------------- | :------------- |:------------- |:------------- | :------------- |
|  [Event] (reference.html/#event) |  <ul><li>[JS Script] (reference.html/#js-script)</li><li>[Element API Request] (reference.html/#element-api-request)</li></ul>  | [Element Instance] (reference.html/#element-instance-variable) | <ul><li>CRM hub element instance with events</li><li>Messaging hub authenticated element instance</li></ul> | [Formula JSON][4]  |

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
  ![Variables](img/variables.png)
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
1. Create an Element API Request step to send the message that you created in the previous step. Under the **constructBody** step, click the **OnSuccess** button  <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">.
    7. Select **Element API Request**.
    8. Enter a name for the step. We'll call it `sendEmail`.
    9. In **Element Instance Variable**, click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">, and then select the **messagingElement** variable that we created earlier.
    9. In **Method**, select **POST** because the formula will submit a POST request to the messaging hub to an email.
    10. In **API**, enter the API used to send email messages. In this case, enter `/hubs/messaging/messages`.
    11. Click **Show Advanced**.
    12. Scroll to **Body** and enter the reference to the email that we constructed earlier. In this case, type `${steps.constructBody}`.
    13. Click **Save**.

Your formula is finished and should look like the visualization below. It should include a trigger and two steps: the first constructs an email and the second sends a message.
![Trigger](img/viz-crm-messaging.png)

### Retrieve, Transform, and Sync Contact

This example listens for a new contact on a CRM element, transforms the contact to match a common resource, and then syncs with another service provider.

| Trigger | Step Types   | Variable Types | Prerequisites | Template JSON  |
| :------------- | :------------- |:------------- |:------------- | :------------- |
|  [Event] (reference.html/#event)  |  <ul><li>[JS Filter] (reference.html/#js-filter)</li><li>[Element API Request] (reference.html/#element-api-request)</li></ul>  | [Element Instance] (reference.html/#element-instance-variable) | <ul><li>CRM hub authenticated element instance with events</li><li>CRM hub authenticated element instance to sync new contact to</li><li>A common resource that transforms contacts</li></ul> | [Formula JSON][5]  |

To create a formula that syncs contacts:

1. [Build a formula template](#build-a-formula-template) and select **Event** as the trigger.
2. Because the trigger is a change to a CRM element, add an element instance variable that refers to a CRM element.
  3. Click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">.
  3. Click **Add New Variable**, and then click **Element Instance**.
  4. Enter a name for your CRM variable. In this example, we'll use `destinationInstance`.
  5. Click **Save**.
  6. Select the variable that you just created (`destinationInstance`), and then click **Save** on the Edit event: "trigger" page.

        Your formula visualization should like like the following example:
        ![Trigger](img/viz-trigger.png)

4. Add another element instance variable for the CRM element to sync the new contact to.
  5. Click **Variables**.
  ![Variables](img/variables.png)
  7. Click **Element Instance**.
  8. Enter a name. For this tutorial we'll call it `originInstance`.
  9. Click **Save**.
10. In the formula visualization, click <img src="img/btn-add-step.gif" alt="Add a Step" class="inlineImage"> to add a step.
6. Create a JS Filter step that checks to be sure the event is a created contact, and not an updated or deleted contact.
  7. Click **JS Filter (true/false)**.
  8. Enter a name for the script. We'll call it `isCreateContact`.
  8. Enter a script that checks to be sure the event was caused by a created object, such as the example below.

      ```js
      let theEvent = trigger.event.eventType;
      let theObject = trigger.event.objectType;

      done((theEvent === 'CREATED') && (theObject === 'Contact' || theObject === 'contacts'));
      ```
1. Create an Element API Request step to retrieve the transformed version of the contact. Under the **isCreateContact** step, click the **OnSuccess** button  <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">.

    {% include note.html content="This step uses the objectId from the previous step to retrieve the transformed object. If you just retrieved the information about the object from the event payload, it would not be normalized and could not sync with another CRM element. " %}

  7. Select **Element API Request**.
  8. Enter a name. For this tutorial we'll call it `retrieveContact`.
  9. In **Element Instance Variable**, click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">, and then select the **originInstance** variable that we created earlier.
  9. In **Method**, select **GET** because the formula will submit a GET request to a common resource.
  10. In **API**, enter the API to the common resource that transforms the data supplied by the event. For this tutorial, the common resource is called `myContact`. You must also specify the objectID from the contact that triggered the event.

            /hubs/crm/MyContact/${trigger.event.objectId}

  13. Click **Save**.
1. Create an Element API Request step to sync the contact to another CRM element instance. Under the **retrieveContact** step, click the **OnSuccess** button  <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">.
  7. Select **Element API Request**.
  8. Enter a name. For this tutorial we'll call it `createContact`.
  9. In **Element Instance Variable**, click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">, and then select the **destinationInstance** variable that we created earlier.
  9. In **Method**, select **POST** because the formula will submit a POST request to sync the contact.
  10. In **API**, enter the API to the common resource. For this tutorial, the common resource is called `myContact`.

            /hubs/crm/MyContact

  11. Click **Show Advanced**.
  12. Scroll to **Body** and enter the reference to the step with the transformed contact data. In this case, type `${steps.retrieveContact.response.body}`.
  13. Click **Save**.

Your formula is finished and should look like the visualization below. It should include a trigger and three steps: the first checks that an event is a created contact, the second gets the transformed contact data, and the third syncs the contact.
![Trigger](img/viz-sync-contacts.png)

### Bulk Transfer CRM Data

Bulk data transfer is a common use case. For example, your first sync between CRM systems or maybe you add many accounts or contacts each day and want a single job to run to sync between systems. This example demonstrates how to use two formulas to complete a bulk transfer.

| Trigger | Step Types   | Variable Types| Prerequisites | Template JSON  |
| :------------- | :------------- |:------------- | :------------- |:------------- |
|  <ul><li>[Scheduled] (reference.html/#scheduled) (Formula 1)</li><li>[Manual] (reference.html/#manual) (Formula 2)</li></ul> |  <ul><li>[JS Script] (reference.html/#js-script) </li><li>[Element API Request] (reference.html/#element-api-request)</li><li>[JS Filter] (reference.html/#js-filter) (Formula 2)</li><li>[Stream File] (reference.html/#stream-file) (Formula 2)</li></ul>  | <ul><li>[Value] (reference.html/#value-variable)</li><li>[Element Instance] (reference.html/#element-instance-variable)</li>  |<ul><li>CRM hub authenticated element instance with events</li><li>CRM hub authenticated element instance to sync new contact to</li></ul> | <ul><li>[Step 1 Formula JSON][6]</li><li>[Step 1 Formula JSON][7]</li></ul>  |

#### Formula 1

To create a formula that <span style="color:red">makes a bulk request </span>:

1. [Build a formula template](#build-a-formula-template) and select **Scheduled** as the trigger.
2. Add a cron string to identify when the sync occurs.

    This example fires every <span style="color:red">when</span> at <span style="color:red">when</span> .

        0 0 12 1/1 * ? *

4. Add variables for the resource that you want to sync (like account or contact), the element instance that includes the resources that you want to sync, and the <span style="color:red">the id of the instance of the second formula in this process</span>.
  5. Click **Variables**.
  ![Variables](img/variables.png)
  7. Click **Value**.
  8. Enter a name for variable that represents the resource that you want to sync. For this tutorial we'll call it `objectName`.
  9. Click **Save**.
  10. Repeat to create a Value variable called `steptwoid`.
  11. Create an Element Instance variable named `originInstance`.
10. In the formula visualization, click <img src="img/btn-add-step.gif" alt="Add a Step" class="inlineImage"> to add a step.
6. Create a JS Script step that <span style="color:red">builds the metadata</span>.
  7. Click **JS Script**.
  8. Enter a name for the script. We'll call it `buildMetaData`.
  8. Enter a script that <span style="color:red">queries a specific resource and ....</span>.

      ```js
      done ({
          "query":{
            "q":"select * from " + config.objectname
          },
          "headers":{
            "Elements-Async-Callback-Url":"https://console.cloud-elements.com/elements/api-v2/formulas/instances/" + config.steptwoid + "/executions"
          }
        });
      ```

1. Create an Element API Request step to <span style="color:red">make a bulk download request</span>. Under the **buildMetaData** step, click the **OnSuccess** button  <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">.
  7. Select **Element API Request**.
  8. Enter a name. For this tutorial we'll call it `bulkQuery`.
  9. In **Element Instance Variable**, click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">, and then select the **originInstance** variable that we created earlier.
  9. In **Method**, select **POST** because the formula will submit a POST request to the resource.
  10. In **API**, enter the endpoint to make a bulk query.

            /hubs/crm/bulk/query

  11. Click **Show Advanced**.
  12. In **Headers**, enter the reference to the headers that you built in the script in the `buildMetaData` step. In this case, type `${steps.buildMetaData.headers}`.
  13. In **Query**, enter the reference to the query that you built in the script in the `buildMetaData` step. In this case, type `${steps.buildMetaData.query}`.
  13. Click **Save**.

The first formula is finished and should look like the visualization below. It should include a trigger and two steps: the first <span style="color:red">does this</span> and the second <span style="color:red">does that</span>.
![Trigger](img/viz-bulk-transfer-1.png)

#### Formula 2

To create a formula that <span style="color:red">syncs data from the previous formula </span>:

1. [Build a formula template](#build-a-formula-template) and select **Manual** as the trigger, and then click **Save**.

    {% include note.html content="You do not need to configure anything for the manual trigger, but take note of the endpoint that you will need to trigger the formula: `POST /formulas/instances/:id/executions`" %}

4. Add variables for the resource that you want to sync (like account or contact), the element instance that includes the resources that you want to sync, and the <span style="color:red">the id of the instance of the second formula in this process</span>.
  5. Click **Variables**.
  ![Variables](img/variables.png)
  7. Click **Value**.
  8. Enter a name for variable that represents the resource that you want to sync. For this tutorial we'll call it `objectName`.
  9. Click **Save**.
  11. Create Element Instance variables to represent the source and target systems to sync. For this example, use `originInstance` and `destinationInstance`.
10. In the formula visualization, click <img src="img/btn-add-step.gif" alt="Add a Step" class="inlineImage"> to add a step.
6. Create a JS Filter step that <span style="color:red">does something pretty cool</span>.
  7. Click **JS Filter (true/false)**.
  8. Enter a name for the script. We'll call it `isSuccessful`.
  8. Enter a script that checks to be sure the event was caused by a created object, such as the example below.

      ```js
      let status = trigger.args.status;

      if (status && status === "COMPLETED") {
        done(true);
      } else {
        done(false);
      }
      ```
6. Create a JS Script step that <span style="color:red">builds the metadata</span>Under the **isSuccessful** step, click the **OnSuccess** button  <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">.
  7. Click **JS Script**.
  8. Enter a name for the script. We'll call it `buildMetaData`.
  8. Enter a script that <span style="color:red">queries a specific resource and ....</span>.

      ```js
      let metaData = {
        "identifierFieldName":"email"
      }

      let downloadHeaders = {
        "Accept":"text/csv"
      };

      done({
        "metaData": metaData,
        "downloadHeaders": downloadHeaders
      });
       ```
1. Create an Element Stream step to <span style="color:red">move the files downloaded from the origin instance to the destination instance</span>. Under the **buildMetaData** step, click the **OnSuccess** button  <img src="img/btn-onSuccess.png" alt="OnSuccess" class="inlineImage">.
  7. Select **Stream File**.
  8. Enter a name. For this example we'll call it `bulkStream`.
  9. In **Download Element Instance Variable**, click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">, and then select the **originInstance** variable that we created earlier.
  9. In **Download Method**, enter `GET`.
  10. In **Download API**, enter `/hubs/crm/bulk/${trigger.args.id}/${config.objectname}`. `${trigger.args.id}` refers to <span style="color:red">what</span> and `${config.objectname}` refers to the <span style="color:red">objectName variable that identifes the resource that you want to sync</span>.
  9. In **Upload Element Instance Variable**, click <img src="img/btn-Add.png" alt="Alt Text" class="inlineImage">, and then select the **destinationInstance** variable that we created earlier.
  9. In **Upload Method**, enter `POST`.
  10. In **Upload API**, enter `/hubs/crm/bulk/${config.objectname}`. `${trigger.args.id}`. `${config.objectname}` refers to the <span style="color:red">objectName variable that identifes the resource that you want to sync</span>.
  11. Click **Show Advanced**.
  12. In **Download Headers**, enter the reference to the download headers that you built in the script in the `buildMetaData` step. In this case, type `${steps.buildMetaData.downloadHeaders}`.
  13. In **Upload Query**, enter the reference to the upload query that you built in the script in the `buildMetaData` step. In this case, type `${steps.buildMetaData.metaData}`.
  13. Click **Save**.

The first formula is finished and should look like the visualization below. It should include a trigger and two steps: the first <span style="color:red">does this</span> and the second <span style="color:red">does that</span>.
![Trigger](img/viz-bulk-transfer-1.png)


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
