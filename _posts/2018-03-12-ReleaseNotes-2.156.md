---
title: Cloud Elements Version 2.156
date: 2018-03-12
layout: release-note-item
release: 2.156
heading: Release Notes
---
## Element Updates

### Freshbooks Cloud Accounting: New element

We added the Freshbooks Cloud Accounting element to our catalog. Freshbooks Cloud Accounting is available in the Finance hub. Connect a Freshbooks account to integrate with invoices, payments, taxes, customers, and more. Take a look at the [Freshbooks Cloud Accounting Element docs](/docs/elements/freshbooksv2/) and get started today.

### Added `/ping` to multiple elements

Ping your authenticated instances to make sure they remain connected. We added the `/ping` resource to:

* OneDrive
* Microsoft OneDrive for Business
* Zendesk
* Adobe Sign
* Slack
* Sharefile
* Marketo
* Salesforce Sales Cloud
* Twilio
* Docusign
* Microsoft SQL Server
* MySQL
* PostgreSQL


### Docusign: Authenticate and element instance with OAuth 2.0

You can now choose an authentication method for Docusign, either OAuth 2.0 (new) or OAuth 2 Password (legacy).

### Box: Added tags to responses

Responses to the list of endpoints below return a `tags` object that includes a list of tags associated with the folder. The `tags` object appears only when the folder is tagged.

* GET folders/metadata
* PATCH folders/metadata
* GET folders/:id/metadata
* PATCH folders/:id/metadata

### Microsoft Dynamics CRM:  Added `/cases` and `/knowledge-articles` resources

Find and manage cases and knowledge articles in Microsoft Dynamics.

### QuickBooks Enterprise: Updated filtering with `TxnDate`

Added support for `TxnDate` processing on `creditcard-charges` and `creditcard-credits` resources.

### Salesforce Libraries: Squashed two bugs

Previously when you sent a  `POST /files` with `overwrite=true`, the new file did not overwrite the existing one. We updated the element so overwrite works as expected.

Metadata retrieved by `GET /search` did not include `modifiedDate`. We updated `GET /search` to include `modifiedDate` in the metadata.

### Twilio: Added `/addresses` and and `/accounts` resources

Manage your address and resources with the new `/addresses` and `/accounts` resources.

### Chargify: Added `/invoices` resource

Manage your invoices with the new `/invoices` resource.

### Eloqua: Added `/accounts` resource

Manage your accounts with the new `/accounts` resource.


## Cloud Elements Platform Updates

### Element Builder: Added support for importing OData files

You can now import OData files to create a new element.
![Odata Import](https://user-images.githubusercontent.com/2224488/36448975-f6586796-164e-11e8-82e4-fcb67333f366.gif)

### Audit-Logs Documentation

Access the documentation for the Cloud Elements audit-logs resource. This resource allows you to programmatically access the information available on the **Audit Logs** tab in **Activity**.
