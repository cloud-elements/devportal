# Cloud Elements Infusionsoft REST Authentication Collection

Use this Postman collection to supplement the [Infusionsoft REST element documentation](https://developers.cloud-elements.com/docs/elements/infusionsoft-rest/authenticate.html).

To run the requests in this collection, set up the collection and environment variables listed below. For help, see more in [Postman's docs](https://www.getpostman.com/docs/v6/postman/environments_and_globals/variables).

## Collection Variables

| Key  | Description   |
| :------------- | :------------- |
| oauth.api.key  |  E-conomic App Secret Token  |
| oauth.api.secret   |  E-conomic App Public Token |
| oauth.callback.url  | The URL to receive the authorization grant code from the API provider.   |
| elementKeyorId   | The element key (`infusionsoftrest`) or id (`6158`).  |
| elementKey   | The element key (`infusionsoftrest`). |

## Environment Variables

| Key | Description   |
| :------------- | :------------- |
|  ceEnvironment  |  The Cloud Elements environment that you're creating the element instance: `api` or `staging`.  |
| authorizationHeader  | Authorization header composed of the `userSecret` and `orgSecret` variables.  |
| authorizationHeaderElements  | Authorization header composed of the `userSecret` and `elementInstanceToken` variables.  |
| elementInstanceToken   | The element instance token required for requests made to the authenticated element instance. |
| orgSecret   |  The unique key assigned to your organization required for all Cloud Elements platform API requests. |
| userSecret   | The unique key assigned to you required for all Cloud Elements API requests.  |
