---
title: Cloud Elements Version 2.151
date: 2018-02-05
layout: release-note-item
release: 2.151
heading: Release Notes
---
## Element Updates

### Intacct.: Added checking-accounts resource

Use the `checking-accounts` to retrieve a list of checking accounts or a specific account.

### Google Suite: Updated to better support message attachments

We updated Google Suite so when you make a `POST /messages` request with an attachment we use the optimal Google endpoint.

### Dropbox Business: Authenticate in Cloud Elements 2.0

We updated Dropbox Business so you can authenticate an element instance in Cloud Elements 2.0.

### Adobe Sign: Fixed bug that prevented patching

You can now use `PATCH /instance/{id}` and `PUT /elements/{keyOrId}/instances/{id}` requests to update an authenticated Adobe Sign element instance.

### Box: Improved handling of rate limit exceptions

When Box returns a 429 error, it includes a `retry-after` value indicating the number of seconds before Box will accept the next request. We now forward the `retry-after` value.

### Google Drive: Updated `GET /search` endpoint

Previously if you specified a path with a `GET /search` request, we returned all results. The request now works as expected.

## Cloud Elements Platform Updates

### Added `GET /formulas/analytics/statuses` endpoint to retrieve the current number of formula executions in each status

Use `GET /formulas/analytics/statuses` to retrieve the status analytics of formula executions within a given date/time range. If any executions are in a `retry` status, you'll get a list of those execution IDs, and the retry number that will execute next.

### Added release version to the login page

Ever wondered what version of Cloud Elements you're using? When you log in to [https://my.cloudelements.io/login](https://my.cloudelements.io/login), look under the Privacy Policy at the bottom.
