---
heading: Syncing Contacts
seo: Contact Sync | API Integrations Cook Book | Cloud Elements API Docs
title: Create Formula Template
description: Create a Template Formula
layout: tutorial
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/tutorial/formula-template
parent: Back to Cook Books
order: 4
sitemap: false
redirect_from:
  - /docs/tutorial
---

# Creating a Formula

A formula is a workflow that contains some kind of business logic. In this case, we are using a formula to move data between instances of Salesforce and Hubspot. 

When designing formulas, its best to make them reusable where possible.

Under the Formulas tab, select the green build formula button to create a new formula template.

![Formula Tab](https://cl.ly/3e3g0l00351B/Screen%20Shot%202017-02-01%20at%204.06.42%20PM.png)


# Creating Variables

Just like any function, a formula can take in variables as arguments. A formula can contain two kinds of variables.

 - **Value**, which takes a key and value.
 - **Instance Variable**, which refers to a specific Element Instance

 Create **four variables**:

 - Two **Value** variables called 'hub' and 'object'
 - Two **Instance** variables called 'DestinationInstance' and 'OriginInstance'

 ![Variables](https://cl.ly/3d3M0t283j3K/[d9c4aeb603c40889c04f4a1aa1b45030]_Screen%2520Shot%25202017-02-01%2520at%25204.16.02%2520PM.png)


# Formula Trigger

A formula trigger is what kicks off a formula.

For this example, we will use an **event trigger** to kick off the formula execution. An event is created by an element instance. In this example, an event would be the creation or update of a contact.

Create an **Event Trigger** and set Element Instance to `OriginInstance`. This sets the event trigger to fire when the OriginInstance fires off an event.

![Event Trigger](https://cl.ly/3t0Z1W201T08/Screen%20Shot%202017-02-02%20at%2010.41.11%20AM.png)

This will create the first step in the formula.


# Building the Formula

Now that we have all our variables and an Event to kick off our formula, we can create the logic of our formula.

This can be accomplished in a few steps.

1. Get the **Original Contact** that was created or updated
2. Check if that contact exists in the **Destination Instance**.
3. If the contact does exist, **update it**. Else **create it**.


## 1. Get the Original Contact

First, check to make sure that the trigger is an event, and the object updated was a contact.

Create a filter step. Select the blue add step button and select **filter**.

![Filter Step](https://cl.ly/2B3w241U2K2T/Screen%20Shot%202017-02-02%20at%2010.56.03%20AM.png)

The filter step should contain the following javascript:

    let objectType = trigger.event.objectType;
    let eventType = trigger.event.eventType;

    done((
      objectType === 'Contact' || 
      objectType === 'contact' || 
      objectType === 'Contacts' || 
      objectType === 'contacts') && 
          (eventType === 'UPDATED' || eventType === 'CREATED')
    );

Be sure to set the name of step on the right side of the step. In this case I called it `isEvent`.

![filter step](https://cl.ly/1i3z0s192u01/Screen%20Shot%202017-02-02%20at%2011.03.30%20AM.png)

Is event will now be listed as an unused step. To link this step to the trigger, select the green checkmark below the trigger and select isEvent from the drop down.

![Link isEvent](https://cl.ly/0G121I470L3A/Screen%20Shot%202017-02-02%20at%2011.12.59%20AM.png)

Now when this formula is triggered, the filter will be the next step in the execution.

Next use an **element request** step to get the created or updated contact from the origin instance.

![Element Request](https://cl.ly/242G3p1r3G3D/[10cdcedb488da3bb9de90dedd63e17c6]_Screen%2520Shot%25202017-02-02%2520at%252011.27.08%2520AM.png)

There are a few fields that need to be set in this step.

`element instance` : `config.origininstance`  
`API` : `/hubs/${config.hub}/${config.object}/${trigger.event.objectId}`  
`Method` : `GET`  

The configured step looks like this:

![Configured Step](https://cl.ly/3b1a3x1T2Q1c/Screen%20Shot%202017-02-02%20at%2011.31.41%20AM.png)

Link the new step to the filter step, by selecting the green checkmark under isEvent and selecting getOriginalObject.


## 2. Check if the contact exists in the destination

To check the destination instance for an existing contact, we need to create a query.

Start by adding a **script** step called `createQuery`.

![script step](https://cl.ly/2l2z1f150U33/Screen%20Shot%202017-02-02%20at%201.00.25%20PM.png)

The script step should contain the following code:

    let email = steps.getOriginalObject.response.body.email;

    done ({
      "query":{
        "where":"email = '" + email + "'"
      }
    });

This script uses `steps.getOriginalObject` to get the response from the step getOriginalObject and creates a query from the email field.

Now link the step to the **getOriginalObject** step

Next, add another **element request** step. This step will use the query we just created to look for contacts in the destination with the same email address as the new contact.

The **element request** should be configured as follows:

`Name` : `findContact`  
`Element Instance` : `config.destinationinstance`  
`Method` : `GET`  
`API` : `/hubs/${config.hub}/${config.object}`  
`Query` : `steps.createQuery.query`

Then link findContact to On Success of createQuery.

## 3. Update or Create a new Contact

Here we will create a branch in our formula. 

 - If a contact exists in the destination, **update** that contact.
 - If a contact does not exist in the destination, **create** a new one.  

<br>
### Update a Contact

First, determine if findContact returned a matching contact.

Create a step a **filter step** called `doesExist`, that contains the following:

    if (steps.findContact.response.body.length >= 1) {
      done(true);
    }

    done(false);

Link doesExist to On Success of findContact.

This step will branch two ways if a contact exists it will return true, if not it will return false.

Now create the update contact branch. This will require **two steps**

**First**, create a filter step called `shouldUpdate` with the following code:

    let _ = require('lodash');

    let originObject = steps.getOriginalObject.response.body;
    let destinationObject = steps.findContact.response.body;

    originObject = Array.isArray(originObject) ? originObject[0] : originObject;
    destinationObject = Array.isArray(destinationObject) ? destinationObject[0] : destinationObject;

    delete originObject.lastModifiedDate;
    delete originObject.Id;

    delete destinationObject.lastModifiedDate;
    delete destinationObject.Id;

    console.log(originObject);
    console.log(destinationObject);

    if(_.isEqual(originObject, destinationObject)) {
      done(false);
    }

    done(true);

Since update should only happen when the `doesExist` step returns true, link `shouldUpdate` to on success of `doesExist`.

![Should Update](https://cl.ly/2d2r073v1o3I/[549b616fb289ca9a09d8201b2f081a90]_Screen%2520Shot%25202017-02-02%2520at%25202.53.10%2520PM.png)

**Second** Create an **Element Request** step with the following configuration:

`Name` : `updateContact`  
`Element Instance` : `config.destinationinstance`  
`METHOD` : `PATCH`  
`API` : `/hubs/${config.hub}/${config.object}/${steps.findContact.response.body[0].Id}`  
`Body` : `steps.getOriginalObject.response.body`  

Link `updateContact` to the on success of `shouldUpdate`

<br>
### Create a new Contact

Lastly, we need to create a new contact if one doesn't exist.

Create an **Element Request** step with the following configuration.

`Name` : `createNewContact`  
`Element Instance` : `config.destinationinstance`  
`Method`: `POST`  
`API` : `/hubs/${config.hub}/${config.object}`  
`Body` : `steps.getOriginalObject.response.body`  

Link createNewContact to On Failure of doesExist.

![Create Contact](https://cl.ly/2f2w1f310y3y/[89e8b20be455e009cb09e6d17e442942]_Screen%2520Shot%25202017-02-02%2520at%25201.47.12%2520PM.png)

The completed branch will now look like this:

![Completed Branch](https://cl.ly/44273D0F1u2H/Screen%20Shot%202017-02-02%20at%203.03.18%20PM.png)

You can now test your completed formula. 