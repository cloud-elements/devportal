---
heading: Account APIs
seo: Account APIs Overview | Cloud Elements API Docs
title: Manage Accounts
description: Find API documentation, account management guides, and more on all of the currently supported Account APIs.
layout: sidebarleft
uiContentVersion: account-management
platform: accounts
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 11
redirect_from:
  - /docs/platform/accounts/account-management.html
---

# Manage Accounts

f;dsla;fl';ds

## Access Account Management

You can see your accounts with `GET /accounts`.

### Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  where  |  The CEQL search expression is a where clause like in a typical SQL query, but without the WHERE keyword. For example, to search for accounts created on or after ‘Jan 15, 2017′, use a search expression like `where=createdDate >= ‘2014-01-17′`. If you do not use a CEQL query, the endpoint returns all accounts in a paginated fashion.  | N |
|  offset  |  The record offset at which to begin the paginated results.</br>Default 0  | N |
|  pageSize  |  The page size for the paginated results.</br>Default 200  | N |

### Example Request

```bash
curl -X GET \
  'https://staging.cloud-elements.com/elements/api-v2/accounts?where=createdDate%3E'\''2017-01-15'\''&offset=1&pageSize=200' \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  ```

### Example Response

```json
[
  {
    "id": 1234,
    "name": "Company Default Account",
    "description": "Auto created default account for the entire company",
    "active": true,
    "companyId": 999,
    "createdDate": "2017-03-23",
    "externalId": "you@yourcompany.com",
    "defaultAccount": true,
    "type": "Default"
  },
  {
    "id": 3780,
    "name": "Customer Account",
    "description": "A customer's account",
    "active": true,
    "companyId": 998,
    "createdDate": "2017-04-25",
    "externalId": "1984",
    "defaultAccount": false,
    "type": "CompanyAccount"
  }
]
```

### Account Attributes

{% include account-user/table-accounts.md%}
