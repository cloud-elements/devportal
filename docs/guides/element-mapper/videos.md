---
heading: Element Mapper
seo: Videos | Element Mapper | Cloud Elements API Docs
title: Videos
description: Videos walking through the different features of Element Mapper.
layout: sidebarleft
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 4
---

# First Time Using Element Mapper
To get started using Element Mapper, you can use the Element Mapper UI or our platform object definition/transformation APIs.  If you are just getting started, we would recommend using the UI to help familarize yourself with the different pieces that make up Element Mapper and how they work.

# Using Element Mapper UI

This guide is here to get you up and running with Element Mapper. We have provided step by step visual directions, as well as, a video of the same instructions taking you through the whole process. Watch the Video or read at your own pace.

This guide reviews the minimum number of steps to get you mapping your data with the leading Cloud Services using Element Mapper. If you have not signed up for Cloud Elements Service or Provisioned an Element with us, please see our [CRM Quick Start Guide](/getstarted/quickstart-guides/crm-hub-quick-start-guide.html)

{% include vimeo-player-full-width.html id=116909693%}
{% include padding-all.html %}

## What you will need:

* Cloud Elements Account
* A Provisioned CRM Element (Salesforce, SugarCRM, ZohoCRM)

Don’t have that set up?
Check out our CRM Quick Start Guide to get set up in under 4 minutes.

*Salesforce will be used for this demonstration*

## What we’ll do:

1. Sign in to the Elements Manager

2. Create an Account Object

3. Map Fields to the Account Object

Click Sign In to be taken to the Elements Manager.

Sign in to your account
![Element Mapper Quick Start 1](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper1.png)

Once you are logged in to the Elements Manager, click on “My Elements”
![Element Mapper Quick Start 2](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper2.png)

Click “Transformations” from the list of Elements
![Element Mapper Quick Start 3](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper3.png)

Select an Object. We’ll use the Account Object as the example.

Click “New Object”
![Element Mapper Quick Start 4](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper18.png)

Name the Object, e.g. “myAccounts”

Drag and Drop some Fields to Map to the object “myAccounts”
![Element Mapper Quick Start 5](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper21.png)

Click the pencil to edit the object fields
![Element Mapper Quick Start 6](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper31.png)

Name the field – assign custom value e.g. “myName”

(Optional) Select Yes or No to “ignore unmapped” fields.

Yes gives you the flexibility to map only the fields you wish to the object. No gives you the option to map the custom fields of your choice and all available fields for the object within the Endpoint (Salesforce in our example).
![Element Mapper Quick Start 7](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper45.png)

OR you may click “Add Field” to map fields manually. This option gives you the power to create nested objects – meaning you can create a myAddress Object and map only the fields you wish to add, e.g. BillingStreet, BillingCity, BillingState.

* Name the Object e.g. “myAddress”
* Select type e.g. “object”
* Name Field to Map e.g. “Address”
* Click the green check mark to complete the action
![Element Mapper Quick Start 7](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper53.png)

Drag and drop the fields you wish to nest underneath the object.
![Element Mapper Quick Start 8](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper63.png)

Assign values to each of the fields

* Name the Object e.g. “myBillingState”
* Select type e.g. “string”
* Select Field to Map e.g. “BillingState”
* Click the green check mark to complete the action
![Element Mapper Quick Start 9](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper73.png)

(Optional) Select the Level you wish to map the transformation with.

* Organization = Your Company Level

Select “Transformation Level”

* Instance Level = Only for one Salesforce Connection
* Organization Level = Your Company Level
* Account Level = A customer of your Company

Click “Save”

Click “X”
![Element Mapper Quick Start 10](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper82.png)

To view your Object, click “Documentation”
![Element Mapper Quick Start 11](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper14.png)

Scroll down towards the bottom of the window to ” GET /{objectName}” and click the link
![Element Mapper Quick Start 12](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper15.png)

Scroll down to Parameters

Input the name of the Object you created, e.g. “myAccounts”

Click “Try It Out” Button
![Element Mapper Quick Start 13](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper16.png)

View Mapped Objects
![Element Mapper Quick Start 14](http://cloud-elements.com/wp-content/uploads/2015/01/Datamapper92.png)

##### CHECKPOINT

__What we did:__

* Signed in to the Elements Manager
* Created an Object
* Mapped fields to the object

Don’t stop there, keep exploring the other functionality that Element Mapper has to offer by creating more custom objects with different Element Endpoints like HubSpot, QuickBooks and more.

If you have any questions, please contact us at [support@cloud-elements.com](mailto:support@cloud-elements.com)

We will do our best to get back to you within 24 hours. Your success is our success.

Thanks for reading.

The Cloud Elements Team
