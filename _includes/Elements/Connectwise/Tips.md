# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a><br/><a href=#WSDL path>WSDL Path</a><br/><a href=#bulk metadata>Bulk Metadata</a>" type="info" %}

## General

* Custom fields are not supported by Connectwise.

## WSDL Path

ConnectWise routinely changes the current WSDL version for the sandboxes they provide to developers, which can result in an error like:

        { "requestId": "587e64e1e4b0109b3b4637d6", "message": "Failed to connect to the API URL. Validate that you are using the correct WSDL path." }

If this occurs, you can find your updated WSDL path by logging in to ConnectWise and looking at the URL it redirects you to. For example, in the following URL the begining of the WSDL path appears after the ConnectWise URL:

        https://my.connectwise.com/v2017_2/ConnectWise.aspx?locale=en_US&session=...

The resulting WSDL path is `/v2017_2/apis/2.0/`.

## Bulk Metadata

* To insert records into ConnectWise for a particular `objectName` using `POST /bulk/{objectName}` you must include the following in the metadata:

        "action":"create"

*  To upsert records into ConnectWise for a particular `objectName `using `POST /bulk/{objectName}` you must include the following in the metadata:

        "identifierFieldName":"id"

* The default payload format is .csv. To specify the format, include the following:

        "format":"json"
