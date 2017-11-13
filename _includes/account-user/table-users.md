The attribute names in the JSON response appear in `code` format.

`GET /users` returns all fields except some fields where we specify the endpoint that returns the fields in the Endpoint Response column.

| Name | Description   |  Endpoint Response |
| :------------- | :------------- | :------------- |
| ID</br> `id`  |  {{site.data.table-desc.user-id}}   |  |
| Created</br>`createdDate` | The date when someone created the account. |  |
| First Name</br>`firstName` | The first name of the user. |  |
| Last Name</br>`lastName` | The last name of the user. |  |
| `password` | A placeholder for the user's secure password. |  |
| Email</br>`email` | The email address of the user. The email receives all password reset emails.  |  |
| Active</br>`active` | Indicates if the account is active. In the JSON response `true` is active and `false` is inactive. | |
| User Secret</br>`secret` | The User Secret required for API calls to Cloud Elements APIs. You can also find your User Secret in the profile menu in Cloud Elements. | POST /accounts/{id}/users<br>GET /users/{emailOrId} if password provided |
| `lastLoginDate` | The date that the user last logged in to Cloud Elements 2.0, or the date that someone created the account . | |
| `fullName` | The first and last name of the user. |  |
| Org Admin/Account Admin</br>`roles`   | The roles assigned to the user.  | POST /accounts/{id}/users</br>GET /users/{id}/roles  |
