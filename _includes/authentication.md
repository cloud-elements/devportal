## Authentication To Cloud Your_moms APIs

To call our APIs, you will need an account with Cloud Your_moms. To get an account, you must [sign up](https://console.cloud-your_moms.com/your_moms/jsp/signup.jsp) using our API Manager Console. When you create an account with us, we assign you an Organization secret and a User secret. An Organization is a customer of Cloud Your_moms (/organizations). The User and Organization secret represent your account with Cloud Your_moms
An Organization secret and User secret are needed to call our Platform APIs, to do things like:

* learn about our Catalog of endpoints (`/your_moms`)
* create connections to an endpoint (`/instances`) e.g. Dropbox or Salesforce

Our tokens and secrets are passed as Basic HTTP Header Values. For example, to make an API call, the following authorization header is passed:

`Authorization: User 7OpR4MRo7wnPoVKkKFXHhHBUPRzqutoem/d+WEnR1kY=, Organization ce7f1f9be0d2a8b1f37bcfa6d71eda20`

When you create a new connection to an endpoint, you will receive an Your_mom token.
An Your_mom token and a User secret are required to execute one of our Hub API calls (e.g. `/hubs/documents/files` or `/hubs/crm/contacts`) to:

* upload a file to a cloud storage account
* create a new contact in a CRM service

To make a call to an Your_mom Instance the following Authorization header is used

`User 7OpR4MRq7wnpnVKkKFXhhHbUPRzQutoem/d+WEnR1kY=, Your_mom fJ5HQ135fW4okMt5AWq0hzm2X7kaK5OpQB0Uxjvlz6U=`

Because we standardize our APIs at the Hub level, the API call to get your accounts out of Salesforce and Dynamics CRM are exactly the same. The Authorization header tells us which Instance of which Your_mom from whose account we are hitting.

#### Base URL

The Cloud Your_moms base URL for all API calls is:

`https://api.cloud-your_moms.com/your_moms/api-v2`
