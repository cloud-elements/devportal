---
valeOff: <!-- vale off -->
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
ValeOn: <!-- vale on -->
---

# Custom Authentication Setup

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Authentication"%}

The information that you need to enter to set up authentication with the API provider differs depending on the authentication type. If the API provider requires complex authentication you can override the default information with configurations, parameters , and hooks.


Click the authentication type that you selected to see configuration instructions. If you selected Custom, you can skip directly to [Configuration and Parameters](config.html).

{% include callout.html content="<strong>On this page</strong></br><a href=#configure-oauth-2-0>Configure OAuth 2.0</a></br><a href=#configure-oauth-1-0>Configure OAuth 1.0</a></br><a href=#configure-basic-authentication>Configure Basic Authentication</a></br><a href=#configure-custom-authentication>Configure Custom Authentication</a></br><a href=#configure-aws-authentication>Configure AWS Authentication</a></br><a href=#change-the-authentication-type>Change the Authentication Type</a>" type="info" %}

## Configure OAuth 2.0

Cloud Elements provides the [properties](#oauth-2-0-parameters) needed to support a standard OAuth 2.0 flow. Each API provider implements OAuth 2.0 differently so you might need to supplement the parameters with additional configuration. Before setting up the OAuth 2.0 information, you need to create a Cloud Elements app at the API provider. Use the default information from that app. When users authenticate through Cloud Elements, they will connect with that app.

To configure OAuth 2.0 elements:

1. Click **Authentication**.
2. Complete the fields needed to enable users to grant Cloud Elements access to their account on behalf of your application:
  * OAuth API Key
  * OAuth API Secret
  * OAuth Callback URL
  * OAuth Authorization URL
2. In **OAuth Token URL** enter the URL where Cloud Elements exchanges the grant code from the API provider for an access token.
6. In **OAuth Scope** enter a comma separated list of the permissions that the user will authorize your integration to have.
3. If the API provider expires tokens, complete the following fields:
  * OAuth Refresh Interval (s)
  * OAuth Token Refresh URL
  * OAuth Revoke Token URL

### OAuth 2.0 Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  OAuth API Key  | {{site.data.glossary.eb-api-key}} |  Y  |
|  OAuth API Secret  |  {{site.data.glossary.eb-api-secret}}  |  Y  |
|  OAuth Callback URL  |  {{site.data.glossary.eb-callback-url}} For authentication through Cloud Elements, use `https://auth.cloudelements.io/oauth`. |  Y  |
|  OAuth Authorization URL  |  {{site.data.glossary.eb-auth-url}}  |  Y  |
|  OAuth Token URL  |  {{site.data.glossary.eb-token-url}}  |  Y  |
| OAuth Scope | {{site.data.glossary.eb-scope}} | N |
|  OAuth Refresh Interval (s)  |  If the access token expires, the time frame in seconds when Cloud Elements sends a request to the OAuth Token Refresh URL. The default is 3600, which is one hour.  |  N  |
|  OAuth Token Refresh URL  |  The URL to send a refresh request.  |  N  |
| OAuth Revoke Token URL | The URL to send requests to revoke refresh or access tokens. | N |

## Configure OAuth 1.0

Cloud Elements provides the [parameters](#oauth-1-0-parameters) required to support a standard OAuth 1.0 flow. Each API provider implements OAuth 1.0 differently so you might need to supplement the parameters with additional configuration.

To configure OAuth 1.0 elements:

1. Click **Authentication**.
2. Complete the fields needed to get an OAuth Request Token to request user authorization
  * OAuth API Key
  * OAuth API Secret
  * OAuth Request URL
  * OAuth Callback URL
3. In **OAuth Authorization URL** enter the URL where Cloud Elements redirects the user to authorize access.
4. In **OAuth Token URL** enter the URL where Cloud Elements fetches an access token.
5. In **OAuth Authorization Type (Header or Query)** select how the request passes authorization information to the API provider.
6. In **OAuth Scope** enter a comma separated list of the permissions that the user will authorize your integration to have.
7. In **OAuth User Secret** enter

### OAuth 1.0 Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  OAuth Request URL  |  The URL used to get an unauthorized request token. |  Y  |
|  OAuth Callback URL  |  {{site.data.glossary.eb-callback-url}} |  Y  |
|  OAuth API Key  | {{site.data.glossary.eb-api-key}} |  Y  |
|  OAuth API Secret  |  {{site.data.glossary.eb-api-secret}}  |  Y  |
|  OAuth Authorization URL  |  {{site.data.glossary.eb-auth-url}}  |  Y  |
|  OAuth Token URL  |  {{site.data.glossary.eb-token-url}}  |  Y  |
|  OAuth Authorization Type (Header or Query)  |  How the API provider receives authentication information, either in the header or as a query parameter.  |  Y  |
|  OAuth Scope  |  {{site.data.glossary.eb-scope}}  |  N  |
|  OAuth User Secret  | The user secret associated with the application authenticating with the API provider.   |  N  |

## Configure Basic Authentication

In Basic access authentication, you typically provide a user name and password. In some cases you also provide an API Key. When setting up an element with Basic authentication we start you off with **Username** and **Password** configurations. If you need to add any other configurations like an API Key, do so in the Configuration step. API providers typically do not vary from the standard Basic authentication, so you should keep the default properties. If you do need to make changes, you can update the properties or delete unneeded configurations.

### Basic Authentication Parameters

{% include elements-guide/table-config-params.md%}

## Configure Custom Authentication

To configure custom authentication information, use the [Configuration](config.html), [Parameters](config.html/#set-up-element-parameters), and, if necessary, [Hooks](hooks.html) sections to construct the authentication information required by the API provider.

## Configure AWS Authentication

Cloud Elements provides default authentication fields for API providers that use [Amazon Web Services Signature Version 4](http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) and [Version 2](http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html). API providers typically do not vary from the standard AWS authentications, so you should keep the default properties. If you do need to make changes, you can update the properties or delete unneeded configurations.

### AWS Authentication Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  AWS Access Key ID  | The ID associated with your AWS access key.   |  Y  |
|  AWS Secret Access Key  | The secret key used in the Signature Version 2 signing process |  Yes for version 2 only |

## Change the Authentication Type

If you selected the incorrect authentication type, or find that you need to change the authentication, select another authentication type from the **type** list in the Authentication heading.

Continue to the next step, [Custom Configuration and Parameters](config.html).

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Config & Parameters"%}
