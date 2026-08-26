# UPI OSG – Operating and Settlement Guidelines version 2.0

## Document metadata

- **Source file:** `UPI OSG V2.pdf`
- **Document:** UPI OSG – Operating and Settlement Guidelines version 2.0
- **Pages:** 158
- **Copyright:** ©2021 National Payment Corporation of India. All rights reserved
- **Author:** Saktiswar Rao
- **Creation/Modification timestamp in PDF metadata:** 19 Nov 2024
- **Transformation note:** This Markdown is a preservation/transformation of the supplied PDF. Page boundaries are explicit. Verbatim extracted page text is retained; machine-readable table renderings and visual descriptions are added without removing the retained source text.

## Table of contents

### TOC source - Page 5

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 5/158 
 
TABLE OF CONTENTS 
1) 
PURPOSE ................................................................................................................... 9 
2) 
AUDIENCE.................................................................................................................. 9 
3) 
CONTENTS ................................................................................................................. 9 
4) 
INTRODUCTION ......................................................................................................... 9 
5) 
NON-DISCLOSURE AGREEMENT ............................................................................... 10 
6) 
ROLE OF NPCI AS SETTLEMENT AGENCY ................................................................... 10 
7) 
ENTERPRISE FRAUD RISK MANAGEMENT (EFRM) ....................................................... 11 
8) 
PRODUCTS & SERVICES ........................................................................................... 12 
8.1) 
FINANCIAL TRANSACTIONS ...................................................................................... 16 
8.2) 
TYPE OF TRANSACTIONS .......................................................................................... 17 
8.3) 
TRANSACTION AMOUNT LIMITS ................................................................................ 17 
9) 
PARTIES INVOLVED AND PROCESS FLOW ................................................................. 18 
10) 
ON-BOARDING OF MEMBER BANKS .......................................................................... 18 
11) 
OFF-BOARDING OF BANKS FROM URCS ................................................................... 19 
12) 
SUB-MEMBERS IN THE UPI NETWORK ....................................................................... 19 
13) 
OPERATING PROCEDURE FOR MEMBERS ................................................................. 20 
14) 
SETTLEMENT GUIDELINES ........................................................................................ 20 
14.1) SETTLEMENT ACCOUNT ........................................................................................... 20 
14.2) FUNDING THE RTGS SETTLEMENT ACCOUNT ............................................................ 21 
14.3) SETTLEMENT MECHANISM ........................................................................................ 21 
14.4) SETTLEMENT AND RECONCILIATION ......................................................................... 21 
14.5) MODALITIES OF SETTLEMENT ................................................................................... 22 
14.6) SETTLEMENT AMOUNT, FEE RULES & RATES .............................................................. 22 
14.7) CYCLE WISE SETTLEMENT FILES & REPORTS IN URCS FOR MEMBER BANKS (DAILY) ... 36 
14.8) RAW DATA FILES ....................................................................................................... 38 
14.9) NTSL FILE ................................................................................................................. 39 
14.10) ADJUSTMENT REPORTS ............................................................................................ 39 
15) 
UPI LITE SETTLEMENT AND RECONCILIATION PROCESS ............................................ 39 
15.1) LITE TRANSACTION IDENTIFIERS ............................................................................... 39 
16) 
UPI LITE X (OFFLINE) ................................................................................................. 40 
16.1) LITE X (OFFLINE) TRANSACTION IDENTIFIERS ............................................................ 40 
16.2) LITE X (OFFLINE) SETTLEMENT RULES ....................................................................... 40 
16.3) LITE NEW RESPONSE CODES.................................................................................... 41
```

### TOC source - Page 6

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 6/158 
16.4) URCS DISPUTE RULES .............................................................................................. 42 
17) 
UPI IPO..................................................................................................................... 43 
17.1) INITIATION / CREATION ............................................................................................. 43 
17.2) UPDATE / MODIFY ..................................................................................................... 43 
17.3) REVOKE / CANCELLATION ........................................................................................ 44 
17.4) EXECUTION .............................................................................................................. 44 
18) 
NEW LAUNCHES IN GFF 2024 ................................................................................... 45 
19) 
NETWORK / SWITCH BUSINESS DAY CUTOVER TIME ................................................. 47 
20) 
THREE WAY RECONCILIATION .................................................................................. 48 
21) 
RBI CUSTOMER COMPENSATION & NPCI COMPLIANCE PENALTIES ........................... 48 
20.1) HARMONIZATION OF TAT AND CUSTOMER COMPENSATION GUIDLINES ................... 48 
20.2) CUSTOMER COMPENSATION DETAILS ...................................................................... 49 
22) 
BANKS ACTIONABLE FOR UNSUCCESSFUL TRANSACTIONS ...................................... 49 
21.1) REMITTER/ACQUIRER: .............................................................................................. 49 
21.2) BENEFICIARY/ISSUER: .............................................................................................. 50 
21.3) TAT FOR RETURNS ON DEEMED APPROVED TRANSACTIONS ..................................... 50 
21.4) APPLICABILITY FOR RBI COMPENSATION .................................................................. 50 
23) 
NPCI COMPLIANCE PENALTY .................................................................................... 52 
22.1) TCC TRANSACTION CREDIT CONFIRMATION / RET RETURNS ..................................... 52 
22.2) DRC DEBIT REVERSAL CONFIRMATION ..................................................................... 52 
22.3) RRC REFUND REVERSAL CONFIRMATION ................................................................. 53 
22.4) NPCI NON-COMPLIANCE PENALTY WAIVER PROCESS .............................................. 55 
24) 
DISPUTES & ADJUSTMENTS ....................................................................................... 55 
23.1) CHARGEBACK COMPLIANCE POLICY ........................................................................ 57 
23.2) DISPUTE / ADJUSTMENT SETTLEMENT TIMINGS ......................................................... 58 
23.3) DISPUTE RESOLUTION MECHANISM & RESPONSIBILITIES ......................................... 59 
23.4) DISPUTE GUIDELINES ............................................................................................... 59 
23.5) ARBITRATION ........................................................................................................... 60 
23.6) WRONG CREDIT CHARGEBACK PROCESS (WC) ........................................................ 65 
23.7) FRAUD CHARGEBACK PROCESS (FC) ........................................................................ 65 
23.8) GENERIC GOOD FAITH CREDIT ADJUSTMENTS .......................................................... 65 
23.9) MASTER TABLE OF DISPUTES / ADJUSTMENT / STATUS UPDATE .................................. 68 
23.10) TYPES OF MANDATORY EVIDENCE TO REPRESENT DISPUTES .................................... 76 
23.11) EXCEPTION HANDLING ............................................................................................ 78 
25) 
SETTLEMENT CURRENCY .......................................................................................... 78 
26) 
HOLIDAY SETTLEMENT .............................................................................................. 78
```

### TOC source - Page 7

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 7/158 
27) 
PROCESS FOR HANDLING TRANSACTIONS NOT SETTLED DUE TO DATA LOSS ........... 78 
26.1) PROCESS TO BE FOLLOWED BY NPCI ....................................................................... 79 
26.2) PROCESS TO BE FOLLOWED BY MEMBERS.................................................................. 79 
28) 
LIABILITY OF THE DEFAULTING MEMBER ................................................................... 79 
29) 
COMPLIANCE WITH UPI-OPERATING AND SETTLEMENT GUIDELINES ........................ 80 
30) 
CERTIFICATION FEES ................................................................................................ 80 
31) 
NETWORK FEES ........................................................................................................ 80 
32) 
DISASTER RECOVERY (DR) DRILLS COMPLIANCE ...................................................... 80 
33) 
ACCESS TO GST PORTAL ........................................................................................... 81 
34) 
MAINTAINING TRANSACTION RECORDS ................................................................... 81 
35) 
MONITORING & HELPDESK 24X7............................................................................... 81 
36) 
NPCI WEBSITE COMPLAINTS .................................................................................... 81 
37) 
NPCI HELP CENTER (CRM – CUSTOMER RELATIONSHIP MANAGEMENT) .................... 82 
38) 
UDIR – UNIFIED INTERFACE FOR DISPUTE RESOLUTION SYSTEM ............................... 82 
37.1) ReqChkTxn (EXISTING API - ENHANCED) ................................................................... 85 
37.2) ReqComplaint (NEW API) .......................................................................................... 86 
37.3) KEY ENABLEMENT .................................................................................................... 86 
37.4) LIST OF APIs FOR UDIR ............................................................................................. 87 
37.5) AUTO UPDATE IN UPI ................................................................................................ 88 
37.6) RECONCILIATION AND DISPUTE MANAGEMENT ........................................................ 88 
37.7) RAW FILES AND ADJUSTMENT REPORTS .................................................................... 89 
38) 
PII DATA (PERSON IDENTIFIER INFORMATION) ........................................................... 91 
39) 
PGP ENCRYPTION .................................................................................................... 91 
40) 
URCS RESET PASSWORD PROCESS, POLICY & SYSTEM REQUIREMENTS ................... 91 
40.1) RESET PASSWORD ................................................................................................... 91 
40.2) PASSWORD POLICY .................................................................................................. 91 
41) 
URCS SYSTEM REQUIREMENTS ................................................................................. 91 
42) 
ANNEXURES ............................................................................................................. 93 
42.1) DOCUMENTS FOR ON-BOARDING PARTICIPANT BANKS (ANNEXURE – 1) ................... 93 
42.2) COLLATERAL DEPOSIT SAMPLE FORMAT (ANNEXURE – 2) .......................................... 95 
42.3) URCS USER REQUEST FORM (ANNEXURE – 3) ........................................................... 96 
42.4) GST REGISTRATION DETAILS (ANNEXURE – 4) ............................................................ 97 
42.5) USER ID REQUEST FORM FOR INVOICE SHARING TOOL (ANNEXURE – 5) ................... 98 
42.6) ESCALATION MATRIX (ANNEXURE – 6) ....................................................................... 99 
42.7) OPERATING CIRCULAR LIST (ANNEXURE – 7) ........................................................... 100 
42.8) NTSL (ANNEXURE – 8) ............................................................................................. 110
```

### TOC source - Page 8

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 8/158 
42.9) RAW FILE HEADER FORMAT (ANNEXURE – 9) ........................................................... 132 
42.10) ACQUIRER MERCHANT RAW DATA V3 (ANNEXURE – 10)........................................... 133 
42.11) ISSUER MERCHANT RAW DATA V3 (ANNEXURE – 11) ................................................ 133 
42.12) ACQUIRER RAW DATA V3 (ANNEXURE – 12) ............................................................. 133 
42.13) ISSUER RAW DATA V3 (ANNEXURE – 13) .................................................................. 133 
42.14) ACQUIRER PSP RAW DATA V3 (ANNEXURE – 14) ...................................................... 134 
42.15) ISSUER PSP RAW DATA V3 (ANNEXURE – 15) ............................................................ 134 
42.16) ADJUSTMENT REPORT (ANNEXURE – 16) ................................................................. 134 
42.17) GSTR (ANNEXURE - 17) ........................................................................................... 134 
42.18) GST INVOICE (ANNEXURE – 18) ............................................................................... 135 
42.19) RECEIVABLE SERVICE TAX REPORT (ANNEXURE – 19) .............................................. 136 
42.20) PAYABLE SERVICE TAX REPORT (ANNEXURE – 20) .................................................... 137 
42.21) BANK WISE PAYABLE REPORT (ANNEXURE – 21) ...................................................... 137 
42.22) DATE WISE PAYABLE REPORT (ANNEXURE – 22) ....................................................... 138 
42.23) BANK WISE RECEIVABLE REPORT (ANNEXURE – 23) ................................................. 139 
42.24) DATE WISE RECEIVABLE REPORT (ANNEXURE – 24) ................................................. 139 
42.25) ACCOUNT TYPE (ANNEXURE – 25) ........................................................................... 140 
42.26) INITIATION MODE (ANNEXURE – 26) ........................................................................ 140 
42.27) PURPOSE CODE (ANNEXURE – 27) .......................................................................... 141 
42.28) LITE BALANCE REPORT (ANNEXURE – 28) ................................................................ 143 
42.29) ADJUSTMENT REASON CODES (ANNEXURE – 29)..................................................... 143 
42.30) DRC PENALTY PAYABLE REPORT (ANNEXURE – 30) .................................................. 153 
42.31) DRC PENALTY RECEIVABLE REPORT (ANNEXURE – 31) ............................................. 153 
42.32) TCC PENALTY PAYABLE REPORT (ANNEXURE – 32) ................................................... 154 
42.33) TCC PENALTY RECEIVABLE REPORT (ANNEXURE – 33) ............................................. 154 
42.34) RRC PENALTY PAYABLE REPORT (ANNEXURE – 34) ................................................... 154 
42.35) RRC PENALTY RECEIVABLE REPORT (ANNEXURE – 35) ............................................. 155 
42.36) AUTHORIZATION LETTER – RECOVERY OF NPCI CHARGES THROUGH RTGS 
SETTLEMENT / RBI CURRENT ACCOUNT FOR DIRECT BANK (ANNEXURE – 37) .................... 156 
42.37) AUTHORIZATION LETTER – RECOVERY OF NPCI CHARGES THROUGH RTGS 
SETTLEMENT / RBI CURRENT ACCOUNT FOR SUB-MEMBER BANK (ANNEXURE – 38) .......... 157 
42.38) DECLARATION FOR FULFILMENT OF GOODS/SERVICES TO CUSTOMER (ANNEXURE – 
39) 
158
```

---

<!-- PAGE 1 -->
# PAGE 1

[IMAGE_001]

![IMAGE_001](images/IMAGE_001.jpeg)

**IMAGE_001 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_002]

![IMAGE_002](images/IMAGE_002.png)

**IMAGE_002 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 1/158
```

<!-- PAGE 2 -->
# PAGE 2

[IMAGE_003]

![IMAGE_003](images/IMAGE_003.jpeg)

**IMAGE_003 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_004]

![IMAGE_004](images/IMAGE_004.png)

**IMAGE_004 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 2/158 
 
 
 
 
 
 
 
 
OPERATING & SETTLEMENT 
GUIDELINES FOR 
UNIFIED PAYMENT INTERFACE 
VERSION 2.0
```

<!-- PAGE 3 -->
# PAGE 3

[IMAGE_005]

![IMAGE_005](images/IMAGE_005.jpeg)

**IMAGE_005 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_006]

![IMAGE_006](images/IMAGE_006.png)

**IMAGE_006 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 3/158 
 
 
VERSION CONTROL 
Particulars 
Prepared by 
Reviewed By 
Approved By 
UPI Operating & Settlement 
Guidelines 
Padmavathi G 
Saktiswar Rao G 
Giridhar GM 
Date 
Nov 19, 2024 
Nov 19 2024 
Nov 19, 2024 
 
DOCUMENT HISTORY
Version 
Issue Date 
Revision History 
2.0 
Aug 01, 2024 
Below sections are added 
- 
7) Enterprise Fraud Risk Management (EFRM) 
- 
8) Products & Services: Its types and features, FT & Non-FT, TXN 
Types & Limits 
- 
10 to 11) On-Boarding & Off-Boarding of Member Banks 
- 
14.7) Cycle Wise Settlement Files & Reports in URCS For 
Member Banks (Daily)  
- 
15 to 17) UPI Lite, UPI Lite X (Offline) and UPI IPO Settlement and 
Reconciliation Process 
- 
21) RBI Customer Compensation & NPCI Compliance Penalties 
- 
22) Banks Actionable for Unsuccessful Transactions 
- 
23.1) Chargeback Compliance Policy 
- 
23.2) Dispute / Adjustment Settlement Timings 
- 
30 to 31) Certification & Network Fees 
- 
32) Disaster Recovery (DR) Drills Compliance 
- 
33) Access To GST Portal 
- 
35) Monitoring & Helpdesk 24X7 
- 
36) NPCI Website Complaints 
- 
37) NPCI Help Center (CRM – Customer Relationship 
Management) 
- 
38) UDIR – Unified Interface for Dispute Resolution System 
 
Below Sections are updated 
- 
14.6) Settlement Amount, Fee Rules & Rates: as per the latest 
pricing OCs 
- 
19) Network / Switch Business Day Cutover Time: 10 settlement 
cycle per day, Business day cutover change to 24:00 Hrs 
- 
23.5) Arbitration 
- 
23.6) Wrong Credit Chargeback Process (WC) 
- 
23.7) Fraud Chargeback Process (FC) 
- 
23.9) Master Table of Disputes / Adjustment / Status Update 
- 
26) Holiday Settlement: 24X7X365 Days RTGS Settlement 
Posting 
- 
34) Maintaining Transaction Records: 500/- + GST file restoration 
charges to member bank
```

**Machine-readable table extraction(s) for PAGE 3**

#### TABLE_003_01 (source extraction: `page003_table01.csv`)

||Particulars|||Prepared by|||Reviewed By|||Approved By||
|---|---|---|---|---|---|---|---|---|---|---|---|
|UPI Operating & Settlement<br>Guidelines|||Padmavathi G|||Saktiswar Rao G|||Giridhar GM|||
|Date|||Nov 19, 2024|||Nov 19 2024|||Nov 19, 2024|||

#### TABLE_003_02 (source extraction: `page003_table02.csv`)

||Version|||Issue Date|||Revision History||
|---|---|---|---|---|---|---|---|---|
|2.0|||Aug 01, 2024|||Below sections are added<br>- 7) Enterprise Fraud Risk Management (EFRM)<br>- 8) Products & Services: Its types and features, FT & Non-FT, TXN<br>Types & Limits<br>- 10 to 11) On-Boarding & Off-Boarding of Member Banks<br>- 14.7) Cycle Wise Settlement Files & Reports in URCS For<br>Member Banks (Daily)<br>- 15 to 17) UPI Lite, UPI Lite X (Offline) and UPI IPO Settlement and<br>Reconciliation Process<br>- 21) RBI Customer Compensation & NPCI Compliance Penalties<br>- 22) Banks Actionable for Unsuccessful Transactions<br>- 23.1) Chargeback Compliance Policy<br>- 23.2) Dispute / Adjustment Settlement Timings<br>- 30 to 31) Certification & Network Fees<br>- 32) Disaster Recovery (DR) Drills Compliance<br>- 33) Access To GST Portal<br>- 35) Monitoring & Helpdesk 24X7<br>- 36) NPCI Website Complaints<br>- 37) NPCI Help Center (CRM – Customer Relationship<br>Management)<br>- 38) UDIR – Unified Interface for Dispute Resolution System<br>Below Sections are updated<br>- 14.6) Settlement Amount, Fee Rules & Rates: as per the latest<br>pricing OCs<br>- 19) Network / Switch Business Day Cutover Time: 10 settlement<br>cycle per day, Business day cutover change to 24:00 Hrs<br>- 23.5) Arbitration<br>- 23.6) Wrong Credit Chargeback Process (WC)<br>- 23.7) Fraud Chargeback Process (FC)<br>- 23.9) Master Table of Disputes / Adjustment / Status Update<br>- 26) Holiday Settlement: 24X7X365 Days RTGS Settlement<br>Posting<br>- 34) Maintaining Transaction Records: 500/- + GST file restoration<br>charges to member bank|||

<!-- PAGE 4 -->
# PAGE 4

[IMAGE_007]

![IMAGE_007](images/IMAGE_007.jpeg)

**IMAGE_007 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_008]

![IMAGE_008](images/IMAGE_008.png)

**IMAGE_008 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 4/158 
 
Below Sections Removed 
- 
Pre-Compliance & Compliance by Remitting Bank on Payer PSP 
- 
Pre-Compliance & Compliance by Remitting Bank on Payee PSP 
 
Below Annexures Added 
- 
42.1 to 42.6) Onboarding Documents  
- 
42.7) Operating Circular List  
- 
42.8 To 42.16, 42.28, 42.30 to 42.35) Settlement Reports 
- 
42.17 to 42.24) GST Reports 
- 
42.25 to 27) Account Type, Initiation Mode & Purpose Code 
- 
42.29) Adjustment Reason Codes 
- 
42.36 to 42.37) Bank Authorization Letter – Recovery Of NPCI 
Charges Through RTGS Settlement / RBI Current Account For 
Direct Bank & Sub-Member Bank 
- 
42.38) Declaration for fulfilment of goods/services to customer 
Nov 19, 2024 
Below sections are added 
- 
18) New Launches in GFF 2024 
- 
23.8) Generic Good Faith Credit Adjustment 
 
Below Sections are updated 
23.5) NRP & PRD Process 
Author            : Padmavathi G 
Reviewed by: Saktiswar Rao G 
Approved by: Giridhar GM
```

**Machine-readable table extraction(s) for PAGE 4**

#### TABLE_004_01 (source extraction: `page004_table01.csv`)

|||Below Sections Removed<br>- Pre-Compliance & Compliance by Remitting Bank on Payer PSP<br>- Pre-Compliance & Compliance by Remitting Bank on Payee PSP<br>Below Annexures Added<br>- 42.1 to 42.6) Onboarding Documents<br>- 42.7) Operating Circular List<br>- 42.8 To 42.16, 42.28, 42.30 to 42.35) Settlement Reports<br>- 42.17 to 42.24) GST Reports<br>- 42.25 to 27) Account Type, Initiation Mode & Purpose Code<br>- 42.29) Adjustment Reason Codes<br>- 42.36 to 42.37) Bank Authorization Letter – Recovery Of NPCI<br>Charges Through RTGS Settlement / RBI Current Account For<br>Direct Bank & Sub-Member Bank<br>- 42.38) Declaration for fulfilment of goods/services to customer|
|---|---|---|
||Nov 19, 2024|Below sections are added<br>- 18) New Launches in GFF 2024<br>- 23.8) Generic Good Faith Credit Adjustment<br>Below Sections are updated<br>23.5) NRP & PRD Process|
||Author : Padmavathi G<br>Reviewed by: Saktiswar Rao G<br>Approved by: Giridhar GM||

<!-- PAGE 5 -->
# PAGE 5

[IMAGE_009]

![IMAGE_009](images/IMAGE_009.jpeg)

**IMAGE_009 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_010]

![IMAGE_010](images/IMAGE_010.png)

**IMAGE_010 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 5/158 
 
TABLE OF CONTENTS 
1) 
PURPOSE ................................................................................................................... 9 
2) 
AUDIENCE.................................................................................................................. 9 
3) 
CONTENTS ................................................................................................................. 9 
4) 
INTRODUCTION ......................................................................................................... 9 
5) 
NON-DISCLOSURE AGREEMENT ............................................................................... 10 
6) 
ROLE OF NPCI AS SETTLEMENT AGENCY ................................................................... 10 
7) 
ENTERPRISE FRAUD RISK MANAGEMENT (EFRM) ....................................................... 11 
8) 
PRODUCTS & SERVICES ........................................................................................... 12 
8.1) 
FINANCIAL TRANSACTIONS ...................................................................................... 16 
8.2) 
TYPE OF TRANSACTIONS .......................................................................................... 17 
8.3) 
TRANSACTION AMOUNT LIMITS ................................................................................ 17 
9) 
PARTIES INVOLVED AND PROCESS FLOW ................................................................. 18 
10) 
ON-BOARDING OF MEMBER BANKS .......................................................................... 18 
11) 
OFF-BOARDING OF BANKS FROM URCS ................................................................... 19 
12) 
SUB-MEMBERS IN THE UPI NETWORK ....................................................................... 19 
13) 
OPERATING PROCEDURE FOR MEMBERS ................................................................. 20 
14) 
SETTLEMENT GUIDELINES ........................................................................................ 20 
14.1) SETTLEMENT ACCOUNT ........................................................................................... 20 
14.2) FUNDING THE RTGS SETTLEMENT ACCOUNT ............................................................ 21 
14.3) SETTLEMENT MECHANISM ........................................................................................ 21 
14.4) SETTLEMENT AND RECONCILIATION ......................................................................... 21 
14.5) MODALITIES OF SETTLEMENT ................................................................................... 22 
14.6) SETTLEMENT AMOUNT, FEE RULES & RATES .............................................................. 22 
14.7) CYCLE WISE SETTLEMENT FILES & REPORTS IN URCS FOR MEMBER BANKS (DAILY) ... 36 
14.8) RAW DATA FILES ....................................................................................................... 38 
14.9) NTSL FILE ................................................................................................................. 39 
14.10) ADJUSTMENT REPORTS ............................................................................................ 39 
15) 
UPI LITE SETTLEMENT AND RECONCILIATION PROCESS ............................................ 39 
15.1) LITE TRANSACTION IDENTIFIERS ............................................................................... 39 
16) 
UPI LITE X (OFFLINE) ................................................................................................. 40 
16.1) LITE X (OFFLINE) TRANSACTION IDENTIFIERS ............................................................ 40 
16.2) LITE X (OFFLINE) SETTLEMENT RULES ....................................................................... 40 
16.3) LITE NEW RESPONSE CODES.................................................................................... 41
```

<!-- PAGE 6 -->
# PAGE 6

[IMAGE_011]

![IMAGE_011](images/IMAGE_011.jpeg)

**IMAGE_011 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_012]

![IMAGE_012](images/IMAGE_012.png)

**IMAGE_012 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 6/158 
16.4) URCS DISPUTE RULES .............................................................................................. 42 
17) 
UPI IPO..................................................................................................................... 43 
17.1) INITIATION / CREATION ............................................................................................. 43 
17.2) UPDATE / MODIFY ..................................................................................................... 43 
17.3) REVOKE / CANCELLATION ........................................................................................ 44 
17.4) EXECUTION .............................................................................................................. 44 
18) 
NEW LAUNCHES IN GFF 2024 ................................................................................... 45 
19) 
NETWORK / SWITCH BUSINESS DAY CUTOVER TIME ................................................. 47 
20) 
THREE WAY RECONCILIATION .................................................................................. 48 
21) 
RBI CUSTOMER COMPENSATION & NPCI COMPLIANCE PENALTIES ........................... 48 
20.1) HARMONIZATION OF TAT AND CUSTOMER COMPENSATION GUIDLINES ................... 48 
20.2) CUSTOMER COMPENSATION DETAILS ...................................................................... 49 
22) 
BANKS ACTIONABLE FOR UNSUCCESSFUL TRANSACTIONS ...................................... 49 
21.1) REMITTER/ACQUIRER: .............................................................................................. 49 
21.2) BENEFICIARY/ISSUER: .............................................................................................. 50 
21.3) TAT FOR RETURNS ON DEEMED APPROVED TRANSACTIONS ..................................... 50 
21.4) APPLICABILITY FOR RBI COMPENSATION .................................................................. 50 
23) 
NPCI COMPLIANCE PENALTY .................................................................................... 52 
22.1) TCC TRANSACTION CREDIT CONFIRMATION / RET RETURNS ..................................... 52 
22.2) DRC DEBIT REVERSAL CONFIRMATION ..................................................................... 52 
22.3) RRC REFUND REVERSAL CONFIRMATION ................................................................. 53 
22.4) NPCI NON-COMPLIANCE PENALTY WAIVER PROCESS .............................................. 55 
24) 
DISPUTES & ADJUSTMENTS ....................................................................................... 55 
23.1) CHARGEBACK COMPLIANCE POLICY ........................................................................ 57 
23.2) DISPUTE / ADJUSTMENT SETTLEMENT TIMINGS ......................................................... 58 
23.3) DISPUTE RESOLUTION MECHANISM & RESPONSIBILITIES ......................................... 59 
23.4) DISPUTE GUIDELINES ............................................................................................... 59 
23.5) ARBITRATION ........................................................................................................... 60 
23.6) WRONG CREDIT CHARGEBACK PROCESS (WC) ........................................................ 65 
23.7) FRAUD CHARGEBACK PROCESS (FC) ........................................................................ 65 
23.8) GENERIC GOOD FAITH CREDIT ADJUSTMENTS .......................................................... 65 
23.9) MASTER TABLE OF DISPUTES / ADJUSTMENT / STATUS UPDATE .................................. 68 
23.10) TYPES OF MANDATORY EVIDENCE TO REPRESENT DISPUTES .................................... 76 
23.11) EXCEPTION HANDLING ............................................................................................ 78 
25) 
SETTLEMENT CURRENCY .......................................................................................... 78 
26) 
HOLIDAY SETTLEMENT .............................................................................................. 78
```

<!-- PAGE 7 -->
# PAGE 7

[IMAGE_013]

![IMAGE_013](images/IMAGE_013.jpeg)

**IMAGE_013 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_014]

![IMAGE_014](images/IMAGE_014.png)

**IMAGE_014 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 7/158 
27) 
PROCESS FOR HANDLING TRANSACTIONS NOT SETTLED DUE TO DATA LOSS ........... 78 
26.1) PROCESS TO BE FOLLOWED BY NPCI ....................................................................... 79 
26.2) PROCESS TO BE FOLLOWED BY MEMBERS.................................................................. 79 
28) 
LIABILITY OF THE DEFAULTING MEMBER ................................................................... 79 
29) 
COMPLIANCE WITH UPI-OPERATING AND SETTLEMENT GUIDELINES ........................ 80 
30) 
CERTIFICATION FEES ................................................................................................ 80 
31) 
NETWORK FEES ........................................................................................................ 80 
32) 
DISASTER RECOVERY (DR) DRILLS COMPLIANCE ...................................................... 80 
33) 
ACCESS TO GST PORTAL ........................................................................................... 81 
34) 
MAINTAINING TRANSACTION RECORDS ................................................................... 81 
35) 
MONITORING & HELPDESK 24X7............................................................................... 81 
36) 
NPCI WEBSITE COMPLAINTS .................................................................................... 81 
37) 
NPCI HELP CENTER (CRM – CUSTOMER RELATIONSHIP MANAGEMENT) .................... 82 
38) 
UDIR – UNIFIED INTERFACE FOR DISPUTE RESOLUTION SYSTEM ............................... 82 
37.1) ReqChkTxn (EXISTING API - ENHANCED) ................................................................... 85 
37.2) ReqComplaint (NEW API) .......................................................................................... 86 
37.3) KEY ENABLEMENT .................................................................................................... 86 
37.4) LIST OF APIs FOR UDIR ............................................................................................. 87 
37.5) AUTO UPDATE IN UPI ................................................................................................ 88 
37.6) RECONCILIATION AND DISPUTE MANAGEMENT ........................................................ 88 
37.7) RAW FILES AND ADJUSTMENT REPORTS .................................................................... 89 
38) 
PII DATA (PERSON IDENTIFIER INFORMATION) ........................................................... 91 
39) 
PGP ENCRYPTION .................................................................................................... 91 
40) 
URCS RESET PASSWORD PROCESS, POLICY & SYSTEM REQUIREMENTS ................... 91 
40.1) RESET PASSWORD ................................................................................................... 91 
40.2) PASSWORD POLICY .................................................................................................. 91 
41) 
URCS SYSTEM REQUIREMENTS ................................................................................. 91 
42) 
ANNEXURES ............................................................................................................. 93 
42.1) DOCUMENTS FOR ON-BOARDING PARTICIPANT BANKS (ANNEXURE – 1) ................... 93 
42.2) COLLATERAL DEPOSIT SAMPLE FORMAT (ANNEXURE – 2) .......................................... 95 
42.3) URCS USER REQUEST FORM (ANNEXURE – 3) ........................................................... 96 
42.4) GST REGISTRATION DETAILS (ANNEXURE – 4) ............................................................ 97 
42.5) USER ID REQUEST FORM FOR INVOICE SHARING TOOL (ANNEXURE – 5) ................... 98 
42.6) ESCALATION MATRIX (ANNEXURE – 6) ....................................................................... 99 
42.7) OPERATING CIRCULAR LIST (ANNEXURE – 7) ........................................................... 100 
42.8) NTSL (ANNEXURE – 8) ............................................................................................. 110
```

<!-- PAGE 8 -->
# PAGE 8

[IMAGE_015]

![IMAGE_015](images/IMAGE_015.jpeg)

**IMAGE_015 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_016]

![IMAGE_016](images/IMAGE_016.png)

**IMAGE_016 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 8/158 
42.9) RAW FILE HEADER FORMAT (ANNEXURE – 9) ........................................................... 132 
42.10) ACQUIRER MERCHANT RAW DATA V3 (ANNEXURE – 10)........................................... 133 
42.11) ISSUER MERCHANT RAW DATA V3 (ANNEXURE – 11) ................................................ 133 
42.12) ACQUIRER RAW DATA V3 (ANNEXURE – 12) ............................................................. 133 
42.13) ISSUER RAW DATA V3 (ANNEXURE – 13) .................................................................. 133 
42.14) ACQUIRER PSP RAW DATA V3 (ANNEXURE – 14) ...................................................... 134 
42.15) ISSUER PSP RAW DATA V3 (ANNEXURE – 15) ............................................................ 134 
42.16) ADJUSTMENT REPORT (ANNEXURE – 16) ................................................................. 134 
42.17) GSTR (ANNEXURE - 17) ........................................................................................... 134 
42.18) GST INVOICE (ANNEXURE – 18) ............................................................................... 135 
42.19) RECEIVABLE SERVICE TAX REPORT (ANNEXURE – 19) .............................................. 136 
42.20) PAYABLE SERVICE TAX REPORT (ANNEXURE – 20) .................................................... 137 
42.21) BANK WISE PAYABLE REPORT (ANNEXURE – 21) ...................................................... 137 
42.22) DATE WISE PAYABLE REPORT (ANNEXURE – 22) ....................................................... 138 
42.23) BANK WISE RECEIVABLE REPORT (ANNEXURE – 23) ................................................. 139 
42.24) DATE WISE RECEIVABLE REPORT (ANNEXURE – 24) ................................................. 139 
42.25) ACCOUNT TYPE (ANNEXURE – 25) ........................................................................... 140 
42.26) INITIATION MODE (ANNEXURE – 26) ........................................................................ 140 
42.27) PURPOSE CODE (ANNEXURE – 27) .......................................................................... 141 
42.28) LITE BALANCE REPORT (ANNEXURE – 28) ................................................................ 143 
42.29) ADJUSTMENT REASON CODES (ANNEXURE – 29)..................................................... 143 
42.30) DRC PENALTY PAYABLE REPORT (ANNEXURE – 30) .................................................. 153 
42.31) DRC PENALTY RECEIVABLE REPORT (ANNEXURE – 31) ............................................. 153 
42.32) TCC PENALTY PAYABLE REPORT (ANNEXURE – 32) ................................................... 154 
42.33) TCC PENALTY RECEIVABLE REPORT (ANNEXURE – 33) ............................................. 154 
42.34) RRC PENALTY PAYABLE REPORT (ANNEXURE – 34) ................................................... 154 
42.35) RRC PENALTY RECEIVABLE REPORT (ANNEXURE – 35) ............................................. 155 
42.36) AUTHORIZATION LETTER – RECOVERY OF NPCI CHARGES THROUGH RTGS 
SETTLEMENT / RBI CURRENT ACCOUNT FOR DIRECT BANK (ANNEXURE – 37) .................... 156 
42.37) AUTHORIZATION LETTER – RECOVERY OF NPCI CHARGES THROUGH RTGS 
SETTLEMENT / RBI CURRENT ACCOUNT FOR SUB-MEMBER BANK (ANNEXURE – 38) .......... 157 
42.38) DECLARATION FOR FULFILMENT OF GOODS/SERVICES TO CUSTOMER (ANNEXURE – 
39) 
158
```

<!-- PAGE 9 -->
# PAGE 9

[IMAGE_017]

![IMAGE_017](images/IMAGE_017.jpeg)

**IMAGE_017 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_018]

![IMAGE_018](images/IMAGE_018.png)

**IMAGE_018 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 9/158 
 
1) PURPOSE 
Unified Payment Interface Operating and Settlement Guidelines (UPI-OSG) is a procedural document 
that defines the operating and settlement guidelines for the members of the UPI network to follow. It 
mandates all the members on the UPI network to follow certain standard procedures to ensure smooth, 
secure, and effective operation of the network. 
2) AUDIENCE 
UPI-OSG is to be used by all the members participating in the UPI network along with the relevant 
internal teams at NPCI. 
3) CONTENTS 
UPI-OSG contains detailed information on Operating & Settlement guidelines for the members of the 
UPI group of services to follow. The information is organized in a manner to enable users to find the 
information swiftly and easily. The table of contents clearly elucidates all information in UPI-OSG 
through a numbered section-wise break up.  
Circulars/Guidelines issued from time to time and UPI Operating & Settlement Guidelines forms an 
integral part of UPI-PG. This document will be updated annually. 
4) INTRODUCTION 
Prior to 2016, India used several different systems to transfer money between banks. The traditional 
forms included RTGS, IMPS and NEFT. With the plethora of systems, rules and growing paper burden, 
there was a need for a unified system that could automate and standardise India’s payment platforms. 
In 2016, NPCI set out with a mandate to change the face of India’s payment systems. It developed the 
Unified Payments Interface (UPI) as an architecture framework with a set of standard Application 
Programming Interface (API) specifications to facilitate online payments. The aim was to simplify and 
provide a single interface across all NPCI systems, thereby creating interoperability and a superior 
customer experience. The pilot program, with 21 member banks, was launched on 11th April 2016, by 
Dr. Raghuram G. Rajan, Governor, RBI, in Mumbai. From 25th August 2016, a growing number of banks 
started to upload their UPI enabled apps to the Google Play store. 
UPI’s core function is to support easy and secure money transfers between bank accounts. It does this 
by adding multiple bank accounts into a single mobile application, allowing for seamless fund transfers 
and merchant payments from one place. It also enables ‘peer to peer’ and ‘peer to merchant’ collection 
requests, which can be scheduled and paid as requested. Payments can be made using a UPI ID, UPI 
Number, Account number, and an Indian Financial System Code (IFSC). Payment security is as per 
applicable RBI guidelines using a 1-click 2-factor authentication where the second factor of 
authentication is the UPI PIN. UPI is also available through the Unstructured Supplementary Services 
Data (USSD) channel to enable UPI members to cater to users of feature phones. 
Any entity mentioned below can play a part under UPI ecosystem.
```

**Machine-readable table extraction(s) for PAGE 9**

#### TABLE_009_01 (source extraction: `page009_table01.csv`)

|In 2016, NPCI set out with a mandate to change the face of India’s payment systems. It developed the|
|---|
|Unified Payments Interface (UPI) as an architecture framework with a set of standard Application|
|Programming Interface (API) specifications to facilitate online payments. The aim was to simplify and|
|provide a single interface across all NPCI systems, thereby creating interoperability and a superior|
|customer experience. The pilot program, with 21 member banks, was launched on 11th April 2016, by|
|Dr. Raghuram G. Rajan, Governor, RBI, in Mumbai. From 25th August 2016, a growing number of banks|
|started to upload their UPI enabled apps to the Google Play store.|
|UPI’s core function is to support easy and secure money transfers between bank accounts. It does this|
|by adding multiple bank accounts into a single mobile application, allowing for seamless fund transfers|
|and merchant payments from one place. It also enables ‘peer to peer’ and ‘peer to merchant’ collection|
|requests, which can be scheduled and paid as requested. Payments can be made using a UPI ID, UPI|
|Number, Account number, and an Indian Financial System Code (IFSC). Payment security is as per|
|applicable RBI guidelines using a 1-click 2-factor authentication where the second factor of|
|authentication is the UPI PIN. UPI is also available through the Unstructured Supplementary Services|
|Data (USSD) channel to enable UPI members to cater to users of feature phones.|
|Any entity mentioned below can play a part under UPI ecosystem.|

<!-- PAGE 10 -->
# PAGE 10

[IMAGE_019]

![IMAGE_019](images/IMAGE_019.jpeg)

**IMAGE_019 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_020]

![IMAGE_020](images/IMAGE_020.png)

**IMAGE_020 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 10/158 
1. The banking entities have two major roles to play, one is as Payment Service provider (PSP’s) and 
another as a Bank/PPIs (for all debits / credits). 
2. Banks & payment banks having mobile banking license (RBI approval) and enabled on IMPS are 
eligible for UPI. 
3. They can be on-board as Issuer only or Issuer & Acquirer provided banks have Mobile banking 
license. Regional Rural Banks (RRBs) and Co-Operative banks having mobile banking license can 
on-board as issuers or issuers and acquirers, after going live on IMPS. 
4. Banks can have more than one PSP app, but they should complete their issuer certification before 
getting on boarded as acquirer. 
5. PPIs having valid license from the RBI can also participate in UPI directly (need not be necessarily 
live on IMPS) 
5) NON-DISCLOSURE AGREEMENT 
All members participating in the UPI network should sign a non-disclosure agreement with NPCI. Each 
member should treat UPI related documents as strictly confidential and should not disclose these 
documents to other parties without prior written permission from NPCI. Failing to comply with this 
would invite penal actions. 
 
6) ROLE OF NPCI AS SETTLEMENT AGENCY 
RBI accorded Type-D Membership of RTGS system to process settlement transactions through NPCI’s 
RTGS Gateway. NPCI would act as a clearing and settlement agency for the settlement of inter-bank 
transactions between the Remitting and the beneficiary members participating in the UPI network. RBI 
has accorded Type-D membership of the RTGS System to NPCI, permitting NPCI to process settlement 
instructions through NPCI’s RTGS gateway. NPCI acts as a clearing and settlement agency for inter-
bank transactions between UPI members: 
1. For the required funds, NPCI will submit member-wise net settlement obligations through RBI’s 
settlement system to be applied in the settlement account or the current account of the members 
that are maintained with RBI. NPCI will prepare the summary level data of UPI transactions 
settlement cycle wise. 
2. Daily settlement instructions (cycle-wise) will be executed through the NPCI RTGS system.
```

**Machine-readable table extraction(s) for PAGE 10**

#### TABLE_010_01 (source extraction: `page010_table01.csv`)

|1. The banking entities have two major roles to play, one is as Payment Service provider (PSP’s) and|
|---|
|another as a Bank/PPIs (for all debits / credits).|
|2. Banks & payment banks having mobile banking license (RBI approval) and enabled on IMPS are|
|eligible for UPI.|
|3. They can be on-board as Issuer only or Issuer & Acquirer provided banks have Mobile banking|
|license. Regional Rural Banks (RRBs) and Co-Operative banks having mobile banking license can|
|on-board as issuers or issuers and acquirers, after going live on IMPS.|
|4. Banks can have more than one PSP app, but they should complete their issuer certification before|
|getting on boarded as acquirer.|
|5. PPIs having valid license from the RBI can also participate in UPI directly (need not be necessarily|
|live on IMPS)|

<!-- PAGE 11 -->
# PAGE 11

[IMAGE_021]

![IMAGE_021](images/IMAGE_021.jpeg)

**IMAGE_021 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_022]

![IMAGE_022](images/IMAGE_022.png)

**IMAGE_022 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 11/158 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
7) ENTERPRISE FRAUD RISK MANAGEMENT (EFRM) 
Enterprise Fraud Risk Management (EFRM) system is 24X7 fraud monitoring solution provided to all 
member banks as a value-added service. Some of the key functionalities of this tool are as follows: 
1. It provides real time feed with the capability to alert & decline transactions based on predefined 
rules. 
2. While NPCI has already built default rules, Banks have the option to set custom rules based on 
perceived risks. 
3. The tool comes with a scoring methodology based on AI & ML wherein every transaction is given a 
model score. 
4. The tool also functions as a real time fraud reporting mechanism wherein the Bank user can select 
the appropriate transaction & tag it as fraud or genuine in real time manner. 
5. This tool does not require any hardware or additional infrastructure to be built by Bank & NPCI 
provides this as a value-added tool for its member banks through secured web-based access. 
NPCI will be maintaining the negative list of VPA/UPI IDs numbers for which the transactions will be 
blocked at UPI. 
NPCI - 
Clearing and 
Settlement 
Agent URCS 
Remitting 
Members 
Beneficiary 
Members 
UPI Switch 
UPI Switch 
RBI accorded Type-D Membership of RTGS system to process 
settlement transactions through NPCI’s RTGS Gateway  
 
Payer PSP 
Inter-Bank Transactions 
 
Payee PSP
```

<!-- PAGE 12 -->
# PAGE 12

[IMAGE_023]

![IMAGE_023](images/IMAGE_023.jpeg)

**IMAGE_023 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_024]

![IMAGE_024](images/IMAGE_024.png)

**IMAGE_024 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 12/158 
 
8) PRODUCTS & SERVICES 
UPI provides the following capabilities through a set of Application Programming Interfaces (APIs) 
1. Using a personal mobile as the primary device for all payments, including person to person, person 
to entity, and entity to person. 
2. Using a personal mobile to ‘Pay’ someone (push) as well as ‘Collect’ from someone (pull). 
3. Using a mobile number, credit card and account number in a unified way. In addition, the ability to 
pay and collect using ‘UPI IDs’ that are ‘aliases’ to the VPA. 
4. Making payments by providing an address without having to ever provide account details or 
credentials on third party applications or websites. 
5. Sending ‘collect’ requests to others (person to person or entity to person) with a ‘pay by’ date, which 
allows customers to pay at a later date without blocking the money in the account. 
6. Pre-authorising multiple recurring payments (utilities, school fees, subscriptions, etc.) with a one-
time secure authentication and rule-based access. 
7. Enabling all PSPs to use a standard set of APIs for any-to-any push and pull payments. 
8. Using PSP bank’s sponsored UPI applications, which enable payments from any account using a 
UPI ID by entering the UPI PIN. 
9. Using a fully interoperable system across all PSPs without having silos and closed systems. 
10. Making payments with one-click two-factor authentication, using a personal phone, and without 
any acquiring devices or physical tokens. 
 
 
 
 
 
•A customer can make a pay request by ‘pushing’ funds to the beneficiary using their
Account Number/IFSC, Mobile Number/MMID, and UPI ID, which is also known as a
Virtual Payment Address.
Bank enabled Pay Requests
•A customer can make a Collect Request transaction where the customer can ‘pull’.
funds from the remitter by using their UPI ID, which is known as a Virtual Payment
Address. In case of Pull transactions, the customer will have the option to define the
expiry time of the Collect Request (up to 45 days). In case the customer has not
defined the expiry time, the default time of 30 minutes will apply. The Payment System
Provider (PSP) has to provide a customer with the option of defining a minimum validity
of 1 minute, in case the customer is selecting an expiry time.
Bank enabled Collect Requests.
```

<!-- PAGE 13 -->
# PAGE 13

[IMAGE_025]

![IMAGE_025](images/IMAGE_025.jpeg)

**IMAGE_025 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_026]

![IMAGE_026](images/IMAGE_026.png)

**IMAGE_026 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 13/158 
 
 
 
 
•For UPI Intent based transactions, UPI users have the flexibility to make payments at
the time of online checkout by selecting from any of the UPI certified apps installed on
their mobile phones. The customer can conveniently make payments without
switching between applications. The moment a customer selects ‘Pay by UPI’ during
the check-out stage on a merchant app, all the UPI apps linked to the embedded
merchant app, or other UPI enabled apps that intend to initiate the payment, are
displayed. The customer can then select a preferred UPI enabled app, which opens
with the merchant’s payment details. The customer will then need to authenticate with
their UPI PIN to complete a secure transaction, or the payment will be declined.
UPI Intent based payments
•UPI autopay allows customers to set recurring payments for their UPI transactions.
Recurring payments up to ₹ 2,000/- can be set at the frequency desired. A one-time
authorisation needs to be provided by the customer.
UPI Autopay
•BHIM is a UPI enabled app that lets customers make simple payment transactions
quickly and easily. Customers can make instant bank-to-bank payments, pay and
collect money using just a mobile number or UPI ID, or scan and pay using a QR code.
Bharat Interface for Money (BHIM) app
```

<!-- PAGE 14 -->
# PAGE 14

[IMAGE_027]

![IMAGE_027](images/IMAGE_027.jpeg)

**IMAGE_027 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_028]

![IMAGE_028](images/IMAGE_028.png)

**IMAGE_028 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 14/158 
 
•Based on current trends, it is estimated that a large percentage of future digital 
payment transactions will be of low-value transactions below ₹ 500/-. UPI Lite is a new 
customer-friendly pre-approved payment solution that utilises existing protocols to 
enable these low value transactions without placing transaction traffic loads on core 
banking systems in real-time. Issuing banks can allocate a refillable ‘on-device stored 
wallet’ for their existing UPI app using customers who opt for UPI Lite. As per current 
mandates, a ‘stored wallet’ balance limit of ₹ 2,000/- is available, which the customer 
can use for offline transactions below ₹ 500/- and replenish as necessary from a UPI 
linked bank account. For transactions and on-device wallet refills, UPI PIN is required. 
For UPI Lite services, customer opt-in consent is required. Few key features are : 
Balance available on home screen, Top-up when prompted, 1FA transactions (device 
biometric / pattern validation for transaction authentication to be provided), Disable 
UPI Lite services (Residual balances are credited back to the customer). With UPI Lite 
X, customer can make offline payments even in places with bad connectivity and poor 
networks. NFC is used for communication in LITE X offline transactions.
UPI Lite and Lite X (Offline)
•This service is designed to be more inclusive and reach over 400 million feature phone 
users in the country. The service uses an account number and phone number while 
leveraging Dual Tone Multi-Frequency (DTMF) signalling technology and follows the 
UPI two-factor authentication protocol for transactions.
UPI 123 Pay
•Customers can provide their UPI ID as a payment option while subscribing to IPOs on 
the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE). All they need 
to do is tell their brokers to provide their UPI ID as the payment option while making the 
IPO application. Customers can enjoy the instant fund transfer experience of UPI while 
subscribing to an IPO Instant mandate creation ensures real-time application 
submission Customer support for transaction-related issues.
UPI for ASBA (IPO)
```

<!-- PAGE 15 -->
# PAGE 15

[IMAGE_029]

![IMAGE_029](images/IMAGE_029.jpeg)

**IMAGE_029 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_030]

![IMAGE_030](images/IMAGE_030.png)

**IMAGE_030 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 15/158 
 
 
 
 
•Based on registered mobile number, Rupay Credit Card from the issuer bank is linked
to UPI ID. Post linking the card, customer will be able to make payment to a merchant
by scanning the UPI QR code. Payment authentication will be done using UPI PIN.
Cash withdrawal at merchant, P2P, P2PM, card to card payments will not be
permitted through this functionality. Transaction through this process will follow UPI
standard transaction limits. AutoPay and dispute resolution will be available for the
customer via ODR/UDIR (UPIHelp) through UPI Apps.
Rupay Credit Card on UPI
•Interoperable Cardless Cash Withdrawal (ICCW) service facilitates participating bank’s
customers who are live on UPI, to withdraw cash from any participating banks’ ATMs (ICCW
enabled) without using their card. Once the customer selects the option ‘UPI cash withdrawal’
at the ATM, customer shall be prompted to enter the withdrawal amount. After entering the
amount, a single use dynamic QR code (signed) shall be displayed on the ATM screen.
Customer needs to scan the QR code using any UPI APP* and authorize the transaction with
UPI PIN on the mobile (UPI APP) to get cash from the ATM. Transaction limit is up to ₹ 10,000/-
per transaction. It shall be part of the existing UPI per day limit and as per the limits set by
Issuer Bank for UPI-ATM transactions. Customers can withdraw cash from multiple accounts
using UPI APP.
Interoperable Cardless Cash Withdrawal
•*99#, a USSD based mobile banking service of NPCI was initially launched in November 2012,
available for non-internet based mobile devices (smartphone as well as basic phones ) in the
form of dialing option (*99# ) and is known as USSD 2.0. This functionality i.e. USSD 2.0 is
launched along with BHIM on 30th December 2016. *99# service is currently offered by 83
leading banks & all GSM service providers and can be accessed in 13 different languages
including Hindi & English.
*99#
•UPI One World is a slice of the UPI experience crafted for inbound travellers (foreign
nationals/NRIs). It is the Prepaid payment instrument linked to UPI provided to foreign
nationals/ NRIs coming from G20 countries provided from PPI Issuers at any location which is
permitted to perform money exchange operations in accordance with RBI / FEMA guidelines.
UPI One World
```

<!-- PAGE 16 -->
# PAGE 16

[IMAGE_031]

![IMAGE_031](images/IMAGE_031.jpeg)

**IMAGE_031 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_032]

![IMAGE_032](images/IMAGE_032.png)

**IMAGE_032 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 16/158 
 
 
 
 
8.1) 
FINANCIAL TRANSACTIONS 
UPI supports the following financial transactions. 
 
 
 
 
 
 
 
 
 
 
 
 
 
•User experience can be made easy and simple where users can navigate inside the
UPI App in regional Indian languages using voice. Also, users can make payments on
telecom calls by conversing in one’s language. Beneficial for in-app smart navigation,
sr. citizens, digitally illiterate and visually impaired.
Hello! UPI
•Pre-sanctioned Credit Line at Banks through UPI is an innovative financial offering
designed to revolutionize the lending landscape. Leveraging advanced technologies
such as data analytics and artificial intelligence, banks can identify credit line
opportunities for customers and merchants engaged in significant UPI-based digital
payments. Since the customer is going to use UPI in which customer is always
connected, available real-time, the banks can start from the low-ticket credit lines
and go higher up based on consumer behaviour and repayment patterns.
Credit Line on UPI
•A Pay Request is a transaction where the initiating customer is pushing
funds to the beneficiary using Account Number/IFSC, Mobile No/MMID,
and UPI ID, QR, UPI Number etc.
Pay Request
•A Collect Request is a transaction where the customer is pulling funds
from the remitter by using UPI ID known as Virtual Address. In case of
Pull transactions, customer will have option to define the expiry time of
collect request (up to 45 days). In case customer has not defined the
expiry time, the default time should be taken as 30 minutes. The PSP has
to provide an option to customer to define minimum validity of 1 minute,
in case customer is selecting expiry time.
Collect Request
```

<!-- PAGE 17 -->
# PAGE 17

[IMAGE_033]

![IMAGE_033](images/IMAGE_033.jpeg)

**IMAGE_033 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_034]

![IMAGE_034](images/IMAGE_034.png)

**IMAGE_034 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 17/158 
8.2) 
TYPE OF TRANSACTIONS 
UPI supports P2P, P2PM and P2M transactions. 
 
8.3) 
TRANSACTION AMOUNT LIMITS 
Refer below table for Transaction Amount limit details 
TXN Type 
Per TXN amount 
limit 
UPI 
₹ 1,00,000/- 
a) MCC - Hospitals and educational services (OC 185) 
b) Tax Payment MCC – 9311 (OC 185A) 
c) IPO (Purpose Code 01) & RDS (Purpose Code 25) MCC – 
6211 
d) The overall UPI inward credit to a P2P transaction is 50 
TXN in 24 hrs. 
e) If the TXN value is greater than Rs 2000 then it shall be 
further limited to 25 transaction or Rs 4 lakh 
f) Capital Market MCC 6211 / Collections MCC – 7322 / 
Insurance MCC – 5960, 6300, 6529 / FIR Initiation Mode – 
12 / Preapproved disbursement Purpose Code 15 
Note: Refer OC 82, 127, 181A&B, 185, 185A for details 
a) ₹ 5,00,000/- 
b) ₹ 5,00,000/- 
c) ₹ 5,00,000/- 
d) NA 
e) NA 
f) ₹ 2,00,000/- 
UPI 123 Pay 
₹ 10,000/- 
UPI Lite 
₹ 1,000/- 
UPI Lite Top up 
₹ 2,000/- 
UPI Lite X 
₹ 500/- 
ICCW 
₹ 10,000/- 
 
•P2P Transactions are fund transfer from one Person to Person another,
identified with MCC-0000.
P2P – Peer to Peer Transactions (U3 & UC)
•P2PM Transactions are payments done by Customer to Small Merchants
with MCC-7407. Refer NPCI operating circular vide ref: NPCI/UPI/2019-
20/70 dated Jun 17, 2019 for details.
P2PM – Peer to Small Offline Merchant Transactions
(Merchant registered with MCC -7407) (U2)
•P2M Transactions are payments done by Customer to Merchants with
MCCs other than 0000 and 7407.
P2M – Peer to Merchant Transactions (U2)
```

**Machine-readable table extraction(s) for PAGE 17**

#### TABLE_017_01 (source extraction: `page017_table01.csv`)

|TXN Type|Per TXN amount<br>limit|
|---|---|
|UPI|₹ 1,00,000/-|
|a) MCC - Hospitals and educational services (OC 185)<br>b) Tax Payment MCC – 9311 (OC 185A)<br>c) IPO (Purpose Code 01) & RDS (Purpose Code 25) MCC –<br>6211<br>d) The overall UPI inward credit to a P2P transaction is 50<br>TXN in 24 hrs.<br>e) If the TXN value is greater than Rs 2000 then it shall be<br>further limited to 25 transaction or Rs 4 lakh<br>f) Capital Market MCC 6211 / Collections MCC – 7322 /<br>Insurance MCC – 5960, 6300, 6529 / FIR Initiation Mode –<br>12 / Preapproved disbursement Purpose Code 15<br>Note: Refer OC 82, 127, 181A&B, 185, 185A for details|a) ₹ 5,00,000/-<br>b) ₹ 5,00,000/-<br>c) ₹ 5,00,000/-<br>d) NA<br>e) NA<br>f) ₹ 2,00,000/-|
|UPI 123 Pay|₹ 10,000/-|
|UPI Lite|₹ 1,000/-|
|UPI Lite Top up|₹ 2,000/-|
|UPI Lite X|₹ 500/-|
|ICCW|₹ 10,000/-|

<!-- PAGE 18 -->
# PAGE 18

[IMAGE_035]

![IMAGE_035](images/IMAGE_035.jpeg)

**IMAGE_035 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_036]

![IMAGE_036](images/IMAGE_036.png)

**IMAGE_036 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 18/158 
9) PARTIES INVOLVED AND PROCESS FLOW 
Below are the various parties involved in a UPI transaction 
NPCI - NPCI is the owner, network operator, service provider, and coordinator of the UPI 
Banks - Banks or PPIs should broadly perform the functions/roles mentioned below : 
a. Payer PSP - Member bank as a Payer PSP can onboard a customer into a UPI app, allowing the 
customer to register for UPI services and provide options to approve a financial transaction or 
non-financial request wherever necessary. 
b. Payee PSP - A bank in the role of Payee PSP can onboard a customer/merchant to receive 
money or raise a collect request. This is also known as a beneficiary/resolving PSP. 
c. Remitter Bank - All UPI users need to have a banking account with a UPI enabled bank. While 
performing a transaction, the user’s bank account will be debited. The remitting bank also holds 
the responsibility of authenticating the UPI PIN set by the customer. 
d. Beneficiary Bank - Any credit going to a UPI user will be credited to a beneficiary’s bank 
account. The bank receiving the funds in UPI transactions will be acting as a beneficiary bank. 
Bank Account holders / Customers - Any customer who is on-boarded by a bank with a UPI enabled 
account and a UPI ID can utilize the services. 
Merchants - Participating merchants are those who are on-boarded by their banks to accept UPI 
enabled payments from customers. 
Corporates - UPI also provides the ability for large technology companies, 3rd party processors, and 
aggregators to connect to banks and provide extensive services to end consumers. 
10) ON-BOARDING OF MEMBER BANKS 
Once the member banks are on-boarded in UPI switch by NPCI after successfully completing the 
certification, NPCI will on-board the member bank in UPI back-office system i.e. URCS as per the below 
process. 
a. RMs provide the CFLOW access to the participant banks with NPCI on-boarding system wherein 
bank should login and upload all the documents applicable for on-boarding the bank in URCS.  
b. RMs should liaise with participant member bank and get the required documents uploaded in 
CFLOW. 
c. CFLOW routes the on-boarding request to the operations team. 
d. Operations team will check the on-boarding requests in CFLOW assigned to the operations and 
verify the documents. 
e. If the documents are incomplete, incorrect, not legible etc. will be returned back to the bank for 
necessary corrections through the same CFLOW. 
f. If all the documents are correct and as per the checklist then operations team on-board the bank in 
URCS and notify in CFLOW. 
g. After on boarding the bank in URCS, system should create the user ID, password and send the same 
to the bank through email automatically. 
h. Member banks are given with maker admin and check admin user credentials. Member bank can 
create the user ids for the team and also can manage to reset, modify, delete the user 
IDs/passwords. 
i. 
Member bank can login to the system on daily basis and manage the day-to-day operations.
```

<!-- PAGE 19 -->
# PAGE 19

[IMAGE_037]

![IMAGE_037](images/IMAGE_037.jpeg)

**IMAGE_037 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_038]

![IMAGE_038](images/IMAGE_038.png)

**IMAGE_038 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 19/158 
S. No 
Checklist 
Direct Bank Sub-Member 
1 
Go Live letter on Bank Letter Head 
Yes 
Yes 
2 
OC 250 on Bank Letter Head (GST) 
Yes 
Yes 
3 
OC 269 on Bank Letter Head (GST - IP list 192,172,10 is not 
allotted) 
Yes 
Yes 
4 
NDC letter on Sponsor Bank Letter head 
Yes 
Yes 
5 
Admin User Form (only 1 Admin) 
Yes 
Yes 
6 
ORG ID in CFLOW (6 digits) 
Yes 
Yes 
7 
ACQ ID in CFLOW (6 digits) 
Yes 
Yes 
8 
ISS ID in CFLOW (NBIN) (6 digits) 
Yes 
Yes 
9 
Bank code in CFLOW 
Yes 
Yes 
10 
Risk Approval in CFLOW 
Yes 
Yes 
11 
LOA for Direct Member Bank 
Yes 
NA 
12 
IFSC Active status check in RTGS 
Yes 
NA 
Refer Annexures - 1 to 6 for on-boarding check-list documents. 
11) OFF-BOARDING OF BANKS FROM URCS 
Off-boarding process is initiated in the following scenarios, 
1. RBI informs NPCI about the directions under Section 35 A read with Section 56 of the Banking 
Regulation Act, 1949 through email and press release. 
2. NPCI stop the services for banks from UPI services due to any reason. 
3. Bank wants to withdraw from UPI services for any reason. 
Any bank falls under the termination from the UPI network then NPCI will disable the bank in UPI 
switch. However, NPCI will allow member bank to raise or resolve the disputes pertains to the previous 
days from the date of termination. Member banks should ensure to resolve all the disputes raised or 
received in URCS up to maximum TAT of all disputes i.e. 120 days. In case of any deviation the disputed 
amount should be adjusted in SGF (if required). NPCI will notify all the other UPI member banks about 
the termination of the bank for information and necessary actions through OC/email. 
12) SUB-MEMBERS IN THE UPI NETWORK 
NPCI facilitates participation of the sub-members in the UPI network subject to satisfaction of the 
following pre-membership criteria listed for sub-members:  
1. The sub-members would participate in the UPI network through their sponsor bank, which is a 
direct member of the UPI network. 
2. The sponsor bank should have a valid banking license issued by RBI. 
3. Sponsor banks have to take care of the material aspects relating to operational feasibility, risk 
mitigation, fund settlement, and collaterals before sponsoring any sub-members to the UPI 
network. However, sub-members have to adhere to all these factors through their sponsor bank as 
a compliance mandate while applying to join the UPI network.  
4. The settlement of transactions by sub-members would take place in the settlement accounts of 
the sponsor banks maintained at RBI. Under this arrangement, sponsor banks will assume
```

**Machine-readable table extraction(s) for PAGE 19**

#### TABLE_019_01 (source extraction: `page019_table01.csv`)

|S. No|Checklist|Direct Bank|Sub-Member|
|---|---|---|---|
|1|Go Live letter on Bank Letter Head|Yes|Yes|
|2|OC 250 on Bank Letter Head (GST)|Yes|Yes|
|3|OC 269 on Bank Letter Head (GST - IP list 192,172,10 is not<br>allotted)|Yes|Yes|
|4|NDC letter on Sponsor Bank Letter head|Yes|Yes|
|5|Admin User Form (only 1 Admin)|Yes|Yes|
|6|ORG ID in CFLOW (6 digits)|Yes|Yes|
|7|ACQ ID in CFLOW (6 digits)|Yes|Yes|
|8|ISS ID in CFLOW (NBIN) (6 digits)|Yes|Yes|
|9|Bank code in CFLOW|Yes|Yes|
|10|Risk Approval in CFLOW|Yes|Yes|
|11|LOA for Direct Member Bank|Yes|NA|
|12|IFSC Active status check in RTGS|Yes|NA|

<!-- PAGE 20 -->
# PAGE 20

[IMAGE_039]

![IMAGE_039](images/IMAGE_039.jpeg)

**IMAGE_039 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_040]

![IMAGE_040](images/IMAGE_040.png)

**IMAGE_040 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 20/158 
complete responsibility for the settlement of all transactions by sub-members. The sponsor bank 
should define transaction limits for its sub-member. 
5. For URCS access, maker and checker admin IDs will be sent to registered email IDs automatically. 
6. The sub-member should adhere to all the guidelines issued by NPCI, RBI, GoI, and/ or any other 
competent authorities. 
7. Sub-member should ensure daily reconciliation on T+0 or latest by T+1 and take care of all 
customer complaints/grievances for transactions routed through UPI network. 
8. The sponsor bank should inform NPCI in case of cessation of the sponsorship arrangement with its 
sub-members with prior notice of at least three months through necessary communication 
channels that are deemed appropriate as per the compliance mandate. 
9. The sponsor bank should inform NPCI for the following list of issues (if any), 
a. Any of its sub-members violating laws pertaining to Anti-Money Laundering (AML) as 
defined and articulated under the Prevention of Money-laundering Act (PMLA) 2002. 
b. Any violation of regulation as issued by the Financial Intelligence Unit, Government of 
India, and the Reserve Bank of India in connection to KYC/AML/CFT. 
c. Any involvement of its sub-members in any suspicious transactions and/or frauds 
d. Any of its sub-members resorting to any unfair practices relating to their participation in the 
UPI network. 
e. Any of its sub-members not adhering to the rules, regulations, operational requirements, 
and instructions of the UPI network. 
f. Any suit filed in any court of law or arbitration where a sub-member and NPCI have been 
made parties. 
g. Any fine, penalty and/ or sanction imposed by a regulator. 
The sponsor bank will be liable for all compliance by sub-members for all the guidelines issued by 
NPCI, RBI, GoI and all other relevant competent authorities. 
13) OPERATING PROCEDURE FOR MEMBERS 
All members participating in the UPI network should strictly abide by the UPI-OSG as published by the 
National Payments Corporation of India (NPCI). Further, the members should also comply with UPI 
Product Guidelines (PG), Operating Circulars (OCs) and/or instructions/guidelines issued by NPCI, RBI 
and any other competent authority from time to time. Refer Annexure - 7 for circulars released till date. 
14) SETTLEMENT GUIDELINES 
NPCI does the settlement for all the participant member banks (as Beneficiary & Remitter) for the 
services provided and availed in UPI system through RTGS settlement account. Settlement of direct 
banks are done through RTGS settlement account and for sub-members settlement is adjusted in their 
respective sponsor bank books. Once the settlement is netted between sponsor and sub-members 
final net settlement is processed in RTGS. 
14.1) 
SETTLEMENT ACCOUNT 
The settlement account for UPI transactions is the current account/RTGS settlement account 
maintained by all members with RBI through which the inter-bank transactions are routed in 
the day-to-day banking activity. At the time of on-boarding on UPI product, all members 
participating as Direct Members should issue a letter of authorization to RBI for booking 
settlements through NPCI and submit the RBI acknowledged copy to NPCI. Members
```

<!-- PAGE 21 -->
# PAGE 21

[IMAGE_041]

![IMAGE_041](images/IMAGE_041.jpeg)

**IMAGE_041 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_042]

![IMAGE_042](images/IMAGE_042.png)

**IMAGE_042 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 21/158 
participating as sub-members will have their settlements posted in the current account/RTGS 
settlement account of a Sponsor Bank (Direct Member) 
14.2) 
FUNDING THE RTGS SETTLEMENT ACCOUNT 
Member banks should analyze the settlement amount done through RTGS periodically and 
put proper process to fund the RTGS settlement account with sufficient balance so that 
settlement processed by NPCI should get successful and avoid short fall of funds which will 
lead to settlement failures for all banks. RTGS settlement is ALL or NONE basis, which means 
either settlement for all banks happens successfully, or it will fail even if there is shortfall of 
funds for one bank. 
14.3) 
SETTLEMENT MECHANISM 
This section outlines the procedures for settlement, a process by which NPCI, as the 
settlement agency, would credit/debit from the members’ settlement account maintained 
with RBI, the amount as per the Net Settlement Report (NTSL) as generated from URCS 
system. 
Before participating in the UPI network, all direct members should issue a letter of authority to 
RBI, authorizing the settlement agency (NPCI) to credit and debit their settlement account 
with RBI. 
UPI calculates the net debit/credit position based on the total beneficiary and remitter 
transactions for a particular member bank. In the case of net debit, the member has an 
obligation towards other members. Thus, it owes the amount equal to the net settlement 
amount to other members in the network. During the settlement process, NPCI debits the 
members, which are under net debit and credits the members which are under net credit.  
The settlement account is the RTGS account of members with RBI. In case the settlement 
account does not possess adequate funds, the net debit member would fail to fulfil its 
obligations, leading to a cascading effect on other members’ positions. Hence, the settlement 
process is governed under the Settlement Guarantee Mechanism communicated by NPCI from 
time to time which is applicable to all member banks. 
14.4) 
SETTLEMENT AND RECONCILIATION 
NPCI will process the daily cycle wise settlement for all approved and deemed approved 
transactions. For all such transactions interchange, PSP and switching fee is processed 
individual transaction wise and summaries in NTSL as consolidated level along with 
applicable GST. 
 
All members participating in the UPI network will receive the Settlement Files & Reports (Cycle 
wise) in URCS to perform daily reconciliation on T+0 or latest T+1. Banks have to download all 
the settlement files mandatorily, perform reconciliation and save these reports for future use, 
reference and records. Refer URCS User Guide version 1.0. Settlement files consist of all type 
of financial and non-financial transactions. 
 
The settlement files & reports should be made available in UPI Real-time Clearing & 
Settlement System (URCS) settlement cycle wise to Member banks. Members to submit ‘User
```

<!-- PAGE 22 -->
# PAGE 22

[IMAGE_043]

![IMAGE_043](images/IMAGE_043.jpeg)

**IMAGE_043 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_044]

![IMAGE_044](images/IMAGE_044.png)

**IMAGE_044 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 22/158 
request form’ to NPCI for creation of URCS ADMIN user ID at the time of on-boarding in UPI 
platform. Admin ID will have rights for creating maker/ checker IDs and unlocking or resetting 
passwords of respective bank users.  
 
The settlement will be done based on the NTSL file shared by UPI. This NTSL file contains the 
net settlement position of the member. Settlement reconciliation is a process where all 
members verify the accuracy of these transactions as listed in the settlement report. It is the 
responsibility of the members to reconcile daily all transactions taking place through UPI. Any 
loss arising due to not carrying out reconciliation on T+0 or latest by T+1 basis will be the 
liability of the respective banks. 
NPCI and UPI member banks exchange files through URCS system for reconciliation, 
settlement and dispute processing. NPCI uses PGP encryption standards to encrypt files 
(containing PII data) exchanged between NPCI and Member Banks, to ensure that data is 
protected. 
Acquiring banks should also have automated reconciliation process with aggregators and 
merchants for better and fast refunds processing mechanism. 
14.5) 
MODALITIES OF SETTLEMENT 
The following section explains UPI transaction wise settlement which includes Auth value and 
various types of fees viz. interchange fee, PSP fee & switching fee along with GST for the 
member banks. 
 
Once the lifecycle of the transaction is complete, NPCI UPI switch replicates the data to back-
office system URCS in real time. URCS applies the fee and GST along with transaction amount 
(debit/credit) for every individual approved/ deemed approved transaction.  
 
Net settlement amount is the sum of bank wise inward settlement less outward settlement 
plus net adjusted disputes amount and penalties if any. Thus, the net settlement amount is 
determined for each bank and push the entry in to MNSB file (Multilateral Net Settlement 
Batch) with bank IFSC, amount and debit or credit position. MNSB file will be moved to the 
RTGS portal, and all banks settlement will take place. 
 
14.6) 
SETTLEMENT AMOUNT, FEE RULES & RATES 
The UPI Steering committee reserves the right to amend the Switching fee, Interchange fee, 
PSP Fee and any other fee. Current fee applicable for transactions supported in UPI network is 
provided in tables given below. The fee settlement rules stated below are exclusive of GST. 
SWITCHING FEE 
Product Name 
Transaction 
Type 
Applicable 
Switching 
fees 
Payable 
by 
Latest 
Circular 
Base UPI 
(Includes - hello 
P2P  
Onus  
5 Paisa 
Remitter 
OC 195 
0-1000 
5 Paisa
```

**Machine-readable table extraction(s) for PAGE 22**

#### TABLE_022_01 (source extraction: `page022_table01.csv`)

|SWITCHING FEE||||||
|---|---|---|---|---|---|
|Product Name|Transaction|Type|Applicable<br>Switching<br>fees|Payable<br>by|Latest<br>Circular|
|Base UPI<br>(Includes - hello|P2P|Onus|5 Paisa|Remitter|OC 195|
|||0-1000|5 Paisa|||

<!-- PAGE 23 -->
# PAGE 23

[IMAGE_045]

![IMAGE_045](images/IMAGE_045.jpeg)

**IMAGE_045 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_046]

![IMAGE_046](images/IMAGE_046.png)

**IMAGE_046 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 23/158 
UPI, CL, tap & 
Pay, Plugin, 
SBMD) 
>1000 
20 Paisa 
cashback 
(5969 = Payer 
MCC) 
5 Paisa 
FIR (Domestic 
leg) - upto 
25,000 
1 Re 
OC 109 
FIR (Domestic 
leg) - above 
25,000 
5 Rs 
P2M - Industry 
Program 
Off us 
if<=Rs.1000 
25 Paisa 
OC 67A 
Off us if 
>Rs.1000 
50 Paisa 
Onus  
5 Paisa 
P2M - Non 
Industry Program 
(Small - offline 
merchant 
transactions) 
Onus 
5 Paisa 
Remitter 
OC 195 
Off us offline 
QR upto 
Rs.100 
5 Paisa 
For rest  
5 Paisa + 1 
bps (capped 
at Rs 5) 
1 bps 
(capped at 
Rs 5) 
Payee 
PSP 
P2M - Non 
Industry Program 
(Other than 
Small-offline 
merchant 
transactions) 
Onus 
5 Paisa 
Remitter 
Off us offline 
QR upto 
Rs.100 
5 Paisa 
For rest  
5 Paisa + 2 
bps (capped 
at Rs 5) 
2 bps 
(capped at 
Rs 5) 
Payee 
PSP 
P2PM 
Onus 
5 Paisa 
Remitter 
Off us offline 
QR upto 
Rs.100 
5 Paisa
```

**Machine-readable table extraction(s) for PAGE 23**

#### TABLE_023_01 (source extraction: `page023_table01.csv`)

|UPI, CL, tap &<br>Pay, Plugin,<br>SBMD)||>1000|20 Paisa|||
|---|---|---|---|---|---|
|||cashback<br>(5969 = Payer<br>MCC)|5 Paisa|||
|||FIR (Domestic<br>leg) - upto<br>25,000|1 Re||OC 109|
|||FIR (Domestic<br>leg) - above<br>25,000|5 Rs|||
||P2M - Industry<br>Program|Off us<br>if<=Rs.1000|25 Paisa||OC 67A|
|||Off us if<br>>Rs.1000|50 Paisa|||
|||Onus|5 Paisa|||
||P2M - Non<br>Industry Program<br>(Small - offline<br>merchant<br>transactions)|Onus|5 Paisa|Remitter|OC 195|
|||Off us offline<br>QR upto<br>Rs.100|5 Paisa|||
|||For rest|5 Paisa + 1<br>bps (capped<br>at Rs 5)|||
||||1 bps<br>(capped at<br>Rs 5)|Payee<br>PSP||
||P2M - Non<br>Industry Program<br>(Other than<br>Small-offline<br>merchant<br>transactions)|Onus|5 Paisa|Remitter||
|||Off us offline<br>QR upto<br>Rs.100|5 Paisa|||
|||For rest|5 Paisa + 2<br>bps (capped<br>at Rs 5)|||
||||2 bps<br>(capped at<br>Rs 5)|Payee<br>PSP||
||P2PM|Onus|5 Paisa|Remitter||
|||Off us offline<br>QR upto<br>Rs.100|5 Paisa|||

<!-- PAGE 24 -->
# PAGE 24

[IMAGE_047]

![IMAGE_047](images/IMAGE_047.jpeg)

**IMAGE_047 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_048]

![IMAGE_048](images/IMAGE_048.png)

**IMAGE_048 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 24/158 
For rest  
5 Paisa + 1 
bps (capped 
at Rs 5) 
1 bps 
(capped at 
Rs 5) 
Payee 
PSP 
Cash @ POS 
(Payee MCC = 
6010) 
Onus  
5 Paisa 
Remitter 
OC 195 
0-1000 
5 Paisa 
>1000 
20 Paisa 
One Time 
Mandate 
P2P  
Onus  
5 Paisa 
Remitter 
OC 195 
0-1000 
5 Paisa 
>1000 
20 Paisa 
cashback 
(5969 = Payer 
MCC) 
5 Paisa 
P2M 
Off us 
if<=Rs.1000 
25 Paisa 
OC 92 
Off us if 
>Rs.1000 
50 Paisa 
Onus  
5 Paisa 
E- Rupi 
Voucher 
redemption  
<=1000 
5 Paisa  
Remitter 
e-RUPI OC 
03 
5 Paisa 
Payee 
PSP 
1000-5000 
10 Paisa 
Remitter 
10 Paisa 
Payee 
PSP 
5000-10000 
20 Paisa 
Remitter 
20 Paisa 
Payee 
PSP 
PPIWALLET 
(Existing UPI 
pricing) 
P2P 
Onus  
5 Paisa 
Remitter 
No separate 
switching 
fees (OC 
195) 
0-1000 
5 Paisa 
>1000 
20 Paisa 
P2M* in Industry 
program 
Off us 
if<=Rs.1000 
25 Paisa 
Off us if 
>Rs.1000 
50 Paisa 
Onus  
5 Paisa 
P2M other than 
Industry Program 
Onus 
5 Paisa 
Off us offline 
QR upto 
Rs.100 
5 Paisa 
For rest  
5p + 0.02%  
0.02% 
Payee 
PSP 
Small Offline 
5p + 0.01%  
Remitter
```

**Machine-readable table extraction(s) for PAGE 24**

#### TABLE_024_01 (source extraction: `page024_table01.csv`)

|||For rest|5 Paisa + 1<br>bps (capped<br>at Rs 5)|||
|---|---|---|---|---|---|
||||1 bps<br>(capped at<br>Rs 5)|Payee<br>PSP||
||Cash @ POS<br>(Payee MCC =<br>6010)|Onus|5 Paisa|Remitter|OC 195|
|||0-1000|5 Paisa|||
|||>1000|20 Paisa|||
|One Time<br>Mandate|P2P|Onus|5 Paisa|Remitter|OC 195|
|||0-1000|5 Paisa|||
|||>1000|20 Paisa|||
|||cashback<br>(5969 = Payer<br>MCC)|5 Paisa|||
||P2M|Off us<br>if<=Rs.1000|25 Paisa||OC 92|
|||Off us if<br>>Rs.1000|50 Paisa|||
|||Onus|5 Paisa|||
|E- Rupi|Voucher<br>redemption|<=1000|5 Paisa|Remitter|e-RUPI OC<br>03|
||||5 Paisa|Payee<br>PSP||
|||1000-5000|10 Paisa|Remitter||
||||10 Paisa|Payee<br>PSP||
|||5000-10000|20 Paisa|Remitter||
||||20 Paisa|Payee<br>PSP||
|PPIWALLET<br>(Existing UPI<br>pricing)|P2P|Onus|5 Paisa|Remitter|No separate<br>switching<br>fees (OC<br>195)|
|||0-1000|5 Paisa|||
|||>1000|20 Paisa|||
||P2M* in Industry<br>program|Off us<br>if<=Rs.1000|25 Paisa|||
|||Off us if<br>>Rs.1000|50 Paisa|||
|||Onus|5 Paisa|||
||P2M other than<br>Industry Program|Onus|5 Paisa|||
|||Off us offline<br>QR upto<br>Rs.100|5 Paisa|||
|||For rest|5p + 0.02%|||
||||0.02%|Payee<br>PSP||
|||Small Offline|5p + 0.01%|Remitter||

<!-- PAGE 25 -->
# PAGE 25

[IMAGE_049]

![IMAGE_049](images/IMAGE_049.jpeg)

**IMAGE_049 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_050]

![IMAGE_050](images/IMAGE_050.png)

**IMAGE_050 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 25/158 
Transactions 
0.01% 
Payee 
PSP 
P2PM* 
QR TXN upto 
Rs.100 
5 Paisa  
Remitter 
On us  
5 Paisa  
All other 
transactions 
5 Paisa 
+0.01% 
0.01% 
Payee 
PSP 
UPI Lite 
P2P 
Off us 0-200 
3 Paisa 
Remitter 
OC 139 
On us 
3 Paisa 
P2M 
Off us 0-200 
2 Paisa 
1 Paisa 
Payee 
PSP 
On us 
3 Paisa 
Remitter 
UPI Autopay - 
Switching Fees 
P2M - Industry 
Program 
Off us 
if<=Rs.1000 
25 Paisa 
Remitter 
No separate 
switching 
fees (OC 
195) 
Off us if 
>Rs.1000 
50 Paisa 
Onus  
5 Paisa 
P2M – Non-
Industry Program 
Onus 
5 Paisa 
Remitter 
For rest  
5 Paisa + 2 
bps (capped 
at Rs 5) 
2 bps 
(capped at 
Rs 5) 
Payee 
PSP 
UPI AutoPay - 
Mandate 
Management 
Charges 
P2M - Special 
MCCs 
Mandate 
Management - 
Once in a 
Quarter 
5 Paisa 
Remitter 
5 Paisa 
Payee 
PSP 
OC 158 
P2M - All Other 
MCCs 
Mandate 
Management - 
Once in a 
Month 
5 Paisa 
Remitter 
5 Paisa 
Payee 
PSP 
RCC on UPI - 
Acquirer 
P2M – Non-
Industry Program 
Offline QR 
<100 
Zero 
- 
Follows 
existing 
Acquirer 
side SF - OC 
77 & OC 
67A 
All other 
transactions 
2 bps 
(capped at 
Rs 5) 
Payee 
PSP 
P2M - Industry 
Program 
All 
transactions 
Zero 
-
```

**Machine-readable table extraction(s) for PAGE 25**

#### TABLE_025_01 (source extraction: `page025_table01.csv`)

|||Transactions|0.01%|Payee<br>PSP||
|---|---|---|---|---|---|
||P2PM*|QR TXN upto<br>Rs.100|5 Paisa|Remitter||
|||On us|5 Paisa|||
|||All other<br>transactions|5 Paisa<br>+0.01%|||
||||0.01%|Payee<br>PSP||
|UPI Lite|P2P|Off us 0-200|3 Paisa|Remitter|OC 139|
|||On us|3 Paisa|||
||P2M|Off us 0-200|2 Paisa|||
||||1 Paisa|Payee<br>PSP||
|||On us|3 Paisa|Remitter||
|UPI Autopay -<br>Switching Fees|P2M - Industry<br>Program|Off us<br>if<=Rs.1000|25 Paisa|Remitter|No separate<br>switching<br>fees (OC<br>195)|
|||Off us if<br>>Rs.1000|50 Paisa|||
|||Onus|5 Paisa|||
||P2M – Non-<br>Industry Program|Onus|5 Paisa|Remitter||
|||For rest|5 Paisa + 2<br>bps (capped<br>at Rs 5)|||
||||2 bps<br>(capped at<br>Rs 5)|Payee<br>PSP||
|UPI AutoPay -<br>Mandate<br>Management<br>Charges|P2M - Special<br>MCCs|Mandate<br>Management -<br>Once in a<br>Quarter|5 Paisa|Remitter||
||||5 Paisa|Payee<br>PSP|OC 158|
||P2M - All Other<br>MCCs|Mandate<br>Management -<br>Once in a<br>Month|5 Paisa|Remitter||
||||5 Paisa|Payee<br>PSP||
|RCC on UPI -<br>Acquirer|P2M – Non-<br>Industry Program|Offline QR<br><100|Zero|-|Follows<br>existing<br>Acquirer<br>side SF - OC<br>77 & OC<br>67A|
|||All other<br>transactions|2 bps<br>(capped at<br>Rs 5)|Payee<br>PSP||
||P2M - Industry<br>Program|All<br>transactions|Zero|-||

<!-- PAGE 26 -->
# PAGE 26

[IMAGE_051]

![IMAGE_051](images/IMAGE_051.jpeg)

**IMAGE_051 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_052]

![IMAGE_052](images/IMAGE_052.png)

**IMAGE_052 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 26/158 
UOD 
P2M - Industry 
Program 
Off us 
if<=Rs.1000 
25 Paisa 
Remitter 
Follows 
existing 
Acquirer 
side SF - OC 
67A 
Off us if 
>Rs.1000 
50 Paisa 
Onus  
5 Paisa 
Follows 
existing 
Acquirer 
side SF - OC 
195 
P2M – Non-
Industry Program 
Onus 
5 Paisa 
Off us offline 
QR upto 
Rs.100 
5 Paisa 
For rest  
5 Paisa + 2 
bps (capped 
at Rs 5) 
2 bps 
(capped at 
Rs 5) 
Payee 
PSP 
 
INTERCHANGE FEE and PSP FEE 
Mode 
TXN 
Type 
ONUS/
OFFUS/ 
Cashba
ck 
PAY/COLLE
CT/CREATE 
Interc
hange 
FEE 
PSP 
Fee 
MCC 
Ini
tia
tio
n 
M
od
e 
Purpos
e Code 
Acc
t 
typ
e 
Financial 
P2P 
(U3, 
UC) 
ONUS / 
OFFUS 
PAY / 
COLLECT 
 
<=100:
:0.08 
>100 
and 
<=100
0 :: 
0.20 
>1000 
& <= 
25000 
:: 0.75 
>2500
0 :: 
3.75 
ONUS 
:: 0 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
:: 0.50 
0000 
An
y 
Any
```

**Machine-readable table extraction(s) for PAGE 26**

#### TABLE_026_01 (source extraction: `page026_table01.csv`)

|UOD|P2M - Industry<br>Program|Off us<br>if<=Rs.1000|25 Paisa|Remitter|Follows<br>existing<br>Acquirer<br>side SF - OC<br>67A|
|---|---|---|---|---|---|
|||Off us if<br>>Rs.1000|50 Paisa|||
|||Onus|5 Paisa||Follows<br>existing<br>Acquirer<br>side SF - OC<br>195|
||P2M – Non-<br>Industry Program|Onus|5 Paisa|||
|||Off us offline<br>QR upto<br>Rs.100|5 Paisa|||
|||For rest|5 Paisa + 2<br>bps (capped<br>at Rs 5)|||
||||2 bps<br>(capped at<br>Rs 5)|Payee<br>PSP||

#### TABLE_026_02 (source extraction: `page026_table02.csv`)

||INTERCHANGE FEE and PSP FEE|||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|
|Mode||TXN<br>Type|ONUS/<br>OFFUS/<br>Cashba<br>ck|PAY/COLLE<br>CT/CREATE|Interc<br>hange<br>FEE|PSP<br>Fee|MCC|Ini<br>tia<br>tio<br>n<br>M<br>od<br>e|Purpos<br>e Code|Acc<br>t<br>typ<br>e||
|Financial||P2P<br>(U3,<br>UC)|ONUS /<br>OFFUS|PAY /<br>COLLECT|<=100:<br>:0.08<br>>100<br>and<br><=100<br>0 ::<br>0.20<br>>1000<br>& <=<br>25000<br>:: 0.75<br>>2500<br>0 ::<br>3.75|ONUS<br>:: 0<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|0000|An<br>y|Any|||

<!-- PAGE 27 -->
# PAGE 27

[IMAGE_053]

![IMAGE_053](images/IMAGE_053.jpeg)

**IMAGE_053 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_054]

![IMAGE_054](images/IMAGE_054.png)

**IMAGE_054 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 27/158 
Financial 
P2P 
(U3, 
UC) 
ONUS/
OFFUS 
PAY /  
COLLECT 
 
<=100:
:0.1 
>100 
and 
<=100
0 :: 
0.25 
>1000 
& <= 
25000 
:: 1.00 
>2500
0 :: 
5.00 
ONUS 
:: 0 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
:: 0.50 
9999 
(Defa
ult 
MCC) 
An
y 
Any 
  
Financial 
P2P 
(U3, 
UC) 
CASHB
ACK- 
ONUS & 
OFFUS 
PAY 
<=100:
:0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
& <= 
25000 
:: 1.00 
>2500
0 :: 
5.00 
ONUS 
0.00 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
:: 0.50 
5969 
  
  
  
Financial 
P2P 
(U3, 
UC) 
ONUS / 
OFFUS 
PAY 
<=100:
:0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
& <= 
25000 
:: 1.00 
>2500
0 :: 
5.00 
ONUS 
0 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
:: 0.50 
9999 
(Defa
ult 
MCC) 
12 
0 
  
Financial 
P2P 
(U3, 
UC) 
ONUS / 
OFFUS 
PAY 
 
<=100:
:0.08 
>100 
and 
<=100
0 :: 
0.20 
ONUS 
0 
OFFU
S 
<=100
::0.10 
>100 
and 
0000 
12 
0
```

**Machine-readable table extraction(s) for PAGE 27**

#### TABLE_027_01 (source extraction: `page027_table01.csv`)

|Financial|P2P<br>(U3,<br>UC)|ONUS/<br>OFFUS|PAY /<br>COLLECT|<=100:<br>:0.1<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>& <=<br>25000<br>:: 1.00<br>>2500<br>0 ::<br>5.00|ONUS<br>:: 0<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|9999<br>(Defa<br>ult<br>MCC)|An<br>y|Any||
|---|---|---|---|---|---|---|---|---|---|
|Financial|P2P<br>(U3,<br>UC)|CASHB<br>ACK-<br>ONUS &<br>OFFUS|PAY|<=100:<br>:0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>& <=<br>25000<br>:: 1.00<br>>2500<br>0 ::<br>5.00|ONUS<br>0.00<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|5969||||
|Financial|P2P<br>(U3,<br>UC)|ONUS /<br>OFFUS|PAY|<=100:<br>:0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>& <=<br>25000<br>:: 1.00<br>>2500<br>0 ::<br>5.00|ONUS<br>0<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|9999<br>(Defa<br>ult<br>MCC)|12|0||
|Financial|P2P<br>(U3,<br>UC)|ONUS /<br>OFFUS|PAY|<=100:<br>:0.08<br>>100<br>and<br><=100<br>0 ::<br>0.20|ONUS<br>0<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and|0000|12|0||

<!-- PAGE 28 -->
# PAGE 28

[IMAGE_055]

![IMAGE_055](images/IMAGE_055.jpeg)

**IMAGE_055 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_056]

![IMAGE_056](images/IMAGE_056.png)

**IMAGE_056 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 28/158 
>1000 
& <= 
25000 
:: 0.75 
>2500
0 :: 
3.75 
<=100
0 :: 
0.25 
>1000 
:: 0.50 
Financial 
P2M 
(U2) 
OFFUS 
PAY /  
COLLECT 
0 
0 
  
01 
02 
15 
16 
17 
  
  
Financial 
P2M 
(U2) 
OFFUS 
PAY /  
COLLECT 
0 
0 
  
00 
03 
04 
05 
06 
07 
08 
09 
10 
12 
14 
18 
19 
20 
  
  
Financial 
P2M 
(U2) 
OFFUS 
PAY /  
COLLECT 
OFFU
S & 
ONUS 
1.5% 
(PYE) 
of txn 
amou
nt 
ONUS 
- 0.00 
OFFU
S -  
<=100
::0.10 
(PYE) 
>100 
and 
<=100
0 :: 
0.25 
(PYE) 
>1000 
:: 0.50 
(PYE) 
9999 
An
y 
  
UO
D 
Financial 
P2M 
(U2) 
ONUS & 
OFFUS 
PAY / 
COLLECT 
OFFU
S & 
ONUS 
1.5% 
(PYE) 
of txn 
amou
nt 
ONUS 
- 0.00 
OFFU
S -  
<=100
::0.10 
(PYE) 
>100 
and 
6010 
An
y 
  
UO
D
```

**Machine-readable table extraction(s) for PAGE 28**

#### TABLE_028_01 (source extraction: `page028_table01.csv`)

|||||>1000<br>& <=<br>25000<br>:: 0.75<br>>2500<br>0 ::<br>3.75|<=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|||||
|---|---|---|---|---|---|---|---|---|---|
|Financial|P2M<br>(U2)|OFFUS|PAY /<br>COLLECT|0|0||01<br>02<br>15<br>16<br>17|||
|Financial|P2M<br>(U2)|OFFUS|PAY /<br>COLLECT|0|0||00<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>10<br>12<br>14<br>18<br>19<br>20|||
|Financial|P2M<br>(U2)|OFFUS|PAY /<br>COLLECT|OFFU<br>S &<br>ONUS<br>1.5%<br>(PYE)<br>of txn<br>amou<br>nt|ONUS<br>- 0.00<br>OFFU<br>S -<br><=100<br>::0.10<br>(PYE)<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>(PYE)<br>>1000<br>:: 0.50<br>(PYE)|9999|An<br>y||UO<br>D|
|Financial|P2M<br>(U2)|ONUS &<br>OFFUS|PAY /<br>COLLECT|OFFU<br>S &<br>ONUS<br>1.5%<br>(PYE)<br>of txn<br>amou<br>nt|ONUS<br>- 0.00<br>OFFU<br>S -<br><=100<br>::0.10<br>(PYE)<br>>100<br>and|6010|An<br>y||UO<br>D|

<!-- PAGE 29 -->
# PAGE 29

[IMAGE_057]

![IMAGE_057](images/IMAGE_057.jpeg)

**IMAGE_057 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_058]

![IMAGE_058](images/IMAGE_058.png)

**IMAGE_058 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 29/158 
<=100
0 :: 
0.25 
(PYE) 
>1000 
:: 0.50 
(PYE) 
Financial 
P2M 
(U2) 
ONUS & 
OFFUS 
PAY /  
COLLECT 
0 
0 
9400 
  
  
  
Financial 
P2M 
(U2) 
  
  
0 
0 
6211 
4111 
4112 
8211 
8241 
8220 
8244 
8249 
9311 
9222 
9399 
9405 
9211 
6529 
7322 
5960 
0820 
0821 
0822 
0823 
0824 
0825 
6012 
6300 
01 
02 
15 
16 
17 
  
  
Financial 
P2M 
(U2) 
  
  
0 
0 
4111 
4112 
8211 
8220 
8241 
8244 
8249 
9211 
9222 
9311 
9399 
9405 
5960 
6012 
6300 
6529 
7322 
0820 
00 
03 
04 
05 
06 
07 
08 
09 
10 
12 
14 
18 
19 
20
```

**Machine-readable table extraction(s) for PAGE 29**

#### TABLE_029_01 (source extraction: `page029_table01.csv`)

||||||<=100<br>0 ::<br>0.25<br>(PYE)<br>>1000<br>:: 0.50<br>(PYE)|||||
|---|---|---|---|---|---|---|---|---|---|
|Financial|P2M<br>(U2)|ONUS &<br>OFFUS|PAY /<br>COLLECT|0|0|9400||||
|Financial|P2M<br>(U2)|||0|0|6211<br>4111<br>4112<br>8211<br>8241<br>8220<br>8244<br>8249<br>9311<br>9222<br>9399<br>9405<br>9211<br>6529<br>7322<br>5960<br>0820<br>0821<br>0822<br>0823<br>0824<br>0825<br>6012<br>6300|01<br>02<br>15<br>16<br>17|||
|Financial|P2M<br>(U2)|||0|0|4111<br>4112<br>8211<br>8220<br>8241<br>8244<br>8249<br>9211<br>9222<br>9311<br>9399<br>9405<br>5960<br>6012<br>6300<br>6529<br>7322<br>0820|00<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>10<br>12<br>14<br>18<br>19<br>20|||

<!-- PAGE 30 -->
# PAGE 30

[IMAGE_059]

![IMAGE_059](images/IMAGE_059.jpeg)

**IMAGE_059 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_060]

![IMAGE_060](images/IMAGE_060.png)

**IMAGE_060 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 30/158 
0821 
0822 
0823 
0824 
0825 
Financial 
P2M 
(U2) 
  
  
0 
0 
4814  
4899 
4900 
01 
02 
15 
16 
17 
  
  
Financial 
P2M 
(U2) 
  
  
0 
0 
4814 
4899 
4900 
00 
03 
04 
05 
06 
07 
08 
09 
10 
12 
14 
18 
19 
20 
  
  
Financial 
P2M 
(U2) 
  
  
0 
0 
4814  
4899 
4900 
  
10 
  
Voucher 
Execution(N
on- Covid) 
P2M 
(U2) 
  
  
ONUS:
:0 
Offus 
<=100
0::1.00 
(REM) 
>1000 
and 
<=500
0 
::5.00 
(REM) 
>5000 
:: 10 
(REM) 
0 
<> 
8493 
11 
13 
19 
0A 
1A 
2A 
3A 
4A 
5A 
6A 
7A 
8A 
9A 
  
Govt 
voucher 
Execution 
P2M 
(U2) 
  
  
ONUS:
:0 
OFFU
S 
Any 
slab :: 
1 
(REM) 
0 
Any 
11 
13 
18 
A0 
A1 
A2 
A3 
A4 
A5 
A6
```

**Machine-readable table extraction(s) for PAGE 30**

#### TABLE_030_01 (source extraction: `page030_table01.csv`)

|||||||0821<br>0822<br>0823<br>0824<br>0825||||
|---|---|---|---|---|---|---|---|---|---|
|Financial|P2M<br>(U2)|||0|0|4814<br>4899<br>4900|01<br>02<br>15<br>16<br>17|||
|Financial|P2M<br>(U2)|||0|0|4814<br>4899<br>4900|00<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>10<br>12<br>14<br>18<br>19<br>20|||
|Financial|P2M<br>(U2)|||0|0|4814<br>4899<br>4900||10||
|Voucher<br>Execution(N<br>on- Covid)|P2M<br>(U2)|||ONUS:<br>:0<br>Offus<br><=100<br>0::1.00<br>(REM)<br>>1000<br>and<br><=500<br>0<br>::5.00<br>(REM)<br>>5000<br>:: 10<br>(REM)|0|<><br>8493|11<br>13|19<br>0A<br>1A<br>2A<br>3A<br>4A<br>5A<br>6A<br>7A<br>8A<br>9A||
|Govt<br>voucher<br>Execution|P2M<br>(U2)|||ONUS:<br>:0<br>OFFU<br>S<br>Any<br>slab ::<br>1<br>(REM)|0|Any|11<br>13|18<br>A0<br>A1<br>A2<br>A3<br>A4<br>A5<br>A6||

<!-- PAGE 31 -->
# PAGE 31

[IMAGE_061]

![IMAGE_061](images/IMAGE_061.jpeg)

**IMAGE_061 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_062]

![IMAGE_062](images/IMAGE_062.png)

**IMAGE_062 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 31/158 
A7 
A8 
A9 
Mandate 
Financial 
P2M 
(U2) 
  
  
0 
0 
6211 
11 
13 
01 
  
Mandate 
Financial 
P2M 
(U2) 
  
  
0 
0 
  
11 
13 
<> 01 
  
e-Mandate 
Registration 
P2M 
(U2) 
  
  
OFFU
S & 
ONUS 
0-
5lakhs 
- 6 
(PYE) 
0 
6211 
A
N
Y 
01 
  
e-Mandate 
Registration 
P2M 
(U2) 
  
  
OFFU
S & 
ONUS 
0-1000 
--> 1 
(PYE) 
1000-
5000 -
-> 3 
(PYE) 
5000-
5lakhs 
--> 6 
(PYE) 
0 
9999 
A
N
Y 
01 
  
e-Mandate 
Registration 
P2M 
(U2) 
  
  
OFFU
S & 
ONUS 
0-250 
--> 0.5 
(PYE) 
250 - 
5lakhs 
--> 2.5 
(PYE) 
OFFU
S & 
ONUS 
0-250 
--> 
0.1 
(PYE) 
250 - 
5lakh
s --> 
0.5 
(PYE) 
9999 
A
N
Y 
14 
  
e-Mandate 
Registration 
P2M 
(U2) 
  
  
NIL 
NIL 
9999 
A
N
Y 
14 
CRE
DIT 
Financial 
P2P
M 
ONUS & 
OFFUS 
PAY  
COLLECT 
0 
0 
7407 
01 
02 
15 
16 
17 
  
  
Financial 
P2P
M 
ONUS & 
OFFUS 
PAY  
COLLECT 
0 
0 
7407 
00 
03 
04
```

**Machine-readable table extraction(s) for PAGE 31**

#### TABLE_031_01 (source extraction: `page031_table01.csv`)

|||||||||A7<br>A8<br>A9||
|---|---|---|---|---|---|---|---|---|---|
|Mandate<br>Financial|P2M<br>(U2)|||0|0|6211|11<br>13|01||
|Mandate<br>Financial|P2M<br>(U2)|||0|0||11<br>13|<> 01||
|e-Mandate<br>Registration|P2M<br>(U2)|||OFFU<br>S &<br>ONUS<br>0-<br>5lakhs<br>- 6<br>(PYE)|0|6211|A<br>N<br>Y|01||
|e-Mandate<br>Registration|P2M<br>(U2)|||OFFU<br>S &<br>ONUS<br>0-1000<br>--> 1<br>(PYE)<br>1000-<br>5000 -<br>-> 3<br>(PYE)<br>5000-<br>5lakhs<br>--> 6<br>(PYE)|0|9999|A<br>N<br>Y|01||
|e-Mandate<br>Registration|P2M<br>(U2)|||OFFU<br>S &<br>ONUS<br>0-250<br>--> 0.5<br>(PYE)<br>250 -<br>5lakhs<br>--> 2.5<br>(PYE)|OFFU<br>S &<br>ONUS<br>0-250<br>--><br>0.1<br>(PYE)<br>250 -<br>5lakh<br>s --><br>0.5<br>(PYE)|9999|A<br>N<br>Y|14||
|e-Mandate<br>Registration|P2M<br>(U2)|||NIL|NIL|9999|A<br>N<br>Y|14|CRE<br>DIT|
|Financial|P2P<br>M|ONUS &<br>OFFUS|PAY<br>COLLECT|0|0|7407|01<br>02<br>15<br>16<br>17|||
|Financial|P2P<br>M|ONUS &<br>OFFUS|PAY<br>COLLECT|0|0|7407|00<br>03<br>04|||

<!-- PAGE 32 -->
# PAGE 32

[IMAGE_063]

![IMAGE_063](images/IMAGE_063.jpeg)

**IMAGE_063 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_064]

![IMAGE_064](images/IMAGE_064.png)

**IMAGE_064 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 32/158 
05 
06 
07 
08 
09 
10 
12 
14 
18 
19 
20 
Financial 
P2P
M 
ONUS & 
OFFUS 
PAY /  
COLLECT 
1.5% 
(PYE) 
of txn 
amou
nt 
ONUS  
0.00 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
:: 0.50 
7407 
01 
02 
15 
16 
17 
  
UO
D 
Financial 
P2P
M 
ONUS & 
OFFUS 
PAY  
COLLECT 
1.5% 
(PYE) 
of txn 
amou
nt 
ONUS  
0.00 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
:: 0.50  
7407 
00 
03 
04 
05 
06 
07 
08 
09 
10 
12 
14 
18 
19 
20 
  
UO
D 
Voucher 
Execution(C
ovid) 
P2M 
(U2) 
  
  
  
  
8493 
11 
13 
19 
  
UPI Lite - 
Execution 
P2M 
(U2) 
ONUS & 
OFFUS 
Pay 
0 
0 
9999 
An
y 
44 
45
```

**Machine-readable table extraction(s) for PAGE 32**

#### TABLE_032_01 (source extraction: `page032_table01.csv`)

||||||||05<br>06<br>07<br>08<br>09<br>10<br>12<br>14<br>18<br>19<br>20|||
|---|---|---|---|---|---|---|---|---|---|
|Financial|P2P<br>M|ONUS &<br>OFFUS|PAY /<br>COLLECT|1.5%<br>(PYE)<br>of txn<br>amou<br>nt|ONUS<br>0.00<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|7407|01<br>02<br>15<br>16<br>17||UO<br>D|
|Financial|P2P<br>M|ONUS &<br>OFFUS|PAY<br>COLLECT|1.5%<br>(PYE)<br>of txn<br>amou<br>nt|ONUS<br>0.00<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|7407|00<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>10<br>12<br>14<br>18<br>19<br>20||UO<br>D|
|Voucher<br>Execution(C<br>ovid)|P2M<br>(U2)|||||8493|11<br>13|19||
|UPI Lite -<br>Execution|P2M<br>(U2)|ONUS &<br>OFFUS|Pay|0|0|9999|An<br>y|44<br>45||

<!-- PAGE 33 -->
# PAGE 33

[IMAGE_065]

![IMAGE_065](images/IMAGE_065.jpeg)

**IMAGE_065 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_066]

![IMAGE_066](images/IMAGE_066.png)

**IMAGE_066 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 33/158 
UPI Lite - 
Execution 
P2M 
(U2) 
ONUS & 
OFFUS 
Pay 
0 
0 
4111 
4112 
8211 
8220 
8241 
8244 
8249 
9211 
9222 
9311 
9399 
9405 
5960 
6012 
6300 
6529 
7322 
0820 
0821 
0822 
0823 
0824 
0825 
An
y 
44 
45 
  
UPI Lite - 
Execution 
P2P
M 
(U2) 
ONUS & 
OFFUS 
Pay 
0 
0 
7407 
An
y 
44 
45 
  
UPI Lite - 
Execution 
P2P 
(U3) 
ONUS & 
OFFUS 
Pay 
 
<=100:
:0.08 
>100 
and 
<=100
0 :: 
0.20 
>1000 
& <= 
25000 
:: 0.75 
>2500
0 :: 
3.75 
ONUS 
0 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
0.25 
>1000 
:: 0.50  
0000 
An
y 
44 
45 
  
UPI Lite - 
Execution 
P2P 
(U3) 
ONUS & 
OFFUS 
Pay 
 
<=100:
:0.1 
>100 
and 
<=100
0 :: 
0.25 
>1000 
& <= 
ONUS 
0 
OFFU
S 
<=100
::0.10 
>100 
and 
<=100
0 :: 
9999 
(Defa
ult 
MCC) 
An
y 
44 
45
```

**Machine-readable table extraction(s) for PAGE 33**

#### TABLE_033_01 (source extraction: `page033_table01.csv`)

|UPI Lite -<br>Execution|P2M<br>(U2)|ONUS &<br>OFFUS|Pay|0|0|4111<br>4112<br>8211<br>8220<br>8241<br>8244<br>8249<br>9211<br>9222<br>9311<br>9399<br>9405<br>5960<br>6012<br>6300<br>6529<br>7322<br>0820<br>0821<br>0822<br>0823<br>0824<br>0825|An<br>y|44<br>45||
|---|---|---|---|---|---|---|---|---|---|
|UPI Lite -<br>Execution|P2P<br>M<br>(U2)|ONUS &<br>OFFUS|Pay|0|0|7407|An<br>y|44<br>45||
|UPI Lite -<br>Execution|P2P<br>(U3)|ONUS &<br>OFFUS|Pay|<=100:<br>:0.08<br>>100<br>and<br><=100<br>0 ::<br>0.20<br>>1000<br>& <=<br>25000<br>:: 0.75<br>>2500<br>0 ::<br>3.75|ONUS<br>0<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>:: 0.50|0000|An<br>y|44<br>45||
|UPI Lite -<br>Execution|P2P<br>(U3)|ONUS &<br>OFFUS|Pay|<=100:<br>:0.1<br>>100<br>and<br><=100<br>0 ::<br>0.25<br>>1000<br>& <=|ONUS<br>0<br>OFFU<br>S<br><=100<br>::0.10<br>>100<br>and<br><=100<br>0 ::|9999<br>(Defa<br>ult<br>MCC)|An<br>y|44<br>45||

<!-- PAGE 34 -->
# PAGE 34

[IMAGE_067]

![IMAGE_067](images/IMAGE_067.jpeg)

**IMAGE_067 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_068]

![IMAGE_068](images/IMAGE_068.png)

**IMAGE_068 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 34/158 
25000 
:: 1.00 
>2500
0 :: 
5.00 
0.25 
>1000 
:: 0.50  
UPI Lite - 
Registration
/Topup/De-
registration 
P2P 
(U3) 
ONUS & 
OFFUS 
Pay 
0 
0 
Any 
An
y 
41 
42 
43 
  
UPI Lite - 
Registration
/Topup/De-
registration 
P2M 
(U2) 
ONUS & 
OFFUS 
Pay 
0 
0 
Any 
An
y 
41 
42 
43 
  
UPI Lite - 
Registration
/Topup/De-
registration 
P2P
M 
(U2) 
ONUS & 
OFFUS 
Pay 
0 
0 
7407 
An
y 
41 
42 
43 
  
e-Mandate 
Registration 
- 
Managemen
t fees - 
Quarterly 
OC - 90 92 
P2M 
(U2) 
OFFUS/
ONUS 
COLLECT 
MIFEE: 
(PYE 
to 
REM) 
0-250 
---> 
0.5  
251 - 
1000 -
--> 2.5 
> 1000 
---> 
7.5 
MPFE
E: 
(PYE - 
PYR) 
0 - 
250 --
-> 0.1  
250 - 
1000 -
--> 
0.25 
1000 - 
2lakh
s ---> 
0.5 
9999 
11 
13 
14 
  
e-Mandate 
Registration 
- 
Managemen
t fees - 
Quarterly 
OC - 90 92 
P2M 
(U2) 
OFFUS/
ONUS 
COLLECT 
MIFEE: 
(PYE 
to 
REM) 
0-250 
---> 
0.5  
251 - 
2lakhs 
---> 
1.5 
MPFE
E: 
(PYE - 
PYR) 
0 - 
250 --
-> 0.1  
251 - 
2lakh
s ---> 
0.2 
4900 
4814 
4899 
4784 
11 
13 
14 
  
e-Mandate 
Registration 
- 
Managemen
t fees - 
Quarterly 
OC - 90 92 
P2M 
(U2) 
OFFUS/
ONUS 
COLLECT 
MIFEE: 
(PYE 
to 
REM) 
0-250 
---> 
0.5  
MPFE
E: 
(PYE - 
PYR) 
0 - 
250 --
-> 0.1  
7322 
6211 
6012 
11 
13 
14
```

**Machine-readable table extraction(s) for PAGE 34**

#### TABLE_034_01 (source extraction: `page034_table01.csv`)

|||||25000<br>:: 1.00<br>>2500<br>0 ::<br>5.00|0.25<br>>1000<br>:: 0.50|||||
|---|---|---|---|---|---|---|---|---|---|
|UPI Lite -<br>Registration<br>/Topup/De-<br>registration|P2P<br>(U3)|ONUS &<br>OFFUS|Pay|0|0|Any|An<br>y|41<br>42<br>43||
|UPI Lite -<br>Registration<br>/Topup/De-<br>registration|P2M<br>(U2)|ONUS &<br>OFFUS|Pay|0|0|Any|An<br>y|41<br>42<br>43||
|UPI Lite -<br>Registration<br>/Topup/De-<br>registration|P2P<br>M<br>(U2)|ONUS &<br>OFFUS|Pay|0|0|7407|An<br>y|41<br>42<br>43||
|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Quarterly<br>OC - 90 92|P2M<br>(U2)|OFFUS/<br>ONUS|COLLECT|MIFEE:<br>(PYE<br>to<br>REM)<br>0-250<br>---><br>0.5<br>251 -<br>1000 -<br>--> 2.5<br>> 1000<br>---><br>7.5|MPFE<br>E:<br>(PYE -<br>PYR)<br>0 -<br>250 --<br>-> 0.1<br>250 -<br>1000 -<br>--><br>0.25<br>1000 -<br>2lakh<br>s ---><br>0.5|9999|11<br>13|14||
|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Quarterly<br>OC - 90 92|P2M<br>(U2)|OFFUS/<br>ONUS|COLLECT|MIFEE:<br>(PYE<br>to<br>REM)<br>0-250<br>---><br>0.5<br>251 -<br>2lakhs<br>---><br>1.5|MPFE<br>E:<br>(PYE -<br>PYR)<br>0 -<br>250 --<br>-> 0.1<br>251 -<br>2lakh<br>s ---><br>0.2|4900<br>4814<br>4899<br>4784|11<br>13|14||
|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Quarterly<br>OC - 90 92|P2M<br>(U2)|OFFUS/<br>ONUS|COLLECT|MIFEE:<br>(PYE<br>to<br>REM)<br>0-250<br>---><br>0.5|MPFE<br>E:<br>(PYE -<br>PYR)<br>0 -<br>250 --<br>-> 0.1|7322<br>6211<br>6012|11<br>13|14||

<!-- PAGE 35 -->
# PAGE 35

[IMAGE_069]

![IMAGE_069](images/IMAGE_069.jpeg)

**IMAGE_069 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_070]

![IMAGE_070](images/IMAGE_070.png)

**IMAGE_070 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 35/158 
251 - 
2lakhs 
---> 3 
251 - 
2lakh
s ---> 
0.2 
e-Mandate 
Registration 
- 
Managemen
t fees - 
Yearly 
OC - 90 92 
P2M 
(U2) 
OFFUS 
COLLECT 
MIFEE: 
(PYE 
to 
REM) 
0 - 
2lakhs 
---> 
2.5 
MPFE
E: 
(PYE - 
PYR) 
0 - 
2lakh
s ---> 
0.25 
9999 
11 
13 
14 
  
e-Mandate 
Registration 
- 
Managemen
t fees - 
Yearly 
OC - 90 92 
P2M 
(U2) 
OFFUS 
COLLECT 
MIFEE: 
(PYE 
to 
REM) 
0 - 250 
---> 
0.5 
250 - 
2lakhs 
---> 
1.5 
MPFE
E: 
(PYE - 
PYR) 
0 - 
250 --
-> 0.1 
250 - 
2lakh
s ---> 
0.2 
4900 
4814 
4899 
4784 
11 
13 
14 
  
e-Mandate 
Registration 
- 
Managemen
t fees - 
Yearly 
OC - 90 92 
P2M 
(U2) 
OFFUS 
COLLECT 
MIFEE: 
(PYE 
to 
REM) 
0 - 250 
---> 
0.5 
250 - 
2lakhs 
---> 3 
MPFE
E: 
(PYE - 
PYR) 
0 - 
250 --
-> 0.1 
250 - 
2lakh
s ---> 
0.2 
7322 
6211 
6012 
11 
13 
14 
  
e-Mandate 
Registration 
- 
Managemen
t fees - 
Monthly 
OC - 140 
P2M 
(U2) 
OFFUS 
COLLECT 
  
  
Equal 
to - 
9999 
Not 
equal 
to – 
4900 
4814 
4899 
6211 
6012 
7322 
4784 
11 
13 
14
```

**Machine-readable table extraction(s) for PAGE 35**

#### TABLE_035_01 (source extraction: `page035_table01.csv`)

|||||251 -<br>2lakhs<br>---> 3|251 -<br>2lakh<br>s ---><br>0.2|||||
|---|---|---|---|---|---|---|---|---|---|
|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Yearly<br>OC - 90 92|P2M<br>(U2)|OFFUS|COLLECT|MIFEE:<br>(PYE<br>to<br>REM)<br>0 -<br>2lakhs<br>---><br>2.5|MPFE<br>E:<br>(PYE -<br>PYR)<br>0 -<br>2lakh<br>s ---><br>0.25|9999|11<br>13|14||
|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Yearly<br>OC - 90 92|P2M<br>(U2)|OFFUS|COLLECT|MIFEE:<br>(PYE<br>to<br>REM)<br>0 - 250<br>---><br>0.5<br>250 -<br>2lakhs<br>---><br>1.5|MPFE<br>E:<br>(PYE -<br>PYR)<br>0 -<br>250 --<br>-> 0.1<br>250 -<br>2lakh<br>s ---><br>0.2|4900<br>4814<br>4899<br>4784|11<br>13|14||
|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Yearly<br>OC - 90 92|P2M<br>(U2)|OFFUS|COLLECT|MIFEE:<br>(PYE<br>to<br>REM)<br>0 - 250<br>---><br>0.5<br>250 -<br>2lakhs<br>---> 3|MPFE<br>E:<br>(PYE -<br>PYR)<br>0 -<br>250 --<br>-> 0.1<br>250 -<br>2lakh<br>s ---><br>0.2|7322<br>6211<br>6012|11<br>13|14||
|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Monthly<br>OC - 140|P2M<br>(U2)|OFFUS|COLLECT|||Equal<br>to -<br>9999<br>Not<br>equal<br>to –<br>4900<br>4814<br>4899<br>6211<br>6012<br>7322<br>4784|11<br>13|14||

<!-- PAGE 36 -->
# PAGE 36

[IMAGE_071]

![IMAGE_071](images/IMAGE_071.jpeg)

**IMAGE_071 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_072]

![IMAGE_072](images/IMAGE_072.png)

**IMAGE_072 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 36/158 
e-Mandate 
Registration 
- 
Managemen
t fees - 
Quarterly 
OC - 158 
P2M 
(U2) 
OFFUS 
COLLECT 
  
  
4900 
4814 
4899 
6211 
6012 
7322 
4784 
11 
13 
14 
  
Financial - 
Voucher 
P2M 
(U2) 
OFFUS 
PAY  
COLLECT 
0 
0 
9999 
An
y 
Alphan
umeric 
code 
Vou
che
r 
Financial - 
Voucher 
P2M 
(U2) 
  
  
0 
0 
4111 
4112 
8211 
8220 
8241 
8244 
8249 
9211 
9222 
9311 
9399 
9405 
5960 
6012 
6300 
6529 
7322 
0820 
0821 
0822 
0823 
0824 
0825 
An
y 
Alphan
umeric 
code 
Vou
che
r 
Financial - 
Voucher 
P2M 
(U2) 
  
  
0 
0 
4814 
4899 
4900 
An
y 
Alphan
umeric 
code 
Vou
che
r 
Note: The fees indicated herein are subject to revision by NPCI in consultation with the UPI 
Steering Committee. GST will be settled on fee as per the state rule. 
14.7) 
CYCLE WISE SETTLEMENT FILES & REPORTS IN URCS FOR MEMBER BANKS (DAILY)  
NPCI provides the following settlement files & reports cycle wise in URCS system: 
 
S. 
No 
Report Name 
Description 
1 
UPINTSLABC010624_1C.xls 
NTSL report 
2 
UPI Adjustment Report_ABC_2024-06-01.csv.pgp 
Adjustment Report 
(Consolidated) 
3 
UPI Adjustment Report_ABC_01JUN2024_1C.csv.pgp 
Adjustment Report (Cycle wise) 
4 
UPI Deemed Debit Report_ABC_2024-06-01.csv.pgp 
Deem Debit Report 
5 
TimeOutCasesReport_ABC_2024-06-01.csv.pgp 
Time Out Report (Consolidated)
```

**Machine-readable table extraction(s) for PAGE 36**

#### TABLE_036_01 (source extraction: `page036_table01.csv`)

|e-Mandate<br>Registration<br>-<br>Managemen<br>t fees -<br>Quarterly<br>OC - 158|P2M<br>(U2)|OFFUS|COLLECT|||4900<br>4814<br>4899<br>6211<br>6012<br>7322<br>4784|11<br>13|14||
|---|---|---|---|---|---|---|---|---|---|
|Financial -<br>Voucher|P2M<br>(U2)|OFFUS|PAY<br>COLLECT|0|0|9999|An<br>y|Alphan<br>umeric<br>code|Vou<br>che<br>r|
|Financial -<br>Voucher|P2M<br>(U2)|||0|0|4111<br>4112<br>8211<br>8220<br>8241<br>8244<br>8249<br>9211<br>9222<br>9311<br>9399<br>9405<br>5960<br>6012<br>6300<br>6529<br>7322<br>0820<br>0821<br>0822<br>0823<br>0824<br>0825|An<br>y|Alphan<br>umeric<br>code|Vou<br>che<br>r|
|Financial -<br>Voucher|P2M<br>(U2)|||0|0|4814<br>4899<br>4900|An<br>y|Alphan<br>umeric<br>code|Vou<br>che<br>r|

#### TABLE_036_02 (source extraction: `page036_table02.csv`)

|S.<br>No|Report Name|Description|
|---|---|---|
|1|UPINTSLABC010624_1C.xls|NTSL report|
|2|UPI Adjustment Report_ABC_2024-06-01.csv.pgp|Adjustment Report<br>(Consolidated)|
|3|UPI Adjustment Report_ABC_01JUN2024_1C.csv.pgp|Adjustment Report (Cycle wise)|
|4|UPI Deemed Debit Report_ABC_2024-06-01.csv.pgp|Deem Debit Report|
|5|TimeOutCasesReport_ABC_2024-06-01.csv.pgp|Time Out Report (Consolidated)|

<!-- PAGE 37 -->
# PAGE 37

[IMAGE_073]

![IMAGE_073](images/IMAGE_073.jpeg)

**IMAGE_073 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_074]

![IMAGE_074](images/IMAGE_074.png)

**IMAGE_074 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 37/158 
6 
TimeOutCasesReport_ABC_2024-06-01-1C.csv.pgp 
Time Out Report (Cycle wise) 
7 
Debit Reversal Confirmation Report__ACE_2024-06-
01.csv.pgp 
DRC Report (Consolidated) 
8 
Debit Reversal Confirmation Report_ACE_2024-06-01-
1C.csv.pgp 
DRC Report (Cycle wise) 
9 
LITEBALANCE_999999_010624.csv.pgp 
Lite Balance EOD Recon 
10 
LITEBALANCEABC010624_1C.csv.pgp 
 
Lite Balance File  
11 
Pending Status Report_ABC_1C.csv 
Pending status report 
12 
UPIRAWDATAABC240601_1C.mABC.zip 
RAW Data (Acquirer & Issuer) 
13 
UPIMERCHANTRAWDATAABC240601_1C.mABC.zip 
Merchant Raw Data (Acquirer & 
Issuer) 
14 
UPIMANDATERAWDATAABC240601_1C.mABC.zip 
Mandate Raw Data (Acquirer & 
Issuer) 
15 
UPIINTERCHANGERAWDATAABC240601_1C.mABC.zip 
Interchange Raw File (For Credit 
Card Banks) 
16 
RRC PenaltyReportReceivableABC-ISS-PR-010624.xls  
Penalty Reports 
 
17 
RRC PenaltyReportPayable_ABC-ACQ-PR-010624.xls  
Penalty Reports 
18 
DRC PenaltyReportReceivableABC-ISS-PR-010624.xls 
Penalty Reports 
19 
DRC PenaltyReportPayable_ABC-ACQ-PR-010624.xls  
Penalty Reports 
20 
PenaltyReport_ABC-ISS-PR-010624.xls 
Penalty Reports 
22 
PenaltyReport_ABC-ACQ-PR-010624.xls 
Penalty Reports 
23 
ABC - GST Invoice Report_2024-25-01063006_legal.pdf 
GST Report 
24 
ABC - GSTR1_2024-25-01063006.xls 
GST Report 
25 
ABC - GST Invoice Report_2024-25-01063006.pdf 
GST Report 
26 
RECEIVABLESERVICETAXABC010624.xls 
GST Report 
27 
PAYABLESERVICETAXABC010624.xls 
GST Report 
28 
ABC_REC_GST_2024-25-01063006.pdf 
GST Report 
29 
ABC-B_REC_GST_2024-25-01063006.pdf 
GST Report 
30 
ABC_REC_GST_2024-25-01063006.xls 
GST Report 
31 
ABC-B_REC_GST_2024-25-01063006.xls 
GST Report 
32 
ABC_PAY_GST_2024-25-01063006.pdf 
GST Report 
33 
ABC-B_PAY_GST_2024-25-01063006.pdf 
GST Report 
34 
ABC_PAY_GST_2024-25-01063006.xls 
GST Report 
35 
ABC-B_PAY_GST_2024-25-01063006.xls 
GST Report 
Note:  
1. File naming convention is sample dated for 1st June 2024 and format in file name is 
DDMMYYYY for all settlement & disputes report except GST report. 
2. For GST reports date format is FY 2024-25 supplemented by DDMMYYYY. 
3. In the file name ABC denotes bank three digits short code and 999999 denotes bank six 
digits orgID. 
Raw data files, Adjustment Reports and NTSL files will be uploaded in URCS system daily post-
settlement cut over and completion of respective settlement cycle. Refer Annexures – 8 to 16 
for the samples of settlement files and report. NTSL will indicate the net settlement position for 
each of the members along with their sub members. The net settlement amount may be a debit
```

**Machine-readable table extraction(s) for PAGE 37**

#### TABLE_037_01 (source extraction: `page037_table01.csv`)

|7|Debit Reversal Confirmation Report__ACE_2024-06-<br>01.csv.pgp|DRC Report (Consolidated)|||
|---|---|---|---|---|
|8|Debit Reversal Confirmation Report_ACE_2024-06-01-<br>1C.csv.pgp|DRC Report (Cycle wise)|||
|9|LITEBALANCE_999999_010624.csv.pgp|Lite Balance EOD Recon|||
|10|LITEBALANCEABC010624_1C.csv.pgp|Lite Balance File|||
|11|Pending Status Report_ABC_1C.csv|Pending status report|||
|12|UPIRAWDATAABC240601_1C.mABC.zip|RAW Data (Acquirer & Issuer)|||
|13|UPIMERCHANTRAWDATAABC240601_1C.mABC.zip|Merchant Raw Data (Acquirer &<br>Issuer)|||
|14|UPIMANDATERAWDATAABC240601_1C.mABC.zip|Mandate Raw Data (Acquirer &<br>Issuer)|||
|15|UPIINTERCHANGERAWDATAABC240601_1C.mABC.zip||Interchange Raw File (For Credit||
||||Card Banks)||
|16|RRC PenaltyReportReceivableABC-ISS-PR-010624.xls|Penalty Reports|||
|17|RRC PenaltyReportPayable_ABC-ACQ-PR-010624.xls|Penalty Reports|||
|18|DRC PenaltyReportReceivableABC-ISS-PR-010624.xls|Penalty Reports|||
|19|DRC PenaltyReportPayable_ABC-ACQ-PR-010624.xls|Penalty Reports|||
|20|PenaltyReport_ABC-ISS-PR-010624.xls|Penalty Reports|||
|22|PenaltyReport_ABC-ACQ-PR-010624.xls|Penalty Reports|||
|23|ABC - GST Invoice Report_2024-25-01063006_legal.pdf|GST Report|||
|24|ABC - GSTR1_2024-25-01063006.xls|GST Report|||
|25|ABC - GST Invoice Report_2024-25-01063006.pdf|GST Report|||
|26|RECEIVABLESERVICETAXABC010624.xls|GST Report|||
|27|PAYABLESERVICETAXABC010624.xls|GST Report|||
|28|ABC_REC_GST_2024-25-01063006.pdf|GST Report|||
|29|ABC-B_REC_GST_2024-25-01063006.pdf|GST Report|||
|30|ABC_REC_GST_2024-25-01063006.xls|GST Report|||
|31|ABC-B_REC_GST_2024-25-01063006.xls|GST Report|||
|32|ABC_PAY_GST_2024-25-01063006.pdf|GST Report|||
|33|ABC-B_PAY_GST_2024-25-01063006.pdf|GST Report|||
|34|ABC_PAY_GST_2024-25-01063006.xls|GST Report|||
|35|ABC-B_PAY_GST_2024-25-01063006.xls|GST Report|||

<!-- PAGE 38 -->
# PAGE 38

[IMAGE_075]

![IMAGE_075](images/IMAGE_075.jpeg)

**IMAGE_075 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_076]

![IMAGE_076](images/IMAGE_076.png)

**IMAGE_076 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 38/158 
or a credit. The net settlement amount would include transaction amount, net 
dispute/adjustment amount, interchange fees + GST, switching fees + GST, PSP Fee +GST, 
penalties, customer compensation and other funds settled through Manual Adjustment. 
NPCI, as a settlement agency, will affect the necessary credits and debits to the members’ 
RTGS settlement account with RBI. 
On monthly basis, GST Invoice, GSTR1, GST reports are made available for member banks in 
URCS. Refer Annexures – 17 to 24 for GST Reports, Invoices and GSTR1. 
14.8) 
RAW DATA FILES 
On a daily basis, NPCI shares with its members through the URCS system, PGP encrypted 
Raw Data files (cycle wise) containing remitting and beneficiary files, which are used by the 
members for reconciliation. UPI transactions are classified into three states based on the final 
status of the transaction i.e. Approved, Deemed Approved & Failed. 
 
1. Approved means remitting bank customer account is debited successfully and 
beneficiary bank customer account has been credited successfully in online. Settlement 
is done by debiting the remitting bank and credit the same to beneficiary bank RC-00. 
2. Deemed Approved means debit authorisation is successful but the response from 
beneficiary bank for the credit request message is timeout/no response from beneficiary 
bank. For all such timed out/no response cases NPCI will process the settlement on 
deemed approved basis. Beneficiary banks should reconcile all such deemed approved 
transactions and take appropriate actions in CBS. 
3. Failed Transactions means debit/credit leg is unable to process due to various reasons 
such as bank is offline / CBS is offline are categorised as technical declines and customer 
account is closed, invalid account, etc. such declines are classified as business declines 
which are attributable to the customer’s issue. Refer the document UPI Error and 
Response Codes version 2.9. Similarly, remitting bank should reverse customer’s 
accounts for all the failed transactions in online. Otherwise, the reversal should be posted 
after completing the reconciliation process. 
 
UPI members should download raw file from URCS every day and perform three-way recon 
with bank switch & CBS files. 
Remitter Raw Data File: This file contains a list of all outward remitting transactions done by 
remitting bank customers. For reconciliation, the remitting member should compare the 
transactions available in remitting raw file with the report generated by its switch and core 
banking system. If any differences are identified during reconciliation, member bank should 
initiate appropriate action in CBS or raise disputes in URCS.  
Beneficiary Raw Data File: This file contains a list of all inward beneficiary transactions. For 
reconciliation, the beneficiary member should compare the transactions available in 
beneficiary raw data file with the report generated by its switch & CBS and initiate appropriate 
actions in CBS or URCS.
```

<!-- PAGE 39 -->
# PAGE 39

[IMAGE_077]

![IMAGE_077](images/IMAGE_077.jpeg)

**IMAGE_077 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_078]

![IMAGE_078](images/IMAGE_078.png)

**IMAGE_078 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 39/158 
14.9) 
NTSL FILE 
URCS provides NTSL file containing a summary of transactions, disputes/adjustments, 
penalties, customer compensation amount, interchange fee, PSP fee and switching fees along 
with GST. Members use these files for settlement and accounting purposes. Refer Annexure - 8 
for sample NTSL. One NTSL file is provided for each settlement cycle. The summary of 
transactions amounts and its fees+GST are present in NTSL as per the transaction account 
type & initiation mode and purpose of transaction. Refer Annexures – 25 to 27 respectively. 
14.10) ADJUSTMENT REPORTS 
Adjustment Report consists individual disputes and adjustments details. Refer Annexure – 16 
for sample adjustment report. Members use these reports for reconciliation and handling 
disputes. All the disputes should be processed (raised/received) within TAT to avoid delay in 
redressal of customer grievances. 
15) UPI LITE SETTLEMENT AND RECONCILIATION PROCESS 
To support fund management in the CL, the respective banks will create a pool/escrow account 
wherein fund management will be done by the banks to support the on-device wallet balance along 
with settlement, reconciliation, dispute handing. 
NPCI issues a unique reference number to each UPI Lite created referred to as Lite Reference Number 
(LRN). This is communicated to the bank in the online request as well as the settlement reports. The 
LRN is unique for each and every UPI Lite account created. 
15.1) 
LITE TRANSACTION IDENTIFIERS 
1. Enable UPI Lite (Purpose code 41): This request is made from the UPI App to the customer 
bank which indicates enablement of UPI Lite and 1st time addition of funds. A unique LRN is 
created. (Debit customer account and credit pool account.) NPCI Auth engine is also updated 
at NPCI end with latest balance of Lite Account. 
2. Top Up UPI Lite (Purpose code 42): This request is made from the UPI App to the customer 
bank which indicates to add additional funds to the UPI Lite. The same LRN is updated at the 
time of enablement. (Debit customer account and credit pool account.) NPCI Auth engine is 
also updated with the latest balance of Lite Account. 
3. Disable UPI Lite (Purpose code 43): This request is made from the UPI App to the customer 
bank which indicates to disable the UPI Lite service and credit back the customer account with 
balance funds. The LRN will be disabled in the Auth engine. (Credit account and debit pool 
account.) NPCI Auth engine is also updated with closed status of Lite Account. 
4. Financial transaction (Purpose code 44): This request is made from the UPI App to the Auth 
engine to debit the funds associated with specific UPI Lite. (Debit UPI Lite funds in NPCI Auth 
engine and credit the beneficiary account) 
The below table provides the details of the process that needs to be followed by the banks on a 
daily basis. Banks need to customize/upgrade their reconciliation software for handling the UPI 
Lite transactions and UPI Lite accounts.
```

<!-- PAGE 40 -->
# PAGE 40

[IMAGE_079]

![IMAGE_079](images/IMAGE_079.jpeg)

**IMAGE_079 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_080]

![IMAGE_080](images/IMAGE_080.png)

**IMAGE_080 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 40/158 
S. 
No 
Process 
Description 
Utility 
1 
Sharing 
of 
RAW 
data 
files by NPCI 
All individual transactions shared with 
banks as per settlement cycle. This will 
consist of all normal UPI transactions 
along with all UPI Lite transactions 
(success, failure & deemed). RAW files 
are shared at the end of every 
settlement cycle. 
Banks are required to consume 
the RAW data file, as it contains 
the individual transaction details. 
2 
Sharing 
of 
the UPI Lite 
Balance File 
by NPCI 
Net summary of available balance 
against each LRN as per NPCI Auth 
engine. Lite balance file is shared once 
a day at 23:00 hrs. Refer Annexure – 28 
for sample Lite Balance Report. 
Banks are required to consume 
the balance file and update the 
balance at Pool account for 
individual LRNs. 
3 
Sharing 
of 
NTSL file by 
NPCI 
NTSL consists of summary of Type of 
UPI transactions. It will also contain 
summary of settlement towards UPI Lite 
transactions. 
Banks are required to consume 
the NTSL file and match the 
amount reflected in the NTSL 
report with total Transactions and 
amount as computed based on 
the UPI raw file and balance files. 
 
16) UPI LITE X (OFFLINE) 
With UPI Lite X, customer can make offline payments even in places with bad connectivity and poor 
networks. NFC is used for communication in LITE X offline transactions. 
16.1) 
LITE X (OFFLINE) TRANSACTION IDENTIFIERS 
S. No  
Description  Remarks  
1  
Purpose 
Codes 
41, 
42, 43, 44  
Enablement (Purpose code 41), Top up (Purpose code 42), 
disablement (Purpose code 43) and UPI LITE online financial 
transaction (Purpose code 44), will continue as per existing process 
(No change in existing process).  
2  
Purpose 
code 45  
New Purpose code 45 will be introduced for LITE offline transactions. 
(NPCI Auth Engine will Debit Payer’s Lite account and credit payee’s 
lite account) for all successful transactions RC-00.  
 
16.2) 
LITE X (OFFLINE) SETTLEMENT RULES 
Since all are offline transactions transaction date is recorded in NPCI systems only when 
either of the party Payer or Payee comes online. Hence, for the disputes & penalties respective 
TAT will be applied on settlement date not on the transaction date. Settlement date should be 
considered as T+0.
```

**Machine-readable table extraction(s) for PAGE 40**

#### TABLE_040_01 (source extraction: `page040_table01.csv`)

|S.<br>No|Process|Description|Utility|
|---|---|---|---|
|1|Sharing of<br>RAW data<br>files by NPCI|All individual transactions shared with<br>banks as per settlement cycle. This will<br>consist of all normal UPI transactions<br>along with all UPI Lite transactions<br>(success, failure & deemed). RAW files<br>are shared at the end of every<br>settlement cycle.|Banks are required to consume<br>the RAW data file, as it contains<br>the individual transaction details.|
|2|Sharing of<br>the UPI Lite<br>Balance File<br>by NPCI|Net summary of available balance<br>against each LRN as per NPCI Auth<br>engine. Lite balance file is shared once<br>a day at 23:00 hrs. Refer Annexure – 28<br>for sample Lite Balance Report.|Banks are required to consume<br>the balance file and update the<br>balance at Pool account for<br>individual LRNs.|
|3|Sharing of<br>NTSL file by<br>NPCI|NTSL consists of summary of Type of<br>UPI transactions. It will also contain<br>summary of settlement towards UPI Lite<br>transactions.|Banks are required to consume<br>the NTSL file and match the<br>amount reflected in the NTSL<br>report with total Transactions and<br>amount as computed based on<br>the UPI raw file and balance files.|

#### TABLE_040_02 (source extraction: `page040_table02.csv`)

|S. No|Description|Remarks|
|---|---|---|
|1|Purpose<br>Codes 41,<br>42, 43, 44|Enablement (Purpose code 41), Top up (Purpose code 42),<br>disablement (Purpose code 43) and UPI LITE online financial<br>transaction (Purpose code 44), will continue as per existing process<br>(No change in existing process).|
|2|Purpose<br>code 45|New Purpose code 45 will be introduced for LITE offline transactions.<br>(NPCI Auth Engine will Debit Payer’s Lite account and credit payee’s<br>lite account) for all successful transactions RC-00.|

<!-- PAGE 41 -->
# PAGE 41

[IMAGE_081]

![IMAGE_081](images/IMAGE_081.jpeg)

**IMAGE_081 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_082]

![IMAGE_082](images/IMAGE_082.png)

**IMAGE_082 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 41/158 
PAYER OR PAYEE 
COMES ONLINE  
SETTTEMENT SETTLEMENT IN  
INITIATER  
00 to 04 days  
Yes  
LITE Engine **  
NPCI Switch  
05 to 45 days  
Yes  
LITE Engine **  
(Adjustment 
in 
bank 
account if required)  
 
• 
NPCI 
Switch 
(Raw 
file)  
• 
URCS 
For 
LLP 
(Adjustment report)  
 
46th day onwards  
Good Faith  
As 
per 
Payer 
bank 
acceptance  
Payee Bank to Raise  
** Bank has to Debit/Credit LITE GL 
Note: 
1. First Party coming online (0 to 45 days) transaction will be made available in Raw data 
2. If a second party comes online (0 to 4 days), transaction will not be published in any of the 
file. 
3. Payer bank means remitting bank. Payee bank means beneficiary bank. 
4. If second party comes online (5 to 45 days), transaction might be available in adjustment 
report as the case may be. 
5. Any party coming online from 46th day onwards, transaction will be available in adjustment 
report 
6. From 0 to 45 days, whenever there is a spill over the reversal will be done in back office (Not 
in Lite engine). 
7. Refer UPI Error and Response Codes V_2.9 for all UPI Lite response codes. 
16.3) 
LITE NEW RESPONSE CODES 
S. 
No 
Raw File 
Response 
Code 
Settlement 
Systems 
Description 
Payer 
Payee 
1 
00  
In Lite Auth 
Engine  
Successful transaction 
Debit 
GL  
Credit 
GL  
2 
L1  
No- Fund 
movement in 
Raw Data  
Payer & Payee are online within 4 days 
with exception logs (Dr Lite GL / Cr 
Remitter CASA). No action at beneficiary 
bank  
NIL 
NIL 
3 
L2 
Payer Comes online with exception log 
within 4 days; payee does not come 
online within 4 days (Dr Lite GL / Cr 
Remitter CASA). No action at beneficiary 
bank  
4 
LA 
Payee comes online with exception log 
and payer does not come online within 4 
days TAT. 
(OR) 
When the Payee comes online with 
exception log after 4 days .
```

**Machine-readable table extraction(s) for PAGE 41**

#### TABLE_041_01 (source extraction: `page041_table01.csv`)

|PAYER OR PAYEE<br>COMES ONLINE|SETTTEMENT|SETTLEMENT IN|INITIATER|
|---|---|---|---|
|00 to 04 days|Yes|LITE Engine **|NPCI Switch|
|05 to 45 days|Yes|LITE Engine **<br>(Adjustment in bank<br>account if required)|• NPCI Switch (Raw<br>file)<br>• URCS For LLP<br>(Adjustment report)|
|46th day onwards|Good Faith|As per Payer bank<br>acceptance|Payee Bank to Raise|

#### TABLE_041_02 (source extraction: `page041_table02.csv`)

|S.<br>No|Raw File<br>Response<br>Code|Settlement<br>Systems|Description|Payer|Payee|
|---|---|---|---|---|---|
|1|00|In Lite Auth<br>Engine|Successful transaction|Debit<br>GL|Credit<br>GL|
|2|L1|No- Fund<br>movement in<br>Raw Data|Payer & Payee are online within 4 days<br>with exception logs (Dr Lite GL / Cr<br>Remitter CASA). No action at beneficiary<br>bank|NIL|NIL|
|3|L2||Payer Comes online with exception log<br>within 4 days; payee does not come<br>online within 4 days (Dr Lite GL / Cr<br>Remitter CASA). No action at beneficiary<br>bank|||
|4|LA||Payee comes online with exception log<br>and payer does not come online within 4<br>days TAT.<br>(OR)<br>When the Payee comes online with<br>exception log after 4 days .|||

<!-- PAGE 42 -->
# PAGE 42

[IMAGE_083]

![IMAGE_083](images/IMAGE_083.jpeg)

**IMAGE_083 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_084]

![IMAGE_084](images/IMAGE_084.png)

**IMAGE_084 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 42/158 
5 
L5 
When the user uninstalls and reinstalls 
the APP or changes the device (same OS) 
then the entire lite balance of the user 
will be blocked. This will be returned to 
the user after 4 days through back-office 
by giving information in raw file i.e. L5 
response 
code. Upon 
receiving 
L5 
response 
code, 
remitter 
bank 
is 
expected to debit their lite pool account 
and credit customer CASA. No action at 
beneficiary bank  
 
16.4) 
URCS DISPUTE RULES 
Disputes 
Flag 
Disputes 
Reason 
Codes 
Settlement Systems 
Description 
Payer 
Payee 
LLP 
LLY 
URCS Initiated Lite Late 
Presentment. 
Fund 
movement DR Payer & 
Cr Payee (5-45) 
Lite 
Late 
Presentment 
Raised by NPCI 
Debit 
Credit 
LPA 
LLP accepted by the 
Remitting Bank 
LLP 
accepted 
by 
the 
Remitting Bank 
NIL 
NIL 
LPD 
Deemed 
Acceptance 
(after 3 days TAT) 
Deemed 
Acceptance 
(after 3 days TAT) 
NIL 
NIL 
L01 
LLP Rejection Reason 
Codes 
(applicable for remitter 
to 
use 
these 
codes 
while raising the LPR) 
Account Closed 
Credit 
Debit 
L02 
Account does not exist 
L03 
Party instructions 
L04 
NRI account 
L05 
Debit/Credit freeze 
L06 
Invalid beneficiary details 
L07 
Any other reason 
 
LLB 
No 
Fund 
Movement 
(Good 
Faith 
LITE 
Adjustment 
(Flag) 
Raised by NPCI) 
Payee coming online with 
transaction after 45 days 
NIL 
NIL 
LLR 
Payer coming online with 
transaction after 45 days 
NIL 
NIL 
LL4 
Payer coming online with 
transaction after 45 days; 
balance exploding Dr Lite 
GL / Cr Remitter CASA 
NIL 
NIL 
GFA 
Fund movement YES 
Acceptance of GFL by 
remitting bank 
Debit 
Credit 
GFD 
If no action taken by 
remitting bank 
GFL Deemed Acceptance 
after 3 days TAT expires 
Debit 
Credit 
L01 
GFL Rejection Reason 
Codes 
applicable 
for 
rejecting LLB/  
 
Account Closed 
NIL 
NIL 
L02 
Account does not exist 
L03 
Party instructions 
L04 
NRI account 
L05 
Debit/Credit freeze
```

**Machine-readable table extraction(s) for PAGE 42**

#### TABLE_042_01 (source extraction: `page042_table01.csv`)

|5|L5||When the user uninstalls and reinstalls<br>the APP or changes the device (same OS)<br>then the entire lite balance of the user<br>will be blocked. This will be returned to<br>the user after 4 days through back-office<br>by giving information in raw file i.e. L5<br>response code. Upon receiving L5<br>response code, remitter bank is<br>expected to debit their lite pool account<br>and credit customer CASA. No action at<br>beneficiary bank|||
|---|---|---|---|---|---|

#### TABLE_042_02 (source extraction: `page042_table02.csv`)

|Disputes<br>Flag|Disputes<br>Reason<br>Codes|Settlement Systems|Description|Payer|Payee|
|---|---|---|---|---|---|
|LLP|LLY|URCS Initiated Lite Late<br>Presentment. Fund<br>movement DR Payer &<br>Cr Payee (5-45)|Lite Late Presentment<br>Raised by NPCI|Debit|Credit|
||LPA|LLP accepted by the<br>Remitting Bank|LLP accepted by the<br>Remitting Bank|NIL|NIL|
||LPD|Deemed Acceptance<br>(after 3 days TAT)|Deemed Acceptance<br>(after 3 days TAT)|NIL|NIL|
||L01|LLP Rejection Reason<br>Codes<br>(applicable for remitter<br>to use these codes<br>while raising the LPR)|Account Closed|Credit|Debit|
||L02||Account does not exist|||
||L03||Party instructions|||
||L04||NRI account|||
||L05||Debit/Credit freeze|||
||L06||Invalid beneficiary details|||
||L07||Any other reason|||
||LLB|No Fund Movement<br>(Good Faith LITE<br>Adjustment (Flag)<br>Raised by NPCI)|Payee coming online with<br>transaction after 45 days|NIL|NIL|
||LLR||Payer coming online with<br>transaction after 45 days|NIL|NIL|
||LL4||Payer coming online with<br>transaction after 45 days;<br>balance exploding Dr Lite<br>GL / Cr Remitter CASA|NIL|NIL|
||GFA|Fund movement YES|Acceptance of GFL by<br>remitting bank|Debit|Credit|
||GFD|If no action taken by<br>remitting bank|GFL Deemed Acceptance<br>after 3 days TAT expires|Debit|Credit|
||L01|GFL Rejection Reason<br>Codes applicable for<br>rejecting LLB/|Account Closed|NIL|NIL|
||L02||Account does not exist|||
||L03||Party instructions|||
||L04||NRI account|||
||L05||Debit/Credit freeze|||

<!-- PAGE 43 -->
# PAGE 43

[IMAGE_085]

![IMAGE_085](images/IMAGE_085.jpeg)

**IMAGE_085 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_086]

![IMAGE_086](images/IMAGE_086.png)

**IMAGE_086 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 43/158 
L06 
Invalid beneficiary details 
L07 
Any other reason 
LLI 
LLG 
No 
Fund 
Movement 
(Late Lite Information) 
Payer coming online with 
exception after 45 days 
NIL 
NIL 
LLT 
Payee coming online with 
exception after 45 days 
LL3 
Payer coming online with 
exception after 45 days 
balance exploding; Dr Lite 
GL / Cr Remitter CASA 
 
17) UPI IPO  
IPO has 4-type of transactions viz. Initiation, Modification, Revoke, Execution (refer below table for 
details). 
17.1) 
INITIATION / CREATION 
NPCI 
Switch 
Bank 
Switch 
(REM) 
CBS 
(REM) 
Response to 
Sponsor Bank 
(Raw File) 
CBS 
(BEN) 
RECON ACTIONS 
Approved Approved Approved 
Approved 
NA 
Tallied - No Actions Required 
Declined 
Declined 
Declined 
Declined 
NA 
Tallied - No Actions Required 
Declined Approved Approved 
Declined 
NA 
Remove the lien /Unblock the 
funds (Wrong Format in response 
message from REM) 
Timeout 
Approved Approved 
Declined 
NA 
Remove the lien /Unblock the 
funds 
Timeout 
Timeout 
Approved 
Declined 
NA 
Remove the lien /Unblock the 
funds 
Timeout 
Timeout 
Declined 
Declined 
NA 
Tallied - No Actions Required 
Timeout No Record 
Present 
Declined 
Declined 
NA 
Tallied - No Actions Required 
Approved Approved Declined 
Approved 
NA 
System Error (at REM Switch/CBS) 
- REM Bank to Lien/Block the 
funds manually 
 
17.2) 
UPDATE / MODIFY 
NPCI 
Switch 
Bank 
Switch 
(REM) 
CBS 
(REM) 
Response to 
Sponsor Bank 
(Raw File) 
CBS 
(BEN) 
RECON ACTIONS 
Approved Approved Approved 
Approved 
NA 
Tallied - No Actions Required 
Declined 
Declined 
Declined 
Declined 
NA 
No Actions Required - Original 
Creation remains unchanged
```

**Machine-readable table extraction(s) for PAGE 43**

#### TABLE_043_01 (source extraction: `page043_table01.csv`)

||L06||Invalid beneficiary details|||
|---|---|---|---|---|---|
||L07||Any other reason|||
|LLI|LLG|No Fund Movement<br>(Late Lite Information)|Payer coming online with<br>exception after 45 days|NIL|NIL|
||LLT||Payee coming online with<br>exception after 45 days|||
||LL3||Payer coming online with<br>exception after 45 days<br>balance exploding; Dr Lite<br>GL / Cr Remitter CASA|||

#### TABLE_043_02 (source extraction: `page043_table02.csv`)

|NPCI<br>Switch|Bank<br>Switch<br>(REM)|CBS<br>(REM)|Response to<br>Sponsor Bank<br>(Raw File)|CBS<br>(BEN)|RECON ACTIONS|
|---|---|---|---|---|---|
|Approved|Approved|Approved|Approved|NA|Tallied - No Actions Required|
|Declined|Declined|Declined|Declined|NA|Tallied - No Actions Required|
|Declined|Approved|Approved|Declined|NA|Remove the lien /Unblock the<br>funds (Wrong Format in response<br>message from REM)|
|Timeout|Approved|Approved|Declined|NA|Remove the lien /Unblock the<br>funds|
|Timeout|Timeout|Approved|Declined|NA|Remove the lien /Unblock the<br>funds|
|Timeout|Timeout|Declined|Declined|NA|Tallied - No Actions Required|
|Timeout|No Record<br>Present|Declined|Declined|NA|Tallied - No Actions Required|
|Approved|Approved|Declined|Approved|NA|System Error (at REM Switch/CBS)<br>- REM Bank to Lien/Block the<br>funds manually|

#### TABLE_043_03 (source extraction: `page043_table03.csv`)

|NPCI<br>Switch|Bank<br>Switch<br>(REM)|CBS<br>(REM)|Response to<br>Sponsor Bank<br>(Raw File)|CBS<br>(BEN)|RECON ACTIONS|
|---|---|---|---|---|---|
|Approved|Approved|Approved|Approved|NA|Tallied - No Actions Required|
|Declined|Declined|Declined|Declined|NA|No Actions Required - Original<br>Creation remains unchanged|

<!-- PAGE 44 -->
# PAGE 44

[IMAGE_087]

![IMAGE_087](images/IMAGE_087.jpeg)

**IMAGE_087 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_088]

![IMAGE_088](images/IMAGE_088.png)

**IMAGE_088 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 44/158 
Declined Approved Approved 
Declined 
NA 
REM Bank to unblock the modified 
amount and block the original 
Creation amount 
Timeout 
Timeout 
Approved 
Declined 
NA 
REM Bank to unblock the modified 
amount and block the original 
Creation amount 
Timeout 
Approved Approved 
Declined 
NA 
REM Bank to unblock the modified 
amount and block the original 
Creation amount 
Timeout 
Timeout 
Declined 
Declined 
NA 
No Actions Required - Original 
Creation remains unchanged 
Timeout No Record 
Present 
Declined 
Declined 
NA 
No Actions Required - Original 
Creation remains unchanged 
Approved Approved Declined 
Approved 
NA 
System Error (at REM Switch/CBS) 
- REM Bank to Update/Modify the 
funds manually 
 
17.3) 
REVOKE / CANCELLATION 
NPCI 
Switch 
Bank Switch 
(REM) 
CBS 
(REM) 
Response to 
Sponsor Bank 
(Raw File) 
CBS 
(BEN) 
RECON ACTIONS 
Approved Approved Approved 
Approved 
NA 
Tallied - No Actions Required 
Declined 
Declined 
Declined 
Declined 
NA 
Check and remove the lien/ 
Unblock the funds 
Declined Approved Approved 
Declined 
NA 
Tallied - No Actions Required 
(Wrong Format in response 
message from REM) 
Timeout 
Timeout 
Approved 
Declined 
NA 
Tallied - No Actions Required 
Timeout 
Approved Approved 
Declined 
NA 
Tallied - No Actions Required 
Timeout 
Timeout 
Declined 
Declined 
NA 
Check and remove the lien/ 
Unblock the funds 
Timeout No Record 
Present 
Declined 
Declined 
NA 
Check and remove the lien/ 
Unblock the funds 
 
17.4) 
EXECUTION 
Sponsor banks should raise all the executions within TAT and avoid offline executions. 
NPCI 
Switch 
Bank 
Switch 
(REM) 
CBS 
(REM) 
Response to 
Sponsor 
Bank (Raw 
File) 
CBS 
(BEN) 
RECON ACTIONS 
Approved Approved Approved 
Approved 
NA Tallied - No Actions Required 
Declined Declined Declined 
Declined 
NA 
No Actions Required - REM Bank to hold 
the Lien/Block till the expiry date of 
mandate
```

**Machine-readable table extraction(s) for PAGE 44**

#### TABLE_044_01 (source extraction: `page044_table01.csv`)

|Declined|Approved|Approved|Declined|NA|REM Bank to unblock the modified<br>amount and block the original<br>Creation amount|
|---|---|---|---|---|---|
|Timeout|Timeout|Approved|Declined|NA|REM Bank to unblock the modified<br>amount and block the original<br>Creation amount|
|Timeout|Approved|Approved|Declined|NA|REM Bank to unblock the modified<br>amount and block the original<br>Creation amount|
|Timeout|Timeout|Declined|Declined|NA|No Actions Required - Original<br>Creation remains unchanged|
|Timeout|No Record<br>Present|Declined|Declined|NA|No Actions Required - Original<br>Creation remains unchanged|
|Approved|Approved|Declined|Approved|NA|System Error (at REM Switch/CBS)<br>- REM Bank to Update/Modify the<br>funds manually|

#### TABLE_044_02 (source extraction: `page044_table02.csv`)

|NPCI<br>Switch|Bank Switch<br>(REM)|CBS<br>(REM)|Response to<br>Sponsor Bank<br>(Raw File)|CBS<br>(BEN)|RECON ACTIONS|
|---|---|---|---|---|---|
|Approved|Approved|Approved|Approved|NA|Tallied - No Actions Required|
|Declined|Declined|Declined|Declined|NA|Check and remove the lien/<br>Unblock the funds|
|Declined|Approved|Approved|Declined|NA|Tallied - No Actions Required<br>(Wrong Format in response<br>message from REM)|
|Timeout|Timeout|Approved|Declined|NA|Tallied - No Actions Required|
|Timeout|Approved|Approved|Declined|NA|Tallied - No Actions Required|
|Timeout|Timeout|Declined|Declined|NA|Check and remove the lien/<br>Unblock the funds|
|Timeout|No Record<br>Present|Declined|Declined|NA|Check and remove the lien/<br>Unblock the funds|

#### TABLE_044_03 (source extraction: `page044_table03.csv`)

|NPCI<br>Switch|Bank<br>Switch<br>(REM)|CBS<br>(REM)|Response to<br>Sponsor<br>Bank (Raw<br>File)|CBS<br>(BEN)|RECON ACTIONS|
|---|---|---|---|---|---|
|Approved|Approved|Approved|Approved|NA|Tallied - No Actions Required|
|Declined|Declined|Declined|Declined|NA|No Actions Required - REM Bank to hold<br>the Lien/Block till the expiry date of<br>mandate|

<!-- PAGE 45 -->
# PAGE 45

[IMAGE_089]

![IMAGE_089](images/IMAGE_089.jpeg)

**IMAGE_089 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_090]

![IMAGE_090](images/IMAGE_090.png)

**IMAGE_090 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 45/158 
Declined Approved Approved 
Declined 
NA 
Exceptional Case due to wrong format in 
response message. REM Bank should not 
reverse the funds to the customer. Funds 
must be kept on hold in pool a/c. Liaise 
with sponsor bank and return the funds 
Timeout Approved Approved 
Declined 
NA 
REM Bank should not reverse the funds to 
the customer. Funds must be kept on hold 
in pool a/c. These TXNs will be settled on 
deemed debit basis. Refer OC 88 dated 
14th May 2020, OC 128 dated 14th Dec 
2021 and OC 206 dated 3rd Sep 2024 for 
details. 
Timeout Timeout Approved 
Declined 
NA 
REM Bank should not reverse the funds to 
the customer. Funds must be kept on hold 
in pool a/c. These TXNs will be settled on 
deemed debit basis. Refer OC 88 dated 
14th May 2020 and OC 128 dated 14th Dec 
2021 for details. 
Timeout Timeout Declined 
Declined 
NA 
No Actions Required - REM Bank to hold 
the Lien/Block till the expiry date of 
mandate 
Timeout No Record 
Present Declined 
Declined 
NA 
No Actions Required - REM Bank to hold 
the Lien/Block till the expiry date of 
mandate 
Approved Approved Declined 
Approved 
NA 
System Error (at REM Switch/CBS) - REM 
Bank to remove the Lien/Block, debit 
customer a/c, liaise with Sponsor bank 
and return the funds. 
18) NEW LAUNCHES IN GFF 2024 
List of GFF Launches 2024 are as follows: 1) ICCD 2) Delegate Payments 3) Embedded system 
4) E-RUPI: P2P 5) Lite - Auto Pay 6) NCMC recharge. 
S. 
No 
Project 
Description 
Originator Side (Bank Live on Project) 
Receiver Side (Bank 
NOT Live on Project) 
1 
ICCD - 
Interoperable 
Cardless 
Cash Deposit 
Settlement Changes - Separate user login 
will be given under existing URCS URL. 
Separate settlement & disputes are 
applicable.  
For ICCD all the entities 
acquiring bank, issuing 
bank & beneficiary bank 
has to be live on ICCD 
functionality. Otherwise, 
the transaction will get 
declined if either the 
bank is not live. 
IC Fee, SW Fee, PSP Fee + GST Changes - 
Yes Applicable 
Raw File Changes - Yes, Separate raw file 
will be provided (Purpose Code - 84 for Self-
account & 85 for third person account) TXN 
Type U6. Raw file TXN Sub Type PV - Payer 
Validation/Issuer (Depositor) 
authentication, CQ - Beneficiary Validation, 
CD - Cash Deposit) 
NTSL Changes - Yes, separate RTGS 
settlement will be done with only cycle per 
day (Separate NTSL will be provided).
```

**Machine-readable table extraction(s) for PAGE 45**

#### TABLE_045_01 (source extraction: `page045_table01.csv`)

|Declined|Approved|Approved|Declined|NA|Exceptional Case due to wrong format in<br>response message. REM Bank should not<br>reverse the funds to the customer. Funds<br>must be kept on hold in pool a/c. Liaise<br>with sponsor bank and return the funds|
|---|---|---|---|---|---|
|Timeout|Approved|Approved|Declined|NA|REM Bank should not reverse the funds to<br>the customer. Funds must be kept on hold<br>in pool a/c. These TXNs will be settled on<br>deemed debit basis. Refer OC 88 dated<br>14th May 2020, OC 128 dated 14th Dec<br>2021 and OC 206 dated 3rd Sep 2024 for<br>details.|
|Timeout|Timeout|Approved|Declined|NA|REM Bank should not reverse the funds to<br>the customer. Funds must be kept on hold<br>in pool a/c. These TXNs will be settled on<br>deemed debit basis. Refer OC 88 dated<br>14th May 2020 and OC 128 dated 14th Dec<br>2021 for details.|
|Timeout|Timeout|Declined|Declined|NA|No Actions Required - REM Bank to hold<br>the Lien/Block till the expiry date of<br>mandate|
|Timeout|No Record<br>Present|Declined|Declined|NA|No Actions Required - REM Bank to hold<br>the Lien/Block till the expiry date of<br>mandate|
|Approved|Approved|Declined|Approved|NA|System Error (at REM Switch/CBS) - REM<br>Bank to remove the Lien/Block, debit<br>customer a/c, liaise with Sponsor bank<br>and return the funds.|

#### TABLE_045_02 (source extraction: `page045_table02.csv`)

|S.<br>No|Project<br>Description|Originator Side (Bank Live on Project)|Receiver Side (Bank<br>NOT Live on Project)|
|---|---|---|---|
|1|ICCD -<br>Interoperable<br>Cardless<br>Cash Deposit|Settlement Changes - Separate user login<br>will be given under existing URCS URL.<br>Separate settlement & disputes are<br>applicable.|For ICCD all the entities<br>acquiring bank, issuing<br>bank & beneficiary bank<br>has to be live on ICCD<br>functionality. Otherwise,<br>the transaction will get<br>declined if either the<br>bank is not live.|
|||IC Fee, SW Fee, PSP Fee + GST Changes -<br>Yes Applicable||
|||Raw File Changes - Yes, Separate raw file<br>will be provided (Purpose Code - 84 for Self-<br>account & 85 for third person account) TXN<br>Type U6. Raw file TXN Sub Type PV - Payer<br>Validation/Issuer (Depositor)<br>authentication, CQ - Beneficiary Validation,<br>CD - Cash Deposit)||
|||NTSL Changes - Yes, separate RTGS<br>settlement will be done with only cycle per<br>day (Separate NTSL will be provided).||

<!-- PAGE 46 -->
# PAGE 46

[IMAGE_091]

![IMAGE_091](images/IMAGE_091.jpeg)

**IMAGE_091 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_092]

![IMAGE_092](images/IMAGE_092.png)

**IMAGE_092 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 46/158 
ODR - Yes, for timed out TXNs & Deemed 
approved TXNs 
OC - Ref No - NPCI/NFS/2024-25/421 & 
NPCI/UPI/2024-25/204 
2 
Delegate 
Payments 
Settlement Changes - No Change 
Settlement Changes - No 
Change 
IC Fee, SW Fee, PSP Fee + GST Changes - 
No Change 
IC Fee, SW Fee, PSP Fee 
+ GST Changes - No 
Change 
Raw File Changes - Separate Raw file with 
Purpose Code - 87 
Raw File Changes - 
Existing raw file with 
Purpose Code - 87 
NTSL Changes - Separate line item 
NTSL Changes - Separate 
line item 
ODR - No Change 
ODR - No Change 
OC Ref No - NPCI/UPI/OC No. 201/2024-25 
3 
Embedded 
system  
(IoT - 
Connected 
Car) 
Settlement Changes - No Change 
Settlement Changes - No 
Change 
IC Fee, SW Fee, PSP Fee + GST Changes - 
No Change 
IC Fee, SW Fee, PSP Fee 
+ GST Changes - No 
Change 
Raw File Changes - Existing raw file with 
Purpose Code - 83 
Raw File Changes - 
Existing raw file with 
Purpose Code - 83 
NTSL Changes - Separate line item 
NTSL Changes - Separate 
line item 
ODR - No Change 
ODR - No Change 
4 
E-RUPI: P2P 
Settlement Changes - No Change 
Settlement Changes - No 
Change 
IC Fee, SW Fee, PSP Fee + GST Changes - 
Same as existing purpose code 19 
IC Fee, SW Fee, PSP Fee 
+ GST Changes - Same as 
existing purpose code 19 
Raw File Changes - Existing raw file with 
Purpose Code - 17 
Raw File Changes - 
Existing raw file with 
Purpose Code - 17 
NTSL Changes - No separate line item. It will 
be part of existing voucher (purpose code - 
19) 
NTSL Changes - No 
separate line item. It will 
be part of existing 
voucher (purpose code - 
19) 
ODR - No Change 
ODR - No Change 
5 
Lite - Auto 
Pay 
Settlement Changes - No Change 
No changes for banks 
which are not live on 
project. Since this is a 
LITE Top-up transaction, 
only the banks live on the 
project will get the new 
purpose codes. NIL 
Changes at banks who 
are not live on this 
IC Fee, SW Fee, PSP Fee + GST Changes - 
No Change 
Raw File Changes - Yes, Purpose Code - 71 
for first time user & 82 for existing user 
authorising for auto pay. 
NTSL Changes - These are included in the 
existing lite top up (purpose code - 41 & 42). 
No separate line item is provided for auto
```

**Machine-readable table extraction(s) for PAGE 46**

#### TABLE_046_01 (source extraction: `page046_table01.csv`)

|||ODR - Yes, for timed out TXNs & Deemed<br>approved TXNs||
|---|---|---|---|
|||OC - Ref No - NPCI/NFS/2024-25/421 &<br>NPCI/UPI/2024-25/204||
|2|Delegate<br>Payments|Settlement Changes - No Change|Settlement Changes - No<br>Change|
|||IC Fee, SW Fee, PSP Fee + GST Changes -<br>No Change|IC Fee, SW Fee, PSP Fee<br>+ GST Changes - No<br>Change|
|||Raw File Changes - Separate Raw file with<br>Purpose Code - 87|Raw File Changes -<br>Existing raw file with<br>Purpose Code - 87|
|||NTSL Changes - Separate line item|NTSL Changes - Separate<br>line item|
|||ODR - No Change|ODR - No Change|
|||OC Ref No - NPCI/UPI/OC No. 201/2024-25||
|3|Embedded<br>system<br>(IoT -<br>Connected<br>Car)|Settlement Changes - No Change|Settlement Changes - No<br>Change|
|||IC Fee, SW Fee, PSP Fee + GST Changes -<br>No Change|IC Fee, SW Fee, PSP Fee<br>+ GST Changes - No<br>Change|
|||Raw File Changes - Existing raw file with<br>Purpose Code - 83|Raw File Changes -<br>Existing raw file with<br>Purpose Code - 83|
|||NTSL Changes - Separate line item|NTSL Changes - Separate<br>line item|
|||ODR - No Change|ODR - No Change|
|4|E-RUPI: P2P|Settlement Changes - No Change|Settlement Changes - No<br>Change|
|||IC Fee, SW Fee, PSP Fee + GST Changes -<br>Same as existing purpose code 19|IC Fee, SW Fee, PSP Fee<br>+ GST Changes - Same as<br>existing purpose code 19|
|||Raw File Changes - Existing raw file with<br>Purpose Code - 17|Raw File Changes -<br>Existing raw file with<br>Purpose Code - 17|
|||NTSL Changes - No separate line item. It will<br>be part of existing voucher (purpose code -<br>19)|NTSL Changes - No<br>separate line item. It will<br>be part of existing<br>voucher (purpose code -<br>19)|
|||ODR - No Change|ODR - No Change|
|5|Lite - Auto<br>Pay|Settlement Changes - No Change|No changes for banks<br>which are not live on<br>project. Since this is a<br>LITE Top-up transaction,<br>only the banks live on the<br>project will get the new<br>purpose codes. NIL<br>Changes at banks who<br>are not live on this|
|||IC Fee, SW Fee, PSP Fee + GST Changes -<br>No Change||
|||Raw File Changes - Yes, Purpose Code - 71<br>for first time user & 82 for existing user<br>authorising for auto pay.||
|||NTSL Changes - These are included in the<br>existing lite top up (purpose code - 41 & 42).<br>No separate line item is provided for auto||

<!-- PAGE 47 -->
# PAGE 47

[IMAGE_093]

![IMAGE_093](images/IMAGE_093.jpeg)

**IMAGE_093 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_094]

![IMAGE_094](images/IMAGE_094.png)

**IMAGE_094 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 47/158 
top up 
feature. 
ODR - No Change 
OC Ref No - NPCI/UPI/OC No. 205/2024-25 
6 
NCMC 
recharge 
Settlement Changes - No Change 
Settlement Changes - No 
Change 
IC Fee, SW Fee, PSP Fee + GST Changes - 
No Change 
IC Fee, SW Fee, PSP Fee 
+ GST Changes - No 
Change 
Raw File Changes - (Initiation Mode - 27 for 
self-payment and 28 is for other payments), 
(Raw file contains MCC 7412). 
Raw File Changes - 
(Initiation Mode - 27 for 
self-payment and 28 is 
for other payments), (Raw 
file contains MCC 7412). 
NTSL Changes - Separate line item for 
initiation mode 27 and 28. For QR existing 
initiation mode 01 contains the count and 
value. 
NTSL Changes - Separate 
line item for initiation 
mode 27 and 28. For QR 
existing initiation mode 
01 contains the count 
and value. 
ODR - No Change 
ODR - No Change 
 
19) NETWORK / SWITCH BUSINESS DAY CUTOVER TIME 
From 01 Aug 2024, NPCI implemented 10 settlement cycles on all 365 days (except RTGS holidays that 
may be declared and published by RBI from time to time) and business day cutover in the UPI network 
changed from 23:00 hrs to 24:00 hrs. The settlement is posted every day (Cycle wise) in Member Bank 
RTGS account maintained with RBI. Separate Raw data, NTSL, and other files for every settlement 
cycle are placed in respective Bank folders post cut over and completion of each settlement cycle. 
NPCI reserves the right to amend the UPI network business day cutover time. 
The following are the Settlement Cut off timings: 
Cycle No. 
From Time 
To Time 
Duration (Hrs) 
Expected RTGS Posting Time* 
1st Cycle 
21:00 
00:00 
03:00 
04:00 Hrs 
2nd Cycle 
00:00 
05:00 
05:00 
07:00 Hrs 
3rd Cycle 
05:00 
07:00 
02:00 
09:00 Hrs 
4th Cycle 
07:00 
09:00 
02:00 
11:00 Hrs 
5th Cycle 
09:00 
11:00 
02:00 
13:00 Hrs 
6th Cycle 
11:00 
13:00 
02:00 
15:00 Hrs 
7th Cycle 
13:00 
15:00 
02:00 
17:00 Hrs 
8th Cycle 
15:00 
17:00 
02:00 
19:00 Hrs 
9th Cycle 
17:00 
19:00 
02:00 
21:00 Hrs 
10th Cycle 
19:00 
21:00 
02:00 
23:00 Hrs
```

**Machine-readable table extraction(s) for PAGE 47**

#### TABLE_047_01 (source extraction: `page047_table01.csv`)

|||top up|feature.|
|---|---|---|---|
|||ODR - No Change||
|||OC Ref No - NPCI/UPI/OC No. 205/2024-25||
|6|NCMC<br>recharge|Settlement Changes - No Change|Settlement Changes - No<br>Change|
|||IC Fee, SW Fee, PSP Fee + GST Changes -<br>No Change|IC Fee, SW Fee, PSP Fee<br>+ GST Changes - No<br>Change|
|||Raw File Changes - (Initiation Mode - 27 for<br>self-payment and 28 is for other payments),<br>(Raw file contains MCC 7412).|Raw File Changes -<br>(Initiation Mode - 27 for<br>self-payment and 28 is<br>for other payments), (Raw<br>file contains MCC 7412).|
|||NTSL Changes - Separate line item for<br>initiation mode 27 and 28. For QR existing<br>initiation mode 01 contains the count and<br>value.|NTSL Changes - Separate<br>line item for initiation<br>mode 27 and 28. For QR<br>existing initiation mode<br>01 contains the count<br>and value.|
|||ODR - No Change|ODR - No Change|

#### TABLE_047_02 (source extraction: `page047_table02.csv`)

|Cycle No.|From Time|To Time|Duration (Hrs)|Expected RTGS Posting Time*|
|---|---|---|---|---|
|1st Cycle|21:00|00:00|03:00|04:00 Hrs|
|2nd Cycle|00:00|05:00|05:00|07:00 Hrs|
|3rd Cycle|05:00|07:00|02:00|09:00 Hrs|
|4th Cycle|07:00|09:00|02:00|11:00 Hrs|
|5th Cycle|09:00|11:00|02:00|13:00 Hrs|
|6th Cycle|11:00|13:00|02:00|15:00 Hrs|
|7th Cycle|13:00|15:00|02:00|17:00 Hrs|
|8th Cycle|15:00|17:00|02:00|19:00 Hrs|
|9th Cycle|17:00|19:00|02:00|21:00 Hrs|
|10th Cycle|19:00|21:00|02:00|23:00 Hrs|

<!-- PAGE 48 -->
# PAGE 48

[IMAGE_095]

![IMAGE_095](images/IMAGE_095.jpeg)

**IMAGE_095 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_096]

![IMAGE_096](images/IMAGE_096.png)

**IMAGE_096 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 48/158 
*On all days (365 days) there will be ten settlement cycles and the same is posted in Member Bank 
RTGS account maintained with RBI. 
 
In Reference - RBI circular RBI/2020-21/70 DPSS (CO) RTGS No.750/04.016/2020-21 dated December 
04, 2020, wherein RBI informed that RTGS services should be made available 24X7X365 days w.e.f. 
December 14, 2020. 
In view of the same, NPCI communicated the aforesaid proposal and modus operandi to member 
banks in Working Group Meeting (WGM) held on 16th December 2020. As per approval from RBI UPI, 
posting of Settlement is being done on all days of the week.  
Effective January 17, 2021, NPCI has started processing Settlement posting through RTGS on all 365 
days except specified holidays as and when decided and declared by RBI from time to time. Any 
changes to the RTGS settlement calendar or any declaration of holidays will be communicated to the 
member banks through email & back-office (URCS) notifications. 
Member Banks to ensure that RTGS account is sufficiently funded for smooth processing of 
settlements on all days (including all 2nd & 4th Saturday and Sundays). Refer NPCI operating circular vide 
NPCI/UPI/2024-25/197 dated 14th Jun 2024 for details. 
20) THREE WAY RECONCILIATION 
All member banks must do three-way automated reconciliation on T+0 or latest by T+1. Three files 
have to be matched i.e. NPCI Raw Data & NTSL, Bank Switch File, Bank CBS File and accordingly 
initiate suitable actions wherever required. All the disputes have to be resolved based on the three-
way reconciliation process within TAT. 
 
Additionally, in a scenario wherein the banks have successful transactions in their switch / internal 
systems, however, such transactions are not present in the raw file provided then: 
 
1. Remitting banks should not reverse the funds to the customer’s account. 
2. Beneficiary banks should hold funds in the beneficiary account. 
Such cases should be reported to NPCI immediately for further course of action. NPCI will investigate 
the matter and pass necessary adjustment entries wherever it is applicable. 
21) RBI CUSTOMER COMPENSATION & NPCI COMPLIANCE PENALTIES 
This has reference to the RBI circular DPSS.CO. PD. No.629/02.01.014/2019-20 dated 20th September 
2019 towards harmonisation of Turn Around Time (TAT) and customer compensation for failed 
transactions using authorized Payment Systems.  
20.1) 
HARMONIZATION OF TAT AND CUSTOMER COMPENSATION GUIDLINES 
RBI circular states that wherever there are failed transactions, the credit amount should be 
auto reversed to the customer's account Suo moto, without waiting for customer's 
complaint/claim along with the compensation, in case of delay as per stipulated time. The 
circular also harmonizes the turnaround time (TAT) for such adjustments and compensation 
to be charged to the participant deferring the adjustment.
```

<!-- PAGE 49 -->
# PAGE 49

[IMAGE_097]

![IMAGE_097](images/IMAGE_097.jpeg)

**IMAGE_097 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_098]

![IMAGE_098](images/IMAGE_098.png)

**IMAGE_098 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 49/158 
It is also classified that transaction failures could be on account of various factors not directly 
attributable to the customer. E.g. Disruption of communication links, Switch/CBS offline, time 
out/no response to the financial messages etc. The framework is applicable only for Domestic 
Transactions, where both the Remitter and Beneficiary are within India. The RBI mandate has 
come into effect from 15th October 2019. 
20.2) 
CUSTOMER COMPENSATION DETAILS 
Compensation rules and table is as follows, extraction from the RBI OC vide reference 
DPSS.CO.PD. No.629/02.01.014/2019-20 dated 20th September 2019. 
Description of the incident 
Framework for auto-reversal and compensation 
Timeline for auto-reversal 
Compensation payable 
Account debited but the 
beneficiary account is not credited 
If unable to credit to  
beneficiary account, auto  
reversal (R) by the 
Beneficiary  
bank latest on T+1 day. 
₹ 100/- per day if delay is 
beyond T+1 day. 
Account debited but transaction 
confirmation not received at 
merchant location (payment to 
merchant). 
Auto-reversal within T + 5 
days. 
Auto-reversal within T + 5 
days. 
 
In view of the above RBI instructions and reference, NPCI has defined detailed process set for 
UPI transactions, refer NPCI operating circular vide NPCI/UPI/2019-20/093 dated 14th Oct 
2019 for details. 
 
UPI URCS will check for all such RBI compensation rules & logical conditions and process the 
customer compensation for delay in harmonization of TAT automatically to the respective 
member banks. 
 
22) BANKS ACTIONABLE FOR UNSUCCESSFUL TRANSACTIONS 
21.1) 
REMITTER/ACQUIRER: 
1. For declined transactions (customer account is debited and declined at NPCI) it is the 
remitter responsibility to reconcile & reverse customer account if not done in online 
within T+1, otherwise remitting bank has to pay compensation to customer. 
2. Remitting bank should reverse the customer account on the same day as and when 
the returns for deemed approved transactions are received, otherwise remitting bank 
has to pay compensation to customer. 
3. Remitting bank should download all returns from URCS received after 16:00 hrs and 
credit their customer account (Transaction amount + Compensation) on same day. If 
delayed, then remitting bank has to pay additional compensation to the customers.
```

**Machine-readable table extraction(s) for PAGE 49**

#### TABLE_049_01 (source extraction: `page049_table01.csv`)

|Description of the incident|Framework for auto-reversal and compensation||
|---|---|---|
||Timeline for auto-reversal|Compensation payable|
|Account debited but the<br>beneficiary account is not credited|If unable to credit to<br>beneficiary account, auto<br>reversal (R) by the<br>Beneficiary<br>bank latest on T+1 day.|₹ 100/- per day if delay is<br>beyond T+1 day.|
|Account debited but transaction<br>confirmation not received at<br>merchant location (payment to<br>merchant).|Auto-reversal within T + 5<br>days.|Auto-reversal within T + 5<br>days.|

<!-- PAGE 50 -->
# PAGE 50

[IMAGE_099]

![IMAGE_099](images/IMAGE_099.jpeg)

**IMAGE_099 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_100]

![IMAGE_100](images/IMAGE_100.png)

**IMAGE_100 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 50/158 
21.2) 
BENEFICIARY/ISSUER: 
1. Bank as a Beneficiary should credit the customer's account within T+1 day (if not 
credited online), otherwise customer account has to be credited with compensation. 
Bank to update TCC 102/103. 
 
2. If the amount cannot be credited due to any reason, same has to be returned to 
remitting bank on or before 16:00 hrs every day for UPI transactions by T+1, otherwise 
NPCI will debit the beneficiary bank and credit to the remitting bank 
3. In case of non-fulfilment of UPI merchant transactions, acquiring bank should raise 
returns/credit adjustments within 4 calendar days latest by 16:00 hrs from the 
transaction date, otherwise compensation will be debited from acquiring bank and 
credit the same to issuing bank. 
4. For UPI merchant transactions, acceptance by acquiring bank for chargeback/pre-
arbitration/arbitration (including deferred chargeback lifecycle) should be done within 
TAT for chargebacks raised under reason code “1065”. If acquiring bank does not 
accept chargebacks/pre-arbitration/arbitration within TAT, then URCS will close the 
dispute window on deemed acceptance. The acquiring bank will be debited and the 
issuing bank will be credited with the TXN amount + compensation amount. Issuing 
banks should credit the amount to the customer’s account once accepted by 
acquiring bank, if delayed then issuing bank has to pay compensation to the 
customers. 
21.3) 
TAT FOR RETURNS ON DEEMED APPROVED TRANSACTIONS 
For deemed approved P2P/P2M UPI transactions, customer compensation will be applicable in 
case beneficiary fails to update RET as per below table. TAT for raising returns by Beneficiary 
Bank are updated below. 
Adjustment Type 
RBI Compensation Rules 
Returns 
Penalty will be settled if returns are raised after T+1 16:00 hrs. 
Chargeback & 
Deferred Chargeback 
Penalty will be settled if Chargeback or deferred chargeback 
acceptance after T+1 16:00 hrs. (including any acceptance of 
lifecycle of the disputes till arbitration). 
 
21.4) 
APPLICABILITY FOR RBI COMPENSATION 
Below is the list of disputes which are applicable for the compensation if the refund to the 
customer account Is not processed within prescribed TAT. Customer compensation will be 
calculated from transaction date to the customer account credited/reversed date, if it is within 
TAT then customer compensation will not be applicable. If the credit/reversal done on or after 
T+2 calendar day, then compensation is applicable (Example: - If the transaction amount is 
credited/reversed to the customer account on T+3 then customer will be eligible for ₹ 100/- x 2 
= ₹ 200/- compensation.
```

**Machine-readable table extraction(s) for PAGE 50**

#### TABLE_050_01 (source extraction: `page050_table01.csv`)

|Adjustment Type|RBI Compensation Rules|
|---|---|
|Returns|Penalty will be settled if returns are raised after T+1 16:00 hrs.|
|Chargeback &<br>Deferred Chargeback|Penalty will be settled if Chargeback or deferred chargeback<br>acceptance after T+1 16:00 hrs. (including any acceptance of<br>lifecycle of the disputes till arbitration).|

<!-- PAGE 51 -->
# PAGE 51

[IMAGE_101]

![IMAGE_101](images/IMAGE_101.jpeg)

**IMAGE_101 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_102]

![IMAGE_102](images/IMAGE_102.png)

**IMAGE_102 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 51/158 
 
P2P/ P2PM Transactions  
Adjustment Type 
Within TAT 
*After TAT 
Chargeback Accept / Deemed Accept 
NA 
Applicable 
Pre-Arbitration Accept / Deemed Accept 
NA 
Applicable 
Arbitration Accept 
NA 
Applicable 
NRP Verdict in favour of Remitting / Issuing Bank 
NA 
Applicable 
Remitting / Issuing bank raising PRD & Verdict in favour of 
Remitting / Issuing Bank 
NA 
Applicable 
Deferred Chargeback Accept / Deemed Accept 
NA 
Applicable 
Deferred Pre-Arbitration Accept / Deemed Accept 
NA 
Applicable 
Deferred Arbitration Accept 
NA 
Applicable 
NRP Verdict in favour of Remitting/Issuing Bank 
NA 
Applicable 
Remitting / Issuing raising bank PRD & Verdict in favour of 
Remitting / Issuing Bank 
NA 
Applicable 
*T+1 indicates transaction next day after 16:00 hrs 
 
P2M Transactions 
Adjustment Type 
Within TAT 
*After TAT 
Chargeback Accept / Deemed Accept 
NA 
Applicable if 
the 
beneficiary / 
acquiring 
bank confirms 
the 
applicability 
of RBI 
compensation 
Pre-Arbitration Accept / Deemed Accept 
NA 
Arbitration Accept 
NA 
NRP Verdict in favour of Remitting / Issuing Bank 
NA 
Remitting / Issuing raising bank PRD & Verdict in favour of 
Remitting / Issuing Bank 
NA 
Deferred Chargeback Accept / Deemed Accept 
NA 
Deferred Pre-Arbitration Accept / Deemed Accept 
NA 
NRP Verdict in favour of Remitting/Issuing Bank 
NA 
Remitting / Issuing raising bank PRD & Verdict in favour of 
Remitting / Issuing Bank 
NA 
Deferred Arbitration Accept 
NA 
Returns / Credit Adjustment 
NA 
*Indicates after 16:00 hrs 
 
Note:  
1. Compensation is not applicable for wrong credits, fraudulent transactions, foreign inward 
transactions and P2M Transactions with chargebacks raised with reason codes (108, 121, 1061, 
1062, 1063, 1064, 1084 and 1085). 
2. Reason Code “1065 (P2M) – Account debited for transaction confirmation not received at 
merchant location” to be selected in URCS while raising chargebacks for issuing banks to claim 
the compensation amount basis the customer information. Compensation is only applicable for 
the new reason code i.e. for failed TXN at merchant. No penalty is calculated for above reason 
codes. Beneficiary banks can accept chargeback with compensation by selecting Reason code- 
AT (Attributed to technical issue at merchant/aggregator) or accept chargeback without 
compensation by selecting Reason Code - AC (Issue attributed to the customer).
```

**Machine-readable table extraction(s) for PAGE 51**

#### TABLE_051_01 (source extraction: `page051_table01.csv`)

|Adjustment Type|Within TAT|*After TAT|
|---|---|---|
|Chargeback Accept / Deemed Accept|NA|Applicable|
|Pre-Arbitration Accept / Deemed Accept|NA|Applicable|
|Arbitration Accept|NA|Applicable|
|NRP Verdict in favour of Remitting / Issuing Bank|NA|Applicable|
|Remitting / Issuing bank raising PRD & Verdict in favour of<br>Remitting / Issuing Bank|NA|Applicable|
|Deferred Chargeback Accept / Deemed Accept|NA|Applicable|
|Deferred Pre-Arbitration Accept / Deemed Accept|NA|Applicable|
|Deferred Arbitration Accept|NA|Applicable|
|NRP Verdict in favour of Remitting/Issuing Bank|NA|Applicable|
|Remitting / Issuing raising bank PRD & Verdict in favour of<br>Remitting / Issuing Bank|NA|Applicable|

#### TABLE_051_02 (source extraction: `page051_table02.csv`)

|Adjustment Type|Within TAT|*After TAT|
|---|---|---|
|Chargeback Accept / Deemed Accept|NA|Applicable if<br>the<br>beneficiary /<br>acquiring<br>bank confirms<br>the<br>applicability<br>of RBI<br>compensation|
|Pre-Arbitration Accept / Deemed Accept|NA||
|Arbitration Accept|NA||
|NRP Verdict in favour of Remitting / Issuing Bank|NA||
|Remitting / Issuing raising bank PRD & Verdict in favour of<br>Remitting / Issuing Bank|NA||
|Deferred Chargeback Accept / Deemed Accept|NA||
|Deferred Pre-Arbitration Accept / Deemed Accept|NA||
|NRP Verdict in favour of Remitting/Issuing Bank|NA||
|Remitting / Issuing raising bank PRD & Verdict in favour of<br>Remitting / Issuing Bank|NA||
|Deferred Arbitration Accept|NA||
|Returns / Credit Adjustment|NA||

<!-- PAGE 52 -->
# PAGE 52

[IMAGE_103]

![IMAGE_103](images/IMAGE_103.jpeg)

**IMAGE_103 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_104]

![IMAGE_104](images/IMAGE_104.png)

**IMAGE_104 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 52/158 
3. Acquiring bank to initiate return/credit adjustments with specific Reason Code “Account 
debited but confirmation not received at merchant location” to identify disputes arising due to 
such failed TXNs. 
4. Where acquirer/merchant have failed to initiate a credit adjustment/refund, if the customer 
lodges a complaint with the issuing bank, issuing bank to initiate with specific chargeback 
Reason Code “Account debited but confirmation not received at merchant location” to identify 
disputes arising due to such failed TXNs. 
 
23) NPCI COMPLIANCE PENALTY 
Refer NPCI operating circular vide NPCI/UPI/2017-18/19 dated 22nd May 2017, NPCI/UPI/2017-18/38 
date 02nd Nov 2017, NPCI/UPI/2017-18/42 date 15th Dec 2017 and NPCI/UPI/2020-21/99 date 02nd Feb 
2021 for status update in back office URCS for all failed/timed out/deemed approve transactions in 
online. 
22.1) 
TCC TRANSACTION CREDIT CONFIRMATION / RET RETURNS 
When UPI switch sends credit request message to the beneficiary bank it is expected by the 
beneficiary bank to credit the end customers account in CBS and send a response back to the 
UPI switch with final status as approved or failed (as the case may be). If the beneficiary bank 
does not send any response to the UPI switch even after sending the verification request 
message, then such transactions are treated as timed out/deemed approve transactions and 
settlement is done in favor of beneficiary bank by debiting remitting bank. Because the 
beneficiary bank did not send any response to UPI switch in online it is expected by the 
beneficiary banks to reconcile all such deemed approved transactions and update the fate of 
the transaction in URCS as follows: 
 
1. TCC-102: Beneficiary bank should update status for the deemed approved as TCC-102 if 
customer account has been credited in online but the response was not given back to 
NPCI. 
2. TCC-103: Beneficiary bank should update status for the deemed approved as TCC-103 if 
customer account has not been credited online, however, post reconciliation is done 
recon based credit has been given to the customer’s account successfully in CBS. 
3. RET: If the beneficiary bank cannot credit their customers account due to any reason it is 
expected to return funds to the remitting bank for such transactions. Refer Annexure – 29 
for adjustment reason codes master list. 
22.2) 
DRC DEBIT REVERSAL CONFIRMATION 
When UPI switch sends debit request message to the remitter bank it is expected by the 
remitter bank to debit the customer’s account in CBS and send a response back to the UPI 
switch with final status as debit success or failed (as the case may be). If the remitter bank 
does not send any response to the UPI switch even after sending the online debit reversal 
request message, then such transactions are treated as failed. Because the remitter bank did 
not send any response to UPI switch in online it is expected by the remitter banks to reconcile 
all such failed transactions and update the fate of the transaction in URCS as follows:
```

<!-- PAGE 53 -->
# PAGE 53

[IMAGE_105]

![IMAGE_105](images/IMAGE_105.jpeg)

**IMAGE_105 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_106]

![IMAGE_106](images/IMAGE_106.png)

**IMAGE_106 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 53/158 
1. DRC-102: Remitter bank should update status for the failed TXN as DRC-102 if customer 
account has been reversed in online but the response was not given back to NPCI. 
2. DRC-103: Remitter bank should update status for the failed TXN as DRC-103 if customer 
account has not been reversed online, however, post reconciliation is done recon based 
reversal has been given to the customer’s account successfully in CBS. 
3. DRC-104: Remitter bank should update status for the failed TXN as DRC-104 if Online 
decline response is failed. 
22.3) 
RRC REFUND REVERSAL CONFIRMATION 
It is observed that remitting/issuing banks are not reversing their customer’s account even after 
receiving the credit adjustments/returns from the beneficiary/acquiring banks. In such case 
customers are getting out of fund for many days and those transactions are resulting in 
customer complaints. Hence, we have implemented “Refund Reversal Confirmation – RRC” in 
URCS for credit adjustments, returns and online refunds by the customer banks. It is expected 
by the remitter banks to update the RRC on the credit adjustments, returns and online refunds 
in URCS as RRC-501: Remitter customer account has been credited. 
 
Banks are provided with raw files (consisting approved/deemed approved/failed transactions) 
and penalty reports for reconciliation. Refer Annexures – 30 to 35 for sample penalty reports. 
 
Remitter and beneficiary banks should perform reconciliation as per TAT and update the status 
as mentioned above. Otherwise, NPCI compliance penalties will be applicable, refer below 
table for details, subsequently remitting banks may raise chargebacks (if TCC/RET is not 
updated) which should be either accepted or rejected by the beneficiary banks within TAT. 
 
TXN 
Type 
Adjus
tment 
Type 
Which 
Bank to 
update 
Base 
Transaction 
Financial/
Non-
Financial 
(Adjustme
nt Type) 
Status 
Update 
Type 
Status 
Update 
Penalty 
(appl. 
GST) 
Pen
alty 
pro
ces
sing 
TAT 
U2 / 
U3 / 
UC 
TCC  
Benefici
ary 
Bank 
Deemed 
Approved 
Non-
Financial 
Transacti
on Credit 
Confirma
tion 
T+1 CD 
₹ 25/- 
T+2 
CD 
T+2 CD 
₹ 50/- 
T+3 
CD 
T+3 CD 
₹ 100/- 
T+4 
CD 
U2 / 
U3 / 
UC 
RET 
Benefici
ary 
Bank 
Deemed 
Approved 
Financial 
Returns if 
customer 
account 
cannot 
be 
credited 
T+1 CD 
₹ 25/- 
T+2 
CD 
T+2 CD 
₹ 50/- 
T+3 
CD 
T+3 CD 
₹ 100/- 
T+4 
CD 
U2 / 
U3 / 
DRC 
Remitti
ng Bank 
Debit 
Reversal 
Non-
Financial 
On Debit 
reversal 
T+1 CD 
₹ 25/- 
T+2 
CD
```

**Machine-readable table extraction(s) for PAGE 53**

#### TABLE_053_01 (source extraction: `page053_table01.csv`)

|TXN<br>Type|Adjus<br>tment<br>Type|Which<br>Bank to<br>update|Base<br>Transaction|Financial/<br>Non-<br>Financial<br>(Adjustme<br>nt Type)|Status<br>Update<br>Type|Status<br>Update|Penalty<br>(appl.<br>GST)|Pen<br>alty<br>pro<br>ces<br>sing<br>TAT|
|---|---|---|---|---|---|---|---|---|
|U2 /<br>U3 /<br>UC|TCC|Benefici<br>ary<br>Bank|Deemed<br>Approved|Non-<br>Financial|Transacti<br>on Credit<br>Confirma<br>tion|T+1 CD|₹ 25/-|T+2<br>CD|
|||||||T+2 CD|₹ 50/-|T+3<br>CD|
|||||||T+3 CD|₹ 100/-|T+4<br>CD|
|U2 /<br>U3 /<br>UC|RET|Benefici<br>ary<br>Bank|Deemed<br>Approved|Financial|Returns if<br>customer<br>account<br>cannot<br>be<br>credited|T+1 CD|₹ 25/-|T+2<br>CD|
|||||||T+2 CD|₹ 50/-|T+3<br>CD|
|||||||T+3 CD|₹ 100/-|T+4<br>CD|
||||||||₹ 25/-|T+2<br>CD|

<!-- PAGE 54 -->
# PAGE 54

[IMAGE_107]

![IMAGE_107](images/IMAGE_107.jpeg)

**IMAGE_107 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_108]

![IMAGE_108](images/IMAGE_108.png)

**IMAGE_108 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 54/158 
UC 
Confirmatio
n 
failed 
TXNs and 
no debit 
cases 
₹ 50/- 
T+3 
CD 
₹ 100/- 
T+4 
CD 
U2 / 
U3 / 
UC 
RRC 
Remitti
ng Bank 
- Credit 
adjustment 
- Returns 
- Online 
refund 
Non-
Financial 
Once the 
credit 
adjustme
nt/return
s/online 
refunds 
are 
raised by 
the 
beneficia
ry bank it 
is 
mandato
ry for 
remitting 
bank to 
credit 
their 
customer 
account 
on T+1 
and 
update 
RRC in 
URCS 
T+1 CD 
₹ 25/- 
T+2 
CD 
T+2 CD 
₹ 50/- 
T+3 
CD 
T+3 CD 
₹ 100/- 
T+4 
CD 
Note: 
1. CD = Calendar Day. Penalty TAT will be processed on Calendar Day basis for all UPI 
adjustments. 
2. Penalty will be settled on all 365 days and NTSL will contain separate narration 
same as earlier process. 
3. Cutover for updating the TCC/RET, DRC & RRC status in URCS every day will be 
night 24 hrs.  
4. Outer limit of the status update compliance penalty is ₹ 175/- (₹ 25/- + ₹ 50/- + ₹ 
100/-). This is revised as and when there is need and separate communication will 
be broadcasted. 
 
All member banks as beneficiary should analyze such deemed approved transactions and put 
proper process in place to reduce the deemed approved transactions to the near zero by 
upgrading the infrastructure, network bandwidth, proper DR setup or any other technical 
solution which will reduce the time out/deemed approved transactions.
```

**Machine-readable table extraction(s) for PAGE 54**

#### TABLE_054_01 (source extraction: `page054_table01.csv`)

||||||||₹ 50/-||
|---|---|---|---|---|---|---|---|---|
||||||||₹ 100/-|T+4<br>CD|
|U2 /<br>U3 /<br>UC|RRC|Remitti<br>ng Bank|- Credit<br>adjustment<br>- Returns<br>- Online<br>refund|Non-<br>Financial|Once the<br>credit<br>adjustme<br>nt/return<br>s/online<br>refunds<br>are<br>raised by<br>the<br>beneficia<br>ry bank it<br>is<br>mandato<br>ry for<br>remitting<br>bank to<br>credit<br>their<br>customer<br>account<br>on T+1<br>and<br>update<br>RRC in<br>URCS|T+1 CD|₹ 25/-|T+2<br>CD|
|||||||T+2 CD|₹ 50/-|T+3<br>CD|
|||||||T+3 CD|₹ 100/-|T+4<br>CD|

<!-- PAGE 55 -->
# PAGE 55

[IMAGE_109]

![IMAGE_109](images/IMAGE_109.jpeg)

**IMAGE_109 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_110]

![IMAGE_110](images/IMAGE_110.png)

**IMAGE_110 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 55/158 
22.4) 
NPCI NON-COMPLIANCE PENALTY WAIVER PROCESS 
In case of any scheduled activities or technical issues faced by member bank due to which 
member bank is not updating TCC/RET, DRC and RRC in URCS, then member bank should 
submit waiver request letter to NPCI. Refer NPCI operating circular vide NPCI/UPI/2022-
23/155 dated 02nd Sep 2022. 
24) DISPUTES & ADJUSTMENTS 
For resolution of exception scenarios, disputes, and adjustments of transactions, participating 
members should perform the following activities: 
1. Download all the files required for Performing reconciliation on T+0 or latest by T+1. 
2. Identify the mismatch transactions where necessary adjustments have to be processed in CBS. 
3. Entire reconciliation must be a maker/checker process. 
4. Reconcile transaction-wise and tally the GL accounts. 
5. Raise necessary credit adjustments, returns and online refunds wherever it is applicable. 
6. Manage all dispute within TAT and avoid good faith issues. 
7. Member banks should put proper processes in place and all disputes have to be resolved amicably 
& proactively on T+0 or latest by T+1 as per within TATs. 
8. Banks should have automated recon systems for reconciling all UPI transactions. 
9. Reconciliation and Dispute Handling process should be audited by bank’s internal team. 
As mentioned in the above section, i.e. process set for deemed approved transactions has to followed 
by beneficiary banks otherwise NPCI compliance penalties are applicable. In case beneficiary bank 
does not update the status for deemed approved transactions even after levying the compliance 
penalties and remitting bank customer claims his/her account debited but the beneficiary bank 
customer account has not been credited, in such cases remitting bank is allowed to raise 
chargeback/deferred chargeback (refer below tables for details). 
Chargeback is allowed if beneficiary bank does not update TCC/RET. If the TCC is updated and remitting 
bank customer still dispute the deemed approved transaction, then remitting bank may raise deferred 
chargeback. Both chargebacks and deferred chargebacks are allowed up to arbitration lifecycle. By law 
the arbitration provision is made available but in case of U3 TXNs, it is fund transfer transaction which is 
very easy to determine if the beneficiary account is credited in CBS or not, hence the chargeback 
should not take place in the first place if the beneficiary bank is doing proactive reconciliation and 
updating the status of all the deemed approved transactions within TAT. If the chargeback is raised 
before the beneficiary bank raise the TCC/RET, then beneficiary bank should either accept the 
chargeback or reject (as the case may be) and ensure the life cycle of the dispute is not going further to 
pre-arbitration & arbitration. 
Refer below table for the roles and responsibilities for managing the exceptional transactions set for 
remitting bank & beneficiary bank.
```

<!-- PAGE 56 -->
# PAGE 56

[IMAGE_111]

![IMAGE_111](images/IMAGE_111.jpeg)

**IMAGE_111 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_112]

![IMAGE_112](images/IMAGE_112.png)

**IMAGE_112 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 56/158 
S. 
No 
Scenario 
Status at 
beneficiary 
bank 
NPCI 
proposed 
actions 
Remitting Bank 
Actions 
Beneficiary Bank Actions 
1 
Beneficiary 
bank 
response 
timed out 
Customer 
account 
is 
credited 
but 
response 
got 
timed 
out 
(Beneficiary 
bank to NPCI) 
NPCI settle 
the 
transaction 
as deemed 
successful 
Remitting bank can 
see the status of 
timed-out 
transaction in TCC 
report. 
Beneficiary 
bank 
can 
upload TCC with reason 
code 102 citing that the 
customer 
account 
has 
been credited online. 
2 
Beneficiary 
bank 
response 
timed out 
Customer 
account is NOT 
credited and 
response got 
timed out 
(Beneficiary 
bank to NPCI) 
NPCI settle 
the 
transaction 
as deemed 
successful 
Remitting bank to 
check if return 
adjustment is 
raised. If not, bank 
can raise 
chargeback. While 
raising chargeback, 
bank has to ensure 
that TCC is not 
flagged. If 
beneficiary bank 
has confirmed 
credit to 
beneficiary's a/c 
through TCC, 
chargeback should 
not be raised. 
Beneficiary 
bank 
to 
reconcile and identify the 
transaction if it is approved 
at NPCI and not credited to 
customer 
online. 
Beneficiary bank to initiate 
recon based credit to their 
customer's a/c in CBS and 
update status in URCS as 
TCC-103 for information to 
remitting bank & NPCI. 
3 
Beneficiary 
bank 
response 
timed out 
Customer 
account is NOT 
credited 
and 
response 
got 
timed 
out. 
(Beneficiary 
bank to NPCI). 
Post 
reconciliation if 
beneficiary 
bank finds that 
customer 
NPCI settle 
the 
transaction 
as deemed 
successful 
Remitting bank to 
check if beneficiary 
bank has initiated 
returns 
through 
return option. If not, 
the bank can raise 
chargeback. While 
raising chargeback, 
bank has to ensure 
there is no pop-up 
message 
of 
TCC/RET. 
If 
customer 
account 
cannot be credited due to 
various 
reasons, 
beneficiary bank has to 
raise 
proactive 
returns 
using return adjustment 
option within T+1 day, to 
reverse the funds to the 
remitting bank. The return 
of funds to remitting bank 
should be made using 
"Returns" option in URCS
```

**Machine-readable table extraction(s) for PAGE 56**

#### TABLE_056_01 (source extraction: `page056_table01.csv`)

|S.<br>No|Scenario|Status at<br>beneficiary<br>bank|NPCI<br>proposed<br>actions|Remitting Bank<br>Actions|Beneficiary Bank Actions|
|---|---|---|---|---|---|
|1|Beneficiary<br>bank<br>response<br>timed out|Customer<br>account is<br>credited but<br>response got<br>timed out<br>(Beneficiary<br>bank to NPCI)|NPCI settle<br>the<br>transaction<br>as deemed<br>successful|Remitting bank can<br>see the status of<br>timed-out<br>transaction in TCC<br>report.|Beneficiary bank can<br>upload TCC with reason<br>code 102 citing that the<br>customer account has<br>been credited online.|
|2|Beneficiary<br>bank<br>response<br>timed out|Customer<br>account is NOT<br>credited and<br>response got<br>timed out<br>(Beneficiary<br>bank to NPCI)|NPCI settle<br>the<br>transaction<br>as deemed<br>successful|Remitting bank to<br>check if return<br>adjustment is<br>raised. If not, bank<br>can raise<br>chargeback. While<br>raising chargeback,<br>bank has to ensure<br>that TCC is not<br>flagged. If<br>beneficiary bank<br>has confirmed<br>credit to<br>beneficiary's a/c<br>through TCC,<br>chargeback should<br>not be raised.|Beneficiary bank to<br>reconcile and identify the<br>transaction if it is approved<br>at NPCI and not credited to<br>customer online.<br>Beneficiary bank to initiate<br>recon based credit to their<br>customer's a/c in CBS and<br>update status in URCS as<br>TCC-103 for information to<br>remitting bank & NPCI.|
|3|Beneficiary<br>bank<br>response<br>timed out|Customer<br>account is NOT<br>credited and<br>response got<br>timed out.<br>(Beneficiary<br>bank to NPCI).<br>Post<br>reconciliation if<br>beneficiary<br>bank finds that<br>customer|NPCI settle<br>the<br>transaction<br>as deemed<br>successful|Remitting bank to<br>check if beneficiary<br>bank has initiated<br>returns through<br>return option. If not,<br>the bank can raise<br>chargeback. While<br>raising chargeback,<br>bank has to ensure<br>there is no pop-up<br>message of<br>TCC/RET.|If customer account<br>cannot be credited due to<br>various reasons,<br>beneficiary bank has to<br>raise proactive returns<br>using return adjustment<br>option within T+1 day, to<br>reverse the funds to the<br>remitting bank. The return<br>of funds to remitting bank<br>should be made using<br>"Returns" option in URCS|

<!-- PAGE 57 -->
# PAGE 57

[IMAGE_113]

![IMAGE_113](images/IMAGE_113.jpeg)

**IMAGE_113 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_114]

![IMAGE_114](images/IMAGE_114.png)

**IMAGE_114 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 57/158 
account 
cannot 
be 
credited 
because 
of 
closed 
account, 
no 
such a/c exist, 
etc. 
(TCC means 
beneficiary bank 
has credited their 
customer a/c and 
RET means funds 
are returned to 
remitting bank). If 
the funds are 
returned by 
beneficiary bank, 
system will not 
allow remitter bank 
to initiate 
chargeback. 
with 
suitable 
reason 
codes. On raising returns, 
beneficiary bank will be 
debited and remitting bank 
will be credited. 
If TCC/RET is not 
flagged, 
then 
chargeback can be 
raised. 
4 
Beneficiary 
bank 
response 
timed out 
Customer 
account is NOT 
credited 
and 
response 
got 
timed 
out 
(beneficiary to 
NPCI). 
NPCI settle 
the 
transaction 
as 
successful 
Remitting 
bank 
raised chargeback 
as there is no return 
adjustment and no 
TCC 
flag 
while 
raising chargeback. 
If beneficiary bank has 
credited 
their 
customer 
account 
post 
reconciliation and fail to 
upload TCC, beneficiary 
bank can represent it or 
accept if the recon based 
credit is not given to the 
beneficiary 
banks 
end 
customer's 
account 
in 
CBS. 
 
23.1) 
CHARGEBACK COMPLIANCE POLICY 
A) REMITTING BANK 
Below is the process set for Remitting banks to follow while raising chargebacks. 
1. Customer reports the complaint to remitting banks such as remitting account 
debited but beneficiary account is not credited.  
2. Remitting bank to ensure for collecting all the corresponding information and 
documents from the complainant and do the due diligence to ensure it is valid 
complaint and eligible for raising chargeback.  
3. Remitting bank has to check the previous history of the complainant for 
repeated/multiple chargebacks raised (if any). Refer NPCI operating circular vide 
NPCI/UPI/2023-24/184 dated 05th Dec 2023. 
4. Remitting bank to check if the transaction was successful/deemed and settlement 
was done then Remitting bank can raise the chargeback for Off Us transactions in 
URCS. If the transaction is failed the Remitting bank has to check amount is
```

**Machine-readable table extraction(s) for PAGE 57**

#### TABLE_057_01 (source extraction: `page057_table01.csv`)

|||||If TCC/RET is not<br>flagged, then<br>chargeback can be<br>raised.||
|---|---|---|---|---|---|
|4|Beneficiary<br>bank<br>response<br>timed out|Customer<br>account is NOT<br>credited and<br>response got<br>timed out<br>(beneficiary to<br>NPCI).|NPCI settle<br>the<br>transaction<br>as<br>successful|Remitting bank<br>raised chargeback<br>as there is no return<br>adjustment and no<br>TCC flag while<br>raising chargeback.|If beneficiary bank has<br>credited their customer<br>account post<br>reconciliation and fail to<br>upload TCC, beneficiary<br>bank can represent it or<br>accept if the recon based<br>credit is not given to the<br>beneficiary banks end<br>customer's account in<br>CBS.|

<!-- PAGE 58 -->
# PAGE 58

[IMAGE_115]

![IMAGE_115](images/IMAGE_115.jpeg)

**IMAGE_115 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_116]

![IMAGE_116](images/IMAGE_116.png)

**IMAGE_116 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 58/158 
already reversed in online/post reconciliation, if not done then Remitting bank has 
to debit their pool account and credit the customer account. 
5. If the transaction is On Us, then Remitting bank has to follow the above defined 
process set for Off us transactions. 
6. Remitting bank can raise chargeback through front end or bulk upload option in 
URCS using appropriate dispute flag for raising chargeback in URCS, refer 
Annexure – 29 for dispute flag details. 
7. Once the chargeback is raised successfully then URCS will debit the beneficiary 
bank and credit the same to Remitting bank. However, remitting bank has to hold 
the funds as per the TAT set for a beneficiary bank to accept or reject the 
chargeback. 
8. URCS will publish the information of chargeback in the net settlement summary 
report (NTSL) and provide the detailed chargeback report for both Remitting & 
Beneficiary banks for necessary actions. 
 
B) BENEFICIARY BANK 
Below is the process set for beneficiary banks to follow while responding to the 
chargebacks. 
1. Final status of the transaction is available with beneficiary banks. Hence, 
beneficiary banks have to do proper reconciliation and raise pro-active returns 
before remitting bank raise chargeback.  
2. If a chargeback is already present before credit adjustment is raised, then 
beneficiary bank should check the status and accept/reject within TAT.  
3. If the pre-arbitration/arbitration is raised, then beneficiary bank has to submit the 
evidence citing the beneficiaries account has been credited successfully in CBS 
(or) Good/Services are provided. 
23.2) 
DISPUTE / ADJUSTMENT SETTLEMENT TIMINGS 
All disputes / adjustments will be settled in all 10 settlement cycles on all days. Refer the 
below table for details. 
 
Cycle No. From Time To Time Duration (Hrs) Expected RTGS Posting Time* 
1st Cycle 
21:00 
00:00 
03:00 
04:00 Hrs 
2nd Cycle 
00:00 
05:00 
05:00 
07:00 Hrs 
3rd Cycle 
05:00 
07:00 
02:00 
09:00 Hrs 
4th Cycle 
07:00 
09:00 
02:00 
11:00 Hrs 
5th Cycle 
09:00 
11:00 
02:00 
13:00 Hrs 
6th Cycle 
11:00 
13:00 
02:00 
15:00 Hrs 
7th Cycle 
13:00 
15:00 
02:00 
17:00 Hrs 
8th Cycle 
15:00 
17:00 
02:00 
19:00 Hrs 
9th Cycle 
17:00 
19:00 
02:00 
21:00 Hrs 
10th Cycle 
19:00 
21:00 
02:00 
23:00 Hrs
```

**Machine-readable table extraction(s) for PAGE 58**

#### TABLE_058_01 (source extraction: `page058_table01.csv`)

|Cycle No.|From Time|To Time|Duration (Hrs)|Expected RTGS Posting Time*|
|---|---|---|---|---|
|1st Cycle|21:00|00:00|03:00|04:00 Hrs|
|2nd Cycle|00:00|05:00|05:00|07:00 Hrs|
|3rd Cycle|05:00|07:00|02:00|09:00 Hrs|
|4th Cycle|07:00|09:00|02:00|11:00 Hrs|
|5th Cycle|09:00|11:00|02:00|13:00 Hrs|
|6th Cycle|11:00|13:00|02:00|15:00 Hrs|
|7th Cycle|13:00|15:00|02:00|17:00 Hrs|
|8th Cycle|15:00|17:00|02:00|19:00 Hrs|
|9th Cycle|17:00|19:00|02:00|21:00 Hrs|
|10th Cycle|19:00|21:00|02:00|23:00 Hrs|

<!-- PAGE 59 -->
# PAGE 59

[IMAGE_117]

![IMAGE_117](images/IMAGE_117.jpeg)

**IMAGE_117 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_118]

![IMAGE_118](images/IMAGE_118.png)

**IMAGE_118 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 59/158 
*Note: For raising disputes in URCS there is a cooling period of 45 minutes prior to cutover of 
every Settlement cycle till completion of settlement. It is recommended to process dispute 
raising 45 minutes prior to cutover of every settlement cycle to avoid last-minute issues if any. 
(for example, for 5th settlement cycle ensure to close raising disputes before 12:15 hrs as the 
settlement cut over is 13:00 hrs). Customer compensation will be applicable and levied if 
adjustment/disputes are raised after TAT and 16:00 hrs cutover. 
23.3) 
DISPUTE RESOLUTION MECHANISM & RESPONSIBILITIES 
Following points explain the responsibilities of members in dispute resolution:  
1. It is obligatory on the part of individual members to resolve all disputes amicably, which 
pertain to customers’ transactions, within the stipulated time as decided by NPCI and 
other competent regulatory authorities. 
2. The dispute, either to NPCI or to any other member (as directed), whoever is party to the 
dispute for the purpose of scrutiny, must follow the procedure and timelines laid down in 
this document. 
3. Interpretation, scrutiny, and resolution of disputes must happen within the ambit of rules, 
regulations, operations, and Operating & Settlement guidelines relating to the UPI 
network, instructions and operating circulars issued by NPCI, and instructions and 
directions issued by the RBI from time to time. 
4. Member banks should not raise any chargebacks to recover amounts in case of any loss 
faced due to a technical issue/glitch at banks end. Also, it is mandatory for the bank to 
report such losses immediately to NPCI as well as counterparty banks. 
23.4) 
DISPUTE GUIDELINES 
Exception transactions are those that are not reconciled and/or are disputed by the 
customer/members. Members should collaboratively endeavour to settle disputes if raised by 
counterparty banks. All such disputes should be resolved amicably as per the UPI-OSG. 
The timeline (TAT) provided in this document for each of the disputes/adjustments is subject to 
change. Any change in TAT will be communicated to UPI members through operating circulars. 
Following are the procedures of handling disputes in the URCS: 
1. UPI maintains a database for all transactions, disputes & adjustments done by its 
members in URCS. 
2. URCS validates and processes disputes only pertaining to approved/deemed approved 
transactions.  
3. Dispute/Adjustments to be raised in URCS by retrieving the transactions details based on 
the transaction date and RRN/UTXNID. 
4. Disputes like Chargeback, Credit adjustments, Re-presentment/acceptance etc. can also 
be raised through the bulk file upload option made available in URCS system. Bulk upload 
file should be in a specified Comma Separated Value (CSV) format. Maximum records in 
the bulk upload file should be 50,000. In case of 50,000+ records, member banks should 
split and upload in parts.
```

<!-- PAGE 60 -->
# PAGE 60

[IMAGE_119]

![IMAGE_119](images/IMAGE_119.jpeg)

**IMAGE_119 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_120]

![IMAGE_120](images/IMAGE_120.png)

**IMAGE_120 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 60/158 
Bankadj
ref 
fla
g 
sht
dat 
adj
amt 
shser 
UTXNID 
filen
ame 
Rea
son 
specifyother 
cradj02
032024 
C 
20-
03-
20
24 
101 
46149
87548 
UPI1551836e3a2e4258
a5c595eb90aecf07 
cradj
.csv 
109
4 
non fulfilment 
of services 
 
23.5) 
ARBITRATION 
1. If the remitting bank customer is not satisfied with the evidence/documents provided by 
the beneficiary while rejecting the disputes in chargeback and pre-arbitration stages, 
Remitter may refer the dispute to NRP through URCS by raising arbitration. Remitter 
should do due diligence with customer and raise the arbitration in URCS within TAT. 
2. Arbitration dispute raising is a non-financial stage and will not have any effect in daily 
settlement. 
3. Beneficiary Bank can either Accept/Continue arbitration raised by Remitting Bank. TAT for 
accept/continue of Arbitration dispute is 15 days. 
4. NPCI will liaise with both the remitter & beneficiary banks and put best efforts to close the 
arbitration basis the guidelines set for resolving the arbitration. 
5. If Beneficiary Bank continues with the arbitration, NRP will give verdict basis the 
guidelines set for resolving the arbitration. 
6. The bank against whom the NRP verdict has been given can appeal to PRD, if not satisfied 
even with PRD verdict then bank may appeal to RBI as appellate authority. 
A) ARBITRATION GUIDELINES 
All the participant banks should put best effort to resolve all exceptional transactions 
through proactive returns for approved/deemed approved transactions. If the disputes 
are raised, then the banks should ensure to close the dispute within the chargeback 
accept/reject life cycle and avoid pre-arbitrations and arbitrations. 
 
Customer complaint is mandatory for raising arbitration by the remitting/issuing bank 
(URCS already has the upload attachment option while raising arbitration same option 
has to be used for uploading complaint copy/screenshot). A complaint copy can be 
scanned copy of written complaint, unedited copy of email, IVR, tollfree, screenshots of 
websites/UPI PSP app/social media channels/bank CRM portals etc. raised with banks 
or regulatory bodies (viz. Ombudsman, CPGRAM, NCH, CEPC, IBA, MeitY etc.). 
 
Below is the NRP and PRD process. 
 
NRP & PRD process has been implemented w.e.f. chargeback cases raised from 5th Oct 
2024. Refer NPCI operating circular NPCI/UPI/2024-25/208 for details.
```

**Machine-readable table extraction(s) for PAGE 60**

#### TABLE_060_01 (source extraction: `page060_table01.csv`)

|Bankadj<br>ref|fla<br>g|sht<br>dat|adj<br>amt|shser|UTXNID|filen<br>ame|Rea<br>son|specifyother|
|---|---|---|---|---|---|---|---|---|
|cradj02<br>032024|C|20-<br>03-<br>20<br>24|101|46149<br>87548|UPI1551836e3a2e4258<br>a5c595eb90aecf07|cradj<br>.csv|109<br>4|non fulfilment<br>of services|

<!-- PAGE 61 -->
# PAGE 61

[IMAGE_121]

![IMAGE_121](images/IMAGE_121.jpeg)

**IMAGE_121 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_122]

![IMAGE_122](images/IMAGE_122.png)

**IMAGE_122 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 61/158 
NPCI Review Panel (NRP) 
1. NRP Processing Fees of ₹ 500 + GST shall be levied for each arbitration case referred 
to NRP (debit remitting/issuing bank and credit NPCI). 
2. NRP processing fees will be reversed if the verdict is given in favour of the 
remitting/issuing bank (debit beneficiary/acquirer bank and credit remitting/issuing 
bank). 
3. NRP processing fees will not be reversed if the remitting/issuing bank withdraws the 
arbitration. 
4. NRP comprises 3 officials to be part of the NRP, including the Chairman. 
5. NRP will review the documents/supporting evidence submitted by member banks for 
cases referred accordingly verdict will be given by NRP.  
6. If remitting bank / remitting bank’s customer is not satisfied with the NRP decision (if 
the verdict is in favour of beneficiary/acquiring bank), then remitting bank may refer 
the case to PRD. 
7. If beneficiary/acquiring bank is not satisfied with the NRP decision (if verdict is in 
favour of remitting bank), then beneficiary/acquiring bank may refer the case to PRD. 
 
Panel for Dispute Resolution (PRD) 
1. PRD Processing Fees of 3,000 + GST shall be levied for each arbitration referred to 
PRD 
2. Both NRP & PRD processing fees will be reversed if the verdict is given in favour of the 
PRD raising bank (debit PRD continuing bank and credit PRD raising bank). 
3. PRD processing fees will not be reversed to the bank requesting for PRD withdrawing 
the PRD case. 
4. PRD comprises 5 officials where 4 are from steering committee and 1 is from NPCI 
as chairperson. 
5. PRD will review the documents/supporting evidence submitted by member banks for 
cases referred accordingly verdict will be given by PRD. 
 
RBI (as Appellate Authority) 
If any bank is not satisfied with the NRP & PRD verdict, bank may refer the case to RBI (as 
Appellate Authority). 
 
Settlement of NRP fee, PRD fee & Reversal of NRP & PRD fee including GST will be done 
on daily/weekly basis. Separate Invoice & GST reports will be shared on monthly basis. 
Once the same is automated in URCS, fee & GST settlement will be done cycle wise and 
Invoice/GST reports will be shared on monthly basis. 
 
Beneficiary banks should use only front-end option to reject the arbitrations along with 
necessary evidence. Do not use bulk option for rejecting the arbitrations and send the 
evidence through emails which is problem for NPCI/remitting/issuing banks for tracking 
the arbitration continuation in bulk and corresponding evidence in e-mail. If any 
beneficiary/acquiring bank sends the evidence through e-mail it will not be considered 
for any action. NPCI is in process of automating the bulk rejection along with upload bulk
```

<!-- PAGE 62 -->
# PAGE 62

[IMAGE_123]

![IMAGE_123](images/IMAGE_123.jpeg)

**IMAGE_123 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_124]

![IMAGE_124](images/IMAGE_124.png)

**IMAGE_124 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 62/158 
evidence, till NPCI provides this solution in URCS beneficiary/acquiring banks should 
use front end option only for rejection and upload evidence. 
 
Arbitration will be considered as deemed accepted if beneficiary/acquiring bank does 
not accept/reject the arbitration within TAT of 15 calendar days (from the next day of the 
arbitration is raised). 
 
NPCI provides the NRP/PRD verdict to member banks through email. If the verdict is 
given in favour of remitting/issuing bank (including deemed acceptance of arbitration), 
then NPCI will ask beneficiary/acquiring bank for confirming the RBI customer 
compensation 
applicability 
in 
the 
same 
email 
where 
verdict 
is 
given. 
Beneficiary/acquiring bank should reply to NPCI on same email within TAT of 3 calendar 
days. Compensation Confirmation is same as existing process of AC/AT confirmation 
(AC for no compensation and AT for settlement of compensation amount) flag should be 
used for confirmation in email. If the compensation confirmation is not given to NPCI 
within 3 calendar days from next day of NRP/PRD verdict, then NPCI will settle customer 
compensation amount on deemed acceptance basis. Once the aforesaid process is 
automated in URCS, NPCI will discontinue the e-mail process. 
 
Evidence has to be provided at the time of continuing the arbitration. Once the 
arbitration is continued, thereafter no further evidence is taken into consideration (e.g. 
Arbitration raised on 1st Oct 2024. TAT for continuing arbitration is 15 days. In this case, 
evidence has to be provided between 1st Oct 2024 to 16th Oct 2024, no evidence will be 
considered if sent on or after 17th Oct 2024). 
B) WITHDRAWAL FROM ARBITRATION 
Remitting bank can withdraw arbitration within 15 days from arbitration raise. Funds will 
not be settled in this case, because arbitration raise is non-financial. 
C) ACCEPTANCE OF ARBITRATION 
Beneficiary bank can accept the arbitration for any reason if they find credit has not been 
processed (or) goods/services has not been provided to the beneficiary bank customer. 
Funds will be settled in this case (Beneficiary bank will be debited and Remitting bank will 
be credited along with arbitration fee and RBI customer compensation as applicable).  
D) ARBITRATION CONTINUATION 
Beneficiary bank can reject the arbitration if they find credit has been processed (or) 
goods/services has been provided to the beneficiary bank customer. Funds will not be 
settled in this case as the funds are already available with the merchant. 
E) NPCI REVIEW PANEL (NRP) 
1. If beneficiary chose to continue the arbitration with evidence, NRP will validate the 
evidence submitted by beneficiary and if it finds to be valid, then the verdict will be 
given in favour of the beneficiary bank.
```

<!-- PAGE 63 -->
# PAGE 63

[IMAGE_125]

![IMAGE_125](images/IMAGE_125.jpeg)

**IMAGE_125 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_126]

![IMAGE_126](images/IMAGE_126.png)

**IMAGE_126 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 63/158 
2. If the evidence provided by the beneficiary bank is not valid/legible then the verdict 
will be given in favour of the Remitting bank.  
3. If the Beneficiary bank does not respond with any evidence within TAT, then the same 
will be considered as deemed accepted and close the arbitration in favour of the 
Remitting bank. Beneficiary bank may take up the matter with Remitting bank on good 
faith basis if the evidence has been gathered after the TAT. 
4. For decision in favour of Beneficiary Bank, there will not be any settlement for the 
disputed transaction amount. 
5. For cases where Beneficiary bank accepted arbitration and cases where NRP decision 
is in favour of Remitting bank, Beneficiary bank will be debited and credit will be given 
to Remitter Bank with the Transaction amount and customer compensation (if any as 
per the beneficiary bank confirmation). The NRP fees of ₹ 500/- plus GST will be 
reimbursed to Remitter bank by debiting Beneficiary bank. 
F) PANEL FOR RESOLUTION OF DISPUTES (PRD) 
1. NPCI will conduct meeting with the Panel for Resolution of Disputes (PRD). PRD 
comprises 5 officials where 4 are from steering committee and 1 is from NPCI as 
chairperson. 
2. If the remitter or beneficiary bank still disputes the arbitration even after NRP verdict, 
then the bank may choose to raise PRD. 
3. PRD raising bank can withdraw PRD within 15 days from arbitration raise. Funds will 
not be settled in this case, because PRD raise is non-financial. 
4. The opposite bank may choose accept/continue the PRD with evidence, PRD will 
validate the evidence and if it finds to be valid, then the verdict will be given in favour 
of the PRD continuing bank. 
5. If the evidence is not valid/legible then the verdict will be given in favour of the PRD 
raising bank.  
6. If the PRD continuing bank does not respond with any evidence within TAT, then the 
same will be considered as deemed accepted and close the PRD in favour of the 
PRD raising bank. 
7. For cases where PRD is accepted and cases where PRD decision is in favour of PRD 
raising bank, PRD continued bank will be debited and credit will be given to PRD 
raising bank with the transaction amount and customer compensation (if any). Both 
NRP & PRD fees of ₹ 500/- plus GST and ₹ 3,000/- plus GST will be reimbursed to PRD 
raising bank by debiting PRD continued bank. 
8. For cases where NRP decision goes in favour of remitting bank, beneficiary banks are 
advised to keep customer credits on hold for 5 days as the beneficiary bank may 
raise PRD. After 5 days, the beneficiary bank will have no right to PRD and remitting 
bank can credit their customer’s account on 6th day. 
9. Beneficiary/acquiring bank should put the best efforts to get the proper and valid 
evidence at the time of rejecting the chargeback and avoid pre-arbitration/arbitration 
(NRP/PRD). NPCI will analyse all the PRDs periodically and if any bank is found to be 
submitting proper & valid evidence only in PRDs stage mostly, then NPCI will be take 
up the matter on non-compliance basis.
```

<!-- PAGE 64 -->
# PAGE 64

[IMAGE_127]

![IMAGE_127](images/IMAGE_127.jpeg)

**IMAGE_127 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_128]

![IMAGE_128](images/IMAGE_128.png)

**IMAGE_128 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 64/158 
 
Dr
Cr
Dr
Cr
Dr
Cr
Dr
Cr
Dr
Cr
Dr
Cr
AR
1100
FAR
127
Arbitration 
Withdraw
REM / 
ISS
15 days from 
next day of 
Arbitration 
Raise
U2 / 
U3 / 
UC
ACW
1103
AT
BEN / 
ACQ
REM / 
ISS
AC
U3 / 
UC
1101
BEN / 
ACQ
REM / 
ISS
Arbitration 
Continue
BEN / 
ACQ
15 days from 
next day of 
Arbitration 
Raise
U2 / 
U3 / 
UC
ACC
1102
NRP Verdict 
in favor of 
BEN / ACQ 
Bank
NPCI
30 days from 
next day of 
Arbitration 
Continue
U2 / 
U3 / 
UC
U2
BEN / 
ACQ 
(upon 
'AT' 
confirma
tion)
REM / 
ISS 
(upon 
'AT' 
confirma
tion)
U3 / 
UC
BEN / 
ACQ
REM / 
ISS
PRD Raise
REM / 
ISS
5 days from 
next day of 
NRP Verdict 
given in favour 
of BEN / ACQ 
Bank
U2 / 
U3 / 
UC
REM / 
ISS
NPCI
PRD 
Withdraw
REM / 
ISS
15 days from 
next day of 
PRD Raise
U2 / 
U3 / 
UC
U2
BEN / 
ACQ 
(upon 
'AT' 
confirma
tion)
REM / 
ISS 
(upon 
'AT' 
confirma
tion)
U3 / 
UC
BEN / 
ACQ
REM / 
ISS
PRD 
Continue
BEN / 
ACQ
15 days from 
next day of 
PRD Raise
U2 / 
U3 / 
UC
PRD Verdict 
in favor of 
BEN / ACQ 
Bank
PRD
30 days from 
next day of 
PRD Continue
U2 / 
U3 / 
UC
U2
BEN / 
ACQ 
(upon 
'AT' 
confirma
tion)
REM / 
ISS 
(upon 
'AT' 
confirma
tion)
U3 / 
UC
BEN / 
ACQ
REM / 
ISS
PRD Raise
BEN / 
ACQ
5 days from 
next day of 
NRP Verdict 
given in favour 
of REM / ISS 
Bank
U2 / 
U3 / 
UC
BEN / 
ACQ
NPCI
PRD 
Withdraw
BEN / 
ACQ
15 days from 
next day of 
PRD Raise
U2 / 
U3 / 
UC
U2
REM / 
ISS (if 
paid 
after 
NRP 
verdict)
BEN / 
ACQ (if 
paid 
after 
NRP 
verdict)
U3 / 
UC
REM / 
ISS
BEN / 
ACQ
PRD 
Continue
REM / 
ISS
15 days from 
next day of 
PRD Raise
U2 / 
U3 / 
UC
U2
REM / 
ISS (if 
paid 
after 
NRP 
verdict)
BEN / 
ACQ (if 
paid 
after 
NRP 
verdict)
U3 / 
UC
REM / 
ISS
BEN / 
ACQ
PRD Verdict 
in favor of 
REM / ISS 
Bank
PRD
30 days from 
next day of 
PRD Continue
U2 / 
U3 / 
UC
BEN / 
ACQ
15 days from 
next day of 
Arbitration 
Raise
Arbitration 
Stage
Raised 
By
TAT
BEN / 
ACQ
REM / 
ISS
BEN / 
ACQ
BEN / 
ACQ
REM / 
ISS
Panel for resolution of disputes (PRD) : NRP Verdict given in favour of BEN / ACQ Bank
BEN / 
ACQ
REM / 
ISS
REM / 
ISS
REM / 
ISS
NRP Verdict 
in favor of 
REM / ISS 
Bank
NPCI
30 days from 
next day of 
Arbitration 
Continue
BEN / 
ACQ
REM / 
ISS
BEN / 
ACQ
Adj 
Flag
TXN 
Sub 
Type
Fund Movement
Dispute 
Amount
RBI Customer 
Compensation 
Amount
NRP Fee 
Rs. 500/- & 
GST 
Reversal 
PRD Fee & 
GST
PRD Fee Rs. 
3,000/- & 
GST
Reversal 
NRP Fee & 
GST
Adj 
Reason 
Code
Arbitration
NPCI
Panel for resolution of disputes (PRD) : NRP Verdict given in favour of REM / ISS Bank
Arbitration 
Raise / 
Deferred 
Arbitration 
Raise
REM / 
ISS
15 days from 
next day of Pre-
Arbitration 
Decline
U2 / 
U3 / 
UC
ACA
U2
NPCI Review Panel (NRP)
Arbitration 
Accept / 
Deemed 
Accept
PRD Accept / 
Deemed 
Accept
BEN / 
ACQ
15 days from 
next day of 
PRD Raise
PRD Verdict 
in favor of 
REM / ISS 
Bank
PRD
30 days from 
next day of 
PRD Continue
REM / 
ISS
BEN / 
ACQ
REM 
/ ISS
BEN / 
ACQ
BEN / 
ACQ
REM / 
ISS
BEN / 
ACQ
REM / 
ISS
BEN / 
ACQ
REM 
/ ISS
REM / 
ISS
BEN / 
ACQ
REM 
/ ISS
BEN / 
ACQ
REM 
/ ISS
BEN / 
ACQ
REM / 
ISS
PRD Accept / 
Deemed 
Accept
REM / 
ISS
15 days from 
next day of 
PRD Raise
REM / 
ISS
BEN / 
ACQ
PRD Verdict 
in favor of 
BEN / ACQ 
Bank
PRD
30 days from 
next day of 
PRD Continue
REM / 
ISS
BEN / 
ACQ
```

**Machine-readable table extraction(s) for PAGE 64**

#### TABLE_064_01 (source extraction: `page064_table01.csv`)

|Arbitration<br>Stage|Raised<br>By|TAT|TXN<br>Sub<br>Type|Adj<br>Flag|Adj<br>Reason<br>Code|Fund Movement||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|||||||Dispute<br>Amount||RBI Customer<br>Compensation<br>Amount||NRP Fee<br>Rs. 500/- &<br>GST||PRD Fee Rs.<br>3,000/- &<br>GST||Reversal<br>NRP Fee &<br>GST||Reversal<br>PRD Fee &<br>GST||
|||||||Dr|Cr|Dr|Cr|Dr|Cr|Dr|Cr|Dr|Cr|Dr|Cr|
|Arbitration||||||||||||||||||
|Arbitration<br>Raise /<br>Deferred<br>Arbitration<br>Raise|REM /<br>ISS|15 days from<br>next day of Pre-<br>Arbitration<br>Decline|U2 /<br>U3 /<br>UC|AR|1100|||||REM /<br>ISS|NPCI|||||||
|||||FAR|127|||||||||||||
|Arbitration<br>Withdraw|REM /<br>ISS|15 days from<br>next day of<br>Arbitration<br>Raise|U2 /<br>U3 /<br>UC|ACW|1103|||||||||||||
|Arbitration<br>Accept /<br>Deemed<br>Accept|BEN /<br>ACQ|15 days from<br>next day of<br>Arbitration<br>Raise|U2|ACA|AT|BEN /<br>ACQ|REM /<br>ISS|BEN /<br>ACQ|REM /<br>ISS|||||BEN /<br>ACQ|REM /<br>ISS|||
||||||AC|||||||||||||
||||U3 /<br>UC||1101|||BEN /<br>ACQ|REM /<br>ISS|||||||||
|Arbitration<br>Continue|BEN /<br>ACQ|15 days from<br>next day of<br>Arbitration<br>Raise|U2 /<br>U3 /<br>UC|ACC|1102|||||||||||||
|NPCI Review Panel (NRP)||||||||||||||||||
|NRP Verdict<br>in favor of<br>BEN / ACQ<br>Bank|NPCI|30 days from<br>next day of<br>Arbitration<br>Continue|U2 /<br>U3 /<br>UC|||||||||||||||
|NRP Verdict<br>in favor of<br>REM / ISS<br>Bank|NPCI|30 days from<br>next day of<br>Arbitration<br>Continue|U2|||BEN /<br>ACQ|REM /<br>ISS|BEN /<br>ACQ<br>(upon<br>'AT'<br>confirma<br>tion)|REM /<br>ISS<br>(upon<br>'AT'<br>confirma<br>tion)|||||BEN /<br>ACQ|REM /<br>ISS|||
||||U3 /<br>UC|||||BEN /<br>ACQ|REM /<br>ISS|||||||||
|Panel for resolution of disputes (PRD) : NRP Verdict given in favour of BEN / ACQ Bank||||||||||||||||||
|PRD Raise|REM /<br>ISS|5 days from<br>next day of<br>NRP Verdict<br>given in favour<br>of BEN / ACQ<br>Bank|U2 /<br>U3 /<br>UC|||||||||REM /<br>ISS|NPCI|||||
|PRD<br>Withdraw|REM /<br>ISS|15 days from<br>next day of<br>PRD Raise|U2 /<br>U3 /<br>UC|||||||||||||||
|PRD Accept /<br>Deemed<br>Accept|BEN /<br>ACQ|15 days from<br>next day of<br>PRD Raise|U2|||BEN /<br>ACQ|REM /<br>ISS|BEN /<br>ACQ<br>(upon<br>'AT'<br>confirma<br>tion)|REM /<br>ISS<br>(upon<br>'AT'<br>confirma<br>tion)|||||BEN /<br>ACQ|REM /<br>ISS|BEN /<br>ACQ|REM<br>/ ISS|
||||U3 /<br>UC|||||BEN /<br>ACQ|REM /<br>ISS|||||||||
|PRD<br>Continue|BEN /<br>ACQ|15 days from<br>next day of<br>PRD Raise|U2 /<br>U3 /<br>UC|||||||||||||||
|PRD Verdict<br>in favor of<br>BEN / ACQ<br>Bank|PRD|30 days from<br>next day of<br>PRD Continue|U2 /<br>U3 /<br>UC|||||||||||||||
|PRD Verdict<br>in favor of<br>REM / ISS<br>Bank|PRD|30 days from<br>next day of<br>PRD Continue|U2|||BEN /<br>ACQ|REM /<br>ISS|BEN /<br>ACQ<br>(upon<br>'AT'<br>confirma<br>tion)|REM /<br>ISS<br>(upon<br>'AT'<br>confirma<br>tion)|||||BEN /<br>ACQ|REM /<br>ISS|BEN /<br>ACQ|REM<br>/ ISS|
||||U3 /<br>UC|||||BEN /<br>ACQ|REM /<br>ISS|||||||||
|Panel for resolution of disputes (PRD) : NRP Verdict given in favour of REM / ISS Bank||||||||||||||||||
|PRD Raise|BEN /<br>ACQ|5 days from<br>next day of<br>NRP Verdict<br>given in favour<br>of REM / ISS<br>Bank|U2 /<br>U3 /<br>UC|||||||||BEN /<br>ACQ|NPCI|||||
|PRD<br>Withdraw|BEN /<br>ACQ|15 days from<br>next day of<br>PRD Raise|U2 /<br>U3 /<br>UC|||||||||||||||
|PRD Accept /<br>Deemed<br>Accept|REM /<br>ISS|15 days from<br>next day of<br>PRD Raise|U2|||REM /<br>ISS|BEN /<br>ACQ|REM /<br>ISS (if<br>paid<br>after<br>NRP<br>verdict)|BEN /<br>ACQ (if<br>paid<br>after<br>NRP<br>verdict)|||||REM /<br>ISS|BEN /<br>ACQ|REM<br>/ ISS|BEN /<br>ACQ|
||||U3 /<br>UC|||||REM /<br>ISS|BEN /<br>ACQ|||||||||
|PRD<br>Continue|REM /<br>ISS|15 days from<br>next day of<br>PRD Raise|U2 /<br>U3 /<br>UC|||||||||||||||
|PRD Verdict<br>in favor of<br>BEN / ACQ<br>Bank|PRD|30 days from<br>next day of<br>PRD Continue|U2|||REM /<br>ISS|BEN /<br>ACQ|REM /<br>ISS (if<br>paid<br>after<br>NRP<br>verdict)|BEN /<br>ACQ (if<br>paid<br>after<br>NRP<br>verdict)|||||REM /<br>ISS|BEN /<br>ACQ|REM<br>/ ISS|BEN /<br>ACQ|
||||U3 /<br>UC|||||REM /<br>ISS|BEN /<br>ACQ|||||||||
|PRD Verdict<br>in favor of<br>REM / ISS<br>Bank|PRD|30 days from<br>next day of<br>PRD Continue|U2 /<br>U3 /<br>UC|||||||||||||||

<!-- PAGE 65 -->
# PAGE 65

[IMAGE_129]

![IMAGE_129](images/IMAGE_129.jpeg)

**IMAGE_129 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_130]

![IMAGE_130](images/IMAGE_130.png)

**IMAGE_130 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 65/158 
23.6) 
WRONG CREDIT CHARGEBACK PROCESS (WC) 
This section defines the chargeback process for handling wrong transfers on account of the 
remitting bank customer’s issue such as typographical errors while entering mobile number, 
UPI ID/VPA and beneficiary bank customer’s IFSC & account number resulting in wrong 
transfers to unintended customer's account. Refer NPCI operating circular vide 
NPCI/UPI/2017-18/41 dated 15th Dec 2017 for details. 
 
A) REMITTING BANKS ROLE FOR WC 
Basis the customer complaint, remitting bank can raise wrong credit chargeback in 
URCS if the customer submits that funds have been transferred to wrong customer's 
account. URCS provides option to upload indemnity letter while raising wrong credit 
chargeback in URCS. Chargebacks for wrong credits are allowed on U3 Approved (RC-
00) and Deemed Approved (RC-RB) Transactions. 
B) BENEFICIARY BANKS ROLE FOR WC 
Beneficiary banks are requested to follow their internal process for recovering funds 
from the wrong customer's account and accept the chargeback, wherever applicable. 
Beneficiary banks should use appropriate reason codes for accepting or rejecting such 
chargebacks. If beneficiary bank does not accept or reject the chargeback within in 35 
days TAT, then such chargeback will be treated as deemed accepted. 
23.7) 
FRAUD CHARGEBACK PROCESS (FC) 
This section defines the chargeback process for handling fraudulent UPI transactions on 
account of remitting bank’s customer issues. 
 
A) REMITTING BANKS ROLE FOR FC 
Basis the customer complaint, remitting bank can raise fraud chargeback in URCS. 
Fraud chargebacks are allowed on all UPI Transactions. URCS provides option to 
upload FIR and other relevant copies while raising fraud chargeback in URCS. 
B) BENEFICIARY BANKS ROLE FOR FC 
Once remitting bank raises fraud chargeback, URCS will not allow beneficiary bank to 
accept/reject for initial 5 days from fraud chargeback raise. URCS will allow 
beneficiary bank to accept/reject from 6th day of fraud chargeback raise. Beneficiary 
banks are requested to follow their internal process for recovering funds from the 
fraudster’s account and accept the chargeback, wherever applicable. Beneficiary 
banks should use appropriate reason codes for accepting or rejecting such 
chargebacks. If beneficiary bank does not accept or reject the chargeback within 35 
days TAT, then such chargeback will be treated as deemed accepted. 
23.8) 
GENERIC GOOD FAITH CREDIT ADJUSTMENTS 
Banks should raise Generic Good Faith Credit adjustments option in URCS for 
managing exceptional transactions (viz. wrong credit recoveries done after the TAT is 
expired where dispute has been already represented because of non-availability of
```

<!-- PAGE 66 -->
# PAGE 66

[IMAGE_131]

![IMAGE_131](images/IMAGE_131.jpeg)

**IMAGE_131 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_132]

![IMAGE_132](images/IMAGE_132.png)

**IMAGE_132 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 66/158 
funds, similarly fraud chargebacks recovery, etc.). Generic good faith credit 
adjustments should be raised only to manage exceptional transactions or recovery of 
funds done after the TAT expiry (as mentioned above). Refer NPCI operating circular 
NPCI/UPI/2024-25/206 for details. 
A) BGGC – BENEFICIARY BANK RAISING GENERIC GOOD FAITH CREDIT 
ADJUSTMENT 
Beneficiary Bank can raise generic good-faith credit adjustments (allowed for P2P or 
P2PM or P2M) for giving funds to other remitting banks (e.g.  beneficiary bank recovers 
the chargeback amount of wrong credit funds/chargebacks amount of fraud 
transaction funds etc. after the 35 days TAT). Once the adjustment is raised funds will 
be settled immediately by debiting the beneficiary bank who has raised the 
adjustment and credit the same to remitting bank who has received credit adjustment. 
Remitting bank who has received the credit adjustments has to accept or represent 
BGGC within 3 calendar days otherwise the adjustment window will be closed on 
deemed acceptance.  
B) RGGC – REMITTING BANK RAISING GENERIC GOOD FAITH CREDIT ADJUSTMENT 
Remitting Bank can raise generic good-faith credit adjustments (for P2P or P2PM or 
P2M) for giving funds to other beneficiary banks (e.g.  Beneficiary bank missed to re-
present the chargeback within TAT and raise good faith request to remitting bank, 
remitting bank can raise RGGC for giving the funds to the beneficiary bank (if the funds 
are not credited or recovered by remitting bank). Once the RGGC adjustment is raised, 
funds will be settled immediately by debiting the remitting bank who has raised the 
RGGC adjustment and credit the same to beneficiary bank who has received credit 
adjustment. Beneficiary bank who has received the credit adjustments has to accept 
or represent within 3 calendar days otherwise the adjustment window will be closed 
on deemed acceptance. 
C) ADJUSTMENTS LIFE CYCLE 
Adjustment life cycle for above generic good faith adjustments are as follows,  
1. Raise: BGGC has to be raised by beneficiary banks and RGGC has to be raised by 
the Remitting bank. 
2. Acceptance: Bank who has received the generic good faith adjustments has to 
accept in URCS. 
3. Re-presentment: Bank who has received the generic good faith adjustments may 
reject the adjustments due to any reason (if customer account cannot be 
credited, etc.). 
4. Deemed Acceptance: Bank who has received the generic good faith adjustments 
has not taken any action (accept/re-presentment) on adjustments within TAT of 3 
calendar days, then adjustment will be closed on deemed acceptance. 
 
D) NON – COMPLIANCE 
Banks should not raise any adjustments for which the life cycle of the dispute is 
already within TAT which has to be accepted or represented (as the case may be) in 
URCS. NPCI will take up the matter as non-compliance to the NPCI guidelines, in case,
```

<!-- PAGE 67 -->
# PAGE 67

[IMAGE_133]

![IMAGE_133](images/IMAGE_133.jpeg)

**IMAGE_133 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_134]

![IMAGE_134](images/IMAGE_134.png)

**IMAGE_134 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 67/158 
if any bank raises generic good faith adjustments instead of accepting or representing 
in URCS which are within TAT. 
E) TAT FOR GENERIC GOOD FAITH ADJUSTMENTS 
All generic good faith adjustments should be either accepted/represented within 3 
calendar days from the next day of generic good faith adjustment is raised. Otherwise, 
the window will be closed on deemed acceptance. 
F) VALIDATION OF ADJUSTMENTS 
URCS will not validate BGGC & RGGC adjustments with original transaction or 
disputes. Only file formats will be validated as per the specification. However, once 
the manual adjustment is processed successfully it will be stored in repository and 
duplicate generic good faith adjustments will not be allowed (duplicate generic good 
faith means all the transaction details are same). 
 
G) RBI PENALTY CALCULATION 
RBI Compensation will be processed for BGGC only as per the RBI circular DPSS.CO. 
PD. No.629/02.01.014/2019-20 dated 20th September 2019 towards harmonisation of 
Turn Around Time (TAT) and customer compensation for failed transactions using 
authorized Payment Systems and NPCI OC vide reference number NPCI/IMPS-
UPI/OC-93/2019-20. Refer below the details for reference, 
1. RGGC – No penalty is applicable, because these are good faith request raised by 
the beneficiary bank on remitting banks for not re-presenting the chargebacks/pre-
arbitrations etc. within TAT. Note: The “Penalty Flag” field will not be available in 
the front-end interface. However, in the bulk file format, the penalty flag will be 
visible for all three generic good faith adjustments. If a beneficiary bank mistakenly 
selects “Y”, still the penalty will not be processed for RGGC. 
2. BGGC – URCS will allow beneficiary bank to choose the penalty flag Y/N (Yes or 
No) while raising BGGC in both front end and bulk. If the beneficiary bank chooses 
the penalty flag Y, then penalty will be processed and if the penalty flag is chosen 
N, then penalty will not be settled similar to the existing AC/AT flags  
3. Re-Presentment of BGGC P2P, P2PM & P2M – If a remitting bank re-present the 
BGGC within TAT of 3 days URCS will reverse the transaction amount along with 
RBI penalty (if RBI penalty is already settled). 
 
H) INVALID THREE DIGITS CODE/PARTICIPANT ID 
Member banks should use proper three digits code viz. sponsor bank codes, sub-
member bank codes, RuPay CC on UPI bank codes etc. If invalid codes are used, then 
adjustment will be settled to the invalid banks. Hence, banks should use proper and 
correct three digits code as per the AUTH settlement. 
I) 
DUPLICATE BULK FILE CHECK 
If any manual adjustments are processed with same file name (duplicate file where 
primary is already processed successfully/failed), then URCS will reject the entire file.
```

<!-- PAGE 68 -->
# PAGE 68

[IMAGE_135]

![IMAGE_135](images/IMAGE_135.jpeg)

**IMAGE_135 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_136]

![IMAGE_136](images/IMAGE_136.png)

**IMAGE_136 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 68/158 
J) GENERIC GOOD FAITH ADJUSTMENT REPORT 
All generic good faith adjustments will be made available in the existing adjustment 
report with separate flag i.e. BGGC & RGGC under two headers i.e. Adjtype & Dispute 
Flag. 
K) UNSETTLED TRANSACTIONS 
Member banks should not raise any generic adjustments in URCS for unsettled 
transactions. Such cases must be reported to NPCI. 
L) KEY POINTS: 
 
1. URCS will not validate generic good faith adjustments entries raised by the 
member banks in the system unlike current disputes process where URCS verify 
all the logical conditions and process the dispute successfully or reject (as the 
case may be). Hence, member banks should ensure to do due diligence and 
proper validation of all adjustments before raising in URCS. Only bulk file format 
and other mandatory data fields length & format will be validated (refer section 
BULK FILE FORMAT in the Annexure – 1)  
2. Good faith adjustment once settled will not be allowed again if all the fields are 
same with duplicate adjustment error code and description. 
3. URCS has harmonisation of TAT & customer compensation for BGGC. Member 
banks should choose penalty flag wherever it is applicable Y or N (Yes or No). If 
bank is raising with flag Y, then penalty will be processed as per existing process 
and for N no penalty shall be applied. No penalty is applicable for RGGC. 
4. Banks should use proper and correct three digits code while raising adjustments 
through front end or bulk as per the AUTH settlement only (If the AUTH transaction 
is settled e.g. Remitting bank – ABC and Beneficiary bank XYZ then same bank 
codes has to be used for raising debit/credit adjustments), three-digit code should 
not be altered. 
5. Account number is mandatory for banks to enter when manual adjustment is 
raised through front end or bulk upload. Use account number of other bank 
customers/merchants where credit or debit has to be done by the respective bank 
who receives generic good faith adjustments (Debit/Credit). Once the adjustments 
are successfully settled URCS will update the account number in adjustment 
report (refer SHDT74 column).  
6. Generic good faith debit/credit adjustment amount & customer compensation 
amount (if any – as per the beneficiary bank declaration while raising the BGGC in 
URCS) will be settled in existing NTSL line item ‘Net Adjusted Amount’ & ‘Customer 
Compensation for Non-Compliance Debit/Credit. 
23.9) 
MASTER TABLE OF DISPUTES / ADJUSTMENT / STATUS UPDATE 
The below master table contains the disputes type, transaction type for which the disputes 
are allowed, disputes flag, TAT, fund movement after raising dispute/adjustments, RC (for 
which disputes are allowed), base transaction for which disputes are allowed Note: All TATs 
are calendar days.
```

<!-- PAGE 69 -->
# PAGE 69

[IMAGE_137]

![IMAGE_137](images/IMAGE_137.jpeg)

**IMAGE_137 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_138]

![IMAGE_138](images/IMAGE_138.png)

**IMAGE_138 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 69/158 
Dispute / 
Adjustment 
Stage 
Previous 
Stage  
TAT 
(days 
from 
previous 
stage) 
Flag 
Rais
ed 
By 
Recei
ved 
By 
Fund 
Movement 
Note 
Dr 
Cr 
U3 Transactions with RC-00 (Approved) 
Credit 
Adjustments 
Original TXN 
45 
C 
BEN 
REM 
BEN 
REM 
  
Online Refund 
Original TXN 
60 
REF 
BEN 
REM 
BEN 
REM 
Refund 
Reversal 
Confirmation 
(RRC) 
Credit 
Adjustments 
60 
RRC 
REM 
- 
- 
- 
Wrong Credit 
Chargeback 
Original TXN 
45 
WC 
REM 
BEN 
BEN 
REM 
Wrong Credit 
Representment 
Wrong Credit 
Chargeback 
35 
WR 
BEN 
REM 
REM 
BEN 
Wrong Credit 
Chargeback 
Acceptance / 
Deemed 
Wrong Credit 
Chargeback 
35 
WA 
BEN 
REM 
- 
- 
Fraud 
Chargeback 
Raise 
Original TXN 
45 
FC 
REM 
BEN 
BEN 
REM 
Fraud 
Chargeback 
Representment 
Fraud 
Chargeback 
Raise 
35 
FCR 
BEN 
REM 
REM 
BEN 
Fraud 
Chargeback 
Acceptance / 
Deemed 
Fraud 
Chargeback 
Raise 
35 
FCA 
BEN 
REM 
- 
- 
Chargeback 
Raise 
Original TXN 
45 
B 
REM 
BEN 
BEN 
REM 
Representment 
Raise 
Chargeback 
Raise 
3 
R 
BEN 
REM 
REM 
BEN 
Chargeback 
Accept / 
Deemed 
Chargeback 
Raise 
3 
A 
BEN 
REM 
- 
- 
Pre-Arbitration 
Raise 
Representme
nt Raise 
30 
P 
REM 
BEN 
- 
- 
Pre-Arbitration 
Decline 
Pre-
Arbitration 
Raise 
5 
PR 
BEN 
REM 
- 
- 
Pre-Arbitration 
Accept / 
Deemed 
Pre-
Arbitration 
Raise 
5 
AP 
BEN 
REM 
BEN 
REM 
Arbitration 
Raise 
Pre-
Arbitration 
Raise 
15 
AR 
REM 
BEN 
- 
- 
Arbitration 
Withdraw 
Arbitration 
Raise 
15 
ACW 
REM 
BEN 
- 
-
```

**Machine-readable table extraction(s) for PAGE 69**

#### TABLE_069_01 (source extraction: `page069_table01.csv`)

|Dispute /<br>Adjustment<br>Stage||Previous<br>Stage|TAT<br>(days<br>from<br>previous<br>stage)|Flag|Rais<br>ed<br>By|Recei<br>ved<br>By|Fund<br>Movement||Note||
|---|---|---|---|---|---|---|---|---|---|---|
||||||||Dr|Cr|||
||U3 Transactions with RC-00 (Approved)||||||||||
|Credit<br>Adjustments||Original TXN|45|C|BEN|REM|BEN|REM|||
|Online Refund||Original TXN|60|REF|BEN|REM|BEN|REM|||
|Refund<br>Reversal<br>Confirmation<br>(RRC)||Credit<br>Adjustments|60|RRC|REM|-|-|-|||
|Wrong Credit<br>Chargeback||Original TXN|45|WC|REM|BEN|BEN|REM|||
|Wrong Credit<br>Representment||Wrong Credit<br>Chargeback|35|WR|BEN|REM|REM|BEN|||
|Wrong Credit<br>Chargeback<br>Acceptance /<br>Deemed||Wrong Credit<br>Chargeback|35|WA|BEN|REM|-|-|||
|Fraud<br>Chargeback<br>Raise||Original TXN|45|FC|REM|BEN|BEN|REM|||
|Fraud<br>Chargeback<br>Representment||Fraud<br>Chargeback<br>Raise|35|FCR|BEN|REM|REM|BEN|||
|Fraud<br>Chargeback<br>Acceptance /<br>Deemed||Fraud<br>Chargeback<br>Raise|35|FCA|BEN|REM|-|-|||
|Chargeback<br>Raise||Original TXN|45|B|REM|BEN|BEN|REM|||
|Representment<br>Raise||Chargeback<br>Raise|3|R|BEN|REM|REM|BEN|||
|Chargeback<br>Accept /<br>Deemed||Chargeback<br>Raise|3|A|BEN|REM|-|-|||
|Pre-Arbitration<br>Raise||Representme<br>nt Raise|30|P|REM|BEN|-|-|||
|Pre-Arbitration<br>Decline||Pre-<br>Arbitration<br>Raise|5|PR|BEN|REM|-|-|||
|Pre-Arbitration<br>Accept /<br>Deemed||Pre-<br>Arbitration<br>Raise|5|AP|BEN|REM|BEN|REM|||
|Arbitration<br>Raise||Pre-<br>Arbitration<br>Raise|15|AR|REM|BEN|-|-|||
|Arbitration<br>Withdraw||Arbitration<br>Raise|15|ACW|REM|BEN|-|-|||

<!-- PAGE 70 -->
# PAGE 70

[IMAGE_139]

![IMAGE_139](images/IMAGE_139.jpeg)

**IMAGE_139 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_140]

![IMAGE_140](images/IMAGE_140.png)

**IMAGE_140 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 70/158 
Arbitration 
Accept / 
Deemed 
Arbitration 
Raise 
15 
ACA 
BEN 
REM 
BEN 
REM 
Arbitration 
Continue 
Arbitration 
Raise 
15 
ACC 
BEN 
REM 
- 
- 
NRP Verdict in 
favor of 
Acquirer Bank 
Arbitration 
Continue 
30 
  
NPCI 
- 
- 
NRP Verdict in 
favor of Issuer 
Bank 
Arbitration 
Continue 
30 
  
NPCI 
BEN 
REM 
PRD Raise 
NRP Verdict 
5 
  
REM 
BEN 
- 
- 
BEN 
REM 
- 
- 
PRD Withdraw 
PRD Raise 
15 
  
REM 
BEN 
- 
- 
BEN 
REM 
- 
- 
PRD Continue 
PRD Raise 
15 
  
BEN 
REM 
- 
- 
REM 
BEN 
- 
- 
PRD Accept / 
Deemed 
PRD Raise 
15 
  
BEN 
REM 
BEN 
REM 
REM 
BEN 
REM 
BEN 
PRD Verdict in 
favour of 
raising bank 
PRD Continue 
30 
  
NPCI 
BEN 
REM 
NPCI 
REM 
BEN 
PRD Verdict in 
favour of 
continuing 
bank 
PRD Continue 
30 
  
NPCI 
- 
- 
NPCI 
- 
- 
Complaint 
Raise 
NA 
45 
PBR
B 
REM 
BEN 
- 
- 
Response to 
Complaint 
Complaint 
Raise 
60 
PR2
C 
BEN 
REM 
- 
- 
U3 Transactions with RC-RB (Deemed Approved) 
Transaction 
credit 
Confirmation 
(TCC) 
Original TXN 
45 from 
T+1 
TCC 
BEN 
- 
- 
- 
If 
remitte
r bank 
is 
raising 
charge
back 
before 
benefi
ciary 
bank 
update
d 
TCC/R
ET, 
then 
the 
charge
Online Refund 
Original TXN 
60 from 
T+1 
REF 
BEN 
REM 
BEN 
REM 
Return (RET) 
Original TXN 
45 from 
T+1 
RET 
BEN 
REM 
BEN 
REM 
Refund 
Reversal 
Confirmation 
(RRC) 
RET 
60 
RRC 
REM 
- 
- 
- 
Deferred 
Chargeback 
Raise 
TCC 
45 from 
T+1 
FB 
REM 
BEN 
- 
- 
Deferred 
Representment 
Raise 
Deferred 
Chargeback 
Raise 
4 
FR 
BEN 
REM 
- 
-
```

**Machine-readable table extraction(s) for PAGE 70**

#### TABLE_070_01 (source extraction: `page070_table01.csv`)

|Arbitration<br>Continue||Arbitration<br>Raise|15|ACC|BEN|REM|-|-|||
|---|---|---|---|---|---|---|---|---|---|---|
|NRP Verdict in<br>favor of<br>Acquirer Bank||Arbitration<br>Continue|30||NPCI||-|-|||
|NRP Verdict in<br>favor of Issuer<br>Bank||Arbitration<br>Continue|30||NPCI||BEN|REM|||
|PRD Raise||NRP Verdict|5||REM|BEN|-|-|||
||||||BEN|REM|-|-|||
|PRD Withdraw||PRD Raise|15||REM|BEN|-|-|||
||||||BEN|REM|-|-|||
|PRD Continue||PRD Raise|15||BEN|REM|-|-|||
||||||REM|BEN|-|-|||
|PRD Accept /<br>Deemed||PRD Raise|15||BEN|REM|BEN|REM|||
||||||REM|BEN|REM|BEN|||
|PRD Verdict in<br>favour of<br>raising bank||PRD Continue|30||NPCI||BEN|REM|||
||||||NPCI||REM|BEN|||
|PRD Verdict in<br>favour of<br>continuing<br>bank||PRD Continue|30||NPCI||-|-|||
||||||NPCI||-|-|||
|Complaint<br>Raise||NA|45|PBR<br>B|REM|BEN|-|-|||
|Response to<br>Complaint||Complaint<br>Raise|60|PR2<br>C|BEN|REM|-|-|||
||U3 Transactions with RC-RB (Deemed Approved)||||||||||
|Transaction<br>credit<br>Confirmation<br>(TCC)||Original TXN|45 from<br>T+1|TCC|BEN|-|-|-|If<br>remitte<br>r bank<br>is<br>raising<br>charge<br>back<br>before<br>benefi<br>ciary<br>bank<br>update<br>d<br>TCC/R<br>ET,<br>then<br>the<br>charge||
|Online Refund||Original TXN|60 from<br>T+1|REF|BEN|REM|BEN|REM|||
|Return (RET)||Original TXN|45 from<br>T+1|RET|BEN|REM|BEN|REM|||
|Refund<br>Reversal<br>Confirmation<br>(RRC)||RET|60|RRC|REM|-|-|-|||
|Deferred<br>Chargeback<br>Raise||TCC|45 from<br>T+1|FB|REM|BEN|-|-|||
|Deferred<br>Representment<br>Raise||Deferred<br>Chargeback<br>Raise|4|FR|BEN|REM|-|-|||

<!-- PAGE 71 -->
# PAGE 71

[IMAGE_141]

![IMAGE_141](images/IMAGE_141.jpeg)

**IMAGE_141 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_142]

![IMAGE_142](images/IMAGE_142.png)

**IMAGE_142 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 71/158 
Deferred 
Chargeback 
Accept / 
Deemed 
Deferred 
Chargeback 
Raise 
4 
FA 
BEN 
REM 
BEN 
REM 
back 
lifecycl
e of 
TXNs 
with 
RC-00 
is 
applie
d 
Deferred Pre-
Arbitration 
Raise 
Deferred 
Representme
nt Raise 
15 
FP 
REM 
BEN 
- 
- 
Deferred Pre-
Arbitration 
Decline 
Deferred Pre-
Arbitration 
Raise 
5 
FPR 
BEN 
REM 
- 
- 
Deferred Pre-
Arbitration 
Accept / 
Deemed 
Deferred Pre-
Arbitration 
Raise 
5 
FAP 
BEN 
REM 
BEN 
REM 
Deferred 
Arbitration 
Raise 
Deferred Pre-
Arbitration 
Decline 
15 
FAR 
REM 
BEN 
- 
- 
Arbitration 
Withdraw 
Deferred 
Arbitration 
Raise 
15 
ACW 
REM 
BEN 
- 
- 
Arbitration 
Accept / 
Deemed 
Deferred 
Arbitration 
Raise 
15 
ACA 
BEN 
REM 
BEN 
REM 
Arbitration 
Continue 
Deferred 
Arbitration 
Raise 
15 
ACC 
BEN 
REM 
- 
- 
NRP Verdict in 
favor of 
Acquirer Bank 
Arbitration 
Continue 
30 
  
NPCI 
- 
- 
NRP Verdict in 
favor of Issuer 
Bank 
Arbitration 
Continue 
30 
  
NPCI 
BEN 
REM 
PRD Raise 
NRP Verdict 
5 
  
REM 
BEN 
- 
- 
BEN 
REM 
- 
- 
PRD Withdraw 
PRD Raise 
15 
  
REM 
BEN 
- 
- 
BEN 
REM 
- 
- 
PRD Continue 
PRD Raise 
15 
  
BEN 
REM 
- 
- 
REM 
BEN 
- 
- 
PRD Accept / 
Deemed 
PRD Raise 
15 
  
BEN 
REM 
BEN 
REM 
REM 
BEN 
REM 
BEN 
PRD Verdict in 
favour of 
raising bank 
PRD Continue 
30 
  
NPCI 
BEN 
REM 
NPCI 
REM 
BEN 
PRD Verdict in 
favour of 
continuing 
bank 
PRD Continue 
30 
  
NPCI 
- 
- 
NPCI 
- 
- 
Complaint 
Raise 
NA 
45 
PBR
B 
REM 
BEN 
- 
- 
Response to 
Complaint 
60 
PR2
BEN 
REM 
- 
-
```

**Machine-readable table extraction(s) for PAGE 71**

#### TABLE_071_01 (source extraction: `page071_table01.csv`)

|Deferred Pre-<br>Arbitration<br>Raise|Deferred<br>Representme<br>nt Raise|15|FP|REM|BEN|-|-|
|---|---|---|---|---|---|---|---|
|Deferred Pre-<br>Arbitration<br>Decline|Deferred Pre-<br>Arbitration<br>Raise|5|FPR|BEN|REM|-|-|
|Deferred Pre-<br>Arbitration<br>Accept /<br>Deemed|Deferred Pre-<br>Arbitration<br>Raise|5|FAP|BEN|REM|BEN|REM|
|Deferred<br>Arbitration<br>Raise|Deferred Pre-<br>Arbitration<br>Decline|15|FAR|REM|BEN|-|-|
|Arbitration<br>Withdraw|Deferred<br>Arbitration<br>Raise|15|ACW|REM|BEN|-|-|
|Arbitration<br>Accept /<br>Deemed|Deferred<br>Arbitration<br>Raise|15|ACA|BEN|REM|BEN|REM|
|Arbitration<br>Continue|Deferred<br>Arbitration<br>Raise|15|ACC|BEN|REM|-|-|
|NRP Verdict in<br>favor of<br>Acquirer Bank|Arbitration<br>Continue|30||NPCI||-|-|
|NRP Verdict in<br>favor of Issuer<br>Bank|Arbitration<br>Continue|30||NPCI||BEN|REM|
|PRD Raise|NRP Verdict|5||REM|BEN|-|-|
|||||BEN|REM|-|-|
|PRD Withdraw|PRD Raise|15||REM|BEN|-|-|
|||||BEN|REM|-|-|
|PRD Continue|PRD Raise|15||BEN|REM|-|-|
|||||REM|BEN|-|-|
|PRD Accept /<br>Deemed|PRD Raise|15||BEN|REM|BEN|REM|
|||||REM|BEN|REM|BEN|
|PRD Verdict in<br>favour of<br>raising bank|PRD Continue|30||NPCI||BEN|REM|
|||||NPCI||REM|BEN|
|PRD Verdict in<br>favour of<br>continuing<br>bank|PRD Continue|30||NPCI||-|-|
|||||NPCI||-|-|
|Complaint<br>Raise|NA|45|PBR<br>B|REM|BEN|-|-|
|Response to|Complaint|60|PR2|BEN|REM|-|-|

<!-- PAGE 72 -->
# PAGE 72

[IMAGE_143]

![IMAGE_143](images/IMAGE_143.jpeg)

**IMAGE_143 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_144]

![IMAGE_144](images/IMAGE_144.png)

**IMAGE_144 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 72/158 
Complaint 
Raise 
C 
U3 Transactions with RC-RR, R9, UR, U9 (Failed) 
Debit Reversal 
Confirmation 
(DRC) 
Original TXN 
45 
DRC 
REM 
- 
- 
- 
  
Complaint 
Raise 
Any 
45 
PBR
B 
REM 
BEN 
- 
- 
Response to 
Complaint 
Complaint 
Raise 
60 
PR2
C 
BEN 
REM 
- 
- 
U2 Transactions with RC-00 (Approved) 
Credit 
Adjustments 
Original TXN 
180 
C 
ACQ 
ISS 
ACQ 
ISS 
  
Online Refund 
Original TXN 
60 
REF 
ACQ 
ISS 
ACQ 
ISS 
Refund 
Reversal 
Confirmation 
(RRC) 
Credit 
Adjustments / 
Online 
Refund 
60 
RRC 
ISS 
- 
- 
- 
Fraud 
Chargeback 
Raise 
Original TXN 
60 
FC 
ISS 
ACQ 
ACQ 
ISS 
Fraud 
Chargeback 
Representment 
Fraud 
Chargeback 
Raise 
35 
FCR 
ACQ 
ISS 
ISS 
ACQ 
Fraud 
Chargeback 
Acceptance / 
Deemed 
Fraud 
Chargeback 
Raise 
35 
FCA 
ACQ 
ISS 
- 
- 
Chargeback 
Raise 
Original TXN 
90 
B 
ISS 
ACQ 
ACQ 
ISS 
Representment 
Raise 
Chargeback 
Raise 
15 
R 
ACQ 
ISS 
ISS 
ACQ 
Chargeback 
Accept / 
Deemed 
Chargeback 
Raise 
15 
A 
ACQ 
ISS 
- 
- 
Pre-Arbitration 
Raise 
Representme
nt Raise 
RC 109 – 
30 
RC 1097 
– 15 
P 
ISS 
ACQ 
- 
- 
Pre-Arbitration 
Decline 
Pre-
Arbitration 
Raise 
15 
PR 
ACQ 
ISS 
- 
- 
Pre-Arbitration 
Accept / 
Deemed 
Pre-
Arbitration 
Raise 
15 
AP 
ACQ 
ISS 
ACQ 
ISS 
Arbitration 
Raise 
Pre-
Arbitration 
Decline 
15 
AR 
ISS 
ACQ 
- 
- 
Arbitration 
Withdraw 
Arbitration 
Raise 
15 
ACW 
ISS 
ACQ 
- 
- 
Arbitration 
Arbitration 
15 
ACA 
ACQ 
ISS 
ACQ 
ISS
```

**Machine-readable table extraction(s) for PAGE 72**

#### TABLE_072_01 (source extraction: `page072_table01.csv`)

||U3 Transactions with RC-RR, R9, UR, U9 (Failed)||||||||||
|---|---|---|---|---|---|---|---|---|---|---|
|Debit Reversal<br>Confirmation<br>(DRC)||Original TXN|45|DRC|REM|-|-|-|||
|Complaint<br>Raise||Any|45|PBR<br>B|REM|BEN|-|-|||
|Response to<br>Complaint||Complaint<br>Raise|60|PR2<br>C|BEN|REM|-|-|||
||U2 Transactions with RC-00 (Approved)||||||||||
|Credit<br>Adjustments||Original TXN|180|C|ACQ|ISS|ACQ|ISS|||
|Online Refund||Original TXN|60|REF|ACQ|ISS|ACQ|ISS|||
|Refund<br>Reversal<br>Confirmation<br>(RRC)||Credit<br>Adjustments /<br>Online<br>Refund|60|RRC|ISS|-|-|-|||
|Fraud<br>Chargeback<br>Raise||Original TXN|60|FC|ISS|ACQ|ACQ|ISS|||
|Fraud<br>Chargeback<br>Representment||Fraud<br>Chargeback<br>Raise|35|FCR|ACQ|ISS|ISS|ACQ|||
|Fraud<br>Chargeback<br>Acceptance /<br>Deemed||Fraud<br>Chargeback<br>Raise|35|FCA|ACQ|ISS|-|-|||
|Chargeback<br>Raise||Original TXN|90|B|ISS|ACQ|ACQ|ISS|||
|Representment<br>Raise||Chargeback<br>Raise|15|R|ACQ|ISS|ISS|ACQ|||
|Chargeback<br>Accept /<br>Deemed||Chargeback<br>Raise|15|A|ACQ|ISS|-|-|||
|Pre-Arbitration<br>Raise||Representme<br>nt Raise|RC 109 –<br>30<br>RC 1097<br>– 15|P|ISS|ACQ|-|-|||
|Pre-Arbitration<br>Decline||Pre-<br>Arbitration<br>Raise|15|PR|ACQ|ISS|-|-|||
|Pre-Arbitration<br>Accept /<br>Deemed||Pre-<br>Arbitration<br>Raise|15|AP|ACQ|ISS|ACQ|ISS|||
|Arbitration<br>Raise||Pre-<br>Arbitration<br>Decline|15|AR|ISS|ACQ|-|-|||
|Arbitration<br>Withdraw||Arbitration<br>Raise|15|ACW|ISS|ACQ|-|-|||
|Arbitration||Arbitration|15|ACA|ACQ|ISS|ACQ|ISS|||

<!-- PAGE 73 -->
# PAGE 73

[IMAGE_145]

![IMAGE_145](images/IMAGE_145.jpeg)

**IMAGE_145 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_146]

![IMAGE_146](images/IMAGE_146.png)

**IMAGE_146 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 73/158 
Accept / 
Deemed 
Raise 
Arbitration 
Continue 
Arbitration 
Raise 
15 
ACC 
ACQ 
ISS 
- 
- 
NRP Verdict in 
favor of 
Acquirer Bank 
Arbitration 
Continue 
30 
  
NPCI 
- 
- 
NRP Verdict in 
favor of Issuer 
Bank 
Arbitration 
Continue 
30 
  
NPCI 
ACQ 
ISS 
PRD Raise 
NRP Verdict 
5 
  
ISS 
ACQ 
- 
- 
ACQ 
ISS 
- 
- 
PRD Withdraw 
PRD Raise 
15 
  
ISS 
ACQ 
- 
- 
ACQ 
ISS 
- 
- 
PRD Continue 
PRD Raise 
15 
  
ACQ 
ISS 
- 
- 
ISS 
ACQ 
- 
- 
PRD Accept / 
Deemed 
PRD Raise 
15 
  
ACQ 
ISS 
ACQ 
ISS 
ISS 
ACQ 
ISS 
ACQ 
PRD Verdict in 
favour of 
raising bank 
PRD Continue 
30 
  
NPCI 
ACQ 
ISS 
NPCI 
ISS 
ACQ 
PRD Verdict in 
favour of 
continuing 
bank 
PRD Continue 
30 
  
NPCI 
- 
- 
NPCI 
- 
- 
Complaint 
Raise 
NA 
60 
PBR
B 
ISS 
ACQ 
- 
- 
Response to 
Complaint 
Complaint 
Raise 
60 
PR2
C 
ACQ 
ISS 
- 
- 
U2 Transactions with RC-RB (Deemed Approved) 
Transaction 
credit 
Confirmation 
(TCC) 
Original TXN 
60 
TCC 
ACQ 
- 
- 
- 
If 
remitte
r bank 
is 
raising 
charge
back 
before 
benefi
ciary 
bank 
update
d 
TCC/R
ET, 
then 
the 
charge
back 
lifecycl
Return (RET) 
Original TXN / 
TCC 
60 
RET 
ACQ 
ISS 
ACQ 
ISS 
Online Refund 
Original TXN / 
TCC 
60 
REF 
ACQ 
ISS 
ACQ 
ISS 
Refund 
Reversal 
Confirmation 
(RRC) 
RET / Online 
Refund 
60 
RRC 
ISS 
- 
- 
- 
Deferred 
Chargeback 
Raise 
TCC 
90 
FB 
ISS 
ACQ 
- 
- 
Deferred 
Representment 
Raise 
Deferred 
Chargeback 
Raise 
15 
FR 
ACQ 
ISS 
- 
- 
Deferred 
Chargeback 
Deferred 
Chargeback 
15 
FA 
ACQ 
ISS 
ACQ 
ISS
```

**Machine-readable table extraction(s) for PAGE 73**

#### TABLE_073_01 (source extraction: `page073_table01.csv`)

|Arbitration<br>Continue||Arbitration<br>Raise|15|ACC|ACQ|ISS|-|-|||
|---|---|---|---|---|---|---|---|---|---|---|
|NRP Verdict in<br>favor of<br>Acquirer Bank||Arbitration<br>Continue|30||NPCI||-|-|||
|NRP Verdict in<br>favor of Issuer<br>Bank||Arbitration<br>Continue|30||NPCI||ACQ|ISS|||
|PRD Raise||NRP Verdict|5||ISS|ACQ|-|-|||
||||||ACQ|ISS|-|-|||
|PRD Withdraw||PRD Raise|15||ISS|ACQ|-|-|||
||||||ACQ|ISS|-|-|||
|PRD Continue||PRD Raise|15||ACQ|ISS|-|-|||
||||||ISS|ACQ|-|-|||
|PRD Accept /<br>Deemed||PRD Raise|15||ACQ|ISS|ACQ|ISS|||
||||||ISS|ACQ|ISS|ACQ|||
|PRD Verdict in<br>favour of<br>raising bank||PRD Continue|30||NPCI||ACQ|ISS|||
||||||NPCI||ISS|ACQ|||
|PRD Verdict in<br>favour of<br>continuing<br>bank||PRD Continue|30||NPCI||-|-|||
||||||NPCI||-|-|||
|Complaint<br>Raise||NA|60|PBR<br>B|ISS|ACQ|-|-|||
|Response to<br>Complaint||Complaint<br>Raise|60|PR2<br>C|ACQ|ISS|-|-|||
||U2 Transactions with RC-RB (Deemed Approved)||||||||||
|Transaction<br>credit<br>Confirmation<br>(TCC)||Original TXN|60|TCC|ACQ|-|-|-|If<br>remitte<br>r bank<br>is<br>raising<br>charge<br>back<br>before<br>benefi<br>ciary<br>bank<br>update<br>d<br>TCC/R<br>ET,<br>then<br>the<br>charge<br>back<br>lifecycl||
|Return (RET)||Original TXN /<br>TCC|60|RET|ACQ|ISS|ACQ|ISS|||
|Online Refund||Original TXN /<br>TCC|60|REF|ACQ|ISS|ACQ|ISS|||
|Refund<br>Reversal<br>Confirmation<br>(RRC)||RET / Online<br>Refund|60|RRC|ISS|-|-|-|||
|Deferred<br>Chargeback<br>Raise||TCC|90|FB|ISS|ACQ|-|-|||
|Deferred<br>Representment<br>Raise||Deferred<br>Chargeback<br>Raise|15|FR|ACQ|ISS|-|-|||
|Deferred<br>Chargeback||Deferred<br>Chargeback|15|FA|ACQ|ISS|ACQ|ISS|||

<!-- PAGE 74 -->
# PAGE 74

[IMAGE_147]

![IMAGE_147](images/IMAGE_147.jpeg)

**IMAGE_147 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_148]

![IMAGE_148](images/IMAGE_148.png)

**IMAGE_148 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 74/158 
Accept / 
Deemed 
Raise 
e of 
TXNs 
with 
RC-00 
is 
applie
d 
Deferred Pre-
Arbitration 
Raise 
Deferred 
Representme
nt Raise 
15 
FP 
ISS 
ACQ 
- 
- 
Deferred Pre-
Arbitration 
Decline 
Deferred Pre-
Arbitration 
Raise 
15 
FPR 
ACQ 
ISS 
- 
- 
Deferred Pre-
Arbitration 
Accept / 
Deemed 
Deferred Pre-
Arbitration 
Raise 
15 
FAP 
ACQ 
ISS 
ACQ 
ISS 
Deferred 
Arbitration 
Raise 
Deferred Pre-
Arbitration 
Decline 
15 
FAR 
ISS 
ACQ 
- 
- 
Arbitration 
Withdraw 
Deferred 
Arbitration 
Raise 
15 
ACW 
ISS 
ACQ 
- 
- 
Arbitration 
Accept / 
Deemed 
Deferred 
Arbitration 
Raise 
15 
ACA 
ACQ 
ISS 
ACQ 
ISS 
Arbitration 
Continue 
Deferred 
Arbitration 
Raise 
15 
ACC 
ACQ 
ISS 
- 
- 
NRP Verdict in 
favor of 
Acquirer Bank 
Arbitration 
Continue 
30 
  
NPCI 
- 
- 
NRP Verdict in 
favor of Issuer 
Bank 
Arbitration 
Continue 
30 
  
NPCI 
ACQ 
ISS 
PRD Raise 
NRP Verdict 
5 
  
ISS 
ACQ 
- 
- 
ACQ 
ISS 
- 
- 
PRD Withdraw 
PRD Raise 
15 
  
ISS 
ACQ 
- 
- 
ACQ 
ISS 
- 
- 
PRD Continue 
PRD Raise 
15 
  
ACQ 
ISS 
- 
- 
ISS 
ACQ 
- 
- 
PRD Accept / 
Deemed 
PRD Raise 
15 
  
ACQ 
ISS 
ACQ 
ISS 
ISS 
ACQ 
ISS 
ACQ 
PRD Verdict in 
favour of 
raising bank 
PRD Continue 
30 
  
NPCI 
ACQ 
ISS 
NPCI 
ISS 
ACQ 
PRD Verdict in 
favour of 
continuing 
bank 
PRD Continue 
30 
  
NPCI 
- 
- 
NPCI 
- 
- 
Complaint 
Raise 
NA 
60 
PBR
B 
ISS 
ACQ 
- 
- 
Response to 
Complaint 
Complaint 
Raise 
60 
PR2
C 
ACQ 
ISS 
- 
- 
U2 Transactions with RC-RR, R9, UR, U9 (Failed)
```

**Machine-readable table extraction(s) for PAGE 74**

#### TABLE_074_01 (source extraction: `page074_table01.csv`)

|Deferred Pre-<br>Arbitration<br>Raise||Deferred<br>Representme<br>nt Raise|15|FP|ISS|ACQ|-|-||
|---|---|---|---|---|---|---|---|---|---|
|Deferred Pre-<br>Arbitration<br>Decline||Deferred Pre-<br>Arbitration<br>Raise|15|FPR|ACQ|ISS|-|-||
|Deferred Pre-<br>Arbitration<br>Accept /<br>Deemed||Deferred Pre-<br>Arbitration<br>Raise|15|FAP|ACQ|ISS|ACQ|ISS||
|Deferred<br>Arbitration<br>Raise||Deferred Pre-<br>Arbitration<br>Decline|15|FAR|ISS|ACQ|-|-||
|Arbitration<br>Withdraw||Deferred<br>Arbitration<br>Raise|15|ACW|ISS|ACQ|-|-||
|Arbitration<br>Accept /<br>Deemed||Deferred<br>Arbitration<br>Raise|15|ACA|ACQ|ISS|ACQ|ISS||
|Arbitration<br>Continue||Deferred<br>Arbitration<br>Raise|15|ACC|ACQ|ISS|-|-||
|NRP Verdict in<br>favor of<br>Acquirer Bank||Arbitration<br>Continue|30||NPCI||-|-||
|NRP Verdict in<br>favor of Issuer<br>Bank||Arbitration<br>Continue|30||NPCI||ACQ|ISS||
|PRD Raise||NRP Verdict|5||ISS|ACQ|-|-||
||||||ACQ|ISS|-|-||
|PRD Withdraw||PRD Raise|15||ISS|ACQ|-|-||
||||||ACQ|ISS|-|-||
|PRD Continue||PRD Raise|15||ACQ|ISS|-|-||
||||||ISS|ACQ|-|-||
|PRD Accept /<br>Deemed||PRD Raise|15||ACQ|ISS|ACQ|ISS||
||||||ISS|ACQ|ISS|ACQ||
|PRD Verdict in<br>favour of<br>raising bank||PRD Continue|30||NPCI||ACQ|ISS||
||||||NPCI||ISS|ACQ||
|PRD Verdict in<br>favour of<br>continuing<br>bank||PRD Continue|30||NPCI||-|-||
||||||NPCI||-|-||
|Complaint<br>Raise||NA|60|PBR<br>B|ISS|ACQ|-|-||
|Response to<br>Complaint||Complaint<br>Raise|60|PR2<br>C|ACQ|ISS|-|-||
||U2 Transactions with RC-RR, R9, UR, U9 (Failed)|||||||||

<!-- PAGE 75 -->
# PAGE 75

[IMAGE_149]

![IMAGE_149](images/IMAGE_149.jpeg)

**IMAGE_149 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_150]

![IMAGE_150](images/IMAGE_150.png)

**IMAGE_150 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 75/158 
Debit Reversal 
Confirmation 
(DRC) 
Original TXN 
60 
DRC 
ISS 
- 
- 
- 
  
Complaint 
Raise 
NA 
60 
PBR
B 
ISS 
ACQ 
- 
- 
Response to 
Complaint 
Complaint 
Raise 
60 
PR2
C 
ACQ 
ISS 
- 
- 
U2/U3 Transactions with RC-00 & RB 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
NA 
NA 
RGG
C 
REM 
BEN 
REM 
BEN 
  
Remitter 
Generic Good 
Faith Credit 
Adjustment 
Acceptance 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
3 
RGA
C 
BEN 
REM 
- 
- 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
Deemed 
Acceptance 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
3 
RGC
D 
BEN 
REM 
- 
- 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
Representment 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
3 
RGR
C 
BEN 
REM 
BEN 
REM 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
NA 
NA 
BGG
C 
BEN 
REM 
BEN 
REM 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
Acceptance 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
3 
BGA
C 
REM 
BEN 
- 
- 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
Deemed 
Acceptance 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
3 
BGC
D 
REM 
BEN 
- 
- 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
Representment 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
3 
BGR
C 
REM 
BEN 
REM 
BEN
```

**Machine-readable table extraction(s) for PAGE 75**

#### TABLE_075_01 (source extraction: `page075_table01.csv`)

|Complaint<br>Raise||NA|60|PBR<br>B|ISS|ACQ|-|-|||
|---|---|---|---|---|---|---|---|---|---|---|
|Response to<br>Complaint||Complaint<br>Raise|60|PR2<br>C|ACQ|ISS|-|-|||
||U2/U3 Transactions with RC-00 & RB||||||||||
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment||NA|NA|RGG<br>C|REM|BEN|REM|BEN|||
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment<br>Acceptance||Remitter<br>Generic Good<br>Faith Credit<br>Adjustment|3|RGA<br>C|BEN|REM|-|-|||
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment<br>Deemed<br>Acceptance||Remitter<br>Generic Good<br>Faith Credit<br>Adjustment|3|RGC<br>D|BEN|REM|-|-|||
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment<br>Representment||Remitter<br>Generic Good<br>Faith Credit<br>Adjustment|3|RGR<br>C|BEN|REM|BEN|REM|||
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment||NA|NA|BGG<br>C|BEN|REM|BEN|REM|||
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment<br>Acceptance||Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment|3|BGA<br>C|REM|BEN|-|-|||
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment<br>Deemed<br>Acceptance||Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment|3|BGC<br>D|REM|BEN|-|-|||
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment<br>Representment||Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment|3|BGR<br>C|REM|BEN|REM|BEN|||

<!-- PAGE 76 -->
# PAGE 76

[IMAGE_151]

![IMAGE_151](images/IMAGE_151.jpeg)

**IMAGE_151 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_152]

![IMAGE_152](images/IMAGE_152.png)

**IMAGE_152 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 76/158 
Note: 
1. REM = Remitter, BEN = Beneficiary, ISS = Issuer, ACQ = Acquirer 
2. Refer Annexure – 29 for the dispute/adjustment reason codes 
23.10) TYPES OF MANDATORY EVIDENCE TO REPRESENT DISPUTES 
Beneficiary bank should mandatorily submit/upload below listed evidence in URCS 
system while representing chargeback / pre-arbitration / arbitration / PRD raise. 
Beneficiary bank will not be allowed to upload the documents in URCS after the expiry of 
TAT.  
TXN 
Sub-Type 
Chargeback Reason 
Code with Description 
Mandatory Evidence 
U2 
RC 1061 - Credit not 
processed for 
cancelled or returned 
goods and services 
Proof of goods and services not returned by the 
customer 
(or) 
No or limited cancellation/return policy details 
(or) 
Proof of refund via alternate means 
RC 1062 - Goods and 
Services not as 
described / defective 
Document to justify that the goods and services was as 
per customer order description/was in good condition 
RC 1063 - Paid by 
alternate means 
Proof of payment not received by other means for the 
same goods or services (or) 
Proof of refund via alternate means 
RC 1064 - Goods or 
Services Not Provided / 
Not Received 
Charge slip 
(or) 
Bill/Receipt 
(or) 
Invoice with proof of delivery 
(or) 
Proof of refund via alternate means 
RC 1065 - Account 
debited but transaction 
confirmation not 
received at merchant 
location 
Charge slip 
(or) 
Bill/Receipt 
(or) 
Invoice with proof of delivery (if any) 
(or) 
Proof of refund via alternate means 
RC 108 - Remitter 
account debited but 
beneficiary account not 
credited 
CBS screenshot of credit in merchant account (last 6 
digits of acc no.) 
(or) 
Merchant settlement details 
(or) 
Charge slip 
(or) 
Bill/Receipt 
(or) 
Invoice with proof of delivery
```

**Machine-readable table extraction(s) for PAGE 76**

#### TABLE_076_01 (source extraction: `page076_table01.csv`)

|TXN<br>Sub-Type|Chargeback Reason<br>Code with Description|Mandatory Evidence|
|---|---|---|
|U2|RC 1061 - Credit not<br>processed for<br>cancelled or returned<br>goods and services|Proof of goods and services not returned by the<br>customer<br>(or)<br>No or limited cancellation/return policy details<br>(or)<br>Proof of refund via alternate means|
||RC 1062 - Goods and<br>Services not as<br>described / defective|Document to justify that the goods and services was as<br>per customer order description/was in good condition|
||RC 1063 - Paid by<br>alternate means|Proof of payment not received by other means for the<br>same goods or services (or)<br>Proof of refund via alternate means|
||RC 1064 - Goods or<br>Services Not Provided /<br>Not Received|Charge slip<br>(or)<br>Bill/Receipt<br>(or)<br>Invoice with proof of delivery<br>(or)<br>Proof of refund via alternate means|
||RC 1065 - Account<br>debited but transaction<br>confirmation not<br>received at merchant<br>location|Charge slip<br>(or)<br>Bill/Receipt<br>(or)<br>Invoice with proof of delivery (if any)<br>(or)<br>Proof of refund via alternate means|
||RC 108 - Remitter<br>account debited but<br>beneficiary account not<br>credited|CBS screenshot of credit in merchant account (last 6<br>digits of acc no.)<br>(or)<br>Merchant settlement details<br>(or)<br>Charge slip<br>(or)<br>Bill/Receipt<br>(or)<br>Invoice with proof of delivery|

<!-- PAGE 77 -->
# PAGE 77

[IMAGE_153]

![IMAGE_153](images/IMAGE_153.jpeg)

**IMAGE_153 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_154]

![IMAGE_154](images/IMAGE_154.png)

**IMAGE_154 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 77/158 
(or) 
Proof of refund via alternate means 
RC 1081 - Transaction 
not settled within the 
specified timeframes 
CBS screenshot of credit in merchant account (last 6 
digits of acc no.) 
(or) 
Merchant settlement details 
(or) 
Charge slip 
(or) 
Bill/Receipt 
(or) 
Invoice with proof of delivery (if any) 
(or) 
Proof of refund via alternate means 
RC 1084 - 
Duplicate/Multiple 
Transaction 
Proof that the Duplicate/Multiple Transaction were not 
for the same goods or services 
(or) 
Proof of refund via alternate means for the 
Duplicate/Multiple Transaction 
RC 1085 - Card holder 
was charged more than 
the transaction amount 
Charge slip 
(or) 
Bill/Receipt 
(or) 
Invoice with proof of delivery (if any) 
(or) 
Proof of refund via alternate means from extra amount 
charged 
RC 121 - TCC has been 
raised but customer 
still complaining that 
Beneficiary a/c is not 
credited 
CBS screenshot of credit in merchant account (last 6 
digits of acc no.) 
U3/UC 
RC 108 - Remitter 
account debited but 
beneficiary account not 
credited 
CBS screenshot of credit in beneficiary account (last 6 
digits of acc no.) 
RC 121 - TCC has been 
raised but customer 
still complaining that 
Beneficiary a/c is not 
credited 
CBS screenshot of credit in beneficiary account (last 6 
digits of acc no.) 
U2/U3/UC 
Evidence for re-
presenting the Pre-
arbitration / Arbitration 
Same as above mentioned evidence for rejecting the 
chargeback is also applicable for rejecting the Pre-
arbitrations & Arbitrations. Beneficiary/acquiring bank 
may upload any additional evidence at the time of 
rejecting Pre-arbitrations & Arbitrations which justifies 
the transaction is successful.  
Note:
```

**Machine-readable table extraction(s) for PAGE 77**

#### TABLE_077_01 (source extraction: `page077_table01.csv`)

|||(or)<br>Proof of refund via alternate means|
|---|---|---|
||RC 1081 - Transaction<br>not settled within the<br>specified timeframes|CBS screenshot of credit in merchant account (last 6<br>digits of acc no.)<br>(or)<br>Merchant settlement details<br>(or)<br>Charge slip<br>(or)<br>Bill/Receipt<br>(or)<br>Invoice with proof of delivery (if any)<br>(or)<br>Proof of refund via alternate means|
||RC 1084 -<br>Duplicate/Multiple<br>Transaction|Proof that the Duplicate/Multiple Transaction were not<br>for the same goods or services<br>(or)<br>Proof of refund via alternate means for the<br>Duplicate/Multiple Transaction|
||RC 1085 - Card holder<br>was charged more than<br>the transaction amount|Charge slip<br>(or)<br>Bill/Receipt<br>(or)<br>Invoice with proof of delivery (if any)<br>(or)<br>Proof of refund via alternate means from extra amount<br>charged|
||RC 121 - TCC has been<br>raised but customer<br>still complaining that<br>Beneficiary a/c is not<br>credited|CBS screenshot of credit in merchant account (last 6<br>digits of acc no.)|
|U3/UC|RC 108 - Remitter<br>account debited but<br>beneficiary account not<br>credited|CBS screenshot of credit in beneficiary account (last 6<br>digits of acc no.)|
||RC 121 - TCC has been<br>raised but customer<br>still complaining that<br>Beneficiary a/c is not<br>credited|CBS screenshot of credit in beneficiary account (last 6<br>digits of acc no.)|
|U2/U3/UC|Evidence for re-<br>presenting the Pre-<br>arbitration / Arbitration|Same as above mentioned evidence for rejecting the<br>chargeback is also applicable for rejecting the Pre-<br>arbitrations & Arbitrations. Beneficiary/acquiring bank<br>may upload any additional evidence at the time of<br>rejecting Pre-arbitrations & Arbitrations which justifies<br>the transaction is successful.|

<!-- PAGE 78 -->
# PAGE 78

[IMAGE_155]

![IMAGE_155](images/IMAGE_155.jpeg)

**IMAGE_155 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_156]

![IMAGE_156](images/IMAGE_156.png)

**IMAGE_156 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 78/158 
1. For disputes on UPI TXNS done at small & offline merchants, as per OC 172, if 
merchant is unable to submit evidence of fulfilment of goods/services to customer, 
then beneficiary/acquiring bank has to confirm the same through a declaration letter, 
refer Annexure – 39 for the Declaration Format. In case of large merchants, evidence is 
mandatory as mentioned in above table. 
2. Verdict will be given in favour of the remitting/issuing bank if beneficiary/acquiring bank 
submits, 
- 
No/blurry/partial/illegible evidence. 
- 
Rejection reason/evidence as their customer/merchant account is having zero, 
insufficient balance, under freeze/close/regulatory block status etc. 
- 
Rejection reason/evidence as their customer/merchant is not contactable. 
23.11) EXCEPTION HANDLING 
Exception transactions are those which remain un-reconciled and/or are disputed by a 
customer. Members should collaboratively endeavour to settle such discrepancies, if raised 
by other member/s. All such discrepancies should be resolved amicably as per the ‘Dispute 
Resolution Mechanism’ laid down in this document. 
25) SETTLEMENT CURRENCY 
All transactions on the UPI network would be settled in Indian Rupee ₹ (INR) only. 
26) HOLIDAY SETTLEMENT 
Settlement entries will be posted 24X7X365 days in the RTGS Settlement account of members 
maintained with RBI except on RTGS Holidays that may be declared and published by RBI from time to 
time.  
27) PROCESS FOR HANDLING TRANSACTIONS NOT SETTLED DUE TO DATA LOSS 
NPCI has state of art infrastructure to operate the UPI Switch (UPI) 24x7 with near-zero downtime and 
data loss. However, as an efficient system, it is necessary to have a process to handle transactions not 
settled in case of loss of data due to disaster. 
If any unforeseen event impacts NPCI’s system resulting in loss of online transactions data and if the 
data is non-recoverable by NPCI system, members of UPI will have to settle the transactions between 
themselves. NPCI will facilitate settlement of such transactions between members. 
Settlement of funds between member banks is necessary when the transactions are routed through 
UPI, authorized by Remitters banks and serviced by Beneficiary banks and have not been settled by 
NPCI due to loss of online data transactions.  
Settlement of funds for data loss will not be applicable under the following circumstances: 
1. NPCI has not received authorization from Remitter. 
2. An authorization received from Remitter is not sent to Beneficiary by NPCI. 
3. Beneficiary has not serviced the request after receiving authorization from Remitter through NPCI. 
4. Failed Transactions. 
Such cases will be considered as technical declines and treated as in the normal scenario.
```

<!-- PAGE 79 -->
# PAGE 79

[IMAGE_157]

![IMAGE_157](images/IMAGE_157.jpeg)

**IMAGE_157 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_158]

![IMAGE_158](images/IMAGE_158.png)

**IMAGE_158 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 79/158 
26.1) 
PROCESS TO BE FOLLOWED BY NPCI 
1. NPCI will keep the members informed on the date and time period when such a situation of 
force majeure has occurred and resulted in loss of data of online transactions.  
2. The members, upon receiving intimation from NPCI, will focus on reconciling the transactions 
done during that period and identify the transactions not settled by NPCI.  
3. Since records of these transactions would not be available with NPCI, the settlement for such 
transactions will not be done by NPCI. 
4. NPCI will facilitate settlement of such transactions between members. 
26.2) PROCESS TO BE FOLLOWED BY MEMBERS 
Members as Remitter and Beneficiary should reconcile the transactions done on the UPI network 
during such period and identify the transactions not settled by NPCI. Members should settle such 
identified transactions between themselves, which are not settled by NPCI due to loss of data.  
A) AS BENEFICIARY 
1. Beneficiary should reconcile the transactions daily and identify successful transactions at 
their end during the reported disaster period, which are not settled. 
2. Beneficiary should share the list of such successful transactions not settled by NPCI along 
with the switch logs and other supporting documents required to confirm the status of the 
transaction as successful with all relevant Remitters as well as with NPCI.  
 
B) AS REMITTER 
1. Remitters should reconcile the transactions daily and identify those transactions, which are 
debited to customer’s account and success in online (RC-00) during the reported disaster 
period but not settled. 
2. Remitter should not reverse such transactions to customer’s account during reconciliation 
or on receipt of complaint without referring it to Beneficiary for checking the status of the 
transaction. Only those transactions confirmed by Beneficiary as failed should be reversed 
to the customer’s account. 
3. Beneficiary will share with Remitter the list of such successful transactions not settled by 
NPCI along with the switch logs, and other supporting documents required to confirm the 
status of the transaction as successful. 
4. Remitter should check the switch logs and other supporting documents and satisfy 
themselves with the status of the transaction. Remitter should pay the amount equal to the 
successful transactions not settled by NPCI. 
Remitter will not be able to raise chargeback (dispute) for such transactions, as those records 
are not available with NPCI, remitter bank can inform NPCI and NPCI will resolve the dispute 
by taking up the matter with beneficiary bank. 
28) LIABILITY OF THE DEFAULTING MEMBER 
If a member fails to fulfil its commitment towards other members participating in the UPI network and 
such an action result in these members incurring losses in settlement or transaction fees, the member 
committing such an offence should make up completely for the loss. In such a case, funds available in 
the defaulting member’s settlement account would be used to settle the claims at the earliest.
```

<!-- PAGE 80 -->
# PAGE 80

[IMAGE_159]

![IMAGE_159](images/IMAGE_159.jpeg)

**IMAGE_159 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_160]

![IMAGE_160](images/IMAGE_160.jpeg)

**IMAGE_160 - visual representation**
Tiny isolated raster artifact consisting of a single small dark mark on an otherwise white background. No substantive visual information is readable.

[IMAGE_161]

![IMAGE_161](images/IMAGE_161.png)

**IMAGE_161 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 80/158 
29) COMPLIANCE WITH UPI-OPERATING AND SETTLEMENT GUIDELINES 
All members should comply with UPI-OSG as published by NPCI. NPCI reserves the right to impose 
action on members violating UPI – OSG including levy of penalties on members or suspending or 
terminating end-to-end (host-to-host) connectivity for frequent violations of UPI-OSG. 
30) CERTIFICATION FEES 
NPCI will recover fees applicable for certification of UPI members by debiting the member’s RTGS 
Settlement account and details of debit of such fees will be available in the immediate next settlement 
cycle reports (NTSL). In the case of a sub-member bank, the fees will be recovered from the sponsor 
bank. The recovery of certification fee will be processed after submission of Authorization Letter by 
Direct members / Sub-members. For sample authorization letter format, refer Annexure – 36 for direct 
bank and Annexure – 37 for sub member bank. 
31) NETWORK FEES 
NPCI will recover network connectivity fees from members by debiting the member’s RTGS Settlement 
account and details of debit of such fees will be available in the immediate next settlement cycle 
reports (NTSL). For sample authorization letter format, refer Annexure – 37 for direct bank and 
Annexure – 38 for sub member bank. 
32) DISASTER RECOVERY (DR) DRILLS COMPLIANCE 
DR drill must be carried out for all UPI infrastructure at least once every six (6) months (half-yearly) as 
per financial year. DR drill and the rollback to PR should be carried out during nighttime between 00:00 
HRS and 06:00 HRS, so that customer impact is minimized. Members should share the DR drill plan 
with NPCI at least a week in advance along with plan downtime. Refer NPCI operating circular vide 
NPCI/ONLINEOPS/2023-24/001 dated 18th Sep 2023 for details. 
Performing DR Drill as a mandatory process has been approved in the Steering Committee Meeting 
held on 18th May 2022. If any bank does not comply with the aforesaid process i.e. not performing DR 
drill twice in a year will be penalised as mentioned in the below table, 
Particulars 
Action to be taken 
1st Instance of non-compliance 
i.e. no drill conducted within six months 
period 
Non-compliance letter to member 
2nd Instance of non-compliance i.e. no drill 
conducted for last one year 
₹ 25,000/- to Direct members and ₹ 10,000/- to Sub-
members will be levied for non-compliance 
3rd Instance of non-compliance i.e. no drill 
conducted for last one and half year 
Non-compliance 
 
Note: For clarity, once the bank conducts DR dill, any next incident will be considered as 1st instance 
for the purpose of action to be taken as mentioned above.
```

**Machine-readable table extraction(s) for PAGE 80**

#### TABLE_080_01 (source extraction: `page080_table01.csv`)

|Particulars|Action to be taken|
|---|---|
|1st Instance of non-compliance<br>i.e. no drill conducted within six months<br>period|Non-compliance letter to member|
|2nd Instance of non-compliance i.e. no drill<br>conducted for last one year|₹ 25,000/- to Direct members and ₹ 10,000/- to Sub-<br>members will be levied for non-compliance|
|3rd Instance of non-compliance i.e. no drill<br>conducted for last one and half year|Non-compliance|

<!-- PAGE 81 -->
# PAGE 81

[IMAGE_162]

![IMAGE_162](images/IMAGE_162.jpeg)

**IMAGE_162 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_163]

![IMAGE_163](images/IMAGE_163.png)

**IMAGE_163 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 81/158 
33) ACCESS TO GST PORTAL 
NPCI has provided a portal for exchanging GST invoices between members. Members are required to 
comply with GST rules, exchanging the invoices, discharge tax liability and file GSTR1 returns, all within 
the stipulated time. Members can request NPCI for accessing to the GST portal and for sharing 
invoices. Refer NPCI operating circular vide NPCI/NFS/2017-18/269 dated 05th Oct 2017 and 
NPCI/NFS/2017-18/280 dated 28th Dec 2017 for details. 
34) MAINTAINING TRANSACTION RECORDS 
Each member should maintain records of all transactions for a minimum period as stipulated by NPCI, 
RBI, and/or any other competent authorities. In case of disputes, members should keep records of all 
disputed transactions along with supporting documents until the disputes are resolved amicably. 
Members should provide details of all disputed transactions to counter-party members whenever 
requested. In URCS, the last 3 months data will be available for every Member Bank. Request for 
restoration of files/reports for the period older than three months from the date of the transaction 
would be chargeable. Currently, the charges are ₹ 500/- plus applicable GST for each day’s file/report 
requested by the Member bank. These charges will be recovered by NPCI from the requested Member 
bank and details of debit of such fees will be available in the immediate next settlement cycle reports 
(NTSL).  
Note: Data retention period depends on the TAT life cycle of the disputes. The TAT differs from time to 
time which is be notified to the member banks through email or OC as and when such revision of TAT 
for disputes is done and the same will have effect on retention of the data which is maintained by the 
NPCI in the back-office system. 
35) MONITORING & HELPDESK 24X7 
Every participant member of UPI should have 24X7 monitoring and helpdesk team to monitor live 
production transactions and ensure UPI services are available to the end customers at all the time. 
Bank should also monitor technical declines, business declines etc. and initiate appropriate actions to 
control the same. Technical declines should be maintained lesser than 1% and business declines 
should be lesser than 5%. Bank should also monitor NDC limit and ensure to increase the same with 
NPCI as and when required, threshold of NDC limit should be 60% where bank should take an alert 
and get the NDC limit reset with NPCI. 
36) NPCI WEBSITE COMPLAINTS 
NPCI created website “UPI Dispute Redressal Mechanism” where customer can raise 
complaint/enquiry pertaining to UPI. These complaints are extracted from the NPCI Website, verified in 
URCS and automated reply is sent to the customer via e-mail. If no dispute/adjustment has been 
present for the complaint (or) status of the complaint is unknown/open, then complaint file is 
generated and forwarded to the respective banks via e-mail for necessary actions. Members banks 
should initiate necessary actions on these complaints by going through the customer details, 
wherever it is applicable and send response to the end customer suitably.
```

<!-- PAGE 82 -->
# PAGE 82

[IMAGE_164]

![IMAGE_164](images/IMAGE_164.jpeg)

**IMAGE_164 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_165]

![IMAGE_165](images/IMAGE_165.png)

**IMAGE_165 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 82/158 
37) NPCI HELP CENTER (CRM – CUSTOMER RELATIONSHIP MANAGEMENT) 
NPCI has developed and operationalised the NPCI “Help Centre” Portal for all the participant member 
banks to raise tickets for any request, complaint, query, feedback etc. NPCI will respond to all the 
tickets and address them within TAT. 
Ticket Category 
Ticket Sub-Category 
SLA 
URCS Portal 
Bulk Upload File issue 
16 Hrs 
Credit note not available in artifacts folder 
16 Hrs 
Dispute related 
16 Hrs 
Manual adjustment files not available in artifacts 
16 Hrs 
Settlement reports not available 
16 Hrs 
Unable to search transaction 
16 Hrs 
URCS IP whitelisting 
40 Hrs 
URCS Portal is Down 
8 Hrs 
Settlement (UPI) 
Duplicate Settlement of Transaction 
40 Hrs 
Mismatch between GST reports and daily income and expense 
report 
40 Hrs 
Penalty Related 
16 Hrs 
Report Mismatch 
24 Hrs 
Transaction not settled 
24 Hrs 
Transactions available in URCS but not in raw data 
24 Hrs 
Training Required 
UPI and backoffice training required 
80 Hrs 
URCS Users id and 
Password 
USER ID issues 
8 Hrs 
Manual Adjustment 
Generic Good faith adjustment  
48 Hrs 
Documentation 
Required 
Circular/PG required 
8 Hrs 
DisputeTAT/Flag required 
8 Hrs 
File Format and Specification 
8 Hrs 
Member banks contact details required 
8 Hrs 
UPI Pricing required 
24 Hrs 
PGP TOOL 
PGP Tool related issues 
16 Hrs 
Access to GST portal 
GST IP Addition and credentials 
72 Hrs 
SFTP 
Files not available on SFTP 
8 Hrs 
GST/Invoice Related 
8 Hrs 
SFTP access required 
120 Hrs 
 
38) UDIR – UNIFIED INTERFACE FOR DISPUTE RESOLUTION SYSTEM 
Refer to the RBI circular RBI/2020-21/21 DPSS.CO.PD No. 116/02.12.004/2020-21 on Online Dispute 
Resolution (ODR) System for Digital Payments dated 6th August, 2020, whereby it has advised PSO & 
PSPs i.e. banks and non-banks & TPAPs to implement online dispute resolution process for handling 
and resolving customer complaints. The Unified Interface for Dispute Resolution (UDIR) approach was 
discussed in the UPI Steering Committee meeting held on 2nd July, 2020 and was endorsed by SC for 
implementation by members. Both ODR & UDIR are substitutional words. ODR system facilitates 
participant banks for resolving end customer complaints in real time on all 365 days instead of
```

**Machine-readable table extraction(s) for PAGE 82**

#### TABLE_082_01 (source extraction: `page082_table01.csv`)

|Ticket Category|Ticket Sub-Category|SLA|
|---|---|---|
|URCS Portal|Bulk Upload File issue|16 Hrs|
||Credit note not available in artifacts folder|16 Hrs|
||Dispute related|16 Hrs|
||Manual adjustment files not available in artifacts|16 Hrs|
||Settlement reports not available|16 Hrs|
||Unable to search transaction|16 Hrs|
||URCS IP whitelisting|40 Hrs|
||URCS Portal is Down|8 Hrs|
|Settlement (UPI)|Duplicate Settlement of Transaction|40 Hrs|
||Mismatch between GST reports and daily income and expense<br>report|40 Hrs|
||Penalty Related|16 Hrs|
||Report Mismatch|24 Hrs|
||Transaction not settled|24 Hrs|
||Transactions available in URCS but not in raw data|24 Hrs|
|Training Required|UPI and backoffice training required|80 Hrs|
|URCS Users id and<br>Password|USER ID issues|8 Hrs|
|Manual Adjustment|Generic Good faith adjustment|48 Hrs|
|Documentation<br>Required|Circular/PG required|8 Hrs|
||DisputeTAT/Flag required|8 Hrs|
||File Format and Specification|8 Hrs|
||Member banks contact details required|8 Hrs|
||UPI Pricing required|24 Hrs|
|PGP TOOL|PGP Tool related issues|16 Hrs|
|Access to GST portal|GST IP Addition and credentials|72 Hrs|
|SFTP|Files not available on SFTP|8 Hrs|
||GST/Invoice Related|8 Hrs|
||SFTP access required|120 Hrs|

<!-- PAGE 83 -->
# PAGE 83

[IMAGE_166]

![IMAGE_166](images/IMAGE_166.jpeg)

**IMAGE_166 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

**Diagram reasoning representation**
- Entity/container: `Deemed & DRC Transactions` containing `UPI` and `URCS`.
- External API/message node: `ReqChkTxn`.
- External participant: bank icon.
- Ordered interactions: `1` between URCS and UPI; `2` from UPI-side container toward ReqChkTxn; `3` back toward the UPI-side container; `4` from UPI toward URCS.

[IMAGE_167]

![IMAGE_167](images/IMAGE_167.png)

**IMAGE_167 - visual representation**
Process diagram for “Deemed & DRC Transactions”. On the left is a rounded container labelled vertically “Deemed & DRC Transactions”, containing a UPI logo above a box labelled “URCS”. Four numbered arrows connect this container to the right-side “ReqChkTxn” box and a bank icon. Arrow 1 points upward from URCS toward the UPI/logo area; arrow 4 points downward from the UPI/logo area toward URCS. Between the UPI container and ReqChkTxn are two horizontal arrows in opposite directions, numbered 2 and 3. The right endpoint is a bank icon representing the bank-side participant.

**Diagram reasoning representation**
- Entity/container: `Deemed & DRC Transactions` containing `UPI` and `URCS`.
- External API/message node: `ReqChkTxn`.
- External participant: bank icon.
- Ordered interactions: `1` between URCS and UPI; `2` from UPI-side container toward ReqChkTxn; `3` back toward the UPI-side container; `4` from UPI toward URCS.

[IMAGE_168]

![IMAGE_168](images/IMAGE_168.png)

**IMAGE_168 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Diagram reasoning representation**
- Entity/container: `Deemed & DRC Transactions` containing `UPI` and `URCS`.
- External API/message node: `ReqChkTxn`.
- External participant: bank icon.
- Ordered interactions: `1` between URCS and UPI; `2` from UPI-side container toward ReqChkTxn; `3` back toward the UPI-side container; `4` from UPI toward URCS.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 83/158 
resolving the customer complaints. Refer NPCI/UPI/2020-21/98 dated 24th Nov 2020 and UDIR UPI 
TSD V2.0. for details. 
 
1. The Payment System Vision-2021 of Reserve Bank highlights the need for technology-driven, 
rule-based, customer-friendly and transparent dispute redressal systems. 
2. Accordingly, ODR (Online Dispute resolution) solution was implemented for UPI as UDIR 
(Unified Disputes and Issue Resolution). 
3. Objective is to enhance the end user (consumer) experience and Trust on our products & 
services and overall payments ecosystem.  
4. Additionally, UDIR proactively auto-triggers an API to banks (Remitter/Beneficiary) for checking 
and updating the status of timeout transactions. 
 
1. Instant information of status and resolution/refund to user & Potential complaints and chargeback 
will be eliminated. 
2. Auto update APIs is being implemented wherein the account details, Payer/Payee details and other 
relevant details will be passed in ReqChkTxn – Auto update API. 
3. Using Online refund functionality in UDIR, customer refunds will be processed online without 
manual intervention. 
4. UDIR process will help Banks to minimize the Manual Work. 
 
 
Auto update process 
through UDIR for 
Deemed and DRC 
Account + IFSC
Pre-approved 
refunds
Raise Complaints
Raise Disputes 
(Phase 2)
```

<!-- PAGE 84 -->
# PAGE 84

[IMAGE_169]

![IMAGE_169](images/IMAGE_169.jpeg)

**IMAGE_169 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

**Diagram reasoning representation**
- Actors/entities: Acquiring Channel (Mobile App), Payer PSP, UPI, Payee PSP, Remitter Bank, Beneficiary Bank.
- Ordered messages: `1`, `10` Acquiring Channel↔Payer PSP; `2`, `9` Payer PSP↔UPI (`ReqPay`/`RespPay`); `3`, `4` UPI↔Payee PSP (`ReqAuth`/`RespAuth`); `5`, `6` Remitter Bank↔UPI (`ReqPay`/`RespPay`); `7`, `8` UPI↔Beneficiary Bank (`ReqPay`/`RespPay`).

[IMAGE_170]

![IMAGE_170](images/IMAGE_170.png)

**IMAGE_170 - visual representation**
UPI transaction process flow diagram. Actors/entities shown are: Acquiring Channel (Mobile App) at bottom-left, Payer PSP at left, UPI in the center, Payee PSP at right, Remitter Bank at top, and Beneficiary Bank at bottom. Ten numbered interactions are shown. 1 and 10 connect the Acquiring Channel and Payer PSP with arrows in opposite directions. 2 and 9 connect Payer PSP and UPI with labels “ReqPay” and “RespPay”. 3 and 4 connect UPI and Payee PSP with labels “ReqAuth” and “RespAuth”. 5 and 6 connect Remitter Bank and UPI with “ReqPay” and “RespPay”. 7 and 8 connect UPI and Beneficiary Bank with “ReqPay” and “RespPay”. The numbered circles distinguish the ordered request/response steps across the transaction flow.

**Diagram reasoning representation**
- Actors/entities: Acquiring Channel (Mobile App), Payer PSP, UPI, Payee PSP, Remitter Bank, Beneficiary Bank.
- Ordered messages: `1`, `10` Acquiring Channel↔Payer PSP; `2`, `9` Payer PSP↔UPI (`ReqPay`/`RespPay`); `3`, `4` UPI↔Payee PSP (`ReqAuth`/`RespAuth`); `5`, `6` Remitter Bank↔UPI (`ReqPay`/`RespPay`); `7`, `8` UPI↔Beneficiary Bank (`ReqPay`/`RespPay`).

[IMAGE_171]

![IMAGE_171](images/IMAGE_171.png)

**IMAGE_171 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Diagram reasoning representation**
- Actors/entities: Acquiring Channel (Mobile App), Payer PSP, UPI, Payee PSP, Remitter Bank, Beneficiary Bank.
- Ordered messages: `1`, `10` Acquiring Channel↔Payer PSP; `2`, `9` Payer PSP↔UPI (`ReqPay`/`RespPay`); `3`, `4` UPI↔Payee PSP (`ReqAuth`/`RespAuth`); `5`, `6` Remitter Bank↔UPI (`ReqPay`/`RespPay`); `7`, `8` UPI↔Beneficiary Bank (`ReqPay`/`RespPay`).

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 84/158 
 
1. Member banks should update the status of Deemed Approved transactions (as a Beneficiary) and 
Debit Timeout Transactions (as a Remitter) via UDIR API. 
2. Banks to ensure credit, reversal processing via UDIR, where-ever online credit, reversal not done. 
3. UDIR Adjustment reports are made available for the Member banks for the transactions where 
banks are unable to send response through UDIR. Banks to analyze and take necessary actions to 
ensure all APIs are respond in time. 
4. Payer and Payee PSPs to check status of pending transactions via UDIR API and update on App. 
5. Bank to refer below Operating Circulars for detailed process on UDIR. 
- 
OC 98 : Enhancing complaint handling & resolution process for UPI transactions. 
- 
OC 106 : Auto reversal facility for remitter bank for RET marked cases by Beneficiary bank. 
- 
OC 165 : Implementation of advanced refund API as part of UPI Help (UDIR). 
 
1. Customer enters the UPI ID of the Payee 
2. App(Payer PSP) will send these details to UPI  
3. UPI checks the correctness of the Payee UPI ID  
4. Payee PSP sends relevant a/c details of Payee to UPI 
5. UPI sends the debit request to remitter bank  
6. Remitter bank debits Payer’s a/c & sends confirmation to UPI  
7. UPI sends the credit request to the Beneficiary Bank 
8. Beneficiary Bank credits the customer’s a/c & confirms to UPI  
9. UPI sends the successful confirmation to the Payer PSP  
10. Payer PSP sends the confirmation to the customer via App
```

<!-- PAGE 85 -->
# PAGE 85

[IMAGE_172]

![IMAGE_172](images/IMAGE_172.jpeg)

**IMAGE_172 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_173]

![IMAGE_173](images/IMAGE_173.png)

**IMAGE_173 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 85/158 
 
Failure at 
Step 
Transaction 
Status 
Customer 
Impact 
Remarks 
Step 1 - 4 
Failed 
No 
No scope for Customer Complaints as debit has not been 
processed 
Step 5 - 7 
Failed 
Yes 
If customer is debited, fund is with Remitter 
Step 8 
Pending/Deemed 
Yes 
Beneficiary could have received the fund or amount is lying 
with the Beneficiary Bank 
Step 9 
Success 
Yes 
No scope of Customer complaints for P2P transaction. 
For P2M transaction, complaints can be registered, if goods 
or services are not delivered or for any other service related 
issue. 
 
The reasons of disputes can be broadly attributed to 3 problem statements:  
1. Failed Debit Reversal 
2. Credit Timeout (Deemed approved transactions)  
3. Dispute arising in successful merchant transactions where goods/services are not delivered or any 
other service-related issue 
For online dispute & complaint resolution under UDIR, existing API ReqChkTxn is enhanced and a new 
API is ReqComplaint introduced. 
37.1) 
ReqChkTxn (EXISTING API - ENHANCED) 
1.  Payer using the UPI App can know the status of pending transaction. 
a. To get the status of transactions. 
b. Status update for timeout transactions. 
c. The status is retrieved from URCS instead of UPI online system. 
2. Pro-active ReqChkTxn API to know the status of timeout transaction (Debit Reversal 
and Credit confirmation). 
a. Proactively generating API requests to Bank for status of timeout transactions 
(Remitter for Debit reversal timeout and Beneficiary for deemed status) 
b. The Bank to update the status online if the transactions was already processed OR 
process credit/reversal as the case may be and respond with the status update. 
c. In order to update DRC/Deemed transaction, URCS will Auto trigger transaction to 
UPI - presently once  
d. UPI triggers transaction to respective entities [Remitter/Beneficiary] by throttling 
e. Bank provides updated response. If response is timeout by bank there will be 2 
retries – interval @ 10 min (Configurable) 
f. UPI updates status to URCS through API and sends confirmation to all other 
entities (Bank & PSP)
```

**Machine-readable table extraction(s) for PAGE 85**

#### TABLE_085_01 (source extraction: `page085_table01.csv`)

|Failure at<br>Step|Transaction<br>Status|Customer<br>Impact|Remarks|
|---|---|---|---|
|Step 1 - 4|Failed|No|No scope for Customer Complaints as debit has not been<br>processed|
|Step 5 - 7|Failed|Yes|If customer is debited, fund is with Remitter|
|Step 8|Pending/Deemed|Yes|Beneficiary could have received the fund or amount is lying<br>with the Beneficiary Bank|
|Step 9|Success|Yes|No scope of Customer complaints for P2P transaction.<br>For P2M transaction, complaints can be registered, if goods<br>or services are not delivered or for any other service related<br>issue.|

<!-- PAGE 86 -->
# PAGE 86

[IMAGE_174]

![IMAGE_174](images/IMAGE_174.jpeg)

**IMAGE_174 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_175]

![IMAGE_175](images/IMAGE_175.png)

**IMAGE_175 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 86/158 
37.2) 
ReqComplaint (NEW API) 
First Level complaint- From UPI APP 
Txn Status  
P2P 
P2M 
Success 
Not Applicable 
For reasons -  
1) Goods and services not delivered 
2) Refund not processed for cancelled order / returned 
goods 
3) Account debited but transaction confirmation not 
received by merchant  
4) Duplicate / Multiple Transaction 
Deemed 
If TCC / RET is not done. 
DRC 
Allowed - only If DRC not 
done. 
Allowed - only If DRC not done 
Declined 
Txn 
Not Applicable 
Not Applicable 
 
Pre-approved Refund 
Merchant / Payee through their Beneficiary or Beneficiary can also process online  
refund using ReqComplaint-Refund category API proactively (i.e. without complaint) for refunding 
the amount to the customer. Refund will be allowed through URCS. 
 
All participant members should collect the complaints from various sources/channels such as 
website, tollfree, emails, IVR, CRM etc. and consolidate them. Once all the complaints are 
consolidated then they should be sent to NPCI ODR system and resolve the disputes in real time to 
increase customer satisfaction. 
37.3) 
KEY ENABLEMENT 
Following are the key propositions, which participants need to enable for facilitating online 
dispute resolution of customer complaints for UPI transactions. 
A) REMITTER / REMITTER BANK 
1. To connect their CRM/Complaint management system or any other internal system 
(mobile/internet banking/etc.) to UDIR system at NPCI to be able to raise dispute.  
2. To make necessary changes in reconciliation and complaint handling process at Bank end.  
3. To process reversal in customer account based on return response received from 
Beneficiary.  
4. To communicate to customer any update in the status of the transaction / complaint or 
dispute through CRM, mobile app, internet banking, SMS, Email etc. 
 
B) BENEFICIARY / BENEFICIARY BANK 
1. To make necessary changes at Bank UPI switch and CBS for ascertaining the status of 
transaction when ReqChkTxn API is received as Autoupdate or for complaint raised.
```

**Machine-readable table extraction(s) for PAGE 86**

#### TABLE_086_01 (source extraction: `page086_table01.csv`)

|First Level complaint- From UPI APP|||||||||
|---|---|---|---|---|---|---|---|---|
||Txn Status|||P2P|||P2M||
|Success|||Not Applicable|||For reasons -<br>1) Goods and services not delivered<br>2) Refund not processed for cancelled order / returned<br>goods<br>3) Account debited but transaction confirmation not<br>received by merchant<br>4) Duplicate / Multiple Transaction|||
|Deemed|||If TCC / RET is not done.||||||
|DRC|||Allowed - only If DRC not<br>done.|||Allowed - only If DRC not done|||
|Declined<br>Txn|||Not Applicable|||Not Applicable|||

<!-- PAGE 87 -->
# PAGE 87

[IMAGE_176]

![IMAGE_176](images/IMAGE_176.jpeg)

**IMAGE_176 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_177]

![IMAGE_177](images/IMAGE_177.png)

**IMAGE_177 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 87/158 
2. To make necessary changes for processing credit or return for deemed transaction once 
the ReqChkTxn API is received.  
3. To make necessary changes in reconciliation and dispute handling process at Bank end. 
 
The list of APIs and other important points are given in NPCI/UPI/2023-23/98 dated 24th Nov 2020 for 
details Members can refer latest version of Technical Specification Document (TSD) specs version 
1.2 for implementation (Specs document title “Integrating Member Banks with UDIR system - UPI”. 
All members should have it implemented in their DR setup too, for giving seamless services to the 
end customers. 
37.4) 
LIST OF APIs FOR UDIR 
Below is the list of all UPI UDIR API Calls. All API's mentioned above are asynchronous in 
nature.  
In case of any rejection / error for API call, members to check the API response and act 
accordingly.  
S.  
No  
API 
Type  
(Category)  
Scenarios/Transactions  
Initiator  
Responder  
1  
ReqChkTxn  
ChkTxn  
To check the status of the 
transaction 
/ 
dispute 
/ 
adjustment raised at NPCI  
Remitter  
UDIR  
2  
RespChkTxn  
ChkTxn  
NPCI response to remitter  
ReqChkTxn 
with 
latest 
transaction  
& dispute details  
UDIR  
Remitter  
3  
ReqChkTxn  
ChkTxn  
To check the status of the 
transaction at Beneficiary  
UPI  
Switch  
Beneficiary  
Switch  
4  
RespChkTxn  
ChkTxn  
Beneficiary response to NPCI 
with 
the 
status 
of 
the 
transaction.  
Beneficiary  
Switch  
UPI Switch  
5  
ReqComplaint  
Complaint  To raise a complaint for financial 
transaction  
Remitter  
UDIR  
6  
RespComplaint  Complaint  Status of the complaint raised 
from NPCI.  
UDIR 
Remitter  
7  
ReqPay  
Credit  
Initiated by NPCI to remitter for 
crediting remitter account online  
UPI  
Switch  
Remitter  
Switch  
8  
RespPay  
Credit  
Initiated by remitter to updates 
the status of the online credit  
Remitter  
Switch  
UPI Switch  
9  
ReqChkTxn  
Status 
Check  
To check the response for 
timeout cases for complaints. If 
there is any complaint raised in 
prior and user selects this API to 
the check status 
Remitter  
UDIR
```

**Machine-readable table extraction(s) for PAGE 87**

#### TABLE_087_01 (source extraction: `page087_table01.csv`)

||S.|API|API||Type|Scenarios/Transactions|Scenarios/Transactions|Initiator|Initiator|Responder|Responder|
|---|---|---|---|---|---|---|---|---|---|---|---|
||No||||(Category)|||||||
|1||ReqChkTxn||ChkTxn||To check the status of the<br>transaction / dispute /<br>adjustment raised at NPCI||Remitter||UDIR||
|2||RespChkTxn||ChkTxn||NPCI response to remitter<br>ReqChkTxn with latest<br>transaction<br>& dispute details||UDIR||Remitter||
|3||ReqChkTxn||ChkTxn||To check the status of the<br>transaction at Beneficiary||UPI<br>Switch||Beneficiary<br>Switch||
|4||RespChkTxn||ChkTxn||Beneficiary response to NPCI<br>with the status of the<br>transaction.||Beneficiary<br>Switch||UPI Switch||
|5||ReqComplaint||Complaint||To raise a complaint for financial<br>transaction||Remitter||UDIR||
|6||RespComplaint||Complaint||Status of the complaint raised<br>from NPCI.||UDIR||Remitter||
|7||ReqPay||Credit||Initiated by NPCI to remitter for<br>crediting remitter account online||UPI<br>Switch||Remitter<br>Switch||
|8||RespPay||Credit||Initiated by remitter to updates<br>the status of the online credit||Remitter<br>Switch||UPI Switch||
|9||ReqChkTxn||Status<br>Check||To check the response for<br>timeout cases for complaints. If<br>there is any complaint raised in<br>prior and user selects this API to<br>the check status||Remitter||UDIR||

<!-- PAGE 88 -->
# PAGE 88

[IMAGE_178]

![IMAGE_178](images/IMAGE_178.jpeg)

**IMAGE_178 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_179]

![IMAGE_179](images/IMAGE_179.png)

**IMAGE_179 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 88/158 
37.5) 
AUTO UPDATE IN UPI 
The auto update API will be triggered from URCS to UPI switch for deemed transactions, where 
beneficiary is live on UDIR. Beneficiary bank to update the status of the transaction (TCC / 
RET), including processing Credit or Return, in case it was not processed earlier in original 
online transaction. In case of return from Beneficiary bank, Remitter bank to process credit to 
customer account. Bank as a Remitter and Beneficiary need to have check for duplicate 
processing and ensure that the request is not processed more than once.  
The Auto update API indicative times are as following:  
Timing 
Transaction Time Range 
10:45 PM  07:45 PM to 10:30 PM 
11:45 PM  08:45 PM to 11:30 PM 
12:45 AM 
09:45 PM to 12:30 AM  
 
Note: Auto update will be triggered at interval of every 60 mins. Cases where no response is 
received in next 2 retry these transactions will be marked as timeout and will be made available in 
UDIR adjustment reports. 
37.6) 
RECONCILIATION AND DISPUTE MANAGEMENT 
1. Dispute/adjustment should be raised directly in the URCS (back office) system for 
transactions based on the complaint received through UDIR API and response received 
from Beneficiary.  
2. UDIR will help resolve customer complaints in the following ways:  
a. 
Generating online reversal for the transactions marked returned by Beneficiary 
switch end (if it is within the reversal time period).  
b. 
Raising chargeback (CB) for transactions. (wherever applicable) 
c. 
Updating TCC/RET on the basis of response received by beneficiary in API response 
for Auto update and Complaint raised.  
3. Issuer/Remitter Banks can also have their Mobile Banking and Internet Banking systems 
directly connected to UDIR for checking the status of the transaction / dispute as well as 
raise disputes (complaints).  
4. Whenever the Remitter Bank raises a ReqComplaint request to UDIR, it is assumed that the 
request is for NPCI to raise a dispute (chargeback) on behalf of the Remitter Bank, based 
on the status of the transaction.  
5. Customer complaints related to the below scenarios will be addressed by UDIR:  
Dispute 
Category  
Dispute  
Flag  
Reason  
Code  
Reason Code Description  
Chargeback  
B  
108  
Remitter account debited but beneficiary account not 
credited  
Deferred  
Chargeback  
FB  
121  
TCC has been raised but customer still complaining 
that Beneficiary a/c is not credited.  
Note: If Complaint (chargeback) is initiated with any other reason code, the same will be 
rejected by UDIR
```

**Machine-readable table extraction(s) for PAGE 88**

#### TABLE_088_01 (source extraction: `page088_table01.csv`)

|Timing|Transaction Time Range|
|---|---|
|10:45 PM|07:45 PM to 10:30 PM|
|11:45 PM|08:45 PM to 11:30 PM|
|12:45 AM|09:45 PM to 12:30 AM|

#### TABLE_088_02 (source extraction: `page088_table02.csv`)

|Dispute<br>Category|Dispute<br>Flag|Reason<br>Code|Reason Code Description|
|---|---|---|---|
|Chargeback|B|108|Remitter account debited but beneficiary account not<br>credited|
|Deferred<br>Chargeback|FB|121|TCC has been raised but customer still complaining<br>that Beneficiary a/c is not credited.|

<!-- PAGE 89 -->
# PAGE 89

[IMAGE_180]

![IMAGE_180](images/IMAGE_180.jpeg)

**IMAGE_180 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_181]

![IMAGE_181](images/IMAGE_181.png)

**IMAGE_181 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 89/158 
6. When the UDIR system requests the status of a transaction from Beneficiary bank, the 
Beneficiary should give response with following response code RC:  
RC  Description  
00  Success along with TCC and proper code  
UR  Failure - along with RET and proper code  
UP  Beneficiary Unable to update  
7. The APIs can connect and facilitate online transaction / dispute status check and raise 
complaints up to 60 days from the date of transaction.  
8. Members should also be able to connect their reconciliation or back office system to UDIR 
for raising first level disputes / adjustments viz. Chargeback, Re-presentment, Credit 
Adjustments, etc. directly through APIs in future.  
9. Note: 
• 
Members live on UDIR should not pass manual entries (credit / reversal) to customer 
account for exceptions / pending transactions identified during reconciliation on the 
transaction date (T+0). Members can do so on T+1 day (onwards), only after checking 
the latest settlement / adjustment reports and customer account before passing 
manual entries, to avoid duplicate credit/reversal. 
• 
Members live on UDIR should not process credit online for complaint received on T+1 
day or later as Beneficiary unless bank has a system/process to validate the manually 
processed credits into the beneficiary account. 
10. The existing dispute management process including TAT, dispute & adjustment type, 
customer penalties for delayed credit for failed transactions, etc. should be followed for 
complaints raised under UDIR approach.  
37.7) 
RAW FILES AND ADJUSTMENT REPORTS 
1. There will be no changes in raw data files and settlement reports.  
2. In existing adjustment report new columns are added as per below table. This is for your 
information only.  
Column  
Value  
Scenario  
Originating  
Channel  
UDIR  
For 
UDIR 
initiated 
disputes/ 
Customer 
complaints via  
NPCI Website  
Auto-Update  
For auto-updated transactions  
Web  
For disputes initiated through Web  
Online-VR  
For disputes raised against online VR  
Online-CS  
For disputes raised against online CS  
File  
For disputes initiated through file upload
```

**Machine-readable table extraction(s) for PAGE 89**

#### TABLE_089_01 (source extraction: `page089_table01.csv`)

|RC|Description|
|---|---|
|00|Success along with TCC and proper code|
|UR|Failure - along with RET and proper code|
|UP|Beneficiary Unable to update|

#### TABLE_089_02 (source extraction: `page089_table02.csv`)

|Column|Value|Scenario|
|---|---|---|
|Originating<br>Channel|UDIR|For UDIR initiated disputes/ Customer<br>complaints via<br>NPCI Website|
||Auto-Update|For auto-updated transactions|
||Web|For disputes initiated through Web|
||Online-VR|For disputes raised against online VR|
||Online-CS|For disputes raised against online CS|
||File|For disputes initiated through file upload|

<!-- PAGE 90 -->
# PAGE 90

[IMAGE_182]

![IMAGE_182](images/IMAGE_182.jpeg)

**IMAGE_182 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_183]

![IMAGE_183](images/IMAGE_183.png)

**IMAGE_183 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 90/158 
Adjustment  
Settlement 
date  
Settlement date of the 
dispute  
For disputes raised between 23:00 and 00:00, 
this date will reflect the settlement date (which 
will be the next day)  
In all other cases, this will be the same as the 
dispute raise date  
Reason code  
Reason code used 
while raising the 
dispute  
Reason code chosen by banks while raising 
disputes  
(OR)  
00/M0 for disputes/adjustments raised based 
on online VR/CS  
3. In URCS front end, dispute / adjustments raised under UDIR can be identified basis.  
Value  
Scenario  
UDIR  
For UDIR initiated disputes  
Auto-Update  For auto-updated transactions  
Online-VR  
For disputes/adjustments raised against VR  
Online-CS  
For disputes/adjustments raised against CS  
4. New report as UDIR Adjustment Report is made available to members as remitter and 
beneficiary for each cycle. It will contain details of time outs and unable to update responses 
for UDIR APIs. Adjustment types are introduced for identification in new UDIR Adjustment 
report; however, this will not have any impact on settlement.  
Description  
Dispute Flag  
Beneficiary timeout  
BTO  
Beneficiary unable to update  
BUU  
Beneficiary invalid response  
BIR  
Remitter timeout  
RRC  
Remitter decline  
RDR  
Remitter invalid response  
RIR  
  
5. Changes in handling LR /VR/CS processing post Bank’s go live on UDIR:  
I. 
LR processing – will be dropped in online for Beneficiary banks live on UDIR and LR – 
Response code (RC) will not be updated.  
II. 
In case of VR/CS processing, if original transaction is still in deemed status (08) and no 
disputes are raised through Auto Update, Complaints or thru URCS.  
VR/CS  
Action  
Successful (00)  
TCC is raised in BCS and transaction is removed from timeout 
report /penalty calculation/Auto-update list.  
Declined (M0)  
RET is raised and transaction is removed from time out 
report/penalty calculation/auto-update list.  
Any other response 
code  
No change in status of the transaction as well as in URCS
```

**Machine-readable table extraction(s) for PAGE 90**

#### TABLE_090_01 (source extraction: `page090_table01.csv`)

|Adjustment<br>Settlement<br>date|Settlement date of the<br>dispute|For disputes raised between 23:00 and 00:00,<br>this date will reflect the settlement date (which<br>will be the next day)<br>In all other cases, this will be the same as the<br>dispute raise date|
|---|---|---|
|Reason code|Reason code used<br>while raising the<br>dispute|Reason code chosen by banks while raising<br>disputes<br>(OR)<br>00/M0 for disputes/adjustments raised based<br>on online VR/CS|

#### TABLE_090_02 (source extraction: `page090_table02.csv`)

||Value|||Scenario||
|---|---|---|---|---|---|
|UDIR|||For UDIR initiated disputes|||
|Auto-Update|||For auto-updated transactions|||
|Online-VR|||For disputes/adjustments raised against VR|||
|Online-CS|||For disputes/adjustments raised against CS|||

#### TABLE_090_03 (source extraction: `page090_table03.csv`)

|Description|Dispute Flag|
|---|---|
|Beneficiary timeout|BTO|
|Beneficiary unable to update|BUU|
|Beneficiary invalid response|BIR|
|Remitter timeout|RRC|
|Remitter decline|RDR|
|Remitter invalid response|RIR|

#### TABLE_090_04 (source extraction: `page090_table04.csv`)

|VR/CS|Action|
|---|---|
|Successful (00)|TCC is raised in BCS and transaction is removed from timeout<br>report /penalty calculation/Auto-update list.|
|Declined (M0)|RET is raised and transaction is removed from time out<br>report/penalty calculation/auto-update list.|
|Any other response<br>code|No change in status of the transaction as well as in URCS|

<!-- PAGE 91 -->
# PAGE 91

[IMAGE_184]

![IMAGE_184](images/IMAGE_184.jpeg)

**IMAGE_184 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_185]

![IMAGE_185](images/IMAGE_185.png)

**IMAGE_185 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 91/158 
In above scenarios, transaction status in raw data file will be deemed and settlement of funds 
will be in NTSL transaction section as per the adjustment raised. 
Importantly, for detailed functionality, specification, validation and controls, member to refer 
the latest Technical Specification Document for implementation. 
38) PII DATA (PERSON IDENTIFIER INFORMATION) 
All participant members should follow the PII policy and ensure they are not exposed through emails 
and any other channels. PII data covers the following data, 
1. Aadhaar number 
2. Account number 
3. Customer Name 
4. VPA/UPI ID 
5. Mobile number 
6. Credit Card number 
39) PGP ENCRYPTION 
PGP is an encryption program that provides cryptographic privacy and authentication for data 
communication. PGP is used for encrypting and decrypting files which will be shared between NPCI 
and Member banks.  
Public and Private keys play a vital role in PGP to encrypt and decrypt the data. The public key is used 
to encrypt the data and the private key is used to decrypt the data. The PGP tool and key corresponding 
to a Bank for PGP encryption/decryption are placed in respective bank’s folder in URCS system. 
40) URCS RESET PASSWORD PROCESS, POLICY & SYSTEM REQUIREMENTS 
40.1) 
RESET PASSWORD 
• 
URCS allows maker admin & checker to rest, modify, or delete the password. 
• 
URCS also allows to reset the password by setting the answer for few random queries basis 
which. Users of URCS should remember the answer set for the questions. If a user forgets the 
password, then contact NPCI operations team for assistance. 
40.2) 
PASSWORD POLICY 
• 
Password minimum length should be 8 and maximum 16.  
• 
One special character, one numeric & one upper case (capital letter) is mandatory for setting 
password (e.g. Bharat@1352). 
• 
Previous passwords should not be repeated. 
41) URCS SYSTEM REQUIREMENTS 
URCS is a web-based application that can be accessed on any desktop or laptop/computer having the 
following specifications.
```

<!-- PAGE 92 -->
# PAGE 92

[IMAGE_186]

![IMAGE_186](images/IMAGE_186.jpeg)

**IMAGE_186 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_187]

![IMAGE_187](images/IMAGE_187.png)

**IMAGE_187 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 92/158 
RAM 
Minimum 1 GB RAM 
Supported 
Browser 
1. Microsoft Internet Explorer 11.0 and above 
2. Chrome version 70.0 & above 
Screen 
Resolution 
To make the best use of URCS, we recommend a monitor of 1024x768 pixels or 
higher, and 32-bit colour or higher 
JavaScript 
JavaScript is used in URCS to enhance the user experience and provide advanced 
functionality. URCS requires Java to be installed and turned on. 
Cookies 
URCS application requires cookies to be enabled in the browser. 
Pop-up 
Control 
URCS uses ‘pop-up' windows to display some content. If you are using a browser 
that offers pop-up control or is running an add-on program to control pop-ups, you 
need to take steps to allow pop-ups for this site.
```

**Machine-readable table extraction(s) for PAGE 92**

#### TABLE_092_01 (source extraction: `page092_table01.csv`)

|RAM|Minimum 1 GB RAM|
|---|---|
|Supported<br>Browser|1. Microsoft Internet Explorer 11.0 and above<br>2. Chrome version 70.0 & above|
|Screen<br>Resolution|To make the best use of URCS, we recommend a monitor of 1024x768 pixels or<br>higher, and 32-bit colour or higher|
|JavaScript|JavaScript is used in URCS to enhance the user experience and provide advanced<br>functionality. URCS requires Java to be installed and turned on.|
|Cookies|URCS application requires cookies to be enabled in the browser.|
|Pop-up<br>Control|URCS uses ‘pop-up' windows to display some content. If you are using a browser<br>that offers pop-up control or is running an add-on program to control pop-ups, you<br>need to take steps to allow pop-ups for this site.|

<!-- PAGE 93 -->
# PAGE 93

[IMAGE_188]

![IMAGE_188](images/IMAGE_188.jpeg)

**IMAGE_188 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_189]

![IMAGE_189](images/IMAGE_189.png)

**IMAGE_189 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 93/158 
 
42) ANNEXURES 
42.1) 
DOCUMENTS FOR ON-BOARDING PARTICIPANT BANKS (ANNEXURE – 1) 
 
 
On Member’s Letter Head 
 
Ref No.________________  
 
 
 
 
 Date:  
 
To, 
Head 
Unified Payment Interface (UPI)  
National Payments Corporation of India 
Units No.s 301, 302, 3rd Floor 
Raheja Titanium, Western Express Highway 
Goregaon (East), Mumbai - 400 063 
 
Dear Sir, 
Ref: Unified Payment Interface (UPI) – Go Live Letter 
We refer to the captioned subject and confirm our readiness to ‘GO LIVE’ in Unified Payment 
Interface (UPI) for the below services from  
 
Sign off provided for the following services (Check the applicable box) 
1. Direct Pay 
 Account no. and IFSC.  
 Mobile no. and MMID 
 Aadhar no. 
 Virtual Payment address 
Remarks (If any)________________________________________________ 
2. Direct Collect 
 Virtual Payment address 
 Non-mobile channel (Please specify) 
 Remarks (If any)________________________________________________ 
3. Non-Financial transaction 
 Check transaction status 
 Mobile no. registration 
 Set/Change PIN 
 Raise Grievance 
 Request for OTP
```

**Machine-readable table extraction(s) for PAGE 93**

#### TABLE_093_01 (source extraction: `page093_table01.csv`)

_[Table extraction returned no rows.]_

<!-- PAGE 94 -->
# PAGE 94

[IMAGE_190]

![IMAGE_190](images/IMAGE_190.jpeg)

**IMAGE_190 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_191]

![IMAGE_191](images/IMAGE_191.png)

**IMAGE_191 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 94/158 
Remarks (If any)________________________________________________ 
We also confirm that the Soft Launch will not be more than a period of seven days post Go-Live date. 
UPI services will be publicly launched immediately after the Soft Launch period. 
 
 
Yours faithfully, 
Member’s authorised signatory with Member’s Stamp 
 
P.S: In case there are any changes at the Member’s end or additional features in UPI, member should 
inform NPCI and check the changes in UAT with NPCI team before making the changes in production. If 
the Go-live is delayed post certification for more than 3 months, a complete round of re-certification 
will be required as per NPCI policies.
```

<!-- PAGE 95 -->
# PAGE 95

[IMAGE_192]

![IMAGE_192](images/IMAGE_192.jpeg)

**IMAGE_192 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_193]

![IMAGE_193](images/IMAGE_193.png)

**IMAGE_193 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 95/158 
42.2) 
COLLATERAL DEPOSIT SAMPLE FORMAT (ANNEXURE – 2) 
 
On Bank’s Letter Head 
To, 
The Head, 
UPI – Unified Payment Interface 
National Payments Corporation of India, 
Mumbai. 
 
 
Dear Sir, 
Subject: Net Debit Cap for Unified Payment Interface (UPI) 
 
We, the _____________ Bank having its registered office at _______ have hereby inform you that the Net 
Debit Cap of ₹______________/- is allocated to us as per UPI SGM policy. 
We do hereby request you to set Net Debit Cap for UPI transactions to ₹_____________/- out of the total 
Net Debit Cap allocated to us for UPI. We also hereby declare and undertake to NPCI that we shall 
abide by the NPCI’s all applicable rules, regulations and guidelines of UPI.  
 
Date: 
 
 
 
 
 
 
 
 
SD… 
 
Place:  
 
 
 
 
 
 
 
(Authorized Signatory.)
```

<!-- PAGE 96 -->
# PAGE 96

[IMAGE_194]

![IMAGE_194](images/IMAGE_194.jpeg)

**IMAGE_194 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_195]

![IMAGE_195](images/IMAGE_195.png)

**IMAGE_195 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 96/158 
42.3) 
URCS USER REQUEST FORM (ANNEXURE – 3) 
 
Please create URCS User IDs for  
 
Sponsor Bank: 
 
Sub-Member/PPIs Name: 
 
Product Name: 
 
Unified Payment Interface (UPI) 
 
 
User Request Definition 
 
Request Type: Create / Modify / Disable / Delete 
Access: 
 
View & Download Reports 
 
 
 
Raise Adjustments 
 
 
 
All Access 
 
 
 
Sponsor Bank 
Concerned Official Name and Designation: __________________________________________ 
 
 
 
 
 
 
 
(Signature & Seal) 
 
For NPCI Use Only: 
Changes 
Name 
Signature 
Date 
Originated by 
 
 
 
Reviewed by 
 
 
 
Approved by 
 
 
 
User IDs created by
```

**Machine-readable table extraction(s) for PAGE 96**

#### TABLE_096_01 (source extraction: `page096_table01.csv`)

|Sponsor Bank:||
|---|---|
|Sub-Member/PPIs Name:||
|Product Name:|Unified Payment Interface (UPI)|

#### TABLE_096_02 (source extraction: `page096_table02.csv`)

|User Request Definition|
|---|
|Request Type: Create / Modify / Disable / Delete|
|Access:|
|View & Download Reports<br>Raise Adjustments<br>All Access|

#### TABLE_096_03 (source extraction: `page096_table03.csv`)

|View & Download Reports||
|---|---|

#### TABLE_096_04 (source extraction: `page096_table04.csv`)

|Raise Adjustments||
|---|---|

#### TABLE_096_05 (source extraction: `page096_table05.csv`)

|All Access||
|---|---|

#### TABLE_096_06 (source extraction: `page096_table06.csv`)

|For NPCI Use Only:||||
|---|---|---|---|
|Changes|Name|Signature|Date|
|Originated by||||
|Reviewed by||||
|Approved by||||
|User IDs created by||||

<!-- PAGE 97 -->
# PAGE 97

[IMAGE_196]

![IMAGE_196](images/IMAGE_196.jpeg)

**IMAGE_196 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_197]

![IMAGE_197](images/IMAGE_197.png)

**IMAGE_197 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 97/158 
42.4) 
GST REGISTRATION DETAILS (ANNEXURE – 4) 
 
On Bank’s Letter Head 
Name of the member: ______________________________________________________ 
 
GST Identification Number 
(GSTIN) / Provisional ID 
PAN (Optional) 
TAN (Optional) 
 
 
 
Address of principal place of business in the State as per GST registration 
Address Line 1 
 
Address Line 2 
 
Address Line 3 
 
City 
 
State 
 
Pin code 
 
 
Product & Services (✓ tick whichever is applicable) 
 
The above given GSTIN details is applicable for all Product and Services availed by us from NPCI    
 
OR 
 
NFS 
CTS 
Western 
Grid 
CTS 
Northern 
Grid 
CTS 
Southern 
Grid 
UPI 
/NUUP 
/UPI 
NACH 
UPI 
NETC 
RuPay 
POS & 
E-Com 
Any new 
product / 
service 
 
 
 
 
 
 
 
 
 
 
** If GSTIN is same for all the products, kindly tick (✓) on “All Products and Services”. If there are 
separate GSTIN for separate product, multiple printouts of Annexure A can be taken by ticking relevant 
products. If none of the product is ticked, it will be assumed that the given GSTIN is same for all the 
products and services. 
 
Date: 
 
(Authorized Signatory) 
 
Name & Designation of the signatory: 
 
Bank Name: 
(Rubber Stamp) 
 
Encl:
```

**Machine-readable table extraction(s) for PAGE 97**

#### TABLE_097_01 (source extraction: `page097_table01.csv`)

|GST Identification Number<br>(GSTIN) / Provisional ID|PAN (Optional)|TAN (Optional)|
|---|---|---|
||||
|Address of principal place of business in the State as per GST registration|||
|Address Line 1|||
|Address Line 2|||
|Address Line 3|||
|City|||
|State|||
|Pin code|||

#### TABLE_097_02 (source extraction: `page097_table02.csv`)

|NFS|CTS<br>Western<br>Grid|CTS<br>Northern<br>Grid|CTS<br>Southern<br>Grid|UPI<br>/NUUP<br>/UPI|NACH|UPI|NETC|RuPay<br>POS &<br>E-Com|Any new<br>product /<br>service|
|---|---|---|---|---|---|---|---|---|---|

<!-- PAGE 98 -->
# PAGE 98

[IMAGE_198]

![IMAGE_198](images/IMAGE_198.jpeg)

**IMAGE_198 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_199]

![IMAGE_199](images/IMAGE_199.png)

**IMAGE_199 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 98/158 
42.5) 
USER ID REQUEST FORM FOR INVOICE SHARING TOOL (ANNEXURE – 5) 
 
(On member’s letterhead) 
 
Please create User IDs for (Organisation Name)  
 
Sponsor Bank: 
 
Sub-Member/PPIs Name: 
 
 
User Request 
 
Request Type: Create / Modify / Disable / Delete 
Static Public IP address (For maintenance at firewall)  
 
1st User details: e-Mail ID _____________________________ Mobile ___________________ 
 
2nd User details: e-Mail ID _____________________________ Mobile ___________________ 
 
 
Sign & Stamp: _________________________________________________ 
 
Name: _________________________________________________________ 
 
Designation: ____________________________________________________ 
 
Date: __________________________________________________________ 
Note: Ports to be opened by members for accessing the portal: 
• 
Port 8122 
• 
Port Range 6000 – 6500 
 
For NPCI Use Only: 
Changes 
Name 
Signature 
Date 
Originated by 
 
 
 
Reviewed by 
 
 
 
Approved by 
 
 
 
User IDs created by
```

**Machine-readable table extraction(s) for PAGE 98**

#### TABLE_098_01 (source extraction: `page098_table01.csv`)

|Sponsor Bank:||
|---|---|
|Sub-Member/PPIs Name:||

#### TABLE_098_02 (source extraction: `page098_table02.csv`)

|User Request|
|---|
|Request Type: Create / Modify / Disable / Delete|
|Static Public IP address (For maintenance at firewall)|
|1st User details: e-Mail ID _____________________________ Mobile ___________________|
|2nd User details: e-Mail ID _____________________________ Mobile ___________________|

#### TABLE_098_03 (source extraction: `page098_table03.csv`)

|For NPCI Use Only:||||
|---|---|---|---|
|Changes|Name|Signature|Date|
|Originated by||||
|Reviewed by||||
|Approved by||||
|User IDs created by||||

<!-- PAGE 99 -->
# PAGE 99

[IMAGE_200]

![IMAGE_200](images/IMAGE_200.jpeg)

**IMAGE_200 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_201]

![IMAGE_201](images/IMAGE_201.png)

**IMAGE_201 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 99/158 
42.6) 
ESCALATION MATRIX (ANNEXURE – 6) 
Technical Contact Details 
 
Escalation Level & Time 
Name & Position 
Responsibilities 
& Support 
Contact Details 
Escalation 
Level 
Duration 
(Time) 
Name 
Position 
Phone 
Mobile 
Fax 
Official  
E-Mail 
ID 
Personal 
E-Mail ID 
1st Level 
24 hrs 
  
  
  
  
  
 
 
2nd Level 
48 hrs 
  
  
  
  
  
  
 
 
3rd Level 
72 hrs 
  
  
  
  
  
  
 
 
Network Contact Details 
Escalation Level & Time 
Name & Position 
Responsibilities 
& Support 
Contact Details 
Escalation 
Level 
Duration 
(Time) 
Name 
Position 
Phone 
Mobile 
Fax 
Official 
E-Mail 
ID 
Persona 
E-Mail ID 
1st Level 
24 hrs 
  
  
  
  
  
  
 
2nd Level 
48 hrs 
  
  
  
  
  
  
  
 
3rd Level 
72 hrs 
  
  
  
  
  
  
  
 
Business Contact Details 
Escalation Level & Time 
Name & Position 
Responsibilities 
& Support 
Contact Details 
Escalation 
Level 
Duration 
(Time) 
Name 
Position 
Phone 
Mobile 
Fax 
Official 
E-Mail 
ID 
Personal 
E-Mail ID 
1st Level 
24 hrs 
  
  
  
  
  
  
 
 
2nd Level 
48 hrs 
  
  
  
  
  
  
 
 
3rd Level 
72 hrs 
  
  
  
  
  
  
 
 
Operations Contact Details 
Escalation Level & Time 
Name & Position 
Responsibilities 
& Support 
Contact Details 
Escalation 
Level 
Duration 
(Time) 
Name 
Position 
Phone 
Mobile 
Fax 
Official 
E-Mail 
ID 
Personal 
E-Mail ID 
1st Level 
24 hrs 
  
  
  
  
  
  
 
 
2nd Level 
48 hrs 
  
  
  
  
  
  
 
 
3rd Level 
72 hrs 
  
  
  
  
  
  
 
 
Treasury Contact Details 
Escalation Level & Time 
Name & Position 
Responsibilities 
& Support 
Contact Details 
Escalation 
Level 
Duration 
(Time) 
Name 
Position 
Phone 
Mobile 
Fax 
Official 
E-Mail 
ID 
Personal 
E-Mail ID 
1st Level 
24 hrs 
  
  
  
  
  
  
 
 
2nd Level 
48 hrs 
  
  
  
  
  
  
 
 
3rd Level 
72 hrs
```

**Machine-readable table extraction(s) for PAGE 99**

#### TABLE_099_01 (source extraction: `page099_table01.csv`)

|Technical Contact Details||||||||||
|---|---|---|---|---|---|---|---|---|---|
|Escalation Level & Time||Name & Position||Responsibilities<br>& Support|Contact Details|||||
|Escalation<br>Level|Duration<br>(Time)|Name|Position||Phone|Mobile|Fax|Official<br>E-Mail<br>ID|Personal<br>E-Mail ID|
|1st Level|24 hrs|||||||||
|2nd Level|48 hrs|||||||||
|3rd Level|72 hrs|||||||||

#### TABLE_099_02 (source extraction: `page099_table02.csv`)

|Network Contact Details||||||||||
|---|---|---|---|---|---|---|---|---|---|
|Escalation Level & Time||Name & Position||Responsibilities<br>& Support|Contact Details|||||
|Escalation<br>Level|Duration<br>(Time)|Name|Position||Phone|Mobile|Fax|Official<br>E-Mail<br>ID|Persona<br>E-Mail ID|
|1st Level|24 hrs|||||||||
|2nd Level|48 hrs|||||||||
|3rd Level|72 hrs|||||||||

#### TABLE_099_03 (source extraction: `page099_table03.csv`)

|Business Contact Details||||||||||
|---|---|---|---|---|---|---|---|---|---|
|Escalation Level & Time||Name & Position||Responsibilities<br>& Support|Contact Details|||||
|Escalation<br>Level|Duration<br>(Time)|Name|Position||Phone|Mobile|Fax|Official<br>E-Mail<br>ID|Personal<br>E-Mail ID|
|1st Level|24 hrs|||||||||
|2nd Level|48 hrs|||||||||
|3rd Level|72 hrs|||||||||

#### TABLE_099_04 (source extraction: `page099_table04.csv`)

|Operations Contact Details||||||||||
|---|---|---|---|---|---|---|---|---|---|
|Escalation Level & Time||Name & Position||Responsibilities<br>& Support|Contact Details|||||
|Escalation<br>Level|Duration<br>(Time)|Name|Position||Phone|Mobile|Fax|Official<br>E-Mail<br>ID|Personal<br>E-Mail ID|
|1st Level|24 hrs|||||||||
|2nd Level|48 hrs|||||||||
|3rd Level|72 hrs|||||||||

#### TABLE_099_05 (source extraction: `page099_table05.csv`)

|Treasury Contact Details||||||||||
|---|---|---|---|---|---|---|---|---|---|
|Escalation Level & Time||Name & Position||Responsibilities<br>& Support|Contact Details|||||
|Escalation<br>Level|Duration<br>(Time)|Name|Position||Phone|Mobile|Fax|Official<br>E-Mail<br>ID|Personal<br>E-Mail ID|
|1st Level|24 hrs|||||||||
|2nd Level|48 hrs|||||||||
|3rd Level|72 hrs|||||||||

<!-- PAGE 100 -->
# PAGE 100

[IMAGE_202]

![IMAGE_202](images/IMAGE_202.jpeg)

**IMAGE_202 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_203]

![IMAGE_203](images/IMAGE_203.png)

**IMAGE_203 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 100/158 
42.7) 
OPERATING CIRCULAR LIST (ANNEXURE – 7) 
Circular Number 
Circular Name 
Release Date 
UPI OC 1 
Enablement of UPI for thousand employees 
14-Jul-16 
UPI OC 2 
Prerequisites for UPI customer launch 
22-Jul-16 
UPI OC 3 
Daily reconciliation of UPI transactions 
02-Aug-16 
UPI OC 4 
Compliance with NPCI circulars and Procedural Guidelines 
of UPI 
12-Aug-16 
UPI OC 5 
Security considerations on UPI - Immediate Actions 
06-Sep-16 
UPI OC 6 
Implementation of FRM in UPI 
15-Sep-16 
UPI OC 7 
UPI Usability enhancements 
19-Oct-16 
UPI OC 8 
Addendum to circular for implementing UPPI 1.5 changes 
15-Nov-16 
UPI OC 9 
UPI Daily reconciliation and dispute handling 
01-Dec-16 
UPI OC 10 
Recommendations to simplify UPI PSP apps for Seamless 
customer onboarding 
01-Dec-16 
UPI OC 11 
Urgent enablement of reading/generating dynamic QR code 
07-Dec-16 
UPI OC 12 
Revision in benchmarking criteria of UPI system/interface of 
member banks. 
08-Dec-16 
UPI OC 13 
Compliance to merchant onboarding and SDK guidelines 
checklist 
08-Dec-16 
UPI OC 14 
Unified Payments Interfaces compliance and requirement 
for the member banks 
04-Jan-17 
UPI OC 15 
UPI Merchant SDK: Specific requirements & Compliance 
18-Jan-17 
UPI OC 15A 
Checklist for PSP SDK 
27-Jan-17 
UPI OC 15B 
Single PSP model merchant integration 
15-Sep-17 
UPI OC 15C 
Guidelines on interoperability features for all BHIM UPI 
Apps 
16-Mar-18 
UPI OC 16 
UPI, IMPS & *99# - Revision in interchange fee & MDR (1st 
Jan to 31st Mar 2017) 
21-Feb-17 
UPI OC 17 
Compliance for successful debit reversals & Handling 
deemed approved transactions and reconciliation 
09-Mar-17 
UPI OC 18 
Bank Compliances to enable UPI Merchant Ecosystem 
20-Mar-17 
UPI OC 19 
UPI Debit reversal codes 
31-Mar-17 
UPI OC 20 
Assigning exclusive MCC for Life Insurance Corporation of 
India (LIC) 
25-Apr-17 
UPI OC 21 
Usage of BHIM by bank’s UPI PSP App 
08-Jun-17 
UPI OC 22 
Launch of Referral and Merchant Cashback scheme for 
BHIM users 
14-Jun-17 
UPI OC 23 
UPI OC Migration from Service Tax to GST 18% 
14-Jun-17 
UPI OC 24 
Corporate Disbursement through UPI 
05-Jul-17 
UPI OC 25 
Discontinuing Services on USSD 1.0 system 
30-Jun-17
```

**Machine-readable table extraction(s) for PAGE 100**

#### TABLE_100_01 (source extraction: `page100_table01.csv`)

|Circular Number|Circular Name|Release Date|
|---|---|---|
|UPI OC 1|Enablement of UPI for thousand employees|14-Jul-16|
|UPI OC 2|Prerequisites for UPI customer launch|22-Jul-16|
|UPI OC 3|Daily reconciliation of UPI transactions|02-Aug-16|
|UPI OC 4|Compliance with NPCI circulars and Procedural Guidelines<br>of UPI|12-Aug-16|
|UPI OC 5|Security considerations on UPI - Immediate Actions|06-Sep-16|
|UPI OC 6|Implementation of FRM in UPI|15-Sep-16|
|UPI OC 7|UPI Usability enhancements|19-Oct-16|
|UPI OC 8|Addendum to circular for implementing UPPI 1.5 changes|15-Nov-16|
|UPI OC 9|UPI Daily reconciliation and dispute handling|01-Dec-16|
|UPI OC 10|Recommendations to simplify UPI PSP apps for Seamless<br>customer onboarding|01-Dec-16|
|UPI OC 11|Urgent enablement of reading/generating dynamic QR code|07-Dec-16|
|UPI OC 12|Revision in benchmarking criteria of UPI system/interface of<br>member banks.|08-Dec-16|
|UPI OC 13|Compliance to merchant onboarding and SDK guidelines<br>checklist|08-Dec-16|
|UPI OC 14|Unified Payments Interfaces compliance and requirement<br>for the member banks|04-Jan-17|
|UPI OC 15|UPI Merchant SDK: Specific requirements & Compliance|18-Jan-17|
|UPI OC 15A|Checklist for PSP SDK|27-Jan-17|
|UPI OC 15B|Single PSP model merchant integration|15-Sep-17|
|UPI OC 15C|Guidelines on interoperability features for all BHIM UPI<br>Apps|16-Mar-18|
|UPI OC 16|UPI, IMPS & *99# - Revision in interchange fee & MDR (1st<br>Jan to 31st Mar 2017)|21-Feb-17|
|UPI OC 17|Compliance for successful debit reversals & Handling<br>deemed approved transactions and reconciliation|09-Mar-17|
|UPI OC 18|Bank Compliances to enable UPI Merchant Ecosystem|20-Mar-17|
|UPI OC 19|UPI Debit reversal codes|31-Mar-17|
|UPI OC 20|Assigning exclusive MCC for Life Insurance Corporation of<br>India (LIC)|25-Apr-17|
|UPI OC 21|Usage of BHIM by bank’s UPI PSP App|08-Jun-17|
|UPI OC 22|Launch of Referral and Merchant Cashback scheme for<br>BHIM users|14-Jun-17|
|UPI OC 23|UPI OC Migration from Service Tax to GST 18%|14-Jun-17|
|UPI OC 24|Corporate Disbursement through UPI|05-Jul-17|
|UPI OC 25|Discontinuing Services on USSD 1.0 system|30-Jun-17|

<!-- PAGE 101 -->
# PAGE 101

[IMAGE_204]

![IMAGE_204](images/IMAGE_204.jpeg)

**IMAGE_204 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_205]

![IMAGE_205](images/IMAGE_205.png)

**IMAGE_205 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 101/158 
UPI OC 26 
UPI Customer complaint handling process 
04-Aug-18 
UPI OC 27 
Inclusion of UPI Banks in BHIM Merchant Cashback and 
Referral Bonus Scheme 
18-Aug-17 
UPI OC 28 
Scanning UPI credentials integrated in Bharat QR through 
UPI PSP application 
18-Aug-17 
UPI OC 29 
To reduce the high technical declines and business 
declines 
19-Aug-17 
UPI OC 31 
Inclusion of UPI Banks in BHIM Merchant Cashback and 
Referral Bonus Scheme 
07-Sep-17 
UPI OC 32 
UPI - Multibank model (API Approach) 
15-Sep-17 
UPI OC 33 
Multiple bank model (API Approach) 
15-Sep-17 
UPI OC 34 
Compliances related to MCCs in UPI and guidelines for 
merchant on-boarded through Aggregator 
11-Oct-17 
UPI OC 35 
Guidelines for positioning of UPI/BHIM logo as payment 
mode at merchant location (offline and online) 
11-Oct-17 
UPI OC 36 
UPI & IMPS pricing changes for transactions less than ₹ 
1,000.00 
11-Oct-17 
UPI OC 37 
Banks PSP apps and third-party apps compliance to UPI 
Deep linking specs 1.5.1 
01-Nov-17 
UPI OC 38 
UPI – RRC “Refund/Return Reversal Confirmation” 
01-Nov-17 
UPI OC 39 
Efficient implementation for merchant on-boarding on UPI 
20-Nov-17 
UPI OC 40 
UPI – Complaints handling process 
23-Nov-17 
UPI OC 41 
Process to handle chargeback for wrong account transfers 
15-Dec-17 
UPI OC 42 
Enhanced penalty for not updating TCC, RET, DRC & RRC 
after T+1 working days 
15-Dec-17 
UPI OC 43 
Standardization of the Account Statement narration in 
Unified Payments Interface (UPI) 
05-Jan-18 
UPI OC 44 
Balance Enquiry optional in UPI for PSP & 3rd party apps 
and No storage of account balance by PSP or 3rd party apps 
11-Jan-18 
UPI OC 45 
UPI-Solutions to Reduce Deemed Approval Transactions 
12-Feb-18 
UPI OC 46 
BHIM UPI branding at all UPI enabled apps and merchants 
23-Feb-18 
UPI OC 47 
Extension and modification of BHIM/BHIM UPI 
incentive/cashback scheme for individuals and cashback 
scheme for merchants. 
24-Apr-18 
UPI OC 48 
Foreign Inward Remittance (FIR) through Unified Payment 
Interface (UPI) 
09-May-18 
UPI OC 49 
Onboarding banks with no retail presence as an acquirer 
only in UPI 
11-Jun-18 
UPI OC 50 
Introduction of Bill Pay functionality (BBPS) on BHIM App 
11-Jun-18 
UPI OC 51 
UPI – Process for scheduling maintenance activities & SMS 
27-Jun-18
```

**Machine-readable table extraction(s) for PAGE 101**

#### TABLE_101_01 (source extraction: `page101_table01.csv`)

|UPI OC 26|UPI Customer complaint handling process|04-Aug-18|
|---|---|---|
|UPI OC 27|Inclusion of UPI Banks in BHIM Merchant Cashback and<br>Referral Bonus Scheme|18-Aug-17|
|UPI OC 28|Scanning UPI credentials integrated in Bharat QR through<br>UPI PSP application|18-Aug-17|
|UPI OC 29|To reduce the high technical declines and business<br>declines|19-Aug-17|
|UPI OC 31|Inclusion of UPI Banks in BHIM Merchant Cashback and<br>Referral Bonus Scheme|07-Sep-17|
|UPI OC 32|UPI - Multibank model (API Approach)|15-Sep-17|
|UPI OC 33|Multiple bank model (API Approach)|15-Sep-17|
|UPI OC 34|Compliances related to MCCs in UPI and guidelines for<br>merchant on-boarded through Aggregator|11-Oct-17|
|UPI OC 35|Guidelines for positioning of UPI/BHIM logo as payment<br>mode at merchant location (offline and online)|11-Oct-17|
|UPI OC 36|UPI & IMPS pricing changes for transactions less than ₹<br>1,000.00|11-Oct-17|
|UPI OC 37|Banks PSP apps and third-party apps compliance to UPI<br>Deep linking specs 1.5.1|01-Nov-17|
|UPI OC 38|UPI – RRC “Refund/Return Reversal Confirmation”|01-Nov-17|
|UPI OC 39|Efficient implementation for merchant on-boarding on UPI|20-Nov-17|
|UPI OC 40|UPI – Complaints handling process|23-Nov-17|
|UPI OC 41|Process to handle chargeback for wrong account transfers|15-Dec-17|
|UPI OC 42|Enhanced penalty for not updating TCC, RET, DRC & RRC<br>after T+1 working days|15-Dec-17|
|UPI OC 43|Standardization of the Account Statement narration in<br>Unified Payments Interface (UPI)|05-Jan-18|
|UPI OC 44|Balance Enquiry optional in UPI for PSP & 3rd party apps<br>and No storage of account balance by PSP or 3rd party apps|11-Jan-18|
|UPI OC 45|UPI-Solutions to Reduce Deemed Approval Transactions|12-Feb-18|
|UPI OC 46|BHIM UPI branding at all UPI enabled apps and merchants|23-Feb-18|
|UPI OC 47|Extension and modification of BHIM/BHIM UPI<br>incentive/cashback scheme for individuals and cashback<br>scheme for merchants.|24-Apr-18|
|UPI OC 48|Foreign Inward Remittance (FIR) through Unified Payment<br>Interface (UPI)|09-May-18|
|UPI OC 49|Onboarding banks with no retail presence as an acquirer<br>only in UPI|11-Jun-18|
|UPI OC 50|Introduction of Bill Pay functionality (BBPS) on BHIM App|11-Jun-18|
|UPI OC 51|UPI – Process for scheduling maintenance activities & SMS|27-Jun-18|

<!-- PAGE 102 -->
# PAGE 102

[IMAGE_206]

![IMAGE_206](images/IMAGE_206.jpeg)

**IMAGE_206 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_207]

![IMAGE_207](images/IMAGE_207.png)

**IMAGE_207 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 102/158 
alerts to customers 
UPI OC 52 
Modification of BHIM incentive scheme for individuals and 
withdrawal of BHIM incentive scheme for merchants 
17-Jul-18 
UPI OC 53 
Compliance to the Sec 42A, Rule 3 and 7 of Information 
Technology Act,2000 
17-Jul-18 
UPI OC 54 
Regarding removal of Pay to Aadhaar functionality in UPI 
and IMPS 
17-Jul-18 
UPI OC 55 
Blocking of transaction between same bank account in UPI 
19-Jul-18 
UPI OC 56 
Roll out of the features of Unified Payments Interface (UPI) 
2.0 
14-Aug-18 
UPI OC 57 
Changes in PSP & Customer communication to prevent 
fraudulent transaction 
20-Aug-18 
UPI OC 58 
Parent PSP app to support interoperability compliance for 
their P2M only Apps in case of Non-exclusive handles 
(Exclusion for Apps providing only P2M services) 
28-Aug-18 
UPI OC 59 
Change of production IP of RGCS for UPI 
23-Aug-18 
UPI OC 60 
NRE to NRE account transfer by IMPS & UPI 
15-Oct-18 
UPI OC 61 
UPI transaction frequency limit revised to 10 transactions 
for P2P w.e.f October 21, 2018 
22-Oct-18 
UPI OC 61A 
UPI transaction limit revised to 20 transaction for P2P w.e.f 
January 11,2023 
10-Jan-23 
UPI OC 62 
UPI Pricing for transactions through linked OD account 
04-Dec-18 
UPI OC 63 
Migration to UPI 2.0 by 31st March 2019 
07-Jan-19 
UPI OC 64 
Pricing applicable for Mandate (UPI 2.0 Functionality) & 
Industry Program 
23-Jan-19 
UPI OC 65 
Change in cutover cycles in UPI – (w.e.f – 28th January 
2019) 
24-Jan-19 
UPI OC 66 
Minimum NDC of ₹2,50,000 for Sub-Member Banks in UPI 
and IMPS 
22-Feb-19 
UPI OC 67 
Revision in UPI switching Fee for P2P and P2M 
22-Mar-19 
UPI OC 67A 
UPI Pricing (Addendum to UPI OC 67) 
16-May-19 
UPI OC 68 
Levy of Surcharge by Merchants & Channel partners 
prohibited in UPI 
16-May-19 
UPI OC 69 
Collect Request - Fraud mitigating measures 
17-Jun-19 
UPI OC 70 
Introduction of P2PM category in UPI for unorganised or 
small merchants 
17-Jun-19 
UPI OC 71 
Enhancement of per transaction limit to ₹ 2,00,000.00 for 
UPI based ASBA 
21-Jun-19 
UPI OC 72 
Rationalisation of MDR & Interchange in UPI 
30-Aug-19 
UPI OC 73 
Payer App behaviour for Intent based transaction on UPI 
19-Sep-19
```

**Machine-readable table extraction(s) for PAGE 102**

#### TABLE_102_01 (source extraction: `page102_table01.csv`)

||alerts to customers||
|---|---|---|
|UPI OC 52|Modification of BHIM incentive scheme for individuals and<br>withdrawal of BHIM incentive scheme for merchants|17-Jul-18|
|UPI OC 53|Compliance to the Sec 42A, Rule 3 and 7 of Information<br>Technology Act,2000|17-Jul-18|
|UPI OC 54|Regarding removal of Pay to Aadhaar functionality in UPI<br>and IMPS|17-Jul-18|
|UPI OC 55|Blocking of transaction between same bank account in UPI|19-Jul-18|
|UPI OC 56|Roll out of the features of Unified Payments Interface (UPI)<br>2.0|14-Aug-18|
|UPI OC 57|Changes in PSP & Customer communication to prevent<br>fraudulent transaction|20-Aug-18|
|UPI OC 58|Parent PSP app to support interoperability compliance for<br>their P2M only Apps in case of Non-exclusive handles<br>(Exclusion for Apps providing only P2M services)|28-Aug-18|
|UPI OC 59|Change of production IP of RGCS for UPI|23-Aug-18|
|UPI OC 60|NRE to NRE account transfer by IMPS & UPI|15-Oct-18|
|UPI OC 61|UPI transaction frequency limit revised to 10 transactions<br>for P2P w.e.f October 21, 2018|22-Oct-18|
|UPI OC 61A|UPI transaction limit revised to 20 transaction for P2P w.e.f<br>January 11,2023|10-Jan-23|
|UPI OC 62|UPI Pricing for transactions through linked OD account|04-Dec-18|
|UPI OC 63|Migration to UPI 2.0 by 31st March 2019|07-Jan-19|
|UPI OC 64|Pricing applicable for Mandate (UPI 2.0 Functionality) &<br>Industry Program|23-Jan-19|
|UPI OC 65|Change in cutover cycles in UPI – (w.e.f – 28th January<br>2019)|24-Jan-19|
|UPI OC 66|Minimum NDC of ₹2,50,000 for Sub-Member Banks in UPI<br>and IMPS|22-Feb-19|
|UPI OC 67|Revision in UPI switching Fee for P2P and P2M|22-Mar-19|
|UPI OC 67A|UPI Pricing (Addendum to UPI OC 67)|16-May-19|
|UPI OC 68|Levy of Surcharge by Merchants & Channel partners<br>prohibited in UPI|16-May-19|
|UPI OC 69|Collect Request - Fraud mitigating measures|17-Jun-19|
|UPI OC 70|Introduction of P2PM category in UPI for unorganised or<br>small merchants|17-Jun-19|
|UPI OC 71|Enhancement of per transaction limit to ₹ 2,00,000.00 for<br>UPI based ASBA|21-Jun-19|
|UPI OC 72|Rationalisation of MDR & Interchange in UPI|30-Aug-19|
|UPI OC 73|Payer App behaviour for Intent based transaction on UPI|19-Sep-19|

<!-- PAGE 103 -->
# PAGE 103

[IMAGE_208]

![IMAGE_208](images/IMAGE_208.jpeg)

**IMAGE_208 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_209]

![IMAGE_209](images/IMAGE_209.png)

**IMAGE_209 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 103/158 
UPI OC 74 
UPI Compliance guidelines 
19-Sep-19 
UPI OC 75 
RRBs as Acquirers in UPI 
17-Oct-19 
UPI OC 76 
Revision in transaction limits based on merchant & 
transaction types 
31-Oct-19 
UPI OC 76A 
Addendum to 76-Revision in transaction limits based on 
Merchant & transaction types 
12-Mar-24 
UPI OC 76B 
Addendum to 76A-Revision in transaction limits based on 
Merchant & transaction types 
23-Aug-24 
UPI OC 77 
Revision of UPI Switching Fee 
06-Dec-19 
UPI OC 78 
Reconciliation and handling declined / timed out 
transactions in UPI for One-time mandate block 
27-Jan-20 
UPI OC 79 
Revision of UPI P2M interchange and PSP fee 
21-Feb-20 
UPI OC 80 
Third Party validation API using PAN in UPI 
28-Feb-20 
UPI OC 81 
Guidelines for multi-bank model and migration from Single 
bank to Multibank PSP model 
02-Mar-20 
UPI OC 82 
Implementation of ₹ 2,00,000.00 limit per transaction for 
specific categories in UPI 
03-Mar-20 
UPI OC 83 
Introduction of Cash Withdrawal Services at Merchant 
Location using UPI 
16-Mar-20 
UPI OC 84 
Introduction of new rebate structure for RuPay debit card 
PoS and E-Com domestic transactions and UPI P2M 
domestic transactions in the view of Zero MDR 
31-Mar-20 
UPI OC 85 
Measures to mitigate misleading UPI Is for covid donations 
03-Apr-20 
UPI OC 86 
Addendum to RM 001 
20-Apr-20 
UPI OC 87 
Indicative Guidelines for System Audit Report (SAR) on Data 
Localization (DL) 
12-May-20 
UPI OC 88 
Migration of UPI RGCS to UPI Real time clearing and 
settlement system w.e.f 25th May 2020 
14-May-20 
UPI OC 88A 
UPI URCS Addendum to OC 88 
10-Jun-20 
UPI OC 89 
Customer on-boarding on iOS-based devices 
16-Jun-20 
UPI OC 90 
Service Charge for UPI e-mandate for recurring transactions 
20-Jul-20 
UPI OC 90A 
Revision in Service Charges for UPI AutoPay 
28-Aug-23 
UPI OC 91 
UPI Interchange & PSP fees for P2M 
20-Jul-20 
UPI OC 92 
UPI Pricing for Mandate with Block & one-time debit (Non-
IPO Use case) 
20-Jul-20 
UPI OC 93 
RBI TAT Harmonisation 
04-Oct-19 
UPI OC 94 
Creation of Secondary / Back up UPI ID to improve 
Customer Experience 
07-Sep-20 
UPI OC 94A 
Addendum to Circular 94 
07-Oct-20 
UPI OC 95 
Guideline on usage of UPI API’s 
25-Sep-20
```

**Machine-readable table extraction(s) for PAGE 103**

#### TABLE_103_01 (source extraction: `page103_table01.csv`)

|UPI OC 74|UPI Compliance guidelines|19-Sep-19|
|---|---|---|
|UPI OC 75|RRBs as Acquirers in UPI|17-Oct-19|
|UPI OC 76|Revision in transaction limits based on merchant &<br>transaction types|31-Oct-19|
|UPI OC 76A|Addendum to 76-Revision in transaction limits based on<br>Merchant & transaction types|12-Mar-24|
|UPI OC 76B|Addendum to 76A-Revision in transaction limits based on<br>Merchant & transaction types|23-Aug-24|
|UPI OC 77|Revision of UPI Switching Fee|06-Dec-19|
|UPI OC 78|Reconciliation and handling declined / timed out<br>transactions in UPI for One-time mandate block|27-Jan-20|
|UPI OC 79|Revision of UPI P2M interchange and PSP fee|21-Feb-20|
|UPI OC 80|Third Party validation API using PAN in UPI|28-Feb-20|
|UPI OC 81|Guidelines for multi-bank model and migration from Single<br>bank to Multibank PSP model|02-Mar-20|
|UPI OC 82|Implementation of ₹ 2,00,000.00 limit per transaction for<br>specific categories in UPI|03-Mar-20|
|UPI OC 83|Introduction of Cash Withdrawal Services at Merchant<br>Location using UPI|16-Mar-20|
|UPI OC 84|Introduction of new rebate structure for RuPay debit card<br>PoS and E-Com domestic transactions and UPI P2M<br>domestic transactions in the view of Zero MDR|31-Mar-20|
|UPI OC 85|Measures to mitigate misleading UPI Is for covid donations|03-Apr-20|
|UPI OC 86|Addendum to RM 001|20-Apr-20|
|UPI OC 87|Indicative Guidelines for System Audit Report (SAR) on Data<br>Localization (DL)|12-May-20|
|UPI OC 88|Migration of UPI RGCS to UPI Real time clearing and<br>settlement system w.e.f 25th May 2020|14-May-20|
|UPI OC 88A|UPI URCS Addendum to OC 88|10-Jun-20|
|UPI OC 89|Customer on-boarding on iOS-based devices|16-Jun-20|
|UPI OC 90|Service Charge for UPI e-mandate for recurring transactions|20-Jul-20|
|UPI OC 90A|Revision in Service Charges for UPI AutoPay|28-Aug-23|
|UPI OC 91|UPI Interchange & PSP fees for P2M|20-Jul-20|
|UPI OC 92|UPI Pricing for Mandate with Block & one-time debit (Non-<br>IPO Use case)|20-Jul-20|
|UPI OC 93|RBI TAT Harmonisation|04-Oct-19|
|UPI OC 94|Creation of Secondary / Back up UPI ID to improve<br>Customer Experience|07-Sep-20|
|UPI OC 94A|Addendum to Circular 94|07-Oct-20|
|UPI OC 95|Guideline on usage of UPI API’s|25-Sep-20|

<!-- PAGE 104 -->
# PAGE 104

[IMAGE_210]

![IMAGE_210](images/IMAGE_210.jpeg)

**IMAGE_210 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_211]

![IMAGE_211](images/IMAGE_211.png)

**IMAGE_211 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 104/158 
UPI OC 96 
Merchant Ecosystem Enhancements & Introduction of B2B 
as a Separate Category 
28-Sep-20 
UPI OC 97 
Guidelines on volume cap for Third Party App Providers 
(TPAPs) in UPI 
05-Nov-20 
UPI OC 98 
UDIR - Enhancing Complaint handling & resolution process 
for UPI transactions 
24-Nov-20 
UPI OC 99 
Circular on participant adhering to various guidelines of 
NPCI_UPI 
12-Jan-21 
UPI OC 100 
Mandatory Brand Guidelines for BHIM UPI 
11-Feb-21 
UPI OC 100A 
Addendum to “Mandatory Brand Guidelines for BHIM UPI” 
02-Mar-23 
UPI OC 101 
Identification of Ultimate Beneficiary for P2M transactions 
25-Feb-21 
UPI OC 102 
Reduction in Switching Fee for UPI P2P Off-us Transactions 
01-Mar-21 
UPI OC 103 
Guidelines for Self-attestation by members participants 
circular 
03-Mar-21 
UPI OC 104 
Revising non-financial CHECK TRANSACTION (CT) message 
in UPI from 3 attempts to 1 attempt 
05-Mar-21 
UPI OC 105 
Purpose Code ‘01’ to be used as an identifier for One Time 
Mandate (OTM) block transactions in UPI online messaging 
10-Mar-21 
UPI OC 106 
UDIR - Auto reversal facility 
23-Mar-21 
UPI OC 107 
Change in nomenclature of Retrieval Reference Number 
(RRN) in UPI to avoid duplicates 
01-Apr-21 
UPI OC 107A 
Addendum to Circular for revision of RRN in UPI to avoid 
duplicates 
19-Apr-24 
UPI OC 108 
UPI OD accounts for merchant acceptance - terms and 
awareness 
28-May-21 
UPI OC 109 
Revision in Switching fees for Unified Payment Interface 
(UPI) rails Foreign Inward Remittance 
31-May-21 
UPI OC 110 
Revision of token validity in UPI from extant 30 days to 90 
days 
02-Jun-21 
UPI OC 111 
Process to handle UPI Transactions for bank that have 
completed the amalgamation/merger process. 
07-Jun-21 
UPI OC 112 
UPI Prepaid Voucher 
08-Jul-21 
UPI OC 113 
Pricing for B2C UPI Prepaid Voucher Issuance 
08-Jul-21 
UPI OC 114 
Addendum to Pricing for B2C UPI Prepaid Voucher Issuance 
15-Jul-21 
UPI OC 115 
Rollout of ‘Numeric UPI ID Mapper’ to enable ‘UPI Number’ 
20-Jul-21 
UPI OC 115A 
Addendum to OC 115 'Numeric UPI ID Mapper' and 
implementation of 'Feature Phone and Voice based 
payments' 
22-Nov-21 
UPI OC 115B 
Addendum to OC 115 'Numeric UPI ID Mapper' on revised 
timeline 
09-Dec-21
```

**Machine-readable table extraction(s) for PAGE 104**

#### TABLE_104_01 (source extraction: `page104_table01.csv`)

|UPI OC 96|Merchant Ecosystem Enhancements & Introduction of B2B<br>as a Separate Category|28-Sep-20|
|---|---|---|
|UPI OC 97|Guidelines on volume cap for Third Party App Providers<br>(TPAPs) in UPI|05-Nov-20|
|UPI OC 98|UDIR - Enhancing Complaint handling & resolution process<br>for UPI transactions|24-Nov-20|
|UPI OC 99|Circular on participant adhering to various guidelines of<br>NPCI_UPI|12-Jan-21|
|UPI OC 100|Mandatory Brand Guidelines for BHIM UPI|11-Feb-21|
|UPI OC 100A|Addendum to “Mandatory Brand Guidelines for BHIM UPI”|02-Mar-23|
|UPI OC 101|Identification of Ultimate Beneficiary for P2M transactions|25-Feb-21|
|UPI OC 102|Reduction in Switching Fee for UPI P2P Off-us Transactions|01-Mar-21|
|UPI OC 103|Guidelines for Self-attestation by members participants<br>circular|03-Mar-21|
|UPI OC 104|Revising non-financial CHECK TRANSACTION (CT) message<br>in UPI from 3 attempts to 1 attempt|05-Mar-21|
|UPI OC 105|Purpose Code ‘01’ to be used as an identifier for One Time<br>Mandate (OTM) block transactions in UPI online messaging|10-Mar-21|
|UPI OC 106|UDIR - Auto reversal facility|23-Mar-21|
|UPI OC 107|Change in nomenclature of Retrieval Reference Number<br>(RRN) in UPI to avoid duplicates|01-Apr-21|
|UPI OC 107A|Addendum to Circular for revision of RRN in UPI to avoid<br>duplicates|19-Apr-24|
|UPI OC 108|UPI OD accounts for merchant acceptance - terms and<br>awareness|28-May-21|
|UPI OC 109|Revision in Switching fees for Unified Payment Interface<br>(UPI) rails Foreign Inward Remittance|31-May-21|
|UPI OC 110|Revision of token validity in UPI from extant 30 days to 90<br>days|02-Jun-21|
|UPI OC 111|Process to handle UPI Transactions for bank that have<br>completed the amalgamation/merger process.|07-Jun-21|
|UPI OC 112|UPI Prepaid Voucher|08-Jul-21|
|UPI OC 113|Pricing for B2C UPI Prepaid Voucher Issuance|08-Jul-21|
|UPI OC 114|Addendum to Pricing for B2C UPI Prepaid Voucher Issuance|15-Jul-21|
|UPI OC 115|Rollout of ‘Numeric UPI ID Mapper’ to enable ‘UPI Number’|20-Jul-21|
|UPI OC 115A|Addendum to OC 115 'Numeric UPI ID Mapper' and<br>implementation of 'Feature Phone and Voice based<br>payments'|22-Nov-21|
|UPI OC 115B|Addendum to OC 115 'Numeric UPI ID Mapper' on revised<br>timeline|09-Dec-21|

<!-- PAGE 105 -->
# PAGE 105

[IMAGE_212]

![IMAGE_212](images/IMAGE_212.jpeg)

**IMAGE_212 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_213]

![IMAGE_213](images/IMAGE_213.png)

**IMAGE_213 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 105/158 
UPI OC 115C 
Addendum to OC 115 - rollout of numeric UPI ID Mapper to 
enable UPI Mapper 
28-Feb-22 
UPI OC 115D 
Addendum to OC 115 'Numeric UPI ID Mapper' on Revised 
Timeline 
29-Jul-22 
UPI OC 116 
Aadhaar OTP Authentication in lieu of Debit Card for 
Customer Onboarding on Unified Payments Interface (UPI) 
08-Sep-21 
UPI OC 116A 
Addendum to “Aadhaar OTP Authentication in lieu of Debit 
Card for Customer Onboarding on Unified Payments 
Interface (UPI)” on revised timeline. 
15-Dec-21 
UPI OC 117 
Circular pertains to UPI Global Operations 
08-Sep-21 
UPI OC 118 
Reference Guidelines for members on Merchant acquisition 
standards 
08-Sep-21 
UPI OC 119 
Advisory on Reconciliation and handling declined / timed 
out transactions in UPI for One Time Mandate block 
transaction types 
17-Sep-21 
UPI OC 120 
UPI Limit Standardisation 
24-Sep-21 
UPI OC 121 
Changes in UPI raw data file 
25-Oct-21 
UPI OC 122 
Non-adherence to RBI and NPCI Circular on UDIR for UPI 
help 
27-Oct-21 
UPI OC 123 
Industry best practices to handle Mandate Digital Signature 
Certificate (DSC) 
03-Nov-21 
UPI OC 124 
Revision in Interchange Fee for UPI P2P transactions 
23-Nov-21 
UPI OC 125 
Dishonour of UPI AutoPay transaction due to insufficiency 
of funds 
25-Nov-21 
UPI OC 125A 
Addendum to OC 125 - Non-revocation of UPI AUTOPAY 
mandate for loan repayment & EMI collection category 
20-Jul-22 
UPI OC 126 
Introduction of additional settlement cycles for UPI from 6 
to 8. 
09-Dec-21 
UPI OC 127 
Implementation of ₹ 5,00,000.00 limit per transaction for 
Specific Categories in UPI 
09-Dec-21 
UPI OC 128 
Extension of additional response codes under Deemed 
Debit for mandate execution 
14-Dec-21 
UPI OC 129 
Reconciliation and handling of declined /timed out 
transactions in UPI for BBPS transactions routed through 
BHIM Application 
15-Dec-21 
UPI OC 130 
Incentive Structure for UPI P2M transactions upto ₹ 
2,000.00 (Revised Annexure) 
22-Dec-21 
UPI OC 131 
Submission of successful Onus transaction data (not 
routed through NPCI) towards incentive scheme for 
promotion of low-value BHIM-UPI transactions (P2M) 
23-Dec-21 
UPI OC 132 
Safeguarding UPI ecosystem & revision of TXNs limit 
24-Dec-21
```

**Machine-readable table extraction(s) for PAGE 105**

#### TABLE_105_01 (source extraction: `page105_table01.csv`)

|UPI OC 115C|Addendum to OC 115 - rollout of numeric UPI ID Mapper to<br>enable UPI Mapper|28-Feb-22|
|---|---|---|
|UPI OC 115D|Addendum to OC 115 'Numeric UPI ID Mapper' on Revised<br>Timeline|29-Jul-22|
|UPI OC 116|Aadhaar OTP Authentication in lieu of Debit Card for<br>Customer Onboarding on Unified Payments Interface (UPI)|08-Sep-21|
|UPI OC 116A|Addendum to “Aadhaar OTP Authentication in lieu of Debit<br>Card for Customer Onboarding on Unified Payments<br>Interface (UPI)” on revised timeline.|15-Dec-21|
|UPI OC 117|Circular pertains to UPI Global Operations|08-Sep-21|
|UPI OC 118|Reference Guidelines for members on Merchant acquisition<br>standards|08-Sep-21|
|UPI OC 119|Advisory on Reconciliation and handling declined / timed<br>out transactions in UPI for One Time Mandate block<br>transaction types|17-Sep-21|
|UPI OC 120|UPI Limit Standardisation|24-Sep-21|
|UPI OC 121|Changes in UPI raw data file|25-Oct-21|
|UPI OC 122|Non-adherence to RBI and NPCI Circular on UDIR for UPI<br>help|27-Oct-21|
|UPI OC 123|Industry best practices to handle Mandate Digital Signature<br>Certificate (DSC)|03-Nov-21|
|UPI OC 124|Revision in Interchange Fee for UPI P2P transactions|23-Nov-21|
|UPI OC 125|Dishonour of UPI AutoPay transaction due to insufficiency<br>of funds|25-Nov-21|
|UPI OC 125A|Addendum to OC 125 - Non-revocation of UPI AUTOPAY<br>mandate for loan repayment & EMI collection category|20-Jul-22|
|UPI OC 126|Introduction of additional settlement cycles for UPI from 6<br>to 8.|09-Dec-21|
|UPI OC 127|Implementation of ₹ 5,00,000.00 limit per transaction for<br>Specific Categories in UPI|09-Dec-21|
|UPI OC 128|Extension of additional response codes under Deemed<br>Debit for mandate execution|14-Dec-21|
|UPI OC 129|Reconciliation and handling of declined /timed out<br>transactions in UPI for BBPS transactions routed through<br>BHIM Application|15-Dec-21|
|UPI OC 130|Incentive Structure for UPI P2M transactions upto ₹<br>2,000.00 (Revised Annexure)|22-Dec-21|
|UPI OC 131|Submission of successful Onus transaction data (not<br>routed through NPCI) towards incentive scheme for<br>promotion of low-value BHIM-UPI transactions (P2M)|23-Dec-21|
|UPI OC 132|Safeguarding UPI ecosystem & revision of TXNs limit|24-Dec-21|

<!-- PAGE 106 -->
# PAGE 106

[IMAGE_214]

![IMAGE_214](images/IMAGE_214.jpeg)

**IMAGE_214 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_215]

![IMAGE_215](images/IMAGE_215.png)

**IMAGE_215 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 106/158 
UPI OC 133 
Guidelines on UPI Features 
27-Jan-22 
UPI OC 133A 
Addendum to OC 133 - Addition of Initiation Mode and 
Channel identifiers for new use cases 
28-Feb-23 
UPI OC 134 
RBI PPI Interoperability guidelines 
31-Jan-22 
UPI OC 135 
Revision in Switching fee for UPI P2P off-us transactions 
25-Feb-22 
UPI OC 136 
Continuation of 50% NPCI switching fee rebate for UPI P2M 
domestic transactions for FY 2021-22 
28-Feb-22 
UPI OC 137 
Revised timeline for enablement of customer onboarding 
on UPI through Aadhaar OTP Authentication. 
15-Mar-22 
UPI OC 138 
Introduction of “On-Device wallet” – UPI Lite for Small 
Value Transactions 
16-Mar-22 
UPI OC 139 
UPI Lite pricing circular 
16-Mar-22 
UPI OC 140 
NPCI Service charge for Mandate Management service for 
UPI AutoPay 
24-Mar-22 
UPI OC 141 
Safeguarding Users on UPI 
24-Mar-22 
UPI OC 141A 
Addendum to OC 141 
28-Jun-22 
UPI OC 141B 
Addendum to OC 141 Safeguarding users on UPI 
21-Oct-22 
UPI OC 142 
Acceptance of UPI based payments by merchants 
25-Mar-22 
UPI OC 143 
Continuation of 50% NPCI switching fee rebate for UPI P2M 
transactions for FY 2022-23 
31-Mar-22 
UPI OC 144 
Revision in MCC under Industry Program Category in the 
Incentive Scheme 
05-Apr-22 
UPI OC 145 
Final implementation timeline for "ODR - Enhancing 
complaint handling and resolution process for all UPI 
users" 
11-Apr-22 
UPI OC 145A 
Reminder on “Final implementation timelines for “ODR – 
Enhancing Complaint handling & Resolution process for all 
UPI users” 
19-Aug-22 
UPI OC 146 
Circular pertains to UPI Global Operations 
13-Apr-22 
UPI OC 147 
Handling of Transaction declines during address resolution 
authorisation leg 
12-Apr-22 
UPI OC 148 
Processing of refunds 
20-Apr-22 
UPI OC 149 & OC 
149A 
Reduction of business decline in UPI 
13-May-22 
UPI OC 150 
Enablement of Interoperable Card-less Cash withdrawal 
(ICCW) transactions on NFS ATM Network using unified 
Payment Interface (UPI) for authorization 
17-Jun-22 
UPI OC 151 
UPI AUTOPAY AFA limit enhancement and compliance 
23-Jun-22 
UPI OC 151A 
Enhancement of Limits for UPI AutoPay 
14-Dec-23 
UPI OC 152 
Revised timelines on Changes in UPI raw file 
30-Jun-22
```

**Machine-readable table extraction(s) for PAGE 106**

#### TABLE_106_01 (source extraction: `page106_table01.csv`)

|UPI OC 133|Guidelines on UPI Features|27-Jan-22|
|---|---|---|
|UPI OC 133A|Addendum to OC 133 - Addition of Initiation Mode and<br>Channel identifiers for new use cases|28-Feb-23|
|UPI OC 134|RBI PPI Interoperability guidelines|31-Jan-22|
|UPI OC 135|Revision in Switching fee for UPI P2P off-us transactions|25-Feb-22|
|UPI OC 136|Continuation of 50% NPCI switching fee rebate for UPI P2M<br>domestic transactions for FY 2021-22|28-Feb-22|
|UPI OC 137|Revised timeline for enablement of customer onboarding<br>on UPI through Aadhaar OTP Authentication.|15-Mar-22|
|UPI OC 138|Introduction of “On-Device wallet” – UPI Lite for Small<br>Value Transactions|16-Mar-22|
|UPI OC 139|UPI Lite pricing circular|16-Mar-22|
|UPI OC 140|NPCI Service charge for Mandate Management service for<br>UPI AutoPay|24-Mar-22|
|UPI OC 141|Safeguarding Users on UPI|24-Mar-22|
|UPI OC 141A|Addendum to OC 141|28-Jun-22|
|UPI OC 141B|Addendum to OC 141 Safeguarding users on UPI|21-Oct-22|
|UPI OC 142|Acceptance of UPI based payments by merchants|25-Mar-22|
|UPI OC 143|Continuation of 50% NPCI switching fee rebate for UPI P2M<br>transactions for FY 2022-23|31-Mar-22|
|UPI OC 144|Revision in MCC under Industry Program Category in the<br>Incentive Scheme|05-Apr-22|
|UPI OC 145|Final implementation timeline for "ODR - Enhancing<br>complaint handling and resolution process for all UPI<br>users"|11-Apr-22|
|UPI OC 145A|Reminder on “Final implementation timelines for “ODR –<br>Enhancing Complaint handling & Resolution process for all<br>UPI users”|19-Aug-22|
|UPI OC 146|Circular pertains to UPI Global Operations|13-Apr-22|
|UPI OC 147|Handling of Transaction declines during address resolution<br>authorisation leg|12-Apr-22|
|UPI OC 148|Processing of refunds|20-Apr-22|
|UPI OC 149 & OC<br>149A|Reduction of business decline in UPI|13-May-22|
|UPI OC 150|Enablement of Interoperable Card-less Cash withdrawal<br>(ICCW) transactions on NFS ATM Network using unified<br>Payment Interface (UPI) for authorization|17-Jun-22|
|UPI OC 151|UPI AUTOPAY AFA limit enhancement and compliance|23-Jun-22|
|UPI OC 151A|Enhancement of Limits for UPI AutoPay|14-Dec-23|
|UPI OC 152|Revised timelines on Changes in UPI raw file|30-Jun-22|

<!-- PAGE 107 -->
# PAGE 107

[IMAGE_216]

![IMAGE_216](images/IMAGE_216.jpeg)

**IMAGE_216 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_217]

![IMAGE_217](images/IMAGE_217.png)

**IMAGE_217 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 107/158 
UPI OC 153 
Guidelines on capturing customer location on UPI Apps 
05-Jul-22 
UPI OC 154 
Introduction of UPI Plug-in Service 
18-Jul-22 
UPI OC 155 
Process of Handling NPCI compliance penalty wavier 
request for UPI 
02-Sep-22 
UPI OC 156 
Online Business Operations-Team Structure 
27-Sep-22 
UPI OC 157 
UPI Raw File version 3.0 
31-Oct-22 
UPI OC 158 
Revision in NPCI Service charge for Mandate Management 
service for UPI AutoPay for certain merchant categories 
14-Nov-22 
UPI OC 159 
Guidelines on volume cap for Third Party App Providers 
(TPAPs) in UPI 
02-Dec-22 
UPI OC 160 
Disabling Interchange fee movement in dispute & 
adjustment life cycles 
28-Dec-22 
UPI OC 161 
Extension to UPI Circular No. 60 Crediting Debiting Non 
Resident accounts in UPI 
10-Jan-23 
UPI OC 162 
Incentive Structure for UPI P2M transactions up to ₹ 
2,000.00 (FY 2022- 23) 
16-Jan-23 
UPI OC 162A 
Addendum to Incentive Structure for UPI P2M transactions 
up to ₹ 2,000.00 (FY 2022- 23) 
14-Feb-23 
UPI OC 163 
Furthering the Interoperability in UPI ecosystem 
20-Mar-23 
UPI OC 163A 
Addendum to OC 163 - Furthering interoperability in the UPI 
ecosystem 
23-Oct-23 
UPI OC 164 
PPI Charges for Merchant Transactions in UPI 
24-Mar-23 
UPI OC 165 
Implementation of advanced refund API as part of UPI Help 
(UDIR) 
19-Apr-23 
UPI OC 166 
Mandatory additional security measure to be implemented 
by PSPs and TPAPs during device change for iOS operating 
system device 
12-May-23 
UPI OC 167 
Continuation of 50% NPCI switching fee rebate for UPI P2M 
domestic transactions for FY 2023-24 
01-Jun-23 
UPI OC 168 
Mandatory measures to be implemented by Bank, PSPs and 
TPAPs for UPI 
04-Jul-23 
UPI OC 169 
Enhancement in UPI LITE transaction limit to ₹500 
31-Aug-23 
UPI OC 170 
RBI's Digital Rupee - CBDC and UPI Interoperability 
20-Sep-23 
UPI OC 170A 
Addendum to RBI Digital Rupee - CBDC and UPI 
Interoperability for P2P UPI QR 
07-Nov-23 
UPI OC 171 
Operating Circular for Pre-sanctioned Credit Lines at Banks 
through UPI 
20-Sep-23 
UPI OC 172 
Evidence towards UPI disputes on Small and Offline 
Merchants 
10-Oct-23 
UPI OC 173 
Circular pertains to UPI Global Operations 
20-Oct-23
```

**Machine-readable table extraction(s) for PAGE 107**

#### TABLE_107_01 (source extraction: `page107_table01.csv`)

|UPI OC 153|Guidelines on capturing customer location on UPI Apps|05-Jul-22|
|---|---|---|
|UPI OC 154|Introduction of UPI Plug-in Service|18-Jul-22|
|UPI OC 155|Process of Handling NPCI compliance penalty wavier<br>request for UPI|02-Sep-22|
|UPI OC 156|Online Business Operations-Team Structure|27-Sep-22|
|UPI OC 157|UPI Raw File version 3.0|31-Oct-22|
|UPI OC 158|Revision in NPCI Service charge for Mandate Management<br>service for UPI AutoPay for certain merchant categories|14-Nov-22|
|UPI OC 159|Guidelines on volume cap for Third Party App Providers<br>(TPAPs) in UPI|02-Dec-22|
|UPI OC 160|Disabling Interchange fee movement in dispute &<br>adjustment life cycles|28-Dec-22|
|UPI OC 161|Extension to UPI Circular No. 60 Crediting Debiting Non<br>Resident accounts in UPI|10-Jan-23|
|UPI OC 162|Incentive Structure for UPI P2M transactions up to ₹<br>2,000.00 (FY 2022- 23)|16-Jan-23|
|UPI OC 162A|Addendum to Incentive Structure for UPI P2M transactions<br>up to ₹ 2,000.00 (FY 2022- 23)|14-Feb-23|
|UPI OC 163|Furthering the Interoperability in UPI ecosystem|20-Mar-23|
|UPI OC 163A|Addendum to OC 163 - Furthering interoperability in the UPI<br>ecosystem|23-Oct-23|
|UPI OC 164|PPI Charges for Merchant Transactions in UPI|24-Mar-23|
|UPI OC 165|Implementation of advanced refund API as part of UPI Help<br>(UDIR)|19-Apr-23|
|UPI OC 166|Mandatory additional security measure to be implemented<br>by PSPs and TPAPs during device change for iOS operating<br>system device|12-May-23|
|UPI OC 167|Continuation of 50% NPCI switching fee rebate for UPI P2M<br>domestic transactions for FY 2023-24|01-Jun-23|
|UPI OC 168|Mandatory measures to be implemented by Bank, PSPs and<br>TPAPs for UPI|04-Jul-23|
|UPI OC 169|Enhancement in UPI LITE transaction limit to ₹500|31-Aug-23|
|UPI OC 170|RBI's Digital Rupee - CBDC and UPI Interoperability|20-Sep-23|
|UPI OC 170A|Addendum to RBI Digital Rupee - CBDC and UPI<br>Interoperability for P2P UPI QR|07-Nov-23|
|UPI OC 171|Operating Circular for Pre-sanctioned Credit Lines at Banks<br>through UPI|20-Sep-23|
|UPI OC 172|Evidence towards UPI disputes on Small and Offline<br>Merchants|10-Oct-23|
|UPI OC 173|Circular pertains to UPI Global Operations|20-Oct-23|

<!-- PAGE 108 -->
# PAGE 108

[IMAGE_218]

![IMAGE_218](images/IMAGE_218.jpeg)

**IMAGE_218 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_219]

![IMAGE_219](images/IMAGE_219.png)

**IMAGE_219 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 108/158 
UPI OC 174 
Circular pertains to UPI Global Operations 
20-Oct-23 
UPI OC 175 
Guidelines for 'Hello! UPI' 
27-Oct-23 
UPI OC 176 
Revision of UPI One Time Mandate Pricing for Other 
Categories (Non-IPO) 
31-Oct-23 
UPI OC 177 
Circular pertains to UPI Global Operations 
31-Oct-23 
UPI OC 178 
Circular pertains to UPI Global Operations 
31-Oct-23 
UPI OC 179 
Customer awareness and engagement for UPI LITE 
Enablement and Top up 
02-Nov-23 
UPI OC 180 
UPI guidelines on deactivation of UPI IDs and UPI Number 
of inactive customer 
07-Nov-23 
UPI OC 181 
Compliance to Merchant Onboarding in UPI and Usage 
Limits 
16-Nov-23 
UPI OC 181A 
Addendum to OC 181 UPI limits for Person to Person (P2P) 
transaction limits 
07-Jun-24 
UPI OC 181B 
Addendum to OC 181 A 
04-Sep-24 
UPI OC 182 
User Experience Enhancement for UPI AutoPay 
07-Dec-23 
UPI OC 183 
Enhancing UPI Payment Experience 
13-Dec-23 
UPI OC 184 
Modification in UPI chargeback rules and procedures 
05-Dec-23 
UPI OC 185 
Implementation of ₹5 Lakh limit per transaction for specific 
categories in UPI 
19-Dec-23 
UPI OC 185A 
Addendum to OC 185 - Implementation of Rs 5 Lakh limit 
per transaction for specific categories in UPI 
24-Aug-24 
UPI OC 186 
Introduction of UPI TAP & PAY mode of Payments 
19-Dec-23 
UPI OC 187 
UPI reporting requirements (Acquiring entities, UPI Apps & 
key merchants) 
26-Dec-23 
UPI OC 188 
Revision in UPI P2PM switching fees in alignment with UPI 
P2M switching fees 
26-Dec-23 
UPI OC 189 
Revision of UPI P2PM interchange and PSP fees in 
alignment with UPI P2M interchange and PSP fees 
11-Mar-24 
UPI OC 190 
Reiteration on OC 163, OC 163A & OC 100 
11-Mar-24 
UPI OC 191 
Incentive structure for UPI P2M transactions up to ₹ 
2,000.00 (FY 2023-24) 
13-Mar-24 
UPI OC 192 
Implementation of maximum UPI inward credit limits for 
P2PM merchants 
28-Mar-24 
UPI OC 193 
Compliance to UPI technical specifications-TRAN ID 
28-Mar-24 
UPI OC 194 
Introduction of new features for Credit Accounts 
29-Mar-24 
UPI OC 195 
Revision in UPI Switching Fees for P2P, P2PM and P2M 
transactions 
26-Apr-24 
UPI OC 196 
EMI service charge for EMI functionality for RuPay Credit 
Card on UPI and Credit Line on UPI 
07-Jun-24
```

**Machine-readable table extraction(s) for PAGE 108**

#### TABLE_108_01 (source extraction: `page108_table01.csv`)

|UPI OC 174|Circular pertains to UPI Global Operations|20-Oct-23|
|---|---|---|
|UPI OC 175|Guidelines for 'Hello! UPI'|27-Oct-23|
|UPI OC 176|Revision of UPI One Time Mandate Pricing for Other<br>Categories (Non-IPO)|31-Oct-23|
|UPI OC 177|Circular pertains to UPI Global Operations|31-Oct-23|
|UPI OC 178|Circular pertains to UPI Global Operations|31-Oct-23|
|UPI OC 179|Customer awareness and engagement for UPI LITE<br>Enablement and Top up|02-Nov-23|
|UPI OC 180|UPI guidelines on deactivation of UPI IDs and UPI Number<br>of inactive customer|07-Nov-23|
|UPI OC 181|Compliance to Merchant Onboarding in UPI and Usage<br>Limits|16-Nov-23|
|UPI OC 181A|Addendum to OC 181 UPI limits for Person to Person (P2P)<br>transaction limits|07-Jun-24|
|UPI OC 181B|Addendum to OC 181 A|04-Sep-24|
|UPI OC 182|User Experience Enhancement for UPI AutoPay|07-Dec-23|
|UPI OC 183|Enhancing UPI Payment Experience|13-Dec-23|
|UPI OC 184|Modification in UPI chargeback rules and procedures|05-Dec-23|
|UPI OC 185|Implementation of ₹5 Lakh limit per transaction for specific<br>categories in UPI|19-Dec-23|
|UPI OC 185A|Addendum to OC 185 - Implementation of Rs 5 Lakh limit<br>per transaction for specific categories in UPI|24-Aug-24|
|UPI OC 186|Introduction of UPI TAP & PAY mode of Payments|19-Dec-23|
|UPI OC 187|UPI reporting requirements (Acquiring entities, UPI Apps &<br>key merchants)|26-Dec-23|
|UPI OC 188|Revision in UPI P2PM switching fees in alignment with UPI<br>P2M switching fees|26-Dec-23|
|UPI OC 189|Revision of UPI P2PM interchange and PSP fees in<br>alignment with UPI P2M interchange and PSP fees|11-Mar-24|
|UPI OC 190|Reiteration on OC 163, OC 163A & OC 100|11-Mar-24|
|UPI OC 191|Incentive structure for UPI P2M transactions up to ₹<br>2,000.00 (FY 2023-24)|13-Mar-24|
|UPI OC 192|Implementation of maximum UPI inward credit limits for<br>P2PM merchants|28-Mar-24|
|UPI OC 193|Compliance to UPI technical specifications-TRAN ID|28-Mar-24|
|UPI OC 194|Introduction of new features for Credit Accounts|29-Mar-24|
|UPI OC 195|Revision in UPI Switching Fees for P2P, P2PM and P2M<br>transactions|26-Apr-24|
|UPI OC 196|EMI service charge for EMI functionality for RuPay Credit<br>Card on UPI and Credit Line on UPI|07-Jun-24|

<!-- PAGE 109 -->
# PAGE 109

[IMAGE_220]

![IMAGE_220](images/IMAGE_220.jpeg)

**IMAGE_220 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_221]

![IMAGE_221](images/IMAGE_221.png)

**IMAGE_221 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 109/158 
UPI OC 197 
Implementation of 10 settlement cycles & revised business 
day cutover 
21-Jun-24 
UPI OC 198 
Revision of TAT for UPI Disputes in URCS 
21-Jun-24 
UPI OC 198A 
Addendum on Revision of TAT for UPI Disputes in URCS 
04-Oct-24 
UPI OC 199 
Update to NPCI CL version 1.8 or above 
25-Jun-24 
UPI OC 200 
Enablement of UPI Mandate feature of Single Block Multiple 
Debits 
31-Jul-24 
UPI OC 201 
Introduction of UPI Circle – Delegated Payments for 
secondary users 
13-Aug-24 
UPI OC 202 
Interchange for Pre-Sanctioned Credit Lines on UPI 
16-Aug-24 
UPI OC 203 
Introduction of UPI P2M switching fees for Credit Lines on 
UPI 
16-Aug-24 
UPI OC 204 
Enablement of Interoperable Cash Deposit using UPI at 
Cash Deposit / Recycler Machines. 
16-Aug-24 
UPI OC 205 
Introduction of Auto Top-up on UPI LITE 
27-Aug-24 
UPI OC 206 
Implementation of Generic Good Faith Debit & Credit 
Adjustments in URCS 
03-Sep-24 
UPI OC 207 
Auto- replenishment of NETC FASTag and RuPay NCMC 
with UPI AutoPay 
23-Sep-24 
UPI OC 208 
Implementation of NRP & PRD process & arbitration 
guidelines 
03-Oct-24 
UPI OC 209 
Guidelines on UPI features for UPI 123Pay 
25-Oct-24 
RMD OC 5 
Upgrading UPI from TLS 1.0 to TLS 1.2 (To be treated as 
circular 30) 
17-Jan-17 
CERT OC 26 
Certification Fee Collection via Member Banks Settlement 
Account 
24-Nov-17 
GEN OC 7 
Enhanced Participation by Issuer Bank/Entity in Net 
Promoter Scheme 
24-Jan-22 
RUPAY OC 19A 
Operating circular for RuPay Credit Cards linked to UPI- 
(Amended) 
07-Dec-22 
RUPAY OC 22 
Transaction limit for linked RuPay Credit Card on UPI 
16-Nov-23 
RUPAY OC 30 
RuPay CC on UPI Interchange  
20-Feb-24 
GST OC 311 
Deduction of tax at source TDS 
26-Oct-18
```

**Machine-readable table extraction(s) for PAGE 109**

#### TABLE_109_01 (source extraction: `page109_table01.csv`)

|UPI OC 197|Implementation of 10 settlement cycles & revised business<br>day cutover|21-Jun-24|
|---|---|---|
|UPI OC 198|Revision of TAT for UPI Disputes in URCS|21-Jun-24|
|UPI OC 198A|Addendum on Revision of TAT for UPI Disputes in URCS|04-Oct-24|
|UPI OC 199|Update to NPCI CL version 1.8 or above|25-Jun-24|
|UPI OC 200|Enablement of UPI Mandate feature of Single Block Multiple<br>Debits|31-Jul-24|
|UPI OC 201|Introduction of UPI Circle – Delegated Payments for<br>secondary users|13-Aug-24|
|UPI OC 202|Interchange for Pre-Sanctioned Credit Lines on UPI|16-Aug-24|
|UPI OC 203|Introduction of UPI P2M switching fees for Credit Lines on<br>UPI|16-Aug-24|
|UPI OC 204|Enablement of Interoperable Cash Deposit using UPI at<br>Cash Deposit / Recycler Machines.|16-Aug-24|
|UPI OC 205|Introduction of Auto Top-up on UPI LITE|27-Aug-24|
|UPI OC 206|Implementation of Generic Good Faith Debit & Credit<br>Adjustments in URCS|03-Sep-24|
|UPI OC 207|Auto- replenishment of NETC FASTag and RuPay NCMC<br>with UPI AutoPay|23-Sep-24|
|UPI OC 208|Implementation of NRP & PRD process & arbitration<br>guidelines|03-Oct-24|
|UPI OC 209|Guidelines on UPI features for UPI 123Pay|25-Oct-24|
|RMD OC 5|Upgrading UPI from TLS 1.0 to TLS 1.2 (To be treated as<br>circular 30)|17-Jan-17|
|CERT OC 26|Certification Fee Collection via Member Banks Settlement<br>Account|24-Nov-17|
|GEN OC 7|Enhanced Participation by Issuer Bank/Entity in Net<br>Promoter Scheme|24-Jan-22|
|RUPAY OC 19A|Operating circular for RuPay Credit Cards linked to UPI-<br>(Amended)|07-Dec-22|
|RUPAY OC 22|Transaction limit for linked RuPay Credit Card on UPI|16-Nov-23|
|RUPAY OC 30|RuPay CC on UPI Interchange|20-Feb-24|
|GST OC 311|Deduction of tax at source TDS|26-Oct-18|

<!-- PAGE 110 -->
# PAGE 110

[IMAGE_222]

![IMAGE_222](images/IMAGE_222.jpeg)

**IMAGE_222 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_223]

![IMAGE_223](images/IMAGE_223.png)

**IMAGE_223 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 110/158 
42.8) 
NTSL (ANNEXURE – 8) 
National Payments Corporation of India 
Unified Payments Interface 
Daily Settlement Statement for ABC – UPI as on 01-06-2024 ( 5C 11:00:00 TO 13:30:00 ) 
Description 
No of TXNs 
Debit 
Credit 
Remitter Default-SEBI U2 Approved Fee 
XX 
XX 
  
Remitter Default-SEBI U2 Approved Fee Gst 
XX 
XX 
  
Remitter Default-SEBI U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-SEBI U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Default-SEBI U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Default-Travel U2 Approved Fee 
XX 
XX 
  
Remitter Default-Travel U2 Approved Fee Gst 
XX 
XX 
  
Remitter Default-Travel U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-Travel U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Default-Travel U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Default-Insurance U2 Approved Fee 
XX 
XX 
  
Remitter Default-Insurance U2 Approved Fee Gst 
XX 
XX 
  
Remitter Default-Insurance U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-Insurance U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Default-Insurance U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Default-BBPS U2 Approved Fee 
XX 
XX 
  
Remitter Default-BBPS U2 Approved Fee Gst 
XX 
XX 
  
Remitter Default-BBPS U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-BBPS U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Default-BBPS U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Default-Metro ATM QR U2 Approved Fee 
XX 
XX 
  
Remitter Default-Metro ATM QR U2 Approved Fee Gst 
XX 
XX 
  
Remitter Default-Metro ATM QR U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Default-Metro ATM QR U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter Default-Metro ATM QR U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter Default-G Sec through RBI RDS U2 Approved Fee 
XX 
XX 
  
Remitter Default-G Sec through RBI RDS U2 Approved Fee Gst 
XX 
XX 
  
Remitter Default-G Sec through RBI RDS U2 Approved 
Transaction Amount 
XX 
XX 
  
Remitter Default-G Sec through RBI RDS U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Default-G Sec through RBI RDS U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Default-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter Default-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter Default-LiteFin U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Default-LiteFin U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee Gst 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 110**

#### TABLE_110_01 (source extraction: `page110_table01.csv`)

|National Payments Corporation of India||||
|---|---|---|---|
|Unified Payments Interface||||
|Daily Settlement Statement for ABC – UPI as on 01-06-2024 ( 5C 11:00:00 TO 13:30:00 )||||
|||||
|Description|No of TXNs|Debit|Credit|
|Remitter Default-SEBI U2 Approved Fee|XX|XX||
|Remitter Default-SEBI U2 Approved Fee Gst|XX|XX||
|Remitter Default-SEBI U2 Approved Transaction Amount|XX|XX||
|Remitter Default-SEBI U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Default-SEBI U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Default-Travel U2 Approved Fee|XX|XX||
|Remitter Default-Travel U2 Approved Fee Gst|XX|XX||
|Remitter Default-Travel U2 Approved Transaction Amount|XX|XX||
|Remitter Default-Travel U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Default-Travel U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Default-Insurance U2 Approved Fee|XX|XX||
|Remitter Default-Insurance U2 Approved Fee Gst|XX|XX||
|Remitter Default-Insurance U2 Approved Transaction Amount|XX|XX||
|Remitter Default-Insurance U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Default-Insurance U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter Default-BBPS U2 Approved Fee|XX|XX||
|Remitter Default-BBPS U2 Approved Fee Gst|XX|XX||
|Remitter Default-BBPS U2 Approved Transaction Amount|XX|XX||
|Remitter Default-BBPS U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Default-BBPS U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Default-Metro ATM QR U2 Approved Fee|XX|XX||
|Remitter Default-Metro ATM QR U2 Approved Fee Gst|XX|XX||
|Remitter Default-Metro ATM QR U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Default-Metro ATM QR U2 Approved NPCI Switching<br>Fee|XX|XX||
|Remitter Default-Metro ATM QR U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter Default-G Sec through RBI RDS U2 Approved Fee|XX|XX||
|Remitter Default-G Sec through RBI RDS U2 Approved Fee Gst|XX|XX||
|Remitter Default-G Sec through RBI RDS U2 Approved<br>Transaction Amount|XX|XX||
|Remitter Default-G Sec through RBI RDS U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Default-G Sec through RBI RDS U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Default-LiteFin U2 Approved Fee|XX|XX||
|Remitter Default-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter Default-LiteFin U2 Approved Transaction Amount|XX|XX||
|Remitter Default-LiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Default-LiteFin U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter QR Code-Default U2 Approved Fee|XX|XX||
|Remitter QR Code-Default U2 Approved Fee Gst|XX|XX||

<!-- PAGE 111 -->
# PAGE 111

[IMAGE_224]

![IMAGE_224](images/IMAGE_224.jpeg)

**IMAGE_224 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_225]

![IMAGE_225](images/IMAGE_225.png)

**IMAGE_225 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 111/158 
Remitter QR Code-Default U2 RB Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
QR Code-Default U2 Approved Payer PSP Fee -Paid 
XX 
XX 
  
QR Code-Default U2 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Default U2 RB Approved Transaction 
Amount 
XX 
XX 
  
Remitter QR Code-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Default U2 RB Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter QR Code-Default U2 RB Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter QR Code-Travel U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Travel U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Travel U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Travel U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Travel U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Hospitality U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Hospitality U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Hospitality U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter QR Code-Hospitality U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter QR Code-Hospitality U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter QR Code-Hospital U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Hospital U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Hospital U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Hospital U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Hospital U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Telecom U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Telecom U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Telecom U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Telecom U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Telecom U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Education U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Education U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Education U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter QR Code-Education U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter QR Code-Education U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter QR Code-BBPS U2 Approved Fee 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 111**

#### TABLE_111_01 (source extraction: `page111_table01.csv`)

|Remitter QR Code-Default U2 RB Approved Fee|XX|XX||
|---|---|---|---|
|Remitter QR Code-Default U2 Approved Fee|XX|XX||
|Remitter QR Code-Default U2 Approved Fee Gst|XX|XX||
|QR Code-Default U2 Approved Payer PSP Fee -Paid|XX|XX||
|QR Code-Default U2 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter QR Code-Default U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Default U2 RB Approved Transaction<br>Amount|XX|XX||
|Remitter QR Code-Default U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Default U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Default U2 RB Approved NPCI Switching<br>Fee|XX|XX||
|Remitter QR Code-Default U2 RB Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter QR Code-Travel U2 Approved Fee|XX|XX||
|Remitter QR Code-Travel U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-Travel U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Travel U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Travel U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Hospitality U2 Approved Fee|XX|XX||
|Remitter QR Code-Hospitality U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-Hospitality U2 Approved Transaction<br>Amount|XX|XX||
|Remitter QR Code-Hospitality U2 Approved NPCI Switching<br>Fee|XX|XX||
|Remitter QR Code-Hospitality U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter QR Code-Hospital U2 Approved Fee|XX|XX||
|Remitter QR Code-Hospital U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-Hospital U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Hospital U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Hospital U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Telecom U2 Approved Fee|XX|XX||
|Remitter QR Code-Telecom U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-Telecom U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Telecom U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Telecom U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Education U2 Approved Fee|XX|XX||
|Remitter QR Code-Education U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-Education U2 Approved Transaction<br>Amount|XX|XX||
|Remitter QR Code-Education U2 Approved NPCI Switching<br>Fee|XX|XX||
|Remitter QR Code-Education U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter QR Code-BBPS U2 Approved Fee|XX|XX||

<!-- PAGE 112 -->
# PAGE 112

[IMAGE_226]

![IMAGE_226](images/IMAGE_226.jpeg)

**IMAGE_226 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_227]

![IMAGE_227](images/IMAGE_227.png)

**IMAGE_227 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 112/158 
Remitter QR Code-BBPS U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-BBPS U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-BBPS U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-BBPS U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-LiteFin U2 RB Approved Fee 
XX 
XX 
  
Remitter QR Code-LiteFin U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-LiteFin U2 RB Approved Transaction 
Amount 
XX 
XX 
  
Remitter QR Code-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-LiteFin U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-LiteFin U2 RB Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter QR Code-LiteFin U2 RB Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Default U2 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Default U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U2 RB Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Secure QR Code-Default U2 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Secure QR Code-Default U2 Approved Payer PSP Fee Gst -
Paid 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-Default U2 RB Approved 
Transaction Amount 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U2 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U2 RB Approved NPCI 
Switching Fee Gst 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 112**

#### TABLE_112_01 (source extraction: `page112_table01.csv`)

|Remitter QR Code-BBPS U2 Approved Fee Gst|XX|XX||
|---|---|---|---|
|Remitter QR Code-BBPS U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-BBPS U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-BBPS U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Default U2 Approved Fee|XX|XX||
|Remitter QR Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-Default U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Default U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Default U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-LiteFin U2 Approved Fee|XX|XX||
|Remitter QR Code-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-LiteFin U2 RB Approved Fee|XX|XX||
|Remitter QR Code-LiteFin U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-LiteFin U2 RB Approved Transaction<br>Amount|XX|XX||
|Remitter QR Code-LiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-LiteFin U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-LiteFin U2 RB Approved NPCI Switching<br>Fee|XX|XX||
|Remitter QR Code-LiteFin U2 RB Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter QR Code-Default U2 Approved Fee|XX|XX||
|Remitter QR Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter QR Code-Default U2 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Default U2 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Default U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U2 RB Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Fee Gst|XX|XX||
|Secure QR Code-Default U2 Approved Payer PSP Fee -Paid|XX|XX||
|Secure QR Code-Default U2 Approved Payer PSP Fee Gst -<br>Paid|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure QR Code-Default U2 RB Approved<br>Transaction Amount|XX|XX||
|Remitter Secure QR Code-Default U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Default U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U2 RB Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Default U2 RB Approved NPCI<br>Switching Fee Gst|XX|XX||

<!-- PAGE 113 -->
# PAGE 113

[IMAGE_228]

![IMAGE_228](images/IMAGE_228.jpeg)

**IMAGE_228 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_229]

![IMAGE_229](images/IMAGE_229.png)

**IMAGE_229 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 113/158 
Remitter Secure QR Code-Travel U2 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Travel U2 Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Travel U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-Travel U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Travel U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Telecom U2 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Telecom U2 Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Telecom U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-Telecom U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Telecom U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 RB Approved 
Transaction Amount 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U2 RB Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 RB Approved Fee 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Bharat QR Code-Default U2 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Bharat QR Code-Default U2 Approved Payer PSP Fee Gst -
Paid 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 RB Approved 
Transaction Amount 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 113**

#### TABLE_113_01 (source extraction: `page113_table01.csv`)

|Remitter Secure QR Code-Travel U2 Approved Fee|XX|XX||
|---|---|---|---|
|Remitter Secure QR Code-Travel U2 Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-Travel U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure QR Code-Travel U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Travel U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-Telecom U2 Approved Fee|XX|XX||
|Remitter Secure QR Code-Telecom U2 Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-Telecom U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure QR Code-Telecom U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Telecom U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-LiteFin U2 Approved Fee|XX|XX||
|Remitter Secure QR Code-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-LiteFin U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure QR Code-LiteFin U2 RB Approved<br>Transaction Amount|XX|XX||
|Remitter Secure QR Code-LiteFin U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-LiteFin U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-LiteFin U2 RB Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-LiteFin U2 RB Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure QR Code-Default U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Default U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Bharat QR Code-Default U2 Approved Fee|XX|XX||
|Remitter Bharat QR Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter Bharat QR Code-Default U2 RB Approved Fee|XX|XX||
|Remitter Bharat QR Code-Default U2 Approved Fee|XX|XX||
|Remitter Bharat QR Code-Default U2 Approved Fee Gst|XX|XX||
|Bharat QR Code-Default U2 Approved Payer PSP Fee -Paid|XX|XX||
|Bharat QR Code-Default U2 Approved Payer PSP Fee Gst -<br>Paid|XX|XX||
|Remitter Bharat QR Code-Default U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Bharat QR Code-Default U2 RB Approved<br>Transaction Amount|XX|XX||

<!-- PAGE 114 -->
# PAGE 114

[IMAGE_230]

![IMAGE_230](images/IMAGE_230.jpeg)

**IMAGE_230 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_231]

![IMAGE_231](images/IMAGE_231.png)

**IMAGE_231 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 114/158 
Remitter Bharat QR Code-Default U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Bharat QR Code-Default U2 RB Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Bharat QR Code-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter Bharat QR Code-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter Bharat QR Code-LiteFin U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Bharat QR Code-LiteFin U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Bharat QR Code-LiteFin U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Intent-Default U2 Approved Fee 
XX 
XX 
  
Remitter Intent-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-Default U2 RB Approved Fee 
XX 
XX 
  
Remitter Intent-Default U2 Approved Fee 
XX 
XX 
  
Remitter Intent-Default U2 Approved Fee Gst 
XX 
XX 
  
Intent-Default U2 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Intent-Default U2 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter Intent-Default U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-Default U2 RB Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Intent-Default U2 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-Default U2 RB Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Intent-AMC U2 Approved Fee 
XX 
XX 
  
Remitter Intent-AMC U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-AMC U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-AMC U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-AMC U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Intent-Travel U2 Approved Fee 
XX 
XX 
  
Remitter Intent-Travel U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-Travel U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-Travel U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-Travel U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Intent-Hospitality U2 Approved Fee 
XX 
XX 
  
Remitter Intent-Hospitality U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-Hospitality U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-Hospitality U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-Hospitality U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Intent-Insurance U2 Approved Fee 
XX 
XX 
  
Remitter Intent-Insurance U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-Insurance U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-Insurance U2 Approved NPCI Switching Fee 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 114**

#### TABLE_114_01 (source extraction: `page114_table01.csv`)

|Remitter Bharat QR Code-Default U2 Approved NPCI<br>Switching Fee|XX|XX||
|---|---|---|---|
|Remitter Bharat QR Code-Default U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Bharat QR Code-Default U2 RB Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Bharat QR Code-Default U2 RB Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Bharat QR Code-LiteFin U2 Approved Fee|XX|XX||
|Remitter Bharat QR Code-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter Bharat QR Code-LiteFin U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Bharat QR Code-LiteFin U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Bharat QR Code-LiteFin U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Intent-Default U2 Approved Fee|XX|XX||
|Remitter Intent-Default U2 Approved Fee Gst|XX|XX||
|Remitter Intent-Default U2 RB Approved Fee|XX|XX||
|Remitter Intent-Default U2 Approved Fee|XX|XX||
|Remitter Intent-Default U2 Approved Fee Gst|XX|XX||
|Intent-Default U2 Approved Payer PSP Fee -Paid|XX|XX||
|Intent-Default U2 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter Intent-Default U2 Approved Transaction Amount|XX|XX||
|Remitter Intent-Default U2 RB Approved Transaction Amount|XX|XX||
|Remitter Intent-Default U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Intent-Default U2 RB Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-Default U2 RB Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter Intent-AMC U2 Approved Fee|XX|XX||
|Remitter Intent-AMC U2 Approved Fee Gst|XX|XX||
|Remitter Intent-AMC U2 Approved Transaction Amount|XX|XX||
|Remitter Intent-AMC U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-AMC U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Intent-Travel U2 Approved Fee|XX|XX||
|Remitter Intent-Travel U2 Approved Fee Gst|XX|XX||
|Remitter Intent-Travel U2 Approved Transaction Amount|XX|XX||
|Remitter Intent-Travel U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-Travel U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Intent-Hospitality U2 Approved Fee|XX|XX||
|Remitter Intent-Hospitality U2 Approved Fee Gst|XX|XX||
|Remitter Intent-Hospitality U2 Approved Transaction Amount|XX|XX||
|Remitter Intent-Hospitality U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-Hospitality U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter Intent-Insurance U2 Approved Fee|XX|XX||
|Remitter Intent-Insurance U2 Approved Fee Gst|XX|XX||
|Remitter Intent-Insurance U2 Approved Transaction Amount|XX|XX||
|Remitter Intent-Insurance U2 Approved NPCI Switching Fee|XX|XX||

<!-- PAGE 115 -->
# PAGE 115

[IMAGE_232]

![IMAGE_232](images/IMAGE_232.jpeg)

**IMAGE_232 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_233]

![IMAGE_233](images/IMAGE_233.png)

**IMAGE_233 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 115/158 
Remitter Intent-Insurance U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Intent-Metro ATM QR U2 Approved Fee 
XX 
XX 
  
Remitter Intent-Metro ATM QR U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-Metro ATM QR U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Intent-Metro ATM QR U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter Intent-Metro ATM QR U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter Intent-Default U2 Approved Fee 
XX 
XX 
  
Remitter Intent-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-Default U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Intent-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter Intent-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter Intent-LiteFin U2 RB Approved Fee 
XX 
XX 
  
Remitter Intent-LiteFin U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-LiteFin U2 RB Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-LiteFin U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Intent-LiteFin U2 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-LiteFin U2 RB Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Secure Intent-Default U2 Approved Fee 
XX 
XX 
  
Remitter Secure Intent-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Secure Intent-Default U2 RB Approved Fee 
XX 
XX 
  
Remitter Secure Intent-Default U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure Intent-Default U2 RB Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure Intent-Default U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter Secure Intent-Default U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter Secure Intent-Default U2 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure Intent-Default U2 RB Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure Intent-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter Secure Intent-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter Secure Intent-LiteFin U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure Intent-LiteFin U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter Secure Intent-LiteFin U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter SDK-Default U2 Approved Fee 
XX 
XX 
  
Remitter SDK-Default U2 Approved Fee Gst 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 115**

#### TABLE_115_01 (source extraction: `page115_table01.csv`)

|Remitter Intent-Insurance U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|---|---|---|---|
|Remitter Intent-Metro ATM QR U2 Approved Fee|XX|XX||
|Remitter Intent-Metro ATM QR U2 Approved Fee Gst|XX|XX||
|Remitter Intent-Metro ATM QR U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Intent-Metro ATM QR U2 Approved NPCI Switching<br>Fee|XX|XX||
|Remitter Intent-Metro ATM QR U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter Intent-Default U2 Approved Fee|XX|XX||
|Remitter Intent-Default U2 Approved Fee Gst|XX|XX||
|Remitter Intent-Default U2 Approved Transaction Amount|XX|XX||
|Remitter Intent-Default U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Intent-LiteFin U2 Approved Fee|XX|XX||
|Remitter Intent-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter Intent-LiteFin U2 RB Approved Fee|XX|XX||
|Remitter Intent-LiteFin U2 Approved Transaction Amount|XX|XX||
|Remitter Intent-LiteFin U2 RB Approved Transaction Amount|XX|XX||
|Remitter Intent-LiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-LiteFin U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Intent-LiteFin U2 RB Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-LiteFin U2 RB Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter Secure Intent-Default U2 Approved Fee|XX|XX||
|Remitter Secure Intent-Default U2 Approved Fee Gst|XX|XX||
|Remitter Secure Intent-Default U2 RB Approved Fee|XX|XX||
|Remitter Secure Intent-Default U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure Intent-Default U2 RB Approved Transaction<br>Amount|XX|XX||
|Remitter Secure Intent-Default U2 Approved NPCI Switching<br>Fee|XX|XX||
|Remitter Secure Intent-Default U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter Secure Intent-Default U2 RB Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure Intent-Default U2 RB Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure Intent-LiteFin U2 Approved Fee|XX|XX||
|Remitter Secure Intent-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter Secure Intent-LiteFin U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure Intent-LiteFin U2 Approved NPCI Switching<br>Fee|XX|XX||
|Remitter Secure Intent-LiteFin U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter SDK-Default U2 Approved Fee|XX|XX||
|Remitter SDK-Default U2 Approved Fee Gst|XX|XX||

<!-- PAGE 116 -->
# PAGE 116

[IMAGE_234]

![IMAGE_234](images/IMAGE_234.jpeg)

**IMAGE_234 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_235]

![IMAGE_235](images/IMAGE_235.png)

**IMAGE_235 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 116/158 
Remitter SDK-Default U2 Approved Transaction Amount 
XX 
XX 
  
Remitter SDK-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter SDK-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter SDK-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter SDK-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter SDK-LiteFin U2 Approved Transaction Amount 
XX 
XX 
  
Remitter SDK-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter SDK-LiteFin U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Man-SEBI U2 Approved Fee 
XX 
XX 
  
Remitter Man-SEBI U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Man-SEBI U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Man-SEBI U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Man-SI U2 Approved Fee 
XX 
XX 
  
Remitter Man-SI U2 RB Approved Fee 
XX 
XX 
  
Remitter Man-SI U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Man-SI U2 RB Approved Transaction Amount 
XX 
XX 
  
Remitter Man-SI U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Man-SI U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Man-SI U2 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Man-SI U2 RB Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Man-Government Voucher U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Man-Government Voucher U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Man-Government Voucher U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter BBPS-Default U2 Approved Fee 
XX 
XX 
  
Remitter BBPS-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter BBPS-Default U2 Approved Transaction Amount 
XX 
XX 
  
Remitter BBPS-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter BBPS-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 RB Approved Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 RB Approved 
Transaction Amount 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 RB Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-LiteFin U2 Approved Transaction 
Amount 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 116**

#### TABLE_116_01 (source extraction: `page116_table01.csv`)

|Remitter SDK-Default U2 Approved Transaction Amount|XX|XX||
|---|---|---|---|
|Remitter SDK-Default U2 Approved NPCI Switching Fee|XX|XX||
|Remitter SDK-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter SDK-LiteFin U2 Approved Fee|XX|XX||
|Remitter SDK-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter SDK-LiteFin U2 Approved Transaction Amount|XX|XX||
|Remitter SDK-LiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Remitter SDK-LiteFin U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Man-SEBI U2 Approved Fee|XX|XX||
|Remitter Man-SEBI U2 Approved Transaction Amount|XX|XX||
|Remitter Man-SEBI U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Man-SEBI U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Man-SI U2 Approved Fee|XX|XX||
|Remitter Man-SI U2 RB Approved Fee|XX|XX||
|Remitter Man-SI U2 Approved Transaction Amount|XX|XX||
|Remitter Man-SI U2 RB Approved Transaction Amount|XX|XX||
|Remitter Man-SI U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Man-SI U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Man-SI U2 RB Approved NPCI Switching Fee|XX|XX||
|Remitter Man-SI U2 RB Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Man-Government Voucher U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Man-Government Voucher U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Man-Government Voucher U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter BBPS-Default U2 Approved Fee|XX|XX||
|Remitter BBPS-Default U2 Approved Fee Gst|XX|XX||
|Remitter BBPS-Default U2 Approved Transaction Amount|XX|XX||
|Remitter BBPS-Default U2 Approved NPCI Switching Fee|XX|XX||
|Remitter BBPS-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-Default U2 RB Approved Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Dynamic Qr Code-Default U2 RB Approved<br>Transaction Amount|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-Default U2 RB Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U2 RB Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-LiteFin U2 Approved Fee|XX|XX||
|Remitter Dynamic Qr Code-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-LiteFin U2 Approved Transaction<br>Amount|XX|XX||

<!-- PAGE 117 -->
# PAGE 117

[IMAGE_236]

![IMAGE_236](images/IMAGE_236.jpeg)

**IMAGE_236 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_237]

![IMAGE_237](images/IMAGE_237.png)

**IMAGE_237 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 117/158 
Remitter Dynamic Qr Code-LiteFin U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-LiteFin U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 RB Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultDefault U2 RB Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultDefault U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U2 RB Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Online Static QR Code-Default U2 Approved Fee 
XX 
XX 
  
Remitter Online Static QR Code-Default U2 Approved Fee Gst 
XX 
XX 
  
Remitter Online Static QR Code-Default U2 Approved 
Transaction Amount 
XX 
XX 
  
Remitter Online Static QR Code-Default U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Online Static QR Code-Default U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Online Static QR Code-Hospital U2 Approved Fee 
XX 
XX 
  
Remitter Online Static QR Code-Hospital U2 Approved Fee 
Gst 
XX 
XX 
  
Remitter Online Static QR Code-Hospital U2 Approved 
Transaction Amount 
XX 
XX 
  
Remitter Online Static QR Code-Hospital U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Online Static QR Code-Hospital U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Online Static QR Code-LiteFin U2 Approved Fee 
XX 
XX 
  
Remitter Online Static QR Code-LiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter Online Static QR Code-LiteFin U2 Approved 
Transaction Amount 
XX 
XX 
  
Remitter Online Static QR Code-LiteFin U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Online Static QR Code-LiteFin U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Transaction Amount 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 117**

#### TABLE_117_01 (source extraction: `page117_table01.csv`)

|Remitter Dynamic Qr Code-LiteFin U2 Approved NPCI<br>Switching Fee|XX|XX||
|---|---|---|---|
|Remitter Dynamic Qr Code-LiteFin U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved Transaction<br>Amount|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U2 Approved Fee|XX|XX||
|Remitter DefaultDefault U2 Approved Fee Gst|XX|XX||
|Remitter DefaultDefault U2 RB Approved Fee|XX|XX||
|Remitter DefaultDefault U2 Approved Transaction Amount|XX|XX||
|Remitter DefaultDefault U2 RB Approved Transaction Amount|XX|XX||
|Remitter DefaultDefault U2 Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U2 RB Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultDefault U2 RB Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter Online Static QR Code-Default U2 Approved Fee|XX|XX||
|Remitter Online Static QR Code-Default U2 Approved Fee Gst|XX|XX||
|Remitter Online Static QR Code-Default U2 Approved<br>Transaction Amount|XX|XX||
|Remitter Online Static QR Code-Default U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Online Static QR Code-Default U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Online Static QR Code-Hospital U2 Approved Fee|XX|XX||
|Remitter Online Static QR Code-Hospital U2 Approved Fee<br>Gst|XX|XX||
|Remitter Online Static QR Code-Hospital U2 Approved<br>Transaction Amount|XX|XX||
|Remitter Online Static QR Code-Hospital U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Online Static QR Code-Hospital U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Online Static QR Code-LiteFin U2 Approved Fee|XX|XX||
|Remitter Online Static QR Code-LiteFin U2 Approved Fee Gst|XX|XX||
|Remitter Online Static QR Code-LiteFin U2 Approved<br>Transaction Amount|XX|XX||
|Remitter Online Static QR Code-LiteFin U2 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Online Static QR Code-LiteFin U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U2 Approved Fee|XX|XX||
|Remitter DefaultDefault U2 Approved Fee Gst|XX|XX||
|Remitter DefaultDefault U2 Approved Transaction Amount|XX|XX||

<!-- PAGE 118 -->
# PAGE 118

[IMAGE_238]

![IMAGE_238](images/IMAGE_238.jpeg)

**IMAGE_238 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_239]

![IMAGE_239](images/IMAGE_239.png)

**IMAGE_239 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 118/158 
Remitter DefaultDefault U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter DefaultLiteFin U2 Approved Fee 
XX 
XX 
  
Remitter DefaultLiteFin U2 Approved Fee Gst 
XX 
XX 
  
Remitter DefaultLiteFin U2 Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultLiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultLiteFin U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultDefault U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U2 Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultDefault U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Man-SEBI U2 – DD Approved Fee 
XX 
XX 
  
Remitter Man-SEBI U2 – DD Approved Transaction Amount 
XX 
XX 
  
Remitter Man-SEBI U2 – DD Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Man-SEBI U2 – DD Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Fin-BBPS U2 Approved Fee 
XX 
XX 
  
Remitter Fin-BBPS U2 Approved Fee Gst 
XX 
XX 
  
Remitter Fin-BBPS U2 Approved Transaction Amount 
XX 
XX 
  
Remitter Fin-BBPS U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Fin-BBPS U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter U2 Approved Fee 
XX 
XX 
  
Remitter U2 Approved Fee Gst 
XX 
XX 
  
Remitter U2 RB Approved Fee 
XX 
XX 
  
Remitter U2 Approved Fee 
XX 
XX 
  
Remitter U2 Approved Fee Gst 
XX 
XX 
  
U2 Approved Payer PSP Fee -Paid 
XX 
XX 
  
U2 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter U2 Approved Transaction Amount 
XX 
XX 
  
Remitter U2 RB Approved Transaction Amount 
XX 
XX 
  
Remitter U2 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter U2 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter U2 RB Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Default-LiteReg U3 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-LiteTopup U3 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-LiteDereg U3 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-LiteFin U3 Approved Fee 
XX 
XX 
  
Remitter Default-LiteFin U3 Approved Fee Gst 
XX 
XX 
  
Remitter Default-LiteFin U3 RB Approved Fee 
XX 
XX 
  
Remitter Default-LiteFin U3 RB Approved Fee Gst 
XX 
XX 
  
Default-LiteFin U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Default-LiteFin U3 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Default-LiteFin U3 RB Approved Payer PSP Fee -Paid 
XX 
XX 
  
Default-LiteFin U3 RB Approved Payer PSP Fee Gst -Paid 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 118**

#### TABLE_118_01 (source extraction: `page118_table01.csv`)

|Remitter DefaultDefault U2 Approved NPCI Switching Fee|XX|XX||
|---|---|---|---|
|Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter DefaultLiteFin U2 Approved Fee|XX|XX||
|Remitter DefaultLiteFin U2 Approved Fee Gst|XX|XX||
|Remitter DefaultLiteFin U2 Approved Transaction Amount|XX|XX||
|Remitter DefaultLiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultLiteFin U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U2 Approved Fee|XX|XX||
|Remitter DefaultDefault U2 Approved Fee Gst|XX|XX||
|Remitter DefaultDefault U2 Approved Transaction Amount|XX|XX||
|Remitter DefaultDefault U2 Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U2 Approved Fee|XX|XX||
|Remitter DefaultDefault U2 Approved Fee Gst|XX|XX||
|Remitter DefaultDefault U2 Approved Transaction Amount|XX|XX||
|Remitter DefaultDefault U2 Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultDefault U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Man-SEBI U2 – DD Approved Fee|XX|XX||
|Remitter Man-SEBI U2 – DD Approved Transaction Amount|XX|XX||
|Remitter Man-SEBI U2 – DD Approved NPCI Switching Fee|XX|XX||
|Remitter Man-SEBI U2 – DD Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Fin-BBPS U2 Approved Fee|XX|XX||
|Remitter Fin-BBPS U2 Approved Fee Gst|XX|XX||
|Remitter Fin-BBPS U2 Approved Transaction Amount|XX|XX||
|Remitter Fin-BBPS U2 Approved NPCI Switching Fee|XX|XX||
|Remitter Fin-BBPS U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter U2 Approved Fee|XX|XX||
|Remitter U2 Approved Fee Gst|XX|XX||
|Remitter U2 RB Approved Fee|XX|XX||
|Remitter U2 Approved Fee|XX|XX||
|Remitter U2 Approved Fee Gst|XX|XX||
|U2 Approved Payer PSP Fee -Paid|XX|XX||
|U2 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter U2 Approved Transaction Amount|XX|XX||
|Remitter U2 RB Approved Transaction Amount|XX|XX||
|Remitter U2 Approved NPCI Switching Fee|XX|XX||
|Remitter U2 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter U2 RB Approved NPCI Switching Fee|XX|XX||
|Remitter U2 RB Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Default-LiteReg U3 Approved Transaction Amount|XX|XX||
|Remitter Default-LiteTopup U3 Approved Transaction Amount|XX|XX||
|Remitter Default-LiteDereg U3 Approved Transaction Amount|XX|XX||
|Remitter Default-LiteFin U3 Approved Fee|XX|XX||
|Remitter Default-LiteFin U3 Approved Fee Gst|XX|XX||
|Remitter Default-LiteFin U3 RB Approved Fee|XX|XX||
|Remitter Default-LiteFin U3 RB Approved Fee Gst|XX|XX||
|Default-LiteFin U3 Approved Payer PSP Fee -Paid|XX|XX||
|Default-LiteFin U3 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Default-LiteFin U3 RB Approved Payer PSP Fee -Paid|XX|XX||
|Default-LiteFin U3 RB Approved Payer PSP Fee Gst -Paid|XX|XX||

<!-- PAGE 119 -->
# PAGE 119

[IMAGE_240]

![IMAGE_240](images/IMAGE_240.jpeg)

**IMAGE_240 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_241]

![IMAGE_241](images/IMAGE_241.png)

**IMAGE_241 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 119/158 
Remitter Default-LiteFin U3 Approved Transaction Amount 
XX 
XX 
  
Remitter Default-LiteFin U3 RB Approved Transaction Amount 
XX 
XX 
  
Remitter Default-LiteFin U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Default-LiteFin U3 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Default-LiteFin U3 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Default-LiteFin U3 RB Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Default U3 Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U3 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Default U3 RB Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U3 RB Approved Fee Gst 
XX 
XX 
  
QR Code-Default U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
QR Code-Default U3 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
QR Code-Default U3 RB Approved Payer PSP Fee -Paid 
XX 
XX 
  
QR Code-Default U3 RB Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter QR Code-Default U3 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Default U3 RB Approved Transaction 
Amount 
XX 
XX 
  
Remitter QR Code-Default U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Default U3 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Default U3 RB Approved NPCI Switching 
Fee 
XX 
XX 
  
Remitter QR Code-Default U3 RB Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Remitter QR Code-LiteFin U3 Approved Fee 
XX 
XX 
  
Remitter QR Code-LiteFin U3 Approved Fee Gst 
XX 
XX 
  
QR Code-LiteFin U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
QR Code-LiteFin U3 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter QR Code-LiteFin U3 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-LiteFin U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-LiteFin U3 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter QR Code-Default U3 Approved Fee 
XX 
XX 
  
Remitter QR Code-Default U3 Approved Fee Gst 
XX 
XX 
  
Remitter QR Code-Default U3 Approved Transaction Amount 
XX 
XX 
  
Remitter QR Code-Default U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter QR Code-Default U3 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved Fee Gst 
XX 
XX 
  
Secure QR Code-Default U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Secure QR Code-Default U3 Approved Payer PSP Fee Gst -
Paid 
XX 
XX 
  
Secure QR Code-Default U3 RB Approved Payer PSP Fee -
Paid 
XX 
XX 
  
Secure QR Code-Default U3 RB Approved Payer PSP Fee Gst -
Paid 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 119**

#### TABLE_119_01 (source extraction: `page119_table01.csv`)

|Remitter Default-LiteFin U3 Approved Transaction Amount|XX|XX||
|---|---|---|---|
|Remitter Default-LiteFin U3 RB Approved Transaction Amount|XX|XX||
|Remitter Default-LiteFin U3 Approved NPCI Switching Fee|XX|XX||
|Remitter Default-LiteFin U3 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Default-LiteFin U3 RB Approved NPCI Switching Fee|XX|XX||
|Remitter Default-LiteFin U3 RB Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Default U3 Approved Fee|XX|XX||
|Remitter QR Code-Default U3 Approved Fee Gst|XX|XX||
|Remitter QR Code-Default U3 RB Approved Fee|XX|XX||
|Remitter QR Code-Default U3 RB Approved Fee Gst|XX|XX||
|QR Code-Default U3 Approved Payer PSP Fee -Paid|XX|XX||
|QR Code-Default U3 Approved Payer PSP Fee Gst -Paid|XX|XX||
|QR Code-Default U3 RB Approved Payer PSP Fee -Paid|XX|XX||
|QR Code-Default U3 RB Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter QR Code-Default U3 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Default U3 RB Approved Transaction<br>Amount|XX|XX||
|Remitter QR Code-Default U3 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Default U3 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Default U3 RB Approved NPCI Switching<br>Fee|XX|XX||
|Remitter QR Code-Default U3 RB Approved NPCI Switching<br>Fee Gst|XX|XX||
|Remitter QR Code-LiteFin U3 Approved Fee|XX|XX||
|Remitter QR Code-LiteFin U3 Approved Fee Gst|XX|XX||
|QR Code-LiteFin U3 Approved Payer PSP Fee -Paid|XX|XX||
|QR Code-LiteFin U3 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter QR Code-LiteFin U3 Approved Transaction Amount|XX|XX||
|Remitter QR Code-LiteFin U3 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-LiteFin U3 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter QR Code-Default U3 Approved Fee|XX|XX||
|Remitter QR Code-Default U3 Approved Fee Gst|XX|XX||
|Remitter QR Code-Default U3 Approved Transaction Amount|XX|XX||
|Remitter QR Code-Default U3 Approved NPCI Switching Fee|XX|XX||
|Remitter QR Code-Default U3 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter Secure QR Code-Default U3 Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U3 Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved Fee Gst|XX|XX||
|Secure QR Code-Default U3 Approved Payer PSP Fee -Paid|XX|XX||
|Secure QR Code-Default U3 Approved Payer PSP Fee Gst -<br>Paid|XX|XX||
|Secure QR Code-Default U3 RB Approved Payer PSP Fee -<br>Paid|XX|XX||
|Secure QR Code-Default U3 RB Approved Payer PSP Fee Gst -<br>Paid|XX|XX||

<!-- PAGE 120 -->
# PAGE 120

[IMAGE_242]

![IMAGE_242](images/IMAGE_242.jpeg)

**IMAGE_242 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_243]

![IMAGE_243](images/IMAGE_243.png)

**IMAGE_243 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 120/158 
Remitter Secure QR Code-Default U3 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved 
Transaction Amount 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U3 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U3 Approved Fee Gst 
XX 
XX 
  
Secure QR Code-LiteFin U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Secure QR Code-LiteFin U3 Approved Payer PSP Fee Gst -
Paid 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U3 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U3 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-LiteFin U3 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved 
Transaction Amount 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Secure QR Code-Default U3 RB Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter Intent-Default U3 Approved Fee 
XX 
XX 
  
Remitter Intent-Default U3 Approved Fee Gst 
XX 
XX 
  
Intent-Default U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Intent-Default U3 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter Intent-Default U3 Approved Transaction Amount 
XX 
XX 
  
Remitter Intent-Default U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter Intent-Default U3 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U3 Approved Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U3 Approved Fee Gst 
XX 
XX 
  
Dynamic Qr Code-Default U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
Dynamic Qr Code-Default U3 Approved Payer PSP Fee Gst -
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 120**

#### TABLE_120_01 (source extraction: `page120_table01.csv`)

|Remitter Secure QR Code-Default U3 Approved Transaction<br>Amount|XX|XX||
|---|---|---|---|
|Remitter Secure QR Code-Default U3 RB Approved<br>Transaction Amount|XX|XX||
|Remitter Secure QR Code-Default U3 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Default U3 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-LiteFin U3 Approved Fee|XX|XX||
|Remitter Secure QR Code-LiteFin U3 Approved Fee Gst|XX|XX||
|Secure QR Code-LiteFin U3 Approved Payer PSP Fee -Paid|XX|XX||
|Secure QR Code-LiteFin U3 Approved Payer PSP Fee Gst -<br>Paid|XX|XX||
|Remitter Secure QR Code-LiteFin U3 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure QR Code-LiteFin U3 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-LiteFin U3 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U3 Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U3 Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved Fee|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U3 Approved Transaction<br>Amount|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved<br>Transaction Amount|XX|XX||
|Remitter Secure QR Code-Default U3 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Default U3 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Secure QR Code-Default U3 RB Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter Intent-Default U3 Approved Fee|XX|XX||
|Remitter Intent-Default U3 Approved Fee Gst|XX|XX||
|Intent-Default U3 Approved Payer PSP Fee -Paid|XX|XX||
|Intent-Default U3 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter Intent-Default U3 Approved Transaction Amount|XX|XX||
|Remitter Intent-Default U3 Approved NPCI Switching Fee|XX|XX||
|Remitter Intent-Default U3 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Dynamic Qr Code-Default U3 Approved Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U3 Approved Fee Gst|XX|XX||
|Dynamic Qr Code-Default U3 Approved Payer PSP Fee -Paid|XX|XX||
|Dynamic Qr Code-Default U3 Approved Payer PSP Fee Gst -|XX|XX||

<!-- PAGE 121 -->
# PAGE 121

[IMAGE_244]

![IMAGE_244](images/IMAGE_244.jpeg)

**IMAGE_244 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_245]

![IMAGE_245](images/IMAGE_245.png)

**IMAGE_245 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 121/158 
Paid 
Remitter Dynamic Qr Code-Default U3 Approved Transaction 
Amount 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U3 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Dynamic Qr Code-Default U3 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U3 Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U3 Approved Fee Gst 
XX 
XX 
  
DefaultDefault U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
DefaultDefault U3 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter DefaultDefault U3 Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultDefault U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U3 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter Online Static QR Code-Default U3 Approved Fee 
XX 
XX 
  
Remitter Online Static QR Code-Default U3 Approved Fee Gst 
XX 
XX 
  
Online Static QR Code-Default U3 Approved Payer PSP Fee -
Paid 
XX 
XX 
  
Online Static QR Code-Default U3 Approved Payer PSP Fee 
Gst -Paid 
XX 
XX 
  
Remitter Online Static QR Code-Default U3 Approved 
Transaction Amount 
XX 
XX 
  
Remitter Online Static QR Code-Default U3 Approved NPCI 
Switching Fee 
XX 
XX 
  
Remitter Online Static QR Code-Default U3 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U3 Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U3 Approved Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U3 RB Approved Fee 
XX 
XX 
  
Remitter DefaultDefault U3 RB Approved Fee Gst 
XX 
XX 
  
DefaultDefault U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
DefaultDefault U3 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
DefaultDefault U3 RB Approved Payer PSP Fee -Paid 
XX 
XX 
  
DefaultDefault U3 RB Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter DefaultDefault U3 Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultDefault U3 RB Approved Transaction Amount 
XX 
XX 
  
Remitter DefaultDefault U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U3 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter DefaultDefault U3 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter DefaultDefault U3 RB Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Remitter U3 Approved Fee 
XX 
XX 
  
Remitter U3 Approved Fee Gst 
XX 
XX 
  
Remitter U3 RB Approved Fee 
XX 
XX 
  
Remitter U3 RB Approved Fee Gst 
XX 
XX 
  
U3 Approved Payer PSP Fee -Paid 
XX 
XX 
  
U3 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
U3 RB Approved Payer PSP Fee -Paid 
XX 
XX 
  
U3 RB Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Remitter U3 Approved Transaction Amount 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 121**

#### TABLE_121_01 (source extraction: `page121_table01.csv`)

|Paid||||
|---|---|---|---|
|Remitter Dynamic Qr Code-Default U3 Approved Transaction<br>Amount|XX|XX||
|Remitter Dynamic Qr Code-Default U3 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Dynamic Qr Code-Default U3 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U3 Approved Fee|XX|XX||
|Remitter DefaultDefault U3 Approved Fee Gst|XX|XX||
|DefaultDefault U3 Approved Payer PSP Fee -Paid|XX|XX||
|DefaultDefault U3 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter DefaultDefault U3 Approved Transaction Amount|XX|XX||
|Remitter DefaultDefault U3 Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultDefault U3 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter Online Static QR Code-Default U3 Approved Fee|XX|XX||
|Remitter Online Static QR Code-Default U3 Approved Fee Gst|XX|XX||
|Online Static QR Code-Default U3 Approved Payer PSP Fee -<br>Paid|XX|XX||
|Online Static QR Code-Default U3 Approved Payer PSP Fee<br>Gst -Paid|XX|XX||
|Remitter Online Static QR Code-Default U3 Approved<br>Transaction Amount|XX|XX||
|Remitter Online Static QR Code-Default U3 Approved NPCI<br>Switching Fee|XX|XX||
|Remitter Online Static QR Code-Default U3 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U3 Approved Fee|XX|XX||
|Remitter DefaultDefault U3 Approved Fee Gst|XX|XX||
|Remitter DefaultDefault U3 RB Approved Fee|XX|XX||
|Remitter DefaultDefault U3 RB Approved Fee Gst|XX|XX||
|DefaultDefault U3 Approved Payer PSP Fee -Paid|XX|XX||
|DefaultDefault U3 Approved Payer PSP Fee Gst -Paid|XX|XX||
|DefaultDefault U3 RB Approved Payer PSP Fee -Paid|XX|XX||
|DefaultDefault U3 RB Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter DefaultDefault U3 Approved Transaction Amount|XX|XX||
|Remitter DefaultDefault U3 RB Approved Transaction Amount|XX|XX||
|Remitter DefaultDefault U3 Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultDefault U3 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter DefaultDefault U3 RB Approved NPCI Switching Fee|XX|XX||
|Remitter DefaultDefault U3 RB Approved NPCI Switching Fee<br>Gst|XX|XX||
|Remitter U3 Approved Fee|XX|XX||
|Remitter U3 Approved Fee Gst|XX|XX||
|Remitter U3 RB Approved Fee|XX|XX||
|Remitter U3 RB Approved Fee Gst|XX|XX||
|U3 Approved Payer PSP Fee -Paid|XX|XX||
|U3 Approved Payer PSP Fee Gst -Paid|XX|XX||
|U3 RB Approved Payer PSP Fee -Paid|XX|XX||
|U3 RB Approved Payer PSP Fee Gst -Paid|XX|XX||
|Remitter U3 Approved Transaction Amount|XX|XX||

<!-- PAGE 122 -->
# PAGE 122

[IMAGE_246]

![IMAGE_246](images/IMAGE_246.jpeg)

**IMAGE_246 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_247]

![IMAGE_247](images/IMAGE_247.png)

**IMAGE_247 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 122/158 
Remitter U3 RB Approved Transaction Amount 
XX 
XX 
  
Remitter U3 Approved NPCI Switching Fee 
XX 
XX 
  
Remitter U3 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Remitter U3 RB Approved NPCI Switching Fee 
XX 
XX 
  
Remitter U3 RB Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee Default-Default U2 Approved Fee -CC 
XX 
XX 
  
Payee Default-Default U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee Default-Default U2 Approved Surcharge Fee -CC 
XX 
XX 
  
Payee Default-Default U2 Approved Surcharge Fee Gst -CC 
XX 
XX 
  
Payee Default-Default U2 Approved NPCI Switching Fee -CC 
XX 
XX 
  
Payee Default-Default U2 Approved NPCI Switching Fee Gst -
CC 
XX 
XX 
  
Payee QR Code-Default U2 Approved Fee -CC 
XX 
XX 
  
Payee QR Code-Default U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee QR Code-Default U2 RB Approved Fee -CC 
XX 
XX 
  
Payee QR Code-Default U2 RB Approved Fee Gst -CC 
XX 
XX 
  
Payee QR Code-Default U2 Approved Surcharge Fee -CC 
XX 
  
XX 
Payee QR Code-Default U2 Approved Surcharge Fee Gst -CC 
XX 
  
XX 
Payee QR Code-Default U2 Approved NPCI Switching Fee -CC 
XX 
XX 
  
Payee QR Code-Default U2 Approved NPCI Switching Fee Gst 
-CC 
XX 
XX 
  
Payee QR Code-Travel U2 Approved Fee -CC 
XX 
XX 
  
Payee QR Code-Travel U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee QR Code-Travel U2 Approved Surcharge Fee -CC 
XX 
XX 
  
Payee QR Code-Travel U2 Approved Surcharge Fee Gst -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved Fee -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 RB Approved Fee -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 RB Approved Fee Gst -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved Surcharge Fee -
CC 
XX 
  
XX 
Payee Secure QR Code-Default U2 Approved Surcharge Fee 
Gst -CC 
XX 
  
XX 
Payee Secure QR Code-Default U2 Approved NPCI Switching 
Fee -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved NPCI Switching 
Fee Gst -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 RB Approved NPCI 
Switching Fee -CC 
XX 
XX 
  
Payee Secure QR Code-Default U2 RB Approved NPCI 
Switching Fee Gst -CC 
XX 
XX 
  
Payee Secure QR Code-Travel U2 Approved Fee -CC 
XX 
XX 
  
Payee Secure QR Code-Travel U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee Secure QR Code-Travel U2 Approved Surcharge Fee -
CC 
XX 
XX 
  
Payee Secure QR Code-Travel U2 Approved Surcharge Fee 
Gst -CC 
XX 
XX 
  
Payee Bharat QR Code-Default U2 Approved Fee -CC 
XX 
XX 
  
Payee Bharat QR Code-Default U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee Bharat QR Code-Default U2 Approved Surcharge Fee -
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 122**

#### TABLE_122_01 (source extraction: `page122_table01.csv`)

|Remitter U3 RB Approved Transaction Amount|XX|XX||
|---|---|---|---|
|Remitter U3 Approved NPCI Switching Fee|XX|XX||
|Remitter U3 Approved NPCI Switching Fee Gst|XX|XX||
|Remitter U3 RB Approved NPCI Switching Fee|XX|XX||
|Remitter U3 RB Approved NPCI Switching Fee Gst|XX|XX||
|Payee Default-Default U2 Approved Fee -CC|XX|XX||
|Payee Default-Default U2 Approved Fee Gst -CC|XX|XX||
|Payee Default-Default U2 Approved Surcharge Fee -CC|XX|XX||
|Payee Default-Default U2 Approved Surcharge Fee Gst -CC|XX|XX||
|Payee Default-Default U2 Approved NPCI Switching Fee -CC|XX|XX||
|Payee Default-Default U2 Approved NPCI Switching Fee Gst -<br>CC|XX|XX||
|Payee QR Code-Default U2 Approved Fee -CC|XX|XX||
|Payee QR Code-Default U2 Approved Fee Gst -CC|XX|XX||
|Payee QR Code-Default U2 RB Approved Fee -CC|XX|XX||
|Payee QR Code-Default U2 RB Approved Fee Gst -CC|XX|XX||
|Payee QR Code-Default U2 Approved Surcharge Fee -CC|XX||XX|
|Payee QR Code-Default U2 Approved Surcharge Fee Gst -CC|XX||XX|
|Payee QR Code-Default U2 Approved NPCI Switching Fee -CC|XX|XX||
|Payee QR Code-Default U2 Approved NPCI Switching Fee Gst<br>-CC|XX|XX||
|Payee QR Code-Travel U2 Approved Fee -CC|XX|XX||
|Payee QR Code-Travel U2 Approved Fee Gst -CC|XX|XX||
|Payee QR Code-Travel U2 Approved Surcharge Fee -CC|XX|XX||
|Payee QR Code-Travel U2 Approved Surcharge Fee Gst -CC|XX|XX||
|Payee Secure QR Code-Default U2 Approved Fee -CC|XX|XX||
|Payee Secure QR Code-Default U2 Approved Fee Gst -CC|XX|XX||
|Payee Secure QR Code-Default U2 RB Approved Fee -CC|XX|XX||
|Payee Secure QR Code-Default U2 RB Approved Fee Gst -CC|XX|XX||
|Payee Secure QR Code-Default U2 Approved Surcharge Fee -<br>CC|XX||XX|
|Payee Secure QR Code-Default U2 Approved Surcharge Fee<br>Gst -CC|XX||XX|
|Payee Secure QR Code-Default U2 Approved NPCI Switching<br>Fee -CC|XX|XX||
|Payee Secure QR Code-Default U2 Approved NPCI Switching<br>Fee Gst -CC|XX|XX||
|Payee Secure QR Code-Default U2 RB Approved NPCI<br>Switching Fee -CC|XX|XX||
|Payee Secure QR Code-Default U2 RB Approved NPCI<br>Switching Fee Gst -CC|XX|XX||
|Payee Secure QR Code-Travel U2 Approved Fee -CC|XX|XX||
|Payee Secure QR Code-Travel U2 Approved Fee Gst -CC|XX|XX||
|Payee Secure QR Code-Travel U2 Approved Surcharge Fee -<br>CC|XX|XX||
|Payee Secure QR Code-Travel U2 Approved Surcharge Fee<br>Gst -CC|XX|XX||
|Payee Bharat QR Code-Default U2 Approved Fee -CC|XX|XX||
|Payee Bharat QR Code-Default U2 Approved Fee Gst -CC|XX|XX||
|Payee Bharat QR Code-Default U2 Approved Surcharge Fee -|XX|XX||

<!-- PAGE 123 -->
# PAGE 123

[IMAGE_248]

![IMAGE_248](images/IMAGE_248.jpeg)

**IMAGE_248 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_249]

![IMAGE_249](images/IMAGE_249.png)

**IMAGE_249 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 123/158 
CC 
Payee Bharat QR Code-Default U2 Approved Surcharge Fee 
Gst -CC 
XX 
XX 
  
Payee Intent-Default U2 Approved Fee -CC 
XX 
XX 
  
Payee Intent-Default U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee Intent-Default U2 Approved Surcharge Fee -CC 
XX 
XX 
  
Payee Intent-Default U2 Approved Surcharge Fee Gst -CC 
XX 
XX 
  
Payee Intent-Default U2 Approved NPCI Switching Fee -CC 
XX 
XX 
  
Payee Intent-Default U2 Approved NPCI Switching Fee Gst -
CC 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved Fee -CC 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved Surcharge Fee -CC 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved Surcharge Fee Gst -
CC 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved NPCI Switching Fee 
-CC 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved NPCI Switching Fee 
Gst -CC 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved Fee -CC 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved Fee Gst -CC 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved Surcharge Fee 
-CC 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved Surcharge Fee 
Gst -CC 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee -CC 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee Gst -CC 
XX 
XX 
  
Payee Online Static QR Code-Default U2 Approved Surcharge 
Fee -CC 
XX 
XX 
  
Payee Online Static QR Code-Default U2 Approved Surcharge 
Fee Gst -CC 
XX 
XX 
  
Payee Default-Corporate disbursement U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Payee Default-Corporate disbursement U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Payee Default-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee Default-LiteFin U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee QR Code-Default U2 Approved Fee 
XX 
  
XX 
Payee QR Code-Default U2 Approved Fee Gst 
XX 
  
XX 
Payee QR Code-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee QR Code-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee QR Code-Default U2 RB Approved NPCI Switching Fee 
XX 
XX 
  
Payee QR Code-Default U2 RB Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Payee QR Code-Travel U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee QR Code-Travel U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee QR Code-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee QR Code-LiteFin U2 Approved NPCI Switching Fee Gst 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 123**

#### TABLE_123_01 (source extraction: `page123_table01.csv`)

|CC||||
|---|---|---|---|
|Payee Bharat QR Code-Default U2 Approved Surcharge Fee<br>Gst -CC|XX|XX||
|Payee Intent-Default U2 Approved Fee -CC|XX|XX||
|Payee Intent-Default U2 Approved Fee Gst -CC|XX|XX||
|Payee Intent-Default U2 Approved Surcharge Fee -CC|XX|XX||
|Payee Intent-Default U2 Approved Surcharge Fee Gst -CC|XX|XX||
|Payee Intent-Default U2 Approved NPCI Switching Fee -CC|XX|XX||
|Payee Intent-Default U2 Approved NPCI Switching Fee Gst -<br>CC|XX|XX||
|Payee Secure Intent-Default U2 Approved Fee -CC|XX|XX||
|Payee Secure Intent-Default U2 Approved Fee Gst -CC|XX|XX||
|Payee Secure Intent-Default U2 Approved Surcharge Fee -CC|XX|XX||
|Payee Secure Intent-Default U2 Approved Surcharge Fee Gst -<br>CC|XX|XX||
|Payee Secure Intent-Default U2 Approved NPCI Switching Fee<br>-CC|XX|XX||
|Payee Secure Intent-Default U2 Approved NPCI Switching Fee<br>Gst -CC|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved Fee -CC|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved Fee Gst -CC|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved Surcharge Fee<br>-CC|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved Surcharge Fee<br>Gst -CC|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee -CC|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee Gst -CC|XX|XX||
|Payee Online Static QR Code-Default U2 Approved Surcharge<br>Fee -CC|XX|XX||
|Payee Online Static QR Code-Default U2 Approved Surcharge<br>Fee Gst -CC|XX|XX||
|Payee Default-Corporate disbursement U2 Approved NPCI<br>Switching Fee|XX|XX||
|Payee Default-Corporate disbursement U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Payee Default-LiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Payee Default-LiteFin U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee QR Code-Default U2 Approved Fee|XX||XX|
|Payee QR Code-Default U2 Approved Fee Gst|XX||XX|
|Payee QR Code-Default U2 Approved NPCI Switching Fee|XX|XX||
|Payee QR Code-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee QR Code-Default U2 RB Approved NPCI Switching Fee|XX|XX||
|Payee QR Code-Default U2 RB Approved NPCI Switching Fee<br>Gst|XX|XX||
|Payee QR Code-Travel U2 Approved NPCI Switching Fee|XX|XX||
|Payee QR Code-Travel U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee QR Code-LiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Payee QR Code-LiteFin U2 Approved NPCI Switching Fee Gst|XX|XX||

<!-- PAGE 124 -->
# PAGE 124

[IMAGE_250]

![IMAGE_250](images/IMAGE_250.jpeg)

**IMAGE_250 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_251]

![IMAGE_251](images/IMAGE_251.png)

**IMAGE_251 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 124/158 
Payee QR Code-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee QR Code-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved Fee 
XX 
  
XX 
Payee Secure QR Code-Default U2 Approved Fee Gst 
XX 
  
XX 
Payee Secure QR Code-Default U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Payee Secure QR Code-Default U2 RB Approved NPCI 
Switching Fee 
XX 
XX 
  
Payee Secure QR Code-Default U2 RB Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Payee Secure QR Code-Travel U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Payee Secure QR Code-Travel U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Payee Secure QR Code-Telecom U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Payee Secure QR Code-Telecom U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Payee Secure QR Code-LiteFin U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Payee Secure QR Code-LiteFin U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Payee Secure QR Code-Default U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Payee Bharat QR Code-Default U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Payee Bharat QR Code-Default U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Payee Bharat QR Code-LiteFin U2 Approved NPCI Switching 
Fee 
XX 
XX 
  
Payee Bharat QR Code-LiteFin U2 Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Payee Intent-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee Intent-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee Intent-Travel U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee Intent-Travel U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee Intent-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee Intent-LiteFin U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee Secure Intent-Default U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Payee Secure Intent-Default U2 RB Approved NPCI Switching 
Fee 
XX 
XX 
  
Payee Secure Intent-Default U2 RB Approved NPCI Switching 
Fee Gst 
XX 
XX 
  
Payee Secure Intent-LiteFin U2 Approved NPCI Switching Fee 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 124**

#### TABLE_124_01 (source extraction: `page124_table01.csv`)

|Payee QR Code-Default U2 Approved NPCI Switching Fee|XX|XX||
|---|---|---|---|
|Payee QR Code-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee Secure QR Code-Default U2 Approved Fee|XX||XX|
|Payee Secure QR Code-Default U2 Approved Fee Gst|XX||XX|
|Payee Secure QR Code-Default U2 Approved NPCI Switching<br>Fee|XX|XX||
|Payee Secure QR Code-Default U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Payee Secure QR Code-Default U2 RB Approved NPCI<br>Switching Fee|XX|XX||
|Payee Secure QR Code-Default U2 RB Approved NPCI<br>Switching Fee Gst|XX|XX||
|Payee Secure QR Code-Travel U2 Approved NPCI Switching<br>Fee|XX|XX||
|Payee Secure QR Code-Travel U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Payee Secure QR Code-Telecom U2 Approved NPCI<br>Switching Fee|XX|XX||
|Payee Secure QR Code-Telecom U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Payee Secure QR Code-LiteFin U2 Approved NPCI Switching<br>Fee|XX|XX||
|Payee Secure QR Code-LiteFin U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Payee Secure QR Code-Default U2 Approved NPCI Switching<br>Fee|XX|XX||
|Payee Secure QR Code-Default U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Payee Bharat QR Code-Default U2 Approved NPCI Switching<br>Fee|XX|XX||
|Payee Bharat QR Code-Default U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Payee Bharat QR Code-LiteFin U2 Approved NPCI Switching<br>Fee|XX|XX||
|Payee Bharat QR Code-LiteFin U2 Approved NPCI Switching<br>Fee Gst|XX|XX||
|Payee Intent-Default U2 Approved NPCI Switching Fee|XX|XX||
|Payee Intent-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee Intent-Travel U2 Approved NPCI Switching Fee|XX|XX||
|Payee Intent-Travel U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee Intent-LiteFin U2 Approved NPCI Switching Fee|XX|XX||
|Payee Intent-LiteFin U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee Secure Intent-Default U2 Approved NPCI Switching Fee|XX|XX||
|Payee Secure Intent-Default U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|Payee Secure Intent-Default U2 RB Approved NPCI Switching<br>Fee|XX|XX||
|Payee Secure Intent-Default U2 RB Approved NPCI Switching<br>Fee Gst|XX|XX||
|Payee Secure Intent-LiteFin U2 Approved NPCI Switching Fee|XX|XX||

<!-- PAGE 125 -->
# PAGE 125

[IMAGE_252]

![IMAGE_252](images/IMAGE_252.jpeg)

**IMAGE_252 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_253]

![IMAGE_253](images/IMAGE_253.png)

**IMAGE_253 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 125/158 
Payee Secure Intent-LiteFin U2 Approved NPCI Switching Fee 
Gst 
XX 
XX 
  
Payee SDK-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee SDK-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee Man-Government Voucher U2 Approved Fee 
XX 
XX 
  
Payee FIR-Default U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee FIR-Default U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee 
XX 
XX 
  
Payee Dynamic Qr Code-Default U2 Approved NPCI 
Switching Fee Gst 
XX 
XX 
  
Payee DefaultDefault U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee DefaultDefault U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee DefaultDefault U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee DefaultDefault U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee DefaultDefault U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee DefaultDefault U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee U2 Approved Fee 
XX 
  
XX 
Payee U2 Approved Fee Gst 
XX 
  
XX 
Payee U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee U2 RB Approved NPCI Switching Fee 
XX 
XX 
  
Payee U2 RB Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee SOD U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee SOD U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Payee UOD U2 Approved Fee 
XX 
XX 
  
Payee UOD U2 Approved Fee Gst 
XX 
XX 
  
UOD U2 Approved Payer PSP Fee -Paid 
XX 
XX 
  
UOD U2 Approved Payer PSP Fee Gst -Paid 
XX 
XX 
  
Payee UOD U2 Approved NPCI Switching Fee 
XX 
XX 
  
Payee UOD U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Secure QR Code-Default U2 Approved Payer PSP Fee -CC -
Received 
XX 
  
XX 
Secure QR Code-Default U2 Approved Payer PSP Fee Gst -CC 
-Received 
XX 
  
XX 
Default-SEBI U2 Approved Payer PSP Fee -Received 
XX 
XX 
  
Default-G Sec through RBI RDS U2 Approved Payer PSP Fee -
Received 
XX 
XX 
  
QR Code-Default U2 Approved Payer PSP Fee -Received 
XX 
XX 
  
QR Code-Default U2 Approved Payer PSP Fee -Received 
XX 
XX 
  
Secure QR Code-Default U2 Approved Payer PSP Fee -
Received 
XX 
XX 
  
Secure QR Code-Default U2 RB Approved Payer PSP Fee -
Received 
XX 
XX 
  
Secure QR Code-Travel U2 Approved Payer PSP Fee -
Received 
XX 
XX 
  
Secure QR Code-Default U2 Approved Payer PSP Fee -
Received 
XX 
XX 
  
Bharat QR Code-Default U2 Approved Payer PSP Fee -
Received 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 125**

#### TABLE_125_01 (source extraction: `page125_table01.csv`)

|Payee Secure Intent-LiteFin U2 Approved NPCI Switching Fee<br>Gst|XX|XX||
|---|---|---|---|
|Payee SDK-Default U2 Approved NPCI Switching Fee|XX|XX||
|Payee SDK-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee Man-Government Voucher U2 Approved Fee|XX|XX||
|Payee FIR-Default U2 Approved NPCI Switching Fee|XX|XX||
|Payee FIR-Default U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee|XX|XX||
|Payee Dynamic Qr Code-Default U2 Approved NPCI<br>Switching Fee Gst|XX|XX||
|Payee DefaultDefault U2 Approved NPCI Switching Fee|XX|XX||
|Payee DefaultDefault U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee DefaultDefault U2 Approved NPCI Switching Fee|XX|XX||
|Payee DefaultDefault U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee DefaultDefault U2 Approved NPCI Switching Fee|XX|XX||
|Payee DefaultDefault U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee U2 Approved Fee|XX||XX|
|Payee U2 Approved Fee Gst|XX||XX|
|Payee U2 Approved NPCI Switching Fee|XX|XX||
|Payee U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee U2 RB Approved NPCI Switching Fee|XX|XX||
|Payee U2 RB Approved NPCI Switching Fee Gst|XX|XX||
|Payee SOD U2 Approved NPCI Switching Fee|XX|XX||
|Payee SOD U2 Approved NPCI Switching Fee Gst|XX|XX||
|Payee UOD U2 Approved Fee|XX|XX||
|Payee UOD U2 Approved Fee Gst|XX|XX||
|UOD U2 Approved Payer PSP Fee -Paid|XX|XX||
|UOD U2 Approved Payer PSP Fee Gst -Paid|XX|XX||
|Payee UOD U2 Approved NPCI Switching Fee|XX|XX||
|Payee UOD U2 Approved NPCI Switching Fee Gst|XX|XX||
|Secure QR Code-Default U2 Approved Payer PSP Fee -CC -<br>Received|XX||XX|
|Secure QR Code-Default U2 Approved Payer PSP Fee Gst -CC<br>-Received|XX||XX|
|Default-SEBI U2 Approved Payer PSP Fee -Received|XX|XX||
|Default-G Sec through RBI RDS U2 Approved Payer PSP Fee -<br>Received|XX|XX||
|QR Code-Default U2 Approved Payer PSP Fee -Received|XX|XX||
|QR Code-Default U2 Approved Payer PSP Fee -Received|XX|XX||
|Secure QR Code-Default U2 Approved Payer PSP Fee -<br>Received|XX|XX||
|Secure QR Code-Default U2 RB Approved Payer PSP Fee -<br>Received|XX|XX||
|Secure QR Code-Travel U2 Approved Payer PSP Fee -<br>Received|XX|XX||
|Secure QR Code-Default U2 Approved Payer PSP Fee -<br>Received|XX|XX||
|Bharat QR Code-Default U2 Approved Payer PSP Fee -<br>Received|XX|XX||

<!-- PAGE 126 -->
# PAGE 126

[IMAGE_254]

![IMAGE_254](images/IMAGE_254.jpeg)

**IMAGE_254 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_255]

![IMAGE_255](images/IMAGE_255.png)

**IMAGE_255 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 126/158 
Intent-Default U2 Approved Payer PSP Fee -Received 
XX 
XX 
  
Secure Intent-Default U2 Approved Payer PSP Fee -Received 
XX 
XX 
  
Man-SI U2 Approved Payer PSP Fee -Received 
XX 
XX 
  
Man-Government Voucher U2 Approved Payer PSP Fee -
Received 
XX 
XX 
  
Dynamic Qr Code-Default U2 Approved Payer PSP Fee -
Received 
XX 
XX 
  
Dynamic Qr Code-Default U2 Approved Payer PSP Fee -
Received 
XX 
XX 
  
U2 Approved Payer PSP Fee -Received 
XX 
XX 
  
U2 RB Approved Payer PSP Fee -Received 
XX 
XX 
  
Default-LiteReg U3 Approved Payer PSP Fee -Received 
XX 
XX 
  
Default-LiteTopup U3 Approved Payer PSP Fee -Received 
XX 
XX 
  
QR Code-Default U3 Approved Payer PSP Fee -Received 
XX 
XX 
  
QR Code-Default U3 Approved Payer PSP Fee -Received 
XX 
XX 
  
Secure QR Code-Default U3 Approved Payer PSP Fee -
Received 
XX 
  
XX 
Secure QR Code-Default U3 Approved Payer PSP Fee Gst -
Received 
XX 
  
XX 
Secure QR Code-Default U3 RB Approved Payer PSP Fee -
Received 
XX 
  
XX 
Secure QR Code-Default U3 Approved Payer PSP Fee -
Received 
XX 
  
XX 
Secure QR Code-Default U3 RB Approved Payer PSP Fee -
Received 
XX 
  
XX 
U3 Approved Payer PSP Fee -Received 
XX 
  
XX 
U3 Approved Payer PSP Fee Gst -Received 
XX 
  
XX 
U3 RB Approved Payer PSP Fee -Received 
XX 
  
XX 
U3 RB Approved Payer PSP Fee Gst -Received 
XX 
  
XX 
Beneficiary Default-Default U2 Approved Transaction Amount 
-CC 
XX 
  
XX 
Beneficiary QR Code-Default U2 Approved Transaction 
Amount -CC 
XX 
  
XX 
Beneficiary QR Code-Default U2 RB Approved Transaction 
Amount -CC 
XX 
  
XX 
Beneficiary QR Code-Travel U2 Approved Transaction Amount 
-CC 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 Approved 
Transaction Amount -CC 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 RB Approved 
Transaction Amount -CC 
XX 
  
XX 
Beneficiary Secure QR Code-Travel U2 Approved Transaction 
Amount -CC 
XX 
  
XX 
Beneficiary Bharat QR Code-Default U2 Approved 
Transaction Amount -CC 
XX 
  
XX 
Beneficiary Intent-Default U2 Approved Transaction Amount -
CC 
XX 
  
XX 
Beneficiary Secure Intent-Default U2 Approved Transaction 
Amount -CC 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U2 Approved 
XX 
  
XX
```

**Machine-readable table extraction(s) for PAGE 126**

#### TABLE_126_01 (source extraction: `page126_table01.csv`)

|Intent-Default U2 Approved Payer PSP Fee -Received|XX|XX||
|---|---|---|---|
|Secure Intent-Default U2 Approved Payer PSP Fee -Received|XX|XX||
|Man-SI U2 Approved Payer PSP Fee -Received|XX|XX||
|Man-Government Voucher U2 Approved Payer PSP Fee -<br>Received|XX|XX||
|Dynamic Qr Code-Default U2 Approved Payer PSP Fee -<br>Received|XX|XX||
|Dynamic Qr Code-Default U2 Approved Payer PSP Fee -<br>Received|XX|XX||
|U2 Approved Payer PSP Fee -Received|XX|XX||
|U2 RB Approved Payer PSP Fee -Received|XX|XX||
|Default-LiteReg U3 Approved Payer PSP Fee -Received|XX|XX||
|Default-LiteTopup U3 Approved Payer PSP Fee -Received|XX|XX||
|QR Code-Default U3 Approved Payer PSP Fee -Received|XX|XX||
|QR Code-Default U3 Approved Payer PSP Fee -Received|XX|XX||
|Secure QR Code-Default U3 Approved Payer PSP Fee -<br>Received|XX||XX|
|Secure QR Code-Default U3 Approved Payer PSP Fee Gst -<br>Received|XX||XX|
|Secure QR Code-Default U3 RB Approved Payer PSP Fee -<br>Received|XX||XX|
|Secure QR Code-Default U3 Approved Payer PSP Fee -<br>Received|XX||XX|
|Secure QR Code-Default U3 RB Approved Payer PSP Fee -<br>Received|XX||XX|
|U3 Approved Payer PSP Fee -Received|XX||XX|
|U3 Approved Payer PSP Fee Gst -Received|XX||XX|
|U3 RB Approved Payer PSP Fee -Received|XX||XX|
|U3 RB Approved Payer PSP Fee Gst -Received|XX||XX|
|Beneficiary Default-Default U2 Approved Transaction Amount<br>-CC|XX||XX|
|Beneficiary QR Code-Default U2 Approved Transaction<br>Amount -CC|XX||XX|
|Beneficiary QR Code-Default U2 RB Approved Transaction<br>Amount -CC|XX||XX|
|Beneficiary QR Code-Travel U2 Approved Transaction Amount<br>-CC|XX||XX|
|Beneficiary Secure QR Code-Default U2 Approved<br>Transaction Amount -CC|XX||XX|
|Beneficiary Secure QR Code-Default U2 RB Approved<br>Transaction Amount -CC|XX||XX|
|Beneficiary Secure QR Code-Travel U2 Approved Transaction<br>Amount -CC|XX||XX|
|Beneficiary Bharat QR Code-Default U2 Approved<br>Transaction Amount -CC|XX||XX|
|Beneficiary Intent-Default U2 Approved Transaction Amount -<br>CC|XX||XX|
|Beneficiary Secure Intent-Default U2 Approved Transaction<br>Amount -CC|XX||XX|
|Beneficiary Dynamic Qr Code-Default U2 Approved|XX||XX|

<!-- PAGE 127 -->
# PAGE 127

[IMAGE_256]

![IMAGE_256](images/IMAGE_256.jpeg)

**IMAGE_256 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_257]

![IMAGE_257](images/IMAGE_257.png)

**IMAGE_257 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 127/158 
Transaction Amount -CC 
Beneficiary Online Static QR Code-Default U2 Approved 
Transaction Amount -CC 
XX 
  
XX 
Beneficiary Default-Education U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Default-BBPS U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Default-Corporate disbursement U2 Approved 
Fee 
XX 
  
XX 
Beneficiary Default-Corporate disbursement U2 Approved 
Fee Gst 
XX 
  
XX 
Beneficiary Default-Corporate disbursement U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Default-LiteFin U2 Approved Fee 
XX 
  
XX 
Beneficiary Default-LiteFin U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-LiteFin U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Default-Default U2 Approved Fee 
XX 
  
XX 
Beneficiary Default-Default U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-Default U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary QR Code-Default U2 Approved Fee 
XX 
  
XX 
Beneficiary QR Code-Default U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary QR Code-Default U2 RB Approved Fee 
XX 
  
XX 
Beneficiary QR Code-Default U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary QR Code-Default U2 RB Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary QR Code-Travel U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary QR Code-Telecom U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary QR Code-LiteFin U2 Approved Fee 
XX 
  
XX 
Beneficiary QR Code-LiteFin U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary QR Code-LiteFin U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary QR Code-Default U2 Approved Fee 
XX 
  
XX 
Beneficiary QR Code-Default U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary QR Code-Default U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 RB Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 RB Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Secure QR Code-Travel U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Secure QR Code-Telecom U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Secure QR Code-LiteFin U2 Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-LiteFin U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure QR Code-LiteFin U2 Approved Transaction 
XX 
  
XX
```

**Machine-readable table extraction(s) for PAGE 127**

#### TABLE_127_01 (source extraction: `page127_table01.csv`)

|Transaction Amount -CC||||
|---|---|---|---|
|Beneficiary Online Static QR Code-Default U2 Approved<br>Transaction Amount -CC|XX||XX|
|Beneficiary Default-Education U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Default-BBPS U2 Approved Transaction Amount|XX||XX|
|Beneficiary Default-Corporate disbursement U2 Approved<br>Fee|XX||XX|
|Beneficiary Default-Corporate disbursement U2 Approved<br>Fee Gst|XX||XX|
|Beneficiary Default-Corporate disbursement U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Default-LiteFin U2 Approved Fee|XX||XX|
|Beneficiary Default-LiteFin U2 Approved Fee Gst|XX||XX|
|Beneficiary Default-LiteFin U2 Approved Transaction Amount|XX||XX|
|Beneficiary Default-Default U2 Approved Fee|XX||XX|
|Beneficiary Default-Default U2 Approved Fee Gst|XX||XX|
|Beneficiary Default-Default U2 Approved Transaction Amount|XX||XX|
|Beneficiary QR Code-Default U2 Approved Fee|XX||XX|
|Beneficiary QR Code-Default U2 Approved Fee Gst|XX||XX|
|Beneficiary QR Code-Default U2 RB Approved Fee|XX||XX|
|Beneficiary QR Code-Default U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary QR Code-Default U2 RB Approved Transaction<br>Amount|XX||XX|
|Beneficiary QR Code-Travel U2 Approved Transaction Amount|XX||XX|
|Beneficiary QR Code-Telecom U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary QR Code-LiteFin U2 Approved Fee|XX||XX|
|Beneficiary QR Code-LiteFin U2 Approved Fee Gst|XX||XX|
|Beneficiary QR Code-LiteFin U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary QR Code-Default U2 Approved Fee|XX||XX|
|Beneficiary QR Code-Default U2 Approved Fee Gst|XX||XX|
|Beneficiary QR Code-Default U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Secure QR Code-Default U2 Approved Fee|XX||XX|
|Beneficiary Secure QR Code-Default U2 Approved Fee Gst|XX||XX|
|Beneficiary Secure QR Code-Default U2 RB Approved Fee|XX||XX|
|Beneficiary Secure QR Code-Default U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Secure QR Code-Default U2 RB Approved<br>Transaction Amount|XX||XX|
|Beneficiary Secure QR Code-Travel U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Secure QR Code-Telecom U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Secure QR Code-LiteFin U2 Approved Fee|XX||XX|
|Beneficiary Secure QR Code-LiteFin U2 Approved Fee Gst|XX||XX|
|Beneficiary Secure QR Code-LiteFin U2 Approved Transaction|XX||XX|

<!-- PAGE 128 -->
# PAGE 128

[IMAGE_258]

![IMAGE_258](images/IMAGE_258.jpeg)

**IMAGE_258 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_259]

![IMAGE_259](images/IMAGE_259.png)

**IMAGE_259 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 128/158 
Amount 
Beneficiary Secure QR Code-Default U2 Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure QR Code-Default U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Bharat QR Code-Default U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Bharat QR Code-LiteFin U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Intent-Default U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Intent-Default U2 RB Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Intent-Travel U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Intent-LiteFin U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Secure Intent-Default U2 Approved Fee 
XX 
  
XX 
Beneficiary Secure Intent-Default U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure Intent-Default U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Secure Intent-Default U2 RB Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Secure Intent-LiteFin U2 Approved Fee 
XX 
  
XX 
Beneficiary Secure Intent-LiteFin U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure Intent-LiteFin U2 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary SDK-Default U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Man-Government Voucher U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Man-Government Voucher U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary FIR-Default U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U2 Approved Fee 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U2 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Fee 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Fee 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Fee 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary DefaultDefault U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Fin-BBPS U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary U2 Approved Fee 
XX 
  
XX 
Beneficiary U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary U2 RB Approved Fee 
XX 
  
XX 
Beneficiary U2 Approved Transaction Amount 
XX 
  
XX
```

**Machine-readable table extraction(s) for PAGE 128**

#### TABLE_128_01 (source extraction: `page128_table01.csv`)

|Amount||||
|---|---|---|---|
|Beneficiary Secure QR Code-Default U2 Approved Fee|XX||XX|
|Beneficiary Secure QR Code-Default U2 Approved Fee Gst|XX||XX|
|Beneficiary Secure QR Code-Default U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Bharat QR Code-Default U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Bharat QR Code-LiteFin U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Intent-Default U2 Approved Transaction Amount|XX||XX|
|Beneficiary Intent-Default U2 RB Approved Transaction<br>Amount|XX||XX|
|Beneficiary Intent-Travel U2 Approved Transaction Amount|XX||XX|
|Beneficiary Intent-LiteFin U2 Approved Transaction Amount|XX||XX|
|Beneficiary Secure Intent-Default U2 Approved Fee|XX||XX|
|Beneficiary Secure Intent-Default U2 Approved Fee Gst|XX||XX|
|Beneficiary Secure Intent-Default U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Secure Intent-Default U2 RB Approved<br>Transaction Amount|XX||XX|
|Beneficiary Secure Intent-LiteFin U2 Approved Fee|XX||XX|
|Beneficiary Secure Intent-LiteFin U2 Approved Fee Gst|XX||XX|
|Beneficiary Secure Intent-LiteFin U2 Approved Transaction<br>Amount|XX||XX|
|Beneficiary SDK-Default U2 Approved Transaction Amount|XX||XX|
|Beneficiary Man-Government Voucher U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Man-Government Voucher U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary FIR-Default U2 Approved Transaction Amount|XX||XX|
|Beneficiary Dynamic Qr Code-Default U2 Approved Fee|XX||XX|
|Beneficiary Dynamic Qr Code-Default U2 Approved Fee Gst|XX||XX|
|Beneficiary Dynamic Qr Code-Default U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Dynamic Qr Code-Default U2 Approved<br>Transaction Amount|XX||XX|
|Beneficiary DefaultDefault U2 Approved Fee|XX||XX|
|Beneficiary DefaultDefault U2 Approved Fee Gst|XX||XX|
|Beneficiary DefaultDefault U2 Approved Transaction Amount|XX||XX|
|Beneficiary DefaultDefault U2 Approved Fee|XX||XX|
|Beneficiary DefaultDefault U2 Approved Fee Gst|XX||XX|
|Beneficiary DefaultDefault U2 Approved Transaction Amount|XX||XX|
|Beneficiary DefaultDefault U2 Approved Fee|XX||XX|
|Beneficiary DefaultDefault U2 Approved Fee Gst|XX||XX|
|Beneficiary DefaultDefault U2 Approved Transaction Amount|XX||XX|
|Beneficiary Fin-BBPS U2 Approved Transaction Amount|XX||XX|
|Beneficiary U2 Approved Fee|XX||XX|
|Beneficiary U2 Approved Fee Gst|XX||XX|
|Beneficiary U2 RB Approved Fee|XX||XX|
|Beneficiary U2 Approved Transaction Amount|XX||XX|

<!-- PAGE 129 -->
# PAGE 129

[IMAGE_260]

![IMAGE_260](images/IMAGE_260.jpeg)

**IMAGE_260 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_261]

![IMAGE_261](images/IMAGE_261.png)

**IMAGE_261 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 129/158 
Beneficiary U2 RB Approved Transaction Amount 
XX 
  
XX 
Beneficiary U2 Approved NPCI Switching Fee 
XX 
XX 
  
Beneficiary U2 Approved NPCI Switching Fee Gst 
XX 
XX 
  
Beneficiary SOD U2 Approved Fee 
XX 
  
XX 
Beneficiary SOD U2 Approved Fee Gst 
XX 
  
XX 
Beneficiary SOD U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary UOD U2 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Default-Travel U3 Approved Fee 
XX 
  
XX 
Beneficiary Default-Travel U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-Travel U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Default-Corporate disbursement U3 Approved 
Fee 
XX 
  
XX 
Beneficiary Default-Corporate disbursement U3 Approved 
Fee Gst 
XX 
  
XX 
Beneficiary Default-Corporate disbursement U3 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Default-LiteReg U3 Approved Fee 
XX 
  
XX 
Beneficiary Default-LiteReg U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-LiteReg U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Default-LiteTopup U3 Approved Fee 
XX 
  
XX 
Beneficiary Default-LiteTopup U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-LiteTopup U3 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Default-LiteDereg U3 Approved Fee 
XX 
  
XX 
Beneficiary Default-LiteDereg U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-LiteDereg U3 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Default-LiteFin U3 Approved Fee 
XX 
  
XX 
Beneficiary Default-LiteFin U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-LiteFin U3 RB Approved Fee 
XX 
  
XX 
Beneficiary Default-LiteFin U3 RB Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-LiteFin U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Default-LiteFin U3 RB Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Default-Default U3 Approved Fee 
XX 
  
XX 
Beneficiary Default-Default U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Default-Default U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary QR Code-Default U3 Approved Fee 
XX 
  
XX 
Beneficiary QR Code-Default U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary QR Code-Default U3 RB Approved Fee 
XX 
  
XX 
Beneficiary QR Code-Default U3 RB Approved Fee Gst 
XX 
  
XX 
Beneficiary QR Code-Default U3 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary QR Code-Default U3 RB Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary QR Code-LiteFin U3 Approved Fee 
XX 
  
XX 
Beneficiary QR Code-LiteFin U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary QR Code-LiteFin U3 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary QR Code-Default U3 Approved Fee 
XX 
  
XX
```

**Machine-readable table extraction(s) for PAGE 129**

#### TABLE_129_01 (source extraction: `page129_table01.csv`)

|Beneficiary U2 RB Approved Transaction Amount|XX||XX|
|---|---|---|---|
|Beneficiary U2 Approved NPCI Switching Fee|XX|XX||
|Beneficiary U2 Approved NPCI Switching Fee Gst|XX|XX||
|Beneficiary SOD U2 Approved Fee|XX||XX|
|Beneficiary SOD U2 Approved Fee Gst|XX||XX|
|Beneficiary SOD U2 Approved Transaction Amount|XX||XX|
|Beneficiary UOD U2 Approved Transaction Amount|XX||XX|
|Beneficiary Default-Travel U3 Approved Fee|XX||XX|
|Beneficiary Default-Travel U3 Approved Fee Gst|XX||XX|
|Beneficiary Default-Travel U3 Approved Transaction Amount|XX||XX|
|Beneficiary Default-Corporate disbursement U3 Approved<br>Fee|XX||XX|
|Beneficiary Default-Corporate disbursement U3 Approved<br>Fee Gst|XX||XX|
|Beneficiary Default-Corporate disbursement U3 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Default-LiteReg U3 Approved Fee|XX||XX|
|Beneficiary Default-LiteReg U3 Approved Fee Gst|XX||XX|
|Beneficiary Default-LiteReg U3 Approved Transaction Amount|XX||XX|
|Beneficiary Default-LiteTopup U3 Approved Fee|XX||XX|
|Beneficiary Default-LiteTopup U3 Approved Fee Gst|XX||XX|
|Beneficiary Default-LiteTopup U3 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Default-LiteDereg U3 Approved Fee|XX||XX|
|Beneficiary Default-LiteDereg U3 Approved Fee Gst|XX||XX|
|Beneficiary Default-LiteDereg U3 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Default-LiteFin U3 Approved Fee|XX||XX|
|Beneficiary Default-LiteFin U3 Approved Fee Gst|XX||XX|
|Beneficiary Default-LiteFin U3 RB Approved Fee|XX||XX|
|Beneficiary Default-LiteFin U3 RB Approved Fee Gst|XX||XX|
|Beneficiary Default-LiteFin U3 Approved Transaction Amount|XX||XX|
|Beneficiary Default-LiteFin U3 RB Approved Transaction<br>Amount|XX||XX|
|Beneficiary Default-Default U3 Approved Fee|XX||XX|
|Beneficiary Default-Default U3 Approved Fee Gst|XX||XX|
|Beneficiary Default-Default U3 Approved Transaction Amount|XX||XX|
|Beneficiary QR Code-Default U3 Approved Fee|XX||XX|
|Beneficiary QR Code-Default U3 Approved Fee Gst|XX||XX|
|Beneficiary QR Code-Default U3 RB Approved Fee|XX||XX|
|Beneficiary QR Code-Default U3 RB Approved Fee Gst|XX||XX|
|Beneficiary QR Code-Default U3 Approved Transaction<br>Amount|XX||XX|
|Beneficiary QR Code-Default U3 RB Approved Transaction<br>Amount|XX||XX|
|Beneficiary QR Code-LiteFin U3 Approved Fee|XX||XX|
|Beneficiary QR Code-LiteFin U3 Approved Fee Gst|XX||XX|
|Beneficiary QR Code-LiteFin U3 Approved Transaction<br>Amount|XX||XX|
|Beneficiary QR Code-Default U3 Approved Fee|XX||XX|

<!-- PAGE 130 -->
# PAGE 130

[IMAGE_262]

![IMAGE_262](images/IMAGE_262.jpeg)

**IMAGE_262 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_263]

![IMAGE_263](images/IMAGE_263.png)

**IMAGE_263 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 130/158 
Beneficiary QR Code-Default U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary QR Code-Default U3 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 RB Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 RB Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 RB Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Secure QR Code-LiteFin U3 Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-LiteFin U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure QR Code-LiteFin U3 Approved Transaction 
Amount 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 Approved Fee 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Secure QR Code-Default U3 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary FIR-Default U3 Approved Fee 
XX 
  
XX 
Beneficiary FIR-Default U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary FIR-Default U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U3 Approved Fee 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary Dynamic Qr Code-Default U3 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary Online Static QR Code-Default U3 Approved Fee 
XX 
  
XX 
Beneficiary Online Static QR Code-Default U3 Approved Fee 
Gst 
XX 
  
XX 
Beneficiary Online Static QR Code-Default U3 Approved 
Transaction Amount 
XX 
  
XX 
Beneficiary DefaultDefault U3 Approved Fee 
XX 
  
XX 
Beneficiary DefaultDefault U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary DefaultDefault U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary DefaultDefault U3 Approved Fee 
XX 
  
XX 
Beneficiary DefaultDefault U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary DefaultDefault U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary U3 Approved Fee 
XX 
  
XX 
Beneficiary U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary U3 RB Approved Fee 
XX 
  
XX 
Beneficiary U3 RB Approved Fee Gst 
XX 
  
XX 
Beneficiary U3 Approved Transaction Amount 
XX 
  
XX 
Beneficiary U3 RB Approved Transaction Amount 
XX 
  
XX 
Beneficiary SOD U3 Approved Fee 
XX 
  
XX 
Beneficiary SOD U3 Approved Fee Gst 
XX 
  
XX 
Beneficiary SOD U3 Approved Transaction Amount 
XX 
  
XX 
FOR NON – FINANCIAL MANDATE/OD TXNs 
  
  
  
Remitter Default-SEBI U2 Approved Fee 
XX 
  
XX 
Remitter Default-SEBI U2 Approved Fee Gst 
XX 
  
XX 
Remitter Default-SI U2 Approved Fee 
XX 
  
XX
```

**Machine-readable table extraction(s) for PAGE 130**

#### TABLE_130_01 (source extraction: `page130_table01.csv`)

|Beneficiary QR Code-Default U3 Approved Fee Gst|XX||XX|
|---|---|---|---|
|Beneficiary QR Code-Default U3 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Secure QR Code-Default U3 Approved Fee|XX||XX|
|Beneficiary Secure QR Code-Default U3 Approved Fee Gst|XX||XX|
|Beneficiary Secure QR Code-Default U3 RB Approved Fee|XX||XX|
|Beneficiary Secure QR Code-Default U3 RB Approved Fee Gst|XX||XX|
|Beneficiary Secure QR Code-Default U3 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Secure QR Code-Default U3 RB Approved<br>Transaction Amount|XX||XX|
|Beneficiary Secure QR Code-LiteFin U3 Approved Fee|XX||XX|
|Beneficiary Secure QR Code-LiteFin U3 Approved Fee Gst|XX||XX|
|Beneficiary Secure QR Code-LiteFin U3 Approved Transaction<br>Amount|XX||XX|
|Beneficiary Secure QR Code-Default U3 Approved Fee|XX||XX|
|Beneficiary Secure QR Code-Default U3 Approved Fee Gst|XX||XX|
|Beneficiary Secure QR Code-Default U3 Approved<br>Transaction Amount|XX||XX|
|Beneficiary FIR-Default U3 Approved Fee|XX||XX|
|Beneficiary FIR-Default U3 Approved Fee Gst|XX||XX|
|Beneficiary FIR-Default U3 Approved Transaction Amount|XX||XX|
|Beneficiary Dynamic Qr Code-Default U3 Approved Fee|XX||XX|
|Beneficiary Dynamic Qr Code-Default U3 Approved Fee Gst|XX||XX|
|Beneficiary Dynamic Qr Code-Default U3 Approved<br>Transaction Amount|XX||XX|
|Beneficiary Online Static QR Code-Default U3 Approved Fee|XX||XX|
|Beneficiary Online Static QR Code-Default U3 Approved Fee<br>Gst|XX||XX|
|Beneficiary Online Static QR Code-Default U3 Approved<br>Transaction Amount|XX||XX|
|Beneficiary DefaultDefault U3 Approved Fee|XX||XX|
|Beneficiary DefaultDefault U3 Approved Fee Gst|XX||XX|
|Beneficiary DefaultDefault U3 Approved Transaction Amount|XX||XX|
|Beneficiary DefaultDefault U3 Approved Fee|XX||XX|
|Beneficiary DefaultDefault U3 Approved Fee Gst|XX||XX|
|Beneficiary DefaultDefault U3 Approved Transaction Amount|XX||XX|
|Beneficiary U3 Approved Fee|XX||XX|
|Beneficiary U3 Approved Fee Gst|XX||XX|
|Beneficiary U3 RB Approved Fee|XX||XX|
|Beneficiary U3 RB Approved Fee Gst|XX||XX|
|Beneficiary U3 Approved Transaction Amount|XX||XX|
|Beneficiary U3 RB Approved Transaction Amount|XX||XX|
|Beneficiary SOD U3 Approved Fee|XX||XX|
|Beneficiary SOD U3 Approved Fee Gst|XX||XX|
|Beneficiary SOD U3 Approved Transaction Amount|XX||XX|
|FOR NON – FINANCIAL MANDATE/OD TXNs||||
|Remitter Default-SEBI U2 Approved Fee|XX||XX|
|Remitter Default-SEBI U2 Approved Fee Gst|XX||XX|
|Remitter Default-SI U2 Approved Fee|XX||XX|

<!-- PAGE 131 -->
# PAGE 131

[IMAGE_264]

![IMAGE_264](images/IMAGE_264.jpeg)

**IMAGE_264 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_265]

![IMAGE_265](images/IMAGE_265.png)

**IMAGE_265 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 131/158 
Remitter Default-SI U2 Approved Fee Gst 
XX 
  
XX 
Remitter Default-Government Voucher U2 Approved Fee 
XX 
  
XX 
Remitter Intent-SI U2 Approved Fee 
XX 
  
XX 
Remitter Intent-SI U2 Approved Fee Gst 
XX 
  
XX 
Remitter SDK-SI U2 Approved Fee 
XX 
  
XX 
Remitter SDK-SI U2 Approved Fee Gst 
XX 
  
XX 
Remitter QR Man-SI U2 Approved Fee 
XX 
  
XX 
Remitter QR Man-SI U2 Approved Fee Gst 
XX 
  
XX 
Remitter BBPS-SI U2 Approved Fee 
XX 
  
XX 
Remitter BBPS-SI U2 Approved Fee Gst 
XX 
  
XX 
Remitter Dynamic Qr Code-SI U2 Approved Fee 
XX 
  
XX 
Remitter Dynamic Qr Code-SI U2 Approved Fee Gst 
XX 
  
XX 
Default-SEBI U2 Approved Payer PSP Fee -Received 
XX 
  
XX 
Default-SI U2 Approved Payer PSP Fee -Received 
XX 
  
XX 
Default-SI U2 Approved Payer PSP Fee Gst -Received 
XX 
  
XX 
Default-Government Voucher U2 Approved Payer PSP Fee -
Received 
XX 
  
XX 
  
  
  
  
Settlement Charges 
XX 
  
XX 
  
  
  
  
Beneficiary / Remitter Sub Totals 
  
XX 
XX 
  
  
  
  
Settlement Amount 
  
XX 
  
  
  
  
  
Net Adjusted Amount 
  
  
XX 
  
  
  
  
Customer Compensation For Non Compliance Debit 
XX 
XX 
  
Customer Compensation For Non Compliance Credit 
XX 
  
XX 
  
  
  
  
TCC RET penalty payable (T+1) (T+2) (T+3) 
XX 
XX 
  
GST on TCC RET penalty payable (T+1) (T+2) (T+3) 
XX 
XX 
  
TCC RET penalty receivable (T+1) (T+2) (T+3) 
XX 
  
XX 
GST on TCC RET penalty receivable (T+1) (T+2) (T+3) 
XX 
  
XX 
DRC penalty receivable (T+1) (T+2) (T+3) 
XX 
  
XX 
GST on DRC penalty receivable (T+1) (T+2) (T+3) 
XX 
  
XX 
DRC penalty payable (T+1) (T+2) (T+3) 
XX 
XX 
  
GST on DRC penalty payable (T+1) (T+2) (T+3) 
XX 
XX 
  
RRC penalty payable (T+1) (T+2) (T+3) 
XX 
XX 
  
GST on RRC penalty payable (T+1) (T+2) (T+3) 
XX 
XX 
  
RRC penalty receivable (T+1) (T+2) (T+3) 
XX 
  
XX 
GST on RRC penalty receivable (T+1) (T+2) (T+3) 
XX 
  
XX 
  
  
  
  
Final Settlement Amount 
  
XX
```

**Machine-readable table extraction(s) for PAGE 131**

#### TABLE_131_01 (source extraction: `page131_table01.csv`)

|Remitter Default-SI U2 Approved Fee Gst|XX||XX|
|---|---|---|---|
|Remitter Default-Government Voucher U2 Approved Fee|XX||XX|
|Remitter Intent-SI U2 Approved Fee|XX||XX|
|Remitter Intent-SI U2 Approved Fee Gst|XX||XX|
|Remitter SDK-SI U2 Approved Fee|XX||XX|
|Remitter SDK-SI U2 Approved Fee Gst|XX||XX|
|Remitter QR Man-SI U2 Approved Fee|XX||XX|
|Remitter QR Man-SI U2 Approved Fee Gst|XX||XX|
|Remitter BBPS-SI U2 Approved Fee|XX||XX|
|Remitter BBPS-SI U2 Approved Fee Gst|XX||XX|
|Remitter Dynamic Qr Code-SI U2 Approved Fee|XX||XX|
|Remitter Dynamic Qr Code-SI U2 Approved Fee Gst|XX||XX|
|Default-SEBI U2 Approved Payer PSP Fee -Received|XX||XX|
|Default-SI U2 Approved Payer PSP Fee -Received|XX||XX|
|Default-SI U2 Approved Payer PSP Fee Gst -Received|XX||XX|
|Default-Government Voucher U2 Approved Payer PSP Fee -<br>Received|XX||XX|
|||||
|Settlement Charges|XX||XX|
|||||
|Beneficiary / Remitter Sub Totals||XX|XX|
|||||
|Settlement Amount||XX||
|||||
|Net Adjusted Amount|||XX|
|||||
|Customer Compensation For Non Compliance Debit|XX|XX||
|Customer Compensation For Non Compliance Credit|XX||XX|
|||||
|TCC RET penalty payable (T+1) (T+2) (T+3)|XX|XX||
|GST on TCC RET penalty payable (T+1) (T+2) (T+3)|XX|XX||
|TCC RET penalty receivable (T+1) (T+2) (T+3)|XX||XX|
|GST on TCC RET penalty receivable (T+1) (T+2) (T+3)|XX||XX|
|DRC penalty receivable (T+1) (T+2) (T+3)|XX||XX|
|GST on DRC penalty receivable (T+1) (T+2) (T+3)|XX||XX|
|DRC penalty payable (T+1) (T+2) (T+3)|XX|XX||
|GST on DRC penalty payable (T+1) (T+2) (T+3)|XX|XX||
|RRC penalty payable (T+1) (T+2) (T+3)|XX|XX||
|GST on RRC penalty payable (T+1) (T+2) (T+3)|XX|XX||
|RRC penalty receivable (T+1) (T+2) (T+3)|XX||XX|
|GST on RRC penalty receivable (T+1) (T+2) (T+3)|XX||XX|
|||||
|Final Settlement Amount||XX||

<!-- PAGE 132 -->
# PAGE 132

[IMAGE_266]

![IMAGE_266](images/IMAGE_266.jpeg)

**IMAGE_266 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_267]

![IMAGE_267](images/IMAGE_267.png)

**IMAGE_267 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 132/158 
42.9) 
RAW FILE HEADER FORMAT (ANNEXURE – 9) 
Below is the raw file format same for both remitter raw file and beneficiary raw file. 
Prefix 
FieldName 
Field Description 
Type 
Actual Length 
Max 
Length 
(For 
Future 
Use) 
TI 
TIsubType 
Transaction Type 
alphanumeric 2 
20 
TItxnId 
UPI Transaction ID 
alphanumeric 35 
100 
TIrrn 
RRN 
alphanumeric 12 
100 
TIrespCode 
Response Code 
alphanumeric 2 
20 
TIDate 
Transaction Date 
numeric 
6 
6 
TItime 
Transaction Time 
numeric 
6 
6 
TIsetAmount 
Settlement Amount 
numeric 
15,2 
15,2 
TIumn 
UMN 
alphanumeric 255 
255 
TIMapperId 
Mapper Id 
alphanumeric 16 
16 
TCinitiationMode Initiation Mode 
alphanumeric 2 
10 
TCpurpose 
Purpose Code 
alphanumeric 2 
10 
PR 
PRId 
Payer Code 
alphanumeric 3 
3 
PRmcc 
Payer MCC 
alphanumeric 4 
20 
PRvpa 
Payer VPA 
alphanumeric 255 
255 
PE 
PEId 
Payee Code 
alphanumeric 3 
3 
PEMCC 
Payee MCC 
alphanumeric 4 
20 
PEvpa 
Payee VPA 
alphanumeric 255 
255 
RE 
REId 
Rem Code 
alphanumeric 3 
3 
REifsc 
REM IFSC 
alphanumeric 11 
20 
REaccType 
Remitter Account Type 
alphanumeric 2 
30 
REaccountNo 
Remitter Account Number alphanumeric 30 
30 
BE 
BEId 
Bene Code 
alphanumeric 3 
3 
BEifsc 
BENI IFSC 
alphanumeric 11 
20 
BEaccType 
Beneficiary Account Type 
alphanumeric 2 
30 
BEaccountNo 
Beneficiary Account No. 
alphanumeric 30 
30 
  
LRN 
Lite Reference Number 
alphanumeric 35 
36 
  
ResField1 
ResField1 
  
  
  
  
ResField2 
ResField2 
  
  
  
  
ResField3 
ResField3
```

**Machine-readable table extraction(s) for PAGE 132**

#### TABLE_132_01 (source extraction: `page132_table01.csv`)

|Prefix|FieldName|Field Description|Type|Actual Length|Max<br>Length<br>(For<br>Future<br>Use)|
|---|---|---|---|---|---|
|TI|TIsubType|Transaction Type|alphanumeric|2|20|
||TItxnId|UPI Transaction ID|alphanumeric|35|100|
||TIrrn|RRN|alphanumeric|12|100|
||TIrespCode|Response Code|alphanumeric|2|20|
||TIDate|Transaction Date|numeric|6|6|
||TItime|Transaction Time|numeric|6|6|
||TIsetAmount|Settlement Amount|numeric|15,2|15,2|
||TIumn|UMN|alphanumeric|255|255|
||TIMapperId|Mapper Id|alphanumeric|16|16|
||TCinitiationMode|Initiation Mode|alphanumeric|2|10|
||TCpurpose|Purpose Code|alphanumeric|2|10|
|PR|PRId|Payer Code|alphanumeric|3|3|
||PRmcc|Payer MCC|alphanumeric|4|20|
||PRvpa|Payer VPA|alphanumeric|255|255|
|PE|PEId|Payee Code|alphanumeric|3|3|
||PEMCC|Payee MCC|alphanumeric|4|20|
||PEvpa|Payee VPA|alphanumeric|255|255|
|RE|REId|Rem Code|alphanumeric|3|3|
||REifsc|REM IFSC|alphanumeric|11|20|
||REaccType|Remitter Account Type|alphanumeric|2|30|
||REaccountNo|Remitter Account Number|alphanumeric|30|30|
|BE|BEId|Bene Code|alphanumeric|3|3|
||BEifsc|BENI IFSC|alphanumeric|11|20|
||BEaccType|Beneficiary Account Type|alphanumeric|2|30|
||BEaccountNo|Beneficiary Account No.|alphanumeric|30|30|
||LRN|Lite Reference Number|alphanumeric|35|36|
||ResField1|ResField1||||
||ResField2|ResField2||||
||ResField3|ResField3||||

<!-- PAGE 133 -->
# PAGE 133

[IMAGE_268]

![IMAGE_268](images/IMAGE_268.jpeg)

**IMAGE_268 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_269]

![IMAGE_269](images/IMAGE_269.png)

**IMAGE_269 - visual representation**
Screenshot-style raw data/file sample rendered as monospaced comma-separated text. The visual contains header/data records with fields such as HT,Merchant Acq,30C,20220603, and transaction records beginning with “TX,U2” or role-specific prefixes. Literal field contents are preserved visually in the image; the surrounding page text provides the corresponding raw-data format/context.

[IMAGE_270]

![IMAGE_270](images/IMAGE_270.png)

**IMAGE_270 - visual representation**
Screenshot-style raw data/file sample rendered as monospaced comma-separated text. The visual contains header/data records with fields such as HT,Merchant Acq,30C,20220603, and transaction records beginning with “TX,U2” or role-specific prefixes. Literal field contents are preserved visually in the image; the surrounding page text provides the corresponding raw-data format/context.

[IMAGE_271]

![IMAGE_271](images/IMAGE_271.png)

**IMAGE_271 - visual representation**
Screenshot-style raw data/file sample rendered as monospaced comma-separated text. The visual contains header/data records with fields such as HT,Merchant Acq,30C,20220603, and transaction records beginning with “TX,U2” or role-specific prefixes. Literal field contents are preserved visually in the image; the surrounding page text provides the corresponding raw-data format/context.

[IMAGE_272]

![IMAGE_272](images/IMAGE_272.png)

**IMAGE_272 - visual representation**
Screenshot-style raw data/file sample rendered as monospaced comma-separated text. The visual contains header/data records with fields such as HT,Merchant Acq,30C,20220603, and transaction records beginning with “TX,U2” or role-specific prefixes. Literal field contents are preserved visually in the image; the surrounding page text provides the corresponding raw-data format/context.

[IMAGE_273]

![IMAGE_273](images/IMAGE_273.png)

**IMAGE_273 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 133/158 
42.10) ACQUIRER MERCHANT RAW DATA V3 (ANNEXURE – 10) 
 
 
42.11) ISSUER MERCHANT RAW DATA V3 (ANNEXURE – 11) 
 
 
42.12) ACQUIRER RAW DATA V3 (ANNEXURE – 12) 
 
 
42.13) ISSUER RAW DATA V3 (ANNEXURE – 13)
```

<!-- PAGE 134 -->
# PAGE 134

[IMAGE_274]

![IMAGE_274](images/IMAGE_274.jpeg)

**IMAGE_274 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_275]

![IMAGE_275](images/IMAGE_275.png)

**IMAGE_275 - visual representation**
Screenshot-style raw data/file sample rendered as monospaced comma-separated text. The visual contains header/data records with fields such as HT,Merchant Acq,30C,20220603, and transaction records beginning with “TX,U2” or role-specific prefixes. Literal field contents are preserved visually in the image; the surrounding page text provides the corresponding raw-data format/context.

[IMAGE_276]

![IMAGE_276](images/IMAGE_276.png)

**IMAGE_276 - visual representation**
Screenshot-style raw data/file sample rendered as monospaced comma-separated text. The visual contains header/data records with fields such as HT,Merchant Acq,30C,20220603, and transaction records beginning with “TX,U2” or role-specific prefixes. Literal field contents are preserved visually in the image; the surrounding page text provides the corresponding raw-data format/context.

[IMAGE_277]

![IMAGE_277](images/IMAGE_277.png)

**IMAGE_277 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 134/158 
42.14) ACQUIRER PSP RAW DATA V3 (ANNEXURE – 14) 
 
 
42.15) ISSUER PSP RAW DATA V3 (ANNEXURE – 15) 
 
 
42.16) ADJUSTMENT REPORT (ANNEXURE – 16) 
Txnuid 
Uid 
Adjdate 
Adjtype 
Remitt
er 
Benefici
ery 
Resp
onse 
Txn
date 
Txnt
ime 
RRN 
Termin
alid 
Ben_Mo
bile_No 
Rem_Mobile_N
o 
XXXXXXX 
XXXX
XXX 
DD-MM-
YYYY 
Arbitrati
on 
Raise 
ABC 
DEF 
00 
DD-
MM-
YYY
Y 
HH:
MM:
SS 
XXXX
XXXX
XXXX 
XXXXX 
XXXXXX
XXXXXX
XXXXXX
X 
XXXXXXXXXXXX
XXXXXXX 
Chbdate 
Chbr
ef 
Txnamo
unt 
Adjamo
unt 
Rem/P
ayeePS
P_Fee 
Ben_Fee 
Ben_
FeeS
W 
Adjf
ee 
Npci
fee 
Remf
eeta
x 
Benfe
etax 
Npcitax 
Adjref 
- 
- 
15000.0
0 
15000.
00 
0.00 
0.00 
0 
0 
0 
0 
0 
0 
XXXXXXXXXXXX
XXXXXXXXXXXX
XXXXXXXXXXXX 
Bankadjr
ef 
Adjpr
oof 
Compen
sation 
amount 
Adjust
ment 
raised 
time 
No of 
Days 
for 
Penalty 
SHDT73 
SHD
T74 
SHD
T75 
SHD
T76 
SHD
T77 
Transa
ction_
Type 
Transac
tion 
Indicato
r 
Beneficiary 
Account 
number 
  
XXXX
XXX 
0 
  
0 
  
  
  
  
  
U2 
PAY 
XXXXXXXXXXXX
XXXXXXXX 
Remitter 
Account 
number 
Aadh
ar 
Num
ber 
Mobile 
Number 
Payer 
PSP 
Payee 
PSP 
UPI 
Transact
ion ID 
Virtu
al 
Addr
ess 
Disp
ute 
Flag 
Rea
son 
Cod
e 
MCC 
Origin
ating 
Chann
el 
  
  
XXXXXXX
XXXXXXX
XXXXXX 
  
XXXXXXX
XXXXXXX
XXXXXX 
ABC 
DEF 
XXXXXXX
XXXXXXX
XXXXXX 
  
AR 
110
0 
5816 
UMOB 
  
  
 
42.17) GSTR (ANNEXURE - 17) 
  
National Payments Corporation of India 
  
UPI GSTR 1 Report From DD/MMM/YYYY To DD/MMM/YYYY
```

**Machine-readable table extraction(s) for PAGE 134**

#### TABLE_134_01 (source extraction: `page134_table01.csv`)

|Txnuid|Uid|||Adjdate|Adjtype||||Remitt|||Benefici|||Resp|||Txn|||Txnt||RRN||||Termin|||Ben_Mo|||Rem_Mobile_N||
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
||||||||||er|||ery|||onse|||date|||ime||||||alid|||bile_No|||o||
|XXXXXXX|XXXX<br>XXX|||DD-MM-<br>YYYY|Arbitrati<br>on<br>Raise|||ABC|||DEF|||00|||DD-<br>MM-<br>YYY<br>Y|||HH:<br>MM:<br>SS|||XXXX<br>XXXX<br>XXXX|||XXXXX|||XXXXXX<br>XXXXXX<br>XXXXXX<br>X|||XXXXXXXXXXXX<br>XXXXXXX|||
|Chbdate|Chbr<br>ef|||Txnamo<br>unt|Adjamo<br>unt||||Rem/P||Ben_Fee||||Ben_||Adjf<br>ee|||Npci<br>fee||||Remf||Benfe<br>etax|||Npcitax|||Adjref|||
||||||||||ayeePS||||||FeeS|||||||||eeta|||||||||||
||||||||||P_Fee||||||W|||||||||x|||||||||||
|-|-|||15000.0<br>0|15000.<br>00|||0.00|||0.00|||0|||0|||0|||0|||0|||0|||XXXXXXXXXXXX<br>XXXXXXXXXXXX<br>XXXXXXXXXXXX|||
|Bankadjr<br>ef|Adjpr<br>oof|||Compen<br>sation<br>amount||Adjust|||No of||SHDT73|||SHD<br>T74|||SHD<br>T75|||SHD<br>T76|||SHD<br>T77|||Transa<br>ction_<br>Type||||Transac||Beneficiary<br>Account<br>number|||
|||||||ment|||Days|||||||||||||||||||||tion|||||
|||||||raised|||for|||||||||||||||||||||Indicato|||||
|||||||time|||Penalty|||||||||||||||||||||r|||||
||XXXX<br>XXX|||0||||0||||||||||||||||||U2|||PAY|||XXXXXXXXXXXX<br>XXXXXXXX|||
|Remitter<br>Account<br>number||Aadh||Mobile<br>Number|Payer<br>PSP|||Payee<br>PSP|||UPI<br>Transact<br>ion ID||||Virtu||Disp<br>ute<br>Flag||||Rea||MCC||||Origin||||||||
|||ar|||||||||||||al||||||son||||||ating||||||||
|||Num|||||||||||||Addr||||||Cod||||||Chann||||||||
|||ber|||||||||||||ess||||||e||||||el||||||||
|XXXXXXX<br>XXXXXXX<br>XXXXXX||||XXXXXXX<br>XXXXXXX<br>XXXXXX|ABC|||DEF|||XXXXXXX<br>XXXXXXX<br>XXXXXX||||||AR|||110<br>0|||5816|||UMOB|||||||||

#### TABLE_134_02 (source extraction: `page134_table02.csv`)

|Chbr|
|---|
|ef|

#### TABLE_134_03 (source extraction: `page134_table03.csv`)

|Txnamo|
|---|
|unt|

#### TABLE_134_04 (source extraction: `page134_table04.csv`)

|Adjamo|
|---|
|unt|

#### TABLE_134_05 (source extraction: `page134_table05.csv`)

|Adjf|
|---|
|ee|

#### TABLE_134_06 (source extraction: `page134_table06.csv`)

|Npci|
|---|
|fee|

#### TABLE_134_07 (source extraction: `page134_table07.csv`)

|Benfe|
|---|
|etax|

#### TABLE_134_08 (source extraction: `page134_table08.csv`)

|Compen|
|---|
|sation|
|amount|

#### TABLE_134_09 (source extraction: `page134_table09.csv`)

|Transa|
|---|
|ction_|
|Type|

#### TABLE_134_10 (source extraction: `page134_table10.csv`)

|Beneficiary|
|---|
|Account|
|number|

#### TABLE_134_11 (source extraction: `page134_table11.csv`)

|Bankadjr|
|---|
|ef|

#### TABLE_134_12 (source extraction: `page134_table12.csv`)

|Adjpr|
|---|
|oof|

#### TABLE_134_13 (source extraction: `page134_table13.csv`)

|SHD|
|---|
|T74|

#### TABLE_134_14 (source extraction: `page134_table14.csv`)

|SHD|
|---|
|T75|

#### TABLE_134_15 (source extraction: `page134_table15.csv`)

|SHD|
|---|
|T76|

#### TABLE_134_16 (source extraction: `page134_table16.csv`)

|SHD|
|---|
|T77|

#### TABLE_134_17 (source extraction: `page134_table17.csv`)

|Remitter|
|---|
|Account|
|number|

#### TABLE_134_18 (source extraction: `page134_table18.csv`)

|UPI|
|---|
|Transact|
|ion ID|

#### TABLE_134_19 (source extraction: `page134_table19.csv`)

|Disp|
|---|
|ute|
|Flag|

#### TABLE_134_20 (source extraction: `page134_table20.csv`)

|Mobile|
|---|
|Number|

#### TABLE_134_21 (source extraction: `page134_table21.csv`)

|Payer|
|---|
|PSP|

#### TABLE_134_22 (source extraction: `page134_table22.csv`)

|Payee|
|---|
|PSP|

#### TABLE_134_23 (source extraction: `page134_table23.csv`)

|National Payments Corporation of India|
|---|
||
|UPI GSTR 1 Report From DD/MMM/YYYY To DD/MMM/YYYY|

<!-- PAGE 135 -->
# PAGE 135

[IMAGE_278]

![IMAGE_278](images/IMAGE_278.jpeg)

**IMAGE_278 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_279]

![IMAGE_279](images/IMAGE_279.png)

**IMAGE_279 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 135/158 
  
B
a
n
k 
C
o
d
e 
St
at
e 
C
o
d
e 
GS
TN 
Ad
dre
ss 
GS
TI
N/ 
UI
N 
Invoi
ce 
RefN
UMB
ER 
DAT
E 
VA
LU
E 
GOO
DS/ 
SER
VICE
S 
HS
N/S
AC 
CO
DE 
Ta
xa
ble 
Va
lue 
(Rs
.) 
IGS
T_R
ate 
(%) 
IGST
_Amo
unt 
(Rs.) 
CGS
T_R
ate 
(%) 
CGST
_Amo
unt 
(Rs.) 
SGS
T_R
ate 
(%) 
SGST
_Amo
unt 
(Rs.) 
POS( 
ONL
Y IF 
DIFF
ERE
NT 
FRO
M 
LOC
ATIO
N OF 
THE 
REC
EPIE
NT) 
IND
ICA
TE 
IF 
SU
PPL
Y 
ATT
RA
CT 
RE
VE
RSE 
CH
AR
GE 
TAX 
ON 
THIS 
INVO
ICE 
IS 
PAID 
UND
ER 
PROV
ISIO
NAL 
ASSE
SSME
NT 
GSTI
N OF 
E- 
COM
MER
CE 
OPE
RAT
OR ( 
if 
appli
cabl
e) 
A
B
C 
X
X 
XX
XX, 
XX, 
XX 
XX
X 
UPI/
MM-
YY/X
XXX 
DD/
MM/
YYYY 
XX
XX 
Switc
hing 
Fee 
and 
other 
char
ges 
colle
cted 
by 
NPCI 
from 
Date 
: 
DD/
MM/
YYYY 
TO 
DD/
MM/
YYYY 
997
158 
XX
XX 
18 
XXXX 
9 
XXXX 
9 
XXXX 
NA 
NO 
NO 
NA 
 
42.18) GST INVOICE (ANNEXURE – 18) 
National Payments Corporation of India 
REGD OFFICE: 1001A, B Wing 10th FLOOR, 
The Capital, Bandra-Kurla Complex, 
Bandra (East) Mumbai-400 051 
Tel No. 022 4000 9100 
Website : www.npci.org.in 
CIN: U74990MH2008NPL189067 
INVOICE 
Customer : ABC BANK 
UPI/MM-YY/Invoice No. 
Participant Id (PID):  
  
Address :  
Date : DD-MM-YYYY 
State :  
  
State Code :  
  
GSTIN / Unique ID :  
  
Acquirer billing Fees collected by NPCI From Date: YYYY-MM-DD To YYYY-MM-DD 
Description 
Harmonised System of 
Nomenclature (HSN) 
Details 
Amount(Rs.)
```

**Machine-readable table extraction(s) for PAGE 135**

#### TABLE_135_01 (source extraction: `page135_table01.csv`)

|B<br>a<br>n<br>k<br>C<br>o<br>d<br>e|St<br>at<br>e<br>C<br>o<br>d<br>e|GS<br>TN<br>Ad<br>dre<br>ss|GS<br>TI<br>N/<br>UI<br>N|Invoi<br>ce<br>RefN<br>UMB<br>ER|DAT<br>E|VA<br>LU<br>E|GOO<br>DS/<br>SER<br>VICE<br>S|HS<br>N/S<br>AC<br>CO<br>DE|Ta<br>xa<br>ble<br>Va<br>lue<br>(Rs<br>.)|IGS<br>T_R<br>ate<br>(%)|IGST<br>_Amo<br>unt<br>(Rs.)|CGS<br>T_R<br>ate<br>(%)|CGST<br>_Amo<br>unt<br>(Rs.)|SGS<br>T_R<br>ate<br>(%)|SGST<br>_Amo<br>unt<br>(Rs.)|POS(<br>ONL<br>Y IF<br>DIFF<br>ERE<br>NT<br>FRO<br>M<br>LOC<br>ATIO<br>N OF<br>THE<br>REC<br>EPIE<br>NT)||IND||TAX<br>ON<br>THIS<br>INVO<br>ICE<br>IS<br>PAID<br>UND<br>ER<br>PROV<br>ISIO<br>NAL<br>ASSE<br>SSME<br>NT|GSTI<br>N OF<br>E-<br>COM<br>MER<br>CE<br>OPE<br>RAT<br>OR (<br>if<br>appli<br>cabl<br>e)|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|||||||||||||||||||ICA||||
|||||||||||||||||||TE||||
|||||||||||||||||||IF||||
|||||||||||||||||||SU||||
|||||||||||||||||||PPL||||
|||||||||||||||||||Y||||
|||||||||||||||||||ATT||||
|||||||||||||||||||RA||||
|||||||||||||||||||CT||||
|||||||||||||||||||RE||||
|||||||||||||||||||VE||||
|||||||||||||||||||RSE||||
|||||||||||||||||||CH||||
|||||||||||||||||||AR||||
|||||||||||||||||||GE||||
|A<br>B<br>C|X<br>X|XX<br>XX,<br>XX,<br>XX|XX<br>X|UPI/<br>MM-<br>YY/X<br>XXX|DD/<br>MM/<br>YYYY|XX<br>XX|Switc<br>hing<br>Fee<br>and<br>other<br>char<br>ges<br>colle<br>cted<br>by<br>NPCI<br>from<br>Date<br>:<br>DD/<br>MM/<br>YYYY<br>TO<br>DD/<br>MM/<br>YYYY|997<br>158|XX<br>XX|18|XXXX|9|XXXX|9|XXXX|NA|NO|||NO|NA|

#### TABLE_135_02 (source extraction: `page135_table02.csv`)

|POS(|
|---|
|ONL|
|Y IF|
|DIFF|
|ERE|
|NT|
|FRO|
|M|
|LOC|
|ATIO|
|N OF|
|THE|
|REC|
|EPIE|
|NT)|

#### TABLE_135_03 (source extraction: `page135_table03.csv`)

|TAX|
|---|
|ON|
|THIS|
|INVO|
|ICE|
|IS|
|PAID|
|UND|
|ER|
|PROV|
|ISIO|
|NAL|
|ASSE|
|SSME|
|NT|

#### TABLE_135_04 (source extraction: `page135_table04.csv`)

|GSTI|
|---|
|N OF|
|E-|
|COM|
|MER|
|CE|
|OPE|
|RAT|
|OR (|
|if|
|appli|
|cabl|
|e)|

#### TABLE_135_05 (source extraction: `page135_table05.csv`)

|B|
|---|
|a|
|n|
|k|
|C|
|o|
|d|
|e|

#### TABLE_135_06 (source extraction: `page135_table06.csv`)

|St|
|---|
|at|
|e|
|C|
|o|
|d|
|e|

#### TABLE_135_07 (source extraction: `page135_table07.csv`)

|Ta|
|---|
|xa|
|ble|
|Va|
|lue|
|(Rs|
|.)|

#### TABLE_135_08 (source extraction: `page135_table08.csv`)

|GS|
|---|
|TN|
|Ad|
|dre|
|ss|

#### TABLE_135_09 (source extraction: `page135_table09.csv`)

|GS|
|---|
|TI|
|N/|
|UI|
|N|

#### TABLE_135_10 (source extraction: `page135_table10.csv`)

|Invoi|
|---|
|ce|
|RefN|
|UMB|
|ER|

#### TABLE_135_11 (source extraction: `page135_table11.csv`)

|GOO|
|---|
|DS/|
|SER|
|VICE|
|S|

#### TABLE_135_12 (source extraction: `page135_table12.csv`)

|HS|
|---|
|N/S|
|AC|
|CO|
|DE|

#### TABLE_135_13 (source extraction: `page135_table13.csv`)

|IGS|
|---|
|T_R|
|ate|
|(%)|

#### TABLE_135_14 (source extraction: `page135_table14.csv`)

|IGST|
|---|
|_Amo|
|unt|
|(Rs.)|

#### TABLE_135_15 (source extraction: `page135_table15.csv`)

|CGS|
|---|
|T_R|
|ate|
|(%)|

#### TABLE_135_16 (source extraction: `page135_table16.csv`)

|CGST|
|---|
|_Amo|
|unt|
|(Rs.)|

#### TABLE_135_17 (source extraction: `page135_table17.csv`)

|SGS|
|---|
|T_R|
|ate|
|(%)|

#### TABLE_135_18 (source extraction: `page135_table18.csv`)

|SGST|
|---|
|_Amo|
|unt|
|(Rs.)|

#### TABLE_135_19 (source extraction: `page135_table19.csv`)

|VA|
|---|
|LU|
|E|

#### TABLE_135_20 (source extraction: `page135_table20.csv`)

|DAT|
|---|
|E|

#### TABLE_135_21 (source extraction: `page135_table21.csv`)

|National Payments Corporation of India||||
|---|---|---|---|
|REGD OFFICE: 1001A, B Wing 10th FLOOR,||||
|The Capital, Bandra-Kurla Complex,||||
|Bandra (East) Mumbai-400 051||||
|Tel No. 022 4000 9100||||
|Website : www.npci.org.in||||
|CIN: U74990MH2008NPL189067||||
|INVOICE||||
|Customer : ABC BANK||UPI/MM-YY/Invoice No.||
|Participant Id (PID):||||
|Address :||Date : DD-MM-YYYY||
|State :||||
|State Code :||||
|GSTIN / Unique ID :||||
|Acquirer billing Fees collected by NPCI From Date: YYYY-MM-DD To YYYY-MM-DD||||
|Description|Harmonised System of<br>Nomenclature (HSN)|Details|Amount(Rs.)|

<!-- PAGE 136 -->
# PAGE 136

[IMAGE_280]

![IMAGE_280](images/IMAGE_280.jpeg)

**IMAGE_280 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_281]

![IMAGE_281](images/IMAGE_281.png)

**IMAGE_281 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 136/158 
Remitter P2P transactions up 
to Rs 1000 Fee - 0.05 Paise 
997158 No Of Transactions = XX XX 
Remitter P2P transactions 
above 1000 Rs Fee - 0.30 Paise 
997158 No Of Transactions = XX XX 
Onus & Cash back 
transactions fee - 0.05 Paise 
997158 No Of Transactions = XX XX 
P2M Remitter Processing Fee 
997158 No Of Transactions = XX XX 
P2M Payee PSP Processing fee 
997158 No Of Transactions = XX XX 
Onus transactions fee 0.05 
Paise 
997158 No Of Transactions = XX XX 
  
  
Total 
XX 
  
  
  
CGST @9.00% 
XX 
  
  
SGST/UGST @9.00% 
XX 
  
  
IGST @18.00% 
XX 
  
  
Grand Total 
XX 
Rupees __________________________ Paisa _______________ 
FOR NATIONAL PAYMENTS CORPORATION OF INDIA 
 
42.19) RECEIVABLE SERVICE TAX REPORT (ANNEXURE – 19) 
Service Tax Report – Receivable 
Repor
t for: 
ABC Bank Receivable 
Date 
Time: 
DD-MM-YYYY HH:MM 
Perio
d: 
DD-MM-YYYY – DD-MM-YYYY 
Payab
le 
Bank 
Tran
sacti
on 
Type 
GST 
No 
Nu
mb
er 
of 
Tra
nsa
cti
ons 
Inte
rch
ang
e 
Fee 
G
S
T 
Total 
of 
Interchan
ge 
Fee 
and GST 
Pay
er 
PS
P 
Fee 
Pay
er 
PS
P 
GS
T 
Total 
of 
Payer 
PSP Fee 
And GST 
Pen
alty
_C
oun
t 
Pe
na
lty
_F
ee 
Pe
nal
ty_
GS
T 
Pe
nal
ty_
Tot
al 
T
o
t
a
l 
DEF 
Bank 
U3 
XXX
XXX
XXX
XXX
XXX 
  
  
  
  
  
  
  
  
  
  
  
  
GHI 
Bank 
U2 
XXX
XXX
XXX
XXX
XXX
```

**Machine-readable table extraction(s) for PAGE 136**

#### TABLE_136_01 (source extraction: `page136_table01.csv`)

|Remitter P2P transactions up<br>to Rs 1000 Fee - 0.05 Paise|997158|No Of Transactions = XX|XX|
|---|---|---|---|
|Remitter P2P transactions<br>above 1000 Rs Fee - 0.30 Paise|997158|No Of Transactions = XX|XX|
|Onus & Cash back<br>transactions fee - 0.05 Paise|997158|No Of Transactions = XX|XX|
|P2M Remitter Processing Fee|997158|No Of Transactions = XX|XX|
|P2M Payee PSP Processing fee|997158|No Of Transactions = XX|XX|
|Onus transactions fee 0.05<br>Paise|997158|No Of Transactions = XX|XX|
|||Total|XX|
|||||
|||CGST @9.00%|XX|
|||SGST/UGST @9.00%|XX|
|||IGST @18.00%|XX|
|||Grand Total|XX|
|Rupees __________________________ Paisa _______________||||
|FOR NATIONAL PAYMENTS CORPORATION OF INDIA||||

#### TABLE_136_02 (source extraction: `page136_table02.csv`)

|Service Tax Report – Receivable|||||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Repor<br>t for:|ABC Bank Receivable||||||||||||||
|Date<br>Time:|DD-MM-YYYY HH:MM||||||||||||||
|Perio<br>d:|DD-MM-YYYY – DD-MM-YYYY||||||||||||||
|Payab<br>le<br>Bank|Tran<br>sacti<br>on<br>Type|GST<br>No|Nu<br>mb<br>er<br>of<br>Tra<br>nsa<br>cti<br>ons|Inte<br>rch<br>ang<br>e<br>Fee|G<br>S<br>T|Total of<br>Interchan<br>ge Fee<br>and GST|Pay<br>er<br>PS<br>P<br>Fee|Pay<br>er<br>PS<br>P<br>GS<br>T|Total of<br>Payer<br>PSP Fee<br>And GST|Pen<br>alty<br>_C<br>oun<br>t|Pe<br>na<br>lty<br>_F<br>ee|Pe<br>nal<br>ty_<br>GS<br>T|Pe<br>nal<br>ty_<br>Tot<br>al|T<br>o<br>t<br>a<br>l|
|DEF<br>Bank|U3|XXX<br>XXX<br>XXX<br>XXX<br>XXX|||||||||||||
|GHI<br>Bank|U2|XXX<br>XXX<br>XXX<br>XXX<br>XXX|||||||||||||

<!-- PAGE 137 -->
# PAGE 137

[IMAGE_282]

![IMAGE_282](images/IMAGE_282.jpeg)

**IMAGE_282 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_283]

![IMAGE_283](images/IMAGE_283.png)

**IMAGE_283 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 137/158 
GHI 
Bank 
U3 
XXX
XXX
XXX
XXX
XXX 
  
  
  
  
  
  
  
  
  
  
  
  
JKL 
Bank 
U3 
XXX
XXX
XXX
XXX
XXX 
  
  
  
  
  
  
  
  
  
  
  
  
Total : 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
 
42.20) PAYABLE SERVICE TAX REPORT (ANNEXURE – 20) 
Service Tax Report – Payable 
 
Repor
t for: 
ABC Bank Payable  
Date 
Time: 
DD-MM-YYYY HH:MM 
 
Perio
d: 
DD-MM-YYYY – DD-MM-YYYY 
Recei
vable 
Bank 
Tr
an
sa
cti
on 
Ty
pe 
GST 
No 
Inter 
State / 
Intra 
State 
Num
ber 
of 
Tran
sacti
ons 
Int
er
ch
an
ge 
Fe
e 
G
S
T 
Tota
l 
of 
Inter
cha
nge 
Fee 
and 
GST 
Pa
ye
r 
PS
P 
Fe
e 
Pa
yer 
PS
P 
GS
T 
Total of 
Payer 
PSP Fee 
And 
GST 
Pe
nal
ty_
Co
un
t 
P
e
n
al
ty
_F
e
e 
P
en
al
ty
_
G
ST 
Pe
na
lty
_T
ot
al 
T
o
t
a
l 
DEF 
Bank 
U3 
XXXXX
XXXXX
XXXXX 
Intra 
State 
  
  
  
  
  
  
  
  
  
  
  
  
GHI 
Bank 
U3 
XXXXX
XXXXX
XXXXX 
Intra 
State 
  
  
  
  
  
  
  
  
  
  
  
  
JKL 
Bank 
U3 
XXXXX
XXXXX
XXXXX 
Intra 
State 
  
  
  
  
  
  
  
  
  
  
  
  
NPCI 
  
  
Inter 
State 
  
  
  
  
  
  
  
  
  
  
  
  
Total : 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
42.21) BANK WISE PAYABLE REPORT (ANNEXURE – 21) 
 
National Payments Corporation of India 
Registered Office: 1001A,B Wing 10th Floor, The Capital 
Bandra Kurla Complex, Bandra-East, Mumbai-400 051 
Tel No. 022 4000 9100 
Website : www.npci.org.in 
CIN: U74990MH2008NPL189067 
Unified Payment Interface ( UPI ) 
Bank Wise statement of Goods and Services Tax (GST) on interchange fee paid to UPI members prepared by NPCI 
Ref.No.: 
ABC/PAY/GST/YYYY-
YY/DDMMDDMM/Month No/XXXXXXXXXX
```

**Machine-readable table extraction(s) for PAGE 137**

#### TABLE_137_01 (source extraction: `page137_table01.csv`)

|GHI<br>Bank|U3|XXX<br>XXX<br>XXX<br>XXX<br>XXX|||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|JKL<br>Bank|U3|XXX<br>XXX<br>XXX<br>XXX<br>XXX|||||||||||||
|Total :|||||||||||||||

#### TABLE_137_02 (source extraction: `page137_table02.csv`)

|Service Tax Report – Payable||||||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Repor<br>t for:|ABC Bank Payable|||||||||||||||
|Date<br>Time:|DD-MM-YYYY HH:MM|||||||||||||||
|Perio<br>d:|DD-MM-YYYY – DD-MM-YYYY|||||||||||||||
|Recei<br>vable<br>Bank|Tr<br>an<br>sa<br>cti<br>on<br>Ty<br>pe|GST<br>No|Inter<br>State /<br>Intra<br>State|Num<br>ber<br>of<br>Tran<br>sacti<br>ons|Int<br>er<br>ch<br>an<br>ge<br>Fe<br>e|G<br>S<br>T|Tota<br>l of<br>Inter<br>cha<br>nge<br>Fee<br>and<br>GST|Pa<br>ye<br>r<br>PS<br>P<br>Fe<br>e|Pa<br>yer<br>PS<br>P<br>GS<br>T|Total of<br>Payer<br>PSP Fee<br>And<br>GST|Pe<br>nal<br>ty_<br>Co<br>un<br>t|P<br>e<br>n<br>al<br>ty<br>_F<br>e<br>e|P<br>en<br>al<br>ty<br>_<br>G<br>ST|Pe<br>na<br>lty<br>_T<br>ot<br>al|T<br>o<br>t<br>a<br>l|
|DEF<br>Bank|U3|XXXXX<br>XXXXX<br>XXXXX|Intra<br>State|||||||||||||
|GHI<br>Bank|U3|XXXXX<br>XXXXX<br>XXXXX|Intra<br>State|||||||||||||
|JKL<br>Bank|U3|XXXXX<br>XXXXX<br>XXXXX|Intra<br>State|||||||||||||
|NPCI|||Inter<br>State|||||||||||||
|Total :||||||||||||||||

#### TABLE_137_03 (source extraction: `page137_table03.csv`)

|National Payments Corporation of India|||||||||
|---|---|---|---|---|---|---|---|---|
|Registered Office: 1001A,B Wing 10th Floor, The Capital|||||||||
|Bandra Kurla Complex, Bandra-East, Mumbai-400 051|||||||||
|Tel No. 022 4000 9100|||||||||
|Website : www.npci.org.in|||||||||
|CIN: U74990MH2008NPL189067|||||||||
|Unified Payment Interface ( UPI )|||||||||
|Bank Wise statement of Goods and Services Tax (GST) on interchange fee paid to UPI members prepared by NPCI|||||||||
|Ref.No.:|ABC/PAY/GST/YYYY-<br>YY/DDMMDDMM/Month No/XXXXXXXXXX||||||||

<!-- PAGE 138 -->
# PAGE 138

[IMAGE_284]

![IMAGE_284](images/IMAGE_284.jpeg)

**IMAGE_284 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_285]

![IMAGE_285](images/IMAGE_285.png)

**IMAGE_285 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 138/158 
Report for period: 
DD/MMM/YYYY To DD/MMM/YYYY 
 
 
 
 
 
 
 
Report 
Generated 
Date: 
MMM DD YYYY HH:MM:SS AM/PM 
Paying Bank Name: 
ABC Bank 
Address: 
Paying Bank GSTIN: 
Bank 
Name 
Addre
ss 
Inter 
State 
/ 
Intra 
State 
GSTIN 
Interchange Fees – Transaction 
Interchange Fees – Disputes / 
Adjustments 
Interch
ange 
Fees 
CG
ST 
@ 
9% 
SG
ST / 
UG
ST 
@ 9 
% 
IG
ST 
@ 
18
% 
Interch
ange 
Fees 
CG
ST 
@ 
9% 
SG
ST / 
UG
ST 
@ 9 
% 
IG
ST 
@ 
18
% 
DEF Bank 
Intra State 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
GHI Bank 
Intra State 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
JKL Bank 
Intra State 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
NATIONAL 
PAYMENTS 
CORPORA
TION 
OF 
INDIA 
Bandr
a 
Kurla 
Comp
lex 
27AACCN98
52G1Z5 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
Total 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
 
 
42.22) DATE WISE PAYABLE REPORT (ANNEXURE – 22) 
 
National Payments Corporation of India 
Registered Office: 1001A,B Wing 10th Floor, The Capital 
Bandra Kurla Complex, Bandra-East, Mumbai-400 051 
Tel No. 022 4000 9100 
Website : www.npci.org.in 
CIN: U74990MH2008NPL189067 
Unified Payment Interface ( UPI ) 
Day Wise statement of Goods and Services Tax (GST) on interchange fee received from UPI members prepared by NPCI 
Ref.No.: 
ABC/PAY/GST/YYYY-YY/DDMMDDMM/Month 
No/XXXXXXXXXX 
Report for period: 
DD/MMM/YYYY To DD/MMM/YYYY 
Report Generated Date: 
MMM DD YYYY HH:MM:SS AM/PM 
Paying Bank Name: 
ABC Bank 
Address: 
Paying Bank GSTIN: 
Date 
Interchange Fees – Transaction 
Interchange Fees – Disputes / Adjustments 
Interchange 
Fees 
CGST @ 
9% 
SGST / UGST @ 
9 % 
IGST @ 18% 
Interchange 
Fees 
CGST 
@ 9% 
SGST / 
UGST 
@ 9 % 
IGST 
@ 
18% 
05/01/2024 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
05/02/2024 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
05/03/2024 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
05/04/2024 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
05/05/2024 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
NPCI 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
Total 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX
```

**Machine-readable table extraction(s) for PAGE 138**

#### TABLE_138_01 (source extraction: `page138_table01.csv`)

|Report for period:||DD/MMM/YYYY To DD/MMM/YYYY||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|
|Report Generated<br>Date:||MMM DD YYYY HH:MM:SS AM/PM||||||||||
|Paying Bank Name:||ABC Bank||||||||||
|Address:||||||||||||
|Paying Bank GSTIN:||||||||||||
|Bank<br>Name|Addre<br>ss|Inter<br>State /<br>Intra<br>State|GSTIN|Interchange Fees – Transaction||||Interchange Fees – Disputes /<br>Adjustments||||
|||||Interch<br>ange<br>Fees|CG<br>ST<br>@<br>9%|SG<br>ST /<br>UG<br>ST<br>@ 9<br>%|IG<br>ST<br>@<br>18<br>%|Interch<br>ange<br>Fees|CG<br>ST<br>@<br>9%|SG<br>ST /<br>UG<br>ST<br>@ 9<br>%|IG<br>ST<br>@<br>18<br>%|
|DEF Bank||Intra State||XX|XX|XX|XX|XX|XX|XX|XX|
|GHI Bank||Intra State||XX|XX|XX|XX|XX|XX|XX|XX|
|JKL Bank||Intra State||XX|XX|XX|XX|XX|XX|XX|XX|
|NATIONAL<br>PAYMENTS<br>CORPORA<br>TION OF<br>INDIA|Bandr<br>a<br>Kurla<br>Comp<br>lex||27AACCN98<br>52G1Z5|XX|XX|XX|XX|XX|XX|XX|XX|
|Total||||XX|XX|XX|XX|XX|XX|XX|XX|

#### TABLE_138_02 (source extraction: `page138_table02.csv`)

|National Payments Corporation of India|||||||||
|---|---|---|---|---|---|---|---|---|
|Registered Office: 1001A,B Wing 10th Floor, The Capital|||||||||
|Bandra Kurla Complex, Bandra-East, Mumbai-400 051|||||||||
|Tel No. 022 4000 9100|||||||||
|Website : www.npci.org.in|||||||||
|CIN: U74990MH2008NPL189067|||||||||
|Unified Payment Interface ( UPI )|||||||||
|Day Wise statement of Goods and Services Tax (GST) on interchange fee received from UPI members prepared by NPCI|||||||||
|Ref.No.:||ABC/PAY/GST/YYYY-YY/DDMMDDMM/Month<br>No/XXXXXXXXXX|||||||
|Report for period:||DD/MMM/YYYY To DD/MMM/YYYY|||||||
|Report Generated Date:||MMM DD YYYY HH:MM:SS AM/PM|||||||
|Paying Bank Name:||ABC Bank|||||||
|Address:|||||||||
|Paying Bank GSTIN:|||||||||
|Date|Interchange Fees – Transaction||||Interchange Fees – Disputes / Adjustments||||
||Interchange<br>Fees|CGST @<br>9%|SGST / UGST @<br>9 %|IGST @ 18%|Interchange<br>Fees|CGST<br>@ 9%|SGST /<br>UGST<br>@ 9 %|IGST<br>@<br>18%|
|05/01/2024|XX|XX|XX|XX|XX|XX|XX|XX|
|05/02/2024|XX|XX|XX|XX|XX|XX|XX|XX|
|05/03/2024|XX|XX|XX|XX|XX|XX|XX|XX|
|05/04/2024|XX|XX|XX|XX|XX|XX|XX|XX|
|05/05/2024|XX|XX|XX|XX|XX|XX|XX|XX|
|NPCI|XX|XX|XX|XX|XX|XX|XX|XX|
|Total|XX|XX|XX|XX|XX|XX|XX|XX|

<!-- PAGE 139 -->
# PAGE 139

[IMAGE_286]

![IMAGE_286](images/IMAGE_286.jpeg)

**IMAGE_286 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_287]

![IMAGE_287](images/IMAGE_287.png)

**IMAGE_287 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 139/158 
 
42.23) BANK WISE RECEIVABLE REPORT (ANNEXURE – 23) 
 
National Payments Corporation of India 
Registered Office: 1001A,B Wing 10th Floor, The Capital 
Bandra Kurla Complex, Bandra-East, Mumbai-400 051 
Tel No. 022 4000 9100 
Website : www.npci.org.in 
CIN: U74990MH2008NPL189067 
Unified Payment Interface ( UPI ) 
Bank Wise statement of Goods and Services Tax (GST) on interchange fee received from UPI members prepared by NPCI 
Ref.No.: 
ABC/REV/GST/YYYY-
YY/DDMMDDMM/Month No/XXXXXXXXXX 
Report 
for 
period: 
DD/MMM/YYYY To DD/MMM/YYYY 
Report 
Generated 
Date: 
MMM DD YYYY HH:MM:SS AM/PM 
Receiving 
Bank Name: 
ABC Bank 
Address: 
Receiving 
Bank GSTIN: 
Bank 
Nam
e 
Add
res
s 
Inter State / 
Intra State 
GSTIN 
Interchange Fees – Transaction 
Interchange Fees – Disputes / 
Adjustments 
Intercha
nge Fees 
CGST @ 
9% 
SGST 
/ 
UGST 
@ 9 % 
IGST 
@ 
18% 
Interc
hange 
Fees 
C
GS
T 
@ 
9% 
SG
ST 
/ 
UG
ST 
@ 
9 
% 
IG
ST 
@ 
18
% 
DEF 
Bank 
Intra State 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
GHI 
Bank 
Intra State 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
JKL 
Bank 
Intra State 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
Total 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
XX 
 
42.24) DATE WISE RECEIVABLE REPORT (ANNEXURE – 24) 
National Payments Corporation of India 
Registered Office: 1001A,B Wing 10th Floor, The Capital 
Bandra Kurla Complex, Bandra-East, Mumbai-400 051 
Tel No. 022 4000 9100 
Website : www.npci.org.in 
CIN: U74990MH2008NPL189067 
Unified Payment Interface ( UPI ) 
Day Wise statement of Goods and Services Tax (GST) on interchange fee received from UPI members prepared by NPCI 
Ref.No.: 
ABC/REV/GST/YYYY-YY/DDMMDDMM/Month 
No/XXXXXXXXXX
```

**Machine-readable table extraction(s) for PAGE 139**

#### TABLE_139_01 (source extraction: `page139_table01.csv`)

|National Payments Corporation of India||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|
|Registered Office: 1001A,B Wing 10th Floor, The Capital||||||||||||
|Bandra Kurla Complex, Bandra-East, Mumbai-400 051||||||||||||
|Tel No. 022 4000 9100||||||||||||
|Website : www.npci.org.in||||||||||||
|CIN: U74990MH2008NPL189067||||||||||||
|Unified Payment Interface ( UPI )||||||||||||
|Bank Wise statement of Goods and Services Tax (GST) on interchange fee received from UPI members prepared by NPCI||||||||||||
|Ref.No.:||ABC/REV/GST/YYYY-<br>YY/DDMMDDMM/Month No/XXXXXXXXXX||||||||||
|Report for<br>period:||DD/MMM/YYYY To DD/MMM/YYYY||||||||||
|Report<br>Generated<br>Date:||MMM DD YYYY HH:MM:SS AM/PM||||||||||
|Receiving<br>Bank Name:||ABC Bank||||||||||
|Address:||||||||||||
|Receiving<br>Bank GSTIN:||||||||||||
|Bank<br>Nam<br>e|Add<br>res<br>s|Inter State /<br>Intra State|GSTIN|Interchange Fees – Transaction||||Interchange Fees – Disputes /<br>Adjustments||||
|||||Intercha<br>nge Fees|CGST @<br>9%|SGST<br>/<br>UGST<br>@ 9 %|IGST<br>@<br>18%|Interc<br>hange<br>Fees|C<br>GS<br>T<br>@<br>9%|SG<br>ST<br>/<br>UG<br>ST<br>@<br>9<br>%|IG<br>ST<br>@<br>18<br>%|
|DEF<br>Bank||Intra State||XX|XX|XX|XX|XX|XX|XX|XX|
|GHI<br>Bank||Intra State||XX|XX|XX|XX|XX|XX|XX|XX|
|JKL<br>Bank||Intra State||XX|XX|XX|XX|XX|XX|XX|XX|
|Total||||XX|XX|XX|XX|XX|XX|XX|XX|

#### TABLE_139_02 (source extraction: `page139_table02.csv`)

|National Payments Corporation of India||||||
|---|---|---|---|---|---|
|Registered Office: 1001A,B Wing 10th Floor, The Capital||||||
|Bandra Kurla Complex, Bandra-East, Mumbai-400 051||||||
|Tel No. 022 4000 9100||||||
|Website : www.npci.org.in||||||
|CIN: U74990MH2008NPL189067||||||
|Unified Payment Interface ( UPI )||||||
|Day Wise statement of Goods and Services Tax (GST) on interchange fee received from UPI members prepared by NPCI||||||
|Ref.No.:|ABC/REV/GST/YYYY-YY/DDMMDDMM/Month<br>No/XXXXXXXXXX|||||

<!-- PAGE 140 -->
# PAGE 140

[IMAGE_288]

![IMAGE_288](images/IMAGE_288.jpeg)

**IMAGE_288 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_289]

![IMAGE_289](images/IMAGE_289.png)

**IMAGE_289 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 140/158 
Report for period: 
DD/MMM/YYYY To DD/MMM/YYYY 
 
 
 
 
Report Generated Date: 
MMM DD YYYY HH:MM:SS AM/PM 
Receiving Bank Name: 
ABC Bank 
Address: 
Receiving Bank GSTIN: 
 
 
 
 
 
Date 
Interchange Fees – Transaction 
Interchange Fees – Disputes / Adjustments 
Interchange 
Fees 
CGST @ 9% 
SGST / UGST 
@ 9 % 
IGST @ 18% 
Interchange 
Fees 
CGST 
@ 9% 
SGST / 
UGST 
@ 9 % 
IGST 
@ 
18% 
05/01/2024 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
05/02/2024 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
05/03/2024 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
05/04/2024 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
05/05/2024 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
Total 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
XXX 
 
42.25) ACCOUNT TYPE (ANNEXURE – 25) 
Savings – 00 
Current – 01 
Default – 02 
NRE – 03 
NRO – 04 
Credit Card – 05 
PPI Wallet – 06 
Credit – 07 
SOD – 08 
UOD – 09 
UPI Credit – 31 
Credit on Fixed Deposits – 48 
Personal loan – 52 
Business Loan – 53 
 
42.26) INITIATION MODE (ANNEXURE – 26) 
00 – Default 
01 – QR Code 
02 – Secure QR Code 
03 – BHARAT QR Code 
04 – Intent 
05 – Secure Intent 
06 – NFC 
07 – BLE
```

**Machine-readable table extraction(s) for PAGE 140**

#### TABLE_140_01 (source extraction: `page140_table01.csv`)

|Report for period:||DD/MMM/YYYY To DD/MMM/YYYY|||||||
|---|---|---|---|---|---|---|---|---|
|Report Generated Date:||MMM DD YYYY HH:MM:SS AM/PM|||||||
|Receiving Bank Name:||ABC Bank|||||||
|Address:|||||||||
|Receiving Bank GSTIN:|||||||||
|Date|Interchange Fees – Transaction||||Interchange Fees – Disputes / Adjustments||||
||Interchange<br>Fees|CGST @ 9%|SGST / UGST<br>@ 9 %|IGST @ 18%|Interchange<br>Fees|CGST<br>@ 9%|SGST /<br>UGST<br>@ 9 %|IGST<br>@<br>18%|
|05/01/2024|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|
|05/02/2024|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|
|05/03/2024|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|
|05/04/2024|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|
|05/05/2024|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|
|Total|XXX|XXX|XXX|XXX|XXX|XXX|XXX|XXX|

#### TABLE_140_02 (source extraction: `page140_table02.csv`)

|Savings – 00|
|---|
|Current – 01|
|Default – 02|
|NRE – 03|
|NRO – 04|
|Credit Card – 05|
|PPI Wallet – 06|
|Credit – 07|
|SOD – 08|
|UOD – 09|
|UPI Credit – 31|
|Credit on Fixed Deposits – 48|
|Personal loan – 52|
|Business Loan – 53|

#### TABLE_140_03 (source extraction: `page140_table03.csv`)

|00 – Default|
|---|
|01 – QR Code|
|02 – Secure QR Code|
|03 – BHARAT QR Code|
|04 – Intent|
|05 – Secure Intent|
|06 – NFC|
|07 – BLE|

<!-- PAGE 141 -->
# PAGE 141

[IMAGE_290]

![IMAGE_290](images/IMAGE_290.jpeg)

**IMAGE_290 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_291]

![IMAGE_291](images/IMAGE_291.png)

**IMAGE_291 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 141/158 
08 – UHF 
09 – Aadhaar 
10 – SDK (Software development Kit) 
11 – Mandate 
12 – FIR 
13 – QR Mandate 
14 – BBPS 
15 – Dynamic QR Code 
19 – Online Static QR Code 
27 – Self Payments NCMC 
28 – Other Payments NCMC 
 
42.27) PURPOSE CODE (ANNEXURE – 27) 
 
00 – Default 
01 – SEBI 
02 – AMC 
03 – Travel 
04 – Hospitality 
05 – Hospital 
06 – Telecom 
07 – Insurance 
08 – Education 
09 – Gifting 
10 – BBPS 
11 – Global UPI 
12 – Metro ATM QR 
13 – Non-metro ATM QR 
14 – SI 
15 – Corporate disbursement 
18 – Government Voucher 
19 – Corporate Voucher 
25 – G Sec through RBI RDS 
41 – LiteReg 
42 – LiteTopup 
43 – LiteDereg 
44 – LiteFin 
45 – LiteFinOff
```

**Machine-readable table extraction(s) for PAGE 141**

#### TABLE_141_01 (source extraction: `page141_table01.csv`)

|08 – UHF|
|---|
|09 – Aadhaar|
|10 – SDK (Software development Kit)|
|11 – Mandate|
|12 – FIR|
|13 – QR Mandate|
|14 – BBPS|
|15 – Dynamic QR Code|
|19 – Online Static QR Code|
|27 – Self Payments NCMC|
|28 – Other Payments NCMC|

#### TABLE_141_02 (source extraction: `page141_table02.csv`)

|00 – Default|
|---|
|01 – SEBI|
|02 – AMC|
|03 – Travel|
|04 – Hospitality|
|05 – Hospital|
|06 – Telecom|
|07 – Insurance|
|08 – Education|
|09 – Gifting|
|10 – BBPS|
|11 – Global UPI|
|12 – Metro ATM QR|
|13 – Non-metro ATM QR|
|14 – SI|
|15 – Corporate disbursement|
|18 – Government Voucher|
|19 – Corporate Voucher|
|25 – G Sec through RBI RDS|
|41 – LiteReg|
|42 – LiteTopup|
|43 – LiteDereg|
|44 – LiteFin|
|45 – LiteFinOff|

<!-- PAGE 142 -->
# PAGE 142

[IMAGE_292]

![IMAGE_292](images/IMAGE_292.jpeg)

**IMAGE_292 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_293]

![IMAGE_293](images/IMAGE_293.png)

**IMAGE_293 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 142/158 
71 – LiteReg 
82 – LiteTopup 
83 – Embedded 
87 – Delegate 
A0 – Government Voucher 
A1 – Government Voucher 
A2 – Government Voucher 
A3 – Government Voucher 
A4 – Government Voucher 
A5 – Government Voucher 
A6 – Government Voucher 
A7 – Government Voucher 
A8 – Government Voucher 
A9 – Government Voucher 
0A – Corporate Voucher 
1A – Corporate Voucher 
2A – Corporate Voucher 
3A – Corporate Voucher 
4A – Corporate Voucher 
5A – Corporate Voucher 
6A – Corporate Voucher 
7A – Corporate Voucher 
8A – Corporate Voucher 
9A – Corporate Voucher 
B0 – Government Voucher 
B1 – Government Voucher 
B2 – Government Voucher 
B3 – Government Voucher 
B4 – Government Voucher 
B5 – Government Voucher 
B6 – Government Voucher 
B7 – Government Voucher 
B8 – Government Voucher 
B9 – Government Voucher 
C0 – Government Voucher 
C1 – Government Voucher 
C2 – Government Voucher 
C3 – Government Voucher
```

**Machine-readable table extraction(s) for PAGE 142**

#### TABLE_142_01 (source extraction: `page142_table01.csv`)

|71 – LiteReg|
|---|
|82 – LiteTopup|
|83 – Embedded|
|87 – Delegate|
|A0 – Government Voucher|
|A1 – Government Voucher|
|A2 – Government Voucher|
|A3 – Government Voucher|
|A4 – Government Voucher|
|A5 – Government Voucher|
|A6 – Government Voucher|
|A7 – Government Voucher|
|A8 – Government Voucher|
|A9 – Government Voucher|
|0A – Corporate Voucher|
|1A – Corporate Voucher|
|2A – Corporate Voucher|
|3A – Corporate Voucher|
|4A – Corporate Voucher|
|5A – Corporate Voucher|
|6A – Corporate Voucher|
|7A – Corporate Voucher|
|8A – Corporate Voucher|
|9A – Corporate Voucher|
|B0 – Government Voucher|
|B1 – Government Voucher|
|B2 – Government Voucher|
|B3 – Government Voucher|
|B4 – Government Voucher|
|B5 – Government Voucher|
|B6 – Government Voucher|
|B7 – Government Voucher|
|B8 – Government Voucher|
|B9 – Government Voucher|
|C0 – Government Voucher|
|C1 – Government Voucher|
|C2 – Government Voucher|
|C3 – Government Voucher|

<!-- PAGE 143 -->
# PAGE 143

[IMAGE_294]

![IMAGE_294](images/IMAGE_294.jpeg)

**IMAGE_294 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_295]

![IMAGE_295](images/IMAGE_295.png)

**IMAGE_295 - visual representation**
Screenshot-style sample data lines rendered as monospaced text. Three comma-separated records are shown, with masked identifiers (using X characters), numeric values, timestamps, and date/time strings such as “Thu Aug 31 11:08:04 IST 2023”, “Wed Mar 27 18:28:53 IST 2024”, and “Sun Nov 19 19:55:53 IST 2023”. The image preserves the masked/sample-data format shown in the document.

[IMAGE_296]

![IMAGE_296](images/IMAGE_296.png)

**IMAGE_296 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 143/158 
C4 – Government Voucher 
C5 – Government Voucher 
C6 – Government Voucher 
C7 – Government Voucher 
C8 – Government Voucher 
C9 – Government Voucher 
 
42.28) LITE BALANCE REPORT (ANNEXURE – 28) 
 
42.29) ADJUSTMENT REASON CODES (ANNEXURE – 29) 
NAME OF THE 
DISPUTE 
DISPUTE 
FLAG 
REASON 
CODE 
REASON CODE DESCRIPTION 
TXNSUBTYPE 
Arbitration 
Acceptance 
ACA 
AT 
Attributing to the Technical issue at 
bank/aggregator/merchant 
U2 
AC 
Attributing to the Customer 
U2 
1101 
Illegible Fulfilment 
U2 
U3 
UC 
Arbitration 
Continuation 
ACC 
1102 
Customer has still not received the 
service 
U2 
U3 
UC 
Arbitration 
Raise 
AR 
1100 
Both the parties denies to agree 
U2 
U3 
UC 
Arbitration 
Withdrawn 
ACW 
1103 
Customer has received the service 
later 
U2 
U3 
UC 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
BGGC 
BGA1 
Amount recovered for wrong credit 
charge back after expiry of TAT 
U2 
U3 
UC 
BGA2 
Amount recovered for fraud charge 
back after expiry of TAT 
U2 
U3 
UC 
BGA3 
Good faith request from another bank 
U2 
U3 
UC 
BGA4 
TAT expire disputes (e.g. 
U2
```

**Machine-readable table extraction(s) for PAGE 143**

#### TABLE_143_01 (source extraction: `page143_table01.csv`)

|C4 – Government Voucher|
|---|
|C5 – Government Voucher|
|C6 – Government Voucher|
|C7 – Government Voucher|
|C8 – Government Voucher|
|C9 – Government Voucher|

#### TABLE_143_02 (source extraction: `page143_table02.csv`)

|NAME OF THE<br>DISPUTE|DISPUTE<br>FLAG|REASON<br>CODE|REASON CODE DESCRIPTION|TXNSUBTYPE|
|---|---|---|---|---|
|Arbitration<br>Acceptance|ACA|AT|Attributing to the Technical issue at<br>bank/aggregator/merchant|U2|
|||AC|Attributing to the Customer|U2|
|||1101|Illegible Fulfilment|U2|
|||||U3|
|||||UC|
|Arbitration<br>Continuation|ACC|1102|Customer has still not received the<br>service|U2|
|||||U3|
|||||UC|
|Arbitration<br>Raise|AR|1100|Both the parties denies to agree|U2|
|||||U3|
|||||UC|
|Arbitration<br>Withdrawn|ACW|1103|Customer has received the service<br>later|U2|
|||||U3|
|||||UC|
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment|BGGC|BGA1|Amount recovered for wrong credit<br>charge back after expiry of TAT|U2|
|||||U3|
|||||UC|
|||BGA2|Amount recovered for fraud charge<br>back after expiry of TAT|U2|
|||||U3|
|||||UC|
|||BGA3|Good faith request from another bank|U2|
|||||U3|
|||||UC|
|||BGA4|TAT expire disputes (e.g.|U2|

<!-- PAGE 144 -->
# PAGE 144

[IMAGE_297]

![IMAGE_297](images/IMAGE_297.jpeg)

**IMAGE_297 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_298]

![IMAGE_298](images/IMAGE_298.png)

**IMAGE_298 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 144/158 
Accept/Reject of the Dispute lifecycle, 
merchants refund (Credit 
adjustments/RET) 
U3 
UC 
BGA5 
Technical issues by bank 
U2 
U3 
UC 
BGA6 
Dispute incorrectly 
accepted/represented 
U2 
U3 
UC 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
Acceptance 
BGAC 
BCA1 
Good faith Acceptance for Credit 
RGGC 
U2 
U3 
UC 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
Deemed 
Acceptance 
BGCD 
BCA2 
Good faith Deemed Acceptance for 
RGGC 
U2 
U3 
UC 
Beneficiary 
Generic Good 
Faith Credit 
Adjustment 
Representment 
BGRC 
BGR1 
Account closed 
U2 
U3 
UC 
BGR2 
Account does not exist 
U2 
U3 
UC 
BGR3 
Party instructions 
U2 
U3 
UC 
BGR4 
NRI account 
U2 
U3 
UC 
BGR5 
Account freeze 
U2 
U3 
UC 
BGR6 
Invalid beneficiary details 
U2 
U3 
UC 
BGR7 
Any other reason 
U2 
U3
```

**Machine-readable table extraction(s) for PAGE 144**

#### TABLE_144_01 (source extraction: `page144_table01.csv`)

||||Accept/Reject of the Dispute lifecycle,<br>merchants refund (Credit<br>adjustments/RET)|U3|
|---|---|---|---|---|
|||||UC|
|||BGA5|Technical issues by bank|U2|
|||||U3|
|||||UC|
|||BGA6|Dispute incorrectly<br>accepted/represented|U2|
|||||U3|
|||||UC|
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment<br>Acceptance|BGAC|BCA1|Good faith Acceptance for Credit<br>RGGC|U2|
|||||U3|
|||||UC|
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment<br>Deemed<br>Acceptance|BGCD|BCA2|Good faith Deemed Acceptance for<br>RGGC|U2|
|||||U3|
|||||UC|
|Beneficiary<br>Generic Good<br>Faith Credit<br>Adjustment<br>Representment|BGRC|BGR1|Account closed|U2|
|||||U3|
|||||UC|
|||BGR2|Account does not exist|U2|
|||||U3|
|||||UC|
|||BGR3|Party instructions|U2|
|||||U3|
|||||UC|
|||BGR4|NRI account|U2|
|||||U3|
|||||UC|
|||BGR5|Account freeze|U2|
|||||U3|
|||||UC|
|||BGR6|Invalid beneficiary details|U2|
|||||U3|
|||||UC|
|||BGR7|Any other reason|U2|
|||||U3|

<!-- PAGE 145 -->
# PAGE 145

[IMAGE_299]

![IMAGE_299](images/IMAGE_299.jpeg)

**IMAGE_299 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_300]

![IMAGE_300](images/IMAGE_300.png)

**IMAGE_300 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 145/158 
UC 
Chargeback 
Acceptance 
A 
AT 
Attributing to the Technical issue at 
bank/aggregator/merchant 
U2 
AC 
Attributing to the Customer 
U2 
1095 
Merchant was unable to provide the 
service 
U2 
111 
Beneficiary bank unable to credit their 
customer account 
U2 
U3 
UC 
Chargeback 
Raise 
B 
1061 
Credit not processed for cancelled or 
returned goods and services 
U2 
1062 
Goods and Services not as described / 
defective 
U2 
1063 
Paid by alternate means 
U2 
1064 
Goods or Services Not Provided / Not 
Received 
U2 
1065 
Account debited but transaction 
confirmation not received at merchant 
location 
U2 
1081 
Transaction not steeled within the 
specified timeframes 
U2 
1084 
Duplicate /Multiple Transaction 
U2 
1085 
Card holder was charged more than 
the transaction amount 
U2 
108 
Remitter account debited but 
beneficiary account not credited 
U2 
U3 
UC 
Complaint 
Raise 
PBRB 
U008 
Goods/services are not provided for 
approved transaction 
U2 
U009 
Customer account not credited back 
for declined transaction 
U2 
U021 
Credit not processed for cancelled or 
returned goods & services 
U2 
U022 
Account debited but transaction 
confirmation not received at merchant 
location 
U2 
U023 
Paid by alternate means/Duplicate 
payment 
U2 
U005 
Customer account has not yet 
reversed for a declined pay 
transaction 
U3
```

**Machine-readable table extraction(s) for PAGE 145**

#### TABLE_145_01 (source extraction: `page145_table01.csv`)

|||||UC|
|---|---|---|---|---|
|Chargeback<br>Acceptance|A|AT|Attributing to the Technical issue at<br>bank/aggregator/merchant|U2|
|||AC|Attributing to the Customer|U2|
|||1095|Merchant was unable to provide the<br>service|U2|
|||111|Beneficiary bank unable to credit their<br>customer account|U2|
|||||U3|
|||||UC|
|Chargeback<br>Raise|B|1061|Credit not processed for cancelled or<br>returned goods and services|U2|
|||1062|Goods and Services not as described /<br>defective|U2|
|||1063|Paid by alternate means|U2|
|||1064|Goods or Services Not Provided / Not<br>Received|U2|
|||1065|Account debited but transaction<br>confirmation not received at merchant<br>location|U2|
|||1081|Transaction not steeled within the<br>specified timeframes|U2|
|||1084|Duplicate /Multiple Transaction|U2|
|||1085|Card holder was charged more than<br>the transaction amount|U2|
|||108|Remitter account debited but<br>beneficiary account not credited|U2|
|||||U3|
|||||UC|
|Complaint<br>Raise|PBRB|U008|Goods/services are not provided for<br>approved transaction|U2|
|||U009|Customer account not credited back<br>for declined transaction|U2|
|||U021|Credit not processed for cancelled or<br>returned goods & services|U2|
|||U022|Account debited but transaction<br>confirmation not received at merchant<br>location|U2|
|||U023|Paid by alternate means/Duplicate<br>payment|U2|
|||U005|Customer account has not yet<br>reversed for a declined pay<br>transaction|U3|

<!-- PAGE 146 -->
# PAGE 146

[IMAGE_301]

![IMAGE_301](images/IMAGE_301.jpeg)

**IMAGE_301 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_302]

![IMAGE_302](images/IMAGE_302.png)

**IMAGE_302 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 146/158 
U010 
Beneficiary account is not credited for 
successful pay transaction 
U3 
UC 
U005 
Customer account has not yet 
reversed for a declined pay 
transaction 
UC 
Credit 
Adjustment 
C 
1061 
Credit not processed for cancelled or 
returned goods and services 
U2 
1062 
Goods and Services not as described / 
defective 
U2 
1063 
Paid by alternate means 
U2 
1064 
Goods or Services Not Provided / Not 
Received 
U2 
1065 
Account debited but transaction 
confirmation not received at merchant 
location 
U2 
1090 
Others 
U2 
U3 
UC 
1094 
Beneficiary bank unable to credit their 
customer account 
U2 
U3 
UC 
1092 
Card holder was charged more than 
the transaction amount 
U2 
U3 
UC 
1091 
Non Matching account number 
U2 
U3 
UC 
1084 
Duplicate /Multiple Transaction 
U2 
U3 
UC 
1065 
Account debited but transaction 
confirmation not received at merchant 
location 
U2 
1093 
Credit not Processed 
U2 
Debit Reversal 
Confirmation 
DRC 
UT1 
Account Closed 
U2 
U3 
UC 
UT2 
Party instructions 
U2 
U3
```

**Machine-readable table extraction(s) for PAGE 146**

#### TABLE_146_01 (source extraction: `page146_table01.csv`)

|||U010|Beneficiary account is not credited for<br>successful pay transaction|U3|
|---|---|---|---|---|
|||||UC|
|||U005|Customer account has not yet<br>reversed for a declined pay<br>transaction|UC|
|Credit<br>Adjustment|C|1061|Credit not processed for cancelled or<br>returned goods and services|U2|
|||1062|Goods and Services not as described /<br>defective|U2|
|||1063|Paid by alternate means|U2|
|||1064|Goods or Services Not Provided / Not<br>Received|U2|
|||1065|Account debited but transaction<br>confirmation not received at merchant<br>location|U2|
|||1090|Others|U2|
|||||U3|
|||||UC|
|||1094|Beneficiary bank unable to credit their<br>customer account|U2|
|||||U3|
|||||UC|
|||1092|Card holder was charged more than<br>the transaction amount|U2|
|||||U3|
|||||UC|
|||1091|Non Matching account number|U2|
|||||U3|
|||||UC|
|||1084|Duplicate /Multiple Transaction|U2|
|||||U3|
|||||UC|
|||1065|Account debited but transaction<br>confirmation not received at merchant<br>location|U2|
|||1093|Credit not Processed|U2|
|Debit Reversal<br>Confirmation|DRC|UT1|Account Closed|U2|
|||||U3|
|||||UC|
|||UT2|Party instructions|U2|
|||||U3|

<!-- PAGE 147 -->
# PAGE 147

[IMAGE_303]

![IMAGE_303](images/IMAGE_303.jpeg)

**IMAGE_303 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_304]

![IMAGE_304](images/IMAGE_304.png)

**IMAGE_304 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 147/158 
UC 
UT3 
Credit freezed 
U2 
U3 
UC 
UT4 
Duplicate Processing 
U2 
U3 
UC 
UT5 
Unable to update CBS 
U2 
U3 
UC 
105 
Goods/services provided 
U2 
U3 
UC 
UT6 
Technical error 
U2 
U3 
UC 
103 
Customer account reversed manually 
post reconciliation 
U2 
U3 
UC 
102 
Customer account reversed online 
U2 
U3 
UC 
104 
Online decline response failed 
U2 
U3 
UC 
NO 
No Original transaction found 
U2 
U3 
UC 
Differed 
Arbitration 
Raise 
FAR 
127 
Customer is complaining even after 
raising Deferred Chargeback and Pre-
Arbitration on Deferred Chargeback 
where both have been rejected by 
Beneficiary Bank 
U2 
U3 
UC 
Differed 
Chargeback 
Acceptance 
FA 
122 
Customer a/c is not credited, TCC 
raised inadvertently 
U2 
U3 
UC 
AC 
Attributing to the Customer 
U2 
AT 
Attributing to the Technical issue at 
bank/aggregator/merchant 
U2
```

**Machine-readable table extraction(s) for PAGE 147**

#### TABLE_147_01 (source extraction: `page147_table01.csv`)

|||||UC|
|---|---|---|---|---|
|||UT3|Credit freezed|U2|
|||||U3|
|||||UC|
|||UT4|Duplicate Processing|U2|
|||||U3|
|||||UC|
|||UT5|Unable to update CBS|U2|
|||||U3|
|||||UC|
|||105|Goods/services provided|U2|
|||||U3|
|||||UC|
|||UT6|Technical error|U2|
|||||U3|
|||||UC|
|||103|Customer account reversed manually<br>post reconciliation|U2|
|||||U3|
|||||UC|
|||102|Customer account reversed online|U2|
|||||U3|
|||||UC|
|||104|Online decline response failed|U2|
|||||U3|
|||||UC|
|||NO|No Original transaction found|U2|
|||||U3|
|||||UC|
|Differed<br>Arbitration<br>Raise|FAR|127|Customer is complaining even after<br>raising Deferred Chargeback and Pre-<br>Arbitration on Deferred Chargeback<br>where both have been rejected by<br>Beneficiary Bank|U2|
|||||U3|
|||||UC|
|Differed<br>Chargeback<br>Acceptance|FA|122|Customer a/c is not credited, TCC<br>raised inadvertently|U2|
|||||U3|
|||||UC|
|||AC|Attributing to the Customer|U2|
|||AT|Attributing to the Technical issue at<br>bank/aggregator/merchant|U2|

<!-- PAGE 148 -->
# PAGE 148

[IMAGE_305]

![IMAGE_305](images/IMAGE_305.jpeg)

**IMAGE_305 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_306]

![IMAGE_306](images/IMAGE_306.png)

**IMAGE_306 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 148/158 
Differed 
Chargeback 
Raise 
FB 
121 
TCC has been raised but customer 
still complaining that Beneficiary a/c 
is not credited 
U2 
U3 
UC 
1065 
Account debited but transaction 
confirmation not received at merchant 
location 
U2 
Differed Pre-
Arbitration 
Acceptance 
FAP 
125 
Customer a/c is not credited, TCC and 
Re-Presentment raised inadvertently 
U2 
U3 
UC 
AC 
Attributing to the Customer 
U2 
AT 
Attributing to the Technical issue at 
bank/aggregator/merchant 
U2 
Differed Pre-
Arbitration 
Declined 
FPR 
126 
Customer a/c is credited successfully 
and TCC and Re-Presentment raised 
accordingly 
U2 
U3 
UC 
Differed Pre-
Arbitration 
Raise 
FP 
124 
Customer is still complaining for not 
crediting the beneficiary customer 
a/c. 
U2 
U3 
UC 
Differed Re-
presentment 
Raise 
FR 
123 
Customer a/c is credited successfully 
and TCC raised accordingly 
U2 
U3 
UC 
Fraud 
Chargeback 
Accept 
FCA 
129 
Amount has been recovered 
successfully from the fraudulent 
customer account 
U2 
U3 
UC 
Fraud 
Chargeback 
Raise 
FC 
128 
Chargeback on Fraudulent 
Transaction 
U2 
U3 
UC 
Fraud 
Chargeback 
Representment 
FCR 
132 
Others 
U2 
U3 
UC 
130 
Lien marked however, customer 
account is not having sufficient 
balance to debit 
U2 
U3 
UC 
131 
FIR Copy not provided for the disputed 
transaction 
U2 
U3 
UC 
Online Refund 
REF 
1061 
Refund not processed for cancelled or 
returned goods / services. 
U2 
U3 
1065 
Customer account debited but 
U2
```

**Machine-readable table extraction(s) for PAGE 148**

#### TABLE_148_01 (source extraction: `page148_table01.csv`)

|Differed<br>Chargeback<br>Raise|FB|121|TCC has been raised but customer<br>still complaining that Beneficiary a/c<br>is not credited|U2|
|---|---|---|---|---|
|||||U3|
|||||UC|
|||1065|Account debited but transaction<br>confirmation not received at merchant<br>location|U2|
|Differed Pre-<br>Arbitration<br>Acceptance|FAP|125|Customer a/c is not credited, TCC and<br>Re-Presentment raised inadvertently|U2|
|||||U3|
|||||UC|
|||AC|Attributing to the Customer|U2|
|||AT|Attributing to the Technical issue at<br>bank/aggregator/merchant|U2|
|Differed Pre-<br>Arbitration<br>Declined|FPR|126|Customer a/c is credited successfully<br>and TCC and Re-Presentment raised<br>accordingly|U2|
|||||U3|
|||||UC|
|Differed Pre-<br>Arbitration<br>Raise|FP|124|Customer is still complaining for not<br>crediting the beneficiary customer<br>a/c.|U2|
|||||U3|
|||||UC|
|Differed Re-<br>presentment<br>Raise|FR|123|Customer a/c is credited successfully<br>and TCC raised accordingly|U2|
|||||U3|
|||||UC|
|Fraud<br>Chargeback<br>Accept|FCA|129|Amount has been recovered<br>successfully from the fraudulent<br>customer account|U2|
|||||U3|
|||||UC|
|Fraud<br>Chargeback<br>Raise|FC|128|Chargeback on Fraudulent<br>Transaction|U2|
|||||U3|
|||||UC|
|Fraud<br>Chargeback<br>Representment|FCR|132|Others|U2|
|||||U3|
|||||UC|
|||130|Lien marked however, customer<br>account is not having sufficient<br>balance to debit|U2|
|||||U3|
|||||UC|
|||131|FIR Copy not provided for the disputed<br>transaction|U2|
|||||U3|
|||||UC|
|Online Refund|REF|1061|Refund not processed for cancelled or<br>returned goods / services.|U2|
|||||U3|
|||1065|Customer account debited but|U2|

<!-- PAGE 149 -->
# PAGE 149

[IMAGE_307]

![IMAGE_307](images/IMAGE_307.jpeg)

**IMAGE_307 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_308]

![IMAGE_308](images/IMAGE_308.png)

**IMAGE_308 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 149/158 
transaction confirmation not received 
by merchant. 
U3 
UC 
1084 
Duplicate /Multiple Transaction. 
U2 
U3 
UC 
1064 
Non-fulfilment of Goods / Services. 
U2 
U3 
UC 
Pre-Arbitration 
Acceptance 
AP 
AC 
Attributing to the Customer 
U2 
1099 
Services not provided by the merchant 
U2 
AT 
Attributing to the Technical issue at 
bank/aggregator/merchant 
U2 
111 
Duplicate Processing 
U2 
U3 
UC 
Pre-Arbitration 
Declined 
PR 
1098 
Services provided later see supporting 
documents 
U2 
113 
Beneficiary account credited 
manually post reconciliation 
U2 
U3 
UC 
112 
Beneficiary account has been credited 
online 
U2 
U3 
UC 
Pre-Arbitration 
Raise 
P 
1097 
Customer is still claiming that 
services are not delivered 
U2 
109 
Remitter bank customer still disputes 
that beneficiary account is not 
credited 
U2 
U3 
UC 
Refund 
Reversal 
Confirmation 
RRC 
501 
Customer Account has been credited 
U2 
U3 
UC 
502 
Remitter TimeOut 
U2 
U3 
UC 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
RGGC 
RGA1 
Good faith request from another bank 
U2 
U3 
UC 
RGA2 
TAT expire disputes 
U2 
U3
```

**Machine-readable table extraction(s) for PAGE 149**

#### TABLE_149_01 (source extraction: `page149_table01.csv`)

||||transaction confirmation not received<br>by merchant.|U3|
|---|---|---|---|---|
|||||UC|
|||1084|Duplicate /Multiple Transaction.|U2|
|||||U3|
|||||UC|
|||1064|Non-fulfilment of Goods / Services.|U2|
|||||U3|
|||||UC|
|Pre-Arbitration<br>Acceptance|AP|AC|Attributing to the Customer|U2|
|||1099|Services not provided by the merchant|U2|
|||AT|Attributing to the Technical issue at<br>bank/aggregator/merchant|U2|
|||111|Duplicate Processing|U2|
|||||U3|
|||||UC|
|Pre-Arbitration<br>Declined|PR|1098|Services provided later see supporting<br>documents|U2|
|||113|Beneficiary account credited<br>manually post reconciliation|U2|
|||||U3|
|||||UC|
|||112|Beneficiary account has been credited<br>online|U2|
|||||U3|
|||||UC|
|Pre-Arbitration<br>Raise|P|1097|Customer is still claiming that<br>services are not delivered|U2|
|||109|Remitter bank customer still disputes<br>that beneficiary account is not<br>credited|U2|
|||||U3|
|||||UC|
|Refund<br>Reversal<br>Confirmation|RRC|501|Customer Account has been credited|U2|
|||||U3|
|||||UC|
|||502|Remitter TimeOut|U2|
|||||U3|
|||||UC|
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment|RGGC|RGA1|Good faith request from another bank|U2|
|||||U3|
|||||UC|
|||RGA2|TAT expire disputes|U2|
|||||U3|

<!-- PAGE 150 -->
# PAGE 150

[IMAGE_309]

![IMAGE_309](images/IMAGE_309.jpeg)

**IMAGE_309 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_310]

![IMAGE_310](images/IMAGE_310.png)

**IMAGE_310 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 150/158 
UC 
RGA3 
Technical issues by bank 
U2 
U3 
UC 
RGA4 
Dispute incorrectly accepted/rejected 
U2 
U3 
UC 
RGA5 
Any other reason 
U2 
U3 
UC 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
Acceptance 
RGAC 
RCA1 
Good faith Acceptance for Credit 
BGGC 
U2 
U3 
UC 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
Deemed 
Acceptance 
RGCD 
RCA2 
Good faith Deemed Acceptance for 
BGGC 
U2 
U3 
UC 
Remitter 
Generic Good 
Faith Credit 
Adjustment 
Representment 
RGRC 
RGR1 
Account closed 
U2 
U3 
UC 
RGR2 
Account does not exist 
U2 
U3 
UC 
RGR3 
Party instructions 
U2 
U3 
UC 
RGR4 
NRI account 
U2 
U3 
UC 
RGR5 
Account freeze 
U2 
U3 
UC 
RGR6 
Invalid Remitter details 
U2 
U3 
UC
```

**Machine-readable table extraction(s) for PAGE 150**

#### TABLE_150_01 (source extraction: `page150_table01.csv`)

|||||UC|
|---|---|---|---|---|
|||RGA3|Technical issues by bank|U2|
|||||U3|
|||||UC|
|||RGA4|Dispute incorrectly accepted/rejected|U2|
|||||U3|
|||||UC|
|||RGA5|Any other reason|U2|
|||||U3|
|||||UC|
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment<br>Acceptance|RGAC|RCA1|Good faith Acceptance for Credit<br>BGGC|U2|
|||||U3|
|||||UC|
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment<br>Deemed<br>Acceptance|RGCD|RCA2|Good faith Deemed Acceptance for<br>BGGC|U2|
|||||U3|
|||||UC|
|Remitter<br>Generic Good<br>Faith Credit<br>Adjustment<br>Representment|RGRC|RGR1|Account closed|U2|
|||||U3|
|||||UC|
|||RGR2|Account does not exist|U2|
|||||U3|
|||||UC|
|||RGR3|Party instructions|U2|
|||||U3|
|||||UC|
|||RGR4|NRI account|U2|
|||||U3|
|||||UC|
|||RGR5|Account freeze|U2|
|||||U3|
|||||UC|
|||RGR6|Invalid Remitter details|U2|
|||||U3|
|||||UC|

<!-- PAGE 151 -->
# PAGE 151

[IMAGE_311]

![IMAGE_311](images/IMAGE_311.jpeg)

**IMAGE_311 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_312]

![IMAGE_312](images/IMAGE_312.png)

**IMAGE_312 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 151/158 
RGR7 
Any other reason 
U2 
U3 
UC 
Re-
presentment 
Raise 
R 
1096 
Services/Goods provided see the 
supporting document 
U2 
208 
Beneficiary account credited online 
U2 
U3 
UC 
209 
Beneficiary account credited 
manually post reconciliation 
U2 
U3 
UC 
Response to 
Complaint 
PR2C 
107 
Customer account credited online 
U2 
U3 
UC 
105 
Goods/services provided 
U2 
102 
Customer account reversed online 
U2 
U3 
UC 
103 
Customer account reversed manually 
post reconciliation 
U2 
U3 
UC 
106 
Goods/services not provided 
U2 
144 
Customer Account is not Debited-
General Decline 
U2 
U3 
UC 
109 
Beneficiary customer could not be 
credited have raised credit for RC 00, 
return adjustment for RC RB 
transactions 
U2 
U3 
UC 
108 
Customer Account Credited Post 
Reconciliation 
U3 
UC 
RET 
RET 
114 
Account closed 
U2 
U3 
UC 
119 
Invalid beneficiary details 
U2 
U3 
UC 
118 
Credit freezed 
U2 
U3
```

**Machine-readable table extraction(s) for PAGE 151**

#### TABLE_151_01 (source extraction: `page151_table01.csv`)

|||RGR7|Any other reason|U2|
|---|---|---|---|---|
|||||U3|
|||||UC|
|Re-<br>presentment<br>Raise|R|1096|Services/Goods provided see the<br>supporting document|U2|
|||208|Beneficiary account credited online|U2|
|||||U3|
|||||UC|
|||209|Beneficiary account credited<br>manually post reconciliation|U2|
|||||U3|
|||||UC|
|Response to<br>Complaint|PR2C|107|Customer account credited online|U2|
|||||U3|
|||||UC|
|||105|Goods/services provided|U2|
|||102|Customer account reversed online|U2|
|||||U3|
|||||UC|
|||103|Customer account reversed manually<br>post reconciliation|U2|
|||||U3|
|||||UC|
|||106|Goods/services not provided|U2|
|||144|Customer Account is not Debited-<br>General Decline|U2|
|||||U3|
|||||UC|
|||109|Beneficiary customer could not be<br>credited have raised credit for RC 00,<br>return adjustment for RC RB<br>transactions|U2|
|||||U3|
|||||UC|
|||108|Customer Account Credited Post<br>Reconciliation|U3|
|||||UC|
|RET|RET|114|Account closed|U2|
|||||U3|
|||||UC|
|||119|Invalid beneficiary details|U2|
|||||U3|
|||||UC|
|||118|Credit freezed|U2|
|||||U3|

<!-- PAGE 152 -->
# PAGE 152

[IMAGE_313]

![IMAGE_313](images/IMAGE_313.jpeg)

**IMAGE_313 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_314]

![IMAGE_314](images/IMAGE_314.png)

**IMAGE_314 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 152/158 
UC 
117 
NRI account 
U2 
U3 
UC 
116 
Party instructions 
U2 
U3 
UC 
115 
Account does not exist 
U2 
U3 
UC 
1065 
Account debited but transaction 
confirmation not received at merchant 
location 
U2 
120 
Any other reason 
U2 
1094 
Beneficiary bank unable to credit their 
customer account 
U3 
UC 
Return (Post 
TCC) 
120 
Any other reason 
U2 
TCC 
TCC 
102 
Beneficiary account has been credited 
online 
U2 
U3 
UC 
103 
Beneficiary account credited 
manually post reconciliation 
U2 
U3 
UC 
Wrong Credit 
Chargeback 
Acceptance 
WA 
WC2 
Amount has been recovered 
successfully from the unintended 
customer account 
U3 
UC 
Wrong Credit 
Chargeback 
Raise 
WC 
WC1 
Customer transferred funds to the 
unintended beneficiary account 
U3 
UC 
Wrong credit 
Representment 
WR 
WC5 
Others 
U3 
UC 
WC4 
Customer is not accessible for 
obtaining debit confirmation 
U3 
UC 
WC3 
Lien marked however customer a/c is 
not having sufficient balance to debit 
the customer a/c 
U3 
UC
```

**Machine-readable table extraction(s) for PAGE 152**

#### TABLE_152_01 (source extraction: `page152_table01.csv`)

|||||UC|
|---|---|---|---|---|
|||117|NRI account|U2|
|||||U3|
|||||UC|
|||116|Party instructions|U2|
|||||U3|
|||||UC|
|||115|Account does not exist|U2|
|||||U3|
|||||UC|
|||1065|Account debited but transaction<br>confirmation not received at merchant<br>location|U2|
|||120|Any other reason|U2|
|||1094|Beneficiary bank unable to credit their<br>customer account|U3|
|||||UC|
|Return (Post<br>TCC)||120|Any other reason|U2|
|TCC|TCC|102|Beneficiary account has been credited<br>online|U2|
|||||U3|
|||||UC|
|||103|Beneficiary account credited<br>manually post reconciliation|U2|
|||||U3|
|||||UC|
|Wrong Credit<br>Chargeback<br>Acceptance|WA|WC2|Amount has been recovered<br>successfully from the unintended<br>customer account|U3|
|||||UC|
|Wrong Credit<br>Chargeback<br>Raise|WC|WC1|Customer transferred funds to the<br>unintended beneficiary account|U3|
|||||UC|
|Wrong credit<br>Representment|WR|WC5|Others|U3|
|||||UC|
|||WC4|Customer is not accessible for<br>obtaining debit confirmation|U3|
|||||UC|
|||WC3|Lien marked however customer a/c is<br>not having sufficient balance to debit<br>the customer a/c|U3|
|||||UC|

<!-- PAGE 153 -->
# PAGE 153

[IMAGE_315]

![IMAGE_315](images/IMAGE_315.jpeg)

**IMAGE_315 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_316]

![IMAGE_316](images/IMAGE_316.png)

**IMAGE_316 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 153/158 
42.30) DRC PENALTY PAYABLE REPORT (ANNEXURE – 30) 
National Payments Corporation of India 
Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM 
[UT
XNI
D] 
[RRN
] 
[RC
] 
[T
Xn
ty
pe
] 
[R
e
mi
tte
r] 
[Be
nefi
ciar
y] 
[Pa
yer
PSP
] 
[Pay
eeP
SP] 
[A
mo
unt
] 
[Penali
tyAmo
unt] 
[Txn/Adj 
Date] 
[Calenda
rDay] 
[PenaltyS
ettledDat
e] 
XXX
XXX
XXX
X 
XXXX
XXXX
XX 
UR 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXX
XXX
XXX
X 
XXXX
XXXX
XX 
RR 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
100 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXX
XXX
XXX
X 
XXXX
XXXX
XX 
UR 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
50 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXX
XXX
XXX
X 
XXXX
XXXX
XX 
UR 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
 
42.31) DRC PENALTY RECEIVABLE REPORT (ANNEXURE – 31) 
National Payments Corporation of India 
Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM 
[UTX
NID] 
[RRN
] 
[
R
C
] 
[TX
nty
pe] 
[Re
mitt
er] 
[Bene
ficiar
y] 
[Pay
erPS
P] 
[Pay
eePS
P] 
[Am
oun
t] 
[Penalit
yAmoun
t] 
[Txn/
Adj 
Date
] 
[Calen
darDa
y] 
[PenaltyS
ettledDat
e] 
XXXX
XXXX
XX 
XXXX
XXXX
XX 
U
R 
U3 
ABC 
DEF 
ABC 
DEF 
XX 
25 
DD-
MM-
YYYY 
HH:
MM:
SS 
DD-
MM-
YYYY 
HH:M
M:SS 
DD-MM-
YYYY 
HH:MM:SS 
XXXX
XXXX
XX 
XXXX
XXXX
XX 
R
R 
U3 
ABC 
DEF 
ABC 
DEF 
XX 
100 
DD-
MM-
YYYY 
HH:
MM:
SS 
DD-
MM-
YYYY 
HH:M
M:SS 
DD-MM-
YYYY 
HH:MM:SS 
XXXX
XXXX
XX 
XXXX
XXXX
XX 
U
R 
U3 
ABC 
DEF 
ABC 
DEF 
XX 
50 
DD-
MM-
YYYY 
HH:
MM:
SS 
DD-
MM-
YYYY 
HH:M
M:SS 
DD-MM-
YYYY 
HH:MM:SS 
XXXX
XXXX
XX 
XXXX
XXXX
XX 
U
R 
U3 
ABC 
DEF 
ABC 
DEF 
XX 
25 
DD-
MM-
YYYY 
HH:
MM:
SS 
DD-
MM-
YYYY 
HH:M
M:SS 
DD-MM-
YYYY 
HH:MM:SS
```

**Machine-readable table extraction(s) for PAGE 153**

#### TABLE_153_01 (source extraction: `page153_table01.csv`)

|National Payments Corporation of India|||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM|||||||||||||
|[UT<br>XNI<br>D]|[RRN<br>]|[RC<br>]|[T<br>Xn<br>ty<br>pe<br>]|[R<br>e<br>mi<br>tte<br>r]|[Be<br>nefi<br>ciar<br>y]|[Pa<br>yer<br>PSP<br>]|[Pay<br>eeP<br>SP]|[A<br>mo<br>unt<br>]|[Penali<br>tyAmo<br>unt]|[Txn/Adj<br>Date]|[Calenda<br>rDay]|[PenaltyS<br>ettledDat<br>e]|
|XXX<br>XXX<br>XXX<br>X|XXXX<br>XXXX<br>XX|UR|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXX<br>XXX<br>XXX<br>X|XXXX<br>XXXX<br>XX|RR|U3|AB<br>C|DEF|ABC|DEF|XX|100|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXX<br>XXX<br>XXX<br>X|XXXX<br>XXXX<br>XX|UR|U3|AB<br>C|DEF|ABC|DEF|XX|50|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXX<br>XXX<br>XXX<br>X|XXXX<br>XXXX<br>XX|UR|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|

#### TABLE_153_02 (source extraction: `page153_table02.csv`)

|National Payments Corporation of India|||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM|||||||||||||
|[UTX<br>NID]|[RRN<br>]|[<br>R<br>C<br>]|[TX<br>nty<br>pe]|[Re<br>mitt<br>er]|[Bene<br>ficiar<br>y]|[Pay<br>erPS<br>P]|[Pay<br>eePS<br>P]|[Am<br>oun<br>t]|[Penalit<br>yAmoun<br>t]|[Txn/<br>Adj<br>Date<br>]|[Calen<br>darDa<br>y]|[PenaltyS<br>ettledDat<br>e]|
|XXXX<br>XXXX<br>XX|XXXX<br>XXXX<br>XX|U<br>R|U3|ABC|DEF|ABC|DEF|XX|25|DD-<br>MM-<br>YYYY<br>HH:<br>MM:<br>SS|DD-<br>MM-<br>YYYY<br>HH:M<br>M:SS|DD-MM-<br>YYYY<br>HH:MM:SS|
|XXXX<br>XXXX<br>XX|XXXX<br>XXXX<br>XX|R<br>R|U3|ABC|DEF|ABC|DEF|XX|100|DD-<br>MM-<br>YYYY<br>HH:<br>MM:<br>SS|DD-<br>MM-<br>YYYY<br>HH:M<br>M:SS|DD-MM-<br>YYYY<br>HH:MM:SS|
|XXXX<br>XXXX<br>XX|XXXX<br>XXXX<br>XX|U<br>R|U3|ABC|DEF|ABC|DEF|XX|50|DD-<br>MM-<br>YYYY<br>HH:<br>MM:<br>SS|DD-<br>MM-<br>YYYY<br>HH:M<br>M:SS|DD-MM-<br>YYYY<br>HH:MM:SS|
|XXXX<br>XXXX<br>XX|XXXX<br>XXXX<br>XX|U<br>R|U3|ABC|DEF|ABC|DEF|XX|25|DD-<br>MM-<br>YYYY<br>HH:<br>MM:<br>SS|DD-<br>MM-<br>YYYY<br>HH:M<br>M:SS|DD-MM-<br>YYYY<br>HH:MM:SS|

<!-- PAGE 154 -->
# PAGE 154

[IMAGE_317]

![IMAGE_317](images/IMAGE_317.jpeg)

**IMAGE_317 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_318]

![IMAGE_318](images/IMAGE_318.png)

**IMAGE_318 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 154/158 
 
42.32) TCC PENALTY PAYABLE REPORT (ANNEXURE – 32) 
National Payments Corporation of India 
Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM 
[UTX
NID] 
[RR
N] 
[
R
C
] 
[TX
nty
pe] 
[Re
mit
ter] 
[Ben
efici
ary] 
[Pa
yer
PSP
] 
[Pay
eeP
SP] 
[A
mo
unt
] 
[Penali
tyAmo
unt] 
[Txn/Adj 
Date] 
[Calendar
Day] 
[PenaltyS
ettledDat
e] 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
R
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
100 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
50 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
 
42.33) TCC PENALTY RECEIVABLE REPORT (ANNEXURE – 33) 
National Payments Corporation of India 
Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM 
[UTX
NID] 
[RR
N] 
[
R
C
] 
[TX
nty
pe] 
[Re
mit
ter] 
[Ben
efici
ary] 
[Pa
yer
PSP
] 
[Pay
eeP
SP] 
[A
mo
unt
] 
[Penali
tyAmo
unt] 
[Txn/Adj 
Date] 
[Calendar
Day] 
[PenaltyS
ettledDat
e] 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
R
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
100 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
50 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
 
42.34) RRC PENALTY PAYABLE REPORT (ANNEXURE – 34) 
National Payments Corporation of India 
Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM
```

**Machine-readable table extraction(s) for PAGE 154**

#### TABLE_154_01 (source extraction: `page154_table01.csv`)

|National Payments Corporation of India|||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM|||||||||||||
|[UTX<br>NID]|[RR<br>N]|[<br>R<br>C<br>]|[TX<br>nty<br>pe]|[Re<br>mit<br>ter]|[Ben<br>efici<br>ary]|[Pa<br>yer<br>PSP<br>]|[Pay<br>eeP<br>SP]|[A<br>mo<br>unt<br>]|[Penali<br>tyAmo<br>unt]|[Txn/Adj<br>Date]|[Calendar<br>Day]|[PenaltyS<br>ettledDat<br>e]|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|R<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|100|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|50|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|

#### TABLE_154_02 (source extraction: `page154_table02.csv`)

|National Payments Corporation of India|||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM|||||||||||||
|[UTX<br>NID]|[RR<br>N]|[<br>R<br>C<br>]|[TX<br>nty<br>pe]|[Re<br>mit<br>ter]|[Ben<br>efici<br>ary]|[Pa<br>yer<br>PSP<br>]|[Pay<br>eeP<br>SP]|[A<br>mo<br>unt<br>]|[Penali<br>tyAmo<br>unt]|[Txn/Adj<br>Date]|[Calendar<br>Day]|[PenaltyS<br>ettledDat<br>e]|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|R<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|100|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|50|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|

#### TABLE_154_03 (source extraction: `page154_table03.csv`)

|National Payments Corporation of India|
|---|
|Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM|

<!-- PAGE 155 -->
# PAGE 155

[IMAGE_319]

![IMAGE_319](images/IMAGE_319.jpeg)

**IMAGE_319 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_320]

![IMAGE_320](images/IMAGE_320.png)

**IMAGE_320 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 155/158 
[UTX
NID] 
[RR
N] 
[
R
C
] 
[TX
nty
pe] 
[Re
mit
ter] 
[Ben
efici
ary] 
[Pa
yer
PSP
] 
[Pay
eeP
SP] 
[A
mo
unt
] 
[Penali
tyAmo
unt] 
[Txn/Adj 
Date] 
[Calendar
Day] 
[PenaltyS
ettledDat
e] 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
R
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
100 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
50 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
 
42.35) RRC PENALTY RECEIVABLE REPORT (ANNEXURE – 35) 
National Payments Corporation of India 
Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM 
[UTX
NID] 
[RR
N] 
[
R
C
] 
[TX
nty
pe] 
[Re
mit
ter] 
[Ben
efici
ary] 
[Pa
yer
PSP
] 
[Pay
eeP
SP] 
[A
mo
unt
] 
[Penali
tyAmo
unt] 
[Txn/Adj 
Date] 
[Calendar
Day] 
[PenaltyS
ettledDat
e] 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
R
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
100 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
50 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
XXXX
XXXX
XXX 
XXX
XXX
XXX
X 
U
R 
U3 
AB
C 
DEF 
ABC 
DEF 
XX 
25 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S 
DD-MM-
YYYY 
HH:MM:S
S
```

**Machine-readable table extraction(s) for PAGE 155**

#### TABLE_155_01 (source extraction: `page155_table01.csv`)

|[UTX<br>NID]|[RR<br>N]|[<br>R<br>C<br>]|[TX<br>nty<br>pe]|[Re<br>mit<br>ter]|[Ben<br>efici<br>ary]|[Pa<br>yer<br>PSP<br>]|[Pay<br>eeP<br>SP]|[A<br>mo<br>unt<br>]|[Penali<br>tyAmo<br>unt]|[Txn/Adj<br>Date]|[Calendar<br>Day]|[PenaltyS<br>ettledDat<br>e]|
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|R<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|100|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|50|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|

#### TABLE_155_02 (source extraction: `page155_table02.csv`)

|National Payments Corporation of India|||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Penalty Report for the bank ABC Bank for the period from DD/MM/YYYY to HH:MM AM/PM|||||||||||||
|[UTX<br>NID]|[RR<br>N]|[<br>R<br>C<br>]|[TX<br>nty<br>pe]|[Re<br>mit<br>ter]|[Ben<br>efici<br>ary]|[Pa<br>yer<br>PSP<br>]|[Pay<br>eeP<br>SP]|[A<br>mo<br>unt<br>]|[Penali<br>tyAmo<br>unt]|[Txn/Adj<br>Date]|[Calendar<br>Day]|[PenaltyS<br>ettledDat<br>e]|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|R<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|100|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|50|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|
|XXXX<br>XXXX<br>XXX|XXX<br>XXX<br>XXX<br>X|U<br>R|U3|AB<br>C|DEF|ABC|DEF|XX|25|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|DD-MM-<br>YYYY<br>HH:MM:S<br>S|

<!-- PAGE 156 -->
# PAGE 156

[IMAGE_321]

![IMAGE_321](images/IMAGE_321.jpeg)

**IMAGE_321 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_322]

![IMAGE_322](images/IMAGE_322.png)

**IMAGE_322 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 156/158 
42.36) AUTHORIZATION LETTER – RECOVERY OF NPCI CHARGES THROUGH RTGS 
SETTLEMENT / RBI CURRENT ACCOUNT FOR DIRECT BANK (ANNEXURE – 37) 
On Bank’s Letter Head 
Date: 
Place: 
 
To, 
National Payments Corporation of India 
Unit nos. 201, 301 & 302, 
2nd & 3rd Floor, 
Raheja Titanium, Western Express Highway, 
Goregaon East, Mumbai - 400063 
 
Subject: Authorisation Letter - Recovery of NPCI charges through RTGS Settlement / RBI Current 
account 
 
We refer to your Operating Circular No NPCI/2016-17/CERT/001 dated 02nd May 2017 issued on 
recovery of NPCI charges such as Certification charges, Network charges, etc. 
We authorise NPCI to recover Certification charges, Network charges, etc (for which invoice shall be 
issued by NPCI) applicable to our bank by debiting bank's RTGS Settlement / Current account 
maintained with RBI. We request NPCI to submit the invoices for NPCI charges and intimate bank while 
debiting the RTGS Settlement / Current account. 
We also authorise NPCI to debit our RTGS Settlement / Current account on behalf of our sub-members, 
if any, for applicable NPCI charges once the authorisation letter is received from our sub-member. We 
request NPCI to keep us informed about the charges debited to our account on behalf of our sub-
members. This will help us to recover the amount from the sub-member's account maintained with us. 
 
 
Authorised Signatory 
 
Name: 
Designation: 
Member’s authorised signatory with Member’s Stamp
```

<!-- PAGE 157 -->
# PAGE 157

[IMAGE_323]

![IMAGE_323](images/IMAGE_323.jpeg)

**IMAGE_323 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_324]

![IMAGE_324](images/IMAGE_324.png)

**IMAGE_324 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 157/158 
42.37) AUTHORIZATION LETTER – RECOVERY OF NPCI CHARGES THROUGH RTGS 
SETTLEMENT / RBI CURRENT ACCOUNT FOR SUB-MEMBER BANK (ANNEXURE – 38) 
On Bank’s Letter Head 
Date: 
Place: 
 
To, 
National Payments Corporation of India 
Unit nos. 201, 301 & 302, 
2nd & 3rd Floor, 
Raheja Titanium, Western Express Highway, 
Goregaon East, Mumbai - 400063 
 
Subject: Authorisation Letter - Recovery of NPCI charges through RTGS Settlement / RBI Current 
account 
 
We refer to your Operating Circular No NPCI/2016-17/CERT/001 dated 02nd May 2017 issued on 
recovery of NPCI charges such as Certification charges, Network charges, etc. 
We authorise NPCI to debit our sponsor bank's RTGS Settlement / Current account on behalf of our 
bank for applicable NPCI charges. We request NPCI to keep us informed about the charges debited to 
our sponsor bank's account. 
We also authorise our Sponsor bank to debit our Current account maintained with Sponsor bank for 
recovering charges debited by NPCI to their RTGS Settlement / Current account on behalf of our bank. 
 
 
Authorised Signatory 
 
Name: 
Designation: 
Member’s authorised signatory with Member’s Stamp
```

<!-- PAGE 158 -->
# PAGE 158

[IMAGE_325]

![IMAGE_325](images/IMAGE_325.jpeg)

**IMAGE_325 - visual representation**
Embedded visual artifact extracted from the PDF. The original raster image is retained; no additional interpretation is asserted beyond what is visibly present.

[IMAGE_326]

![IMAGE_326](images/IMAGE_326.png)

**IMAGE_326 - visual representation**
UPI logo. The visual contains the “UPI” wordmark with the orange and green arrow/chevron motif, and the caption “UNIFIED PAYMENTS INTERFACE”.

**Verbatim page text**

```text
UPI OSG – Operating and Settlement Guidelines version 2.0 
 
Copyright ©2021 National Payment Corporation of India. All rights reserved 
Page No. 158/158 
42.38) DECLARATION FOR FULFILMENT OF GOODS/SERVICES TO CUSTOMER (ANNEXURE 
– 39) 
Use separate declaration for each dispute case 
 
(On Bank’s Letterhead) 
                                                                                                                                                               Date: _____________ 
To, 
The UPI Operations Team, 
UPI – Unified Payment Interface, 
National Payments Corporation of India, 
 
Madam/Dear Sir, 
Subject: Declaration for fulfilment of goods/services to customer 
Ref: NPCI/UPI/OC 172/2023-24 & NPCI/UPI/OC 208/2024-25 
 
We declare our merchant,     (Merchant Name)      , has provided the goods/services to the customer on       
(Date of Goods/Service Rendered)      . Please find below the UPI transaction details. We hereby 
acknowledge the declaration furnished herewith is true and correct. We request you to kindly take note 
of this declaration for your records.  
Merchant ID (if any) 
  
RRN 
  
UTXNID 
  
Amount (₹) 
  
Transaction Date 
  
Invoice No (if any) 
  
Description of Goods/Services  
  
 
 
 
 
(Authorized Signatory) 
Name & Designation of the signatory: 
 
 
 
Bank Name: 
(Bank seal)
```

**Machine-readable table extraction(s) for PAGE 158**

#### TABLE_158_01 (source extraction: `page158_table01.csv`)

|Merchant ID (if any)||
|---|---|
|RRN||
|UTXNID||
|Amount (₹)||
|Transaction Date||
|Invoice No (if any)||
|Description of Goods/Services||

---

# IMAGE INDEX

| Image ID | Page | Local image index | Source class | Extracted file |
|---|---:|---:|---|---|
| IMAGE_001 | 1 | 1 | unclassified_0571df22 | `images/IMAGE_001.jpeg` |
| IMAGE_002 | 1 | 2 | upi_logo | `images/IMAGE_002.png` |
| IMAGE_003 | 2 | 1 | unclassified_0571df22 | `images/IMAGE_003.jpeg` |
| IMAGE_004 | 2 | 2 | upi_logo | `images/IMAGE_004.png` |
| IMAGE_005 | 3 | 1 | unclassified_0571df22 | `images/IMAGE_005.jpeg` |
| IMAGE_006 | 3 | 2 | upi_logo | `images/IMAGE_006.png` |
| IMAGE_007 | 4 | 1 | unclassified_0571df22 | `images/IMAGE_007.jpeg` |
| IMAGE_008 | 4 | 2 | upi_logo | `images/IMAGE_008.png` |
| IMAGE_009 | 5 | 1 | unclassified_0571df22 | `images/IMAGE_009.jpeg` |
| IMAGE_010 | 5 | 2 | upi_logo | `images/IMAGE_010.png` |
| IMAGE_011 | 6 | 1 | unclassified_0571df22 | `images/IMAGE_011.jpeg` |
| IMAGE_012 | 6 | 2 | upi_logo | `images/IMAGE_012.png` |
| IMAGE_013 | 7 | 1 | unclassified_0571df22 | `images/IMAGE_013.jpeg` |
| IMAGE_014 | 7 | 2 | upi_logo | `images/IMAGE_014.png` |
| IMAGE_015 | 8 | 1 | unclassified_0571df22 | `images/IMAGE_015.jpeg` |
| IMAGE_016 | 8 | 2 | upi_logo | `images/IMAGE_016.png` |
| IMAGE_017 | 9 | 1 | unclassified_0571df22 | `images/IMAGE_017.jpeg` |
| IMAGE_018 | 9 | 2 | upi_logo | `images/IMAGE_018.png` |
| IMAGE_019 | 10 | 1 | unclassified_0571df22 | `images/IMAGE_019.jpeg` |
| IMAGE_020 | 10 | 2 | upi_logo | `images/IMAGE_020.png` |
| IMAGE_021 | 11 | 1 | unclassified_0571df22 | `images/IMAGE_021.jpeg` |
| IMAGE_022 | 11 | 2 | upi_logo | `images/IMAGE_022.png` |
| IMAGE_023 | 12 | 1 | unclassified_0571df22 | `images/IMAGE_023.jpeg` |
| IMAGE_024 | 12 | 2 | upi_logo | `images/IMAGE_024.png` |
| IMAGE_025 | 13 | 1 | unclassified_0571df22 | `images/IMAGE_025.jpeg` |
| IMAGE_026 | 13 | 2 | upi_logo | `images/IMAGE_026.png` |
| IMAGE_027 | 14 | 1 | unclassified_0571df22 | `images/IMAGE_027.jpeg` |
| IMAGE_028 | 14 | 2 | upi_logo | `images/IMAGE_028.png` |
| IMAGE_029 | 15 | 1 | unclassified_0571df22 | `images/IMAGE_029.jpeg` |
| IMAGE_030 | 15 | 2 | upi_logo | `images/IMAGE_030.png` |
| IMAGE_031 | 16 | 1 | unclassified_0571df22 | `images/IMAGE_031.jpeg` |
| IMAGE_032 | 16 | 2 | upi_logo | `images/IMAGE_032.png` |
| IMAGE_033 | 17 | 1 | unclassified_0571df22 | `images/IMAGE_033.jpeg` |
| IMAGE_034 | 17 | 2 | upi_logo | `images/IMAGE_034.png` |
| IMAGE_035 | 18 | 1 | unclassified_0571df22 | `images/IMAGE_035.jpeg` |
| IMAGE_036 | 18 | 2 | upi_logo | `images/IMAGE_036.png` |
| IMAGE_037 | 19 | 1 | unclassified_0571df22 | `images/IMAGE_037.jpeg` |
| IMAGE_038 | 19 | 2 | upi_logo | `images/IMAGE_038.png` |
| IMAGE_039 | 20 | 1 | unclassified_0571df22 | `images/IMAGE_039.jpeg` |
| IMAGE_040 | 20 | 2 | upi_logo | `images/IMAGE_040.png` |
| IMAGE_041 | 21 | 1 | unclassified_0571df22 | `images/IMAGE_041.jpeg` |
| IMAGE_042 | 21 | 2 | upi_logo | `images/IMAGE_042.png` |
| IMAGE_043 | 22 | 1 | unclassified_0571df22 | `images/IMAGE_043.jpeg` |
| IMAGE_044 | 22 | 2 | upi_logo | `images/IMAGE_044.png` |
| IMAGE_045 | 23 | 1 | unclassified_0571df22 | `images/IMAGE_045.jpeg` |
| IMAGE_046 | 23 | 2 | upi_logo | `images/IMAGE_046.png` |
| IMAGE_047 | 24 | 1 | unclassified_0571df22 | `images/IMAGE_047.jpeg` |
| IMAGE_048 | 24 | 2 | upi_logo | `images/IMAGE_048.png` |
| IMAGE_049 | 25 | 1 | unclassified_0571df22 | `images/IMAGE_049.jpeg` |
| IMAGE_050 | 25 | 2 | upi_logo | `images/IMAGE_050.png` |
| IMAGE_051 | 26 | 1 | unclassified_0571df22 | `images/IMAGE_051.jpeg` |
| IMAGE_052 | 26 | 2 | upi_logo | `images/IMAGE_052.png` |
| IMAGE_053 | 27 | 1 | unclassified_0571df22 | `images/IMAGE_053.jpeg` |
| IMAGE_054 | 27 | 2 | upi_logo | `images/IMAGE_054.png` |
| IMAGE_055 | 28 | 1 | unclassified_0571df22 | `images/IMAGE_055.jpeg` |
| IMAGE_056 | 28 | 2 | upi_logo | `images/IMAGE_056.png` |
| IMAGE_057 | 29 | 1 | unclassified_0571df22 | `images/IMAGE_057.jpeg` |
| IMAGE_058 | 29 | 2 | upi_logo | `images/IMAGE_058.png` |
| IMAGE_059 | 30 | 1 | unclassified_0571df22 | `images/IMAGE_059.jpeg` |
| IMAGE_060 | 30 | 2 | upi_logo | `images/IMAGE_060.png` |
| IMAGE_061 | 31 | 1 | unclassified_0571df22 | `images/IMAGE_061.jpeg` |
| IMAGE_062 | 31 | 2 | upi_logo | `images/IMAGE_062.png` |
| IMAGE_063 | 32 | 1 | unclassified_0571df22 | `images/IMAGE_063.jpeg` |
| IMAGE_064 | 32 | 2 | upi_logo | `images/IMAGE_064.png` |
| IMAGE_065 | 33 | 1 | unclassified_0571df22 | `images/IMAGE_065.jpeg` |
| IMAGE_066 | 33 | 2 | upi_logo | `images/IMAGE_066.png` |
| IMAGE_067 | 34 | 1 | unclassified_0571df22 | `images/IMAGE_067.jpeg` |
| IMAGE_068 | 34 | 2 | upi_logo | `images/IMAGE_068.png` |
| IMAGE_069 | 35 | 1 | unclassified_0571df22 | `images/IMAGE_069.jpeg` |
| IMAGE_070 | 35 | 2 | upi_logo | `images/IMAGE_070.png` |
| IMAGE_071 | 36 | 1 | unclassified_0571df22 | `images/IMAGE_071.jpeg` |
| IMAGE_072 | 36 | 2 | upi_logo | `images/IMAGE_072.png` |
| IMAGE_073 | 37 | 1 | unclassified_0571df22 | `images/IMAGE_073.jpeg` |
| IMAGE_074 | 37 | 2 | upi_logo | `images/IMAGE_074.png` |
| IMAGE_075 | 38 | 1 | unclassified_0571df22 | `images/IMAGE_075.jpeg` |
| IMAGE_076 | 38 | 2 | upi_logo | `images/IMAGE_076.png` |
| IMAGE_077 | 39 | 1 | unclassified_0571df22 | `images/IMAGE_077.jpeg` |
| IMAGE_078 | 39 | 2 | upi_logo | `images/IMAGE_078.png` |
| IMAGE_079 | 40 | 1 | unclassified_0571df22 | `images/IMAGE_079.jpeg` |
| IMAGE_080 | 40 | 2 | upi_logo | `images/IMAGE_080.png` |
| IMAGE_081 | 41 | 1 | unclassified_0571df22 | `images/IMAGE_081.jpeg` |
| IMAGE_082 | 41 | 2 | upi_logo | `images/IMAGE_082.png` |
| IMAGE_083 | 42 | 1 | unclassified_0571df22 | `images/IMAGE_083.jpeg` |
| IMAGE_084 | 42 | 2 | upi_logo | `images/IMAGE_084.png` |
| IMAGE_085 | 43 | 1 | unclassified_0571df22 | `images/IMAGE_085.jpeg` |
| IMAGE_086 | 43 | 2 | upi_logo | `images/IMAGE_086.png` |
| IMAGE_087 | 44 | 1 | unclassified_0571df22 | `images/IMAGE_087.jpeg` |
| IMAGE_088 | 44 | 2 | upi_logo | `images/IMAGE_088.png` |
| IMAGE_089 | 45 | 1 | unclassified_0571df22 | `images/IMAGE_089.jpeg` |
| IMAGE_090 | 45 | 2 | upi_logo | `images/IMAGE_090.png` |
| IMAGE_091 | 46 | 1 | unclassified_0571df22 | `images/IMAGE_091.jpeg` |
| IMAGE_092 | 46 | 2 | upi_logo | `images/IMAGE_092.png` |
| IMAGE_093 | 47 | 1 | unclassified_0571df22 | `images/IMAGE_093.jpeg` |
| IMAGE_094 | 47 | 2 | upi_logo | `images/IMAGE_094.png` |
| IMAGE_095 | 48 | 1 | unclassified_0571df22 | `images/IMAGE_095.jpeg` |
| IMAGE_096 | 48 | 2 | upi_logo | `images/IMAGE_096.png` |
| IMAGE_097 | 49 | 1 | unclassified_0571df22 | `images/IMAGE_097.jpeg` |
| IMAGE_098 | 49 | 2 | upi_logo | `images/IMAGE_098.png` |
| IMAGE_099 | 50 | 1 | unclassified_0571df22 | `images/IMAGE_099.jpeg` |
| IMAGE_100 | 50 | 2 | upi_logo | `images/IMAGE_100.png` |
| IMAGE_101 | 51 | 1 | unclassified_0571df22 | `images/IMAGE_101.jpeg` |
| IMAGE_102 | 51 | 2 | upi_logo | `images/IMAGE_102.png` |
| IMAGE_103 | 52 | 1 | unclassified_0571df22 | `images/IMAGE_103.jpeg` |
| IMAGE_104 | 52 | 2 | upi_logo | `images/IMAGE_104.png` |
| IMAGE_105 | 53 | 1 | unclassified_0571df22 | `images/IMAGE_105.jpeg` |
| IMAGE_106 | 53 | 2 | upi_logo | `images/IMAGE_106.png` |
| IMAGE_107 | 54 | 1 | unclassified_0571df22 | `images/IMAGE_107.jpeg` |
| IMAGE_108 | 54 | 2 | upi_logo | `images/IMAGE_108.png` |
| IMAGE_109 | 55 | 1 | unclassified_0571df22 | `images/IMAGE_109.jpeg` |
| IMAGE_110 | 55 | 2 | upi_logo | `images/IMAGE_110.png` |
| IMAGE_111 | 56 | 1 | unclassified_0571df22 | `images/IMAGE_111.jpeg` |
| IMAGE_112 | 56 | 2 | upi_logo | `images/IMAGE_112.png` |
| IMAGE_113 | 57 | 1 | unclassified_0571df22 | `images/IMAGE_113.jpeg` |
| IMAGE_114 | 57 | 2 | upi_logo | `images/IMAGE_114.png` |
| IMAGE_115 | 58 | 1 | unclassified_0571df22 | `images/IMAGE_115.jpeg` |
| IMAGE_116 | 58 | 2 | upi_logo | `images/IMAGE_116.png` |
| IMAGE_117 | 59 | 1 | unclassified_0571df22 | `images/IMAGE_117.jpeg` |
| IMAGE_118 | 59 | 2 | upi_logo | `images/IMAGE_118.png` |
| IMAGE_119 | 60 | 1 | unclassified_0571df22 | `images/IMAGE_119.jpeg` |
| IMAGE_120 | 60 | 2 | upi_logo | `images/IMAGE_120.png` |
| IMAGE_121 | 61 | 1 | unclassified_0571df22 | `images/IMAGE_121.jpeg` |
| IMAGE_122 | 61 | 2 | upi_logo | `images/IMAGE_122.png` |
| IMAGE_123 | 62 | 1 | unclassified_0571df22 | `images/IMAGE_123.jpeg` |
| IMAGE_124 | 62 | 2 | upi_logo | `images/IMAGE_124.png` |
| IMAGE_125 | 63 | 1 | unclassified_0571df22 | `images/IMAGE_125.jpeg` |
| IMAGE_126 | 63 | 2 | upi_logo | `images/IMAGE_126.png` |
| IMAGE_127 | 64 | 1 | unclassified_0571df22 | `images/IMAGE_127.jpeg` |
| IMAGE_128 | 64 | 2 | upi_logo | `images/IMAGE_128.png` |
| IMAGE_129 | 65 | 1 | unclassified_0571df22 | `images/IMAGE_129.jpeg` |
| IMAGE_130 | 65 | 2 | upi_logo | `images/IMAGE_130.png` |
| IMAGE_131 | 66 | 1 | unclassified_0571df22 | `images/IMAGE_131.jpeg` |
| IMAGE_132 | 66 | 2 | upi_logo | `images/IMAGE_132.png` |
| IMAGE_133 | 67 | 1 | unclassified_0571df22 | `images/IMAGE_133.jpeg` |
| IMAGE_134 | 67 | 2 | upi_logo | `images/IMAGE_134.png` |
| IMAGE_135 | 68 | 1 | unclassified_0571df22 | `images/IMAGE_135.jpeg` |
| IMAGE_136 | 68 | 2 | upi_logo | `images/IMAGE_136.png` |
| IMAGE_137 | 69 | 1 | unclassified_0571df22 | `images/IMAGE_137.jpeg` |
| IMAGE_138 | 69 | 2 | upi_logo | `images/IMAGE_138.png` |
| IMAGE_139 | 70 | 1 | unclassified_0571df22 | `images/IMAGE_139.jpeg` |
| IMAGE_140 | 70 | 2 | upi_logo | `images/IMAGE_140.png` |
| IMAGE_141 | 71 | 1 | unclassified_0571df22 | `images/IMAGE_141.jpeg` |
| IMAGE_142 | 71 | 2 | upi_logo | `images/IMAGE_142.png` |
| IMAGE_143 | 72 | 1 | unclassified_0571df22 | `images/IMAGE_143.jpeg` |
| IMAGE_144 | 72 | 2 | upi_logo | `images/IMAGE_144.png` |
| IMAGE_145 | 73 | 1 | unclassified_0571df22 | `images/IMAGE_145.jpeg` |
| IMAGE_146 | 73 | 2 | upi_logo | `images/IMAGE_146.png` |
| IMAGE_147 | 74 | 1 | unclassified_0571df22 | `images/IMAGE_147.jpeg` |
| IMAGE_148 | 74 | 2 | upi_logo | `images/IMAGE_148.png` |
| IMAGE_149 | 75 | 1 | unclassified_0571df22 | `images/IMAGE_149.jpeg` |
| IMAGE_150 | 75 | 2 | upi_logo | `images/IMAGE_150.png` |
| IMAGE_151 | 76 | 1 | unclassified_0571df22 | `images/IMAGE_151.jpeg` |
| IMAGE_152 | 76 | 2 | upi_logo | `images/IMAGE_152.png` |
| IMAGE_153 | 77 | 1 | unclassified_0571df22 | `images/IMAGE_153.jpeg` |
| IMAGE_154 | 77 | 2 | upi_logo | `images/IMAGE_154.png` |
| IMAGE_155 | 78 | 1 | unclassified_0571df22 | `images/IMAGE_155.jpeg` |
| IMAGE_156 | 78 | 2 | upi_logo | `images/IMAGE_156.png` |
| IMAGE_157 | 79 | 1 | unclassified_0571df22 | `images/IMAGE_157.jpeg` |
| IMAGE_158 | 79 | 2 | upi_logo | `images/IMAGE_158.png` |
| IMAGE_159 | 80 | 1 | unclassified_0571df22 | `images/IMAGE_159.jpeg` |
| IMAGE_160 | 80 | 2 | artifact_dot | `images/IMAGE_160.jpeg` |
| IMAGE_161 | 80 | 3 | upi_logo | `images/IMAGE_161.png` |
| IMAGE_162 | 81 | 1 | unclassified_0571df22 | `images/IMAGE_162.jpeg` |
| IMAGE_163 | 81 | 2 | upi_logo | `images/IMAGE_163.png` |
| IMAGE_164 | 82 | 1 | unclassified_0571df22 | `images/IMAGE_164.jpeg` |
| IMAGE_165 | 82 | 2 | upi_logo | `images/IMAGE_165.png` |
| IMAGE_166 | 83 | 1 | unclassified_0571df22 | `images/IMAGE_166.jpeg` |
| IMAGE_167 | 83 | 2 | diagram_83 | `images/IMAGE_167.png` |
| IMAGE_168 | 83 | 3 | upi_logo | `images/IMAGE_168.png` |
| IMAGE_169 | 84 | 1 | unclassified_0571df22 | `images/IMAGE_169.jpeg` |
| IMAGE_170 | 84 | 2 | diagram_84 | `images/IMAGE_170.png` |
| IMAGE_171 | 84 | 3 | upi_logo | `images/IMAGE_171.png` |
| IMAGE_172 | 85 | 1 | unclassified_0571df22 | `images/IMAGE_172.jpeg` |
| IMAGE_173 | 85 | 2 | upi_logo | `images/IMAGE_173.png` |
| IMAGE_174 | 86 | 1 | unclassified_0571df22 | `images/IMAGE_174.jpeg` |
| IMAGE_175 | 86 | 2 | upi_logo | `images/IMAGE_175.png` |
| IMAGE_176 | 87 | 1 | unclassified_0571df22 | `images/IMAGE_176.jpeg` |
| IMAGE_177 | 87 | 2 | upi_logo | `images/IMAGE_177.png` |
| IMAGE_178 | 88 | 1 | unclassified_0571df22 | `images/IMAGE_178.jpeg` |
| IMAGE_179 | 88 | 2 | upi_logo | `images/IMAGE_179.png` |
| IMAGE_180 | 89 | 1 | unclassified_0571df22 | `images/IMAGE_180.jpeg` |
| IMAGE_181 | 89 | 2 | upi_logo | `images/IMAGE_181.png` |
| IMAGE_182 | 90 | 1 | unclassified_0571df22 | `images/IMAGE_182.jpeg` |
| IMAGE_183 | 90 | 2 | upi_logo | `images/IMAGE_183.png` |
| IMAGE_184 | 91 | 1 | unclassified_0571df22 | `images/IMAGE_184.jpeg` |
| IMAGE_185 | 91 | 2 | upi_logo | `images/IMAGE_185.png` |
| IMAGE_186 | 92 | 1 | unclassified_0571df22 | `images/IMAGE_186.jpeg` |
| IMAGE_187 | 92 | 2 | upi_logo | `images/IMAGE_187.png` |
| IMAGE_188 | 93 | 1 | unclassified_0571df22 | `images/IMAGE_188.jpeg` |
| IMAGE_189 | 93 | 2 | upi_logo | `images/IMAGE_189.png` |
| IMAGE_190 | 94 | 1 | unclassified_0571df22 | `images/IMAGE_190.jpeg` |
| IMAGE_191 | 94 | 2 | upi_logo | `images/IMAGE_191.png` |
| IMAGE_192 | 95 | 1 | unclassified_0571df22 | `images/IMAGE_192.jpeg` |
| IMAGE_193 | 95 | 2 | upi_logo | `images/IMAGE_193.png` |
| IMAGE_194 | 96 | 1 | unclassified_0571df22 | `images/IMAGE_194.jpeg` |
| IMAGE_195 | 96 | 2 | upi_logo | `images/IMAGE_195.png` |
| IMAGE_196 | 97 | 1 | unclassified_0571df22 | `images/IMAGE_196.jpeg` |
| IMAGE_197 | 97 | 2 | upi_logo | `images/IMAGE_197.png` |
| IMAGE_198 | 98 | 1 | unclassified_0571df22 | `images/IMAGE_198.jpeg` |
| IMAGE_199 | 98 | 2 | upi_logo | `images/IMAGE_199.png` |
| IMAGE_200 | 99 | 1 | unclassified_0571df22 | `images/IMAGE_200.jpeg` |
| IMAGE_201 | 99 | 2 | upi_logo | `images/IMAGE_201.png` |
| IMAGE_202 | 100 | 1 | unclassified_0571df22 | `images/IMAGE_202.jpeg` |
| IMAGE_203 | 100 | 2 | upi_logo | `images/IMAGE_203.png` |
| IMAGE_204 | 101 | 1 | unclassified_0571df22 | `images/IMAGE_204.jpeg` |
| IMAGE_205 | 101 | 2 | upi_logo | `images/IMAGE_205.png` |
| IMAGE_206 | 102 | 1 | unclassified_0571df22 | `images/IMAGE_206.jpeg` |
| IMAGE_207 | 102 | 2 | upi_logo | `images/IMAGE_207.png` |
| IMAGE_208 | 103 | 1 | unclassified_0571df22 | `images/IMAGE_208.jpeg` |
| IMAGE_209 | 103 | 2 | upi_logo | `images/IMAGE_209.png` |
| IMAGE_210 | 104 | 1 | unclassified_0571df22 | `images/IMAGE_210.jpeg` |
| IMAGE_211 | 104 | 2 | upi_logo | `images/IMAGE_211.png` |
| IMAGE_212 | 105 | 1 | unclassified_0571df22 | `images/IMAGE_212.jpeg` |
| IMAGE_213 | 105 | 2 | upi_logo | `images/IMAGE_213.png` |
| IMAGE_214 | 106 | 1 | unclassified_0571df22 | `images/IMAGE_214.jpeg` |
| IMAGE_215 | 106 | 2 | upi_logo | `images/IMAGE_215.png` |
| IMAGE_216 | 107 | 1 | unclassified_0571df22 | `images/IMAGE_216.jpeg` |
| IMAGE_217 | 107 | 2 | upi_logo | `images/IMAGE_217.png` |
| IMAGE_218 | 108 | 1 | unclassified_0571df22 | `images/IMAGE_218.jpeg` |
| IMAGE_219 | 108 | 2 | upi_logo | `images/IMAGE_219.png` |
| IMAGE_220 | 109 | 1 | unclassified_0571df22 | `images/IMAGE_220.jpeg` |
| IMAGE_221 | 109 | 2 | upi_logo | `images/IMAGE_221.png` |
| IMAGE_222 | 110 | 1 | unclassified_0571df22 | `images/IMAGE_222.jpeg` |
| IMAGE_223 | 110 | 2 | upi_logo | `images/IMAGE_223.png` |
| IMAGE_224 | 111 | 1 | unclassified_0571df22 | `images/IMAGE_224.jpeg` |
| IMAGE_225 | 111 | 2 | upi_logo | `images/IMAGE_225.png` |
| IMAGE_226 | 112 | 1 | unclassified_0571df22 | `images/IMAGE_226.jpeg` |
| IMAGE_227 | 112 | 2 | upi_logo | `images/IMAGE_227.png` |
| IMAGE_228 | 113 | 1 | unclassified_0571df22 | `images/IMAGE_228.jpeg` |
| IMAGE_229 | 113 | 2 | upi_logo | `images/IMAGE_229.png` |
| IMAGE_230 | 114 | 1 | unclassified_0571df22 | `images/IMAGE_230.jpeg` |
| IMAGE_231 | 114 | 2 | upi_logo | `images/IMAGE_231.png` |
| IMAGE_232 | 115 | 1 | unclassified_0571df22 | `images/IMAGE_232.jpeg` |
| IMAGE_233 | 115 | 2 | upi_logo | `images/IMAGE_233.png` |
| IMAGE_234 | 116 | 1 | unclassified_0571df22 | `images/IMAGE_234.jpeg` |
| IMAGE_235 | 116 | 2 | upi_logo | `images/IMAGE_235.png` |
| IMAGE_236 | 117 | 1 | unclassified_0571df22 | `images/IMAGE_236.jpeg` |
| IMAGE_237 | 117 | 2 | upi_logo | `images/IMAGE_237.png` |
| IMAGE_238 | 118 | 1 | unclassified_0571df22 | `images/IMAGE_238.jpeg` |
| IMAGE_239 | 118 | 2 | upi_logo | `images/IMAGE_239.png` |
| IMAGE_240 | 119 | 1 | unclassified_0571df22 | `images/IMAGE_240.jpeg` |
| IMAGE_241 | 119 | 2 | upi_logo | `images/IMAGE_241.png` |
| IMAGE_242 | 120 | 1 | unclassified_0571df22 | `images/IMAGE_242.jpeg` |
| IMAGE_243 | 120 | 2 | upi_logo | `images/IMAGE_243.png` |
| IMAGE_244 | 121 | 1 | unclassified_0571df22 | `images/IMAGE_244.jpeg` |
| IMAGE_245 | 121 | 2 | upi_logo | `images/IMAGE_245.png` |
| IMAGE_246 | 122 | 1 | unclassified_0571df22 | `images/IMAGE_246.jpeg` |
| IMAGE_247 | 122 | 2 | upi_logo | `images/IMAGE_247.png` |
| IMAGE_248 | 123 | 1 | unclassified_0571df22 | `images/IMAGE_248.jpeg` |
| IMAGE_249 | 123 | 2 | upi_logo | `images/IMAGE_249.png` |
| IMAGE_250 | 124 | 1 | unclassified_0571df22 | `images/IMAGE_250.jpeg` |
| IMAGE_251 | 124 | 2 | upi_logo | `images/IMAGE_251.png` |
| IMAGE_252 | 125 | 1 | unclassified_0571df22 | `images/IMAGE_252.jpeg` |
| IMAGE_253 | 125 | 2 | upi_logo | `images/IMAGE_253.png` |
| IMAGE_254 | 126 | 1 | unclassified_0571df22 | `images/IMAGE_254.jpeg` |
| IMAGE_255 | 126 | 2 | upi_logo | `images/IMAGE_255.png` |
| IMAGE_256 | 127 | 1 | unclassified_0571df22 | `images/IMAGE_256.jpeg` |
| IMAGE_257 | 127 | 2 | upi_logo | `images/IMAGE_257.png` |
| IMAGE_258 | 128 | 1 | unclassified_0571df22 | `images/IMAGE_258.jpeg` |
| IMAGE_259 | 128 | 2 | upi_logo | `images/IMAGE_259.png` |
| IMAGE_260 | 129 | 1 | unclassified_0571df22 | `images/IMAGE_260.jpeg` |
| IMAGE_261 | 129 | 2 | upi_logo | `images/IMAGE_261.png` |
| IMAGE_262 | 130 | 1 | unclassified_0571df22 | `images/IMAGE_262.jpeg` |
| IMAGE_263 | 130 | 2 | upi_logo | `images/IMAGE_263.png` |
| IMAGE_264 | 131 | 1 | unclassified_0571df22 | `images/IMAGE_264.jpeg` |
| IMAGE_265 | 131 | 2 | upi_logo | `images/IMAGE_265.png` |
| IMAGE_266 | 132 | 1 | unclassified_0571df22 | `images/IMAGE_266.jpeg` |
| IMAGE_267 | 132 | 2 | upi_logo | `images/IMAGE_267.png` |
| IMAGE_268 | 133 | 1 | unclassified_0571df22 | `images/IMAGE_268.jpeg` |
| IMAGE_269 | 133 | 2 | raw_data_screen | `images/IMAGE_269.png` |
| IMAGE_270 | 133 | 3 | raw_data_screen | `images/IMAGE_270.png` |
| IMAGE_271 | 133 | 4 | raw_data_screen | `images/IMAGE_271.png` |
| IMAGE_272 | 133 | 5 | raw_data_screen | `images/IMAGE_272.png` |
| IMAGE_273 | 133 | 6 | upi_logo | `images/IMAGE_273.png` |
| IMAGE_274 | 134 | 1 | unclassified_0571df22 | `images/IMAGE_274.jpeg` |
| IMAGE_275 | 134 | 2 | raw_data_screen | `images/IMAGE_275.png` |
| IMAGE_276 | 134 | 3 | raw_data_screen | `images/IMAGE_276.png` |
| IMAGE_277 | 134 | 4 | upi_logo | `images/IMAGE_277.png` |
| IMAGE_278 | 135 | 1 | unclassified_0571df22 | `images/IMAGE_278.jpeg` |
| IMAGE_279 | 135 | 2 | upi_logo | `images/IMAGE_279.png` |
| IMAGE_280 | 136 | 1 | unclassified_0571df22 | `images/IMAGE_280.jpeg` |
| IMAGE_281 | 136 | 2 | upi_logo | `images/IMAGE_281.png` |
| IMAGE_282 | 137 | 1 | unclassified_0571df22 | `images/IMAGE_282.jpeg` |
| IMAGE_283 | 137 | 2 | upi_logo | `images/IMAGE_283.png` |
| IMAGE_284 | 138 | 1 | unclassified_0571df22 | `images/IMAGE_284.jpeg` |
| IMAGE_285 | 138 | 2 | upi_logo | `images/IMAGE_285.png` |
| IMAGE_286 | 139 | 1 | unclassified_0571df22 | `images/IMAGE_286.jpeg` |
| IMAGE_287 | 139 | 2 | upi_logo | `images/IMAGE_287.png` |
| IMAGE_288 | 140 | 1 | unclassified_0571df22 | `images/IMAGE_288.jpeg` |
| IMAGE_289 | 140 | 2 | upi_logo | `images/IMAGE_289.png` |
| IMAGE_290 | 141 | 1 | unclassified_0571df22 | `images/IMAGE_290.jpeg` |
| IMAGE_291 | 141 | 2 | upi_logo | `images/IMAGE_291.png` |
| IMAGE_292 | 142 | 1 | unclassified_0571df22 | `images/IMAGE_292.jpeg` |
| IMAGE_293 | 142 | 2 | upi_logo | `images/IMAGE_293.png` |
| IMAGE_294 | 143 | 1 | unclassified_0571df22 | `images/IMAGE_294.jpeg` |
| IMAGE_295 | 143 | 2 | lite_balance_data | `images/IMAGE_295.png` |
| IMAGE_296 | 143 | 3 | upi_logo | `images/IMAGE_296.png` |
| IMAGE_297 | 144 | 1 | unclassified_0571df22 | `images/IMAGE_297.jpeg` |
| IMAGE_298 | 144 | 2 | upi_logo | `images/IMAGE_298.png` |
| IMAGE_299 | 145 | 1 | unclassified_0571df22 | `images/IMAGE_299.jpeg` |
| IMAGE_300 | 145 | 2 | upi_logo | `images/IMAGE_300.png` |
| IMAGE_301 | 146 | 1 | unclassified_0571df22 | `images/IMAGE_301.jpeg` |
| IMAGE_302 | 146 | 2 | upi_logo | `images/IMAGE_302.png` |
| IMAGE_303 | 147 | 1 | unclassified_0571df22 | `images/IMAGE_303.jpeg` |
| IMAGE_304 | 147 | 2 | upi_logo | `images/IMAGE_304.png` |
| IMAGE_305 | 148 | 1 | unclassified_0571df22 | `images/IMAGE_305.jpeg` |
| IMAGE_306 | 148 | 2 | upi_logo | `images/IMAGE_306.png` |
| IMAGE_307 | 149 | 1 | unclassified_0571df22 | `images/IMAGE_307.jpeg` |
| IMAGE_308 | 149 | 2 | upi_logo | `images/IMAGE_308.png` |
| IMAGE_309 | 150 | 1 | unclassified_0571df22 | `images/IMAGE_309.jpeg` |
| IMAGE_310 | 150 | 2 | upi_logo | `images/IMAGE_310.png` |
| IMAGE_311 | 151 | 1 | unclassified_0571df22 | `images/IMAGE_311.jpeg` |
| IMAGE_312 | 151 | 2 | upi_logo | `images/IMAGE_312.png` |
| IMAGE_313 | 152 | 1 | unclassified_0571df22 | `images/IMAGE_313.jpeg` |
| IMAGE_314 | 152 | 2 | upi_logo | `images/IMAGE_314.png` |
| IMAGE_315 | 153 | 1 | unclassified_0571df22 | `images/IMAGE_315.jpeg` |
| IMAGE_316 | 153 | 2 | upi_logo | `images/IMAGE_316.png` |
| IMAGE_317 | 154 | 1 | unclassified_0571df22 | `images/IMAGE_317.jpeg` |
| IMAGE_318 | 154 | 2 | upi_logo | `images/IMAGE_318.png` |
| IMAGE_319 | 155 | 1 | unclassified_0571df22 | `images/IMAGE_319.jpeg` |
| IMAGE_320 | 155 | 2 | upi_logo | `images/IMAGE_320.png` |
| IMAGE_321 | 156 | 1 | unclassified_0571df22 | `images/IMAGE_321.jpeg` |
| IMAGE_322 | 156 | 2 | upi_logo | `images/IMAGE_322.png` |
| IMAGE_323 | 157 | 1 | unclassified_0571df22 | `images/IMAGE_323.jpeg` |
| IMAGE_324 | 157 | 2 | upi_logo | `images/IMAGE_324.png` |
| IMAGE_325 | 158 | 1 | unclassified_0571df22 | `images/IMAGE_325.jpeg` |
| IMAGE_326 | 158 | 2 | upi_logo | `images/IMAGE_326.png` |

# COMPLETENESS CHECK

- PDF page count: **158**
- Markdown page markers emitted: **158**
- Extracted image occurrences retained: **326**
- Distinct extracted raster visuals (by SHA-256): **12**
- Extracted tables (CSV pass): **204**
- Pages containing extracted tables: **119**
- Appendix/Annexure source pages: preserved verbatim in the relevant page sections; the TOC source pages are also retained verbatim.
- Footnotes/notes/warnings: preserved within each page's verbatim text block; no deliberate omission layer was applied.
- Section-heading candidates detected by numbered-clause pattern: **198 occurrences** across the PDF text layer. Duplicates caused by the table of contents are retained as source text rather than silently deduplicated.

## Validation notes

- The source PDF reports 158 pages; page-by-page extraction covered all 158 pages.
- The PDF contains 326 embedded raster-image occurrences; all extracted occurrences are copied into `/images` and indexed above.
- Visuals on pages 83 and 84 are represented both by the retained original images and explicit entity/interaction text for RAG reasoning.
- The small isolated raster mark extracted on page 80 is retained and explicitly marked as a non-substantive artifact rather than interpreted.
- Raw-data screenshot visuals on pages 133-134 and 143 are retained as images and their surrounding/verbatim page text is preserved; no invented reconstruction of masked values is added.
