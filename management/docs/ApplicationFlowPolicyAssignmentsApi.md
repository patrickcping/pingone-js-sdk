# PingOnePlatformApiSsoAndBase.ApplicationFlowPolicyAssignmentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFlowPolicyAssignment**](ApplicationFlowPolicyAssignmentsApi.md#createFlowPolicyAssignment) | **POST** /environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments | CREATE Flow Assignment
[**deleteFlowPolicyAssignment**](ApplicationFlowPolicyAssignmentsApi.md#deleteFlowPolicyAssignment) | **DELETE** /environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments/{flowPolicyAssignmentID} | DELETE Flow Policy Assignment
[**readAllFlowPolicyAssignments**](ApplicationFlowPolicyAssignmentsApi.md#readAllFlowPolicyAssignments) | **GET** /environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments | READ All Flow Policy Assignments
[**readOneFlowPolicyAssignment**](ApplicationFlowPolicyAssignmentsApi.md#readOneFlowPolicyAssignment) | **GET** /environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments/{flowPolicyAssignmentID} | READ One Flow Policy Assignment
[**updateFlowPolicyAssignment**](ApplicationFlowPolicyAssignmentsApi.md#updateFlowPolicyAssignment) | **PUT** /environments/{environmentID}/applications/{applicationID}/flowPolicyAssignments/{flowPolicyAssignmentID} | UPDATE Flow Policy Assignment



## createFlowPolicyAssignment

> FlowPolicyAssignment createFlowPolicyAssignment(environmentID, applicationID, opts)

CREATE Flow Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationFlowPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'flowPolicyAssignment': new PingOnePlatformApiSsoAndBase.FlowPolicyAssignment() // FlowPolicyAssignment | 
};
apiInstance.createFlowPolicyAssignment(environmentID, applicationID, opts).then((data) => {
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
 **flowPolicyAssignment** | [**FlowPolicyAssignment**](FlowPolicyAssignment.md)|  | [optional] 

### Return type

[**FlowPolicyAssignment**](FlowPolicyAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFlowPolicyAssignment

> deleteFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID)

DELETE Flow Policy Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationFlowPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let flowPolicyAssignmentID = "flowPolicyAssignmentID_example"; // String | 
apiInstance.deleteFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID).then(() => {
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
 **flowPolicyAssignmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllFlowPolicyAssignments

> EntityArray readAllFlowPolicyAssignments(environmentID, applicationID)

READ All Flow Policy Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationFlowPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readAllFlowPolicyAssignments(environmentID, applicationID).then((data) => {
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


## readOneFlowPolicyAssignment

> FlowPolicyAssignment readOneFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID)

READ One Flow Policy Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationFlowPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let flowPolicyAssignmentID = "flowPolicyAssignmentID_example"; // String | 
apiInstance.readOneFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID).then((data) => {
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
 **flowPolicyAssignmentID** | **String**|  | 

### Return type

[**FlowPolicyAssignment**](FlowPolicyAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateFlowPolicyAssignment

> FlowPolicyAssignment updateFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID, opts)

UPDATE Flow Policy Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationFlowPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let flowPolicyAssignmentID = "flowPolicyAssignmentID_example"; // String | 
let opts = {
  'flowPolicyAssignment': new PingOnePlatformApiSsoAndBase.FlowPolicyAssignment() // FlowPolicyAssignment | 
};
apiInstance.updateFlowPolicyAssignment(environmentID, applicationID, flowPolicyAssignmentID, opts).then((data) => {
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
 **flowPolicyAssignmentID** | **String**|  | 
 **flowPolicyAssignment** | [**FlowPolicyAssignment**](FlowPolicyAssignment.md)|  | [optional] 

### Return type

[**FlowPolicyAssignment**](FlowPolicyAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

