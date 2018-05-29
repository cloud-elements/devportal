# Welcome to the {{page.heading}} Element

{{page.heading}} is a cloud based business management software platform that provides an end-to-end software suite.

{% include callout.html content="<strong>On this page</strong></br><a href=#element-details>Element Details</a></br><a href=#base-url>Base URL</a></br><a href=#authenticating-with-cloud-elements>Authenticating with Cloud Elements</a></br><a href=#error-codes>Error Codes</a>" type="info" %}

## Element Details

| Element Information | Details     |
| :------------- | :------------- |
| API Documentation | [{{page.heading}} API documentation](https://www.autotask.net/help/Content/AdminSetup/2ExtensionsIntegrations/APIs/WebServicesAPI.htm) |
| Authentication | Basic: user name, password, and Server URL  |
| Events | Polling |
| Bulk | Supported for both upload and download. |
| Transformations | Supported. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object) for more information about transforming your {{page.heading}} data.|
| Rate Limits | Review the API Call Threshold documentation. You can check your threshold with the `getThresholdAndUsageInfo()` request to the AutoTask API. |


{% include Elements/index.md%}
