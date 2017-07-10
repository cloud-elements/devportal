The attribute names as they appear in the JSON response appear in `code` format.

| Name | Description   |
| :------------- | :------------- |
| ID</br> `id`  |  A unique identifier for the account. Use in any endpoint with an {id} variable. For example, retrieve the Customer Account in the example response with `GET /accounts/3780` |
| Name</br>`name` | The name of the account |
| Description</br>`description` | A brief description of the account.
| `active` | Indicates if the account is active. In the JSON response `true` is active and `false` is inactive.
| `companyId` |  |
| Cloud Elements Birthdate</br>`createdDate` | The date when someone created the account. |
| `defaultAccount` | Indicates if the account is an organization level account &mdash; `true` &mdash; or account level &mdash; `false`. |
| `type` | Indicates the type of account, either account level &mdash; `CompanyAccount` &mdash; or organization level &mdash; `Default`. |
