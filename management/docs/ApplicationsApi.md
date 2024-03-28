# PingOnePlatformApiSsoAndBase.ApplicationsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](ApplicationsApi.md#createApplication) | **POST** /environments/{environmentID}/applications | CREATE Application
[**deleteApplication**](ApplicationsApi.md#deleteApplication) | **DELETE** /environments/{environmentID}/applications/{applicationID} | DELETE Application
[**readAllApplications**](ApplicationsApi.md#readAllApplications) | **GET** /environments/{environmentID}/applications | READ All Applications
[**readOneApplication**](ApplicationsApi.md#readOneApplication) | **GET** /environments/{environmentID}/applications/{applicationID} | READ One Application
[**updateApplication**](ApplicationsApi.md#updateApplication) | **PUT** /environments/{environmentID}/applications/{applicationID} | UPDATE Application



## createApplication

> CreateApplication201Response createApplication(environmentID, opts)

CREATE Application

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'createApplicationRequest': new PingOnePlatformApiSsoAndBase.CreateApplicationRequest() // CreateApplicationRequest | 
};
apiInstance.createApplication(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **createApplicationRequest** | [**CreateApplicationRequest**](CreateApplicationRequest.md)|  | [optional] 

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplication

> deleteApplication(environmentID, applicationID)

DELETE Application

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.deleteApplication(environmentID, applicationID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllApplications

> EntityArray readAllApplications(environmentID)

READ All Applications

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllApplications(environmentID).then((data) => {
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


## readOneApplication

> ReadOneApplication200Response readOneApplication(environmentID, applicationID)

READ One Application

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readOneApplication(environmentID, applicationID).then((data) => {
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

[**ReadOneApplication200Response**](ReadOneApplication200Response.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApplication

> ReadOneApplication200Response updateApplication(environmentID, applicationID, opts)

UPDATE Application

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'updateApplicationRequest': new PingOnePlatformApiSsoAndBase.UpdateApplicationRequest() // UpdateApplicationRequest | 
};
apiInstance.updateApplication(environmentID, applicationID, opts).then((data) => {
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
 **updateApplicationRequest** | [**UpdateApplicationRequest**](UpdateApplicationRequest.md)|  | [optional] 

### Return type

[**ReadOneApplication200Response**](ReadOneApplication200Response.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

