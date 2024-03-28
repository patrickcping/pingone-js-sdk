# PingOnePlatformApiSsoAndBase.PhoneDeliverySettingsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPhoneDeliverySettings**](PhoneDeliverySettingsApi.md#createPhoneDeliverySettings) | **POST** /environments/{environmentID}/notificationsSettings/phoneDeliverySettings | CREATE Phone Delivery Settings
[**deletePhoneDeliverySettings**](PhoneDeliverySettingsApi.md#deletePhoneDeliverySettings) | **DELETE** /environments/{environmentID}/notificationsSettings/phoneDeliverySettings/{phoneDeliverySettingsID} | DELETE Phone Delivery Settings
[**readAllPhoneDeliverySettings**](PhoneDeliverySettingsApi.md#readAllPhoneDeliverySettings) | **GET** /environments/{environmentID}/notificationsSettings/phoneDeliverySettings | READ All Phone Delivery Settings
[**readOnePhoneDeliverySettings**](PhoneDeliverySettingsApi.md#readOnePhoneDeliverySettings) | **GET** /environments/{environmentID}/notificationsSettings/phoneDeliverySettings/{phoneDeliverySettingsID} | READ One Phone Delivery Settings
[**updatePhoneDeliverySettings**](PhoneDeliverySettingsApi.md#updatePhoneDeliverySettings) | **PUT** /environments/{environmentID}/notificationsSettings/phoneDeliverySettings/{phoneDeliverySettingsID} | UPDATE Phone Delivery Settings



## createPhoneDeliverySettings

> NotificationsSettingsPhoneDeliverySettings createPhoneDeliverySettings(environmentID, opts)

CREATE Phone Delivery Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PhoneDeliverySettingsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'notificationsSettingsPhoneDeliverySettings': new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettings() // NotificationsSettingsPhoneDeliverySettings | 
};
apiInstance.createPhoneDeliverySettings(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **notificationsSettingsPhoneDeliverySettings** | [**NotificationsSettingsPhoneDeliverySettings**](NotificationsSettingsPhoneDeliverySettings.md)|  | [optional] 

### Return type

[**NotificationsSettingsPhoneDeliverySettings**](NotificationsSettingsPhoneDeliverySettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePhoneDeliverySettings

> deletePhoneDeliverySettings(environmentID, phoneDeliverySettingsID)

DELETE Phone Delivery Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PhoneDeliverySettingsApi();
let environmentID = "environmentID_example"; // String | 
let phoneDeliverySettingsID = "phoneDeliverySettingsID_example"; // String | 
apiInstance.deletePhoneDeliverySettings(environmentID, phoneDeliverySettingsID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **phoneDeliverySettingsID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllPhoneDeliverySettings

> EntityArray readAllPhoneDeliverySettings(environmentID)

READ All Phone Delivery Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PhoneDeliverySettingsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllPhoneDeliverySettings(environmentID).then((data) => {
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


## readOnePhoneDeliverySettings

> NotificationsSettingsPhoneDeliverySettings readOnePhoneDeliverySettings(environmentID, phoneDeliverySettingsID)

READ One Phone Delivery Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PhoneDeliverySettingsApi();
let environmentID = "environmentID_example"; // String | 
let phoneDeliverySettingsID = "phoneDeliverySettingsID_example"; // String | 
apiInstance.readOnePhoneDeliverySettings(environmentID, phoneDeliverySettingsID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **phoneDeliverySettingsID** | **String**|  | 

### Return type

[**NotificationsSettingsPhoneDeliverySettings**](NotificationsSettingsPhoneDeliverySettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePhoneDeliverySettings

> NotificationsSettingsPhoneDeliverySettings updatePhoneDeliverySettings(environmentID, phoneDeliverySettingsID, opts)

UPDATE Phone Delivery Settings

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PhoneDeliverySettingsApi();
let environmentID = "environmentID_example"; // String | 
let phoneDeliverySettingsID = "phoneDeliverySettingsID_example"; // String | 
let opts = {
  'notificationsSettingsPhoneDeliverySettings': new PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettings() // NotificationsSettingsPhoneDeliverySettings | 
};
apiInstance.updatePhoneDeliverySettings(environmentID, phoneDeliverySettingsID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **phoneDeliverySettingsID** | **String**|  | 
 **notificationsSettingsPhoneDeliverySettings** | [**NotificationsSettingsPhoneDeliverySettings**](NotificationsSettingsPhoneDeliverySettings.md)|  | [optional] 

### Return type

[**NotificationsSettingsPhoneDeliverySettings**](NotificationsSettingsPhoneDeliverySettings.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

