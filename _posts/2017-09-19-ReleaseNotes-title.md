---
title: Cloud Elements Version 2.133
date: 2017-09-19
layout: release-note-item
label: "Production"
---

### Enhanced OneDrive for Business element to handle implicit path creation



The OneDrive for Business element will now create a path when creating a file or folder, if it does not exist.

Implicit path creation will work for the following APIs:


* PATCH /files/metadata
* PATCH /files/{id}/metadata
* PATCH /folders/metadata
* PATCH /folders/{id}/metadata
* POST /files/copy
*POST /files/{id}/copy
* POST /folders
* POST /files

### Enhanced the LinkedIn element

The LinkedIn element now supports the following resources:

* companies
* user


Events are supported with polling, for create events only at this time.

Bulk is available for likes, comments, and updates.


Added pipeline object APIs for the Hubspot CRM element


Added new `pipeline` resource to the Hubspot CRM element:

* GET /pipelines
* GET /pipelines/{id}
* POST /pipelines
* PUT /pipelines
* DELETE /piplines
