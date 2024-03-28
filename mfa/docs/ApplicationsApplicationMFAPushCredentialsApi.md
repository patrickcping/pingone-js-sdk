# PingOnePlatformApiPingOneMfa.ApplicationsApplicationMFAPushCredentialsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMFAPushCredential**](ApplicationsApplicationMFAPushCredentialsApi.md#createMFAPushCredential) | **POST** /environments/{environmentID}/applications/{applicationID}/pushCredentials | CREATE MFA Push Credential
[**deleteMFAPushCredential**](ApplicationsApplicationMFAPushCredentialsApi.md#deleteMFAPushCredential) | **DELETE** /environments/{environmentID}/applications/{applicationID}/pushCredentials/{pushCredentialID} | DELETE MFA Push Credential
[**readAllMFAPushCredentials**](ApplicationsApplicationMFAPushCredentialsApi.md#readAllMFAPushCredentials) | **GET** /environments/{environmentID}/applications/{applicationID}/pushCredentials | READ All MFA Push Credentials
[**readOneMFAPushCredential**](ApplicationsApplicationMFAPushCredentialsApi.md#readOneMFAPushCredential) | **GET** /environments/{environmentID}/applications/{applicationID}/pushCredentials/{pushCredentialID} | READ One MFA Push Credential
[**updateMFAPushCredential**](ApplicationsApplicationMFAPushCredentialsApi.md#updateMFAPushCredential) | **PUT** /environments/{environmentID}/applications/{applicationID}/pushCredentials/{pushCredentialID} | UPDATE MFA Push Credential



## createMFAPushCredential

> MFAPushCredentialResponse createMFAPushCredential(environmentID, applicationID, opts)

CREATE MFA Push Credential

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.ApplicationsApplicationMFAPushCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'mFAPushCredentialRequest': new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest() // MFAPushCredentialRequest | 
};
apiInstance.createMFAPushCredential(environmentID, applicationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **mFAPushCredentialRequest** | [**MFAPushCredentialRequest**](MFAPushCredentialRequest.md)|  | [optional] 

### Return type

[**MFAPushCredentialResponse**](MFAPushCredentialResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMFAPushCredential

> deleteMFAPushCredential(environmentID, applicationID, pushCredentialID, opts)

DELETE MFA Push Credential

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.ApplicationsApplicationMFAPushCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let pushCredentialID = "pushCredentialID_example"; // String | 
let opts = {
  'authorization': Bearer {{accessToken}} // String | 
};
apiInstance.deleteMFAPushCredential(environmentID, applicationID, pushCredentialID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **pushCredentialID** | **String**|  | 
 **authorization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllMFAPushCredentials

> EntityArray readAllMFAPushCredentials(environmentID, applicationID)

READ All MFA Push Credentials

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.ApplicationsApplicationMFAPushCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readAllMFAPushCredentials(environmentID, applicationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneMFAPushCredential

> MFAPushCredentialResponse readOneMFAPushCredential(environmentID, applicationID, pushCredentialID)

READ One MFA Push Credential

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.ApplicationsApplicationMFAPushCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let pushCredentialID = "pushCredentialID_example"; // String | 
apiInstance.readOneMFAPushCredential(environmentID, applicationID, pushCredentialID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **pushCredentialID** | **String**|  | 

### Return type

[**MFAPushCredentialResponse**](MFAPushCredentialResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMFAPushCredential

> MFAPushCredentialResponse updateMFAPushCredential(environmentID, applicationID, pushCredentialID, opts)

UPDATE MFA Push Credential

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.ApplicationsApplicationMFAPushCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let pushCredentialID = "pushCredentialID_example"; // String | 
let opts = {
  'mFAPushCredentialRequest': new PingOnePlatformApiPingOneMfa.MFAPushCredentialRequest() // MFAPushCredentialRequest | 
};
apiInstance.updateMFAPushCredential(environmentID, applicationID, pushCredentialID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **pushCredentialID** | **String**|  | 
 **mFAPushCredentialRequest** | [**MFAPushCredentialRequest**](MFAPushCredentialRequest.md)|  | [optional] 

### Return type

[**MFAPushCredentialResponse**](MFAPushCredentialResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

