---
heading: Formulas
seo: Formula FAQs | Formulas | Cloud Elements API Docs
title: FAQs
description: Frequently Asked Questions
layout: sidebarleft
apis: API Docs
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 8
---

# FAQs

## **How do I go about debugging a formula instance execution?**
As always, everything we do is API-first, so you can always use the formula platform APIs to retrieve details about an execution including all of that execution's step executions and step execution values.  To view all platform APIs for formulas, click on "API Docs" in the right-hand panel.

That being said, our Console UI leverages those APIs for you, so sometimes it can be easier to view executions there.  To do so, simply login to the Cloud Elements Console UI, and click on "Executions" in the left-hand panel under the "Formulas" heading.

![ExecutionsScreen](/assets/img/formulas/executions.gif)

The `GET /formulas/instances/executions/{executionId}/errors` API allows you to retrieve errors for a formula instance execution.
This API returns any steps that failed and the step execution value containing the error message.

This can also be accessed via our Console UI within the "Executions" Screen:

![ExecutionErrorsScreen](https://cloud.githubusercontent.com/assets/7445993/19490597/037c8d34-952d-11e6-8c96-c2280ff329a2.gif)

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

## **How can I monitor for errors that occur in my formula?**
You can set up a formula instance to send notifications for any errors via email or webhooks. This is done by setting the optional `notification.email` and/or `notification.webhook.url` settings when creating or updating the formula instance. You can do this via the formula instances UI or API. Both fields can be set to a single value or a comma separated list. The formula instances API payload should look like this:

```json
{
    "name": "Formula Instance Name",
    "active": true,
    "configuration": {
        "<key>": "<value>"
    },
    "settings": {
        "notification.email": "email1@test.com, email2@test.com",
        "notification.webhook.url": "http://listener.com"
    }
}
```

## **What if I need my formula to run only one execution at a time?**
If you need to run your executions in a queue so only one execution is running per formula instance at any point in time, you can set the `singleTreaded` flag to `true` on the formula. This is not recommended unless it is absolutely required by your use case as it will increase the overall execution time.

## **Can I do file uploads and downloads in a formula?**
Yes. There are two ways to do this, but the preferred way is using a `elementRequestStream` step. The second option, using an elementRequest or httpRequest step is only supported for smaller files. If you are using our bulk APIs or downloading another large file, you need to use the `elementRequestStream` step.

## **How can I do file uploads and downloads in a formula?**
#### Option #1: The `elementRequestStream` step (the far superior option)

In a `elementRequestStream` step you can move a file from one place to another. This is done in a stream and the file content is not stored in the context of the formula. In the step you will specify all the necessary parameters for both an upload and a download API call. The step will execute the download API call and stream the response body of that request to the upload API.

#### Option #2: The other option

> **NOTE:** You should not use this unless the file is very small and option #1 will not work for you.

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

## **What are some uses cases to use the `retryFormulaExecution` step type?**
The typical use cases to use a `retryFormulaExecution` step type are -

1. If an endpoint that the formula uses is going to be down for an extended period of time, i.e., the endpoint is down for maintenance and not due to a network hiccup. In such a scenario, retry attempts of the `request`, `elementRequest` or `httpRequest` step are not enough as such attempts will retry in a second or less. The formula execution as a whole needs to truncated and retried with the same input data (event, manual trigger, etc.), minutes or even hours later.
2. If an event triggers a formula execution, but the object at the source endpoint does have all the data in the required state yet, perhaps because there is an asynchronous workflow in place at the source service endpoint. This will require that the formula be re-executed in a few minutes, so that the necessary data condition of the object for which the event was triggered, has now occurred at the endpoint.

Basically, any use case where the formula execution needs to wait for a few minutes or more, and retry the execution, can be accomplished using a `retryFormulaExecution` step.
