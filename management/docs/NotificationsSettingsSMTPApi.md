# PingOnePlatformApiSsoAndBase.NotificationsSettingsSMTPApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEmailDeliverySettings**](NotificationsSettingsSMTPApi.md#deleteEmailDeliverySettings) | **DELETE** /environments/{environmentID}/notificationsSettings/emailDeliverySettings | DELETE Email Delivery Settings
[**readEmailNotificationsSettings**](NotificationsSettingsSMTPApi.md#readEmailNotificationsSettings) | **GET** /environments/{environmentID}/notificationsSettings/emailDeliverySettings | READ Email Notifications Settings
[**updateEmailNotificationsSettings**](NotificationsSettingsSMTPApi.md#updateEmailNotificationsSettings) | **PUT** /environments/{environmentID}/notificationsSettings/emailDeliverySettings | UPDATE Email Notifications Settings



## deleteEmailDeliverySettings

> deleteEmailDeliverySettings(environmentID)

DELETE Email Delivery Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsSMTPApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.deleteEmailDeliverySettings(environmentID).then(() => {
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


## readEmailNotificationsSettings

> NotificationsSettingsEmailDeliverySettings readEmailNotificationsSettings(environmentID)

READ Email Notifications Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsSMTPApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readEmailNotificationsSettings(environmentID).then((data) => {
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

[**NotificationsSettingsEmailDeliverySettings**](NotificationsSettingsEmailDeliverySettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEmailNotificationsSettings

> NotificationsSettingsEmailDeliverySettings updateEmailNotificationsSettings(environmentID, opts)

UPDATE Email Notifications Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsSettingsSMTPApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'notificationsSettingsEmailDeliverySettings': new PingOnePlatformApiSsoAndBase.NotificationsSettingsEmailDeliverySettings() // NotificationsSettingsEmailDeliverySettings | 
};
apiInstance.updateEmailNotificationsSettings(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **notificationsSettingsEmailDeliverySettings** | [**NotificationsSettingsEmailDeliverySettings**](NotificationsSettingsEmailDeliverySettings.md)|  | [optional] 

### Return type

[**NotificationsSettingsEmailDeliverySettings**](NotificationsSettingsEmailDeliverySettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

