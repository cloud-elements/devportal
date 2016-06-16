---
heading: Formulas
seo: Formula FAQs | Formulas | Cloud Elements API Docs
title: FAQs
description: Frequently Asked Questions
layout: docs
apis: API Docs
platform: formulas
breadcrumbs: /docs/products/api-toolkit.html
parent: Back to API Toolkit
order: 8
---

# FAQs

## **How do I go about debugging a formula instance execution?**
As always, everything we do is API-first, so you can always use the formula platform APIs to retrieve details about an execution including all of that execution's step executions and step execution values.  To view all platform APIs for formulas, click on "API Docs" in the right-hand panel.

That being said, our Console UI leverages those APIs for you, so sometimes it can be easier to view executions there.  To do so, simply login to the Cloud Elements Console UI, and click on "Executions" in the left-hand panel under the "Formulas" heading.

![ExecutionsScreen](/assets/img/formulas/executions.gif)

## **My formula is not running.**
First off, that's not a question.  Secondly, if your formula is not running, check the following:

* Have you created an instance of the formula?
* Is the trigger's element instance active?
* If the trigger is an event type, are events enabled for the trigger's element instance?
* If you click on "Events" in the LHS of the Console UI, can you see that we are receiving events for this element instance?
* Are both the formula and formula instance set to "active"?
* If you click on "Executions" in the LHS of the Console UI, can you see that it's running but failing somewhere?
* Is it a full moon? (jokes...)

## **How fast do formulas run?**
Unfortunately, this is a *very* difficult question to answer.  That being said, the speed of a given formula is dependent upon things like:

* How many steps does it have?  
* What type of steps are running?
* How fast are the `elementRequest` step endpoints' APIs?
* How many concurrent formulas does your Cloud Elements account have running?

## **Can I use external Javascript libraries in my Javascript?**
Some external Javascript libraries are supported.  For the most up-to-date list, or to request a new library be supported, contact [Cloud Elements Support](mailto:support@cloud-elements.com).
