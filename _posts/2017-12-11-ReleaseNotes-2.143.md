---
title: Cloud Elements Version 2.143
date: 2017-12-11
layout: release-note-item
release: 2.143
heading: Release Notes
---

## Elements

### QuickBooks Online: Added support for webhooks

You can now set up events with polling or webhooks.

### Netsuite ERP 2016 Release 1: Added resources

We added the following resources:

* ledger-accounts (GET, POST, DELETE, PATCH)
* checks (GET, POST, DELETE, PATCH)
* posting-periods (GET)

### ServiceNow and ServiceNow OAuth: Updated subdomain requirements

You can use either just the subdomain or the entire URL when authenticating element instances. See the [ServiceNow OAuth docs](/docs/elements/servicenow-oauth/authenticate.html) or [ServiceNow docs](/docs/elements/servicenow/authenticate.html) for complete steps.

### Marketo: Added support for `POST /bulk/programsLeads`

You can now upload a file of objects to `programsLeads`.

### Square: Updates

We updated models, pagination, and authentication.

### WooCommerce: Updated `GET /products-attributes`

We added `page` and `pageSize` parameters to the `GET /products-attributes` endpoint.

### Intacct.: Added the `bills-payments` resource and updated pagination

* We added the `bills-payments` resource (GET, POST, PATCH, DELETE).
* We addressed pagination issues reported for the Intacct. element.

### Stormpath: Deprecated

We deprecated the Stormpath element.
