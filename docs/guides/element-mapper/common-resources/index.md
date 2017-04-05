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

Using our JavaScript Editor, you can create logic to manage complex problems. For example, you can write a simple script to combine fields into a single field. For example, combine FirstName and LastName as a field in your Common Resource called Name. Or tackle even more complicated issues like transforming a number based priority value (1-10) to a descriptor based value (low, medium, or high).

# Understanding Levels

<span style="color:red"> This still needs some work </span>

Common resources are built as part of a hierarchy that includes three levels: organization, account, and instance.

* The organization is the highest level. Transformations at this level are defined the same for all customers and all elements of any users associated with your account.
* The account is the next highest level. Accounts typically represent your customers. Transformations at the account level are shared by all users associated with a specific account.
* The instance is the most granular level. The transformations at the instance level are associated with only the element instance.

If defined at a lower level, that will override a higher level.

Organization level - top level, company level. Organization will include your company and your customers.

Account/ sub-account, one of your customers.
<span style:"color:red"> There seems to be a lot an account user can't do. As an acount user I can't adjust field settings but I can adjust Advanced settings. When I changed the Advanced Settings it didn't take. </span>

Instance level for transformation level. Only for the connection to the element instance.

# Definitions

To understand common resources, we need a shared vocabulary. We've provided a broad definition of common resources, mappings, and transformations below with more detailed definitions following.

[Common resources](#common-resources) include [canonical(#canonical)] [objects](#objects) that are [mapped(#map)] to objects within vendor [resources](#resource) and allow you to [transform](#transformation) the vendor objects to the canonical objects.

## Common Resource

User-defined, standard, and canonical resources that contain only the fields needed for your integration. Leverage “one-to-many” relationships between common resources and multiple elements by mapping fields in different elements to a single field in the common resource.

## Canonical

In relation to common resources, canonical relates to adhereance to a normalized definition of an object that appears in multiple vendor APIs.

## Objects

Data within a resource, also described as fields during the mapping process.

## Map

The process of associating objects within a vendor's resource to objects in a common respource.

## Resource

Specific endpoints within an API that contain the objects mapped to a common resource. Similar resources, such as Accounts, Contatcs, and Customers appear in multiple APIs. Common resources at cloud elements normalize these varied resources.

## Transformation

The conversion of objects in the vednor's resource to objects in the common resource.

## Element Instance

<span style="color:red">Definition needed? </span>


## Element Instance Resources

<span style="color:red">Definition needed? </span>

The resources available to the Element Instance through its API. You map the data from the Element Instance Resources to the data in your Common Resource.


> **QUESTIONS/COMMENTS?** Please don't hesitate to [contact us](mailto:support@cloud-elements.com).
