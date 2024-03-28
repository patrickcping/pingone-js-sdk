# PingOnePlatformApiSsoAndBase.GroupsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](GroupsApi.md#createGroup) | **POST** /environments/{environmentID}/groups | CREATE Group
[**createGroupNesting**](GroupsApi.md#createGroupNesting) | **POST** /environments/{environmentID}/groups/{groupID}/memberOfGroups | CREATE Group Nesting
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /environments/{environmentID}/groups/{groupID} | DELETE Group
[**deleteGroupNesting**](GroupsApi.md#deleteGroupNesting) | **DELETE** /environments/{environmentID}/groups/{groupID}/memberOfGroups/{nestedGroupID} | DELETE Group Nesting
[**readAllGroups**](GroupsApi.md#readAllGroups) | **GET** /environments/{environmentID}/groups | READ All Groups
[**readGroupNesting**](GroupsApi.md#readGroupNesting) | **GET** /environments/{environmentID}/groups/{groupID}/memberOfGroups | READ Group Nesting
[**readOneGroup**](GroupsApi.md#readOneGroup) | **GET** /environments/{environmentID}/groups/{groupID} | READ One Group
[**readOneGroupNesting**](GroupsApi.md#readOneGroupNesting) | **GET** /environments/{environmentID}/groups/{groupID}/memberOfGroups/{nestedGroupID} | READ One Group Nesting
[**updateGroup**](GroupsApi.md#updateGroup) | **PUT** /environments/{environmentID}/groups/{groupID} | UPDATE Group



## createGroup

> Group createGroup(environmentID, opts)

CREATE Group

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'group': new PingOnePlatformApiSsoAndBase.Group() // Group | 
};
apiInstance.createGroup(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **group** | [**Group**](Group.md)|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGroupNesting

> GroupNesting createGroupNesting(environmentID, groupID, opts)

CREATE Group Nesting

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let opts = {
  'groupNesting': new PingOnePlatformApiSsoAndBase.GroupNesting() // GroupNesting | 
};
apiInstance.createGroupNesting(environmentID, groupID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **groupNesting** | [**GroupNesting**](GroupNesting.md)|  | [optional] 

### Return type

[**GroupNesting**](GroupNesting.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGroup

> deleteGroup(environmentID, groupID)

DELETE Group

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
apiInstance.deleteGroup(environmentID, groupID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteGroupNesting

> deleteGroupNesting(environmentID, groupID, nestedGroupID)

DELETE Group Nesting

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let nestedGroupID = "nestedGroupID_example"; // String | 
apiInstance.deleteGroupNesting(environmentID, groupID, nestedGroupID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **nestedGroupID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllGroups

> EntityArray readAllGroups(environmentID, opts)

READ All Groups

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': name eq "Training", // String | 
  'limit': 10, // Number | 
  'cursor': "cursor_example" // String | Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
};
apiInstance.readAllGroups(environmentID, opts).then((data) => {
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


## readGroupNesting

> EntityArray readGroupNesting(environmentID, groupID)

READ Group Nesting

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
apiInstance.readGroupNesting(environmentID, groupID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneGroup

> Group readOneGroup(environmentID, groupID, opts)

READ One Group

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let opts = {
  'include': totalMemberCounts // String | 
};
apiInstance.readOneGroup(environmentID, groupID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **include** | **String**|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneGroupNesting

> GroupNesting readOneGroupNesting(environmentID, groupID, nestedGroupID)

READ One Group Nesting

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let nestedGroupID = "nestedGroupID_example"; // String | 
apiInstance.readOneGroupNesting(environmentID, groupID, nestedGroupID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **nestedGroupID** | **String**|  | 

### Return type

[**GroupNesting**](GroupNesting.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGroup

> Group updateGroup(environmentID, groupID, opts)

UPDATE Group

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupsApi();
let environmentID = "environmentID_example"; // String | 
let groupID = "groupID_example"; // String | 
let opts = {
  'group': new PingOnePlatformApiSsoAndBase.Group() // Group | 
};
apiInstance.updateGroup(environmentID, groupID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **groupID** | **String**|  | 
 **group** | [**Group**](Group.md)|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

