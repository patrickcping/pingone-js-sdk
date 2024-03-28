# PingOnePlatformApiCredentials.CredentialIssuanceRulesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyCredentialIssuanceRuleStagedChanges**](CredentialIssuanceRulesApi.md#applyCredentialIssuanceRuleStagedChanges) | **POST** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/stagedChanges | Apply Credential Issuance Rule Staged Changes
[**createCredentialIssuanceRule**](CredentialIssuanceRulesApi.md#createCredentialIssuanceRule) | **POST** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules | Create Credential Issuance Rule
[**deleteCredentialIssuanceRule**](CredentialIssuanceRulesApi.md#deleteCredentialIssuanceRule) | **DELETE** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID} | Delete Credential Issuance Rule
[**readAllCredentialIssuanceRules**](CredentialIssuanceRulesApi.md#readAllCredentialIssuanceRules) | **GET** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules | Read All Credential Issuance Rules
[**readCredentialIssuanceRuleStagedChanges**](CredentialIssuanceRulesApi.md#readCredentialIssuanceRuleStagedChanges) | **GET** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/stagedChanges | Read Credential Issuance Rule Staged Changes
[**readCredentialIssuanceRuleUsageCounts**](CredentialIssuanceRulesApi.md#readCredentialIssuanceRuleUsageCounts) | **GET** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/usageCounts | Read Credential Issuance Rule Usage Counts
[**readCredentialIssuanceRuleUsageDetails**](CredentialIssuanceRulesApi.md#readCredentialIssuanceRuleUsageDetails) | **GET** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID}/usageDetails | Read Credential Issuance Rule Usage Details
[**readOneCredentialIssuanceRule**](CredentialIssuanceRulesApi.md#readOneCredentialIssuanceRule) | **GET** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID} | Read One Credential Issuance Rule
[**updateCredentialIssuanceRule**](CredentialIssuanceRulesApi.md#updateCredentialIssuanceRule) | **PUT** /environments/{environmentID}/credentialTypes/{credentialTypeID}/issuanceRules/{credentialIssuanceRuleID} | Update Credential Issuance Rule



## applyCredentialIssuanceRuleStagedChanges

> CredentialIssuanceRuleStagedChange applyCredentialIssuanceRuleStagedChanges(environmentID, credentialTypeID, credentialIssuanceRuleID, opts)

Apply Credential Issuance Rule Staged Changes

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let credentialIssuanceRuleID = "credentialIssuanceRuleID_example"; // String | 
let opts = {
  'contentType': application/vnd.pingidentity.credentials.applyStagedChanges+json, // String | 
  'credentialIssuanceRuleStagedChange': new PingOnePlatformApiCredentials.CredentialIssuanceRuleStagedChange() // CredentialIssuanceRuleStagedChange | 
};
apiInstance.applyCredentialIssuanceRuleStagedChanges(environmentID, credentialTypeID, credentialIssuanceRuleID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRuleID** | **String**|  | 
 **contentType** | **String**|  | [optional] 
 **credentialIssuanceRuleStagedChange** | [**CredentialIssuanceRuleStagedChange**](CredentialIssuanceRuleStagedChange.md)|  | [optional] 

### Return type

[**CredentialIssuanceRuleStagedChange**](CredentialIssuanceRuleStagedChange.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCredentialIssuanceRule

> CredentialIssuanceRule createCredentialIssuanceRule(environmentID, credentialTypeID, opts)

Create Credential Issuance Rule

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let opts = {
  'credentialIssuanceRule': new PingOnePlatformApiCredentials.CredentialIssuanceRule() // CredentialIssuanceRule | 
};
apiInstance.createCredentialIssuanceRule(environmentID, credentialTypeID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRule** | [**CredentialIssuanceRule**](CredentialIssuanceRule.md)|  | [optional] 

### Return type

[**CredentialIssuanceRule**](CredentialIssuanceRule.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCredentialIssuanceRule

> deleteCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID)

Delete Credential Issuance Rule

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let credentialIssuanceRuleID = "credentialIssuanceRuleID_example"; // String | 
apiInstance.deleteCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRuleID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllCredentialIssuanceRules

> EntityArray readAllCredentialIssuanceRules(environmentID, credentialTypeID)

Read All Credential Issuance Rules

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
apiInstance.readAllCredentialIssuanceRules(environmentID, credentialTypeID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readCredentialIssuanceRuleStagedChanges

> CredentialIssuanceRuleStagedChange readCredentialIssuanceRuleStagedChanges(environmentID, credentialTypeID, credentialIssuanceRuleID)

Read Credential Issuance Rule Staged Changes

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let credentialIssuanceRuleID = "credentialIssuanceRuleID_example"; // String | 
apiInstance.readCredentialIssuanceRuleStagedChanges(environmentID, credentialTypeID, credentialIssuanceRuleID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRuleID** | **String**|  | 

### Return type

[**CredentialIssuanceRuleStagedChange**](CredentialIssuanceRuleStagedChange.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readCredentialIssuanceRuleUsageCounts

> CredentialIssuanceRuleUsageCounts readCredentialIssuanceRuleUsageCounts(environmentID, credentialTypeID, credentialIssuanceRuleID)

Read Credential Issuance Rule Usage Counts

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let credentialIssuanceRuleID = "credentialIssuanceRuleID_example"; // String | 
apiInstance.readCredentialIssuanceRuleUsageCounts(environmentID, credentialTypeID, credentialIssuanceRuleID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRuleID** | **String**|  | 

### Return type

[**CredentialIssuanceRuleUsageCounts**](CredentialIssuanceRuleUsageCounts.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readCredentialIssuanceRuleUsageDetails

> CredentialIssuanceRuleUsageDetails readCredentialIssuanceRuleUsageDetails(environmentID, credentialTypeID, credentialIssuanceRuleID)

Read Credential Issuance Rule Usage Details

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let credentialIssuanceRuleID = "credentialIssuanceRuleID_example"; // String | 
apiInstance.readCredentialIssuanceRuleUsageDetails(environmentID, credentialTypeID, credentialIssuanceRuleID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRuleID** | **String**|  | 

### Return type

[**CredentialIssuanceRuleUsageDetails**](CredentialIssuanceRuleUsageDetails.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneCredentialIssuanceRule

> CredentialIssuanceRule readOneCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID)

Read One Credential Issuance Rule

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let credentialIssuanceRuleID = "credentialIssuanceRuleID_example"; // String | 
apiInstance.readOneCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRuleID** | **String**|  | 

### Return type

[**CredentialIssuanceRule**](CredentialIssuanceRule.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCredentialIssuanceRule

> CredentialIssuanceRule updateCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID, opts)

Update Credential Issuance Rule

### Example

```javascript
import PingOnePlatformApiCredentials from 'ping_one_platform_api_credentials';
let defaultClient = PingOnePlatformApiCredentials.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiCredentials.CredentialIssuanceRulesApi();
let environmentID = "environmentID_example"; // String | 
let credentialTypeID = "credentialTypeID_example"; // String | 
let credentialIssuanceRuleID = "credentialIssuanceRuleID_example"; // String | 
let opts = {
  'credentialIssuanceRule': new PingOnePlatformApiCredentials.CredentialIssuanceRule() // CredentialIssuanceRule | 
};
apiInstance.updateCredentialIssuanceRule(environmentID, credentialTypeID, credentialIssuanceRuleID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **credentialTypeID** | **String**|  | 
 **credentialIssuanceRuleID** | **String**|  | 
 **credentialIssuanceRule** | [**CredentialIssuanceRule**](CredentialIssuanceRule.md)|  | [optional] 

### Return type

[**CredentialIssuanceRule**](CredentialIssuanceRule.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

