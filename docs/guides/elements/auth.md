---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Authentication Setup
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 23
---

# Custom Authentication Setup

{% include workflow.html displayNames="Info,Authentication,Configuration,Parameters,Hooks,Events,Bulk,Resources" links="define-info.html,auth.html,config.html,config.html#set-up-parameters,hooks.html,events.html,bulk.html,resources.html" active="Authentication"%}

The information that you need to enter to set up authentication with the API provider differs depending on the authentication type. You can use the default flows on this page, but if the API provider uses complex authentication, you can override the default information with configurations, parameters , and hooks.

Click the authentication type that you selected to see configuration instructions. If you selected Custom, go to [Configuration and Parameters](config.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#configure-oauth-2-0>Configure OAuth 2.0</a></br><a href=#configure-oauth-1-0>Configure OAuth 1.0</a></br><a href=#configure-basic-authentication>Configure Basic Authentication</a></br><a href=#configure-custom-authentication>Configure Custom Authentication</a></br><a href=#configure-aws-authentication>Configure AWS Authentication</a></br><a href=#change-the-authentication-type>Change the Authentication Type</a>" type="info" %}

## Configure OAuth 2.0

Cloud Elements provides the [parameters](#oauth-2-0-parameters) needed to support a standard OAuth 2.0 flow. Each API provider implements OAuth 2.0 differently so you might need to supplement the parameters with additional configuration. Prior to setting up the OAuth 2.0 information, you need to create a Cloud Elements app at the API provider. Use the default information from that app. When users authenticate through Cloud Elements, they will connect with that app.

To configure OAuth 2.0 elements:

1. Click **Authentication**.
2. Complete the fields needed to enable users to grant Cloud Elements access to their account on behalf of your application:
  * OAuth API Key
  * OAuth API Secret
  * OAuth Callback URL
  * OAuth Authorization URL
2. In **OAuth Token URL** enter the URL where Cloud Elements exchanges the grant code from the API provider for an access token.
3. If the API provider expires tokens, complete the following fields:
  * OAuth Refresh Interval (s)
  * OAuth Token Refresh URL

### OAuth 2.0 Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  OAuth API Key  | {{site.data.glossary.eb-api-key}} |  Y  |
|  OAuth API Secret  |  {{site.data.glossary.eb-api-secret}}  |  Y  |
|  OAuth Callback URL  |  {{site.data.glossary.eb-callback-url}} |  Y  |
|  OAuth Authorization URL  |  {{site.data.glossary.eb-auth-url}}  |  Y  |
|  OAuth Token URL  |  {{site.data.glossary.eb-token-url}}  |  Y  |
|  OAuth Refresh Interval (s)  |  If the access token expires, the time frame when Cloud Elements sends a request to the OAuth Token Refresh URL.  |  N  |
|  OAuth Token Refresh URL  |  The URL to send a refresh request.  |  N  |

## Configure OAuth 1.0

Cloud Elements provides the [parameters](#oauth-1-0-parameters) required to support a standard OAuth 1.0 flow. Each API provider implements OAuth 1.0 differently so you might need to supplement these parameters with additional configuration.

To configure OAuth 1.0 elements:

1. Click **Authentication**.
2. Complete the fields needed to obtain an OAuth Request Token to request user authorization
  * OAuth API Key
  * OAuth API Secret
  * OAuth Request URL
  * OAuth Callback URL
3. In **OAuth Authorization URL** enter the URL where Cloud Elements redirects the user to authorize access.
4. In **OAuth Token URL** enter the URL where Cloud Elements fetches an access token.
5. In **OAuth Authorization Type (Header or Query)** select the way that authorization information is passed to the API provider.
6. In **OAuth Scope** select the permissions that the user will authorize your integration to have.
7. In **OAuth User Secret** enter

### OAuth 1.0 Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  OAuth Request URL  |  The URL used to obtain an unauthorized request token. A value used by the Consumer to obtain authorization from the User, and exchanged for an Access Token. |  Y  |
|  OAuth Callback URL  |  {{site.data.glossary.eb-callback-url}} |  Y  |
|  OAuth API Key  | {{site.data.glossary.eb-api-key}} |  Y  |
|  OAuth API Secret  |  {{site.data.glossary.eb-api-secret}}  |  Y  |
|  OAuth Authorization URL  |  {{site.data.glossary.eb-auth-url}}  |  Y  |
|  OAuth Token URL  |  {{site.data.glossary.eb-token-url}}  |  Y  |
|  OAuth Authorization Type (Header or Query)  |  How the API provider recieves authentication information, either in the header or as a query parameter.  |  Y  |
|  OAuth Scope  |  A comma separated list of scopes that define what the access token can do and what resources it can access.  |  N  |
|  OAuth User Secret  |    |  N  |

## Configure Basic Authentication

In Basic access authentication, you typically provide a user name and password. In some cases you also provide an API Key. When setting up an element with Basic authentication we start you off with Username and Password configurations. If you need to add any additional configurations like an API Key, do so in the Configuration step. API providers typically do not vary from the standard Basic authentication, so you should keep the default properties. If you do need to make changes, you can update the properties or delete unneeded configurations.

### Basic Authentication Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  Parameter Name  |  The parameter name as it will appear in {{site.console}} if not hidden. |  Y  |
|  Configuration Description  | A brief description of the parameter. This appears in hover help and should assist a user in completing the field. |  Y  |
|  Configuration Key  | The parameter name as it appears in the JSON payload. To maintain consistency with Cloud Elements standards, we recommend that you camelCase the configuration key.  |  Y  |
|  Configuration Type  |  |  Y  |
|  Default Value  | Enter any default value that you want to provide for the parameter. |  N  |
|  Required  | Indicates whether the parameter is required or not. |  Y  |
|  Hide on the UI  | Indicates whether the parameter appears on the UI when you authenticate an element instance or not. |  Y  |

## Configure Custom Authentication

To configure custom authentication information, use the [Configuration](config.html), [Parameters](config.html), and, if necessary, [Hooks](hooks.html) sections to construct the authentication information required by the API provider.

## Configure AWS Authentication

Cloud Elements provides default authentication fields for API providers that use [Amazon Web Services Signature Version 4](http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) and [Version 2](http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html). API providers typically do not vary from the standard AWS authentications, so you should keep the default properties. If you do need to make changes, you can update the properties or delete unneeded configurations.

### Basic Authentication Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  AWS Access Key ID  | The ID associated with your AWS access key.   |  Y  |
|  AWS Secret Access Key  | The secret key used in the Signature Version 2 signing process |  Yes for version 2 only |

## Change the Authentication Type

If you selected the incorrect authentication type, or find that you need to change the authentication for any reason, select another authentication type from the **type** list in the Authentication heading.
