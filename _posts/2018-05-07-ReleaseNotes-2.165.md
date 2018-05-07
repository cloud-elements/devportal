---
title: Cloud Elements Version 2.165
date: 2018-05-07
layout: release-note-item
release: 2.165
heading: Release Notes
---
## Element Updates

### Maximizer: Events

Events in Maximizer were previously not triggering formulas. We corrected the bug and now Maximizer events can trigger formulas.

### Concur: Add `GET /locations` endpoint

We added `GET /locations` to retrieve the details of locations that are used by Concur.

### Sharepoint: Added `sites` resource

Access and manage Sharepoint sites with the new `sites` resource.

### Netsuite: Updated Visibility of Role Id during authentication

When you authenticate an element instance using the Basic authentication method, the Role ID is available.

### Netsuite ERP 2016 Release 1: Added `cash-sales` resource

We added the `cash-sales` resource with the following endpoints:

* GET /cash-sales
* GET /cash-sales/{id}
* POST /cash-sales
* PATCH /cash-sales/{id}
* DELETE /cash-sale/{id

### LaunchWorks LaunchBI Elements

We added the following LaunchBI elements for LaunchWorks customers:

* SAP Business Objects REST by LaunchBI
* SAP Business Objects by LaunchBI
* Tableau by LaunchBI
* Salesforce by LaunchBI

### Marketo: Added `leads` resource

We added the `leads` resource with the following endpoints:

* GET /leads
* POST /leads
* DELETE /leads/{id}
* GET /leads/{id}
* PATCH /leads/{id}
* POST /leads/{leadId}/interactions
* POST /leads/{leadId}/merge

### QuickBooks Online: Added `company-info` resource

Access the QuickBooks `companyinfo` resource that contains basic company information.

### Hubspot: Fixed `/delete` responses

Previously `/delete` requests received a response with a 200 status code (success) even if the request included an invalid id. We corrected the issue and return the correct code.

### DocuSign: Delete documents from envelopes

Use `DELETE /envelopes/{id}/documents/{documentId}` to delete one or more documents from an existing draft envelope.



