---
heading: Bulk
seo: Bulk | Bulk Download | How to Use Bulk Upload
title: Upload
description: How to use Bulk Upload
layout: sidebarleft
apis: API Docs
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 3
---

# Bulk Upload

Unlike Bulk Downloads, using the bulk upload requires only a single call. The `POST /bulk/{objectName}` uploads a file which will then be processed by the bulk job.
In most cases, a transformation will be required to map the field names in the file to the field names in the endpoint. The Bulk Upload is composed of the following parts:

- Headers:
  - `Elements-Async-Callback-Url`: A webhook to be notified when the job completes
- Path:
  - `{objectName}`: The object that matches the file
- Body
  - `metaData`: Any meta data that supports the upload operation.
  - `file`: The file to be uploaded, either `csv` or `json`

**Note:** For elements that support upsert `identifierFieldName` is passed in the `metaData` to designate the field to be used for upserts.