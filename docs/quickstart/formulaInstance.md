---
heading: Formula Instance
seo: Create a Formula Instance | How to create a Formula Instance
title: Formula Instance
description: Create an instance of your formula template
layout: sidebarleft
order: 5
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
published: true
sitemap: false
---

Before we can use the Formula we just created, we have to create an instance of it.  This process defines the variables we have set up in our Formula template.  For us, we need to define our `OriginInstance` and `DestinationInstance`

### Create a Formula Instance
1. Select the Formula Catalog Tab to bring up a list of your formula templates.
    ![Formula Tab](https://cl.ly/35003X1z1s2w/Screen%20Shot%202017-03-10%20at%201.55.06%20PM.png)
2. Find the Formula you created and select the green Add Instance Button.
3. Give the Instance a name that describes what it does, like "Salesforce to Shopify Contact Sync".
4. Set Active to YES.
5. Set the `OriginInstance` to the Salesforce Instance you created earlier.
6. Set the `DestinationInstance` to the Shopify Instance you created earlier.
7. Select done to save the formula instance.


### Try it out
1. Login into your salesforce account and create a new contact.
2. Under the formulas tab select Executions.
3. Select the formula instance you created.
4. If no executions appear, wait a couple minutes for the event in Salesforce to fire.
5. Once the formula has executed, this screen will show if it was successful or not.
6. Login into Shopify to see the new Customer that has been created in your account.