# PingOnePlatformApiAuthorize.PolicyDecisionManagementApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDecisionEndpoint**](PolicyDecisionManagementApi.md#createDecisionEndpoint) | **POST** /environments/{environmentID}/decisionEndpoints | CREATE Decision Endpoint
[**deleteDecisionEndpoint**](PolicyDecisionManagementApi.md#deleteDecisionEndpoint) | **DELETE** /environments/{environmentID}/decisionEndpoints/{decisionEndpointID} | DELETE Decision Endpoint
[**readAllDecisionEndpoints**](PolicyDecisionManagementApi.md#readAllDecisionEndpoints) | **GET** /environments/{environmentID}/decisionEndpoints | READ All Decision Endpoints
[**readOneDecisionEndpoint**](PolicyDecisionManagementApi.md#readOneDecisionEndpoint) | **GET** /environments/{environmentID}/decisionEndpoints/{decisionEndpointID} | READ One Decision Endpoint
[**updateDecisionEndpoint**](PolicyDecisionManagementApi.md#updateDecisionEndpoint) | **PUT** /environments/{environmentID}/decisionEndpoints/{decisionEndpointID} | UPDATE Decision Endpoint



## createDecisionEndpoint

> DecisionEndpoint createDecisionEndpoint(environmentID, opts)

CREATE Decision Endpoint

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.PolicyDecisionManagementApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'decisionEndpoint': new PingOnePlatformApiAuthorize.DecisionEndpoint() // DecisionEndpoint | 
};
apiInstance.createDecisionEndpoint(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **decisionEndpoint** | [**DecisionEndpoint**](DecisionEndpoint.md)|  | [optional] 

### Return type

[**DecisionEndpoint**](DecisionEndpoint.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDecisionEndpoint

> deleteDecisionEndpoint(environmentID, decisionEndpointID)

DELETE Decision Endpoint

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.PolicyDecisionManagementApi();
let environmentID = "environmentID_example"; // String | 
let decisionEndpointID = "decisionEndpointID_example"; // String | 
apiInstance.deleteDecisionEndpoint(environmentID, decisionEndpointID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **decisionEndpointID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllDecisionEndpoints

> EntityArray readAllDecisionEndpoints(environmentID)

READ All Decision Endpoints

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.PolicyDecisionManagementApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllDecisionEndpoints(environmentID).then((data) => {
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


## readOneDecisionEndpoint

> DecisionEndpoint readOneDecisionEndpoint(environmentID, decisionEndpointID)

READ One Decision Endpoint

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.PolicyDecisionManagementApi();
let environmentID = "environmentID_example"; // String | 
let decisionEndpointID = "decisionEndpointID_example"; // String | 
apiInstance.readOneDecisionEndpoint(environmentID, decisionEndpointID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **decisionEndpointID** | **String**|  | 

### Return type

[**DecisionEndpoint**](DecisionEndpoint.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDecisionEndpoint

> DecisionEndpoint updateDecisionEndpoint(environmentID, decisionEndpointID, opts)

UPDATE Decision Endpoint

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.PolicyDecisionManagementApi();
let environmentID = "environmentID_example"; // String | 
let decisionEndpointID = "decisionEndpointID_example"; // String | 
let opts = {
  'decisionEndpoint': new PingOnePlatformApiAuthorize.DecisionEndpoint() // DecisionEndpoint | 
};
apiInstance.updateDecisionEndpoint(environmentID, decisionEndpointID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **decisionEndpointID** | **String**|  | 
 **decisionEndpoint** | [**DecisionEndpoint**](DecisionEndpoint.md)|  | [optional] 

### Return type

[**DecisionEndpoint**](DecisionEndpoint.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

