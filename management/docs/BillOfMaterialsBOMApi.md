# PingOnePlatformApiSsoAndBase.BillOfMaterialsBOMApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readOneBillOfMaterials**](BillOfMaterialsBOMApi.md#readOneBillOfMaterials) | **GET** /environments/{environmentID}/billOfMaterials | READ One Bill of Materials
[**updateBillOfMaterials**](BillOfMaterialsBOMApi.md#updateBillOfMaterials) | **PUT** /environments/{environmentID}/billOfMaterials | UPDATE Bill of Materials



## readOneBillOfMaterials

> BillOfMaterials readOneBillOfMaterials(environmentID)

READ One Bill of Materials

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BillOfMaterialsBOMApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readOneBillOfMaterials(environmentID).then((data) => {
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

[**BillOfMaterials**](BillOfMaterials.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBillOfMaterials

> BillOfMaterials updateBillOfMaterials(environmentID, opts)

UPDATE Bill of Materials

### Example

```javascript
import PingOnePlatformApiSsoAndBase from 'ping_one_platform_api_sso_and_base';
let defaultClient = PingOnePlatformApiSsoAndBase.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiSsoAndBase.BillOfMaterialsBOMApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'billOfMaterials': new PingOnePlatformApiSsoAndBase.BillOfMaterials() // BillOfMaterials | 
};
apiInstance.updateBillOfMaterials(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **billOfMaterials** | [**BillOfMaterials**](BillOfMaterials.md)|  | [optional] 

### Return type

[**BillOfMaterials**](BillOfMaterials.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

