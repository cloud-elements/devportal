---
heading: NetSuite 2016 Finance
seo: Endpoint Setup | NetSuite 2016 Finance | Cloud Elements API Docs
title: Endpoint Setup
description: Endpoint setup
layout: docs
breadcrumbs: /docs/elements.html
elementId: 988
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

Navigate to **Setup > Company > Enable Features > Suite Cloud > Manage Authentication** and enable Token-Based Authentication.

**1**
![Manage Auth 1](https://cl.ly/3z0P0l2F0Q2W/[118b82b1accb2893c770bd12cd75cdfc]_Screen%2520Shot%25202017-02-17%2520at%252011.52.26%2520AM.png)

**2**
![Manage Auth 2](https://cl.ly/3N3M1F232f2l/[93d2a11bf552dc19c0e6adf294864fa9]_Screen%2520Shot%25202017-02-17%2520at%252011.54.30%2520AM.png)

**3**
![Manage Auth 2](https://cl.ly/1B162T0L3D1U/[f139f303315aa8f3d5c756fb7fc9faef]_Screen%2520Shot%25202017-02-17%2520at%252011.55.32%2520AM.png)

Next, create a new custom Role for use by the TBA user. Go to **Setup > Users/Roles > Manage Roles > New**.
![New User](https://cl.ly/062L2M1e0I3U/[dc6cadf89027c76587e38cf2fcb8bf46]_Screen%2520Shot%25202017-02-17%2520at%252012.01.01%2520PM.png)

On the Permissions subtab, configure the appropriate access to Transactions, Lists, and Custom Records. We recommend at a minimum add "Web Services" and "User Access Tokens".

__NOTE: You must create a new role. You cannot use one of the standard roles.
Assign the Role to the desired user. Go to Lists > Employees > Employees > edit user > Access tab > Roles subtab.__
**1**
![Edit Employee 1](https://cl.ly/3m2A0r0P0M2p/[787e00087e1b5e35e77969a38c5b50d0]_Screen%2520Shot%25202017-02-17%2520at%252012.06.10%2520PM.png)
**2**
![Edit Employee 2](https://cl.ly/1F1v2p0X2b2s/[90f9f415f5e5603f7b0065eb250378f6]_Screen%2520Shot%25202017-02-17%2520at%252012.07.34%2520PM.png)
**3**
![Edit Employee 3](https://cl.ly/052g0h1T0Q2O/Screen%20Shot%202017-02-17%20at%2012.10.02%20PM.png)

Create a new Integration record for Cloud Elements.
Go to Setup > Integration > Mange Integrations > New. Enable State and Token-Based Authentication.
On the confirmation screen, note the Application ID, Consumer Key and Consumer Secret.
![New Integration](https://cl.ly/0k233S343a1T/[4cd37d33c04aeb3b90cbc77731c605a2]_Screen%2520Shot%25202017-02-17%2520at%252012.12.12%2520PM.png)

__NOTE from NetSuite:  Warning For security reasons, the only time the Consumer Key and Consumer Secret values are displayed is on the confirmation page. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email.__

Create a new Access Token. Go to Setup > Users/Roles > Access Tokens > New. Select the Integration record, User, and Role created or referenced in the previous steps.
![Access Token](https://cl.ly/2Z2w2I2q3p3W/[b9af08433e00a6c512dd9037d2a8a545]_Screen%2520Shot%25202017-02-17%2520at%252012.14.05%2520PM.png)

On the confirmation screen, note the Token ID and Token Secret.

__NOTE from NetSuite: The Token ID and Secret are ONLY DISPLAYED ONCE. Warning For security reasons, The Token ID and Secret are ONLY DISPLAYED ONCE. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email.__

For more detailed instructions we encourage visiting the [NetSuite Token Based Authentication documentation](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html&whence=) to read more about the process.

<br/>

### Basic Authentication

Below is a summary of how to enable Basic Authentication for Netsuite 2016

Basic Authentication requires four fields:

 - **Email** of an authenticated User
 - **Password** for the same user
 - An **Account Id**
 - An **Application Id**

Copy the Netsuite Account ID from the steps at the top of this page.

Next, create a new Integration record for Cloud Elements. 
 
  - Go to **Setup > Integration > Mange Integrations > New**.  
  - Enable State and Token-Based Authentication.  
  - On the confirmation screen, note the **Application ID**.
![New Integration](https://cl.ly/0k233S343a1T/[4cd37d33c04aeb3b90cbc77731c605a2]_Screen%2520Shot%25202017-02-17%2520at%252012.12.12%2520PM.png)

