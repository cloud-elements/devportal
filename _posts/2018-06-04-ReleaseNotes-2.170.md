---
title: Cloud Elements Version 2.170
date: 2018-06-04
layout: release-note-item
release: 2.170
heading: Release Notes
---
## Element Updates

### Infusionsoft Marketing Automation: Added `GET /leads` and `GET /accounts`

We added the `GET /leads` and `GET /accounts` endpoints.

### InfusionsoftCRM: Added `GET /contacts` and `GET /opportunities`

We added the `GET /contacts` and `GET /opportunities` endpoints.

### Marketo: Bulk updates

When using the continue from and limit functions, bulk APIs for Marketo now indicate when finished retrieving the specified objects.

We also updated `GET /bulks/{id}/status` to return the `recordsCount` value based on data written in to CSV file.

Lastly, we updated the messaging for using incorrect query parameters.

### Connectwise CRM REST: Now extendable

You can now add resources to extend the Connectwise CRM REST element.

