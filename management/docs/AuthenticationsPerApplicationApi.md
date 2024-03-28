# PingOnePlatformApiSsoAndBase.AuthenticationsPerApplicationApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDApplicationSignonsGet**](AuthenticationsPerApplicationApi.md#environmentsEnvironmentIDApplicationSignonsGet) | **GET** /environments/{environmentID}/applicationSignons | READ Authentications Per Application (Partial)



## environmentsEnvironmentIDApplicationSignonsGet

> environmentsEnvironmentIDApplicationSignonsGet(environmentID, opts)

READ Authentications Per Application (Partial)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AuthenticationsPerApplicationApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'limit': 1, // Number | 
  'samplePeriod': 1, // Number | 
  'samplePeriodCount': 100, // Number | 
  'filter': occurredAt ge "2019-10-03T00:00:00Z"" // String | 
};
apiInstance.environmentsEnvironmentIDApplicationSignonsGet(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **limit** | **Number**|  | [optional] 
 **samplePeriod** | **Number**|  | [optional] 
 **samplePeriodCount** | **Number**|  | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

