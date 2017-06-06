---
heading: Weebly
seo: Create Instance | Weebly | Cloud Elements API Docs
title: Create Instance
description: Create Instance
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 449
parent: Back to Element Guides
order: 20
---

## Create Instance

Weebly is a Help Desk Platform. When you provision an instance, your app will have access to the different functionality offered by the Weebly platform.

There are steps to complete for Weebly prior to beginning the Cloud Elements OAuth Flow.  Information on [Completing the OAuth Flow](https://dev.weebly.com/authentication-using-oauth2.html) can be found on Weebly's site.  Below is an excerpt of that documentation.

### Step 1 Completing the OAuth Flow (From Weebly Documentation)

In addition to configuring the manifest, you need to provide the following to complete the OAuth flow:

* Decode and verify the HMAC hash
* Use the provided email to create an account at your site (optional)
* Redirect back to Weebly, providing a redirect URL and the scope of entitlement
* Redirect back to Weebly with the authorization code and exchange it for a permanent api access token
* Finish the flow and redirect user to the endpoint

__Decode and Verify the Hash__

Weebly uses HMAC-SHA256 to encode the URL parameters and sends them to the callback URL provided in the manifest. You need to use the secret code (found on your app’s admin page in the Developer Admin portal) to decode the hash and compare it to the parameters.

_Note: If the secret appears truncated on the admin page, right-click > copy will copy the entire code_

​Weebly sends the following:

* `user_id`: Weebly user id
* `site_id`: Weebly site id (optional)
* `timestamp`: Current timestamp
* `version`: Version cited in the manifest
* `hmac`: The user_id, site_id (if provided), and timestamp processed through HMAC-SHA256 using the app's secret key
* `callback_url`: The Weebly URL endpoint to be used in your callbacks. Do not hard code this value, as it is subject to change.

Example:

From Weebly

```bash
[MANIFEST_CALLBACK_URL]?user_id=[USER_ID]&timestamp=[TIMESTAMP]&site_id=[SITE_ID]&version=[VERSION]&
hmac=[HMAC-SHA256]&callback_url=[NEXT_OAUTH_STEP_URL]
```

Decode and Verify the Hash

```bash
$hash_string = "user_id=[USER_ID]&timestamp=[TIMESTAMP]&site_id=[SITE_ID]";
$hash = hash_hmac('sha256', $hash_string, SECRET_KEY);
```

Redirect back to Weebly with optional scope additions

Redirect back to Weebly using the callback parameter provided. Unless necessary, all scope declarations should be done in the manifest.

### Step 2. Redirect back to Weebly with optional scope additions

Redirect back to Weebly using the callback parameter provided in the hash. Unless necessary, all scope declarations should be done in the manifest.

Use this method:

GET /app-center/authorize

Redirect Back to Weebly

```bash
[CALLBACK_URL]?client_id=[CLIENT_ID]&user_id=[USER_ID]&site_id=[SITE_ID]&scope=[SCOPES]&
redirect_uri=[REDIRECT_URI]&version=[VERSION]
```

The CALLBACK_URL above is the callback_url we add to the manifest file callback url (see above).
Include the following parameters:

* `client_id`: Your ID number, found on your Developer Admin portal page
* `user_id`: passed to you in the original request
* `site_id`: optional ID of the site, passed to you in the original request
* `scope`: comma-delimited list of scopes of information that your app needs. Initial/global scopes should be listed in the manifest and not here. The scopes added here are compared with those in the manifest. If they are different, then the user will be shown a dialog asking for the additional permissions.
Choose from the following scopes:

  * `read:blog`: The app can read blog information.
  * `write:blog`: The app can modify blog information.
  * `read:site`: The app can read site information.
  * `write:site`: The app can modify site information.
  * `read:store-catalog`: The app can read store information.
  * `write:store-catalog`: The app can modify store information.
  * `read:store-orders`: The app can read order information.
  * `write:store-orders`: The app can modify order information.
  * `read:membership`: The app can read site's member and group information.
  * `write:membership`: The app can modify site's member and group information.
  * webhook: You need access to the webhook API
* `redirect_uri`: The URI for the resulting page. This URI must use the https protocol. This can be used to override the callback_uri in the manifest. If you don’t provide a URI, then the user is directed to the URI defined in the manifest.
* `version`: The version number passed to you in the original request. Note that non-approved versions (that is versions that are not yet in the App Center) can only be installed by the user that owns the app.

### Step 3. Create an Instance

To provision your Weebly Element, use the /instances API.

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
This instance.json file must be included with your instance request.  Please fill your information to provision.  The “key” into Cloud Elements Weebly is "weebly".  This will need to be entered in the “key” field below depending on which Element you wish to instantiate.

```json
{
  "element": {
    "key": "weebly"
  },
  "providerData": {
    "code": "Code on Return the URL"
  },
  "configuration": {
    "oauth.api.key": "<INSERT_ZENDESK_UNIQUE_IDENTIFIER>",
    "oauth.api.secret": "<INSERT_ZENDESK_CLIENT_SECRET>",
    "site.id": "<FROM_OAUTH_EXCHANGE>"
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
  "id": 1234,
  "name": "Test",
  "token": "zg1dx35BCjiKo+pbTQS3dxcAKlfZcNVOWtI=",
  "element": {
    "id": 41,
    "name": "Weebly",
    "key": "zendesk",
    "description": "Add a Weebly Instance to connect your existing Weebly account to the eCommerce Hub, allowing you to manage orders and products across multiple eCommerce Elements. You will need your Weebly API information to add an instance.",
    "image": "http://blog.addthiscdn.com/wp-content/uploads/2015/11/weebly.png",
        "active": true,
        "deleted": false,
        "typeOauth": false,
        "trialAccount": false,
        "resources": []
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "configuration": {
        "oauth.api.secret": "WEEBLY_API_SECRET",
        "base.url": "https://api.weebly.com/v1",
        "event.notification.subscription.id": "102",
        "pagination.max": "200",
        "site.id": "WEEBLY_SITE_ID",
        "event.vendor.type": "webhooks",
        "oauth.user.token": "MjMyMTUxMWM4NGEyMjIyNzMTUzMjQ=",
        "event.notification.instance.finder": "site.id|data.site_id",
        "pagination.type": "page",
        "event.notification.callback.url": "http://requestb.in/19tx0ai1",
        "oauth.api.key": "WEEBLY_API_KEY",
        "pagination.page.startindex": "1",
        "oauth.final.callback.url": "https://www.weebly.com/app-center/oauth/finish?client_id=26412761",
        "event.notification.enabled": "true"
    },
    "eventsEnabled": true,
    "eventsNotificationCallbackUrl": "http://requestb.in/19tx0ai1",
    "subscriptionId": 102,
    "traceLoggingEnabled": false,
    "cachingEnabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.  Make sure you do not have spaces after the in the cURL command.
