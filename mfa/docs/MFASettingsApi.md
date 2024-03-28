# PingOnePlatformApiPingOneMfa.MFASettingsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readMFASettings**](MFASettingsApi.md#readMFASettings) | **GET** /environments/{environmentID}/mfaSettings | READ MFA Settings
[**resetMFASettings**](MFASettingsApi.md#resetMFASettings) | **DELETE** /environments/{environmentID}/mfaSettings | RESET MFA Settings
[**updateMFASettings**](MFASettingsApi.md#updateMFASettings) | **PUT** /environments/{environmentID}/mfaSettings | UPDATE MFA Settings



## readMFASettings

> MFASettings readMFASettings(environmentID)

READ MFA Settings

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.MFASettingsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readMFASettings(environmentID).then((data) => {
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

[**MFASettings**](MFASettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resetMFASettings

> MFASettings resetMFASettings(environmentID)

RESET MFA Settings

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.MFASettingsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.resetMFASettings(environmentID).then((data) => {
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

[**MFASettings**](MFASettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMFASettings

> MFASettings updateMFASettings(environmentID, opts)

UPDATE MFA Settings

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.MFASettingsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'mFASettings': new PingOnePlatformApiPingOneMfa.MFASettings() // MFASettings | 
};
apiInstance.updateMFASettings(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **mFASettings** | [**MFASettings**](MFASettings.md)|  | [optional] 

### Return type

[**MFASettings**](MFASettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

