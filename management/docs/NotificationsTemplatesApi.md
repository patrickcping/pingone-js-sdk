# PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContent**](NotificationsTemplatesApi.md#createContent) | **POST** /environments/{environmentID}/templates/{templateName}/contents | CREATE Content
[**deleteBulkVariantContents**](NotificationsTemplatesApi.md#deleteBulkVariantContents) | **DELETE** /environments/{environmentID}/templates/{templateName}/contents | DELETE Bulk Variant Contents
[**deleteContent**](NotificationsTemplatesApi.md#deleteContent) | **DELETE** /environments/{environmentID}/templates/{templateName}/contents/{contentID} | DELETE Content
[**patchBulkVariantContents**](NotificationsTemplatesApi.md#patchBulkVariantContents) | **PATCH** /environments/{environmentID}/templates/{templateName}/contents | PATCH Bulk Variant Contents
[**readAllTemplateContents**](NotificationsTemplatesApi.md#readAllTemplateContents) | **GET** /environments/{environmentID}/templates/{templateName}/contents | READ All Contents
[**readAllTemplates**](NotificationsTemplatesApi.md#readAllTemplates) | **GET** /environments/{environmentID}/templates | READ All Templates
[**readOneContent**](NotificationsTemplatesApi.md#readOneContent) | **GET** /environments/{environmentID}/templates/{templateName}/contents/{contentID} | READ One Content
[**readOneTemplate**](NotificationsTemplatesApi.md#readOneTemplate) | **GET** /environments/{environmentID}/templates/{templateName} | READ One Template
[**updateContent**](NotificationsTemplatesApi.md#updateContent) | **PUT** /environments/{environmentID}/templates/{templateName}/contents/{contentID} | UPDATE Content



## createContent

> TemplateContent createContent(environmentID, templateName, opts)

CREATE Content

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
let opts = {
  'templateContent': new PingOnePlatformApiSsoAndBase.TemplateContent() // TemplateContent | 
};
apiInstance.createContent(environmentID, templateName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 
 **templateContent** | [**TemplateContent**](TemplateContent.md)|  | [optional] 

### Return type

[**TemplateContent**](TemplateContent.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBulkVariantContents

> deleteBulkVariantContents(environmentID, templateName, opts)

DELETE Bulk Variant Contents

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
let opts = {
  'filter': variant eq {{variantName}} // String | 
};
apiInstance.deleteBulkVariantContents(environmentID, templateName, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 
 **filter** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteContent

> deleteContent(environmentID, templateName, contentID)

DELETE Content

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
let contentID = "contentID_example"; // String | 
apiInstance.deleteContent(environmentID, templateName, contentID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 
 **contentID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchBulkVariantContents

> EntityArray patchBulkVariantContents(environmentID, templateName, opts)

PATCH Bulk Variant Contents

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
let opts = {
  'filter': variant eq {{variantName}}, // String | 
  'body': {key: null} // Object | 
};
apiInstance.patchBulkVariantContents(environmentID, templateName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 
 **filter** | **String**|  | [optional] 
 **body** | **Object**|  | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## readAllTemplateContents

> EntityArray readAllTemplateContents(environmentID, templateName)

READ All Contents

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
apiInstance.readAllTemplateContents(environmentID, templateName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllTemplates

> EntityArray readAllTemplates(environmentID, opts)

READ All Templates

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'filter': (createdAt lt "2018-08-30") and (updatedAt gt "2018-07-30"), // String | 
  'order': -createdAt // String | 
};
apiInstance.readAllTemplates(environmentID, opts).then((data) => {
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
 **order** | **String**|  | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneContent

> TemplateContent readOneContent(environmentID, templateName, contentID)

READ One Content

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
let contentID = "contentID_example"; // String | 
apiInstance.readOneContent(environmentID, templateName, contentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 
 **contentID** | **String**|  | 

### Return type

[**TemplateContent**](TemplateContent.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneTemplate

> Template readOneTemplate(environmentID, templateName)

READ One Template

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
apiInstance.readOneTemplate(environmentID, templateName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateContent

> TemplateContent updateContent(environmentID, templateName, contentID, opts)

UPDATE Content

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.NotificationsTemplatesApi();
let environmentID = "environmentID_example"; // String | 
let templateName = new PingOnePlatformApiSsoAndBase.EnumTemplateName(); // EnumTemplateName | 
let contentID = "contentID_example"; // String | 
let opts = {
  'templateContent': new PingOnePlatformApiSsoAndBase.TemplateContent() // TemplateContent | 
};
apiInstance.updateContent(environmentID, templateName, contentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **templateName** | [**EnumTemplateName**](.md)|  | 
 **contentID** | **String**|  | 
 **templateContent** | [**TemplateContent**](TemplateContent.md)|  | [optional] 

### Return type

[**TemplateContent**](TemplateContent.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

