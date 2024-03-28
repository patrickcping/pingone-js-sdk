# PingOnePlatformApiPingOneVerify.VoicePhraseContentsApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoicePhraseContent**](VoicePhraseContentsApi.md#createVoicePhraseContent) | **POST** /environments/{environmentID}/voicePhrases/{voicePhraseID}/contents | CREATE Voice Phrase Content
[**deleteVoicePhraseContent**](VoicePhraseContentsApi.md#deleteVoicePhraseContent) | **DELETE** /environments/{environmentID}/voicePhrases/{voicePhraseID}/contents/{voiceContentsID} | Delete Voice Phrase Content
[**readAllVoicePhraseContents**](VoicePhraseContentsApi.md#readAllVoicePhraseContents) | **GET** /environments/{environmentID}/voicePhrases/{voicePhraseID}/contents | READ All Voice Phrase Contents
[**readOneVoicePhraseContent**](VoicePhraseContentsApi.md#readOneVoicePhraseContent) | **GET** /environments/{environmentID}/voicePhrases/{voicePhraseID}/contents/{voiceContentsID} | READ One Voice Phrase Content
[**updateVoicePhraseContent**](VoicePhraseContentsApi.md#updateVoicePhraseContent) | **PUT** /environments/{environmentID}/voicePhrases/{voicePhraseID}/contents/{voiceContentsID} | UPDATE Voice Phrase Content



## createVoicePhraseContent

> VoicePhraseContents createVoicePhraseContent(environmentID, voicePhraseID, opts)

CREATE Voice Phrase Content

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhraseContentsApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
let opts = {
  'voicePhraseContents': {"locale":"en","content":"Design brilliant journeys to any digital desintation."} // VoicePhraseContents | 
};
apiInstance.createVoicePhraseContent(environmentID, voicePhraseID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **voicePhraseID** | **String**|  | 
 **voicePhraseContents** | [**VoicePhraseContents**](VoicePhraseContents.md)|  | [optional] 

### Return type

[**VoicePhraseContents**](VoicePhraseContents.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVoicePhraseContent

> deleteVoicePhraseContent(environmentID, voicePhraseID, voiceContentsID)

Delete Voice Phrase Content

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhraseContentsApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
let voiceContentsID = "voiceContentsID_example"; // String | 
apiInstance.deleteVoicePhraseContent(environmentID, voicePhraseID, voiceContentsID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **voicePhraseID** | **String**|  | 
 **voiceContentsID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllVoicePhraseContents

> EntityArray readAllVoicePhraseContents(environmentID, voicePhraseID)

READ All Voice Phrase Contents

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhraseContentsApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
apiInstance.readAllVoicePhraseContents(environmentID, voicePhraseID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **voicePhraseID** | **String**|  | 

### Return type

[**EntityArray**](EntityArray.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readOneVoicePhraseContent

> VoicePhraseContents readOneVoicePhraseContent(environmentID, voicePhraseID, voiceContentsID)

READ One Voice Phrase Content

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhraseContentsApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
let voiceContentsID = "voiceContentsID_example"; // String | 
apiInstance.readOneVoicePhraseContent(environmentID, voicePhraseID, voiceContentsID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **voicePhraseID** | **String**|  | 
 **voiceContentsID** | **String**|  | 

### Return type

[**VoicePhraseContents**](VoicePhraseContents.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVoicePhraseContent

> VoicePhraseContents updateVoicePhraseContent(environmentID, voicePhraseID, voiceContentsID, opts)

UPDATE Voice Phrase Content

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhraseContentsApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
let voiceContentsID = "voiceContentsID_example"; // String | 
let opts = {
  'voicePhraseContents': {"locale":"en","content":"Brilliant journeys to any digital destination."} // VoicePhraseContents | 
};
apiInstance.updateVoicePhraseContent(environmentID, voicePhraseID, voiceContentsID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **voicePhraseID** | **String**|  | 
 **voiceContentsID** | **String**|  | 
 **voicePhraseContents** | [**VoicePhraseContents**](VoicePhraseContents.md)|  | [optional] 

### Return type

[**VoicePhraseContents**](VoicePhraseContents.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

