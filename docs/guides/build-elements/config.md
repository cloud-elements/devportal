---
heading: Build Custom Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Define Element Config Requirements
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 14
simple_map: true
map_name: usermap
box_number: 2
---

# Define Element Config Requirements

The information that you need to enter to configure your element differs depending on the authorization type.

## Configure OAuth and OAuth2

1. In **Base URL** enter the URL where all API Requests will be sent. See [Base URL and Pagination](#base-url-and-pagination).
2. Enter pagination information:
  * **Max Page Size** supported by the API provider. See [Base URL and Pagination](#base-url-and-pagination).
  * **Pagination Type** supported by the API provider. See [Base URL and Pagination](#base-url-and-pagination).
1. Complete the OAuth 2 information
1. If the Cloud Service uses OAuth 1 or OAuth 2, complete the following: See [OAuth Authorization](#oauth-authorization).
  * OAuth Authorization Url:
  * OAuth API Key:
  * OAuth API Secret
  * OAuth Callback URL:
  * OAuth Token URL:
  * OAuth Scope:
  * OAuth Request Token URL (OAuth 1):
  * OAuth Request Authorization Type (OAuth 1):
  * Oauth Refresh Token Url (OAuth 2):
  * Oauth Revoke Token Url (OAuth 2):
1. Select the format of the request (__Accept Header__) and response (__Content-Type Header__) types. Cloud Elements supports JSON and XML.
1. Set up any configuration required for the Element. A value which is stored when a connection to the endpoint is created. This value is populated via user input and will be used when invoking the API, e.g. an api_key and api_secret. See [Adding Element Configurations](#adding-element-configurations).
1. Set up parameters. A globally defined value that will apply to all API calls. Parameters can be sent as a header, path, query, body. See [Adding Element Parameters](#adding-element-parameters).
1. Set up hooks. re-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration). Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint. See [Adding Element Hooks](#adding-element-hooks)
1. Click __Next__.
