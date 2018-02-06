---
title: Cloud Elements Version 2.149
date: 2018-01-23
layout: release-note-item
release: 2.149
heading: Release Notes
---

## Elements

### Google Suite: New element

We added the Google Suite element that you can connect to Google and manage calendars, contacts, groups, threads, and messages. [Read the docs](/docs/elements/google-suite) and authenticate an instance of your own.

### Evernote: Added `/files` endpoints

We added the following DELETE endpoints:

* `DELETE /files by path`
* `DELETE /files/{id}`

### QuickBooks Online: Updated CEQL for `GET /reports/{id}`

We updated the QuickBooks Online element so you can filter `GET /reports/{id}` requests by date ranges. For example, `createdDateRange='Last Week' `. Supported date ranges include `Today`, `Yesterday` `This Week`, `This Week-to-date`, `Last Week`, `Last Week-to-date`, and more. See the API docs for details.

### Facebook Lead Ads: Added `fields` parameter to  `GET /leads/{leadId}` endpoint

Use `fields` to specify the list of fields to include in the response.

### Google Sheets: Fixed a bug in the Cloud Elements 2.0 API docs

When using the API docs in Cloud Elements 2.0 to make a `GET /spreadsheets/{id}/worksheets` request, the UI would not accept a spreadsheet `Id`. You can now use the API docs in Cloud Elements 2.0 to make the request.

### Bullhorn: `fields` parameter accepts comma separated list of fields including nested fields

When making GET requests, you can include a comma separated list in `fields` to specify what Bullhorn returns in the response. You can include nested fields using dot notation. For example, `id,address.countryCode` returns the id and `countryCode` fields where `countryCode` is nested within an address object.

## Formulas

You can create temporary formula instances that exist for a specified amount of time. Specify the time in seconds, such as `86400` for a day or `3600` for an hour. Every hour, Cloud Elements checks for temporary formula instances that have expired and deletes them. You can create temporary formula instances only through the Cloud Elements APIs.

To create a temporary formula instance, add `"formula.instance.time.to.live": <seconds> ` to the `settings` object in a `POST /formulas/{id}/instances` request. Here's an example where the formula instance expires after one hour:

```json
{
  "active": true,
  "configuration": {
    "<key>": "string"
  },
  "settings": {
    "notification.email": "string",
    "notification.webhook.url": "string",
    "api": "string",
    "formula.instance.time.to.live": 3600
  },
  "createdDate": "2018-01-23T16:33:47.431Z",
  "formula": {
    "active": true,
    "id": 0
  },
  "name": "string",
  "updatedDate": "2018-01-23T16:33:47.431Z"
}
```
