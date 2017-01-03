---
heading: Event Management
seo: Event Management | Cloud Elements API Docs
title: Provisioning 
description: View the Event Management Guide explaining the Cloud Elements Events Framework.
layout: docs
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 3
sitemap: false
---

### Provisioning

Elements can be provisioned with Event Management Integration via the Elements Manager or API. Instructions on provisioning with the Elements Manager will be shown first followed by provisioning via the `POST /instances API`.

#### **Provisioning via Manager Console**

__Dropbox__ will be used for most of this demonstration.  However the
majority of our Elements support events.

To start, sign into the Elements Manager and click "Elements Catalog"
![Cloud Elements Events 2](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide1.png)

Click "Documents"
![Cloud Elements Events 3](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide2.png)

Click "Create Instance for Dropbox"
![Cloud Elements Events 4](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide3.png)

Click "+"
![Cloud Elements Events 5](http://cloud-elements.com/wp-content/uploads/2014/10/quickGuide4.png)

The "Provision It" tab is where you set the event configuration. In the
Box example, you provide a name and tagging selection as normal (tagging
is optional so you may leave it set to “No”). To enable notifications,
select “True” on the "Enable/Disable Event Notifications" option, and
enter the callback URL to your application. Once your event
configuration is to your liking, click "Next".
![Cloud Elements Events 6](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance11.png)

**Sidenote**: If an Element supports polling, then you may be asked for
the event poller refresh internal (in minutes). Depending on the
Element, you may also be asked for one of the the following: (1) Polling
objects: a comma-separated list of objects to poll for, as shown in the
Salesforce Element ...
![Cloud Elements Event Config GUI](/assets/img/events/events-objects-console.png)

... (2) polling URLs: a line-by-line list of objects, pipe-separated
with a URL template that retrieves that object; demonstrated in this
Sharepoint Element ...
![Cloud Elements Event Config GUI](/assets/img/events/events-urls-console.png)

... or (3) a polling configuration JSON block, which allows for even
tighter control over polling. Here you can see the start of that
configuration in this Stripe Element configuration.
![Cloud Elements Event Config GUI](/assets/img/events/events-config-console.png)
The details of the configuration JSON are described below in the section
titled "Polling Configuration": it's the same JSON format used when creating an instance via our APIs.

**Let's return** now to the Dropbox demo, where we've been redirected to
the Dropbox Login page. As per the typical OAuth Web Flow, login to your
Dropbox Account and click "Allow":
![Cloud Elements Events 7](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance22.png)

And finally, click "Done". (As always, you can enter some tag
information here to help track your Element instances.)
![Cloud Elements Events 8](http://cloud-elements.com/wp-content/uploads/2015/01/DropboxCreateInstance31.png)

And that's it! You've successfully provisioned a new Element instance
with notifications via our Console UI.

#### **Provisioning via APIs**

In order to provision an instance via the API, we must first make a
request to the Element's `/oauth` url with the necessary keys. (Note,
you can skip to the `/instances` call description below if your Element
doesn't use OAuth authentication.)

* HTTP Header: None
* HTTP Verb: GET
* Request URL: /elements/{key}/oauth/url
* Request Body: None
* Query Parameters:
    * __apiKey–__ the key obtained from registering your app with the
      provider
    * __apiSecret__ – the secret obtained from registering your app with the
      provider
    * __callbackUrl__ – the URL that you supplied to the provider when
      registering your app
    * __state__ – any custom value that you want passed to the callback
      handler listening at the provided callback URL.

The result of this API invocation is an OAuth redirect URL from the
endpoint. Your application should now redirect to this URL, which in
turn will present the OAuth authentication and authorization page to the
user. When the provided callback URL is executed, a code value will be
returned, which is required to create a new instance.

Example cURL Command:

```bash
curl -X GET -H 'Content-Type: application/json' \
  'https://api.cloud-elements.com/elements/api-v2/elements/dropbox/oauth/url?apiKey=fake_Dropbox_api_key&apiSecret=fake_Dropbox_api_secret&callbackUrl=https://www.mycoolapp.com/auth&state=dropbox'
```

Response:

```json
{
  "oauthUrl": "https://www.dropbox.com/api/oauth2/authorize?response_type=code&client_id=insert_dropbox_client_id0&redirect_uri=https://www.mycoolapp.com/auth&state=dropbox",
  "element": "dropbox"
}
```

Upon successful authentication and authorization by the user, the
endpoint will redirect to the callback URL you provided when you setup
your application with the endpoint, in our example,
`https://www.mycoolapp.com/auth`. The endpoint will also provide two query
string parameters: “state” and “code”. The value for the “state”
parameter will be the name of the endpoint, e.g., “dropbox” in our
example, and the value for the “code” parameter is the code required by
Cloud Elements to retrieve the OAuth access and refresh tokens from the
endpoint. If the user denies authentication and/or authorization, there
will be a query string parameter called “error” instead of the “code”
parameter. In this case, your application can handle the error
gracefully.

Once you have the necessary authorization values, you can make a call to
the `/instances` API to actually create a new instance.

Below is an example of the provisioning API call.

* __HTTP Headers__: Authorization- User <user secret>, Organization <organization secret>
* __HTTP Verb__: POST
* __Request URL__: /instances
* __Request Body__: Required – see below
* __Query Parameters__: none

An Element token is returned upon successful execution of this API. This
token needs to be retained by the application for all subsequent
requests involving this Element instance.

A sample request illustrating the `/instances` API is shown below.

#### HTTP Headers:

```bash
Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>
```

Below is an example of the body that must be included in your instance
request, which would provision a new Dropbox Element instance. Note the
`event` configuration properties are similar to what we specify in the
GUI:

```json
{
  "element": {
    "key": "dropbox"
  },
  "providerData": {
    "code": "'code' from the oauth call (required for OAuth only)"
  },
  "configuration": {
    "oauth.callback.url": "<SAMPLE_CALLLBACK_URL>",
    "oauth.api.key": "<SAMPLE_API_KEY>",
    "oauth.api.secret": "<SAMPLE_API_SECRET>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "http://my-cool-site/callback",
    "document.tagging": false
  },
  "tags": [
    "<INSERT_TAGS>"
  ],
  "name": "<INSERT_INSTANCE_NAME>"
}
```

If your element supports polling, you would need to provide additional
configuration values to enable it: see the "Polling Configuration"
section below for details.

If this JSON was saved in a file named `instance.json`, then we could
make the following cURL command to create an instance:

```bash
curl -X POST \
  -H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>' \
  -H 'Content-Type: application/json' \
  -d @instance.json \
  'https://api.cloud-elements.com/elements/api-v2/instances'
```

Below is an example of a successful JSON response that might result:
note the "token" property, which is required to make any API requests to
the new Element instance.

```json
{
  "id": 123,
  "name": "Test",
  "token": "5MOr3Sl/E4kww6mTjmjBYV/hAUAzz1g=",
  "element": {
    "id": 22,
    "name": "Dropbox",
    "key": "dropbox",
    "description": "Add a Dropbox instance to connect your existing Dropbox account to the Documents Hub, allowing you to manage files and folders. You will need your Dropbox account information to add an instance.",
    "image": "elements/provider_dropbox.png",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing Dropbox accountEnter your credentials and details for your Dropbox Account",
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

And that's it: you've used our APIs to provision a new Element instance
with notifications enabled.
