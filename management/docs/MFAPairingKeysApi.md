# PingOnePlatformApiSsoAndBase.MFAPairingKeysApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDDelete**](MFAPairingKeysApi.md#environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDDelete) | **DELETE** /environments/{environmentID}/users/{userID}/pairingKeys/{pairingKeyID} | DELETE MFA Pairing Key
[**environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDGet**](MFAPairingKeysApi.md#environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDGet) | **GET** /environments/{environmentID}/users/{userID}/pairingKeys/{pairingKeyID} | READ One MFA Pairing Key
[**environmentsEnvironmentIDUsersUserIDPairingKeysPost**](MFAPairingKeysApi.md#environmentsEnvironmentIDUsersUserIDPairingKeysPost) | **POST** /environments/{environmentID}/users/{userID}/pairingKeys | CREATE MFA Pairing Key



## environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDDelete

> environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDDelete(environmentID, userID, pairingKeyID)

DELETE MFA Pairing Key

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.MFAPairingKeysApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let pairingKeyID = "pairingKeyID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDDelete(environmentID, userID, pairingKeyID).then(() => {
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
 **pairingKeyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDGet

> environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDGet(environmentID, userID, pairingKeyID)

READ One MFA Pairing Key

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.MFAPairingKeysApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let pairingKeyID = "pairingKeyID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDPairingKeysPairingKeyIDGet(environmentID, userID, pairingKeyID).then(() => {
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
 **pairingKeyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDUsersUserIDPairingKeysPost

> environmentsEnvironmentIDUsersUserIDPairingKeysPost(environmentID, userID, opts)

CREATE MFA Pairing Key

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.MFAPairingKeysApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDPairingKeysPost(environmentID, userID, opts).then(() => {
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
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

