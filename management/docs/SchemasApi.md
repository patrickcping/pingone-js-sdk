# PingOnePlatformApiSsoAndBase.SchemasApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAttribute**](SchemasApi.md#createAttribute) | **POST** /environments/{environmentID}/schemas/{schemaID}/attributes | CREATE Attribute
[**deleteAttribute**](SchemasApi.md#deleteAttribute) | **DELETE** /environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID} | DELETE Attribute
[**readAllSchemaAttributes**](SchemasApi.md#readAllSchemaAttributes) | **GET** /environments/{environmentID}/schemas/{schemaID}/attributes | READ All (Schema) Attributes
[**readAllSchemas**](SchemasApi.md#readAllSchemas) | **GET** /environments/{environmentID}/schemas | READ All Schemas
[**readOneAttribute**](SchemasApi.md#readOneAttribute) | **GET** /environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID} | READ One Attribute
[**readOneSchema**](SchemasApi.md#readOneSchema) | **GET** /environments/{environmentID}/schemas/{schemaID} | READ One Schema
[**updateAttributePatch**](SchemasApi.md#updateAttributePatch) | **PATCH** /environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID} | UPDATE Attribute (Patch)
[**updateAttributePut**](SchemasApi.md#updateAttributePut) | **PUT** /environments/{environmentID}/schemas/{schemaID}/attributes/{attributeID} | UPDATE Attribute (Put)



## createAttribute

> SchemaAttribute createAttribute(environmentID, schemaID, opts)

CREATE Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
let schemaID = "schemaID_example"; // String | 
let opts = {
  'schemaAttribute': new PingOnePlatformApiSsoAndBase.SchemaAttribute() // SchemaAttribute | 
};
apiInstance.createAttribute(environmentID, schemaID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **schemaID** | **String**|  | 
 **schemaAttribute** | [**SchemaAttribute**](SchemaAttribute.md)|  | [optional] 

### Return type

[**SchemaAttribute**](SchemaAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAttribute

> deleteAttribute(environmentID, schemaID, attributeID)

DELETE Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
let schemaID = "schemaID_example"; // String | 
let attributeID = "attributeID_example"; // String | 
apiInstance.deleteAttribute(environmentID, schemaID, attributeID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **schemaID** | **String**|  | 
 **attributeID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllSchemaAttributes

> EntityArray readAllSchemaAttributes(environmentID, schemaID)

READ All (Schema) Attributes

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
let schemaID = "schemaID_example"; // String | 
apiInstance.readAllSchemaAttributes(environmentID, schemaID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **schemaID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllSchemas

> EntityArray readAllSchemas(environmentID)

READ All Schemas

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllSchemas(environmentID).then((data) => {
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


## readOneAttribute

> SchemaAttribute readOneAttribute(environmentID, schemaID, attributeID)

READ One Attribute

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
let schemaID = "schemaID_example"; // String | 
let attributeID = "attributeID_example"; // String | 
apiInstance.readOneAttribute(environmentID, schemaID, attributeID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **schemaID** | **String**|  | 
 **attributeID** | **String**|  | 

### Return type

[**SchemaAttribute**](SchemaAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneSchema

> Schema readOneSchema(environmentID, schemaID)

READ One Schema

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
let schemaID = "schemaID_example"; // String | 
apiInstance.readOneSchema(environmentID, schemaID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **schemaID** | **String**|  | 

### Return type

[**Schema**](Schema.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAttributePatch

> SchemaAttribute updateAttributePatch(environmentID, schemaID, attributeID, opts)

UPDATE Attribute (Patch)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
let schemaID = "schemaID_example"; // String | 
let attributeID = "attributeID_example"; // String | 
let opts = {
  'schemaAttributePatch': new PingOnePlatformApiSsoAndBase.SchemaAttributePatch() // SchemaAttributePatch | 
};
apiInstance.updateAttributePatch(environmentID, schemaID, attributeID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **schemaID** | **String**|  | 
 **attributeID** | **String**|  | 
 **schemaAttributePatch** | [**SchemaAttributePatch**](SchemaAttributePatch.md)|  | [optional] 

### Return type

[**SchemaAttribute**](SchemaAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAttributePut

> SchemaAttribute updateAttributePut(environmentID, schemaID, attributeID, opts)

UPDATE Attribute (Put)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SchemasApi();
let environmentID = "environmentID_example"; // String | 
let schemaID = "schemaID_example"; // String | 
let attributeID = "attributeID_example"; // String | 
let opts = {
  'schemaAttribute': new PingOnePlatformApiSsoAndBase.SchemaAttribute() // SchemaAttribute | 
};
apiInstance.updateAttributePut(environmentID, schemaID, attributeID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **schemaID** | **String**|  | 
 **attributeID** | **String**|  | 
 **schemaAttribute** | [**SchemaAttribute**](SchemaAttribute.md)|  | [optional] 

### Return type

[**SchemaAttribute**](SchemaAttribute.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

