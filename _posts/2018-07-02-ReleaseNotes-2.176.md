---
title: Cloud Elements Version 2.172-2.176
date: 2018-07-02
layout: release-note-item
release: 2.176
heading: Release Notes
---
## Element Updates

### Gmail: New element

We added the Gmail element to the general hub. Connect a Google account to integrate with messages, threads, and more. See [the documentation](https://docs.cloud-elements.com/home/gmail) for more.

### Outlook Email: New element

We added the Outlook Email element to the general hub. Connect a Microsoft account to integrate with messages and more. See [the documentation](https://docs.cloud-elements.com/home/outlook-email) for more.

### Oracle Service Cloud: Added bulk support

Use bulk in Oracle Service Cloud to batch upload and download `Account`, `Incident`, `Contact` and `ServiceCategory` objects.

### Servicemax: Added bulk support

Use bulk in Servicemax to batch download.

### Greenhouse: Added bulk support

Use bulk in Greenhouse to batch download and upload.

### Maximizer: Various updates and fixes

We updated the default schema and addressed issues with `notes` and `yesno` APIs.

### Quickbooks Enterprise: Define Virtual Data Resources for `CreditCardCharge` and `CreditCardCredit`

You can now map virtual data resources to `CreditCardCharge` and `CreditCardCredit` objects.

### Hubspot: `associations` objects returned as arrays

Previously we returned `associations` objects as strings, but now return them as arrays.

### Plaid: Added option to authenticate using accessToken

You can use an access token instead of user's bank information to authenticate with Plaid.

### SAP Hybris Cloud for Customer CRM: GET /objects returns only objects with metatdata

You can still return all objects by passing `fetchall="true"`.

### Facebook Lead Ads: Added `GET /forms/{formId}/leads` endpoint

Retrieve leads with `GET /forms/{formId}/leads`.

### Sage One: Escaping quotes

Updated the `GET /purchase-invoices` endpoint to make two single quotes equate to an escaped single quote.

## Platform Updates

### Retrieving Element Instance Objects During Authentication

You can return a list of all data objects in an element along with their source (the vendor, a virtual data resource, or normalized Cloud Elements object). In the request body include the optional `"retrieveObjectsAfterInstantiation": true` value. The response includes an `objects` array like this example:

```JSON
"objects": [
  {
      "name": "incidents",
      "vendorName": "Case",
      "type": "ceCanonical"
  },
  {
      "name": "Task",
      "vendorName": "Task",
      "type": "vendor"
  },
  {
      "name": "myAccounts",
      "vendorName": "Account",
      "type": "vdr"
  }
]
```

The objects list includes:

* `name` The name of the Cloud Elements object.  This is name that you'll find in the API docs and endpoints. For example, requests to the objects in the example would look like `GET https://api.cloud-elements.com/elements/api-v2/incidents` (or `/Task` or `/myAccounts`).
* `vendorName` The name of the object specified within the API provider's system.
* `type` Specifies where the object is defined:
  - `vdr` indicates that the object is a user-defined virtual data resource that is mapped to the API provider resource identified in the `vendorName` attribute. For more information see [Introduction to virtual data resources](https://docs.cloud-elements.com/home/common-resources-overview).
  - `ceCanonical` indicates a normalized Cloud Elements object associated with the raw API provider object identified in the `vendorName` attribute.
  - `vendor` indicates that the object is available to use via the `GET /{objectName}` endpoint. Requests bypass any Cloud Elements mappings and call the vendor endpoint directly, while still proxied by Cloud Elements. In this case, `name` and `vendorName` attributes are identical.

### Updated status code for failing to refresh access token

We updated the status code and message returned when you your OAuth token is revoked or expired and the attempted refresh fails.

### Element Builder: Added a new service type of SOAP API w/ WS-Security Signing

We added support for building elements for SOAP APIs with WS-Security Signing.




