| Parameter | Description   | Required |
| :------------- | :------------- | :------------- |
| Name</br>`name`  |  {{site.data.table-desc.step-name}}  | Y |
| Download/Upload Element Instance Variable</br>`uploadElementInstanceId`/`downloadElementInstanceId`  |  Specifies the element instance that receives the API call.  | Y |
| Download/Upload Method</br>`uploadMethod`/`downloadMethod`  |  {{site.data.table-desc.formula-method}} | Y |
| Download/Upload API</br>`uploadApi`/`downloadApi`  |  The endpoint, such as `hubs/crm/contacts`.  | Y |
| Download/UploadHeaders</br>`uploadHeaders`/`downloadHeaders`  |  {{site.data.table-desc.formula-headers}}  | N |
| Download/UploadQuery</br>`uploadQuery`/`downloadQuery`  |  {{site.data.table-desc.formula-query}}  | N |
| Upload Form Data</br>`uploadFormData` | Specifies the form data to send with the related request. Construct the form data in another step and refer to it in the Upload Form Data parameter. For example, <code>${steps.previousStep.formdata}</code>. | N |
| Upload Form Parameter Name</br>`uploadFormDataName` | Specifies the name of the form parameter. | N |
