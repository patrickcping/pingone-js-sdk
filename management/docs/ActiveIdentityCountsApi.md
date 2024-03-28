# PingOnePlatformApiSsoAndBase.ActiveIdentityCountsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDActiveIdentityCountsGet**](ActiveIdentityCountsApi.md#environmentsEnvironmentIDActiveIdentityCountsGet) | **GET** /environments/{environmentID}/activeIdentityCounts | READ Active Identity Counts (Deprecated)
[**environmentsEnvironmentIDMetricsActiveIdentityCountsGet**](ActiveIdentityCountsApi.md#environmentsEnvironmentIDMetricsActiveIdentityCountsGet) | **GET** /environments/{environmentID}/metrics/activeIdentityCounts | READ Active Identity Counts by Date Range
[**readActiveIdentityCount**](ActiveIdentityCountsApi.md#readActiveIdentityCount) | **GET** /organizations/{organizationID}/licenses/{licenseID}/metrics/activeIdentityCounts | READ Active Identity Counts by License



## environmentsEnvironmentIDActiveIdentityCountsGet

> environmentsEnvironmentIDActiveIdentityCountsGet(environmentID, opts)

READ Active Identity Counts (Deprecated)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ActiveIdentityCountsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': startDate ge "2019-05-01T19:00:00Z" and samplingPeriod eq "10", // String | 
  'limit': 10, // Number | 
  'order': -startDate // String | 
};
apiInstance.environmentsEnvironmentIDActiveIdentityCountsGet(environmentID, opts).then(() => {
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
 **limit** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDMetricsActiveIdentityCountsGet

> environmentsEnvironmentIDMetricsActiveIdentityCountsGet(environmentID, opts)

READ Active Identity Counts by Date Range

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ActiveIdentityCountsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': startDate ge "2020-05-01T19:00:00Z", // String | 
  'limit': 10, // Number | 
  'order': -startDate, // String | 
  'samplePeriod': MONTH // String | 
};
apiInstance.environmentsEnvironmentIDMetricsActiveIdentityCountsGet(environmentID, opts).then(() => {
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
 **limit** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 
 **samplePeriod** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readActiveIdentityCount

> readActiveIdentityCount(organizationID, licenseID, opts)

READ Active Identity Counts by License

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ActiveIdentityCountsApi();
let organizationID = "organizationID_example"; // String | 
let licenseID = "licenseID_example"; // String | 
let opts = {
  'aggregatedBy': calendarMonth, // String | 
  'limit': 20, // Number | 
  'order': -startDate // String | 
};
apiInstance.readActiveIdentityCount(organizationID, licenseID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | **String**|  | 
 **licenseID** | **String**|  | 
 **aggregatedBy** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **order** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

