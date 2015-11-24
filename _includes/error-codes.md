## Error Codes

Errors are never fun. To save you time we took a list of error codes from our service providers and normalized them into one list. If an error message is returned that includes a specific detail about the method call, we will send our normalized error code along with any additional data that comes from the provider in the body of the message. Below is a sample message from a service provider that would be included with our normalized error code.

```javascript
{
   "message": "Failed to upload file. File with the same name already exists. Change the name of the file you're uploading or set the overwrite query parameter to true.",
   "requestId": "53dbca9430045c016b46566c",
   "providerMessage": "Item with the same name already exists"
}
```
A complete list of our normalized error codes can be found below.

| Response Code 	| Error                                                                                	|
|---------------	|--------------------------------------------------------------------------------------	|
| 200           	| OK – Everything worked as expected.                                                  	|
| 400           	| Bad Request – Often due to a missing request parameter.                              	|
| 401           	| Unauthorized – An invalid element token, user secret and/or org secret provided.     	|
| 403           	| Forbidden – Access to the resource by the provider is forbidden.                     	|
| 405           	| Method Not Allowed – Incorrect HTTP verb used, e.g., GET used when POST expected.    	|
| 406           	| Not Acceptable – The response content type does not match the “Accept” header value. 	|
| 409           	| Conflict – A resource being created already exists.                                  	|
| 415           	| Unsupported Media Type – The server cannot handle the requested Content-Type.        	|
| 500           	| Server Error – Something went wrong on the Cloud Elements server.                    	|
| 502           	| Failed Request – Endpoint provider was not able to perform a CRUD request.           	|
