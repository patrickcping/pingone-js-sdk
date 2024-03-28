# PingOnePlatformApiSsoAndBase.AuditActivitiesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDActivitiesActivityIDGet**](AuditActivitiesApi.md#environmentsEnvironmentIDActivitiesActivityIDGet) | **GET** /environments/{environmentID}/activities/{activityID} | GET One User Activity
[**environmentsEnvironmentIDActivitiesGet**](AuditActivitiesApi.md#environmentsEnvironmentIDActivitiesGet) | **GET** /environments/{environmentID}/activities | GET User Activities
[**environmentsEnvironmentIDActivitiesPost**](AuditActivitiesApi.md#environmentsEnvironmentIDActivitiesPost) | **POST** /environments/{environmentID}/activities | GET User Activities



## environmentsEnvironmentIDActivitiesActivityIDGet

> environmentsEnvironmentIDActivitiesActivityIDGet(environmentID, activityID)

GET One User Activity

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AuditActivitiesApi();
let environmentID = "environmentID_example"; // String | 
let activityID = "activityID_example"; // String | 
apiInstance.environmentsEnvironmentIDActivitiesActivityIDGet(environmentID, activityID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **activityID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDActivitiesGet

> environmentsEnvironmentIDActivitiesGet(environmentID, opts)

GET User Activities

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AuditActivitiesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': recordedat gt "2018-08-20T00:00:00Z" AND recordedat lt "2018-08-22T23:59:00Z" // String | 
};
apiInstance.environmentsEnvironmentIDActivitiesGet(environmentID, opts).then(() => {
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


## environmentsEnvironmentIDActivitiesPost

> environmentsEnvironmentIDActivitiesPost(environmentID, opts)

GET User Activities

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AuditActivitiesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDActivitiesPost(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

