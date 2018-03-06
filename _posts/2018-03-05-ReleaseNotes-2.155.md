---
title: Cloud Elements Version 2.155
date: 2018-03-05
layout: release-note-item
release: 2.155
heading: Release Notes
---
## Element Updates

### Plaid: New element

We added the Plaid element to our catalog. Plaid is available in the Finance hub. Connect a Plaid account to integrate with accounts, transactions, institutions, categories, and more. Take a look at the [Plaid Element docs](/docs/elements/plaid/) and get started today.

### Fortnox: New element

We added the Fortnox element to our catalog. Fortnox is available in the ERP hub. Connect a Fortnox account to integrate with projects, invoices, vouchers, products, and more. Take a look at the [Fortnox Element docs](/docs/elements/fortnox/) and get started today.

### QuickBooks Online: Added support for total count in responses

If you want to receive a total count in the response headers, include `returnCount=true` as a query parameter in your request.

### Salesforce Sales Cloud: Enabled bulk upload via serial mode

If you encounter record lock issues when performing bulk uploads, you can try serial mode instead of the default parallel node. See the Salesforce documentation topic [General Guidelines for Data Loads](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_planning_guidelines.htm) for more information about parallel and serial modes.

To switch to serial mode pass `"concurrency":"serial"` in the request metadata.

### WooCommerce: Normalized CEQL

We modified the `where` parameter for WooCommerce products and orders to allow native WooCommerce and normalized queries. For example, to search for objects created after 2016-04-28T21:58:25, you can either query `created_date > '2016-04-28T21:58:25'` or `after = '2016-04-28T21:58:25'`.

### Intacct.: Fixed a bug where `GET /bills` and `GET /bills/{id}`returned responses differently

The format of responses from `GET /bills` and `GET /bills/{id}` match.
