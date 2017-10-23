---
title: Cloud Elements Version 2.138
date: 2017-10-23
layout: release-note-item
label: Production
---

### Bullhorn Element: Model Verification

Added model verification to the Bullhorn element.

### Intacct Element: locationID Parameter

Previously, you could authenticate an Intacct element instance with a specified locationId. Now, on every API call, you have the option to override that locationId or provide one if you didn't before.

### LinkedIn Element: Fixed Pagination Issues

Updated description for LinkedIn API `pageSize` parameter on following APIs to reflect default `pageSize` to be 200:

* `GET /companies/{id}/followers-statistics`
* `GET /companies/{id}/status-statistics`

Removed the paging on the following LinkedIn APIs as LinkedIn returns only 100 and there is no pagination:

* `GET /companies/{id}/updates/comments`
* `GET /companies/{id}/updates/likes`

Removed support for bulk on the LinkedIn element likes and comments resources as pagination is no longer supported.

### DropBox Element: Now Throws an Error if the Source and Destination Paths Match

Fixed DropBox file copy to throw an error if source and destination paths are same.
