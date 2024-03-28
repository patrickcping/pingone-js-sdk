# PingOnePlatformApiPingOneMfa.EnableUsersMFAApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readUserMFAEnabled**](EnableUsersMFAApi.md#readUserMFAEnabled) | **GET** /environments/{environmentID}/users/{userID}/mfaEnabled | READ User MFA Enabled
[**updateUserMFAEnabled**](EnableUsersMFAApi.md#updateUserMFAEnabled) | **PUT** /environments/{environmentID}/users/{userID}/mfaEnabled | UPDATE User MFA Enabled



## readUserMFAEnabled

> UserMFAEnabled readUserMFAEnabled(environmentID, userID)

READ User MFA Enabled

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.EnableUsersMFAApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.readUserMFAEnabled(environmentID, userID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 

### Return type

[**UserMFAEnabled**](UserMFAEnabled.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserMFAEnabled

> UserMFAEnabled updateUserMFAEnabled(environmentID, userID, opts)

UPDATE User MFA Enabled

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.EnableUsersMFAApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'userMFAEnabled': new PingOnePlatformApiPingOneMfa.UserMFAEnabled() // UserMFAEnabled | 
};
apiInstance.updateUserMFAEnabled(environmentID, userID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **userMFAEnabled** | [**UserMFAEnabled**](UserMFAEnabled.md)|  | [optional] 

### Return type

[**UserMFAEnabled**](UserMFAEnabled.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

