# PingOnePlatformApiSsoAndBase.BrandingThemesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBrandingTheme**](BrandingThemesApi.md#createBrandingTheme) | **POST** /environments/{environmentID}/themes | CREATE Branding Theme
[**deleteBrandingTheme**](BrandingThemesApi.md#deleteBrandingTheme) | **DELETE** /environments/{environmentID}/themes/{themeID} | DELETE Branding Theme
[**readBrandingThemeDefault**](BrandingThemesApi.md#readBrandingThemeDefault) | **GET** /environments/{environmentID}/themes/{themeID}/default | READ Branding Theme Default
[**readBrandingThemes**](BrandingThemesApi.md#readBrandingThemes) | **GET** /environments/{environmentID}/themes | READ Branding Themes
[**readOneBrandingTheme**](BrandingThemesApi.md#readOneBrandingTheme) | **GET** /environments/{environmentID}/themes/{themeID} | READ One Branding Theme
[**updateBrandingTheme**](BrandingThemesApi.md#updateBrandingTheme) | **PUT** /environments/{environmentID}/themes/{themeID} | UPDATE Branding Theme
[**updateBrandingThemeDefault**](BrandingThemesApi.md#updateBrandingThemeDefault) | **PUT** /environments/{environmentID}/themes/{themeID}/default | UPDATE Branding Theme Default



## createBrandingTheme

> BrandingTheme createBrandingTheme(environmentID, opts)

CREATE Branding Theme

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'brandingTheme': new PingOnePlatformApiSsoAndBase.BrandingTheme() // BrandingTheme | 
};
apiInstance.createBrandingTheme(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **brandingTheme** | [**BrandingTheme**](BrandingTheme.md)|  | [optional] 

### Return type

[**BrandingTheme**](BrandingTheme.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBrandingTheme

> deleteBrandingTheme(environmentID, themeID)

DELETE Branding Theme

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
let environmentID = "environmentID_example"; // String | 
let themeID = "themeID_example"; // String | 
apiInstance.deleteBrandingTheme(environmentID, themeID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **themeID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readBrandingThemeDefault

> BrandingThemeDefault readBrandingThemeDefault(environmentID, themeID)

READ Branding Theme Default

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
let environmentID = "environmentID_example"; // String | 
let themeID = "themeID_example"; // String | 
apiInstance.readBrandingThemeDefault(environmentID, themeID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **themeID** | **String**|  | 

### Return type

[**BrandingThemeDefault**](BrandingThemeDefault.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readBrandingThemes

> EntityArray readBrandingThemes(environmentID)

READ Branding Themes

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readBrandingThemes(environmentID).then((data) => {
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


## readOneBrandingTheme

> BrandingTheme readOneBrandingTheme(environmentID, themeID)

READ One Branding Theme

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
let environmentID = "environmentID_example"; // String | 
let themeID = "themeID_example"; // String | 
apiInstance.readOneBrandingTheme(environmentID, themeID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **themeID** | **String**|  | 

### Return type

[**BrandingTheme**](BrandingTheme.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBrandingTheme

> BrandingTheme updateBrandingTheme(environmentID, themeID, opts)

UPDATE Branding Theme

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
let environmentID = "environmentID_example"; // String | 
let themeID = "themeID_example"; // String | 
let opts = {
  'brandingTheme': new PingOnePlatformApiSsoAndBase.BrandingTheme() // BrandingTheme | 
};
apiInstance.updateBrandingTheme(environmentID, themeID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **themeID** | **String**|  | 
 **brandingTheme** | [**BrandingTheme**](BrandingTheme.md)|  | [optional] 

### Return type

[**BrandingTheme**](BrandingTheme.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBrandingThemeDefault

> BrandingThemeDefault updateBrandingThemeDefault(environmentID, themeID, opts)

UPDATE Branding Theme Default

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BrandingThemesApi();
let environmentID = "environmentID_example"; // String | 
let themeID = "themeID_example"; // String | 
let opts = {
  'brandingThemeDefault': new PingOnePlatformApiSsoAndBase.BrandingThemeDefault() // BrandingThemeDefault | 
};
apiInstance.updateBrandingThemeDefault(environmentID, themeID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **themeID** | **String**|  | 
 **brandingThemeDefault** | [**BrandingThemeDefault**](BrandingThemeDefault.md)|  | [optional] 

### Return type

[**BrandingThemeDefault**](BrandingThemeDefault.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

