---
title: Cloud Elements Version 2.140
date: 2017-11-20
layout: release-note-item
label: Production
---

### Elements

#### Square

Add the Square element to the new Employee hub. Use the Square element to manage time sheets, roles, employees and more based on employee location. Take a look at the [Square Element docs](/docs/elements/square/) and get started today.


#### Oracle Eloqua: Support for bulk on `custom-objects` resource

Added support for bulk upload and download on the Oracle Eloqua `custom-objects` resource.


### Hubs

#### Employee Hub

Added new Employees hub that includes the Square and



#### Act-On: Implemented CSV file upload functionality for POST /lists

You can now upload a CSV file to POST the contents of the list along with the list headers. Uploading a file is an optional parameter. You can directly create the list without the contents of the list or can create the list along with its contents in the CSV file.

#### BigCommerce: Updated `DELETE /product/{id}/sku/{skuId}`

Changed `DELETE /product/{id}/sku/{imageId}` to `DELETE /product/{id}/sku/{skuId}`.

#### QuickBooks Online: Customer Bill and Shipping Address transformations

We've fixed the transformation of Bill and Shipping Address lines 2 and 3 so that they are now available for transformation in the `Customer` object.

#### Marketo: Added endpoints

We added the following endpoints:

* List all channels
* Retrieve a channel by name
* Search for leads for a program
* List all partitions
* List all programs
* Create a program
* Delete a program
* Retrieve a program
* Update a program

#### Salesforce Marketing Cloud: Added endpoints

We added the following endpoints:

* `POST /data-extensions/{id}/rows`
* `PUT /data-extensions/{id}/rows`
* `PATCH /data-extensions/{id}/rows`
* `GET /attribute-sets endpoint`

#### Citrix ShareFile: Polling

Configure ShareFile events with either polling or webhooks.

#### Zuora: Supports OAuth 2.0 authentication

You can authenticate the Zuora element using OAuth 2.0 or Basic authentication.

### Formula as a Resource

Added the ability to create a formula as a resource on an element level. Create a resource of type 'FormulaAsResource' that is tied to a formula ID. That resource will show in the API documentation for the element. When that resource is called a formula instance will be auto-created. You can only auto create formula instances if the formula only has one element instance variable.

### User Profile

#### Bug: Passwords could not be changed in Cloud Elements 2.0

You can now change passwords in Cloud Element 2.0.

### `instances` API

You can now provide an optional query parameter of `resolveReferences=true` to `GET /instances/{id}/docs/{operationId}/definitions` to get the references resolved inline in the returned definition.
