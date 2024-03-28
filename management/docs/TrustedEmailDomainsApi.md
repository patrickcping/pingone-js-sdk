# PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrustedEmailDomain**](TrustedEmailDomainsApi.md#createTrustedEmailDomain) | **POST** /environments/{environmentID}/emailDomains | CREATE Trusted Email Domain
[**deleteTrustedEmailDomain**](TrustedEmailDomainsApi.md#deleteTrustedEmailDomain) | **DELETE** /environments/{environmentID}/emailDomains/{emailDomainID} | DELETE Trusted Email Domain
[**readAllTrustedEmailDomains**](TrustedEmailDomainsApi.md#readAllTrustedEmailDomains) | **GET** /environments/{environmentID}/emailDomains | READ All Trusted Email Domains
[**readOneTrustedEmailDomain**](TrustedEmailDomainsApi.md#readOneTrustedEmailDomain) | **GET** /environments/{environmentID}/emailDomains/{emailDomainID} | READ One Trusted Email Domain
[**readTrustedEmailDomainDKIMStatus**](TrustedEmailDomainsApi.md#readTrustedEmailDomainDKIMStatus) | **GET** /environments/{environmentID}/emailDomains/{emailDomainID}/dkim | READ Trusted Email Domain DKIM Status
[**readTrustedEmailDomainOwnershipStatus**](TrustedEmailDomainsApi.md#readTrustedEmailDomainOwnershipStatus) | **GET** /environments/{environmentID}/emailDomains/{emailDomainID}/ownership | READ Trusted Email Domain Ownership Status
[**readTrustedEmailDomainSPFStatus**](TrustedEmailDomainsApi.md#readTrustedEmailDomainSPFStatus) | **GET** /environments/{environmentID}/emailDomains/{emailDomainID}/spf | READ Trusted Email Domain SPF Status



## createTrustedEmailDomain

> EmailDomain createTrustedEmailDomain(environmentID, opts)

CREATE Trusted Email Domain

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'emailDomain': new PingOnePlatformApiSsoAndBase.EmailDomain() // EmailDomain | 
};
apiInstance.createTrustedEmailDomain(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomain** | [**EmailDomain**](EmailDomain.md)|  | [optional] 

### Return type

[**EmailDomain**](EmailDomain.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTrustedEmailDomain

> deleteTrustedEmailDomain(environmentID, emailDomainID)

DELETE Trusted Email Domain

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
apiInstance.deleteTrustedEmailDomain(environmentID, emailDomainID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllTrustedEmailDomains

> EntityArray readAllTrustedEmailDomains(environmentID)

READ All Trusted Email Domains

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllTrustedEmailDomains(environmentID).then((data) => {
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


## readOneTrustedEmailDomain

> EmailDomain readOneTrustedEmailDomain(environmentID, emailDomainID)

READ One Trusted Email Domain

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
apiInstance.readOneTrustedEmailDomain(environmentID, emailDomainID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 

### Return type

[**EmailDomain**](EmailDomain.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readTrustedEmailDomainDKIMStatus

> EmailDomainDKIMStatus readTrustedEmailDomainDKIMStatus(environmentID, emailDomainID)

READ Trusted Email Domain DKIM Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
apiInstance.readTrustedEmailDomainDKIMStatus(environmentID, emailDomainID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 

### Return type

[**EmailDomainDKIMStatus**](EmailDomainDKIMStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readTrustedEmailDomainOwnershipStatus

> EmailDomainOwnershipStatus readTrustedEmailDomainOwnershipStatus(environmentID, emailDomainID)

READ Trusted Email Domain Ownership Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
apiInstance.readTrustedEmailDomainOwnershipStatus(environmentID, emailDomainID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 

### Return type

[**EmailDomainOwnershipStatus**](EmailDomainOwnershipStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readTrustedEmailDomainSPFStatus

> EmailDomainSPFStatus readTrustedEmailDomainSPFStatus(environmentID, emailDomainID)

READ Trusted Email Domain SPF Status

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.TrustedEmailDomainsApi();
let environmentID = "environmentID_example"; // String | 
let emailDomainID = "emailDomainID_example"; // String | 
apiInstance.readTrustedEmailDomainSPFStatus(environmentID, emailDomainID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **emailDomainID** | **String**|  | 

### Return type

[**EmailDomainSPFStatus**](EmailDomainSPFStatus.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

