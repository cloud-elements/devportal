---
heading: Event Management
title: Event Management
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: docs
breadcrumbs: /docs/platform/index.html
parent: Back to Platform Docs
order: 2
---

## Event Management:
### Cloud Elements Events Framework

Cloud Elements Events Framework provides a uniform mechanism for subscribing to events from Endpoints (e.g. Salesforce, HubSpot, QuickBooks, Dropbox). Our Framework gives you the flexibility to receive notifications to your app regarding user activity by having our Elements subscribe to Endpoint Events. Endpoints publish changes to notify the elements that events have occurred. For example, a user uploads a file to her Dropbox account using the Dropbox user interface. This change would be published to our Dropbox Element. The Dropbox Element would then notify your app that a new file has been uploaded. Your app can then be updated with the most current data making it that much more cooperative and powerful.
![Cloud Elements Events 1](http://cloud-elements.com/wp-content/uploads/2015/01/DocumentManagementWorkflow1.png)

### Events

Cloud Elements currently supports building integrations with __polling__ or __webhooks__ capability.

__Polling__ is a mechanism where Cloud Elements executes the configured query every __n minutes__ and capture the changed information.

__Webhooks__ are when the provider lets Cloud Elements know what information has changed.
NOTE: Some Application Endpoints require some additional configuration setup for Event Management. Instructions and screen shots for these configurations can be found in the [Element Guides](/docs/elements.html) under Events for each endpoint.

#### Provision

##### Create an Instance with Events via API Manager Console

Elements can be provisioned with Event Management Integration via the Elements Manager or API. Instructions on provisioning with the Elements Manager will be shown first followed by provisioning via the `POST /instances API`.

__Dropbox__ will be used for this demonstration.  However the majority of our Elements support events.

Sign into the Elements Manager and click Elements Catalog
![Cloud Elements Events 2](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click Documents
![Cloud Elements Events 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide2.png)

Click Create Instance for Dropbox
![Cloud Elements Events 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide3.png)

Click +
![Cloud Elements Events 5](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide4.png)

Name your Instance
Tagging is optional so You may leave it set to “No”
Select “True” to enable Event Notifications
Input the callback URL to your application
Click Next
![Cloud Elements Events 6](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance11.png)

Login to your Dropbox Account and click “Allow”
![Cloud Elements Events 7](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance22.png)

Click Done
![Cloud Elements Events 8](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance31.png)

##### Create an Instance with Events via API

### Step 1. Get Elements OAuth Information

HTTP Header: None
HTTP Verb: GET
Request URL: /elements/{key}/oauth/url
Request Body: None
Query Parameters:

* __apiKey–__ the key obtained from registering your app with the provider
* __apiSecret__ – the secret obtained from registering your app with the provider
* __callbackUrl__ – the URL that you supplied to the provider when registering your app, state – any custom value that you want passed to the callback handler listening at the provided callback URL.

Description: The result of this API invocation is an OAuth redirect URL from the endpoint. Your application should now redirect to this URL, which in turn will present the OAuth authentication and authorization page to the user. When the provided callback URL is executed, a code value will be returned, which is required for the Create Instance API.

Example cURL Command:

```bash
curl -X GET
-H 'Content-Type: application/json'
'https://api.cloud-elements.com/elements/api-v2/elements/dropbox/oauth/url?apiKey=fake_Dropbox_api_key&apiSecret=fake_Dropbox_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=dropbox'
```

Response:

```javascript
{
  "oauthUrl": "https://www.dropbox.com/api/oauth2/authorize?response_type=code&client_id=insert_dropbox_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=dropbox",
  "element": "dropbox"
}
```

Handle Callback from the Endpoint:
Upon successful authentication and authorization by the user, the endpoint will redirect to the callback URL you provided when you setup your application with the endpoint, in our example, https://www.mycoolapp.com/auth. The endpoint will also provide two query string parameters: “state” and “code”. The value for the “state” parameter will be the name of the endpoint, e.g., “dropbox” in our example, and the value for the “code” parameter is the code required by Cloud Elements to retrieve the OAuth access and refresh tokens from the endpoint. If the user denies authentication and/or authorization, there will be a query string parameter called “error” instead of the “code” parameter. In this case, your application can handle the error gracefully.

### Step 2. Create an Instance

To provision your Dropbox Element, use the /instances API.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

Description: An Element token is returned upon successful execution of this API. This token needs to be retained by the application for all subsequent requests involving this element instance.

A sample request illustrating the /instances API is shown below.

HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>

```
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Dropbox is “dropbox”.  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "dropbox"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "oauth.callback.url": "<SAMPLE_CALLLBACK_URL>",
    "oauth.api.key": "<SAMPLE_API_KEY>",
    "oauth.api.secret": "<SAMPLE_API_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "https://console.cloud-elements.com/elements/api-v2/events/dropbox",
    "document.tagging": false
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

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
      "id": 22,
      "name": "Dropbox",
      "key": "dropbox",
      "description": "Add a Dropbox Instance to connect your existing Dropbox account to the Documents Hub, allowing you to manage files and folders. You will need your Dropbox account information to add an instance.",
      "image": "elements/provider_dropbox.png",
      "active": true,
      "deleted": false,
      "typeOauth": true,
      "trialAccount": false,
      "existingAccountDescription": "Give your application access to your existing
   Dropbox accountEnter your credentials and details for your Dropbox Account",
      "configDescription": "If you do not have an Dropbox.net account, you can create one at Dropbox.Net Signup",
      "transformationsEnabled": false,
      "authentication": {
        "type": "oauth2"
      },
      "hub": "documents"
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

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.

##### Example Call to kick off Event

`POST /folder`

HTTP Headers: `Authorization- User <user secret>, Organization <organization secret>`
HTTP Verb: `POST`
Request URL: `/folders`
Request Body: Required – see below
Query Parameters: None

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_SECRET>'
-H 'Content-Type: application/json'
-d @TestFolderCreate.json
'https://api.cloud-elements.com/elements/api-v2/hubs/documents/folders?path=/testfoldercreate'
```

TestFolderCreate JSON needed to create the folder.

```JSON
{
  "path": "/testfoldercreate",
  "tags": [
    "TestFolderCreate"
  ],
  "createdDate": "",
  "size": 0,
  "name": "TestFolderCreate",
  "directory": false
}
```

Example of Webhook Callback

```JSON
{
   "eventId": 1088,
   "instanceId": 31,
   "response": {
       "events": [
           {
               "path": "/testfoldercreate",
               "metadata": {
                   "path": "/TestFolderCreate",
                   "name": "TestFolderCreate",
                   "type": "folder"
               }
           }
       ]
   },
   "notificationId": 1047
}
```

###### A note about Webhooks

When a change is made at Dropbox or other Endpoint, whether through the Cloud Elements API, via the Dropbox web app or Dropbox desktop app, a webhook call will be generated. In other words, it’s not just calls made through our API that will generate webhooks.

##### Asynchronous API Requests

Asynchronous API Requests gives you the flexibility to start a job that may take some time to complete and be notified when it has completed. For example, a user makes a request to copy a folder to her account. This request may take some time to process. With an Asynchronous API Request, your app will receive a notification that job has started, as well as, a notification when the job has processed.

Performing an Asynchronous API Request:

Additional Required Header:
__Elements-Async-Request__ – this must be set to `True`

Optional Header:
__Elements-Async-Callback-URL__ – if not included in request, then the app will use the callback URL associated with the instance. If you do not have a callback URL associated with the instance configuration or supply one in the request, then an error will be returned.

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Element <INSERT_ELEMENT_SECRET>'
-H 'Content-Type: application/json'
-H 'Elements-Async-Request: True'
-H 'Elements-Async-Callback-Url: <www.samplecallbackurl.com>'
-d @copy-folder.json
'https://api.cloud-elements.com/elements/api-v2/hubs/documents/folders/copy?path=/TestFolderCreate'
```

Copy-folder JSON needed to copy the folder

```JSON
{
  "path": "/testfoldercopy",
  "tags": [
    "TestFolderCopy"
  ],
  "name": "TestFolderCopy"
}
```

Example Message stating the Asynchronous Call has started

```JSON
{
"eventId": 1028,
"eventStatus": "dispatched"
}
```

Example of Webhook Callback stating job has completed.

```JSON
{
   "eventId": 1028,
   "instanceId": 30,
   "response": {
       "events": [
           {
               "path": "/testfoldercopy",
               "metadata": {
                   "path": "/TestFolderCopy",
                   "name": "TestFolderCopy",
                   "type": "folder"
               }
           },
           {
               "path": "/testfoldercopy/testuploadfile.txt",
               "metadata": {
                   "path": "/TestFolderCopy/testUploadFile.txt",
                   "name": "testUploadFile.txt",
                   "type": "file"
               }
           }
       ]
   },
   "notificationId": 1084
}
```
