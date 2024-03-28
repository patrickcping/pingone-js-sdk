# PingOnePlatformApiSsoAndBase.TotalIdentitiesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDTotalIdentitiesGet**](TotalIdentitiesApi.md#environmentsEnvironmentIDTotalIdentitiesGet) | **GET** /environments/{environmentID}/totalIdentities | READ Total Identity Counts



## environmentsEnvironmentIDTotalIdentitiesGet

> environmentsEnvironmentIDTotalIdentitiesGet(environmentID, opts)

READ Total Identity Counts

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TotalIdentitiesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': startDate eq "2019-05-01T19:00:00Z" and endDate eq "2019-05-31T19:00:00Z" // String | 
};
apiInstance.environmentsEnvironmentIDTotalIdentitiesGet(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **filter** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

