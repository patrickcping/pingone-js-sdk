# PingOnePlatformApiSsoAndBase.IdentityProvidersApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityProvider**](IdentityProvidersApi.md#createIdentityProvider) | **POST** /environments/{environmentID}/identityProviders | CREATE Identity Provider
[**deleteIdentityProvider**](IdentityProvidersApi.md#deleteIdentityProvider) | **DELETE** /environments/{environmentID}/identityProviders/{providerID} | DELETE Identity Provider
[**readAllIdentityProviders**](IdentityProvidersApi.md#readAllIdentityProviders) | **GET** /environments/{environmentID}/identityProviders | READ All Identity Providers
[**readOneIdentityProvider**](IdentityProvidersApi.md#readOneIdentityProvider) | **GET** /environments/{environmentID}/identityProviders/{providerID} | READ One Identity Provider
[**updateIdentityProvider**](IdentityProvidersApi.md#updateIdentityProvider) | **PUT** /environments/{environmentID}/identityProviders/{providerID} | UPDATE Identity Provider



## createIdentityProvider

> IdentityProvider createIdentityProvider(environmentID, opts)

CREATE Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProvidersApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'identityProvider': new PingOnePlatformApiSsoAndBase.IdentityProvider() // IdentityProvider | 
};
apiInstance.createIdentityProvider(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **identityProvider** | [**IdentityProvider**](IdentityProvider.md)|  | [optional] 

### Return type

[**IdentityProvider**](IdentityProvider.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIdentityProvider

> deleteIdentityProvider(environmentID, providerID)

DELETE Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProvidersApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
apiInstance.deleteIdentityProvider(environmentID, providerID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **providerID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllIdentityProviders

> EntityArray readAllIdentityProviders(environmentID)

READ All Identity Providers

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProvidersApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllIdentityProviders(environmentID).then((data) => {
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


## readOneIdentityProvider

> IdentityProvider readOneIdentityProvider(environmentID, providerID)

READ One Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProvidersApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
apiInstance.readOneIdentityProvider(environmentID, providerID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **providerID** | **String**|  | 

### Return type

[**IdentityProvider**](IdentityProvider.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateIdentityProvider

> IdentityProvider updateIdentityProvider(environmentID, providerID, opts)

UPDATE Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProvidersApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
let opts = {
  'identityProvider': new PingOnePlatformApiSsoAndBase.IdentityProvider() // IdentityProvider | 
};
apiInstance.updateIdentityProvider(environmentID, providerID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **providerID** | **String**|  | 
 **identityProvider** | [**IdentityProvider**](IdentityProvider.md)|  | [optional] 

### Return type

[**IdentityProvider**](IdentityProvider.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

