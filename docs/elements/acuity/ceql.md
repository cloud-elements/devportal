---
heading: Acuity Scheduling
apiProvider: Acuity Scheduling # For cases where the API Provider is different than the element name. e;g;, ServiceNow vs. ServiceNow Oauth
seo: Query Language | Acuity Scheduling | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 6156
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

{% include ceql-intro.md%}

## CEQL in {{page.heading}}

Use CEQL to query the following endpoints:

* GET /appointment-types
* GET /appointments
* GET /{objectName}
* GET /{objectName}/{objectId}/{childObjectName}

{% include ceql-ref.md%}
