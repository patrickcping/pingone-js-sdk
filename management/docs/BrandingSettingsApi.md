# PingOnePlatformApiSsoAndBase.BrandingSettingsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readBrandingSettings**](BrandingSettingsApi.md#readBrandingSettings) | **GET** /environments/{environmentID}/brandingSettings | READ Branding Settings
[**updateBrandingSettings**](BrandingSettingsApi.md#updateBrandingSettings) | **PUT** /environments/{environmentID}/brandingSettings | UPDATE Branding Settings



## readBrandingSettings

> BrandingSettings readBrandingSettings(environmentID)

READ Branding Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingSettingsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readBrandingSettings(environmentID).then((data) => {
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

[**BrandingSettings**](BrandingSettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBrandingSettings

> BrandingSettings updateBrandingSettings(environmentID, opts)

UPDATE Branding Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingSettingsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'brandingSettings': new PingOnePlatformApiSsoAndBase.BrandingSettings() // BrandingSettings | 
};
apiInstance.updateBrandingSettings(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **brandingSettings** | [**BrandingSettings**](BrandingSettings.md)|  | [optional] 

### Return type

[**BrandingSettings**](BrandingSettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

