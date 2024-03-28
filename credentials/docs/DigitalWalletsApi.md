# PingOnePlatformApiCredentials.DigitalWalletsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDigitalWallet**](DigitalWalletsApi.md#createDigitalWallet) | **POST** /environments/{environmentID}/users/{userID}/digitalWallets | Create Digital Wallet
[**deleteDigitalWallet**](DigitalWalletsApi.md#deleteDigitalWallet) | **DELETE** /environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID} | Delete Digital Wallet
[**readAllDigitalWallets**](DigitalWalletsApi.md#readAllDigitalWallets) | **GET** /environments/{environmentID}/users/{userID}/digitalWallets | Read All Digital Wallets
[**readOneDigitalWallet**](DigitalWalletsApi.md#readOneDigitalWallet) | **GET** /environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID} | Read One Digital Wallet
[**readOneDigitalWalletCredential**](DigitalWalletsApi.md#readOneDigitalWalletCredential) | **GET** /environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID}/provisionedCredentials | Read One Digital Wallet Credential
[**updateDigitalWallet**](DigitalWalletsApi.md#updateDigitalWallet) | **PUT** /environments/{environmentID}/users/{userID}/digitalWallets/{digitalWalletID} | Update Digital Wallet



## createDigitalWallet

> CredentialDigitalWallet createDigitalWallet(environmentID, userID, opts)

Create Digital Wallet

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'credentialDigitalWallet': new PingOnePlatformApiCredentials.CredentialDigitalWallet() // CredentialDigitalWallet | 
};
apiInstance.createDigitalWallet(environmentID, userID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **credentialDigitalWallet** | [**CredentialDigitalWallet**](CredentialDigitalWallet.md)|  | [optional] 

### Return type

[**CredentialDigitalWallet**](CredentialDigitalWallet.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDigitalWallet

> deleteDigitalWallet(environmentID, userID, digitalWalletID)

Delete Digital Wallet

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let digitalWalletID = "digitalWalletID_example"; // String | 
apiInstance.deleteDigitalWallet(environmentID, userID, digitalWalletID).then(() => {
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
 **digitalWalletID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllDigitalWallets

> EntityArray readAllDigitalWallets(environmentID, userID)

Read All Digital Wallets

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.readAllDigitalWallets(environmentID, userID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneDigitalWallet

> CredentialDigitalWallet readOneDigitalWallet(environmentID, userID, digitalWalletID)

Read One Digital Wallet

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let digitalWalletID = "digitalWalletID_example"; // String | 
apiInstance.readOneDigitalWallet(environmentID, userID, digitalWalletID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **digitalWalletID** | **String**|  | 

### Return type

[**CredentialDigitalWallet**](CredentialDigitalWallet.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneDigitalWalletCredential

> EntityArray readOneDigitalWalletCredential(environmentID, userID, digitalWalletID)

Read One Digital Wallet Credential

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let digitalWalletID = "digitalWalletID_example"; // String | 
apiInstance.readOneDigitalWalletCredential(environmentID, userID, digitalWalletID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **digitalWalletID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDigitalWallet

> CredentialDigitalWallet updateDigitalWallet(environmentID, userID, digitalWalletID, opts)

Update Digital Wallet

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.DigitalWalletsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let digitalWalletID = "digitalWalletID_example"; // String | 
let opts = {
  'credentialDigitalWallet': new PingOnePlatformApiCredentials.CredentialDigitalWallet() // CredentialDigitalWallet | 
};
apiInstance.updateDigitalWallet(environmentID, userID, digitalWalletID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **userID** | **String**|  | 
 **digitalWalletID** | **String**|  | 
 **credentialDigitalWallet** | [**CredentialDigitalWallet**](CredentialDigitalWallet.md)|  | [optional] 

### Return type

[**CredentialDigitalWallet**](CredentialDigitalWallet.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

