# PingOnePlatformApiSsoAndBase.PasswordPoliciesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPasswordPolicy**](PasswordPoliciesApi.md#createPasswordPolicy) | **POST** /environments/{environmentID}/passwordPolicies | CREATE Password Policy
[**deletePasswordPolicy**](PasswordPoliciesApi.md#deletePasswordPolicy) | **DELETE** /environments/{environmentID}/passwordPolicies/{passwordPolicyID} | DELETE Password Policy
[**readAllPasswordPolicies**](PasswordPoliciesApi.md#readAllPasswordPolicies) | **GET** /environments/{environmentID}/passwordPolicies | READ All Password Policies
[**readOnePasswordPolicy**](PasswordPoliciesApi.md#readOnePasswordPolicy) | **GET** /environments/{environmentID}/passwordPolicies/{passwordPolicyID} | READ One Password Policy
[**updatePasswordPolicy**](PasswordPoliciesApi.md#updatePasswordPolicy) | **PUT** /environments/{environmentID}/passwordPolicies/{passwordPolicyID} | UPDATE Password Policy



## createPasswordPolicy

> PasswordPolicy createPasswordPolicy(environmentID, passwordPolicy)

CREATE Password Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PasswordPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let passwordPolicy = new PingOnePlatformApiSsoAndBase.PasswordPolicy(); // PasswordPolicy | 
apiInstance.createPasswordPolicy(environmentID, passwordPolicy).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **passwordPolicy** | [**PasswordPolicy**](PasswordPolicy.md)|  | 

### Return type

[**PasswordPolicy**](PasswordPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePasswordPolicy

> deletePasswordPolicy(environmentID, passwordPolicyID)

DELETE Password Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PasswordPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let passwordPolicyID = "passwordPolicyID_example"; // String | 
apiInstance.deletePasswordPolicy(environmentID, passwordPolicyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **passwordPolicyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllPasswordPolicies

> EntityArray readAllPasswordPolicies(environmentID)

READ All Password Policies

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PasswordPoliciesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllPasswordPolicies(environmentID).then((data) => {
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


## readOnePasswordPolicy

> PasswordPolicy readOnePasswordPolicy(environmentID, passwordPolicyID)

READ One Password Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PasswordPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let passwordPolicyID = "passwordPolicyID_example"; // String | 
apiInstance.readOnePasswordPolicy(environmentID, passwordPolicyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **passwordPolicyID** | **String**|  | 

### Return type

[**PasswordPolicy**](PasswordPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePasswordPolicy

> PasswordPolicy updatePasswordPolicy(environmentID, passwordPolicyID, opts)

UPDATE Password Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PasswordPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let passwordPolicyID = "passwordPolicyID_example"; // String | 
let opts = {
  'passwordPolicy': new PingOnePlatformApiSsoAndBase.PasswordPolicy() // PasswordPolicy | 
};
apiInstance.updatePasswordPolicy(environmentID, passwordPolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **passwordPolicyID** | **String**|  | 
 **passwordPolicy** | [**PasswordPolicy**](PasswordPolicy.md)|  | [optional] 

### Return type

[**PasswordPolicy**](PasswordPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

