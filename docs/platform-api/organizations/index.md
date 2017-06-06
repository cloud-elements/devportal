---
heading: Organization APIs
seo: Organization APIs Overview | Cloud Elements API Docs
title: Overview
description: Find API documentation and example API calls.
layout: sidebarleft
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/platform/organizations/
---

## Organization APIs

The Organizations APIs allow you to access information that pertains to your entire organization.

An Organization is defined as the top level entity such as your company. A default account and admin user is assigned to your organization. The Organization APIs are used to manage users within an organization.

### SIGN UP FOR THE CLOUD ELEMENTS SERVICE

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

Sign up with Google, GitHub or fill out a short form to create a new account with Cloud Elements. If you choose not to use Google or GitHub to sign up, you will be asked to validate your new account via a confirmation link that will be sent to your email. You will reset your password to one of your choice after your initial login.
![Cloud Elements Sign up 1](http://cloud-elements.com/wp-content/uploads/bfi_thumb/ConsoleSignup-m7cde2lpyjexfapmzvn0rpkw24op0jn7mwipj6q2zk.png)

1. After completing this process, click “Secrets” in the top right corner of your dashboard as shown.

2. Copy your User and Organization Secrets. They are needed to create a connection or “Element Instance”.

NOTE: If you ever need to reset your Secrets, this action can be done by clicking on “My Settings” which will take you to your profile.
![Cloud Elements Sign up 2](http://cloud-elements.com/wp-content/uploads/bfi_thumb/ConsoleSignup22-m7ch2y2e2fak6ad3rqmz7knmq5beuc61n2yurd6md4.png)

### How to Use the Organization APIs

This document will show examples of how to create, retrieve, and delete a user.  NOTE, not all supported calls are displayed - this is just a sample.

`POST /organizations/users`

Create a user under the default organization account.

A user is defined as an entity that identifies the unique end user in Cloud Elements system.

This API call requires a JSON file with the required data to create your user. An example JSON file can be found below along with an example response from the API call.

`orguser.json` – these fields are required in your JSON file.

Upon success, the created user will be returned.

Below is an example cURL command demonstrating the `POST /organizations/users` API call and successful response.  The `-d` is the file:  `orguser.json` needed for successful user creation.  This is test data that was created for this demonstration.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @orguser.json
'https://api.cloud-elements.com/elements/api-v2/organizations/users'
```

Input JSON:  orguser.json

```JSON
{
  "createdDate": "2014-09-25",
  "username": "chuck@acmedata.com",
  "firstName": "Chuck",
  "lastName": "Taylor",
  "fullName": "Chuck Taylor",
  "email": "chuck@acmedata.com",
  "phone": "222-222-2222",
  "city": "Denver",
  "stateprovince": "CO",
  "postalCode": "80212",
  "country": "US",
  "active": false,
  "accountExpired": false,
  "accountLocked": false,
  "credentialsExpired": false,
  "enabled": false,
  "emailValid": false,
  "accountNonExpired": false,
  "accountNonLocked": false,
  "credentialsNonExpired": false
}
```

Example of Successful Response

```JSON
{
  "id": 413,
  "createdDate": 1411603200000,
  "username": "chuck@acmedata.com",
  "firstName": "Chuck",
  "email": "chuck@acmedata.com",
  "phone": "222-222-2222",
  "city": "Denver",
  "postalCode": "80212",
  "country": "US",
  "active": true,
  "lastName": "Taylor",
  "accountExpired": false,
  "accountLocked": false,
  "credentialsExpired": false,
  "secret": "MNjTVNOUefsgUq0sSJAMP49w9wYjqC0gxIwNVVI",
  "accountNonExpired": true,
  "accountNonLocked": true,
  "credentialsNonExpired": true,
  "emailValid": true,
  "enabled": true,
  "fullName": "Chuck Taylor"
}
```

`GET /organizations/users`

Find users within your default organizational account. The CEQL search expression or the where clause, without the WHERE keyword, in a typical SQL query. For example, to search for users containing the name ‘greg’, the search expression will be where name=’greg’. When this parameter is omitted, all accounts are returned in a paginated fashion.

Below is an example cURL command demonstrating the `GET /organizations/users` API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/users'
```

Example of Successful Response:

```JSON
[
  {
    "id": 413,
    "createdDate": "2014-09-25",
    "username": "chuck@acmedata.com",
    "firstName": "Chuck",
    "email": "chuck@acmedata.com",
    "phone": "222-222-2222",
    "city": "Denver",
    "postalCode": "80212",
    "country": "US",
    "active": true,
    "lastName": "Taylor",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": false,
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": true,
    "emailValid": true,
    "enabled": true,
    "fullName": "Chuck Taylor"
  },
  {
    "id": 412,
    "createdDate": "2014-08-18",
    "username": "jane@acmedata.com",
    "firstName": "Jane",
    "email": "jane@acmedata.com",
    "city": "denver",
    "stateProvince": "CO",
    "country": "US",
    "active": true,
    "lastName": "Smith",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": false,
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": true,
    "emailValid": true,
    "enabled": true,
    "fullName": "Jane Smith"
  }
]
```

`PATCH /organizations/users/{id}`

Update a user associated with an ID within your organization. Specifying a user associated with a given ID that does not exist will result in an error response.

This API call requires a JSON file with the required data to update your user. An example JSON file can be found below.

Below is an example cURL command demonstrating the `PATCH /organizations/users/{id}` API call and successful response. The `-d` is the data needed for a successful update of an account. This is test data that was created for this demonstration. Please make sure your quotes are straight in the cURL command.

```bash
curl -X PATCH
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @patchorguser.json
'https://api.cloud-elements.com/elements/api-v2/organizations/users/413'
```

Input JSON to update user

```JSON
{
  "id": 413,
  "createdDate": "2014-09-25",
  "username": "chuck@acmedata.com",
  "firstName": "Chuck",
  "email": "chuck@acmedata.com",
  "phone": "444-222-2222",
  "city": "Littleton"
}
Example of Successful Response:

{
  "id": 413,
  "createdDate": 1411603200000,
  "username": "chuck@acmedata.com",
  "firstName": "Chuck",
  "email": "chuck@acmedata.com",
  "phone": "444-222-2222",
  "city": "Littleton",
  "postalCode": "80212",
  "country": "US",
  "active": true,
  "lastName": "Taylor",
  "accountExpired": false,
  "accountLocked": false,
  "credentialsExpired": true,
  "accountNonExpired": true,
  "accountNonLocked": true,
  "credentialsNonExpired": false,
  "emailValid": true,
  "enabled": true,
  "fullName": "Chuck Taylor"
}
```

`DELETE /organizations/users/{id}`

Delete a user associated with an ID within your organization. Specifying a user associated with a given ID that does not exist will result in an error response.

Below is an example cURL command demonstrating the `DELETE /organizations/users/{id}` API call and successful response. The ID needs to be placed at the end of the URL. `413` is the ID of the example account. It can be seen at the end of URL in the cURL command below. Please make sure your quotes are straight in the cURL command.

```bash
curl -X DELETE \
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/organizations/users/413'
```

Example of Successful Response:

`HTTP 200 on success`

`GET /organizations/users/{emailOrId:.+}`

Retrieve a user associated with an email or ID within the default organization. Specifying a user associated with a given `emailOrId` that does not exist will result in an error response.

Below is an example cURL command demonstrating the `GET /organizations/users/{emailOrId:.+}` API call and successful response. The ID or email needs to be placed at the end of the URL. 412 is the ID of the example account. It can be seen at the end of URL in the cURL command below. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET \
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json' \
'https://api.cloud-elements.com/elements/api-v2/organizations/users/412'
```

Example of Successful Response:

```JSON
{
    "id": 412,
    "createdDate": "2014-08-18",
    "username": "jane@acmedata.com",
    "firstName": "Jane",
    "email": "jane@acmedata.com",
    "city": "denver",
    "stateProvince": "CO",
    "country": "US",
    "active": true,
    "lastName": "Smith",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": false,
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": true,
    "emailValid": true,
    "enabled": true,
    "fullName": "Jane Smith"
}
```

by email

```bash
curl -X GET \
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json' \
'https://api.cloud-elements.com/elements/api-v2/organizations/users/jane%40acmedata.com'
```

Example of Successful Response:

```JSON
{
    "id": 412,
    "createdDate": "2014-08-18",
    "username": "jane@acmedata.com",
    "firstName": "Jane",
    "email": "jane@acmedata.com",
    "city": "denver",
    "stateProvince": "CO",
    "country": "US",
    "active": true,
    "lastName": "Smith",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": false,
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": true,
    "emailValid": true,
    "enabled": true,
    "fullName": "Jane Smith"
}
```

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-elements.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
