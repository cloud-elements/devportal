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

## **Can I do file uploads and downloads in a formula?**
Yes.

## **How can I do file uploads and downloads in a formula?**
If you have an elementRequest or an httpRequest step that calls an API which downloads a file, the response body will have the
following format:

```json
{
        "filename": "myFile.pdf",
        "type": "workflow-file-attachment",
        "content": "base64 encoded string of file"
}
```

You can then use that same body (or modify the filename first, if you would like) as the body of an elementRequest
step for an API that posts a file. You do not need to add any additional headers or parameters,
just the body in this format.

## **How can I make a multipart request in a formula?**
If you have downloaded a file in a previous step and want to make a multipart request with that file you can do that
using an elementRequest step with a body in the following format. In this example the call takes 2 form parameters,
one of which is a file and the other is JSON metadata. Again, you do not need to add any additional headers or
parameters to this call.

```json
{
    "parts": [
        {
            "name": "metaData",
            "content": {
                "your": "json"
            },
            "Content-Type": "text/plain"
        },
        {
            "name": "file",
            "filename": "myfile.jpg",
            "content": "the encoded string that you got when you downloaded the file",
            "Content-Type": "application/octet-stream"
        }
    ],
    "type": "workflow-multipart"
}
```
