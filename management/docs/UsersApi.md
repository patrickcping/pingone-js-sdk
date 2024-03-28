# PingOnePlatformApiSsoAndBase.UsersApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /environments/{environmentID}/users | CREATE User
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /environments/{environmentID}/users/{userID} | DELETE User
[**environmentsEnvironmentIDUsersUserIDIdentityProviderGet**](UsersApi.md#environmentsEnvironmentIDUsersUserIDIdentityProviderGet) | **GET** /environments/{environmentID}/users/{userID}/identityProvider | READ User Identity Provider
[**environmentsEnvironmentIDUsersUserIDIdentityProviderPut**](UsersApi.md#environmentsEnvironmentIDUsersUserIDIdentityProviderPut) | **PUT** /environments/{environmentID}/users/{userID}/identityProvider | UPDATE User Identity Provider
[**environmentsEnvironmentIDUsersUserIDVerifyStatusGet**](UsersApi.md#environmentsEnvironmentIDUsersUserIDVerifyStatusGet) | **GET** /environments/{environmentID}/users/{userID}/verifyStatus | READ user verification status
[**environmentsEnvironmentIDUsersUserIDVerifyStatusPut**](UsersApi.md#environmentsEnvironmentIDUsersUserIDVerifyStatusPut) | **PUT** /environments/{environmentID}/users/{userID}/verifyStatus | UPDATE user verification status
[**readAllUsers**](UsersApi.md#readAllUsers) | **GET** /environments/{environmentID}/users | READ All Users
[**readUser**](UsersApi.md#readUser) | **GET** /environments/{environmentID}/users/{userID} | READ User
[**updateUserPatch**](UsersApi.md#updateUserPatch) | **PATCH** /environments/{environmentID}/users/{userID} | UPDATE User (Patch)
[**updateUserPut**](UsersApi.md#updateUserPut) | **PUT** /environments/{environmentID}/users/{userID} | UPDATE User (Put)



## createUser

> User createUser(environmentID, opts)

CREATE User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.user.import+json, // String | 
  'user': new PingOnePlatformApiSsoAndBase.User() // User | 
};
apiInstance.createUser(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **contentType** | **String**|  | [optional] 
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json, application/vnd.pingidentity.user.import+json
- **Accept**: application/json


## deleteUser

> deleteUser(environmentID, userID)

DELETE User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.deleteUser(environmentID, userID).then(() => {
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


## environmentsEnvironmentIDUsersUserIDIdentityProviderGet

> environmentsEnvironmentIDUsersUserIDIdentityProviderGet(environmentID, userID)

READ User Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDIdentityProviderGet(environmentID, userID).then(() => {
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


## environmentsEnvironmentIDUsersUserIDIdentityProviderPut

> environmentsEnvironmentIDUsersUserIDIdentityProviderPut(environmentID, userID, opts)

UPDATE User Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDIdentityProviderPut(environmentID, userID, opts).then(() => {
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


## environmentsEnvironmentIDUsersUserIDVerifyStatusGet

> environmentsEnvironmentIDUsersUserIDVerifyStatusGet(environmentID, userID)

READ user verification status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
apiInstance.environmentsEnvironmentIDUsersUserIDVerifyStatusGet(environmentID, userID).then(() => {
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


## environmentsEnvironmentIDUsersUserIDVerifyStatusPut

> environmentsEnvironmentIDUsersUserIDVerifyStatusPut(environmentID, userID, opts)

UPDATE user verification status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDUsersUserIDVerifyStatusPut(environmentID, userID, opts).then(() => {
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


## readAllUsers

> EntityArray readAllUsers(environmentID, opts)

READ All Users

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': memberOfGroups[id eq "{{groupID}}"] and name.family eq "demo", // String | 
  'limit': 100, // Number | 
  'cursor': "cursor_example" // String | Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
};
apiInstance.readAllUsers(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **filter** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **cursor** | **String**| Adding a cursor value to retrieve the next page of results, used with the &#x60;limit&#x60; parameter. The cursor value is returned in the &#x60;_links.next.href&#x60; link in the response payload. | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readUser

> User readUser(environmentID, userID, opts)

READ User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'include': memberOfGroupIDs // EnumUserRequestInclude | 
};
apiInstance.readUser(environmentID, userID, opts).then((data) => {
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
 **include** | [**EnumUserRequestInclude**](.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUserPatch

> User updateUserPatch(environmentID, userID, opts)

UPDATE User (Patch)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'user': new PingOnePlatformApiSsoAndBase.User() // User | 
};
apiInstance.updateUserPatch(environmentID, userID, opts).then((data) => {
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
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserPut

> User updateUserPut(environmentID, userID, opts)

UPDATE User (Put)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.UsersApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'user': new PingOnePlatformApiSsoAndBase.User() // User | 
};
apiInstance.updateUserPut(environmentID, userID, opts).then((data) => {
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
 **user** | [**User**](User.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

