---
heading: Common Resources
seo: Migrate Common Resources | Common Resources | Cloud Elements API Docs
title: Migrate Common Resources
description: Migrate Common Resources
layout: sidebarleft
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 50
---

# Migrate Common Resources

If you are developing in multiple environments or accounts, you might need to move your common resources and transformations from one account or environment to another. You can use the `organizations` APIs to do this.

## Migrate Common Resources

Migrating common resources is a two step process where you first get the common resource definition from one account or environment, and then post it to another.

{% include note.html content="Sub-objects appear differently depending on how you created them, as common resources or as My Objects in Element Mapper. If you created them with Element Mapper, they are identified by a custom <code>type</code> and are stored as separate objects with the same name as the <code>type</code> value. For example, a sub-object called <code>address</code> will appear in the definition as: </br> <pre>{</br>  \"type\":\"address\"<br>  \"path\":\"address\"<br>}</pre>Sub-objects created as common resources are shown in dot notation, e.g., <code>\"path\": \"Address.street\"</code>.  " %}

To migrate common resources:

1. In the source account or environment, call `GET /organizations/objects/{objectName}/definitions`, replacing `{objectName}` with the name of the common resource.

     {% include note.html content="Use `GET /organizations/objects/definitions` to get the list of all common resources." %}

    The JSON response looks like this:

    ```json
      {
        "fields": [
          {
            "type": "string",
            "path": "birthdate"
          },
          {
            "type": "string",
            "path": "FirstName"
          },
          {
            "type": "string",
            "path": "id"
          },
          {
            "type": "string",
            "path": "LastName"
          }
        ],
        "level": "organization"
      }
    ```

3. Optional. If you created your common resource in an earlier version of the software, it might include a sub-object that it is stored separately. Run the call again using the name of the sub-object for `{objectName}`.
2. In your target account or environment, make a `POST /organizations/objects/definitions` API call, replacing `objectName` with the name of the common resource, and the `fields` object with the `fields` object from the previous step.

```json
{
  "<objectName>": {
    "fields": [
      {
        "type": "string",
        "path": "birthdate"
      },
      {
        "type": "string",
        "path": "FirstName"
      },
      {
        "type": "string",
        "path": "id"
      },
      {
        "type": "string",
        "path": "LastName"
      }
    ]
  }
}
```

## Migrate Transformations

Migrating transformations is a two step process where you first get the transformations definition from one account or environment, and then post it to another.

To migrate transformations:

1. In the source account or environment, call `GET /organizations/elements/{keyOrId}/transformations/{objectName}`, replacing `keyOrId` with the element key and `{objectName}` with the name of the common resource.

    The JSON response looks like this:

    ```json
        {
        "level": "organization",
        "objectName": "myContacts_API",
        "vendorName": "Contact",
        "startDate": "2017-04-24 21:05:05.51129",
        "fields": [
        {
        "type": "string",
        "path": "birthdate",
        "vendorPath": "Birthdate",
        "level": "organization"
        },
        {
        "type": "string",
        "path": "FirstName",
        "vendorPath": "FirstName",
        "level": "organization"
        },
        {
        "type": "string",
        "path": "id",
        "vendorPath": "Id",
        "level": "organization"
        },
        {
        "type": "string",
        "path": "LastName",
        "vendorPath": "LastName",
        "level": "organization"
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
        "type": "inherit"
        }
        ],
        "isLegacy": false
        }
    ```

2. In your target account or environment, make a `POST /organizations/elements/{keyOrId}/transformations/{objectName}` API call, replacing `keyOrId` with the element key and `objectName` with the name of the common resource. Include the JSON payload from the previous step.
