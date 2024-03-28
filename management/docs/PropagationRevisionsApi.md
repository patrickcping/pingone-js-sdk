# PingOnePlatformApiSsoAndBase.PropagationRevisionsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDPropagationRevisionsIdlatestGet**](PropagationRevisionsApi.md#environmentsEnvironmentIDPropagationRevisionsIdlatestGet) | **GET** /environments/{environmentID}/propagation/revisions/id:latest | READ Latest Revision
[**environmentsEnvironmentIDPropagationRevisionsPost**](PropagationRevisionsApi.md#environmentsEnvironmentIDPropagationRevisionsPost) | **POST** /environments/{environmentID}/propagation/revisions | CREATE Revision
[**environmentsEnvironmentIDPropagationRevisionsPreviousRevisionIDGet**](PropagationRevisionsApi.md#environmentsEnvironmentIDPropagationRevisionsPreviousRevisionIDGet) | **GET** /environments/{environmentID}/propagation/revisions/{previousRevisionID} | READ Previous Revision



## environmentsEnvironmentIDPropagationRevisionsIdlatestGet

> environmentsEnvironmentIDPropagationRevisionsIdlatestGet(environmentID, opts)

READ Latest Revision

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRevisionsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationRevisionsIdlatestGet(environmentID, opts).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDPropagationRevisionsPost

> environmentsEnvironmentIDPropagationRevisionsPost(environmentID)

CREATE Revision

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRevisionsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.environmentsEnvironmentIDPropagationRevisionsPost(environmentID).then(() => {
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


## environmentsEnvironmentIDPropagationRevisionsPreviousRevisionIDGet

> environmentsEnvironmentIDPropagationRevisionsPreviousRevisionIDGet(environmentID, previousRevisionID, opts)

READ Previous Revision

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationRevisionsApi();
let environmentID = "environmentID_example"; // String | 
let previousRevisionID = "previousRevisionID_example"; // String | 
let opts = {
  'accept': application/json // String | 
};
apiInstance.environmentsEnvironmentIDPropagationRevisionsPreviousRevisionIDGet(environmentID, previousRevisionID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **previousRevisionID** | **String**|  | 
 **accept** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

