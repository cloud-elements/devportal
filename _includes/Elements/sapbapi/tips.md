# Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

## Working with BAPIs

SAP has hundreds of BAPIs that provide specific methods for SAP business objects. Rather than setting each up individually, we provide the following endpoints to execute BAPIs and view their schemas:

* POST /bapi/{bapiName}/execute
* GET /bapi/{bapiName}/schema

### Executing BAPIs

To execute a BAPI, you provide the name of a BAPI and a valid body. If you aren't sure what the body of a BAPI should look like, check using `GET /bapi/{bapiName}/schema`.

### BAPI Schemas

`GET /bapi/{bapiName}/schema` provides quick access to the components that make up a BAPI. The response to a `GET /bapi/{bapiName}/schema` response includes the same details that you would find in SAP's Function Builder. For example, in the image below see the high level objects in the response to `bapi/BAPI_CUSTOMER_GETLIST/schema` (IMPORT, EXPORT, and TABLES) match the tabs in the Function Builder. Tabs not represented have no properties.

![Payload with Function Builder](/assets/img/elements/sap/func-builder-payload.png)
