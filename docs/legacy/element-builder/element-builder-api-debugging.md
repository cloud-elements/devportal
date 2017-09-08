---
heading: Element Builder
seo: API Debugging | Element Builder | Cloud Elements API Docs
title: API Debugging
description: Tips for debugging APIs within the Element Builder UI.
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 8
---

## Debugging Tips

Element Builder offers some built in resources to assist in debugging API calls.
Cloud Elements recommends keeping the following in mind when debugging an API call:

* URL path to resource
* correct authentication
* payload being sent (if applicable)
* pre/post hooks added to the request (if applicable)

If the path to the resource or authentication is not correct, the request will not be delivered.
API calls requiring payloads such as POST /contacts or /accounts will not be consumed correctly if the
payload is not what the endpoint expects.
Hooks provide the ability to modify a request prior to sending it to the endpoint.
Pre-Hook: Action you wish to execute prior to sending API calls e.g. manipulating or adding data (query, header, path, body, configuration).
Post-Hook: Modify the response data (body, header, configuration) on the return call from the endpoint.
Let’s take a look at some examples.

Element Builder provides a medium to test newly created API calls within the Resources tab, using the “Try it out” panel.
Using the FreshBooks Element, let’s take a look at the POST /expenses resource.

Click on the POST /expenses

Click “Try it out”
![Element Builder API Debugging 1](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone1.png)

The expense payload below is required, however there is a field missing: amount

```JSON
{
    "date": "2016-02-09 00:00:00",
    "compound_tax": 0,
    "client_id": 0,
    "folder": "active",
    "category_id": 3051239,
    "project_id": 0,
    "vendor": "Acme",
    "staff_id": 1,
    "updated": "2016-02-09 12:52:49",
    "status": 0,
    "has_receipt": 0
  }
  ```

Input the payload

Click “Try it out!”
![Element Builder API Debugging 2](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone2.png)

When this payload is inputted and sent, an error is returned:
“Missing required field: ‘amount’.”

While Cloud Elements tries to return a detailed message from the endpoint, this is not always the case.  Some endpoint error messages do not always detail the exact issue.
It is important to research the endpoint API documentation to determine the correct fields needed for a complete payload.

Input the payload with the field: amount present and retry the call.
![Element Builder API Debugging 3](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone3.png)

Let’s take a look at an example of an incorrect path to a resource.

Using the same resource POST /expenses with the correct payload, click “Try it out”

The following error message is returned: “Unable to convert response XML to JSON”
![Element Builder API Debugging 4](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone4.png)

Our payload is correct, as it was checked against the FreshBooks API documentation. Since the error message doesn’t offer much more than that, reviewing the path to the object is the next logical step.

The path to the resource can be viewed a top the “Try it out” panel.
The current path shows `POST https://myfreshbookssite.freshbooks.com/api/2.1/expenses`
![Element Builder API Debugging 5](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone5.png)

Looking at the FreshBooks API documentation for the expense resource, [https://www.freshbooks.com/developers](https://www.freshbooks.com/developers), all requests should be sent to the following URL:
`https://sample.freshbooks.com/api/2.1/xml-in`

The current path to our resource is: `https://myfreshbookssite.freshbooks.com/api/2.1/expenses`
This is not correct. The `/expenses` must be replaced with `/xml-in`.

Making the change is quick

Close the “Try it out” panel
![Element Builder API Debugging 6](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone6.png)

Check the Vendor Path – in our example, it is set to `/expenses`

This is incorrect and must be changed to what the endpoint expects.
![Element Builder API Debugging 7](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone7.png)

Change the Vendor Path to: `/xml-in`

Click “Try it out”

Input the expense payload and try the call again.  The request will return a 200 on success.

Here are some tips when working with paths:

* check the endpoint API documentation to determine vendor path
* check that the correct Vendor Method is selected – what does the endpoint expect?
* check the endpoint documentation to see if there are any required parameters that need to be sent with each resource
![Element Builder API Debugging 8](http://cloud-elements.com/wp-content/uploads/2016/02/DebuggingClone8.png)

Element Builder is currently in BETA.  We would love to hear about enhancements or concerns regarding the application.  Please don’t hesitate to get in touch.

Need some help?  Don’t hesitate to reach out to [Cloud Elements Support](mailto:support@cloud-elements.com) with any questions or concerns.

The Cloud Elements Team
