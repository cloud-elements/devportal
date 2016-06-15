---
heading: Formulas
seo: Formulas Getting Started | Formulas | Cloud Elements API Docs
title: Getting Started
description: Learn how to create formulas in Cloud Elements.
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 3
---

# Getting Started
To get started creating your own formulas, you can use the Formula Builder UI or our platform formula APIs.  If you are just getting started, we would recommend building formulas via the UI to help familiarize yourself with the different pieces of a formula and how they work.  

> **NOTE:** The Formula Builder UI leverages *only* our platform formula APIs, so anything you can do in the UI can also be done via our APIs.

# Creating Formulas via UI
To get started, we are going to demonstrate how to create a very simple formula that leverages a few of the different step types.  This formula will listen for events from a CRM element, and then send an email using the Messaging hub.

> **NOTE:** For this documentation, it is assumed you have an instance of Salesforce and SendGrid already provisioned, and events *must* be enabled for Salesforce.

Creating the formula described above using the Formula Builder UI:

// TODO - JJW - make video of this formula here
![FormulaBuilderUIIntroduction](/assets/img/formulas/formula-builder-ui-introduction.mov)

Modifying the original formula to filter out events that are not Contact UPDATED events.

// TODO - JJW - make video
![FormulaBuilderUIFilter](/assets/img/formulas/formula-builder-ui-filter.mov)

Modifying our original formula to leverage variables:

// TODO - JJW - make video not hard-coding endpoints but instead creating variables
![FormulaBuilderUIVariables](/assets/img/formulas/formula-builder-ui-variables.mov)

JSON snippets for everything that was done in the videos above:

// TODO - JJW - make JSON available for formula, instance and an execution

# Creating Formulas via API

In order to go about creating formulas and formula instances via the API, please reference our "API Docs" section on the right side panel.

> **PROTIP:** An easy way to get started using the APIs is to create a formula using the UI and then "Export" it via the Console UI.  This simply downloads the JSON representation of that formula and you can then go about manipulating and using that JSON in our platform formula APIs.

> **NOTE:** The platform formula APIs show a sub-resource of a formula called `configuration`.  This is what we call "Variables" throughout our documentation and in the Formula Builder UI.
