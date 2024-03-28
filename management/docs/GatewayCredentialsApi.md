# PingOnePlatformApiSsoAndBase.GatewayCredentialsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGatewayCredential**](GatewayCredentialsApi.md#createGatewayCredential) | **POST** /environments/{environmentID}/gateways/{gatewayID}/credentials | CREATE Gateway Credentials
[**deleteGatewayCredential**](GatewayCredentialsApi.md#deleteGatewayCredential) | **DELETE** /environments/{environmentID}/gateways/{gatewayID}/credentials/{credentialID} | DELETE Gateway Credentials
[**readAllGatewayCredentials**](GatewayCredentialsApi.md#readAllGatewayCredentials) | **GET** /environments/{environmentID}/gateways/{gatewayID}/credentials | READ All Gateway Credentials
[**readOneGatewayCredential**](GatewayCredentialsApi.md#readOneGatewayCredential) | **GET** /environments/{environmentID}/gateways/{gatewayID}/credentials/{credentialID} | READ One Gateway Credential



## createGatewayCredential

> GatewayCredential createGatewayCredential(environmentID, gatewayID)

CREATE Gateway Credentials

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
apiInstance.createGatewayCredential(environmentID, gatewayID).then((data) => {
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

[**GatewayCredential**](GatewayCredential.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteGatewayCredential

> deleteGatewayCredential(environmentID, gatewayID, credentialID)

DELETE Gateway Credentials

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let credentialID = "credentialID_example"; // String | 
apiInstance.deleteGatewayCredential(environmentID, gatewayID, credentialID).then(() => {
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
 **credentialID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllGatewayCredentials

> EntityArray readAllGatewayCredentials(environmentID, gatewayID)

READ All Gateway Credentials

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
apiInstance.readAllGatewayCredentials(environmentID, gatewayID).then((data) => {
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


## readOneGatewayCredential

> GatewayCredential readOneGatewayCredential(environmentID, gatewayID, credentialID)

READ One Gateway Credential

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayCredentialsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let credentialID = "credentialID_example"; // String | 
apiInstance.readOneGatewayCredential(environmentID, gatewayID, credentialID).then((data) => {
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
 **credentialID** | **String**|  | 

### Return type

[**GatewayCredential**](GatewayCredential.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

