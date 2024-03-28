# PingOnePlatformApiSsoAndBase.PopulationsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPopulation**](PopulationsApi.md#createPopulation) | **POST** /environments/{environmentID}/populations | CREATE Population
[**deletePopulation**](PopulationsApi.md#deletePopulation) | **DELETE** /environments/{environmentID}/populations/{populationID} | DELETE Population
[**readAllPopulations**](PopulationsApi.md#readAllPopulations) | **GET** /environments/{environmentID}/populations | READ All Populations
[**readOnePopulation**](PopulationsApi.md#readOnePopulation) | **GET** /environments/{environmentID}/populations/{populationID} | READ One Population
[**readOnePopulationDefaultIdp**](PopulationsApi.md#readOnePopulationDefaultIdp) | **GET** /environments/{environmentID}/populations/{populationID}/defaultIdentityProvider | READ One Population Default Identity Provider
[**updatePopulation**](PopulationsApi.md#updatePopulation) | **PUT** /environments/{environmentID}/populations/{populationID} | UPDATE Population
[**updatePopulationDefaultIdp**](PopulationsApi.md#updatePopulationDefaultIdp) | **PUT** /environments/{environmentID}/populations/{populationID}/defaultIdentityProvider | UPDATE Population Default Identity Provider



## createPopulation

> Population createPopulation(environmentID, population)

CREATE Population

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PopulationsApi();
let environmentID = "environmentID_example"; // String | 
let population = new PingOnePlatformApiSsoAndBase.Population(); // Population | 
apiInstance.createPopulation(environmentID, population).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **population** | [**Population**](Population.md)|  | 

### Return type

[**Population**](Population.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePopulation

> deletePopulation(environmentID, populationID)

DELETE Population

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PopulationsApi();
let environmentID = "environmentID_example"; // String | 
let populationID = "populationID_example"; // String | 
apiInstance.deletePopulation(environmentID, populationID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **populationID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllPopulations

> EntityArray readAllPopulations(environmentID, opts)

READ All Populations

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PopulationsApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'limit': 56, // Number | Adding a paging value to limit the number of resources displayed per page
  'filter': id eq "60971d3b-cc5a-4601-9c44-2be541f91bf1", // String | Adding a SCIM filter for a population ID or population name to display only those resources associated with the specified population. Only the id and name parameters are supported
  'cursor': "cursor_example" // String | Adding a cursor value to retrieve the next page of results, used with the `limit` parameter. The cursor value is returned in the `_links.next.href` link in the response payload.
};
apiInstance.readAllPopulations(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **limit** | **Number**| Adding a paging value to limit the number of resources displayed per page | [optional] 
 **filter** | **String**| Adding a SCIM filter for a population ID or population name to display only those resources associated with the specified population. Only the id and name parameters are supported | [optional] 
 **cursor** | **String**| Adding a cursor value to retrieve the next page of results, used with the &#x60;limit&#x60; parameter. The cursor value is returned in the &#x60;_links.next.href&#x60; link in the response payload. | [optional] 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOnePopulation

> Population readOnePopulation(environmentID, populationID)

READ One Population

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PopulationsApi();
let environmentID = "environmentID_example"; // String | 
let populationID = "populationID_example"; // String | 
apiInstance.readOnePopulation(environmentID, populationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **populationID** | **String**|  | 

### Return type

[**Population**](Population.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOnePopulationDefaultIdp

> PopulationDefaultIdp readOnePopulationDefaultIdp(environmentID, populationID)

READ One Population Default Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PopulationsApi();
let environmentID = "environmentID_example"; // String | 
let populationID = "populationID_example"; // String | 
apiInstance.readOnePopulationDefaultIdp(environmentID, populationID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **populationID** | **String**|  | 

### Return type

[**PopulationDefaultIdp**](PopulationDefaultIdp.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePopulation

> Population updatePopulation(environmentID, populationID, opts)

UPDATE Population

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PopulationsApi();
let environmentID = "environmentID_example"; // String | 
let populationID = "populationID_example"; // String | 
let opts = {
  'population': new PingOnePlatformApiSsoAndBase.Population() // Population | 
};
apiInstance.updatePopulation(environmentID, populationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **populationID** | **String**|  | 
 **population** | [**Population**](Population.md)|  | [optional] 

### Return type

[**Population**](Population.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePopulationDefaultIdp

> PopulationDefaultIdp updatePopulationDefaultIdp(environmentID, populationID, opts)

UPDATE Population Default Identity Provider

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.PopulationsApi();
let environmentID = "environmentID_example"; // String | 
let populationID = "populationID_example"; // String | 
let opts = {
  'populationDefaultIdp': new PingOnePlatformApiSsoAndBase.PopulationDefaultIdp() // PopulationDefaultIdp | 
};
apiInstance.updatePopulationDefaultIdp(environmentID, populationID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **populationID** | **String**|  | 
 **populationDefaultIdp** | [**PopulationDefaultIdp**](PopulationDefaultIdp.md)|  | [optional] 

### Return type

[**PopulationDefaultIdp**](PopulationDefaultIdp.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

