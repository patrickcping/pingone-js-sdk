# PingOnePlatformApiSsoAndBase.FlowPoliciesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllFlowPolicies**](FlowPoliciesApi.md#readAllFlowPolicies) | **GET** /environments/{environmentID}/flowPolicies | READ All Flow Policies
[**readOneFlowPolicy**](FlowPoliciesApi.md#readOneFlowPolicy) | **GET** /environments/{environmentID}/flowPolicies/{flowPolicyID} | READ ONE Flow Policy



## readAllFlowPolicies

> EntityArray readAllFlowPolicies(environmentID, opts)

READ All Flow Policies

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.FlowPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': trigger.type eq "AUTHENTICATION" // String | 
};
apiInstance.readAllFlowPolicies(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **filter** | **String**|  | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneFlowPolicy

> FlowPolicy readOneFlowPolicy(environmentID, flowPolicyID)

READ ONE Flow Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.FlowPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let flowPolicyID = "flowPolicyID_example"; // String | 
apiInstance.readOneFlowPolicy(environmentID, flowPolicyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **flowPolicyID** | **String**|  | 

### Return type

[**FlowPolicy**](FlowPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

