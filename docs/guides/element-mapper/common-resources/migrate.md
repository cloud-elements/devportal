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

        {
          "fields": [
            {
              "type": "string",
              "path": "Address.street"
            },
            {
              "type": "string",
              "path": "Address.city"
            },
            {
              "type": "string",
              "path": "FirstName"
            },
            {
              "type": "string",
              "path": "Address.zip"
            },
            {
              "type": "string",
              "path": "Address.state"
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


3. Optional. If your common resource includes a sub-object and it is stored separately, run the call again using the name of the sub-object for `{objectName}`.
2. In your target account or environment, make a `POST /organizations/objects/definitions` API call, replacing `objectName` with the name of the common resource, and the `fields` object with the `fields` object from the previous step.

          {
            "<objectName>": {
              "fields": [
                {
                  "path": "<fieldName>",
                  "type": "<dataType>"
                }
              ]
            }
          }

4. If you have a sub-object that is stored separately, convert it to a nested object.

## Migrate Transformations
