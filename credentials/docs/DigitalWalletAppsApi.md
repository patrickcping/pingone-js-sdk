# PingOnePlatformApiCredentials.DigitalWalletAppsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDigitalWalletApp**](DigitalWalletAppsApi.md#createDigitalWalletApp) | **POST** /environments/{environmentID}/digitalWalletApplications | Create Digital Wallet App
[**deleteDigitalWalletApp**](DigitalWalletAppsApi.md#deleteDigitalWalletApp) | **DELETE** /environments/{environmentID}/digitalWalletApplications/{digitalWalletApplicationID} | Delete Digital Wallet App
[**readAllDigitalWalletApps**](DigitalWalletAppsApi.md#readAllDigitalWalletApps) | **GET** /environments/{environmentID}/digitalWalletApplications | Read All Digital Wallet Apps
[**readOneDigitalWalletApp**](DigitalWalletAppsApi.md#readOneDigitalWalletApp) | **GET** /environments/{environmentID}/digitalWalletApplications/{digitalWalletApplicationID} | Read One Digital Wallet App
[**updateDigitalWalletApp**](DigitalWalletAppsApi.md#updateDigitalWalletApp) | **PUT** /environments/{environmentID}/digitalWalletApplications/{digitalWalletApplicationID} | Update Digital Wallet App



## createDigitalWalletApp

> DigitalWalletApplication createDigitalWalletApp(environmentID, opts)

Create Digital Wallet App

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletAppsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'digitalWalletApplication': new PingOnePlatformApiCredentials.DigitalWalletApplication() // DigitalWalletApplication | 
};
apiInstance.createDigitalWalletApp(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **digitalWalletApplication** | [**DigitalWalletApplication**](DigitalWalletApplication.md)|  | [optional] 

### Return type

[**DigitalWalletApplication**](DigitalWalletApplication.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDigitalWalletApp

> deleteDigitalWalletApp(environmentID, digitalWalletApplicationID)

Delete Digital Wallet App

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletAppsApi();
let environmentID = "environmentID_example"; // String | 
let digitalWalletApplicationID = "digitalWalletApplicationID_example"; // String | 
apiInstance.deleteDigitalWalletApp(environmentID, digitalWalletApplicationID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **digitalWalletApplicationID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllDigitalWalletApps

> EntityArray readAllDigitalWalletApps(environmentID)

Read All Digital Wallet Apps

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletAppsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllDigitalWalletApps(environmentID).then((data) => {
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


## readOneDigitalWalletApp

> DigitalWalletApplication readOneDigitalWalletApp(environmentID, digitalWalletApplicationID)

Read One Digital Wallet App

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletAppsApi();
let environmentID = "environmentID_example"; // String | 
let digitalWalletApplicationID = "digitalWalletApplicationID_example"; // String | 
apiInstance.readOneDigitalWalletApp(environmentID, digitalWalletApplicationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **digitalWalletApplicationID** | **String**|  | 

### Return type

[**DigitalWalletApplication**](DigitalWalletApplication.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDigitalWalletApp

> DigitalWalletApplication updateDigitalWalletApp(environmentID, digitalWalletApplicationID, opts)

Update Digital Wallet App

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletAppsApi();
let environmentID = "environmentID_example"; // String | 
let digitalWalletApplicationID = "digitalWalletApplicationID_example"; // String | 
let opts = {
  'digitalWalletApplication': new PingOnePlatformApiCredentials.DigitalWalletApplication() // DigitalWalletApplication | 
};
apiInstance.updateDigitalWalletApp(environmentID, digitalWalletApplicationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **digitalWalletApplicationID** | **String**|  | 
 **digitalWalletApplication** | [**DigitalWalletApplication**](DigitalWalletApplication.md)|  | [optional] 

### Return type

[**DigitalWalletApplication**](DigitalWalletApplication.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

