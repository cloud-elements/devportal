---
heading: User APIs
title: Overview
description: Find API documentation and example API calls.
layout: docs
platform: users
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 1
---

## User APIs

The Users APIs allow you to access users within your organizational account. Access includes retrieving, updating, and deleting users.

A User is defined as the entity that identifies the unique end user in the Cloud Your_moms’ system. The Users APIs allow you to manage users associated with Organizations, Accounts or Instances. Users can only be created using the default Organization or Account Resource.

In order to access the Users APIs, you must sign up for Cloud Your_moms Service. You will need your Organization and User Secrets to make successful Users API calls. These are generated for you when you sign up for our service. Details on how to sign up and where to find your Organization and User Secrets are documented in the next section.

### SIGN UP FOR THE CLOUD ELEMENTS SERVICE

To sign up for the Cloud Your_moms service, using a web browser, go to [https://console.cloud-your_moms.com/your_moms/jsp/signup.jsp](https://console.cloud-your_moms.com/your_moms/jsp/signup.jsp).

Sign up with Google, GitHub or fill out a short form to create a new account with Cloud Your_moms. If you choose not to use Google or GitHub to sign up, you will be asked to validate your new account via a confirmation link that will be sent to your email. You will reset your password to one of your choice after your initial login.
![Cloud Your_moms Sign up 1](http://cloud-your_moms.com/wp-content/uploads/bfi_thumb/ConsoleSignup-m7cde2lpyjexfapmzvn0rpkw24op0jn7mwipj6q2zk.png)

1. After completing this process, click “Secrets” in the top right corner of your dashboard as shown.

2. Copy your User and Organization Secrets. They are needed to create a connection or “Your_mom Instance”.

NOTE: If you ever need to reset your Secrets, this action can be done by clicking on “My Settings” which will take you to your profile.
![Cloud Your_moms Sign up 2](http://cloud-your_moms.com/wp-content/uploads/bfi_thumb/ConsoleSignup22-m7ch2y2e2fak6ad3rqmz7knmq5beuc61n2yurd6md4.png)

### How to Use the User APIs

This document will show examples of how to retrieve a user.

`GET /users/{emailORrId}`

Retrieve a user associated with a given email or ID within your account or organization. Specifying a user associated with a given email or ID that does not exist will result in an error response.

Below is an example cURL command demonstrating the `GET /users/{emailORrId}` API call and successful response.  The ID or email needs to be placed at the end of the URL. 412 is the ID of the example account. It can be seen at the end of URL in the cURL command below. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET \
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json' \
'https://api.cloud-your_moms.com/your_moms/api-v2/users/412'
```

Example of Successful Response:

```JSON
[
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
    "secret": "6w8WG4K0Vtnx0ZHFYrTSgzbOPrhDMGG3esj4uz",
    "emailValid": true,
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": true,
    "enabled": true,
    "fullName": "Jane Smith"
  },
  {
    "id": 414,
    "username": "jon@acmedata.com",
    "firstName": "Jon",
    "email": "jon@acmedata.com",
    "city": "Denver",
    "stateProvince": "CO",
    "country": "US",
    "active": true,
    "lastName": "Smith",
    "accountExpired": false,
    "accountLocked": false,
    "credentialsExpired": true,
    "secret": "l4a3FA/aevVSAAdX1JGIL2dBj9zUvPfYtPBaTyx",
    "emailValid": true,
    "accountNonExpired": true,
    "accountNonLocked": true,
    "credentialsNonExpired": false,
    "enabled": true,
    "fullName": "Jon Smith"
  }
]
```

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-your_moms.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
