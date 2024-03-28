# PingOnePlatformApiSsoAndBase.SignOnPoliciesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSignOnPolicy**](SignOnPoliciesApi.md#createSignOnPolicy) | **POST** /environments/{environmentID}/signOnPolicies | CREATE Sign On Policy
[**deleteSignOnPolicy**](SignOnPoliciesApi.md#deleteSignOnPolicy) | **DELETE** /environments/{environmentID}/signOnPolicies/{policyID} | DELETE Sign On Policy
[**readAllSignOnPolicies**](SignOnPoliciesApi.md#readAllSignOnPolicies) | **GET** /environments/{environmentID}/signOnPolicies | READ All Sign On Policies
[**readOneSignOnPolicy**](SignOnPoliciesApi.md#readOneSignOnPolicy) | **GET** /environments/{environmentID}/signOnPolicies/{policyID} | READ One Sign On Policy
[**updateSignOnPolicy**](SignOnPoliciesApi.md#updateSignOnPolicy) | **PUT** /environments/{environmentID}/signOnPolicies/{policyID} | UPDATE Sign On Policy



## createSignOnPolicy

> SignOnPolicy createSignOnPolicy(environmentID, opts)

CREATE Sign On Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'signOnPolicy': new PingOnePlatformApiSsoAndBase.SignOnPolicy() // SignOnPolicy | 
};
apiInstance.createSignOnPolicy(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **signOnPolicy** | [**SignOnPolicy**](SignOnPolicy.md)|  | [optional] 

### Return type

[**SignOnPolicy**](SignOnPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSignOnPolicy

> deleteSignOnPolicy(environmentID, policyID)

DELETE Sign On Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
apiInstance.deleteSignOnPolicy(environmentID, policyID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllSignOnPolicies

> EntityArray readAllSignOnPolicies(environmentID)

READ All Sign On Policies

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPoliciesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllSignOnPolicies(environmentID).then((data) => {
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


## readOneSignOnPolicy

> SignOnPolicy readOneSignOnPolicy(environmentID, policyID)

READ One Sign On Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
apiInstance.readOneSignOnPolicy(environmentID, policyID).then((data) => {
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

[**SignOnPolicy**](SignOnPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSignOnPolicy

> SignOnPolicy updateSignOnPolicy(environmentID, policyID, opts)

UPDATE Sign On Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SignOnPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let policyID = "policyID_example"; // String | 
let opts = {
  'signOnPolicy': new PingOnePlatformApiSsoAndBase.SignOnPolicy() // SignOnPolicy | 
};
apiInstance.updateSignOnPolicy(environmentID, policyID, opts).then((data) => {
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
 **signOnPolicy** | [**SignOnPolicy**](SignOnPolicy.md)|  | [optional] 

### Return type

[**SignOnPolicy**](SignOnPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

