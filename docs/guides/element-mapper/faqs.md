---
heading: Element Mapper
seo: Element Mapper FAQs| Element Mapper | Cloud Elements API Docs
title: FAQs
description: Frequently Asked Questions
layout: sidebarleft
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 89
---

# FAQs

## **What if the JS fails to execute due to a JS runtime error?**
If there is invalid JS in a transformation and it fails to execute during runtime, this will fail silently and still return the transformed object from the API call.  This is to prevent someone from accidentally breaking a transformation at the organization or account level, and thereby breaking all API calls for that resource to everyone underneath.
