---
heading: Bulk
seo: Bulk | Bulk Overview | How to Use Bulk
title: Overview
description: An overview of Cloud Element's Bulk Framework
layout: sidebarleft
apis: API Docs
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
---

# Bulk

Cloud Elements provides the ability to upload and download data in bulk from an endpoint in a normalized way. Cloud Elements leverages the provider bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint. For uploads, we accept a file and then create objects at the endpoint on a record-by-record basis. For downloads, we search against the endpoint, and loop through all results until we retrieve all the data. Cloud Elements stores these files (encrypted) in our platform for a maximum of three days. 

We’re currently rolling out a bulk service on an element-by-element basis. Let us know if you need bulk APIs for a given element by contacting us at support@cloud-elements.com.