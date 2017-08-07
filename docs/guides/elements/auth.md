---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Authentication
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 23
simple_map: true
map_name: usermap
box_number: 2
---

# Custom Authentication

The information that you need to enter to set up authentication with the API provider differs depending on the authorization type.

## Configure Basic Properties

Regardless of the authorization type, you'll need to enter the following:

1. In **Base URL** enter the URL where all API Requests will be sent.
2. Enter pagination information:
  * **Max Page Size** supported by the API provider.
  * **Pagination Type** supported by the API provider.

### Basic Parameters

| Name | Description   | Required   |
| :------------- | :------------- | :------------- |
|  Base URL  |  Endpoints are appended to the base URL. So, with an endpoint like `https://api.example.com/v1/users?role=admin&status=active`, the base URL is `https://api.example.com/v1/`.  Many API providers explicitly state the base URL, but in some cases you can find it by looking at examples in the API documentation. |  Y  |
|  Max Page Size  |  The maximum number of records the API provider returns in a response.   |  Y  |
|  Pagination Type  | How the API provider provides pages of data. Find the pagination types in a Pagination section of the API documentation.   |  Y  |
|    | **Page starts with n**: Pagination begins with either 1 or 0.  |    |
|    |  **Offset**: A numeric offset identifies the first page.  |    |
|    |  **Cursor**: A unique key element identifies the first page entry   |    |


## Configure OAuth 2.0

Cloud Elements provides the parameters required to support a standard OAuth 2.0 flow. Each API provider implements OAuth 2.0 differently so you might need to supplement these parameters with additional configuration. Prior to setting up the OAuth 2.0 information, you need to create a Cloud Elements app at the API provider. Use the default information from that app. When users authenticate through Cloud Elements, they will connect with that app.

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
|  OAuth API Key  |  The default API Key used to authenticate with the API provider. Most API providers call this some variation of key or id, such as Key, API Key, or Client ID. |  Y  |
|  OAuth API Secret  |  The default API Secret used to authenticate with the API provider. Most API providers call this some variation of secret, such as Secret , API Secret, or Client Secret.  |  Y  |
|  OAuth Callback URL  |  The URL that will receive the authorization code from the API provider used to authenticate an element instance.  |  Y  |
|  OAuth Authorization URL  |  The URL where a user authorizes the application to access their information at the API provider.  |  Y  |
|  OAuth Token URL  |  The URL where you exchange the authorization grant code for an access token.  |  Y  |
|  OAuth Refresh Interval (s)  |  If the access token expires, the time frame when Cloud Elements sends a request to the OAuth Token Refresh URL.  |  N  |
|  OAuth Token Refresh URL  |  The URL to send a refresh request.  |  N  |

  ## Configure OAuth 1.0

  Cloud Elements provides the parameters required to support a standard OAuth 1.0 flow. Each API provider implements OAuth 1.0 differently so you might need to supplement these parameters with additional configuration.

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
