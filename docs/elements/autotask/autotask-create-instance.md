## Autotask Create Instance

Autotask is a Complete IT Management Platform. When you provision an instance, your app will have access to the different functionality offered by the Autotask platform.

Follow these instructions to create an Autotask instance.

Optionally, you may provision an instance to specific features like CRM. Below are examples of each method.

Create Instance

Follow these steps to provision a AutoTask Help Desk Element Instance.

You will need your AutoTask Help Desk username, password, and URL.

To provision your Autotask Help Desk Element, use the /instances API.

Below is an example of the provisioning API call.

HTTP Headers: Authorization- User <user secret>, Organization <organization secret>
HTTP Verb: POST
Request URL: /instances
Request Body: Required – see below
Query Parameters: None

Description: An Element token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this element instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
<Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>
```

Input JSON file name instance.json:  This instance.json file must be included with your instance request.  Please fill your information to provision

```javascript
{
  "element": {
    "key": "autotaskhelpdesk"
  },
  "configuration": {
    "helpdesk.autotask.username":  "<INSERT_AUTOTASK_USERNAME>",
    "helpdesk.autotask.password": "<INSERT_AUTOTASK_PASSWORD>",
    "helpdesk.autotask.server.url": "<INSERT_AUTOTASK_SERVER_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

Here is an example cURL command to create an instance using /instances API.

Example Request:

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @instance.json
'https://api.cloud-elements.com/elements/api-v2/instances'
```

If the user does not specify a required config entry, an error will result notifying her of which entries she is missing.

Below is a successful JSON response:

```javascript
{
  "id": 196,
  "name": "Test",
  "token": "mQuw4rrhnrMl1UeDj25v0xDU5TUx6WUw=",
  "element": {
    "id": 95,
    "name": "Autotask Helpdesk",
    "key": "autotaskhelpdesk",
    "description": "Add an Autotask Helpdesk Instance to connect your existing Autotask account to the Helpdesk Hub, allowing you to manage your incidents, priorities, statuses, users, etc. across multiple Help Desk Elements. You will need your Autotask Helpdesk account information to add an instance.",
    "image": "elements/provider_autotask.png",
    "active": true,
    "deleted": false,
    "typeOauth": false,
    "trialAccount": false,
    "configDescription": "If you do not have an Autotask.com account, you can create one at Autotask CRM Signup",
    "signupURL": "http://www.autotask.com",
    "transformationsEnabled": false,
    "authentication": {},
    "hub": "helpdesk"
  },
  "provisionInteractions": [],
  "valid": true,
  "disabled": false,
  "maxCacheSize": 0,
  "cacheTimeToLive": 0,
  "eventsEnabled": false,
  "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code. Make sure you do not have spaces after the in the cURL command.

CRM

Provision an instance CRM functions only. Use the following JSON, the key value (autotakscrm instead of autotaskhelpdesk) is the only difference in the JSON in the first example.

```javascript
{
  "element": {
    "key": "autotaskcrm"
  },
  "configuration": {
    "crm.autotask.username":  "<INSERT_AUTOTASK_USERNAME>",
    "crm.autotask.password": "<INSERT_AUTOTASK_PASSWORD>",
    "crm.autotask.server.url": "<INSERT_AUTOTASK_SERVER_URL>"
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```
