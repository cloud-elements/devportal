---
valeOff: <!-- vale off -->
heading: Manage Accounts and Users
seo: Account APIs Overview | Cloud Elements API Docs
title: Manage Your Profile
description: Find API documentation, account management guides, and more on all of the currently supported Account APIs.
layout: sidebarleft
platform: accounts
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 30
redirect_from:
  - /docs/platform/accounts/account-management.html
ValeOn: <!-- vale on -->
---

# Manage Your Profile

Your profile includes the basic information about yourself, like your name and email. It also includes critical information that you need to interact with Cloud Elements including your password, User Secret, and Organization secret.

## Access and Update Your Profile

To access your profile, open the User Profile menu at the top of the page, and then click **User.** To make any changes, update the information, and then click **Update**.
![User Profile](img/user-profile.png)

## Change Your Password or User Secret

Use your profile to change your password get a new user secret. Organization administrators can also change the Organization Secret on their Profile Page. To reset passwords for users who do not access Cloud Elements 2.0, the organization administrator must [use the APIs](user-managementAPI.html#update-a-user).

To reset your password:

* Enter your old and new password on the User Profile page, and then click Change Password.

To reset a user or organization secret:

* On the User Profile page, click **Reset User Secret** or **Reset Organization Secret** if available.
