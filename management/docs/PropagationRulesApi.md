# PingOnePlatformApiSsoAndBase.PropagationRulesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDPropagationPlansPlanIDRulesGet**](PropagationRulesApi.md#environmentsEnvironmentIDPropagationPlansPlanIDRulesGet) | **GET** /environments/{environmentID}/propagation/plans/{planID}/rules | READ One Plan&#39;s Rules
[**environmentsEnvironmentIDPropagationRulesGet**](PropagationRulesApi.md#environmentsEnvironmentIDPropagationRulesGet) | **GET** /environments/{environmentID}/propagation/rules | READ All Rules
[**environmentsEnvironmentIDPropagationRulesPost**](PropagationRulesApi.md#environmentsEnvironmentIDPropagationRulesPost) | **POST** /environments/{environmentID}/propagation/rules | CREATE Rule
[**environmentsEnvironmentIDPropagationRulesRuleIDDelete**](PropagationRulesApi.md#environmentsEnvironmentIDPropagationRulesRuleIDDelete) | **DELETE** /environments/{environmentID}/propagation/rules/{ruleID} | DELETE Rule
[**environmentsEnvironmentIDPropagationRulesRuleIDGet**](PropagationRulesApi.md#environmentsEnvironmentIDPropagationRulesRuleIDGet) | **GET** /environments/{environmentID}/propagation/rules/{ruleID} | READ One Rule
[**environmentsEnvironmentIDPropagationRulesStoreIDPut**](PropagationRulesApi.md#environmentsEnvironmentIDPropagationRulesStoreIDPut) | **PUT** /environments/{environmentID}/propagation/rules/{storeID} | UPDATE Rule



## environmentsEnvironmentIDPropagationPlansPlanIDRulesGet

> environmentsEnvironmentIDPropagationPlansPlanIDRulesGet(environmentID, planID, opts)

READ One Plan&#39;s Rules

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRulesApi();
let environmentID = "environmentID_example"; // String | 
let planID = "planID_example"; // String | 
let opts = {
  'accept': application/json, // String | 
  'contentType': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationPlansPlanIDRulesGet(environmentID, planID, opts).then(() => {
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
 **contentType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRulesGet

> environmentsEnvironmentIDPropagationRulesGet(environmentID, opts)

READ All Rules

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRulesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'accept': application/json, // String | 
  'authorization': "authorization_example" // String | 
};
apiInstance.environmentsEnvironmentIDPropagationRulesGet(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **accept** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRulesPost

> environmentsEnvironmentIDPropagationRulesPost(environmentID, opts)

CREATE Rule

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRulesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationRulesPost(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRulesRuleIDDelete

> environmentsEnvironmentIDPropagationRulesRuleIDDelete(environmentID, ruleID, opts)

DELETE Rule

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRulesApi();
let environmentID = "environmentID_example"; // String | 
let ruleID = "ruleID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationRulesRuleIDDelete(environmentID, ruleID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **ruleID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRulesRuleIDGet

> environmentsEnvironmentIDPropagationRulesRuleIDGet(environmentID, ruleID, opts)

READ One Rule

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRulesApi();
let environmentID = "environmentID_example"; // String | 
let ruleID = "ruleID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationRulesRuleIDGet(environmentID, ruleID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **ruleID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRulesStoreIDPut

> environmentsEnvironmentIDPropagationRulesStoreIDPut(environmentID, storeID, opts)

UPDATE Rule

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRulesApi();
let environmentID = "environmentID_example"; // String | 
let storeID = "storeID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationRulesStoreIDPut(environmentID, storeID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **storeID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

