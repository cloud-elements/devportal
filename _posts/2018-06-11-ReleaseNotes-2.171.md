---
title: Cloud Elements Version 2.171
date: 2018-06-11
layout: release-note-item
release: 2.171
heading: Release Notes
---
## Element Updates

## SAP R/3 BAPI: New Element

We added the SAP R/3 BAPI element to the ERP hub. Use the SAP R/3 BAPI element to integrate with customers and BAPIs, and more.

## SAP S/4 BAPI: New Element

We added the SAP R/3 BAPI element to the ERP hub. Use the SAPS/4 BAPI element to integrate with customers and BAPIs, and more.

## SAP S/4 HANA Cloud: New Element

We added the SAP S/4 HANA Cloud element to the ERP hub. Use the SAP S/4 HANA Cloud element to integrate with customers, business partners, and more.

### Campaign Monitor: Added Basic authentication

Now you can choose to authenticate with OAuth 2.0 or Basic (API Key) credentials.

### QuickBooks Online: Added support for minor version of the API

In cases where you need to access an AI version different than the generally available version, add `quickbooks.minorversion` to the code used to authenticate an element instance. For more information, see [Minor Versions in the QuickBooks docs](https://developer.intuit.com/docs/00_quickbooks_online/2_build/20_explore_the_quickbooks_online_api/80_minor_versions).

### PostgreSQL: Added support for case-sensitivity in queries

Querying is now case-sensitive. For example, a query seeking `CompanyName` will return results for a column with a heading of `CompanyName`, but not `companyname` or `COMPANYNAME`.

### Pipedrive: Fixed a bug preventing webhooks from working

We now webhook events when monitored activity occurs at Pipedrive.

### Slack: Removed deprecated endpoints

We removed the following resources from our API docs that were deprectaed by Slack:

* POST /files/{fileId}/comment
* PATCH /files/{fileId}/comment/{commentId}

### Connectwise CRM REST: Added opportunities resource

We added the following endpoints:

* GET /opportunities
* POST /opportunities
* DELETE /opportunities/{id}
* GET /opportunities/{id}
* PUT /opportunities/{id}
* PATCH /opportunities/{id}

### Microsoft SQL Server: Added support for querying column names with periods

You can now search for column names that include periods. For example, you can now search for a column named `column.name`.

### QuickBooks Desktop: Added `/checks` resource

We added the following endpoints:

* GET /checks
* POST /checks
* DELETE /checks/{id}
* GET /checks/{id}
* PATCH /checks/{id}

## Platform Updates

### Added customers resource

Use `/customers` to manage the identity providers and organizations within a customer.
