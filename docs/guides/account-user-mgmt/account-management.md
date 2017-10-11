---
valeOff: <!-- vale off -->
heading: Manage Accounts and Users
seo: Account APIs Overview | Cloud Elements API Docs
title: Manage Accounts
description: Find API documentation, account management guides, and more on all of the currently supported Account APIs.
layout: sidebarleft
restContentVersion: account-managementAPI.html
platform: accounts
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 10
redirect_from:
  - /docs/platform/accounts/account-management.html
ValeOn: <!-- vale on -->
---

# Manage Accounts

If you are the user who created the organization, you are the organization administrator and you can manage the accounts related to it. You can create, retrieve, update, delete, and search accounts. To manage accounts, you must log in as the organization administrator. Even a user that you add to the default account cannot access the account management pages.

{% include callout.html content="<strong>On this page</strong></br><a href=#find-accounts>Find Accounts</a></br><a href=#add-an-account>Add an Account</a></br><a href=#add-users-to-accounts>Add Users to Accounts</a></br><a href=#change-an-account-name-or-description>Change an Account Name or Description</a></br><a href=#deactivate-and-reactivate-an-account>Deactivate and Reactivate an Account</a></br><a href=#delete-an-account>Delete an Account</a>" type="info" %}

## Find Accounts

You can access your accounts on the Accounts page in Security.
![User Profile](img/manage-accounts.png)

### Account Attributes

Each account includes attributes that you can use to identify the account or interact with it in the `/accounts` APIs.

{% include account-user/table-accounts.md%}

## Add an Account

As an organization administrator, you can add an account to your organization.

To add an account:

1. Click <img src="img/btn-security.png" alt="Security" class="inlineImage"> to open the the Security Settings page.
2. Click the **Accounts** tab.
3. Click the add accounts button.
4. ![Add Accounts](img/)
2. Enter a name for the account, and then click **Create**.
3. Update the description to provide more information about the account.

Cloud Elements creates a new account. The new account has no users, so your next step is to create a user for the new account.

## Add Users to Accounts

As the organization-level user, you can add users to any accounts that you create.

To create a user for an account:

1. Access the Accounts Edit page, either by creating a new account or click the account name in the list of accounts.
2. In the **Users** section click **Add User**.
3. Complete the required fields.
4. Click <img src="img/btn-save.png" alt="Save" class="inlineImage">.

After you create a user, they do not receive any notification. This is because many users do not need to access Cloud Elements directly. If the new user needs to access Cloud Elements, either give them the password that you entered or encourage them to reset their password.

## Change an Account Name or Description

You can update the name or description of any account.

To update an account:

1. Access the Accounts Edit page.
3. Update the name or description.
4. Click **Update Account**.

## Deactivate and Reactivate an Account

You can deactivate an account, making it unavailable for use. If you need to reactivate an account, you must use the [Cloud Elements APIs](account-managementAPI.html#deactivate-and-reactivate-an-account). Deactivating an account essentially performs the same action as [deleting an account](#delete-an-account). After you deactivate an account, you cannot view it in Cloud Elements 2.0. You can still find the account using the Cloud Elements APIs. Use the account `id` with `/accounts` endpoints that use the `{id}` variable.

## Delete an Account

You can delete an account, which also deactivates any users associated with the account. Deleting an account essentially performs the same action as [deactivating an account](#deactivate-and-reactivate-an-account). You can recover a deleted account by reactivating it with the Cloud Elements APIs. After you delete an account, you cannot view it in Cloud Elements 2.0. You can still find the account using the Cloud Elements APIs. Use the account `id` with `/accounts` endpoints that use the `{id}` variable.

{% include warning.html content="Do not delete the default organization-level account. Doing so will prevent you from logging in to Cloud Elements or making API requests.  " %}

If you delete an account that also has users associated with it, the account deletion deactivates the users. If you reactivate the account and want to keep the same users, you must reactivate them separately.

To delete an account:

1. Access the account page.
2. Click **Delete Account**.
3. Confirm the deletion.
