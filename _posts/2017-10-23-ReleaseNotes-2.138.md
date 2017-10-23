---
title: Cloud Elements Version 2.138
date: 2017-10-23
layout: release-note-item
label: Production
---

### Elements

#### Bullhorn Element: Model Verification

Added model verification to the Bullhorn element.

#### Intacct Element: locationID Parameter

Previously, you could authenticate an Intacct element instance with a specified locationId. Now, on every API call, you have the option to override that locationId or provide one if you didn't before.

#### LinkedIn Element: Fixed Pagination Issues

Updated description for LinkedIn API `pageSize` parameter on following APIs to reflect default `pageSize` to be 200:

* `GET /companies/{id}/followers-statistics`
* `GET /companies/{id}/status-statistics`

Removed the paging on the following LinkedIn APIs as LinkedIn returns only 100 and there is no pagination:

* `GET /companies/{id}/updates/comments`
* `GET /companies/{id}/updates/likes`

Removed support for bulk on the LinkedIn element likes and comments resources as pagination is no longer supported.

#### DropBox Element: Now Throws an Error if the Source and Destination Paths Match

Fixed DropBox file copy to throw an error if source and destination paths are same.

#### Salesforce Elements: Redirect URL

Fixed a bug where the Salesforce redirect URL didn't direct to the endpoint address.

#### Request Models Appear for POST, PATCH and PUT

When creating custom element, request models appear for POST, PATCH and PUT endpoints.

#### Edit Raw JSON in Poller Configuration

* Added toggle to event poller configuration when creating/editing an element instance, so that if users are more comfortable working with the raw poller config JSON, they can do.
![A](https://cl.ly/2d2e2X2q0S12/Screen%20Recording%202017-09-28%20at%2001.41%20PM.gif)

### Formulas

#### Showing Formula Pending Executions and Steps

Formula executions now show `pending` executions and steps in yellow.

![screen recording 2017-09-12 at 12 46 am](https://user-images.githubusercontent.com/2327802/30398475-1fadcb18-9896-11e7-8438-24c95bcdc71b.gif)

#### Load Greater than 200 Formula Executions

Previously, you could load no more than 200 formula executions at a time. Now you can load more executions by scrolling to the bottom of the execution list.
![image](https://cl.ly/072m3p3N202v/Screen%20Recording%202017-09-27%20at%2011.38%20AM.gif)

### Activity

#### Audit Logging

The Activity page includes a new Audit Logs table that allows you to see change logs for elements, formulas, instances, transformations, and common-resources.

You can filter audit logs by users in an account.

<img width="1379" alt="image 2017-10-12 at 2 19 44 pm" src="https://user-images.githubusercontent.com/5649638/31517343-d92a40fc-af58-11e7-9485-f9eea1bd8b65.png">

### General

#### IDs on Cards Can Be Copied

You can more easily copy the an element ID.  Previously, the hover options on the card would block the user from being able to edit the ID.
![HoverBug](https://cl.ly/1f3d3s3I3D1h/Screen%20Recording%202017-09-28%20at%2001.40%20PM.gif)

### Security

#### Added Security Page for Organization Admins

* Two-factor authentication support for SMS or Google Authenticator.  Organization admins can configure 2FA for their organization.
* Password policy support to allow organization admins to configure the password requirements for all users within their organization.
* Password reset emails now contain a **Reset Password Link** to go change your password, as opposed to just sending you your new password.
* Account/User management has now moved to the **Security** menu item from the Profile menu.

### Common Resources

#### Saving Transformation Settings Save Overall Transformation and Resources

Saving a transformation setting or transformation field setting will save the overall transformation as well.
