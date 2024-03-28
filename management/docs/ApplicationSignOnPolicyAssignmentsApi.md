# PingOnePlatformApiSsoAndBase.ApplicationSignOnPolicyAssignmentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSignOnPolicyAssignment**](ApplicationSignOnPolicyAssignmentsApi.md#createSignOnPolicyAssignment) | **POST** /environments/{environmentID}/applications/{applicationID}/signOnPolicyAssignments | CREATE SOP Assignment
[**deleteSignOnPolicyAssignment**](ApplicationSignOnPolicyAssignmentsApi.md#deleteSignOnPolicyAssignment) | **DELETE** /environments/{environmentID}/applications/{applicationID}/signOnPolicyAssignments/{SOPAssignmentID} | DELETE SOP Assignment
[**readAllSignOnPolicyAssignments**](ApplicationSignOnPolicyAssignmentsApi.md#readAllSignOnPolicyAssignments) | **GET** /environments/{environmentID}/applications/{applicationID}/signOnPolicyAssignments | READ All SOP Assignments
[**readOneSignOnPolicyAssignment**](ApplicationSignOnPolicyAssignmentsApi.md#readOneSignOnPolicyAssignment) | **GET** /environments/{environmentID}/applications/{applicationID}/signOnPolicyAssignments/{SOPAssignmentID} | READ One SOP Assignment
[**updateSignOnPolicyAssignment**](ApplicationSignOnPolicyAssignmentsApi.md#updateSignOnPolicyAssignment) | **PUT** /environments/{environmentID}/applications/{applicationID}/signOnPolicyAssignments/{SOPAssignmentID} | UPDATE SOP Assignment



## createSignOnPolicyAssignment

> SignOnPolicyAssignment createSignOnPolicyAssignment(environmentID, applicationID, opts)

CREATE SOP Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSignOnPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'signOnPolicyAssignment': new PingOnePlatformApiSsoAndBase.SignOnPolicyAssignment() // SignOnPolicyAssignment | 
};
apiInstance.createSignOnPolicyAssignment(environmentID, applicationID, opts).then((data) => {
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
 **signOnPolicyAssignment** | [**SignOnPolicyAssignment**](SignOnPolicyAssignment.md)|  | [optional] 

### Return type

[**SignOnPolicyAssignment**](SignOnPolicyAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSignOnPolicyAssignment

> deleteSignOnPolicyAssignment(environmentID, applicationID, sOPAssignmentID)

DELETE SOP Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSignOnPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let sOPAssignmentID = "sOPAssignmentID_example"; // String | 
apiInstance.deleteSignOnPolicyAssignment(environmentID, applicationID, sOPAssignmentID).then(() => {
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
 **sOPAssignmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllSignOnPolicyAssignments

> EntityArray readAllSignOnPolicyAssignments(environmentID, applicationID)

READ All SOP Assignments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSignOnPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readAllSignOnPolicyAssignments(environmentID, applicationID).then((data) => {
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


## readOneSignOnPolicyAssignment

> SignOnPolicyAssignment readOneSignOnPolicyAssignment(environmentID, applicationID, sOPAssignmentID)

READ One SOP Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSignOnPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let sOPAssignmentID = "sOPAssignmentID_example"; // String | 
apiInstance.readOneSignOnPolicyAssignment(environmentID, applicationID, sOPAssignmentID).then((data) => {
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
 **sOPAssignmentID** | **String**|  | 

### Return type

[**SignOnPolicyAssignment**](SignOnPolicyAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSignOnPolicyAssignment

> SignOnPolicyAssignment updateSignOnPolicyAssignment(environmentID, applicationID, sOPAssignmentID, opts)

UPDATE SOP Assignment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationSignOnPolicyAssignmentsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let sOPAssignmentID = "sOPAssignmentID_example"; // String | 
let opts = {
  'signOnPolicyAssignment': new PingOnePlatformApiSsoAndBase.SignOnPolicyAssignment() // SignOnPolicyAssignment | 
};
apiInstance.updateSignOnPolicyAssignment(environmentID, applicationID, sOPAssignmentID, opts).then((data) => {
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
 **sOPAssignmentID** | **String**|  | 
 **signOnPolicyAssignment** | [**SignOnPolicyAssignment**](SignOnPolicyAssignment.md)|  | [optional] 

### Return type

[**SignOnPolicyAssignment**](SignOnPolicyAssignment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

