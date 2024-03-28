# PingOnePlatformApiSsoAndBase.AgreementRevisionsResourcesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgreementLanguageRevision**](AgreementRevisionsResourcesApi.md#createAgreementLanguageRevision) | **POST** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions | CREATE Revision
[**deleteAgreementLanguageRevision**](AgreementRevisionsResourcesApi.md#deleteAgreementLanguageRevision) | **DELETE** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions/{revisionID} | DELETE Revision
[**readAllAgreementLanguageRevisions**](AgreementRevisionsResourcesApi.md#readAllAgreementLanguageRevisions) | **GET** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions | READ All Revisions
[**readOneAgreementLanguageRevision**](AgreementRevisionsResourcesApi.md#readOneAgreementLanguageRevision) | **GET** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID}/revisions/{revisionID} | READ One Revision



## createAgreementLanguageRevision

> AgreementLanguageRevision createAgreementLanguageRevision(environmentID, agreementID, languageID, opts)

CREATE Revision

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementRevisionsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let languageID = "languageID_example"; // String | 
let opts = {
  'agreementLanguageRevision': new PingOnePlatformApiSsoAndBase.AgreementLanguageRevision() // AgreementLanguageRevision | 
};
apiInstance.createAgreementLanguageRevision(environmentID, agreementID, languageID, opts).then((data) => {
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
 **agreementLanguageRevision** | [**AgreementLanguageRevision**](AgreementLanguageRevision.md)|  | [optional] 

### Return type

[**AgreementLanguageRevision**](AgreementLanguageRevision.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAgreementLanguageRevision

> deleteAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID)

DELETE Revision

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementRevisionsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let languageID = "languageID_example"; // String | 
let revisionID = "revisionID_example"; // String | 
apiInstance.deleteAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllAgreementLanguageRevisions

> EntityArray readAllAgreementLanguageRevisions(environmentID, agreementID, languageID)

READ All Revisions

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementRevisionsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let languageID = "languageID_example"; // String | 
apiInstance.readAllAgreementLanguageRevisions(environmentID, agreementID, languageID).then((data) => {
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

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneAgreementLanguageRevision

> AgreementLanguageRevision readOneAgreementLanguageRevision(environmentID, agreementID, languageID, revisionID)

READ One Revision

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementRevisionsResourcesApi();
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

[**AgreementLanguageRevision**](AgreementLanguageRevision.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

