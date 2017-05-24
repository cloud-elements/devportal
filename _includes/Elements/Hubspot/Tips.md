# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#authentication>Authentication</a><br/><a href=#bulk>Bulk</a><br/><a href=#webhooks>Webhooks</a>" type="info" %}

## Authentication

* Hubspot supports three different authentication mechanisms: Basic, OAuth 2 (legacy) and OAuth 2 (new). When you authenticate an instance and include the HubSpot Portal ID, you use the latest OAuth 2 authentication
* If you intend to use the new OAuth 2, you must also provide scope.  In Sandbox or developer accounts, HubSpot Marketing will never have appropriate scope to authenticate an instance. To authenticate an element instance with a HubsSpot Marketing trial account, you must create your own connected app with limited scope.
* If you receive the following error message, verify that the scopes selected in your registered app are aligned with the permissions allowed under the selected Portal ID.

![HubSpot Scope](img/scope.png)

## Bulk

* If you are trying to use Bulk upload to migrate data, you must provide the following metadata tag in the body, {"useBatchUpload": "true"}. If you do not provide this tag, it will upload one at a time.
* If one batch fails, then all will fail.
* HubSpot has a limitation where if too many properties exist the URL becomes too long for a request for all properties. Customers must map the properties they need to a common resource to leverage bulk for the object in question.

## Webhooks

* If you want to configure webhooks, you must manually configure them in HubSpot. Visit https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview for more information.
