# PingOnePlatformApiPingOneRisk.RiskPoliciesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRiskPolicySet**](RiskPoliciesApi.md#createRiskPolicySet) | **POST** /environments/{environmentID}/riskPolicySets | CREATE Risk Policy Set
[**deleteRiskPolicySet**](RiskPoliciesApi.md#deleteRiskPolicySet) | **DELETE** /environments/{environmentID}/riskPolicySets/{riskPolicySetID} | DELETE Risk Policy Set 
[**readOneRiskPolicySet**](RiskPoliciesApi.md#readOneRiskPolicySet) | **GET** /environments/{environmentID}/riskPolicySets/{riskPolicySetID} | READ One Risk Policy Set
[**readRiskPolicySets**](RiskPoliciesApi.md#readRiskPolicySets) | **GET** /environments/{environmentID}/riskPolicySets | READ Risk Policy Sets
[**updateRiskPolicySet**](RiskPoliciesApi.md#updateRiskPolicySet) | **PUT** /environments/{environmentID}/riskPolicySets/{riskPolicySetID} | UPDATE Risk Policy Set



## createRiskPolicySet

> RiskPolicySet createRiskPolicySet(environmentID, opts)

CREATE Risk Policy Set

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'riskPolicySet': new PingOnePlatformApiPingOneRisk.RiskPolicySet() // RiskPolicySet | 
};
apiInstance.createRiskPolicySet(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPolicySet** | [**RiskPolicySet**](RiskPolicySet.md)|  | [optional] 

### Return type

[**RiskPolicySet**](RiskPolicySet.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRiskPolicySet

> deleteRiskPolicySet(environmentID, riskPolicySetID)

DELETE Risk Policy Set 

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let riskPolicySetID = "riskPolicySetID_example"; // String | 
apiInstance.deleteRiskPolicySet(environmentID, riskPolicySetID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPolicySetID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneRiskPolicySet

> RiskPolicySet readOneRiskPolicySet(environmentID, riskPolicySetID)

READ One Risk Policy Set

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let riskPolicySetID = "riskPolicySetID_example"; // String | 
apiInstance.readOneRiskPolicySet(environmentID, riskPolicySetID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPolicySetID** | **String**|  | 

### Return type

[**RiskPolicySet**](RiskPolicySet.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readRiskPolicySets

> EntityArray readRiskPolicySets(environmentID)

READ Risk Policy Sets

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskPoliciesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readRiskPolicySets(environmentID).then((data) => {
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


## updateRiskPolicySet

> RiskPolicySet updateRiskPolicySet(environmentID, riskPolicySetID, opts)

UPDATE Risk Policy Set

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let riskPolicySetID = "riskPolicySetID_example"; // String | 
let opts = {
  'riskPolicySet': new PingOnePlatformApiPingOneRisk.RiskPolicySet() // RiskPolicySet | 
};
apiInstance.updateRiskPolicySet(environmentID, riskPolicySetID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPolicySetID** | **String**|  | 
 **riskPolicySet** | [**RiskPolicySet**](RiskPolicySet.md)|  | [optional] 

### Return type

[**RiskPolicySet**](RiskPolicySet.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

