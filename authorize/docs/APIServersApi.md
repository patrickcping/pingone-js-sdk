# PingOnePlatformApiAuthorize.APIServersApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAPIServer**](APIServersApi.md#createAPIServer) | **POST** /environments/{environmentID}/apiServers | CREATE API Server
[**deleteAPIServer**](APIServersApi.md#deleteAPIServer) | **DELETE** /environments/{environmentID}/apiServers/{apiServerID} | DELETE API Server
[**readAllAPIServers**](APIServersApi.md#readAllAPIServers) | **GET** /environments/{environmentID}/apiServers | READ All API Servers
[**readOneAPIServer**](APIServersApi.md#readOneAPIServer) | **GET** /environments/{environmentID}/apiServers/{apiServerID} | READ One API Server
[**updateAPIServer**](APIServersApi.md#updateAPIServer) | **PUT** /environments/{environmentID}/apiServers/{apiServerID} | UPDATE API Server



## createAPIServer

> APIServer createAPIServer(environmentID, opts)

CREATE API Server

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.APIServersApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'aPIServer': new PingOnePlatformApiAuthorize.APIServer() // APIServer | 
};
apiInstance.createAPIServer(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **aPIServer** | [**APIServer**](APIServer.md)|  | [optional] 

### Return type

[**APIServer**](APIServer.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAPIServer

> deleteAPIServer(environmentID, apiServerID)

DELETE API Server

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.APIServersApi();
let environmentID = "environmentID_example"; // String | 
let apiServerID = "apiServerID_example"; // String | 
apiInstance.deleteAPIServer(environmentID, apiServerID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **apiServerID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllAPIServers

> EntityArray readAllAPIServers(environmentID)

READ All API Servers

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.APIServersApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllAPIServers(environmentID).then((data) => {
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


## readOneAPIServer

> APIServer readOneAPIServer(environmentID, apiServerID)

READ One API Server

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.APIServersApi();
let environmentID = "environmentID_example"; // String | 
let apiServerID = "apiServerID_example"; // String | 
apiInstance.readOneAPIServer(environmentID, apiServerID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **apiServerID** | **String**|  | 

### Return type

[**APIServer**](APIServer.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAPIServer

> APIServer updateAPIServer(environmentID, apiServerID, opts)

UPDATE API Server

### Example

```javascript
import PingOnePlatformApiAuthorize from 'ping_one_platform_api_authorize';
let defaultClient = PingOnePlatformApiAuthorize.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiAuthorize.APIServersApi();
let environmentID = "environmentID_example"; // String | 
let apiServerID = "apiServerID_example"; // String | 
let opts = {
  'aPIServer': new PingOnePlatformApiAuthorize.APIServer() // APIServer | 
};
apiInstance.updateAPIServer(environmentID, apiServerID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **apiServerID** | **String**|  | 
 **aPIServer** | [**APIServer**](APIServer.md)|  | [optional] 

### Return type

[**APIServer**](APIServer.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

