# PingOnePlatformApiSsoAndBase.CustomDomainsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomain**](CustomDomainsApi.md#createDomain) | **POST** /environments/{environmentID}/customDomains | CREATE Domain
[**deleteDomain**](CustomDomainsApi.md#deleteDomain) | **DELETE** /environments/{environmentID}/customDomains/{customDomainID} | DELETE Domain
[**readAllDomains**](CustomDomainsApi.md#readAllDomains) | **GET** /environments/{environmentID}/customDomains | READ All Domains
[**readOneDomain**](CustomDomainsApi.md#readOneDomain) | **GET** /environments/{environmentID}/customDomains/{customDomainID} | READ One Domain
[**updateDomain**](CustomDomainsApi.md#updateDomain) | **POST** /environments/{environmentID}/customDomains/{customDomainID} | Update Domain



## createDomain

> CustomDomain createDomain(environmentID, opts)

CREATE Domain

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CustomDomainsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'customDomain': new PingOnePlatformApiSsoAndBase.CustomDomain() // CustomDomain | 
};
apiInstance.createDomain(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **customDomain** | [**CustomDomain**](CustomDomain.md)|  | [optional] 

### Return type

[**CustomDomain**](CustomDomain.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDomain

> deleteDomain(environmentID, customDomainID)

DELETE Domain

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CustomDomainsApi();
let environmentID = "environmentID_example"; // String | 
let customDomainID = "customDomainID_example"; // String | 
apiInstance.deleteDomain(environmentID, customDomainID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **customDomainID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllDomains

> EntityArray readAllDomains(environmentID)

READ All Domains

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CustomDomainsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllDomains(environmentID).then((data) => {
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


## readOneDomain

> CustomDomain readOneDomain(environmentID, customDomainID)

READ One Domain

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CustomDomainsApi();
let environmentID = "environmentID_example"; // String | 
let customDomainID = "customDomainID_example"; // String | 
apiInstance.readOneDomain(environmentID, customDomainID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **customDomainID** | **String**|  | 

### Return type

[**CustomDomain**](CustomDomain.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDomain

> CustomDomain updateDomain(environmentID, customDomainID, opts)

Update Domain

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CustomDomainsApi();
let environmentID = "environmentID_example"; // String | 
let customDomainID = "customDomainID_example"; // String | 
let opts = {
  'contentType': new PingOnePlatformApiSsoAndBase.EnumCustomDomainPostHeader(), // EnumCustomDomainPostHeader | 
  'customDomainCertificateRequest': new PingOnePlatformApiSsoAndBase.CustomDomainCertificateRequest() // CustomDomainCertificateRequest | 
};
apiInstance.updateDomain(environmentID, customDomainID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **customDomainID** | **String**|  | 
 **contentType** | [**EnumCustomDomainPostHeader**](.md)|  | [optional] 
 **customDomainCertificateRequest** | [**CustomDomainCertificateRequest**](CustomDomainCertificateRequest.md)|  | [optional] 

### Return type

[**CustomDomain**](CustomDomain.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

