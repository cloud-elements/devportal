---
heading: Manage Accounts and Users
seo: Account APIs Overview | Cloud Elements API Docs
title: Manage Users
description: Find API documentation, account management guides, and more on all of the currently supported Account APIs.
layout: sidebarleft
restContentVersion: user-managementAPI
platform: accounts
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 20
redirect_from:
  - /docs/platform/accounts/account-management.html
---

# Manage Users

As the the organization administrator you can manage the users related to the accounts in your organization. You can create, retrieve, update, delete, and search users. To manage users, you must log in as the organization administrator. Even a user that you add to the default account cannot access the account management pages.

{% include callout.html content="<strong>On this page</strong></br><a href=#access-user-management>Access User Management</a></br><a href=#update-a-user>Update a User</a></br><a href=#deactivate-and-reactivate-a-user>Deactivate and Reactivate a User</a></br><a href=#delete-a-user>Delete a User</a>" type="info" %}

## Access User Management

User management happens at the account level, so you must first access an account to add or update users within it.

To see the users associated with an account:

1. Open the User Profile menu at the top of the page, and then click **Manage Accounts.**
1. Hover over the account card, and then click **Open**.

The users associated with an account appear on the left. Because you add users as part of the account creation process, see [Add Users to Accounts](account-managementAPI#add-users-to-accounts) for the steps to create a new user.
![Users](img/users.png)

## Update a User

You can change the first and last name of a user or their email address in Cloud Elements 2.0. If you need to change their password, you need to [use the APIs](user-managementAPI.html#update-a-user).

To update a user:

1. Access the account, and then click the user name in the list on the left.
2. Make your changes.
3. Click **Update**.

## Deactivate and Reactivate a User

You can use Cloud Elements 2.0 to deactivate a user or activate an already deactivated user. After you deactivate a user, they still appear in Cloud Elements 2.0, but can no longer access the Cloud Elements APIs.

To deactivate or activate a user:

1. Access the account, and the click then user name in the list on the left.
2. Toggle the **Active** switch, blue is active and gray is inactive.
3. Click **Update**.

## Delete a User

Deleting users removes them from Cloud Elements entirely. You cannot recover deleted users. If you think that you might need to access the user later, consider deactivating the user instead.

To delete a user:

1. Access the account, and the click then user name in the list on the left.
3. Click **Delete**, and the confirm the deletion.
