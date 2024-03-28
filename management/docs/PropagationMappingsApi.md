# PingOnePlatformApiSsoAndBase.PropagationMappingsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDPropagationMappingMappingIDDelete**](PropagationMappingsApi.md#environmentsEnvironmentIDPropagationMappingMappingIDDelete) | **DELETE** /environments/{environmentID}/propagation/mapping/{mappingID} | DELETE Mapping
[**environmentsEnvironmentIDPropagationMappingsMappingIDGet**](PropagationMappingsApi.md#environmentsEnvironmentIDPropagationMappingsMappingIDGet) | **GET** /environments/{environmentID}/propagation/mappings/{mappingID} | READ One Mapping
[**environmentsEnvironmentIDPropagationMappingsMappingIDPut**](PropagationMappingsApi.md#environmentsEnvironmentIDPropagationMappingsMappingIDPut) | **PUT** /environments/{environmentID}/propagation/mappings/{mappingID} | UPDATE Mapping
[**environmentsEnvironmentIDPropagationRulesRuleIDMappingsGet**](PropagationMappingsApi.md#environmentsEnvironmentIDPropagationRulesRuleIDMappingsGet) | **GET** /environments/{environmentID}/propagation/rules/{ruleID}/mappings | READ One Rule  Mapping
[**environmentsEnvironmentIDPropagationRulesRuleIDMappingsPost**](PropagationMappingsApi.md#environmentsEnvironmentIDPropagationRulesRuleIDMappingsPost) | **POST** /environments/{environmentID}/propagation/rules/{ruleID}/mappings | CREATE Rule Mapping



## environmentsEnvironmentIDPropagationMappingMappingIDDelete

> environmentsEnvironmentIDPropagationMappingMappingIDDelete(environmentID, mappingID, opts)

DELETE Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationMappingsApi();
let environmentID = "environmentID_example"; // String | 
let mappingID = "mappingID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationMappingMappingIDDelete(environmentID, mappingID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **mappingID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationMappingsMappingIDGet

> environmentsEnvironmentIDPropagationMappingsMappingIDGet(environmentID, mappingID, opts)

READ One Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationMappingsApi();
let environmentID = "environmentID_example"; // String | 
let mappingID = "mappingID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationMappingsMappingIDGet(environmentID, mappingID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **mappingID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationMappingsMappingIDPut

> environmentsEnvironmentIDPropagationMappingsMappingIDPut(environmentID, mappingID, opts)

UPDATE Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationMappingsApi();
let environmentID = "environmentID_example"; // String | 
let mappingID = "mappingID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationMappingsMappingIDPut(environmentID, mappingID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **mappingID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRulesRuleIDMappingsGet

> environmentsEnvironmentIDPropagationRulesRuleIDMappingsGet(environmentID, ruleID, opts)

READ One Rule  Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationMappingsApi();
let environmentID = "environmentID_example"; // String | 
let ruleID = "ruleID_example"; // String | 
let opts = {
  'accept': application/json, // String | 
  'contentType': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationRulesRuleIDMappingsGet(environmentID, ruleID, opts).then(() => {
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
 **contentType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRulesRuleIDMappingsPost

> environmentsEnvironmentIDPropagationRulesRuleIDMappingsPost(environmentID, ruleID, opts)

CREATE Rule Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationMappingsApi();
let environmentID = "environmentID_example"; // String | 
let ruleID = "ruleID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationRulesRuleIDMappingsPost(environmentID, ruleID, opts).then(() => {
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
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

