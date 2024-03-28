# PingOnePlatformApiSsoAndBase.KeyRotationPoliciesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKeyRotationPolicy**](KeyRotationPoliciesApi.md#createKeyRotationPolicy) | **POST** /environments/{environmentID}/keyRotationPolicies | CREATE Key Rotation Policy
[**deleteKeyRotationPolicy**](KeyRotationPoliciesApi.md#deleteKeyRotationPolicy) | **DELETE** /environments/{environmentID}/keyRotationPolicies/{keyRotationPolicyID} | DELETE Key Rotation Policy
[**getKeyRotationPolicies**](KeyRotationPoliciesApi.md#getKeyRotationPolicies) | **GET** /environments/{environmentID}/keyRotationPolicies | GET Key Rotation Policies
[**getKeyRotationPolicy**](KeyRotationPoliciesApi.md#getKeyRotationPolicy) | **GET** /environments/{environmentID}/keyRotationPolicies/{keyRotationPolicyID} | GET Key Rotation Policy
[**updateKeyRotationPolicy**](KeyRotationPoliciesApi.md#updateKeyRotationPolicy) | **PUT** /environments/{environmentID}/keyRotationPolicies/{keyRotationPolicyID} | UPDATE Key Rotation Policy



## createKeyRotationPolicy

> KeyRotationPolicy createKeyRotationPolicy(environmentID, opts)

CREATE Key Rotation Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.KeyRotationPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'keyRotationPolicy': new PingOnePlatformApiSsoAndBase.KeyRotationPolicy() // KeyRotationPolicy | 
};
apiInstance.createKeyRotationPolicy(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyRotationPolicy** | [**KeyRotationPolicy**](KeyRotationPolicy.md)|  | [optional] 

### Return type

[**KeyRotationPolicy**](KeyRotationPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteKeyRotationPolicy

> deleteKeyRotationPolicy(environmentID, keyRotationPolicyID)

DELETE Key Rotation Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.KeyRotationPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let keyRotationPolicyID = "keyRotationPolicyID_example"; // String | 
apiInstance.deleteKeyRotationPolicy(environmentID, keyRotationPolicyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyRotationPolicyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getKeyRotationPolicies

> EntityArray getKeyRotationPolicies(environmentID)

GET Key Rotation Policies

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.KeyRotationPoliciesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.getKeyRotationPolicies(environmentID).then((data) => {
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


## getKeyRotationPolicy

> KeyRotationPolicy getKeyRotationPolicy(environmentID, keyRotationPolicyID)

GET Key Rotation Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.KeyRotationPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let keyRotationPolicyID = "keyRotationPolicyID_example"; // String | 
apiInstance.getKeyRotationPolicy(environmentID, keyRotationPolicyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyRotationPolicyID** | **String**|  | 

### Return type

[**KeyRotationPolicy**](KeyRotationPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateKeyRotationPolicy

> KeyRotationPolicy updateKeyRotationPolicy(environmentID, keyRotationPolicyID, opts)

UPDATE Key Rotation Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.KeyRotationPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let keyRotationPolicyID = "keyRotationPolicyID_example"; // String | 
let opts = {
  'keyRotationPolicy': new PingOnePlatformApiSsoAndBase.KeyRotationPolicy() // KeyRotationPolicy | 
};
apiInstance.updateKeyRotationPolicy(environmentID, keyRotationPolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyRotationPolicyID** | **String**|  | 
 **keyRotationPolicy** | [**KeyRotationPolicy**](KeyRotationPolicy.md)|  | [optional] 

### Return type

[**KeyRotationPolicy**](KeyRotationPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

