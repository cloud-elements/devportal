---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Build Custom Elements
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 20
---

# Build Custom Elements

You can build your own  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.element}}">elements</a> to create custom integrations to API providers. Publish finished elements to the Elements Catalog while automatically generating interactive API Documentation. You can aggregate services by creating a  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.hub}}">hub</a> or mapping your new element to an existing hub. You can also utilize the normalized resources that we have already organized into hubs, and leverage the same resources across any other element that you build.

This guide is intended for individuals familiar with APIs, Javascript, and JSON. To create an element we recommend that you have a thorough understanding of:

* API authorization concepts
* Any setup required with the API provider
* Javascript
* The API of the API provider that you you are connecting to.
* The API provider's API documentation.
* The Cloud Elements Hub APIs

## The Workflow

While you can work on different parts of an element throughout the entire creation process, in general you will follow the high-level workflow shown below.

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active=""%}

## Before you Begin

Before you begin, here is a sampling of questions you need to know the answers to. You can find most of the information needed in the API provider's documentation

* Where is the API documentation?
* What kind of API? REST, SOAP, database?
* What kind of authentication? OAuth 1.0 or 2.0? Basic? AWS V2 or V4?
* Does the endpoint support events or bulk?
* Do OAuth 2.0 tokens expire?
* What resources do you want to connect? Accounts, contacts, lists, leads?
* In which Hub should you categorize the element?
* Have you set up an application to integrate with the API provider? Do you have the authentication information for it?

## Examples

The examples in this section are based on building an element for [Harvest](https://harvestapp.com/), a time and expense application. To supplement this documentation, we created the following elements that you can import to follow along with:

* Harvest Basic
* Harvest OAuth 2.0
