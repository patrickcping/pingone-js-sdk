# PingOnePlatformApiSsoAndBase.CapabilitiesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDCapabilitiesGet**](CapabilitiesApi.md#environmentsEnvironmentIDCapabilitiesGet) | **GET** /environments/{environmentID}/capabilities | READ Environment Capabilities
[**organizationsOrganizationIDCapabilitiesGet**](CapabilitiesApi.md#organizationsOrganizationIDCapabilitiesGet) | **GET** /organizations/{organizationID}/capabilities | READ Organization Capabilities



## environmentsEnvironmentIDCapabilitiesGet

> environmentsEnvironmentIDCapabilitiesGet(environmentID)

READ Environment Capabilities

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CapabilitiesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.environmentsEnvironmentIDCapabilitiesGet(environmentID).then(() => {
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


## organizationsOrganizationIDCapabilitiesGet

> organizationsOrganizationIDCapabilitiesGet(organizationID)

READ Organization Capabilities

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CapabilitiesApi();
let organizationID = "organizationID_example"; // String | 
apiInstance.organizationsOrganizationIDCapabilitiesGet(organizationID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

