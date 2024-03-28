# PingOnePlatformApiSsoAndBase.GroupRoleAssignmentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroupRoleAssignment**](GroupRoleAssignmentsApi.md#createGroupRoleAssignment) | **POST** /environments/{environmentID}/groups/{groupID}/roleAssignments | CREATE Group Role Assignment
[**deleteGroupRoleAssignment**](GroupRoleAssignmentsApi.md#deleteGroupRoleAssignment) | **DELETE** /environments/{environmentID}/groups/{groupID}/roleAssignments/{roleAssignmentID} | DELETE Group&#39;s Role Assignment
[**readGroupRoleAssignments**](GroupRoleAssignmentsApi.md#readGroupRoleAssignments) | **GET** /environments/{environmentID}/groups/{groupID}/roleAssignments | READ Role Assignments
[**readOneGroupRoleAssignment**](GroupRoleAssignmentsApi.md#readOneGroupRoleAssignment) | **GET** /environments/{environmentID}/groups/{groupID}/roleAssignments/{roleAssignmentID} | READ One Group Assignment



## createGroupRoleAssignment

> RoleAssignment createGroupRoleAssignment(environmentID, groupID, opts)

CREATE Group Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let opts = {
  'roleAssignment': new PingOnePlatformApiSsoAndBase.RoleAssignment() // RoleAssignment | 
};
apiInstance.createGroupRoleAssignment(environmentID, groupID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **roleAssignment** | [**RoleAssignment**](RoleAssignment.md)|  | [optional] 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGroupRoleAssignment

> deleteGroupRoleAssignment(environmentID, groupID, roleAssignmentID)

DELETE Group&#39;s Role Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let roleAssignmentID = "roleAssignmentID_example"; // String | 
apiInstance.deleteGroupRoleAssignment(environmentID, groupID, roleAssignmentID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **roleAssignmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readGroupRoleAssignments

> EntityArray readGroupRoleAssignments(environmentID, groupID)

READ Role Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
apiInstance.readGroupRoleAssignments(environmentID, groupID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneGroupRoleAssignment

> RoleAssignment readOneGroupRoleAssignment(environmentID, groupID, roleAssignmentID)

READ One Group Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupRoleAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let roleAssignmentID = "roleAssignmentID_example"; // String | 
apiInstance.readOneGroupRoleAssignment(environmentID, groupID, roleAssignmentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **roleAssignmentID** | **String**|  | 

### Return type

[**RoleAssignment**](RoleAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

