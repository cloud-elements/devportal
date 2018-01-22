---
valeOff: <!-- vale off -->
heading: Manage Accounts and Users
seo: Account APIs Overview | Cloud Elements API Docs
title: Manage Users
description: Find API documentation, account management guides, and more on all of the currently supported Account APIs.
layout: sidebarleft
restContentVersion: user-managementAPI.html
platform: accounts
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 20
redirect_from:
  - /docs/platform/accounts/account-management.html
ValeOn: <!-- vale on -->
---

# Manage Users

As the organization administrator you can manage the users related to the accounts in your organization. You can create, retrieve, update, delete, and search users. To manage users, you must log in as the organization administrator. Even a user that you add to the default account cannot access the account management pages unless they are designated an organization administrator.

{% include callout.html content="<strong>On this page</strong></br><a href=#access-user-management>Access User Management</a></br><a href=#add-a-user>Add a User</a></br><a href=#update-user-roles-and-information>Update User Roles and Information</a></br><a href=#deactivate-and-reactivate-a-user>Deactivate and Reactivate a User</a></br><a href=#delete-a-user>Delete a User</a>" type="info" %}

## Access User Management

User management happens at the account level, so you must first access an account to add or update users within it.

To see the users associated with an account:

1. Click <img src="img/btn-security.png" alt="Security" class="inlineImage"> to open the the Security Settings page.
2. Click the **Accounts** tab.

The users associated with an account appear in the User section.
![Users](img/users.png)

## Add a User

{% include account-user/add-users.md%}

## Update User Roles and Information

You can reassign a user as an organization or account administrator or change their first and last name or email address in Cloud Elements 2.0. If you need to change a user password, you need to [use the APIs](user-managementAPI.html#update-a-user).

If you want to reassign a user as an organization administrator, they must be in the Company Default Account.

To update a user's role or information:

1. Click <img src="img/btn-security.png" alt="Security" class="inlineImage"> to open the the Security Settings page.
2. Click the **Accounts** tab.
2. Click <img src="/assets/img/platform-icons/pencil-blue.png" alt="Edit Button" class="inlineImage">.
2. Update the user role or information.
  - To reassign the user to be an organization or account administrator, select **Org Admin** or **Account Admin**.  See [User Roles](user-management.html#user-roles) for more information about what each role can access.
  - To update the user's name or email overwrite the existing information.
3. Click <img src="img/btn-save.png" alt="Save" class="inlineImage">.

## Deactivate and Reactivate a User

You can use Cloud Elements 2.0 to deactivate a user or activate an already deactivated user. After you deactivate a user, they still appear in Cloud Elements 2.0, but can no longer access the Cloud Elements APIs. Deactivating a user also stops all active jobs associated with the user.

{% include note.html content="When you deactivate a user we maintain all of their element and formula instances. If you want to remove those instances, you must <a href=user-managementAPI.html#deactivate-and-reactivate-a-user>use the API</a>.  " %}

To deactivate or activate a user:

1. Click <img src="img/btn-security.png" alt="Security" class="inlineImage"> to open the the Security Settings page.
2. Click the **Accounts** tab.
2. Clear or select the **Active** checkbox.
3. Click **Update**.

## Delete a User

Deleting users removes them from Cloud Elements entirely. You cannot recover deleted users. If you think that you might need to access the user later, consider deactivating the user instead.

To delete a user:

1. Click <img src="img/btn-security.png" alt="Security" class="inlineImage"> to open the the Security Settings page.
2. Click the **Accounts** tab.
3. Click **Delete**, and the confirm the deletion.
