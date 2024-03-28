# PingOnePlatformApiPingOneMfa.FIDO2PolicyApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFIDO2Policy**](FIDO2PolicyApi.md#createFIDO2Policy) | **POST** /environments/{environmentID}/fido2Policies | CREATE FIDO2 Policy
[**deleteFIDO2Policy**](FIDO2PolicyApi.md#deleteFIDO2Policy) | **DELETE** /environments/{environmentID}/fido2Policies/{fido2PolicyID} | DELETE FIDO2 Policy
[**readFIDO2Policies**](FIDO2PolicyApi.md#readFIDO2Policies) | **GET** /environments/{environmentID}/fido2Policies | READ FIDO2 Policies
[**readOneFIDO2Policy**](FIDO2PolicyApi.md#readOneFIDO2Policy) | **GET** /environments/{environmentID}/fido2Policies/{fido2PolicyID} | READ One FIDO2 Policy
[**updateFIDO2Policy**](FIDO2PolicyApi.md#updateFIDO2Policy) | **PUT** /environments/{environmentID}/fido2Policies/{fido2PolicyID} | UPDATE FIDO2 Policy



## createFIDO2Policy

> FIDO2Policy createFIDO2Policy(environmentID, opts)

CREATE FIDO2 Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDO2PolicyApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'fIDO2Policy': new PingOnePlatformApiPingOneMfa.FIDO2Policy() // FIDO2Policy | 
};
apiInstance.createFIDO2Policy(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fIDO2Policy** | [**FIDO2Policy**](FIDO2Policy.md)|  | [optional] 

### Return type

[**FIDO2Policy**](FIDO2Policy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFIDO2Policy

> deleteFIDO2Policy(environmentID, fido2PolicyID)

DELETE FIDO2 Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDO2PolicyApi();
let environmentID = "environmentID_example"; // String | 
let fido2PolicyID = "fido2PolicyID_example"; // String | 
apiInstance.deleteFIDO2Policy(environmentID, fido2PolicyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fido2PolicyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readFIDO2Policies

> EntityArray readFIDO2Policies(environmentID)

READ FIDO2 Policies

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDO2PolicyApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readFIDO2Policies(environmentID).then((data) => {
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


## readOneFIDO2Policy

> FIDO2Policy readOneFIDO2Policy(environmentID, fido2PolicyID, opts)

READ One FIDO2 Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDO2PolicyApi();
let environmentID = "environmentID_example"; // String | 
let fido2PolicyID = "fido2PolicyID_example"; // String | 
let opts = {
  'expand': "expand_example" // String | 
};
apiInstance.readOneFIDO2Policy(environmentID, fido2PolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fido2PolicyID** | **String**|  | 
 **expand** | **String**|  | [optional] 

### Return type

[**FIDO2Policy**](FIDO2Policy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFIDO2Policy

> FIDO2Policy updateFIDO2Policy(environmentID, fido2PolicyID, opts)

UPDATE FIDO2 Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDO2PolicyApi();
let environmentID = "environmentID_example"; // String | 
let fido2PolicyID = "fido2PolicyID_example"; // String | 
let opts = {
  'fIDO2Policy': new PingOnePlatformApiPingOneMfa.FIDO2Policy() // FIDO2Policy | 
};
apiInstance.updateFIDO2Policy(environmentID, fido2PolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fido2PolicyID** | **String**|  | 
 **fIDO2Policy** | [**FIDO2Policy**](FIDO2Policy.md)|  | [optional] 

### Return type

[**FIDO2Policy**](FIDO2Policy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

