# PingOnePlatformApiSsoAndBase.LanguagesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLanguage**](LanguagesApi.md#createLanguage) | **POST** /environments/{environmentID}/languages | CREATE Language
[**deleteLanguage**](LanguagesApi.md#deleteLanguage) | **DELETE** /environments/{environmentID}/languages/{languageID} | DELETE Language
[**readLanguages**](LanguagesApi.md#readLanguages) | **GET** /environments/{environmentID}/languages | READ Languages
[**readOneLanguage**](LanguagesApi.md#readOneLanguage) | **GET** /environments/{environmentID}/languages/{languageID} | READ One Language
[**updateLanguage**](LanguagesApi.md#updateLanguage) | **PUT** /environments/{environmentID}/languages/{languageID} | UPDATE Language



## createLanguage

> Language createLanguage(environmentID, opts)

CREATE Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguagesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'language': new PingOnePlatformApiSsoAndBase.Language() // Language | 
};
apiInstance.createLanguage(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **language** | [**Language**](Language.md)|  | [optional] 

### Return type

[**Language**](Language.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLanguage

> deleteLanguage(environmentID, languageID)

DELETE Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguagesApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
apiInstance.deleteLanguage(environmentID, languageID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readLanguages

> EntityArray readLanguages(environmentID)

READ Languages

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguagesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readLanguages(environmentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneLanguage

> Language readOneLanguage(environmentID, languageID)

READ One Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguagesApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
apiInstance.readOneLanguage(environmentID, languageID).then((data) => {
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

[**Language**](Language.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLanguage

> Language updateLanguage(environmentID, languageID, opts)

UPDATE Language

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LanguagesApi();
let environmentID = "environmentID_example"; // String | 
let languageID = "languageID_example"; // String | 
let opts = {
  'language': new PingOnePlatformApiSsoAndBase.Language() // Language | 
};
apiInstance.updateLanguage(environmentID, languageID, opts).then((data) => {
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
 **language** | [**Language**](Language.md)|  | [optional] 

### Return type

[**Language**](Language.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

