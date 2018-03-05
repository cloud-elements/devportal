---
title: Cloud Elements Version 2.154
date: 2018-02-26
layout: release-note-item
release: 2.154
heading: Release Notes
---
## Element Updates

### Google Drive: Order search results

You can now order search results from `GET /search` and `GET /folders/{id}/contents` requests  by `name`, `createdDate`, and `modifiedDate`. For example:

* GET /search?path=/pathname&text=searchterm&orderBy=name desc
* GET /search?path=/pathname&text=searchterm&orderBy=name desc,createdDate asc
* GET /folders/0B4T4KJqlnrIENmw3VzN0c3NnYjA/contents?orderBy=modifiedDate

### Google Suite: Background and foreground colors

We updated the Google suite element to support background and foreground colors.

### Microsoft Graph: New element

We added the Microsoft Graph element to access the Microsoft Graph API and manage calendars and other objects.

### Docusign: Added `recipients` endpoint to the `envelopes` resource

You can now GET all the recipients of an envelope using `GET /envelopes/{id}/recipients`.

### Netsuite: Added support for more custom field types

The following types of custom fields can be included in the POST request on Netsuite elements:

* _checkBox
* _currency
* _date
* _datetime
* _decimalNumber
* _document
* _eMailAddress
* _freeFormText
* _help
* _hyperlink
* _image
* _inlineHTML
* _integerNumber
* _listRecord
* _longText
* _password
* _percent
* _phoneNumber
* _richText
* _textArea
* _timeOfDay
* _multipleSelect

### Box: Added the ability to specify access level to files

We added a new `access-level` query parameter for the following endpoints:

* /files/links
* /files/{id}/links
* /folders/{id}/links
* /folders/links

### SugarCRM: Added support for changes to Winter '18 Release

Beginning with the Winter '18 Release, Sugar will prevent REST API access to Sugar from unknown platform types. When you authenticate an element instance, you can now pass the `sugar.platform` to prevent any connection issues related to platform. See [Sugar's documentation](https://community.sugarcrm.com/community/developer/blog/2017/11/20/unknown-platforms-to-be-restricted-in-winter-18-release) for more information.



## Cloud Elements Platform Updates

### Security Updates

We made several changes to security in this release including:

* Any users with the MODIFY_SECURITY privilege can now update their organization's name, via `PUT /organizations/me`.
* Deleting an account within your organization will now delete all of the users associated with the account.
* Permanently deactivating an account within your organization (e.g., `PATCH /accounts/{id}?permanent=true { "active": false }`) behaves the same as a deletion, and all of the account users will be deleted.

{% include note.html content="Any deletions of a user, either by deleting or permanently deactivating the account, or directly deleting the user, will in turn delete all of the user's jobs (API scheduled, bulk, formula trigger, and polling). " %}

### Cloud Elements 2.0 supports Custom JS only transformations

Previously, if you attempted to create a transformation using only Custom JS, you received an error indicating at least one field level transformation was required. You can now create a transformation exclusively through Custom JS.
