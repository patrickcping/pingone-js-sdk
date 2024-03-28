# PingOnePlatformApiPingOneVerify.VerifyPoliciesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVerifyPolicy**](VerifyPoliciesApi.md#createVerifyPolicy) | **POST** /environments/{environmentID}/verifyPolicies | CREATE Verify Policy
[**deleteVerifyPolicy**](VerifyPoliciesApi.md#deleteVerifyPolicy) | **DELETE** /environments/{environmentID}/verifyPolicies/{verifyPolicyID} | Delete Verify Policy
[**readAllVerifyPolicies**](VerifyPoliciesApi.md#readAllVerifyPolicies) | **GET** /environments/{environmentID}/verifyPolicies | READ All Verify Policies
[**readOneVerifyPolicy**](VerifyPoliciesApi.md#readOneVerifyPolicy) | **GET** /environments/{environmentID}/verifyPolicies/{verifyPolicyID} | READ One Verify Policy
[**updateVerifyPolicy**](VerifyPoliciesApi.md#updateVerifyPolicy) | **PUT** /environments/{environmentID}/verifyPolicies/{verifyPolicyID} | UPDATE Verify Policy



## createVerifyPolicy

> VerifyPolicy createVerifyPolicy(environmentID, opts)

CREATE Verify Policy

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VerifyPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'verifyPolicy': {"name":"Example Verify Policy","default":false,"description":"All types required","email":{"createMfaDevice":true,"otp":{"attempts":{"count":5},"deliveries":{"cooldown":{"duration":30,"timeUnit":"SECONDS"},"count":3},"lifeTime":{"duration":10,"timeUnit":"MINUTES"},"notification":{"templateName":"email_phone_verification"}},"verify":"REQUIRED"},"facialComparison":{"threshold":"HIGH","verify":"REQUIRED"},"governmentId":{"verify":"REQUIRED"},"liveness":{"threshold":"HIGH","verify":"REQUIRED"},"phone":{"createMfaDevice":true,"otp":{"attempts":{"count":5},"deliveries":{"cooldown":{"duration":30,"timeUnit":"SECONDS"},"count":3},"lifeTime":{"duration":10,"timeUnit":"MINUTES"},"notification":{"templateName":"email_phone_verification"}},"verify":"REQUIRED"},"transaction":{"dataCollection":{"timeout":{"duration":15,"timeUnit":"MINUTES"}},"dataCollectionOnly":false,"timeout":{"duration":30,"timeUnit":"MINUTES"}}} // VerifyPolicy | 
};
apiInstance.createVerifyPolicy(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **verifyPolicy** | [**VerifyPolicy**](VerifyPolicy.md)|  | [optional] 

### Return type

[**VerifyPolicy**](VerifyPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVerifyPolicy

> deleteVerifyPolicy(environmentID, verifyPolicyID)

Delete Verify Policy

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VerifyPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let verifyPolicyID = "verifyPolicyID_example"; // String | 
apiInstance.deleteVerifyPolicy(environmentID, verifyPolicyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **verifyPolicyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllVerifyPolicies

> EntityArray readAllVerifyPolicies(environmentID)

READ All Verify Policies

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VerifyPoliciesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllVerifyPolicies(environmentID).then((data) => {
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


## readOneVerifyPolicy

> VerifyPolicy readOneVerifyPolicy(environmentID, verifyPolicyID)

READ One Verify Policy

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VerifyPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let verifyPolicyID = "verifyPolicyID_example"; // String | 
apiInstance.readOneVerifyPolicy(environmentID, verifyPolicyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **verifyPolicyID** | **String**|  | 

### Return type

[**VerifyPolicy**](VerifyPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVerifyPolicy

> VerifyPolicy updateVerifyPolicy(environmentID, verifyPolicyID, opts)

UPDATE Verify Policy

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VerifyPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let verifyPolicyID = "verifyPolicyID_example"; // String | 
let opts = {
  'verifyPolicy': {"default":false,"description":"Verify Government ID and compare Selfie","facialComparison":{"threshold":"HIGH","verify":"REQUIRED"},"governmentId":{"verify":"REQUIRED"},"liveness":{"threshold":"HIGH","verify":"REQUIRED"},"name":"Identity Verification"} // VerifyPolicy | 
};
apiInstance.updateVerifyPolicy(environmentID, verifyPolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **verifyPolicyID** | **String**|  | 
 **verifyPolicy** | [**VerifyPolicy**](VerifyPolicy.md)|  | [optional] 

### Return type

[**VerifyPolicy**](VerifyPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

