# PingOnePlatformApiCredentials.UserCredentialsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAUserCredential**](UserCredentialsApi.md#createAUserCredential) | **POST** /environments/{environmentID}/users/{userID}/credentials | Create a User Credential
[**readAllUserCredentials**](UserCredentialsApi.md#readAllUserCredentials) | **GET** /environments/{environmentID}/users/{userID}/credentials | Read All User Credentials
[**readOneUserCredential**](UserCredentialsApi.md#readOneUserCredential) | **GET** /environments/{environmentID}/users/{userID}/credentials/{credentialID} | Read One User Credential
[**readOneUserCredentialWallet**](UserCredentialsApi.md#readOneUserCredentialWallet) | **GET** /environments/{environmentID}/users/{userID}/credentials/{credentialID}/provisionedCredentials | Read One User Credential Wallet
[**updateUserCredential**](UserCredentialsApi.md#updateUserCredential) | **PUT** /environments/{environmentID}/users/{userID}/credentials/{credentialID} | Update a User Credential



## createAUserCredential

> UserCredential createAUserCredential(environmentID, userID, opts)

Create a User Credential

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.UserCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'userCredential': new PingOnePlatformApiCredentials.UserCredential() // UserCredential | 
};
apiInstance.createAUserCredential(environmentID, userID, opts).then((data) => {
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
 **userCredential** | [**UserCredential**](UserCredential.md)|  | [optional] 

### Return type

[**UserCredential**](UserCredential.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## readAllUserCredentials

> EntityArray readAllUserCredentials(environmentID, userID)

Read All User Credentials

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.UserCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.readAllUserCredentials(environmentID, userID).then((data) => {
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

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneUserCredential

> UserCredential readOneUserCredential(environmentID, userID, credentialID)

Read One User Credential

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.UserCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let credentialID = "credentialID_example"; // String | 
apiInstance.readOneUserCredential(environmentID, userID, credentialID).then((data) => {
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
 **credentialID** | **String**|  | 

### Return type

[**UserCredential**](UserCredential.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneUserCredentialWallet

> EntityArray readOneUserCredentialWallet(environmentID, userID, credentialID)

Read One User Credential Wallet

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.UserCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let credentialID = "credentialID_example"; // String | 
apiInstance.readOneUserCredentialWallet(environmentID, userID, credentialID).then((data) => {
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
 **credentialID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserCredential

> UserCredential updateUserCredential(environmentID, userID, credentialID, opts)

Update a User Credential

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.UserCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let credentialID = "credentialID_example"; // String | 
let opts = {
  'userCredential': new PingOnePlatformApiCredentials.UserCredential() // UserCredential | 
};
apiInstance.updateUserCredential(environmentID, userID, credentialID, opts).then((data) => {
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
 **credentialID** | **String**|  | 
 **userCredential** | [**UserCredential**](UserCredential.md)|  | [optional] 

### Return type

[**UserCredential**](UserCredential.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

