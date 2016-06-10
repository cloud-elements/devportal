---
heading: Formulas
seo: Create Formula via Formulas UI | Formulas | Cloud Elements API Docs
title: Create Formula via UI
description: Learn how to create formulas via the Formula UI and start syncing cloud services.
layout: docs
apis: UI Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to UI Toolkit
order: 10
---

## FORMULA UI USER GUIDE

The Cloud Elements Formulas define a set of actions that will take place based on an event happening. Formulas can be utilized to automate a process that involves steps across multiple systems or to keep those systems up to date like CRM, Ticketing, and Marketing Systems. For example, when a contact is created in Salesforce, the same contact is also created in HubSpot, Marketo, Eloqua, etc. Another example would be when an opportunity is won, an email would be sent notifying the team.

### OVERVIEW

A formula requires an Element Instance be created to the endpoints or services you wish to connect. For this documentation, Salesforce and SendGrid will be used to show an example formula. The use case presented is when a contact is created or updated in Salesforce, an email will be sent notifying the user of the origination or change. An Element Instance must be created for both of these endpoints prior to creating a formula. Events must be enabled for Salesforce as well. The Instance IDs for each Element are needed to create the formula.

### CONNECT SERVICES

The first step in creating a formula is to connect the desired services. Salesforce and SendGrid Element Instance IDs are needed in the formula execution. Salesforce will be created first. Events will be enabled for the Salesforce Element Instance. If you are unfamiliar with setting up your Salesforce connected app, please view the [endpoint setup documentation](/docs/elements/salesforce/salesforce-endpoint-setup.html).

Log in to the Cloud Elements API Manager Console.

* Select “CRM” under Elements Catalog
* Click “Add Instance” for Salesforce.com
![Formula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance1.png)

* Name Instance
* Set polling event refresh interval (default is every 5 minutes)
* Select “polling” as Event Type
* Select “True” to enable events
* Input app callback URL
* Select Objects to Monitor (Salesforce is case sensitive), Contact for this example
* Select “Next”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance2.png)

* Log in to your Salesforce account to authorize the app
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance3.png)

* Click “Next”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/SFDCInstance4.png)

__CREATE SENDGRID ELEMENT INSTANCE__

* Select “Messaging” under Elements Catalog
* Click “Add Instance” for SendGrid
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/Fomulas5.png)

* Name the Instance
* Input credentials
* Click “Next”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/Fomulas6.png)

* Click “Done”
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/Fomulas7.png)

### FORMULA TEMPLATE CREATION

Once Element Instances for the desired services have been instantiated, a formula template can be created.

There are 4 parts that make up a formula template:

* Configuration
* Variables
* Steps

Each part will be defined, then an example formula template for the Salesforce and SendGrid formula will be shown.

#### CONFIGURATION

Name your formula.

#### VARIABLES

Configuration values are represented as variables in the Formula Template. These values are defined when the Formula Instance is created. This gives you the flexibility to implement multiple instances of the same formula template. For example, multiple customers can use the same Formula Template with different Element Instances.

Field names can also be used as configuration values, allowing for customization according to the implementation.

##### TRIGGERS

A `trigger` is what will initiate the formula to run.
We currently support the following types of triggers:

* `event`: polling and webhook type of events
* `elementRequest`: Cloud Elements Hub API call like `POST /contacts`
* `scheduled`: requires a cron expression which specifies how often to kick off the formula

Both types of triggers must be tied to a specific Element Instance. Cloud Elements currently supports multiple triggers for one formula.

#### STEPS

There are four types of steps:

* `elementRequest`: Cloud Elements Hub API call like POST /contacts
  * specify parts of request, method, body, API: example will be shown below
* `filter`: returns only a boolean (true or false)
  * customizable JavaScript
  * able to do if/else logic like if contact created, send email, else stop formula
* `script`: returns a JavaScript object
  * build a payload for a request step
  * take data from two objects and combine them to make custom object, such as fields from Salesforce contact and account to make custom contact
* `loop`: loop over a set of steps

Each step has different properties it requires in order to execute.

All types of steps can have an `onSuccess` and `onFailure`.

Again, once the template is completed, it can be activated or instantiated.

Let’s take a look at example.

### BUILDING A FORMULA TEMPLATE

Prior to inputting any triggers or steps, it is advisable to think about the desired outcome of the formula.

In our example, the desired outcome is to be notified via email when a new contact has been added or updated in Salesforce.

In this formula, a `Salesforce` and `SendGrid Element Instance` are needed.  The contact being created in __Salesforce__ will serve as the `trigger` putting our formula into action, ultimately ending with an email being sent via __SendGrid__.

As we go through the creation of the formula template, configuration will be done first, followed by variable creation (We will reference the Element Instances as variables).  Then a trigger will be created, as well as, the steps needed by the formula.  Finally we will connect the trigger to each of our steps.  Once the formula template is complete, we will activate or instantiate it.

* Under Formulas, select “Formulas Catalog”
* Click Build Formula
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2015/11/FormulaTemplate1.png)

* Name the formula and click "GO"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI1.png)

A window presenting a few options will render.  A trigger is needed to kick off a formula.  An `event` trigger will be used in our example formula, this guide will walk through the trigger creation.  Additionally, We will be creating our formula variables in the steps window.

__NOTE__ If you are not sure of the event type, please feel free to create your variables first.

![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI2.png)

* Select the Salesforce Element Instance created from earlier in this guide.
* Click Save
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI3.png)

Steps may now be added in addition to the trigger.  Clicking the `+` button will present the current steps available.
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI4.png))

* Click `filter` step
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI5.png)

* Name the Step i.e. `1-filter-crm-event`
* Input the following JavaScript:

```JavaScript
return trigger.event.eventType === 'UPDATED' && trigger.event.objectType === 'Contact';
```

This JavaScript is going to filter out any `eventTypes` with the value of `UPDATED` AND and `objectType` of  `Contact`.  We want to check for any Contacts being updated in the system.

* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI6.png)

* Add a `script` step
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI7.png)

* Name the Step i.e. `2-create-email-body`
* Input the following JavaScript:

```JavaScript
var message = {
  "subject": "CRM Contact Updated",
  "to": "jon@acme.com",
  "from": "jon@acme.com",
  "message": "Contact  with ID: '" + trigger.event.objectId + "' was updated!"
};
return message;
```

This JavaScript is building the email message body that will be sent to the user notifying her a contact has been updated.

* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI8.png)

* Add an `elementRequest` step
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI9.png)

This step will build the API call `POST /messages`

* Name the step `3-send-email`
* Select the SendGrid Element Instance created earlier is this guide
* Select `POST` for the method as this will be a new message
* Input the rest of the path for the API call: `/hubs/messaging?version=1.2/messages`
Our system will provide an autocomplete once the `/` is inputed
* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI10.png)

Now that we have our `trigger` and `steps` created, we will connect them sequentially to complete our formula template.

* Click the gear icon and select edit
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI11.png)

* In the `On Success:` panel, select the appropriate step in the sequence: `1-filter-crm-event`
* Click "Save"
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI12.png)

We will edit the steps in the same fashion, by clicking the gear icon and selecting edit.
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI13.png)

* In the `1-filter-crm-event` > in the `On Success` panel, select the appropriate step in the sequence: `2-create-email-body`
* Click Save
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI14.png)

* Click the gear and select edit for the `2-create-email-body` > in the `On Success` panel, select the appropriate step in the sequence: `3-send-email`
* Click Save
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI15.png)

Our formula template is now complete.  From the steps panel, view which step comes next by clicking an individual step.  The `onSuccess` will change to green and the `onFailure` will change to red.
This view also provides options to edit, copy, and delete any trigger or step.
![Fromula UI](http://cloud-elements.com/wp-content/uploads/2016/06/CloudElementsFormulaUI16.png)
