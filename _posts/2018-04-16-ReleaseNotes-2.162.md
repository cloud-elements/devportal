---
title: Cloud Elements Version 2.162
date: 2018-04-16
layout: release-note-item
release: 2.162
heading: Release Notes
---
## Element Updates

### Box: Added support for all webhook event triggers

We now support webhooks for webhook event triggers listed in the [Box documentation](https://developer.box.com/reference#event-triggers).

### Intacct.: Added discovery API

Use `GET /objects/{objectName}/metadata` to view data about Intacct. version 3.0 objects.

### Google drive: Download image files with Cloud Elements API docs

Previously, downloading files with `GET /files` in the Cloud Elements 2.0 API docs resulted in an error. The download worked correctly with requests directly to the API outside of the API docs. We fixed the bug and you can download images using the Cloud Elements 2.0 API docs.

### Maximizer: Added the `/appointments` resource

Use the following endpoints to work with appointments in Maximizer:

* POST /appointments
* GET /appointments
* PATCH /appointments/{id}
* DELETE /appointments/{id}

### Quickbooks Online: Updated messaging when failing to authenticate with a sandbox account

Previously the Quickbooks Online created an element instance for an account with a sandbox account even if there was an error in authentications. Now when a problem occurs with sandbox authentication we return a an error message..

### OneNote: Authenticated instances remain authenticated beyond sixty minutes

In some cases, after you authenticated an element instance and made successful requests, request made after sixty minutes resulted in errors. We corrected the element configuration to prevent this from happening.

### Autotask elements: Added support `customFieldsOnly` Query on the Discovery API

We enhanced `GET /objects/{objectName}/metadata` to support `customFieldsOnly` for Autotask CRM and Autotask Helpdesk.

### QuickBooks Online: Added `PATCH /payments/{id}/void` endpoint

Void payments in QuickBooks Online with `PATCH /payments/{id}/void`.

### Microsoft Dynamics CRM: Pagination for `GET /cases` and `GET /knowledge-articles`

We updated our API docs to clarify the pagination used for `GET /cases` and `GET /knowledge-articles` is via Next Page Tokens, not page numbers.

### SugarCRM: Added discovery API

Use `GET /objects/{objectName}/metadata` to view data about Sugar CRM objects.

### All: Added an endpoint to retrieve the Open API specifications for an object

Use `/object/{objectName}/docs` to retrieve the Open API specifications (Swagger docs) for an object.

## Cloud Elements Platform Updates

### Rename VDRs

Change the name of a VDR at the organization, account and level by passing a new <code>objectName</code> in the request body of the following endpoints:

* `PATCH /organizations/objects/{objectName}`
* `PATCH /accounts/objects/{objectName}`
* `PATCH /instances/objects/{objectName}`

If the VDR includes different level fields, those are not changed by this request. This essentially splits the VDR where the renamed VDR includes only the fields at the level of the endpoint while the previous name includes only fields at the other levels. Use the other endpoints to change the name of the VDR associated with the different level fields.

### Object v2 Endpoint: List Element Objects and their Sources

Use GET /objects to retrieve a list of all data objects in an element and their source (the vendor, a VDR, or Cloud Element library). To specify the version 2 endpoint, pass `Elements-Version: Helium` in the request header.

```
curl -X GET \
https://api.cloud-elements.com/elements/api-v2/objects \
-H 'authorization: User sAfK7LJGNz5ZHcNrvdJvLI=f03WbTbH6aRKc0HJ3oOIi, Organization 58168435e3b9959a929eb04b6218b9a2, Token yCCtl7Pqx0E4Qf6MBFXxT+/QcbogS1q1Deyw+1vSW=A3' \
-H 'Elements-Version: Helium ' \
-H 'Content-Type: application/json' \
```
