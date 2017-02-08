---
heading: Syncing Contacts
seo: Contact Sync | API Integrations Cook Book | Cloud Elements API Docs
title: Create Formula Instances
description: Create Formula Instances
layout: tutorial
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/tutorial/formula-instances
parent: Back to Cook Books
order: 5
sitemap: false
redirect_from:
  - /docs/guides/cook-books
---

# Creating Formula Instances

The last step in setting up the bi-directional contact sync between Salesforce and HubSpot is to create two instances of the Formula template.

First, create an instance that will take contact changes in Salesforce and push them to HubSpot.

Use the **try it out** tab of the formula editor to create this first instance.

![HubSpot to Salesforce](https://cl.ly/1x363w241c2W/[15013e79cf6ecce93913e1bc626b1492]_Screen%2520Shot%25202017-02-02%2520at%25202.12.58%2520PM.png)

## 1. Salesforce to HubSpot

Create a formula instance to move contact changes from Salesforce to HubSpot. 

The `DestinationInstance` will be the HubSpot Instance you created.  

The `Hub` should be `crm`.

The `object` should be 'MyContact', which refers to the common object used for the transformations on Salesforce and HubSpot.

`OriginInstance` is set to the Salesforce Instance.

The instance configuration should look similar to below: 

![First Instance](https://cl.ly/0N2W3h0W0w2X/[8d62fa96dee14c2d365cefb27cf50bc1]_Screen%2520Shot%25202017-02-02%2520at%25202.04.51%2520PM.png)

## 2. HubSpot to Salesforce

Next create a formula to move contact changes in the other direction, from HubSpot to Salesforce.

The configuration of this instance should match the first instance, except the origin and destination instances should be swapped. See the example below:

![Second Instance](https://cl.ly/1G2p1D2l0S1j/Screen%20Shot%202017-02-02%20at%202.33.21%20PM.png)

## 3. Test your formula

The easiest way to test your formula is to create a new contact in salesforce. 

Under **MyInstances** select your Salesforce instance and the POST path to MyContact.

![Post MyContact](https://cl.ly/3T1v220o3C3J/[b977417b08c825d0c368065244fb43d9]_Screen%2520Shot%25202017-02-02%2520at%25203.43.30%2520PM.png)

Then create a new contact and select **Try it Out**

![Test](https://cl.ly/3o0j471y1D0P/[522a395c7d713afe99afa78b08635454]_Screen%2520Shot%25202017-02-02%2520at%25203.45.55%2520PM.png)

If your newly created contact appears in HubSpot, your formula is working.