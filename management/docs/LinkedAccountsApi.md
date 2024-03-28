# PingOnePlatformApiSsoAndBase.LinkedAccountsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUsersUserIDLinkedAccountsGet**](LinkedAccountsApi.md#environmentsEnvironmentIDUsersUserIDLinkedAccountsGet) | **GET** /environments/{environmentID}/users/{userID}/linkedAccounts | READ Linked Accounts
[**environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDDelete**](LinkedAccountsApi.md#environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDDelete) | **DELETE** /environments/{environmentID}/users/{userID}/linkedAccounts/{linkedAccountID} | DELETE Linked Account
[**environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDGet**](LinkedAccountsApi.md#environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDGet) | **GET** /environments/{environmentID}/users/{userID}/linkedAccounts/{linkedAccountID} | READ One Linked Account



## environmentsEnvironmentIDUsersUserIDLinkedAccountsGet

> environmentsEnvironmentIDUsersUserIDLinkedAccountsGet(environmentID, userID)

READ Linked Accounts

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LinkedAccountsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDLinkedAccountsGet(environmentID, userID).then(() => {
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


## environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDDelete

> environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDDelete(environmentID, userID, linkedAccountID)

DELETE Linked Account

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LinkedAccountsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let linkedAccountID = "linkedAccountID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDDelete(environmentID, userID, linkedAccountID).then(() => {
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
 **linkedAccountID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDGet

> environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDGet(environmentID, userID, linkedAccountID)

READ One Linked Account

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LinkedAccountsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let linkedAccountID = "linkedAccountID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDLinkedAccountsLinkedAccountIDGet(environmentID, userID, linkedAccountID).then(() => {
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
 **linkedAccountID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

