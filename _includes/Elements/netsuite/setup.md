# API Provider Setup

To set up a new application in {{page.heading}}, you must have Administrator integration privileges. Contact your system administrator if you do not have those privileges.

To authenticate an element instance with {{page.heading}} you must [know your Acount ID](#get-netsuite-account-id) and use one of two authentication methods:

* [Custom Authentication](#custom-authentication)
* [Basic Authentication](#basic-authentication)

## Get NetSuite Account Id

To locate your Account ID:

1. Via a web browser, log in to your NetSuite account:
  * Sandbox: [https://system.sandbox.netsuite.com/pages/login.jsp](https://system.sandbox.netsuite.com/pages/login.jsp)
  * Production: [http://netsuite.com/login](http://netsuite.com/login)
2. In the menu, click __Setup__, __Integration__, then __Webservice Preferences__.
3. Copy the **ACCOUNT ID**.

## Custom Authentication

Cloud Elements supports NetSuite 2016 Token Based Authentication with a Custom authentication type. Review the detailed information at [NetSuite Token Based Authentication documentation](https://system.na1.netsuite.com/app/help/helpcenter.nl?fid=section_4247337262.html&whence=).

{% include note.html content="To use token based (Custom) authentication, set up a new user linked to a single role. If you use an existing user, they might have multiple roles. Then the role used by the webservice might not match the role selected as the webservices role.  " %}

To set up Custom Authentication:

1. Navigate to **Setup > Company > Enable Features > Suite Cloud > Manage Authentication** and enable Token-Based Authentication.
![NetSuiteTokenAuthStep1.gif](img/NetSuiteTokenAuthStep1.gif)
2. Create a new custom Role to the Token Based Authentication user by navigating to **Setup > Users/Roles > Manage Roles > New**.
3. On the **Permissions** tab, configure the access to **Transactions**, **Lists**, and **Custom Records** that you want to allow through the Cloud Elements integration.

    {% include tip.html content=" Cloud Elements recommends that you add Web Services and User Access Tokens at a minimum." %}

4. Assign the Role that you created earier to the desired user by navigating to **Lists > Employees > Employees > edit user > Access tab >**.
5. Create a new Integration record for Cloud Elements. Go to **Setup > Integration > Mange Integrations > New**.
6. Enable __State__ and __Token Based Authentication__. On the confirmation screen, note the following that you will need to authenticate and element instance:
    * Application ID
    * Consumer Key
    * Consumer Secret.

	{% include note.html content="For security reasons, the only time the Consumer Key and Consumer Secret values are displayed is on the confirmation page. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email."%}

7. Create a new Access Token. Go to **Setup > Users/Roles > Access Tokens > New**. Select the Integration Record, User, and Role created or referenced in the previous steps.
8. On the confirmation screen, note the **Token ID** and **Token Secret**.
	{% include note.html content="For security reasons, The Token ID and Secret are ONLY DISPLAYED ONCE. After you leave this page, these values cannot be retrieved from the system. If you lose or forget these credentials, you will need to reset them to obtain new values. Treat these values as you would a password. Never share these credentials with unauthorized individuals and never send them by email." %}

## Basic Authentication

Basic Authentication requires four fields: **Email** of an authenticated user, **Password** for the same user, **Account Id**, and an **Application Id**

To prepare for basic authentication:

1. Copy the Netsuite Account ID from the steps under the [Get NetSuite Account Id]).
2. Create a new Integration record for Cloud Elements. Go to **Setup > Integration > Mange Integrations > New**.
3. Enable **State** and **Token-Based Authentication**.
4. On the confirmation screen, note the **Application ID**.

Next [authenticate an element instance with {{page.heading}}](authenticate.html).
