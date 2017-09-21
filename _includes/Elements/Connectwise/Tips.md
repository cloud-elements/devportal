# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a><br/><a href=#wsdl-path>WSDL Path</a><br/><a href=#bulk-metadata>Bulk Metadata</a>" type="info" %}

## General

* Custom fields are not supported by ConnectWise.

## WSDL Path

ConnectWise routinely changes the current WSDL version for the sandboxes they provide to developers, which can result in an error like:

        { "requestId": "587e64e1e4b0109b3b4637d6", "message": "Failed to connect to the API URL. Validate that you are using the correct WSDL path." }

If this occurs, you can find your updated WSDL path by logging in to ConnectWise and looking at the URL it redirects you to. For example, in the following URL the beginning of the WSDL path appears after the ConnectWise URL:

        https://my.connectwise.com/v2017_2/ConnectWise.aspx?locale=en_US&session=...

The resulting WSDL path is `/v2017_2/apis/2.0/`.

## Bulk Metadata

* To insert records into ConnectWise for a particular `objectName` using `POST /bulk/{objectName}` you must include the following in the metadata:

        "action":"create"

*  To upsert records into ConnectWise for a particular `objectName `using `POST /bulk/{objectName}` you must include the following in the metadata:

        "identifierFieldName":"id"

* The default payload format is .csv. To specify the format, include the following:

        "format":"json"

## SOAP Elements and Rest Resources

Description Big POS here, but you need to download their [web service client](https://university.connectwise.com/university/pageview.aspx?short_name=workstation-installation) _on a windows box_ to access this ability. Once you have that downloaded, you will login and look for the left menu. From the menu select System and then Setup Tables. Here you can type the name of a table. You will want to search for Integrator Login. Once you have that open you can click into the user account that you are using and enable the tick box for time entries (or whichever API you're interested in).

ConnectWise CRM and ConnectWise help desk support the SOAP API. However, you can still access Rest resources with the ConnectWise desktop app on a windows machine.

To enable a resource:

1. 
