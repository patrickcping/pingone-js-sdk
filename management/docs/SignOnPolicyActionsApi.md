# PingOnePlatformApiSsoAndBase.SignOnPolicyActionsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSignOnPolicyAction**](SignOnPolicyActionsApi.md#createSignOnPolicyAction) | **POST** /environments/{environmentID}/signOnPolicies/{policyID}/actions | CREATE Sign-On Policy Action
[**deleteSignOnPolicyAction**](SignOnPolicyActionsApi.md#deleteSignOnPolicyAction) | **DELETE** /environments/{environmentID}/signOnPolicies/{policyID}/actions/{actionID} | DELETE Sign-On Policy Action
[**readAllSignOnPolicyActions**](SignOnPolicyActionsApi.md#readAllSignOnPolicyActions) | **GET** /environments/{environmentID}/signOnPolicies/{policyID}/actions | READ All Sign-On Policy Actions
[**readOneSignOnPolicyAction**](SignOnPolicyActionsApi.md#readOneSignOnPolicyAction) | **GET** /environments/{environmentID}/signOnPolicies/{policyID}/actions/{actionID} | READ One Sign-On Policy Action
[**updateSignOnPolicyAction**](SignOnPolicyActionsApi.md#updateSignOnPolicyAction) | **PUT** /environments/{environmentID}/signOnPolicies/{policyID}/actions/{actionID} | UPDATE Sign-On Policy Action



## createSignOnPolicyAction

> SignOnPolicyAction createSignOnPolicyAction(environmentID, policyID, opts)

CREATE Sign-On Policy Action

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionsApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
let opts = {
  'signOnPolicyAction': new PingOnePlatformApiSsoAndBase.SignOnPolicyAction() // SignOnPolicyAction | 
};
apiInstance.createSignOnPolicyAction(environmentID, policyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **policyID** | **String**|  | 
 **signOnPolicyAction** | [**SignOnPolicyAction**](SignOnPolicyAction.md)|  | [optional] 

### Return type

[**SignOnPolicyAction**](SignOnPolicyAction.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSignOnPolicyAction

> deleteSignOnPolicyAction(environmentID, policyID, actionID)

DELETE Sign-On Policy Action

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionsApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
let actionID = "actionID_example"; // String | 
apiInstance.deleteSignOnPolicyAction(environmentID, policyID, actionID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **policyID** | **String**|  | 
 **actionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllSignOnPolicyActions

> EntityArray readAllSignOnPolicyActions(environmentID, policyID)

READ All Sign-On Policy Actions

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionsApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
apiInstance.readAllSignOnPolicyActions(environmentID, policyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **policyID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneSignOnPolicyAction

> SignOnPolicyAction readOneSignOnPolicyAction(environmentID, policyID, actionID)

READ One Sign-On Policy Action

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionsApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
let actionID = "actionID_example"; // String | 
apiInstance.readOneSignOnPolicyAction(environmentID, policyID, actionID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **policyID** | **String**|  | 
 **actionID** | **String**|  | 

### Return type

[**SignOnPolicyAction**](SignOnPolicyAction.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSignOnPolicyAction

> SignOnPolicyAction updateSignOnPolicyAction(environmentID, policyID, actionID, opts)

UPDATE Sign-On Policy Action

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPolicyActionsApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
let actionID = "actionID_example"; // String | 
let opts = {
  'signOnPolicyAction': new PingOnePlatformApiSsoAndBase.SignOnPolicyAction() // SignOnPolicyAction | 
};
apiInstance.updateSignOnPolicyAction(environmentID, policyID, actionID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **policyID** | **String**|  | 
 **actionID** | **String**|  | 
 **signOnPolicyAction** | [**SignOnPolicyAction**](SignOnPolicyAction.md)|  | [optional] 

### Return type

[**SignOnPolicyAction**](SignOnPolicyAction.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

