# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#authentication>Authentication</a><br/><a href=#bulk>Bulk</a><br/><a href=#webhooks>Webhooks</a>" type="info" %}

## Authentication

* Hubspot supports two different authentication mechanisms: API Key (Basic) and OAuth 2.0.0. When you authenticate an instance and include the HubSpot Portal ID, you use the latest OAuth 2.0 authentication.
* If you intend to use the new OAuth 2.0, you must also provide scope.  In Sandbox or developer accounts, HubSpot Marketing will never have appropriate scope to authenticate an instance. To authenticate an element instance with a HubsSpot Marketing trial account, you must create your own connected app with limited scope. See [Scope below](#scope) and [Authenticate](authenticate.html) for more information about how to pass scope when you authenticate with Hubspot.


## Scope

When users authenticate an element instance, they authorize your app to access the data allowed by the scopes that you pass to Hubspot. The user and their associated account must have access to all scopes that you pass. In addition to user permissions, Hubspot includes two types of scopes based on account level: **Marketing only** and **Marketing and CRM**.

| Marketing Only | Marketing and CRM   |
| :------------- | :------------- |
|  content  |  contacts  |
| reports   |  timeline |
| social   |  files  |
| automation   |   |
| forms   |   |
| hubdb </br>For website add on   |   |
| transactional-email </br>For Transactional-email add on   |   |

If you receive the following error message when authenticating, verify that the scopes you pass as part of authentication, the scopes selected in your registered app, user permissions, and account type scopes align. See [Authenticate](authenticate.html) for more information about how to pass scope when you authenticate with Hubspot.
![HubSpot Scope](img/scope.png)

Review the [Hubspot OAuth 2.0 scope documentation](https://developers.hubspot.com/docs/methods/oauth2/initiate-oauth-integration#scopes) for the complete list of scopes.

## Bulk

* If you are trying to use Bulk upload to migrate data, you must provide the following metadata tag in the body, {"useBatchUpload": "true"}. If you do not provide this tag, it will upload one at a time.
* If one batch fails, then all will fail.
* HubSpot has a limitation where if too many properties exist the URL becomes too long for a request for all properties. Customers must map the properties they need to a common resource to leverage bulk for the object in question.

## Webhooks

* If you want to configure webhooks, you must manually configure them in HubSpot. Visit https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview for more information.
