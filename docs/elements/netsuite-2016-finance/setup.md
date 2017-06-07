---
heading: Netsuite 2016 Finance
seo: Endpoint Setup | Service provider setup | NetSuite 2016 Finance | Cloud Elements API Docs
title: Service Provider Setup
description: Service provider setup
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: netsuitefinancev2
parent: Back to Element Guides
order: 5
---

# Service Provider Setup

There are two types of authentication which you can use to integrate to
Netsuite 2016 Finance: _Token-Based Authentication_ or _Basic
Authentication_. To use _Token-Based Authentication_, you need to enable
this feature within your Netsuite account, and then create an access
token that grants Cloud Elements permission to access your data. To use
_Basic Authentication_, you must supply Cloud Elements with the email
and password of an authenticated user.

Regardless of this authentication type you choose, you must have a valid
Netsuite Account, and you must be able to obtain your Netsuite Account
ID.

The steps to obtain your Netsuite Account ID, as well as the steps for
setting up both types of authentication, are described below:

### Obtain your NetSuite Account ID:

These steps are required for both Token-Based Authentication and Basic
Authentication. Follow these steps to retrieve your NetSuite Account ID
from the Netsuite website.

1. Via a web browser, login to your NetSuite System page and login.
![NetSuite Connected App step 1](http://cloud-elements.com/wp-content/uploads/2015/04/NetSuiteAPI.png)

1. Navigate to “Settings” then “Integration” and Click “Web Services Preferences”
![NetSuite Connected App step 2](http://cloud-elements.com/wp-content/uploads/2015/04/NetSuiteAPI1.png)

1. Copy your “ACCOUNT ID”, which appears on that page.
![NetSuite Connected App step 3](http://cloud-elements.com/wp-content/uploads/2015/04/NetSuiteAPI2.png)

### Token Based Authentication

Cloud Elements supports NetSuite 2016 Token Based Authentication. Below
is a summary of steps needed to enable and use Token Based
Authentication. Please visit the [NetSuite Token Based Authentication
documentation](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html&whence=)
to read more about this authentication type.

After retrieving your NetSuite Account ID, enable Token-Based
Authentication for your NetSuite account. Once you're done, you'll have
information needed to integrate with Cloud Elements:

- Your NetSuite **Account ID**
- A **Consumer Key**
- A **Consumer Secret**
- An **Access Token ID**
- An **Access Token Secret**

Follow these steps to create or find this information:

1. Use the main menu: "Setup" > "Company" > "Enable Features"
![Manage Auth 1](https://cl.ly/3z0P0l2F0Q2W/[118b82b1accb2893c770bd12cd75cdfc]_Screen%2520Shot%25202017-02-17%2520at%252011.52.26%2520AM.png)

1. Choose "Suite Cloud" Features
![Manage Auth 2](https://cl.ly/3N3M1F232f2l/[93d2a11bf552dc19c0e6adf294864fa9]_Screen%2520Shot%25202017-02-17%2520at%252011.54.30%2520AM.png)

1. Scroll to the "Manage Authentication" section, and check "Token-Based Authentication.
![Manage Auth 2](https://cl.ly/1B162T0L3D1U/[f139f303315aa8f3d5c756fb7fc9faef]_Screen%2520Shot%25202017-02-17%2520at%252011.55.32%2520AM.png)

1. Next, create a new custom Role for use by the TBA user. Go to "Setup" > "Users/Roles" > "Manage Roles" > "New".
![New User](https://cl.ly/062L2M1e0I3U/[dc6cadf89027c76587e38cf2fcb8bf46]_Screen%2520Shot%25202017-02-17%2520at%252012.01.01%2520PM.png)

1. On the Permissions subtab, configure the appropriate access to Transactions, Lists, and Custom Records. We recommend at a minimum add "Web Services" and "User Access Tokens".

    __NOTE: You must create a new role.__ You cannot use one of the standard roles.
Assign the role to the desired user. Go to "Lists" > "Employees" > "Employees" 
![Edit Employee 1](https://cl.ly/3m2A0r0P0M2p/[787e00087e1b5e35e77969a38c5b50d0]_Screen%2520Shot%25202017-02-17%2520at%252012.06.10%2520PM.png)

1. Edit the user.
![Edit Employee 2](https://cl.ly/1F1v2p0X2b2s/[90f9f415f5e5603f7b0065eb250378f6]_Screen%2520Shot%25202017-02-17%2520at%252012.07.34%2520PM.png)

1. Choose the "Access" tab, and then the "Roles" subtab.
![Edit Employee 3](https://cl.ly/052g0h1T0Q2O/Screen%20Shot%202017-02-17%20at%2012.10.02%20PM.png)

1. Create a new Integration record for Cloud Elements.
Go to "Setup" > "Integration" > "Mange Integrations" > "New". Enable State and Token-Based Authentication.

    On the confirmation screen, note the Application ID, Consumer Key and Consumer Secret.

    __WARNING from NetSuite:__ For security reasons, the only time the Consumer Key and Consumer Secret values are displayed is on the confirmation page. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email.
![New Integration](https://cl.ly/0k233S343a1T/[4cd37d33c04aeb3b90cbc77731c605a2]_Screen%2520Shot%25202017-02-17%2520at%252012.12.12%2520PM.png)

1. Create a new Access Token. Go to "Setup" > "Users/Roles" > "Access Tokens" > "New". Select the Integration Record, User, and Role created or referenced in the previous steps.

    On the confirmation screen, note the Token ID and Token Secret.

    __WARNING from NetSuite:__ The Token ID and Secret are ONLY DISPLAYED ONCE. Warning For security reasons, The Token ID and Secret are ONLY DISPLAYED ONCE. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email.
![Access Token](https://cl.ly/2Z2w2I2q3p3W/[b9af08433e00a6c512dd9037d2a8a545]_Screen%2520Shot%25202017-02-17%2520at%252012.14.05%2520PM.png)

### Basic Authentication

Cloud Elements also supports NetSuite 2016 Basic Authentication. Below
is a summary of steps needed to enable and use Basic Authentication.
Basic Authentication might be easier to set up than Token-Based
Authentication, if you're willing to supply Cloud Elements with the
email and password of an authenticated user.

After retrieving your NetSuite Account ID, enable Basic Authentication
for your NetSuite account. Once you're done, you'll have information
needed to integrate with Cloud Elements:

- Your NetSuite **Account ID**
- The **email** of an authenticated user
- The **password** for that user
- An **Application Id**

Follow these steps to create or find this information:

1. Create a new Integration record for Cloud Elements.
Go to "Setup" > "Integration" > "Mange Integrations" > "New". Enable State and Token-Based Authentication.

    On the confirmation screen, note the Application ID. You do not need to note Consumer Key and Consumer Secret for basic authentication.

    __WARNING from NetSuite:__ For security reasons, the only time the Consumer Key and Consumer Secret values are displayed is on the confirmation page. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email.

    __NOTE from Cloud Elements:__ Because you will not be able to retrieve them from the system later, you may want to note your Consumer Key and Consumer Secret for this new Integration, even though you don't immediately need them for basic authentication.
![New Integration](https://cl.ly/0k233S343a1T/[4cd37d33c04aeb3b90cbc77731c605a2]_Screen%2520Shot%25202017-02-17%2520at%252012.12.12%2520PM.png)


Next [authenticate an element instance with {{page.heading}}](authenticate.html).
