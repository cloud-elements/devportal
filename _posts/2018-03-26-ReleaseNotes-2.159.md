---
title: Cloud Elements Version 2.159
date: 2018-03-26
layout: release-note-item
release: 2.159
heading: Release Notes
---
## Element Updates

### E-conomic: New element

We added the E-conomic element to our catalog. E-conomic is available in the ERP hub. Connect an E-conomic account to integrate with accounts, contacts, activities, leads, and more.

### Insightly: New element

We added the Insightly element to our catalog. Insightly is available in the CRM hub. Connect an Insightly account to integrate with customers, vendors, invoices, employees, and more.

### QuickBooks Enterprise: Updated models for `/bills` and `/deposits` resources

We added `ExpenseLineRet` and `ExpenseLineAddList` to the models for `GET /bill`s, `POST /bills` and `PATCH /bills/{id}`.

### Google Drive: Added `/me` resource

Added the `/me` resource to retrieve information about the authenticated Google user.

### Sharepoint: Added `/revisions` endpoints to the files resource

We added these `revisions` endpoints:

* GET /files/{id}/revisions
* GET /files/{id}/revisions/{revisionId}
* GET /files/revisions
* GET /files/revisions/{revisionId}

### Twilio: Added polling for `/accounts` resource

You can now set up polling on the `/accounts` resource.

```json

"accounts": {
    "url": "/hubs/messaging/accounts?where=date_updated='${gmtDate:EEE, dd MMM yyyy HH:mm:ss Z}'",
    "idField": "sid",
    "datesConfiguration": {
      "updatedDateField": "date_updated",
      "updatedDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
      "updatedDateTimezone": "GMT",
      "createdDateField": "date_created",
      "createdDateFormat": "EEE, dd MMM yyyy HH:mm:ss Z",
      "createdDateTimezone": "GMT"
    }
  }
```

### Intacct.: Updated Create Instance UI

We removed Control ID from the UI, which is not needed to authenticate an element instance.

### SAP Hybris Cloud for Customer CRM: Updated models

We updated the models for Accounts, Leads, Opportunities, and Contacts.

### Chargify: Added Discovery API

Use `GET /objects/{objectName}/metadata` to view the fields in a specified object.

## Cloud Elements Platform Updates

### Enhanced GET /objects/{objectName}/metadata

A `GET /objects/{objectName}/metadata` request now includes metadata for virtual data resources and Cloud Elements canonical resources.

### New Instances page

See all of your element and formula instances on one page

### Formula Instance Executions navigation improvements

We changed the Formula Instance Executions screen so you can now filter by any formula instance in your account more easily.

### Ordered API Docs

Swagger documentation now displays resources in alphabetical order
