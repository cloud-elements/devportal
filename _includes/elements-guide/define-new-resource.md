## Define New Resources

Defining a resource is a multi-step process, but you do not need to complete each step. For example, you need to add hooks only for advanced or complex use cases. You need to configure bulk for only the resources that you plan to download or upload bulk changes.

When defining resources, begin by adding a resource and providing basic information about the resource as a whole. For each endpoint, provide a description and add any endpoint-level configuration. If needed, add parameters to pass along with each request to each endpoint. For more complex use cases, write hooks needed to perform complex tasks. If the method requires models (POST, PUT, PATCH), define the models for each request and response. Lastly, if you want to be able to upload or download bulk CSV or JSON files, configure bulk for the endpoint.

Before you begin, review the [Element Conventions](custom-elements.html#element-conventions) so your element will align with others in the Elements Catalog.

### Add a Resource

{% include workflow.html displayNames="Add,Configure,Parameters,Hooks,Models,Bulk,Endpoints" links="#add-a-resource,#configure-endpoints,#add-parameters,#add-hooks,#add-models,#configure-bulk,#add-endpoints" active="Add"%}

Adding a resource enables you to create multiple endpoints for a single resource at one time. You can also add individual endpoints one at a time. Cloud Elements automatically groups individual endpoints by resource name when they match.

To add a resource:

1. Click **Add a new resource** at the top of the page.
2. Identify if the resource is a child resource, such as `/users/{id}/tasks` or `/contacts/{id}/tasks`.
3. In **Cloud Elements Resource Name** add the name of the resource as you want to see it in Cloud Elements. For example, enter `deals` to add a `/deals` resource to a CRM element. The name you choose is what appears in the API documentation and also creates an endpoint in the hub. For example, the new `GET /deals` endpoint appears as **GET /deals** in the docs and is accessible via the `hubs/crm/deals` endpoint.
![deals in the docs](img/deals-swagger.png)

    {% include note.html content="To remain consistent with Cloud Elements naming conventions, we recommend that you name the resources in the plural form. For example, `/deals` not `/deal`.  " %}

4. In **Vendor Resource Name** add the path to the resource at the API provider. The value that you enter is appended directly to the Base URL. If your Base URL ends with a slash `/` then do not enter a slash before the resource name. If your Base URL does not end in a slash `/`, then add one before the resource name.
5. In **Primary Key** enter the property that uniquely identifies the resource. Primary keys are typically ID fields associated with the resource. In this example, a primary key could be `id`.
6. In **Created Date Key** and **Updated Date Key** enter the properties that identify the created and updated dates. Created and updated date keys vary widely, but can be `created`, `createdate`, or `timecreated` and  `updated`, `lastModified`, or `dateModified`.
7. Select the methods to add. You will define the methods that you select when you [set up the endpoints](#configure-endpoints). Make sure that the methods that you select are supported by the API provider.

    For a new deals resource with all methods, our basic resource information looks like this:
    ![Basic Resource Information](img/resource-basic-info.png)

8. Click **Go**.
9. Configure to [Configure Endpoints](#configure-endpoints)

### Configure Endpoints

{% include workflow.html displayNames="Add,Configure,Parameters,Hooks,Models,Bulk,Endpoints" links="#add-a-resource,#configure-endpoints,#add-parameters,#add-hooks,#add-models,#configure-bulk,#add-endpoints" active="Configure"%}

After you provide the basic information to create a resource, Cloud Elements shows the endpoints associated with each method that you chose to configure for the resource in an editable API documentation format. Use the Endpoints tab to configure each of the endpoints created from the combination of the resource and the methods that you selected in the previous step. If you did not select the correct methods in the previous step, you can add or remove endpoints on the Endpoints tab.
![Configure Endpoints](img/endpoints.png)

If you have any authenticated element instances for the element, they appear on the left. Select an element instance to test the endpoints as you build them.

To set up endpoints:

1. Click <img src="img/resource-pencil.png" alt="Edit" class="inlineImage">.
7. In **Resource Type** select a resource type other than **API** only if you want to alter how the API documentation treats the endpoint.
5. Add a  **Root Key** to identify the top level field of the resource and limit what you send (**Request Root Key**) or receive (**Response Root Key**). For example, if you receive the following payload, but only want `items`, not `numberOfItems` and `items`, enter `items`.

    ```json
    {
      "numberOfItems": 10,
      "items": {
        "itemOne" : "hello",
        "itemtwo" : "world"
      }
    }
    ```

6. In **Pagination Type** select to override the default pagination settings of the element. If you select nothing, the default is **Supported**.

    {% include note.html content="If the API provider does not support paging, Cloud Elements uses the `page` or `nextPage` and `pageSize` parameters to page through the result set. " %}

7. In **Next Resource** select another endpoint if your use case requires requests to multiple endpoints one after another.
2. Enter a description. This appears in the API documentation and should help a user understand what the request is for and what to expect in the response. A description of the `GET /deals` endpoint could be: "Retrieves a list of deals. Use CEQL to filter by related fields like company and contact."

    {% include tip.html content="The descriptions that you enter for each endpoint should help a user understand what the endpoint does. Keep the descriptions short, no more than three sentences. Start with a verb associated with a method like gets, retrieves, checks, creates, returns, updates, or deletes. Then describe what resource is being manipulated and add any other helpful information about required fields, filtering, or formatting. " %}8. Continue to [Add Parameters](#add-parameters).

#### Endpoint Configuration Parameters

| Parameter | Description   | Required   |
| :------------- | :------------- | :------------- |
|  Resource Type  |  Describes the endpoint, when it executes, and whether it appears in the API documentation.  |  Yes  |
|    |  API &mdash; The default resource type where the endpoint makes a request to the API provider and is documented within the API documentation.  |  |
|    |  API No Documentation &mdash; The endpoint makes a request to the API provider but it is hidden from the API documentation.  |  |
|    |  On Delete &mdash; The endpoint makes a request when you delete an element instance. Use this type of resource to clean up after someone deletes an instance of the element.   |  |
|    |  On Provision &mdash; The endpoint makes a request when you authenticate an element instance. Use this type of resource to extract information during the authentication process to add to the element configuration.  |  |
|    |  On Refresh &mdash; The endpoint makes a request after the element makes an OAuth 2.0 token refresh request.  |  |
|    |  Provision Auth Validation &mdash; The endpoint makes a request during authentication validation.   |  |
|    |  On Provision Webhook &mdash; The endpoint makes a request during authentication of an element instance to register one or more webhooks with the API provider.   |  |
|    |  On Delete Webhook &mdash; The endpoint makes a request during deletion of an element instance to remove one or more webhooks from the API provider.    |  |
|    |  OAuth On Authorize URL &mdash; The endpoint makes a request bypassing the generic OAuth flow.  |  |
|    |  OAuth On Token Exchange &mdash; The endpoint makes a request bypassing the generic OAuth flow.   |  |
|    |  OAuth On Token Refresh &mdash; The endpoint makes a request bypassing the generic OAuth flow.    |  |
|    |  OAuth On Token Revoke &mdash; The endpoint makes a request bypassing the generic OAuth flow.   |  |
|    |  OAuth On Token Request  &mdash; The endpoint makes a request bypassing the generic OAuth flow.    |  |
|    |  OAuth1 On Token Request  &mdash; The endpoint makes a request bypassing the generic OAuth flow.   |  |
| Request Root Key  |  Identifies the root object in the JSON request that contains the relevant information about the resource.  |  No  |
| Response Root Key  |  Identifies the root object in the JSON response that contains the relevant information about the resource.  |  No  |
| Pagination Type  |  Identifies whether the resource supports the default pagination settings of the element. If you leave this parameter empty it defaults to Supported.  |  No  |
| Next Resource  |  If [chaining resources](#chaining-resources), identifies the endpoint request that follows this request in the chain.  |  No  |

### Add Parameters

{% include workflow.html displayNames="Add,Configure,Parameters,Hooks,Models,Bulk,Endpoints" links="#add-a-resource,#configure-endpoints,#add-parameters,#add-hooks,#add-models,#configure-bulk,#add-endpoints" active="Parameters"%}

Endpoint parameters allow you to pass various properties to the endpoint. Use the endpoint parameters to configure searches, pagination, ids, and required fields. You can configure most required and optional parameters for most endpoints. Cloud Elements provides some default common parameters for each method, except DELETE.

#### Default Parameters for Each Method

| GET | GET {id} | POST, PATCH & PUT| DELETE |
| :------------- | :------------- | :------------- | :------------- |
|  **where**: CEQL search expression.</br>In Vendor Name, keep the default `converter: toQueryParameters` in most cases. For some API providers that use an OData service you can use `converter: toODataFilter`. In some cases querying in the API provider cannot be supported by the existing parameters and you should contact Cloud Elements support.  |  **id**: The id of a specific object. | **body**: The object payload to create or update.  | No default, but the id of the deleted object is a common parameter. |
|  **page**: The next token or link to get additional results.   |  |   |  |
|  **pageSize**: The number of records to return.  |   |  |   |

Map parameters that you send as part of the request from Cloud Elements on the top row to parameters available to the resource at the API provider on the second row.
![Add parameters UI](img/resource-parameter.png)

To define a parameter :

1. Select an endpoint, and then click <img src="img/resource-pencil.png" alt="Edit" class="inlineImage">.
2. If you need to add a parameter, click **Add New Parameter**.
3. In **Parameter Name**, enter the name of the parameter. The name appears in the API documentation in some cases or can be a value passed to the API provider.
5. In **Vendor Name** enter the name of the parameter to map to. For example, if you are adding an `id` parameter, **Vendor Name** should be the unique id field for the resource like `dealId`.
6. In **Parameter Type** select the source of the parameter.
7. In **Vendor Type** select how the API provider receives the parameter.
8. In **Parameter Datatype** and **Vendor Datatype** select the data type of the parameter.
8. If the **Parameter Type** is `body`, enter the name of an existing model in **Model Name**. See [Add Models](#add-models) to create a model for the endpoint.
9. If you want to switch the standard workflow where the parameters on the left are part of the request, click **Parameter Source**, and then select **Request**. ID, GET,
10. To make the parameter a required part of the request, switch **Required** on.
4. In **Parameter Description** enter a brief description of the parameter. If the parameter appears in the API documentation, this description also appears.
11. Click **Save**:
  * If you need to add any more endpoints, continue to [Add Endpoints](#add-endpoints).
  * If the resource requires more logic to interact with it, continue to [Add Hooks](#add-hooks).
  * if you need to add a model to a POST, PUT, or PATCh request, continue to [Add Models](#add-models)
  * If you need to be able to upload or download bulk data in JSON or CSV format, continue to [Configure Bulk](#configure-bulk).

#### Parameters

| Parameter | Description   | Required   |
| :------------- | :------------- | :------------- |
|  Parameter Type  |  Body  |  Body  |
|    |  configuration &mdash; The value of the parameter is the value of the configuration identified by the Configuration Key specified in the Parameter Name. The Parameter Name must match a Configuration Key in the element configuration. |   |
|    |  header &mdash; The value is the request header parameter that matches the Parameter Name. |    |
|    |  path &mdash; The value is the portion of the request path that matches the Parameter Name. |    |
|    |  body &mdash; The value is the part of the request body that matches the Parameter Name. |    |
|    |  query &mdash;  The value is the query parameter that matches the Parameter Name. |    |
|    |  form  &mdash; The value is the value of the key that matches the Parameter Name in the x-www-form-urlencoded body of a request. If a file, then use "file" as the Parameter Name. |  |
|    |  multipart &mdash; The value is the value of the key that matches the Parameter Name in the x-www-form-urlencoded body of a request. If a file, then use "file" as the Parameter Name. |    |
|    |  value  &mdash; The value is the Parameter Name.  |  |
|    |  bodyField &mdash;  The value is the value of the field in a request body that matches the Parameter Name.   | |
|    |  prevBody - Cloud Elements parameter type only. If chaining requests, the value is the part of the request body of the previous request in the chain that matches the Parameter Name.   |    |
|    |  prevBodyField  - Cloud Elements parameter type only. If chaining requests, the value is the field in the request body of the previous request in the chain that matches the Parameter Name |  |
|  Vendor Type  |  Body  |  Body  |
|    |  configuration &mdash; Requests to the API provider pass the parameter value as part of the configuration. |   |
|    |  header &mdash; Requests to the API provider pass the parameter value in the header. |    |
|    |  path &mdash; Requests to the API provider pass the parameter value in the path. |    |
|    |  body &mdash; Requests to the API provider pass the parameter value in the body. |    |
|    |  query &mdash;  Requests to the API provider pass the parameter value as a query parameter. |    |
|    |  form  &mdash; Requests to the API provider pass the parameter value as part of the x-www-form-urlencoded body of a request.  |  |
|    |  multipart &mdash; Requests to the API provider pass the parameter value as part of the x-www-form-urlencoded body of a request.  |    |
|    |  value  &mdash; Requests to the API provider pass the parameter value as a value.   |  |
|    |  bodyField &mdash; Requests to the API provider pass the parameter value as a body field.    |  |
|    |  bodyToken &mdash; Requests to the API provider pass the parameter value as a body token. |    |
|    |  no-op &mdash;  Indicates that the API provider does not need to operate on the parameter. Use no-op if you use the parameter in hooks.  |    |
|  Parameter Datatype  |  The datatype of the parameter in the request.  |  Y  |
|  | integer &mdash; A 32 bit binary signed integer.   |   |
|  | long &mdash; A 32 bit binary signed integer.   |   |
|  | float &mdash; A specific data type for a number.   |   |
|  | double &mdash; A specific data type for a number.   |   |
|  | string &mdash; A free text string.   |   |
|  | byte &mdash; Base64 encoded characters.   |   |
|  | binatry &mdash; Any sequence of octets.   |   |
|  | boolean &mdash; Any true/false or yes/no data.   |   |
|  | date &mdash; Any true/false or yes/no data.   |   |
|  | dateTime &mdash; As defined by full-date - RFC3339.   |   |
|  | boolean &mdash; As defined by date-time - RFC3339.   |   |
|  | password &mdash; A hint to UIs to obscure input.  |   |
|  Vendor Datatype  |  The datatype of the parameter as expected by the API provider. See options for Parameter Datatype.  |  Body  |
|  Parameter Source  |  Identifies the side that represents the source, or left side of the parameter. The default request identifies Cloud Elements as the source. If you choose response, you effectively flip the Cloud Elements and API provider sides.  |  Y  |
|  Required  |  Identifies whether the parameter is required. |  Y  |
|  Parameter Description  |  A free text area to describe the parameter.   |  Y  |

### Add Hooks

{% include workflow.html displayNames="Add,Configure,Parameters,Hooks,Models,Bulk,Endpoints" links="#add-a-resource,#configure-endpoints,#add-parameters,#add-hooks,#add-models,#configure-bulk,#add-endpoints" active="Hooks"%}

You can create  <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.gloss_entry}}">resource hooks</a> to manipulate any part of a request or response or to operate on a configuration. Resource hooks work differently than <a href="#" data-toggle="tooltip" data-original-title="{{site.data.glossary.gloss_entry}}">global hooks</a> because they happen only on requests and responses related to a specific endpoint. [Custom Hooks](hooks.html) provides detailed information about using hooks and includes examples.

To create a resource hook:

1. In the endpoint edit view, click **Add a pre-request hook** or **Add a post-response hook** depending on what you need to manipulate.
2. Write the script needed for your use case. See [Custom Hooks](hooks.html) for more information about the functions and libraries available to you.
3. Save the endpoint.

### Add Models

{% include workflow.html displayNames="Add,Configure,Parameters,Hooks,Models,Bulk,Endpoints" links="#add-a-resource,#configure-endpoints,#add-parameters,#add-hooks,#add-models,#configure-bulk,#add-endpoints" active="Models"%}

Depending on the endpoint method, you can add request models and response models. Request models provide an example of how you should structure the JSON body of a POST, PUT, or PATCH request. Response models give you an idea of what the response from the API vendor should look like.

Request models are required for POST, PUT, or PATCH requests, and the model that you set up should match the Model Name in the **body** parameter.

You can add request models in two ways: entering the model schema directly or generating the model schema from a sample payload.

To add a model:

1. Identify what the request body should look like in the API provider's documentation or acquire a sample payload.
2. Click **Request Model** or **Response Model**.
3. Enter a name for the model.
4. Depending on how you want to enter the model:
  * Enter the model as a schema object as defined in the [OpenAPI version 2.0 Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject).
  * Or, click **Generate from Sample Payload**, paste the sample payload, and then click **Generate**.
  ![Generate From Payload](img/gen-from-payload.gif)
3. Click **Save**.


#### Sample Model

The following sample model is a request model called postDeals for a `deals` resource.

```json
{
    "postDeals": {
        "id": "postDeals",
        "properties": {
            "deal": {
                "type": "deal"
            }
        }
    },
    "deal": {
        "id": "deal",
        "properties": {
            "owner": {
                "type": "string"
            },
            "stage": {
                "type": "string"
            },
            "contact": {
                "type": "string"
            },
            "currency": {
                "type": "string"
            },
            "title": {
                "type": "string"
            },
            "percent": {
                "type": "unknown"
            },
            "value": {
                "format": "int32",
                "type": "integer"
            },
            "group": {
                "type": "string"
            },
            "status": {
                "format": "int32",
                "type": "integer"
            }
        }
    }
}

```


### Configure Bulk

{% include workflow.html displayNames="Add,Configure,Parameters,Hooks,Models,Bulk,Endpoints" links="#add-a-resource,#configure-endpoints,#add-parameters,#add-hooks,#add-models,#configure-bulk,#add-endpoints" active="Bulk"%}

You can set up each resource to be able to upload and download bulk data in either jSON or CSV format.

To configure bulk:

1. Click the **Bulk** tab.
2. Select to enable bulk upload, download, or both.
3. In each of the fields, select the format that the endpoint expects.
4. Click **Save Bulk Configuration**.

### Add Endpoints

{% include workflow.html displayNames="Add,Configure,Parameters,Hooks,Models,Bulk,Endpoints" links="#add-a-resource,#configure-endpoints,#add-parameters,#add-hooks,#add-models,#configure-bulk,#add-endpoints" active="Endpoints"%}

You can add a new endpoint for a resource.

To add an endpoint:

1. Under the last endpoint associated with the resource, click **Add a new endpoint**.
2. Select the Method for the new endpoint. The left side represents the Cloud Elements side of the endpoint.
3. On the right side, select the vendor method associate with the endpoint, and then enter the URL of that endpoint.
4. Click **Go**, and then follow the steps to [define the resource](#define-new-resources).

## Delete Endpoints

If you no longer need an endpoint, click <img src="img/resource-trash.png" alt="Delete" class="inlineImage">, and then confirm the deletion. To completely remove a resource, delete all of the endpoints associated with it.

## Copy Endpoints

To copy an endpoint, click <img src="img/resource-copy.png" alt="Copy" class="inlineImage">. After you copy and endpoint, cloud Elements creates a new resource and endpoint with the word **_copy** appended to it.

## Chaining Resources

You can create sequences of requests and perform operations based on the results of earlier requests in a sequence. Data from earlier resources in a chain are available to hooks through the `request_previous_response` and `request_previous_response_headers` parameters. Data is also available to parameters in the `prevBodyField` and `prevBody` Parameter Types.

To chain requests start with the earliest requests in the chain. While working with the endpoint configuration, select the next resource in the chain from the **Next Resource** list.
