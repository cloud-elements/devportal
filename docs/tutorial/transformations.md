---
heading: Syncing Contacts
seo: Contact Sync | API Integrations Cook Book | Cloud Elements API Docs
title: Create Transformations
description: Create a Common Object for Transformations
layout: tutorial
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/cook-books/transformations
parent: Back to Cook Books
order: 3
sitemap: false
redirect_from:
  - /docs/guides/cook-books/
---

# Creating Transformations

In order to move data between two endpoints, Element resources need to be mapped to a common object. This mapping is called a transformation.

## Create a Salesforce Transformation

Under the **MyInstances Tab** find the Salesforce Instance, select the blue transformation button.

![Create Instance](https://cl.ly/0j190d1z3f32/[6dace52b0f3a01275a7ba7af5ba01ea0]_Screen%2520Shot%25202017-01-27%2520at%252011.50.13%2520AM.png)

This will bring up the transformation window. On the right side, there is a drop down with all the available resources in Salesforce.

After selecting a resource from Salesforce, you can then create a **Common Object**. A Common Object is how a resource in an Element can be reused across many different Elements. In this case, we are going to create a common object called MyContact.

Select **Contact** from the Salesforce dropdown and then create a new object called **MyContact**.

![New Object](https://cl.ly/3n3x370f1G2m/Screen%20Shot%202017-02-01%20at%209.48.30%20AM.png)

You can now start mapping fields from Salesforce to MyContact. First find the email field under Salesforce and drag into MyContact.

![Email Mapping](https://cl.ly/0z05380T2f0e/Screen%20Shot%202017-02-01%20at%2010.12.12%20AM.png)

Now select the blue edit button on the email field under MyContact. This will bring up the field configuration.

The **top text box** is the name of the field in MyContact, this name can be anything you like, in this case, change it to lower case 'email'. 

The **middle box** is the data type of this field, the drop-down menu shows all the available data types.

The **last box** is the fields of Contact in Salesforce.

The **Ignore** check boxes are used to ignore the field mapping in one direction.

For Example:

- Selecting **Ignore To** will prevent 'email' from being included when MyContact is being used to Create a new Contact in Salesforce.  
- Selecting **Ignore From** will prevent 'email' from being included in the returned object when MyContact is used to get a Contact from Salesforce.  

![Field Config](https://cl.ly/0J1F443j0n17/Screen%20Shot%202017-02-01%20at%2010.27.15%20AM.png)

Now map a few other fields to MyContact. Grab the fields 'FirstName', 'LastName', 'Business Phone' and 'Contact ID'. Be sure to select Ignore To on the 'Contact ID' field.

The MyContact object should look like it does below:

![My Contact](https://cl.ly/0f3T362i0A1d/Screen%20Shot%202017-02-01%20at%2011.06.42%20AM.png)

Now, configure some settings for MyContact. Above the field mappings, there are three setting toggles.

- **Add to Docs** will add MyContact to the swagger docs for this instance of Salesforce.
- **Inherit Config** will inherit the configuration of a MyContact object at the Organization level
- **Ignore Unmapped** will strip any fields out of the original object that haven't been mapped to the common object. Trying saving your object and hitting the try it out button to see the difference with it off and on.

For this example, turn **Add to Docs** and **Ignore Unmapped** on and leave inherit config off.

![Transform Config](https://cl.ly/3E1s1h0B1t0W/Screen%20Shot%202017-02-01%20at%2011.23.07%20AM.png)

The last two things that need to be set are the **Object Level** and **Transformation Level**.

- The **Object Level** determines if MyContact is available to all Instances or just this specific Instance of Salesforce.
- The **Transformation** determines if the transformation is for all Instances of Salesforce or just this Instance.

For this example set the Object Level to Organization and the Transformation Level to instance.

![Inheritance](https://cl.ly/2w1Y0t202M2J/Screen%20Shot%202017-02-01%20at%202.52.33%20PM.png)

## Create a Hubspot Transformation

Now that all the work of creating a transformation for Salesforce is done, creating the Hubspot transformation is easy.

Select the contacts resource from the Hubspot dropdown. Instead of creating a new object, select MyContact from My Objects.

On the left side will be the existing fields of MyContact. Now to complete match the fields of the Hubspot contacts resource to the fields of MyContact.

![Existing Object](https://cl.ly/3s37052Q1g43/Screen%20Shot%202017-02-01%20at%203.01.26%20PM.png)

Once all the fields of MyContact have been mapped to a field in Hubspot, check that the rest of the transformation settings are correct.

Also be sure the **Ignore To** is set on the id field.

The transformation for Hubspot should look like it does below:

![Mapped Hubspot](https://cl.ly/062S2K180f1k/Screen%20Shot%202017-02-01%20at%203.08.30%20PM.png)
 