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

For files that don't have column headers that match the field names in an endpoint, a transformation is  required. The transformation provides a mapping from the column headers to field names. See [Defining Common Resources & Transformations](../common-resources/index.html) for more information about transformations.

The Bulk Upload is composed of the following parts:

- Headers:
  - `Elements-Async-Callback-Url`: A webhook to be notified when the job completes. If you configured the **Callback Notification Signature Key** (`event.notification.signature.key`) when you authenticated an element instance, the bulk APIs will use the signature key to provide hash verification in the header of bulk jobs. For more on Cloud Elements Hash Verification, see [Event Management: Security](/docs/guides/event-management/security.html)
- Path:
  - `{objectName}`: The object that matches the file.
- Body
  - `metaData`: Any metadata that supports the upload operation.
  - `file`: The file to be uploaded, either csv or json.

**Note:** For elements that support upsert `identifierFieldName` is passed in the `metaData` to designate the field to be used for upserts.
