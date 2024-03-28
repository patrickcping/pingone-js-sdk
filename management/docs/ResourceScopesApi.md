# PingOnePlatformApiSsoAndBase.ResourceScopesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResourceScope**](ResourceScopesApi.md#createResourceScope) | **POST** /environments/{environmentID}/resources/{resourceID}/scopes | CREATE PingOne access control scope
[**deleteResourceScope**](ResourceScopesApi.md#deleteResourceScope) | **DELETE** /environments/{environmentID}/resources/{resourceID}/scopes/{scopeID} | DELETE Scope
[**readAllResourceScopes**](ResourceScopesApi.md#readAllResourceScopes) | **GET** /environments/{environmentID}/resources/{resourceID}/scopes | READ All Scopes (Resource)
[**readOneResourceScope**](ResourceScopesApi.md#readOneResourceScope) | **GET** /environments/{environmentID}/resources/{resourceID}/scopes/{scopeID} | READ One Scope
[**updateResourceScope**](ResourceScopesApi.md#updateResourceScope) | **PUT** /environments/{environmentID}/resources/{resourceID}/scopes/{scopeID} | UPDATE PingOne access control scope



## createResourceScope

> ResourceScope createResourceScope(environmentID, resourceID, opts)

CREATE PingOne access control scope

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceScopesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let opts = {
  'resourceScope': new PingOnePlatformApiSsoAndBase.ResourceScope() // ResourceScope | 
};
apiInstance.createResourceScope(environmentID, resourceID, opts).then((data) => {
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
 **resourceScope** | [**ResourceScope**](ResourceScope.md)|  | [optional] 

### Return type

[**ResourceScope**](ResourceScope.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteResourceScope

> deleteResourceScope(environmentID, resourceID, scopeID)

DELETE Scope

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceScopesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let scopeID = "scopeID_example"; // String | 
apiInstance.deleteResourceScope(environmentID, resourceID, scopeID).then(() => {
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
 **scopeID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllResourceScopes

> EntityArray readAllResourceScopes(environmentID, resourceID)

READ All Scopes (Resource)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceScopesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
apiInstance.readAllResourceScopes(environmentID, resourceID).then((data) => {
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

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneResourceScope

> ResourceScope readOneResourceScope(environmentID, resourceID, scopeID)

READ One Scope

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceScopesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let scopeID = "scopeID_example"; // String | 
apiInstance.readOneResourceScope(environmentID, resourceID, scopeID).then((data) => {
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
 **scopeID** | **String**|  | 

### Return type

[**ResourceScope**](ResourceScope.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateResourceScope

> ResourceScope updateResourceScope(environmentID, resourceID, scopeID, opts)

UPDATE PingOne access control scope

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceScopesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let scopeID = "scopeID_example"; // String | 
let opts = {
  'resourceScope': new PingOnePlatformApiSsoAndBase.ResourceScope() // ResourceScope | 
};
apiInstance.updateResourceScope(environmentID, resourceID, scopeID, opts).then((data) => {
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
 **scopeID** | **String**|  | 
 **resourceScope** | [**ResourceScope**](ResourceScope.md)|  | [optional] 

### Return type

[**ResourceScope**](ResourceScope.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

