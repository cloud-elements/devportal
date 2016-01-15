---
heading: Salesforce
title: Events
description: Enable Salesforce events for your application.
layout: docs
order: 25
---

## Events

Cloud Elements supports both webhooks and polling events for Salesforce.

### Polling

In order to enable polling, add these two extra configurations to your instance JSON:

```
"event.notification.enabled": "true",
"event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
```

instance JSON with polling events enabled:

```json
{
  "element": {
    "key": "sfdc"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```

### Webhooks

Follow these steps to setup your Salesforce application with the endpoint.

__In order to create a Salesforce Element Instance you must have the Enterprise edition or Professional edition with API support is required. Also, to set up a new application in Salesforce, you must have Administrator privileges. Please contact your system administrator if you do not have those privileges.__

Via a web browser, login to your Salesforce account:
[https://login.salesforce.com/](https://login.salesforce.com/)


Select "Setup" if not taken there by default:

1. In left hand nav menu, under create, select "Apps"

2. Click "New"
![Salesforce Connected App step 1](img/salesforce-connected-app-1.png)

3. Fill out the basic information about the app

4. Make sure to select "Enable OAuth Settings"

5. You’ll be required to enter a callback URL from the endpoint. This URL will be in your application’s address space, and you will be required to retrieve some information returned on this URL by the endpoint. For our example,we’ll use a callback URL of https://mycoolapp.com/auth

6. Choose from the "Selected OAuth Scopes". "Full Access" and "Perform requests on your behalf at any time (refresh_token_, offline_access)" are the minimum needed scopes.

7. Add the selected scopes

8. Click "Save" at the bottom of the window ![Salesforce Connected App step 2](img/salesforce-connected-app-2.png)

9. Please make a note of the "Consumer Key"

10. Please make a note of the "Consumer Secret" ![Salesforce Connected App step 3](img/salesforce-connected-app-3.png)

11. Under "Administer" > "Security Controls" > select "Remote Site Settings"
![Salesforce Webhook step 1](img/salesforce-webhook-1.png)

12. Click “New Remote Site”
![Salesforce Webhook step 2](img/salesforce-webhook-2.png)

13. Input “Remote Site Name” e.g. Cloud Elements and the following URL: `https://api.cloud-elements.com`

14. Click “Save”
![Salesforce Webhook step 3](img/salesforce-webhook-3.png)

__NOTE: Our current support for Salesforce Events include listening for the following:
Creating, Updating, and Deleting of any object in Salesforce.
For example, when a new account is created, your application will receive a notification regarding the creation of the account.__

The following JSON may be used to create a Salesforce Instance with webhooks enabled:

```json
{
  "element": {
    "key": "sfdc"
  },
  "providerData": {
    "code": "<Code_On_The_Return_URL>"
  },
  "configuration": {
    "oauth.callback.url": "https://www.mycoolapp.com/auth",
    "oauth.api.key": "<Insert_Client_ID>",
    "oauth.api.secret": "<Insert_Client_Secret>",
    "event.notification.enabled": "true",
    "event.notification.callback.url": "<INSERT_YOUR_APPS_CALLBACL_URL>"
  },
  "tags": [
    "<Add_Your_Tag>"
  ],
  "name": "<Insert_Instance_Name>"
}
```
