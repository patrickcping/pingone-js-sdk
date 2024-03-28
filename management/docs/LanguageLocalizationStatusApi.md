# PingOnePlatformApiSsoAndBase.LanguageLocalizationStatusApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLanguageLocalizationStatus**](LanguageLocalizationStatusApi.md#createLanguageLocalizationStatus) | **POST** /environments/{environmentID}/languages/{languageID}/status | CREATE Language Localization Status
[**deleteLanguageLocalizationStatus**](LanguageLocalizationStatusApi.md#deleteLanguageLocalizationStatus) | **DELETE** /environments/{environmentID}/languages/{languageID}/status/{l10nStatusID} | DELETE Language Localization Status
[**readLanguageLocalizationStatus**](LanguageLocalizationStatusApi.md#readLanguageLocalizationStatus) | **GET** /environments/{environmentID}/languages/{languageID}/status | READ Language Localization Status
[**readOneLanguageLocalizationStatus**](LanguageLocalizationStatusApi.md#readOneLanguageLocalizationStatus) | **GET** /environments/{environmentID}/languages/{languageID}/status/{l10nStatusID} | READ One Language Localization Status
[**updateLanguageLocalizationStatus**](LanguageLocalizationStatusApi.md#updateLanguageLocalizationStatus) | **PUT** /environments/{environmentID}/languages/{languageID}/status/{l10nStatusID} | UPDATE Language Localization Status



## createLanguageLocalizationStatus

> LanguageLocalizationStatus createLanguageLocalizationStatus(environmentID, languageID, opts)

CREATE Language Localization Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatusApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
let opts = {
  'languageLocalizationStatus': new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatus() // LanguageLocalizationStatus | 
};
apiInstance.createLanguageLocalizationStatus(environmentID, languageID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **languageID** | **String**|  | 
 **languageLocalizationStatus** | [**LanguageLocalizationStatus**](LanguageLocalizationStatus.md)|  | [optional] 

### Return type

[**LanguageLocalizationStatus**](LanguageLocalizationStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLanguageLocalizationStatus

> deleteLanguageLocalizationStatus(environmentID, languageID, l10nStatusID)

DELETE Language Localization Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatusApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
let l10nStatusID = "l10nStatusID_example"; // String | 
apiInstance.deleteLanguageLocalizationStatus(environmentID, languageID, l10nStatusID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **languageID** | **String**|  | 
 **l10nStatusID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readLanguageLocalizationStatus

> LanguageLocalizationStatus readLanguageLocalizationStatus(environmentID, languageID)

READ Language Localization Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatusApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
apiInstance.readLanguageLocalizationStatus(environmentID, languageID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **languageID** | **String**|  | 

### Return type

[**LanguageLocalizationStatus**](LanguageLocalizationStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneLanguageLocalizationStatus

> LanguageLocalizationStatus readOneLanguageLocalizationStatus(environmentID, languageID, l10nStatusID)

READ One Language Localization Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatusApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
let l10nStatusID = "l10nStatusID_example"; // String | 
apiInstance.readOneLanguageLocalizationStatus(environmentID, languageID, l10nStatusID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **languageID** | **String**|  | 
 **l10nStatusID** | **String**|  | 

### Return type

[**LanguageLocalizationStatus**](LanguageLocalizationStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLanguageLocalizationStatus

> LanguageLocalizationStatus updateLanguageLocalizationStatus(environmentID, languageID, l10nStatusID, opts)

UPDATE Language Localization Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatusApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
let l10nStatusID = "l10nStatusID_example"; // String | 
let opts = {
  'languageLocalizationStatus': new PingOnePlatformApiSsoAndBase.LanguageLocalizationStatus() // LanguageLocalizationStatus | 
};
apiInstance.updateLanguageLocalizationStatus(environmentID, languageID, l10nStatusID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **languageID** | **String**|  | 
 **l10nStatusID** | **String**|  | 
 **languageLocalizationStatus** | [**LanguageLocalizationStatus**](LanguageLocalizationStatus.md)|  | [optional] 

### Return type

[**LanguageLocalizationStatus**](LanguageLocalizationStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

