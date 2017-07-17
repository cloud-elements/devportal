---
heading: Element Mapper
seo: Element Mapper FAQs| Element Mapper | Cloud Elements API Docs
title: FAQs
description: Frequently Asked Questions
layout: sidebarelementdoc
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 89
---

{% include callout.html content="This guide is for an earlier version of Cloud Elements. See Cloud Elements 2.0 documentation at <a href=../../guides/common-resources/index.html>Defining Common Resources & Transformations</a>." type="info" %}

# FAQs

## **What if the JS fails to execute due to a JS runtime error?**
If there is invalid JS in a transformation and it fails to execute during runtime, this will fail silently and still return the transformed object from the API call.  This is to prevent someone from accidentally breaking a transformation at the organization or account level, and thereby breaking all API calls for that resource to everyone underneath.
