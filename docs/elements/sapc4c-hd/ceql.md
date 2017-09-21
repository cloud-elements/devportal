---
heading: SAP Hybris Cloud for Customer Helpdesk
seo: Query Language | SAP Hybris Cloud for Customer Helpdesk | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3522
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

When querying in {{site.heading}}, keep the following in mind:

* To ensure that you receive results for the GET /leads endpoint, include a CEQL where expression. For example, use CreationDateTime > ‘2016-04-28T03:49:32Z’.
* Use CEQL to query the following endpoints:
  * GET /accounts
  * GET /contacts
  * GET /incidents
  * GET /incidents-statuses
  * GET /{objectName}
  * GET /{objectName}/{objectId}/{childObjectName}

  {% include ceql-ref.md%}
