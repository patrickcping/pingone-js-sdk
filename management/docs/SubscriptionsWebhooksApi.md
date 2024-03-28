# PingOnePlatformApiSsoAndBase.SubscriptionsWebhooksApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](SubscriptionsWebhooksApi.md#createSubscription) | **POST** /environments/{environmentID}/subscriptions | CREATE Subscription
[**deleteSubscription**](SubscriptionsWebhooksApi.md#deleteSubscription) | **DELETE** /environments/{environmentID}/subscriptions/{subscriptionID} | DELETE Subscription
[**readAllSubscriptions**](SubscriptionsWebhooksApi.md#readAllSubscriptions) | **GET** /environments/{environmentID}/subscriptions | READ All Subscriptions
[**readOneSubscription**](SubscriptionsWebhooksApi.md#readOneSubscription) | **GET** /environments/{environmentID}/subscriptions/{subscriptionID} | READ One Subscription
[**updateSubscription**](SubscriptionsWebhooksApi.md#updateSubscription) | **PUT** /environments/{environmentID}/subscriptions/{subscriptionID} | UPDATE Subscription



## createSubscription

> Subscription createSubscription(environmentID, opts)

CREATE Subscription

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SubscriptionsWebhooksApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'subscription': new PingOnePlatformApiSsoAndBase.Subscription() // Subscription | 
};
apiInstance.createSubscription(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **subscription** | [**Subscription**](Subscription.md)|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSubscription

> deleteSubscription(environmentID, subscriptionID)

DELETE Subscription

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SubscriptionsWebhooksApi();
let environmentID = "environmentID_example"; // String | 
let subscriptionID = "subscriptionID_example"; // String | 
apiInstance.deleteSubscription(environmentID, subscriptionID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **subscriptionID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllSubscriptions

> EntityArray readAllSubscriptions(environmentID)

READ All Subscriptions

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SubscriptionsWebhooksApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllSubscriptions(environmentID).then((data) => {
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


## readOneSubscription

> Subscription readOneSubscription(environmentID, subscriptionID)

READ One Subscription

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SubscriptionsWebhooksApi();
let environmentID = "environmentID_example"; // String | 
let subscriptionID = "subscriptionID_example"; // String | 
apiInstance.readOneSubscription(environmentID, subscriptionID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **subscriptionID** | **String**|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSubscription

> Subscription updateSubscription(environmentID, subscriptionID, opts)

UPDATE Subscription

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.SubscriptionsWebhooksApi();
let environmentID = "environmentID_example"; // String | 
let subscriptionID = "subscriptionID_example"; // String | 
let opts = {
  'subscription': new PingOnePlatformApiSsoAndBase.Subscription() // Subscription | 
};
apiInstance.updateSubscription(environmentID, subscriptionID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **subscriptionID** | **String**|  | 
 **subscription** | [**Subscription**](Subscription.md)|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

