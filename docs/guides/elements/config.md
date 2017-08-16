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

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Config & Parameters"%}

Element configuration and parameters work together solve various scenarios presented by API providers. When you set up your element configuration, you define the information that you want to store with the element. The information can include data that you collect from the user when they authenticate an instance of an element. You can also store variables in the configuration that you can act on with parameters and hooks. You can also store information that you need to pass with each request to the API provider.

Parameters enable you to configure what you need to send to an API provider with each request and how the provider expects to receive the information. You can pass variables that you added to the configuration, information provided by the user, specific values, and more.

{% include note.html content="The configuration and parameters that you define here affect all requests made by the element. You will also define configurations and parameters specific to each endpoint when you <a href=resources.html>set up resources</a>.  " %}

{% include callout.html content="<strong>On this page</strong></br><a href=#set-up-element-configuration>Set Up Element Configuration</a></br><a href=#set-up-element-parameters>Set Up Element Parameters</a>" type="info" %}

## Set Up Element Configuration

The element configuration is the storage place for any data that you need to operate on with parameters and hooks. For example, if the API provider requires something very specific with each request, you can add that to the configuration and then define a parameter that passes the data with each request. You can expose this configuration to the user so they can supply the information when they authenticate. Or, if it is not user specific information, you can store a default value in the configuration to act on later.

{% include note.html content="Authentication values are element configuration values, so if you need to access the OAuth API Key from an OAuth 2.0 configuration, it is available with the Configuration Key <code>oauth.api.key</code>." %}

To set up a configuration:

1. Open Configuration, and then click **Add New Configuration**.
2. Enter the name of the configuration. If you choose to show this on the UI, Cloud Elements will show the configuration name as you define it here.
3. In **Configuration Key** you can choose to update the value automatically created from the configuration name or leave it. The configuration key identifies the configuration property in the JSON if needed to authenticate an element instance. You also use the configuration key to refer to the configuration in parameters and hooks.
4. In **Default Value** enter any default value for the configuration.
5. In **Configuration Description** enter a brief description of the configuration. If the configuration appears in Cloud Elements, the description is available as hover help.
5. In **Configuration Type** select the type of configuration. Configurations can be text strings, boolean, or passwords.
10. To make the configuration a required part of authentication, switch **Required** on.
7. Switch **Hide on UI** to on to prevent the configuration from appearing on the UI when the user authenticates. By default, the configuration appears on the UI.
8. Click **Save**.

### Element Configuration Parameters

{% include elements-guide/table-config-params.md%}

## Set Up Parameters

Element parameters allow you to pass various properties with each request. Use the element parameters to configure searches, pagination, ids, and required fields. You can configure most required and optional parameters for most APIs using parameters and configurations.

To set up a parameter:

Map parameters that you send as part of the request from Cloud Elements on the left side of the page to parameters available to the resource at the API provider on the right side. The right and left side division is presented as **Cloud Elements Receives As** and **Vendor Receives as** in the example below.
![Add parameters UI](img/resource-parameter.png)

To define a parameter :

2. Click **Add New Parameter**.
3. In **Parameter Name** enter the name of the parameter. The name appears in the API documentation in some cases or can be a value passed to the API provider.
4. In **Vendor Name** enter the name of the parameter to map to.
6. In **Parameter Type** and **Vendor Type** select how Cloud Elements and the API provider pass the parameter.
9. If you want to switch the standard workflow where the parameters on the left are part of the request from Cloud Elements, and want the parameters on the left to represent the response from the API provider, click **Parameter Source**, and then select **Request**.
10. To make the parameter a required part of the request, switch **Required** on.
11. In **Parameter Description** enter a brief description of the parameter. If the parameter appears in the API documentation, this description also appears.
11. Take your next steps:

#### Element Parameter Parameters

| Parameter | Description   | Required   |
| :------------- | :------------- | :------------- |
|  Parameter Name  |  The Parameter Name acts as a key and provides values to the Parameter Types.   | Required  |
|  Vendor Name  |  The parameter at the API provider that equals the parameter that you are defining.  | Required  |
|  Parameter Type  |  The source of the parameter value on the Cloud Elements side.   |  Y  |
|    |  configuration &mdash; The value of the parameter is the value of the configuration identified by the Configuration Key specified in the Parameter Name. The Parameter Name must match a Configuration Key in the element configuration. |   |
|    |  header &mdash; The value is the request header parameter that matches the Parameter Name. |    |
|    |  path &mdash; The value is the portion of the request path that matches the Parameter Name. |    |
|    |  body &mdash; The value is the part of the request body that matches the Parameter Name. |    |
|    |  query &mdash;  The value is the query parameter that matches the Parameter Name. |    |
|    |  form  &mdash; The value is the value of the key that matches the Parameter Name in the x-www-form-urlencoded body of a request. If a file, the file name is the Parameter Name. |  |
|    |  multipart &mdash; The value is the value of the key that matches the Parameter Name in the x-www-form-urlencoded body of a request. If a file, the file name is the Parameter Name. |    |
|    |  value  &mdash; The value is the Parameter Name.  |  |
|    |  bodyField |  The value is the value of the field in a request body that matches the Parameter Name.   |
|    |  prevBody - Cloud Elements parameter type only. If chaining requests, the value is the part of the request body of the previous request in the chain that matches the Parameter Name.   |    |
|    |  prevBodyField  - Cloud Elements parameter type only. If chaining requests, the value is the field in the request body of the previous request in the chain that matches the Parameter Name |  |
|  Vendor Type  | The destination of the parameter value on the API provider side.:  |  Y  |
|    |  configuration &mdash; Requests to the API provider pass the parameter value as part of the configuration. |   |
|    |  header &mdash; Requests to the API provider pass the parameter value in the header. |    |
|    |  path &mdash; Requests to the API provider pass the parameter value in the path. |    |
|    |  body &mdash; Requests to the API provider pass the parameter value in the body. |    |
|    |  query &mdash;  Requests to the API provider pass the parameter value as a query parameter. |    |
|    |  form  &mdash; Requests to the API provider pass the parameter value as part of the x-www-form-urlencoded body of a request.  |  |
|    |  multipart &mdash; Requests to the API provider pass the parameter value as part of the x-www-form-urlencoded body of a request.  |    |
|    |  value  &mdash; Requests to the API provider pass the parameter value as a value.   |  |
|    |  bodyField |  &mdash; Requests to the API provider pass the parameter value as a body field.    |
|    |  bodyToken &mdash; Requests to the API provider pass the parameter value as a body token. |    |
|    |  no-op &mdash;  Indicates that the API provider does not need to operate on the parameter. Use no-op if you use the parameter in hooks.  |    |
|  Parameter Source  |  Identifies the side that represents the source, or left side of the parameter. The default request identifies Cloud Elements as the source. If you choose response, you effectively flip the Cloud Elements and API provider sides.  |  Y  |
|  Parameter Description  |  A free text area to describe the parameter.   |  Y  |
|  Required  |  Identifies whether the parameter is required. |  Y  |

Continue to the next step, [Custom Hooks](hooks.html).

{% include workflow.html displayNames="Info,Authentication,Config & Parameters,Hooks,Events,Resources" links="define-info.html,auth.html,config.html,hooks.html,events.html,resources.html" active="Hooks"%}
