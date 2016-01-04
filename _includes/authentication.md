### Overview

To call our APIs, you will need an account with Cloud Elements. To get an account, you must [sign up](https://console.cloud-elements.com/elements/jsp/signup.jsp) using our API Manager Console. When you create an account with us, we assign you an Organization secret and a User secret. An Organization is a customer of Cloud Elements (/organizations).
An Organization secret and User secret are needed to call our Platform APIs, to do things like:

* learn about our Catalog of endpoints (`/elements`)
* create connections to an endpoint (`/instances`) e.g. Dropbox or Salesforce

When you create a new connection to an endpoint, you will receive an Element token.
An Element token and a User secret are required to execute one of our Hub API calls (e.g. `/hubs/documents` or `/hubs/crm`) to:

* upload a file to a cloud storage account
* create a new contact in a CRM service

Our tokens and secrets are passed as HTTP Header Values. For example, to make an API call, the following authorization header is passed:

`Authorization: User JKELSDKEntgNAeZsGxY, Element NESLFOBeDke89w3ceaa`

#### Base URL

The Cloud Elements base URL for all API calls is:

`https://api.cloud-elements.com/elements/api-v2`
