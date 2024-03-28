# PingOnePlatformApiPingOneMfa.FIDODeviceApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFidoDevice**](FIDODeviceApi.md#createFidoDevice) | **POST** /environments/{environmentID}/fidoDevicesMetadata | CREATE FIDO Device
[**deleteFidoDevice**](FIDODeviceApi.md#deleteFidoDevice) | **DELETE** /environments/{environmentID}/fidoDevicesMetadata/{fidoDeviceID} | DELETE FIDO Device
[**readFidoDevices**](FIDODeviceApi.md#readFidoDevices) | **GET** /environments/{environmentID}/fidoDevicesMetadata | READ All FIDO Devices
[**readOneFidoDevice**](FIDODeviceApi.md#readOneFidoDevice) | **GET** /environments/{environmentID}/fidoDevicesMetadata/{fidoDeviceID} | READ One FIDO Device



## createFidoDevice

> Object createFidoDevice(environmentID, opts)

CREATE FIDO Device

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDODeviceApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.createFidoDevice(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFidoDevice

> deleteFidoDevice(environmentID, fidoDeviceID)

DELETE FIDO Device

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDODeviceApi();
let environmentID = "environmentID_example"; // String | 
let fidoDeviceID = "fidoDeviceID_example"; // String | 
apiInstance.deleteFidoDevice(environmentID, fidoDeviceID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fidoDeviceID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readFidoDevices

> EntityArray readFidoDevices(environmentID)

READ All FIDO Devices

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDODeviceApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readFidoDevices(environmentID).then((data) => {
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


## readOneFidoDevice

> Object readOneFidoDevice(environmentID, fidoDeviceID)

READ One FIDO Device

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.FIDODeviceApi();
let environmentID = "environmentID_example"; // String | 
let fidoDeviceID = "fidoDeviceID_example"; // String | 
apiInstance.readOneFidoDevice(environmentID, fidoDeviceID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **fidoDeviceID** | **String**|  | 

### Return type

**Object**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

