---
heading: Manage Accounts and Users
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

If you are the user who created the organization, you are the organization administrator and you can manage the accounts related to it with the `/accounts` endpoint. You can create, retrieve, update, delete, and search accounts. To manage accounts, you must include a valid Organization Secret and the User Secret of the organization administrator in the header of any API requests to `/accounts`. If any requests come from someone else, even a user that you add to the default account, they will receive a `401 Unauthorized` error code.

{% include callout.html content="<strong>On this page</strong></br><a href=#find-accounts>Find Accounts</a></br><a href=#add-an-account>Add an Account</a></br><a href=#add-users-to-accounts>Add Users to Accounts</a></br><a href=#get-a-specific-account>Get a Specific Account</a></br><a href=#update-an-account>Update an Account</a></br><a href=#deactivate-and-reactivate-an-account>Deactivate and Reactivate an Account</a></br><a href=#delete-an-account>Delete an Account</a></br>" type="info" %}


## Find Accounts

You can see all of the accounts in your organization with the `GET /accounts` endpoint. If you have many accounts, adding a CEQL query helps to keep the response manageable.

### Find Accounts Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  where  |  {{site.data.table-desc.ceql-desc}} If you do not use a CEQL query, the endpoint returns all accounts in a paginated fashion.  | N |
|  offset  |  The record offset at which to begin the paginated results.</br>Default 0  | N |
|  pageSize  |  The page size for the paginated results.</br>Default 200  | N |

### Find Accounts Example Request

```bash
curl -X GET \
  'https://api.cloud-elements.com/elements/api-v2/accounts?where=createdDate%3E'\''2017-01-15'\''&offset=1&pageSize=200' \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  ```

### Find Accounts Example Response

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

## Add an Account

Add accounts with the `POST /accounts` endpoint.

### Add Account JSON Body

```json
{
  "name": "Account Name",
  "description": "Short description of the account",
  "externalId": "companyemail@company.com"
}
```
#### Required

* `externalId`

{% include note.html content="If you create an account using only <code>externalId</code>, the <code>name</code> and <code>description</code> will be whatever value you provide for <code>externalId</code>.  " %}

### Add Account Example Request

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/accounts \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "name": "Account For Docs",
  "description": "This account is used to demonstrate a POST /instances request",
  "externalId": "notsorandomId"
}
'
```

### Add Account Example Response

```json
{
    "id": 4030,
    "name": "Account For Docs",
    "description": "This account is used to demonstrate a POST /instances request",
    "active": true,
    "companyId": 819,
    "externalId": "notsorandomId",
    "defaultAccount": false,
    "type": "CompanyAccount"
}
```

See [Account Attributes](#account-attributes) for descriptions of each attribute.

## Add Users to Accounts

Add users to accounts with the account `id` and the  `POST /accounts/{accountId}/users` endpoint.

After you create a user, they do not receive any notification. This is because many users do not need to access Cloud Elements directly. If the new user needs to access Cloud Elements, either provide them with the password that you entered or encourage them to reset their password.

### Add Users Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.account-id}}  | Y |

To get a list of accounts including ids see [Find Accounts](#find-accounts).

### Add Users JSON Body

```json
{
  "firstName": "User's First Name",
  "lastName": "User's Last Name",
  "email": "useremail@company.com",
  "password": "password"
}
```
#### Required

* `firstName`
* `lastName`
* `email`
* `password`

You can also include the following optional attributes to provide more details about the user. These attributes do not appear in {{site.console}}.

* `"city": "string"`
* `"country": "string"`
* `"phone": "string"`
* `"postalCode": "string"`
* `"stateProvince": "string"`
* `"street1": "string"`
* `"street2": "string"`

### Add Users Example Request

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/accounts/4022/users \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "firstName": "First",
  "lastName": "Last",
  "email": "FirstLast@company.com",
  "password": "password"
}'
```

### Add Users Example Response

```json
{
    "id": 4022,
    "createdDate": "2017-07-12",
    "firstName": "First",
    "email": "FirstLast@company.com",
    "active": true,
    "lastName": "Last",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": false,
    "secret": "pgJTa2A3Lxr/7o/fN7NlRb1ATrgc4JlXVKFq7HpcF74=",
    "lastLoginDate": "1970-01-01",
    "emailValid": true,
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "accountNonLocked": true,
    "enabled": true,
    "fullName": "First Last"
}
```

See [User Attributes](user-managementAPI.html#user-attributes) for descriptions of each attribute.

## Get a Specific Account

Access a specific account with the account `id` and the `GET /accounts/{id}` endpoint.

### Get Account Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.account-id}}  | Y |

To get a list of accounts including ids see [[Find Accounts](#find-accounts).

### Get Account Example Request

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2/accounts/4022 \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  ```

### Get Account Example Response

```json
  {
    "id": 4030,
    "name": "Account For Docs",
    "description": "This account is used to demonstrate a POST /instances request",
    "active": true,
    "companyId": 819,
    "createdDate": "2017-07-10",
    "externalId": "notsorandomId",
    "defaultAccount": false,
    "type": "CompanyAccount"
}
```

See [Account Attributes](#account-attributes) for descriptions of each attribute.

## Update an Account

Change the `name`, `description`, or `externalId` of a specific account with the account `id` and the `PATCH /accounts/{id}` endpoint.

### Update Account Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.account-id}}  | Y |

To get a list of accounts including ids see [[Find Accounts](#find-accounts).

### Update Account Example Request

```bash
curl -X PATCH \
  https://api.cloud-elements.com/elements/api-v2/accounts/4022 \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "name": "Updated Account",
  "description": "This account is used to demonstrate a PATCH /instances request",
  "externalId": "newRandomId"
}
'
```
### Update Account Example Response

```json
  {
    "id": 4022,
    "name": "Updated Account",
    "description": "This account is used to demonstrate a PATCH /instances request",
    "active": true,
    "companyId": 819,
    "createdDate": "2017-07-10",
    "externalId": "newRandomId",
    "defaultAccount": false,
    "type": "CompanyAccount"
  }
```

See [Account Attributes](#account-attributes) for descriptions of each attribute.

## Get a List of Account Users

You can retrieve a list of users associated with an account with the account `id` and the `GET /accounts/{id}/users` endpoint.

### Account Users Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.account-id}}  | Y |

To get a list of accounts including ids see [[Find Accounts](#find-accounts).

### Account Users Example Request

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2/accounts/4046/users \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
```

### Account Users Example Response

```json
[
    {
        "id": 3805,
        "createdDate": "2017-07-10",
        "firstName": "Neta",
        "password": "secured",
        "email": "Alfaro@mycompany.com",
        "active": false,
        "lastName": "Alfaro",
        "accountExpired": false,
        "accountLocked": false,
        "credentialsExpired": true,
        "lastLoginDate": "2017-07-10",
        "emailValid": true,
        "accountNonExpired": false,
        "credentialsNonExpired": false,
        "accountNonLocked": true,
        "enabled": false,
        "fullName": "Neta	Alfaro"
    }
]
```

See [User Attributes](user-managementAPI.html#user-attributes) for descriptions of each attribute.


## Deactivate and Reactivate an Account

You can deactivate an account or activate an already deactivated account with the account `id` and the `PATCH /accounts/{id}` endpoint. Deactivating an account essentially performs the same action as [deleting an account](#delete-an-account). After you deactivate an account, you can not view it in Cloud Elements 2.0.  You can still find the account using the Cloud Elements APIs. Use the account `id` with `/accounts` endpoints that use the `{id}` variable.

### Deactivate and Reactivate Account Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.account-id}}  | Y |

To get a list of accounts including ids see [[Find Accounts](#find-accounts).

### Deactivate Account Example Request

```bash
curl -X PATCH \
  https://api.cloud-elements.com/elements/api-v2/accounts/4022 \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "active": false
}
'
```

To reactivate a deactivated account, set `active` to `true`.

### Deactivate and Reactivate Account Example Response

```json
  {
    "id": 4022,
    "name": "Updated Account",
    "description": "This account is used to demonstrate a PATCH /instances request",
    "active": false,
    "companyId": 819,
    "createdDate": "2017-07-10",
    "externalId": "newRandomId",
    "defaultAccount": false,
    "type": "CompanyAccount"
  }
```

If you reactivate an account, `active` is set to `true` in the response.

See [Account Attributes](#account-attributes) for descriptions of each attribute.

## Delete an Account

Delete an account from your organization with the account `id` and the `DELETE /accounts/{id}` endpoint. Deleting an account essentially performs the same action as [deactivating an account](#deactivate-and-reactivate-an-account). You can recover a deleted account by reactivating it. The account will not appear in Cloud Elements 2.0 and is not retrieved by `GET /accounts`. You can still find the account using the account `id` with `/accounts` endpoints that use the `{id}` variable.

{% include warning.html content="Do not attempt to delete the default organization-level account, which will prevent you from logging in to Cloud Elements or making API requests.  " %}

If you delete an account that also has users associated with it, the account deletion deactivates the users. If you reactivate the account and want to keep the same users, you must reactivate them separately.

To check for any users of the account, use `GET /accounts/{id}/users`. If you receive a status of `404 Not Found` with the response body below, the account has no users and you can safely delete it.

```json
{
    "requestId": "59664ce6e4b0bbce0a2bd24f",
    "message": "No users found"
}
```

### Delete Account Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.account-id}}  | Y |

To get a list of accounts including ids see [[Find Accounts](#find-accounts).

### Delete Account Example Request

```bash
curl -X DELETE \
  https://api.cloud-elements.com/elements/api-v2/accounts/4031 \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
```

### Delete Account Example Response

  The response is empty. You can confirm that you deleted the account with `GET /accounts/{id}`. In the response, `active` is set to `false`.
