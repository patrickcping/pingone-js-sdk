# PingOnePlatformApiSsoAndBase.AgreementLanguagesResourcesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgreementLanguage**](AgreementLanguagesResourcesApi.md#createAgreementLanguage) | **POST** /environments/{environmentID}/agreements/{agreementID}/languages | CREATE Language
[**deleteAgreementLanguage**](AgreementLanguagesResourcesApi.md#deleteAgreementLanguage) | **DELETE** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID} | DELETE Language
[**readAllAgreementLanguages**](AgreementLanguagesResourcesApi.md#readAllAgreementLanguages) | **GET** /environments/{environmentID}/agreements/{agreementID}/languages | READ All Languages
[**readOneAgreementLanguage**](AgreementLanguagesResourcesApi.md#readOneAgreementLanguage) | **GET** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID} | READ One Language
[**updateAgreementLanguage**](AgreementLanguagesResourcesApi.md#updateAgreementLanguage) | **PUT** /environments/{environmentID}/agreements/{agreementID}/languages/{languageID} | UPDATE Language



## createAgreementLanguage

> AgreementLanguage createAgreementLanguage(environmentID, agreementID, opts)

CREATE Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementLanguagesResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let opts = {
  'agreementLanguage': new PingOnePlatformApiSsoAndBase.AgreementLanguage() // AgreementLanguage | 
};
apiInstance.createAgreementLanguage(environmentID, agreementID, opts).then((data) => {
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
 **agreementLanguage** | [**AgreementLanguage**](AgreementLanguage.md)|  | [optional] 

### Return type

[**AgreementLanguage**](AgreementLanguage.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAgreementLanguage

> deleteAgreementLanguage(environmentID, agreementID, languageID)

DELETE Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementLanguagesResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let languageID = "languageID_example"; // String | 
apiInstance.deleteAgreementLanguage(environmentID, agreementID, languageID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllAgreementLanguages

> EntityArray readAllAgreementLanguages(environmentID, agreementID)

READ All Languages

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementLanguagesResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
apiInstance.readAllAgreementLanguages(environmentID, agreementID).then((data) => {
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

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneAgreementLanguage

> AgreementLanguage readOneAgreementLanguage(environmentID, agreementID, languageID)

READ One Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementLanguagesResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let languageID = "languageID_example"; // String | 
apiInstance.readOneAgreementLanguage(environmentID, agreementID, languageID).then((data) => {
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

[**AgreementLanguage**](AgreementLanguage.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAgreementLanguage

> AgreementLanguage updateAgreementLanguage(environmentID, agreementID, languageID, opts)

UPDATE Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementLanguagesResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let languageID = "languageID_example"; // String | 
let opts = {
  'agreementLanguage': new PingOnePlatformApiSsoAndBase.AgreementLanguage() // AgreementLanguage | 
};
apiInstance.updateAgreementLanguage(environmentID, agreementID, languageID, opts).then((data) => {
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
 **agreementLanguage** | [**AgreementLanguage**](AgreementLanguage.md)|  | [optional] 

### Return type

[**AgreementLanguage**](AgreementLanguage.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

