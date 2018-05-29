---
title: Cloud Elements Version 2.169
date: 2018-05-28
layout: release-note-item
release: 2.169
heading: Release Notes
---
## Element Updates

### Cloud Elements for Stripe: Added `/post`, `/patch` and `/delete` endpoints to the `subscriptions` resource

Manage subscriptions with these new endpoints:

* POST /subscriptions
* PATCH /subscriptions/{id}
* DELETE /subscriptions/{id}

### Box: Updated status codes

When failing to create folders or upload files we returned a status code of 502. We updated this code so now failure to create a folder with an invalid name returns a 400 Bad Request status. Failure to upload a file returns a 403 Forbidden status code.

### Agile Central (Rally): New element

We added the Agile Central (Rally) element to the general hub. Use the Agile Central (Rally) element to integrate with defects, stories times, projects, and more. Take a look at the [Agile Central (Rally) docs](/docs/elements/caagilecentral/) and get started today.

### Dropbox: Duplicate events in the UK environment

We corrected an issue where Dropbox events were duplicated in the UK environment.

### Oracle Sales Cloud: Added discovery API

We added `GET /objects/{objectName}/metadata` to retrieve a list of custom fields in Oracle Sales Cloud.

### DocuSign: Added ability to include API key and secret when authenticating an element instance

When authenticating an element instance, enter your OAuth API Key and OAuth API secret to connect to demo or production accounts.

### Paypal v2: Added `POST /orders` endpoint

Create an order with `POST /orders`.

### Marketo: Updated bulk status

When checking on the status of a bulk job with `GET /bulk/{id}/status`, `bulk_finish_time` appears only of the job finished or was aborted

### Hubspot Marketing: Added `properties` and `propertygroups` endpoints to the `accounts` resource

We added the following endpoints:

* GET /accounts/properties
* GET /accounts/properties/{propertyId}
* PATCH /accounts/properties/{propertyId}
* DELETE /accounts/properties/{propertyId}
* POST /accounts/properties
* GET /accounts/propertygroups
* POST /accounts/propertygroups
* PATCH /accounts/propertygroups /{propertygroupId}
* DELETE /accounts/propertygroups /{propertygroupId}


## Platform Updates

### Added bulk to Elements built with Element Builder

If you built an element in Cloud Elements 2.0 and set up bulk on resources, bulk endpoints did not appear in the API docs. Bulk now appears in the API docs for custom elements.

### CEQL queries enhanced to allow the reserved word "order"

You can include the reserved word `order` in queries like `select * from order`, where order is the name of a resource, not a reserved word.





