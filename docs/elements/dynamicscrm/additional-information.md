---
heading: Microsoft Dynamics CRM
seo: Additional Information | Microsoft Dynamics CRM | Cloud Elements API Docs
title: Additional Information
description: Frequently asked questions and notes on conventions.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 21
parent: Back to Element Guides
order: 50
---

## Additional Information

How can I create an incident (case) and assign it to a contact in Microsoft Dynamics CRM?

Call the `POST /{objectName}` API with the following:

* replace `{objectName}` with `incident`
* include the `incident.json` payload in your API call

```JSON
{
  "attributes": {
    "title": "new case",
    "description": "hello",
    "customerid": {
      "id": "<INSERT_CONTACT_ID>",
      "lookup": "contact"
    }
  },
  "fetchMetaInfo": true
}
```

Without the "lookup" : "contact" Dynamics will default to associating the incident on an Account ID.

```bash
curl -X POST
-H 'Authorization: User <INSERT_USER_SECRET>, Organization <INSERT_ORGANIZATION_SECRET>'
-H 'Content-Type: application/json'
-d @incident.json
'https://api.cloud-elements.com/elements/api-v2/crm/incident'
```

Response:

```JSON
{
  "attributes": {
    "int_upsellreferral": false,
    "firstresponsesent": false,
    "prioritycode": 2,
    "description": "hello",
    "owninguser": "11411afe-2b69-e611-80dd-xxxxxxx",
    "statecode": 0,
    "resolvebyslastatus": 1,
    "title": "new case ",
    "statuscode": 1,
    "createdby": "11411afe-2b69-e611-80dd-xxxxxxx",
    "isdecrementing": false,
    "ticketnumber": "CAS-00006-xxxxxxx",
    "incidentid": "6bab3457-d6a2-e611-80e1-xxxxxxx",
    "decremententitlementterm": true,
    "servicestage": 0,
    "new_upsellreferral": false,
    "blockedprofile": false,
    "incidentstagecode": 1,
    "merged": false,
    "isescalated": false,
    "traversedpath": "15322a8f-67b8-47fb-8763-xxxxxxx",
    "ownerid": "11411afe-2b69-e611-80dd-xxxxxxx",
    "createdon": 1478295216000,
    "customercontacted": false,
    "firstresponseslastatus": 1,
    "int_surveryparticipation": false,
    "modifiedon": 1478295216000,
    "severitycode": 1,
    "processid": "0ffbcde4-61c1-4355-aa89-xxxxxxx",
    "activitiescomplete": false,
    "checkemail": false,
    "customerid": "465b158c-541c-e511-80d3-xxxxxxx",
    "modifiedby": "11411afe-2b69-e611-80dd-xxxxxxx",
    "followuptaskcreated": false,
    "owningbusinessunit": "1d547b3c-125a-e611-80d8-xxxxxxx",
    "routecase": true,
    "stageid": "15322a8f-67b8-47fb-8763-xxxxxxx"
  },
  "id": "6bab3457-d6a2-e611-80e1-xxxxxxx"
}
```
