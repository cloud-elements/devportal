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

For this documentation, Salesforce and SendGrid will be used to show an example formula. The use case presented is when a contact is created or updated in Salesforce, an email will be sent notifying the user of the origination or change. An Element Instance must be created for both of these endpoints prior to creating the following formula. Events must be enabled for Salesforce as well.

## Building a Formula

Prior to inputting any triggers or steps, it is helpful to think about the desired outcome of the formula. In our example, the desired outcome is to be notified via email when a new contact has been added or updated in Salesforce. The contact being created in __Salesforce__ will serve as the `trigger` putting our formula into action and ultimately ending with an email being sent via __SendGrid__.

Below is a short video, walking through using the Formula Builder UI to accomplish what is described above:

// TODO - JJW - make video of this formula here

// TODO - JJW - make video not hard-coding endpoints but instead creating variables

// TODO - JJW - make JSON available for formula, instance and an execution

# Creating Formulas via API

In order to go about creating formulas and formula instances via the API, please reference our "API Docs" section on the right side panel.

> **PROTIP:** An easy way to get started using the APIs is to create a formula using the UI and then "Export" it via the Console UI.  This simply downloads the JSON representation of that formula and you can then go about manipulating and using that JSON in our platform formula APIs.
