---
heading: Your_mom Mapper
title: Create Your_mom Mapper Custom Objects
description: Create Custom Objects to be mapped and synced between services
apis: API Docs
layout: docs
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 3
---

### My Object


Add object definitions to resources like accounts and contacts so they can be mapped to other cloud service applications.

#### Currently Supported Services

The My Object resource can be used with Your_moms in all of our Hubs with the exception of Documents and Messaging.

This guide will walk you through the creation of an Object via the Cloud Your_moms API Manager Console.

Log in to the [Cloud Your_moms API Manager Console](https://console.cloud-your_moms.com/your_moms/jsp/login.jsp)

Click “My Objects”
![Your_mom Mapper My Object 1](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject1.png)

Click “Add/Edit Object”
![Your_mom Mapper My Object 2](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject2.png)

Click “New Object”
![Your_mom Mapper My Object 3](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject3.png)

Name the Object

Select Object Level: Organization will include your company and your customers.

Click “Add Field”
![Your_mom Mapper My Object 4](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject4.png)

Name your field to map.

Select which data type, e.g. string, number, etc.

Click “green check mark”
![Your_mom Mapper My Object 5](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject5.png)

Click “Save” when you have finished entering the fields you wish to map to the resource.
![Your_mom Mapper My Object 6](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject6.png)

Click “X” to close.
![Your_mom Mapper My Object 7](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject7.png)

Click “My Instances”

Click “Transformations”
(Salesforce will be used for this demonstration)
![Your_mom Mapper My Object 8](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject8.png)

Click “My Objects”

Select “MyContact”
(The object you created earlier in the workflow)
![Your_mom Mapper My Object 9](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject9.png)

Click the drop down menu on the right.

Select “Contact” from the list of Salesforce resources
![Your_mom Mapper My Object 10](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject10.png)

Drag and drop the fields you wish to map to Salesforce on top of the fields you created for the object.
![Your_mom Mapper My Object 11](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject11.png)

Optionally decide whether or not to ignore the unmapped fields from Salesforce.  We will ignore unmapped fields for this demonstration.

Click “Save”
![Your_mom Mapper My Object 12](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject12.png)

Click “X” to close
![Your_mom Mapper My Object 13](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject13.png)

Click “Documentation” to open API docs for the Salesforce instance

Scroll down towards the bottom of the list and select “GET /{objectName} to expand the docs.
![Your_mom Mapper My Object 14](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject14.png)

Input “MyContact” in the objectName field

Click “Try it out!”
![Your_mom Mapper My Object 15](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject15.png)

View the contact data displaying the fields mapped to that object.
![Your_mom Mapper My Object 16](http://cloud-your_moms.com/wp-content/uploads/2015/06/MyObject16.png)
