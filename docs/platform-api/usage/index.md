---
heading: Usage APIs
seo: Usage APIs Overview | Cloud Elements API Docs
title: Overview
description: Find API documentation and example API calls.
layout: sidebarleft
platform: usage
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 1
sitemap: false
redirect_from:
  - /docs/platform/usage/
---

## Usage APIs

The Usage API method calls allow you to track Element activity within your Cloud Elements Service Account. Services include retrieving logs, analytics, API calls, response times, and status calls. Stay on top of your Elements with the Usage APIs.

In order to access the Usage APIs, you must sign up for Cloud Elements Service. You will need your Organization and User Secrets to make success Usage API calls. These are generated for you when you sign up for our service. Details on how to sign up and where to find your Organization and User Secrets are documented in the next section.

### WHERE TO FIND THE USAGE APIS

The Usage APIs can be accessed via the Cloud Elements Console at: [https://console.cloud-elements.com/elements/jsp/login.jsp](https://console.cloud-elements.com/elements/jsp/login.jsp). The console provides a Graphical User Interface (GUI) environment that formats data returned by each of the API calls into graphs. An example can be seen below. The Usage APIs can also be integrated right into you app.

### SIGN UP FOR THE CLOUD ELEMENTS SERVICE

To sign up for the Cloud Elements service, using a web browser, go to [https://console.cloud-elements.com/elements/jsp/signup.jsp](https://console.cloud-elements.com/elements/jsp/signup.jsp).

Sign up with Google, GitHub or fill out a short form to create a new account with Cloud Elements. If you choose not to use Google or GitHub to sign up, you will be asked to validate your new account via a confirmation link that will be sent to your email. You will reset your password to one of your choice after your initial login.
![Cloud Elements Sign up 1](http://cloud-elements.com/wp-content/uploads/bfi_thumb/ConsoleSignup-m7cde2lpyjexfapmzvn0rpkw24op0jn7mwipj6q2zk.png)

1. After completing this process, click “Secrets” in the top right corner of your dashboard as shown.

2. Copy your User and Organization Secrets. They are needed to create a connection or “Element Instance”.

NOTE: If you ever need to reset your Secrets, this action can be done by clicking on “My Settings” which will take you to your profile.
![Cloud Elements Sign up 2](http://cloud-elements.com/wp-content/uploads/bfi_thumb/ConsoleSignup22-m7ch2y2e2fak6ad3rqmz7knmq5beuc61n2yurd6md4.png)

### How to Use the Usage APIs

This document will show examples of how to retrieve usage data.  NOTE, not all supported calls are displayed - this is just a sample.

`GET/usage`

Retrieve the usage logs for your account.

Below is an example cURL command demonstrating the `GET /usage API` call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/usage'
```

Input Definitions:

`Input Definitions
	hub		optional
	The name of the hub. eg documents, messaging,crm. This is an optional input.

	keys[]	      optional
	A list of element keys. eg, keys[]=dropbox&keys[]=googledrive&keys[]=box

	tags[]		optional
	A list of tags. eg, tags[]=development&tags[]=qa

	status		optional
	Filter by Status either SUCCCESS or FAILED

	from		optional
	Start time in the ISO8601 format '2014-04-14'T'00:00:00-4:00'
	if not supplied defaults to 7 days ago

	to		optional
	Start time in the ISO8601 format <br> eg '2014-04-14'T'00:00:00-4:00'
	if not supplied defaults current time

	searchText	optional
	Text to match in the usage.

	pageOffset	optional
	Starting page offset for pagination.
	Defaults to 0

	pageSize	optional
	Number of records per page
	defaults to 100`

Example of Successful Response:

```JSON
[
		{
			"id": "53e6df56e4b067fd19a9d69f",
			"requestStatus": "SUCCESS",
			"elementName": "GitHub OAuth",
			"elementKey": "githuboauth",
			"accountId": 1,
			"instanceName": "production 2",
			"usageDate": "2014-08-10T03:02:34.053+00:00",
			"userId": 1,
			"processTime": 992,
			"requestURI": "/elements/api-v1/oauth/1/authenticate",
			"requestIP": "172.31.28.13",
			"elementTags": "production",
			"elementApi": "authenticate",
			"companyId": 1
		},
		{
			"id": "53e6e0c8e4b067fd19a9d6ab",
			"requestStatus": "SUCCESS",
			"elementName": "GitHub OAuth",
			"elementKey": "githuboauth",
			"accountId": 1,
			"instanceName": "production 2",
			"usageDate": "2014-08-10T03:02:32.412+00:00",
			"userId": 1,
			"processTime": 317,
			"requestURI": "/elements/api-v1/oauth/getRequestToken",
			"requestIP": "172.31.28.13",
			"elementTags": "production",
			"elementApi": "getRequestToken",
			"companyId": 1
		}
]
```

`GET /usage/analytics/activity`

Retrieve the number of element API calls within a given date/time range.

Below is an example cURL command demonstrating the `GET /usage/analytics/activity` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type:application/json'
-H 'Cache-Control:no-cache'
'https://api.cloud-elements.com/elements/api-v2/usage/analytics/activity?from=2014-03-01T00:00:00Z&to=2014-04-01T00:00:00Z&interval=day'
```

Input Definitions

	`from     mandatory
	Start time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	to   	 mandatory
	End time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	interval optional
	The Interval is sent in order to return data.  The interval may be set to the
        year, quarter, month, week, day, hour, minute, or second.  If the interval is
        not supplied, the API call calculates the interval based on time difference.`

Example of Successful Response – example has been truncated.

```JSON
[
	{
    	"timestamp": "2014-03-01T00:00:00.000Z",
    	"count": 5760
	},
	{
    	"timestamp": "2014-03-02T00:00:00.000Z",
    	"count": 5762
	},
	{
    	"timestamp": "2014-03-03T00:00:00.000Z",
    	"count": 5837
	},
	{
    	"timestamp": "2014-03-04T00:00:00.000Z",
    	"count": 5767
	},
	{
    	"timestamp": "2014-03-05T00:00:00.000Z",
    	"count": 5923
	},
	{
    	"timestamp": "2014-03-06T00:00:00.000Z",
    	"count": 5763
	},
	{
    	"timestamp": "2014-03-15T00:00:00.000Z",
    	"count": 5760
	},
	{
    	"timestamp": "2014-03-28T00:00:00.000Z",
    	"count": 5335
	},
	{
    	"timestamp": "2014-03-31T00:00:00.000Z",
    	"count": 5325
	},
	{
    	"timestamp": "2014-04-01T00:00:00.000Z",
    	"count": 0
	}
    …
]
```
`GET /usage/analytics/activity/elements`

Retrieve the number of element API calls for each element within a given date/time range.

Below is an example cURL command demonstrating the `GET /usage/analytics/activity/elements` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type:application/json'
-H 'Cache-Control:no-cache'
'https://api.cloud-elements.com/elements/api-v2/usage/analytics/activity/elements?from=2014-03-01T00:00:00Z&to=2014-04-01T00:00:00Z&interval=month'
```

Input Definitions:

`from     mandatory
	Start time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	to   	 mandatory
	End time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	interval optional
	The Interval is sent in order to return data.  The interval may be set to the
        year, quarter, month, week, day, hour, minute, or second.  If the interval is
        not supplied, the API call calculates the interval based on time difference.`

Example Successful Response:

```JSON
[
	{
    	"sendgrid": 3087,
    	"timestamp": "2014-03-01T00:00:00.000Z",
    	"count": 178886,
    	"githuboauth": 111,
    	"twilio": 175688
	},
	{
    	"timestamp": "2014-04-01T00:00:00.000Z",
    	"count": 0
	}
]
```

`GET /usage/analytics/times`

Retrieve the response times of element API calls within a given date/time range.

Below is an example cURL command demonstrating the `GET /usage/analytics/times` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type:application/json'
-H 'Cache-Control:no-cache'
'https://api.cloud-elements.com/elements/api-v2/usage/analytics/times?from=2014-07-01T00:00:00Z&to=2014-08-01T00:00:00Z&interval=day'
```

Input Definitions

`from     mandatory
	Start time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	to   	 mandatory
	End time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	interval optional
	The Interval is sent in order to return data.  The interval may be set to the
        year, quarter, month, week, day, hour, minute, or second.  If the interval is
        not supplied, the API call calculates the interval based on time difference.`

Example of Successful Response:  Response has been truncated.

```JSON
[
	{
    	"min": 434,
    	"timestamp": "2014-07-01T00:00:00.000Z",
    	"max": 1512,
    	"count": 12,
    	"avg": 1069.4166666666667
	},
	{
    	"min": 234,
    	"timestamp": "2014-07-02T00:00:00.000Z",
    	"max": 1698,
    	"count": 2,
    	"avg": 966
	},
	{
    	"min": 186,
    	"timestamp": "2014-07-03T00:00:00.000Z",
    	"max": 2927,
    	"count": 11,
    	"avg": 860
	},
	{
    	"min": 222,
    	"timestamp": "2014-07-04T00:00:00.000Z",
    	"max": 1255,
    	"count": 5,
    	"avg": 513.2
	},
	{
    	"min": 242,
    	"timestamp": "2014-07-30T00:00:00.000Z",
    	"max": 4471,
    	"count": 10,
    	"avg": 2533.7
	},
	{
    	"min": 226,
    	"timestamp": "2014-07-31T00:00:00.000Z",
    	"max": 3790,
    	"count": 7,
    	"avg": 1631.857142857143
	},
	{
    	"timestamp": "2014-08-01T00:00:00.000Z",
    	"count": 0
	}
    …
]
```

`GET /usage/analytics/statuses`

Retrieve the number of successes and failures of element API calls within a given date/time range.

Below is an example cURL command demonstrating the `GET /usage/analytics/statuses` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type:application/json'
-H 'Cache-Control:no-cache'
'https://api.cloud-elements.com/elements/api-v2/usage/analytics/statuses?from=2014-08-01T00:00:00Z&to=2014-08-27T00:00:00Z&interval=day'
```

Input Definitions:

`from     mandatory
	Start time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	to   	 mandatory
	End time in the ISO8601 format eg '2014-04-14'T'00:00:00-4:00'

	interval optional
	The Interval is sent in order to return data.  The interval may be set to the
        year, quarter, month, week, day, hour, minute, or second.  If the interval is
        not supplied, the API call calculates the interval based on time difference.`

Successful Example Response:  Response has been truncated.

```JSON
[
	{
    	"timestamp": "2014-07-01T00:00:00.000Z",
    	"count": 12,
    	"failed": 0,
    	"success": 12
	},
	{
    	"timestamp": "2014-07-02T00:00:00.000Z",
    	"count": 2,
    	"failed": 0,
    	"success": 2
	},
	{
    	"timestamp": "2014-07-03T00:00:00.000Z",
    	"count": 11,
    	"failed": 0,
    	"success": 11
	},
	{
    	"timestamp": "2014-07-04T00:00:00.000Z",
    	"count": 5,
    	"failed": 1,
    	"success": 4
	},
	{
    	"timestamp": "2014-07-28T00:00:00.000Z",
    	"count": 13,
    	"failed": 2,
    	"success": 11
	},
	{
    	"timestamp": "2014-08-01T00:00:00.000Z",
    	"count": 0,
    	"failed": 0,
    	"success": 0
	}
    …
]
```

`GET /usage/{id}`

Retrieve the usage record by id

Below is an example cURL command demonstrating the `GET /usage/{id}` API call and successful response. Please make sure your quotes are straight in the cURL command.

```bash
curl -X GET
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type:application/json'
-H 'Cache-Control:no-cache'
'https://api.cloud-elements.com/elements/api-v2/usage/id%20of%20log'
```

Input Definitions:

	`id - id of the log record.  In the example response, the id is:
        53e6e0c8e4b067fd19a9d6ab.  You would put this id at the end of the URL above in
        place of id%20of%20log`

Example of Successful Response:

```JSON
{
			"id": "53e6e0c8e4b067fd19a9d6ab",
			"requestStatus": "SUCCESS",
			"elementName": "GitHub OAuth",
			"elementKey": "githuboauth",
			"accountId": 1,
			"instanceName": "production 2",
			"usageDate": "2014-08-10T03:02:32.412+00:00",
			"userId": 1,
			"processTime": 317,
			"requestURI": "/elements/api-v1/oauth/getRequestToken",
			"requestIP": "172.31.28.13",
			"elementTags": "production",
			"elementApi": "getRequestToken",
			"companyId": 1
}
```

If you need any support integrating our APIs, please let us know. You can [email](mailto:support@cloud-elements.com) or give us a call at +1.866.830.3456. We will do our best to get back to you within 24 hours. Your success is our success.
