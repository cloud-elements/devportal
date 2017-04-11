---
heading: Common Resources
seo: Overview | Common Resources | Cloud Elements API Docs
title: Overview
description: Common Resources Overview
layout: docs
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/products/common-resources/
---

# Overview

With Common Resources, you can map data objects and fields provided by your vendors to a single, canonical resource at Cloud Elements. Common Resources enable you to take advantage of our "one to many" integration approach by making API calls to a single resource that describes similar resources at all of your vendors. When you build an integration that uses the contatcs resource in thre different systems, you don't need to figure out how to make three different API calls.

For example, you know that you want your contacts to look a certain way. You want FirstName, LastName, and Email. But some elements call FirstName something else, like FirstName, F_Name, or properties.firstname. You need to create a single, canonical Common Resource with fields named FirstName, LastName, and Email. Then you can map all of the like fields from other elements to the fields in your Common Resource. We transform those mapped fields so when you look at the payloads from different vednors, they look the same.
![Transformations Page](img/Example_MyContacts.png)

You can use Common Resources to do more than normalize resource names. You can transform data types, so when a resource returns a string and you need a date, Cloud Elements transforms the data.

Using our JavaScript Editor, you can create logic to manage complex problems. For example, you can write a simple script to combine fields like FirstName and LastName into a single field called Name. Or tackle even more complicated issues like transforming a number based priority value (1-10) to a descriptor based value (low, medium, or high).

# Understanding Levels

<span style="color:red"> This still needs some work </span>

Common resources are built as part of a hierarchy that includes three levels: organization, account, and instance. Only users at the organization level can create common resources, while users at other levels can configure the common resources for specific transformations.

* The organization is the highest level. A common resources built at this level represent a template that you can use for all accounts within your organization.
* The account is the next highest level. Accounts typically represent your customers. Transformations at the account level are shared by all users associated with a specific account.
* The instance is the most granular level. Transformations that you or other users create at this level apply only to a specific element instance.

# Definitions

To understand common resources, we need a shared vocabulary. We've provided a broad definition of common resources, mappings, and transformations below with more detailed definitions following.

[Common resources](#common-resources) include [normalized](#normalized) [objects](#objects) that are [mapped](#map) to objects within vendor [resources](#resource) and allow you to [transform](#transformation) the vendor objects to the canonical objects.

## Common Resource

{{site.data.glossary.common_resource}}

## Normalized

{{site.data.glossary.normalize}}  In relation to common resources, normalization is the transformation of related fields and objects in multiple element resources to a single definition of the field or object within a common resource.

## Objects

{{site.data.glossary.object}}

## Map

{{site.data.glossary.map}}

## Resource

{{site.data.glossary.resource}}  Similar resources, such as Accounts, Contacts, and Customers appear in multiple APIs. Common resources at cloud elements normalize these varied resources.

## Transformation

{{site.data.glossary.transformation}}

## Element Instance

{{site.data.glossary.map}}


## Element Instance Resources

{{site.data.glossary.element-instance-resource}}
You map the data from the element instance resources to the data in your common resource to create a transformation.

> **QUESTIONS/COMMENTS?** Please don't hesitate to [contact us](mailto:support@cloud-elements.com).
