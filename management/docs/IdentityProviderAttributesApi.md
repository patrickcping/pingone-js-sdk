# PingOnePlatformApiSsoAndBase.IdentityProviderAttributesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityProviderAttribute**](IdentityProviderAttributesApi.md#createIdentityProviderAttribute) | **POST** /environments/{environmentID}/identityProviders/{providerID}/attributes | CREATE Identity Provider Attribute
[**deleteIdentityProviderAttribute**](IdentityProviderAttributesApi.md#deleteIdentityProviderAttribute) | **DELETE** /environments/{environmentID}/identityProviders/{providerID}/attributes/{providerAttributeID} | DELETE Identity Provider Attribute
[**readAllIdentityProviderAttributes**](IdentityProviderAttributesApi.md#readAllIdentityProviderAttributes) | **GET** /environments/{environmentID}/identityProviders/{providerID}/attributes | READ All Identity Provider Attributes
[**readOneIdentityProviderAttribute**](IdentityProviderAttributesApi.md#readOneIdentityProviderAttribute) | **GET** /environments/{environmentID}/identityProviders/{providerID}/attributes/{providerAttributeID} | READ One Identity Provider Attribute
[**updateIdentityProviderAttribute**](IdentityProviderAttributesApi.md#updateIdentityProviderAttribute) | **PUT** /environments/{environmentID}/identityProviders/{providerID}/attributes/{providerAttributeID} | UPDATE Identity Provider Attribute



## createIdentityProviderAttribute

> IdentityProviderAttribute createIdentityProviderAttribute(environmentID, providerID, opts)

CREATE Identity Provider Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProviderAttributesApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
let opts = {
  'identityProviderAttribute': new PingOnePlatformApiSsoAndBase.IdentityProviderAttribute() // IdentityProviderAttribute | 
};
apiInstance.createIdentityProviderAttribute(environmentID, providerID, opts).then((data) => {
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
 **identityProviderAttribute** | [**IdentityProviderAttribute**](IdentityProviderAttribute.md)|  | [optional] 

### Return type

[**IdentityProviderAttribute**](IdentityProviderAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIdentityProviderAttribute

> deleteIdentityProviderAttribute(environmentID, providerID, providerAttributeID)

DELETE Identity Provider Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProviderAttributesApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
let providerAttributeID = "providerAttributeID_example"; // String | 
apiInstance.deleteIdentityProviderAttribute(environmentID, providerID, providerAttributeID).then(() => {
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
 **providerAttributeID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllIdentityProviderAttributes

> EntityArray readAllIdentityProviderAttributes(environmentID, providerID)

READ All Identity Provider Attributes

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProviderAttributesApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
apiInstance.readAllIdentityProviderAttributes(environmentID, providerID).then((data) => {
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

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneIdentityProviderAttribute

> IdentityProviderAttribute readOneIdentityProviderAttribute(environmentID, providerID, providerAttributeID)

READ One Identity Provider Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProviderAttributesApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
let providerAttributeID = "providerAttributeID_example"; // String | 
apiInstance.readOneIdentityProviderAttribute(environmentID, providerID, providerAttributeID).then((data) => {
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
 **providerAttributeID** | **String**|  | 

### Return type

[**IdentityProviderAttribute**](IdentityProviderAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateIdentityProviderAttribute

> IdentityProviderAttribute updateIdentityProviderAttribute(environmentID, providerID, providerAttributeID, opts)

UPDATE Identity Provider Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.IdentityProviderAttributesApi();
let environmentID = "environmentID_example"; // String | 
let providerID = "providerID_example"; // String | 
let providerAttributeID = "providerAttributeID_example"; // String | 
let opts = {
  'identityProviderAttribute': new PingOnePlatformApiSsoAndBase.IdentityProviderAttribute() // IdentityProviderAttribute | 
};
apiInstance.updateIdentityProviderAttribute(environmentID, providerID, providerAttributeID, opts).then((data) => {
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
 **providerAttributeID** | **String**|  | 
 **identityProviderAttribute** | [**IdentityProviderAttribute**](IdentityProviderAttribute.md)|  | [optional] 

### Return type

[**IdentityProviderAttribute**](IdentityProviderAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

