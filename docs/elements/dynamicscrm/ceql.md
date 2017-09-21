---
heading: Microsoft Dynamics CRM
seo: Query Language | Microsoft Dynamics CRM | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 190
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

When querying in {{page.heading}}, keep the following in mind:

* You can search on almost any attribute. However, we recommend that you keep your searches as simple as possible. Cloud Elements normalizes the proprietary FetchXML queries used by MS Dynamics, simplifying their verbose query language.
* Use CEQL to query the following endpoints:
  * GET /accounts
  * GET /activities
  * GET /contacts
  * GET /leads
  * GET /{objectName}
  * GET /opportunities
  * GET /products
  * GET /tasks
  * GET /users

  {% include ceql-ref.md%}
