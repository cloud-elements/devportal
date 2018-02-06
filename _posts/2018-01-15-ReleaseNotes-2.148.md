---
title: Cloud Elements Version 2.148
date: 2018-01-15
layout: release-note-item
release: 2.148
heading: Release Notes
---

## Elements

### Box: Added search API

Use `GET /search` to search a Box account for files or directories. You can filter the search by directories, dates, and tags.

### Twilio: Filter by phone number

You can use the `from` key word in CEQL searches t filer by phone number. For example, `from='+1123456789'`.

### HubSpot CRM: Fixed pagination for `timeline-event-types`

Pagination was not working correctly for requests made to the `timeline-event-types`resource. HubSpot does not support pagination of this resource, but we now use Cloud Elements pagination to return the expected results.

### Bullhorn: Updated the `GET /objectName/{id}/metadata` endpoint

We updated the `GET /objectName/{id}/metadata` endpoint so tat it returns expected results.

### Adobe Sign: Updated filtering for `/users` endpoint

Previously, when making GET /users requests and filtering using CEQL, the results included all users. You can now filter users using CEQL.

### Facebook Lead Ads: Specify the list of fields for `GET /pages/{id}`

Use the new fields parameter to filter the information returned on the response.

### QuickBooks Online: Added `/estimates` resource

The new `/estimates` resource supports the GET, GET {id}, POST, DELETE, and PATCH methods.

### QuickBooks Online: Download PDFs

When making `GET /{objectName}/{objectId}` and `GET /estimates/{id}` requests, include `accept: application/pdf` in the header to retrieve PDFs returned in the response.

### Pardot: Polling transformed objects

You can set up polling on transformed resources.

### Maximizer: Updated GET requests to `/contacts`, `/companies`, and `/addressbook-entries`

You can now make GET requests to the `/contacts`, `/companies`, and `/addressbook-entries` resources.

### BigCommerce: Fixed Bulk issues with transformed resources

You can now create a bulk job on an transformed resource.

## Cloud Elements 2.0

### Cancel OAuth 2.0 authentication

When authenticating with an OAuth 2.0 API provider, you can now cancel the authentication process after you have already logged in to the API provider's application.

### Update email address

You can now update the email address associated with your profile.

### All passwords masked in authentication code samples

We now mask all parameters set as password type in the element configuration.
