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

With  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.common_resource}}">common resources</a>, you can <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.transformation}}">transform</a> data objects and fields provided by your vendors to a single, normalized resource at Cloud Elements. Common resources enable you to take advantage of our <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.one-to-many}}">one-to-many</a> integration approach by making API calls to a single resource that describes similar resources at all of your vendors.

__On this page__

* [Example](#example)
* [Understanding Levels](#understanding-levels)
* [Definition](#definitions)

## Example
A common example would be to create a common resource for your `/contacts` in various CRMs, and then transform the `/contacts` resources from those CRMs. You know that you want your contacts to look a certain way, regardless of the CRM system. You want `FirstName`, `LastName`, and `Email`. But some elements call `FirstName` something else, like `FirstName`, `F_Name`, or `properties.firstname`. You need to create a single common resource with fields named `FirstName`, `LastName`, and `Email`. Then you can map all of the like fields from other elements to the fields in your common resource. We transform those mapped fields,  so you can write to a single API to integrate many customer.
![Transformations Page](img/Example_MyContacts.png)

You can use common resources to do more than normalize resource names. You can transform data types, so when a resource returns a string and you need a date, Cloud Elements transforms the data. Using our JavaScript Editor, you can create logic to manage complex problems. For example, you can write a simple script to combine fields like `FirstName` and `LastName` into a single field called `Name`. Or tackle even more complicated issues like transforming a number based priority value (1-10) to a descriptor based value (low, medium, or high).

## Understanding Levels

Common resources are built as part of a hierarchy that includes three levels: organization, account, and instance. Only users at the organization level can create common resources, while users at other levels can configure the common resources for specific transformations.

* The organization is the highest level. A common resources built at this level represents a template that you can use for all accounts within your organization.
* The account is the next highest level. Accounts typically represent your customers. Transformations at the account level are shared by all users associated with a specific account.
* The instance is the most granular level. Transformations that you or other users create at this level apply only to a specific element instance.

## Definitions

To help you understand common resources, review the definitions in tis section. We've provided a broad definition of common resources with more specific definitions below.

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
