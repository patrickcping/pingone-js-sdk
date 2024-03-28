# PingOnePlatformApiSsoAndBase.SubscriptionTlsClientAuthKeyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of a key to be used for outbound mutual TLS (mTLS) authentication. This key is used as a client credential to authenticate the webhook. The key must have a &#x60;usageType&#x60; of &#x60;OUTBOUND_MTLS&#x60;. See [Certificate management](https://apidocs.pingidentity.com/pingone/platform/v1/api/#certificate-management) for information on creating a key. If this property is set, &#x60;verifyTlsCertificates&#x60; must be set to &#x60;true&#x60;. | [optional] 


