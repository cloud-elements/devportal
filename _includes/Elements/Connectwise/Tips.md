# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

{% include callout.html content="<strong>On this page</strong><br/><a href=#general>General</a><br/><a href=#wsdl-path>WSDL Path</a><br/><a href=#bulk-metadata>Bulk Metadata</a> <a href=#soap-elements-and-rest-resources>SOAP Elements and Rest Resources</a>" type="info" %}

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

ConnectWise CRM and ConnectWise help desk support the SOAP API. However, you can still access Rest resources with the ConnectWise desktop app on a windows machine.

To enable a resource:

1. On a Microsoft Windows machine, go to [web service client](https://university.connectwise.com/university/pageview.aspx?short_name=workstation-installation), and download the ConnectWise desktop app.
2. In #1 **Install the ConnectWise Manage Internet Client**, choose the appropriate version for your machine, and then click **Download**.
3. Follow the instructions to install the ConnectWise desktop app.
4. Launch the ConnectWise desktop app, and then select **System > Setup Tables** in the left navigation area.
5. Search for and open the **Integrator Login** table.
6. Select the account of the user associated with the authenticated element instance.
7. Select the check box of the resource that you want to access.
