---
title: Cloud Elements Version 2.150
date: 2018-01-28
layout: release-note-item
release: 2.150
heading: Release Notes
---

### Marketo: Merge contacts endpoint

We added the `POST /contacts/{contactId}/merge` endpoint so you can merge two or more known lead records into a single lead record. Merging does not overwrite existing information, but adds information where none already exists. The "merge to" record identified in the path becomes the single record for the contact (lead), while Marketo deletes the "merge from" record.

Pass the `leadID` of the contact to merge information into as part of the request, for example `POST /contacts/350/merge`. Include the `leadID` of the contact to merge information from in the body of the request. You can include a single lead record (`"leadId": "355"`) or multiple records in a comma-separated list (`"leadIds": "355,466"`).

Your body should include either a singe `leadId` or a comma-separated list of `leadIds`. Optionaly include `"mergeInCRM": "true"` to attempt to merge the designated records in a natively-synched CRM. This is valid only for instances with are natively synched to Salesforce.

In this example we're merging the information from leadID 351 into 350.

```bash
curl -X POST "https://api.cloud-elements.com/elements/api-v2/hubs/marketing/contacts/350/merge" -H "accept: application/json" -H "Authorization: User xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx, Organization xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxc, Element xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" -H "content-type: application/json" -d "{ \"leadId\": \"351\", \"mergeInCRM\": true}"
```

### Box: New `/file/comments` endpoints

We added the following comments endpoints to the /files resource:

* GET /files/comments
* POST /file/comments
* GET /file/comments/{commentId}
* PATCH /file/comments/{commentId}
* DELETE /file/comments/{commentId}

### Intacct.: Added support for the Callback Notification Signature Key

When setting up events in Intacct you can now include a Callback Notification Signature Key.

### Intacct.: Added expense-reports resource

When setting up events in Intacct. you can now include a Callback Notification Signature Key.

### Maximizer: Added support to filter GET response fields

You can now specify the fields to include in GET responses. Supported requests include:

* GET /addressbook-entries/{id}
* GET /companies/{id}
* GET /contacts/{id}
* GET /addresses/{id}
* GET /custom-records/{id}
* GET /opportunities/{id}
* GET /tasks/{id}

### Audit Log shows changes to formulas

Changes to formulas now appear in the audit logs.
