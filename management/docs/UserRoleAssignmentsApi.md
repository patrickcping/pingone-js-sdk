# PingOnePlatformApiSsoAndBase.UserRoleAssignmentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserRoleAssignment**](UserRoleAssignmentsApi.md#createUserRoleAssignment) | **POST** /environments/{environmentID}/users/{userID}/roleAssignments | CREATE User Role Assignment
[**deleteUserRoleAssignment**](UserRoleAssignmentsApi.md#deleteUserRoleAssignment) | **DELETE** /environments/{environmentID}/users/{userID}/roleAssignments/{roleAssignmentID} | DELETE User&#39;s Role Assignment
[**readOneUserRoleAssignment**](UserRoleAssignmentsApi.md#readOneUserRoleAssignment) | **GET** /environments/{environmentID}/users/{userID}/roleAssignments/{roleAssignmentID} | READ One Role Assignment
[**readUserRoleAssignments**](UserRoleAssignmentsApi.md#readUserRoleAssignments) | **GET** /environments/{environmentID}/users/{userID}/roleAssignments | READ Role Assignments



## createUserRoleAssignment

> RoleAssignment createUserRoleAssignment(environmentID, userID, opts)

CREATE User Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'roleAssignment': new PingOnePlatformApiSsoAndBase.RoleAssignment() // RoleAssignment | 
};
apiInstance.createUserRoleAssignment(environmentID, userID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **roleAssignment** | [**RoleAssignment**](RoleAssignment.md)|  | [optional] 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUserRoleAssignment

> deleteUserRoleAssignment(environmentID, userID, roleAssignmentID)

DELETE User&#39;s Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let roleAssignmentID = "roleAssignmentID_example"; // String | 
apiInstance.deleteUserRoleAssignment(environmentID, userID, roleAssignmentID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **roleAssignmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneUserRoleAssignment

> RoleAssignment readOneUserRoleAssignment(environmentID, userID, roleAssignmentID)

READ One Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let roleAssignmentID = "roleAssignmentID_example"; // String | 
apiInstance.readOneUserRoleAssignment(environmentID, userID, roleAssignmentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **roleAssignmentID** | **String**|  | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readUserRoleAssignments

> EntityArray readUserRoleAssignments(environmentID, userID)

READ Role Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.readUserRoleAssignments(environmentID, userID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

