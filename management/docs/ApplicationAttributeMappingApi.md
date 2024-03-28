# PingOnePlatformApiSsoAndBase.ApplicationAttributeMappingApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationAttributeMapping**](ApplicationAttributeMappingApi.md#createApplicationAttributeMapping) | **POST** /environments/{environmentID}/applications/{applicationID}/attributes | CREATE Application Attribute Mapping
[**deleteApplicationAttributeMapping**](ApplicationAttributeMappingApi.md#deleteApplicationAttributeMapping) | **DELETE** /environments/{environmentID}/applications/{applicationID}/attributes/{attrMappingID} | DELETE Application Attribute Mapping
[**readAllApplicationAttributeMappings**](ApplicationAttributeMappingApi.md#readAllApplicationAttributeMappings) | **GET** /environments/{environmentID}/applications/{applicationID}/attributes | READ All Application Attribute Mappings
[**readOneApplicationAttributeMapping**](ApplicationAttributeMappingApi.md#readOneApplicationAttributeMapping) | **GET** /environments/{environmentID}/applications/{applicationID}/attributes/{attrMappingID} | READ One Application Attribute Mapping
[**updateApplicationAttributeMapping**](ApplicationAttributeMappingApi.md#updateApplicationAttributeMapping) | **PUT** /environments/{environmentID}/applications/{applicationID}/attributes/{attrMappingID} | UPDATE Application Attribute Mapping



## createApplicationAttributeMapping

> ApplicationAttributeMapping createApplicationAttributeMapping(environmentID, applicationID, opts)

CREATE Application Attribute Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationAttributeMappingApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'applicationAttributeMapping': new PingOnePlatformApiSsoAndBase.ApplicationAttributeMapping() // ApplicationAttributeMapping | 
};
apiInstance.createApplicationAttributeMapping(environmentID, applicationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **applicationAttributeMapping** | [**ApplicationAttributeMapping**](ApplicationAttributeMapping.md)|  | [optional] 

### Return type

[**ApplicationAttributeMapping**](ApplicationAttributeMapping.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplicationAttributeMapping

> deleteApplicationAttributeMapping(environmentID, applicationID, attrMappingID)

DELETE Application Attribute Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationAttributeMappingApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let attrMappingID = "attrMappingID_example"; // String | 
apiInstance.deleteApplicationAttributeMapping(environmentID, applicationID, attrMappingID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **attrMappingID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllApplicationAttributeMappings

> EntityArray readAllApplicationAttributeMappings(environmentID, applicationID)

READ All Application Attribute Mappings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationAttributeMappingApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readAllApplicationAttributeMappings(environmentID, applicationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneApplicationAttributeMapping

> ApplicationAttributeMapping readOneApplicationAttributeMapping(environmentID, applicationID, attrMappingID)

READ One Application Attribute Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationAttributeMappingApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let attrMappingID = "attrMappingID_example"; // String | 
apiInstance.readOneApplicationAttributeMapping(environmentID, applicationID, attrMappingID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **attrMappingID** | **String**|  | 

### Return type

[**ApplicationAttributeMapping**](ApplicationAttributeMapping.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApplicationAttributeMapping

> ApplicationAttributeMapping updateApplicationAttributeMapping(environmentID, applicationID, attrMappingID, opts)

UPDATE Application Attribute Mapping

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationAttributeMappingApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let attrMappingID = "attrMappingID_example"; // String | 
let opts = {
  'applicationAttributeMapping': new PingOnePlatformApiSsoAndBase.ApplicationAttributeMapping() // ApplicationAttributeMapping | 
};
apiInstance.updateApplicationAttributeMapping(environmentID, applicationID, attrMappingID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **attrMappingID** | **String**|  | 
 **applicationAttributeMapping** | [**ApplicationAttributeMapping**](ApplicationAttributeMapping.md)|  | [optional] 

### Return type

[**ApplicationAttributeMapping**](ApplicationAttributeMapping.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

