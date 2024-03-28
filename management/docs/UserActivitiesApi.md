# PingOnePlatformApiSsoAndBase.UserActivitiesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUserActivitiesGet**](UserActivitiesApi.md#environmentsEnvironmentIDUserActivitiesGet) | **GET** /environments/{environmentID}/userActivities | READ User Activities



## environmentsEnvironmentIDUserActivitiesGet

> environmentsEnvironmentIDUserActivitiesGet(environmentID, opts)

READ User Activities

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserActivitiesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': startDate eq "2018-02-17T09:10:12-04:00" and endDate eq "2018-02-23T09:10:12-04:00" // String | 
};
apiInstance.environmentsEnvironmentIDUserActivitiesGet(environmentID, opts).then(() => {
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

