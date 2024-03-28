# PingOnePlatformApiSsoAndBase.UserAgreementConsentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDGet**](UserAgreementConsentsApi.md#environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDGet) | **GET** /environments/{environmentID}/users/{userID}/agreementConsents/{agreementID} | READ One User Agreement Consent
[**environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDPost**](UserAgreementConsentsApi.md#environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDPost) | **POST** /environments/{environmentID}/users/{userID}/agreementConsents/{agreementID} | Revoke Agreement
[**environmentsEnvironmentIDUsersUserIDAgreementConsentsGet**](UserAgreementConsentsApi.md#environmentsEnvironmentIDUsersUserIDAgreementConsentsGet) | **GET** /environments/{environmentID}/users/{userID}/agreementConsents | READ All User Agreement Consents



## environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDGet

> environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDGet(environmentID, userID, agreementID)

READ One User Agreement Consent

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserAgreementConsentsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDGet(environmentID, userID, agreementID).then(() => {
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
 **agreementID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDPost

> environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDPost(environmentID, userID, agreementID, opts)

Revoke Agreement

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserAgreementConsentsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.consent.revoke+json // String | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDAgreementConsentsAgreementIDPost(environmentID, userID, agreementID, opts).then(() => {
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
 **agreementID** | **String**|  | 
 **contentType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDAgreementConsentsGet

> environmentsEnvironmentIDUsersUserIDAgreementConsentsGet(environmentID, userID)

READ All User Agreement Consents

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserAgreementConsentsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDAgreementConsentsGet(environmentID, userID).then(() => {
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

