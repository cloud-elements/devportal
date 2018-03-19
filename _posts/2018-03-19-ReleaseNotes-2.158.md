---
title: Cloud Elements Version 2.157/2.158
date: 2018-03-19
layout: release-note-item
release: "2.157/2.158"
heading: Release Notes
---
## Element Updates

### Twilio: Updated models for `accounts` and `messages` resources

We updated the models for the `GET /accounts`, `GET /accounts/{id}`, `GET /messages`, and `GET /messages/{id}` endpoints.

### Box: Updated models for the `users` resource

We updated the models for the `GET /users`, `GET /users/{id}`, `POST/users`, and `PATCH /users/{id}` endpoints.

### Microsoft SQL Server: Fixed bug where a table could have multiple primary keys

Previously the element treated identity columns as primary keys even when another primary key was identified. The Microsoft SQL Server elements treats columns as primary keys only if they are designated as primary keys.

### Intacct.: Updated `GET /checking-accounts/{id}` to `GET /checking-accounts/{recordno}`

The id used to specify a checking account is `RECORDNO` not `BANKACCOUNTID`.

### Box: Added support to update folder descriptions

Update folder descriptions with `PATCH /folders/metadata` or `PATCH folders/{id}/metadata`.

### Netsuite ERP 2016 Release 1: Added several resources

We added the following resources:

* billing-accounts
* campaigns
* currencies
* customer-statuses
* deposits
* item-receipts
* inventory-adjustments
* inventory-transfers
* states
* transfer-orders
* work-orders
* budgets
* currency-rates

### ZuoraV2: Updated `subscriptions` endpoints

The `id` path parameter in `subscriptions` endpoints accepts either the subscription ID or the subscription number.

### Oracle Eloqua: Added `accounts` resource

We added the `accounts` resource with CRUD endpoints (GET, GET {id}, POST, PATCH, DELETE).

### Hubspot Marketing: Added `deals` resource

We added the `deals` resource with CRUD endpoints (GET, GET {id}, POST, PATCH, DELETE).

### Square: Updates

We fixed a pagination bug on the `GET /cutomers` endpoint and added the `/ping` endpoint.

We updated the models for:

* `PATCH /hubs/employee/employees/{id}`
* `GET /locations/{id}/transactions`
* `PATCH /hubs/employee/timesheets/{id}`
* `POST /hubs/employee/locations/{id}/transactions/{transactionId}/capture`

### Zoho: Updated description of the Authentication URL parameter required to authenticate an element instance

When authenticating an element instance in the UI, hover over the question mark to see more information about what values to enter based on your Zoho domain.

### Oracle Eloqua: Added `client-contacts` resource and support for events for `client-contacts`

We added the `client-contacts` resource with CRUD endpoints (GET, GET {id}, POST, PATCH, DELETE). You can also set up polling for `client-contacts`.

### Hubspot CRM: Added support for adding virtual data resource sub-objects to API docs

You can now add virtual data resource mapped to sub-objects at a Hubspot CRM element to the API docs. For more information, see the Release Notes for [release 2.152](https://developers.cloud-elements.com/2018/02/12/ReleaseNotes-2.152.html).

### Bullhorn: Support for specifying data centers

Bullhorn requires you to connect to a [specific data center](http://developer.bullhorn.com/articles/datacenter_urls). When authenticating with Bullhorn, reference this table of examples (see the full list of URLs at [Bullhorn](http://developer.bullhorn.com/articles/datacenter_urls)):

|  | Login URL</br>`login.url` | OAuth Authorization URL</br> `oauth.authorization.url`  | OAuth Token URL</br>`oauth.token.url`	   |
| :------------- | :------------- | :------------- | :------------- |
| U.S. East Coast Data Center | https://rest.bullhornstaffing.com   | https://auth.bullhornstaffing.com/oauth/authorize  | https://auth.bullhornstaffing.com/oauth/token |
| U.S. West Coast Data Center  | https://rest-west.bullhornstaffing.com   |  https://auth-west.bullhornstaffing.com/oauth/authorize | https://auth-west.bullhornstaffing.com/oauth/token  |
| UK Data Center  | https://rest-emea.bullhornstaffing.com   | https://auth-emea.bullhornstaffing.com/oauth/authorize  |  https://auth-emea.bullhornstaffing.com/oauth/token  |
