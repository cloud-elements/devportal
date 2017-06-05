---
heading: Reference Formula Context
seo: Reference Formula Context | Formulas | Cloud Elements API Docs
title: Reference Formula Context
description: How to Reference Formula Context
layout: sidebarleft
apis: API Docs
restContentVersion: referenceapi
platform: formulas
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 20
---

# Formula Context

Each component of a formula &mdash; triggers, steps, and variables &mdash; produce values that help to create the formula context. The formula context is passed from step-to-step, allowing you to use these values in any subsequent steps in your formula. You call these values with the following syntax:

* Triggers: `${trigger.}`. For example, `${trigger.event.objectType}`, `${trigger.args.objectId}`, or `${trigger.body.message}`.
* Steps: `${steps.<STEP_NAME>.}`. For example, `${steps.constructBody}`, `${steps.retrieveOriginalContact.response.body}`, or `${steps.buildMetaData.headers}`.
* Variables: `${config.<VARIABLE_NAME>}`. For example, `${config.originInstance}`, `${config.destinationInstance}`, or `${config.companyName}`.

Use dot notation to access the values found within the scope of each component.

## Element API Request and HTTP Request Steps

The following example shows the scope of an Element API Request and HTTP Request Step. You can access the values in this step through syntax such as:

* `$steps.my-step-name.request`
* `$steps.my-step-name.request.body`
* `$steps.my-step-name.response`
* `$steps.my-step-name.request.headers`

```json
{
  "my-step-name": {
    "request": {
        "query": "{}",
        "body": "{\"Name\":\"New Account Name\"}",
        "method": "POST",
        "path": "{}",
        "uri": "/elements/api-v2/hubs/crm/accounts",
        "headers": "{\"authorization\":\"Element /ABC=, User DEF=, Organization GHI\",\"content-length\":\"14\",\"host\":\"jjwyse.ngrok.io\",\"content-type\":\"application/json}"
    },
    "response": {
      "code": "200",
      "headers": "{\"Set-Cookie\": \"CESESSIONID=2CA15552EE56EAF65BF1102F6CACEACC;Path=/elements/;HttpOnly\"}",
      "body": "{\"Id\": \"001tx3WcAAI\", \"Name\": \"New Account Name\"}"
    }
  }
}
```
