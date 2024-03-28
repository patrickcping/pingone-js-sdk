# PingOnePlatformApiPingOneMfa.FIDOPolicyApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFidoPolicy**](FIDOPolicyApi.md#createFidoPolicy) | **POST** /environments/{environmentID}/fidoPolicies | CREATE FIDO Policy
[**deleteFidoPolicy**](FIDOPolicyApi.md#deleteFidoPolicy) | **DELETE** /environments/{environmentID}/fidoPolicies/{fidoPolicyID} | DELETE FIDO Policy
[**readFidoPolicies**](FIDOPolicyApi.md#readFidoPolicies) | **GET** /environments/{environmentID}/fidoPolicies | READ FIDO Policies
[**readOneFidoPolicy**](FIDOPolicyApi.md#readOneFidoPolicy) | **GET** /environments/{environmentID}/fidoPolicies/{fidoPolicyID} | READ One FIDO Policy
[**updateFIDOPolicy**](FIDOPolicyApi.md#updateFIDOPolicy) | **PUT** /environments/{environmentID}/fidoPolicies/{fidoPolicyID} | UPDATE FIDO Policy



## createFidoPolicy

> FIDOPolicy createFidoPolicy(environmentID, opts)

CREATE FIDO Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDOPolicyApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'fIDOPolicy': new PingOnePlatformApiPingOneMfa.FIDOPolicy() // FIDOPolicy | 
};
apiInstance.createFidoPolicy(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fIDOPolicy** | [**FIDOPolicy**](FIDOPolicy.md)|  | [optional] 

### Return type

[**FIDOPolicy**](FIDOPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFidoPolicy

> deleteFidoPolicy(environmentID, fidoPolicyID)

DELETE FIDO Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDOPolicyApi();
let environmentID = "environmentID_example"; // String | 
let fidoPolicyID = "fidoPolicyID_example"; // String | 
apiInstance.deleteFidoPolicy(environmentID, fidoPolicyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fidoPolicyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readFidoPolicies

> EntityArray readFidoPolicies(environmentID)

READ FIDO Policies

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDOPolicyApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readFidoPolicies(environmentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneFidoPolicy

> FIDOPolicy readOneFidoPolicy(environmentID, fidoPolicyID)

READ One FIDO Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDOPolicyApi();
let environmentID = "environmentID_example"; // String | 
let fidoPolicyID = "fidoPolicyID_example"; // String | 
apiInstance.readOneFidoPolicy(environmentID, fidoPolicyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fidoPolicyID** | **String**|  | 

### Return type

[**FIDOPolicy**](FIDOPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFIDOPolicy

> FIDOPolicy updateFIDOPolicy(environmentID, fidoPolicyID, opts)

UPDATE FIDO Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDOPolicyApi();
let environmentID = "environmentID_example"; // String | 
let fidoPolicyID = "fidoPolicyID_example"; // String | 
let opts = {
  'fIDOPolicy': new PingOnePlatformApiPingOneMfa.FIDOPolicy() // FIDOPolicy | 
};
apiInstance.updateFIDOPolicy(environmentID, fidoPolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fidoPolicyID** | **String**|  | 
 **fIDOPolicy** | [**FIDOPolicy**](FIDOPolicy.md)|  | [optional] 

### Return type

[**FIDOPolicy**](FIDOPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

