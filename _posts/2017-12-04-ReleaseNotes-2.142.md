---
title: Cloud Elements Version 2.142
date: 2017-12-04
layout: release-note-item
label: Production
heading: Release Notes
---

### Elements

#### Clover: New Element

We added a new Clover element to manage employees, time sheets, and roles for the employees based on their location. Take a look at the [Clover Element docs](/docs/elements/clover/) and get started today.

#### Facebook: Updated `/comments` resource

We updated the `POST /comments` and `DELETE /comments` endpoints to support an update to Facebook `/comments` API's. Now for each request you must add a page access token.

#### Xero: Updates

* Added polling for UPDATED events.
* Added support for element extendability. Add a resource and try it out!
* Added three new resources: contacts, credit-memos & bank-transfers.

#### QuickBooks Online: Added support for sandbox accounts

Enhanced QB Element to support Sandbox developer accounts. When authenticating an element instance, add the following to the `configuration` section of the authentication JSON:

```json
"configuration": {
  "use_sandbox": true
}
```

See updated authentication steps in the [QuickBooks Online Element docs](/docs/elements/quickbooksonline/authenticate.html).

#### Box: New endpoints in `custom-fields` resource

* Added the `PUT /files/{id}/custom-fields/{templateKey}` endpoint to update the custom fields value associated with a given file.
* Added the `PUT /files/{id}/custom-fields/{templateKey}` endpoint to update custom field values associated with a given file.

{% include note.html content="<code>PUT /files/{id}/custom-fields/{templateKey}</code> does not appear in our API documentation.   " %}

### Building Elements

You can now generate model schemas from sample payloads.
![Generate Model Schemas](https://user-images.githubusercontent.com/2224488/32973897-fe86acea-cbbf-11e7-9c4d-fe34a1182740.gif)
