# PingOnePlatformApiSsoAndBase.ApplicationSecretApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePreviousApplicationSecret**](ApplicationSecretApi.md#deletePreviousApplicationSecret) | **DELETE** /environments/{environmentID}/applications/{applicationID}/secret | DELETE Previous Application Secret
[**readApplicationSecret**](ApplicationSecretApi.md#readApplicationSecret) | **GET** /environments/{environmentID}/applications/{applicationID}/secret | READ Application Secret
[**updateApplicationSecret**](ApplicationSecretApi.md#updateApplicationSecret) | **POST** /environments/{environmentID}/applications/{applicationID}/secret | UPDATE Application Secret



## deletePreviousApplicationSecret

> deletePreviousApplicationSecret(environmentID, applicationID)

DELETE Previous Application Secret

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSecretApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.deletePreviousApplicationSecret(environmentID, applicationID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readApplicationSecret

> ApplicationSecret readApplicationSecret(environmentID, applicationID)

READ Application Secret

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSecretApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readApplicationSecret(environmentID, applicationID).then((data) => {
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

[**ApplicationSecret**](ApplicationSecret.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApplicationSecret

> ApplicationSecret updateApplicationSecret(environmentID, applicationID, opts)

UPDATE Application Secret

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSecretApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'applicationSecret': new PingOnePlatformApiSsoAndBase.ApplicationSecret() // ApplicationSecret | 
};
apiInstance.updateApplicationSecret(environmentID, applicationID, opts).then((data) => {
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
 **applicationSecret** | [**ApplicationSecret**](ApplicationSecret.md)|  | [optional] 

### Return type

[**ApplicationSecret**](ApplicationSecret.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

