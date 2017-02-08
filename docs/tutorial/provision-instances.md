---
heading: Syncing Contacts
seo: Contact Sync | API Integrations Cook Book | Cloud Elements API Docs
title: Provision Element Instances
description: Provisioning Salesforce and Hubspot Instances
layout: tutorial
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/cook-books/provision-instances
parent: Back to Cook Books
order: 2
sitemap: false
redirect_from:
  - /docs/guides/cook-books/
---

# Provision Salesforce and Hubspot Instances

In order to move data between Salesforce and Hubspot accounts, we will need to create an instance of each.

It's helpful to think of **Elements** and **Instances** like Object-Oriented Classes. An Element is similar to a class or template. An Instance is an instantiation of the Element or template.

Checkout out [definitions section](https://developers.cloud-elements.com/docs/overview/definitions.html) to better understand the difference between an element and an element instance.

## Add a Hubspot Instance

Under the elements catalog, find the **Hubspot CRM** element and add an instance of it.

![Element Catalog](https://cl.ly/241Z2l3T3l01/Screen%20Shot%202017-01-26%20at%2012.18.19%20PM.png)

There are a couple configuration properties that are important for this example. The `Vendor Event type` should be set to polling and `Enabled/Disable Event Notifications` should be set to true. This tells Cloud Elements to check Hubspot for changes and creates a notification for when there is a change.

![Event setup](https://cl.ly/1u0n2F1R3909/Screen%20Shot%202017-01-26%20at%2012.47.56%20PM.png)

It's also important to set the `Event poller refresh interval` and `Event Poller URLs`. These properties tell the instance how often to check for changes, and what resources to check.  
The `Event poller refresh interval` is set in minutes, in this case, the interval is set to 2 minutes. `Event Poller URLs` is pointing to `contacts`, which will check Hubspot's contact resources for changes. 

![Event Interval](https://cl.ly/212d1t3O162Q/Screen%20Shot%202017-01-26%20at%2012.48.33%20PM.png)

We can ignore the other fields in the configuration.

## Add a Salesforce Instance

Follow the same steps as above to provision a Salesforce instance.

In the case of Salesforce `Objects to Monitor for Changes` should be set to `Contact`. Note that this is a different field from Hubspot. When creating instances of different Elements, the configuration settings will differ slightly. 

The Salesforce configuration should like this:  
![Salesforce configuration](https://cl.ly/3O0i2v0U0E25/Screen%20Shot%202017-01-26%20at%201.15.50%20PM.png)


Under the **MyInstances** tab of **Elements**, there should be an instance of Salesforce and an Instance of Hubspot.

![My Instances](https://cl.ly/1L032D022s3W/Screen%20Shot%202017-01-26%20at%201.19.41%20PM.png)

**Reminder:** Provisioning instances of Salesforce and Hubspot can also be accomplished via the Cloud Elements API. Check of the element guides for more details:

- [Salesforce Element Guide](https://developers.cloud-elements.com/docs/elements/salesforce/salesforce-create-instance.html)
- [Hubspot Element Guide](https://developers.cloud-elements.com/docs/elements/hubspot-crm/hubspot-crm-create-instance.html)
