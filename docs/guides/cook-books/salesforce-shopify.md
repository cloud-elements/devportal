---
heading: Syncing Contacts
seo: Contact Sync | API Integrations Cook Book | Cloud Elements API Docs
title: Sync Contacts Between Elements
description: Syncing Salesforce and Shopify Contacts
layout: docs
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/cook-books
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/products/element-builder/
---

# Scenario

When a Contact is added or updated in **Salesforce**, those changes should also happen in **Shopify** and vice versa.

There are three steps required to accomplish this:

1. Create an Instance of Salesforce and Shopify
2. Define a Common Object 
3. Create a formula

## 1. Creating Shopify and Salesforce Instances

In order to be able to sync contacts between Salesforce and Shopify, you need to create and an instance of each.

This can be accomplished by Salesforce and Shopify in the Elements Catalog section.
![Catalog Example](https://cl.ly/1w3S1D3X2h36/Image%202017-01-19%20at%2012.21.21%20PM.png)

**Helpful Hints:**

- Be sure to enable events when creating the instances
- For more detailed instructions, check out our guide for [creating instances here.](https://developers.cloud-elements.com/docs/overview/first-integration.html)
- You can also find links to Salesforce and Shopify's integration guides here.
  - [Salesforce](https://developers.cloud-elements.com/docs/elements/salesforce/salesforce-create-instance.html)
  - [Shopify](https://developers.cloud-elements.com/docs/elements/shopify/shopify-create-instance.html)

## 2. Creating a Common Object for Transformations

A common object is used to standardize resources between two elements. In this case, we will create a common object call **MyContact**.

First, create a transformation for Salesforce. Under the instances tab, add a transformation for the Salesforce instance. 
![Instance Example](https://cl.ly/3q0y1x2d4007/Image%202017-01-19%20at%203.32.27%20PM.png)

Then create a new common object. This object will be used for transforming data between Salesforce and Shopify. The Salesforce resource we are transforming is called contact, which can be found under the drop-down menu on the right side of the screen.

**Helpful Hint:** Selecting the **ignore unmapped** switch will remove any unmapped fields when using a common object.

![Object Example](https://cl.ly/131Y3C1Z1w1T/Screen%20Shot%202017-01-23%20at%209.13.12%20AM.png)

The Salesforce resource **Contact** is now mapped to the MyContact object.

Now we need create a transformation for Shopify.

To create the transformation for Shopify, we will follow the same steps as the Salesforce mapping. However, this time instead of creating a new common object, we will select the **MyContact** object.

![Existing Object Example](https://cl.ly/3h091E3r0G03/Image%202017-01-19%20at%203.54.38%20PM.png)

Here we can map the existing fields of the **MyContact** to the fields of the **customer** resource in Shopify.