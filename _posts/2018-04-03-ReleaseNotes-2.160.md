---
title: Cloud Elements Version 2.160
date: 2018-04-03
layout: release-note-item
release: 2.160
heading: Release Notes
---
## Element Updates

### BigCommerce: Supports OAuth 2.0

We added functionality for you to authenticate a BigCommerce element instance using OAuth 2.0 and your app's Client ID and Client Secret. in the UI, select `custom` as the Authentication Type, and then enter your **Client ID** and **Client Secret**. The **Client Secret** appears when you click **Show Optional Fields**.

If you authenticate via api, include the following the `configuration` object.

```json
    {
      "authentication.type": "custom",
      "oauth.api.key": "<Client Id>",
      "oauth.api.secret": "<Client Secret>",
      "store.url": "https://store-wuxeae6.mybigcommerce.com/api/v2"
    }
```

### BigCommerce: Added ability to search for order transactions

We added the `GET /orders/{id}/transactions` endpoint.

### Freshdesk V2: Search accounts by by account name

Add the CEQL expression `letter=accountName` or `crm_company_name=accountName` to a `GET/accounts` request.

### Added `GET/me` to multiple elements

Use `GET /me` to to retrieve information about the authenticated user on the following elements:

* Box
* Dropbox
* Dropbox Business
* Microsoft OneDrive for Business
* Sharepoint
* Amazon S3

### Fortnox: Added resource and endpoints

We added the following:

* CRUD APIs for `voucher-attachments`.
* `POST /files API`
* `GET folder/contents` and `GET /folder/{id}/contents`

### Amazon S3: New `revisions` endpoints for the `files` resource

We added the following `revisions` endpoints to the `files` resource:

* GET /files/revisions
* GET /files/revisions/:revisionId
* GET /files/:fileId/revisions
* GET /files/:fileId/revisions/:revisionId

### Intacct: Updated models for the `ledger-accounts` resource

See the [element docs](https://my.cloudelements.io/elements/921/api-docs) for the updated models.

### Stripe: New `balances` resource

Retrieve the current account balance with `GET /balances`.

### Infusionsoft CRM: New `products`resource

Update or retrieve a product's inventory with:

* GET /products/{id}/inventory
* PATCH /products/{id}/inventory

### Autotask Helpdesk: New `contracts` resource

We added the contracts resource with the following APIs:

* GET /contracts
* POST /contracts
* GET /contracts/{id}
* PATCH /contracts/{id}

### Bullhorn: Added metadata discovery endpoint

We added `objects/{objectName}/metadata`.

### Sage One: New `financial-settings` resource

Update or retrieve financial settings with:

* GET /financial-settings
* PUT /financial-settings
