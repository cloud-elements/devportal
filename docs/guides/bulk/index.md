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

Cloud Elements provides the ability to upload and download data in bulk from an endpoint in a normalized way. Cloud Elements will leverage the provider bulk endpoints whenever that is available. When there is no bulk available from the provider, Cloud Elements will provide a pseudo bulk service for uploading and downloading data from the endpoint. For uploads, we will accept a file and then create objects at the endpoint on a record by record basis. For downloads, we will execute a search API against the endpoint, and loop through all results until we have retrieved all the data. Cloud Elements will store these files (encrypted) in our platform for a maximum of three days. We’re currently rolling out a Bulk service on an Element by Element basis. Let us know if you need Bulk APIs for a given Element by contacting us at support@cloud-elements.com.