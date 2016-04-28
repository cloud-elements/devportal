---
heading: Platform Overview
title: Platform Overview
description:  Overview of the Cloud Elements Platform APIs.
layout: docs
order: 5
categories: [gettingstarted]
---

## Platform APIs

The __Platform Level APIs__ give you the power to create Instances, retrieve OAuth Information, create Accounts and more.

The required Platform Level APIs are Instances and Elements. These APIs are used to create Element Instances and retrieve OAuth Information if applicable.

When you are ready use the optional APIs, Organizations, Accounts, Hubs, and Usage to scale your system and meet your needs.
![Platform APIs](http://cloud-elements.com/wp-content/uploads/2014/10/APIDocsGuide3.png)

`/elements` __(Required)__: A standardized connector to a specific endpoint (e.g. Dropbox, Salesforce).The Elements APIs retrieve the metadata for Elements in the catalog. Elements are required for OAuth based authentication.

`/instances` __(Required)__: A connection between Cloud Elements Service and an endpoint (eg Dropbox, Salesforce). The Instances APIs are used to authenticate, provision and manage Elements.

`/organization `__(Optional)__: The top level entity such as your company. A default account and admin user is assigned to your organization. The Organization APIs are used to manage users within an organization.

`/accounts` __(Optional)__: A subset of an organization. Accounts can be your customers, partners, divisions, environments, or any entity associated with your organization. Accounts APIs access and manage all of the accounts associated with your organization. You can also manage users associated with Accounts.

`/users `__(Optional)__: the entity that identifies the unique end user in Cloud Elements’ system. The Users APIs allow you to manage users associated with Organizations, Accounts or Instances. Users can only be created using the default Organization or Account Resource.

`/hubs` __(Optional)__: A category of cloud services accessed through a uniform API (e.g. document management, marketing automation). The Hubs APIs retrieve the metadata for Hubs in the catalog.

`/usage` __(Optional)__: track Element activity within your Cloud Elements Service Account.
