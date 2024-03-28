# PingOnePlatformApiSsoAndBase.RecaptchaConfigurationApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRecaptchaConfiguration**](RecaptchaConfigurationApi.md#deleteRecaptchaConfiguration) | **DELETE** /environments/{environmentID}/recaptchaV2Config | DELETE Recaptcha Configuration
[**readRecaptchaConfiguration**](RecaptchaConfigurationApi.md#readRecaptchaConfiguration) | **GET** /environments/{environmentID}/recaptchaV2Config | READ Recaptcha Configuration
[**updateRecaptchaConfiguration**](RecaptchaConfigurationApi.md#updateRecaptchaConfiguration) | **PUT** /environments/{environmentID}/recaptchaV2Config | UPDATE Recaptcha Configuration



## deleteRecaptchaConfiguration

> deleteRecaptchaConfiguration(environmentID)

DELETE Recaptcha Configuration

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.RecaptchaConfigurationApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.deleteRecaptchaConfiguration(environmentID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readRecaptchaConfiguration

> RecaptchaConfiguration readRecaptchaConfiguration(environmentID)

READ Recaptcha Configuration

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.RecaptchaConfigurationApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readRecaptchaConfiguration(environmentID).then((data) => {
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

[**RecaptchaConfiguration**](RecaptchaConfiguration.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRecaptchaConfiguration

> RecaptchaConfiguration updateRecaptchaConfiguration(environmentID, opts)

UPDATE Recaptcha Configuration

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.RecaptchaConfigurationApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'recaptchaConfiguration': new PingOnePlatformApiSsoAndBase.RecaptchaConfiguration() // RecaptchaConfiguration | 
};
apiInstance.updateRecaptchaConfiguration(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **recaptchaConfiguration** | [**RecaptchaConfiguration**](RecaptchaConfiguration.md)|  | [optional] 

### Return type

[**RecaptchaConfiguration**](RecaptchaConfiguration.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

