# PingOnePlatformApiPingOneVerify.VoicePhrasesApi

All URIs are relative to *https://api.pingone.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoicePhrase**](VoicePhrasesApi.md#createVoicePhrase) | **POST** /environments/{environmentID}/voicePhrases | CREATE Voice Phrase
[**deleteVoicePhrase**](VoicePhrasesApi.md#deleteVoicePhrase) | **DELETE** /environments/{environmentID}/voicePhrases/{voicePhraseID} | Delete Voice Phrase
[**readAllVoicePhrases**](VoicePhrasesApi.md#readAllVoicePhrases) | **GET** /environments/{environmentID}/voicePhrases | READ All Voice Phrases
[**readOneVoicePhrase**](VoicePhrasesApi.md#readOneVoicePhrase) | **GET** /environments/{environmentID}/voicePhrases/{voicePhraseID} | READ One Voice Phrase
[**updateVoicePhrase**](VoicePhrasesApi.md#updateVoicePhrase) | **PUT** /environments/{environmentID}/voicePhrases/{voicePhraseID} | UPDATE Voice Phrase



## createVoicePhrase

> VoicePhrase createVoicePhrase(environmentID, opts)

CREATE Voice Phrase

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhrasesApi();
let environmentID = "environmentID_example"; // String | 
let opts = {
  'voicePhrase': {"displayName":"Example Voice Phrase"} // VoicePhrase | 
};
apiInstance.createVoicePhrase(environmentID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentID** | **String**|  | 
 **voicePhrase** | [**VoicePhrase**](VoicePhrase.md)|  | [optional] 

### Return type

[**VoicePhrase**](VoicePhrase.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteVoicePhrase

> deleteVoicePhrase(environmentID, voicePhraseID)

Delete Voice Phrase

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhrasesApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
apiInstance.deleteVoicePhrase(environmentID, voicePhraseID).then(() => {
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

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readAllVoicePhrases

> EntityArray readAllVoicePhrases(environmentID)

READ All Voice Phrases

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhrasesApi();
let environmentID = "environmentID_example"; // String | 
apiInstance.readAllVoicePhrases(environmentID).then((data) => {
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


## readOneVoicePhrase

> VoicePhrase readOneVoicePhrase(environmentID, voicePhraseID)

READ One Voice Phrase

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhrasesApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
apiInstance.readOneVoicePhrase(environmentID, voicePhraseID).then((data) => {
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

[**VoicePhrase**](VoicePhrase.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateVoicePhrase

> VoicePhrase updateVoicePhrase(environmentID, voicePhraseID, opts)

UPDATE Voice Phrase

### Example

```javascript
import PingOnePlatformApiPingOneVerify from 'ping_one_platform_api_ping_one_verify';
let defaultClient = PingOnePlatformApiPingOneVerify.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new PingOnePlatformApiPingOneVerify.VoicePhrasesApi();
let environmentID = "environmentID_example"; // String | 
let voicePhraseID = "voicePhraseID_example"; // String | 
let opts = {
  'voicePhrase': {"displayName":"Voice Phrase Name"} // VoicePhrase | 
};
apiInstance.updateVoicePhrase(environmentID, voicePhraseID, opts).then((data) => {
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
 **voicePhrase** | [**VoicePhrase**](VoicePhrase.md)|  | [optional] 

### Return type

[**VoicePhrase**](VoicePhrase.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

