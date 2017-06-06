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

* `GET /report-types`
* `GET /reports`

{% include callout.html content="<strong>On this page</strong></br><a href=#get-a-list-of-eports-and-categories>Get a List of Reports and Categories</a></br><a href=#pulling-reports>Pulling Reports</a>" type="info" %}


## Get a List of Reports and Categories

Use `GET /report-types` to retrieve a list of reports and report categories. Use the `Name` from the response as `ReportName` to search for specific reports in `GET /reports`.

### JSON Response

```json
[
  {
    "Category": "BudgetSummaryReport",
    "Name": "Profit and Loss Budget vs. Actual"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Income by Customer Summary"
  },
  {
    "Category": "AgingReport",
    "Name": "AR Aging Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Profit and Loss Standard"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Profit and Loss by Class"
  },
  {
    "Category": "BudgetSummaryReport",
    "Name": "Balance Sheet Budget Overview"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Physical Inventory Worksheet"
  },
  {
    "Category": "AgingReport",
    "Name": "AP Aging Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Balance Sheet Previous Year Comparison"
  },
  {
    "Category": "BudgetSummaryReport",
    "Name": "Profit and Loss Budget Overview"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Trial Balance"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Income Tax Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Profit and Loss Previous Year Comparison"
  },
  {
    "Category": "AgingReport",
    "Name": "Collections Report"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Balance Sheet Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Customer Balance Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Expense by Vendor Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Sales by Customer Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Inventory Stock Status by Vendor"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Inventory Stock Status by Item"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Inventory Valuation Summary"
  },
  {
    "Category": "BudgetSummaryReport",
    "Name": "Profit and Loss Budget Performance"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Vendor Balance Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Sales by Rep Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Sales by Item Summary"
  },
  {
    "Category": "BudgetSummaryReport",
    "Name": "Balance Sheet Budget vs. Actual"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Purchase by Vendor Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Sales Tax Revenue Summary"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Purchase by Item Summary"
  },
  {
    "Category": "AgingReport",
    "Name": "AR Aging Detail"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Sales Tax Liability"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Profit and Loss YTD Comparison"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Balance Sheet Standard"
  },
  {
    "Category": "GeneralSummaryReport",
    "Name": "Profit and Loss by Job"
  },
  {
    "Category": "AgingReport",
    "Name": "AP Aging Detail"
  }
]
```

## Pulling Reports

Use `GET /reports` to access your Quickbook reports vai API.

You must specify a `ReportName` in the CEQL expression. The `ReportName` is the `Name` from the `GET /report-types` JSON response.

### Query Parameters

| fieldName | operator   | Values |
| :------------- | :------------- | :------------- |
| AccountType			| =		| [See below](#accounttype) |
| AccountId		 |	= , in		 | Data values |
| AccountName		 |	= , in	 |	Data values |
| BudgetCriterion			| =		| [See below](#budgetcriterion) |
| ClassId			| in, =		| Data |
| ClassName			| in, = 		| Data |
| EntityId			| = , in		| Data |
| EntityName			| = ,in		| Data |
| EntityType			| =		| [See below](#entitytype) |
| FiscalYear | = | Date Year `YYYY` |
| IncludeAccounts		| =		| [See below](#includeaccounts) |
| ItemId				| in, = 		| Data |
| ItemName			| in, =		| Data |
| ItemType			| =		| [See below](#itemtype) |
| ReportAgingAsOf		| =		| [See below](#reportagingasof) |
| ReportBasis			| =		| [See below](#reportbasis) |
| ReportCalendar		| =		| [See below](#reportcalendar) |
| ReportDetail			| =		| [See below](#reportdetail) |
| ReportModifiedFromDate|  	= | ISO8601 Date |
| ReportName | =		| string see valid  |
| ReportPeriodFrom		| =		| ISO8601 Date |
| ReportPeriodTo		| =		| ISO8601 Date |
| ReportPostingStatus		| =		| [See below](#reportpostingstatus) |
| ReportTxnType		| in, =		| [See below](#reporttxntype) |
| ReturnColumns		| =		| [See below](#returncolumns) |
| ReturnRows			| =		| [See below](#returnrows) |
| SummarizeBudgetColumnsBy | =		| [See below](#summarizebudgetcolumnsby) |
| SummarizeBudgetRowsBy 	| =		| [See below](#summarizebudgetrowsby) |
| SummarizeColumnsBy	| =		| [See below](#summarizecolumnsby) |

#### AccountType

```
GET /reports?where=ReportName%20%3D%20'AR%20Aging%20Summary'%20AND%20AccountType%20%3D%2035
```

| Account Type | Value   |
| :------------- | :------------- |
| atfAccountsPayable | 0 |
| atfAccountsReceivable | 1 |
| atfAllowedFor1099  |  2 |
| atfAPAndSalesTax  |  3 |
| atfAPOrCreditCard  |  4 |
| atfARAndAP  |  5 |
| atfAsset  |  6 |
| atfBalanceSheet  |  7 |
| atfBank  |  8 |
| atfBankAndARAndAPAndUF  |  9 |
| atfBankAndUF  |  10 |
| atfCostOfSales  |  11 |
| atfCreditCard  |  12 |
| atfCurrentAsset  |  13 |
| atfCurrentAssetAndExpense  |  14 |
| atfCurrentLiability  |  15 |
| atfEquity  |  16 |
| atfEquityAndIncomeAndExpense  |  17 |
| atfExpenseAndOtherExpense  |  18 |
| atfFixedAsset  |  19 |
| atfIncomeAndExpense  |  20 |
| atfIncomeAndOtherIncome  |  21 |
| atfLiability  |  22 |
| atfLiabilityAndEquity  |  23 |
| atfLongTermLiability  |  24 |
| atfNonPosting  |  25 |
| atfOrdinaryExpense  |  26 |
| atfOrdinaryIncome  |  27 |
| atfOrdinaryIncomeAndCOGS  |  28 |
| atfOrdinaryIncomeAndExpense  |  29 |
| atfOtherAsset  |  30 |
| atfOtherCurrentAsset  |  31 |
| atfOtherCurrentLiability  |  32 |
| atfOtherExpense  |  33 |
| atfOtherIncome  |  34 |
| atfOtherIncomeOrExpense  |  35 |

#### BudgetCriterion

```
GET /reports?where=ReportName%20%3D%20'AR%20Aging%20Summary'%20AND%20BudgetCriterion%20%3D%202
```

| Budget Criterion | Value   |
| :------------- | :------------- |
| bcAccounts |  0 |
| bcAccountsAndClasses |  1 |
| bcAccountsAndCustomers |  2 |

#### EntityType

```
GET /reports?where=ReportName%20%3D%20'Profit%20and%20Loss%20Standard'%20AND%20EntityFilter%20%3D%203
```

| EntityType |  Value |
| :------------- | :------------- |
| etfCustomer |  0 |
| etfEmployee |  1 |
| etfOtherName |  2 |
| etfVendor |  3 |

#### IncludeAccounts

```
GET /reports?where=ReportName%20%3D%20'Profit%20and%20Loss%20Standard'%20AND%20IncludeAccounts%20%3D%200
```
| Accounts | Value   |
| :------------- | :------------- |
| iaAll  | 0 |
| iaInUse  | 1 |

#### ItemType

```
GET /reports?where=ReportName%20%3D%20'Profit%20and%20Loss%20Standard'%20AND%20ItemType%20%3D%203
```

| Item Type | Value   |
| :------------- | :------------- |
| itfAllExceptFixedAsset | 0 |
| itfAssembly | 1 |
| itfDiscount | 2 |
| itfFixedAsset | 3 |
| itfInventory | 4 |
| itfInventoryAndAssembly | 5 |
| itfNonInventory | 6 |
| itfOtherCharge | 7 |
| itfPayment | 8 |
| itfSales | 9 |
| itfSalesTax | 10 |
| itfService | 11 |

#### ReportAgingAsOf

```
GET /reports?where=ReportName%20%3D%20'AR%20Aging%20Summary'%20AND%20ReportAgingAsOf%20%3D%200
```

| Report Aging | Value   |
| :------------- | :------------- |
| raaoReportEndDate | 0 |
| raaoToday | 1 |

#### ReportBasis

```
GET /reports?where=ReportName%20%3D%20'Profit%20and%20Loss%20Standard'%20AND%ReportBasis%20%3D%201
```

| Report Basis | Value   |
| :------------- | :------------- |
| rbAccrual | 0 |
| rbCash | 1 |
| rbNone | 2 |

#### ReportCalendar

```
GET /reports?where=ReportName%20%3D%20'AP%20Aging%20Summary'%20AND%20ReportCalendar%20%3D%201
```

| Report Calendar | Value   |
| :------------- | :------------- |
| rcCalendarYear | 0 |
| rcFiscalYear | 1 |
| rcTaxYear  |  2 |

#### ReportDetail

```
GET /reports?where=ReportName%20%3D%20'AP%20Aging%20Summary'%20AND%ReportDetail%20%3D%201
```

| Report Detail | Value   |
| :------------- | :------------- |
| rdlfAll | 0 |
| rdlfAllExceptSummary | 1 |
| rdlfSummaryOnly | 2 |

#### ReportPostingStatus

```
GET /reports?where=ReportName%20%3D%20'AP%20Aging%20Summary'%20AND%ReportPostingStatus%20%3D%201
```

| Posting Status | Value   |
| :------------- | :------------- |
| rpsfEither | 0 |
| rpsfNonPosting | 1 |
| rpsfPosting | 2 |

#### ReportTxnType

```
GET /reports?where=ReportName%20%3D%20'AP%20Aging%20Summary'%20AND%ReportTxnType%20%3D%2011
```

| Transaction Type | Value   |
| :------------- | :------------- |
| ttfAll | 0 |
| ttfARRefundCreditCard | 1 |
| ttfBill | 2 |
| ttfBillPaymentCheck | 3 |
| ttfBillPaymentCreditCard | 4 |
| ttfBuildAssembly | 5 |
| ttfCharge | 6 |
| ttfCheck | 7 |
| ttfCreditCardCharge | 8 |
| ttfCreditCardCredit | 9 |
| ttfCreditMemo | 10 |
| ttfDeposit | 11 |
| ttfEstimate | 12 |
| ttfInventoryAdjustment | 13 |
| ttfInvoice | 14 |
| ttfItemReceipt | 15 |
| ttfJournalEntry | 16 |
| ttfLiabilityAdjustment | 17 |
| ttfPaycheck | 18 |
| ttfPayrollLiabilityCheck | 19 |
| ttfPurchaseOrder | 20 |
| ttfReceivePayment | 21 |
| ttfSalesOrder | 22 |
| ttfSalesReceipt | 23 |
| ttfSalesTaxPaymentCheck | 24 |
| ttfTransfer | 25 |
| ttfVendorCredit | 26 |
| ttfYTDAdjustment | 27 |

#### ReturnColumns

```
GET /reports?where=ReportName%20%3D%20'AP%20Aging%20Summary'%20AND%ReturnColumns%20%3D%202
```

| Columns | Value   |
| :------------- | :------------- |
| rcActiveOnly | 0 |
| rcNonZero | 1 |
| rcAll | 2 |


#### ReturnRows

```
GET /reports?where=ReportName%20%3D%20'AP%20Aging%20Summary'%20AND%ReturnRows%20%3D%201
```

| Columns | Value   |
| :------------- | :------------- |
| rcActiveOnly | 0 |
| rcNonZero | 1 |
| rcAll | 2 |

#### SummarizeBudgetColumnsBy

```
GET /reports?where=ReportName%20%3D%20'Profit%20and%20Loss%20Budget%20Overview'%20AND%20FiscalYear%20%3D%20'2016'%20AND%20SummarizeBudgetColumnsBy%20%3D%201
```

| Columns | Value   |
| :------------- | :------------- |
| sbcbClass | 0 |
| sbcbCustomer | 1 |
| sbcbDate | 2 |

#### SummarizeBudgetRowsBy

```
GET /reports?where=ReportName%20%3D%20'Profit%20and%20Loss%20Budget%20Overview'%20AND%20FiscalYear%20%3D%20'2016'%20AND%20SummarizeBudgetRowsBy%20%3D%201
```

| Columns | Value   |
| :------------- | :------------- |
| sbrbAccount | 0 |
| sbrbClass | 1 |
| sbrbCustomer | 2 |



#### SummarizeColumnsBy

```
GET /reports?where=ReportName%20%3D%20'Profit%20and%20Loss%20Budget%20Overview'%20AND%20FiscalYear%20%3D%20'2016'%20AND%20SummarizeColumnsBy%20%3D%2014

```

| Columns | Value   |
| :------------- | :------------- |
| scbAccount | 0 |
| scbBalanceSheet | 1 |
| scbClass | 2 |
| scbCustomer | 3 |
| scbCustomerType | 4 |
| scbDay | 5 |
| scbEmployee | 6 |
| scbFourWeek | 7 |
| scbHalfMonth | 8 |
| scbIncomeStatement | 9 |
| scbItemDetail | 10 |
| scbItemType | 11 |
| scbMonth | 12 |
| scbPayee | 13 |
| scbPaymentMethod | 14 |
| scbPayrollItemDetail | 15 |
| scbPayrollYtdDetail | 16 |
| scbQuarter | 17 |
| scbSalesRep | 18 |
| scbSalesTaxCode | 19 |
| scbShipMethod | 20 |
| scbTerms | 21 |
| scbTotalOnly | 22 |
| scbTwoWeek | 23 |
| scbVendor | 24 |
| scbVendorType | 25 |
| scbWeek | 26 |
| scbYear | 27 |
