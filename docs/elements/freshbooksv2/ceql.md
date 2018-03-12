---
heading: Freshbooks Cloud Accounting
seo: Query Language | Freshbooks Cloud Accounting | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 5924
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

{% include ceql-intro.md%}

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /invoices
* GET /payments
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}
* GET /taxes
* GET /customers
* POST /bulk/query
* GET /items
* GET /vendors

{% include ceql-ref.md%}
