---
title: Cloud Elements Version 2.140
date: 2017-11-20
layout: release-note-item
label: Production
---

### Elements

#### Square

Add the Square element to the new Employee hub. Use the Square element to manage time sheets, roles, employees and more based on employee location. Take a look at the [Square Element docs](/docs/elements/square/) and get started today.

#### Revel

Add the Revel element to the new Employee hub. Use the Revel element to manage time sheets, roles, brands, tips and more based. Take a look at the [Revel Element docs](/docs/elements/revel/) and get started today.

#### Oracle Eloqua: Support for bulk on `custom-objects` resource

Added support for bulk upload and download on the Oracle Eloqua `custom-objects` resource.

#### Box: Enhanced `PATCH /documents/files/{id}/custom-fields`

Now you can add `operation` as a query parameter to a `PATCH /documents/files/{id}/custom-fields` request.

#### Xero: Authenticate in Cloud Elements 2.0

You can authenticate an instance of the Xero element in Cloud Elements 2.0.

#### Google Calendar

Use the new Google Calendar element to manage the calendar-list, calendar's event, and access-controls-list.

#### Cisco Spark: Authenticate in Cloud Elements 2.0

You can authenticate an instance of the Cisco Spark element in Cloud Elements 2.0.

#### JIRA: `projects` resource

Added the `projects` resource to the JIRA element.

### Formula as a Resource

Fixed an issue where you could not disable FaaR on a formula via a `PATCH /formulas/{id}` request.
