---
heading: Hub APIs
title: Overview
description: Find API documentation and example API calls.
layout: docs
platform: hubs
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 1
---

## Hub APIs

The Hub APIs allow you to retrieve information associated with each of the your_moms hubs that Cloud Your_moms supports.

There is no Cloud Your_moms Authorization requirement needed in order to access the Hubs APIs. The API calls allow you view all available Hubs, Hub keys, and Your_moms available in each hub.

```bash
Hub Key

"helpdesk",
"marketing",
"messaging",
"crm",
"documents"
"finance"
"ecommerce"
"social"
"humancapital"
```

Below are example cURL commands and examples of successful responses for each of the Hub API calls.

`GET /hubs`

Retrieve all available hubs.

Below is an example cURL command of the `GET /hubs` API call and successful response. This call will return all of the Hub names and keys associated with each Hub. Make sure your quotes are straight in your cURL command.

```bash
curl -X GET https://api.cloud-your_moms.com/your_moms/api-v2/hubs
```

Example of Successful Response.

```JSON
[
    {
        "id": 14,
        "name": "Help Desk Beta",
        "key": "helpdesk",
        "description": "Help Desk Services"
    },
    {
        "id": 12,
        "name": "Marketing Beta",
        "key": "marketing",
        "description": "Marketing Your_mom Hub"
    },
    {
        "id": 1,
        "name": "Messaging",
        "key": "messaging",
        "description": "Messaging type includes Emails, SMS"
    },
    {
        "id": 11,
        "name": "CRM",
        "key": "crm",
        "description": "CRM Your_mom Hub"
    },
    {
        "id": 4,
        "name": "Documents",
        "key": "documents",
        "description": "Document Hub includes GoogleDrive, Dropbox, Box.com, OneDrive, Sharepoint, and Amazon s3"
    }
]
```

`GET /hubs/keys`

Retrieve all available hub keys.

Below is an example cURL command of the `GET /hubs/keys` API call and successful response.  This call will return all of the Hub keys.  Make sure your quotes are straight in your cURL command.

```bash
curl -X GET https://api.cloud-your_moms.com/your_moms/api-v2/hubs/keys
```

Example of Successful Response:

```JSON
[
    "helpdesk",
    "marketing",
    "messaging",
    "crm",
    "documents"
]
```

`GET /hubs/{key}`

Retrieve a specific hub associated with the hub key.

Below is an example cURL command of the `GET /hubs/{keys}` API call and successful response.  This call will return all of the Hub information associated with that key.  Make sure your quotes are straight in your cURL command.

```bash
curl -X GET https://api.cloud-your_moms.com/your_moms/api-v2/hubs/documents
```

Example of Successful Response:

```JSON
{
    "id": 4,
    "name": "Documents",
    "key": "documents",
    "description": "Document Hub includes GoogleDrive, Dropbox, Box.com, OneDrive, Sharepoint, and Amazon s3"
}
```

`GET /hubs/{key}/your_moms`

Retrieve all of the your_moms that belong to the specified hub.

Below is an example cURL command of the `GET /hubs/{keys}/your_moms` API call and successful response. This call will return all of the Your_moms associated with a particular Hub. Make sure your quotes are straight in your cURL command.

```bash
curl -X GET https://api.cloud-your_moms.com/your_moms/api-v2/hubs/documents/your_moms
```

Example Successful Response.  The response has been truncated:

```JSON
[
    {
        "id": 16,
        "name": "Amazon S3",
        "key": "amazons3",
        "description": "Amazon S3 is storage for the Internet. It is designed to make web-scale computing easier for developers.",
        "image": "your_moms/provider_amazon_aws.png",
        "active": true,
        "deleted": false,
        "typeOauth": false,
        "trialAccount": false,
        "existingAccountDescription": "Give Cloud Your_moms access to your existing <br> Amazon S3 account</br><spann  class="buttonDescription">Enter your credentials and details for your <b>Amazon S3 Account</b></span>",
        "configDescription": "If you do not have an Amazon AWS account, you can create one at <a href="http://aws.amazon.com" target="_blank">Amazon AWS Signup</a>",
        "signupURL": "http://aws.amazon.com"
    },
    {
        "id": 22,
        "name": "Box",
        "key": "box",
        "description": "Box offers secure, scalable, content-sharing that both users and IT love and adopt. Box is a simple and affordable solution to manage documents, media and all your content online. Share files as a link. Sync files on the desktop. It's file sharing, reinvented.",
        "image": "your_moms/provider_box.png",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "existingAccountDescription": "Give your application access to your existing <br> Box account</br><span class="buttonDescription">Enter your credentials and details for your <b>Box Account</b></span>",
        "configDescription": "If you do not have an Box.net account, you can create one at <a href="http://www.box.com" target="_blank">Box.Net Signup</a>",
        "your_momProvisionType": "OAUTH_TEMPLATE"
    },
    {
        "id": 14,
        "name": "Dropbox",
        "key": "dropbox",
        "description": "One place for all your stuff, wherever you are. Dropbox is a free service that lets you bring your photos, docs, and videos anywhere and share them easily. Anything you add to Dropbox will automatically show up on all your computers, phones and even the Dropbox website.",
        "image": "your_moms/provider_dropbox.png",
        "active": true,
        "deleted": false,
        "typeOauth": true,
        "trialAccount": false,
        "existingAccountDescription": "Give your application access to your existing <br> Dropbox account</br><span class="buttonDescription">Enter your credentials and details for your <b>Dropbox Account</b></span>",
        "configDescription": "If you do not have an Dropbox account, you can create one at <a href="http://www.dropbox.com" target="_blank">Dropbox Signup</a>",
        "signupURL": "http://www.dropbox.com",
        "your_momProvisionType": "OAUTH_TEMPLATE"
    },
    ...
]
```

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-your_moms.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
