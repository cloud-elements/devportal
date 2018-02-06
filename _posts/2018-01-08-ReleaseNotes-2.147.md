---
title: Cloud Elements Version 2.147
date: 2018-01-08
layout: release-note-item
release: 2.147
heading: Release Notes
---

## Elements

### Bullhorn: Added /placements and /companies resources

You can now use the Bullhorn element to view, create, update and delete:
* Placements, which represent successfully filled job orders.
* Companies &mdash; the ClientCorporation at Bullhorn.

### Intacct.: Added /reporting-periods resources

Use the Intacct. element to get a list of reporting periods.

### GoodData: Updated requests to include required headers

Starting after March 31, 2018, the GoodData REST API will require every API request to contain the User-Agent header. We updated all of our requests to include the User-Agent header. See the [GoodData docs](https://help.gooddata.com/display/doc/API+Reference#/introduction/getting-started-with-the-gooddata-apis/mandatory-user-agent-header-in-api-requests) for more information.


### Freshservice: Improved filtering in the /users resource

To filter Freshservice users you can now pass a query in the where clause such as `email = 'test@gmail.com'`. You can filter on the following user fields:

* email
* mobile
* phone
* state

### Box: New /revisions endpoints

We added the following endpoints to the /files resource:

* GET /files/revisions by path
* GET /files/revisions/:revisionId by path
* GET /files/:id/revisions
* GET /files/:id/revisions/:revisionId

### Box: Updated Patch /files/{id}/custom-fields/{templateKey}

We removed the `template` field from the request body. Enter the template key in the path of `PATCH /files/{id}/custom-fields/{templateKey}` requests.

### OneDrive and Microsoft OneDrive for Business: New /revisions endpoints

We added the following endpoints to the /files resource:

* GET /files/:id/revisions to list all revisions by file Id.
* GET /files/:id/revisions/:revisionId to retrieve revisions by file Id.
* GET /files/revisions to list all revisions by file path.
* GET /files/revisions/:revisionId to retrieve revisions by file path.

### Zendesk: Updated transformations for the /attachments resource

In earlier versions, some fields in the /attachments resource were not transformed. You can now transform the fields in the /attachments resource.

### Infusionsoft: Elements renamed to match Infusionsoft naming conventions

The Infusionsoft element names have been changed as shown below:

| Hub | Previous Name   | New Name   |
| :------------- | :------------- | :------------- |
| CRM | Infusionsoft | Infusionsoft CRM
| Marketing | Infusionsoft | Infusionsoft Marketing Automation
| eCommerce | Infusion Soft ECommerce | Infusionsoft Online Sales

### Quickbook Enterprise: Added /vendor-credits and /creditcard-credits resources

You can now use the Bullhorn element to view, create, update and delete /vendor-credits and /creditcard-credits resources.
