# PingOnePlatformApiSsoAndBase.NotificationsPoliciesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotificationsPolicy**](NotificationsPoliciesApi.md#createNotificationsPolicy) | **POST** /environments/{environmentID}/notificationsPolicies | CREATE Notifications Policy
[**deleteNotificationsPolicy**](NotificationsPoliciesApi.md#deleteNotificationsPolicy) | **DELETE** /environments/{environmentID}/notificationsPolicies/{notificationsPolicyID} | DELETE Notifications Policy
[**readAllNotificationsPolicies**](NotificationsPoliciesApi.md#readAllNotificationsPolicies) | **GET** /environments/{environmentID}/notificationsPolicies | READ All Notifications Policies
[**readOneNotificationsPolicy**](NotificationsPoliciesApi.md#readOneNotificationsPolicy) | **GET** /environments/{environmentID}/notificationsPolicies/{notificationsPolicyID} | READ One Notifications Policy
[**updateNotificationsPolicy**](NotificationsPoliciesApi.md#updateNotificationsPolicy) | **PUT** /environments/{environmentID}/notificationsPolicies/{notificationsPolicyID} | UPDATE Notifications Policy



## createNotificationsPolicy

> NotificationsPolicy createNotificationsPolicy(environmentID, opts)

CREATE Notifications Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'notificationsPolicy': new PingOnePlatformApiSsoAndBase.NotificationsPolicy() // NotificationsPolicy | 
};
apiInstance.createNotificationsPolicy(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **notificationsPolicy** | [**NotificationsPolicy**](NotificationsPolicy.md)|  | [optional] 

### Return type

[**NotificationsPolicy**](NotificationsPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteNotificationsPolicy

> deleteNotificationsPolicy(environmentID, notificationsPolicyID)

DELETE Notifications Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let notificationsPolicyID = "notificationsPolicyID_example"; // String | 
apiInstance.deleteNotificationsPolicy(environmentID, notificationsPolicyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **notificationsPolicyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllNotificationsPolicies

> EntityArray readAllNotificationsPolicies(environmentID)

READ All Notifications Policies

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsPoliciesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllNotificationsPolicies(environmentID).then((data) => {
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


## readOneNotificationsPolicy

> NotificationsPolicy readOneNotificationsPolicy(environmentID, notificationsPolicyID)

READ One Notifications Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let notificationsPolicyID = "notificationsPolicyID_example"; // String | 
apiInstance.readOneNotificationsPolicy(environmentID, notificationsPolicyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **notificationsPolicyID** | **String**|  | 

### Return type

[**NotificationsPolicy**](NotificationsPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateNotificationsPolicy

> NotificationsPolicy updateNotificationsPolicy(environmentID, notificationsPolicyID, opts)

UPDATE Notifications Policy

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsPoliciesApi();
let environmentID = "environmentID_example"; // String | 
let notificationsPolicyID = "notificationsPolicyID_example"; // String | 
let opts = {
  'notificationsPolicy': new PingOnePlatformApiSsoAndBase.NotificationsPolicy() // NotificationsPolicy | 
};
apiInstance.updateNotificationsPolicy(environmentID, notificationsPolicyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **notificationsPolicyID** | **String**|  | 
 **notificationsPolicy** | [**NotificationsPolicy**](NotificationsPolicy.md)|  | [optional] 

### Return type

[**NotificationsPolicy**](NotificationsPolicy.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

