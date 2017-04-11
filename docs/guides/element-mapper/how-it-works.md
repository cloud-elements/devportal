---
heading: Element Mapper
seo: How It Works | Element Mapper | Cloud Elements API Docs
title: How It Works
description: What is Element Mapper and how does it work?
layout: sidebarleft
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 2
---

# How It Works
There are a few different terms you should become familiar with in order to better grasp Element Mapper.

# Terminology: Object Definition
The first term is called an "Object Definition".  This simply refers to the standard, canonical object that your application knows about, with each field and field type defined.  Element Mapper then uses your defined object definitions to go about mapping your canonical object definition to the endpoint-specific object.  

# Terminology: Transformation
A transformation refers to the mapping between one of your object definitions and an endpoint's object.  A transformation is specific to an Element or, potentially, an Element Instance if there are custom fields you want to transform.

# Inheritance
The last thing that is very important to grasp is that an object definition or transformation can be created at three different levels in the Cloud Elements platform.  The first and top-most level is the "organization" level.  When an object definition and/or transformation is created at this level, it will be applied to every account and user that belongs to that organization.  The next level is the "account" level.  An account usually represents one of your customers.  Defining an object definition and/or transformation at this level will override that resource if its defined at the organization level.  The last, and most granular, level is the "Element Instance" level.  At this level, the object definition and transformation will only be made available to a specific Element Instance and these will override any, potential, parent object definitions or transformations that exist at the organization or account level.
