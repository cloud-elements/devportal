# Bulk

Cloud Elements Bulk support provides an option to upload a large number of resources, such as contacts, to a service provider all at once. You can use bulk to [download a csv or json](../../guides/bulk/download.html) file from a large number of records or [upload a csv or json](../../guides/bulk/upload.html) file to add multiple records. See the [Bulk Guide](../../guides/bulk/index.html) for more information on managing bulk.

{% include note.html content="Cloud Elements leverages the native bulk endpoints whenever available. When there is no bulk available from the provider, Cloud Elements provides a bulk service for uploading and downloading data from the endpoint. See <a href=#bulk-details>Bulk Details</a> for the type of bulk used." %}

When using the native endpoints, performance is best when calls are limited to 100 or fewer. Additionally, when using this endpoint, please keep in mind that any errors with a single contact in your batch will prevent the entire batch from processing. If this happens, we'll return a 400 response with additional details as to the cause.

## Bulk Details

| Bulk Information | Details   |
| :------------- | :------------- |
|  Bulk Type  |  Cloud Elements bulk service and not native bulk endpoints. |
| Upsert Support | No |
| Field Selection Support | No. To limit the fields returned by the query, you must use a transformation. See [Define Common Resources and Transformations](https://docs.cloud-elements.com/home/common-object). For example, you can use only `select *` for this element. |
| Order By Support | No, you can not add `order by fieldName` to the query. |
