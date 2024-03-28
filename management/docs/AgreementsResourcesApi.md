# PingOnePlatformApiSsoAndBase.AgreementsResourcesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgreement**](AgreementsResourcesApi.md#createAgreement) | **POST** /environments/{environmentID}/agreements | CREATE Agreement
[**deleteAgreement**](AgreementsResourcesApi.md#deleteAgreement) | **DELETE** /environments/{environmentID}/agreements/{agreementID} | DELETE Agreement
[**readAllAgreements**](AgreementsResourcesApi.md#readAllAgreements) | **GET** /environments/{environmentID}/agreements | READ All Agreements
[**readOneAgreement**](AgreementsResourcesApi.md#readOneAgreement) | **GET** /environments/{environmentID}/agreements/{agreementID} | READ One Agreement
[**updateAgreement**](AgreementsResourcesApi.md#updateAgreement) | **PUT** /environments/{environmentID}/agreements/{agreementID} | UPDATE Agreement



## createAgreement

> Agreement createAgreement(environmentID, opts)

CREATE Agreement

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'agreement': new PingOnePlatformApiSsoAndBase.Agreement() // Agreement | 
};
apiInstance.createAgreement(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **agreement** | [**Agreement**](Agreement.md)|  | [optional] 

### Return type

[**Agreement**](Agreement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAgreement

> deleteAgreement(environmentID, agreementID)

DELETE Agreement

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
apiInstance.deleteAgreement(environmentID, agreementID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **agreementID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllAgreements

> EntityArray readAllAgreements(environmentID)

READ All Agreements

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementsResourcesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllAgreements(environmentID).then((data) => {
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


## readOneAgreement

> Agreement readOneAgreement(environmentID, agreementID)

READ One Agreement

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
apiInstance.readOneAgreement(environmentID, agreementID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **agreementID** | **String**|  | 

### Return type

[**Agreement**](Agreement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAgreement

> Agreement updateAgreement(environmentID, agreementID, opts)

UPDATE Agreement

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.AgreementsResourcesApi();
let environmentID = "environmentID_example"; // String | 
let agreementID = "agreementID_example"; // String | 
let opts = {
  'agreement': new PingOnePlatformApiSsoAndBase.Agreement() // Agreement | 
};
apiInstance.updateAgreement(environmentID, agreementID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **agreementID** | **String**|  | 
 **agreement** | [**Agreement**](Agreement.md)|  | [optional] 

### Return type

[**Agreement**](Agreement.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

