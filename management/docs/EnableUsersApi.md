# PingOnePlatformApiSsoAndBase.EnableUsersApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readUserEnabled**](EnableUsersApi.md#readUserEnabled) | **GET** /environments/{environmentID}/users/{userID}/enabled | READ User Enabled
[**updateUserEnabled**](EnableUsersApi.md#updateUserEnabled) | **PUT** /environments/{environmentID}/users/{userID}/enabled | UPDATE User Enabled



## readUserEnabled

> UserEnabled readUserEnabled(environmentID, userID)

READ User Enabled

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnableUsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.readUserEnabled(environmentID, userID).then((data) => {
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

[**UserEnabled**](UserEnabled.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserEnabled

> UserEnabled updateUserEnabled(environmentID, userID, opts)

UPDATE User Enabled

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnableUsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'userEnabled': new PingOnePlatformApiSsoAndBase.UserEnabled() // UserEnabled | 
};
apiInstance.updateUserEnabled(environmentID, userID, opts).then((data) => {
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
 **userEnabled** | [**UserEnabled**](UserEnabled.md)|  | [optional] 

### Return type

[**UserEnabled**](UserEnabled.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

