---
heading: Element APIs
seo: Element APIs Overview | Cloud Elements API Docs
title: Overview
description: Find API documentation and example API calls.
layout: sidebarleft
platform: elements
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/platform/elements/
---

## Element APIs

The Elements API method calls allow you to retrieve information associated with each of the elements that Cloud Elements currently supports.

There is no Cloud Elements Authorization requirement needed in order to access the Elements APIs. They can be accessed using our Element Keys (found below). They can also be access using the OAuth API Key, Secret, and Callback URL of your service endpoint application.

### How to Use the Element APIs

Below are example cURL commands and examples of successful responses for each of the Elements API calls.  NOTE, not all supported calls are displayed - this is just a sample.

`GET /elements`

Retrieve all of the available elements.

Below is an example cURL command demonstrating the `GET /elements` API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET https://api.cloud-elements.com/elements/api-v2/elements
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

`GET /element/keys`

Retrieve all of the available element keys.

Below is an example cURL command demonstrating the `GET /elements/keys` API call and successful response.  Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET https://api.cloud-elements.com/elements/api-v2/elements/keys
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

`GET /elements/{key}`

Retrieve a specific element associated with an element key. Specifying an element associated with an element key that does not exist results in an error response.

Below is an example cURL command demonstrating the `GET /elements/{keys}` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET https://api.cloud-elements.com/elements/api-v2/elements/googledrive
```

Example of Successful Response:

```JSON
{
    "active": true,
    "configDescription": "If you do not have an Google Drive account, you can create one at <a href="https://accounts.google.com/SignUp" target="_blank">Google Drive Signup</a>",
    "deleted": false,
    "description": "Google Driveu2014a place where you can create, share, collaborate, and keep all of your files.  Users will be required to have a Google Drive account in order to use this element.",
    "elementProvisionType": "OAUTH_TEMPLATE",
    "existingAccountDescription": "Give your application access to your existing <br> Google Drive account</br><span class="buttonDescription">Enter your credentials and details for your <b>Google Drive Account</b></span>",
    "id": 21,
    "image": "elements/provider_googledrive.png",
    "key": "googledrive",
    "name": "Google Drive",
    "signupURL": "https://drive.google.com",
    "trialAccount": false,
    "typeOauth": true
}
```

`GET /elements/{key}/oauth/url`

Retrieve the OAuth 2 redirect URL associated with the specified element. Specifying an element key associated with an element that does not exist results in an error response. Specifying an element key associated with a non-OAuth element will also result in an error. NOTE: the siteAddress field is required for (Sharepoint) if hosted.

Below is an example cURL command demonstrating the `GET /elements/{key}/oauth/url` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -i -X GET 'https://api.cloud-elements.com/elements/api-v2/elements/dropbox/oauth/url?apiKey=vulws95ofcvhel5&apiSecret=vvkridbs3pe0r57&callbackUrl=http://localhost:9200/demo/Authz.groovy'
```

Example of Successful Response:

```JSON
{
    "element": "dropbox",
    "oauthUrl": "https://www.dropbox.com/1/oauth2/authorize?response_type=code&client_id=vulws95ofcvhel5&redirect_uri=http%3A%2F%2Flocalhost%3A9200%2Fdemo%2FAuthz.groovy&state=dropbox"
}
```

`GET /elements/{key}/oauth/token`

Retrieve the OAuth 1 request token. Specifying an element key associated with an element that does not exist results in an error response. Specifying an element key associated with a non-OAuth 1 element will also result in an error.

Below is an example cURL command demonstrating the `GET /elements/{key}/oauth/token` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET 'https://api.cloud-elements.com/elements/api-v2/elements/quickbooks/oauth/token?apiKey=abcrdzs8G6Uaq40FDkETrfgMFD9dac&apiSecret=defxWBlptamf9Tg9Zk1vcanxqChAONDnQ9lKPdae&callbackUrl=http://callbackurl.com'
```

Example of Successful Response:

```JSON
{
    "token": "vvvyprdDVEO0ynOBEHB9qsLYqxosUE7DiLfhTLn6st4HfhV",
    "secret": "vvvg6l7Uiv9OMSGJuMzB4ptgweBZuvxX544LYUR"
}
```

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-elements.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
