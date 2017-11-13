User roles define the information a specific user can view and what they can do in Cloud Elements. When you create or update a user, you can assign specific roles to them. You can assign the Organization Administrator role to any user in the default account. You can assign the Account Administrator role to any user in any account. If you do not assign either administrator role you create a default user without any administrator capabilities.

{% include note.html content="The Cloud Elements engineering team is working on enhancements to the current roles implementation. The Roles tab in Security is a placeholder to support future enhancements.  " %}

Cloud Elements supports the following roles:

* Organization Administrator &mdash; The Organization Administrator can manage all aspects of security; create elements, formula templates, and common resources for the organization;  and can access all logs in Activity.
* Account Administrator &mdash; The Organization Administrator performs the same function of the Organization Administrator, but only on the account where they are the administrator. Account Administrator cannot create or manage accounts or set security rules.

{% include note.html content="Organization Users are non-administrator users in the default company account. Users with the Organization User have no different privileges than other default users. The Organization User role is being evaluated as a part of future enhancements and we do not recommend assigning it to specific users.  " %}
