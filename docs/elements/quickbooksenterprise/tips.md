---
heading: Quickbooks Enterprise
seo: Tips | Quickbooks Enterprise | Cloud Elements API Docs
title: Tips
description: Quickbooks Enterprise Tips
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 195
parent: Back to Element Guides
order: 75
---

## Tips

The Tips section includes more information about the element including FAQs, endpoint limitations, and general tips.

* To successfully authenticate an instance with Quickbooks Enterprise, both the Ground2Cloud and Quickbooks connector services need to be running. You may need to actively restart your connector if your instance is not working.  For more information on Ground2Cloud, see the [Ground2Cloud documentation](https://developers.cloud-elements.com/docs/guides/ground-2-cloud/?resource=).

* When setting up polling, you may need to specify a timezone specific to the location of your server. The default time zone is UTC. Note- Quickbooks Enterprise has a known limitation where It currently does not support daylight savings, which may impact your time zone settings. Example polling configuation:
{
	"payments": {
		"url": "/hubs/finance/payments?where=TimeModified >= '${dateTimeZone:America/Denver:yyyy-MM-dd'T'HH:mm:ss.SSS'Z'}'",
		"idField": "TxnID",
		"datesConfiguration": {
			"updatedDateField": "TimeModified",
			"updatedDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX",
			"createdDateField": "TimeCreated",
			"createdDateFormat": "yyyy-MM-dd'T'HH:mm:ssXXX"
		}
	}
}

* Quickbooks cannot search by customerref.name in invoices
For more information, reference the following documentation. [Qucikbooks documentation](https://developer.intuit.com/docs/0100_quickbooks_online/0300_references/0000_programming_guide/0050_data_queries)

* Quickbooks Bulk does not support doing selects with specific column names in your CEQL. The best practice to achieve this functionality is to use transformations.
