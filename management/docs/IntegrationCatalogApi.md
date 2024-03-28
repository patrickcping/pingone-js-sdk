# PingOnePlatformApiSsoAndBase.IntegrationCatalogApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDIntegrationsGet**](IntegrationCatalogApi.md#environmentsEnvironmentIDIntegrationsGet) | **GET** /environments/{environmentID}/integrations | READ Integration Metadata
[**environmentsEnvironmentIDIntegrationsIntegrationIDGet**](IntegrationCatalogApi.md#environmentsEnvironmentIDIntegrationsIntegrationIDGet) | **GET** /environments/{environmentID}/integrations/{integrationID} | READ One Integration Metadata
[**environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet**](IntegrationCatalogApi.md#environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet) | **GET** /environments/{environmentID}/integrations/{integrationID}/versions | READ Integration Version Metadata
[**environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet**](IntegrationCatalogApi.md#environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet) | **GET** /environments/{environmentID}/integrations/{integrationID}/versions/{integrationVersionID}/asset | READ Integration Version Asset Download
[**environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet**](IntegrationCatalogApi.md#environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet) | **GET** /environments/{environmentID}/integrations/{integrationID}/versions/{integrationVersionID} | READ One Integration Version Metadata



## environmentsEnvironmentIDIntegrationsGet

> environmentsEnvironmentIDIntegrationsGet(environmentID)

READ Integration Metadata

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IntegrationCatalogApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.environmentsEnvironmentIDIntegrationsGet(environmentID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDIntegrationsIntegrationIDGet

> environmentsEnvironmentIDIntegrationsIntegrationIDGet(environmentID, integrationID)

READ One Integration Metadata

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IntegrationCatalogApi();
let environmentID = "environmentID_example"; // String | 
let integrationID = "integrationID_example"; // String | 
apiInstance.environmentsEnvironmentIDIntegrationsIntegrationIDGet(environmentID, integrationID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **integrationID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet

> environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet(environmentID, integrationID)

READ Integration Version Metadata

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IntegrationCatalogApi();
let environmentID = "environmentID_example"; // String | 
let integrationID = "integrationID_example"; // String | 
apiInstance.environmentsEnvironmentIDIntegrationsIntegrationIDVersionsGet(environmentID, integrationID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **integrationID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet

> environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet(environmentID, integrationID, integrationVersionID)

READ Integration Version Asset Download

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IntegrationCatalogApi();
let environmentID = "environmentID_example"; // String | 
let integrationID = "integrationID_example"; // String | 
let integrationVersionID = "integrationVersionID_example"; // String | 
apiInstance.environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDAssetGet(environmentID, integrationID, integrationVersionID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **integrationID** | **String**|  | 
 **integrationVersionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet

> environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet(environmentID, integrationID, integrationVersionID)

READ One Integration Version Metadata

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IntegrationCatalogApi();
let environmentID = "environmentID_example"; // String | 
let integrationID = "integrationID_example"; // String | 
let integrationVersionID = "integrationVersionID_example"; // String | 
apiInstance.environmentsEnvironmentIDIntegrationsIntegrationIDVersionsIntegrationVersionIDGet(environmentID, integrationID, integrationVersionID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **integrationID** | **String**|  | 
 **integrationVersionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

