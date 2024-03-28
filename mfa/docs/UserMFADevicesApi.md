# PingOnePlatformApiPingOneMfa.UserMFADevicesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUsersUserIDDevicesDelete**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesDelete) | **DELETE** /environments/{environmentID}/users/{userID}/devices | DELETE Device Order
[**environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete) | **DELETE** /environments/{environmentID}/users/{userID}/devices/{deviceID} | DELETE MFA User Device
[**environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet) | **GET** /environments/{environmentID}/users/{userID}/devices/{deviceID} | READ One MFA User Device
[**environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut) | **PUT** /environments/{environmentID}/users/{userID}/devices/{deviceID}/logs | SEND MFA Device Logs
[**environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut) | **PUT** /environments/{environmentID}/users/{userID}/devices/{deviceID}/nickname | UPDATE Device Nickname
[**environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost) | **POST** /environments/{environmentID}/users/{userID}/devices/{deviceID} | ACTIVATE MFA User Device
[**environmentsEnvironmentIDUsersUserIDDevicesGet**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesGet) | **GET** /environments/{environmentID}/users/{userID}/devices | READ All MFA User Devices
[**environmentsEnvironmentIDUsersUserIDDevicesPost**](UserMFADevicesApi.md#environmentsEnvironmentIDUsersUserIDDevicesPost) | **POST** /environments/{environmentID}/users/{userID}/devices | SET Device Order



## environmentsEnvironmentIDUsersUserIDDevicesDelete

> environmentsEnvironmentIDUsersUserIDDevicesDelete(environmentID, userID, opts)

DELETE Device Order

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.devices.order.remove+json // String | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesDelete(environmentID, userID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **contentType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete

> environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete(environmentID, userID, deviceID)

DELETE MFA User Device

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let deviceID = "deviceID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDDelete(environmentID, userID, deviceID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **deviceID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet

> environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet(environmentID, userID, deviceID)

READ One MFA User Device

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let deviceID = "deviceID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDGet(environmentID, userID, deviceID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **deviceID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut

> environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut(environmentID, userID, deviceID, opts)

SEND MFA Device Logs

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let deviceID = "deviceID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDLogsPut(environmentID, userID, deviceID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **deviceID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut

> environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut(environmentID, userID, deviceID, opts)

UPDATE Device Nickname

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let deviceID = "deviceID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDNicknamePut(environmentID, userID, deviceID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **deviceID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost

> environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost(environmentID, userID, deviceID, opts)

ACTIVATE MFA User Device

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let deviceID = "deviceID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.device.activate+json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesDeviceIDPost(environmentID, userID, deviceID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **deviceID** | **String**|  | 
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDDevicesGet

> environmentsEnvironmentIDUsersUserIDDevicesGet(environmentID, userID)

READ All MFA User Devices

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesGet(environmentID, userID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDDevicesPost

> environmentsEnvironmentIDUsersUserIDDevicesPost(environmentID, userID, opts)

SET Device Order

### Example

```javascript
import PingOnePlatformApiPingOneMfa from 'ping_one_platform_api_ping_one_mfa';
let defaultClient = PingOnePlatformApiPingOneMfa.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneMfa.UserMFADevicesApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.devices.reorder+json, // String | 
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDDevicesPost(environmentID, userID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **contentType** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

