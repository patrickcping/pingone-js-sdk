# PingOnePlatformApiSsoAndBase.IdentityPropagationPlansApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlan**](IdentityPropagationPlansApi.md#createPlan) | **POST** /environments/{environmentID}/propagation/plans | CREATE Plan
[**deletePlan**](IdentityPropagationPlansApi.md#deletePlan) | **DELETE** /environments/{environmentID}/propagation/plans/{planID} | DELETE Plan
[**readAllPlans**](IdentityPropagationPlansApi.md#readAllPlans) | **GET** /environments/{environmentID}/propagation/plans | READ All Plans
[**readOnePlan**](IdentityPropagationPlansApi.md#readOnePlan) | **GET** /environments/{environmentID}/propagation/plans/{planID} | READ One Plan
[**updatePlan**](IdentityPropagationPlansApi.md#updatePlan) | **PUT** /environments/{environmentID}/propagation/plans/{planID} | UPDATE Plan



## createPlan

> IdentityPropagationPlan createPlan(environmentID, opts)

CREATE Plan

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityPropagationPlansApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'identityPropagationPlan': new PingOnePlatformApiSsoAndBase.IdentityPropagationPlan() // IdentityPropagationPlan | 
};
apiInstance.createPlan(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **identityPropagationPlan** | [**IdentityPropagationPlan**](IdentityPropagationPlan.md)|  | [optional] 

### Return type

[**IdentityPropagationPlan**](IdentityPropagationPlan.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePlan

> deletePlan(environmentID, planID, opts)

DELETE Plan

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityPropagationPlansApi();
let environmentID = "environmentID_example"; // String | 
let planID = "planID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.deletePlan(environmentID, planID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **planID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllPlans

> EntityArray readAllPlans(environmentID, opts)

READ All Plans

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityPropagationPlansApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.readAllPlans(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOnePlan

> IdentityPropagationPlan readOnePlan(environmentID, planID, opts)

READ One Plan

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityPropagationPlansApi();
let environmentID = "environmentID_example"; // String | 
let planID = "planID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.readOnePlan(environmentID, planID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **planID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

[**IdentityPropagationPlan**](IdentityPropagationPlan.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePlan

> IdentityPropagationPlan updatePlan(environmentID, planID, opts)

UPDATE Plan

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityPropagationPlansApi();
let environmentID = "environmentID_example"; // String | 
let planID = "planID_example"; // String | 
let opts = {
  'identityPropagationPlan': new PingOnePlatformApiSsoAndBase.IdentityPropagationPlan() // IdentityPropagationPlan | 
};
apiInstance.updatePlan(environmentID, planID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **planID** | **String**|  | 
 **identityPropagationPlan** | [**IdentityPropagationPlan**](IdentityPropagationPlan.md)|  | [optional] 

### Return type

[**IdentityPropagationPlan**](IdentityPropagationPlan.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

