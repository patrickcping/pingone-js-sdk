# PingOnePlatformApiCredentials.CredentialIssuersApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentialIssuerProfile**](CredentialIssuersApi.md#createCredentialIssuerProfile) | **POST** /environments/{environmentID}/credentialIssuerProfile | Create Credential Issuer Profile
[**readCredentialIssuerProfile**](CredentialIssuersApi.md#readCredentialIssuerProfile) | **GET** /environments/{environmentID}/credentialIssuerProfile | Read Credential Issuer Profile
[**updateCredentialIssuerProfile**](CredentialIssuersApi.md#updateCredentialIssuerProfile) | **PUT** /environments/{environmentID}/credentialIssuerProfile | Update Credential Issuer Profile



## createCredentialIssuerProfile

> CredentialIssuerProfile createCredentialIssuerProfile(environmentID, opts)

Create Credential Issuer Profile

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuersApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'credentialIssuerProfile': new PingOnePlatformApiCredentials.CredentialIssuerProfile() // CredentialIssuerProfile | 
};
apiInstance.createCredentialIssuerProfile(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialIssuerProfile** | [**CredentialIssuerProfile**](CredentialIssuerProfile.md)|  | [optional] 

### Return type

[**CredentialIssuerProfile**](CredentialIssuerProfile.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## readCredentialIssuerProfile

> CredentialIssuerProfile readCredentialIssuerProfile(environmentID)

Read Credential Issuer Profile

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuersApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readCredentialIssuerProfile(environmentID).then((data) => {
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

[**CredentialIssuerProfile**](CredentialIssuerProfile.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCredentialIssuerProfile

> CredentialIssuerProfile updateCredentialIssuerProfile(environmentID, opts)

Update Credential Issuer Profile

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuersApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'credentialIssuerProfile': new PingOnePlatformApiCredentials.CredentialIssuerProfile() // CredentialIssuerProfile | 
};
apiInstance.updateCredentialIssuerProfile(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialIssuerProfile** | [**CredentialIssuerProfile**](CredentialIssuerProfile.md)|  | [optional] 

### Return type

[**CredentialIssuerProfile**](CredentialIssuerProfile.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

