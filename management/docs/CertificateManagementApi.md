# PingOnePlatformApiSsoAndBase.CertificateManagementApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCertificateFromFile**](CertificateManagementApi.md#createCertificateFromFile) | **POST** /environments/{environmentID}/certificates | CREATE Certificate with PKCS7 or PEM File
[**createKey**](CertificateManagementApi.md#createKey) | **POST** /environments/{environmentID}/keys | CREATE Key
[**deleteCertificate**](CertificateManagementApi.md#deleteCertificate) | **DELETE** /environments/{environmentID}/certificates/{certID} | DELETE Certificate
[**deleteKey**](CertificateManagementApi.md#deleteKey) | **DELETE** /environments/{environmentID}/keys/{keyID} | DELETE Key
[**environmentsEnvironmentIDDecryptionsPost**](CertificateManagementApi.md#environmentsEnvironmentIDDecryptionsPost) | **POST** /environments/{environmentID}/decryptions | DECRYPT Data
[**environmentsEnvironmentIDEncryptionsPost**](CertificateManagementApi.md#environmentsEnvironmentIDEncryptionsPost) | **POST** /environments/{environmentID}/encryptions | ENCRYPT Data
[**environmentsEnvironmentIDSigningsPost**](CertificateManagementApi.md#environmentsEnvironmentIDSigningsPost) | **POST** /environments/{environmentID}/signings | SIGN Data
[**environmentsEnvironmentIDVerificationsPost**](CertificateManagementApi.md#environmentsEnvironmentIDVerificationsPost) | **POST** /environments/{environmentID}/verifications | VERIFY Signed Data
[**exportCSR**](CertificateManagementApi.md#exportCSR) | **GET** /environments/{environmentID}/keys/{keyID}/csr | Export a certificate signing request (CSR)
[**getCertificate**](CertificateManagementApi.md#getCertificate) | **GET** /environments/{environmentID}/certificates/{certID} | GET Certificate
[**getCertificateApplications**](CertificateManagementApi.md#getCertificateApplications) | **GET** /environments/{environmentID}/certificates/{certID}/applications | GET Certificate Applications
[**getCertificates**](CertificateManagementApi.md#getCertificates) | **GET** /environments/{environmentID}/certificates | GET Certificates
[**getKey**](CertificateManagementApi.md#getKey) | **GET** /environments/{environmentID}/keys/{keyID} | GET Key
[**getKeyApplications**](CertificateManagementApi.md#getKeyApplications) | **GET** /environments/{environmentID}/keys/{keyID}/applications | GET Key Applications
[**getKeys**](CertificateManagementApi.md#getKeys) | **GET** /environments/{environmentID}/keys | GET Keys
[**importCSRResponse**](CertificateManagementApi.md#importCSRResponse) | **POST** /environments/{environmentID}/keys/{keyID}/csr | Import Certificate Authority (CA) Response to a CSR
[**updateKey**](CertificateManagementApi.md#updateKey) | **PUT** /environments/{environmentID}/keys/{keyID} | UPDATE Key



## createCertificateFromFile

> Certificate createCertificateFromFile(environmentID, usageType, file, opts)

CREATE Certificate with PKCS7 or PEM File

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let usageType = "usageType_example"; // String | 
let file = "/path/to/file"; // File | 
let opts = {
  'contentType': application/x-pkcs7-certificates // EnumCreateCertificateAcceptHeader | 
};
apiInstance.createCertificateFromFile(environmentID, usageType, file, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **usageType** | **String**|  | 
 **file** | **File**|  | 
 **contentType** | [**EnumCreateCertificateAcceptHeader**](.md)|  | [optional] 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createKey

> Certificate createKey(environmentID, opts)

CREATE Key

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'contentType': application/x-pkcs12-certificates, // String | 
  'certificate': new PingOnePlatformApiSsoAndBase.Certificate() // Certificate | 
};
apiInstance.createKey(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **contentType** | **String**|  | [optional] 
 **certificate** | [**Certificate**](Certificate.md)|  | [optional] 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## deleteCertificate

> deleteCertificate(environmentID, certID)

DELETE Certificate

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let certID = "certID_example"; // String | 
apiInstance.deleteCertificate(environmentID, certID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **certID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteKey

> deleteKey(environmentID, keyID)

DELETE Key

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let keyID = "keyID_example"; // String | 
apiInstance.deleteKey(environmentID, keyID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## environmentsEnvironmentIDDecryptionsPost

> environmentsEnvironmentIDDecryptionsPost(environmentID, opts)

DECRYPT Data

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDDecryptionsPost(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDEncryptionsPost

> environmentsEnvironmentIDEncryptionsPost(environmentID, opts)

ENCRYPT Data

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDEncryptionsPost(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDSigningsPost

> environmentsEnvironmentIDSigningsPost(environmentID, opts)

SIGN Data

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDSigningsPost(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## environmentsEnvironmentIDVerificationsPost

> environmentsEnvironmentIDVerificationsPost(environmentID, opts)

VERIFY Signed Data

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.environmentsEnvironmentIDVerificationsPost(environmentID, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## exportCSR

> Blob exportCSR(environmentID, keyID, opts)

Export a certificate signing request (CSR)

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let keyID = "keyID_example"; // String | 
let opts = {
  'accept': application/pkcs10 // EnumCSRExportHeader | 
};
apiInstance.exportCSR(environmentID, keyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyID** | **String**|  | 
 **accept** | [**EnumCSRExportHeader**](.md)|  | [optional] 

### Return type

**Blob**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pkcs10, application/x-pem-file


## getCertificate

> Certificate getCertificate(environmentID, certID)

GET Certificate

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let certID = "certID_example"; // String | 
apiInstance.getCertificate(environmentID, certID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **certID** | **String**|  | 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCertificateApplications

> EntityArray getCertificateApplications(environmentID, certID)

GET Certificate Applications

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let certID = "certID_example"; // String | 
apiInstance.getCertificateApplications(environmentID, certID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **certID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCertificates

> EntityArray getCertificates(environmentID)

GET Certificates

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.getCertificates(environmentID).then((data) => {
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


## getKey

> Certificate getKey(environmentID, keyID, opts)

GET Key

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let keyID = "keyID_example"; // String | 
let opts = {
  'accept': new PingOnePlatformApiSsoAndBase.EnumGetKeyAcceptHeader() // EnumGetKeyAcceptHeader | 
};
apiInstance.getKey(environmentID, keyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyID** | **String**|  | 
 **accept** | [**EnumGetKeyAcceptHeader**](.md)|  | [optional] 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-x509-ca-cert, application/x-pkcs7-certificates


## getKeyApplications

> EntityArray getKeyApplications(environmentID, keyID)

GET Key Applications

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let keyID = "keyID_example"; // String | 
apiInstance.getKeyApplications(environmentID, keyID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getKeys

> EntityArray getKeys(environmentID)

GET Keys

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.getKeys(environmentID).then((data) => {
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


## importCSRResponse

> Certificate importCSRResponse(environmentID, keyID, file)

Import Certificate Authority (CA) Response to a CSR

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let keyID = "keyID_example"; // String | 
let file = "/path/to/file"; // File | 
apiInstance.importCSRResponse(environmentID, keyID, file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyID** | **String**|  | 
 **file** | **File**|  | 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateKey

> Certificate updateKey(environmentID, keyID, opts)

UPDATE Key

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.CertificateManagementApi();
let environmentID = "environmentID_example"; // String | 
let keyID = "keyID_example"; // String | 
let opts = {
  'certificateKeyUpdate': new PingOnePlatformApiSsoAndBase.CertificateKeyUpdate() // CertificateKeyUpdate | 
};
apiInstance.updateKey(environmentID, keyID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **keyID** | **String**|  | 
 **certificateKeyUpdate** | [**CertificateKeyUpdate**](CertificateKeyUpdate.md)|  | [optional] 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

