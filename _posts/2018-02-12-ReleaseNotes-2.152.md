---
title: Cloud Elements Version 2.152
date: 2018-02-12
layout: release-note-item
release: 2.152
heading: Release Notes
---
## Element Updates

### OneNote: Added `DELETE /files` endpoint

You can use `DELETE /files` to delete pages from OneNote notebooks.

### JIRA: Added support for LIKE in CEQL and custom fields

You can now use LIKE in CEQL and query on custom fields. Here are some examples:

* GET /incidents where : summary LIKE 'QBO%'
* GET /incidents where : customfield_10100 = '1|hzzvw7:'
* GET /incidents where : customfield_12201 like 'testing new field blah blah'

### Google Drive: New `/file/comments` endpoints

We added the following comments endpoints to the /files resource:

* GET /files/comments
* POST /file/comments
* GET /file/comments/{commentId}
* PATCH /file/comments/{commentId}
* DELETE /file/comments/{commentId}

### Mailchimp: New `GET /campaigns/{id}/open-details` endpoint

You can now get detailed information about any campaign emails that were opened by a list member.

## Cloud Elements Platform Updates

### Common Resources: Add common resources mapped to sub-objects to the API docs

When you transform data from a field that includes sub resources, the common resource appears in the API docs and can make requests to the resource. For example, in the MailChimp element the `listsContacts` resource is nested in Cloud Elements as `lists/{id}/contacts`. If you map a field from MailChimp's `listsContacts` resource to your common resource and add the common resource to the API docs, the request appears as `lists/{id}/yourCommonResource`.

### Bulk: Upload bulk data in JSON

Some elements such as HubSpot, Marketo, Eloqua, and the Salesforce elements did not previously support uploading bulk data via JSON. You can now upload files in JSON format (`{"format" : "json"}`). Each JSON object should be on a new line or can be an array of JSON objects.

### Formula as a Resource status codes

{% include Formulas/faar-status-codes.md%}
