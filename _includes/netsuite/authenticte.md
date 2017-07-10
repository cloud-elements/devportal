# Authenticate with {{page.heading}}

You can authenticate with {{page.heading}} to create your own instance of the {{page.heading}} element through the UI or through APIs. Once authenticated, you can use the element instance to access the different functionality offered by the {{page.heading}} platform.

{% include callout.html content="<strong>On this page</strong></br><a href=#authenticate-through-the-ui>Authenticate Through the UI</a></br><a href=#authenticate-through-the-api>Authenticate Through the API</a></br><a href=#parameters>Parameters</a></br><a href=#example-response>Example Response</a>" type="info" %}

## Authenticate Through the UI

Use the UI to authenticate with {{page.heading}} and create an element instance. {{page.heading}} authentication uses either the NetSuite supported __Token-Based__ or __Basic__ authentication, and you'll need to sign in to {{page.heading}} as part of the process. See the [setup page](setup.html) for more details on how to obtain the authentication information you'll need.

If you are configuring events, see the [Events section](events.html).

To authenticate an element instance:

1. Sign in to Cloud Elements, and then search for the element in our Elements Catalog.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    |  ![Search](../img/Element-Search2.png)  |  ![Search](../img/Element-Search.png)  |

1. Create an element instance.

    | Latest UI | Earlier UI  |
    | :------------- | :------------- |
    | Hover over the element card, and then click __Create Instance__.</br> ![Create Instance](img/Create-Instance-NSF.gif)  | Click __Add Instance__.</br> ![Search](img/Create-Instance2-NSF.png)  |

1. Enter a name for the element instance.
1. Choose if you are connecting to a NetSuite sandbox.
1. Enter the **Account ID** that you identifed in the [Service Provider Setup](setup.html) section.

1. Select the Authentication Type for the element instance. Choose **Basic** or **TokenBasedAuthentication**, based on the type of authentication you are using.

1. Choose your single-session information. By activiting "Single Session", you ensure that Cloud Elements doesn't send multiple requeststo your Netsuite Account at one time. This may be necessary for certain trial NetSuite accounts. If you activate "Single Session", you must also provide a "Single Session Lock Key": this can be any alphanumeric value,
but it must be unique within the Cloud Elements environment.


    {% include note.html content="If you choose 'Basic' authentication, you'll also need to supply the **email** and **password** of an authenticated user, along with the **App ID** of your integration. You will have found this information when you [set up your account](setup.html)." %}

    {% include note.html content="If you choose 'TokenBasedAuthentication' authentication, you'll also need to supply a **consumer key**, **consumer secret**, **access token id**, and **access token secret** for your integration. You will have found this information when you [set up your account](setup.html)." %}

1. Click __Create Instance__ (latest UI) or __Next__ (earlier UI).

1. Optionally add tags in the earlier UI:
 - On the "Tag It" page, enter any tags that might help further
    define the instance.
 - To add more than one tag, click __Add__ after each tag.
![Add tag](../img/Add-Tag.png)

1. Click __Done__.

1. Once your element instance is created, note its **Token** and **ID**
   and save them for all future requests for that element instance.

1. Take a look at the documentation for the element resources now
   available to you.

## Authenticate Through the API

Authenticating through API is similar to authenticating via the UI.
Instead of clicking and typing through a series of UI buttons and text
boxes and menus, you'll instead send API calls to our "instance"
endpoint. The end result is the same, though: you'll authenticate with
NetSuite 2016 Finance to create a new instance, and will get that
instance's __token__ and __id__ to use for future API calls.

Use the `/instances` endpoint to authenticate with NetSuite and create
an element instance. If you are configuring events, see the [Events
section](events.html).

{% include note.html content="The endpoint returns an instance token
upon successful completion. Retain the token for all subsequent requests
involving that instance." %}

To create an element instance:

1. Construct a JSON body as shown below (see [Parameters](#parameters)):

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
        "authentication.type": "TokenBasedAuthentication",
        "user.username": "my@somewhere.com",
        "user.password": "my_secret_password",
        "netsuite.appId": "my_app_id",
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

    NOTE: If you have set "authentication.type" to "Basic", you do not
need to provide the "consumer\_key", "consumer\_secret", "token\_id", or
"token\_secret" parameters. If you have set the "authentication.type" to
"TokenBasedAuthentication", then you do not need to provide
"user.username", "user.password", or "netsuite.appId" parameters.

1. Call the following, including the JSON body you constructed in the previous step:

        POST /instances

    {% include note.html content="Make sure that you include your User and Organization keys in the header. See <a href=index.html#authenticating-with-cloud-elements>the Overview</a> for details. " %}

1. Locate the `token` and `id` in the response and save them for all future requests using the element instance.

#### Example cURL

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
    "authentication.type": "TokenBasedAuthentication",
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

See [setting up the NetSuite service](setup.html) for information on how
to obtain authentication parameters.

{% include note.html content="Event related parameters are described in <a href=events.html>Events</a>." %}

| Parameter | Description   | Data Type |
| :------------- | :------------- | :------------- |
| `netsuite.sandbox` | whether to use a NetSuite sandbox | boolean |,
| `netsuite.accountId` | the NetSuite account ID | string |,
| `netsuite.single.session` | whether to use single session to limit API requests to this account | boolean |
| `netsuite.single.session.key` | the unique key for this single session (only applicable if single session = true) |
| `authentication.type` | the authentication type, which must be either `Basic` or `TokenBasedAuthentication` | string |
| `user.username` | the email of a NetSuite authenticated user (only applicable for `Basic` authentication) | string |
| `user.password` | the password of a NetSuite authenticated user (only applicable for `Basic` authentication) | string |
| `netsuite.appId` | the App ID of a NetSuite integration (only applicable for `Basic` authentication) | string |
| `consumer_key` | the consumer key of a token-based NetSuite integration (only applicable for `TokenBasedAuthentication` authentication) | string |
| `consumer_secret` | the consumer secret of a token-based NetSuite integration (only applicable for `TokenBasedAuthentication` authentication) | string |
| `token_id` | the token ID of a token-based NetSuite integration (only applicable for `TokenBasedAuthentication` authentication) | string |
| `token_secret` | the token secret of a token-based NetSuite integration (only applicable for `TokenBasedAuthentication` authentication) | string |
| `filter.response.nulls` | whether or not to filter out _null_ values from the response | boolean |

## Example Response

In this example, the instance ID is `12345` and the instance token
starts with "ABC/D...". The actual values returned to you will be
unique: make sure you save them for future requests to this new
instance.

```json
{
    "id": 12345,
    "name": "NetSuite Instance 1",
    "token": "ABC/D/efgHIJK1234lmnopQRS+1tuVWx+yz98765",
    "element": {
        "id": 988,
        "name": "NetSuite 2016 Finance R1",
        "key": "netsuitefinancev2",
        "description": "Add a Netsuite Instance to connect your existing Netsuite account to the Finance Hub, allowing you to manage all of your Finance activities across multiple Finance Elements. You will need your Netsuite account information to add an instance.",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "configDescription": "Netsuite Finance 2016 R1",
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
