---
title: Cloud Elements Version 2.134
date: 2017-09-25
layout: release-note-item
heading: Release Notes
label: "Staging"
---

### Added analytic-conversation by ID resource to the Lithium element

Added the GET /changed-analytic-conversations/{conversationId} resource.

### Added insufficient storage error message for the Dropbox element

You should now receive a 409 status code with an insufficient storage space error message when attempting to upload a file to Dropbox when sufficient storage space is not available.

### Added header for page size violation for retrieving contacts in the Hubspot CRM element

Hubspot only returns a maximum of 100 contacts per page.
Therefore, if you specify a pageSize greater than 100 while calling the GET /contacts API, the response will still only have up to 100 records, but it will have an extra header of Elements-Error, which will describe this situation.

### Updated OneDrive & OneDriveV2 element status codes for access token failures
For onedrive, we changed the status code from 502 to 401, and for onedrivev2 we changed it from 500 to 401 when an access token is revoked or fails to refresh.

###  Added implicit path support for Citrix Sharefile

We've added support for implicit path creation for the following APIs in the Citrix Sharefile element:

* POST /files
* PATCH /files/metadata
* PATCH /folders/metadata
* POST /folders/copy
* POST /files/copy
* POST /folders

We now also return an error if the overwrite parameter is set to false and a file already exists at the given location for these two APIs:

* POST /files
* PATCH /files/metadata
