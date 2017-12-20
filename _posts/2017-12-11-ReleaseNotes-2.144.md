---
title: Cloud Elements Version 2.144
date: 2017-12-20
layout: release-note-item
release: 2.144
heading: Release Notes
---

## Elements

### Facebook: Upgraded to support API version 2.11

We upgraded to the latest [Facebook API version 2.11](https://developers.facebook.com/docs/graph-api/changelog/version2.11).

### Salesforce Marketing Cloud: Added resources

We added the following resources and endpoints:

* lists (GET, POST, PUT, DELETE, PATCH)
* data-extensions (GET, POST, PUT, DELETE, PATCH)
* /activities/{type}/events (GET)

### ServiceNow and ServiceNow OAuth: Updated `incidents/{id}/comments` and `incidents/{id}/work-notes`

The comments and work-notes responses are now being split on a double new line with timestamp, as opposed to on double new line alone.

### Netsuite ERP: Bulk download journal entries

We fixed an issue with bulk download for the `journal-entries` resource. When making a `/bulk/query` request, use the object name: `JournalEntry` in the query. For example, `select * from JournalEntry`.

### GoToWebinar: Authentication

GoToWebinar URLs changed and users could not authenticate. We updated the URLs and you can now authenticate an instance of the GoToWebinar element.

## Role-based Access Controls

You can now specify what a user can see or do in Cloud Elements through role-based access controls. We added a new page called Roles in the Security section of Cloud Elements. Use the Roles page to assign specific privileges to roles. Read the docs at [Manage Organization Security and Accounts](/docs/guides/account-user-mgmt/) or jump right to [Manage Roles](/docs/guides/account-user-mgmt/roles.html).

## Welcome Dashboard

When you log in to Cloud Elements we'll ask if you'd like to switch the home page to the new Dashboard. If you want to return to the new user Welcome page, click **Switch to New User Experience** at the upper right.

{% include platform/welcome-dashboard.md%}

## Element Builder

We made some changes to how you navigate through element builder to make it easier to get around while you're building new elements. See [Manage Elements](/docs/guides/elements/) for more about how to build your own element with Element Builder.
![Element Builder](https://user-images.githubusercontent.com/2327802/33727467-bb2058a6-db3d-11e7-9cf3-b1a4167866ac.gif)
