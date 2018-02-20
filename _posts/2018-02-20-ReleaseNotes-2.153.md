---
title: Cloud Elements Version 2.153
date: 2018-02-20
layout: release-note-item
release: 2.153
heading: Release Notes
---
## Element Updates

### Intacct.: Added `files` endpoints to the `folders` resource

We added the following endpoints to the folders resource so you can manage attachments:

* POST /folders/{folderName}/files
* GET /folders/{folderName}/files
* PATCH /folders/{folderName}/files/{id}
* GET /folders/{folderName}/files/{id}
* DELETE /folders/{folderName}/files/{id}

### Square: Added `customers` endpoint

You can now manage the customers associated with your Square element. We added the following endpoints:

* POST /customers
* GET /customers
* PATCH /customers/{id}
* GET /customers/{id}
* DELETE /customers/{id}

### Intacct.: Transformations of the `bill-payments` resource included duplicate fields

We removed the duplicate fields. When you map `bill-payments` to a common resource, you will no longer encounter duplicate fields.

### Bullhorn: Updated models for the `placements` resource

In the `placements` resource models the `clientContact` field was shown as `clientcontact`. We updated the model to show the correct value.

### Intacct.: Added elements-total-count header to paged responses

We added a response header to indicate the total Intacct records when querying.

### Onedrive: Support for Converged App authentication

When you authenticate an element instance, you can now include the credentials from a converged app &mdash; an app that accepts both MSA & Azure AD sign-in. To authenticate using a converged app, you must authenticate an element instance using the APIs.

### SAP Business One: Added `project-codes` resource

You can now fin projects using the `project-codes` resource.

### Zoho CRM: Added configurable URLs to support authentication with both US and European accounts

You can now override the default US URLs for **Authentication URL** and **Base URL** with European URLs.

### QuickBooks Enterprise: Added `tax-rates` and `tax-codes` resources

You can now perform CRUD operations on the tax rates and tax codes in QuickBooks Enterprise.

### Google Drive: Added support for thumbnails

We enhanced `POST /files` to accept a thumbnail file to associate with a file. We also added the following endpoints to update thumbnails:

* POST /files/{id}/thumbnails
* POST /files/thumbnails

### Intacct.: Fixed authentication via Cloud Elements 2.0

Previously, authenticating via Cloud Elements 2.0 resulted in errors. You can now authenticate an instance of the Intacct. element in Cloud Elements 2.0.

## Cloud Elements Platform Updates

### Enabled Hash Verification for bulk job callbacks

To enable hash verification for bulk job callbacks, we updated the Event Notification Signature Key which is currently used to add an extra layer of security when receiving event callbacks.

In the UI, we renamed **Callback Notification Signature Key** to **Callback Notification Signature Key**. The **Callback Notification Signature Key** property is now available as an optional field, rather than part of event setup. If you configure the **Callback Notification Signature Key**, it will be used to provide hash verification in the header of bulk job and event callbacks.

The name of the configuration property `event.notification.signature.key` remains unchanged. If you set it, it will be used for bulk job and event callbacks.
