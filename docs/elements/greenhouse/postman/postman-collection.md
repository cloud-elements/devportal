# Cloud Elements Insightly Authentication Collection

Use this Postman collection to help with the [Insightly element documentation](https://developers.cloud-elements.com/docs/elements/insightly/authenticate.html).

To run the requests in this collection, set up the collection and environment variables listed below. For help, see more in [Postman's docs](https://www.getpostman.com/docs/v6/postman/environments_and_globals/variables).

## Collection Variables

| Key  | Description   |
| :------------- | :------------- |
| apiKey  |  The Insightly API Key. |
| usernameOrEmail   | The user name that you use to log in to Insightly, usually ypur email. |

## Environment Variables

| Key | Description   |
| :------------- | :------------- |
|  ceEnvironment  |  The Cloud Elements environment that you're creating the element instance: `api` or `staging`.  |
| authorizationHeader  | Authorization header composed of the `userSecret` and `orgSecret` variables.  |
| authorizationHeaderElements  | Authorization header composed of the `userSecret` and `elementInstanceToken` variables.  |
| authorizationHeaderUserOrgElement   | This header is composed of all three components: `userSecret`, `orgSecret`, and `elementInstanceToken` |
| elementInstanceToken   | The element instance token required for requests made to the authenticated element instance. |
| orgSecret   |  The unique key assigned to your organization required for all Cloud Elements platform API requests. |
| userSecret   | The unique key assigned to you required for all Cloud Elements API requests.  |
