# PingOnePlatformApiPingOneRisk.RiskAdvancedPredictorsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRiskPredictor**](RiskAdvancedPredictorsApi.md#createRiskPredictor) | **POST** /environments/{environmentID}/riskPredictors | CREATE Risk Predictor
[**deleteRiskAdvancedPredictor**](RiskAdvancedPredictorsApi.md#deleteRiskAdvancedPredictor) | **DELETE** /environments/{environmentID}/riskPredictors/{riskPredictorID} | DELETE Risk Advanced Predictor
[**readAllRiskPredictors**](RiskAdvancedPredictorsApi.md#readAllRiskPredictors) | **GET** /environments/{environmentID}/riskPredictors | READ All Risk Predictors
[**readOneRiskPredictor**](RiskAdvancedPredictorsApi.md#readOneRiskPredictor) | **GET** /environments/{environmentID}/riskPredictors/{riskPredictorID} | READ One Risk Predictor
[**updateRiskPredictor**](RiskAdvancedPredictorsApi.md#updateRiskPredictor) | **PUT** /environments/{environmentID}/riskPredictors/{riskPredictorID} | UPDATE Risk Predictor



## createRiskPredictor

> RiskPredictor createRiskPredictor(environmentID, opts)

CREATE Risk Predictor

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskAdvancedPredictorsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'riskPredictor': new PingOnePlatformApiPingOneRisk.RiskPredictor() // RiskPredictor | 
};
apiInstance.createRiskPredictor(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPredictor** | [**RiskPredictor**](RiskPredictor.md)|  | [optional] 

### Return type

[**RiskPredictor**](RiskPredictor.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRiskAdvancedPredictor

> deleteRiskAdvancedPredictor(environmentID, riskPredictorID)

DELETE Risk Advanced Predictor

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskAdvancedPredictorsApi();
let environmentID = "environmentID_example"; // String | 
let riskPredictorID = "riskPredictorID_example"; // String | 
apiInstance.deleteRiskAdvancedPredictor(environmentID, riskPredictorID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPredictorID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllRiskPredictors

> EntityArray readAllRiskPredictors(environmentID)

READ All Risk Predictors

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskAdvancedPredictorsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllRiskPredictors(environmentID).then((data) => {
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


## readOneRiskPredictor

> RiskPredictor readOneRiskPredictor(environmentID, riskPredictorID)

READ One Risk Predictor

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskAdvancedPredictorsApi();
let environmentID = "environmentID_example"; // String | 
let riskPredictorID = "riskPredictorID_example"; // String | 
apiInstance.readOneRiskPredictor(environmentID, riskPredictorID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPredictorID** | **String**|  | 

### Return type

[**RiskPredictor**](RiskPredictor.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRiskPredictor

> RiskPredictor updateRiskPredictor(environmentID, riskPredictorID, opts)

UPDATE Risk Predictor

### Example

```javascript
import PingOnePlatformApiPingOneRisk from 'ping_one_platform_api_ping_one_risk';
let defaultClient = PingOnePlatformApiPingOneRisk.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneRisk.RiskAdvancedPredictorsApi();
let environmentID = "environmentID_example"; // String | 
let riskPredictorID = "riskPredictorID_example"; // String | 
let opts = {
  'riskPredictor': new PingOnePlatformApiPingOneRisk.RiskPredictor() // RiskPredictor | 
};
apiInstance.updateRiskPredictor(environmentID, riskPredictorID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **riskPredictorID** | **String**|  | 
 **riskPredictor** | [**RiskPredictor**](RiskPredictor.md)|  | [optional] 

### Return type

[**RiskPredictor**](RiskPredictor.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

