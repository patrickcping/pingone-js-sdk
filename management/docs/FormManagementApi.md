# PingOnePlatformApiSsoAndBase.FormManagementApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createForm**](FormManagementApi.md#createForm) | **POST** /environments/{environmentID}/forms | CREATE Form
[**deleteForm**](FormManagementApi.md#deleteForm) | **DELETE** /environments/{environmentID}/forms/{formID} | DELETE Form
[**readAllForms**](FormManagementApi.md#readAllForms) | **GET** /environments/{environmentID}/forms | READ All Forms
[**readForm**](FormManagementApi.md#readForm) | **GET** /environments/{environmentID}/forms/{formID} | READ One Form
[**updateForm**](FormManagementApi.md#updateForm) | **PUT** /environments/{environmentID}/forms/{formID} | UPDATE Form



## createForm

> Form createForm(environmentID, opts)

CREATE Form

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.FormManagementApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'form': new PingOnePlatformApiSsoAndBase.Form() // Form | 
};
apiInstance.createForm(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **form** | [**Form**](Form.md)|  | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteForm

> deleteForm(environmentID, formID)

DELETE Form

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.FormManagementApi();
let environmentID = "environmentID_example"; // String | 
let formID = "formID_example"; // String | 
apiInstance.deleteForm(environmentID, formID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **formID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllForms

> EntityArray readAllForms(environmentID)

READ All Forms

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.FormManagementApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllForms(environmentID).then((data) => {
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

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readForm

> Form readForm(environmentID, formID, opts)

READ One Form

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.FormManagementApi();
let environmentID = "environmentID_example"; // String | 
let formID = "formID_example"; // String | 
let opts = {
  'include': new PingOnePlatformApiSsoAndBase.EnumFormsIncludeParameter() // EnumFormsIncludeParameter | 
};
apiInstance.readForm(environmentID, formID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **formID** | **String**|  | 
 **include** | [**EnumFormsIncludeParameter**](.md)|  | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateForm

> Form updateForm(environmentID, formID, opts)

UPDATE Form

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.FormManagementApi();
let environmentID = "environmentID_example"; // String | 
let formID = "formID_example"; // String | 
let opts = {
  'form': new PingOnePlatformApiSsoAndBase.Form() // Form | 
};
apiInstance.updateForm(environmentID, formID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **formID** | **String**|  | 
 **form** | [**Form**](Form.md)|  | [optional] 

### Return type

[**Form**](Form.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

