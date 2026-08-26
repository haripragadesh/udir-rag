# UPI HELP – UDIR
## Document Metadata

| Field | Value |
|---|---|
| Title | UPI Help – UDIR |
| Subject | Technical Specification Document |
| Version | V 2.2 |
| Date shown in document | 1st July 2024 |
| PDF page count | 100 |
| PDF author metadata | Vanila Mehta |
| PDF creator | Microsoft® Word for Microsoft 365 |
| PDF producer | Microsoft® Word for Microsoft 365 |
| Source filename | UDIR_UPI_TSD_V2.2 (1 Jul 2024).pdf |

## Preservation / Corpus Notes

This Markdown is a preservation-oriented transcription of the source PDF. Page boundaries are explicitly marked. The verbatim page text is retained in fenced blocks; structured table reconstructions and visual descriptions are additive and do not replace the source text. Extracted visuals are retained in `images/` using stable image IDs. Where a visual contains unclear text, it is explicitly marked `[UNCLEAR]` rather than inferred.

## Table of Contents

### Original TOC text

```text
Contents
1.     Introduction ................................................................................................................. 5
     1.1.     UPI Transaction Flow .......................................................................................... 5
     1.2.     Possible Scenarios leading to dispute .................................................................. 5
     1.3.     Offline Process of Handling Disputes ................................................................... 6
     1.4.     Approach for Instant Dispute Resolution using UDIR (UPI Help) ........................... 7
     1.5.     UPI Help (UDIR).................................................................................................. 7
2.     ReqChkTxn API .......................................................................................................... 8
3.     ReqComplaint API ........................................................................................................ 9
     3.1.     UPI Complaint & Reason Codes ........................................................................ 11
     3.2.     URCS Complaint Adjustment Flag & Reason Code ............................................ 13
4.     AutoUpdate............................................................................................................... 15
     4.1.     AutoUpdate for DRC Transactions ..................................................................... 15
     4.2.     AutoUpdate for Deemed Transactions ............................................................... 16
     4.3.     Sample Cycle Schedule..................................................................................... 17
     4.4.     AutoUpdate Versioning ...................................................................................... 17
     4.5.     UPI AutoUpdate Flag and Reason Codes .......................................................... 18
     4.6.     URCS AutoUpdate Adjustment Flag and Reason Codes .................................... 19
     4.7.     Bank’s readiness to request/Response to APIs .................................................. 20
5.     Debit Reversal Confirmation Process (DRC) .............................................................. 21
     5.1. Debit Reversal Done Online for a failed Transaction ............................................... 22
     5.2.     Debit Reversal not done, but done now.............................................................. 22
     5.3.     Debit not done during transaction ...................................................................... 22
6.     Deemed Credit (TCC/RET) ........................................................................................ 22
     6.1.    Credited Online .................................................................................................. 23
     6.2.    Not Credited, But Credited Now .......................................................................... 23
     6.3.    Credit to be settled manually............................................................................... 24
     6.4.     Credit could not be processed (RET) ................................................................. 24
     6.5.    Return Reversal Confirmation(RRC) ................................................................... 24
     6.6.    Reason Code mapping – Complaint.................................................................... 24
7.     P2M Disputes............................................................................................................ 26
     7.1.  Amount Debited but Goods/Service not delivered or any other service related
     issue 26
     7.2.     Deemed Transactions ....................................................................................... 27
8.     Online Refund ........................................................................................................... 27
     8.2. Online Refund UPI Flag and Response Codes........................................................ 29
     8.3. Online Refund URCS Flag and Response Codes.................................................... 29
9.      Timeout..................................................................................................................... 30
     9.1.       Beneficiary Timeout........................................................................................... 30
     9.2.       Remitter Timeout............................................................................................... 30
10.         Glossary of Flags and Reason Codes.................................................................... 30
     10.1. List of NAC error codes: ...................................................................................... 32
11.         API Specification ................................................................................................... 33
     11.1.      Autoupdate ReqChkTxn API .............................................................................. 33
        Autoupdate Request from NPCI to Beneficiary Bank................................................... 36
        Response for Autoupdate from Beneficiary bank to NPCI............................................ 36
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 37
        Autoupdate Request from UPI to Beneficiary Bank ..................................................... 39
        Response for Autoupdate from Beneficiary bank to UPI .............................................. 39
        Debit Reversal Initiated from NPCI to remitter bank for DEBIT reversal....................... 40
        Response Received from Remitter Bank to NPCI ....................................................... 40
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee41
        Response for the Confirmation Received from Payer PSP and Payee to NPCI.......... 42
        Autoupdate Request Sent from NPCI to Remitter bank ............................................... 42
        Response for Autoupdate from Remitter bank to UPI .................................................. 42
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 43
        Response for the Confirmation Received from Payer PSP and Payee to NPCI.......... 44
12.         AutoUpdate New Version ...................................................................................... 44
        12.1.      Auto Update – Deemed – TCC|103 .................................................................... 44
        Autoupdate Request from NPCI to Beneficiary Bank................................................... 44
        Response for Autoupdate from Beneficiary bank to NPCI............................................ 46
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 46
        12.2.      Auto Update – DRC |104 .................................................................................. 48
        Autoupdate Request Sent from NPCI to Remitter bank ............................................... 48
        Response for Autoupdate from Remitter bank to UPI.................................................. 49
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 49
        12.3.      Additional Field Specification .......................................................................... 51
        Merchant Details........................................................................................................ 53
     13.        ReqChkTxn API – Bank Initiated ........................................................................ 54
14.      Check Transaction Sample Message dumps ......................................................... 61
      ReqChkTxn from Payer/Payee PSP to NPCI .............................................................. 61
      RespChkTxn from NPCI to Payer/Payee PSP ............................................................ 62
      ReqChkTxn from Payer/Payee PSP to NPCI .............................................................. 62
      RespChkTxn from NPCI to Payer/Payee PSP ............................................................ 62
      ReqchkTxn - Complaint Raised.................................................................................. 63
      ReqChkTxn – DRC .................................................................................................... 64
      ReqChkTxn - TCC ..................................................................................................... 65
      ReqChkTxn - CREDIT ADJUSTMENT........................................................................ 66
      ReqChkTxn from Payer/Payee PSP to NPCI .............................................................. 66
      RespChkTxn from NPCI to Payer/Payee PSP ............................................................ 67
      Bank/PSP initiates ReqChkTxn for a mandate to UPI - ............................................... 67
      RespChkTxn from UPI to Bank/ PSP-......................................................................... 68
15.      Complaint API ....................................................................................................... 70
16.      Complaint API Sample Message Dumps .................................................................. 76
  16.1.      Raise Complaint - DRC........................................................................................ 76
      Payer raise a complaint to UPI ................................................................................... 76
      UPI sends the request to Remitter.............................................................................. 76
      Remitter responds to UPI........................................................................................... 77
      UPI sends Final response to Payer PSP..................................................................... 77
      UPI sends the Status update the Payee PSP.............................................................. 78
      UPI Sends the Status Update to Beneficiary............................................................... 78
  16.2.      Raise Complaint – TCC........................................................................................ 79
      Payer raise a complaint to UPI ................................................................................... 79
      UPI sends the request to Beneficiary.......................................................................... 79
      Beneficiary Responds to UPI with TCC....................................................................... 79
      UPI sends the Final response to Payer PSP............................................................... 80
      UPI sends the Status Update to Payee PSP............................................................... 80
      UPI sends the Status Update to Remitter ................................................................... 81
  16.3.      Raise Complaint – RET ........................................................................................ 81
      Payer raise a complaint to UPI ................................................................................... 82
      UPI sends the request to URCS ................................................................................. 82
      UPI sends the request to Beneficiary.......................................................................... 82
      UPI Sends the Request to Remitter............................................................................ 83
      Remitter Responds to UPI.......................................................................................... 83
      UPI sends the final response to Payer PSP ................................................................ 84
  UPI sends the Status Update to Payee PSP............................................................... 84
16.4.   ReqComplaint (Pre Approved Online Refund – RRC 501) ........................................ 85
  Beneficiary raise a Refund Request to UPI ................................................................. 85
  UPI sends the Refund request to Remitter.................................................................. 85
  Remitter sends the reponse for the reversal ............................................................... 86
  UPI sends the final Response to Beneficiary............................................................... 86
  UPI sends the StatusUpdate to Payer ........................................................................ 86
  UPI sends the StatusUpdate to Payee........................................................................ 87
16.5.   ReqComplaint (Pre Approved Online Refund Timeout – RRC 502) ........................... 87
  Beneficiary raise a Refund Request to UPI ................................................................. 87
  UPI sends the Refund request to Remitter.................................................................. 88
  UPI sends the CheckStatus 1 request to Remitter....................................................... 88
  UPI sends the CheckStatus 2 request to Remitter....................................................... 88
  UPI sends the CheckStatus 3 request to Remitter....................................................... 89
  UPI updates the Status to Payer PSP......................................................................... 89
  UPI updates the Status to Payee PSP........................................................................ 89
  UPI updates the Final Status to Beneficiary ................................................................ 90
16.6.   ReqComplaint – P2M Complaint – PR2C 105 ........................................................ 90
  Payer raise a complaint to UPI ................................................................................... 90
  UPI sends the request to Payee................................................................................. 91
  Payee Responds to UPI............................................................................................. 91
  UPI sends the final response to Payer PSP ................................................................ 91
  UPI sends the Status update to Remitter .................................................................... 92
  UPI sends the Status update to Beneficiary ................................................................ 92
16.7.   ReqComplaint – P2M Complaint – PR2C 106 ........................................................ 93
  Payer raise a complaint to UPI ................................................................................... 93
  UPI sends the request to Payee................................................................................. 93
  Payee Responds to UPI............................................................................................. 93
  UPI sends the final response to Payer PSP ................................................................ 94
  UPI sends the Status update to Remitter .................................................................... 94
  UPI sends the Status update to Beneficiary ................................................................ 94
  Payer raise a complaint to UPI ................................................................................... 95
  UPI sends the request to Payee................................................................................. 95
  UPI sends the Final response to Payer PSP............................................................... 95
  UPI sends the Status update to Remitter .................................................................... 96
  UPI sends the Status update to Beneficiary ................................................................ 96
```

### Numbered entries detected in the original TOC

## 1. Introduction
### 1.1. UPI Transaction Flow
### 1.2. Possible Scenarios leading to dispute
### 1.3. Offline Process of Handling Disputes
### 1.4. Approach for Instant Dispute Resolution using UDIR (UPI Help)
### 1.5. UPI Help (UDIR)
## 2. ReqChkTxn API
## 3. ReqComplaint API
### 3.1. UPI Complaint & Reason Codes
### 3.2. URCS Complaint Adjustment Flag & Reason Code
## 4. AutoUpdate
### 4.1. AutoUpdate for DRC Transactions
### 4.2. AutoUpdate for Deemed Transactions
### 4.3. Sample Cycle Schedule
### 4.4. AutoUpdate Versioning
### 4.5. UPI AutoUpdate Flag and Reason Codes
### 4.6. URCS AutoUpdate Adjustment Flag and Reason Codes
### 4.7. Bank’s readiness to request/Response to APIs
## 5. Debit Reversal Confirmation Process (DRC)
### 5.1. Debit Reversal Done Online for a failed Transaction
### 5.2. Debit Reversal not done, but done now
### 5.3. Debit not done during transaction
## 6. Deemed Credit (TCC/RET)
### 6.1. Credited Online
### 6.2. Not Credited, But Credited Now
### 6.3. Credit to be settled manually
### 6.4. Credit could not be processed (RET)
### 6.5. Return Reversal Confirmation(RRC)
### 6.6. Reason Code mapping – Complaint
## 7. P2M Disputes
### 7.1. Amount Debited but Goods/Service not delivered or any other service related issue
### 7.2. Deemed Transactions
## 8. Online Refund
### 8.2. Online Refund UPI Flag and Response Codes
### 8.3. Online Refund URCS Flag and Response Codes
## 9. Timeout
### 9.1. Beneficiary Timeout
### 9.2. Remitter Timeout
## 10. Glossary of Flags and Reason Codes
### 10.1. List of NAC error codes:
## 11. API Specification
### 11.1. Autoupdate ReqChkTxn API
## 12. AutoUpdate New Version
### 12.1. Auto Update – Deemed – TCC|103
### 12.2. Auto Update – DRC |104
### 12.3. Additional Field Specification
## 13. ReqChkTxn API – Bank Initiated
## 14. Check Transaction Sample Message dumps
## 15. Complaint API
## 16. Complaint API Sample Message Dumps
### 16.1. Raise Complaint - DRC
### 16.2. Raise Complaint – TCC
### 16.3. Raise Complaint – RET
### 16.4. ReqComplaint (Pre Approved Online Refund – RRC 501)
### 16.5. ReqComplaint (Pre Approved Online Refund Timeout – RRC 502)
### 16.6. ReqComplaint – P2M Complaint – PR2C 105
### 16.7. ReqComplaint – P2M Complaint – PR2C 106

---

<!-- PAGE 1 -->
## PAGE 1

### Verbatim page text

```text
                                  UPI HELP – UDIR
                       Technical Specification Document


                                                                           Abstract
    UPI Help is one stop solution for UPI transaction disputes. This feature empowers
customers to raise complaint and check the status of UPI transaction. This document
 contains product note, API specifications and details of error and response codes for
                                             ease of implementation by UPI members.




                                                                           V 2.2
                                                                    1 July 2024
                                                                      st
```

### Visuals

#### [IMAGE_001] - page 1, approximate location: upper third

![IMAGE_001](images/IMAGE_001.png)

**Detailed visual representation:**

Decorative cover/header graphic. It consists of broad white and pale-gray angular bands with a thin gray diagonal line and a solid black polygonal band along the upper-right edge. No readable business/process text is contained in the graphic itself.

**Source image dimensions:** 1673 × 282 px; original embedded image format: PNG; PDF page: 1.

<!-- PAGE 2 -->
## PAGE 2

### Verbatim page text

```text
Contents
1.     Introduction ................................................................................................................. 5
     1.1.     UPI Transaction Flow .......................................................................................... 5
     1.2.     Possible Scenarios leading to dispute .................................................................. 5
     1.3.     Offline Process of Handling Disputes ................................................................... 6
     1.4.     Approach for Instant Dispute Resolution using UDIR (UPI Help) ........................... 7
     1.5.     UPI Help (UDIR).................................................................................................. 7
2.     ReqChkTxn API .......................................................................................................... 8
3.     ReqComplaint API ........................................................................................................ 9
     3.1.     UPI Complaint & Reason Codes ........................................................................ 11
     3.2.     URCS Complaint Adjustment Flag & Reason Code ............................................ 13
4.     AutoUpdate............................................................................................................... 15
     4.1.     AutoUpdate for DRC Transactions ..................................................................... 15
     4.2.     AutoUpdate for Deemed Transactions ............................................................... 16
     4.3.     Sample Cycle Schedule..................................................................................... 17
     4.4.     AutoUpdate Versioning ...................................................................................... 17
     4.5.     UPI AutoUpdate Flag and Reason Codes .......................................................... 18
     4.6.     URCS AutoUpdate Adjustment Flag and Reason Codes .................................... 19
     4.7.     Bank’s readiness to request/Response to APIs .................................................. 20
5.     Debit Reversal Confirmation Process (DRC) .............................................................. 21
     5.1. Debit Reversal Done Online for a failed Transaction ............................................... 22
     5.2.     Debit Reversal not done, but done now.............................................................. 22
     5.3.     Debit not done during transaction ...................................................................... 22
6.     Deemed Credit (TCC/RET) ........................................................................................ 22
     6.1.    Credited Online .................................................................................................. 23
     6.2.    Not Credited, But Credited Now .......................................................................... 23
     6.3.    Credit to be settled manually............................................................................... 24
     6.4.     Credit could not be processed (RET) ................................................................. 24
     6.5.    Return Reversal Confirmation(RRC) ................................................................... 24
     6.6.    Reason Code mapping – Complaint.................................................................... 24
7.     P2M Disputes............................................................................................................ 26
     7.1.  Amount Debited but Goods/Service not delivered or any other service related
     issue 26
     7.2.     Deemed Transactions ....................................................................................... 27
8.     Online Refund ........................................................................................................... 27
     8.2. Online Refund UPI Flag and Response Codes........................................................ 29
```
<!-- PAGE 3 -->
## PAGE 3

### Verbatim page text

```text
     8.3. Online Refund URCS Flag and Response Codes.................................................... 29
9.      Timeout..................................................................................................................... 30
     9.1.       Beneficiary Timeout........................................................................................... 30
     9.2.       Remitter Timeout............................................................................................... 30
10.         Glossary of Flags and Reason Codes.................................................................... 30
     10.1. List of NAC error codes: ...................................................................................... 32
11.         API Specification ................................................................................................... 33
     11.1.      Autoupdate ReqChkTxn API .............................................................................. 33
        Autoupdate Request from NPCI to Beneficiary Bank................................................... 36
        Response for Autoupdate from Beneficiary bank to NPCI............................................ 36
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 37
        Autoupdate Request from UPI to Beneficiary Bank ..................................................... 39
        Response for Autoupdate from Beneficiary bank to UPI .............................................. 39
        Debit Reversal Initiated from NPCI to remitter bank for DEBIT reversal....................... 40
        Response Received from Remitter Bank to NPCI ....................................................... 40
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee41
        Response for the Confirmation Received from Payer PSP and Payee to NPCI.......... 42
        Autoupdate Request Sent from NPCI to Remitter bank ............................................... 42
        Response for Autoupdate from Remitter bank to UPI .................................................. 42
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 43
        Response for the Confirmation Received from Payer PSP and Payee to NPCI.......... 44
12.         AutoUpdate New Version ...................................................................................... 44
        12.1.      Auto Update – Deemed – TCC|103 .................................................................... 44
        Autoupdate Request from NPCI to Beneficiary Bank................................................... 44
        Response for Autoupdate from Beneficiary bank to NPCI............................................ 46
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 46
        12.2.      Auto Update – DRC |104 .................................................................................. 48
        Autoupdate Request Sent from NPCI to Remitter bank ............................................... 48
        Response for Autoupdate from Remitter bank to UPI.................................................. 49
        Confirmation on the Transaction Status Sent from NPCI to Payer PSP and Payee
        PSP .......................................................................................................................... 49
        12.3.      Additional Field Specification .......................................................................... 51
        Merchant Details........................................................................................................ 53
     13.        ReqChkTxn API – Bank Initiated ........................................................................ 54
```
<!-- PAGE 4 -->
## PAGE 4

### Verbatim page text

```text
14.      Check Transaction Sample Message dumps ......................................................... 61
      ReqChkTxn from Payer/Payee PSP to NPCI .............................................................. 61
      RespChkTxn from NPCI to Payer/Payee PSP ............................................................ 62
      ReqChkTxn from Payer/Payee PSP to NPCI .............................................................. 62
      RespChkTxn from NPCI to Payer/Payee PSP ............................................................ 62
      ReqchkTxn - Complaint Raised.................................................................................. 63
      ReqChkTxn – DRC .................................................................................................... 64
      ReqChkTxn - TCC ..................................................................................................... 65
      ReqChkTxn - CREDIT ADJUSTMENT........................................................................ 66
      ReqChkTxn from Payer/Payee PSP to NPCI .............................................................. 66
      RespChkTxn from NPCI to Payer/Payee PSP ............................................................ 67
      Bank/PSP initiates ReqChkTxn for a mandate to UPI - ............................................... 67
      RespChkTxn from UPI to Bank/ PSP-......................................................................... 68
15.      Complaint API ....................................................................................................... 70
16.      Complaint API Sample Message Dumps .................................................................. 76
  16.1.      Raise Complaint - DRC........................................................................................ 76
      Payer raise a complaint to UPI ................................................................................... 76
      UPI sends the request to Remitter.............................................................................. 76
      Remitter responds to UPI........................................................................................... 77
      UPI sends Final response to Payer PSP..................................................................... 77
      UPI sends the Status update the Payee PSP.............................................................. 78
      UPI Sends the Status Update to Beneficiary............................................................... 78
  16.2.      Raise Complaint – TCC........................................................................................ 79
      Payer raise a complaint to UPI ................................................................................... 79
      UPI sends the request to Beneficiary.......................................................................... 79
      Beneficiary Responds to UPI with TCC....................................................................... 79
      UPI sends the Final response to Payer PSP............................................................... 80
      UPI sends the Status Update to Payee PSP............................................................... 80
      UPI sends the Status Update to Remitter ................................................................... 81
  16.3.      Raise Complaint – RET ........................................................................................ 81
      Payer raise a complaint to UPI ................................................................................... 82
      UPI sends the request to URCS ................................................................................. 82
      UPI sends the request to Beneficiary.......................................................................... 82
      UPI Sends the Request to Remitter............................................................................ 83
      Remitter Responds to UPI.......................................................................................... 83
      UPI sends the final response to Payer PSP ................................................................ 84
```
<!-- PAGE 5 -->
## PAGE 5

### Verbatim page text

```text
  UPI sends the Status Update to Payee PSP............................................................... 84
16.4.   ReqComplaint (Pre Approved Online Refund – RRC 501) ........................................ 85
  Beneficiary raise a Refund Request to UPI ................................................................. 85
  UPI sends the Refund request to Remitter.................................................................. 85
  Remitter sends the reponse for the reversal ............................................................... 86
  UPI sends the final Response to Beneficiary............................................................... 86
  UPI sends the StatusUpdate to Payer ........................................................................ 86
  UPI sends the StatusUpdate to Payee........................................................................ 87
16.5.   ReqComplaint (Pre Approved Online Refund Timeout – RRC 502) ........................... 87
  Beneficiary raise a Refund Request to UPI ................................................................. 87
  UPI sends the Refund request to Remitter.................................................................. 88
  UPI sends the CheckStatus 1 request to Remitter....................................................... 88
  UPI sends the CheckStatus 2 request to Remitter....................................................... 88
  UPI sends the CheckStatus 3 request to Remitter....................................................... 89
  UPI updates the Status to Payer PSP......................................................................... 89
  UPI updates the Status to Payee PSP........................................................................ 89
  UPI updates the Final Status to Beneficiary ................................................................ 90
16.6.   ReqComplaint – P2M Complaint – PR2C 105 ........................................................ 90
  Payer raise a complaint to UPI ................................................................................... 90
  UPI sends the request to Payee................................................................................. 91
  Payee Responds to UPI............................................................................................. 91
  UPI sends the final response to Payer PSP ................................................................ 91
  UPI sends the Status update to Remitter .................................................................... 92
  UPI sends the Status update to Beneficiary ................................................................ 92
16.7.   ReqComplaint – P2M Complaint – PR2C 106 ........................................................ 93
  Payer raise a complaint to UPI ................................................................................... 93
  UPI sends the request to Payee................................................................................. 93
  Payee Responds to UPI............................................................................................. 93
  UPI sends the final response to Payer PSP ................................................................ 94
  UPI sends the Status update to Remitter .................................................................... 94
  UPI sends the Status update to Beneficiary ................................................................ 94
  Payer raise a complaint to UPI ................................................................................... 95
  UPI sends the request to Payee................................................................................. 95
  UPI sends the Final response to Payer PSP............................................................... 95
  UPI sends the Status update to Remitter .................................................................... 96
  UPI sends the Status update to Beneficiary ................................................................ 96
```
<!-- PAGE 6 -->
## PAGE 6

**Section context on this page:**
- 1. Introduction
- 1.1. UPI Transaction Flow
- 1.2. Possible Scenarios leading to dispute

### Verbatim page text

```text
  Annexure ...................................................................................................................... 97
  Abbreviations ................................................................................................................ 98
  References ................................................................................................................... 98
  Document History ........................................................................................................... 98




    1. Introduction
The Committee on Deepening of Digital Payments has submitted its report outlining ways to
accelerate digitalisation of payments in the country. RBI, as part to the action items arising
from the report, has informed NPCI to implement/enhance Online Dispute Resolution system
that is fast and fair. The system may be used by the banks to handle the customers complaints
and it can provide an aggregate (participant wise) data on issues reported, and resolution
timelines so that the regulator has the necessary visibility into the health of the payment
system.

Our objective is to facilitate the ecosystem participants to handle complaints expeditiously and
in fair manner thereby enhancing the end user (consumer) experience and Trust on our products
& services and overall payments ecosystem.
    1.1.      UPI Transaction Flow
A basic UPI Transaction involves following parties:
Payer PSP, Payee PSP, Remitter Bank, Beneficiary Bank & Merchants




                                                               1. Customer sends a push Request by entering the
                                                                  UPI ID of the Payee
                                                               2. Payer PSP sends the same to UPI
                                                               3. UPI sends it to the respective Payee PSP for
                                                                  address resolution
                                                               4. Payee PSP sends relevant account details of the
                                                                  Payee to UPI
                                                               5. UPI sends the debit request to remitter bank
                                                               6. Remitter bank debits the Payer’s account and
                                                                  sends the confirmation to UPI.
                                                               7. UPI sends the credit request to the Beneficiary
                                                                  Bank.
                                                               8. Beneficiary Bank credits the customer’s account
                                                                  and confirms the same to UPI
                                                               9. UPI sends the successful confirmation to the Payer
                                                                  PSP
                                                               10. Payer PSP sends the confirmation to the
                                                                  customer



    1.2.      Possible Scenarios leading to dispute
Please refer the above UPI Transaction flow to understand status for transactions:
```

### Visuals

#### [IMAGE_002] - page 6, approximate location: middle third

![IMAGE_002](images/IMAGE_002.jpeg)

**Detailed visual representation:**

UPI transaction-flow diagram with numbered steps 1-10. Entities/actors shown: Acquiring Channel (Mobile APP) at lower left, Payer PSP at left, UPI / Unified Payments Interface at the center, Remitter Bank above, Payee PSP at right, and Beneficiary Bank below. Flow shown: (1) Acquiring Channel sends a request upward to Payer PSP; (2) Payer PSP sends ReqPay to UPI; (3) UPI sends Address Resolution Request to Payee PSP; (4) Payee PSP returns RespAuthDetail to UPI; (5) UPI sends Debit Request to Remitter Bank using ReqPay; (6) Remitter Bank returns RespPay to UPI; (7) UPI sends Credit Request to Beneficiary Bank using ReqPay; (8) Beneficiary Bank returns RespPay to UPI; (9) UPI returns RespPay to Payer PSP; (10) Payer PSP returns the response to the Acquiring Channel/mobile app. The diagram centers UPI as the switch between PSPs and the two banks.

**Source image dimensions:** 623 × 666 px; original embedded image format: JPEG; PDF page: 6.

<!-- PAGE 7 -->
## PAGE 7

**Section context on this page:**
- 1.3. Offline Process of Handling Disputes

### Verbatim page text

```text
Sr. No Failure at Step      Transaction Status Customer                       Remarks
                                               Impact
                                                                       No   scope    for Customer
1       1-4                 Failed                  No                 Complaints as debit has not
                                                                       been processed

                                                                       If customer is debited, fund is
2       5–7                 Failed                  Yes
                                                                       with Remitter
                                                                       Beneficiary could have received
                                                                       the fund or amount is lying with
3       8                   Pending/ Deemed         Yes
                                                                       the Beneficiary Bank

                                                                       No     scope     of    Customer
                                                                       complaints for P2P transaction.
                                                                       For P2M transaction, complaints
4       9                   Success                 Yes                can be registered, if goods or
                                                                       services are not delivered or
                                                                       for any other
                                                                       service related issue.


    A typical UPI transaction is completed within seconds of origination. However, in the event of
    network fluctuation, server timeout, etc. the transaction completion gets delayed & in few
    cases it may get timeout. The UPI system also initiates a check status of the original transaction
    if response is not received within 30 seconds. After 3 check transactions, the UPI system
    closes the transaction with an unknown status. This may lead to a dispute from a customer
    perspective.
    The reasons of disputes can be broadly attributed to 3 problem statements:
    ➢ Failed Debit Reversal
    ➢ Credit Timeout (Deemed approved transactions)
    ➢ Dispute arising in successful merchant transactions where goods/services are not
      delivered or any other service related issue


        1.3. Offline Process of Handling Disputes
    After a transaction is closed with an unknown status, the respective bank (where the
    transaction response was not provided) has to update the status of the transaction in NPCI’s
    system (back office). This is done after the settlement cycle is completed and settlement files
    and reports are made available to the banks. Banks after reconciliation and accounting, updates
    the status to close the transaction in the back office system (URCS). The dependencies for this
    task i.e. reconciliation and exception handling are:
    ➢ CBS data files
    ➢ Switch data files
    ➢ Settlement reports (Recon) files
    ➢ Business rules & passing credit/debit to the customer accounts
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 7.1

| Sr. No | Failure at Step | Transaction Status | Customer | Remarks |
| --- | --- | --- | --- | --- |
|  |  |  | Impact |  |
|  |  |  |  | No scope for Customer |
| 1 | 1 - 4 | Failed | No | Complaints as debit has not |
|  |  |  |  | been processed |
|  |  |  |  |  |
| 2 | 5 – 7 | Failed | Yes | If customer is debited, fund is with Remitter |
|  |  |  |  | Beneficiary could have received |
|  |  |  |  | the fund or amount is lying with |
| 3 | 8 | Pending/ Deemed | Yes |  |
|  |  |  |  | the Beneficiary Bank |
|  |  |  |  |  |
|  |  |  |  |  |
| 4 | 9 | Success | Yes | No scope of Customer complaints for P2P transaction. For P2M transaction, complaints can be registered, if goods or services are not delivered or for any other service related issue. |

<!-- PAGE 8 -->
## PAGE 8

**Section context on this page:**
- 1.4. Approach for Instant Dispute Resolution using UDIR (UPI Help)
- 1.5. UPI Help (UDIR)

### Verbatim page text

```text
Challenges in offline despite handling
The current process of the dispute management is similar to other retail payment products.
The challenges faced are:
➢ Instant information (status) and/or resolution/refund not available to user (end
  customer)
➢ The process is either user initiated or is done by bank post reconciliation.
➢ Files for reconciliation are made available only after settlement or on T+1 day. In the
  event of any delay due to system issue, entire process gets prolonged.


       1.4. Approach for Instant Dispute Resolution using UDIR
            (UPI Help)
While NPCI has mitigated for the loopholes that can result into disputes, there shall be cases
where still transaction dispute may arise. Hence, UPI Help is a one stop solution to address
any kind of customer grievances wrt UPI transaction. This also involves obtaining/updating the
status of a pending transaction through API.
➢ Auto Triggering Deemed/DRC transactions from NPCI’s Back Office System (URCS) to
  UPI and UPI communicates to respective Bank through API then, update the status to
  all participant
➢ Raising Complaint/Dispute in NPCI’s Back office system (URCS) through UPI by
  Bank/PSP


This forms the basis for Unified Dispute & Issue Resolution (UDIR)
Presently, Unified Real time Clearing & Settlement (URCS), the UPI back office supports
banks to raise/act on disputes/adjustments using the following ways
A. Graphic User Interface – GUI
B. Bulk File Upload



       1.5. UPI Help (UDIR)
Bank/PSP connects to UPI, the existing UPI API framework is used to process the disputes.
UPI has an internal connectivity to URCS. UPI does switching between URCS and Bank/PSP.
All APIs which connect Bank/PSP to UPI will be in XML format.
Note : URCS Adjustment Report an indicator will be available for identification of actions thru
APIs – ‘UDIR’ is populated in the originating channel column.

For online dispute & complaint resolution under UPI Help (UDIR), there are two APIs:
 i)     ReqChkTxn (Existing API - enhanced)
 ii)    ReqComplaint (New API)

The purpose of this document is to detail the flow for online dispute resolution and the API to
be used for the same.
```
<!-- PAGE 9 -->
## PAGE 9

**Section context on this page:**
- 2. ReqChkTxn API

### Verbatim page text

```text
    2. ReqChkTxn API
Using ReqChkTxn API, user and bank/PSP can check the transaction status, including status
of TCC/RET update, disputes / adjustments etc. The existing API will be enhanced to fetch
below status with Type ‘BACKOFFICE’

Table – giving details of sub type

   Sub Type                  Action                                     Refer Tag
                                                 - ‘result’ tag will contain the status of the
                                                 original transaction and
TXN             Only Original Transaction
                Status
                                                 - response code will be given in ‘respCode’ in ref
                                                   tag.
DISPUTE         Only Latest Dispute Status       - ‘adjFlag and adjCode in ref tag.
                                                 - ‘result’ tag will contain the status of the
                                                 original transaction and

                Both Transaction and Latest      - response code will be given in ‘respCode’ in
TXNDISPUTE                                       ref tag and
                Dispute Status

                                                 - latest Dispute details in ‘adjCode’ &
                                                 ‘adjFlag’ of corresponding final ref tag.

MANDATE         Only Mandate Status              - ‘result’ tag will contain the status of the Mandate

                                                 - Last three dispute details will be sent in the
DISPUTEHIST Only Last 3 Dispute Status           response
                                                 in ‘adjFlag’ & ‘adjCode’ of corresponding ref tag
REFUND          Only Refund Status               - ‘adjFlag and adjCode in ref tag.




When a transaction is done and the user want to know the status of the pending transaction,
he/she can check the status through this API using “Check Status” button. When status check
is used, this API would check the status in URCS system through UPI and notify the app on
the status of transactions. For open transactions (deemed / DRC required), Bank can inform
the user that it shall be closed in ‘X’ time or can raise a complaint if it is not processed within
the specified time (TAT). User can accordingly raise a complaint, if required.
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 9.1

| Sub Type | Action | Refer Tag |
| --- | --- | --- |
| TXN | Only Original Transaction Status | - ‘result’ tag will contain the status of the original transaction and - response code will be given in ‘respCode’ in ref tag. |
| DISPUTE | Only Latest Dispute Status | - ‘adjFlag and adjCode in ref tag. |
| TXNDISPUTE | Both Transaction and Latest Dispute Status | - ‘result’ tag will contain the status of the original transaction and - response code will be given in ‘respCode’ in ref tag and - latest Dispute details in ‘adjCode’ & ‘adjFlag’ of corresponding final ref tag. |
| MANDATE | Only Mandate Status | - ‘result’ tag will contain the status of the Mandate |
| DISPUTEHIST | Only Last 3 Dispute Status | - Last three dispute details will be sent in the response in ‘adjFlag’ & ‘adjCode’ of corresponding ref tag |
| REFUND | Only Refund Status | - ‘adjFlag and adjCode in ref tag. |


### Visuals

#### [IMAGE_003] - page 9, approximate location: middle third

![IMAGE_003](images/IMAGE_003.png)

**Detailed visual representation:**

Compact architecture/API interaction diagram. Left: “Bank/PSP App” containing a “Check Status” control. Center: a UPI box containing two API blocks labeled “ReqChkTxn” (orange) and “RespChkTxn” (blue). Right: “URCS”. Numbered interactions: 1 connects the Bank/PSP App to the ReqChkTxn path; 2 connects ReqChkTxn toward the UPI/URCS side; 3 connects the UPI/URCS side to URCS; 4 returns through RespChkTxn toward the Bank/PSP App. The visual establishes that Check Status invokes ReqChkTxn/RespChkTxn through UPI and checks the URCS back-office status.

**Source image dimensions:** 524 × 137 px; original embedded image format: PNG; PDF page: 9.

<!-- PAGE 10 -->
## PAGE 10

**Section context on this page:**
- 3. ReqComplaint API

### Verbatim page text

```text
User will also have a provision (“Raise Complaint” button) to raise a complaint separately.

   •       If there is any complaint raised in prior and user selects the check status, this API will
           pull the complaint status and exhibit. It shall also provide the status of dispute /
           adjustment, if raised, or any update done on the status of deemed transaction / DRC
           required transaction.
   •       PSP/Bank initiated ReqChkTxn will have type ‘BACKOFFICE’, so that the transaction
           fetch the last updated status from URCS through transaction id




   3. ReqComplaint API
ReqComplaint API has following categories

    i)      Complaint
    ii)     Dispute
    iii)    Refund
    iv)     StatusUpdate
    v)      CheckStatus
    vi)     Reversal

Complaint API can be initiated by Payer PSP /Payee PSP /Remitter/Beneficiary to create or
act on Complaint/Dispute. When a complaint is raised , a crn (Complaint Reference Number)
will be shared by UPI ACK


Remitter bank will respond to the transaction with status of DRC via ReqComplaint -
Complaint Category. Beneficiary Bank can use this API to update the status of Deemed
transaction i.e. TCC / RET as a response to ReqComplaint – Complaint Category.

If a complaint is raised on any transaction and remitter/beneficiary banks doesn’t respond to
it, penalty is levied on the concerned bank as per Harmonisation TAT defined by RBI. The
‘Type’ tag of Complaint API will contain one of the above category and the ‘Subtype’ tag will
contain the name of the party such as Payer / Payee / Remitter / Beneficiary.
DRC complaints are rejected with NAC error code where Payer PSP is same as remitter
bank. Similarly TCC and refund complaints are rejected where remitter bank is same as
beneficiary bank or Payee PSP is same as beneficiary bank.
Details of Complaint API –

 Complaint API                Category Scenarios/Transactions                  Initiator
                                        Deemed(TCC,RET)/DRC/P2M                Payer
                                        for Goods Not Delivered or             PSP/Remitter Bank
 Raise Complaint              Complaint
                                        refund not processed cases

                                          All Disputes (Update status of
 Raise/Respond                            DRC / Deemed / etc except            Bank
 Dispute                      Dispute
                                          chargeback)
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 10.1

| Complaint API | Category | Scenarios/Transactions | Initiator |
| --- | --- | --- | --- |
|  |  | Deemed(TCC,RET)/DRC/P2M |  |
|  |  |  | Payer |
|  |  | for Goods Not Delivered or |  |
| Raise Complaint | Complaint |  | PSP/Remitter Bank |
|  |  | refund not processed cases |  |
|  |  |  |  |
| Raise/Respond Dispute | Dispute | All Disputes (Update status of DRC / Deemed / etc except chargeback) | Bank |

<!-- PAGE 11 -->
## PAGE 11

### Verbatim page text

```text
                                                                                   1. Non
                                                                                 Pre
                                                                      Approved –
                                                                      Raised      by
                                                                      Payee
                                                                      2. Pre Aprroved
                                                                         –
                                                                      Rasied      by
                                            Pre-Approved ,   Non Pre- Beneficiary direcly
 Online Refund                Refund        Approved P2M Transactions or by payee
                                                                      through
                                                                      Beneficiary

                                            All – Status update of
                                            Transaction / Dispute shall be         UPI
                              Status        notified to other entities live on
  Status Update
                              Update        this API




                                        To Check the status for                    UPI
                              CheckStat Beneficiary and Remitter
  Timeout
                              us        Timeout



Details of Complaints that are facilitated through UPI Application

                                Complaint from UPI Application


       Txn Status                    P2P                                       P2M
                                                         Allowed f or reasons -
 Success                Not allowed
                                                         1) Goods and services not delivered Or
                                                         2) Ref und not processed f or cancelled
                                                         order / returned goods
                        Allowed -                        3) Account debited but transaction
                        only If TCC /                    conf irmation not received by
 Deemed                 RET/Credit                       merchant
                        adjustment is not                4) Paid by alternate means
                        done already                     (It is allowed f or transaction where TCC is
                                                         also updated)
                        Allowed -
 DRC                                                 Allowed - only If DRC not done already
                        only If DRC not done already
 Declined Txn           Not allowed                      Not allowed

 Note:
 1. Complaints shall be allowed only after '5' mins from time of txn and after txn status check is
 done by user
 2. Reason codes shall be added in the API f or raising complaint f or P2P and P2M both
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 11.1

|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Online Refund | Refund | Pre-Approved , Non Pre- Approved P2M Transactions | 1. Non Pre Approved – Raised by Payee 2. Pre Aprroved – Rasied by Beneficiary direcly or by payee through Beneficiary |
|  |  |  |  |
|  |  | All – Status update of |  |
|  |  |  |  |
|  |  |  |  |
|  |  | Transaction / Dispute shall be |  |
|  |  |  | UPI |
|  | Status |  |  |
|  |  | notified to other entities live on |  |
| Status Update |  |  |  |
|  | Update |  |  |
|  |  | this API |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
| Timeout | CheckStat us | To Check the status for Beneficiary and Remitter Timeout | UPI |

#### Table 11.2

| Complaint from UPI Application |  |  |
| --- | --- | --- |
|  |  |  |
| Txn Status | P2P | P2M |
| Success | Not allowed | Allowed for reasons - 1) Goods and services not delivered Or 2) Refund not processed for cancelled order / returned goods 3) Account debited but transaction confirmation not received by merchant 4) Paid by alternate means (It is allowed for transaction where TCC is also updated) |
| Deemed | Allowed - only If TCC / RET/Credit adjustment is not done already |  |
| DRC | Allowed - only If DRC not done already | Allowed - only If DRC not done already |
| Declined Txn | Not allowed | Not allowed |
|  |  |  |
| Note: 1. Complaints shall be allowed only after '5' mins from time of txn and after txn status check is done by user 2. Reason codes shall be added in the API for raising complaint for P2P and P2M both |  |  |

<!-- PAGE 12 -->
## PAGE 12

**Section context on this page:**
- 3.1. UPI Complaint & Reason Codes

### Verbatim page text

```text
    ➢ Complaint/Dispute Not Applicable: If PSP/Bank raises a complaint to UPI, it is routed
      to URCS for initiating a Complaint. URCS validates the transaction, if there has been
      complaint/dispute raised already [Online/Offline], URCS rejects the complaint request
      stating complaint already registered/transaction is updated.
    ➢ Complaint should be allowed to be raised after a cooling period of say ‘X’ time e.g. 5
      min or so (parameterized) from the transaction time.
    ➢ NOTE: Parties that are mentioned in all below depicted pictures in the document are as
      per their participation in original transaction like Payer, Payee, Remitter, and
      Beneficiary.


       3.1. UPI Complaint & Reason Codes
                                                                                          RespCom
                             Beni                Remi                Paye                  pl aint -
   Scenario                         Beni RC           Remi RC                  Payee
                             Flag                Flag                 e                  CheckStatu
                                                                               RC
                                                                      Flag                 s Retry
DRC and Remitter
confirms it                                             102 ;103;
                                                DRC       104                                  No
DRC but Remitter Timed Out
                                                DRC        105                                 Yes
DRC but Remitter responds                               UT1;UT2
Unable to Update                                           ;
                                                        UT3;UT4
                                                DRC                                            No
                                                           ;
                                                        UT5;UT6
DRC and Remitter Not able
to trace the transaction
                                                DRC        NO                                  No

Deemed Transaction and
Beneficiary Issued TCC
                              TCC    102;103      -         -                                  No

Deemed Transaction and
Beneficiary Timed out
                              BTO       TB        -         -                                  Yes

Deemed Transaction and
Beneficiary responded                UT1;UT2
Unable to Update                        ;
                                     UT3;UT4
                              BUU       ;         -         -                                  No
                                     UT5;UT6
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 12.1

|  | Beni |  | Remi |  | Paye |  | RespCom |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  | pl aint - |
| Scenario |  | Beni RC |  | Remi RC |  | Payee |  |
|  | Flag |  | Flag |  | e |  | CheckStatu |
|  |  |  |  |  |  | RC |  |
|  |  |  |  |  | Flag |  | s Retry |
|  |  |  |  |  |  |  |  |
| DRC and Remitter confirms it |  |  | DRC | 102 ;103; 104 |  |  | No |
| DRC but Remitter Timed Out |  |  | DRC | 105 |  |  | Yes |
| DRC but Remitter responds Unable to Update |  |  | DRC | UT1;UT2 ; UT3;UT4 ; UT5;UT6 |  |  | No |
| DRC and Remitter Not able to trace the transaction |  |  | DRC | NO |  |  | No |
| Deemed Transaction and Beneficiary Issued TCC | TCC | 102;103 | - | - |  |  | No |
| Deemed Transaction and Beneficiary Timed out | BTO | TB | - | - |  |  | Yes |
| Deemed Transaction and Beneficiary responded Unable to Update | BUU | UT1;UT2 ; UT3;UT4 ; UT5;UT6 | - | - |  |  | No |

<!-- PAGE 13 -->
## PAGE 13

### Verbatim page text

```text
 Deemed Transaction and
 Beneficiary Not able to trace
 the transaction
                                 BUU     NO                                        No

 Deemed Transaction and
 Beneficiary Issued RET
 and Remitter gives                    114;115;
 RRC                                   116;117;
                                                         501-RRC
                                 RET   118;119;   RRC                              No
                                                         Success
                                         120

 Deemed Transaction and                114;115;
 Beneficiary Issued RET                116;117;
 but                                                     502-RRC
                                 RET   118;119;   RRC                              Yes
                                                         Timeout
 Remitter timeout                        120
 Deemed Transaction and
 Beneficiary Issued RET but
 Remitter responded                    114;115;
 Unable to                       RET   116;117;   RUU   UT1;UT2;
 Update                                118;119;         UT3;UT4;
                                         120            UT5;UT6
                                                                                   No
 For P2M, in addition to above

 P2M Complaint and
 Payee Confirms that
 Goods/Services delivered
 / Complaint is                                                    PR2C     105    No
 resolved



 P2M - payee responds
 Unable to Update                                                  PUU    UT1;UT   No
                                                                          2;
                                                                          UT3;UT
                                                                          4;
                                                                          UT5;UT
                                                                          6

 P2M - payee responds
 refund will be initiated                                          PR2C     106    No



 P2M – Payee Timed out                                             PTO      TP     Yes

P2M Refund – Beneficiary
initiates refund and remitter
                                                  RRC     501                      No
successfully processed the
refund
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 13.1

| Deemed Transaction and Beneficiary Not able to trace the transaction | BUU | NO |  |  |  |  | No |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deemed Transaction and Beneficiary Issued RET and Remitter gives RRC | RET | 114;115; 116;117; 118;119; 120 | RRC | 501-RRC Success |  |  | No |
| Deemed Transaction and Beneficiary Issued RET but Remitter timeout | RET | 114;115; 116;117; 118;119; 120 | RRC | 502-RRC Timeout |  |  | Yes |
| Deemed Transaction and Beneficiary Issued RET but Remitter responded Unable to Update | RET | 114;115; 116;117; 118;119; 120 | RUU | UT1;UT2; UT3;UT4; UT5;UT6 |  |  | No |
| For P2M, in addition to above |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
| P2M Complaint and Payee Confirms that Goods/Services delivered / Complaint is resolved |  |  |  |  | PR2C | 105 | No |
| P2M - payee responds Unable to Update |  |  |  |  | PUU | UT1;UT 2; UT3;UT 4; UT5;UT 6 | No |
| P2M - payee responds refund will be initiated |  |  |  |  | PR2C | 106 | No |
| P2M – Payee Timed out |  |  |  |  | PTO | TP | Yes |
| P2M Refund – Beneficiary initiates refund and remitter successfully processed the refund |  |  | RRC | 501 |  |  | No |

<!-- PAGE 14 -->
## PAGE 14

**Section context on this page:**
- 3.2. URCS Complaint Adjustment Flag & Reason Code

### Verbatim page text

```text
P2M Refund –
Beneficiary initiates refund                      RRC       502                            Yes
and remitter times out
P2M Refund –
                                                      UT1, UT2,
Beneficiary initiates refund                    RUU UT3, UT4,                              No
and remitter responds unable                           UT5, UT6
to update
     Banks have to populate above flag and reason code in RespComplaint “adjCode and
     adjFlag” tags.


         3.2. URCS Complaint Adjustment Flag & Reason Code
                                                Existin
                                    Existin
                                                g Adj      New UDIR
                                    g Adj                                New UDIR Adj Report
              Scenario                          Report    Adj Report -
                                    Report                                  - Reason Code
                                                   -          Flag
                                    - Flag
                                                Reaso
                                                  n
                                                Code
    DRC and Remitter                           102;103;
                                      DRC
    confirms it                                  104
    DRC but Remitter Timed Out
                                                             DRC                105

    DRC but Remitter responds
                                                                            UT1;UT2;UT3;
    Unable to Update                                         DRC
                                                                            UT4;UT5;UT6

    DRC and Remitter Not able
    to trace the transaction
                                    No Entry                 DRC                NO



    Deemed Transaction and
                                     TCC       102;103
    Beneficiary Issued TCC

    Deemed Transaction and          No Entry                 BTO                TB
    Beneficiary Timed out


    Deemed Transaction and
                                                                            UT1;UT2;UT3;
    Beneficiary responded Unable No Entry                    BUU
                                                                            UT4;UT5;UT6
    to Update

    Deemed Transaction and
    Beneficiary Not able to trace
                                    No Entry                 BUU                NO
    the transaction

                                     RET       114;115;
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 14.1

| P2M Refund – Beneficiary initiates refund and remitter times out |  |  | RRC | 502 |  |  | Yes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P2M Refund – Beneficiary initiates refund and remitter responds unable to update |  |  | RUU | UT1, UT2, UT3, UT4, UT5, UT6 |  |  | No |

#### Table 14.2

|  | Existin | Existin | New UDIR |  |
| --- | --- | --- | --- | --- |
|  |  | g Adj |  |  |
|  | g Adj |  |  | New UDIR Adj Report |
| Scenario |  | Report | Adj Report - |  |
|  | Report |  |  | - Reason Code |
|  |  | - | Flag |  |
|  | - Flag |  |  |  |
|  |  | Reaso |  |  |
|  |  |  |  |  |
|  |  | n |  |  |
|  |  | Code |  |  |
| DRC and Remitter confirms it | DRC | 102;103; 104 |  |  |
| DRC but Remitter Timed Out |  |  | DRC | 105 |
| DRC but Remitter responds Unable to Update |  |  | DRC | UT1;UT2;UT3; UT4;UT5;UT6 |
| DRC and Remitter Not able |  |  |  |  |
| to trace the transaction |  |  |  |  |
|  | No Entry |  | DRC | NO |
|  |  |  |  |  |
|  |  |  |  |  |
| Deemed Transaction and Beneficiary Issued TCC | TCC | 102;103 |  |  |
| Deemed Transaction and Beneficiary Timed out | No Entry |  | BTO | TB |
| Deemed Transaction and Beneficiary responded Unable to Update | No Entry |  | BUU | UT1;UT2;UT3; UT4;UT5;UT6 |
| Deemed Transaction and |  |  |  |  |
| Beneficiary Not able to trace |  |  |  |  |
|  | No Entry |  | BUU | NO |
| the transaction |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

<!-- PAGE 15 -->
## PAGE 15

### Verbatim page text

```text
                                         116;117;
 Deemed Transaction and
                                         118;119;
 Beneficiary Issued RET and
 Remitter gives RRC                        120;

                                RRC         501
                                         114;115;
 Deemed Transaction and
                                           116;
 Beneficiary Issued RET but     RET                     RRC                 502
                                         117;118;
 Remitter Timed out
                                         119;120;
 Deemed Transaction and
 Beneficiary Issued RET but              114;115;
 Remitter Timed responded                116;117;                       UT1;UT2;UT3;
                                RET                     RUU
 Unable to Update                        118;119;                       UT4;UT5;UT6
                                           120;

 P2M
 P2M Complaint and Payee
 Confirms that
                                PR2C        105
 Goods/Services delivered
 / Complaint is resolved


 P2M - payee responds Unable
 to Update                                              PUU
                                                                   UT1;UT2;UT3;
                                                                   UT4;UT5;UT6

 P2M - payee responds refund
                                PR2C        106
 will be initiated



 P2M - Timed out                                        PTO                 TP

P2M – Beneficiary initiates
refund and remitter confirms    RRC         501
successful refund
P2M – Beneficiary initiates
refund and remitter timed out                           RRC                 502

P2M – Beneficiary initiates
refund and remitter responds                                       UT1, UT2, UT3, UT4,
                                                        RUU
unable to update                                                        UT5, UT6


  Note : Refer Scenarios with Error Codes for Reference in Annexure section for various
  reasons like rejection scenarios , decline scenarios , timeout and versioning
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 15.1

| Deemed Transaction and Beneficiary Issued RET but Remitter Timed out | RET | 114;115; 116; 117;118; 119;120; | RRC | 502 |
| --- | --- | --- | --- | --- |
| Deemed Transaction and Beneficiary Issued RET but Remitter Timed responded Unable to Update | RET | 114;115; 116;117; 118;119; 120; | RUU | UT1;UT2;UT3; UT4;UT5;UT6 |
| P2M |  |  |  |  |
| P2M Complaint and Payee Confirms that Goods/Services delivered / Complaint is resolved | PR2C | 105 |  |  |
| P2M - payee responds Unable to Update |  |  | PUU | UT1;UT2;UT3; UT4;UT5;UT6 |
| P2M - payee responds refund will be initiated | PR2C | 106 |  |  |
| P2M - Timed out |  |  | PTO | TP |
| P2M – Beneficiary initiates refund and remitter confirms successful refund | RRC | 501 |  |  |
| P2M – Beneficiary initiates refund and remitter timed out |  |  | RRC | 502 |
| P2M – Beneficiary initiates refund and remitter responds unable to update |  |  | RUU | UT1, UT2, UT3, UT4, UT5, UT6 |

<!-- PAGE 16 -->
## PAGE 16

**Section context on this page:**
- 4. AutoUpdate
- 4.1. AutoUpdate for DRC Transactions

### Verbatim page text

```text
   4. AutoUpdate
Auto Update will use the existing UPI API so that all banks are getting on boarded on Day One.
However, they need to do changes for checking and processing credit/reversal, if not done
today from CBS.

                                                  1. In order to update the DRC/Deemed
                                                     transaction, URCS will Auto trigger the
                                                     transaction to UPI every 60 min, up to
                                                     ‘x’ no. of attempts.
                                                  2. UPI          triggers the  transaction
                                                     to respective entities
                                                     (Remitter/Beneficiary) by throttling
                                                     through ReqChkTxn



    3. Bank provides the updated response through RespChkTxn. If response is timeout
       by bank there will be retry for 3 times at an interval of 10 min (Configurable)
    4. UPI updates the status to URCS through ReqTxnConfirmation API and sends the
       confirmation to all other entities.



➢ ReqChkTxn will be used to get the status from Beneficiary/Remitter. ‘Txn.note’ tag will
  have the ‘AUTOUPDATE’ to distinguish Auto update transaction
➢ For Reversing transaction to the Remitter, ReqPay-Debit Reversal will be used. While
  responding back , Bank will echoback the Autoupdate Tran ID in the URL
➢ ReqTxnConfirmation will be used to notify the Payer and Payee.
  ‘TxnConfirmation.note’ tag will have Flag and code of the ‘AUTOUPDATE’ separated
  by ‘|’ symbol.


   4.1. AutoUpdate for DRC Transactions
                                                  1. URCS push the DRC transaction to
                                                      UPI through every 60 min to UPI, upto
                                                      ‘x’ no. of attempts.
                                                  2. UPI sends the DRC transaction to
                                                      Remitter Bank through ReqChkTxn
                                                  3. Remitter shall check the CBS and will
                                                      respond back to UPI as below
                                                      through RespChkTxn
                                                      a. Debit Reversal was done Online
                                                      b. Debit Reversal done now
                                                      c. No debit happened online
                                                      d. Unable to Update
                                                  4. UPI will update the status to URCS
                                                      system
                                                  5,6,7 UPI sends the notification to Payee
                                                  PSP, Payer PSP on the status using
                                                  ReqTxnConfirmation API
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 16.1

|  | 1. In order to update the DRC/Deemed transaction, URCS will Auto trigger the transaction to UPI every 60 min, up to ‘x’ no. of attempts. 2. UPI triggers the transaction to respective entities (Remitter/Beneficiary) by throttling through ReqChkTxn |
| --- | --- |
| 3. Bank provides the updated response through RespChkTxn. If response is timeout by bank there will be retry for 3 times at an interval of 10 min (Configurable) 4. UPI updates the status to URCS through ReqTxnConfirmation API and sends the confirmation to all other entities. |  |


### Visuals

#### [IMAGE_004] - page 16, approximate location: upper third

![IMAGE_004](images/IMAGE_004.jpeg)

**Detailed visual representation:**

AutoUpdate DRC flow fragment. A left grouped area labeled “Deemed & DRC Transactions” contains UPI and URCS. A horizontal ReqChkTxn block sits between this group and a “Bank” box on the right. Numbered arrows show: 1 between URCS and UPI, 2 from the UPI-side group toward the Bank via ReqChkTxn, 3 returning from Bank through ReqChkTxn, and 4 returning from the UPI-side group toward URCS. The main interaction is URCS -> UPI -> ReqChkTxn -> Bank -> response back -> UPI/URCS.

**Source image dimensions:** 454 × 247 px; original embedded image format: JPEG; PDF page: 16.

#### [IMAGE_005] - page 16, approximate location: lower third

![IMAGE_005](images/IMAGE_005.jpeg)

**Detailed visual representation:**

Notification/confirmation flow fragment. Left: URCS. Center: UPI. Above UPI: Remitter Bank. Right: Payer PSP and Payee PSP. Numbered arrows show 1 between URCS and UPI; 2 and 3 between UPI and Remitter Bank; 4 from UPI back to URCS; 5 and 6 from UPI toward Payer PSP and Payee PSP respectively. The visual represents UPI updating the back-office status and notifying the PSPs after the bank response.

**Source image dimensions:** 257 × 164 px; original embedded image format: JPEG; PDF page: 16.

<!-- PAGE 17 -->
## PAGE 17

**Section context on this page:**
- 4.2. AutoUpdate for Deemed Transactions

### Verbatim page text

```text
  4.2. AutoUpdate for Deemed Transactions
TCC
                                             1. URCS push the Deemed transaction
                                                to UPI through every 60 min to UPI,
                                                upto ‘x’ no. of attempts.
                                             2. UPI sends the Deemed transaction
                                                to    Beneficiary Bank       through
                                                ReqChkTxn
                                             3. Beneficiary shall checks the CBS
                                                and will respond back to UPI as
                                                below through ReqChkTxn
                                                   a. Credit was done online
                                                   b. Not credited; Credit done now
                                                   c. Unable to Update
                                                   d. Cannot process credit – RET
                                                      will be be initiated

 4. UPI will update the status to URCS system
    5,6,7 UPI sends the notification to Payee PSP, Payer PSP on the status using
    ReqTxnConfirmation API


RET


                                      3.d. [Conti…] Cannot not process Credit - If RET
                                      is responded by beneficiary, UPI will initiate a
                                      Debit Reversal through ReqPay Debit Reversal to
                                      Remitter 4,5. Remitter Bank gives the Reversal
                                      Response Confirmation (RRC) to UPI.
                                      6,7,8. UPI will update the Remitter’s response to
                                      URCS / Payer PSP / Payee PSP using
                                      ReqTxnConfirmation API


RET Timeout

                                      3.d. [Conti…] Cannot not process Credit - If RET
                                      is initiated, UPI will initiate a Return Reversal
                                      Request through ReqPay Reversal to Remitter.
                                      Late Debit Reversal shall be accepted and
                                      processed by Remitter as per existing
                                      process.UPI shall send the reversal request upto
                                      4 hours (parameterised) of the transaction.
                                      4,5. If RET is timed out the transaction is
                                      considered as RRC – 502 (Timeout) and the same
                                      will be updated in URCS
                                      6,7,8. UPI will update the status response to all
                                      entities using ReqTxnConfirmation API
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 17.1

|  | 1. URCS push the Deemed transaction to UPI through every 60 min to UPI, upto ‘x’ no. of attempts. 2. UPI sends the Deemed transaction to Beneficiary Bank through ReqChkTxn 3. Beneficiary shall checks the CBS and will respond back to UPI as below through ReqChkTxn a. Credit was done online b. Not credited; Credit done now c. Unable to Update d. Cannot process credit – RET will be be initiated |
| --- | --- |
| 4. UPI will update the status to URCS system 5,6,7 UPI sends the notification to Payee PSP, Payer PSP on the status using ReqTxnConfirmation API |  |


### Visuals

#### [IMAGE_006] - page 17, approximate location: upper third

![IMAGE_006](images/IMAGE_006.jpeg)

**Detailed visual representation:**

AutoUpdate Deemed/TCC diagram labeled “TCC”. Entities: URCS on the left, UPI in the center, Beneficiary Bank below, Remitter Bank above, Payer PSP on the right, and Payee PSP on the lower-right. Numbered interactions are shown between URCS and UPI (1,4), UPI and Beneficiary Bank (2,3), UPI and Remitter Bank (7), and UPI and the PSPs (5,6). The flow emphasizes that UPI sends the deemed transaction to the Beneficiary Bank, receives the TCC-related response, updates URCS, and notifies PSPs.

**Source image dimensions:** 371 × 286 px; original embedded image format: JPEG; PDF page: 17.

#### [IMAGE_007] - page 17, approximate location: middle third

![IMAGE_007](images/IMAGE_007.jpeg)

**Detailed visual representation:**

Deemed/RET flow diagram labeled “RET”. Entities: URCS on the left, UPI in the center, Beneficiary Bank below, Remitter Bank above, Payer PSP on the right, and Payee PSP on the lower-right. Numbered flow: 1 between URCS and UPI; 2 and 3 between UPI and Beneficiary Bank; 4 and 5 between UPI and Remitter Bank; 6 back to URCS; 7 to Payer PSP; 8 to Payee PSP. The visual represents Beneficiary Bank returning RET and UPI subsequently initiating/handling reversal with the Remitter Bank and notifying PSPs.

**Source image dimensions:** 371 × 286 px; original embedded image format: JPEG; PDF page: 17.

#### [IMAGE_008] - page 17, approximate location: lower third

![IMAGE_008](images/IMAGE_008.jpeg)

**Detailed visual representation:**

Deemed/RET timeout variant. Same principal actors and numbered routing as the RET flow: URCS, UPI, Beneficiary Bank, Remitter Bank, Payer PSP and Payee PSP. The Remitter-Bank interaction is marked with a magenta timeout/prohibition symbol at the response leg (around step 5), indicating a timeout/exception at that stage. URCS receives the status via step 6 and the PSPs receive notifications via steps 7 and 8.

**Source image dimensions:** 340 × 262 px; original embedded image format: JPEG; PDF page: 17.

<!-- PAGE 18 -->
## PAGE 18

**Section context on this page:**
- 4.3. Sample Cycle Schedule
- 4.4. AutoUpdate Versioning

### Verbatim page text

```text
     4.3. Sample Cycle Schedule
 The auto update API will be fired every 60 minutes from URCS to UPI, upto ‘x’ no. of
 attempts and inturn UPI to banks. The API will take all the unresolved status transction for ‘x’
 hours (say 3 hours). The below table shows the indicative timings.
 Indicative Table:

                                    Timing           Transaction Time Range
                                   10.45 PM             7.45 PM – 10.30 PM
                                   11.45 PM             8.45 PM – 11.30 PM
                                   12.45 AM             9.45 PM – 12.30 AM


     4.4. AutoUpdate Versioning
There are scenarios which arise where the original transaction is not found at the remitter or
beneficiary end. In such cases, the amount would not have been debited from the payer’s
account incase of Remitter and the amount would not have been credited to the payee’s
account incase of Beneficiary. For this, at present banks are to respond with DRC NO in case
of Remitter and BUU NO in case of Beneficiary. These cases then needs to be handled as part
of the reconciliation.

In order to bring in efficiency and address this issue, a newer version of autoupdate APIs is
being implemented wherein the account details, Payer/Payee details and other relevant details
will be passed in ReqChkTxn – Autoupdate API.

Bank as a Remitter, for a DRC cases, when original transaction is not found, Bank can respond
with DRC 104 along with echoing back the required tag values received in the ReqChkTxn
API. Also the validation of mandatory Tags in response for DRC 104 shall be relaxed, so
remitter sending DRC 104 would be acknowledge in the present API as well.

Similarly, Bank as a Beneficiary, for a Deemed case, when original transaction is not found i.e.
online credit was not done earlier, Bank can credit the Payee based on the account no., ifsc
code and other relevant details sent in the ReqChkTxn API.

Banks which are already onboarded shall continue to get the ReqChkTxn in the former version
of API and would continue to give DRC 104 / DRC NO or BUU NO. The banks which certifies
and are onboarded using the new version of Autoupdate API, will get the ReqChkTxn in new
version and shall respond with DRC 104 in case of Remitter bank; and process credit &
respond with TCC 103 in case of Beneficiary Bank where original transaction is not found.

Banks on older version of API, should do the development/changes and complete the
certification for processing & responding to the newer version of API as mentioned above. This
is to ensure that the status of pending transactions are updated online itself.

The structure of new API has been eloborated in section 12
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 18.1

| Timing | Transaction Time Range |
| --- | --- |
| 10.45 PM | 7.45 PM – 10.30 PM |
| 11.45 PM | 8.45 PM – 11.30 PM |
| 12.45 AM | 9.45 PM – 12.30 AM |

<!-- PAGE 19 -->
## PAGE 19

**Section context on this page:**
- 4.5. UPI AutoUpdate Flag and Reason Codes

### Verbatim page text

```text
          4.5. UPI AutoUpdate Flag and Reason Codes
                                                                                         TxnConfir
                                                                                         mation Sent
                   Final    Ben e                                         RespChkTxn         to
  Scenario        Settlem   Flag    Bene RC    Remi      Remi RC          Success/Fail
                                               Flag                                      Payer/Pay
                    ent                                                     ure Flag        ee -
                                                                                         OrgStatus
Deemed
Transaction
and Beneficiary                       102;                                                 Yes -
                  Success TCC                    -            -             Success       Success
Issued TCC                            103

Deemed
Transaction
and Beneficiary   Deemed    BTO       TB         -            -                -             No
Timed out


Deemed
Transaction
and Beneficiary                     UT1;UT2;
responded         RB                                                                      Yes-
                  and       BUU     UT3;UT4;     -            -             Failure      Deemed
Unable to                           UT5;UT6
                  Settle
Update


Deemed
Transaction
and Beneficiary
Not able to        BUU      NO                                              Failure       Yes-
trace the                                                                                Deemed
transaction*


Deemed
Transaction                                              501- (RRC
                                    114;115;
and Beneficiary                                         SUCCESS)
Issued RET                          116;117;                                                Yes-
                  Decline   RET     118;119;   RRC      will be 00 f or     Failure        Failed
and Remitter                                          Online Response
gives RRC                             120



Deemed
Transaction
and                                 114;115;
Benef iciary                        116;117;            502- RRC                          Yes-
                  Decline   RET     118;119;   RRC      Timeout ;              -         Deemed
Issued RET
but Remitter                          120
Timed out
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 19.1

|  |  |  |  |  |  |  | TxnConfir |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  | mation Sent |
|  | Final | Ben e |  |  |  | RespChkTxn |  |
|  |  |  |  | Remi |  |  | to |
| Scenario | Settlem | Flag | Bene RC |  | Remi RC | Success/Fail |  |
|  |  |  |  | Flag |  |  | Payer/Pay |
|  | ent |  |  |  |  | ure Flag |  |
|  |  |  |  |  |  |  | ee - |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | OrgStatus |
|  |  |  |  |  |  |  |  |
| Deemed Transaction and Beneficiary Issued TCC | Success | TCC | 102; 103 | - | - | Success | Yes - Success |
| Deemed Transaction and Beneficiary Timed out | Deemed | BTO | TB | - | - | - | No |
| Deemed Transaction and Beneficiary responded Unable to Update | RB and Settle | BUU | UT1;UT2; UT3;UT4; UT5;UT6 | - | - | Failure | Yes- Deemed |
| Deemed |  |  |  |  |  |  |  |
| Transaction |  |  |  |  |  |  |  |
| and Beneficiary |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  | Yes- |
| Not able to | BUU | NO |  |  |  | Failure |  |
|  |  |  |  |  |  |  | Deemed |
| trace the |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
| transaction* |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
| Deemed Transaction and Beneficiary Issued RET and Remitter gives RRC | Decline | RET | 114;115; 116;117; 118;119; 120 | RRC | 501- (RRC SUCCESS) will be 00 for Online Response | Failure | Yes- Failed |
| Deemed Transaction and Beneficiary Issued RET but Remitter Timed out | Decline | RET | 114;115; 116;117; 118;119; 120 | RRC | 502- RRC Timeout ; | - | Yes- Deemed |

<!-- PAGE 20 -->
## PAGE 20

**Section context on this page:**
- 4.6. URCS AutoUpdate Adjustment Flag and Reason Codes

### Verbatim page text

```text
Deemed
Transaction
and
Benef iciary                        114;115;
Issued RET                          116;117;                                                  Yes-
but Remitter     Decline   RET                 RUU               96            Failure
                                    118;119;                                                 Deemed
Timed                               120
responded
Unable to
Update

DRC and
Remitter                                                                                      Yes –
                 Decline                       DRC        102;103;104        Success          Failed
conf irms it
DRC but Remitter
Timed Out        Decline                       DRC            105                                 No

DRC      but
Remitter
responds                                                                  Failure
Unable to                                                UT1;UT2;UT3;                       Yes – Failed
                 Decline                       DRC
Update                                                   UT4;UT5;UT6
DRC and
Remitter Not
able to trace                                                 NO                             Yes- Failed
the             Decline                        DRC                             Failure
transaction*

 *Refer section 4.4 Autoupdate Versioning (NO should not be given)

          4.6. URCS AutoUpdate Adjustment Flag and Reason Codes
                                                     Existing Adj     New UDIR           New UDIR Adj
                              URCS Existing
          Scenario                                     Report-        Adj Report           Report -
                              Retry Adj Report-        Reason           - Flag           Reason Code
                                    Flag
                                                        Code
 Deemed Transaction and
 Beneficiary Issued TCC        No        TCC           102;103

 Deemed Transaction and
                              Yes      No Entry                          BTO                 TB
 Beneficiary Timed Out
 Deemed Transaction and                                                                   UT1;UT2;
 Beneficiary responded         No      No Entry                          BUU              UT3;UT4;
 Unable to Update                                                                         UT5;UT6
 Deemed Transaction and
 Beneficiary Not able to       No      No Entry                          BUU                 NO
 trace the transaction*
                                         RET      114;115;116;
 Deemed Transaction and                           117;118;119;
 Beneficiary Issued RET and    No                 120;
 Remitter gives RRC
                                         RRC      501
 Deemed Transaction and                           114;115;116;
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 20.1

| Deemed Transaction and Beneficiary Issued RET but Remitter Timed responded Unable to Update | Decline | RET | 114;115; 116;117; 118;119; 120 | RUU |  | Failure | Yes- Deemed |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  | 96 |  |  |
|  |  |  |  |  |  |  |  |
| DRC and Remitter confirms it | Decline |  |  | DRC | 102;103;104 | Success | Yes – Failed |
|  |  |  |  |  |  |  |  |
| DRC but Remitter Timed Out | Decline |  |  | DRC | 105 |  | No |
| DRC but Remitter responds Unable to Update | Decline |  |  | DRC | UT1;UT2;UT3; UT4;UT5;UT6 | Failure | Yes – Failed |
| DRC and Remitter Not able to trace the transaction* | Decline |  |  | DRC | NO | Failure | Yes- Failed |

#### Table 20.2

|  |  |  | Existing Adj | New UDIR | New UDIR Adj |
| --- | --- | --- | --- | --- | --- |
|  | URCS | Existing |  |  |  |
| Scenario |  |  | Report- | Adj Report | Report - |
|  | Retry | Adj Report- |  |  |  |
|  |  |  | Reason | - Flag | Reason Code |
|  |  | Flag |  |  |  |
|  |  |  | Code |  |  |
|  |  |  |  |  |  |
| Deemed Transaction and Beneficiary Issued TCC | No | TCC | 102;103 |  |  |
| Deemed Transaction and Beneficiary Timed Out | Yes | No Entry |  | BTO | TB |
| Deemed Transaction and Beneficiary responded Unable to Update | No | No Entry |  | BUU | UT1;UT2; UT3;UT4; UT5;UT6 |
| Deemed Transaction and |  |  |  |  |  |
|  |  |  |  |  |  |
| Beneficiary Not able to | No | No Entry |  | BUU | NO |
| trace the transaction* |  |  |  |  |  |
|  |  |  |  |  |  |
| Deemed Transaction and Beneficiary Issued RET and Remitter gives RRC | No | RET RRC | 114;115;116; 117;118;119; 120; 501 |  |  |

<!-- PAGE 21 -->
## PAGE 21

**Section context on this page:**
- 4.7. Bank’s readiness to request/Response to APIs

### Verbatim page text

```text
Beneficiary Issued RET but     No         RET        117;118;119;           RRC               502
Remitter Timed out                                   120

Deemed Transaction and
                                                      114;115;116;
Beneficiary Issued RET                                                                     UT1;UT2;
                               No         RET         117;118;119;          RUU
but Remitter responded                                                                     UT3;UT4;
                                                          120
Unable to Update                                                                           UT5;UT6

DRC and Remitter
confirms                       No         DRC         102;103;104

DRC but Remitter Timed
Out                           Yes       No Entry             -              DRC               105
DRC but Remitter                                                                           UT1;UT2;
responds Unable to             No       No Entry             -              DRC            UT3;UT4;
Update
                                                                                           UT5;UT6
DRC and Remitter Not
able to trace the                                                                          NO
transaction*                   No       No Entry                            DRC

    *Refer section 4.4 Autoupdate Versioning (NO should not be given)

        •   Adjustment report and Raw file will not be updated
        •   The Timeout and Unable to update reason codes will be in a separate UDIR
            Adjustment report. (Sample Name : UDIR Adjustment Report_CSB_03MAR2021_33C)


        4.7. Bank’s readiness to request/Response to APIs
     Banks needs to do the development for sending the message to CBS on receipt of the API
     request [both for autotrigger- ReqChkTxn and Complaint APIs] for:


  1. Checking the status of credits/reversals processed online or through manual process post
     recon (both), for action / responding to the API request.
  2. If the transaction is not processed (credited / reversed, as the case may be), then to process
     the transaction online (after checking point 1 above) and respond it accordingly in the
     response to the API request.
  3. In case bank as Beneficiary, had not credited the amount and it needs to be returned due to
     any reason, can respond to the API request with ‘RET’ and appropriate reason.
  4. Please note importantly, banks who have not yet developed the capability to check manually
     entered transactions (credit / reversals) in CBS (on receipt of API request online), should pass
     the manual credits / reversals to beneficary and remitter (both) based on reconciliation only
     after T+1 day’s first settlement (T = Txn date) and after checking the adjustment reports.
  5. Remitter banks while consuming ReqComplaint Refund API have to keep a check on
     reqadjamount as it can have value less than original transaction amount.
  6. In case of refunds through Reqcomplaint API, Remitter banks while responding to UPI should
     populate the same amount in reqadjamount and adjamount

     This shall help banks to process credit online on receipt of API request for auto trigger by
     NPCI as well as for complaints received, on T+0 / up to 1st settlement cutover on T+1 day.
     This shall help in auto processing and updation of deemed transactions status and DRC
     status at NPCI’s URCS system, to the extent possible and notify other entities.
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 21.1

| Deemed Transaction and Beneficiary Issued RET but Remitter responded Unable to Update | No | RET | 114;115;116; 117;118;119; 120 | RUU | UT1;UT2; UT3;UT4; UT5;UT6 |
| --- | --- | --- | --- | --- | --- |
| DRC and Remitter confirms | No | DRC | 102;103;104 |  |  |
| DRC but Remitter Timed Out | Yes | No Entry | - | DRC | 105 |
| DRC but Remitter responds Unable to Update | No | No Entry | - | DRC | UT1;UT2; UT3;UT4; UT5;UT6 |
| DRC and Remitter Not able to trace the transaction* | No | No Entry |  | DRC | NO |

<!-- PAGE 22 -->
## PAGE 22

**Section context on this page:**
- 5. Debit Reversal Confirmation Process (DRC)

### Verbatim page text

```text
   Note:
   Banks should work towards developing the process of entering manual credits / reversals in
   such a way that it becomes feasible for checking manually credited / reversed transactions also
   online when API request is received. This shall help in automation of reconciliation and auto
   resolution of customer complaints handling through APIs, even if received after T+0 day.


   Till such time banks may respond with ‘unable to update’ status for such API requests received
   after T+0 day i.e. only for cases reversal or credit was not processed earlier.


   This section is applicable for all the scenarios listed below i.e. for ReqComplaint API
   also.


     5. Debit Reversal Confirmation Process (DRC)
  In UPI transaction flow when the response sent by Remitter bank does not reach NPCI/ remitter
  has not send the response, NPCI will timeout the transaction and send reversal message to
  Remitter bank. NPCI will respond to Payee and Payer PSPs with timeout response.

                                            1. When the transaction initiated by customer is
                                               not successful and shows an unknown status
                                               Payer PSP initiates ReqComplaint API to UPI
                                               for a transaction with unknown status. On
                                               receiving of ACK from UPI, Payer PSP will
                                               show to the customer that “Your Complaint is
                                               under process”
                                            2. UPI sends the request to URCS.
                                            3. URCS validates the transaction, if no dispute
                                               has been created and if the transaction is DRC,
                                               then URCS will create a complaint record
                                               and
                                               responds to UPI through RespComplaint –
                                               Complaint Category
4. UPI initiates ReqComplaint-Complaint to Remitter.
5. Remitter shall check the CBS and will respond back through RespComplaint-Complaint
   to UPI as below
       a. Debit Reversal was done online
       b. Debit Reversal done now
       c. No debit happened online
       d. Unable to Update

  6,7. UPI will update the status to URCS system (For UTU / timeout, Complaint or
  chargeback shall be raised in URCS based on TAT)
  8. Final response status will be sent to Payer PSP (Initiator) through RespComplaint-
  Complaint Category.
  9, 10. UPI sends the notification to Payee PSP/ Beneficiary on the status of dispute
  using RespComplaint-StatusUpdate Category.
```

### Visuals

#### [IMAGE_009] - page 22, approximate location: middle third

![IMAGE_009](images/IMAGE_009.jpeg)

**Detailed visual representation:**

P2M complaint/refund-side flow variant. Entities: Payer PSP on the left, Payee PSP below it, UPI in the center, Remitter Bank above, Beneficiary Bank below, and URCS on the right. Numbered interactions include 1 from the Payer PSP into UPI, 8 from UPI back toward the Payer PSP, 9 toward the Payee PSP, 4/5 with the Remitter Bank, 10 with the Beneficiary Bank, and 2,3,6,7 between UPI and URCS. A magenta marker at step 1 highlights the complaint initiation/request path from the payer side.

**Source image dimensions:** 351 × 259 px; original embedded image format: JPEG; PDF page: 22.

<!-- PAGE 23 -->
## PAGE 23

**Section context on this page:**
- 5.1. Debit Reversal Done Online for a failed Transaction
- 5.2. Debit Reversal not done, but done now
- 5.3. Debit not done during transaction
- 5.4. Debit reversal to be settled manually for a failed transaction
- 6. Deemed Credit (TCC/RET)

### Verbatim page text

```text
➢ API will have additional details of the transaction belongs to current cycle or not. If
  bank is reversing the account, then CBS reference number has to be given in the
  response.
➢ All the transaction status updates / disputes / adjustments, etc. shall be made
  available in the adjustment reports generated at the settlement cutover, with
  separate indicator for those done through API calls

   5.1. Debit Reversal Done Online for a failed Transaction
Remitter bank shall check at their end / in the CBS and respond back through
RespComplaint. If the Debit reversal has been done online, then Remitter bank will send
Debit Reversal Confirmation response code as DRC 102.

   5.2. Debit Reversal not done, but done now
Remitter bank shall check at their end / in the CBS and respond back through RespComplaint.
If the Debit reversal has not been done online but is done now (based on this API), then Remitter
bank will send Debit Reversal Confirmation response code as DRC 103.
➢ ‘103’ response may be given based on the readiness of Bank as mentioned in section
  4.6 above.
➢ Even if bank is still not ready to check manually entered transactions, still can process
  credit and confirm DRC 103 for API request received on T+0. For this bank should not
  pass any credit / reversal entries in customer account on T+0 day manually.


   5.3. Debit not done during transaction
Remitter bank shall check at their end / in the CBS and respond back through
RespComplaint- Complaint. If no amount was debited during the transaction process, then
remitter bank will send Debit Reversal Confirmation response code as DRC 104.

   5.4. Debit reversal to be settled manually for a failed
        transaction
Remitter bank shall check at their end / in the CBS and respond back through
RespComplaint- Complaint to UPI and UPI updates URCS. Remitter bank will respond DRC
– UT1|UT2|UT3|UT4|UT5|UT6|NO* if debit reversal could not be done online.
*Refer section 4.4 Autoupdate Versioning (NO should not be given)


   6. Deemed Credit (TCC/RET)
In UPI transaction flow, when the response sent by Beneficiary bank does not reach NPCI,
this transaction will be considered as Deemed Credit and response will be sent to Payee and
Payer PSPs.

When the transaction initiated by customer is not successful and shows an unknown status,
(i.e. For Deemed P2P Transactions)
```
<!-- PAGE 24 -->
## PAGE 24

### Verbatim page text

```text
                                           1. Payer PSP initiates ReqComplaint-Complaint
                                              to UPI for a transaction with unknown status. On
                                              receiving of ACK from UPI, Payer PSP will
                                              show to the customer that “Your Complaint is
                                              under process”
                                           2. UPI sends the request to URCS.
                                           3. URCS validates the transaction and verify that
                                              no dispute has been created. If the transaction
                                              is Deemed Credit, URCS will create a record
                                              and responds to UPI
   4. UPI initiates ReqComplaint-
      Complaint to Beneficiary.
   5. Beneficiary shall checks the CBS and will respond back through
      RespComplaint- Complaint to UPI as below
         a. Credited Online
         b. Not Credited , will Credit now
         c. Unable to Update
         d. Could not process Credit - RET will be initiated

    6,7. UPI will update the status to URCS system. (For UTU / timeout – Complaint or
    chargeback shall be raised in URCS based on TAT)
    8. Final response status will be sent to initiator (Payer PSP) through
    RespComplaint-Complaint Category.
    9,10. UPI sends the notification to Payee PSP/ Remitter on the status of
    complaint using RespComplaint–StatusUpdate.
➢ API will have additional details of the transaction belongs to current cycle or not. If
  bank is crediting the account, then CBS reference number has to be given in the
  response.
➢ All the transaction status updates / disputes / adjustments, etc. shall be made available
  in the reports generated at the settlement cutover, with separate indicator for those
  done through API calls


6.1.      Credited Online
Beneficiary bank shall check the status at their end / in the CBS and respond back through
RespComplaint. If the amount has been credited online, then beneficiary bank will send
Transaction Credit Confirmation (TCC) response code as 102.

6.2.      Not Credited, But Credited Now
Beneficiary bank shall check at their end / in the CBS and respond back through
RespComplaint. If the amount was not credited but is done now (based on this API), then
beneficiary bank will send Transaction Credit Confirmation (TCC) response code as 103.
➢ 103 response may be given based on the readiness of Bank as mentioned in section
  4.6 above.
➢ Even if bank is still not ready to check manually entered transactions, still can
  process credit and confirm TCC 103 for API request received on T+0.. For this bank
  should not pass any credit / reversal entries in customer account on T+0 day
  manually.
```

### Visuals

#### [IMAGE_010] - page 24, approximate location: upper third

![IMAGE_010](images/IMAGE_010.jpeg)

**Detailed visual representation:**

Another P2M/complaint flow variant using the same six entities: Payer PSP, Payee PSP, UPI, Remitter Bank, Beneficiary Bank and URCS. Numbered arrows show 1 and 8 around the Payer PSP, 9 around the Payee PSP, 4/5 with the Remitter Bank, 10 with the Beneficiary Bank, and 2,3,6,7 with URCS. The numbered network illustrates request, response, update and notification routing across UPI and URCS.

**Source image dimensions:** 352 × 260 px; original embedded image format: JPEG; PDF page: 24.

<!-- PAGE 25 -->
## PAGE 25

**Section context on this page:**
- 6.3. Credit to be settled manually
- 6.4. Credit could not be processed (RET)
- 6.5. Return Reversal Confirmation(RRC)
- 6.6. Reason Code mapping – Complaint

### Verbatim page text

```text
6.3.       Credit to be settled manually
Beneficiary bank shall check at their end / in the CBS and respond back through
RespComplaint to UPI and UPI updates URCS. Beneficiary bank will respond with Unable
to Update BUU – UT1|UT2|UT3|UT4|UT5|UT6|NO* – if credit could not be done online or
at the time of transaction status check.


*Refer section 4.4 Autoupdate Versioning (NO should not be given in Auto update)

6.4.        Credit could not be processed (RET)
For Point 5. Beneficiary shall checks the CBS and will respond back to UPI
through RespComplaint API as below
   6. If amount was not credited and it cannot be credited, then beneficiary bank will send
       Could not process Credit - RET (with reason) as the return response code to UPI
   7. UPI will initiate Reversal Request to Remitter through Reqcomplaint – Reversal
       Category and Remitter sends the response through ReqComplaint / RespComplaint
       – Complaint Category
   8. UPI will update the Remitter’s response Return Reversal Confirmation to URCS
   9. URCS Sends the response back to UPI
   10. UPI sends the final response to Payer through RespComplaint-Complaint
   11. UPI sends the notification to Payee through RespComplaint – StatusUpdate
When RET gets time out, there will be new status stating RET is timed out and a report will
be updated in settlement.



6.5.       Return Reversal Confirmation(RRC)
After RET given by Beneficiary, a debit reversal request is initiated to remitter. Remitter will
reverse the money to respective party and send a notification to customer and such process
is called Return Reversal Confirmation RRC 501. RRC will be done by remitter for credit
adjustment also.
If there is RRC update, based on the updated status ReqComplaint is responded accordingly.
➢ If both the banks are on boarded and if RET is updated by beneficiary bank then
  return reversal will be send to remitter bank online. Remitter will reverse the
  customer account and update with RRC status in UPI through API.
➢ If Remitter is live on API then system will send API to Remitter for debit reversal even if
  beneficiary is live or not
➢ If Remitter is not live on API, an entry will be made in adjustment report (as done
  presently) and Remitter Bank will have to manually provide the credit back to
  customer.

6.6.       Reason Code mapping – Complaint
The below complaint reason code will be initiated by PSP with Action flag as Complaint
raise (PBRB) for all cases
```
<!-- PAGE 26 -->
## PAGE 26

### Verbatim page text

```text
                        Reason
S.   Txn     Txn                    Description (visible on      Complaint     URCS - RC
                        Code (PSP
NO   Type    Status                 App)                         Reason Code   Description
                        Backend)

                                                                               Goods/service s are not
                                    Goods/services are not
 1     U2       0          U008                                     U008       provided f or approved
                                    provided.
                                                                               transaction

                                    Credit not processed for                   Credit not processed for
 2     U2       0          U021     cancelled or returned           U021       cancelled or returned
                                    goods & services                           goods & services


                                    Account debited but                        Account debited but
                                    transaction confirmation                   transaction confirmation
 3     U2       0          U022                                     U022
                                    not received by                            not received at merchant
                                    merchant                                   location

                                    Paid by alternate                          Paid by alternate
 4     U2       0          U023     means/Duplicate                 U023       means/Duplicate
                                    payment                                    payment

                                                                               Goods/service s are not
                                    Goods/services are not
 5     U2      RB          U008                                     U008       provided f or
                                    provided
                                                                               approvedtransaction

                                    Credit not processed for                   Credit not processed for
 6     U2      RB          U021     cancelled or returned           U021       cancelled or returned
                                    goods & services                           goods & services


                                    Account debited but                        Account debited but
                                    transaction confirmation                   transaction confirmation
 7     U2      RB          U022                                     U022
                                    not received by                            not received at merchant
                                    merchant                                   location

                                    Paid by alternate                          Paid by alternate
 8     U2      RB          U023     means/Duplicate                 U023       means/Duplicate
                                    payment                                    payment

                                    Customer account not                       Customer account not
 9     U2    Declined      U009     credited back f or f ailed      U009       credited back f or
                                    merchant transaction                       declined transaction

                                    Benef iciary account is                    Benef iciary account is
                                    not credited f or a                        not credited f or
10   U3/UC     RB          U010                                     U010
                                    pending / timeout                          successf ul pay
                                    transaction                                transaction

                                                                               Customer account
                                    Customer account not
                                                                               has not yet reversed
11    U3/UC Declined       U005     credited back f or f ailed       U005
                                    P2P transaction
                                                                               for a declined pay
                                                                               transaction
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 26.1

| S. NO | Txn Type | Txn Status |  | Reason |  | Description (visible on App) | Complaint Reason Code | URCS - RC Description |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  | Code (PSP |  |  |  |  |
|  |  |  |  | Backend) |  |  |  |  |
| 1 | U2 | 0 | U008 |  |  | Goods/services are not provided. | U008 | Goods/service s are not provided for approved transaction |
| 2 | U2 | 0 | U021 |  |  | Credit not processed for cancelled or returned goods & services | U021 | Credit not processed for cancelled or returned goods & services |
| 3 | U2 | 0 | U022 |  |  | Account debited but transaction confirmation not received by merchant | U022 | Account debited but transaction confirmation not received at merchant location |
| 4 | U2 | 0 | U023 |  |  | Paid by alternate means/Duplicate payment | U023 | Paid by alternate means/Duplicate payment |
| 5 | U2 | RB | U008 |  |  | Goods/services are not provided | U008 | Goods/service s are not provided for approvedtransaction |
| 6 | U2 | RB | U021 |  |  | Credit not processed for cancelled or returned goods & services | U021 | Credit not processed for cancelled or returned goods & services |
| 7 | U2 | RB | U022 |  |  | Account debited but transaction confirmation not received by merchant | U022 | Account debited but transaction confirmation not received at merchant location |
| 8 | U2 | RB | U023 |  |  | Paid by alternate means/Duplicate payment | U023 | Paid by alternate means/Duplicate payment |
| 9 | U2 | Declined | U009 |  |  | Customer account not credited back for failed merchant transaction | U009 | Customer account not credited back for declined transaction |
| 10 | U3/UC | RB | U010 |  |  | Beneficiary account is not credited for a pending / timeout transaction | U010 | Beneficiary account is not credited for successful pay transaction |
| 11 | U3/UC | Declined | U005 |  |  | Customer account not credited back for failed P2P transaction | U005 | Customer account has not yet reversed for a declined pay transaction |

<!-- PAGE 27 -->
## PAGE 27

**Section context on this page:**
- 7. P2M Disputes
- 7.1. Amount Debited but Goods/Service not delivered or any other service related issue

### Verbatim page text

```text
7. P2M Disputes
7.1. Amount Debited but Goods/Service not delivered or any
     other service related issue
There are scenarios when amount gets debited from payer’s bank, but merchant doesn’t
receive confirmation. In such scenario, customer might not receive the goods or services to the
customer.

The system will help to handle such issues. In a P2M (success/deemed) transaction, Payee
didn’t receive the confirmation initially and Customer raise a complaint through ReqComplaint
– Complaint to UPI. UPI routes the complaint to URCS. URCS identifies as P2M

Transaction and respond to UPI through ReqComplaint – Complaint. UPI routes the request
to Payee PSP. Thus, for both successful as well as deemed ( including where TCC is updated
) transaction the ReqComplaint-Complaint API shall be sent to Payee PSP for reponse.

For a successful/deemed transaction when Payee PSP receives the confirmation after
ReqComplaint, following can be the cases of Payee’s response:


                                        Case 1: Payee sends confirmation to merchant
                                        and the goods / service is delivered or provides
                                        details of delivery
                                        (if already done) OR of refund if processed, in
                                        the response.

                                        Case 2: Instead if Payee responds Unable to Update
                                        & for cases where Credit not processed for cancelled
                                        or returned goods, UPI routes to URCS, then URCS
                                        will raise a Chargeback (after T+3) with reason code
                                        and follow current chargeback process. In case within
                                        T+3, complaint shall be raised, which shall be auto
                                        converted if not acted upon. (future use case)

                                        Case 3: If payee wants to refund the customer, then
                                        he will respond as ‘Refund will be initiated’ and
                                        complaint will be raised in URCS. The response to
                                        Payer/User shall be that complaint is raised. Payee
                                        has to initiate a refund transaction seperately using
                                        ReqComplaint-Refund category .Once the refund to
                                        process successfully , sytem to close the Complaint.
```

### Visuals

#### [IMAGE_011] - page 27, approximate location: middle third

![IMAGE_011](images/IMAGE_011.jpeg)

**Detailed visual representation:**

P2M flow diagram including a Merchant node. Entities: Payer PSP at top, Payee PSP below it, UPI in the center, URCS to the right, Remitter Bank above, Beneficiary Bank below, and Merchant at the bottom. Numbered interactions: 1 enters UPI from the Payer PSP; 8 returns to Payer PSP; 9/10 relate to Payee PSP/merchant-side status; 4/5 are with Remitter/Beneficiary banks; 2,3,6,7 connect UPI and URCS. The explicit Merchant node makes the diagram specific to merchant-service/goods-delivery complaint handling.

**Source image dimensions:** 228 × 367 px; original embedded image format: JPEG; PDF page: 27.

<!-- PAGE 28 -->
## PAGE 28

**Section context on this page:**
- 7.2. Deemed Transactions

### Verbatim page text

```text
7.2. Deemed Transactions
When the status of the transaction initiated by customer for paying a Merchant is
unknown status, customer can raise a complaint in the Payer PSP app with
Transaction Id and date to UPI through ReqComplaint- Complaint API.

                                                 UPI routes it to URCS and URCS checks the
                                                 transaction status for success or failure and
                                                 verifies that no dispute has been raised
                                                 earlier. If the transaction status is Deemed,
                                                 UPI update the URCS and URCS initiates
                                                 the request to Beneficiary bank through
                                                 ReqComplaint API through UPI.

                                                 Beneficiary bank shall check at their end/ in
                                                 the CBS and respond back through
                                                 ReqComplaint to URCS.

                                            The response from Beneficiary (including
                                            Unable to Update and timeout), will be sent to
Payee. However, since this is P2M transactions, the status should be considered by Payee
as success only.

Payee to respond as per case1, case2 & online refund process as explained in above sections.




8. Online Refund
During merchant transaction, in few cases money will be debited from payer, but merchant
will not receive the confirmation. In such scenario goods may not be delivered by merchant.
Currently banks are using various channels (online and offline) for refunds wherein it has been
observed that, there are gaps in refund tracking mechanism, leading to double refund being
processed. With this refund functionality,

   1. Merchants can respond to complaints raised by customer by initiating full/partial
        refund
   2.   Merchants can initiate full/partial proactive refund for a transaction

Payee PSP or Bank will have option to initiate Refund.
Pre-Approved Refund Via Beneficiary (Partial or Full refund)

Refund must be Rasied by Beneficiary direcly or by payee through Beneficiary

Flow:

Process Flow to be followed:
```

### Visuals

#### [IMAGE_012] - page 28, approximate location: upper third

![IMAGE_012](images/IMAGE_012.jpeg)

**Detailed visual representation:**

P2M flow variant without the visible merchant node. Entities: Payer PSP and Payee PSP on the left, UPI at center, URCS on the right, Remitter Bank above and Beneficiary Bank below. Numbered paths are 1/8 for the Payer PSP, 9 for the Payee PSP, 4/5 for the Remitter Bank, 10 for the Beneficiary Bank, and 2/3/6/7 for UPI-to-URCS interaction. The diagram shows the UPI/URCS orchestration between PSPs and the two banks.

**Source image dimensions:** 396 × 303 px; original embedded image format: JPEG; PDF page: 28.

<!-- PAGE 29 -->
## PAGE 29

**Section context on this page:**
- 8. Online Refund

### Verbatim page text

```text
1.   User initiates a dispute on the UPI app, and the app transmits the transaction details to
     UPI. UPI subsequently checks the transaction status on the URCS.
2.   If the URCS status is not automatically updated, a complaint ticket is generated, and a
     CRN ticket number is created by UPI and shared with all relevant parties.
3.   Upon receiving the Reqcomplaint request from UPI, the Payee PSP identifies the
     merchant and transmits the transaction details to the merchant via API.
4.   The Merchant can respond by indicating whether the Good/Service has been provided
     or if a refund will be initiated.
5.   When the merchant initiates the refund, the Beneficiary bank triggers the "pre -approved"
     Reqcomplaint API with the type set as "refund".
6.   The Beneficiary bank forwards the request to UPI, which then checks the transaction
     status in URCS. If the status is not auto updated in the URCS, UPI sends the request to
     the remitter bank for processing.
7.   The remitter bank processes the request and promptly sends a response back to UPI
     indicating "Amount Reversed".
8.   UPI then communicates the final response to all parties involved
Merchant can initiate Online Refund through ReqComplaint-Refund as Pre-Approved
through Beneficiary bank. It will be processed based on the type “Refund” and in credbock
Subtype “Pre-Approved”.
➢ Please note Payee through their Beneficiary or Beneficiary can also process refund
   using ReqComplaint-Refund category API proactively (i.e. without complaint) for
   refunding the amount to the customer. Refund will be allowed till 180 days from the
   date of transaction
Below sample scenario is depicted for Pre Approved Online Refund:
                                           1. Beneficiary Bank initiates an Online Refund to
                                               UPI through ReqComplaint- Refund API
                                           2. UPI sends the Refund Request to URCS.
                                           3. URCS validates the transaction and verify that
                                               no dispute has been created and no reversal
                                               has been generated. On valid request URCS
                                               provides a response back to UPI
                                           4. UPI sends the Credit Request to the Remitter
                                               through ReqComplaint- Refund API
                                           5. Remitter sends the success response to UPI
                                               through RespComplaint
                                         6,7 UPI sends the Refund status to Payer PSP and
                                         receives the response.
                                         9. Final response status will be sent to Payee PSP
                                         through RespComplaint-Status Update Category.
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 29.1

| Merchant can initiate Online Refund through ReqComplaint-Refund as Pre-Approved |  |
| --- | --- |
| through | Beneficiary bank. It will be processed based on the type “Refund” and in credbock |
| Subtype |  |


### Visuals

#### [IMAGE_013] - page 29, approximate location: middle third

![IMAGE_013](images/IMAGE_013.jpeg)

**Detailed visual representation:**

P2M complaint flow including Merchant. Entities: Payer PSP, Payee PSP, UPI, URCS, Remitter Bank, Beneficiary Bank, and Merchant at the bottom. The central UPI-to-URCS links are numbered 2,3,6,7; bank links are 4,5 and 7/8-style response/notification links; PSP-side links include numbered paths 1, 6 and 10/11. The diagram shows an end-to-end merchant complaint context carried through UPI and URCS.

**Source image dimensions:** 367 × 401 px; original embedded image format: JPEG; PDF page: 29.

<!-- PAGE 30 -->
## PAGE 30

**Section context on this page:**
- 8.2. Online Refund UPI Flag and Response Codes
- 8.3. Online Refund URCS Flag and Response Codes

### Verbatim page text

```text
    8.2. Online Refund UPI Flag and Response Codes

                             Paye                                          RespComplain
                                        Ben Ben Rem
    Scenario        Category e PSP                             Remi RC     t - CheckStatus
                                        i      i      i
                             to                                                  Retry
                                        Fla    RC     Fla
                             UPI
                                        g             g
                                  Pre-approved Refund
Beneficiary         Raise
Initiate a Refund   Complain   1064 ,
                               1084 ,
(Pre- Approved)     t(                                  RRC         501
                               1065 ,
and refund          Refund)
                               1061
processed           REF
successfully
Beneficiary         Raise
Initiate a Refund   Complain
(Non Pre            t(         1064 ,
Approved) and       Refund)    1084 ,
Remitter failed     REF                                       UT1;UT2; No
                               1065 ,
                                                      RUU     UT3;UT4;
Debit Reversal
                               1061                           UT5;UT6
Beneficiary         Raise
Initiate a Refund   Complain   1064 ,
(Non Pre            t(         1084 ,
                                                      RRC     502         Yes
Approved) and       Refund)    1065 ,
Remitter Timed      REF
Out                            1061



    8.3. Online Refund URCS Flag and Response Codes


                                             Existing
                                                          New UDIR        New UDIR Adj
                          Existing             Adj
        Scenario                                         Adj Report -       Report -
                          Adj Report-        Report-
                                                             Flag         Reason Code
                          Flag               Reason
                                              Code
                                      Preapproved Refund
Beneficiary Initiate a
Refund (Pre- Approved)
and refund processed           RRC             501
successfully

Beneficiary Initiate a
Refund (Non Pre
                                                                           UT1;UT2;UT3;
Approved) and Remitter                                      RUU
                                                                           UT4;UT5;UT6
failed Debit Reversal
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 30.1

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |
|  |  | Paye |  |  |  |  | RespComplain |
|  |  |  | Ben | Ben | Rem |  |  |
| Scenario | Category | e PSP |  |  |  | Remi RC | t - CheckStatus |
|  |  |  | i | i | i |  |  |
|  |  | to |  |  |  |  | Retry |
|  |  |  | Fla | RC | Fla |  |  |
|  |  | UPI |  |  |  |  |  |
|  |  |  | g |  | g |  |  |
|  |  |  |  |  |  |  |  |
| Pre-approved Refund |  |  |  |  |  |  |  |
| Beneficiary Initiate a Refund (Pre- Approved) and refund processed successfully | Raise Complain t ( Refund) REF | 1064 , 1084 , 1065 , 1061 |  |  | RRC | 501 |  |
| Beneficiary Initiate a Refund (Non Pre Approved) and Remitter failed Debit Reversal | Raise Complain t ( Refund) REF | 1064 , 1084 , 1065 , 1061 |  |  | RUU | UT1;UT2; UT3;UT4; UT5;UT6 | No |
| Beneficiary Initiate a Refund (Non Pre Approved) and Remitter Timed Out | Raise Complain t ( Refund) REF | 1064 , 1084 , 1065 , 1061 |  |  | RRC | 502 | Yes |

#### Table 30.2

|  |  | Existing |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  | New UDIR | New UDIR Adj |
|  | Existing | Adj |  |  |
| Scenario |  |  | Adj Report - | Report - |
|  | Adj Report- | Report- |  |  |
|  |  |  | Flag | Reason Code |
|  | Flag | Reason |  |  |
|  |  |  |  |  |
|  |  | Code |  |  |
| Preapproved Refund |  |  |  |  |
| Beneficiary Initiate a Refund (Pre- Approved) and refund processed successfully | RRC | 501 |  |  |
| Beneficiary Initiate a Refund (Non Pre Approved) and Remitter failed Debit Reversal |  |  | RUU | UT1;UT2;UT3; UT4;UT5;UT6 |

<!-- PAGE 31 -->
## PAGE 31

**Section context on this page:**
- 9. Timeout
- 9.1. Beneficiary Timeout
- 9.2. Remitter Timeout
- 10. Glossary of Flags and Reason Codes

### Verbatim page text

```text
Beneficiary Initiate a
Refund (Non Pre
Approved) and Remitter                                         RRC                   502
Timed Out




    9. Timeout
    9.1. Beneficiary Timeout
                                               If UPI is Unable to reach Beneficiary,
                                               ReqComplaint - CheckStatus will be retried at the
                                               interval of 30 Seconds for 3 times [Configurable],
                                               till an ACK is received. If Ack is received at any
                                               of the retry, further regular operation will be
                                               resumed by Complaint API.
                                               If UPI unable to reach Beneficiary even after
                                               repeated retry, the transaction will be closed with
                                               intimation “Unable to Update Status”.
                                          For such cases, complaint / chargeback (based on
    TAT) shall be raised in URCS and informed to all parties. (future use case)

    9.2. Remitter Timeout
                                                 If UPI is Unable to reach Remitter,
                                                 ReqComplaint - CheckStatus will be retried at
                                                 the interval of 30 Seconds for 3 times
                                                 [Configurable] till an ACK is received. If Ack is
                                                 received at any of the retry, further regular
                                                 operation will be resumed by Complaint API. If
                                                 UPI unable to reach Remitter even after
                                                 repeated retry, the transaction will be closed with
                                                 intimation “Unable to Update Status”.

                                                 If there is No response from Remitter,
                                                 ReqComplaint - CheckStatus will be repeated
                                                 retry at the interval of at the interval of 10 min for
                                                 3 times[Configurable].

    If there is Response from Remitter at any of retry, further regular dispute operation will be
    resumed by Complaint API. When there is No Response even after retries, transaction will be
    closed as “Remitter Timeout. Unable to Update Status”. For such cases, complaint /
    chargeback (based on TAT) shall be raised in URCS and informed to all parties. (future use
    case)


    10. Glossary of Flags and Reason Codes
     Description                                   Flag       Reason Codes            Error Codes
     Debit Reversal Confirmation                   DRC           102 ;103;
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 31.1

| Description | Flag | Reason Codes | Error Codes |
| --- | --- | --- | --- |
| Debit Reversal Confirmation | DRC | 102 ;103; |  |


### Visuals

#### [IMAGE_014] - page 31, approximate location: upper third

![IMAGE_014](images/IMAGE_014.jpeg)

**Detailed visual representation:**

P2M/complaint flow variant with exception markers. Entities: Payer PSP, Payee PSP, UPI, URCS, Remitter Bank and Beneficiary Bank. Numbered interactions include 1 from Payer PSP, 11 at the payer-side return/exception path, 8/9 with Remitter Bank, 4/5 with Beneficiary Bank, 2/3/6/7 with URCS, and 10 at the Payee PSP side. Two green circular exception/confirmation symbols are overlaid around the UPI-to-bank interaction area, indicating a special status/processing condition.

**Source image dimensions:** 360 × 274 px; original embedded image format: JPEG; PDF page: 31.

#### [IMAGE_015] - page 31, approximate location: middle third

![IMAGE_015](images/IMAGE_015.jpeg)

**Detailed visual representation:**

Closely related P2M/complaint flow variant. Entities: Payer PSP, Payee PSP, UPI, URCS, Remitter Bank and Beneficiary Bank. Numbered links again show 1 and 11 around Payer PSP, 8/9 with Remitter Bank, 4/5 with Beneficiary Bank, 2/3/6/7 with URCS, and 10 at Payee PSP. A yellow circular marker is placed near the UPI-to-URCS/response area, indicating a highlighted status or condition in the flow.

**Source image dimensions:** 352 × 260 px; original embedded image format: JPEG; PDF page: 31.

#### [IMAGE_016] - page 31, approximate location: middle third

![IMAGE_016](images/IMAGE_016.jpeg)

**Detailed visual representation:**

P2M/complaint flow variant with timeout/exception markers. Entities: Payer PSP, Payee PSP, UPI, URCS, Remitter Bank and Beneficiary Bank. Numbered paths include 1 and 11 around the Payer PSP, 8/9 with Remitter Bank, 4/5 with Beneficiary Bank, 2/3/6/7 with URCS, and 10 at Payee PSP. Two magenta prohibited/exception symbols are overlaid around the UPI/Remitter-Bank interaction, highlighting an exceptional or blocked response condition.

**Source image dimensions:** 364 × 283 px; original embedded image format: JPEG; PDF page: 31.

<!-- PAGE 32 -->
## PAGE 32

### Verbatim page text

```text
Debit Reversal Confirmation – Original
                                              DRC      104
transaction not debited
Debit Reversal Confirmation Timeout           DRC      105
Remitter Original Transaction not found*      DRC       NO
                                                    UT1;UT2;UT3;
                                              DRC
Debit Reversal Confirmation Unable to               UT4;UT5;UT6
Update
Transaction Credit Confirmation               TCC    102;103
                                                   114;115;116;
                                             RET
Beneficiary Initiates Return                     117;118;119;120
                                                   UT1;UT2;UT3;
                                            BUU
Beneficiary Unable to Update                        UT4;UT5;UT6
Beneficiary Original Transaction Not Found* BUU         NO
Beneficiary Timeout                         BTO         TB
Return Reversal Confirmation                RRC 501-RRC Success
Return Reversal Confirmation Timeout        RRC 502-RRC Timeout
Return Reversal Confirmation Unable to             UT1;UT2;UT3;
                                            RUU
Update                                              UT4;UT5;UT6
Response to Complaint                       PR2C       105
                                                   UT1;UT2;UT3;
                                            PUU
Response to Complaint as Unable to Update           UT4;UT5;UT6
Response to Complaint as Refund will be     PR2C       106
initiated
Payee Timeout                               PTO         TP
                                                                   All Applicable
                                              NAC                      UPI Error
Not Applicable Cases
                                                                       Codes
                                              NAC                  UU1;UU2;UU3;
Versioning - Complaint Rejected if bank not                              UU4
live
URCS Timeout                                           UTO
           Unable To Update CBS                        UT1
             Account Closed                            UT2
             Party Instructions                        UT3
               Credit Freeze                           UT4
            Duplicate Processing                       UT5
              Technical Error                          UT6
                  Others                               UT7
       Remitter version not supported                  UU1
      Beneficiary version not supported                UU2
     Remitter/beneficiary not supported                UU3
            Payee not supported                        UU4
Resp.AdjCode should be present                                          E13
Resp.AdjFlag should be present                                          E20
Complaint Not Present                                                   C24
Complaint ReqAdjFlag not present                                        C25
Complaint ReqAdjCode not present                                        C26
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 32.1

| Debit Reversal Confirmation – Original transaction not debited | DRC | 104 |  |
| --- | --- | --- | --- |
| Debit Reversal Confirmation Timeout | DRC | 105 |  |
| Remitter Original Transaction not found* | DRC | NO |  |
| Debit Reversal Confirmation Unable to Update | DRC | UT1;UT2;UT3; UT4;UT5;UT6 |  |
| Transaction Credit Confirmation | TCC | 102;103 |  |
| Beneficiary Initiates Return | RET | 114;115;116; 117;118;119;120 |  |
| Beneficiary Unable to Update | BUU | UT1;UT2;UT3; UT4;UT5;UT6 |  |
| Beneficiary Original Transaction Not Found* | BUU | NO |  |
| Beneficiary Timeout | BTO | TB |  |
| Return Reversal Confirmation | RRC | 501-RRC Success |  |
| Return Reversal Confirmation Timeout | RRC | 502-RRC Timeout |  |
| Return Reversal Confirmation Unable to Update | RUU | UT1;UT2;UT3; UT4;UT5;UT6 |  |
| Response to Complaint | PR2C | 105 |  |
| Response to Complaint as Unable to Update | PUU | UT1;UT2;UT3; UT4;UT5;UT6 |  |
| Response to Complaint as Refund will be initiated | PR2C | 106 |  |
| Payee Timeout | PTO | TP |  |
| Not Applicable Cases | NAC |  | All Applicable UPI Error Codes |
| Versioning - Complaint Rejected if bank not live | NAC |  | UU1;UU2;UU3; UU4 |
| URCS Timeout |  | UTO |  |
| Unable To Update CBS |  | UT1 |  |
| Account Closed |  | UT2 |  |
| Party Instructions |  | UT3 |  |
| Credit Freeze |  | UT4 |  |
| Duplicate Processing |  | UT5 |  |
| Technical Error |  | UT6 |  |
| Others |  | UT7 |  |
| Remitter version not supported |  | UU1 |  |
| Beneficiary version not supported |  | UU2 |  |
| Remitter/beneficiary not supported |  | UU3 |  |
| Payee not supported |  | UU4 |  |
| Resp.AdjCode should be present |  |  | E13 |
| Resp.AdjFlag should be present |  |  | E20 |
| Complaint Not Present |  |  | C24 |
| Complaint ReqAdjFlag not present |  |  | C25 |
| Complaint ReqAdjCode not present |  |  | C26 |

<!-- PAGE 33 -->
## PAGE 33

**Section context on this page:**
- 10.1. List of NAC error codes:

### Verbatim page text

```text
 ReqAdjAmount must be present                                                 V01
 ReqAdjAmount must be within 18 digits                                        V03
 including 2 decimal
 PURPOSE SHOULD BE PRESENT VALID                                              T14
 VALUE
 Txn.OrgTxnDate must be present/ valid                                        R14
 Txn.getOrgTxnId must be present/ valid;                                      T08
 alphanumeric; minlength 1 , maxlength 35
 Ref adjAmt should be within 18 digits                                        E10
 including 2 decimal
 Ref approvalNum is mandatory & text                                          E15
 Only Beneficiary can initiate Preapproved                                    C15
 Refund.
*Refer section 4.4 Autoupdate Versioning (NO should not be given in Auto Update)

10.1. List of NAC error codes:
 Reason
           Reason code Description
  code

  8003     Invalid Flag

  8004     Invalid Shtdat

  8005     Invalid Adjamt

  8006     Invalid Shser

  8007     Invalid Shcrd

  8008     Invalid FileName

  8009     Invalid Reason

  8010     Invalid SpecifyOther

  8002     Invalid BankAdjRef

  5289     Match Not Found

  5290     Multiple Match Found

  5218     Amount can not be less than or equal to Zero

  5037     Invalid format Date & Time,Local Transaction

  5038     Value of "Date & Time,Local Transaction" must be present

  5093     Transaction ID should not be present

  5117     Invalid Message Reason Code

  4301     Full Chargeback is already processed

  8021     Invalid Complaint Action
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 33.1

| ReqAdjAmount must be present |  |  | V01 |
| --- | --- | --- | --- |
| ReqAdjAmount must be within 18 digits including 2 decimal |  |  | V03 |
| PURPOSE SHOULD BE PRESENT VALID VALUE |  |  | T14 |
| Txn.OrgTxnDate must be present/ valid |  |  | R14 |
| Txn.getOrgTxnId must be present/ valid; alphanumeric; minlength 1 , maxlength 35 |  |  | T08 |
| Ref adjAmt should be within 18 digits including 2 decimal |  |  | E10 |
| Ref approvalNum is mandatory & text |  |  | E15 |
| Only Beneficiary can initiate Preapproved Refund. |  |  | C15 |

#### Table 33.2

| Reason code | Reason code Description |
| --- | --- |
| 8003 | Invalid Flag |
| 8004 | Invalid Shtdat |
| 8005 | Invalid Adjamt |
| 8006 | Invalid Shser |
| 8007 | Invalid Shcrd |
| 8008 | Invalid FileName |
| 8009 | Invalid Reason |
| 8010 | Invalid SpecifyOther |
| 8002 | Invalid BankAdjRef |
| 5289 | Match Not Found |
| 5290 | Multiple Match Found |
| 5218 | Amount can not be less than or equal to Zero |
| 5037 | Invalid format Date & Time,Local Transaction |
| 5038 | Value of "Date & Time,Local Transaction" must be present |
| 5093 | Transaction ID should not be present |
| 5117 | Invalid Message Reason Code |
| 4301 | Full Chargeback is already processed |
| 8021 | Invalid Complaint Action |

<!-- PAGE 34 -->
## PAGE 34

**Section context on this page:**
- 11. API Specification
- 11.1. Autoupdate ReqChkTxn API

### Verbatim page text

```text
  3202         Invalid dispute reason code for given function code

  6026         Duplicate record found

  8011         Invalid Transaction For This Participant

               Transaction Amount Partial is not matching with previous lifecycle
  5207
               transaction amount

  5075         Invalid Action Code

 PE007         Unable to process your request.

  5209         Previous lifecycyle transaction is missing for given function code

  3207         The TAT for the Dispute Cycle/Adjustment you trying to raise has expired



11. API Specification
11.1.Autoupdate ReqChkTxn API
11.1.1.       Autoupdate ReqChkTxn API
<upi:ReqChkTxn xmlns:upi=“http://npci.org/upi/schema/”>
          <Head ver=“2.0” ts=““ orgId=““ msgId=““ prodType=““/>
          <Txn id=”” ts=”” custRef=”” refId=”” refUrl=”” refCategory=”” note=”” initiationMode=””
          purpose=”” type=““ subtype=“” orgTxnId=““ orgRrn=““ orgTxnDate=““ orgTxnAmt = “”/>
          </Txn>
</upi:ReqChkTxn>
11.1.2.      Autoupdate RespChkTxn API
<upi:RespChkTxn xmlns:upi=“http://npci.org/upi/schema/”>
          <Head ver=“2.0” ts=““ orgId=““ msgId=““ />
      <Txn id=““ ts=““ custRef=““ refId=““ refUrl=““ refCategory=““ note=““ initiationMode=““
purpose=““ type=““ subtype=“” orgMsgId = “” orgRrn=““ orgTxnId=““ orgTxnDate=““>
          </Txn>


          <Resp reqMsgId=““ result=““ errCode = “”>
      <Ref type=“PAYER|PAYEE” seqNum=““ addr=““ settAmount=““ settCurrency=““
IFSC=““ acNum =““ accType = “” approvalNum=““ Code=““ respCode = “”/>
          </Resp>
</upi:RespChkTxn>
11.1.3.      Check Transaction API Field Specification
          Refer Section 11.2.3
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 34.1

| 3202 | Invalid dispute reason code for given function code |
| --- | --- |
| 6026 | Duplicate record found |
| 8011 | Invalid Transaction For This Participant |
| 5207 | Transaction Amount Partial is not matching with previous lifecycle transaction amount |
| 5075 | Invalid Action Code |
| PE007 | Unable to process your request. |
| 5209 | Previous lifecycyle transaction is missing for given function code |
| 3207 | The TAT for the Dispute Cycle/Adjustment you trying to raise has expired |

<!-- PAGE 35 -->
## PAGE 35

### Verbatim page text

```text
11.1.4.     Autoupdate Versioning

upi:ReqChkTxn
xmlns:upi=“http://npci.org/upi/sche
ma/”>
<Head ver=“2.0” ts=““ orgId=““ msgId=““ prodType=““/>
<Txn id=”” ts=”” custRef=”” refId=”” refUrl=”” refCategory=””
note=”” initiationMode=”” purpose=””
type=““ subtype=“” orgTxnId=““ orgRrn=““ orgTxnDate=““ orgTxnAmt =
“”></Txn>
<Payer addr="" name="" seqNum="" type="PERSON|ENTITY" code="">
<Merchant>
             <Identifier subCode="" mid ="" sid ="" tid=""
             merchantType="SMALL|LARGE" onBoardingType=""
merchantGenre="OFFLINE|ONLINE" pinCode="" regIdNo="" tier=""/>
                <Name brand="" legal="" franchise=""/>
                <Ownership type=""/>


            </Merchant>
              <Device>
                <Tag name="MOBILE" value=""/>
                <Tag name="GEOCODE" value=""/>
                <Tag name="LOCATION" value="" />
                <Tag name="IP" value=""/>
                <Tag name="TYPE" value=""/>
                <Tag name="ID" value=""/>
                <Tag name="OS" value=""/>
                <Tag name="APP" value=""/>
                <Tag name="CAPABILITY" value=""/>
                <Tag name="TELECOM" value=""/>
                <Tag name="cardAccpTrId" value=""/>
                <Tag name="cardAccIdCode" value=""/>
                <Tag name="posEntryCode" value=""/>
                <Tag name="posServCdnCode" value=""/>
              </Device>
```
<!-- PAGE 36 -->
## PAGE 36

### Verbatim page text

```text
  <Ac addrType="ACCOUNT">
    <Detail name="IFSC" value=""/>
    <Detail name="ACTYPE" value=""/>
    <Detail name="ACNUM" value=""/>
  </Ac>
  <Amount value="" curr="INR">
    <Split name="" value=""/>
  </Amount>
</Payer>
<Payees>
  <Payee addr="" name="" seqNum="" type="PERSON|ENTITY" code="">
    <Merchant>
       <Identifier subCode="" mid ="" sid ="" tid=""
       merchantType="SMALL|LARGE" onBoardingType=""
merchantGenre="OFFLINE|ONLINE" pinCode="" regIdNo="" tier=""/>
       <Name brand="" legal="" franchise=""/>
       <Ownership type=""/>
    </Merchant>
    <Device>
       <Tag name="MOBILE" value=""/>
       <Tag name="GEOCODE" value=""/>
       <Tag name="LOCATION" value="" />
       <Tag name="IP" value=""/>
       <Tag name="TYPE" value=""/>
       <Tag name="ID" value=""/>
       <Tag name="OS" value=""/>
       <Tag name="APP" value=""/>
       <Tag name="CAPABILITY" value=""/>
       <Tag name="TELECOM" value=""/>
       <Tag name="cardAccpTrId" value=""/>
       <Tag name="cardAccIdCode" value=""/>
       <Tag name="posEntryCode" value=""/>
       <Tag name="posServCdnCode" value=""/>
    </Device>
```
<!-- PAGE 37 -->
## PAGE 37

**Section context on this page:**
- 11.2. Autoupdate Sample Message Dumps
- 11.2.1. Autoupdate – Deemed TCC

### Verbatim page text

```text
                 <Ac addrType="ACCOUNT">
                    <Detail name="IFSC" value=""/>
                    <Detail name="ACTYPE" value=""/>
                    <Detail name="ACNUM" value=""/>
            </Ac>
                 <Amount value="" curr="INR">
                    <Split name="" value=""/>
                 </Amount>
              </Payee>
            </Payees>undefined</upi:ReqChkTxn>
 11.2. Autoupdate Sample Message Dumps
 11.2.1.  Autoupdate – Deemed TCC


A lifecycle of a deemed transaction is illustrated below for which URCS initiates the Auto update
to UPI. UPI sends the check transaction to Beneficiary Bank for deemed transaction and takes
the status from it. The Status is updated to URCS, Payer and Payee PSP.

 Autoupdate Request from NPCI to Beneficiary Bank
            <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
            <ns2:ReqChkTxn xmlns:ns2=http://npci.org/upi/schema/
            xmlns:ns3="http://npci.org/cm/schema/">
            <Head      ver="2.0" ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
            msgId="5t0yaaWjrmSfs7bc0fw" prodType="UPI"/>
            <Txn id= "AUTO000000005t0yaaWjrmSfs7b6Y4F" note="AUTOUPDATE"
            refId="Ref2323” ts="2021-01- 07T17:08:03+05:30"
            type="AUTOUPDATE"orgMsgId="5t0yaaWjrmSfrGmDtlL"
            orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
            custRef="100717457342” initiationMode="00" subType="CREDIT"
                 purpose="00" orgTxnAmt="53.00"/>
            </ns2:ReqChkTxn>

 Response for Autoupdate from Beneficiary bank to NPCI
            <?xml version="1.0" encoding="UTF-8"?>
            <ns2:RespChkTxn
            xmlns:ns2="http://npci.org/upi/schema/">
            <Head msgId="PTMIN0158eb9d1621e20c542ad554d26eed" orgId="159761"
            prodType="UPI" ts="2021-01-07T17:12:03+05:30" ver="2.0"/>
            <Txn custRef="100717457342" id="AUTO000000005t0yaaWjrmSfs7b6Y4F"
            initiationMode="00" note="AUTOUPDATE" orgMsgId="5t0yaaWjrmSfrGmDtlL"
            orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO" purpose="00"
            refId="NPCI000000005t0yaaWjrmSfs7b6Y4F" refUrl="http://www.paytm.com"
            subType="CREDIT" ts="2021-01-07T17:12:03+05:30" type="AUTOUPDATE"/>
            <Resp errCode="TCC" reqMsgId="5t0yaaWjrmSfs7bc0fw" result="SUCCESS">
            <Ref IFSC="PYTM0123456" acNum="917417356866" accType="SAVINGS"
            addr="8929142805@paytm" approvalNum="918178" code="0000"
            regName="PRATEEK SRIVASTAVA" respCode="102" seqNum="1"
```
<!-- PAGE 38 -->
## PAGE 38

### Verbatim page text

```text
         settAmount="53.00" settCurrency="INR" type="PAYEE"/>
         </Resp></ns2:RespChkTxn>


Note:
1. reversalRespCode should not be present in the Ref tag.
2. Result attribute should be success and errCode will contain the adjFlag and
   respCode will contain the adjCode.
3. Result should be always populated as success in AUTOUPDATE.
4. settAmount should be equivalent to the transaction amount

Confirmation on the Transaction Status Sent from NPCI to
Payer PSP and Payee PSP
         NPCI TO PAYER PSP
         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
         xmlns:ns3="http://npci.org/cm/schema/">
         <Head       ver="2.0" ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
         msgId="5t0yaaWjrmSfs7cPXN5"/>
         <Txn id="AUTO000000005t0yaaWjrmSfs7b6Y4F" note="AUTOUPDATE"
         refId="Ref2323" refUrl="https://www.sbi.co.in/" ts="2018-03-02T16:27:44+05:30"
              type="TxnConfirmation"
         orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
         custRef="100717457342" initiationMode="00" purpose="00"/>
         <TxnConfirmation note="TCC|102" orgStatus="SUCCESS" type="PAY">
         <Ref        type="PAYER"seqNum="1" addr="test@mypsp"
              settAmount="53.00" settCurrency="INR" approvalNum="654321"
         respCode="00"      regName="Shyam" orgAmount="53.00"
              acNum="3453454385" IFSC="AABC0000382" code="0000"
         accType="SAVINGS"/>
         </TxnConfirmation>
         </ns2:ReqTxnConfirmation>

Note:
1. No change in message for PSPs. Txn.note will have the AUTOUPDATE.
2. TxnConfirmation.note will have Flag and code of the AUTOUPDATE. Separated by |
   symbol. (TxnConfirmation note=”beneAdjFlag|beneAdjCode| remiAdjFlag |
   remiAdjCode”)

         Response f rom PAYER PSP to NPCI
         <?xml version="1.0" encoding="UTF-8"?>
         <ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
         <Head msgId="XYA0000000000005t0yaaTz3NmbDQrfCqy" orgId="700001"
         ts="2021-01-07T17:12:09+05:30" ver="2.0"/>
         <Txn custRef="100717457342" id="AUTO000000005t0yaaWjrmSfs7b6Y4F"
         initiationMode="00" note="AUTOUPDATE"
         orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO" purpose="00"
         refId="Ref2323" refUrl="https://www.sbi.co.in/"
         ts="2018-03-02T16:27:44+05:30" type="TxnConfirmation"/>
         <Resp reqMsgId="5t0yaaWjrmSfs7cPXN5" result="SUCCESS"/>
```
<!-- PAGE 39 -->
## PAGE 39

### Verbatim page text

```text
</ns2:RespTxnConfirmation>
Note: RespTxnConfirmation should be always Success.

NPCI TO PAYEE PSP
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
xmlns:ns3="http://npci.org/cm/schema/">
<Head ver="2.0" ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
msgId="5t0yaaWjrmSfs7cQnO0"/>
<Txn id="AUTO000000005t0yaaWjrmSfs7b6Y4F" note="AUTOUPDATE"
refId="Ref2323" refUrl="https://www.sbi.co.in/" ts="2018-03-02T16:27:44+05:30"
type="TxnConfirmation" orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
custRef="100717457342" initiationMode="00" purpose="00"/>
<TxnConfirmation note="TCC|102" orgStatus="SUCCESS" type="PAY">
<Ref type="PAYEE" seqNum="1" addr="8929142805@paytm"
settAmount="53.00" respCode="BT" regName="PRATEEK SRIVASTAVA"
     reversalRespCode="RB" orgAmount="53.00" acNum="917417356866"
IFSC="PYTM0123456" code="0000" accType="SAVINGS"/>
</TxnConfirmation>
</ns2:ReqTxnConfirmation>


Response f rom PAYEE PSP to NPCI
<ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
<Head msgId="PTMIN01585112f80fe4021d8877c1bc2102" orgId="159761"
ts="2021-01-07T17:12:04+05:30" ver="2.0"/>
<Txn custRef="100717457342" id="AUTO000000005t0yaaWjrmSfs7b6Y4F"
note="AUTOUPDATE" orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
refId="NPCI000000005t0yaaWjrmSfs7b6Y4F"
refUrl="https://www.sbi.co.in/" ts="2021-01-07T17:12:04+05:30"
type="TxnConfirmation"/>
<Resp reqMsgId="5t0yaaWjrmSfs7cQnO0" result="SUCCESS"/>
</ns2:RespTxnConfirmation>


NPCI TO Remitter Bank
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
xmlns:ns3="http://npci.org/cm/schema/">
<Head ver="2.0" ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
msgId="5t0yaaWjrmSfs7cQnO1"/>
<Txn id="AUTO000000005t0yaaWjrmSfs7b6Y4F" note="AUTOUPDATE"
refId="Ref2323" refUrl="https://www.sbi.co.in/" ts="2018-03-
02T16:27:44+05:30"type="TxnConfirmation"
orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
custRef="100717457342" initiationMode="00" purpose="00"/>
<TxnConfirmation note="TCC|102" orgStatus="SUCCESS" type="PAY">
<Ref type="PAYER"         seqNum="1" addr="test@mypsp"
     settAmount="53.00" settCurrency="INR" approvalNum="654321"
respCode="00"      regName="Shyam" orgAmount="53.00" acNum="3453454385"
IFSC="AABC0000382" code="0000" accType="SAVINGS"/>
</TxnConfirmation>
</ns2:ReqTxnConfirmation>
```
<!-- PAGE 40 -->
## PAGE 40

**Section context on this page:**
- 11.2.2. Auto Update – Deemed - RET

### Verbatim page text

```text
Note:
1. No change in message for PSPs. Txn.note will have the AUTOUPDATE
2. TxnConfirmation.note will have Flag and code of the AUTOUPDATE. Separated by |
   symbol


          Response f rom Remitter to NPCI
          <?xml version="1.0" encoding="UTF-8"?>
          <ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
          <Head msgId="XYA0000000000005t0yaaTz3NmbDQs4obR" orgId="700001"
          ts="2021-01-07T17:12:09+05:30" ver="2.0"/>
          <Txn custRef="100717457342" id="NPCI000000005t0yaaWjrmSfs7b6Y4F"
          initiationMode="00" note="AUTOUPDATE"
          orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO" purpose="00"
          refId="Ref2323" refUrl="https://www.sbi.co.in/" ts="2018-03-02T16:27:44+05:30"
          type="TxnConfirmation"/>
          <Resp reqMsgId="5t0yaaWjrmSfs7cQnO1" result="SUCCESS"/>
          </ns2:RespTxnConfirmation>
11.2.2.    Auto Update – Deemed - RET

          Autoupdate Request from UPI to Beneficiary Bank
          <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <ns2:ReqChkTxn xmlns:ns2="http://npci.org/upi/schema/"
          xmlns:ns3="http://npci.org/cm/schema/">
          <Head ver="2.0" ts="2021-01-05T13:16:09+05:30"       orgId="NPCI"
          msgId="5t0yaaWjrmSa8XDstdm" prodType="UPI"/>
          <Txn id= "AUTO000000005t0yaaWjrmSa8XDp767" note="AUTOUPDATE"
                refId="Ref" ts="2021-01- 05T13:09:52+05:30" type="AUTOUPDATE"
          orgMsgId="5t0yaaWjrmSa8ix3Jq3"
          orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W"
                custRef="100513791433"
          initiationMode="00" subType="CREDIT" purpose="00" orgTxnAmt="5.70"/>
          </ns2:ReqChkTxn>

          Response for Autoupdate from Beneficiary bank to UPI
          <?xml version="1.0" encoding="UTF-8"?>
          <ns2:RespChkTxn
          xmlns:ns2="http://npci.org/upi/schema/">
          <Head msgId="SBI6fdfde87454cc084071ca" orgId="700001" prodType="UPI"
          ts="2020-10-20T14:48:04+05:30" ver="2.0"/>
          <Txn custRef="100513791433" id="AUTO000000005t0yaaWjrmSa8XDp767"
          initiationMode="00" note="AUTOUPDATE"
          orgMsgId="SBI4a69d250abe6433899c2f5a08fc0d010"
          orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W" purpose="00"
          refId="6fdfde87454cc084071ca3725e297" subType="CREDIT"
          ts="2020-10-20T14:48:04+05:30" type="AUTOUPDATE"/>
          <Resp errCode="RET" reqMsgId="5t0yaaWjrmSa8XDstdm" result="FAILURE">
          <Ref IFSC="AABC0876543" acNum="857679471234568" accType="CURRENT"
          addr="test@mypsp" approvalNum="651725" code="0000" respCode="115"
          seqNum="1" settAmount="0.00" settCurrency="INR" type="PAYEE"/>
          </Resp>
```
<!-- PAGE 41 -->
## PAGE 41

### Verbatim page text

```text
         </ns2:RespChkTxn>



      Debit Reversal Initiated from NPCI to remitter bank for
DEBIT reversal
         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:ReqPay
         xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
         <Head ver="2.0" ts="2021-01-05T13:16:09+05:30"         orgId="NPCI"
         msgId="5t0yaaWjrmSa8XEHfSF" prodType="UPI"/>
         <Meta>
         <Tag name="PAYREQSTART" value="2017-12-04T14:15:35+05:30"/>
         <Tag name="PAYREQEND" value="2017-12-04T14:15:35+05:30"/>
         </Meta>
         <Txn id="AUTO000000005t0yaaWjrmSa8XDp767"
               note="AUTOUPDATE|RET|115" ts="2018-03-02T16:27:44+05:30"
         type="REVERSAL"orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W"
         orgRespCode="RB" custRef="100513791433"
         initiationMode="00" subType="DEBIT" purpose="00" orgTxnAmt="5.70"/>
         <Payer addr="test@mypsp"
         name="Shyam" seqNum="1" type="PERSON" code="0000">
         <Info>
         <Identity type="PAN" verifiedName="Ram" id="SDF45645BJB19"/>
         <Rating verifiedAddress="TRUE"></Rating>
         </Info>
         <Ac addrType="ACCOUNT">
         <Detail name="IFSC" value="PYTM0123456"/>
         <Detail name="ACTYPE" value="SAVINGS"/>
         <Detail name="ACNUM" value="917417356866"/>
         </Ac>
         <Amount value="5.70" curr="INR"/>
         </Payer>
         </ns2:ReqPay>

Note : Txn.note will contain the Autoupdate category with dispute flag and dispute code
seperated by | symbol

         Response Received from Remitter Bank to NPCI
         <ns2:RespPay xmlns:ns2="http://npci.org/upi/schema/">
         <Head msgId="AAB0000000000005t0xf7oRsP2uiBHPdab" orgId="700001"
         ts="2021-01-05T13:16:09+05:30" ver="2.0"/>
         <Txn id="AUTO000000005t0yaaWjrmSa8XDp767"
         note="AUTOUPDATE|RET|115" ts="2018-03- 02T16:27:44+05:30"
         type="REVERSAL"orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W"
               orgRespCode="RB" custRef="100513791433"
         initiationMode="00" subType="DEBIT" purpose="00" orgTxnAmt="5.70"
         type="REVERSAL"/>
         <Resp reqMsgId="5t0xf6ZKer2N1pc1mtD" result="SUCCESS">
         <Ref IFSC=" PYTM0123456" acNum="917417356866" accType="SAVINGS"
         addr="rose@andb" approvalNum="654321" code="0000"
         regName="SITCUSTCC8" respCode="00" seqNum="1" settAmount="5.70"
         settCurrency="INR" type="PAYER"/>
```
<!-- PAGE 42 -->
## PAGE 42

### Verbatim page text

```text
       </Resp>
       </ns2:RespPay>


      Confirmation on the Transaction Status Sent from
NPCI to Payer PSP and Payee
      NPCI TO PAYER PSP
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
      xmlns:ns3="http://npci.org/cm/schema/">
      <Head       ver="2.0"       ts="2021-01-05T13:16:12+05:30" orgId="NPCI"
      msgId="5t0yaaWjrmSa8XZKBcE"/>
      <Txn id="AUTO000000005t0yaaWjrmSa8XDp767" note="AUTOUPDATE"
      refId="Ref" refUrl="https://www.sbi.co.in/" ts="2018-03-02T16:27:44+05:30"
      type="TxnConfirmation" orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W"
      custRef="100513791433"
      initiationMode="00" purpose="00"/>
      <TxnConfirmation note="RET|115|RRC|501" orgStatus="FAILURE" type="PAY">
      <Ref        type="PAYER"seqNum="1" addr="test@mypsp" settAmount="5.70"
      settCurrency="INR"
      approvalNum="916410" respCode="00" regName="Ram" orgAmount="5.70"
      acNum="917417356866" IFSC="PYTM0123456" code="0000"
      accType="SAVINGS"/>
      </TxnConfirmation>
      </ns2:ReqTxnConfirmation>

      NPCI TO PAYEE PSP
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
      xmlns:ns3="http://npci.org/cm/schema/">
      <Head       ver="2.0"       ts="2021-01-05T13:16:12+05:30" orgId="NPCI"
      msgId="5t0yaaWjrmSa8XZKBcF"/>
      <Txn id="AUTO000000005t0yaaWjrmSa8XDp767" note="AUTOUPDATE"
      refId="Ref" refUrl="https://www.sbi.co.in/" ts="2018-03-02T16:27:44+05:30"
      type="TxnConfirmation"
            orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W"
      custRef="100513791433"
      initiationMode="00" purpose="00"/>
      <TxnConfirmation note="RET|115|RRC|501" orgStatus="FAILURE" type="PAY">
      <Ref        type="PAYEE"seqNum="1"
            addr="NOREQRESPNOREQCRREVabc@mypsp" settAmount="5.70"
      respCode="BT"
      regName="narayanan" reversalRespCode="RB" orgAmount="5.70"
      acNum="857679471234568" IFSC="AABC0876543" code="0000"
      accType="CURRENT"/>
      </TxnConfirmation>
      </ns2:ReqTxnConfirmation>
```
<!-- PAGE 43 -->
## PAGE 43

**Section context on this page:**
- 11.2.3. Autoupdate - DRC

### Verbatim page text

```text
      Response for the Confirmation Received from Payer
PSP and Payee to NPCI
          Response f rom PAYER PSP to NPCI
          <?xml version="1.0" encoding="UTF-8"?>
          <ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
          <Head msgId="XYA0000000000005t0yaaTz3Nm6kHeAzT0" orgId="700001"
          ts="2021-01-05T13:16:12+05:30" ver="2.0"/>
          <Txn custRef="100513791433" id="AUTO000000005t0yaaWjrmSa8XDp767"
          initiationMode="00" note="AUTOUPDATE"
          orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W" purpose="00"
          refId="Ref" refUrl="https://www.sbi.co.in/"
          ts="2018-03-02T16:27:44+05:30" type="TxnConfirmation"/>
          <Resp reqMsgId="5t0yaaWjrmSa8XZKBcE" result="SUCCESS"/>
          </ns2:RespTxnConfirmation>
          Note: RespTxnConfirmation should be always Success.
          Response f rom PAYEE PSP to NPCI
          <ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
          <Head msgId="XYA0000000000005t0yaaTz3Nm6kHf3WUf" orgId="700001"
          ts="2021-01-05T13:16:12+05:30" ver="2.0"/>
          <Txn custRef="100513791433" id="AUTO000000005t0yaaWjrmSa8XDp767"
          initiationMode="00" note="AUTOUPDATE"
          orgTxnId="MMM0000000000005t0ya2TDrPbklSmJS5W" purpose="00"
          refId="Ref" refUrl="https://www.sbi.co.in/"
          ts="2018-03-02T16:27:44+05:30" type="TxnConfirmation"/>
          <Resp reqMsgId="5t0yaaWjrmSa8XZKBcF" result="SUCCESS"/>
          </ns2:RespTxnConfirmation>
11.2.3.    Autoupdate - DRC
A lifecycle of a DRC transaction is illustrated below for which URCS initiates the
Auto update to UPI. UPI sends the check transaction to Remitter Bank and takes
the status from it. The Status is updated to URCS, Payer and Payee PSP.

          Autoupdate Request Sent from NPCI to Remitter bank
          <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <ns2:ReqChkTxn
          xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
          <Head       ver="2.0"      ts="2021-01-29T12:16:12+05:30" orgId="NPCI"
          msgId="5t0yaaWjrmT6VjJs9ZI" prodType="UPI"/>
          <Txn        id="AUTO000000005t0yaaWjrmT6VjJq3Vb"note="AUTOUPDATE"
          refId="PTM4dda1dd8992846579df61e64ce7b4be8"
          ts="2021-01-29T11:23:03+05:30" type="AUTOUPDATE"
          orgMsgId="5t0yaaWjrmT6PHCkr0v"
          orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"custRef="102999932251"
          initiationMode="00" subType="DEBIT" purpose="00" refCategory="00" or
          gTxnAmt="3.80"/>
          </ns2:ReqChkTxn>


          Response for Autoupdate from Remitter bank to UPI
```
<!-- PAGE 44 -->
## PAGE 44

### Verbatim page text

```text
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:RespChkTxn
       xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN011720ac08ec5cc8606a7497171345" orgId="159761"
       prodType="UPI" ts="2021-01-29T12:16:06+05:30" ver="2.0"/>
       <Txn custRef="102999932251" id="AUTO000000005t0yaaWjrmT6VjJq3Vb"
       initiationMode="00" note="AUTOUPDATE" orgMsgId="5t0yaaWjrmT6PHCkr0v"
       orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8" purpose="00"
       refId="NPCI000000005t0yaaWjrmT6VjJq3Vb" refUrl="http://www.paytm.com"
       subType="DEBIT"
       ts="2021-01-29T12:16:06+05:30" type="AUTOUPDATE"/>
       <Resp errCode="DRC" reqMsgId="5t0yaaWjrmT6VjJs9ZI" result="SUCCESS">
       <Ref IFSC="PYTM0123456" acNum="917417356866" accType="SAVINGS"
       addr="8929142805@paytm" approvalNum="932251" code="0000"
       regName="PRATEEK SRIVASTAVA" respCode="102" seqNum="1"
       settAmount="3.80" settCurrency="INR" type="PAYER"/>
       </Resp>
       </ns2:RespChkTxn>

      Confirmation on the Transaction Status Sent from
NPCI to Payer PSP and Payee PSP
      NPCI TO PAYER PSP
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>undefined
      <ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
      xmlns:ns3="http://npci.org/cm/schema/">
      <Head       ver="2.0"     ts="2021-01-29T12:16:12+05:30" orgId="NPCI"
      msgId="5t0yaaWjrmT6VjMrCr6"/>
      <Txn id="AUTO000000005t0yaaWjrmT6VjJq3Vb" note="AUTOUPDATE"
      refId="PTM4dda1dd8992846579df61e64ce7b4be8"
      refUrl="http://www.paytm.com" ts="2021- 01-29T11:22:49+05:30"
      type="TxnConfirmation" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
      custRef="102999932251" initiationMode="00" purpose="00" refCategory="00"/>
      <TxnConfirmation note="DRC|102" orgStatus="FAILURE" type="PAY">
      <Ref type="PAYER" seqNum="1" addr="8929142805@paytm"
      settAmount="0.00" respCode="UT" regName="PRATEEK SRIVASTAVA"
      reversalRespCode="RR" orgAmount="3.80" acNum="917417356866"
      IFSC="PYTM0123456" code="0000" accType="SAVINGS"/>
      </TxnConfirmation>


      NPCI TO PAYEE PSP
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
      xmlns:ns3="http://npci.org/cm/schema/">
      <Head       ver="2.0"     ts="2021-01-29T12:16:12+05:30" orgId="NPCI"
      msgId="5t0yaaWjrmT6VjMrCr7"/>
      <Txn id="AUTO000000005t0yaaWjrmT6VjJq3Vb" note="AUTOUPDATE"
      refId="PTM4dda1dd8992846579df61e64ce7b4be8"
      refUrl="http://www.paytm.com" ts="2021- 01-29T11:22:49+05:30"
      type="TxnConfirmation" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
      custRef="102999932251"
      initiationMode="00" purpose="00" refCategory="00"/>
      <TxnConfirmation note="DRC|102" orgStatus="FAILURE" type="PAY">
```
<!-- PAGE 45 -->
## PAGE 45

**Section context on this page:**
- 12. AutoUpdate New Version
- 12.1. Auto Update – Deemed – TCC|103

### Verbatim page text

```text
         <Ref       type="PAYEE"seqNum="1" addr="anjali@paytm" settAmount="0.00"
         regName=" test merchant "
         orgAmount="3.80" acNum="918448324197"   IFSC="PYTM0123456"
             code="7221"
         accType="SAVINGS"/>
         </TxnConfirmation>
         </ns2:ReqTxnConfirmation>



      Response for the Confirmation Received from Payer
PSP and Payee to NPCI
        Response f rom PAYER PSP to NPCI
        <?xml version="1.0" encoding="UTF-8"?>
        <ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
        <Head msgId="PTMIN011783992bb176d181fa4fb4b0cf35" orgId="159761"
        ts="2021-01-29T12:16:06+05:30" ver="2.0"/>
        <Txn custRef="102999932251" id="AUTO000000005t0yaaWjrmT6VjJq3Vb"
        note="AUTOUPDATE" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
        refId="NPCI000000005t0yaaWjrmT6VjJq3Vb"
        refUrl="http://www.paytm.com" ts="2021-01-29T12:16:06+05:30"
        type="TxnConfirmation"/>
        <Resp reqMsgId="5t0yaaWjrmT6VjMrCr6" result="SUCCESS"/>
        </ns2:RespTxnConfirmation>


Note: RespTxnConfirmation should be always Success.

        Response f rom PAYEE PSP to NPCI
        <?xml version="1.0" encoding="UTF-8"?>
        <ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
        <Head msgId="PTMIN01170813080218409d39e49b763443" orgId="159761"
        ts="2021-01-29T12:16:06+05:30" ver="2.0"/>
        <Txn custRef="102999932251" id="AUTO000000005t0yaaWjrmT6VjJq3Vb"
        note="AUTOUPDATE" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
        refId="NPCI000000005t0yaaWjrmT6VjJq3Vb"
        refUrl="http://www.paytm.com" ts="2021-01-29T12:16:06+05:30"
        type="TxnConfirmation"/>
        <Resp reqMsgId="5t0yaaWjrmT6VjMrCr7" result="SUCCESS"/>
        </ns2:RespTxnConfirmation>


12. AutoUpdate New Version
Sample Message Dumps

12.1. Auto Update – Deemed – TCC|103

        Autoupdate Request from NPCI to Beneficiary Bank

         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:ReqChkTxn
         xmlns:ns2=”http://npci.org/upi/schema/” xmlns:ns3="http://npci.org/cm/schema/">
```
<!-- PAGE 46 -->
## PAGE 46

### Verbatim page text

```text
<Head      ver="2.0"    ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
msgId="5t0yaaWjrmSfs7bc0fw" prodType="UPI"/>
<Txn id=
"AUTO000000005t0yaaWjrmSfs7b6Y4F"note="AUTOUPDATE"
    refId="Ref2323"     ts="2021-01- 07T17:08:03+05:30"
type="AUTOUPDATE"
orgMsgId="5t0yaaWjrmSfrGmDtlL"
orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
custRef="100717457342"initiationMode="00" subType="CREDIT"
    purpose="00" orgTxnAmt="53.00"/>
<Payer addr="test@mypsp"
 name="Shyam" seqNum="1" type="PERSON" code="0000">
    <Device>
    <Tag name="MOBILE" value="917417356866"/>
    <Tag name="LOCATION" value="New Delhi"/>
    <Tag name="IP" value="127.0.0.4"/>
    <Tag name="TYPE" value="MOB"/>
    <Tag name="ID" value="3353"/>
    <Tag name="OS" value="android"/>
    <Tag name="APP" value="1252"/>
    <Tag name="GEOCODE" value="32.47,150.44"/>
    <Tag name="CAPABILITY" value="12345678987654"/>
    </Device>
    <Ac addrType="ACCOUNT">
    <Detail name="IFSC" value=" AABC0000382"/>
    <Detail name="ACTYPE" value="SAVINGS"/>
    <Detail name="ACNUM" value="3453454385"/>
    </Ac>
    <Amount value="53.0" curr="INR"/>
</Payer>
<Payee addr="8929142805@paytm " name=" PRATEEK SRIVASTAVA "
seqNum="1" type="PERSON" code="7221" >
    <Device>
    <Tag name="MOBILE" value="919804986861"/>
    <Tag name="GEOCODE" value="19.0415868,72.8798676"/>
    <Tag name="LOCATION" value="Mumbai,Maharashtra"/>
    <Tag name="IP" value="124.170.23.22"/>
    <Tag name="TYPE" value="ussd"/>
    <Tag name="ID" value="3353"/>
    <Tag name="OS" value="android"/>
    <Tag name="APP" value="1252"/>
    <Tag name="TELECOM" value="Airtel"/>
    <Tag name="TELECOM" value="Airtel"/>

   </Device>
   <Ac addrType="ACCOUNT">
   <Detail name="IFSC" value=" PYTM0123456"/>
   <Detail name="ACTYPE" value=" SAVINGS "/>
   <Detail name="ACNUM" value="917417356866"/>
   </Ac>
   <Amount value="53.0" curr="INR">
   </Amount>
   <Merchant>
   <Identifier merchantType="LARGE" mid="8394" pinCode="643009"
   regId="67765" sid="2212" subCode="1234" tid="0101"/>
```
<!-- PAGE 47 -->
## PAGE 47

### Verbatim page text

```text
           <Namebrand="AllianceFranche"    franchise="LearnFrench"
       legal="Reliance"/>
           <Ownership type="PUBLIC"/>
                   </Merchant>
       </Payee>
       </Txn>
       </ns2:ReqChkTxn>


      Response for Autoupdate from Beneficiary bank to NPCI
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:RespChkTxn
       xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN0158eb9d1621e20c542ad554d26eed" orgId="159761"
       prodType="UPI" ts="2021-01-07T17:12:03+05:30" ver="2.0"/>
       <Txn custRef="100717457342" id="AUTO000000005t0yaaWjrmSfs7b6Y4F"
       initiationMode="00" note="AUTOUPDATE" orgMsgId="5t0yaaWjrmSfrGmDtlL"
       orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO" purpose="00"
       refId="NPCI000000005t0yaaWjrmSfs7b6Y4F" refUrl="http://www.paytm.com"
       subType="CREDIT"
       ts="2021-01-07T17:12:03+05:30" type="AUTOUPDATE"/>
       <Resp errCode="TCC" reqMsgId="5t0yaaWjrmSfs7bc0fw" result="SUCCESS">
       <Ref IFSC="PYTM0123456" acNum="917417356866" accType="SAVINGS"
       addr="8929142805@paytm" approvalNum="918178" code="7221"
       regName="PRATEEK SRIVASTAVA" respCode="103" seqNum="1"
       settAmount="53.00" settCurrency="INR" type="PAYEE"/>
       </Resp>
       </ns2:RespChkTxn>

      Confirmation on the Transaction Status Sent from
NPCI to Payer PSP and Payee PSP
      NPCI TO PAYER PSP
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
      xmlns:ns3="http://npci.org/cm/schema/">
      <Head       ver="2.0"     ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
      msgId="5t0yaaWjrmSfs7cPXN5"/>
      <Txn id="AUTO000000005t0yaaWjrmSfs7b6Y4F" note="AUTOUPDATE"
      refId="Ref2323" refUrl="https://www.sbi.co.in/"
      ts="2018-03-02T16:27:44+05:30"type="TxnConfirmation"
      orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
      custRef="100717457342"
      initiationMode="00" purpose="00"/>
      <TxnConfirmation note="TCC|103" orgStatus="SUCCESS" type="PAY">
      <Ref        type="PAYER"seqNum="1" addr="test@mypsp"
            settAmount="53.00" settCurrency="INR" approvalNum="654321"
      respCode="00"      regName="Shyam" orgAmount="53.00"
            acNum="3453454385" IFSC="AABC0000382" code="0000"
      accType="SAVINGS"/>
      </TxnConfirmation>
      </ns2:ReqTxnConfirmation>
```
<!-- PAGE 48 -->
## PAGE 48

### Verbatim page text

```text
Response f rom PAYER PSP to NPCI
<?xml version="1.0" encoding="UTF-8"?>
<ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
<Head msgId="XYA0000000000005t0yaaTz3NmbDQrfCqy" orgId="700001"
ts="2021-01-07T17:12:09+05:30" ver="2.0"/>
<Txn custRef="100717457342" id="AUTO000000005t0yaaWjrmSfs7b6Y4F"
initiationMode="00" note="AUTOUPDATE"
orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO" purpose="00"
refId="Ref2323" refUrl="https://www.sbi.co.in/"
ts="2018-03-02T16:27:44+05:30" type="TxnConfirmation"/>
<Resp reqMsgId="5t0yaaWjrmSfs7cPXN5" result="SUCCESS"/>
</ns2:RespTxnConfirmation>


NPCI TO PAYEE PSP
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
xmlns:ns3="http://npci.org/cm/schema/">
<Head       ver="2.0"     ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
msgId="5t0yaaWjrmSfs7cQnO0"/>
<Txn id="AUTO000000005t0yaaWjrmSfs7b6Y4F" note="AUTOUPDATE"
refId="Ref2323" refUrl="https://www.sbi.co.in/"
ts="2018-03-02T16:27:44+05:30" type="TxnConfirmation"
orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
      custRef="100717457342"
initiationMode="00" purpose="00"/>
<TxnConfirmation note="TCC|102" orgStatus="SUCCESS" type="PAY">
<Ref type="PAYEE" seqNum="1" addr="8929142805@paytm"
settAmount="53.00"
respCode="BT"
regName="PRATEEK          SRIVASTAVA"reversalRespCode="RB"
      orgAmount="53.00" acNum="917417356866" IFSC="PYTM0123456"
code="7221" accType="SAVINGS"/>
</TxnConfirmation>
</ns2:ReqTxnConfirmation>


Response f rom PAYEE PSP to NPCI
<ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
<Head msgId="PTMIN01585112f80fe4021d8877c1bc2102" orgId="159761"
ts="2021-01-07T17:12:04+05:30" ver="2.0"/>
<Txn custRef="100717457342" id="AUTO000000005t0yaaWjrmSfs7b6Y4F"
note="AUTOUPDATE" orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
refId="NPCI000000005t0yaaWjrmSfs7b6Y4F"
refUrl="https://www.sbi.co.in/" ts="2021-01-07T17:12:04+05:30"
type="TxnConfirmation"/>
<Resp reqMsgId="5t0yaaWjrmSfs7cQnO0" result="SUCCESS"/>
</ns2:RespTxnConfirmation>


NPCI TO Remitter Bank
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
xmlns:ns3="http://npci.org/cm/schema/">
```
<!-- PAGE 49 -->
## PAGE 49

**Section context on this page:**
- 12.2. Auto Update – DRC |104

### Verbatim page text

```text
         <Head      ver="2.0"     ts="2021-01-07T17:12:09+05:30" orgId="NPCI"
         msgId="5t0yaaWjrmSfs7cQnO1"/>
         <Txn id="AUTO000000005t0yaaWjrmSfs7b6Y4F" note="AUTOUPDATE"
         refId="Ref2323" refUrl="https://www.sbi.co.in/"
         ts="2018-03-02T16:27:44+05:30"type="TxnConfirmation"
         orgTxnId="MMM0000000000005t0ya2TDrPbpFgCGRHO"
         custRef="100717457342" initiationMode="00" purpose="00"/>
         <TxnConfirmation note="TCC|103" orgStatus="SUCCESS" type="PAY">
         <Ref       type="PAYER"seqNum="1" addr="test@mypsp"
              settAmount="53.00" settCurrency="INR" approvalNum="654321"
         respCode="00"     regName="Shyam" orgAmount="53.00"
              acNum="3453454385" IFSC="AABC0000382" code="0000"
         accType="SAVINGS"/>
         </TxnConfirmation>
</ns2:ReqTxnConfirmation>



12.2. Auto Update – DRC |104

        Autoupdate Request Sent from NPCI to Remitter bank
         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:ReqChkTxn
         xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
         <Head        ver="2.0"     ts="2021-01-29T12:16:12+05:30" orgId="NPCI"
         msgId="5t0yaaWjrmT6VjJs9ZI" prodType="UPI"/>
         <Txn         id="AUTO000000005t0yaaWjrmT6VjJq3Vb"note="AUTOUPDATE"
         refId="PTM4dda1dd8992846579df61e64ce7b4be8"
         ts="2021-01-29T11:23:03+05:30" type="AUTOUPDATE"
         orgMsgId="5t0yaaWjrmT6PHCkr0v"
         orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"custRef="102999932251"
         initiationMode="00" refId = “Ref2323” subType="DEBIT" purpose="00"
         refCategory="00" or gTxnAmt="3.80"/>
         <Payer addr=" 8929142805@paytm "
          name=" PRATEEK SRIVASTAVA " seqNum="1" type="PERSON" code="0000">
               <Device>
               <Tag name="MOBILE" value="917417356866"/>
               <Tag name="LOCATION" value="New Delhi"/>
               <Tag name="IP" value="127.0.0.4"/>
               <Tag name="TYPE" value="MOB"/>
               <Tag name="ID" value="3353"/>
               <Tag name="OS" value="android"/>
               <Tag name="APP" value="1252"/>
               <Tag name="GEOCODE" value="32.47,150.44"/>
               <Tag name="CAPABILITY" value="12345678987654"/>
               </Device>
               <Ac addrType="ACCOUNT">
               <Detail name="IFSC" value=" PYTM0123456"/>
               <Detail name="ACTYPE" value=" SAVINGS "/>
               <Detail name="ACNUM" value="917417356866"/>
               </Ac>
               <Amount value="3.80" curr="INR">
               </Amount>
         </Payer>
```
<!-- PAGE 50 -->
## PAGE 50

### Verbatim page text

```text
       <Payee addr=" anjali@paytm " name=" test merchant " seqNum="1"
       type="ENTITY" code="0000">
           <Device>
           <Tag name="MOBILE" value="919804986861"/>
           <Tag name="GEOCODE" value="19.0415868,72.8798676"/>
           <Tag name="LOCATION" value="Mumbai,Maharashtra"/>
           <Tag name="IP" value="124.170.23.22"/>
           <Tag name="TYPE" value="ussd"/>
           <Tag name="ID" value="3353"/>
           <Tag name="OS" value="android"/>
           <Tag name="APP" value="1252"/>
          <Tag name="TELECOM" value="Airtel"/>
           </Device>
           <Ac addrType="ACCOUNT">
           <Detail name="IFSC" value=" PYTM0123456"/>
           <Detail name="ACTYPE" value=" SAVINGS "/>
           <Detail name="ACNUM" value="918448324197"/>
           </Ac>
           <Amount value="3.80" curr="INR">
           </Amount>
       </Payee>
       </ns2:ReqChkTxn>


      Response for Autoupdate from Remitter bank to UPI
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:RespChkTxn
       xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN011720ac08ec5cc8606a7497171345" orgId="159761"
       prodType="UPI" ts="2021-01-29T12:16:06+05:30" ver="2.0"/>
       <Txn custRef="102999932251" id="AUTO000000005t0yaaWjrmT6VjJq3Vb"
       initiationMode="00" note="AUTOUPDATE" orgMsgId="5t0yaaWjrmT6PHCkr0v"
       orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8" purpose="00"
       refId="NPCI000000005t0yaaWjrmT6VjJq3Vb" refUrl="http://www.paytm.com"
       subType="DEBIT"
       ts="2021-01-29T12:16:06+05:30" type="AUTOUPDATE"/>
       <Resp errCode="DRC" reqMsgId="5t0yaaWjrmT6VjJs9ZI" result="SUCCESS">
       <Ref IFSC="PYTM0123456" acNum="917417356866" accType="SAVINGS"
       addr="8929142805@paytm" approvalNum="932251" code="0000"
       regName="PRATEEK SRIVASTAVA" respCode="104" seqNum="1"
       settAmount="3.80" settCurrency="INR" type="PAYER"/>
       </Resp>
       </ns2:RespChkTxn>


      Confirmation on the Transaction Status Sent from
NPCI to Payer PSP and Payee PSP
      NPCI TO PAYER PSP
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>undefined
      <ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
      xmlns:ns3="http://npci.org/cm/schema/">
      <Head      ver="2.0"      ts="2021-01-29T12:16:12+05:30" orgId="NPCI"
```
<!-- PAGE 51 -->
## PAGE 51

### Verbatim page text

```text
msgId="5t0yaaWjrmT6VjMrCr6"/>
<Txn id="AUTO000000005t0yaaWjrmT6VjJq3Vb" note="AUTOUPDATE"
refId="PTM4dda1dd8992846579df61e64ce7b4be8"
refUrl="http://www.paytm.com" ts="2021- 01-29T11:22:49+05:30"
type="TxnConfirmation" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
custRef="102999932251" initiationMode="00" purpose="00" refCategory="00"/>
<TxnConfirmation note="DRC|104" orgStatus="FAILURE" type="PAY">
<Ref type="PAYER" seqNum="1" addr="8929142805@paytm"
settAmount="0.00" respCode="UT" regName="PRATEEK SRIVASTAVA"
reversalRespCode="RR" orgAmount="3.80" acNum="917417356866"
IFSC="PYTM0123456" code="0000" accType="SAVINGS"/>
</TxnConfirmation>


NPCI TO PAYEE PSP
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:ReqTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/"
xmlns:ns3="http://npci.org/cm/schema/">
<Head       ver="2.0"     ts="2021-01-29T12:16:12+05:30" orgId="NPCI"
msgId="5t0yaaWjrmT6VjMrCr7"/>
<Txn id="AUTO000000005t0yaaWjrmT6VjJq3Vb" note="AUTOUPDATE"
refId="PTM4dda1dd8992846579df61e64ce7b4be8"
refUrl="http://www.paytm.com" ts="2021- 01-29T11:22:49+05:30"
type="TxnConfirmation" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
custRef="102999932251"
initiationMode="00" purpose="00" refCategory="00"/>
<TxnConfirmation note="DRC|104" orgStatus="FAILURE" type="PAY">
<Ref        type="PAYEE"seqNum="1" addr="anjali@paytm" settAmount="0.00"
regName=" test merchant "
orgAmount="3.80" acNum="918448324197"        IFSC="PYTM0123456"
      code="0000"
accType="SAVINGS"/>
</TxnConfirmation>
</ns2:ReqTxnConfirmation>


Response f rom PAYER PSP to NPCI
<?xml version="1.0" encoding="UTF-8"?>
<ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
<Head msgId="PTMIN011783992bb176d181fa4fb4b0cf35" orgId="159761"
ts="2021-01-29T12:16:06+05:30" ver="2.0"/>
<Txn custRef="102999932251" id="AUTO000000005t0yaaWjrmT6VjJq3Vb"
note="AUTOUPDATE" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
refId="NPCI000000005t0yaaWjrmT6VjJq3Vb"
refUrl="http://www.paytm.com" ts="2021-01-29T12:16:06+05:30"
type="TxnConfirmation"/>
<Resp reqMsgId="5t0yaaWjrmT6VjMrCr6" result="SUCCESS"/>
</ns2:RespTxnConfirmation>


Response f rom PAYEE PSP to NPCI
<?xml version="1.0" encoding="UTF-8"?>
<ns2:RespTxnConfirmation xmlns:ns2="http://npci.org/upi/schema/">
<Head msgId="PTMIN01170813080218409d39e49b763443" orgId="159761"
```
<!-- PAGE 52 -->
## PAGE 52

**Section context on this page:**
- 12.3. Additional Field Specification

### Verbatim page text

```text
                  ts="2021-01-29T12:16:06+05:30" ver="2.0"/>
                  <Txn custRef="102999932251" id="AUTO000000005t0yaaWjrmT6VjJq3Vb"
                  note="AUTOUPDATE" orgTxnId="PTM4dda1dd8992846579df61e64ce7b4be8"
                  refId="NPCI000000005t0yaaWjrmT6VjJq3Vb"
                  refUrl="http://www.paytm.com" ts="2021-01-29T12:16:06+05:30"
                  type="TxnConfirmation"/>
                  <Resp reqMsgId="5t0yaaWjrmT6VjMrCr7" result="SUCCESS"/>
                  </ns2:RespTxnConfirmation>


      12.3. Additional Field Specification

      Device Details

Tag    Message         <XML      Occurrence            Datatype             Length   Mandatory
Num    Item            Tag>


1      Details         <Device   1..1         Alphabetic                      Fixe   Y
                  o    >                                                    d
       f device                                                             value
       from
       which
                 t
       he
       transactio
       n was
       initiated
1.1    Device Tag      <Device   1..n         Alphabetic                    Fixed
                       . Tag>                                               value
1.2    Name            Name      1..n         Code(M                        Fixe     Y
                                              OBILE,G            EOCOD      d
       of the                                 E,LOCAT            ION,IP,T   valu
       property                               YPE,ID,O         S,APP,CA     e
                                              PABILITY
                                              ,TELECO M
1.3    Value of the    value     1..n         Code
       property                               (MOBILE:91nnnnnnnnnn
                                              GEOCODE:nn.nnnn,nn.n
                                              nn n LOCATION:Area
                                              with city, state and
                                              Country Code
                                              01-23- Terminal Address
                                              24-36- Terminal City
                                              37-38- Terminal State Code
                                              39-40- Terminal Country
                                              Code IP:Valid IP address
                                              format(v4,v6) TYPE:Min
                                              Length – 1 , Max Length –
                                              20 (Refer Rule_035)
                                              ID:Min Length – 1 , Max
                                              Length
                                              –        35
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 52.1

| Tag | Message | <XML | Occurrence | Datatype | Length | Mandatory |
| --- | --- | --- | --- | --- | --- | --- |
| Num | Item | Tag> |  |  |  |  |
|  |  |  |  |  |  |  |
| 1 | Details | <Device | 1..1 | Alphabetic | Fixe | Y |
|  | o | > |  |  | d |  |
|  | f device |  |  |  | value |  |
|  | from |  |  |  |  |  |
|  | which |  |  |  |  |  |
|  | t |  |  |  |  |  |
|  | he |  |  |  |  |  |
|  | transactio |  |  |  |  |  |
|  | n was |  |  |  |  |  |
|  | initiated |  |  |  |  |  |
| 1.1 | Device Tag | <Device . Tag> | 1..n | Alphabetic | Fixed value |  |
| 1.2 | Name | Name | 1..n | Code(M | Fixe | Y |
|  |  |  |  | OBILE,G EOCOD | d |  |
|  | of the |  |  | E,LOCAT ION,IP,T | valu |  |
|  | property |  |  | YPE,ID,O S,APP,CA | e |  |
|  |  |  |  | PABILITY |  |  |
|  |  |  |  | ,TELECO M |  |  |
| 1.3 | Value of the property | value | 1..n | Code (MOBILE:91nnnnnnnnnn GEOCODE:nn.nnnn,nn.n nn n LOCATION:Area with city, state and Country Code 01-23- Terminal Address 24-36- Terminal City 37-38- Terminal State Code |  |  |
|  |  |  |  | 39-40- Terminal Country Code IP:Valid IP address format(v4,v6) TYPE:Min Length – 1 , Max Length – 20 (Refer Rule_035) ID:Min Length – 1 , Max Length – 35 |  |  |

<!-- PAGE 53 -->
## PAGE 53

### Verbatim page text

```text
                                              OS:Min Length – 1 , Max
                                              Length
                                              –        20
                                              APP:Min Length – 1 ,
                                              Max Length – 20
                                              CAPABILITY:Min Length
                                              – 1 , Max Length – 99
                                              (refer to DE-
                                              61)     e.g:
                                               “5200000200010004000
                                              639292929292          “. For
                                              more details, refer UPI TSD

                                              TELECOM OPERATOR:Min
                                              Length-1,Max Length-99
                                              (It is mandatory for
                                              USSD)

      Account Details
Tag   Message           <XML      Occurence   Datatype               Length    Mandator
Num   Item              Tag>                                                   y


1     Only    one       <Payer.   1..1         Alphabetic            Fixed     Y
      entity    is      Ac>                                          value
      allowed for       <Payee.
      a payer           Ac>
1.1   Device Tag        <Device   1..n         Alphabetic            Fixed
                        . Tag>                                       value
      Type of the       addrTyp   1..1         Code                  Min       Y
      address           e                                            Length
                                                                     : 1 Max
                                                                     Length
                                                                     : 20
      Details           <Payer.   1..n         Alphabetic            Min       Y
      related to        Ac.Deta                                      Length
      Payer             il>                                          : 1 Max
      Address                                                        Length
                                                                     : 255
      Name     of       Name      1..n         Code                  Fixed     Y
      the property                                                   value



      Value of the      Value     1..n         Alphanumeric          Min       Y
      property                                                       Length
                                                                     : 1 Max
                                                                     Length
                                                                     : 20
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 53.1

| Tag | Message | <XML | Occurence | Datatype | Length | Mandator |
| --- | --- | --- | --- | --- | --- | --- |
| Num | Item | Tag> |  |  |  | y |
|  |  |  |  |  |  |  |
| 1 | Only one | <Payer. | 1..1 | Alphabetic | Fixed | Y |
|  | entity is | Ac> |  |  | value |  |
|  | allowed for | <Payee. |  |  |  |  |
|  | a payer | Ac> |  |  |  |  |
| 1.1 | Device Tag | <Device . Tag> | 1..n | Alphabetic | Fixed value |  |
|  | Type of the | addrTyp | 1..1 | Code | Min | Y |
|  | address | e |  |  | Length |  |
|  |  |  |  |  | : 1 Max |  |
|  |  |  |  |  | Length |  |
|  |  |  |  |  | : 20 |  |
|  | Details related to Payer Address | <Payer. Ac.Deta il> | 1..n | Alphabetic | Min Length : 1 Max Length : 255 | Y |
|  | Name of the property | Name | 1..n | Code | Fixed value | Y |
|  | Value of the property | Value | 1..n | Alphanumeric | Min Length : 1 Max Length : 20 | Y |

<!-- PAGE 54 -->
## PAGE 54

### Verbatim page text

```text
If(addrType=ACCOUNT)       Account values   If addrType=ACCOUNT is applicable for account
                                            + IFSC txn’s
                                            IFSC= It should be 11 digit alphanumeric
                                            ACTYPE= It should be a fixed value
                                            SAVINGS|DEFAULT|CURRE
                                            NT|NRE|NRO|PPIWALLET|B
                                            ANKWALLET|CREDIT|SOD| UOD
                                            ACNUM= it should be max 30
                                            digits




 Merchant Details
If(Payer.type=ENTITY) or   Payer/Payee      If the merchant comes through an aggregator
(Payee.type = ENTITY)      Merchant block   then the merchant block element will contain
                                            the merchant details as follows

                                            Identifier.subCode=MCC code of the merchant
                                            Identifier.mid=”Merchant id”
                                            Identifier.sid=”Store id”
                                            Identifier.tid=”Terminal id”
                                            Name.brand = Brand any of the merchant
                                            Name.Legal=Legal Name of the merchant
                                            Name.Franchise=Franchise agent name
                                            Ownership.type=        See rule 038
                                            merchantType=”SMALL
                                            |LARGE”
                                            merchantGenre=”OFFLI NE|ONLINE”
                                            onBoardingType=”BANK|AGGREGATOR”
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 54.1

| If(Payer.type=ENTITY) or | Payer/Payee | If the merchant comes through an aggregator |
| --- | --- | --- |
| (Payee.type = ENTITY) | Merchant block | then the merchant block element will contain |
|  |  | the merchant details as follows |
|  |  | Identifier.subCode=MCC code of the merchant |
|  |  | Identifier.mid=”Merchant id” |
|  |  | Identifier.sid=”Store id” |
|  |  | Identifier.tid=”Terminal id” |
|  |  | Name.brand = Brand any of the merchant |
|  |  | Name.Legal=Legal Name of the merchant |
|  |  | Name.Franchise=Franchise agent name |
|  |  | Ownership.type= See rule 038 |
|  |  | merchantType=”SMALL |
|  |  | \|LARGE” |
|  |  | merchantGenre=”OFFLI NE\|ONLINE” |
|  |  | onBoardingType=”BANK\|AGGREGATOR” |
|  |  |  |

<!-- PAGE 55 -->
## PAGE 55

**Section context on this page:**
- 13. ReqChkTxn API – Bank Initiated

### Verbatim page text

```text
If(Payer.type=ENTITY) or   Payer/Payee       If the merchant comes through an aggregator
(Payee.type = ENTITY)      Merchant block    then the merchant block element will contain
                                             the merchant details as follows

                                             Identifier.subCode=MCC code of the merchant
                                             Identifier.mid=”Merchant id”
                                             Identifier.sid=”Store id”
                                             Identifier.tid=”Terminal id”
                                             Name.brand = Brand any of the merchant
                                             Name.Legal=Legal Name of the merchant
                                             Name.Franchise=Franchise agent name
                                             Ownership.type=        See rule 038
                                             merchantType=”SMALL
                                             |LARGE”
                                             merchantGenre=”OFFLI NE|ONLINE”
                                             onBoardingType=”BANK|AGGREGATOR”




  13. ReqChkTxn API – Bank Initiated
  13.1. ReqChkTxn

           <upi:ReqChkTxn xmlns:upi=“http://npci.org/upi/schema/”>
                  <Head ver=“2.0” ts=““ orgId=““ msgId=““ prodType=““/>
                  <Txn id=”” ts=”” custRef=”” refId=”” refUrl=”” refCategory=””
                         note=”” initiationMode=”” purpose=””
                           type=““
                           subtype=“” orgTxnId=““ orgRrn=““ orgTxnDate=““/>
                  </Txn>
           </upi:ReqChkTxn>
  13.2. RespChkTxn
       <upi:RespChkTxn xmlns:upi=“http://npci.org/upi/schema/”>
       <Head ver=“2.0” ts=““ orgId=““ msgId=““ prodType=““/>

       <Txn id=““ ts=““ custRef=““ refId=““ refUrl=““ refCategory=““ note=““
       initiationMode=““ purpose=““

       type=““
       subtype=“” orgTxnId=““ orgRrn=““ orgTxnDate=““>
       </Txn>
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 55.1

| If(Payer.type=ENTITY) or | Payer/Payee | If the merchant comes through an aggregator |
| --- | --- | --- |
| (Payee.type = ENTITY) | Merchant block | then the merchant block element will contain |
|  |  | the merchant details as follows |
|  |  | Identifier.subCode=MCC code of the merchant |
|  |  | Identifier.mid=”Merchant id” |
|  |  | Identifier.sid=”Store id” |
|  |  | Identifier.tid=”Terminal id” |
|  |  | Name.brand = Brand any of the merchant |
|  |  | Name.Legal=Legal Name of the merchant |
|  |  | Name.Franchise=Franchise agent name |
|  |  | Ownership.type= See rule 038 |
|  |  | merchantType=”SMALL |
|  |  | \|LARGE” |
|  |  | merchantGenre=”OFFLI NE\|ONLINE” |
|  |  | onBoardingType=”BANK\|AGGREGATOR” |
|  |  |  |

<!-- PAGE 56 -->
## PAGE 56

### Verbatim page text

```text
     <Resp reqMsgId=““ result=““ >


     --For Transaction type
     <Ref type=“PAYER|PAYEE” seqNum=““ addr=““ settAmount=““
     settCurrency=““ IFSC=““ acNum =““ approvalNum=““ code=““/>


     --For Dispute type
     <Ref type=“PAYER|PAYEE” seqNum=““ adjAmt=““
     settCurrency=“INR” approvalNum=““ adjTs=““ adjRefId=““
     adjCode=““ adjFlag=““ />


     --For Mandate type
     <Mandate txnId=““ umn=““ ts=““ revokeable=“”
     shareToPayee=“” initiatedBy=“” blockFund=“”
     type=“” note=““
     CurStatus=““ drSeqNum=““ >
     <Validity start=“ddMMYYYY” end=“ddMMYYYY”/>
     <Amount value=““ rule=“”/>
     <Recurrence pattern=“”>
     </Recurrence>
     </Mandate>


     </Resp>
     </upi:RespChkTxn>


13.3. Check Transaction API Field Specification
     Tag        Message Item         <XML         Occurr   Data    Length             Man
     Num                             Tag>         ence     type                       dat
                                                                                      ory
     1.1        API Name             <ReqChkT     1..1                                Y
                                     xn>      |
                                     <RespChk
                                     Txn>
     1.1.1      API   Schema         xmlns        1..1     Alph    Min Length: 1      Y
                namespace                                  anu     Max Length : 255
                                                           meric
     2.1        Header for the       <Head>       1..1     Alph    Fixed value        Y
                message                                    abeti
                                                           c
     2.1.1      Version of the       ver          1..1     Num     Min Length:    1   Y
                API                                        eric    Max Length : 6
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 56.1

| Tag | Message Item | <XML | Occurr | Data | Length | Man |
| --- | --- | --- | --- | --- | --- | --- |
| Num |  | Tag> | ence | type |  | dat |
|  |  |  |  |  |  | ory |
| 1.1 | API Name | <ReqChkT | 1..1 |  |  | Y |
|  |  | xn> \| |  |  |  |  |
|  |  | <RespChk |  |  |  |  |
|  |  | Txn> |  |  |  |  |
| 1.1.1 | API Schema namespace | xmlns | 1..1 | Alph anu meric | Min Length: 1 Max Length : 255 | Y |
| 2.1 | Header for the | <Head> | 1..1 | Alph | Fixed value | Y |
|  | message |  |  | abeti |  |  |
|  |  |  |  | c |  |  |
| 2.1.1 | Version of the API | ver | 1..1 | Num eric | Min Length: 1 Max Length : 6 | Y |

<!-- PAGE 57 -->
## PAGE 57

### Verbatim page text

```text
2.1.2   Time of request       ts         1..1   ISOD    Min Length:    1    Y
        from         the                        ateTi   Max Length : 255
        creator of the                          me
        message
2.1.3   Organization id       orgId      1..1   Num     Min Length:     1   Y
        that     created                        eric    Max Length : 20
        the message
2.1.4   Message               msgId      1..1   Alph    Length=35           Y
        identifier-used                         anu
        to      correlate                       meric
        between
        request      and
        response
2.1.5   Product               prodType   1..1   “Alp    Fixed value         Y
        identifier                              habe
                                                tic
3.1     Transaction           <Txn>      1..1   Alph    Fixed Value         Y
        information,                            abeti
        Carried                                 c
        throughout the
        system, visible
        to all parties
3.1.1   Unique                id         1..1   Alph    Length=35           Y
        Identifier of the                       anu
        transaction                             meric
        across         all
        entities,
        created by the
        originator
3.1.2   Transaction           ts         1..1   ISOD    Min Length:    1    Y
        origination                             ateTi   Max Length:255
        time by         the                     me
        creator of the
        message
3.1.3   Customer              custRef    1..1   Num eric Length=12          Y
        reference
        number for the
        initiated
        transaction
3.1.4   Consumer              refId      1..1   Alph    Min Length:     1   Y
        reference                               anu     Max Length : 35
        number         to                       meric
        identify (like
        Loan number,
        etc.)
3.1.5   URL                   refUrl     1..1   Alph    Min Length:     1   Y
                        fo                      anu     Max Length : 35
        r                                       meric
                        th
        e transaction
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 57.1

| 2.1.2 | Time of request | ts | 1..1 | ISOD | Min Length: 1 | Y |
| --- | --- | --- | --- | --- | --- | --- |
|  | from the |  |  | ateTi | Max Length : 255 |  |
|  | creator of the |  |  | me |  |  |
|  | message |  |  |  |  |  |
| 2.1.3 | Organization id that created the message | orgId | 1..1 | Num eric | Min Length: 1 Max Length : 20 | Y |
| 2.1.4 | Message | msgId | 1..1 | Alph | Length=35 | Y |
|  | identifier-used |  |  | anu |  |  |
|  | to correlate |  |  | meric |  |  |
|  | between |  |  |  |  |  |
|  | request and |  |  |  |  |  |
|  | response |  |  |  |  |  |
| 2.1.5 | Product identifier | prodType | 1..1 | “Alp habe tic | Fixed value | Y |
| 3.1 | Transaction | <Txn> | 1..1 | Alph | Fixed Value | Y |
|  | information, |  |  | abeti |  |  |
|  | Carried |  |  | c |  |  |
|  | throughout the |  |  |  |  |  |
|  | system, visible |  |  |  |  |  |
|  | to all parties |  |  |  |  |  |
| 3.1.1 | Unique Identifier of the transaction across all entities, created by the originator | id | 1..1 | Alph anu meric | Length=35 | Y |
| 3.1.2 | Transaction | ts | 1..1 | ISOD | Min Length: 1 | Y |
|  | origination |  |  | ateTi | Max Length:255 |  |
|  | time by the |  |  | me |  |  |
|  | creator of the |  |  |  |  |  |
|  | message |  |  |  |  |  |
| 3.1.3 | Customer | custRef | 1..1 | Num eric | Length=12 | Y |
|  | reference |  |  |  |  |  |
|  | number for the |  |  |  |  |  |
|  | initiated |  |  |  |  |  |
|  | transaction |  |  |  |  |  |
| 3.1.4 | Consumer | refId | 1..1 | Alph | Min Length: 1 | Y |
|  | reference |  |  | anu | Max Length : 35 |  |
|  | number to |  |  | meric |  |  |
|  | identify (like |  |  |  |  |  |
|  | Loan number, |  |  |  |  |  |
|  | etc.) |  |  |  |  |  |
| 3.1.5 | URL | refUrl | 1..1 | Alph | Min Length: 1 | Y |
|  | fo |  |  | anu | Max Length : 35 |  |
|  | r |  |  | meric |  |  |
|  | th |  |  |  |  |  |
|  | e transaction |  |  |  |  |  |

<!-- PAGE 58 -->
## PAGE 58

### Verbatim page text

```text
3.1.6    Reference           refCatego     1..n   Code     Fixed Value         Y
         category            ry

3.1.7    Description of      note          1..1   Alph     Min Length:     1   Y
         the                                      anu      Max Length : 50
         transaction(wh                           meric
         ich will     be
         printed on Pass
         book)
3.1.8    Initiation mode     initiation    1..1   Code     Min Length: 1       Y
                             mode                          Max Length: 3

3.1.9    Purpose of the      purpose       1..1   Code     Fixed Value         Y
         txn

3.1.10   Type of the         type          1..1   Code     Min Length:     1   Y
         Transaction                                       Max Length : 20

3.1.11   Subtype       of    subType       0..1   Code     Min Length:    1    N
         transaction                                       Max Length: 20

3.1.12   Original Message    orgMsgId      1..1   Alph     Length=35           N
         ID                                       anu
                                                  meric
3.1.13   Original            orgTxnId      1..1   Alph     Length=35           Y
         transaction ID                           anu
         when                                     meric
         reversal/Refun
         d has to be
         done
3.1.14   Original RRN        orgRrn        0..1   Num      Length=12           N
                                                  eric

3.1.15   Original            orgTxnDa te   0..1   ISOD     Min Length:    1    N
                       D                          ateTi me Max Length:255
         ate of the txn
3.1.16   Original            orgTxnAmt     1..1   Nume ric Min Length: 1 Max   Y
         Transaction                                       Length:15
         Amount
4.1      Response            <Resp>        1..1   Alphab   Fixed value         Y
                                                  etic c

4.1.1    Request Message reqMsgId          1..1   Alpha    Length= 35          Y
         identifier                               Numeri c

4.1.2    Result of     the   result        1..1   Code     Min length:1 Max    N
         transaction                                       length:2 0
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 58.1

| 3.1.6 | Reference | refCatego | 1..n | Code | Fixed Value | Y |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | category | ry |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.7 | Description of | note | 1..1 | Alph | Min Length: 1 | Y |  |  |
|  | the |  |  | anu | Max Length : 50 |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  | transaction(wh |  |  | meric |  |  |  |  |
|  | ich will be |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  | printed on Pass |  |  |  |  |  |  |  |
|  | book) |  |  |  |  |  |  |  |
| 3.1.8 | Initiation mode | initiation | 1..1 | Code | Min Length: 1 | Y |  |  |
|  |  | mode |  |  | Max Length: 3 |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.9 | Purpose of the | purpose | 1..1 | Code | Fixed Value | Y |  |  |
|  | txn |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.10 | Type of the | type | 1..1 | Code | Min Length: 1 | Y |  |  |
|  | Transaction |  |  |  | Max Length : 20 |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.11 | Subtype of | subType | 0..1 | Code | Min Length: 1 | N |  |  |
|  | transaction |  |  |  | Max Length: 20 |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.12 | Original Message | orgMsgId | 1..1 | Alph | Length=35 |  | N |  |
|  | ID |  |  | anu |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  | meric |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.13 | Original | orgTxnId | 1..1 | Alph | Length=35 | Y |  |  |
|  | transaction ID |  |  | anu |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  | when |  |  | meric |  |  |  |  |
|  | reversal/Refun |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  | d has to be |  |  |  |  |  |  |  |
|  | done |  |  |  |  |  |  |  |
| 3.1.14 | Original RRN | orgRrn | 0..1 | Num | Length=12 | N |  |  |
|  |  |  |  | eric |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.15 | Original | orgTxnDa te | 0..1 | ISOD | Min Length: 1 | N |  |  |
|  | D |  |  | ateTi me | Max Length:255 |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  | ate of the txn |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 3.1.16 | Original | orgTxnAmt | 1..1 | Nume ric | Min Length: 1 Max | Y |  |  |
|  | Transaction |  |  |  | Length:15 |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  | Amount |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 4.1 | Response | <Resp> | 1..1 | Alphab | Fixed value | Y |  |  |
|  |  |  |  | etic c |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 4.1.1 | Request Message | reqMsgId | 1..1 | Alpha | Length= 35 | Y |  |  |
|  | identifier |  |  | Numeri c |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
| 4.1.2 | Result of the | result | 1..1 | Code | Min length:1 Max |  | N |  |
|  | transaction |  |  |  | length:2 0 |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |

<!-- PAGE 59 -->
## PAGE 59

### Verbatim page text

```text
4.1.3    Errorcode of the    errCode      1..1   Alphan   Min Length: 1 Max   Y
         transaction                             umeric   Length : 5
         contains     the
         Adjustment flag
5.1      Response            <Ref>        1..n   Alphab   Fixed value         Y
         Reference                               etic

5.1.1    Type of       the   type         1..1   Code     Fixed value         Y
         Payer

5.1.2    Unique              seqNum       1..1   Num eric Min Length:    1    Y
         identifier  for                                  Max Length : 3
         each
         transaction
         inside a file
         including payer
         and payee
5.1.3    Address of the      addr         1..1   Alph     Min Length:    1    Y
         Payee                                   anu      Max Length : 255
                                                 meric
5.1.4    Settlement          settAmount   1..1   Num      minInclusive: 0     Y
         Amount                                  eri c    totalDigi
                                                          ts: 15
5.1.5    Settlement          settCurrency 1..1   Text     Min Length: 1       Y
         Currency                                         Max
                                                          Length : 3
5.1.6    IFSC code           IFSC         1..n   Alpha    Length:11           Y
                                                 Num
                                                 eri c
5.1.7    Account type        ACTYPE       1..n   Code     Fixed Value         Y


5.1.8    Approval            approvalNu m 1..1   Alpha    Length= 6           Y
         Reference                               Num
         Number                                  eri c
5.1.9    Merchant            Code         1..1   Num      Length= 4           Y
         Classification                          eri c
         Code
5.1.10   Transaction         adjTs        1..1   ISOD     Min Length: 1       Y
         origination                             ateTi    Max Length:255
         time of                                 me
5.1.11   Adjustment          adjRefId     1..1   Alpha    Min Length: 1       Y
         Reference Id of                         Nume     Max Length : 35
         the Response                            ric
5.1.12   Adjustment          adjFlag      1..1   Alph     Minlength:1 Max     Y
         Flag of the                             anu      length:5
         Response                                meric
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 59.1

| 4.1.3 | Errorcode of the | errCode | 1..1 | Alphan | Min Length: 1 Max | Y |
| --- | --- | --- | --- | --- | --- | --- |
|  | transaction |  |  | umeric | Length : 5 |  |
|  | contains the |  |  |  |  |  |
|  | Adjustment flag |  |  |  |  |  |
| 5.1 | Response | <Ref> | 1..n | Alphab | Fixed value | Y |
|  | Reference |  |  | etic |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.1 | Type of the | type | 1..1 | Code | Fixed value | Y |
|  | Payer |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.2 | Unique | seqNum | 1..1 | Num eric | Min Length: 1 | Y |
|  | identifier for |  |  |  | Max Length : 3 |  |
|  |  |  |  |  |  |  |
|  | each |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | transaction |  |  |  |  |  |
|  | inside a file |  |  |  |  |  |
|  | including payer |  |  |  |  |  |
|  | and payee |  |  |  |  |  |
| 5.1.3 | Address of the | addr | 1..1 | Alph | Min Length: 1 | Y |
|  | Payee |  |  | anu | Max Length : 255 |  |
|  |  |  |  |  |  |  |
|  |  |  |  | meric |  |  |
|  |  |  |  |  |  |  |
| 5.1.4 | Settlement | settAmount | 1..1 | Num | minInclusive: 0 | Y |
|  | Amount |  |  | eri c | totalDigi |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  | ts: 15 |  |
|  |  |  |  |  |  |  |
| 5.1.5 | Settlement | settCurrency | 1..1 | Text | Min Length: 1 | Y |
|  | Currency |  |  |  | Max |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  | Length : 3 |  |
|  |  |  |  |  |  |  |
| 5.1.6 | IFSC code | IFSC | 1..n | Alpha | Length:11 | Y |
|  |  |  |  | Num |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  | eri c |  |  |
| 5.1.7 | Account type | ACTYPE | 1..n | Code | Fixed Value | Y |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.8 | Approval | approvalNu m | 1..1 | Alpha | Length= 6 | Y |
|  | Reference |  |  | Num |  |  |
|  |  |  |  |  |  |  |
|  | Number |  |  | eri c |  |  |
| 5.1.9 | Merchant | Code | 1..1 | Num | Length= 4 | Y |
|  | Classification |  |  | eri c |  |  |
|  |  |  |  |  |  |  |
|  | Code |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.10 | Transaction | adjTs | 1..1 | ISOD | Min Length: 1 | Y |
|  | origination |  |  | ateTi | Max Length:255 |  |
|  |  |  |  |  |  |  |
|  | time of |  |  | me |  |  |
|  |  |  |  |  |  |  |
| 5.1.11 | Adjustment | adjRefId | 1..1 | Alpha | Min Length: 1 | Y |
|  | Reference Id of |  |  | Nume | Max Length : 35 |  |
|  |  |  |  |  |  |  |
|  | the Response |  |  | ric |  |  |
|  |  |  |  |  |  |  |
| 5.1.12 | Adjustment | adjFlag | 1..1 | Alph | Minlength:1 Max | Y |
|  | Flag of the |  |  | anu | length:5 |  |
|  |  |  |  |  |  |  |
|  | Response |  |  | meric |  |  |
|  |  |  |  |  |  |  |

<!-- PAGE 60 -->
## PAGE 60

### Verbatim page text

```text
5.1.13   Adjustment           adjCode       1..1   Alph      Minlength:1 Max     Y
         Code of the                               anu       length:5
         Response                                  meric
6.1      Definesto            <Mandate      1..1   Alph      Fixed Value         Y
         create mandate       >                    abeti
                                                   c
6.1.1    Defines unified      Umn           1..1   Fixed     Fixed Length : 70   Y
         mandate                                   Valu e
         number
6.1.2    Details    time      Ts            1..1
         stamp

6.1.3    Revokeable           Revokeabl e   1..1   Alph      Fixed Value         Y
                                                   abeti
                                                   c
6.1.4    Transaction Id       txnId         1..1


6.1.5    Share to Payee       shareToPa     1..1   “Alp      Fixed Value         Y
         flag                 yee                  habe
                                                   tic
6.1.6     Mandate             initiatedBy   1..1   Alph      Fixed Value         Y
         Initiation Channel                        abeti
                                                   c
6.1.7     Block the Fund      blockFund     1..1   Alph      Fixed Value         Y
                                                   abeti c

6.1.8     Mandate Type        type          1..1   Alph      Minlength:1 Max     Y
                                                   abeti c   length:10

6.1.9     Current Status      CurStatus     1..1   Alph      Fixed Value         Y
                                                   abeti
                                                   c
6.1.10   Represent the        drSeqNu m     1..1   Num eric Fixed Value          Y
         sequence in a
         recurring debit
          series
6.1.11   Defines              <Mandate.     1..1                                 Y
         mandate validity     Validity>

6.1.12   Defines        start start         1..1   ISOD     Min Length: 1        Y
         time of validity                          ateTi me Max Length:8

6.1.13   Defines     end      end           1..1   ISOD     Min Length: 1        Y
         time of                                   ateTi me Max Length:255
         validity
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 60.1

| 5.1.13 | Adjustment | adjCode | 1..1 | Alph | Minlength:1 Max | Y |
| --- | --- | --- | --- | --- | --- | --- |
|  | Code of the |  |  | anu | length:5 |  |
|  |  |  |  |  |  |  |
|  | Response |  |  | meric |  |  |
|  |  |  |  |  |  |  |
| 6.1 | Definesto | <Mandate | 1..1 | Alph | Fixed Value | Y |
|  | create mandate | > |  | abeti |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  | c |  |  |
|  |  |  |  |  |  |  |
| 6.1.1 | Defines unified | Umn | 1..1 | Fixed | Fixed Length : 70 | Y |
|  | mandate |  |  | Valu e |  |  |
|  |  |  |  |  |  |  |
|  | number |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.2 | Details time | Ts | 1..1 |  |  |  |
|  | stamp |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.3 | Revokeable | Revokeabl e | 1..1 | Alph | Fixed Value | Y |
|  |  |  |  | abeti |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  | c |  |  |
| 6.1.4 | Transaction Id | txnId | 1..1 |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.5 | Share to Payee | shareToPa | 1..1 | “Alp | Fixed Value | Y |
|  | flag | yee |  | habe |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  | tic |  |  |
|  |  |  |  |  |  |  |
| 6.1.6 | Mandate | initiatedBy | 1..1 | Alph | Fixed Value | Y |
|  | Initiation Channel |  |  | abeti |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  | c |  |  |
|  |  |  |  |  |  |  |
| 6.1.7 | Block the Fund | blockFund | 1..1 | Alph | Fixed Value | Y |
|  |  |  |  | abeti c |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.8 | Mandate Type | type | 1..1 | Alph | Minlength:1 Max | Y |
|  |  |  |  | abeti c | length:10 |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.9 | Current Status | CurStatus | 1..1 | Alph | Fixed Value | Y |
|  |  |  |  | abeti |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  | c |  |  |
| 6.1.10 | Represent the | drSeqNu m | 1..1 | Num eric | Fixed Value | Y |
|  | sequence in a |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | recurring debit |  |  |  |  |  |
|  | series |  |  |  |  |  |
| 6.1.11 | Defines | <Mandate. | 1..1 |  |  | Y |
|  | mandate validity | Validity> |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.12 | Defines start | start | 1..1 | ISOD | Min Length: 1 | Y |
|  | time of validity |  |  | ateTi me | Max Length:8 |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.13 | Defines end | end | 1..1 | ISOD | Min Length: 1 | Y |
|  | time of |  |  | ateTi me | Max Length:255 |  |
|  |  |  |  |  |  |  |
|  | validity |  |  |  |  |  |
|  |  |  |  |  |  |  |

<!-- PAGE 61 -->
## PAGE 61

**Section context on this page:**
- 14. Check Transaction Sample Message dumps

### Verbatim page text

```text
     6.1.14       Defines               <Mandate.      1..1                                   Y
                  mandate               Amount>
                  Amount
     6.1.15       Defines               value          1..1         Num       Minlength:1     Y
                  amount value                                      eric      Max length:10

     6.1.16       Defines amount        rule           1..1         Alph      Fixed Value     Y
                  rule                                              abeti
                                                                    c
     6.1.17       Defines mandate       <Recurren      1..1                                   Y
                  recurrence            ce>

     6.1.18       Defines mandate       Pattern        1..1         Alph      Fixed Value     Y
                  recurrence                                        abeti c

     6.1.19       Defines               <rule>         1..1                                   Y
                  Mandate rule

     6.1.19       Defines        rule   value          1..1         Alph      Fixed Value     N
                  value                                             abeti c

     6.1.20       Defines        rule   type           1..1         Alph      Fixed Value     Y
                  type                                              abeti c



13.4. List of Values
           Tag        Tag Name                  Value Description
           Numb
           er
           3.1.10    Txn.type                   ChkTxn|AUTOUPDATE|BACKOFFICE
           3.1.11    Txn.subtype                If Type = “BACKOFFICE” then Subtype =
                                                “TXN|DISPUTE|TXNDISPUTE|MANDATE|DISP
                                                UT EHIST”
                                                TXN – Original Transaction status
                                                DISPUTE – only last dispute status
                                                TXNDISPUTE – BOTH TXN and last
                                                Dispute MANDATE – ONLY MANDATE
                                                DISPUTEHIST – Only Last 3 Dispute Status

          5.1.1       Ref.type                  PAYER|PAYEE
          6.1.3       Mandate.revoke            Y|N
                      able
          6.1.5       Mandate.shareT            Y|N
                      oPayee
          61.6        Mandate.initiate          PAYER|PAYEE
                      dBy
          6.1.7       Mandate.blockF            Y|N
                      und
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 61.1

| 6.1.14 | Defines | <Mandate. | 1..1 |  |  | Y |
| --- | --- | --- | --- | --- | --- | --- |
|  | mandate | Amount> |  |  |  |  |
|  |  |  |  |  |  |  |
|  | Amount |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.15 | Defines | value | 1..1 | Num | Minlength:1 | Y |
|  | amount value |  |  | eric | Max length:10 |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.16 | Defines amount | rule | 1..1 | Alph | Fixed Value | Y |
|  | rule |  |  | abeti |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  | c |  |  |
|  |  |  |  |  |  |  |
| 6.1.17 | Defines mandate | <Recurren | 1..1 |  |  | Y |
|  | recurrence | ce> |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.18 | Defines mandate | Pattern | 1..1 | Alph | Fixed Value | Y |
|  | recurrence |  |  | abeti c |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.19 | Defines | <rule> | 1..1 |  |  | Y |
|  | Mandate rule |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.19 | Defines rule | value | 1..1 | Alph | Fixed Value | N |
|  | value |  |  | abeti c |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 6.1.20 | Defines rule | type | 1..1 | Alph | Fixed Value | Y |
|  | type |  |  | abeti c |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

#### Table 61.2

| Tag | Tag Name | Value Description |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Numb |  |  |  |  |  |  |  |
| er |  |  |  |  |  |  |  |
| 3.1.10 | Txn.type | ChkTxn\|AUTOUPDATE\|BACKOFFICE |  |  |  |  |  |
| 3.1.11 | Txn.subtype | If Type = “BACKOFFICE” then Subtype = |  |  |  |  |  |
|  |  | “TXN\|DISPUTE\|TXNDISPUTE\|MANDATE\|DISP |  |  |  |  |  |
|  |  | UT EHIST” |  |  |  |  |  |
|  |  | TXN – |  |  | Original Transaction status |  |  |
|  |  | DISPUTE – only last dispute status |  |  |  |  |  |
|  |  | TXNDISPUTE – BOTH TXN and last |  |  |  |  |  |
|  |  | Dispute MANDATE – ONLY MANDATE |  |  |  |  |  |
|  |  |  | DISPUTEHIST – Only Last 3 Dispute Status |  |  |  |  |
|  |  |  |  |  |  |  |  |
| 5.1.1 | Ref.type | PAYER\|PAYEE |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
| 6.1.3 | Mandate.revoke | Y\|N |  |  |  |  |  |
|  | able |  |  |  |  |  |  |
| 6.1.5 | Mandate.shareT | Y\|N |  |  |  |  |  |
|  | oPayee |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
| 61.6 | Mandate.initiate | PAYER\|PAYEE |  |  |  |  |  |
|  | dBy |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
| 6.1.7 | Mandate.blockF | Y\|N |  |  |  |  |  |
|  | und |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |

<!-- PAGE 62 -->
## PAGE 62

### Verbatim page text

```text
         6.1.8    Mandate.Type         CREATE|UPDATE|REVOKE|PAUSE|UNPAUS
                                       E
         6.1.16   Mandate.rule         MAX|EXACT
         6.1.18   Recurrence.Patt      ONETIME|DAILY|WEEKLY|BIMONTHLY|MONT
                  ern                  HL
                                       Y|QUARTERLY|HALFYEARLY|YEARLY|ASPR
                                       ESE
                                       NTED|FORTNIGHTLY
         6.1.20   Rule.type            BEFORE|ON|AFTER


13.5. New Tags


        Tag         Tag Name        Purpose                         Fixed Enumeration
        Number
        5.1.10      adjRefId        Denotes the initiator of the    PAYER|PAYEE
                                    mandate
        5.1.11      adjFlag         Used to denote the last         Contains the dispute flag
                                    updated status      of the
                                    mandate
        5.1.12     adjCode          Used to represent the           Contains dispute reason code
                                    sequence in a recurring debit
                                    series




14. Check Transaction Sample Message dumps
        14.1. Type – TXN

ReqChkTxn from Payer/Payee PSP to NPCI
        <ns2:ReqChkTxn
        xmlns:ns2="http://npci.org/upi/schema/"><Head
        msgId="PTMIN01141cb46dbdbbfbfa587f007c109a" orgId="159761"
        prodType="UPI" ts="2021-02-18T17:51:52+05:30" ver="2.0"/>
        <Txn id="PTM22509c770fb844f8a2661393bc735XY" initiationMode="00"
        note="NON CUSTOMER API"
        orgMsgId="PTMIN011481a89a93ddb4c0fb91256082ba" orgRrn="104999969685"
        orgTxnDate="2021-02-18T17:51:06+05:30"
        orgTxnId="PTM22509c770fb844f8a2661393bc735e55" purpose="00"
        refCategory="00" refId="PTM22509c770fb844f8a2661393bc735XY"
        refUrl="http://www.paytm.com" subType="TXN"
        ts="2021-02-18T17:51:52+05:30" type="BACKOFFICE"/>
        </ns2:ReqChkTxn>
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 62.1

| 6.1.8 | Mandate.Type | CREATE\|UPDATE\|REVOKE\|PAUSE\|UNPAUS |
| --- | --- | --- |
|  |  | E |
|  |  |  |
| 6.1.16 | Mandate.rule | MAX\|EXACT |
|  |  |  |
| 6.1.18 | Recurrence.Patt | ONETIME\|DAILY\|WEEKLY\|BIMONTHLY\|MONT |
|  | ern | HL |
|  |  | Y\|QUARTERLY\|HALFYEARLY\|YEARLY\|ASPR |
|  |  |  |
|  |  | ESE |
|  |  | NTED\|FORTNIGHTLY |
| 6.1.20 | Rule.type | BEFORE\|ON\|AFTER |
|  |  |  |

#### Table 62.2

| Tag | Tag Name | Purpose | Fixed Enumeration |
| --- | --- | --- | --- |
| Number |  |  |  |
|  |  |  |  |
| 5.1.10 | adjRefId | Denotes the initiator of the | PAYER\|PAYEE |
|  |  | mandate |  |
|  |  |  |  |
| 5.1.11 | adjFlag | Used to denote the last updated status of the mandate | Contains the dispute flag |
| 5.1.12 | adjCode | Used to represent the | Contains dispute reason code |
|  |  | sequence in a recurring debit |  |
|  |  | series |  |
|  |  |  |  |

<!-- PAGE 63 -->
## PAGE 63

### Verbatim page text

```text
RespChkTxn from NPCI to Payer/Payee PSP

UPI checks in the database the last updated status ans gives response to the PSP.

         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:RespChkTxn
         xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
         <Head ver="2.0" ts="2021-02-18T17:51:59+05:30" orgId="NPCI"
         msgId="5t0yaaWjrmTUz1NHW3k" prodType="UPI"/>
         <Txn id="PTM22509c770fb844f8a2661393bc735XY" note="NON CUSTOMER
         API" refId="PTM22509c770fb844f8a2661393bc735XY"
         refUrl="http://www.paytm.com" ts="2021-02-18T17:51:52+05:30"
         type="BACKOFFICE" orgMsgId="PTMIN011481a89a93ddb4c0fb91256082ba"
         orgTxnId="PTM22509c770fb844f8a2661393bc735e55" orgRespCode="00"
         orgTxnDate="2021-02- 18T17:51:06+05:30"
         orgRrn="104999969685" initiationMode="00" subType="TXN" purpose="00"
         refCategory="00"/>
         <Resp reqMsgId="PTMIN01141cb46dbdbbfbfa587f007c109a"
         result="SUCCESS">
         <Ref type="PAYEE"          addr="anjali@paytm" settAmount="2.00"
         approvalNum="969685" respCode="00"
         orgAmount="2.00" acNum="19744201000007" IFSC="PYTM0123456"
         code="7221"/>
         <Ref type="PAYER" addr="rahul@paytm" settAmount="2.00" settCurrency="INR"
         approvalNum="969685"
         respCode="00" orgAmount="2.00" acNum="919654720205"
         IFSC="PYTM0123456" code="0000"/>
         </Resp>
         </ns2:RespChkTxn>
14.2. Type - TXNDISPUTE



ReqChkTxn from Payer/Payee PSP to NPCI
         <ns2:ReqChkTxn
         xmlns:ns2="http://npci.org/upi/schema/">
         <Head msgId="PTMIN0114d39c556457f86d09f6af10973a" orgId="159761"
         prodType="UPI" ts="2021-02-20T11:37:32+05:30" ver="2.0"/>
         <Txn id="PTM0662ec43548044f38eb64369f0accBDR" initiationMode="00"
         note="NON CUSTOMER API"
         orgMsgId="PTMIN0114e974b1996735ae69130a4a98aa"
         orgRrn="105199973052" orgTxnDate="2021-02-20T11:33:23+05:30"
         orgTxnId="PTM0662ec43548044f38eb64369f0acc9ef" purpose="00"
         refCategory="00" refId="PTM0662ec43548044f38eb64369f0accBDR"
         refUrl="http://www.paytm.com" subType="TXNDISPUTE"
         ts="2021-02-20T11:37:32+05:30" type="BACKOFFICE"/>
         </ns2:ReqChkTxn>

RespChkTxn from NPCI to Payer/Payee PSP
         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:RespChkTxn
```
<!-- PAGE 64 -->
## PAGE 64

### Verbatim page text

```text
        xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
        <Head         ver="2.0"    ts="2021-02-20T11:37:39+05:30" orgId="NPCI"
        msgId="5t0yaaWjrmTYPI7RgTf" prodType="UPI"/>
        <Txn          id="PTM0662ec43548044f38eb64369f0accBDR" note="NON
             CUSTOMER API"
        refId="PTM0662ec43548044f38eb64369f0accBDR"
        refUrl="http://www.paytm.com" ts="2021-02-20T11:37:32+05:30"
        type="BACKOFFICE" orgMsgId="PTMIN0114e974b1996735ae69130a4a98aa"
        orgTxnId="PTM0662ec43548044f38eb64369f0acc9ef" orgRespCode="00"
        orgTxnDate="2021-02-20T11:33:23+05:30"          orgRrn="105199973052"
             initiationMode="00" subType="TXNDISPUTE"
        purpose="00" refCategory="00"/>
        <Resp reqMsgId="PTMIN0114d39c556457f86d09f6af10973a"
        result="SUCCESS">
        <Ref          type="PAYEE"addr="NOREQRESPNOREQCRREV@mypsp2"
        settAmount="30.00" reversalRespCode="RB" orgAmount="30.00"
        acNum="300210100001264" IFSC="AABF0009009" code="0000"/>
        <Ref type="PAYER" addr="rahul@paytm" settAmount="30.00"
        settCurrency="356"approvalNum="973052"          respCode="00"
             orgAmount="30.00" acNum="919654720205" IFSC="PYTM0123456"
        code="0000"/>
        <Ref type="REMITTER" adjAmt="30.00" adjTs="2021-02-20
        11:36:36.913557"
        adjRefId="PTM/XYC/Complaint Raise/1379852544/SYSTEM" adjFlag="PBRB"
        adjCode="U010" adjRemarks="Auto Update"/>
        </Resp>
        </ns2:RespChkTxn>
14.3. Type - DISPUTE

ReqchkTxn - Complaint Raised
ReqChkT xn f rom Payer/Payee PSP to UPI


        <?xml version="1.0" encoding="UTF-8"?>
        <ns2:ReqChkTxn
        xmlns:ns2="http://npci.org/upi/schema/">
        <Head msgId="PTMIN0114dfa627a2b103674ab65b06373a" orgId="159761"
        prodType="UPI" ts="2021-02-23T12:47:12+05:30" ver="2.0"/>
        <Txn id="PTM10df8d78734f46fe969fee84ckjio" initiationMode="00" note="NON
        CUSTOMER API"
        orgMsgId="PTMIN0114b08e9579e93afb587f1b3c984a" orgRrn="105399978444"
        orgTxnDate="2021-02-22T19:33:42+05:30"
        orgTxnId="PTMeeebe7e5ab944793b1ea8e1d2ec5bd14" purpose="00"
        refCategory="00" refId="PTM10df8d78734f46fe969fee84ckjio"
        ts="2021-02-23T12:47:12+05:30" type="BACKOFFICE"/>
        </ns2:ReqChkTxn>

RespChkT xn f rom UPI to Payer/Payee PSP
```
<!-- PAGE 65 -->
## PAGE 65

### Verbatim page text

```text
UPI internally checks the last updated status of the txn in URCS and gives response to the
PSP.

          <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <ns2:RespChkTxn
          xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
          <Head        ver="2.0"     ts="2021-02-23T12:47:18+05:30" orgId="NPCI"
          msgId="5t0yaaWjrmU6jp7TK6E" prodType="UPI"/>
          <Txn id="PTM10df8d78734f46fe969fee84ckjio"note="NON CUSTOMER
                API" refId="PTM10df8d78734f46fe969fee84ckjio"
          refUrl="http://www.paytm.com" ts="2021-02-23T12:47:12+05:30"
          type="BACKOFFICE" orgMsgId="PTMIN0114b08e9579e93afb587f1b3c984a"
          orgTxnId="PTMeeebe7e5ab944793b1ea8e1d2ec5bd14"
          orgTxnDate="2021-02-22T19:33:42+05:30" orgRrn="105399978444"
          initiationMode="00" subType="DISPUTE" purpose="00" refCategory="00"/>
          <Resp reqMsgId="PTMIN0114dfa627a2b103674ab65b06373a">
          <Ref type="BENEFICIARY"           adjAmt="0.00"adjTs="2021-02-23T12:29:19"
          adjRefId="XYC/PTM/Complaint Raise/1247215360/SYSTEM" adjFlag="PBRB"
          adjCode="U005" adjRemarks="Auto Update"/>
          </Resp>
          </ns2:RespChkTxn>

ReqChkTxn – DRC
ReqChkT xn f rom Payer/Payee PSP to UPI

          <upi:ReqChkTxn xmlns:upi="http://npci.org/upi/schema/">
          <Head ver="2.0" ts="2020-05-11T00:00:41+05:30" orgId="180002"
          msgId="SBI4a69d250abe6433899c2f5a08fc0qw12" prodType="UPI"/>
          <Txn id="SBI4a69d250abe6433899c2f5a08fc0d008" ts="2020-05-
          11T00:00:41+05:30" custRef="013100747221"
          refId="P1705110000338829715467"
          refUrl="http://www.npci.org.in/" refCategory="00" note="Status Check"
          initiationMode="00" purpose="00"         type="BACKOFFICE"
                subtype="DISPUTE"
          orgTxnId="SBI4a69d250abe6433899c2f5a08fc34251" orgRrn="013100747891"
          orgTxnDate="2020- 05-10T23:00:41+05:30"/>
          </Txn>
          </upi:ReqChkTxn>


RespChkT xn f rom UPI to Payer/Payee PSP

UPI internally checks the last updated status of the txn in URCS and gives response to the
PSP.

          <upi:RespChkTxn xmlns:upi="http://npci.org/upi/schema/">
          <Head ver="2.0" ts="2020-05-11T00:00:41+05:30"
          orgId="NPCI" msgId="NPCI4a69d250a899c2f5a08fc0d008" prodType="UPI"/>
          <Txn id="SBI4a69d250abe6433899c2f5a08fc0d008" ts="2020-05-
          11T00:00:43+05:30" custRef="013100747221"
          refId="P1705110000338829715467"
          refUrl="http://www.npci.org.in/" refCategory="00"        note="Status
          Check" initiationMode="00" purpose="00" type="BACKOFFICE"
```
<!-- PAGE 66 -->
## PAGE 66

### Verbatim page text

```text
              subtype="DISPUTE"
          orgTxnId="SBI4a69d250abe6433899c2f5a08fc34251" orgRrn="013100747891"
          orgTxnDate="2020-05-10T23:00:41+05:30">
          </Txn>
          <Resp reqMsgId="SBI4a69d250abe6433899c2f5a08fc0qw12" result="SUCCESS"
          >
          <Ref type="PAYER" seqNum="1" adjAmt="500.00" settCurrency="INR"
          approvalNum="335615" adjTs="2020-05-11T00:00:10+05:30" adjRefId="
          P1705110000338829745321" adjCode="DRC" adjFlag="102" />
          </upi:RespChkTxn>

ReqChkTxn - TCC
ReqChkT xn f rom Payer/Payee PSP to UPI


          <upi:ReqChkTxn xmlns:upi="http://npci.org/upi/schema/">
          <Head ver="2.0" ts="2020-05-11T00:00:41+05:30" orgId="180002"
          msgId="SBI4a69d250abe6433899c2f5a08fc0qw12" prodType="UPI"/>
          <Txn id="SBI4a69d250abe6433899c2f5a08fc0d008" ts="2020 -05-
          11T00:00:41+05:30" custRef="013100747221"
          refId="P1705110000338829715467"
          refUrl="http://www.npci.org.in/" refCategory="00"
          note="StatusCheck"initiationMode="00" purpose="00" type="BACKOFFICE"
          subtype="DISPUTE" orgTxnId="SBI4a69d250abe6433899c2f5a08fc34251"
          orgRrn="013100747891"orgTxnDate="2020-05-10T23:00:41+05:30"/>
          </Txn>
          </upi:ReqChkTxn>


RespChkT xn f rom UPI to Payer/Payee PSP

UPI internally checks the last updated status of the txn in URCS and gives response to the
PSP.

          <upi:RespChkTxn xmlns:upi="http://npci.org/upi/schema/">
          <Head       ver="2.0"     ts="2020-05-11T00:00:41+05:30" orgId="NPCI"
          msgId="NPCI4a69d250a899c2f5a08fc0d008" prodType="UPI"/>
          <Txn id="SBI4a69d250abe6433899c2f5a08fc0d008" ts="2020-05-
          11T00:00:43+05:30" custRef="013100747221"
          refId="P1705110000338829715467"
          refUrl="http://www.npci.org.in/" refCategory="00" note="Status Check"
          initiationMode="00" purpose="00"         type="BACKOFFICE"
                subtype="DISPUTE" orgTxnId="SBI4a69d250abe6433899c2f5a08fc34251"
          orgRrn="013100747891" orgTxnDate="2020-05-10T23:00:41+05:30">
          </Txn>
          <Resp reqMsgId="SBI4a69d250abe6433899c2f5a08fc0qw12" >
          <Ref type="PAYER" seqNum="1" adjAmt="500.00" settCurrency="INR"
          approvalNum="335615" adjTs="2020-05-11T00:00:10+05:30"adjRefId="
          P1705110000338829745321"adjCode="TCC" adjFlag="103" />
          <Ref type="PAYEE" seqNum="1" adjAmt="500.00" settCurrency="INR"
          approvalNum="335213" adjTs="" adjRefId= P1705110000338829745321""
          adjCode=TCC"" adjFlag="103" />
          </Resp>
```
<!-- PAGE 67 -->
## PAGE 67

### Verbatim page text

```text
          </upi:RespChkTxn>

ReqChkTxn - CREDIT ADJUSTMENT
ReqChkT xn f rom Payer/Payee PSP to UPI
       <upi:ReqChkTxn xmlns:upi="http://npci.org/upi/schema/">
       <Head       ver="2.0"     ts="2020-05-11T00:00:41+05:30" orgId="180002"
       msgId="SBI4a69d250abe6433899c2f5a08fc0qw12" prodType="UPI"/>
       <Txn id="SBI4a69d250abe6433899c2f5a08fc0d008" ts="2020-05-
       11T00:00:41+05:30"
       custRef="013100747221" refId="P1705110000338829715467"
       refUrl="http://www.npci.org.in/" refCategory="00" note="Status Check"
       initiationMode="00" purpose="00" type="BACKOFFICE"
       subtype="DISPUTE"         orgTxnId="SBI4a69d250abe6433899c2f5a08fc34251"
       orgRrn="013100747891" orgTxnDate="2020-05-10T23:00:41+05:30"/>
       </Txn>
       </upi:ReqChkTxn>


RespChkT xn f rom UPI to Payer/Payee PSP

UPI internally checks the last updated status of the txn in URCS and gives response to the
PSP.
          <upi:RespChkTxn xmlns:upi="http://npci.org/upi/schema/">
          <Head       ver="2.0"      ts="2020-05-11T00:00:41+05:30" orgId="NPCI"
          msgId="NPCI4a69d250a899c2f5a08fc0d008" prodType="UPI"/>
          <Txn id="SBI4a69d250abe6433899c2f5a08fc0d008" ts="2020-05-
          11T00:00:43+05:30"
          custRef="013100747221" refId="P1705110000338829715467"
          refUrl="http://www.npci.org.in/" refCategory="00" note="Status Check"
          initiationMode="00" purpose="00" type="BACKOFFICE"
                subtype="DISPUTE" orgTxnId="SBI4a69d250abe6433899c2f5a08fc34251"
          orgRrn="013100747891" orgTxnDate="2020- 05-10T23:00:41+05:30">
          </Txn>
          <Resp reqMsgId="SBI4a69d250abe6433899c2f5a08fc0qw12" result="SUCCESS"
          >
          <Ref type="PAYER" seqNum="1" adjAmt="500.00" settCurrency="INR"
          approvalNum="335615" adjTs="2020-05-11T00:00:10+05:30"adjRefId="
          P1705110000338829745321" adjCode="" adjFlag="" />
          <Ref type="PAYEE" seqNum="1" adjAmt="500.00" settCurrency="INR"
          approvalNum="335213" adjTs="2020-05-11T00:00:41+05:30"adjRefId="
          P1705110000338829745321" adjFlag="C" adjCode="1084" />
          </Resp>
          </upi:RespChkTxn>

14.4. Type – DISPUTEHIST

ReqChkTxn from Payer/Payee PSP to NPCI
          <?xml version="1.0" encoding="UTF-8"?>
          <ns2:ReqChkTxn
          xmlns:ns2="http://npci.org/upi/schema/">
          <Head msgId="1GRDpegBbA5gOF7Dz2xJ" orgId="700001" ts="2021-03-
          03T17:32:14+05:30" ver="2.0"/>
```
<!-- PAGE 68 -->
## PAGE 68

### Verbatim page text

```text
          <Txn custRef="023718079701" id="MMM0000000000005t0ya2TDrPdAE1oIn16"
          initiationMode="00" note="Sending money for your use"
          orgMsgId="XYD0000000000001GRDpegB9EWpFIHL7Tzs" orgTxnDate="2021-02-
          22T17:01:44+05:30"
          orgTxnId="MMM0000000000005t0ya2TDrPdevN7AjaU" purpose="00" refId="Ref"
          refUrl="http://upi" subType="DISPUTEHIST"
          ts="2019-11-06T18:02:00+05:30" type="BACKOFFICE"/>
          </ns2:ReqChkTxn>

RespChkTxn from NPCI to Payer/Payee PSP
          <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <ns2:RespChkTxn
          xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
          <Head       ver="2.0"      ts="2021-03-03T17:32:50+05:30" orgId="NPCI"
          msgId="5t0yaaWjrmUqqsFDxjG" prodType="UPI"/>
          <Txn id="MMM0000000000005t0ya2TDrPdAE1oIn16" note="Sending money for
          your use" refId="Ref" refUrl="http://upi"
          ts="2019-11-06T18:02:00+05:30"type="BACKOFFICE"
          orgMsgId="XYD0000000000001GRDpegB9EWpFIHL7Tzs"
          orgTxnId="MMM0000000000005t0ya2TDrPdevN7AjaU"custRef="023718079701"
          orgTxnDate="2021-02-22T17:01:44+05:30"
          initiationMode="00" subType="DISPUTEHIST" purpose="00"/>
          <Resp reqMsgId="1GRDpegBbA5gOF7Dz2xJ">
          <Ref        type="REMITTER" adjAmt="8.70"adjTs="2021-03-03T17:14:25"
          adjRefId="PTM/PTM/Response to Complaint/1171051520" adjFlag="PR2C"
          adjCode="107" adjRemarks="re-17"/>
          <Ref        type="REMITTER" adjAmt="8.70"adjTs="2021-03-03T17:14:25"
          adjRefId="PTM/PTM/TCC/1038313984"
          adjFlag="TCC" adjCode="102" adjRemarks="re-17"/>
          <Ref type="PAYER" adjAmt="8.70" adjTs="2021-02-22T17:04:06"
          adjRefId="PTM/PTM/Complaint Raise/1250895872/SYSTEM" adjFlag="PBRB"
          adjCode="U010" adjRemarks="Auto Update"/>
          </Resp>
          </ns2:RespChkTxn>
            15.1Type - MANDATE

Bank/PSP initiates ReqChkTxn for a mandate to UPI -
          <upi:ReqChkTxn xmlns:upi="http://npci.org/upi/schema/">
          <Head msgId="UPI000027e751aa09d3c4ad99c0c69fa28b" orgId="189999"
          ts="2019-06 20T15:10:47+05:30" ver="2.0"/>
          <Txn id="UPI55EE555II5RR27" initiationMode="00" note="Payee Initiated"
          orgMsgId=" NPCI4a69d250a899c2f5a08fc0d008"          orgTxnDate="2019-06
          20T15:10:30+05:30" orgTxnId=" SBI4a69d250abe6433899c2f5a08fc34251"

          purpose="01"refId="UPI5555555EE555II5RR27"refUrl=https://www.npci.org.in
          type="BACKOFFICE"       subType="MANDATE"                ts="2019-06-
          20T15:10:47+05:30"
          umn="ad0b75csdw164e32b9ae866bc5c5de25@upi"/>
          </upi:ReqChkTxn>

UPI checks in internal DB and provides the last updated status and operation
(CREATE/UPDATE/REVOKE)-
```
<!-- PAGE 69 -->
## PAGE 69

### Verbatim page text

```text
RespChkTxn from UPI to Bank/ PSP-
          <ns2:RespChkTxxmlns:ns2="http://npci.org/upi/schema/"xmlns:ns3=
          "http://npci.org/cm/schema/">
          <Head ver="2.0" ts="2019-06-20T15:10:47+05:30" orgId="NPCI"
          msgId="NPCI4a69d250a899c2f5a08fc0d008"/>
          <Txn id="UPI55EE555II5RR27" note="Payee Initiated"
          refId="ICI5555555EE555II5RR27"refUrl="https://www.bank.com" ts="2019-06-
          20T15:10:47+05:30"       type="BACKOFFICE"
               orgMsgId="UPI755555666555II34187" orgTxnId="ICI755555666555II34187"
               orgTxnDate="2019-06-20T15:10:30+05:30"
          umn="ad0b75csdw164e32b9ae866bc5c5de25@upi" initiationMode="00"
               subType="MANDATE" purpose="01"/>
          <Resp reqMsgId="UPI000027e751aa09d3c4ad99c0c69fa28b"
          result="SUCCESS">
          <Mandate txnId="UPI55EE555II5RR27"
          umn="ad0b75csdw164e32b9ae866bc5c5de25@upi" ts="" revokeable="Y"
               shareToPayee="Y" initiatedBy="PAYEE" blockFund="N" type="loan"
          note="Mandate" CurStatus="" drSeqNum="2" >
          <Validity start="01092020" end="01092021"/>
          <Amount value="1000.00" rule="MAX"/>
          <Recurrence pattern="MONTHLY">
          </Recurrence>
          </Mandate>
          </Resp>
          </ns2:RespChkTxn>


Note : Type Mandate will be implemented in future . Currently Not in Scope. The
Mandate information can be fetched through Date of Mandate Operation + UMN
(or) Txn id associated with that operation


14.5. Type – Refund
      Successful Refund
          Received Message:<?xml version="1.0" encoding="UTF-8"?>
          <ns2:ReqChkTxn xmlns:ns2="http://npci.org/upi/schema/"
          xmlns:ns3="http://npci.org/cm/schema/">
          <Head msgId="1GRDpegBbA5gOF7Dz2xJ"
               orgId="159011"
               ts="2024-04-29T18:01:40+05:30"
               ver="2.0"/>
          <Txn custRef="412915527709"
              id="XXX0000000000001vRTvznNrSQZvNyE6cbm"
              initiationMode="00"
              note="Sending money for your use"
              orgMsgId="5t0xf6TRJP93wfcFHm8"
              orgRrn="412017687841"
              orgTxnDate="2024-04-29T18:32:17+05:30"
              orgTxnId="XXX0000000000001vRTvznNrSQZvM0KX2q4"
              purpose="00"
              refId="Ref"
              refUrl="http://upi"
              refundTxnId="XXX0000000000001vRTvznNrSQZvMJLG1QA"
```
<!-- PAGE 70 -->
## PAGE 70

**Section context on this page:**
- 15. Complaint API

### Verbatim page text

```text
             subType="REFUND"
             ts="2024-04-29T18:02:00+05:30"
             type="BACKOFFICE"/>
        </ns2:ReqChkTxn>

        0 10.200.123.58 20100 [29/Apr/2024:18:01:41:547000000] Acknowledgement
        sent for Meta API Transaction Id :XXX0000000000001vRTvznNrSQZvNyE6cbm
        0 10.200.123.58 20100 [29/Apr/2024:18:01:41:548000000]

        <?xml version="1.0" encoding="UTF-8" standalone="yes"?><ns2:Ack
        xmlns:ns2="http://npci.org/upi/schema/"
        xmlns:ns3="http://npci.org/cm/schema/" api="ReqChkTxn"
        reqMsgId="1GRDpegBbA5gOF7Dz2xJ" ts="2024-04-29T18:01:41+05:30"/>
        0 10.200.123.58 20100 [29/Apr/2024:18:01:42:004000000] Message for outbound
        request (to 159011)
        :https://10.20.41.6:10012/upi/RespChkTxn/2.0/urn:txnid:XXX0000000000001vR
        TvznNrSQZvNyE6cbm
        0 10.200.123.58 20100 [29/Apr/2024:18:01:42:004000000] Original outbound
        Request=
        0 10.200.123.58 20100 [29/Apr/2024:18:01:42:004000000] <?xml version="1.0"
        encoding="UTF-8" standalone="yes"?><ns2:RespChkTxn
        xmlns:ns2="http://npci.org/upi/schema/"
        xmlns:ns3="http://npci.org/cm/schema/"><Head ver="2.0" ts="2024-04-
        29T18:01:41+05:30" orgId="NPCI" msgId="5yafUVEM9" prodType="UPI"/><Txn
        id="XXX0000000000001vRTvznNrSQZvNyE6cbm" note="Sending money for your
        use" refId="Ref" refUrl="http://upi" ts="2024-04-29T18:02:00+05:30"
        type="BACKOFFICE" orgMsgId="5t0xf6TRJP93wfcFHm8"
        orgTxnId="XXX0000000000001vRTvznNrSQZvM0KX2q4"
        custRef="412915527709" orgTxnDate="2024-04-29T18:32:17+05:30"
        refundTxnId="XXX0000000000001vRTvznNrSQZvMJLG1QA"
        orgRrn="412017687841" initiationMode="00" subType="REFUND"
        purpose="00"/><Resp reqMsgId="1GRDpegBbA5gOF7Dz2xJ"><Ref
        type="REMITTER" adjAmt="100.00" adjTs="2024-04-29T17:53:58"
        adjRefId="ANB/CSB/Refund Reversal Confirmation/693426176" adjFlag="RRC"
        adjCode="501" adjRemarks="UDIR"/></Resp></ns2:RespChkTxn>
        0 10.200.123.58 20100 [29/Apr/2024:18:01:42:076000000] Acknowledgement
        Received for
        :https://10.20.41.6:10012/upi/RespChkTxn/2.0/urn:txnid:XXX0000000000001vR
        TvznNrSQZvNyE6cbm : <?xml version="1.0" encoding="UTF-8"
        standalone="yes"?><ns2:Ack xmlns:ns2="http://npci.org/upi/schema/"
        api="RespChkTxn" reqMsgId="5yafUVEM9" ts="2024-04-29T18:01:29+05:30"/>


Timeout Refund

        ReqChkTxn

        <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <ReqChkTxn xmlns:upi="http://npci.org/upi/schema/">
        <Head msgId="JJm0M49q8diOllcQoQPbo0qEJtK1RqMO4k9" orgId="180113"
        prodType="UPI" ts="2024-06-28T16:58:45+05:30" ver="2.0" />
        <Txn id="cClRjq2vqoPHlszavg8gpCRfVTDFZFkBjJD" note="Refund status check"
        refId="s3MPd19e8ZYRX6eyOwIlwR2yq2NHnBOW0CA"
        refUrl="https://upi.hdfcbank.com" ts="2024-06-28T16:58:45+05:30"
        type="BACKOFFICE" initiationMode="00" orgMsgId="2z3LcF4ZJip"
```
<!-- PAGE 71 -->
## PAGE 71

### Verbatim page text

```text
     orgRrn="418098145001" orgTxnDate="2024-06-28T16:49:31+05:30"
     orgTxnId="HDF7d7d99555bcd41838b2bce09d0b5d50e" purpose="00"
     refCategory="00" refundTxnId="ASUTzObbrbuersfYHhUSHlToHI38aFlWjbc"
     subType="REFUND" />
     </ReqChkTxn>


     RespChkTxn

     <?xml version="1.0" encoding="UTF-8"?>
     <RespChkTxn xmlns:ns2="http://npci.org/upi/schema/"
     xmlns:ns3="http://npci.org/cm/schema/">
     <Head msgId="2yChriwRuZx" orgId="NPCI" prodType="UPI" ts="2024-06-
     28T16:58:45+05:30" ver="2.0" />
      <Txn id="cClRjq2vqoPHlszavg8gpCRfVTDFZFkBjJD" initiationMode="00"
     note="Refund status check" orgMsgId="2z3LcF4ZJip" orgRrn="418098145001"
     orgTxnDate="2024-06-28T16:49:31+05:30"
     orgTxnId="HDF7d7d99555bcd41838b2bce09d0b5d50e" purpose="00"
     refCategory="00" refId="s3MPd19e8ZYRX6eyOwIlwR2yq2NHnBOW0CA"
     refUrl="https://upi.hdfcbank.com"
     refundTxnId="ASUTzObbrbuersfYHhUSHlToHI38aFlWjbc" subType="REFUND"
     ts="2024-06-28T16:58:45+05:30" type="BACKOFFICE" />
     <Resp reqMsgId="JJm0M49q8diOllcQoQPbo0qEJtK1RqMO4k9">
     <Ref adjAmt="1.00" adjCode="502" adjFlag="RRC" adjRefId="HDF/ASU/Refund
     Reversal Confirmation/225176320" adjRemarks="UDIR" adjTs="2024-06-
     28T16:54:55" type="REMITTER" />
     </Resp>
     </RespChkTxn>




15. Complaint API
     ns2:ReqComplaint xmlns:upi=“http://npci.org/upi/schema/”>
           <Head ver=“2.0” ts=““ orgId=““ msgId=““ prodType=““/> <Txn </Txn>id=““
           ts=““ custRef=““ refId=““ refUrl=““ refCategory=““ note=““
           initiationMode=““purpose=““ type="" subtype=““ orgTxnId=““ orgRrn=““
           orgTxnDate=““ ><Complaint reqAdjFlag=““ reqAdjCode=““ reqAdjAmount
           = ““
                  orgSettRespCode = ““ currCycle =”” >
       <Creds>
            <Cred type="PREAPPROVED" subType="NA">
                            <Data> base-64 encoded</Data>
            </Cred>
            <Cred type="PIN" subType="MPIN">
                            <Data code =”” ki =””> base-64 encoded</Data>
```
<!-- PAGE 72 -->
## PAGE 72

### Verbatim page text

```text
                   </Cred>
              <Creds> </Complaint> </ns2:ReqComplaint>


15.1. RespComplaint

            <ns2:RespComplaint xmlns:upi=“http://npci.org/upi/schema/”>
                  <Head ver=“2.0” ts=““ orgId=““ msgId=““ prodType=““/>
                  <Txn
                           id=““ ts=““ custRef=““ refId=““ refUrl=““ refCategory=““
                           note=““ initiationMode=““ purpose=““
                           type= ""subtype=““ orgTxnId=““ orgRrn=““ orgTxnDate=““ >
                  </Txn>
                  <Complaint reqAdjFlag=““ reqAdjCode=““
                        reqAdjAmount = ““ orgSettRespCode =
                        ““ currCycle = “” >
                  </Complaint>
                  <Resp reqMsgId=““ crn = “” Result = “”>
            <Ref type= “” procStatus = “” seqNum=““ addr = “” adjAmt=““
            settCurrency = "INR" IFSC = “” acNum = “” approvalNum=““ adjTs=““
            adjRefId=““ adjFlag=““ adjCode=““ adjRemarks="" rejReason="">
           </Ref></Resp>
        </ns2:RespComplaint>
➢ Note : procStatus and Result are not mandatory and it is for future purpose
➢ The Ref block is populated only when we communicate with the Remitter/Beneficiary
  banks or Payee PSP. When URCS validation is failed Only Resp errorCode is
  populated with URCS error code.


15.2. Complaint API Field Specification

      Tag          Message Item         <XML           Occ      Datatyp      Length             Man
      Num                               Tag>           urr      e                               dat
                                                       enc                                      ory
                                                       e
      1.1          API Name             <ReqCom        1..1                                     Y
                                        plaint> |
                                        <RespCom
                                        plaint>
      1.1.1        API    Schema        xmlns          1..1    Alphanu       Min Length: 1      Y
                   namespace                                   meric         Max Length : 255
      2.1          Header for the       <Head>         1..1    Alphabe       Fixed value        Y
                   message                                     tic
      2.1.1        Version of the       ver            1..1    Numeric       Min Length:    1   Y
                   API                                                       Max Length : 6
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 72.1

| Tag | Message Item | <XML | Occ | Datatyp | Length | Man |
| --- | --- | --- | --- | --- | --- | --- |
| Num |  | Tag> | urr | e |  | dat |
|  |  |  | enc |  |  | ory |
|  |  |  | e |  |  |  |
| 1.1 | API Name | <ReqCom | 1..1 |  |  | Y |
|  |  | plaint> \| |  |  |  |  |
|  |  | <RespCom |  |  |  |  |
|  |  | plaint> |  |  |  |  |
| 1.1.1 | API Schema namespace | xmlns | 1..1 | Alphanu meric | Min Length: 1 Max Length : 255 | Y |
| 2.1 | Header for the | <Head> | 1..1 | Alphabe | Fixed value | Y |
|  | message |  |  | tic |  |  |
| 2.1.1 | Version of the | ver | 1..1 | Numeric | Min Length: 1 | Y |
|  | API |  |  |  | Max Length : 6 |  |


### Visuals

#### [IMAGE_017] - page 72, approximate location: middle third

![IMAGE_017](images/IMAGE_017.png)

**Detailed visual representation:**

Tiny 2x2-pixel PNG containing a single dark pixel/dot on a transparent/white field. It carries no substantive readable information and appears to be an incidental rendering artifact.

**Source image dimensions:** 2 × 2 px; original embedded image format: PNG; PDF page: 72.

<!-- PAGE 73 -->
## PAGE 73

### Verbatim page text

```text
2.1.2   Time of request       ts         1..1   ISODate     Min Length:    1    Y
        from        the                         Time        Max Length : 255
        creator of the
        message
2.1.3   Organization id       orgId      1..1   Numeric     Min Length:     1   Y
        that   created                                      Max Length : 20
        the message
2.1.4   Message               msgId      1..1   Alphanu     Length:         1   Y
        identifier-used                         meric       Max Length : 35
        to      correlate
        between
        request      and
        response
2.1.5   Product               prodType   1..1   Alphabe     Fixed value         Y
        identifier                              tic
3.1     Transaction           <Txn>      1..1   Alphabe tic Fixed Value         Y
        information,
        Carried
        throughout the
        system, visible
        to all parties
3.1.1   Unique                id         1..1   Alphanu     Length=35           Y
        Identifier of the                       meric
        transaction
        across         all
        entities,
        created by the
        originator
3.1.2   Transaction           ts         1..1   ISODate     Min Length: 1 Max   Y
        origination                             Time        Length:255
        time
                       b
        y
                       th
        e creator of
        the message
3.1.3   Customer              custRef    1..1   Numeric     Length=12           Y
        reference
        number for the
        initiated
        transaction
3.1.4   Consumer              refId      1..1   Alphanu     Min Length: 1 Max   Y
        reference                               meric       Length : 35
        number          to
        identify (like Loan
        number, etc.)
3.1.5   URL for       the     refUrl     1..1   Alphanu     Min Length:    1    Y
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 73.1

| 2.1.2 | Time of request | ts | 1..1 | ISODate | Min Length: 1 | Y |
| --- | --- | --- | --- | --- | --- | --- |
|  | from the |  |  | Time | Max Length : 255 |  |
|  | creator of the |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | message |  |  |  |  |  |
| 2.1.3 | Organization id | orgId | 1..1 | Numeric | Min Length: 1 | Y |
|  | that created |  |  |  | Max Length : 20 |  |
|  | the message |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 2.1.4 | Message | msgId | 1..1 | Alphanu | Length: 1 | Y |
|  | identifier-used |  |  | meric | Max Length : 35 |  |
|  | to correlate |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | between |  |  |  |  |  |
|  | request and |  |  |  |  |  |
|  | response |  |  |  |  |  |
| 2.1.5 | Product | prodType | 1..1 | Alphabe | Fixed value | Y |
|  | identifier |  |  | tic |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 3.1 | Transaction | <Txn> | 1..1 | Alphabe tic | Fixed Value | Y |
|  | information, |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | Carried |  |  |  |  |  |
|  | throughout the |  |  |  |  |  |
|  | system, visible |  |  |  |  |  |
|  | to all parties |  |  |  |  |  |
| 3.1.1 | Unique | id | 1..1 | Alphanu | Length=35 | Y |
|  | Identifier of the |  |  | meric |  |  |
|  |  |  |  |  |  |  |
|  | transaction |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | across all |  |  |  |  |  |
|  | entities, |  |  |  |  |  |
|  | created by the |  |  |  |  |  |
|  | originator |  |  |  |  |  |
| 3.1.2 | Transaction | ts | 1..1 | ISODate | Min Length: 1 Max | Y |
|  | origination |  |  | Time | Length:255 |  |
|  | time |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | b |  |  |  |  |  |
|  | y |  |  |  |  |  |
|  | th |  |  |  |  |  |
|  | e creator of |  |  |  |  |  |
|  | the message |  |  |  |  |  |
| 3.1.3 | Customer | custRef | 1..1 | Numeric | Length=12 | Y |
|  | reference |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | number for the |  |  |  |  |  |
|  | initiated |  |  |  |  |  |
|  | transaction |  |  |  |  |  |
| 3.1.4 | Consumer | refId | 1..1 | Alphanu | Min Length: 1 Max | Y |
|  | reference |  |  | meric | Length : 35 |  |
|  | number to |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | identify (like Loan |  |  |  |  |  |
|  | number, etc.) |  |  |  |  |  |
| 3.1.5 | URL for the | refUrl | 1..1 | Alphanu | Min Length: 1 | Y |
|  |  |  |  |  |  |  |

<!-- PAGE 74 -->
## PAGE 74

### Verbatim page text

```text
         transaction                             meric      Max Length : 35

3.1.6    Reference category refCatego ry 1..n    Code       Fixed Value         Y

3.1.7    Description of     note          1..1   Alphanu    Min Length:     1   Y
         the                                     meric      Max Length : 50
         transaction(wh
         ich will     be
         printed on Pass
         book)
3.1.8    Initiation mode    initiation    1..1   Code       Min Length: 1       Y
                            mode                            Max Length: 3
3.1.9    Purpose of the     purpose       1..1   Code       Fixed Value         Y
         txn
3.1.10   Type of the        type          1..1   Code       Min Length:     1   Y
         Transaction                                        Max Length : 20
3.1.11   Subtype       of   subType       0..1   Code       Min Length:    1    N
         transaction                                        Max Length: 20
3.1.12   Original           orgTxnId      1..1   Alphanu    Length=35           Y
         transaction ID                          meric
         when
         reversal/Refun
         d has to be
         done
3.1.13   Original RRN       orgRrn        0..1   Numeric    Length=12           N

3.1.14   Original Date      orgTxnDa      0..1   ISODate    Min Length:    1    N
         of the txn         te                   Time       Max Length:255
4.1      Complaint          <Complai      1..n   Alphabet   Fixed value         Y
                            nt>                  ic
4.1.1    Adjustment         reqAdjFla g   1..1   Alphanu    Minlength:1 Max     Y
         Flag in Back                            meric      length:5
         Office for the txn
4.1.2    Adjustment         reqAdjCo de 1..1     Alphanu    Minlength:1 Max     Y
         Code in Back                            meric      length:5
         Office for the txn
4.1.3    Adjustment         reqAdjAm      1..1   Numeric    Minlength:1 Max     Y
         Amount       in    ount                            length:10
         Back Office for
         the txn
4.1.4    OrgRespCode        OrgSettRe     0..1   Alphanu    Minlength:1 Max     N
         in         the     spCode               meric      length:20
         transactio
         n
4.1.5    Describes          currCycle     1..1   Alphabe tic Minlength:1 Max    Y
                                                             length:3
               the
         transactio
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 74.1

|  | transaction |  |  | meric | Max Length : 35 |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
| 3.1.6 | Reference category | refCatego ry | 1..n | Code | Fixed Value | Y |
|  |  |  |  |  |  |  |
| 3.1.7 | Description of | note | 1..1 | Alphanu | Min Length: 1 | Y |
|  | the |  |  | meric | Max Length : 50 |  |
|  | transaction(wh |  |  |  |  |  |
|  | ich will be |  |  |  |  |  |
|  | printed on Pass |  |  |  |  |  |
|  | book) |  |  |  |  |  |
| 3.1.8 | Initiation mode | initiation | 1..1 | Code | Min Length: 1 | Y |
|  |  | mode |  |  | Max Length: 3 |  |
|  |  |  |  |  |  |  |
| 3.1.9 | Purpose of the | purpose | 1..1 | Code | Fixed Value | Y |
|  | txn |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 3.1.10 | Type of the | type | 1..1 | Code | Min Length: 1 | Y |
|  | Transaction |  |  |  | Max Length : 20 |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 3.1.11 | Subtype of | subType | 0..1 | Code | Min Length: 1 | N |
|  | transaction |  |  |  | Max Length: 20 |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 3.1.12 | Original | orgTxnId | 1..1 | Alphanu | Length=35 | Y |
|  | transaction ID |  |  | meric |  |  |
|  | when |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | reversal/Refun |  |  |  |  |  |
|  | d has to be |  |  |  |  |  |
|  | done |  |  |  |  |  |
| 3.1.13 | Original RRN | orgRrn | 0..1 | Numeric | Length=12 | N |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 3.1.14 | Original Date | orgTxnDa | 0..1 | ISODate | Min Length: 1 | N |
|  | of the txn | te |  | Time | Max Length:255 |  |
|  |  |  |  |  |  |  |
| 4.1 | Complaint | <Complai | 1..n | Alphabet | Fixed value | Y |
|  |  | nt> |  | ic |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 4.1.1 | Adjustment | reqAdjFla g | 1..1 | Alphanu | Minlength:1 Max | Y |
|  | Flag in Back |  |  | meric | length:5 |  |
|  | Office for the txn |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 4.1.2 | Adjustment | reqAdjCo de | 1..1 | Alphanu | Minlength:1 Max | Y |
|  | Code in Back |  |  | meric | length:5 |  |
|  |  |  |  |  |  |  |
|  | Office for the txn |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 4.1.3 | Adjustment | reqAdjAm | 1..1 | Numeric | Minlength:1 Max | Y |
|  | Amount in | ount |  |  | length:10 |  |
|  |  |  |  |  |  |  |
|  | Back Office for |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | the txn |  |  |  |  |  |
| 4.1.4 | OrgRespCode | OrgSettRe | 0..1 | Alphanu | Minlength:1 Max | N |
|  | in the | spCode |  | meric | length:20 |  |
|  | transactio |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | n |  |  |  |  |  |
| 4.1.5 | Describes | currCycle | 1..1 | Alphabe tic | Minlength:1 Max | Y |
|  |  |  |  |  | length:3 |  |
|  |  |  |  |  |  |  |
|  | the |  |  |  |  |  |
|  | transactio |  |  |  |  |  |

<!-- PAGE 75 -->
## PAGE 75

### Verbatim page text

```text
          n
          belongs


                 to
          Current
                 Cyc
          le or not
5.1      Response           <Resp>       1..1   Alphabe       Fixed value         Y
                                                tic
5.1.2    Request            reqMsgId     1..1   Alpha         Length= 35          Y
         Message                                Numeric

         Identifier
5.1.3    Complaint          crn          1..1   Alpha         Length = 16         Y
                                                Numeric
         Reference Number
5.1.4    Response           <Ref>        1..n   Alphabe       Fixed value         Y
         Reference                              tic
5.1.5    Reference          type         1..1   Code          Fixed value         Y
         type
5.1.6    Process            procStatus   1..1   Alphabe tic   Minlength:1 Max     N
                Sta                                           length:15
         tus of
                the
         transaction
5.1.7    Sequence           seqNum       1..1   Numeric       Min length:1 Max    Y
                                                              length:3
         Number
5.1.8    VPA                addr         1..1   AlphaN        Min length:1 Max
         Address                                              length:15
                                                umericc
5.1.9    Adjustment         adjAmt       1..1   Numeric       Minlength:1 Max     Y
                                                              length:10
         Amount of
         the
         Response
5.1.10   Settlement         settCurren   1..1   Text          Min Length: 1 Max   Y
                                                              Length : 3
         Currency           cy
5.1.11   Account            acNum        1.1    Numeric       Min Length: 1 Max   Y
                                                              Length : 15
         Number
5.1.12   Approval ReferenceapprovalN um 1..1    Alpha         Length= 6           Y
                                                Numeric
         Number
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 75.1

|  | n |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | belongs |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | to |  |  |  |  |  |
|  | Current |  |  |  |  |  |
|  | Cyc |  |  |  |  |  |
|  | le or not |  |  |  |  |  |
| 5.1 | Response | <Resp> | 1..1 | Alphabe | Fixed value | Y |
|  |  |  |  |  |  |  |
|  |  |  |  | tic |  |  |
| 5.1.2 | Request | reqMsgId | 1..1 | Alpha | Length= 35 | Y |
|  | Message |  |  | Numeric |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | Identifier |  |  |  |  |  |
| 5.1.3 | Complaint | crn | 1..1 | Alpha | Length = 16 | Y |
|  |  |  |  | Numeric |  |  |
|  | Reference Number |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.4 | Response | <Ref> | 1..n | Alphabe | Fixed value | Y |
|  |  |  |  |  |  |  |
|  | Reference |  |  | tic |  |  |
| 5.1.5 | Reference | type | 1..1 | Code | Fixed value | Y |
|  | type |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.6 | Process | procStatus | 1..1 | Alphabe tic | Minlength:1 Max | N |
|  | Sta |  |  |  | length:15 |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | tus of |  |  |  |  |  |
|  | the |  |  |  |  |  |
|  | transaction |  |  |  |  |  |
| 5.1.7 | Sequence | seqNum | 1..1 | Numeric | Min length:1 Max | Y |
|  |  |  |  |  | length:3 |  |
|  | Number |  |  |  |  |  |
| 5.1.8 | VPA | addr | 1..1 | AlphaN | Min length:1 Max |  |
|  | Address |  |  |  | length:15 |  |
|  |  |  |  | umericc |  |  |
|  |  |  |  |  |  |  |
| 5.1.9 | Adjustment | adjAmt | 1..1 | Numeric | Minlength:1 Max | Y |
|  |  |  |  |  | length:10 |  |
|  | Amount of |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | the |  |  |  |  |  |
|  | Response |  |  |  |  |  |
| 5.1.10 | Settlement | settCurren | 1..1 | Text | Min Length: 1 Max | Y |
|  |  |  |  |  | Length : 3 |  |
|  | Currency | cy |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.11 | Account | acNum | 1.1 | Numeric | Min Length: 1 Max | Y |
|  |  |  |  |  | Length : 15 |  |
|  | Number |  |  |  |  |  |
|  |  |  |  |  |  |  |
| 5.1.12 | Approval Reference | approvalN um | 1..1 | Alpha | Length= 6 | Y |
|  |  |  |  | Numeric |  |  |
|  | Number |  |  |  |  |  |
|  |  |  |  |  |  |  |

<!-- PAGE 76 -->
## PAGE 76

**Section context on this page:**
- 16. Complaint API Sample Message Dumps
- 16.1. Raise Complaint - DRC

### Verbatim page text

```text
      5.1.13       Transacti            adjTs             1..1   ISODate       Min Length:    1    Y
                   on                                            Time          Max Length:255
                   originatio
                   n time of
      5.1.14       Adjustme              adjRefId         1..1    Alpha        Min Length: 1 Max   Y
                   nt                                             Numeric      Length : 35

                   Referenc
                   e Id of the
                   Response
      5.1.15      Adjustment            adjFlag           1..1   Alphanu       Minlength:1 Max     Y
                  Flag of                                        meric         length:5
                         the
                  Response
      5.1.16      Adjustment            adjCode           1..1   Alphanu       Minlength:1 Max     Y
                  Code of                                        meric         length:5
                         the
                  Response
      5.1.17      Adjustment            adjRemark         1..1   Alphabe       Min Length:    1    Y
                                                                               Max Length:255
                  Remarks               s                        tic
      5.1.18      Reject                rejReason         1..1   AlphaN        Min Length:    1    N
                  Reason                                                       Max Length:255
                                                                 umeric


15.3. List of Values

          Tag            Tag Name                 Value Description
          Numb
          er
          3.1.10       Txn.type                   COMPLAINT|DISPUTE|REFUND|REVERSAL|STAT
                                                  USUP
                                                  DATE|CHECKSTATUS
          3.1.11       Txn.subtype                REMITTER | PAYER | PAYEE | BENEFICIARY
          3.1.8        initiationMode             U0- Auto Conversion
                                                  U1-Customer App
                                                  U2-PSP
                                                  U3-Bank
                                                  U4-CRM
                                                  -Application for Complaint Category Only
          4.1.5        Complaint.currCy           Y|N
                       cle
          5.1.3        Resp.crn                   16 Digit Number
                                                  UPI – 1 to 3
                                                  YYMMDD – 4 to 9
                                                  7 Unique Digit – 10 to 16
                                                  - Applicable for Complaint Category Only
          5.1.4        Ref.type                   PAYER|PAYEE
          5.1.5        Ref.procStatus             COMPLETED|TIMEOUT
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 76.1

| 5.1.13 | Transacti | adjTs | 1..1 | ISODate | Min Length: 1 | Y |
| --- | --- | --- | --- | --- | --- | --- |
|  | on |  |  | Time | Max Length:255 |  |
|  | originatio |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | n time of |  |  |  |  |  |
| 5.1.14 | Adjustme | adjRefId | 1..1 | Alpha | Min Length: 1 Max | Y |
|  | nt |  |  | Numeric | Length : 35 |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | Referenc |  |  |  |  |  |
|  | e Id of the |  |  |  |  |  |
|  | Response |  |  |  |  |  |
| 5.1.15 | Adjustment | adjFlag | 1..1 | Alphanu | Minlength:1 Max | Y |
|  | Flag of |  |  | meric | length:5 |  |
|  |  |  |  |  |  |  |
|  | the |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | Response |  |  |  |  |  |
| 5.1.16 | Adjustment | adjCode | 1..1 | Alphanu | Minlength:1 Max | Y |
|  | Code of |  |  | meric | length:5 |  |
|  |  |  |  |  |  |  |
|  | the |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  | Response |  |  |  |  |  |
| 5.1.17 | Adjustment | adjRemark | 1..1 | Alphabe | Min Length: 1 | Y |
|  |  |  |  |  | Max Length:255 |  |
|  | Remarks | s |  | tic |  |  |
|  |  |  |  |  |  |  |
| 5.1.18 | Reject | rejReason | 1..1 | AlphaN | Min Length: 1 | N |
|  | Reason |  |  |  | Max Length:255 |  |
|  |  |  |  | umeric |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

#### Table 76.2

| Tag | Tag Name | Value Description |
| --- | --- | --- |
| Numb |  |  |
| er |  |  |
| 3.1.10 | Txn.type | COMPLAINT\|DISPUTE\|REFUND\|REVERSAL\|STAT |
|  |  | USUP |
|  |  | DATE\|CHECKSTATUS |
| 3.1.11 | Txn.subtype | REMITTER \| PAYER \| PAYEE \| BENEFICIARY |
| 3.1.8 | initiationMode | U0- Auto Conversion |
|  |  | U1-Customer App |
|  |  | U2-PSP |
|  |  | U3-Bank |
|  |  | U4-CRM |
|  |  | -Application for Complaint Category Only |
| 4.1.5 | Complaint.currCy cle | Y\|N |
| 5.1.3 | Resp.crn | 16 Digit Number |
|  |  | UPI – 1 to 3 |
|  |  | YYMMDD – 4 to 9 |
|  |  | 7 Unique Digit – 10 to 16 |
|  |  | - Applicable for Complaint Category Only |
| 5.1.4 | Ref.type | PAYER\|PAYEE |
| 5.1.5 | Ref.procStatus | COMPLETED\|TIMEOUT |

<!-- PAGE 77 -->
## PAGE 77

### Verbatim page text

```text
15.4. New Tags

         Tag         Tag Name             Purpose
         Numb
         er
         4.1.4     OrgSettRespCode       It defines the OrgRespCode which has been
                                         updated in the Current Response. It will be having
                                         the Settlement Response code currently available in
                                         URCS system
         5.1.3     Crn                   It defines the Complaint Reference Number
                                         generated in the Current Response
         5.1.11    adjRefId              It defines the Adjustment Reference Id which has
                                         been updated in the Current Response
         5.1.12    adjFlag               It defines the Adjustment Flag which has been
                                         updated in the Current Response
         5.1.13    adjCode               It defines the Adjustment Code which has been
                                         updated in the Current Response



16. Complaint API Sample Message Dumps
16.1. Raise Complaint - DRC
Payer raise a complaint to UPI
        <?xml version="1.0" encoding="UTF-8"?>
        <ns2:ReqComplaint
        xmlns:ns2="http://npci.org/upi/schema/">
        <Head msgId="PTMIN0114496eb15fa774cd18888aa0e248" orgId="159761"
        prodType="UPI" ts="2021-02-20T19:02:40+05:30" ver="2.0"/>
        <Txn custRef="105199974203" id="PTM5a6d0ab4e34544fab19dca35f755lij"
        initiationMode="U1" note="complain" orgRrn="105199974203" orgTxnDate="2021-
        02-20T18:59:49+05:30"
        orgTxnId="PTM5a6d0ab4e34544fab19dca35f75554a4" purpose="00"
        refCategory="00" refId="PTM5a6d0ab4e34544fab19dca35f75554a4"
        refUrl="http://www.paytm.com" subType="PAYER"
        ts="2021-02-20T19:02:40+05:30" type="COMPLAINT"/>
        <Complaint reqAdjAmount="14.00" reqAdjCode="U005" reqAdjFlag="PBRB"/>
        </ns2:ReqComplaint>

UPI sends the request to Remitter
        <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <ns2:ReqComplaint
        xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
        <Head       ver="2.0"      ts="2021-02-20T19:02:46+05:30" orgId="NPCI"
        msgId="5t0yaaWjrmTZAJjBdLo" prodType="UPI"/>
        <Txn        id="PTM5a6d0ab4e34544fab19dca35f755lij"note="complain"
        refId="PTM5a6d0ab4e34544fab19dca35f75554a4"
        refUrl="http://www.paytm.com"
        ts="2021-02-20T19:02:40+05:30"type="COMPLAINT"
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 77.1

| Tag | Tag Name | Purpose |
| --- | --- | --- |
| Numb |  |  |
| er |  |  |
| 4.1.4 | OrgSettRespCode | It defines the OrgRespCode which has been |
|  |  | updated in the Current Response. It will be having |
|  |  | the Settlement Response code currently available in |
|  |  | URCS system |
| 5.1.3 | Crn | It defines the Complaint Reference Number generated in the Current Response |
| 5.1.11 | adjRefId | It defines the Adjustment Reference Id which has |
|  |  | been updated in the Current Response |
| 5.1.12 | adjFlag | It defines the Adjustment Flag which has been updated in the Current Response |
| 5.1.13 | adjCode | It defines the Adjustment Code which has been |
|  |  | updated in the Current Response |

<!-- PAGE 78 -->
## PAGE 78

### Verbatim page text

```text
       orgTxnId="PTM5a6d0ab4e34544fab19dca35f75554a4" custRef="105199974203"
       orgTxnDate="2021-02-20T18:59:49+05:30" orgRrn="105199974203"
       initiationMode="U1" subType="REMITTER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U005" reqAdjAmount="14.00"
       orgSettRespCode="RR" currCycle="N"/>
       </ns2:ReqComplaint>

Remitter responds to UPI
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="XYD0000000000005t0yaaTz3NnVMsyDnW4" orgId="700004"
       prodType="UPI" ts="2021-01-08T10:49:39+05:30" ver="2.0"/>
       <Txn custRef="105199974203" id="PTM5a6d0ab4e34544fab19dca35f755lij"
       initiationMode="U1" note="complain" orgRrn="105199974203"
       orgTxnDate="2021-02-20T18:59:49+05:30"
       orgTxnId="PTM5a6d0ab4e34544fab19dca35f75554a4" purpose="00"
       refCategory="00" refId="PTM5a6d0ab4e34544fab19dca35f75554a4"
       refUrl="http://www.paytm.com" subType="REMITTER"
       ts="2021-02-20T19:02:40+05:30" type="COMPLAINT"/>
       <Complaint currCycle="Y" orgSettRespCode="00" reqAdjAmount="2.00"
       reqAdjCode="U009" reqAdjFlag="PBRB"/>
       <Resp reqMsgId="5t0yaaWjrmTZAJjBdLo" result="SUCCESS">
       <Ref IFSC="AABF0003002" acNum="300210100001299" addr="resh@upi"
       adjAmt="2.00" adjCode="102" adjFlag="DRC"
       adjRefId="P1705110000338829745321" adjRemarks="DRC Initiated"
       adjTs="2020-12-28T00:00:41+05:30" approvalNum="651725"
       procStatus="COMPLETED" seqNum="1" settCurrency="INR" type="REMITTER"/>
       </Resp>
       </ns2:RespComplaint>

UPI sends Final response to Payer PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
       <Head        ver="2.0"     ts="2021-02-20T19:02:46+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZAJkTmxW" prodType="UPI"/>
       <Txn         id="PTM5a6d0ab4e34544fab19dca35f755lij"note="complain"
       refId="PTM5a6d0ab4e34544fab19dca35f75554a4"
       refUrl="http://www.paytm.com" ts="2021-02-20T19:02:40+05:30"
       type="COMPLAINT" orgMsgId="PTMIN0114496eb15fa774cd18888aa0e248"
       orgTxnId="PTM5a6d0ab4e34544fab19dca35f75554a4"
       custRef="105199974203" orgTxnDate="2021-02-20T18:59:49+05:30"
       orgRrn="105199974203"
       initiationMode="U1" subType="PAYER" purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U005" reqAdjAmount="14.00"
       orgSettRespCode="RR" currCycle="N"/>
       <Resp reqMsgId="PTMIN0114496eb15fa774cd18888aa0e248"
       crn="UPI21022053596">
       <Ref         type="REMITTER" addr="resh@upi"           approvalNum="651725"
       IFSC="AABF0003002" adjAmt="2.00"
       adjTs="2020-12-28T00:00:41+05:30" adjRefId="P1705110000338829745321"
             adjFlag="DRC"
```
<!-- PAGE 79 -->
## PAGE 79

**Section context on this page:**
- 16.2. Raise Complaint – TCC

### Verbatim page text

```text
       adjCode="102" adjRemarks="DRC Initiated"/>
       </Resp>
       </ns2:RespComplaint>

UPI sends the Status update the Payee PSP

       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T19:02:46+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZAJkTmxV" prodType="UPI"/>
       <Txn id="PTM5a6d0ab4e34544fab19dca35f755lij" note="complain"
       refId="PTM5a6d0ab4e34544fab19dca35f75554a4" refUrl="http://www.paytm.com"
       ts="2021-02-20T19:02:40+05:30" type="STATUSUPDATE"
       orgMsgId="PTMIN0114496eb15fa774cd18888aa0e248"
       orgTxnId="PTM5a6d0ab4e34544fab19dca35f75554a4" custRef="105199974203"
       orgTxnDate="2021-02-20T18:59:49+05:30"          orgRrn="105199974203"
       initiationMode="U1" subType="PAYEE" purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U005" reqAdjAmount="14.00"
       orgSettRespCode="RR" currCycle="N"/>
       <Resp reqMsgId="PTMIN0114496eb15fa774cd18888aa0e248"
       crn="UPI21022053596">
       <Ref        type="REMITTER" addr="resh@upi"            approvalNum="651725"
       IFSC="AABF0003002" adjAmt="2.00"
       adjTs="2020-12-28T00:00:41+05:30" adjRefId="P1705110000338829745321"
       adjFlag="DRC"
       adjCode="102" adjRemarks="DRC Initiated"/>
       </Resp>
       </ns2:RespComplaint>


UPI Sends the Status Update to Beneficiary
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
       <Head       ver="2.0"      ts="2021-02-20T19:02:46+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZAJkTmxX" prodType="UPI"/>
       <Txn        id="PTM5a6d0ab4e34544fab19dca35f755lij"note="complain"
       refId="PTM5a6d0ab4e34544fab19dca35f75554a4"
       refUrl="http://www.paytm.com"
       ts="2021-02-20T19:02:40+05:30"type="STATUSUPDATE"
       orgMsgId="PTMIN0114496eb15fa774cd18888aa0e248"
       orgTxnId="PTM5a6d0ab4e34544fab19dca35f75554a4" custRef="105199974203"
       orgTxnDate="2021-02-20T18:59:49+05:30" orgRrn="105199974203"
       initiationMode="U1" subType="BENEFICIARY" purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U005" reqAdjAmount="14.00"
       orgSettRespCode="RR" currCycle="N"/>
       <Resp reqMsgId="PTMIN0114496eb15fa774cd18888aa0e248"
       crn="UPI21022053596">
       <Ref        type="REMITTER" addr="resh@upi"            approvalNum="651725"
       IFSC="AABF0003002" adjAmt="2.00"
       adjTs="2020-12-28T00:00:41+05:30" adjRefId="P1705110000338829745321"
       adjFlag="DRC" adjCode="102" adjRemarks="DRC Initiated"/>
```
<!-- PAGE 80 -->
## PAGE 80

### Verbatim page text

```text
       </Resp>
       </ns2:RespComplaint>

16.2. Raise Complaint – TCC
Payer raise a complaint to UPI
       <ns2:ReqComplaint
       xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN0114ba576e00849c3adb29d6c2cfbe" orgId="159761"
       prodType="UPI" ts="2021-02-20T17:11:15+05:30" ver="2.0"/>
       <Txn custRef="105199973904" id="PTM9a1ef7bfa7b64d84abc14d9a0d58e789"
       initiationMode="U1" note="complain" orgRrn="105199973904"
       orgTxnDate="2021-02-20T17:06:46+05:30"
       orgTxnId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784" purpose="00"
       refCategory="00" refId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"
       refUrl="http://www.paytm.com" subType="PAYER"
       ts="2021-02-20T17:11:15+05:30" type="COMPLAINT"/>
       <Complaint reqAdjAmount="30.00" reqAdjCode="U010" reqAdjFlag="PBRB"/>
       </ns2:ReqComplaint>

UPI sends the request to Beneficiary
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint
       xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
       <Head        ver="2.0"     ts="2021-02-20T17:11:21+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZoXEfcOz" prodType="UPI"/>
       <Txn         id="PTM9a1ef7bfa7b64d84abc14d9a0d58e789" note="complain"
       refId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"
       refUrl="http://www.paytm.com" ts="2021-02-20T17:11:15+05:30"
             type="COMPLAINT" orgTxnId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"
       custRef="105199973904" orgTxnDate="2021-02-20T17:06:46+05:30"
       orgRrn="105199973904"
       initiationMode="U1" subType="BENEFICIARY" purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U010" reqAdjAmount="30.00"
       orgSettRespCode="RB" currCycle="N"/>
       </ns2:ReqComplaint>

Beneficiary Responds to UPI with TCC
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="XYD0000000000005t0yaaTz3NnVAGTzSwj" orgId="700004"
       prodType="UPI" ts="2020-05-13T00:00:41+05:30" ver="2.0"/>
       <Txn custRef="105199973904" id="PTM9a1ef7bfa7b64d84abc14d9a0d58e789"
       initiationMode="U1" note="complain" orgRrn="105199973904"
       orgTxnDate="2021-02-20T17:06:46+05:30"
       orgTxnId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784" purpose="00"
       refCategory="00" refId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"
       refUrl="http://www.paytm.com" subType="BENEFICIARY" ts="2021-02-
       20T17:11:15+05:30" type="COMPLAINT"/>
       <Complaint currCycle="Y" orgSettRespCode="RB" reqAdjAmount="100.00"
       reqAdjCode="U010" reqAdjFlag="PBRB"/>
```
<!-- PAGE 81 -->
## PAGE 81

**Section context on this page:**
- 16.3. Raise Complaint – RET

### Verbatim page text

```text
       <Resp reqMsgId="5t0yaaWjrmTZoXEfcOz" result="SUCCESS">
       <Ref IFSC="AABF0003002" acNum="300210100001299" addr="resh@upi"
       adjAmt="13.00" adjCode="102" adjFlag="TCC"
       adjRefId="P1705110000338829745321"
       adjRemarks="Credit Reversal done online now" adjTs="2020-05-
       11T00:00:41+05:30" approvalNum="651725"
       procStatus="COMPLETED" seqNum="1" settCurrency="INR"
       type="BENEFICIARY"/>
       </Resp>
       </ns2:RespComplaint>



UPI sends the Final response to Payer PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
       <Head       ver="2.0"      ts="2021-02-20T17:11:22+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZoXFR4hA" prodType="UPI"/>
       <Txn        id="PTM9a1ef7bfa7b64d84abc14d9a0d58e789" note="complain"
       refId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"
       refUrl="http://www.paytm.com" ts="2021-02-20T17:11:15+05:30"
            type="STATUSUPDATE"
       orgMsgId="PTMIN0114ba576e00849c3adb29d6c2cfbe"
       orgTxnId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"custRef="105199973904"
       orgTxnDate="2021-02-20T17:06:46+05:30"
       orgRrn="105199973904" initiationMode="U1" subType="PAYER"
            purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U010" reqAdjAmount="30.00"
       orgSettRespCode="RB" currCycle="N"/>
       <Resp reqMsgId="PTMIN0114ba576e00849c3adb29d6c2cfbe"
       crn="UPI21022053584">
       <Ref        type="BENEFICIARY"addr="resh@upi"          approvalNum="651725"
       IFSC="AABF0003002" adjAmt="13.00"
       adjTs="2020-05-11T00:00:41+05:30" adjRefId="P1705110000338829745321"
       adjFlag="TCC" adjCode="102" adjRemarks="Credit Reversal done online now"/>
       </Resp>
       </ns2:RespComplaint>


UPI sends the Status Update to Payee PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
       <Head       ver="2.0"      ts="2021-02-20T17:11:22+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZoXFR4hA" prodType="UPI"/>
       <Txn        id="PTM9a1ef7bfa7b64d84abc14d9a0d58e789" note="complain"
       refId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"
       refUrl="http://www.paytm.com" ts="2021-02-20T17:11:15+05:30"
            type="STATUSUPDATE"
       orgMsgId="PTMIN0114ba576e00849c3adb29d6c2cfbe"
       orgTxnId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"custRef="105199973904"
       orgTxnDate="2021-02-20T17:06:46+05:30"
       orgRrn="105199973904" initiationMode="U1" subType="PAYEE"
```
<!-- PAGE 82 -->
## PAGE 82

### Verbatim page text

```text
                purpose="00" refCategory="00"/>
            <ComplaintreqAdjFlag="PBRB" reqAdjCode="U010" reqAdjAmount="30.00"
            orgSettRespCode="RB" currCycle="N"/>
            <Resp reqMsgId="PTMIN0114ba576e00849c3adb29d6c2cfbe"
            crn="UPI21022053584">
            <Ref      type="BENEFICIARY"addr="resh@upi"      approvalNum="651725"
            IFSC="AABF0003002" adjAmt="13.00"
            adjTs="2020-05-11T00:00:41+05:30" adjRefId="P1705110000338829745321"
            adjFlag="TCC" adjCode="102" adjRemarks="Credit Reversal done online now"/>
            </Resp>
            </ns2:RespComplaint>


 UPI sends the Status Update to Remitter
            <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
            <ns2:RespComplaint
            xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
            <Head       ver="2.0"     ts="2021-02-20T17:11:22+05:30" orgId="NPCI"
            msgId="5t0yaaWjrmTZoXFR4hA" prodType="UPI"/>
            <Txn        id="PTM9a1ef7bfa7b64d84abc14d9a0d58e789" note="complain"
            refId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"
            refUrl="http://www.paytm.com" ts="2021-02-20T17:11:15+05:30"
                 type="STATUSUPDATE"
            orgMsgId="PTMIN0114ba576e00849c3adb29d6c2cfbe"
            orgTxnId="PTM9a1ef7bfa7b64d84abc14d9a0d58e784"custRef="105199973904"
            orgTxnDate="2021-02-20T17:06:46+05:30"
            orgRrn="105199973904" initiationMode="U1" subType="REMITTER"
                 purpose="00" refCategory="00"/>
            <ComplaintreqAdjFlag="PBRB" reqAdjCode="U010" reqAdjAmount="30.00"
            orgSettRespCode="RB" currCycle="N"/>
            <Resp reqMsgId="PTMIN0114ba576e00849c3adb29d6c2cfbe"
            crn="UPI21022053584">
            <Ref        type="BENEFICIARY"           addr="resh@upi"
                 approvalNum="651725" IFSC="AABF0003002" adjAmt="13.00"
            adjTs="2020-05-11T00:00:41+05:30" adjRefId="P1705110000338829745321"
            adjFlag="TCC" adjCode="102" adjRemarks="Credit Reversal done online now"/>
            </Resp>
            </ns2:RespComplaint>


 16.3. Raise Complaint – RET
A lifecycle of a deemed transaction is illustrated below in which a complaint is raised by Payer
through PSP to UPI and UPI validates the request in URCS. Since it is a deemed transaction,
UPI forwards the request to Beneficiary. Beneficiary Bank issues RET and the so the request
is forwarded to Remitter Bank. Remitter’s final response is updated to URCS and the final
status informed to all other entities.


 Original Transaction Id:
 “YBL4a69d250abe6433899c2f5a081000033882” Original
 RRN: “013100747891”
```
<!-- PAGE 83 -->
## PAGE 83

### Verbatim page text

```text
 Payer raise a complaint to UPI
           <?xml version="1.0" encoding="UTF-8"?>
           <ns2:ReqComplaint
           xmlns:ns2="http://npci.org/upi/schema/">
           <Head msgId="1GRDpegBbA6a1M12uqW3" orgId="700001" prodType="UPI"
           ts="2021-02-22T14:43:28+05:30" ver="2.0"/>
           <Txn custRef="032320100028" id="MMM0000000000005t0ya2TDrPdehbBI5VK"
           initiationMode="U1" note="complain" orgRrn="105314960800" orgTxnDate="2021-
           02-22T14:40:46+05:30"
           orgTxnId="MMM0000000000005t0ya2TDrPdegTWA4vK" purpose="00"
           refCategory="00" refId="P1705110000338829715467"
           refUrl="http://www.npci.org.in/" subType="PAYER" ts="2020-11-
           18T20:01:51.891+05:30" type="COMPLAINT"/>
           <Complaint reqAdjAmount="5.70" reqAdjCode="U010" reqAdjFlag="PBRB"/>
           </ns2:ReqComplaint>


Note : UPI will provoide the ACK with complaint number (crn) .


ACK Format : <upi:Ack xmlns:upi="" api="" reqMsgId="" errCode="" ts="" crn =””/>



 UPI sends the request to URCS
 UPI will send the request to URCS with crn number and URCS checks the last updated status
 of the transaction. If status has not been updated even after auto -update, UPI will initiate the
 ReqComplaint to the Beneficiary bank.

 UPI sends the request to Beneficiary
 (Assuming it is deemed transaction- Based on the update from URCS)


           <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
           <ns2:ReqComplaint
           xmlns:ns2="http://npci.org/upi/schema/"
           xmlns:ns3="http://npci.org/cm/schema/">
           <Head ver="2.0" ts="2021-02-22T14:44:01+05:30" orgId="NPCI"
           msgId="5t0yaaWjrmU43CBCnII" prodType="UPI"/>
           <Txnid="MMM0000000000005t0ya2TDrPdehbBI5VK" note="complain"
           refId="P1705110000338829715467" refUrl="http://www.npci.org.in/"
           ts="2020-11-18T20:01:51.891+05:30" type="COMPLAINT"
           orgTxnId="MMM0000000000005t0ya2TDrPdegTWA4vK"
           custRef="032320100028" orgTxnDate="2021-02-22T14:40:46+05:30"
                orgRrn="105314960800"
           initiationMode="U1" subType="BENEFICIARY" purpose="00"
           refCategory="00"/>
           <Complaint reqAdjFlag="PBRB" reqAdjCode="U010" reqAdjAmount="5.70"
           orgSettRespCode="RB" currCycle="N"/>
           </ns2:ReqComplaint>

 Beneficiary Responds to UPI
 (Bene issues RET)
```
<!-- PAGE 84 -->
## PAGE 84

### Verbatim page text

```text
         <?xml version="1.0" encoding="UTF-8"?>
         <ns2:RespComplaint
         xmlns:ns2="http://npci.org/upi/schema/">
         <Head msgId="PTMIN0114187263d8b9208ea80d9812cc1c" orgId="159761"
         prodType="UPI" ts="2021-02-22T14:43:55+05:30" ver="2.0"/>
         <Txn custRef="105314960800" id="MMM0000000000005t0ya2TDrPdehbBI5VK"
         initiationMode="U1" note="complain" orgMsgId="5t0yaaWjrmU43CBCnII"
         orgRrn="105314960800" orgTxnId="MMM0000000000005t0ya2TDrPdegTWA4vK"
         purpose="00" refCategory="00" refId="P1705110000338829715467"
         refUrl="http://www.npci.org.in/" subType="BENEFICIARY"
         ts="2021-02-22T14:43:55+05:30" type="COMPLAINT"/>
         <Complaint currCycle="N" orgSettRespCode="RB" reqAdjAmount="5.70"
         reqAdjCode="U010" reqAdjFlag="PBRB"/>
         <Resp Result="FAILURE" reqMsgId="5t0yaaWjrmU43CBCnII">
         <Ref IFSC="PYTM0123456" acNum="919999161601" accType="SAVINGS"
         addr="8929142805@paytm" adjAmt="5.70" adjCode="115" adjFlag="RET"
         adjRefId="PTM38899977839"
         adjRemarks="RET will be initiated for deemed txn in AutoUpdate."
         approvalNum="977839" code="0000" regName="PRATEEK SRIVASTAVA"
         seqNum="1" settCurrency="INR" type="BENEFICIARY"
         procStatus="COMPLETED"/>
         </Resp>
         </ns2:RespComplaint>



UPI Sends the Request to Remitter
(Since Bene issued RET)


         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:ReqComplaint
         xmlns:ns2="http://npci.org/upi/schema/" xmlns:ns3="http://npci.org/cm/schema/">
         <Head ver="2.0" ts="2021-02-22T14:44:02+05:30"         orgId="NPCI"
         msgId="5t0yaaWjrmU43CCOehH" prodType="UPI"/>
         <Txn id="MMM0000000000005t0ya2TDrPdehbBI5VK" note="complain"
         refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-11-
         18T20:01:51.891+05:30" type="REVERSAL"
         orgTxnId="MMM0000000000005t0ya2TDrPdegTWA4vK" custRef="032320100028"
         orgTxnDate="2021-02-22T14:40:46+05:30" orgRrn="105314960800"
         initiationMode="U1" subType="REMITTER" purpose="00" refCategory="00"/>
         <Complaint reqAdjFlag="RET" reqAdjCode="115" reqAdjAmount="5.70"
         orgSettRespCode="RB" currCycle="N"/>
         </ns2:ReqComplaint>


Remitter Responds to UPI
(Since Bene issued RET)
         <?xml version="1.0" encoding="UTF-8"?>
         <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/">
         <Head msgId="PTMIN0114b4bd0aab9bdcf8cbe4de39a2fd" orgId="159761"
         prodType="UPI" ts="2021-02-22T14:43:55+05:30" ver="2.0"/> <Txn
         custRef="105314960800" id="MMM0000000000005t0ya2TDrPdehbBI5VK"
```
<!-- PAGE 85 -->
## PAGE 85

**Section context on this page:**
- 16.4. ReqComplaint (Pre Approved Online Refund – RRC 501)

### Verbatim page text

```text
       initiationMode="U1" note="complain" orgMsgId="5t0yaaWjrmU43CCOehH"
       orgRrn="105314960800" orgTxnDate="2021-02-22T14:40:46+05:30"
       orgTxnId="MMM0000000000005t0ya2TDrPdegTWA4vK" purpose="00"
       refCategory="00" refId="P1705110000338829715467"
       refUrl="http://www.npci.org.in/" subType="REMITTER" ts="2020-11-
       18T20:01:51.891+05:30" type="REVERSAL"/> <Complaint currCycle="N"
       orgSettRespCode="RB" reqAdjAmount="5.70" reqAdjCode="115"
       reqAdjFlag="RET"/>
       <Resp Result="SUCCESS" reqMsgId="5t0yaaWjrmU43CCOehH"> <Ref
       IFSC="PYTM0123456" acNum="917417356866" addr="test@mypsp"
       adjAmt="5.70" adjCode="501" adjFlag="RRC"
       adjRefId="PTM38899977839" adjRemarks="Remitter Response." adjTs="2021-
       02-22T14:40:46+05:30" approvalNum="977839" code="0000"
       procStatus="COMPLETED" regName="Ram" seqNum="1" type="REMITTER"/>
       </Resp></ns2:RespComplaint>

UPI sends the final response to Payer PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head        ver="2.0" ts="2021-02-22T14:44:02+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmU43CDQQwP" prodType="UPI"/> <Txn
       id="MMM0000000000005t0ya2TDrPdehbBI5VK" note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-11-
       18T20:01:51.891+05:30" type="COMPLAINT"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPdegTWA4vK"
             custRef="032320100028" orgTxnDate="2021-02-22T14:40:46+05:30"
       orgRrn="105314960800"
       initiationMode="U1" subType="PAYER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U010" reqAdjAmount="5.70"
       orgSettRespCode="RB" currCycle="N"/>
       <Resp reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022279709">
       <Ref type="BENEFICIARY" addr="8929142805@paytm" approvalNum="977839"
       IFSC="PYTM0123456"accType="SAVINGS" adjAmt="5.70"
             adjRefId="PTM38899977839" adjFlag="RET" adjCode="115"
       adjRemarks="RET will be initiated for deemed txn in AutoUpdate."/>
       <Ref type="REMITTER" addr="test@mypsp" approvalNum="977839"
       IFSC="PYTM0123456" adjAmt="5.70" adjTs="2021-02-22T14:40:46+05:30"
       adjRefId="PTM38899977839"adjFlag="RRC" adjCode="501"
             adjRemarks="Remitter Response."/>
       </Resp></ns2:RespComplaint>

UPI sends the Status Update to Payee PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head      ver="2.0"      ts="2021-02-22T14:44:02+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmU43CDQQwO" prodType="UPI"/> <Txn
       id="MMM0000000000005t0ya2TDrPdehbBI5VK"             note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-11-
       18T20:01:51.891+05:30" type="STATUSUPDATE"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
```
<!-- PAGE 86 -->
## PAGE 86

### Verbatim page text

```text
       orgTxnId="MMM0000000000005t0ya2TDrPdegTWA4vK"
       custRef="032320100028" orgTxnDate="2021-02-22T14:40:46+05:30"
           orgRrn="105314960800" initiationMode="U1" subType="PAYEE"
       purpose="00" refCategory="00"/> <Complaint reqAdjFlag="PBRB"
       reqAdjCode="U010" reqAdjAmount="5.70" orgSettRespCode="RB"
       currCycle="N"/> <Resp reqMsgId="1GRDpegBbA6a1M12uqW3"
       crn="UPI21022279709"> <Ref type="BENEFICIARY"
       addr="8929142805@paytm" approvalNum="977839" IFSC="PYTM0123456"
       accType="SAVINGS" adjAmt="5.70" adjRefId="PTM38899977839"
       adjFlag="RET" adjCode="115" adjRemarks="RET will be initiated for deemed txn
       in AutoUpdate."/> <Ref type="REMITTER" addr="test@mypsp"
           approvalNum="977839" IFSC="PYTM0123456" adjAmt="5.70" adjTs="2021-
       02-22T14:40:46+05:30" adjRefId="PTM38899977839"adjFlag="RRC"
       adjCode="501"     adjRemarks="Remitter Response."/>
       </Resp>
       </ns2:RespComplaint>



16.4. ReqComplaint (Pre Approved Online Refund – RRC 501)
Beneficiary raise a Refund Request to UPI
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN011411c4bffcae88318b0dd22f7972" orgId="159761"
       prodType="UPI" ts="2021-02-20T11:49:49+05:30" ver="2.0"/>
       <Txn custRef="105111366009" id="PTM0662ec43548044f38eb64369f0acGFRI"
       initiationMode="U2" note="complain" orgRrn="105111366009" orgTxnDate="2021-
       02-20T11:43:03+05:30" orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       purpose="00" refCategory="00"
       refId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       refUrl="http://www.paytm.com" subType="BENEFICIARY" ts="2021-02-
       20T11:49:49+05:30" type="REFUND"/>
       <Complaint reqAdjAmount="13.00" reqAdjCode="1064" reqAdjFlag="REF">
       <Creds>
       <Cred subType="NA" type="PreApproved">
       <Data code="NPCI">MDB8OTczMDg0</Data></Cred> </Creds>
       </Complaint>
       </ns2:ReqComplaint>

UPI sends the Refund request to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/"> <Headver="2.0" ts="2021-02-
       20T11:49:56+05:30"         orgId="NPCI" msgId="5t0yaaWjrmTYR0vRRWE"
       prodType="UPI"/>
       <Txnid="PTM0662ec43548044f38eb64369f0acGFRI" note="complain"
       refId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       refUrl="http://www.paytm.com" ts="2021-02-20T11:49:49+05:30" type="REFUND"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra" custRef="105111366009"
       orgTxnDate="2021-02-20T11:43:03+05:30" orgRrn="105111366009"
       initiationMode="U2" subType="REMITTER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
```
<!-- PAGE 87 -->
## PAGE 87

**Section context on this page:**
- 16.5. ReqComplaint (Pre Approved Online Refund Timeout – RRC 502)

### Verbatim page text

```text
       orgSettRespCode="00" currCycle="N"/>
       </ns2:ReqComplaint>undefined</ns2:ReqComplaint>

Remitter sends the reponse for the reversal
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN011424ccb1fc5fcef2f86eefb4410b" orgId="159761"
       prodType="UPI" ts="2021-02-20T11:49:49+05:30" ver="2.0"/>
       <Txn custRef="105111366009" id="PTM0662ec43548044f38eb64369f0acGFRI"
       initiationMode="U2" note="complain" orgMsgId="5t0yaaWjrmTYR0vRRWE"
       orgRrn="105111366009" orgTxnDate="2021-02-20T11:43:03+05:30"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra" purpose="00"
       refCategory="00" refId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       refUrl="http://www.paytm.com" subType="REMITTER" ts="2021-02-
       20T11:49:49+05:30" type="REFUND"/>
       <Complaint currCycle="N" orgSettRespCode="00" reqAdjAmount="13.00"
       reqAdjCode="1064" reqAdjFlag="REF"/>
       <Resp Result="SUCCESS" reqMsgId="5t0yaaWjrmTYR0vRRWE"> <Ref
       IFSC="PYTM0123456" acNum="917417356866" addr="test@mypsp"
       adjAmt="13.00" adjCode="501" adjFlag="RRC"
       adjRefId="PTM38899973101" adjRemarks="Remitter Response." adjTs="2021-
       02-20T11:43:03+05:30" approvalNum="973101" code="0000"
       procStatus="COMPLETED" regName="Ram" seqNum="1" type="REMITTER"/>
       </Resp></ns2:RespComplaint>

UPI sends the final Response to Beneficiary
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/"> <Headver="2.0” ts="2021-02-
       20T11:49:56+05:30"         orgId="NPCI" msgId="5t0yaaWjrmTYR0wUUcH"
       prodType="UPI"/>
       <Txn        id="PTM0662ec43548044f38eb64369f0acGFRI" note="complain"
       refId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       refUrl="http://www.paytm.com" ts="2021-02-20T11:49:49+05:30" type="REFUND"
       orgMsgId="PTMIN011411c4bffcae88318b0dd22f7972"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra" custRef="105111366009"
       orgTxnDate="2021-02-20T11:43:03+05:30"        orgRrn="105111366009"
       initiationMode="U2"
       subType="BENEFICIARY" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="PTMIN011411c4bffcae88318b0dd22f7972"
       crn="UPI21022080043">
       <Ref type="REMITTER" addr="test@mypsp" approvalNum="973101"
       IFSC="PYTM0123456" adjAmt="13.00" adjTs="2021-02-20T11:43:03+05:30"
       adjRefId="PTM38899973101" adjFlag="RRC" adjCode="501"
       adjRemarks="Remitter Response."/>
       </Resp> </ns2:RespComplaint>

UPI sends the StatusUpdate to Payer
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/"> <Headver="2.0"     ts="2021-02-
       20T11:49:56+05:30"         orgId="NPCI" msgId="5t0yaaWjrmTYR0wUUcG"
```
<!-- PAGE 88 -->
## PAGE 88

### Verbatim page text

```text
       prodType="UPI"/>
       <Txn id="PTM0662ec43548044f38eb64369f0acGFRI" note="complain"
       refId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       refUrl="http://www.paytm.com"
       ts="2021-02-20T11:49:49+05:30" type="STATUSUPDATE"
       orgMsgId="PTMIN011411c4bffcae88318b0dd22f7972"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"custRef="105111366009"
       orgTxnDate="2021-02-20T11:43:03+05:30" orgRrn="105111366009"
       initiationMode="U2" subType="PAYER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/> <Resp
       reqMsgId="PTMIN011411c4bffcae88318b0dd22f7972" crn="UPI21022080043">
       <Ref type="REMITTER" addr="test@mypsp" approvalNum="973101"
       IFSC="PYTM0123456" adjAmt="13.00" adjTs="2021-02-20T11:43:03+05:30"
       adjRefId="PTM38899973101" adjFlag="RRC" adjCode="501"
       adjRemarks="Remitter Response."/>
       </Resp> </ns2:RespComplaint>



UPI sends the StatusUpdate to Payee
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaintxmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/"> <Headver="2.0"    ts="2021-02-
       20T11:49:56+05:30"         orgId="NPCI" msgId="5t0yaaWjrmTYR0wUUcG"
       prodType="UPI"/>
       <Txn id="PTM0662ec43548044f38eb64369f0acGFRI" note="complain"
       refId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       refUrl="http://www.paytm.com" ts="2021-02 20T11:49:49+05:30"
             type="STATUSUPDATE"
       orgMsgId="PTMIN011411c4bffcae88318b0dd22f7972"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra" custRef="105111366009"
       orgTxnDate="2021-02-20T11:43:03+05:30" orgRrn="105111366009"
       initiationMode="U2" subType="PAYEE" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="RB" currCycle="N"/> <Resp
       reqMsgId="PTMIN011411c4bffcae88318b0dd22f7972" crn="UPI21022080043">
       <Ref type="REMITTER" addr="test@mypsp" approvalNum="973101"
       IFSC="PYTM0123456" adjAmt="13.00" adjTs="2021-02-20T11:43:03+05:30"
       adjRefId="PTM38899973101" adjFlag="RRC" adjCode="501"
       adjRemarks="Remitter Response."/>
       </Resp> </ns2:RespComplaint>




16.5. ReqComplaint (Pre Approved Online Refund Timeout – RRC 502)
Beneficiary raise a Refund Request to UPI
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN0114d9afc9400ad81cab3810bd7401" orgId="159761"
       prodType="UPI" ts="2021-02-24T10:57:22+05:30" ver="2.0"/> <Txn
       custRef="105510468558" id="PTM0662ec43548044f38eb64369f0ujiki"
```
<!-- PAGE 89 -->
## PAGE 89

### Verbatim page text

```text
       initiationMode="U1" note="cbstimeout" orgRrn="105510468558"
       orgTxnDate="2021-02-24T10:48:59+05:30"
       orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew"purpose="00"
       refCategory="00" refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com" subType="BENEFICIARY" ts="2021-02-
       24T10:57:22+05:30" type="REFUND"/>
       <Complaint reqAdjAmount="13.00" reqAdjCode="1064"
       reqAdjFlag="REF"><Creds>
       <Cred subType="NA" type="PreApproved"> <Data
       code="NPCI">MDB8OTgxMzQ3</Data>
       </Cred>
       </Creds></Complaint></ns2:ReqComplaint>

UPI sends the Refund request to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head         ver="2.0"   ts="2021-02-24T10:57:28+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmU8zUKeKx4" prodType="UPI"/> <Txn
       id="PTM0662ec43548044f38eb64369f0ujiki" note="cbstimeout"
       refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com" ts="2021-02-24T10:57:22+05:30" type="REFUND"
       orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew" custRef="105510468558"
       orgTxnDate="2021-02-24T10:48:59+05:30" orgRrn="105510468558"
            initiationMode="U1" subType="REMITTER"purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="REF" reqAdjCode="1064"        reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       </ns2:ReqComplaint>

UPI sends the CheckStatus 1 request to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-24T10:57:58+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmU8zY2si9u" prodType="UPI"/> <Txn
       id="PTM0662ec43548044f38eb64369f0ujiki" note="cbstimeout"
       refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com" ts="2021-02-24T10:57:22+05:30"
            type="CHKSTATUS" orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       custRef="105510468558" orgTxnDate="2021-02-24T10:48:59+05:30"
       orgRrn="105510468558" initiationMode="U1"
       subType="REMITTER" purpose="00" refCategory="00"/> <Complaint
       reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       </ns2:ReqComplaint>

UPI sends the CheckStatus 2 request to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/"> <Headver="2.0"      ts="2021-02-
       24T10:58:29+05:30"         orgId="NPCI" msgId="5t0yaaWjrmU8A1kEzJs"
       prodType="UPI"/>
       <Txn id="PTM0662ec43548044f38eb64369f0ujiki"         note="cbstimeout"
```
<!-- PAGE 90 -->
## PAGE 90

**Section context on this page:**
- 16.6. ReqComplaint – P2M Complaint – PR2C 105

### Verbatim page text

```text
       refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com" ts="2021-02-24T10:57:22+05:30"
       type="CHKSTATUS" orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       custRef="105510468558" orgTxnDate="2021-02-24T10:48:59+05:30"
       orgRrn="105510468558" initiationMode="U1" subType="REMITTER"
       purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       </ns2:ReqComplaint>

UPI sends the CheckStatus 3 request to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-24T10:58:59+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmU8A4CbjRZ" prodType="UPI"/>
       <Txnid="PTM0662ec43548044f38eb64369f0ujiki"         note="cbstimeout"
       refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com" ts="2021-02-24T10:57:22+05:30"
       type="CHKSTATUS" orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       custRef="105510468558" orgTxnDate="2021-02-24T10:48:59+05:30"
       orgRrn="105510468558" initiationMode="U1" subType="REMITTER"
       purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/> </ns2:ReqComplaint>

UPI updates the Status to Payer PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-24T10:59:29+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmU8A7TGnX0" prodType="UPI"/>
       <Txnid="PTM0662ec43548044f38eb64369f0ujiki" note="cbstimeout"
       refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com"
       ts="2021-02-24T10:57:22+05:30" type="STATUSUPDATE"
       orgMsgId="PTMIN0114d9afc9400ad81cab3810bd7401"
       orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew" custRef="105510468558"
       orgTxnDate="2021-02-24T10:48:59+05:30" orgRrn="105510468558"
       initiationMode="U1" subType="PAYER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="PTMIN0114d9afc9400ad81cab3810bd7401"
       crn="UPI21022433801">
       <Ref type="REMITTER" adjFlag="RRC" adjCode="502"/>
       </Resp> </ns2:RespComplaint>

UPI updates the Status to Payee PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaintxmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/"> <Head       ver="2.0" ts="2021-
       02-24T10:59:29+05:30" orgId="NPCI" msgId="5t0yaaWjrmU8A7TGnWZ"
       prodType="UPI"/>
```
<!-- PAGE 91 -->
## PAGE 91

### Verbatim page text

```text
       <Txn id="PTM0662ec43548044f38eb64369f0ujiki"note="cbstimeout"
       refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com"
       ts="2021-02-24T10:57:22+05:30" type="STATUSUPDATE"
       orgMsgId="PTMIN0114d9afc9400ad81cab3810bd7401"
       orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew" custRef="105510468558"
       orgTxnDate="2021-02-24T10:48:59+05:30" orgRrn="105510468558"
       initiationMode="U1" subType="PAYEE" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="PTMIN0114d9afc9400ad81cab3810bd7401"
       crn="UPI21022433801">
       <Ref type="REMITTER" adjFlag="RRC" adjCode="502"/>
       </Resp> </ns2:RespComplaint>

UPI updates the Final Status to Beneficiary
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-24T10:59:29+05:30"orgId="NPCI"
       msgId="5t0yaaWjrmU8A7TGnX1" prodType="UPI"/>
       <Txn id="PTM0662ec43548044f38eb64369f0ujiki" note="cbstimeout"
       refId="MMM0000000000005t0ya2TDrPdiMAPDpew"
       refUrl="http://www.paytm.com" ts="2021-02-24T10:57:22+05:30"
            type="REFUND" orgMsgId="PTMIN0114d9afc9400ad81cab3810bd7401"
       orgTxnId="MMM0000000000005t0ya2TDrPdiMAPDpew" custRef="105510468558"
       orgTxnDate="2021-02-24T10:48:59+05:30" orgRrn="105510468558"
       initiationMode="U1" subType="BENEFICIARY" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="REF" reqAdjCode="1064" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="PTMIN0114d9afc9400ad81cab3810bd7401"
       crn="UPI21022433801"> <Ref type="REMITTER" adjFlag="RRC" adjCode="502"/>
       </Resp></ns2:RespComplaint>


16.6. ReqComplaint – P2M Complaint – PR2C 105
Payer raise a complaint to UPI
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="1GRDpegBbA6a1M12uqW3" orgId="700001" prodType="UPI"
       ts="2021-02-20T18:24:44+05:30" ver="2.0"/>
       <Txn custRef="032320100028" id="MMM0000000000005t0ya2TDrPd9KkUZwnm"
       initiationMode="U1" note="complain" orgRrn="105118417074" orgTxnDate="2021-
       02-20T18:18:30+05:30" orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y"
       purpose="00" refCategory="00" refId="P1705110000338829715467"
       refUrl="http://www.npci.org.in/" subType="PAYER" ts="2020-11-
       18T20:01:51.891+05:30" type="COMPLAINT"/>
       <Complaint reqAdjAmount="53.00" reqAdjCode="U008" reqAdjFlag="PBRB"/>
       </ns2:ReqComplaint>
```
<!-- PAGE 92 -->
## PAGE 92

### Verbatim page text

```text
UPI sends the request to Payee
(Assuming it is P2M transaction Success Transaction for which Goods not Delivered - Based
on the update from URCS)
         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
         xmlns:ns3="http://npci.org/cm/schema/">
         <Head      ver="2.0"     ts="2021-02-20T18:25:17+05:30"  orgId="NPCI"
         msgId="5t0yaaWjrmTZwLQwPAa" prodType="UPI"/> <Txn
         id="MMM0000000000005t0ya2TDrPd9KkUZwnm" note="complain"
         refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
         11-18T20:01:51.891+05:30" type="COMPLAINT"
         orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y" custRef="032320100028"
         orgTxnDate="2021-02-20T18:18:30+05:30" orgRrn="105118417074"
         initiationMode="U1" subType="PAYEE" purpose="00" refCategory="00"/>
         <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="53.00"
         orgSettRespCode="RB" currCycle="N"/>
         </ns2:ReqComplaint>

Payee Responds to UPI
         <?xml version="1.0" encoding="UTF-8"?>
         <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/">
         <Head msgId="PTMIN011488db9032dbe35b2a386c5228d2" orgId="159761"
         prodType="UPI" ts="2021-02-20T18:25:11+05:30" ver="2.0"/> <Txn
         custRef="105118417074" id="MMM0000000000005t0ya2TDrPd9KkUZwnm"
         initiationMode="U1" note="complain" orgMsgId="5t0yaaWjrmTZwLQwPAa"
         orgRrn="105118417074" orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y"
         purpose="00" refCategory="00" refId="P1705110000338829715467"
         refUrl="http://www.npci.org.in/" subType="PAYEE"
         ts="2021-02-20T18:25:11+05:30" type="COMPLAINT"/> <Complaint currCycle="N"
         orgSettRespCode="RB" reqAdjAmount="53.00" reqAdjCode="U008"
         reqAdjFlag="PBRB"/>
         <Resp Result="SUCCESS" reqMsgId="5t0yaaWjrmTZwLQwPAa"> <Ref
         IFSC="PYTM0123456" acNum="19744201000007" accType="CURRENT"
         addr="Anjali@paytm" adjAmt="53.00" adjCode="105" adjFlag="PR2C"
         adjRefId="PTM38899974118" adjRemarks="Debit reversal was done online for
         AutoUpdate." procStatus="COMPLETED" approvalNum="974118" code="7221"
         regName=" test merchant " seqNum="1" settCurrency="INR" type="PAYEE"/>
         </Resp></ns2:RespComplaint>

UPI sends the final response to Payer PSP
         <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
         xmlns:ns3="http://npci.org/cm/schema/">
         <Head      ver="2.0" ts="2021-02-20T18:25:18+05:30" orgId="NPCI"
         msgId="5t0yaaWjrmTZwLShVn3" prodType="UPI"/> <Txn
         id="MMM0000000000005t0ya2TDrPd9KkUZwnm" note="complain"
         refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
         11-18T20:01:51.891+05:30" type="COMPLAINT"
         orgMsgId="1GRDpegBbA6a1M12uqW3"
         orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y" custRef="032320100028"
         orgTxnDate="2021-02-20T18:18:30+05:30" orgRrn="105118417074"
```
<!-- PAGE 93 -->
## PAGE 93

**Section context on this page:**
- 16.7. ReqComplaint – P2M Complaint – PR2C 106

### Verbatim page text

```text
           initiationMode="U1" subType="PAYER" purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="53.00"
       orgSettRespCode="RB" currCycle="N"/>
       <Resp reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022053594">
       <Ref        type="PAYEE" addr="Anjali@paytm"approvalNum="974118"
       IFSC="PYTM0123456" accType="CURRENT" adjAmt="53.00"
       adjRefId="PTM38899974118" adjFlag="PR2C" adjCode="105" adjRemarks="Debit
       reversal was done online for AutoUpdate."/>
       </Resp> </ns2:RespComplaint>

UPI sends the Status update to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T18:25:18+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZwLShVn4" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd9KkUZwnm" note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30" type="STATUSUPDATE"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y" custRef="032320100028"
       orgTxnDate="2021-02-20T18:18:30+05:30" orgRrn="105118417074"
       initiationMode="U1" subType="REMITTER" purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U008"        reqAdjAmount="53.00"
       orgSettRespCode="RB" currCycle="N"/> <Resp
       reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022053594">
       <Ref type="PAYEE"addr="Anjali@paytm"approvalNum="974118"
       IFSC="PYTM0123456" accType="CURRENT" adjAmt="53.00"
       adjRefId="PTM38899974118" adjFlag="PR2C" adjCode="105" adjRemarks="Debit
       reversal was done online for AutoUpdate."/>
       </Resp> </ns2:RespComplaint>

UPI sends the Status update to Beneficiary
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T18:25:18+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZwLShVn5" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd9KkUZwnm" note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30"
       type="STATUSUPDATE"orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y" custRef="032320100028"
       orgTxnDate="2021-02-20T18:18:30+05:30" orgRrn="105118417074"
       initiationMode="U1" subType="BENEFICIARY" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="53.00"
       orgSettRespCode="RB" currCycle="N"/>
       <Resp reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022053594">
       <Ref       type="PAYEE" addr="Anjali@paytm"approvalNum="974118"
       IFSC="PYTM0123456" accType="CURRENT" adjAmt="53.00"
       adjRefId="PTM38899974118" adjFlag="PR2C" adjCode="105" adjRemarks="Debit
       reversal was done online for AutoUpdate."/>
       </Resp> </ns2:RespComplaint>
```
<!-- PAGE 94 -->
## PAGE 94

### Verbatim page text

```text
16.7. ReqComplaint – P2M Complaint – PR2C 106
Payer raise a complaint to UPI
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="1GRDpegBbA6a1M12uqW3" orgId="700001" prodType="UPI"
       ts="2021-02-20T18:24:44+05:30" ver="2.0"/>
       <Txn custRef="032320100028" id="MMM0000000000005t0ya2TDrPd9KkUZwnm"
       initiationMode="U1" note="complain" orgRrn="105118417074" orgTxnDate="2021-
       02-20T18:18:30+05:30" orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y"
       purpose="00" refCategory="00" refId="P1705110000338829715467"
       refUrl="http://www.npci.org.in/" subType="PAYER" ts="2020-11-
       18T20:01:51.891+05:30" type="COMPLAINT"/>
       <Complaint reqAdjAmount="53.00" reqAdjCode="U008" reqAdjFlag="PBRB"/>
       </ns2:ReqComplaint>

UPI sends the request to Payee
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T18:25:17+05:30"      orgId="NPCI"
       msgId="5t0yaaWjrmTZwLQwPAa" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd9KkUZwnm" note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30" type="COMPLAINT"
       orgTxnId="MMM0000000000005t0ya2TDrPd9JG47K1y" custRef="032320100028"
       orgTxnDate="2021-02-20T18:18:30+05:30" orgRrn="105118417074"
       initiationMode="U1" subType="PAYEE" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="53.00"
       orgSettRespCode="RB" currCycle="N"/> </ns2:ReqComplaint>

Payee Responds to UPI
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="PTMIN0114dce7272f38669638f425b390a9" orgId="159761"
       prodType="UPI" ts="2021-02-20T11:46:24+05:30" ver="2.0"/> <Txn
       custRef="105111366009" id="MMM0000000000005t0ya2TDrPd94d9Lj2w"
       initiationMode="U1" note="complain" orgMsgId="5t0yaaWjrmTYQE5w4W1"
       orgRrn="105111366009" orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra"
       purpose="00" refCategory="00" refId="P1705110000338829715467"
       refUrl="http://www.npci.org.in/" subType="PAYEE"
       ts="2021-02-20T11:46:24+05:30" type="COMPLAINT"/>
       <Complaint currCycle="N" orgSettRespCode="00" reqAdjAmount="13.00"
       reqAdjCode="U008" reqAdjFlag="PBRB"/>
       <Resp Result="FAILURE" reqMsgId="5t0yaaWjrmTYQE5w4W1">
       <Ref IFSC="PYTM0123456" acNum="19744201000007" accType="CURRENT"
       addr="Anjali@paytm" adjAmt="13.00" adjCode="106" adjFlag="PR2C"
       adjRefId="PTM38899973092" adjRemarks="Goods and services not delieverd"
       approvalNum="973092" code="7221" regName=" test merchant " seqNum="1"
       settCurrency="INR" type="PAYEE"/>
       </Resp></ns2:RespComplaint>
```
<!-- PAGE 95 -->
## PAGE 95

### Verbatim page text

```text
UPI sends the final response to Payer PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head       ver="2.0" ts="2021-02-20T11:46:30+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTYQE7gkHa" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd94d9Lj2w"          note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30" type="COMPLAINT"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra" custRef="032320100028"
       orgTxnDate="2021-02-20T11:42:37+05:30" orgRrn="105111366009"
           initiationMode="U1" subType="PAYER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008” reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022080042">
       <Ref type="PAYEE" addr="Anjali@paytm" approvalNum="973092"
       IFSC="PYTM0123456" accType="CURRENT" adjAmt="13.00"
       adjRefId="PTM38899973092" adjFlag="PR2C" adjCode="106" adjRemarks="Goods
       and services not delieverd"/>
       </Resp> </ns2:RespComplaint>

UPI sends the Status update to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head      ver="2.0"     ts="2021-02-20T11:46:30+05:30"     orgId="NPCI"
       msgId="5t0yaaWjrmTYQE7gkHb" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd94d9Lj2w"         note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30"       type="STATUSUPDATE"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra" custRef="032320100028"
       orgTxnDate="2021-02-20T11:42:37+05:30" orgRrn="105111366009"
       initiationMode="U1" subType="REMITTER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022080042">
       <Ref       type="PAYEE" addr="Anjali@paytm"approvalNum="973092"
       IFSC="PYTM0123456" accType="CURRENT" adjAmt="13.00"
       adjRefId="PTM38899973092" adjFlag="PR2C" adjCode="106" adjRemarks="Goods
       and services not delieverd"/>
       </Resp> </ns2:RespComplaint>

UPI sends the Status update to Beneficiary
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T11:46:30+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTYQE7gkHc" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd94d9Lj2w" note="complain"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
```
<!-- PAGE 96 -->
## PAGE 96

### Verbatim page text

```text
       11-18T20:01:51.891+05:30" type="STATUSUPDATE"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd93Rgh2Ra" custRef="032320100028"
       orgTxnDate="2021-02-20T11:42:37+05:30" orgRrn="105111366009"
       initiationMode="U1" subType="BENEFICIARY" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022080042"> <Ref
       type="PAYEE" addr="Anjali@paytm"     approvalNum="973092"
       IFSC="PYTM0123456" accType="CURRENT" adjAmt="13.00"
       adjRefId="PTM38899973092" adjFlag="PR2C" adjCode="106" adjRemarks="Goods
       and services not delieverd"/>
       </Resp> </ns2:RespComplaint>


        15.1ReqComplaint – P2M Complaint – Payee Timeout (PTO)

Payer raise a complaint to UPI
       <?xml version="1.0" encoding="UTF-8"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/">
       <Head msgId="1GRDpegBbA6a1M12uqW3" orgId="700001" prodType="UPI"
       ts="2021-02-20T19:57:44+05:30" ver="2.0"/>
       <Txn custRef="032320100028" id="MMM0000000000005t0ya2TDrPd9U9Xo4UM"
       initiationMode="U1" note="cbstimeout" orgRrn="105119954804"
       orgTxnDate="2021-02-20T19:40:23+05:30"
       orgTxnId="MMM0000000000005t0ya2TDrPd9SkgVc6A" purpose="00"
       refCategory="00" refId="P1705110000338829715467"
       refUrl="http://www.npci.org.in/" subType="PAYER" ts="2020-11-
       18T20:01:51.891+05:30" type="COMPLAINT"/>
       <Complaint reqAdjAmount="13.00" reqAdjCode="U008" reqAdjFlag="PBRB"/>
       </ns2:ReqComplaint>

UPI sends the request to Payee
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:ReqComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head      ver="2.0" ts="2021-02-20T19:58:17+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZGAV67uO" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd9U9Xo4UM" note="cbstimeout"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30" type="COMPLAINT"
       orgTxnId="MMM0000000000005t0ya2TDrPd9SkgVc6A" custRef="032320100028"
       orgTxnDate="2021-02-20T19:40:23+05:30"        orgRrn="105119954804"
       initiationMode="U1" subType="PAYEE" purpose="00" refCategory="00"/>
       <ComplaintreqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       </ns2:ReqComplaint>



UPI sends the Final response to Payer PSP
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
```
<!-- PAGE 97 -->
## PAGE 97

**Section context on this page:**
- Annexure

### Verbatim page text

```text
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T19:58:47+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZGEdcwRT" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd9U9Xo4UM" note="cbstimeout"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/"
       ts="2020-11-18T20:01:51.891+05:30" type="COMPLAINT"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd9SkgVc6A"
       custRef="032320100028" orgTxnDate="2021-02-20T19:40:23+05:30"
       orgRrn="105119954804"
       initiationMode="U1" subType="PAYER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/>
       <Resp reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022053597">
       <Ref type="PAYEE" adjFlag="PTO" adjCode="TP"/>
       </Resp> </ns2:RespComplaint>

UPI sends the Status update to Remitter
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T19:58:47+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZGEdcwRU" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd9U9Xo4UM" note="cbstimeout"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30"       type="STATUSUPDATE"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd9SkgVc6A" custRef="032320100028"
       orgTxnDate="2021-02-20T19:40:23+05:30" orgRrn="105119954804"
       initiationMode="U1" subType="REMITTER" purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/> <Resp
       reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022053597"> <Ref type="PAYEE"
       adjFlag="PTO" adjCode="TP"/>
       </Resp> </ns2:RespComplaint>

UPI sends the Status update to Beneficiary
       <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <ns2:RespComplaint
       xmlns:ns2="http://npci.org/upi/schema/"
       xmlns:ns3="http://npci.org/cm/schema/">
       <Head ver="2.0" ts="2021-02-20T19:58:47+05:30" orgId="NPCI"
       msgId="5t0yaaWjrmTZGEdcwRV" prodType="UPI"/>
       <Txn id="MMM0000000000005t0ya2TDrPd9U9Xo4UM" note="cbstimeout"
       refId="P1705110000338829715467" refUrl="http://www.npci.org.in/" ts="2020-
       11-18T20:01:51.891+05:30"       type="STATUSUPDATE"
       orgMsgId="1GRDpegBbA6a1M12uqW3"
       orgTxnId="MMM0000000000005t0ya2TDrPd9SkgVc6A" custRef="032320100028"
       orgTxnDate="2021-02-20T19:40:23+05:30"
       orgRrn="105119954804" initiationMode="U1" subType="BENEFICIARY"
       purpose="00" refCategory="00"/>
       <Complaint reqAdjFlag="PBRB" reqAdjCode="U008" reqAdjAmount="13.00"
       orgSettRespCode="00" currCycle="N"/> <Resp
```
<!-- PAGE 98 -->
## PAGE 98

**Section context on this page:**
- Abbreviations
- References
- DocumentHistory

### Verbatim page text

```text
           reqMsgId="1GRDpegBbA6a1M12uqW3" crn="UPI21022053597"> <Ref type="PAYEE"
           adjFlag="PTO" adjCode="TP"/>
           </Resp></ns2:RespComplaint>



 Annexure
 Dispute Reason Code

 URCS_Dispute_ReasonCode.pdf


 UPI Error Code

 UPI_Error_and_Response_Codes_2_9.doc


              Scenarios with Error Codes for Reference


                                                                            Complaint is
S No      Description   reqAdjFlag      adjCode            Error Code         Raised
                                            Ex:
       PSP/Bank not                  U008<<Accordi
 1       available        PBRB              ng           NAC|U28               Yes
                                      to scenario>>
                                            Ex:     NAC|UPI Error Codes
          Decline                    U008<<Accordi
                                                      <<According to            No
 2       scenarios        PBRB              ng
                                      to scenario>>     Scenario>>
                                     Ex:U008<<Acc
         Txn Id not
 3                        PBRB          ording to        NAC|U48                No
          Found
                                       scenario>>

          Rejection
          Scenarios
       Rejection Code
        (Refer Sheet                                                            No
          Rejection                  Ex:U005<<Acc
                                                       NAC|3202<<Accordin
 4     ReasonCodes-       PBRB          ording to
                                                         g to scenario>>
                                      scenario>>
          Existing )
           Already
           Disputes
         present by                  Ex:U005<<Accord       DRC|102
 5                        PBRB            i ng to         <<According to        No
        autoupdate or
            other                       scenario>>          scenario>>
            means
         Versioning-
          Complaint
                                     Ex:U005<<Accord NAC|UU1/UU2/UU3           Yes
          Rejected if
 6        bank is not     PBRB            i ng to          /U U4
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 98.1

|  |  |  |  |  | Complaint is |
| --- | --- | --- | --- | --- | --- |
| S No | Description | reqAdjFlag | adjCode | Error Code |  |
|  |  |  |  |  | Raised |
|  |  |  |  |  |  |
| 1 | PSP/Bank not available | PBRB | Ex: U008<<Accordi ng to scenario>> | NAC\|U28 | Yes |
| 2 | Decline scenarios | PBRB | Ex: U008<<Accordi ng to scenario>> | NAC\|UPI Error Codes <<According to Scenario>> | No |
| 3 | Txn Id not Found | PBRB | Ex:U008<<Acc ording to scenario>> | NAC\|U48 | No |
| 4 | Rejection Scenarios Rejection Code (Refer Sheet Rejection ReasonCodes- Existing ) | PBRB | Ex:U005<<Acc ording to scenario>> | NAC\|3202<<Accordin g to scenario>> | No |
| 5 | Already Disputes present by autoupdate or other means | PBRB | Ex:U005<<Accord i ng to scenario>> | DRC\|102 <<According to scenario>> | No |
| 6 | Versioning- Complaint Rejected if bank is not | PBRB | Ex:U005<<Accord i ng to | NAC\|UU1/UU2/UU3 /U U4 | Yes |

<!-- PAGE 99 -->
## PAGE 99

### Verbatim page text

```text
        live                          scenario>>


       URCS
7                                          -              UTO|UTO                 No
      Timeout

Abbreviations


               NPCI National Payments Corporation of India
               UPI  Unified Payments Interface
               UDIR Unified Dispute & Issue Resolution
               URCS Unified Real time Clearing and Settlement
               API  Application Program Interface

References
          1. UPI TSD - Unified Payments Interface 2 0 TSD v1 42

Document History

       Version      Description                                    Release Date
       Numbe
       r
       1.0          UDIR                                             27/07/2020
       1.1          1. Updated the reasoncodes for Autoupdate        14/10/2020
                    2. Updated the sample dumps
                    3. Updated the Complaint – Chargeback Mapping
                    4. Other updates - Texts highlighted in grey are
                    updated in the document
                    5. Updated Refund Reason Codes
       1.2          1. Modified P2M Scenario as, both Success and 22/01/2021
                    Deemd trasaction will be sent to payee for
                    processing
                    2. Attached Complaint Reason Codes
                    3. Tag Value changes in API
                    4. Modified Refund Section
                    4. Added dumps for P2M Scenario
       2.0          1. Added Original Dumps for Scenarios - Section 30/04/2021
                    13 , 15 and 17
                    2. Autoupdate – Modified section 3.4– All Txns
                    Status will be Adj ReportModified Autoupdate
                    3. Modified section 7 - P2M Disputes
                    4. Updated Section 2.1 , 2.2 , 2.3 -Complaints
                 5. 5. Updated Section 10 - Glossay of Flags and
                    Reason Codes6. Updated Section 8.3 , 8.4 –
                    Online Refund UPI & URCS Flags and Reason
                    Codes
                 6. 7. Removed Non Pre-Approved Refund - Phase
                    2, details will be shared later
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 99.1

|  | live |  | scenario>> |  |  |
| --- | --- | --- | --- | --- | --- |
| 7 | URCS Timeout |  | - | UTO\|UTO | No |

#### Table 99.2

|  |  |
| --- | --- |
| NPCI | National Payments Corporation of India |
| UPI | Unified Payments Interface |
| UDIR | Unified Dispute & Issue Resolution |
| URCS | Unified Real time Clearing and Settlement |
| API | Application Program Interface |

#### Table 99.3

| Version | Description | Release Date |
| --- | --- | --- |
| Numbe |  |  |
| r |  |  |
| 1.0 | UDIR | 27/07/2020 |
| 1.1 | 1. Updated the reasoncodes for Autoupdate 2. Updated the sample dumps 3. Updated the Complaint – Chargeback Mapping 4. Other updates - Texts highlighted in grey are updated in the document 5. Updated Refund Reason Codes | 14/10/2020 |
| 1.2 | 1. Modified P2M Scenario as, both Success and | 22/01/2021 |
|  | Deemd trasaction will be sent to payee for |  |
|  | processing |  |
|  | 2. Attached Complaint Reason Codes |  |
|  | 3. Tag Value changes in API |  |
|  | 4. Modified Refund Section |  |
|  | 4. Added dumps for P2M Scenario |  |
| 2.0 5. 6. | 1. Added Original Dumps for Scenarios - Section 13 , 15 and 17 2. Autoupdate – Modified section 3.4– All Txns Status will be Adj ReportModified Autoupdate 3. Modified section 7 - P2M Disputes 4. Updated Section 2.1 , 2.2 , 2.3 -Complaints 5. Updated Section 10 - Glossay of Flags and Reason Codes6. Updated Section 8.3 , 8.4 – Online Refund UPI & URCS Flags and Reason Codes 7. Removed Non Pre-Approved Refund - Phase 2, details will be shared later | 30/04/2021 |

<!-- PAGE 100 -->
## PAGE 100

### Verbatim page text

```text
2.1        7. Added Section 12.4 Autoupdate Versioning     23/08/2021
           8. Added                                Sample
              Dumps for additional tags values of new
              Autoupdate (Sec. 14)
           9. Added table specification for New Autoupdate
      7.
      8.
2.2           1. Added not allowed ONUS complaints        23/04/2024
                 criteria
              2. Added merchant refund flow
              3. Added ReqChkTxn new type – Refund
              4. Added NAC codes




           END OF DOCUMENT
```

### Structured table reconstructions

The following Markdown tables are layout reconstructions of tabular content detected on this page. The verbatim page text above is retained as the preservation source where merged cells or PDF table geometry cannot be represented exactly in Markdown.

#### Table 100.1

| 2.1 7. 8. | 7. Added Section 12.4 Autoupdate Versioning 8. Added Sample Dumps for additional tags values of new Autoupdate (Sec. 14) 9. Added table specification for New Autoupdate | 23/08/2021 |
| --- | --- | --- |
| 2.2 | 1. Added not allowed ONUS complaints criteria 2. Added merchant refund flow 3. Added ReqChkTxn new type – Refund 4. Added NAC codes | 23/04/2024 |

---

# IMAGE INDEX

| Image ID | Page | Section context | Filename |
|---|---:|---|---|
| IMAGE_001 | 1 | [Section context derived from page position only] | images/IMAGE_001.png |
| IMAGE_002 | 6 | 1. Introduction; 1.1. UPI Transaction Flow; 1.2. Possible Scenarios leading to dispute | images/IMAGE_002.jpeg |
| IMAGE_003 | 9 | 2. ReqChkTxn API | images/IMAGE_003.png |
| IMAGE_004 | 16 | 4. AutoUpdate; 4.1. AutoUpdate for DRC Transactions | images/IMAGE_004.jpeg |
| IMAGE_005 | 16 | 4. AutoUpdate; 4.1. AutoUpdate for DRC Transactions | images/IMAGE_005.jpeg |
| IMAGE_006 | 17 | 4.2. AutoUpdate for Deemed Transactions | images/IMAGE_006.jpeg |
| IMAGE_007 | 17 | 4.2. AutoUpdate for Deemed Transactions | images/IMAGE_007.jpeg |
| IMAGE_008 | 17 | 4.2. AutoUpdate for Deemed Transactions | images/IMAGE_008.jpeg |
| IMAGE_009 | 22 | 5. Debit Reversal Confirmation Process (DRC) | images/IMAGE_009.jpeg |
| IMAGE_010 | 24 | [Section context derived from page position only] | images/IMAGE_010.jpeg |
| IMAGE_011 | 27 | 7. P2M Disputes; 7.1. Amount Debited but Goods/Service not delivered or any other service related issue | images/IMAGE_011.jpeg |
| IMAGE_012 | 28 | 7.2. Deemed Transactions | images/IMAGE_012.jpeg |
| IMAGE_013 | 29 | 8. Online Refund | images/IMAGE_013.jpeg |
| IMAGE_014 | 31 | 9. Timeout; 9.1. Beneficiary Timeout; 9.2. Remitter Timeout; 10. Glossary of Flags and Reason Codes | images/IMAGE_014.jpeg |
| IMAGE_015 | 31 | 9. Timeout; 9.1. Beneficiary Timeout; 9.2. Remitter Timeout; 10. Glossary of Flags and Reason Codes | images/IMAGE_015.jpeg |
| IMAGE_016 | 31 | 9. Timeout; 9.1. Beneficiary Timeout; 9.2. Remitter Timeout; 10. Glossary of Flags and Reason Codes | images/IMAGE_016.jpeg |
| IMAGE_017 | 72 | [Section context derived from page position only] | images/IMAGE_017.png |

---

# COMPLETENESS CHECK

The source PDF was rendered to verify all 100 pages visually before extraction. The following checks were performed against the PDF and the generated corpus:

| Check | Observed | Expected / source reference | Status |
|---|---:|---:|---|
| PDF page count | 100 | 100 | PASS |
| Numbered TOC entries | 57 | 57 | PASS |
| Top-level numbered sections in TOC | 16 | 16 | PASS |
| Numbered subsections in TOC | 41 | 41 | PASS |
| Embedded image instances extracted | 17 | 17 | PASS |
| Pages containing extracted embedded images | 12 | 12 | PASS |
| Pages with structured tables detected | 42 | 42 | PASS |
| Table objects detected by PDF table extraction | 64 | 64 | PASS |
| Structured Markdown table reconstructions | 51 | 51 usable multi-column reconstructions | PASS |
| Appendix/back matter headings detected | 4 | 4 | PASS |

Additional checks:
- Footnotes and note text are retained in the verbatim page-text layer; no footnote/note content was intentionally removed.
- Every PDF page has an explicit `<!-- PAGE N -->` marker.
- Every extracted embedded image has a stable IMAGE_NNN identifier, a retained original file in `images/`, and a nearby visual description.
- Tables are preserved in the verbatim page text and additionally reconstructed as Markdown where table extraction produced a usable multi-column structure.
- Footnotes/notes are retained as part of the verbatim page text; no separate footnote text was discarded.
- Annexure, Abbreviations, References, and DocumentHistory are retained on their source pages.
- No content was intentionally summarized, paraphrased, or removed from the verbatim page-text layer.