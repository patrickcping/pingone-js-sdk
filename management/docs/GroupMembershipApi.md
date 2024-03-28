# PingOnePlatformApiSsoAndBase.GroupMembershipApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserToGroup**](GroupMembershipApi.md#addUserToGroup) | **POST** /environments/{environmentID}/users/{userID}/memberOfGroups | ADD User to Group
[**readAllGroupMembershipsForUser**](GroupMembershipApi.md#readAllGroupMembershipsForUser) | **GET** /environments/{environmentID}/users/{userID}/memberOfGroups | READ All Group Memberships for User
[**readOneGroupMembershipForUser**](GroupMembershipApi.md#readOneGroupMembershipForUser) | **GET** /environments/{environmentID}/users/{userID}/memberOfGroups/{groupID} | READ One Group Membership for User
[**removeUserFromGroup**](GroupMembershipApi.md#removeUserFromGroup) | **DELETE** /environments/{environmentID}/users/{userID}/memberOfGroups/{groupID} | REMOVE User from Group



## addUserToGroup

> GroupMembership addUserToGroup(environmentID, userID, opts)

ADD User to Group

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupMembershipApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'groupMembership': new PingOnePlatformApiSsoAndBase.GroupMembership() // GroupMembership | 
};
apiInstance.addUserToGroup(environmentID, userID, opts).then((data) => {
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
 **groupMembership** | [**GroupMembership**](GroupMembership.md)|  | [optional] 

### Return type

[**GroupMembership**](GroupMembership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## readAllGroupMembershipsForUser

> EntityArray readAllGroupMembershipsForUser(environmentID, userID, opts)

READ All Group Memberships for User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupMembershipApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let opts = {
  'expand': group, // String | 
  'limit': 100, // Number | 
  'cursor': "cursor_example", // String | Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
  'filter': "filter_example" // String | 
};
apiInstance.readAllGroupMembershipsForUser(environmentID, userID, opts).then((data) => {
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
 **expand** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **cursor** | **String**| Adding a cursor value to retrieve the next page of results, used with the &#x60;limit&#x60; parameter. The cursor value is returned in the &#x60;_links.next.href&#x60; link in the response payload. | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneGroupMembershipForUser

> GroupMembership readOneGroupMembershipForUser(environmentID, userID, groupID, opts)

READ One Group Membership for User

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupMembershipApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let groupID = "groupID_example"; // String | 
let opts = {
  'expand': group // EnumUserGroupAssignmentExpandParameter | 
};
apiInstance.readOneGroupMembershipForUser(environmentID, userID, groupID, opts).then((data) => {
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
 **groupID** | **String**|  | 
 **expand** | [**EnumUserGroupAssignmentExpandParameter**](.md)|  | [optional] 

### Return type

[**GroupMembership**](GroupMembership.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeUserFromGroup

> removeUserFromGroup(environmentID, userID, groupID)

REMOVE User from Group

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.GroupMembershipApi();
let environmentID = "environmentID_example"; // String | 
let userID = "userID_example"; // String | 
let groupID = "groupID_example"; // String | 
apiInstance.removeUserFromGroup(environmentID, userID, groupID).then(() => {
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
 **groupID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

