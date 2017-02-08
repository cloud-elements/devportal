---
heading: Syncing Contacts
seo: Contact Sync | API Integrations Cook Book | Cloud Elements API Docs
title: Overview
description: Overview
layout: tutorial
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/tutorial/overview
parent: Back to Cook Books
order: 1
sitemap: false
redirect_from:
  - /docs/guides/cook-books
---

# Overview

This Cook Book outlines how to synchronize Contact data between Salesforce and Hubspot. The end goal is to have Salesforce update Hubspot when a Contact is created or modified and vice versa.

The Cook Book uses the UI in our Console, however, all of the steps in this guide can also be accomplished by our API.

If this is your first time using our platform, checkout our [Platform Overview](https://developers.cloud-elements.com/docs/overview/overview.html).

There are four steps to create the two-way flow of Contacts between Salesforce and Hubspot.

1. [Provision an instance of Salesforce and Hubspot]({{site.url}}/docs/tutorial/provision-instances.html)
2. [Create a Common Object to transform the data]({{site.url}}/docs/tutorial/transformations.html)
3. [Create a template formula]({{site.url}}/docs/tutorial/formula-template.html)
4. [Provision two instances of the formula]({{site.url}}/docs/tutorial/formula-instances.html)