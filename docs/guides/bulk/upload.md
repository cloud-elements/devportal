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

Unlike bulk downloads, using the bulk upload requires only a single call. The `POST /bulk/{objectName}` uploads a file which will then be processed by the bulk job.

{% include workflow.html displayNames="upload,download" active="upload" %}

For files that don't have column headers that match the field names in an endpoint, a transformation is  required. The transformation provides a mapping from the column headers to field names. See our [Element Mapper]("/docs/guides/element-mapper/?resource=organizations") documentation for more information about transformations. 

The Bulk Upload is composed of the following parts:

- Headers:
  - `Elements-Async-Callback-Url`: A webhook to be notified when the job completes.
- Path:
  - `{objectName}`: The object that matches the file.
- Body
  - `metaData`: Any metadata that supports the upload operation.
  - `file`: The file to be uploaded, either csv or json.

**Note:** For elements that support upsert `identifierFieldName` is passed in the `metaData` to designate the field to be used for upserts.