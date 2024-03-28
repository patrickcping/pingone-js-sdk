# PingOnePlatformApiSsoAndBase.UserPasswordsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUsersUserIDPasswordGet**](UserPasswordsApi.md#environmentsEnvironmentIDUsersUserIDPasswordGet) | **GET** /environments/{environmentID}/users/{userID}/password | READ Password State
[**environmentsEnvironmentIDUsersUserIDPasswordPost**](UserPasswordsApi.md#environmentsEnvironmentIDUsersUserIDPasswordPost) | **POST** /environments/{environmentID}/users/{userID}/password | Password Locked Out
[**environmentsEnvironmentIDUsersUserIDPasswordPut**](UserPasswordsApi.md#environmentsEnvironmentIDUsersUserIDPasswordPut) | **PUT** /environments/{environmentID}/users/{userID}/password | UPDATE Password (Set)



## environmentsEnvironmentIDUsersUserIDPasswordGet

> environmentsEnvironmentIDUsersUserIDPasswordGet(environmentID, userID)

READ Password State

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserPasswordsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDPasswordGet(environmentID, userID).then(() => {
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


## environmentsEnvironmentIDUsersUserIDPasswordPost

> environmentsEnvironmentIDUsersUserIDPasswordPost(environmentID, userID, opts)

Password Locked Out

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserPasswordsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.password.recover+json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDPasswordPost(environmentID, userID, opts).then(() => {
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
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDPasswordPut

> environmentsEnvironmentIDUsersUserIDPasswordPut(environmentID, userID, opts)

UPDATE Password (Set)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserPasswordsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.password.set+json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDPasswordPut(environmentID, userID, opts).then(() => {
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
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

