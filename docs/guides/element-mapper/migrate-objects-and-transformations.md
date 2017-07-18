---
heading: Element Mapper
seo: Migrate Object Definitions and Transformations | Element Mapper | Cloud Elements API Docs
title: Migrate Object Definitions and Transformations
description: How to move Objects and Transformations from one account to another
layout: sidebarleft
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 6
---

# Overview  

If you are developing in multiple environments or accounts, you will need to be able to move your object definitions and transformations from one account/environment to another. The best way to accomplish this is using the APIs

### 1. Move Object Definitions  

Start by calling `GET /organizations/objects/definitions` and find the object definitions that you want to migrate. For this example we will use "MyContact" You should see a response like this:  

```JSON
{
   "MyContact":{
      "fields":[
         {
            "type":"string",
            "path":"email"
         },
         {
            "type":"string",
            "path":"id"
         },
         {
            "type":"string",
            "path":"firstName"
         },
         {
            "type":"string",
            "path":"lastName"
         },
         {
            "type":"addressInfo",
            "path":"addressInfo"
         }
      ],
      "level":"organization"
   },
   "addressInfo":{
      "fields":[
         {
            "type":"string",
            "path":"MailingCity"
         },
         {
            "type":"string",
            "path":"MailingPostalCode"
         },
         {
            "type":"string",
            "path":"MailingStreet"
         },
         {
            "type":"string",
            "path":"MailingCountry"
         },
         {
            "type":"string",
            "path":"MailingState"
         }
      ],
      "level":"organization"
   },
   "MyOrder":{
      "fields":[
         {
            "type":"array[line_items]",
            "path":"line_items"
         }
      ],
      "level":"organization"
   }
}
```

First, grab the parent object that you are going to move `MyContact`. Notice this object definition references another sub object called `addressInfo`. Each sub object in Cloud Elements is its own entity, so make sure you grab all of the associated sub objects.  

Use `POST /organizations/objects/definitions` to push these objects into the other account. Bring your object definition and sub objects into one JSON object:  

```JSON
{
  "MyContact": {
    "fields": [
      {
        "type": "string",
        "path": "email"
      },
      {
        "type": "string",
        "path": "id"
      },
      {
        "type": "string",
        "path": "firstName"
      },
      {
        "type": "string",
        "path": "lastName"
      },
      {
        "type": "addressInfo",
        "path": "addressInfo"
      }
    ],
    "level": "organization"
  },
 "addressInfo": {
    "fields": [
      {
        "type": "string",
        "path": "MailingCity"
      },
      {
        "type": "string",
        "path": "MailingPostalCode"
      },
      {
        "type": "string",
        "path": "MailingStreet"
      },
      {
        "type": "string",
        "path": "MailingCountry"
      },
      {
        "type": "string",
        "path": "MailingState"
      }
    ],
    "level": "organization"
  }
}
```

### 2. Migrate Transformation  

Next pull your transformation using `GET /organizations/elements/{keyOrId}/transformations/{objectName}`
The response will look like:  

```JSON
{
  "level": "organization",
  "vendorName": "Contact",
  "startDate": "2016-11-09 16:03:20.897648",
  "fields": [
    {
      "path": "email",
      "vendorPath": "Email"
    },
    {
      "path": "id",
      "vendorPath": "Id"
    },
    {
      "path": "firstName",
      "vendorPath": "FirstName"
    },
    {
      "path": "lastName",
      "vendorPath": "LastName"
    },
    {
      "path": "addressInfo.MailingCity",
      "vendorPath": "MailingCity"
    },
    {
      "path": "addressInfo.MailingPostalCode",
      "vendorPath": "MailingPostalCode"
    },
    {
      "path": "addressInfo.MailingStreet",
      "vendorPath": "MailingStreet"
    },
    {
      "path": "addressInfo.MailingCountry",
      "vendorPath": "MailingCountry"
    },
    {
      "path": "addressInfo.MailingState",
      "vendorPath": "MailingState"
    }
  ],
  "configuration": [
    {
      "type": "passThrough",
      "properties": {
        "fromVendor": false,
        "toVendor": false
      }
    },
    {
      "type": "addToDocumentation"
    }
  ],
  "isLegacy": false
}
```

You can take this response and push it directly to the other account using `POST /organizations/elements/{keyOrId}/transformations/{objectName}`
