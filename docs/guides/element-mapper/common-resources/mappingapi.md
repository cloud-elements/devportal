---
heading: Creating Resources
seo: Creating Transformations | Common Resources | Cloud Elements API Docs
title: Mapping Fields to Common Resources via API
description: Creating Transformations
layout: sidebarleft
uiContentVersion: mapping
apis: API Docs
platform: organizations
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 21
---

# Mapping Fields to Common Resources via API

You can test the APIs described in this section using our interactive documentation. Open {{site.console}}, and then click <img src="img/btn-Code.png" alt="Custom JS" class="inlineImage"> in the header. Under Platform API Documentation, open `organizations` for common resources and transformations .

A transformation is the result of the process of <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.map}}">mapping</a> fields in your <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.element-instance-resource}}">element instance resources</a> to existing fields and objects in a
  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.common_resource}}">common resource</a>. After you create a common resource, you will select an element instance, choose the resource containing the objects that you want to map to the common resource, and map fields to the common resource. The end result is a a transformation of the selected objects in the element instance.


__On this page__

* [Retrieve a List of Common Resources](#retrieve-a-list-of-common-resources)
* [Map Resources for Transformation](#map-resources-for-transformation)


## Retrieve a List of Common Resources

You can retrieve a list of the common resources in your organization. The list includes all fields defined in the common resource.

To retrieve a list of common resources:

1. Call the following:

          GET /organizations/objects/definitions


1. Continue to the next step: [map fields to create a transformation](#map-resources-for-transformation).

### cURL Example

```bash
curl -X GET \
  https://api.cloud-elements.com/elements/api-v2/organizations/objects/definitions \
  -H 'authorization: User {USER_SECRET}, Organization {ORGANIZATION_SECRET}' \
  -H 'content-type: application/json'
```

## Map Resources for Transformation

There are several api calls to map resources. This section describes creating an orgaization level default transformations. Later sections show how map account and instance level Transformations.

This section describes mapping to a common resource at the organization level.

To map fields:

1. Construct a JSON body as shown below (see [Transformation JSON Parameters](#transformation-json-parameters)):

          {
            "level": "organization",
            "vendorName": "VENDOR_RESOURCE",
            "fields": [
              {
                "path": "{COMMON_RESOURCE_FIELD}",
                "type":"{COMMON_RESOURCE_TYPE}",
                "vendorPath": "{VENDOR_FIELD}",
                "vendorType": "{VENDOR_TYPE}"
              }
            ]
          }

1. Call the following, including the JSON body :

          POST /organizations/elements/{keyOrId}/transformations/{objectName}

      {% include note.html content="Replace {keyOrId} with the element key or id and replace {objectName} with the name of the common resource." %}

### Transformation JSON Parameters

| Parameter | Description   |  Optional (Y/N) |
| :------------- | :------------- |:------------- |
| level |  The access level of the transformation, either `organization`, `account`, or `instance`.  | Y </br>If not included, `organization` is the default. |
| vendorName | The name of the resource that contains the fields that you want to map to the common resource. | N |
| fields |  An object containing the field names and data types of the common resource and the vendor resource. </br>{% include tip.html content="To get a list of fields in a resource, call `GET hubs/{hub}/objects/{RESOURCE}/metadata`." %} | N |
|  path | The name of the field in the common resource. | Y |
| vendorPath | The name of the field in the vendor resource. | Y |
| type | The data type of the field in the common resource. </br>Data types can be `boolean`, `string`, `date`, and `number`. | N |
| vendorType | The data type of the field in the common resource. | N |
