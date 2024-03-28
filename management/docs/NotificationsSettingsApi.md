# PingOnePlatformApiSsoAndBase.NotificationsSettingsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteNotificationsSettings**](NotificationsSettingsApi.md#deleteNotificationsSettings) | **DELETE** /environments/{environmentID}/notificationsSettings | DELETE Notifications Settings
[**readNotificationsSettings**](NotificationsSettingsApi.md#readNotificationsSettings) | **GET** /environments/{environmentID}/notificationsSettings | READ Notifications Settings
[**updateNotificationsSettings**](NotificationsSettingsApi.md#updateNotificationsSettings) | **PUT** /environments/{environmentID}/notificationsSettings | UPDATE Notifications Settings



## deleteNotificationsSettings

> NotificationsSettings deleteNotificationsSettings(environmentID)

DELETE Notifications Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.deleteNotificationsSettings(environmentID).then((data) => {
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

[**NotificationsSettings**](NotificationsSettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readNotificationsSettings

> NotificationsSettings readNotificationsSettings(environmentID)

READ Notifications Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readNotificationsSettings(environmentID).then((data) => {
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

[**NotificationsSettings**](NotificationsSettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNotificationsSettings

> NotificationsSettings updateNotificationsSettings(environmentID, opts)

UPDATE Notifications Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'notificationsSettings': new PingOnePlatformApiSsoAndBase.NotificationsSettings() // NotificationsSettings | 
};
apiInstance.updateNotificationsSettings(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **notificationsSettings** | [**NotificationsSettings**](NotificationsSettings.md)|  | [optional] 

### Return type

[**NotificationsSettings**](NotificationsSettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

