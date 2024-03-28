# PingOnePlatformApiAgreementManagement.AgreementRevisionsResourcesApi

All URIs are relative to *https://agreement-mgmt.pingone.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readOneAgreementLanguageRevision**](AgreementRevisionsResourcesApi.md#readOneAgreementLanguageRevision) | **GET** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions/{revisionID}.json | READ One Agreement Language Revision



## readOneAgreementLanguageRevision

> AgreementRevisionText readOneAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID)

READ One Agreement Language Revision

### Example

```javascript
import PingOnePlatformApiAgreementManagement from 'ping_one_platform_api_agreement_management';
let defaultClient = PingOnePlatformApiAgreementManagement.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAgreementManagement.AgreementRevisionsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let languageID = "languageID_example"; // String | 
let revisionID = "revisionID_example"; // String | 
apiInstance.readOneAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **agreementID** | **String**|  | 
 **languageID** | **String**|  | 
 **revisionID** | **String**|  | 

### Return type

[**AgreementRevisionText**](AgreementRevisionText.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

