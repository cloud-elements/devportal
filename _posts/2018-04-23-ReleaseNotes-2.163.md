---
title: Cloud Elements Version 2.163
date: 2018-04-23
layout: release-note-item
release: 2.163
heading: Release Notes
---
## Element Updates

### Greenhouse: New element

We added the Greenhouse element to the Human Capital hub. Use the Greenhouse element to manage candidates and jobs.

### Marketo: Custom objects APIs

We added the following endpoints to manage custom objects in Marketo:

* GET /custom-objects
* GET /custom-objects/{customObjectName}/custom-fields
* GET /custom-objects/{customObjectName}/custom-fields-templates
* POST /custom-objects/{customObjectName}/custom-fields
* GET /custom-objects/{customObjectName}/custom-fields/{id}
* PATCH /custom-objects/{customObjectName}/custom-fields/{id}
* DELETE /custom-objects/{customObjectName}/custom-fields/{id}

### Documents hub: Added support for nextPage token

Use nextPage to paginate response to `GET /folders/contents` and `GET /search` requests.

### Maximizer: Added the Maximizer Datacenter configuration

When you authenticate an element instance of Maximizer, include a value in Maximizer Datacenter (`maximizer.datacenter`). Use the data center where you access Maximizer if different than the default `caw`.

### Expensify: Updated `GET /reports` to return report contents

Previously `GET /reports` returned only the file name reports, but now returns the contents as well.

### Sage One: Added update and delete endpoints for `/bank-accounts` and `/ledger-accounts`

We added the following endpoints to Sage One:

* PUT /bank-accounts
* DELETE /bank-accounts
* PUT /ledger-accounts

{% include note.html content="Sage One does not support <code>DELETE /ledger-accounts</code>. " %}

### Citrix Sharefile: Added `/revisions` to the `/files` resource

Use the following endpoints to interact with file revisions:

* GET /files/{id}/revisions
* GET /files/{id}/revisions/{revisionId}
* GET /files/revisions
* GET /files/revisions/{revisionId}

### OneDrive: Authenticating through Cloud Elements 2.0 supports converged apps

We updated the scopes passed when you authenticate in Cloud Elements 2.0.

### Salesforce Files: Added `/revisions` to the `/files` resource

Use the following endpoints to interaction with file revisions:

* GET /files/{id}/revisions
* GET /files/{id}/revisions/{revisionId}
* GET /files/revisions
* GET /files/revisions/{revisionId}

### Salesforce Files: Fixed a bug in `GET /search`

Previously `GET /search` returned incorrect file ids, while `GET /files/metadata` and `GET /folders/contents` returned the correct ids. Now `GET /search` returns the correct ids.

### Marketo: Updated `GET /objects/{objectName}/metadata` to work with all available objects

Previously `GET /objects/externalActivityTypes/metadata` and `GET /objects/externalActivityTypesAttributes/metadata` returned 400 errors.

### Act-On: Corrected bug that prevented creating and updating lists and bulk lists

Previously, we passed `content-type: application/json` in the request header, but Act-On expects `multipart/form-data`. We now pass the correct content type.

### Elements (general): Fixed a bug where users could not retrieve object metadata for certain elements

`GET /objects/:name/metadata` requests did not work for certain elements. We fixed the bug and you can return the metadata for objects in elements.

## Platform Updates

### Callback URL failure emails are unique to element instances

When you receive Callback URL failure emails we specify the element instance related to the failure.

### Search element and formula instances

Use the `searchText` query parameter with `GET /instances` or `GET /formulas/instances` to search on the element instance name, formula instance name, or element key.
