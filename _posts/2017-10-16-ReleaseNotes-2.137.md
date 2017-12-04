---
title: Cloud Elements Version 2.137
date: 2017-10-16
heading: Release Notes
layout: release-note-item
label: Production
---

### Updated ConnectWise CRM REST and FreshService Elements

* Added create, retrieve, update, delete, and search for `time-entries` in ConnectWise CRM REST.
* Added resource `POST /incidents/{id}/members` in ConnectWise CRM REST allowing user to add a resource/member to an incident.
* Added resource `GET /incidents/{id}/time-entries` in ConnectWise CRM REST allowing user to retrieve all time entries related to an incident.
* Added resource `GET /incidents/{incidentid}/comments` in FreshService allowing user to retrieve all comments related to an incident.
* Added resource parameter to `GET /users` in FreshService allowing user to search by email.


### Eloqua Element: New `custom-objects`Resource and Polling

Added create, retrieve, update, delete, and search for `custom-objects` resource in Eloqua.
Also added support for polling on this resource.

### QuickBooks Online Element: Fixed single quotes issue (escape sequence) for  `GET Vendors`

You can now pass the query value with two single quotes .
Ex: `CompanyName = 'Bruce''s Office Machines'`

### Hubspot CRM Element: Enhanced descriptions and paging on  resources

* Default `pageSize` for `GET /contacts` API and `GET /contacts/{id}/activities` is now set to 100.
* For `GET /contacts/{id}/activities`, if you try to pass a `pageSize` greater than 100, we will now return the appropriate error in the element error response header.
* Added validation on the `id` passed to `GET /contacts/{id}/activities` and `GET /accounts/{id}/activities` API.
* The description on `pageSize` parameter on `GET /accounts` and `GET /opportunities` now reflects the default `pageSize` as 100.
* Corrected the description on `GET /accounts/{accountId}/activities` API.

### Quickbooks Element: Enhanced to support OAuth 2.0 authentication

Added support for Quickbooks apps created after July that require the OAuth 2.0 authentication flow.

### Fixed bug that caused intermittent HTTP requests to fail

Fixed bug that was causing intermittent HTTP connections to reset on outbound API calls.
