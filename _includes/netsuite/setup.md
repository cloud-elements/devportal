# Service Provider Setup

To set up a new application in {{page.heading}}, you must have Administrator integration privileges. Contact your system administrator if you do not have those privileges.

## Get NetSuite Account Id

1. Via a web browser, log in to your NetSuite account:
  * Sandbox: [https://system.sandbox.netsuite.com/pages/login.jsp](https://system.sandbox.netsuite.com/pages/login.jsp)
  * Production: [http://netsuite.com/login](http://netsuite.com/login)
2. In the menu, click __Setup__, __Integration__, then __Webservice Preferences__. 
3. Copy the "ACCOUNT ID".

## Token Based Authentication

Cloud Elements supports NetSuite 2016 Token Based Authentication.  Please start by reviewing the [NetSuite Token Based Authentication documentation](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html&whence=).

1. Navigate to **Setup > Company > Enable Features > Suite Cloud > Manage Authentication** and enable Token-Based Authentication.
![NetSuiteTokenAuthStep1.gif](img/NetSuiteTokenAuthStep1.gif)
2. Create a new custom Role to the Token Based Authentication user by navigating to **Setup > Users/Roles > Manage Roles > New**.
3. On the Permissions subtab, configure the access to Transactions, Lists, and Custom Records that will be allowed through the Cloud Elements integration. Cloud Elements recommends adding "Web Services" and "User Access Tokens" at a minimum.
4. Assign the Role to the desired user by navigating to **Lists > Employees > Employees > edit user > Access tab >** selct the role created in step 2 from the drop down list.
5. Create a new Integration record for Cloud Elements. Go to Setup > Integration > Mange Integrations > New.
6. Enable __State__ and __Token Based Authentication__. On the confirmation screen, note the Application ID, Consumer Key and Consumer Secret.
	{% include note.html content="For security reasons, the only time the Consumer Key and Consumer Secret values are displayed is on the confirmation page. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email."%}
7. Create a new Access Token. Go to **Setup > Users/Roles > Access Tokens > New**. Select the Integration Record, User, and Role created or referenced in the previous steps.
8. On the confirmation screen, note the Token ID and Token Secret.
	{% include note.html content="For security reasons, The Token ID and Secret are ONLY DISPLAYED ONCE. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email." %}


## Basic Authentication

Basic Authentication requires four fields: **Email** of an authenticated user, **Password** for the same user, **Account Id**, and an **Application Id**

1. Copy the Netsuite Account ID from the steps under the Get NetSuite Account Id section.
2. Ceate a new Integration record for Cloud Elements. Go to **Setup > Integration > Mange Integrations > New**.  
3. Enable State and Token-Based Authentication.  
4. On the confirmation screen, note the **Application ID**.

Next [authenticate an element instance with {{page.heading}}](authenticate.html).


