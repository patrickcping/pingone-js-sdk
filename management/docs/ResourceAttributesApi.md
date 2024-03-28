# PingOnePlatformApiSsoAndBase.ResourceAttributesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResourceAttribute**](ResourceAttributesApi.md#createResourceAttribute) | **POST** /environments/{environmentID}/resources/{resourceID}/attributes | CREATE Resource Attribute
[**deleteResourceAttribute**](ResourceAttributesApi.md#deleteResourceAttribute) | **DELETE** /environments/{environmentID}/resources/{resourceID}/attributes/{resourceAttrID} | DELETE Resource Attribute
[**readAllResourceAttributes**](ResourceAttributesApi.md#readAllResourceAttributes) | **GET** /environments/{environmentID}/resources/{resourceID}/attributes | READ All Resource Attributes
[**readOneResourceAttribute**](ResourceAttributesApi.md#readOneResourceAttribute) | **GET** /environments/{environmentID}/resources/{resourceID}/attributes/{resourceAttrID} | READ One Resource Attribute
[**updateResourceAttribute**](ResourceAttributesApi.md#updateResourceAttribute) | **PUT** /environments/{environmentID}/resources/{resourceID}/attributes/{resourceAttrID} | UPDATE Resource Attribute



## createResourceAttribute

> ResourceAttribute createResourceAttribute(environmentID, resourceID, opts)

CREATE Resource Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceAttributesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let opts = {
  'resourceAttribute': new PingOnePlatformApiSsoAndBase.ResourceAttribute() // ResourceAttribute | 
};
apiInstance.createResourceAttribute(environmentID, resourceID, opts).then((data) => {
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
 **resourceAttribute** | [**ResourceAttribute**](ResourceAttribute.md)|  | [optional] 

### Return type

[**ResourceAttribute**](ResourceAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteResourceAttribute

> deleteResourceAttribute(environmentID, resourceID, resourceAttrID)

DELETE Resource Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceAttributesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let resourceAttrID = "resourceAttrID_example"; // String | 
apiInstance.deleteResourceAttribute(environmentID, resourceID, resourceAttrID).then(() => {
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
 **resourceAttrID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllResourceAttributes

> EntityArray readAllResourceAttributes(environmentID, resourceID)

READ All Resource Attributes

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceAttributesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
apiInstance.readAllResourceAttributes(environmentID, resourceID).then((data) => {
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


## readOneResourceAttribute

> ResourceAttribute readOneResourceAttribute(environmentID, resourceID, resourceAttrID)

READ One Resource Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceAttributesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let resourceAttrID = "resourceAttrID_example"; // String | 
apiInstance.readOneResourceAttribute(environmentID, resourceID, resourceAttrID).then((data) => {
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
 **resourceAttrID** | **String**|  | 

### Return type

[**ResourceAttribute**](ResourceAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateResourceAttribute

> ResourceAttribute updateResourceAttribute(environmentID, resourceID, resourceAttrID, opts)

UPDATE Resource Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ResourceAttributesApi();
let environmentID = "environmentID_example"; // String | 
let resourceID = "resourceID_example"; // String | 
let resourceAttrID = "resourceAttrID_example"; // String | 
let opts = {
  'resourceAttribute': new PingOnePlatformApiSsoAndBase.ResourceAttribute() // ResourceAttribute | 
};
apiInstance.updateResourceAttribute(environmentID, resourceID, resourceAttrID, opts).then((data) => {
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
 **resourceAttrID** | **String**|  | 
 **resourceAttribute** | [**ResourceAttribute**](ResourceAttribute.md)|  | [optional] 

### Return type

[**ResourceAttribute**](ResourceAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

