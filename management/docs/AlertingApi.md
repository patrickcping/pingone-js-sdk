# PingOnePlatformApiSsoAndBase.AlertingApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlertChannel**](AlertingApi.md#createAlertChannel) | **POST** /environments/{environmentID}/alertChannels | CREATE Alert Channel
[**deleteAlertChannel**](AlertingApi.md#deleteAlertChannel) | **DELETE** /environments/{environmentID}/alertChannels/{alertChannelID} | DELETE Alert Channel
[**readAllAlertChannels**](AlertingApi.md#readAllAlertChannels) | **GET** /environments/{environmentID}/alertChannels | READ All Alert Channels
[**readOneAlertChannel**](AlertingApi.md#readOneAlertChannel) | **GET** /environments/{environmentID}/alertChannels/{alertChannelID} | READ One Alert Channel
[**updateAlertChannel**](AlertingApi.md#updateAlertChannel) | **PUT** /environments/{environmentID}/alertChannels/{alertChannelID} | UPDATE Alert Channel



## createAlertChannel

> AlertChannel createAlertChannel(environmentID, opts)

CREATE Alert Channel

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AlertingApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'alertChannel': new PingOnePlatformApiSsoAndBase.AlertChannel() // AlertChannel | 
};
apiInstance.createAlertChannel(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **alertChannel** | [**AlertChannel**](AlertChannel.md)|  | [optional] 

### Return type

[**AlertChannel**](AlertChannel.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAlertChannel

> deleteAlertChannel(environmentID, alertChannelID)

DELETE Alert Channel

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AlertingApi();
let environmentID = "environmentID_example"; // String | 
let alertChannelID = "alertChannelID_example"; // String | 
apiInstance.deleteAlertChannel(environmentID, alertChannelID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **alertChannelID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllAlertChannels

> EntityArray readAllAlertChannels(environmentID)

READ All Alert Channels

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AlertingApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllAlertChannels(environmentID).then((data) => {
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


## readOneAlertChannel

> AlertChannel readOneAlertChannel(environmentID, alertChannelID)

READ One Alert Channel

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AlertingApi();
let environmentID = "environmentID_example"; // String | 
let alertChannelID = "alertChannelID_example"; // String | 
apiInstance.readOneAlertChannel(environmentID, alertChannelID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **alertChannelID** | **String**|  | 

### Return type

[**AlertChannel**](AlertChannel.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAlertChannel

> AlertChannel updateAlertChannel(environmentID, alertChannelID, opts)

UPDATE Alert Channel

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AlertingApi();
let environmentID = "environmentID_example"; // String | 
let alertChannelID = "alertChannelID_example"; // String | 
let opts = {
  'alertChannel': new PingOnePlatformApiSsoAndBase.AlertChannel() // AlertChannel | 
};
apiInstance.updateAlertChannel(environmentID, alertChannelID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **alertChannelID** | **String**|  | 
 **alertChannel** | [**AlertChannel**](AlertChannel.md)|  | [optional] 

### Return type

[**AlertChannel**](AlertChannel.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

