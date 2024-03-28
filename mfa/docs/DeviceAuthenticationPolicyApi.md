# PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeviceAuthenticationPolicies**](DeviceAuthenticationPolicyApi.md#createDeviceAuthenticationPolicies) | **POST** /environments/{environmentID}/deviceAuthenticationPolicies | CREATE Device Authentication Policy
[**deleteDeviceAuthenticationPolicy**](DeviceAuthenticationPolicyApi.md#deleteDeviceAuthenticationPolicy) | **DELETE** /environments/{environmentID}/deviceAuthenticationPolicies/{deviceAuthenticationPolicyID} | DELETE Device Authentication Policy
[**readDeviceAuthenticationPolicies**](DeviceAuthenticationPolicyApi.md#readDeviceAuthenticationPolicies) | **GET** /environments/{environmentID}/deviceAuthenticationPolicies | READ Device Authentication Policies
[**readOneDeviceAuthenticationPolicy**](DeviceAuthenticationPolicyApi.md#readOneDeviceAuthenticationPolicy) | **GET** /environments/{environmentID}/deviceAuthenticationPolicies/{deviceAuthenticationPolicyID} | READ One Device Authentication Policy
[**updateDeviceAuthenticationPolicy**](DeviceAuthenticationPolicyApi.md#updateDeviceAuthenticationPolicy) | **PUT** /environments/{environmentID}/deviceAuthenticationPolicies/{deviceAuthenticationPolicyID} | UPDATE Device Authentication Policy



## createDeviceAuthenticationPolicies

> DeviceAuthenticationPolicyPostResponse createDeviceAuthenticationPolicies(environmentID, opts)

CREATE Device Authentication Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'contentType': new PingOnePlatformApiPingOneMfa.EnumDeviceAuthenticationPolicyPostContentType(), // EnumDeviceAuthenticationPolicyPostContentType | 
  'deviceAuthenticationPolicyPost': new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyPost() // DeviceAuthenticationPolicyPost | 
};
apiInstance.createDeviceAuthenticationPolicies(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **contentType** | [**EnumDeviceAuthenticationPolicyPostContentType**](.md)|  | [optional] 
 **deviceAuthenticationPolicyPost** | [**DeviceAuthenticationPolicyPost**](DeviceAuthenticationPolicyPost.md)|  | [optional] 

### Return type

[**DeviceAuthenticationPolicyPostResponse**](DeviceAuthenticationPolicyPostResponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json, application/vnd.pingidentity.deviceAuthenticationPolicy.fido2.migrate+json
- **Accept**: application/json


## deleteDeviceAuthenticationPolicy

> deleteDeviceAuthenticationPolicy(environmentID, deviceAuthenticationPolicyID)

DELETE Device Authentication Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyApi();
let environmentID = "environmentID_example"; // String | 
let deviceAuthenticationPolicyID = "deviceAuthenticationPolicyID_example"; // String | 
apiInstance.deleteDeviceAuthenticationPolicy(environmentID, deviceAuthenticationPolicyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **deviceAuthenticationPolicyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readDeviceAuthenticationPolicies

> EntityArray readDeviceAuthenticationPolicies(environmentID)

READ Device Authentication Policies

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readDeviceAuthenticationPolicies(environmentID).then((data) => {
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


## readOneDeviceAuthenticationPolicy

> DeviceAuthenticationPolicy readOneDeviceAuthenticationPolicy(environmentID, deviceAuthenticationPolicyID)

READ One Device Authentication Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyApi();
let environmentID = "environmentID_example"; // String | 
let deviceAuthenticationPolicyID = "deviceAuthenticationPolicyID_example"; // String | 
apiInstance.readOneDeviceAuthenticationPolicy(environmentID, deviceAuthenticationPolicyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **deviceAuthenticationPolicyID** | **String**|  | 

### Return type

[**DeviceAuthenticationPolicy**](DeviceAuthenticationPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDeviceAuthenticationPolicy

> DeviceAuthenticationPolicy updateDeviceAuthenticationPolicy(environmentID, deviceAuthenticationPolicyID, opts)

UPDATE Device Authentication Policy

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicyApi();
let environmentID = "environmentID_example"; // String | 
let deviceAuthenticationPolicyID = "deviceAuthenticationPolicyID_example"; // String | 
let opts = {
  'deviceAuthenticationPolicy': new PingOnePlatformApiPingOneMfa.DeviceAuthenticationPolicy() // DeviceAuthenticationPolicy | 
};
apiInstance.updateDeviceAuthenticationPolicy(environmentID, deviceAuthenticationPolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **deviceAuthenticationPolicyID** | **String**|  | 
 **deviceAuthenticationPolicy** | [**DeviceAuthenticationPolicy**](DeviceAuthenticationPolicy.md)|  | [optional] 

### Return type

[**DeviceAuthenticationPolicy**](DeviceAuthenticationPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

