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

## Configure Basic Porperties

Regardless of the authorization type, you'll need to enter the following:

1. In **Base URL** enter the URL where all API Requests will be sent. See [Base URL and Pagination](#base-url-and-pagination). Default URL, API host
2. Enter pagination information:
  * **Max Page Size** supported by the API provider. See [Base URL and Pagination](#base-url-and-pagination).
  * **Pagination Type** supported by the API provider. See [Base URL and Pagination](#base-url-and-pagination).

## Configure OAuth 2.0

To configure Oauth 2.0 elements:

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

  ## Configure OAuth 1.0 

  To configure Oauth 2.0 elements:

1. Click **Authentication**.
2. Complete the fields needed to obtain an OAuth Request Token to request user authorization
  * OAuth Request URL
  * OAuth Callback URL
3. Then OAuth Authorization URL
4. Then OAuth Token URL

## Configure Basic Authorization

Set up the user name and password. Not much to do here, you can change:

Display nmae
Type of configuration
Whetehr it's required
The configuartion key - how it appears in the json
Add a default value.

1. Click **Authentication**.



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
