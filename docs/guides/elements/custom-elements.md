---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Elements
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 20
---

# Overview

You can build your own elements to create custom integrations to API providers. Publish finished elements to your private Elements Catalog while automatically generating interactive API Documentation using Swagger. You can aggregate services by creating a Hub or mapping your new Element to an existing Hub. You can also utilize the normalized resources that we have already organized into Hubs, and leverage the same resources across any other Element you build.

This guide is intended for individuals familiar with APIs, Javascript, and JSON. To create an element we recommend that you have a thorough understanding of:

* API authorization concepts
* Any setup required with the API provider
* Javascript
* The API of the API provider that you you are connecting to.
* The API provider's API documentation.
* The Cloud Elements Hub APIs

## The Workflow

The high-level workflow that you will follow to create a custom element is shown below. Click a box to jump to the section.

{% include maps/usermap.html%}

## Before you Begin

Before you begin, make sure that you know the answers to the following questions:

* Where is the API documentation?
* What kind of API? REST, SOAP, database?
* What kind of authentication? OAuth 1 or 2? Basic? AWS V2 or V4?
* Does the endpoint support events or bulk?
* Do OAuth 2.0 tokens expire?
* What resources do you want to connect? Accounts, contacts, lists, leads?
* In which Hub should you categorize the element?
