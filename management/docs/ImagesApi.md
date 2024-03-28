# PingOnePlatformApiSsoAndBase.ImagesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createImage**](ImagesApi.md#createImage) | **POST** /environments/{environmentID}/images | CREATE Image
[**deleteImage**](ImagesApi.md#deleteImage) | **DELETE** /environments/{environmentID}/images/{imgID} | DELETE Image
[**readImage**](ImagesApi.md#readImage) | **GET** /environments/{environmentID}/images/{imgID} | READ Image



## createImage

> Image createImage(environmentID, opts)

CREATE Image

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ImagesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'contentType': image/jpeg, // String | 
  'contentDisposition': attachment; filename=name.jpg, // String | 
  'body': "/path/to/file" // File | 
};
apiInstance.createImage(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **contentType** | **String**|  | [optional] 
 **contentDisposition** | **String**|  | [optional] 
 **body** | **File**|  | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: image/*
- **Accept**: application/json


## deleteImage

> deleteImage(environmentID, imgID)

DELETE Image

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ImagesApi();
let environmentID = "environmentID_example"; // String | 
let imgID = "imgID_example"; // String | 
apiInstance.deleteImage(environmentID, imgID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **imgID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readImage

> Image readImage(environmentID, imgID)

READ Image

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ImagesApi();
let environmentID = "environmentID_example"; // String | 
let imgID = "imgID_example"; // String | 
apiInstance.readImage(environmentID, imgID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **imgID** | **String**|  | 

### Return type

[**Image**](Image.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

