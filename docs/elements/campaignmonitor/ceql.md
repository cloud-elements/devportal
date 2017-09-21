---
heading: Campaign Monitor
seo: Query Language | Campaign Monitor | Cloud Elements API Docs
title: Querying
description: Make database queries using Cloud Elements Query Language.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 3928
parent: Back to Element Guides
order: 45
sitemap: false
---

# Cloud Elements Query Language

The Cloud Elements Query Language (CEQL) is a query language used by Cloud Elements to standardize searching across all of our different elements. Many APIs support some form of searching in their APIs but they’re almost all different, so we have standardized a common way to search across all of our elements. Cloud Elements translates the CEQL to the endpoint’s searching syntax, however at times, CEQL supports more than the endpoint.

## CEQL in {{page.heading}}

When querying in {{page.heading}}, keep the following in mind:

* Many GET requests require a CEQL query. For example, to make a `GET /lists` request you must include a CEQL query that specifies a Client ID, like `id='123454654564'`. So your actual request would be:

    ```bash
    https://staging.cloud-elements.com/elements/api-v2/hubs/marketing/lists?where=id%3D'123454654564'
```

* To get a Client ID, make a `GET /accounts` request.
* Use CEQL to query the following endpoints:

| Endpoint | Required CEQL   |
| :------------- | :------------- |
|  GET /activities  |  `activityType = '<bounces, clicks, unsubscribes, or opens>' and campaignId = '<from GET /campaigns>' ` |
| POST /bulk/query | None |
| GET /campaigns | `status ='<sent, scheduled, or draft>' and id = '<ClientID returned from GET/accounts>' `|
| GET /lists | `id = '<ClientID returned from GET/accounts>'` |
| GET /lists/{listId}/contacts | `status ='<active, unconfirmed, unsubscribed, bounced, or deleted>' and id = '<ClientID returned from GET/accounts>' `|
| GET /{objectName} | None |
| GET /{objectName}/{objectId}/{childObjectName} | None |
| GET /segments | `id = '<ClientID returned from GET/accounts>' `|

{% include ceql-ref.md%}
