---
title: Cloud Elements Version 2.164
date: 2018-04-29
layout: release-note-item
release: 2.164
heading: Release Notes
---
## Element Updates

### Acuity Scheduling: New element

We added the Acuity Scheduling element to the Scheduling hub. Use the Acuity Scheduling element to integrate with appointments, available times, calendars, and more. Take a look at the [Acuity Scheduling Element docs](/docs/elements/acuity/) and get started today.

### Taleo Business Edition: New element

We added the Taleo Business Edition element to the Human Capital hub. Use the Taleo Business Edition element to integrate with accounts, candidates, employees, and more. Take a look at the [Taleo Business Edition Element docs](/docs/elements/taleobusiness/) and get started today.

### Infusionsoft REST: New element

We added the Infusionsoft REST element to the CRM hub. Use the Infusionsoft REST element to integrate with accounts, contacts, campaigns, and more. Take a look at the [Infusionsoft REST Element docs](/docs/elements/infusionsoft-rest/) and get started today.

### SmartRecruiters: New element

We added the SmartRecruiters element to the Human Capital hub. Use the SmartRecruiters element to integrate with candidates, jobs, industries, and more. Take a look at the [SmartRecruiters Element docs](/docs/elements/smartrecruiters/) and get started today.

### Conferencing hub: API docs

The API docs for the Conferencing hub didn't appear correctly in Cloud Elements 2.0. We fixed the issue and you can take a look at the API docs now.

### Hubspot Marketing: Added `timeline-event-types` endpoints

To use the new `timeline-event-types` endpoints you must reauthenticate each element instance. The new endpoints include:

* GET /timeline-event-types
* POST /timeline-event-types
* DELETE /timeline-event-types/{id}
* PATCH /timeline-event-types/{id}
* POST /timeline-event-types/{id}/events
* GET /timeline-event-types/{id}/events/{eventId}
* PATCH /timeline-event-types/{id}/events/{eventId}
* GET /timeline-event-types/{id}/timelineEventTypesProperties
* POST /timeline-event-types/{id}/timelineEventTypesProperties
* DELETE /timeline-event-types/{id}/timelineEventTypesProperties/{propertyId}
* PATCH /timeline-event-types/{id}/timelineEventTypesProperties/{propertyId}

### QuickBooks Online: Improved error messaging for ids passed with invalid characters

If you make a request that includes an invalid character in the id, we return a 400 error code with a message that the id is invalid.

### Egnyte: Added `revisions` endpoints to the `files` resource

We added the following endpoints to the `/files` resource.

* GET /files/{id}/revisions
* GET /files/{id}/revisions/{revisionId}
* GET /files/revisions
* GET /files/revisions/{revisionId}

### Hootsuite: Upgraded to support platform.hootsuite.com

We upgraded the Hootsuite app in preparation for Hootsuite's [upgraded API platform](https://developer.hootsuite.com/v1.0/docs/upgrading-to-platform-hootsuite-com?utm_source=notification_one&utm_medium=email&mkt_tok=eyJpIjoiTTJSa05HSTBaVGswWVRGaCIsInQiOiJcL3hiZ3dJcU5SZG1QVW5BUlJcL29McXRDMzVKNWRIVmE5MkphSkMyakJ0QmhGZFhjMURIakJqZnNOb2NrSDdMa1dHTFFzRnk0RGNCSHNrZ3BRVmY1Tk1sTE44R1pGV0JWVlF0NEpMSmtBb2dYWExhbCtIczZaajRTT1hIUFRrWTZSIn0%3D). You need to reauthenticate any existing element instances.

### Intacct.: New `contracts` resource

We added `/contracts` with the following endpoints:

* POST /contracts
* GET /contracts
* PATCH /contracts/{id}
* GET /contracts/{id}
* DELETE /contracts/{id}

### Bullhorn: New `job-orders` resource

 We added `/job-orders` with the following endpoints:

  * POST /job-orders
  * GET /job-orders
  * PATCH /job-orders/{id}
  * GET /job-orders/{id}
  * DELETE /job-orders/{id}

### Slack: Message attachments

We added support to include attachments with a `POST/channels/{channelId}/messages` request. To include an attachment with a POST message request, set up the request body like this:

```json
{
  "text": "test",
  "attachments":[
        {
            "fallback": "Required plain-text summary of the attachment",
            "title": "Attachment title",
            "title_link": "Valid url to add to the title",
            "text": "The main text of a message attachment",
            "image_url": "A valid URL to a GIF, JPEG, PNG, and BMP image file to appear inside a message attachment.  ",
            "color": "#764FA5"
        }
    ]
}
```

Take a look at [Slack's docs](https://api.slack.com/docs/message-attachments) for details on adding attachments.

### Twilio: Fixed query bug when searching for messages

When searching for messages sent before or after a specific date we returned a 400 error. You can now use `>=` or `<=` with `DateSent` in queries.

### Docusign: Added Account Id to support multiple accounts under one user

When authenticating an instance with Docusign, use the Account ID (accountId) field to pass a specific account id.

### Instagram: Removed deprecated endpoints

Instagram no longer supports the following endpoints and we've removed them from our API docs:

- `/hubs/social/media/{id}`
- `/hubs/social/media/shortcode/{shortcode}`
- `/hubs/social/users`
- `/hubs/social/users/{id}`
- `/hubs/social/users/{id}/media`

### Stripe: Renamed to Cloud Elements for Stripe

We renamed Stripe to Cloud Elements for Stripe.

### Maximizer: Updated to support changing Base URLs

Maximizer changes the Base URL often. We updated the element to support this change and we update the base URL bsed on the datacenter you choose when you authenticate.

### ConnectWise and ConnectWise CRM: Added `comments` endpoints

We added the following endpoints to ConnectWise and ConnectWise CRM:

* PUT /incidents/{id}/comments
* GET /incidents/{id}/comments
* GET /incidents/{incidentId}/comments/{id}
* PATCH /incidents/{incidentId}/comments/{id}

## Platform Updates

### Rename VDRs

You can now rename virtual data resources using the Edit button next to the name of the VDR.

### Load Metadata by Id

Added the option to load metadata by Id to the Transformations page.

