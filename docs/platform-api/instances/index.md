---
heading: Instance APIs
seo: Instance APIs Overview | Cloud Elements API Docs
title: Overview
description: Find API documentation and example API calls.
layout: sidebarleft
platform: instances
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/platform/instances/
---

## Instance APIs

The Instances APIs allow you to access your account’s element instances that have been provisioned. Access includes creating, retrieving, updating, and deleting instances.

In order to access the Instances APIs, you must sign up for Cloud Elements Service. You will need your Organization and User Secrets to make success Usage API calls. These are generated for you when you sign up for our service. Details on how to sign up and where to find your Organization and User Secrets are documented in the next section.

### SIGN UP FOR THE CLOUD ELEMENTS SERVICE

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

Sign up with Google, GitHub or fill out a short form to create a new account with Cloud Elements. If you choose not to use Google or GitHub to sign up, you will be asked to validate your new account via a confirmation link that will be sent to your email. You will reset your password to one of your choice after your initial login.
![Cloud Elements Sign up 1](http://cloud-elements.com/wp-content/uploads/bfi_thumb/ConsoleSignup-m7cde2lpyjexfapmzvn0rpkw24op0jn7mwipj6q2zk.png)

1. After completing this process, click “Secrets” in the top right corner of your dashboard as shown.

2. Copy your User and Organization Secrets. They are needed to create a connection or “Element Instance”.

NOTE: If you ever need to reset your Secrets, this action can be done by clicking on “My Settings” which will take you to your profile.
![Cloud Elements Sign up 2](http://cloud-elements.com/wp-content/uploads/bfi_thumb/ConsoleSignup22-m7ch2y2e2fak6ad3rqmz7knmq5beuc61n2yurd6md4.png)

### How to Use the Instance APIs

Below are example cURL commands and examples of successful responses for each of the Instances API calls.  NOTE, not all supported calls are displayed - this is just a sample.

`POST /instances`

Create a new element instance.

Below is an example cURL command demonstrating the POST /instances API call and successful response. The `create-instance.json` file is needed for successful instance creation. This file will be places after the -d @ in the cURL command. The `create-instance.json` file is example data that was created for this demonstration. Please make sure your quotes are straight in the cURL command.

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @create-instance.json
'https://api.cloud-elements.com/elements/api-v2/instances'
```

Example JSON file – create-instance.json:

```JSON
{
  "element": {
    "key": "dropbox"
  },
  "providerData": {
    "code": "Code on the Return URL"
  },
  "configuration": {
    "oauth.callback.url": "https://www.cloud-elements.com",
    "oauth.api.key": "za6jhr3hychnef0",
    "oauth.api.secret": "eghxt92pr5xjkuv",
    "document.tagging": false
  },
  "tags": [
    "my_first_tag"
  ],
  "name": "my_first_instance"
}
Successful Example Response:

{
  "id": 27,
  "name": "my_first_instance",
  "token": "BUIWhN8NTPaeyYo7Kblo91CJ1tCG6PUonwnV/XJjy2A=",
  "element": {
    "id": 14,
    "name": "Dropbox",
    "key": "dropbox",
    "description": "One place for all your stuff, wherever you are. Dropbox is a free service that lets you bring your photos, docs, and videos anywhere and share them easily. Anything you add to Dropbox will automatically show up on all your computers, phones and even the Dropbox website.",
    "active": true,
    "deleted": false,
    "typeOauth": true,
    "trialAccount": false,
    "existingAccountDescription": "Give your application access to your existing <br> Dropbox account</br><span class="buttonDescription">Enter your credentials and details for your <b>Dropbox Account</b></span>",
    "configDescription": "If you do not have an Dropbox account, you can create one at <a href="http://www.dropbox.com" target="_blank">Dropbox Signup</a>",
    "signupURL": "http://www.dropbox.com",
    "elementProvisionType": "OAUTH_TEMPLATE"
  },
  "tags": [
    {
      "id": 12,
      "name": "my_first_tag"
    }
  ],
  "provisionInteractions": [],
  "valid": true,
  "disabled": false
}
```

Note:  Make sure you have straight quotes in your JSON files and cURL commands.  Please use plain text formatting in your code.

{% include common-instance-config.md %}

`GET /instances`

Retrieve all of your account’s element instances.

Below is an example cURL command demonstrating the `GET /instances` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/instances'
```

Example of Successful Response – example has been truncated.

```JSON
[
    {
        "id": 4014,
        "name": "QA Box",
        "token": "abcU3kXt5Na7EPiabc6wPagnskTsZUJrY4gTQCjt7efa=",
        "element": {
            "id": 22,
            "name": "Box",
            "key": "box",
            "description": "Box offers secure, scalable, content-sharing that both users and IT love and adopt. Box is a simple and affordable solution to manage documents, media and all your content online. Share files as a link. Sync files on the desktop. It's file sharing, reinvented.",
            "image": "elements/provider_box.png",
            "active": true,
            "deleted": false,
            "typeOauth": true,
            "trialAccount": false,
            "existingAccountDescription": "Give your application access to your existing <br> Box account</br><span class="buttonDescription">Enter your credentials and details for your <b>Box Account</b></span>",
            "configDescription": "If you do not have an Box.net account, you can create one at <a href="http://www.box.com" target="_blank">Box.Net Signup</a>",
            "elementProvisionType": "OAUTH_TEMPLATE"
        },
        "tags": [
            "QA",
            "QA Box",
            "Starter"
        ],
        "valid": true,
        "maxCacheSize": 0,
        "cacheTimeToLive": 0,
        "cachingEnabled": false
    },
    {
        "id": 2535,
        "name": “QA SFDC Service Cloud",
        "token": "e298ab9bf609f98e750fab49efcd18508",
        "element": {
            "id": 29,
            "name": "Salesforce.com Service Cloud",
            "key": "sfdcservicecloud",
            "description": "Salesforce.com Service Cloud allows you to deliver revolutionary customer service from anywhere, anytime, on any device.",
            "image": "elements/provider_sfdc.png",
            "active": true,
            "deleted": false,
            "typeOauth": true,
            "trialAccount": false,
            "configDescription": "If you do not have a Salesforce.com account, you can create one at <a href="http://www.salesforce.com" target="_blank">Salesforce.com Signup</a>"
        },
        "tags": [
           "QA"
        ],
        "valid": true,
        "maxCacheSize": 0,
        "cacheTimeToLive": 0,
        "cachingEnabled": false
    }
]
```

`PUT /instances/{id}`

Update an already existing element instance.

Below is an example cURL command demonstrating the `PUT /instances/{id}` API call and successful response. The `update-instance.json` file is needed to successfully update an instance. This file will be places after the `-d @` in the cURL command.The ID will need to be placed at the end of the URL in the cURL command. For our example, the ID used is 4590. Please make sure your quotes are straight in the cURL command.

```bash
curl -X PUT
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @sfdc-update-instance.json
'https://api.cloud-elements.com/elements/api-v2/instances/4590'
```

update-instance.json: – JSON file needed to update instance

```JSON
{
    "name": "SFDC Updated Instance",
    "tags": [
        "sandbox",
        "08/21/2014",
        "new-tag"
    ]
}
Example of Successful Response:

{
    "id": 4590,
    "name": "SFDC Updated Instance",
    "token": "bl+pVH4pVl1yciJZ8IpPVfb5gT2ZmQGdyHbjlSKF7ee=",
    "element": {
        "id": 23,
        "name": "Salesforce.com",
        "key": "sfdc",
        "description": "Customer relationship management, simplified. with the Salesforce.com Element, integrate a leading customer management service into your application in a fraction of the time, with a fraction of the code. Your campaigns, projects, CRM, payments and documents are all in one place, all integrated seamlessly into your app.",
        "image": "elements/provider_sfdc.png",
        "active": true,
        "deleted": false,
        "typeOauth": false,
        "trialAccount": false,
        "existingAccountDescription": "Use your Salesforce.com Account <br /><span class="buttonDescription">Enter your credentials and details for your <b>Salesforce.com Account</b>.</span>",
        "configDescription": "If you do not have a Salesforce.com account, you can create one at <a href="http://www.salesforce.com" target="_blank">Salesforce.com Signup</a>",
        "signupURL": "http://www.salesforce.com"
    },
    "provisionInteractions": [],
    "valid": true,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```

`DELETE /instances/{id}`

Delete an element instance.

Below is an example cURL command demonstrating the `DELETE /instances/{id}` API call and successful response. The ID will need to be placed at the end of the URL in the cURL command. For our example, the ID used is `4590`. Please make sure your quotes are straight in the cURL command.

```bash
curl -X DELETE
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/instances/4590'
```

Example of Successful Response:

`HTTP 200 on success`

`GET /instances/{id}`

Retrieve a specific element instance.

Below is an example cURL command demonstrating the `GET /instances/{id}` API call and successful response. The ID will need to be placed at the end of the URL in the cURL command. For our example, the ID used is `4014`. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/instances/4014'
```

Example of Successful Response:

```JSON
{
    "id": 4014,
    "name": "QA Box",
    "token": "abcU3kXt5Na7EPiabc6wPagnskTsZUJrY4gTQCjt7efa=",
    "element": {
        "id": 22,
        "name": "Box",
        "key": "box",
        "description": "Box offers secure, scalable, content-sharing that both users and IT love and adopt. Box is a simple and affordable solution to manage documents, media and all your content online. Share files as a link. Sync files on the desktop. It's file sharing, reinvented.",
        "image": "elements/provider_box.png",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "existingAccountDescription": "Give your application access to your existing <br> Box account</br><span class="buttonDescription">Enter your credentials and details for your <b>Box Account</b></span>",
        "configDescription": "If you do not have an Box.net account, you can create one at <a href="http://www.box.com" target="_blank">Box.Net Signup</a>",
        "elementProvisionType": "OAUTH_TEMPLATE"
    },
    "tags": [
        "QA Box",
        "QA",
        "Starter"
    ],
    "provisionInteractions": [],
    "valid": false,
    "disabled": false,
    "maxCacheSize": 0,
    "cacheTimeToLive": 0,
    "cachingEnabled": false
}
```

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-elements.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
