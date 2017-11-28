---
title: Cloud Elements Version 2.140
date: 2017-11-20
layout: release-note-item
label: Production
heading: Release Notes
---

### Elements

#### Zuora v2: Added query parameter and corrected models for `subscriptions` object

* Added the new query parameter `charge-detail` to `GET /subscriptions/{id}`. Allowed values include: last-segment, current-segment, all-segments and specific-segment&as-of-date=date.
* Updated the models for the `subscriptions` object based on the latest Zuora documentation.

#### ServiceNow OAuth: Added support for custom subdomains while authenticating in Cloud Elements 2.0

We added the **OAuth API Key** and **OAuth API Secret** fields so you can enter the Client ID and Client Secret associated with apps created for custom domains. See updated authentication steps in the [ServiceNow OAuth Element docs](/docs/elements/servicenow-oauth/setup.html).

#### Autotask Finance: Fixed polling configurations

Events were not working in the Staging environment for the Autotask Finance element. Fixed polling configurations for the element.

#### QuickBooks Online: Added `preferences` resource

Get a list of all preferences (`GET /preferences`) or update a specific preference (`PATCH /preferences/{id}`).

#### Box: New `PUT /files/{id}/custom-fields` endpoint

Added the `PUT /files/{id}/custom-fields`endpoint to update the custom fields value associated with a given file.

### Transformations

Cloud Elements supports a data type of `array [type]` for arrays in transformations. For example, an array of strings appears as `array [string]`.

{% include note.html content="The array data type is currently only available in earlier versions of Cloud Elements. Watch for an update to Cloud Elements 2.0.  " %}

### Usage APIs

Added additional `/usage` endpoints to monitor activity in your accounts.
