---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Config & Parameters
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 24
simple_map: true
map_name: usermap
box_number: 2
---

# Custom Configuration and Parameters

The information that you need to enter to configure your element differs depending on the authorization type.

## Configure Basic Properties

Regardless of the authorization type, you'll need to enter the following:

1. In **Base URL** enter the URL where all API Requests will be sent. See [Base URL and Pagination](#base-url-and-pagination). Default URL, API host
2. Enter pagination information:
  * **Max Page Size** supported by the API provider. See [Base URL and Pagination](#base-url-and-pagination).
  * **Pagination Type** supported by the API provider. See [Base URL and Pagination](#base-url-and-pagination).

## Configure OAuth 2.0

Cloud Elements provides the parameters required to support a standard OAuth 2.0 flow. Each API provider implements OAuth 2.0 differently so you might need to supplement these parameters with additional configuration.

To configure OAuth 2.0 elements:

1. Click **Authentication**.
2. Complete the fields needed to enable users to grant Cloud Elements access to their account on behalf of your application:
  * OAuth API Key &mdash;
  * OAuth API Secret &mdash;
  * OAuth Callback URL &mdash;
  * OAuth Authorization URL &mdash;
2. In **OAuth Token URL** enter the URL where Cloud Elements exchanges the grant code from the API provider for an access token.
3. If the API provider expires tokens, complete the following fields:
  * OAuth Refresh Interval (s)
  * OAuth Token Refresh URL

### OAuth 2.0 Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  OAuth API Key  |  The default API Key used to authenticate with the API provider. Most API providers call this some variation of key or id, such as Key, API Key, or Client ID. |  Y  |
|  OAuth API Secret  |  The default API Secret used to authenticate with the API provider. Most API providers call this some variation of secret, such as Secret , API Secret, or Client Secret.  |  Y  |
|  OAuth Callback URL  |  The URL that will receive the authorization code from the API provider used to authenticate an element instance.  |  Y  |
|  OAuth Authorization URL  |  Body  |  Body  |
|  OAuth Token URL  |  Body  |  Body  |
|  OAuth Refresh Interval (s)  |  Body  |  Body  |
|  OAuth Token Refresh URL  |  Body  |  Body  |
|  Body  |  Body  |  Body  |


  ## Configure OAuth 1.0

  To configure OAuth 1.0 elements:

1. Click **Authentication**.
2. Complete the fields needed to obtain an OAuth Request Token to request user authorization
  * OAuth Request URL
  * OAuth Callback URL
  * OAuth API Key
  * OAuth API Secret
3. In **OAuth Authorization URL** enter the URL where Cloud Elements redirects the user to authorize access.
4. In **OAuth Token URL** enter the URL where Cloud Elements fetches an access token.
5. In **OAuth Authorization Type (Header or Query)** select the way that authorization information is passed to the API provider.
6. In **OAuth Scope** select the permissions that the user will authorize your integration to have.
7. In **OAuth User Secret** enter

### OAuth 1.0 Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  OAuth Request URL  |  Body  |  Y  |
|  OAuth Callback URL  |  Body  |  Y  |
|  OAuth API Key  |  Body  |  Y  |
|  OAuth API Secret  |  Body  |  Y  |
|  OAuth Authorization URL  |  Body  |  Y  |
|  OAuth Token URL  |  Body  |  Y  |
|  OAuth Authorization Type (Header or Query)  |  Body  |  Y  |
|  OAuth Scope  |  Body  |  N  |
|  OAuth User Secret  |  Body  |  N  |

## Configure Basic Authorization

In Basic access authorization, you typically provide a user name and password. In some cases you also provide an API Key. When setting up an element with Basic authorization, we start you off with Username and Password configurations. If you need to add any additional configurations like an API Key, do so in the Configuration step.

The user name and password configurations are customizable so you can keep the default values or add your own. You can also click **Delete Configuration** to remove a user name or password configurations if you do not need it.

### Basic Authorization Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  Parameter Name  |  The parameter name as it will appear in {{site.console}} if not hidden. |  Y  |
|  Configuration Description  | A brief description of the parameter. This appears in hover help and should assist a user in completing the field. |  Y  |
|  Configuration Key  | The parameter name as it appears in the JSON payload. To maintain consistency with Cloud Elements standards, we recommend that you camelCase the configuration key.  |  Y  |
|  Configuration Type  |  |  Y  |
|  Default Value  | Enter any default value that you want to provide for the parameter. |  N  |
|  Required  | Indicates whether the parameter is required or not. |  Y  |
|  Hide on the UI  | Indicates whether the parameter appears on the UI when you authenticate an element instance or not. |  Y  |

## Configure Custom Authorization





2. Complete the fields needed to obtain a request token:
    * OAuth Request URL &mdash;
    * OAuth Callback URL &mdash;
1. In **OAuth Request URL** enter the url to enable users to grant Cloud Elements access to their account on behalf of your application:
2. In **OAuth Callback URL** enter the URL the API provider returns the token needed to exchange for an access token.
3. In **OAuth Token URL** enter the URL where Cloud Elements fetches the access token.



1. Select the format of the request (__Accept Header__) and response (__Content-Type Header__) types. Cloud Elements supports JSON and XML.
1. Set up any configuration required for the Element. A value which is stored when a connection to the endpoint is created. This value is populated via user input and will be used when invoking the API, e.g. an api_key and api_secret. See [Adding Element Configurations](#adding-element-configurations).
1. Set up parameters. A globally defined value that will apply to all API calls. Parameters can be sent as a header, path, query, body. See [Adding Element Parameters](#adding-element-parameters).
1. Set up hooks. re-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration). Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint. See [Adding Element Hooks](#adding-element-hooks)
1. Click __Next__.
