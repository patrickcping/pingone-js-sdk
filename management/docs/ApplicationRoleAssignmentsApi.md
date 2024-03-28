# PingOnePlatformApiSsoAndBase.ApplicationRoleAssignmentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationRoleAssignment**](ApplicationRoleAssignmentsApi.md#createApplicationRoleAssignment) | **POST** /environments/{environmentID}/applications/{applicationID}/roleAssignments | CREATE Application Role Assignments
[**deleteApplicationRoleAssignment**](ApplicationRoleAssignmentsApi.md#deleteApplicationRoleAssignment) | **DELETE** /environments/{environmentID}/applications/{applicationID}/roleAssignments/{roleAssignmentID} | DELETE Application Role Assignment
[**readApplicationRoleAssignments**](ApplicationRoleAssignmentsApi.md#readApplicationRoleAssignments) | **GET** /environments/{environmentID}/applications/{applicationID}/roleAssignments | READ Application Role Assignments
[**readOneApplicationRoleAssignment**](ApplicationRoleAssignmentsApi.md#readOneApplicationRoleAssignment) | **GET** /environments/{environmentID}/applications/{applicationID}/roleAssignments/{roleAssignmentID} | READ One Application Role Assignment



## createApplicationRoleAssignment

> RoleAssignment createApplicationRoleAssignment(environmentID, applicationID, opts)

CREATE Application Role Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'roleAssignment': new PingOnePlatformApiSsoAndBase.RoleAssignment() // RoleAssignment | 
};
apiInstance.createApplicationRoleAssignment(environmentID, applicationID, opts).then((data) => {
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
 **roleAssignment** | [**RoleAssignment**](RoleAssignment.md)|  | [optional] 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplicationRoleAssignment

> deleteApplicationRoleAssignment(environmentID, applicationID, roleAssignmentID)

DELETE Application Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let roleAssignmentID = "roleAssignmentID_example"; // String | 
apiInstance.deleteApplicationRoleAssignment(environmentID, applicationID, roleAssignmentID).then(() => {
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
 **roleAssignmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readApplicationRoleAssignments

> EntityArray readApplicationRoleAssignments(environmentID, applicationID)

READ Application Role Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readApplicationRoleAssignments(environmentID, applicationID).then((data) => {
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

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneApplicationRoleAssignment

> RoleAssignment readOneApplicationRoleAssignment(environmentID, applicationID, roleAssignmentID)

READ One Application Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let roleAssignmentID = "roleAssignmentID_example"; // String | 
apiInstance.readOneApplicationRoleAssignment(environmentID, applicationID, roleAssignmentID).then((data) => {
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
 **roleAssignmentID** | **String**|  | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

