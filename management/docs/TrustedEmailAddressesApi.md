# PingOnePlatformApiSsoAndBase.TrustedEmailAddressesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrustedEmailAddress**](TrustedEmailAddressesApi.md#createTrustedEmailAddress) | **POST** /environments/{environmentID}/emailDomains/{emailDomainID}/trustedEmails | CREATE Trusted Email Address
[**deleteTrustedEmailAddress**](TrustedEmailAddressesApi.md#deleteTrustedEmailAddress) | **DELETE** /environments/{environmentID}/emailDomains/{emailDomainID}/trustedEmails/{trustedEmailId} | DELETE Trusted Email Address
[**readAllTrustedEmailAddresses**](TrustedEmailAddressesApi.md#readAllTrustedEmailAddresses) | **GET** /environments/{environmentID}/emailDomains/{emailDomainID}/trustedEmails | READ All Trusted Email Addresses
[**readOneTrustedEmailAddress**](TrustedEmailAddressesApi.md#readOneTrustedEmailAddress) | **GET** /environments/{environmentID}/emailDomains/{emailDomainID}/trustedEmails/{trustedEmailId} | READ One Trusted Email Address
[**resendVerificationCodeToEmail**](TrustedEmailAddressesApi.md#resendVerificationCodeToEmail) | **POST** /environments/{environmentID}/emailDomains/{emailDomainID}/trustedEmails/{trustedEmailId} | Resend Verification Code To Email



## createTrustedEmailAddress

> EmailDomainTrustedEmail createTrustedEmailAddress(environmentID, emailDomainID, opts)

CREATE Trusted Email Address

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailAddressesApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
let opts = {
  'emailDomainTrustedEmail': new PingOnePlatformApiSsoAndBase.EmailDomainTrustedEmail() // EmailDomainTrustedEmail | 
};
apiInstance.createTrustedEmailAddress(environmentID, emailDomainID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 
 **emailDomainTrustedEmail** | [**EmailDomainTrustedEmail**](EmailDomainTrustedEmail.md)|  | [optional] 

### Return type

[**EmailDomainTrustedEmail**](EmailDomainTrustedEmail.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTrustedEmailAddress

> deleteTrustedEmailAddress(environmentID, emailDomainID, trustedEmailId)

DELETE Trusted Email Address

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailAddressesApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
let trustedEmailId = "trustedEmailId_example"; // String | 
apiInstance.deleteTrustedEmailAddress(environmentID, emailDomainID, trustedEmailId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 
 **trustedEmailId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllTrustedEmailAddresses

> EntityArray readAllTrustedEmailAddresses(environmentID, emailDomainID)

READ All Trusted Email Addresses

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailAddressesApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
apiInstance.readAllTrustedEmailAddresses(environmentID, emailDomainID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneTrustedEmailAddress

> EmailDomainTrustedEmail readOneTrustedEmailAddress(environmentID, emailDomainID, trustedEmailId)

READ One Trusted Email Address

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailAddressesApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
let trustedEmailId = "trustedEmailId_example"; // String | 
apiInstance.readOneTrustedEmailAddress(environmentID, emailDomainID, trustedEmailId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 
 **trustedEmailId** | **String**|  | 

### Return type

[**EmailDomainTrustedEmail**](EmailDomainTrustedEmail.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendVerificationCodeToEmail

> EmailDomainTrustedEmail resendVerificationCodeToEmail(environmentID, emailDomainID, trustedEmailId, opts)

Resend Verification Code To Email

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailAddressesApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
let trustedEmailId = "trustedEmailId_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.trustedEmail.sendVerificationCode+json // String | 
};
apiInstance.resendVerificationCodeToEmail(environmentID, emailDomainID, trustedEmailId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 
 **trustedEmailId** | **String**|  | 
 **contentType** | **String**|  | [optional] 

### Return type

[**EmailDomainTrustedEmail**](EmailDomainTrustedEmail.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

