The attribute names in the JSON response appear in `code` format.

| Name | Description   |
| :------------- | :------------- |
| ID</br> `id`  |  {{site.data.table-desc.account-id}}   |
| Name</br>`name` | The name of the account. |
| Description</br>`description` | A brief description of the account. |
| Active</br>`active` | Indicates if the account is active. In the JSON response `true` is active and `false` is inactive.
| `companyId` | The unique identifier of the organization created at initial signup. |
| Cloud Elements Birthdate</br>`createdDate` | The date when someone created the account. |
| `externalID` | A unique identifier for the account, required to add an account using `POST/ accounts`. |
| `defaultAccount` | Indicates if the account is an organization level account &mdash; `true` &mdash; or account level &mdash; `false`. |
| `type` | Indicates the type of account, either account level &mdash; `CompanyAccount` &mdash; or organization level &mdash; `Default`. |
