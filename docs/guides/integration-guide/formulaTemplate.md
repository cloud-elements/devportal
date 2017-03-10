---
heading: Formula Template
seo: Formula Templates | Cloud Element Formulas | Creating Formula Templates
title: Formula Template
description: Creating a formula template
layout: docs
order: 4
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
published: true
sitemap: false
---

Formulas are the automated workflows you can build to sync data between Elements. Formulas start with a Trigger, or event that starts the workflow. Whether or not a specific integration needs a Formula depends on several factors, but as a rule of thumb, if data needs to be synced automatically, it’s best done with a Formula.

At a high level, Formulas are constructed of multiple API calls to Elements.  To sync Contacts, our sample Formula will follow these basic steps:

1. A `trigger` to kick off the formula
2. Check if `Contact` has been created, and ignore updated contacts
3. ``GET /Contacts/{id}`` from Salesforce
4. `POST /Contact` to Shopify

For a more detailed explanation, let’s discuss each step in our example Formula.

- To get started open the `Formula Catalog` tab and hit the green Build Formula Button.
- Give the formula a name

## Variables
The first step is to define the variables for our formula. 

1. Select the Variables tab under the formula builder window.
2. Create two `elementInstance` variables
  - OriginInstance
  - DestinationInstance

## Trigger

The next step is to create a formula `Trigger`.

Since we want to automatically sync `Contacts` when they are created, we will build our Formula off of an `Event` trigger. When new or updated contacts appear in Salesforce, our Event framework builds a payload that can trigger a Formula.

1. Select the Steps tabs
2. Select the event trigger
3. Select OriginInstance from the Element Instance drop-down menu.
4. Select the save button, your formula should now look like this: ![trigger step](https://cl.ly/2b0a3j2u292Y/Image%202017-03-10%20at%2011.25.52%20AM.public.png)

## Formula Steps

Formulas are built by adding a series of “steps” to create a natural logic flow. Our formula requires three steps:

1. A check to make sure a new contact was created.
2. A step to retrieve to the created contact from the origin.
3. A step to create the new contact in the destination.

### Step One: Create a filter for events

The first step is to filter out any events that aren't a created contact event.

1. Select the blue plus button and add a `filter` step.
2. Set the Name field to `IsCreateContact`
3. Set the body to the following:

    ```javascript
    let theEvent = trigger.event.eventType;
    let theObject = trigger.event.objectType;

    done((theEvent === 'CREATED') && (theObject === 'Contact' || theObject === 'contact'));
    ```
    The resulting step should look like this:
    ![Filter Step](https://cl.ly/0h1m361Y0e2U/Image%202017-03-10%20at%201.14.18%20PM.public.png)

4. After saving the contact, the last step is to link `IsCreateContact` to the trigger.
5. Click the green check mark on the trigger event
6. Select the `IsCreateContact` from the drop-down menu
7. The `IsCreateContact` step is now linked to the trigger step

### Step Two: Retrieve the created contact
The second step is the create an element request step to retrieve the created contact from the `OriginInstance`

The Element Request step performs a simple API call to an Element instance. In our example, we will use it to make an API call to the `OriginInstance`

1. Select the blue plus button and add an `elementRequest` step.
2. Set fields in the step to match the following configuration:

    | Field | Value |
    | ------ | ------ |
    | Name | `RetrieveContact` |
    | Element Instance | `config.origininstance` |
    | Method | `GET` |
    | API | `/hubs/crm/MyContact/${trigger.event.objectId}` |  
3. Save the step configuration  
4. Click the green checkmark under IsCreateContact and select `RetrieveContact`

### Step Three: Create a new contact
The last step is to take the retrieved Contact and `POST` it to the `DestinationInstance`. This step will also be accomplished using the `elementRequest` step.

1. Select the blue plus button and add an `elementRequest` step.
2. Set fields in the step to match the following configuration:

    | Field | Value |
    | ------ | ------ |
    | Name | `CreateContact` |
    | Element Instance | `config.destinationinstance` |
    | Method | `POST` |
    | API | `/hubs/ecommerce/MyContact` |  
    | Body | `steps.RetrieveContact.response.body` |
3. Save the step configuration
4. Click the green checkmark under IsCreateContact and select `CreateContact`
5. Your completed formula template should look like this:
    ![Steps](https://cl.ly/032k2o3u2z0u/Image%202017-03-10%20at%201.42.32%20PM.public.png)
6. You now have a complete formula template!

