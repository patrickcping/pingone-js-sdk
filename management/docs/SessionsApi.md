# PingOnePlatformApiSsoAndBase.SessionsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUsersUserIDSessionsGet**](SessionsApi.md#environmentsEnvironmentIDUsersUserIDSessionsGet) | **GET** /environments/{environmentID}/users/{userID}/sessions | READ All Sessions
[**environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete**](SessionsApi.md#environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete) | **DELETE** /environments/{environmentID}/users/{userID}/sessions/{sessionID} | DELETE Session
[**environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet**](SessionsApi.md#environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet) | **GET** /environments/{environmentID}/users/{userID}/sessions/{sessionID} | READ One Session



## environmentsEnvironmentIDUsersUserIDSessionsGet

> environmentsEnvironmentIDUsersUserIDSessionsGet(environmentID, userID)

READ All Sessions

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SessionsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDSessionsGet(environmentID, userID).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete

> environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete(environmentID, userID, sessionID)

DELETE Session

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SessionsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let sessionID = "sessionID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDSessionsSessionIDDelete(environmentID, userID, sessionID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **sessionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet

> environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet(environmentID, userID, sessionID)

READ One Session

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SessionsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let sessionID = "sessionID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDSessionsSessionIDGet(environmentID, userID, sessionID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **sessionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

