# PingOnePlatformApiSsoAndBase.LicensesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readAllLicenses**](LicensesApi.md#readAllLicenses) | **GET** /organizations/{organizationID}/licenses | READ All Licenses
[**readOneLicense**](LicensesApi.md#readOneLicense) | **GET** /organizations/{organizationID}/licenses/{licenseID} | READ One License
[**readOneLicenseName**](LicensesApi.md#readOneLicenseName) | **GET** /organizations/{organizationID}/licenses/{licenseID}/name | READ One License Name
[**updateOneLicenseName**](LicensesApi.md#updateOneLicenseName) | **PUT** /organizations/{organizationID}/licenses/{licenseID}/name | Update One License Name



## readAllLicenses

> EntityArray readAllLicenses(organizationID, opts)

READ All Licenses

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LicensesApi();
let organizationID = "organizationID_example"; // String | 
let opts = {
  'filter': filter=beginsAt lt "{{now}}", // String | For organizations with more than one license, you can use a filter to return the list of licenses in descending order.
  'order': order=-beginsAt // String | 
};
apiInstance.readAllLicenses(organizationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | **String**|  | 
 **filter** | **String**| For organizations with more than one license, you can use a filter to return the list of licenses in descending order. | [optional] 
 **order** | **String**|  | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneLicense

> License readOneLicense(organizationID, licenseID)

READ One License

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LicensesApi();
let organizationID = "organizationID_example"; // String | 
let licenseID = "licenseID_example"; // String | 
apiInstance.readOneLicense(organizationID, licenseID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | **String**|  | 
 **licenseID** | **String**|  | 

### Return type

[**License**](License.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneLicenseName

> LicenseName readOneLicenseName(organizationID, licenseID)

READ One License Name

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LicensesApi();
let organizationID = "organizationID_example"; // String | 
let licenseID = "licenseID_example"; // String | 
apiInstance.readOneLicenseName(organizationID, licenseID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | **String**|  | 
 **licenseID** | **String**|  | 

### Return type

[**LicenseName**](LicenseName.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOneLicenseName

> LicenseName updateOneLicenseName(organizationID, licenseID, opts)

Update One License Name

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.LicensesApi();
let organizationID = "organizationID_example"; // String | 
let licenseID = "licenseID_example"; // String | 
let opts = {
  'licenseName': new PingOnePlatformApiSsoAndBase.LicenseName() // LicenseName | 
};
apiInstance.updateOneLicenseName(organizationID, licenseID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationID** | **String**|  | 
 **licenseID** | **String**|  | 
 **licenseName** | [**LicenseName**](LicenseName.md)|  | [optional] 

### Return type

[**LicenseName**](LicenseName.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

