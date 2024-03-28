# PingOnePlatformApiSsoAndBase.EnvironmentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironmentActiveLicense**](EnvironmentsApi.md#createEnvironmentActiveLicense) | **POST** /environments | CREATE Environment (Active License)
[**deleteEnvironment**](EnvironmentsApi.md#deleteEnvironment) | **DELETE** /environments/{environmentID} | DELETE Environment
[**readAllEnvironments**](EnvironmentsApi.md#readAllEnvironments) | **GET** /environments | READ All Environments
[**readOneEnvironment**](EnvironmentsApi.md#readOneEnvironment) | **GET** /environments/{environmentID} | READ One Environment
[**updateEnvironment**](EnvironmentsApi.md#updateEnvironment) | **PUT** /environments/{environmentID} | UPDATE Environment
[**updateEnvironmentType**](EnvironmentsApi.md#updateEnvironmentType) | **PUT** /environments/{environmentID}/type | UPDATE Environment Type



## createEnvironmentActiveLicense

> Environment createEnvironmentActiveLicense(opts)

CREATE Environment (Active License)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnvironmentsApi();
let opts = {
  'environment': new PingOnePlatformApiSsoAndBase.Environment() // Environment | 
};
apiInstance.createEnvironmentActiveLicense(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environment** | [**Environment**](Environment.md)|  | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEnvironment

> deleteEnvironment(environmentID)

DELETE Environment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnvironmentsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.deleteEnvironment(environmentID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllEnvironments

> EntityArray readAllEnvironments(opts)

READ All Environments

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnvironmentsApi();
let opts = {
  'limit': 56, // Number | Adding a paging value to limit the number of resources displayed per page
  'cursor': "cursor_example", // String | Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
  'filter': name sw "S" and license.id eq "34f0efac-21d9-4a17-8a35-196bb3362983" // String | Adding a SCIM filter for an environment to display only those resources associated with the specified environment. 'sw', 'eq' and 'and' are supported
};
apiInstance.readAllEnvironments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Adding a paging value to limit the number of resources displayed per page | [optional] 
 **cursor** | **String**| Adding a cursor value to retrieve the next page of results, used with the &#x60;limit&#x60; parameter. The cursor value is returned in the &#x60;_links.next.href&#x60; link in the response payload. | [optional] 
 **filter** | **String**| Adding a SCIM filter for an environment to display only those resources associated with the specified environment. &#39;sw&#39;, &#39;eq&#39; and &#39;and&#39; are supported | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneEnvironment

> Environment readOneEnvironment(environmentID)

READ One Environment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnvironmentsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readOneEnvironment(environmentID).then((data) => {
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

[**Environment**](Environment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEnvironment

> Environment updateEnvironment(environmentID, opts)

UPDATE Environment

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnvironmentsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'environment': new PingOnePlatformApiSsoAndBase.Environment() // Environment | 
};
apiInstance.updateEnvironment(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **environment** | [**Environment**](Environment.md)|  | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEnvironmentType

> Environment updateEnvironmentType(environmentID, opts)

UPDATE Environment Type

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.EnvironmentsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'updateEnvironmentTypeRequest': new PingOnePlatformApiSsoAndBase.UpdateEnvironmentTypeRequest() // UpdateEnvironmentTypeRequest | 
};
apiInstance.updateEnvironmentType(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **updateEnvironmentTypeRequest** | [**UpdateEnvironmentTypeRequest**](UpdateEnvironmentTypeRequest.md)|  | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

