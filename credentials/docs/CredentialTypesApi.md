# PingOnePlatformApiCredentials.CredentialTypesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentialType**](CredentialTypesApi.md#createCredentialType) | **POST** /environments/{environmentID}/credentialTypes | Create Credential Type
[**deleteCredentialType**](CredentialTypesApi.md#deleteCredentialType) | **DELETE** /environments/{environmentID}/credentialTypes/{credentialTypeID} | Delete a Credential Type
[**readAllCredentialTypes**](CredentialTypesApi.md#readAllCredentialTypes) | **GET** /environments/{environmentID}/credentialTypes | Read All Credential Types
[**readOneCredentialType**](CredentialTypesApi.md#readOneCredentialType) | **GET** /environments/{environmentID}/credentialTypes/{credentialTypeID} | Read One Credential Type
[**updateCredentialType**](CredentialTypesApi.md#updateCredentialType) | **PUT** /environments/{environmentID}/credentialTypes/{credentialTypeID} | Update a Credential Type



## createCredentialType

> CredentialType createCredentialType(environmentID, opts)

Create Credential Type

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialTypesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'credentialType': new PingOnePlatformApiCredentials.CredentialType() // CredentialType | 
};
apiInstance.createCredentialType(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialType** | [**CredentialType**](CredentialType.md)|  | [optional] 

### Return type

[**CredentialType**](CredentialType.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCredentialType

> deleteCredentialType(environmentID, credentialTypeID)

Delete a Credential Type

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialTypesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
apiInstance.deleteCredentialType(environmentID, credentialTypeID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllCredentialTypes

> EntityArray readAllCredentialTypes(environmentID)

Read All Credential Types

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialTypesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllCredentialTypes(environmentID).then((data) => {
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


## readOneCredentialType

> CredentialType readOneCredentialType(environmentID, credentialTypeID)

Read One Credential Type

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialTypesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
apiInstance.readOneCredentialType(environmentID, credentialTypeID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 

### Return type

[**CredentialType**](CredentialType.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCredentialType

> CredentialType updateCredentialType(environmentID, credentialTypeID, opts)

Update a Credential Type

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialTypesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let opts = {
  'credentialType': new PingOnePlatformApiCredentials.CredentialType() // CredentialType | 
};
apiInstance.updateCredentialType(environmentID, credentialTypeID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialType** | [**CredentialType**](CredentialType.md)|  | [optional] 

### Return type

[**CredentialType**](CredentialType.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

