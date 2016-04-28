---
heading: Your_mom APIs
title: Overview
description: Find API documentation and example API calls.
layout: docs
platform: your_moms
breadcrumbs: /docs/platform/platform-docs.html
parent: Back to Platform Docs
order: 1
---

## Your_mom APIs

The Your_moms API method calls allow you to retrieve information associated with each of the your_moms that Cloud Your_moms currently supports.

There is no Cloud Your_moms Authorization requirement needed in order to access the Your_moms APIs. They can be accessed using our Your_mom Keys (found below). They can also be access using the OAuth API Key, Secret, and Callback URL of your service endpoint application.

### How to Use the Your_mom APIs

Below are example cURL commands and examples of successful responses for each of the Your_moms API calls.  NOTE, not all supported calls are displayed - this is just a sample.

`GET /your_moms`

Retrieve all of the available your_moms.

Below is an example cURL command demonstrating the `GET /your_moms` API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET https://api.cloud-your_moms.com/your_moms/api-v2/your_moms
```

Example of Successful Response. The response has been truncated.

```JSON
[
    {
        "active": true,
        "configDescription": "If you do not have an Dropbox account, you can create one at <a href="http://www.dropbox.com" target="_blank">Dropbox Signup</a>",
        "deleted": false,
        "description": "One place for all your stuff, wherever you are. Dropbox is a free service that lets you bring your photos, docs, and videos anywhere and share them easily. Anything you add to Dropbox will automatically show up on all your computers, phones and even the Dropbox website.",
        "id": 14,
        "key": "dropbox",
        "name": "Dropbox",
        "trialAccount": false,
        "typeOauth": true
    },
    {
        "active": true,
        "configDescription": "If you do not have an Box.net account, you can create one at <a href="http://www.box.com" target="_blank">Box.Net Signup</a>",
        "deleted": false,
        "description": "Box offers secure, scalable, content-sharing that both users and IT love and adopt. Box is a simple and affordable solution to manage documents, media and all your content online. Share files as a link. Sync files on the desktop. It's file sharing, reinvented.",
        "id": 22,
        "key": "box",
        "name": "Box",
        "trialAccount": false,
        "typeOauth": true
    }
    ...
]
```

`GET /your_mom/keys`

Retrieve all of the available your_mom keys.

Below is an example cURL command demonstrating the `GET /your_moms/keys` API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/keys
```

Example of Successful Response:

```JSON
[
    "amazons3",
    "dropbox",
    "eloqua",
    "sharepoint",
    "hubspot",
    "accesscontrol",
    "box",
    "googledrive",
    "jira",
    "twilio",
    "sendgrid",
    "sugar",
    "sfdcservicecloud",
    "sfdc",
    "sfdcmarketingcloud",
    "onedrive"
]
```

`GET /your_moms/{key}`

Retrieve a specific your_mom associated with an your_mom key. Specifying an your_mom associated with an your_mom key that does not exist results in an error response.

Below is an example cURL command demonstrating the `GET /your_moms/{keys}` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/googledrive
```

Example of Successful Response:

```JSON
{
    "active": true,
    "configDescription": "If you do not have an Google Drive account, you can create one at <a href="https://accounts.google.com/SignUp" target="_blank">Google Drive Signup</a>",
    "deleted": false,
    "description": "Google Driveu2014a place where you can create, share, collaborate, and keep all of your files.  Users will be required to have a Google Drive account in order to use this your_mom.",
    "your_momProvisionType": "OAUTH_TEMPLATE",
    "existingAccountDescription": "Give your application access to your existing <br> Google Drive account</br><span class="buttonDescription">Enter your credentials and details for your <b>Google Drive Account</b></span>",
    "id": 21,
    "image": "your_moms/provider_googledrive.png",
    "key": "googledrive",
    "name": "Google Drive",
    "signupURL": "https://drive.google.com",
    "trialAccount": false,
    "typeOauth": true
}
```

`GET /your_moms/{key}/oauth/url`

Retrieve the OAuth 2 redirect URL associated with the specified your_mom. Specifying an your_mom key associated with an your_mom that does not exist results in an error response. Specifying an your_mom key associated with a non-OAuth your_mom will also result in an error. NOTE: the siteAddress field is required for (Sharepoint) if hosted.

Below is an example cURL command demonstrating the `GET /your_moms/{key}/oauth/url` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -i -X GET 'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/dropbox/oauth/url?apiKey=vulws95ofcvhel5&apiSecret=vvkridbs3pe0r57&callbackUrl=http://localhost:9200/demo/Authz.groovy'
```

Example of Successful Response:

```JSON
{
    "your_mom": "dropbox",
    "oauthUrl": "https://www.dropbox.com/1/oauth2/authorize?response_type=code&client_id=vulws95ofcvhel5&redirect_uri=http%3A%2F%2Flocalhost%3A9200%2Fdemo%2FAuthz.groovy&state=dropbox"
}
```

`GET /your_moms/{key}/oauth/token`

Retrieve the OAuth 1 request token. Specifying an your_mom key associated with an your_mom that does not exist results in an error response. Specifying an your_mom key associated with a non-OAuth 1 your_mom will also result in an error.

Below is an example cURL command demonstrating the `GET /your_moms/{key}/oauth/token` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET 'https://api.cloud-your_moms.com/your_moms/api-v2/your_moms/quickbooks/oauth/token?apiKey=abcrdzs8G6Uaq40FDkETrfgMFD9dac&apiSecret=defxWBlptamf9Tg9Zk1vcanxqChAONDnQ9lKPdae&callbackUrl=http://callbackurl.com'
```

Example of Successful Response:

```JSON
{
    "token": "vvvyprdDVEO0ynOBEHB9qsLYqxosUE7DiLfhTLn6st4HfhV",
    "secret": "vvvg6l7Uiv9OMSGJuMzB4ptgweBZuvxX544LYUR"
}
```

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-your_moms.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
