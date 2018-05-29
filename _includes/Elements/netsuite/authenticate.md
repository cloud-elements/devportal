# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-the-api>Authenticate Through the API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication uses either **Custom** (Netsuite's Token-Based) or __Basic__ authentication, and you'll need to sign in to {{page.heading}} as part of the process. See the [setup page](setup.html) for more details on how to obtain the authentication information you'll need.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for {{page.heading}} in our Elements Catalog.
![Search](/assets/img/elements/element-search2.png)
4. Hover over the element card, and then click **Authenticate**.
![Create Instance](/assets/img/elements/authenticate-instance.gif)
1. Enter a name for the element instance.
1. Choose if you are connecting to a NetSuite sandbox.
1. Enter the **Account ID** that you identified in the [API Provider Setup](setup.html) section.
1. Select the Authentication Type for the element instance. Choose **Basic** or **Custom**, based on the type of authentication you are using.
3. Complete the fields required for your selected authentication type:

    | Basic | Custom   |
    | :------------- | :------------- |
    |  Email  |  Consumer Key  |
    |  User Password  |  Consumer Secret  |
    |  App ID  |  Access Token ID  |
    |    |  Access Token Secret  |

2. Click **Show Optional Fields**.
1. Choose whether to enforce single sessions:
    * Select `true` to you ensure that Cloud Elements does not send multiple requests to your {{page.heading}} at one time. This may be necessary for certain trial NetSuite accounts.
    * Select `false` to allow multiple requests. You must also provide a **Single Session Lock Key** which can be any alphanumeric value that is unique within the Cloud Elements environment.
9. Optionally type or select one or more Element Instance Tags to add to the authenticated element instance.
7. Click **Create Instance**.
8. Provide your {{page.heading}} credentials, and then allow the connection.

After successfully authenticating, we give you several options for next steps. [Make requests using the API docs](https://docs.cloud-elements.com/home/view-element-api-docs) associated with the instance, [map the instance to a virtual resource](https://docs.cloud-elements.com/home/common-object), or [use it in a formula template](https://docs.cloud-elements.com/home/build-formula-templates).

## Authenticate Through the API

Authenticating through API is similar to authenticating via the UI. Instead of clicking and typing through a series of buttons, text boxes, and menus, you will instead send API calls to our `/instances` endpoint. The end result is the same, though: an authenticated element instance with a  __token__ and __id__  for future API calls.

If you are configuring events, see the [Events section](events.html).

To create an element instance:

1. Construct a JSON body based on your authentication type, either Basic or Custom. See [Parameters](#parameters) for detailed descriptions.

    **Basic Authentication**

    ```json
    {
      "element": {
        "key": "{{page.elementKey}}"
      },
      "configuration": {
        "netsuite.sandbox": false,
        "netsuite.accountId": "my_account_id",
        "netsuite.single.session": true,
        "netsuite.single.session.key": "my_unique_key",
        "authentication.type": "Basic",
        "user.username": "my@somewhere.com",
        "user.password": "my_secret_password",
        "netsuite.appId": "my_app_id",
        "event.notification.enabled": false
      },
      "tags": [
        "<Add_Your_Tag>"
      ],
      "name": "<INSTANCE_NAME>"
    }
    ```

    **Custom Authentication**

     ```json
     {
       "element": {
         "key": "{{page.elementKey}}"
       },
       "configuration": {
          "netsuite.sandbox": false,
          "netsuite.accountId": "my_account_id",
          "netsuite.single.session": true,
          "netsuite.single.session.key": "my_unique_key",
          "authentication.type": "custom",
          "consumer_key": "consumer_key_1234567",
          "consumer_secret": "secret_1234567",
          "token_id": "token_1234",
          "token_secret": "token_secret_1234",
          "filter.response.nulls": true,
          "event.notification.enabled": false
       },
       "tags": [
         "<Add_Your_Tag>"
       ],
       "name": "<INSTANCE_NAME>"
     }
     ```

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include your User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

### Example cURL

#### Basic Authentication

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "configuration": {
    "netsuite.sandbox": false,
    "netsuite.accountId": "my_account_id",
    "netsuite.single.session": true,
    "netsuite.single.session.key": "my_unique_key",
    "authentication.type": "Basic",
    "user.username": "my@somewhere.com",
    "user.password": "my_secret_password",
    "netsuite.appId": "my_app_id",
    "event.notification.enabled": false
  },
  "tags": [
    "Accounting"
  ],
  "name": "NetSuite Instance 1"
}'
```

#### Custom Authentication

```bash
curl -X POST \
  https://api.cloud-elements.com/elements/api-v2/instances \
  -H 'authorization: User <USER_SECRET>, Organization <ORGANIZATION_SECRET>' \
  -H 'content-type: application/json' \
  -d '{
  "element": {
    "key": "{{page.elementKey}}"
  },
  "configuration": {
    "netsuite.sandbox": false,
    "netsuite.accountId": "my_account_id",
    "netsuite.single.session": true,
    "netsuite.single.session.key": "my_unique_key",
    "authentication.type": "custom",
    "consumer_key": "consumer_key_1234567",
    "consumer_secret": "secret_1234567",
    "token_id": "token_1234",
    "token_secret": "token_secret_1234",
    "filter.response.nulls": true,
    "event.notification.enabled": false
  },
  "tags": [
    "Accounting"
  ],
  "name": "NetSuite Instance 1"
}'
```

## Parameters

See [setting up the NetSuite service](setup.html) for information on how to obtain authentication parameters.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type | Required |
| :------------- | :------------- | :------------- | :------------- |
| 'key' | The element key.<br>{{page.elementKey}}  | string  |
|  Name</br>`name` |  The name for the element instance created during authentication.   | Body  |
| Connect TO Sandbox</br>`netsuite.sandbox` | whether to use a NetSuite sandbox | boolean |  Y |
| Account ID</br>`netsuite.accountId` | the NetSuite account ID | string | Y |
| Enforce Single Session </br>`netsuite.single.session` | whether to use single session to limit API requests to this account | boolean | N |
| Specify Single Session Lock Key</br>`netsuite.single.session.key` | the unique key for this single session (only applicable if single session = true) | Y if enforcing |
| Authentication Type</br>`authentication.type` | the authentication type, which must be either `casic` or `custom` | string | Y |
| Email</br>`user.username` | the email of a NetSuite authenticated user (only applicable for `Basic` authentication) | string | Y if Basic Authentication |
| User Password</br>`user.password` | the password of a NetSuite authenticated user (only applicable for `Basic` authentication) | string | Y if Basic Authentication |
| App ID `netsuite.appId` | the App ID of a NetSuite integration (only applicable for `Basic` authentication) | string | Y if Basic Authentication |
| Consumer Key</br>`consumer_key` | For Custom authentication, the consumer key of a token-based NetSuite integration. | string | Y if Token Based Authentication |
| Consumer Secret</br>`consumer_secret` | For Custom authentication, the consumer secret of a token-based NetSuite integration. | string |Y if Token Based Authentication |
| Access Token ID</br> `token_id` | For Custom authentication, the token ID of a token-based NetSuite integration. | string |Y if Token Based Authentication |
| Access Token Secret</br>`token_secret` | For Custom authentication, the token secret of a token-based NetSuite integration. | string |Y if Token Based Authentication |
| Filter null values from the response</br>`filter.response.nulls` | whether or not to filter out _null_ values from the response | boolean | N |

## Example Response

In this example, the authenticated element instance ID is `12345` and token starts with `ABC/D...`. Your values will be different. Make sure that you save the `id` and `token` for future requests.

```json
{
    "id": 12345,
    "name": "NetSuite Instance 1",
    "token": "ABC/D/efgHIJK1234lmnopQRS+1tuVWx+yz98765",
    "element": {
        "id": 988,
        "name": "NetSuite Instance 1",
        "key": "{{page.elementKey}}",
        "description": "{{page.heading}}.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "{{page.heading}}",
        "signupURL": ""
    },
    "provisionInteractions": [],
    "valid": true,
    "eventsEnabled": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```
