## Bulk APIs

Cloud Element Bulk API calls provide an option to upload a large number of resources, such as contacts, into a Cloud Service all at once. The Bulk APIs require the name of the object identified within the cloud service and a .csv file with populated data included in each request. Cloud Elements provides discovery services to get a list of available objects.

If you configured the **Callback Notification Signature Key** (`event.notification.signature.key`) when you authenticated an element instance, the bulk APIs will use the signature key to provide hash verification in the header of bulk jobs. For more on Cloud Elements Hash Verification, see [Event Management: Security](https://docs.cloud-elements.com/home/hash-verification)

First we will make the GET /objects call to retrieve a list of available objects

```bash
curl -X GET
-H 'Authorization: Element <INSERT ELEMENT TOKEN>, User <INSERT_USER_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/hubs/marketing/objects'
```

Example of Successful Response:

```javascript
[
  "activities",
  "contact",
  "campaign",
  "list",
  "account"
]
```

The “contact” object is available. We will use contact in our bulk upload. It will be placed in our request URL.

A csv file with populated data is required in our request, like the one seen below.

Example data will be used in this demonstration.

![Sample CSV Data](/assets/img/sample-csv.png)

An Example request can be seen below.:

```bash
curl -X POST
-H 'Authorization: Element <INSERT ELEMENT TOKEN>, User <INSERT_USER_SECRET>'
-F file=@sample.csv
'https://api.cloud-elements.com/elements/api-v2/hubs/marketing/bulk/contact?path=/sample.csv'
```

Example of Successful Response:

```javascript
{
  "id": "1234",
  "status": "CREATED"
}
```

An id is assigned to job. This can be used to check the status of a bulk job.

The id “1234” will be used in the request URL in the next example.

```bash
curl -X GET
-H 'Authorization: Element <INSERT ELEMENT TOKEN>, User <INSERT_USER_SECRET>'
'https://api.cloud-elements.com/elements/api-v2/hubs/marketing/bulk/1234/status'
```

Example of Successful Response:

```javascript
{
  "id": "1234",
  "status": "COMPLETE"
}
```

Once the job is completed, login to the cloud service an find your newly created contacts.
