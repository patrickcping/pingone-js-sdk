# PingOnePlatformApiSsoAndBase.GatewaysApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGateway**](GatewaysApi.md#createGateway) | **POST** /environments/{environmentID}/gateways | CREATE Gateway
[**deleteGateway**](GatewaysApi.md#deleteGateway) | **DELETE** /environments/{environmentID}/gateways/{gatewayID} | DELETE Gateway
[**readAllGateways**](GatewaysApi.md#readAllGateways) | **GET** /environments/{environmentID}/gateways | READ All Gateways
[**readOneGateway**](GatewaysApi.md#readOneGateway) | **GET** /environments/{environmentID}/gateways/{gatewayID} | READ One Gateway
[**updateGateway**](GatewaysApi.md#updateGateway) | **PUT** /environments/{environmentID}/gateways/{gatewayID} | UPDATE Gateway



## createGateway

> CreateGateway201Response createGateway(environmentID, opts)

CREATE Gateway

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewaysApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'createGatewayRequest': new PingOnePlatformApiSsoAndBase.CreateGatewayRequest() // CreateGatewayRequest | 
};
apiInstance.createGateway(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **createGatewayRequest** | [**CreateGatewayRequest**](CreateGatewayRequest.md)|  | [optional] 

### Return type

[**CreateGateway201Response**](CreateGateway201Response.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGateway

> deleteGateway(environmentID, gatewayID)

DELETE Gateway

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewaysApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
apiInstance.deleteGateway(environmentID, gatewayID).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllGateways

> EntityArray readAllGateways(environmentID)

READ All Gateways

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewaysApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllGateways(environmentID).then((data) => {
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


## readOneGateway

> CreateGateway201Response readOneGateway(environmentID, gatewayID)

READ One Gateway

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewaysApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
apiInstance.readOneGateway(environmentID, gatewayID).then((data) => {
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

[**CreateGateway201Response**](CreateGateway201Response.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGateway

> CreateGateway201Response updateGateway(environmentID, gatewayID, opts)

UPDATE Gateway

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewaysApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let opts = {
  'createGatewayRequest': new PingOnePlatformApiSsoAndBase.CreateGatewayRequest() // CreateGatewayRequest | 
};
apiInstance.updateGateway(environmentID, gatewayID, opts).then((data) => {
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
 **createGatewayRequest** | [**CreateGatewayRequest**](CreateGatewayRequest.md)|  | [optional] 

### Return type

[**CreateGateway201Response**](CreateGateway201Response.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

