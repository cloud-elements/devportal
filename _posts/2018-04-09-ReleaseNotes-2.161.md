---
title: Cloud Elements Version 2.161
date: 2018-04-09
layout: release-note-item
release: 2.161
heading: Release Notes
---
## Element Updates

### Mailchimp v3.0: Renamed `listsActivities` object on to `listsContactsActivities`

`listsContactsActivities` more closely represents the object.

### Docusign: Now Supports OAuth 2.0 Authentication

We added functionality for you to authenticate a Docusign element instance using OAuth 2. Previously Docusign supported only custom authentication using a user name, password, and API Key. That Authentication Type is now called **oauth2password**. You can now choose an Authentication Type of **oauth2**.

### Zoho CRM: Added `cases` Resource

We added the following endpoints for the `cases` resource:

* GET /cases
* POST /cases
* DELETE /cases/{id}
* GET /cases/{id}
* PATCH /cases/{id}

### Zoho CRM: Added support `customFieldsOnly` Query on the Discovery API

We enhanced `/objects/{objectName}/metadata` to support `customFieldsOnly`.

### Fortnox: Added the `DELETE /files/{id}` Endpoint

Use DELETE /files/{id} to delete a file by id.

### Sage One: Added Endpoints

We added `POST /ledger-accounts` and `POST /bank-accounts` endpoints.
