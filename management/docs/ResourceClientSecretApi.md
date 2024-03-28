# PingOnePlatformApiSsoAndBase.ResourceClientSecretApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResourceSecret**](ResourceClientSecretApi.md#createResourceSecret) | **POST** /environments/{environmentID}/resources/{resourceID}/secret | CREATE Resource Client Secret
[**readResourceSecret**](ResourceClientSecretApi.md#readResourceSecret) | **GET** /environments/{environmentID}/resources/{resourceID}/secret | READ Resource Client Secret



## createResourceSecret

> ResourceSecret createResourceSecret(environmentID, resourceID)

CREATE Resource Client Secret

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceClientSecretApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
apiInstance.createResourceSecret(environmentID, resourceID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **resourceID** | **String**|  | 

### Return type

[**ResourceSecret**](ResourceSecret.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readResourceSecret

> ResourceSecret readResourceSecret(environmentID, resourceID)

READ Resource Client Secret

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceClientSecretApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
apiInstance.readResourceSecret(environmentID, resourceID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **resourceID** | **String**|  | 

### Return type

[**ResourceSecret**](ResourceSecret.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

