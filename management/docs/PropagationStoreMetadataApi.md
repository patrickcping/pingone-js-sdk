# PingOnePlatformApiSsoAndBase.PropagationStoreMetadataApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDPropagationStoreMetadataAqueraPost**](PropagationStoreMetadataApi.md#environmentsEnvironmentIDPropagationStoreMetadataAqueraPost) | **POST** /environments/{environmentID}/propagation/storeMetadata/Aquera | Identity Propagation Store Metadata (Aquera)
[**environmentsEnvironmentIDPropagationStoreMetadataSalesforceContactsPost**](PropagationStoreMetadataApi.md#environmentsEnvironmentIDPropagationStoreMetadataSalesforceContactsPost) | **POST** /environments/{environmentID}/propagation/storeMetadata/SalesforceContacts | Identity Propagation Store Metadata (SalesforceContacts)
[**environmentsEnvironmentIDPropagationStoreMetadataSalesforcePost**](PropagationStoreMetadataApi.md#environmentsEnvironmentIDPropagationStoreMetadataSalesforcePost) | **POST** /environments/{environmentID}/propagation/storeMetadata/Salesforce | Identity Propagation Store Metadata (Salesforce)
[**environmentsEnvironmentIDPropagationStoreMetadataScimPost**](PropagationStoreMetadataApi.md#environmentsEnvironmentIDPropagationStoreMetadataScimPost) | **POST** /environments/{environmentID}/propagation/storeMetadata/scim | Identity Propagation Store Metadata (SCIM)



## environmentsEnvironmentIDPropagationStoreMetadataAqueraPost

> environmentsEnvironmentIDPropagationStoreMetadataAqueraPost(environmentID, opts)

Identity Propagation Store Metadata (Aquera)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoreMetadataApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationStoreMetadataAqueraPost(environmentID, opts).then(() => {
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


## environmentsEnvironmentIDPropagationStoreMetadataSalesforceContactsPost

> environmentsEnvironmentIDPropagationStoreMetadataSalesforceContactsPost(environmentID, opts)

Identity Propagation Store Metadata (SalesforceContacts)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoreMetadataApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationStoreMetadataSalesforceContactsPost(environmentID, opts).then(() => {
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


## environmentsEnvironmentIDPropagationStoreMetadataSalesforcePost

> environmentsEnvironmentIDPropagationStoreMetadataSalesforcePost(environmentID, opts)

Identity Propagation Store Metadata (Salesforce)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoreMetadataApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationStoreMetadataSalesforcePost(environmentID, opts).then(() => {
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


## environmentsEnvironmentIDPropagationStoreMetadataScimPost

> environmentsEnvironmentIDPropagationStoreMetadataScimPost(environmentID, opts)

Identity Propagation Store Metadata (SCIM)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoreMetadataApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDPropagationStoreMetadataScimPost(environmentID, opts).then(() => {
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

