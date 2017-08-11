---
heading: Manage Elements
seo: Elements | Connectors | Cloud Elements API Docs
title: Overview
description: Overview of elements and what you can do
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
---

# Overview

Elements are enhanced connectors that provide a unified developer experience into a specific cloud application endpoint (e.g., Salesforce, Quickbooks, or Marketo). The Elements Catalog includes a list of all publicly available elements as well as any custom elements that you create. Use these elements to [create authenticated connections](instances.html) &mdash; called element instances &mdash; to your API providers.

{% include callout.html content="<strong>On this page</strong></br><a href=#elements-catalog>Elements Catalog</a></br><a href=#view-element-api-docs>View Element API Docs</a>" type="info" %}

## Elements Catalog

The Elements Catalog shows a list of  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.gloss_entry}}">element cards</a> that represent all of the elements available to you. Elements with your existing authenticated <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.element-instance}}">element instances</a> appear at the top of the catalog. Each card shows the name and id of the element, the number of authenticated element instances, and the  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.hub}}">hub</a> associated with the element.
![Elements Catalog](img/catalog.png)

To work with an element, hover over the element card.  You can [authenticate an element instance](instances.html), [see the API docs](#view-element-api-docs) associated with the element, [export the element](export.html) in JSON format, and [add your own resources](resources.html) to the element.

You can also [build your own custom elements](custom-elements.html). These include a **private** label because they are available only to users in your organization.

## View Element API Docs

The API docs available for each element help you see what API request are available for each element. You can see descriptions of each request, descriptions of each field available for the requests, and which fields are required. The API docs are available in two different views: the default API docs and API docs associated with a specific instance. If you select an authenticated instance, you can interact with the docs to test your API requests or make actual requests.

To view API docs hover over the element card, and then click **API Docs**.

To make requests using the API docs:

1. Select an authenticated instance on the left.
2. Expand the endpoint that you want to make a request to.
3. Click **Try it Out**.
4. Supply any additional or required information.
5. Click **Execute**.
