# PingOnePlatformApiSsoAndBase.GatewayInstancesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllGatewayInstances**](GatewayInstancesApi.md#readAllGatewayInstances) | **GET** /environments/{environmentID}/gateways/{gatewayID}/instances | READ All Gateway Instances
[**readOneGatewayInstance**](GatewayInstancesApi.md#readOneGatewayInstance) | **GET** /environments/{environmentID}/gateways/{gatewayID}/instances/{instanceID} | READ One Gateway Instance



## readAllGatewayInstances

> EntityArray readAllGatewayInstances(environmentID, gatewayID)

READ All Gateway Instances

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayInstancesApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
apiInstance.readAllGatewayInstances(environmentID, gatewayID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **gatewayID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneGatewayInstance

> GatewayInstance readOneGatewayInstance(environmentID, gatewayID, instanceID)

READ One Gateway Instance

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayInstancesApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let instanceID = "instanceID_example"; // String | 
apiInstance.readOneGatewayInstance(environmentID, gatewayID, instanceID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **gatewayID** | **String**|  | 
 **instanceID** | **String**|  | 

### Return type

[**GatewayInstance**](GatewayInstance.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

