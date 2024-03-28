# PingOnePlatformApiSsoAndBase.PropagationStoresApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPropagationStore**](PropagationStoresApi.md#createPropagationStore) | **POST** /environments/{environmentID}/propagation/stores | CREATE Propagation Store
[**deletePropagationStore**](PropagationStoresApi.md#deletePropagationStore) | **DELETE** /environments/{environmentID}/propagation/stores/{storeID} | DELETE Store
[**readAllStores**](PropagationStoresApi.md#readAllStores) | **GET** /environments/{environmentID}/propagation/stores | READ All Stores
[**readOnePropagationStore**](PropagationStoresApi.md#readOnePropagationStore) | **GET** /environments/{environmentID}/propagation/stores/{storeID} | READ One Store
[**testConnectionConfiguration**](PropagationStoresApi.md#testConnectionConfiguration) | **POST** /environments/{environmentID}/propagation/stores/connection/status | TEST Connection Configuration
[**updatePropagationStore**](PropagationStoresApi.md#updatePropagationStore) | **PUT** /environments/{environmentID}/propagation/stores/{storeID} | UPDATE Store



## createPropagationStore

> PropagationStore createPropagationStore(environmentID, opts)

CREATE Propagation Store

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoresApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'propagationStore': new PingOnePlatformApiSsoAndBase.PropagationStore() // PropagationStore | 
};
apiInstance.createPropagationStore(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **propagationStore** | [**PropagationStore**](PropagationStore.md)|  | [optional] 

### Return type

[**PropagationStore**](PropagationStore.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePropagationStore

> deletePropagationStore(environmentID, storeID)

DELETE Store

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoresApi();
let environmentID = "environmentID_example"; // String | 
let storeID = "storeID_example"; // String | 
apiInstance.deletePropagationStore(environmentID, storeID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **storeID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllStores

> EntityArray readAllStores(environmentID)

READ All Stores

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoresApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllStores(environmentID).then((data) => {
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


## readOnePropagationStore

> PropagationStore readOnePropagationStore(environmentID, storeID)

READ One Store

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoresApi();
let environmentID = "environmentID_example"; // String | 
let storeID = "storeID_example"; // String | 
apiInstance.readOnePropagationStore(environmentID, storeID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **storeID** | **String**|  | 

### Return type

[**PropagationStore**](PropagationStore.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## testConnectionConfiguration

> testConnectionConfiguration(environmentID, opts)

TEST Connection Configuration

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoresApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.connection.check+json, // EnumPropagationStoreConnectionStatusContentType | 
  'propagationStore': new PingOnePlatformApiSsoAndBase.PropagationStore() // PropagationStore | 
};
apiInstance.testConnectionConfiguration(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **contentType** | [**EnumPropagationStoreConnectionStatusContentType**](.md)|  | [optional] 
 **propagationStore** | [**PropagationStore**](PropagationStore.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePropagationStore

> PropagationStore updatePropagationStore(environmentID, storeID, opts)

UPDATE Store

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PropagationStoresApi();
let environmentID = "environmentID_example"; // String | 
let storeID = "storeID_example"; // String | 
let opts = {
  'propagationStore': new PingOnePlatformApiSsoAndBase.PropagationStore() // PropagationStore | 
};
apiInstance.updatePropagationStore(environmentID, storeID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **storeID** | **String**|  | 
 **propagationStore** | [**PropagationStore**](PropagationStore.md)|  | [optional] 

### Return type

[**PropagationStore**](PropagationStore.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

