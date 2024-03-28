# PingOnePlatformApiSsoAndBase.ResourcesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResource**](ResourcesApi.md#createResource) | **POST** /environments/{environmentID}/resources | CREATE Resource
[**deleteResource**](ResourcesApi.md#deleteResource) | **DELETE** /environments/{environmentID}/resources/{resourceID} | DELETE Resource
[**readAllResources**](ResourcesApi.md#readAllResources) | **GET** /environments/{environmentID}/resources | READ All Resources
[**readOneResource**](ResourcesApi.md#readOneResource) | **GET** /environments/{environmentID}/resources/{resourceID} | READ One Resource
[**updateResource**](ResourcesApi.md#updateResource) | **PUT** /environments/{environmentID}/resources/{resourceID} | UPDATE Resource



## createResource

> Resource createResource(environmentID, opts)

CREATE Resource

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourcesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'resource': new PingOnePlatformApiSsoAndBase.Resource() // Resource | 
};
apiInstance.createResource(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **resource** | [**Resource**](Resource.md)|  | [optional] 

### Return type

[**Resource**](Resource.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteResource

> deleteResource(environmentID, resourceID)

DELETE Resource

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourcesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
apiInstance.deleteResource(environmentID, resourceID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **resourceID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllResources

> EntityArray readAllResources(environmentID)

READ All Resources

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourcesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllResources(environmentID).then((data) => {
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


## readOneResource

> Resource readOneResource(environmentID, resourceID)

READ One Resource

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourcesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
apiInstance.readOneResource(environmentID, resourceID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **resourceID** | **String**|  | 

### Return type

[**Resource**](Resource.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateResource

> Resource updateResource(environmentID, resourceID, opts)

UPDATE Resource

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourcesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let opts = {
  'resource': new PingOnePlatformApiSsoAndBase.Resource() // Resource | 
};
apiInstance.updateResource(environmentID, resourceID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **resourceID** | **String**|  | 
 **resource** | [**Resource**](Resource.md)|  | [optional] 

### Return type

[**Resource**](Resource.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

