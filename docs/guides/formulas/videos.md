---
heading: Formulas
seo: Formula Videos | Formulas | Cloud Elements API Docs
title: Videos
description: Videos walking through the different features of Formula Builder.
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 4
---

# Building Your First Formula
To get started creating your own formulas, you can use the Formula Builder UI or our platform formula APIs.  If you are just getting started, we would recommend building formulas via the UI to help familiarize yourself with the different pieces of a formula and how they work.  

> **NOTE:** The Formula Builder UI leverages *only* our platform formula APIs, so anything you can do in the UI can also be done via our APIs.

# Creating Formulas via UI
To get started, we are going to demonstrate how to create a very simple formula that leverages a few of the different step types.  This formula will listen for events from a CRM element, and then send an email using the Messaging hub.

> **NOTE:** For this documentation, it is assumed you have an instance of Salesforce and SendGrid already provisioned, and events *must* be enabled for Salesforce.

## Formula Builder I: Creating Your First Formula
{% include vimeo-player-full-width.html id=170863091 %}
{% include padding-all.html %}

## Formula Builder II: Using Filter Steps In Your Formula
{% include vimeo-player-full-width.html id=170861196 %}
{% include padding-all.html %}

## Formula Builder III: Using Variables In Your Formula
{% include vimeo-player-full-width.html id=170862318 %}
{% include padding-all.html %}

> **NOTE:** Sample JSON available from the videos above:
[Formula JSON][1], [Formula Instance JSON][2], [Formula Instance Execution JSON][3].

[1]:{{ site.url }}/download/crm-to-messaging-formula.json
[2]:{{ site.url }}/download/crm-to-messaging-formula-instance.json
[3]:{{ site.url }}/download/crm-to-messaging-formula-instance-execution.json

# Creating Formulas via API

In order to go about creating formulas and formula instances via the API, please reference our "API Docs" section on the right side panel.

> **PROTIP:** An easy way to get started using the APIs is to create a formula using the UI and then "Export" it via the Console UI.  This simply downloads the JSON representation of that formula and you can then go about manipulating and using that JSON in our platform formula APIs.

> **NOTE:** The platform formula APIs show a sub-resource of a formula called `configuration`.  This is what we call "Variables" throughout our documentation and in the Formula Builder UI.
