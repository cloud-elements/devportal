---
heading: Manage Elements
seo: Element Info | Elements | Cloud Elements API Docs
title: Custom Config & Parameters
description: Defining element name and authentication
layout: sidebarleft
apis: API Docs
platform: elementsbuilder
breadcrumbs: /docs/guides/home.html
parent: Back to Guides
order: 24
---

# Custom Configuration and Parameters

{% include workflow.html displayNames="Info,Authentication,Configuration,Parameters,Hooks,Events,Bulk,Resources" links="define-info.html,auth.html,config.html,config.html#set-up-parameters,hooks.html,events.html,bulk.html,resources.html" active="Configuration"%}


When you set up your element configuration, you define the information that you want to store with the element. The information can include data that you collect from the user when they authenticate an instance of an element. You can also store variables in the configuration that you can act on with parameters and hooks. You can also store information that you need to pass with each request to the API provider.

Parameters enable you to configure what you need to send to an API provider with each request and how the provider expects to receive the information. You can pass variables that you added to the configuration, information provided by the user, specific values, and more.

{% include callout.html content="<strong>On this page</strong></br><a href=#link>Heading</a></br><a href=#link>Heading</a>" type="info" %}

## Set Up Configuration

The element configuration is the storage place for any data that you need to operate on with parameters and hooks. For example, if the API provider requires something very specific with each request, you can add that to the configuration and then define a parameter that passes the data with each request. You can expose this configuration to the user so they can supply the information when they authenticate. Or, if it is not user specific information, you can store a default value in the configuration to act on later.

See [Examples](#examples) for different ways to set up a configuration.

To set up a configuration:

1. Open Configuration, and the click **Add New Configuration**.
2. Enter the name of the configuration. If you choose to show this on the UI, Cloud Elements will show the configuration name as you define it here.
3. In **Configuration Key** you can choose to update the value automatically created from the configuration name or leave it. The configuration key is used in the JSON if needed to authenticate and element instance and it is also how you refer to the configuration in parameters and hooks.
4. In **Default Value** enter any default value for the configuration.
5. In **Configuration Description** enter a brief description of the configuration. If the configuration appears in Cloud Elements, the description is available as hover help.
5. In **Configuration Type** select the type of configuration. Configurations can be text strings, boolean, or passwords.
10. To make the configuration a required part of authentication, switch **Required** on.
7. Switch **Hide on UI** to on to prevent the configuration from appearing on the UI when the user authenticates. By default, the configuration appears on the UI.
8. Click **Save**.

### Configuration Parameters

| Parameter | Description   | Required   |
| :------------- | :------------- | :------------- |
|  configuration name  |  The visible name of the configuration as it appears in the Cloud Elements UI.   |  Y  |
|  Configuration Key  |  The internal unique identifier for the configuration. The configuration key value appears in the authentication JSON. You also refer to the configuration by configuration key in parameters and hooks.   |  Y  |
|  Default Value  |  The default value of the configuration.   |  N  |
|  Configuration Description  |  The description appears as hover help text. The text space available is limited, so write brief but useful descriptions. |  Y  |
|  Configuration Type  |  The type of configuration, which can be any of the following:   |  Y  |
|    |  Text Area, Text Text 32, Text 64, Text 100, Text 128 &mdash; Used to create configurations that accept free text strings. |    |
|    |  true/false and yes/no &mdash; Used to create boolean configurations. |    |
|    |  password &mdash; Used to create a password configuration value. Passwords are masked in Cloud Elements. |    |
|  Required  |  Identifies whether the configuration is required. Switch on to force a user to provide data when authenticating. Configurations not required, but that show in Cloud Elements appear under Show Optional Fields. |  Y  |
|  Hide on UI  |  Identifies whether the configuration appears in Cloud Elements. Switch on to show the configuration in Cloud Elements. The configuration appears to the user with the configuration name and the description as hover help text. |  Y  |

## Set Up Parameters

{% include workflow.html displayNames="Info,Authentication,Configuration,Parameters,Hooks,Events,Bulk,Resources" links="define-info.html,auth.html,config.html,config.html#set-up-parameters,hooks.html,events.html,bulk.html,resources.html" active="Parameters"%}


Element parameters allow you to pass various properties with each request. Use the element parameters to configure searches, pagination, ids, and required fields. You can configure most required and optional parameters for most APIs using paramters and configurations.

See [Examples](#examples) for different ways to set up a parameter.

To set up a parameter:

Map parameters that you send as part of the request from Cloud Elements on the left side of the page to parameters available to the resource at the API provider on the right side. The right and left side division is presented as **Cloud Elements Receives As** and **Vendor Receives as** in the example below.
![Add parameters UI](img/resource-parameter.png)

To define a parameter :

2. Click **Add New Parameter**.
3. In **Parameter Name** enter the name of the parameter. The name appears in the API documentation in some cases or can be a value passed to the API provider.
4. 5. In **Vendor Name** enter the name of the parameter to map to.
6. In **Parameter Type** and **Vendor Type** select how Cloud Elements and the API provider pass the parameter. See [Parameter Types](#parameter-types)for more information about the available type.
8. In **Parameter Datatype** and **Vendor Datatype** select the data type of the parameter.
  * integer - 32 bit binary signed integer
  * long - 32 bit binary signed integer
  * float - a kind of number
  * double -  a kind of number
  * string - any text enclosed within quotes
  * byte - 	base64 encoded characters
  * binary - any sequence of octets
  * boolean - true/false
  * date - As defined by full-date - RFC3339
  * dateTime - 	As defined by date-time - RFC3339
  * password - A hint to UIs to obscure input.
8. If the **Parameter Type** is `body`, enter the name of an existing model in **Model Name**.
9. If you want to switch the standard workflow where the parameters on the left are part of the request, click **Parameter Source**, and then select **Request**. ID, GET,
10. To make the parameter a required part of the request, switch **Required** on.
11. In **Parameter Description** enter a brief description of the parameter. If the parameter appears in the API documentation, this description also appears.

11. Take your next steps:
* If you need to add any more endpoints, continue to [Add Endpoints](#add-endpoints).
* If the resource requires more logic to interact with it, continue to [Add Hooks](#add-hooks).
* If you need to perform endpoint level configuration of events or bulk, continue to Events or Bulk.

#### Parameter Types

| Parameter | Description   |  Required  |
| :------------- | :------------- | :------------- |
|  Parameter Name  |  The value of the parameter comes from the element configuration. The Parameter Name must match the Configuration Key of the element configuration.  | Required  |
|  Vendor Name  |  The value of the parameter comes from the element configuration. The Parameter Name must match the Configuration Key of the element configuration.  | Required  |
|  configuration  |  The value of the parameter comes from the element configuration. The Parameter Name must match the Configuration Key of the element configuration.  | Required  |
|  configuration  |  The value of the parameter comes from the element configuration. The Parameter Name must match the Configuration Key of the element configuration.  | Required  |

|  configuration  |  The value of the parameter comes from the element configuration. The Parameter Name must match the Configuration Key of the element configuration.  | Required  |
|  header  |  The parameter is passed in the header of the request.    | Required  |
|  path  |  The parameter is passed in the path of the request.   | Required  |
|  body  |  The parameter is passed in the request body . Example, body. Is this part of the body or everything in the body? can you apss more than one bodies?     | Required  |
|  query  | Passed as a query string parameter. If you select this, Model appears. Example /deals?properties=dealName.   | Required  |
|  form  |  passed as form-data | Required  |
|  multipart  |  passed as multipart content   | Required  |
|  value  |  the value is the value of the Parameter Name  | Required  |
|  bodyField  |  Body  | Required  |
|  prevBody  |  Body  | Required  |
|  prevBodyField  | CE Only Body  | Required  |
|  value  |  Body  | Required  |
| bodyToken |Vendor Only | Required  |
| no-op | Vendor Only | Required  |









## Examples

### Add a Subdomain to a Base URL
