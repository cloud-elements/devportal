---
heading: Marketo
seo: Tips | Marketo | Cloud Elements API Docs
title: Tips
description: Frequently asked questions and notes on conventions.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 50
---

## Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

### Bulk
Marketo limits users to 10,000 API calls per day. This can present an issue when making bulk queries. To help, use a query such as `select * from myContact limit 10000`. This will download only 10,000 contacts. You can then use the `continueFromJobId` parameter of the `POST /bulk/query`  API to continue fetching the next 10,000 contacts. Continue chaining the queries together until you retrieve all of the contacts.  Each API in Marketo returns approximately 300 leads/records.

### Events
Although Marketo supports webhooks, you might consider an alternative due to the API limit. You can use the `GET /changed-contacts` API instead.

### GET /leads
The Marketo element does not support the `GET /leads` API commonly found in the Marketing hub. Instead, use `GET /activity-types` to find a relevant Lead Activity ID, and then use that ID in the `where` CEQL parameter in `GET /activities`.
