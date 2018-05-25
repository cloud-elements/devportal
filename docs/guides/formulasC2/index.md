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
redirect_from:
  - /docs/guides/formulas/
order: 1
---

{% include callout.html content="<i>Building Formulas</i> includes steps to use Cloud Elements 2.0. The earlier version of Cloud Elements shares much of the same functionality. See documentation specific to that version at <a href=../../legacy/formulas/index.html>Formulas</a>." type="info" %}

# Overview

In Cloud Elements you can build **formula templates**&mdash;reusable workflow templates that are independent of API providers. Formula templates include triggers, like events or schedules, that kick off a series of steps. Formulas support a large variety of different use cases across different services.  For example, they can keep systems in sync, migrate data between systems, or automate business workflows.

After you build formula templates, you can use the templates to create **formula instances**. In formula instances, you replace the variables in the templates with actual elements and values.

Formulas are a great way to move the logic out of your apps and into Cloud Elements. This helps keep your code less complex and more maintainable so you can focus on meeting your customers' needs.

{% include callout.html content="<strong>On this page</strong></br><a href=#example>Example</a></br><a href=#definitions>Definitions</a></br><a href=#formula-engine-versions>Formula Engine Versions</a>" type="info" %}

## Example

We give detailed examples of formulas in the [Examples](examples.html) section. But, to help you understand the power of formulas, here's a common example.

A common use case is keeping contacts synced across many systems. You might need to make sure that whenever a contact is added to Salesforce, it also syncs to HubSpot. To do this, you must first [transform the data](https://docs.cloud-elements.com/home/common-object). Then, create a formula template that listens for updates to contacts in one CRM, and then pushes those contacts to another CRM. After you set up the template, create a formula instance where you plug in Salesforce as the source element and HubSpot as the target element.

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

## Formula Engine Versions

As of the first quarter of 2018, we support two versions of the formula engine: V1 and V3. The V1 engine remains the default engine and all formulas created prior to 2018 were created with the V1 engine. The V3 engine utilizes many architectural and technological improvements to offer efficiency and performance gains. However, your contacts at Cloud Elements will upgrade your formulas for you at first. This helps us to understand the consequences and to evaluate the results of the upgraded formulas. Over time you will be able to upgrade your own formulas, and soon the V3 engine will be the default engine on which you will build all formulas.

While you can access the functionality to upgrade a formula through the Formula Edit page, we encourage you to contact Cloud Elements before doing so. Note that you cannot upgrade a formula that uses single threaded executions.
