# PingOnePlatformApiPingOneRisk.RiskEvaluationsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRiskEvaluation**](RiskEvaluationsApi.md#createRiskEvaluation) | **POST** /environments/{environmentID}/riskEvaluations | CREATE Risk Evaluation
[**readOneRiskEvaluation**](RiskEvaluationsApi.md#readOneRiskEvaluation) | **GET** /environments/{environmentID}/riskEvaluations/{riskEvaluationID} | READ One Risk Evaluation
[**updateRiskEvaluation**](RiskEvaluationsApi.md#updateRiskEvaluation) | **PUT** /environments/{environmentID}/riskEvaluations/{riskEvaluationID}/event | UPDATE Risk Evaluation



## createRiskEvaluation

> RiskEvaluation createRiskEvaluation(environmentID, opts)

CREATE Risk Evaluation

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskEvaluationsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'riskEvaluation': new PingOnePlatformApiPingOneRisk.RiskEvaluation() // RiskEvaluation | 
};
apiInstance.createRiskEvaluation(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskEvaluation** | [**RiskEvaluation**](RiskEvaluation.md)|  | [optional] 

### Return type

[**RiskEvaluation**](RiskEvaluation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## readOneRiskEvaluation

> RiskEvaluation readOneRiskEvaluation(environmentID, riskEvaluationID)

READ One Risk Evaluation

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskEvaluationsApi();
let environmentID = "environmentID_example"; // String | 
let riskEvaluationID = "riskEvaluationID_example"; // String | 
apiInstance.readOneRiskEvaluation(environmentID, riskEvaluationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskEvaluationID** | **String**|  | 

### Return type

[**RiskEvaluation**](RiskEvaluation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRiskEvaluation

> RiskEvaluation updateRiskEvaluation(environmentID, riskEvaluationID, opts)

UPDATE Risk Evaluation

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskEvaluationsApi();
let environmentID = "environmentID_example"; // String | 
let riskEvaluationID = "riskEvaluationID_example"; // String | 
let opts = {
  'riskEvaluationEvent': new PingOnePlatformApiPingOneRisk.RiskEvaluationEvent() // RiskEvaluationEvent | 
};
apiInstance.updateRiskEvaluation(environmentID, riskEvaluationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskEvaluationID** | **String**|  | 
 **riskEvaluationEvent** | [**RiskEvaluationEvent**](RiskEvaluationEvent.md)|  | [optional] 

### Return type

[**RiskEvaluation**](RiskEvaluation.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

