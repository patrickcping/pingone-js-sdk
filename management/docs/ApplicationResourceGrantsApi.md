# PingOnePlatformApiSsoAndBase.ApplicationResourceGrantsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationGrant**](ApplicationResourceGrantsApi.md#createApplicationGrant) | **POST** /environments/{environmentID}/applications/{applicationID}/grants | CREATE Grant
[**deleteApplicationGrant**](ApplicationResourceGrantsApi.md#deleteApplicationGrant) | **DELETE** /environments/{environmentID}/applications/{applicationID}/grants/{grantID} | DELETE Grant
[**readAllApplicationGrants**](ApplicationResourceGrantsApi.md#readAllApplicationGrants) | **GET** /environments/{environmentID}/applications/{applicationID}/grants | READ All Grants for an Application
[**readOneApplicationGrant**](ApplicationResourceGrantsApi.md#readOneApplicationGrant) | **GET** /environments/{environmentID}/applications/{applicationID}/grants/{grantID} | READ One Grant for an Application
[**updateApplicationGrant**](ApplicationResourceGrantsApi.md#updateApplicationGrant) | **PUT** /environments/{environmentID}/applications/{applicationID}/grants/{grantID} | UPDATE Grant



## createApplicationGrant

> ApplicationResourceGrant createApplicationGrant(environmentID, applicationID, opts)

CREATE Grant

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationResourceGrantsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let opts = {
  'applicationResourceGrant': new PingOnePlatformApiSsoAndBase.ApplicationResourceGrant() // ApplicationResourceGrant | 
};
apiInstance.createApplicationGrant(environmentID, applicationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **applicationResourceGrant** | [**ApplicationResourceGrant**](ApplicationResourceGrant.md)|  | [optional] 

### Return type

[**ApplicationResourceGrant**](ApplicationResourceGrant.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApplicationGrant

> deleteApplicationGrant(environmentID, applicationID, grantID)

DELETE Grant

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationResourceGrantsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let grantID = "grantID_example"; // String | 
apiInstance.deleteApplicationGrant(environmentID, applicationID, grantID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **grantID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllApplicationGrants

> EntityArray readAllApplicationGrants(environmentID, applicationID)

READ All Grants for an Application

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationResourceGrantsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
apiInstance.readAllApplicationGrants(environmentID, applicationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneApplicationGrant

> ApplicationResourceGrant readOneApplicationGrant(environmentID, applicationID, grantID)

READ One Grant for an Application

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationResourceGrantsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let grantID = "grantID_example"; // String | 
apiInstance.readOneApplicationGrant(environmentID, applicationID, grantID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **grantID** | **String**|  | 

### Return type

[**ApplicationResourceGrant**](ApplicationResourceGrant.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApplicationGrant

> ApplicationResourceGrant updateApplicationGrant(environmentID, applicationID, grantID, opts)

UPDATE Grant

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.ApplicationResourceGrantsApi();
let environmentID = "environmentID_example"; // String | 
let applicationID = "applicationID_example"; // String | 
let grantID = "grantID_example"; // String | 
let opts = {
  'applicationResourceGrant': new PingOnePlatformApiSsoAndBase.ApplicationResourceGrant() // ApplicationResourceGrant | 
};
apiInstance.updateApplicationGrant(environmentID, applicationID, grantID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **applicationID** | **String**|  | 
 **grantID** | **String**|  | 
 **applicationResourceGrant** | [**ApplicationResourceGrant**](ApplicationResourceGrant.md)|  | [optional] 

### Return type

[**ApplicationResourceGrant**](ApplicationResourceGrant.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

