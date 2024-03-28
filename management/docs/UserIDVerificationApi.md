# PingOnePlatformApiSsoAndBase.UserIDVerificationApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet**](UserIDVerificationApi.md#environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet) | **GET** /environments/{environmentID}/users/{userID}/verifyTransactions | READ All ID Verification Transaction Records for a User
[**environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost**](UserIDVerificationApi.md#environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost) | **POST** /environments/{environmentID}/users/{userID}/verifyTransactions | CREATE ID Verification Transaction Record for a User
[**environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete**](UserIDVerificationApi.md#environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete) | **DELETE** /environments/{environmentID}/users/{userID}/verifyTransactions/{transactionID} | DELETE ID Verification Transaction Record for a User
[**environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet**](UserIDVerificationApi.md#environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet) | **GET** /environments/{environmentID}/users/{userID}/verifyTransactions/{transactionID} | READ ID Verification Transaction Record for a User
[**environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut**](UserIDVerificationApi.md#environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut) | **PUT** /environments/{environmentID}/users/{userID}/verifyTransactions/{transactionID} | UPDATE ID Verification Transaction Record for a User



## environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet

> environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet(environmentID, userID)

READ All ID Verification Transaction Records for a User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserIDVerificationApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsGet(environmentID, userID).then(() => {
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


## environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost

> environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost(environmentID, userID)

CREATE ID Verification Transaction Record for a User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserIDVerificationApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsPost(environmentID, userID).then(() => {
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


## environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete

> environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete(environmentID, userID, transactionID)

DELETE ID Verification Transaction Record for a User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserIDVerificationApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let transactionID = "transactionID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDDelete(environmentID, userID, transactionID).then(() => {
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
 **transactionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet

> environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet(environmentID, userID, transactionID)

READ ID Verification Transaction Record for a User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserIDVerificationApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let transactionID = "transactionID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDGet(environmentID, userID, transactionID).then(() => {
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
 **transactionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut

> environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut(environmentID, userID, transactionID, opts)

UPDATE ID Verification Transaction Record for a User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserIDVerificationApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let transactionID = "transactionID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDVerifyTransactionsTransactionIDPut(environmentID, userID, transactionID, opts).then(() => {
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
 **transactionID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

