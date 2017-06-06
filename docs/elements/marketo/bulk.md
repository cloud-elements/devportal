---
heading: Marketo
seo: Bulk APIs | Marketo | Cloud Elements API Docs
title: Bulk APIs
description: Add Bulk functionality to your app.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 85
parent: Back to Element Guides
order: 35
sitemap: false
---

{% include bulk-apis.md %}


## Limiters

When using our Bulk API's with Marketo you also have the option of using limiters. In order to use the limiters you need to change the query to add a limit. For example if your query was "select * from contacts" you would updated it to "select * from contacts limit 1000" (or however many you want to limit it to). After you create this you will get a response that includes an ID. If you then want to get the next part of this same query you use the ID for that job by clearing out the q (or query) field and instead filling out the field "continueFromJobID" and placing the job id in this field. In this example this would grab the next 1000 items. 
