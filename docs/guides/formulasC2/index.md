---
heading: Building Formulas
seo: Overview | Formulas | Cloud Elements API Docs
title: Overview
description: Formula Overview
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/products/formulas/
---

# Overview

{% include callout.html content="This guide is intended for users of Cloud Elements 2.0. Earlier version of Cloud Elements shares much of the same functionality. You can read documentation for the earlier version at <a href=../../guides/formulas/index.html>Formulas</a>." type="warning" %}

In Cloud Elements you can build **formula templates**&mdash;reusable workflow templates that are independent of API providers. Formula templates include triggers, like events or schedules, that kick off a series of steps. Formulas support a large variety of different use cases across different services.  For example, they can keep systems in sync, migrate data between systems, or automate business workflows.

After you build formula templates, you can use the templates to create **formula instances**. In formula instances, you replace the variables in the templates with actual elements and values.

Formulas are a great way to move the logic out of your apps and into Cloud Elements. This helps keep your code less complex and more maintainable so you can focus on meeting your customers' needs.

## Example

We provide detailed examples of various formulas in the [Examples](examples.html) section. But, to help you understand the power of formulas, here's a common example.

A common use case is keeping contacts synced across multiple systems. You might need to make sure that whenever a contact is added to Salesforce, it also syncs to Hubspot. To accomplish this, you must first [transform the data](/docs/guides/common-resources/index.html). Then, create a formula template that listens for updates to contacts in one CRM, and then pushes those contacts to another CRM. After you set up the template, create a formula instance where you plug in Salesforce as the source element and Hubspot as the target element.

## Definitions

To help you understand formulas, review the definitions in this section.

<dl>

<dt id="formula-template">formula template</dt>
<dd>{{site.data.glossary.formula-template}}</dd>

<dt id="formula-instance">formula instance</dt>
<dd>{{site.data.glossary.formula-instance}} </dd>

<dt id="formula-trigger">trigger</dt>
<dd>{{site.data.glossary.formula-trigger}} </dd>

<dt id="formula-step">step</dt>
<dd>{{site.data.glossary.formula-step}}</dd>

<dt id="formula-variable">variable</dt>
<dd>{{site.data.glossary.formula-variable}} </dd>

</dl>
