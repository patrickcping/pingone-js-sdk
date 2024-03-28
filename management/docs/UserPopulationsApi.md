# PingOnePlatformApiSsoAndBase.UserPopulationsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readUserPopulation**](UserPopulationsApi.md#readUserPopulation) | **GET** /environments/{environmentID}/users/{userID}/population | READ User Population
[**updateUserPopulation**](UserPopulationsApi.md#updateUserPopulation) | **PUT** /environments/{environmentID}/users/{userID}/population | UPDATE User Population



## readUserPopulation

> UserPopulation readUserPopulation(environmentID, userID)

READ User Population

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserPopulationsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.readUserPopulation(environmentID, userID).then((data) => {
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

[**UserPopulation**](UserPopulation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserPopulation

> UserPopulation updateUserPopulation(environmentID, userID, opts)

UPDATE User Population

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserPopulationsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'userPopulation': new PingOnePlatformApiSsoAndBase.UserPopulation() // UserPopulation | 
};
apiInstance.updateUserPopulation(environmentID, userID, opts).then((data) => {
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
 **userPopulation** | [**UserPopulation**](UserPopulation.md)|  | [optional] 

### Return type

[**UserPopulation**](UserPopulation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

