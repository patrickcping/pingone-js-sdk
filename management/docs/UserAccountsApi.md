# PingOnePlatformApiSsoAndBase.UserAccountsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userAccount**](UserAccountsApi.md#userAccount) | **POST** /environments/{environmentID}/users/{userID} | User Account



## userAccount

> User userAccount(environmentID, userID, opts)

User Account

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UserAccountsApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'contentType': new PingOnePlatformApiSsoAndBase.EnumUserAccountContentTypeHeader(), // EnumUserAccountContentTypeHeader | 
  'userAccount': new PingOnePlatformApiSsoAndBase.UserAccount() // UserAccount | 
};
apiInstance.userAccount(environmentID, userID, opts).then((data) => {
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
 **contentType** | [**EnumUserAccountContentTypeHeader**](.md)|  | [optional] 
 **userAccount** | [**UserAccount**](UserAccount.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

