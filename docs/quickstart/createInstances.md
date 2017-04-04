---
heading: Create Element Instances
seo: Create Element Instances | Create Salesforce and Shopify Instances
title: Element Instances
description: Create an instance of Salesforce and Shopify
layout: sidebarleft
order: 2
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
published: true
sitemap: false
---

The first step in setting up our contact sync from Salesforce to Shopify, is to create an `Element Instance` of both Salesforce and Shopify.

### 1. Create a Salesforce Instance

- From the Elements Catalog, find Salesforce in the CRM Hub and click `Add Instance`.  
- Enter any value into `Instance Name` (like "Salesforce Instance 1") field.
- To set up automatic contact sync, enable events for this instance:
  - Set `Enable/Disable Event Notification` to true
  - Set `Event poller refresh interval` to `4`, this will set the poller to check every 4 minutes
  - Set `Objects to Monitor for Changes` to `Contacts`, this will set the poller to monitor the Contact objects for changes.
  - Set the `Event Type` to `polling`
- Login to your Salesforce Account.

Once provisioned, you can see your new Salesforce Element instance under My Instances in the Elements Menu.  If you click the Documentation tab of the instance, you are presented with the RESTful Swagger API docs that allow you to make live API calls to Salesforce.

![Salesforce Instance 1](https://cl.ly/3J3B2a1P3S2k/Image%202017-03-08%20at%204.09.27%20PM.public.png)

<br>
### 2. Create a Shopify Instance
Creating a Shopify Instance Requires a few more configuration values in order to provision.

- `shopaddress` this is the name of your Shopify account  
- `username` your shopify username  
- `password` your shopify password

Since our example Formula is just one-directional from Salesforce, leave `events` disabled for this Shopify Instance.

Once you have entered the fields above, click Next.