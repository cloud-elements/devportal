---
heading: NetSuite 2016 ERP
seo: Endpoint Setup | NetSuite 2016 ERP | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 987
parent: Back to Element Guides
order: 5
---

## Endpoint Setup

Follow these steps to retrieve your NetSuite Account ID from the endpoint.

Via a web browser, login to your NetSuite System page and login.
![NetSuite Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/04/NetSuiteAPI.png)

1. Navigate to “Settings” then “Integration” and Click “Web Services Preferences”
![NetSuite Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/04/NetSuiteAPI1.png)

2. Copy your “ACCOUNT ID”
![NetSuite Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/04/NetSuiteAPI2.png)

### Token Based Authentication

Cloud Elements supports NetSuite 2016 Token Based Authentication.  Below is a summary of steps needed to enable Token Based Authentication.  We encourage visiting the [NetSuite Token Based Authentication documentation](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html&whence=) to read more about the process.

After retrieving your NetSuite Account ID using the steps mentioned above, enable TBA for your NetSuite account.

Navigate to Setup > Company > Enable Features > Suite Cloud > Manage Authentication and enable Token-Based Authentication.

Next, create a new custom Role for use by the TBA user. Go to Setup > Users/Roles > Manage Roles > New.

On the Permissions subtab, configure the appropriate access to Transactions, Lists, and Custom Records. We recommend at a minimum add "Web Services" and "User Access Tokens".

__NOTE: You must create a new role. You cannot use one of the standard roles.
Assign the Role to the desired user. Go to Lists > Employees > Employees > edit user > Access tab > Roles subtab.__

Create a new Integration record for Cloud Elements.
Go to Setup > Integration > Mange Integrations > New. Enable State and Token-Based Authentication.
On the confirmation screen, note the Application ID, Consumer Key and Consumer Secret.

__NOTE from NetSuite:  Warning For security reasons, the only time the Consumer Key and Consumer Secret values are displayed is on the confirmation page. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email.__

Create a new Access Token. Go to Setup > Users/Roles > Access Tokens > New. Select the Integration record, User, and Role created or referenced in the previous steps.

On the confirmation screen, note the Token ID and Token Secret.

__NOTE from NetSuite: The Token ID and Secret are ONLY DISPLAYED ONCE. Warning For security reasons, The Token ID and Secret are ONLY DISPLAYED ONCE. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email.__

For more detailed instructions we encourage visiting the [NetSuite Token Based Authentication documentation](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html&whence=) to read more about the process.

Next [create an instance](netsuite-2016-erp-create-instance.html).
