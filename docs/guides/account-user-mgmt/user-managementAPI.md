---
valeOff: <!-- vale off -->
heading: Manage Accounts and Users
seo: Account APIs Overview | Cloud Elements API Docs
title: Manage Users via API
description: Find API documentation, account management guides, and more on all of the currently supported Account APIs.
layout: sidebarleft
uiContentVersion: user-management
platform: accounts
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 21
redirect_from:
  - /docs/platform/accounts/account-management.html
ValeOn: <!-- vale on -->
---

# Manage Users

Organization administrators can manage the users related all accounts in your organization, while account administrators can manage users in specific accounts with the `/users` endpoint. You can create, retrieve, update, delete, and search users. To manage users, you must include a valid Organization Secret and the User Secret of an organization administrator in the header of any API requests to `/user`. If any requests come from someone else, even a user that you add to the default account, they will receive a `401 Unauthorized` error code.

{% include callout.html content="<strong>On this page</strong></br><a href=#get-all-users>Get All Users</a></br><a href=#add-a-user>Add a User</a></br><a href=#get-a-specific-user>Get a Specific User</a></br><a href=#update-a-user>Update a User</a></br><a href=#deactivate-and-reactivate-a-user>Deactivate and Reactivate a User</a></br><a href=#delete-a-user>Delete a User</a>" type="info" %}

## Get All Users

You can see all users in your organization with `GET /users`.

### Get Users Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  where  |  {{site.data.table-desc.ceql-desc}} If you do not use a CEQL query, the endpoint returns all users in a paginated fashion.  | N |
|  nextPage  |  The next page token. Found in the header of the previous search  | N |
|  pageSize  |  The page size for the paginated results.</br>Default 200  | N |

### Get Users Example Request

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2/users/ \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  ```

### Get Users Example Response

```json
[
    {
        "id": 3805,
        "createdDate": "2017-07-10",
        "firstName": "Neta",
        "password": "secured",
        "email": "Alfaro@mycompany.com",
        "active": true,
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
    },
    {
        "id": 3531,
        "createdDate": "2017-04-25",
        "firstName": "Sharda",
        "password": "secured",
        "email": "ShardaSisson@mycompany.com",
        "active": true,
        "lastName": "Sisson",
        "accountExpired": false,
        "accountLocked": false,
        "credentialsExpired": false,
        "lastLoginDate": "2017-04-25",
        "emailValid": true,
        "accountNonExpired": true,
        "credentialsNonExpired": true,
        "accountNonLocked": true,
        "enabled": true,
        "fullName": "Sharda	Sisson"
    },
    {
        "id": 3486,
        "createdDate": "2017-04-13",
        "firstName": "Tod",
        "password": "secured",
        "email": "TodLinares@mycompany.com",
        "active": true,
        "lastName": "Linares",
        "accountExpired": false,
        "accountLocked": false,
        "credentialsExpired": false,
        "lastLoginDate": "2017-04-14",
        "emailValid": true,
        "accountNonExpired": true,
        "credentialsNonExpired": true,
        "accountNonLocked": true,
        "enabled": true,
        "fullName": "Tod	Linares"
    }
]
```

### User Attributes

{% include account-user/table-users.md%}

The following user attributes appear if the user signed up using Google or GitHub:

* `oauthProvider`
* `oauthId`
* `oauthToken`

The following user attributes are deprecated and you can ignore them:

* `accountExpired`
* `accountLocked`
* `credentialsExpired`
* `emailValid`
* `accountNonLocked`
* `credentialsNonExpired`
* `accountNonExpired`
* `enabled`


## Add a User

Because you must associate each user with an account, you use an account `id` and the  `POST /accounts/{accountId}/users` endpoint. See [Add Users to Accounts](account-managementAPI.html#add-users-to-accounts).

## Get a Specific User

You can get information about a specific user with the user `id` or `email` and the `GET/users/{emailOrId}` endpoint. If you know the user's password, you can also retrieve the user secret.

You can also get a specific user of an account with the account `id`, the user `id` or `email`, and the `GET/accounts/{id}/users/{emailOrId}` endpoint.

### Get Specific User Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id (user) |  {{site.data.table-desc.user-id}}  | Y or `email` |
| email | The email address of the user. | Y or `id` |
| elements-user-password   | Header parameter that is the password associated with the user ID in a `GET/users/{emailOrId}` request.  | N  |
| id (user) | {{site.data.table-account.user-id}} | Y if using `GET/accounts/{id}/users/{emailOrId}`  |

To get a list of users including ids see [Get All Users](#get-all-users). To get a list of accounts including ids see [[Find Accounts](account-managementAPI.html#find-accounts).

### Get Specific User Example Request

* `GET/users/{emailOrId}` with user ID

    ```bash
    curl -X GET \
      https://api.cloud-elements.com/elements/api-v2/users/3814 \
      -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
      -H 'content-type: application/json' \
      ```

* `GET/users/{emailOrId}` with user ID and user password

    ```bash
    curl -X GET \
      https://api.cloud-elements.com/elements/api-v2/users/3814 \
      -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
      -H 'content-type: application/json' \
      -H 'elements-user-password: <USER_PASSWORD>' \
      ```

* `GET/users/{emailOrId}` with email

    ```bash
    curl -X GET \
      https://api.cloud-elements.com/elements/api-v2/users/shardasisson@mycompany.com \
      -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
      -H 'content-type: application/json' \
      ```

* `GET/accounts/{id}/users/{emailOrId}` with account id and user id

    ```bash
    curl -X GET \
      https://api.cloud-elements.com/elements/api-v2/accounts/4046/users/3833 \
      -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
      -H 'content-type: application/json' \
      ```

### Get Specific User Example Response

```json
{
    "id": 3833,
    "createdDate": "2017-07-13",
    "firstName": "Sharda",
    "email": "shardasisson@mycompany.com",
    "active": true,
    "lastName": "Sisson",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": false,
    "secret": "qp8ExXXXXXXXXXXXXXXXXXX",
    "lastLoginDate": "1970-01-01",
    "emailValid": true,
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "accountNonLocked": true,
    "enabled": true,
    "fullName": "Sharda Sisson"
}
```

## Assign a Role

You can assign the following roles to Cloud Elements users:

* Organization Administrator (`org-admin`)
* Account Administrator (`admin`)
* Organization User (`org`)

### Assign Role Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.user-id}}  | Y |
| key   | The unique identifier for each role type. Use `org-admin` for the Organization Administrator role. Use `admin` for an Account Administrator. Use `org` for a default account user.  | Y  |

### Assign Role Example Request

* Assign Organization Administrator Role

    ```bash
    curl -X PUT \
      https://staging.cloud-elements.com/elements/api-v2/users/4378/roles/org-admin \
      -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
      -H 'content-type: application/json' \
      ```

* Assign Account Administrator Role

    ```bash
    curl -X PUT \
      https://staging.cloud-elements.com/elements/api-v2/users/4378/roles/admin \
      -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
      -H 'content-type: application/json' \
      ```

* Assign Organization User Role

    ```bash
    curl -X PUT \
      https://staging.cloud-elements.com/elements/api-v2/users/4378/roles/org \
      -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
      -H 'content-type: application/json' \
  ```

  ### Assign Administrator Role Example Response

  ```json
  {
    "id": 930,
    "name": "Organization Administrator",
    "key": "org-admin",
    "active": true,
    "description": "Organization Administrator",
    "features": []
  }
  ```

## Update a User

Change the `password`, `firstName`, `lastName`, or `email` of a specific user with the user `id` and the `PATCH /users/{id}` endpoint.

### Update User Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.user-id}}  | Y |

To get a list of users including ids see [Get All Users](#get-all-users).

### Update User Example Request

```bash
curl -X PATCH \
  https://api.cloud-elements.com/elements/api-v2/users/3833 \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
    "firstName": "Sharda",
    "email": "shardhughes@mycompany.com",
    "lastName": "Hughes",
    "password": "password"
}'
  ```

  ### Update User Example Response

The `password` appears in the response only if you change the password.

```json
{
    "id": 3833,
    "firstName": "Sharda",
    "password": "password",
    "email": "shardhughes@mycompany.com",
    "active": true,
    "lastName": "Hughes",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": true,
    "roles": [
        {
        "id": 15,
        "name": "Administrator",
        "key": "admin",
        "active": true,
        "description": "Cloud Elements Application Administrator.",
        "features": []
      }
    ],
    "emailValid": true,
    "accountNonLocked": true,
    "credentialsNonExpired": false,
    "accountNonExpired": true,
    "enabled": true,
    "fullName": "Sharda Hughes"
}
```

## Deactivate and Reactivate a User

You can deactivate a user or activate an already deactivated user with the user `id` and the `PATCH /users/{id}` endpoint. After you deactivate a user, they still appear in Cloud Elements 2.0, but can no longer access the Cloud Elements APIs.

### Deactivate and Reactivate Account Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.account-id}}  | Y |

To get a list of users including ids see [[Get all Users](#get-all-users).

### Deactivate Account Example Request

```bash
curl -X PATCH \
  https://api.cloud-elements.com/elements/api-v2/users/3833 \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "active": false
}
'
```

To reactivate a deactivated user, set `active` to `true`.

### Deactivate and Reactivate Account Example Response

```json
  {
    "id": 3833,
    "firstName": "Sharda",
    "email": "shardahughes@mycompany.com",
    "active": false,
    "lastName": "Hughes",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": true,
    "emailValid": true,
    "accountNonLocked": true,
    "accountNonExpired": false,
    "credentialsNonExpired": false,
    "enabled": false,
    "fullName": "Sharda Hughes"  }
```

If you reactivate a user, `active` is set to `true` in the response.

See [User Attributes](#user-attributes) for descriptions of each attribute.



## Delete a User

Delete users with the user `id` and the `DELETE /accounts/{id}` endpoint. You cannot recover deleted users. If you think that you might need to access the user later, consider deactivating the user instead.

### Delete User Parameters

| Name | Description   | Required |
| :------------- | :------------- | :------------- |
|  id  |  {{site.data.table-desc.user-id}}  | Y |

To get a list of users including ids see [Get All Users](#get-all-users).

### Delete User Example Request

```bash
curl -X DELETE \
  https://api.cloud-elements.com/elements/api-v2/users/3814 \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  ```

  ### Delete User Example Response

  The response is empty. You can confirm that you deleted the user with `GET /users/{id}`.
