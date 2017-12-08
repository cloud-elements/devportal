---
title: "Cloud Elements Version 2.136"
date: 2017-10-10
layout: release-note-item
heading: Release Notes
release: 2.136
---

### Enhanced Sharepoint element to handle implicit path creation

The Sharepoint element will now create a path while updating file metadata, if it does not exist.

Implicit path creation will work for the following APIs:

* `PATCH /files/metadata`
* `PATCH /files/{id}/metadata`

### Improved Salesforce Sales Cloud search

Fixed Salesforce Sales Cloud search for empty emails. ex: `email=''`.

Fixed the issues with pagination for Salesforce Service Cloud `categories`.

### Added new Salesforce Sales Cloud resources

You can now manage ContentDocuments, ContentVersions, & ContentDocumentLinks using the following set of resources:

* GET /files
* GET /files/{fileId}/metadata
* GET /files/{fileId}/versions
* GET /files/{fileId}/versions/{versionId}
* GET /files/{fileId}/versions/{versionId}/metadata
* GET /files/{fileId}/versions/latest-version
* GET /files/{fileId}/versions/latest-version/metadata
* GET /{objectName}/{objectId}/files
* GET /{objectName}/{objectId}/files/details
* POST /files
* POST /files/{fileId}/versions
* POST /{objectName}/{objectId}/files
* POST /{objectName}/{objectId}/files/{fileId}
* PATCH /files/{fileId}/metadata
* PATCH /files/{fileId}/versions/{versionId}/metadata
* DELETE /files/{fileId}

### Enhanced Volusion bulk to handle OrderDate

The Volusion `/bulk/query` can now handle orders with fields `OrderDateUtc` and `OrderDate`.



### Enhanced Netsuite Finance V2 element



Added CRUDS for `/checks` resource

Added CRUDS for `/ledger-accounts`

Added RS for `/posting-periods`



### Implemented 2FA and Password Policy configuration



Two-factor authentication can now be configured by an organization admin for all of that organization's users with either SMS or Google Authenticator.

Password reset emails now contain a link to reset your password, as opposed to resetting the password and sending you the new password.



Fixed element extend to allow using the same resource name across different accounts



### Fixed element extend to allow using the same resource name across different accounts.



Fixed bulk upload using large files for the Marketo element



### Fixed bulk upload using files that are larger than 10MB.

Improved messaging for `Failed` errors for bulk upload.
