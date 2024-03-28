# PingOnePlatformApiSsoAndBase.GatewayRoleAssignmentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGatewayRoleAssignment**](GatewayRoleAssignmentsApi.md#createGatewayRoleAssignment) | **POST** /environments/{environmentID}/gateways/{gatewayID}/roleAssignments | CREATE Gateway Role Assignments
[**deleteGatewayRoleAssignment**](GatewayRoleAssignmentsApi.md#deleteGatewayRoleAssignment) | **DELETE** /environments/{environmentID}/gateways/{gatewayID}/roleAssignments/{gatewayRoleAssignmentID} | DELETE Gateway Role Assignment
[**readGatewayRoleAssignments**](GatewayRoleAssignmentsApi.md#readGatewayRoleAssignments) | **GET** /environments/{environmentID}/gateways/{gatewayID}/roleAssignments | READ Gateway Role Assignments
[**readOneGatewayRoleAssignment**](GatewayRoleAssignmentsApi.md#readOneGatewayRoleAssignment) | **GET** /environments/{environmentID}/gateways/{gatewayID}/roleAssignments/{gatewayRoleAssignmentID} | READ One Gateway Role Assignment
[**updateGatewayRoleAssignment**](GatewayRoleAssignmentsApi.md#updateGatewayRoleAssignment) | **PUT** /environments/{environmentID}/gateways/{gatewayID}/roleAssignments/{gatewayRoleAssignmentID} | UPDATE Gateway Role Assignments



## createGatewayRoleAssignment

> RoleAssignment createGatewayRoleAssignment(environmentID, gatewayID, opts)

CREATE Gateway Role Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let opts = {
  'roleAssignment': new PingOnePlatformApiSsoAndBase.RoleAssignment() // RoleAssignment | 
};
apiInstance.createGatewayRoleAssignment(environmentID, gatewayID, opts).then((data) => {
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
 **roleAssignment** | [**RoleAssignment**](RoleAssignment.md)|  | [optional] 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGatewayRoleAssignment

> deleteGatewayRoleAssignment(environmentID, gatewayID, gatewayRoleAssignmentID)

DELETE Gateway Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let gatewayRoleAssignmentID = "gatewayRoleAssignmentID_example"; // String | 
apiInstance.deleteGatewayRoleAssignment(environmentID, gatewayID, gatewayRoleAssignmentID).then(() => {
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
 **gatewayRoleAssignmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readGatewayRoleAssignments

> EntityArray readGatewayRoleAssignments(environmentID, gatewayID)

READ Gateway Role Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
apiInstance.readGatewayRoleAssignments(environmentID, gatewayID).then((data) => {
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


## readOneGatewayRoleAssignment

> RoleAssignment readOneGatewayRoleAssignment(environmentID, gatewayID, gatewayRoleAssignmentID)

READ One Gateway Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let gatewayRoleAssignmentID = "gatewayRoleAssignmentID_example"; // String | 
apiInstance.readOneGatewayRoleAssignment(environmentID, gatewayID, gatewayRoleAssignmentID).then((data) => {
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
 **gatewayRoleAssignmentID** | **String**|  | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGatewayRoleAssignment

> RoleAssignment updateGatewayRoleAssignment(environmentID, gatewayID, gatewayRoleAssignmentID, opts)

UPDATE Gateway Role Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GatewayRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let gatewayID = "gatewayID_example"; // String | 
let gatewayRoleAssignmentID = "gatewayRoleAssignmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.updateGatewayRoleAssignment(environmentID, gatewayID, gatewayRoleAssignmentID, opts).then((data) => {
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
 **gatewayRoleAssignmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

