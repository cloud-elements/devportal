---
heading: QuickBooks Enterprise
seo: Reports  | QuickBooks Enterprise | Cloud Elements API Docs
title: Reports
description: Find reports.
layout: sidebarelementdoc
breadcrumbs: /docs/elements.html
elementId: 195
parent: Back to Element Guides
order: 65
sitemap: false
---

# Reports

You can access reports in QuickBooks Enterprise via API. Cloud Elements provides the following endpoints:

GET /report-types
GET /reports

## Get a list of reports and report categories

## Pulling Reports

Use GET /reports.
Query. each query must include the ReportName parameter. The ReportName is the same as Name in the GET /report-types JSON.

### List of Reports

### Query Parameters

| fieldName | operator   | Values |
| :------------- | :------------- | :------------- |
| ReportModifiedFromDate|  	= | ISO8601 Date |
| ReportPeriodFrom		| =		| ISO8601 Date |
| ReportPeriodTo		| =		| ISO8601 Date |
| ReportName | =		| string see valid  |
| SummarizeColumnsBy	| =		| See Below |
| ReturnRows			| =		| See Below |
| ReturnColumns		| =		| See Below |
| AccountType			| =		| See Below |
| AccountName		 |	= , in	 |	Data values |
| AccountId		 |	= , in		 |Data values |
| ReportBasis			| =		| See Below |
| ReportCalendar		| =		| See Below |
| ReportDetail			| =		| See Below |
| ReportTxnType		| =		| See Below |
| ReportPostingStatus		| =		| See Below |
| ItemName			| in, =		| Data |
| ItemId				| in, = 		| Data |
| ItemType			| =		| See Below |
| ClassName			| in, = 		| Data |
| ClassId			| in, =		| Data |
| EntityType			| =		| See Below |
| EntityName			| = ,in		| Data |
| EntityId			| = , in		| Data |
| IncludeAccounts		| =		| See Below |
| ReportAgingAsOf		| =		| See Below |
| SummarizeBudgetColumnsBy | =		| See Below |
| SummarizeBudgetRowsBy 	| =		| See Below |
| BudgetCriterion			| =		| See Below |


#### BudgetCriterion
bcAccounts = 0,
bcAccountsAndClasses = 1,
bcAccountsAndCustomers = 2,

SummarizeBudgetColumnsBy
        sbcbClass = 0,
        sbcbCustomer = 1,
        sbcbDate = 2,




Values for ReportAgingAsOf
        raaoReportEndDate = 0,
        raaoToday = 1,



Values for IncludeAccounts
        iaAll = 0,
        iaInUse = 1,




SummarizeColumnsBy Values can be
        scbAccount = 0,
        scbBalanceSheet = 1,
        scbClass = 2,
        scbCustomer = 3,
        scbCustomerType = 4,
        scbDay = 5,
        scbEmployee = 6,
        scbFourWeek = 7,
        scbHalfMonth = 8,
        scbIncomeStatement = 9,
        scbItemDetail = 10,
        scbItemType = 11,
        scbMonth = 12,
        scbPayee = 13,
        scbPaymentMethod = 14,
        scbPayrollItemDetail = 15,
        scbPayrollYtdDetail = 16,
        scbQuarter = 17,
        scbSalesRep = 18,
        scbSalesTaxCode = 19,
        scbShipMethod = 20,
        scbTerms = 21,
        scbTotalOnly = 22,
        scbTwoWeek = 23,
        scbVendor = 24,
        scbVendorType = 25,
        scbWeek = 26,
        scbYear = 27,

ReturnRows	values can be
        rrActiveOnly = 0,
        rrNonZero = 1,
        rrAll = 2,

ReturnColumns values can be
        rcActiveOnly = 0,
        rcNonZero = 1,
        rcAll = 2,



Account Filters can be one of
	AccountType			=
	AccountName			in, =
Or	AccountId			in ,=

Valid Values for AccountType
        atfAccountsPayable = 0,
        atfAccountsReceivable = 1,
        atfAllowedFor1099 = 2,
        atfAPAndSalesTax = 3,
        atfAPOrCreditCard = 4,
        atfARAndAP = 5,
        atfAsset = 6,
        atfBalanceSheet = 7,
        atfBank = 8,
        atfBankAndARAndAPAndUF = 9,
        atfBankAndUF = 10,
        atfCostOfSales = 11,
        atfCreditCard = 12,
        atfCurrentAsset = 13,
        atfCurrentAssetAndExpense = 14,
        atfCurrentLiability = 15,
        atfEquity = 16,
        atfEquityAndIncomeAndExpense = 17,
        atfExpenseAndOtherExpense = 18,
        atfFixedAsset = 19,
        atfIncomeAndExpense = 20,
        atfIncomeAndOtherIncome = 21,
        atfLiability = 22,
        atfLiabilityAndEquity = 23,
        atfLongTermLiability = 24,
        atfNonPosting = 25,
        atfOrdinaryExpense = 26,
        atfOrdinaryIncome = 27,
        atfOrdinaryIncomeAndCOGS = 28,
        atfOrdinaryIncomeAndExpense = 29,
        atfOtherAsset = 30,
        atfOtherCurrentAsset = 31,
        atfOtherCurrentLiability = 32,
        atfOtherExpense = 33,
        atfOtherIncome = 34,
        atfOtherIncomeOrExpense = 35,


ReportBasis Values
        rbAccrual = 0,
        rbCash = 1,
        rbNone = 2,


        Values for ReportCalendar
        rcCalendarYear = 0,
        rcFiscalYear = 1,
        rcTaxYear = 2,

	Values for ReportDetail
        rdlfAll = 0,
        rdlfAllExceptSummary = 1,
        rdlfSummaryOnly = 2,

	Values for ReportTxnType operators supported , in , =
        ttfAll = 0,
        ttfARRefundCreditCard = 1,
        ttfBill = 2,
        ttfBillPaymentCheck = 3,
        ttfBillPaymentCreditCard = 4,
        ttfBuildAssembly = 5,
        ttfCharge = 6,
        ttfCheck = 7,
        ttfCreditCardCharge = 8,
        ttfCreditCardCredit = 9,
        ttfCreditMemo = 10,
        ttfDeposit = 11,
        ttfEstimate = 12,
        ttfInventoryAdjustment = 13,
        ttfInvoice = 14,
        ttfItemReceipt = 15,
        ttfJournalEntry = 16,
        ttfLiabilityAdjustment = 17,
        ttfPaycheck = 18,
        ttfPayrollLiabilityCheck = 19,
        ttfPurchaseOrder = 20,
        ttfReceivePayment = 21,
        ttfSalesOrder = 22,
        ttfSalesReceipt = 23,
        ttfSalesTaxPaymentCheck = 24,
        ttfTransfer = 25,
        ttfVendorCredit = 26,
        ttfYTDAdjustment = 27,

Values for ReportPostingStatus one of
       		 rpsfEither = 0,
rpsfNonPosting = 1,
        			rpsfPosting = 2,


       	ClassFilter
ClassName	= , in
ClassId	= , in

EntityFilter
	EntityType       =
	EntityId	= , in
	EntityName	= , in
		EntityType Values
        etfCustomer = 0,
        etfEmployee = 1,
        etfOtherName = 2,
        etfVendor = 3,


        ItemFilter
		ItemType	=
		ItemName	in, =
		ItemId		in , =
	Values ItemType can be
        itfAllExceptFixedAsset = 0,
        itfAssembly = 1,
        itfDiscount = 2,
        itfFixedAsset = 3,
        itfInventory = 4,
        itfInventoryAndAssembly = 5,
        itfNonInventory = 6,
        itfOtherCharge = 7,
        itfPayment = 8,
        itfSales = 9,
        itfSalesTax = 10,
        itfService = 11,
