# PingOnePlatformApiSsoAndBase.LicenseIntelligence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowGeoVelocity** | **Boolean** | A read-only boolean that specifies whether to use the intelligence geo-velocity feature. For &#x60;TRIAL&#x60; (unpaid) licenses, the default value is true. For &#x60;ADMIN&#x60;, &#x60;GLOBAL&#x60;, &#x60;RISK&#x60;, and &#x60;MFARISK&#x60;, the default value is true. | [optional] 
**allowAnonymousNetworkDetection** | **Boolean** | A read-only boolean that specifies whether to use the intelligence anonymous network detection feature. For &#x60;TRIAL&#x60; (unpaid) licenses, the default value is true. For &#x60;ADMIN&#x60;, &#x60;GLOBAL&#x60;, &#x60;RISK&#x60;, and &#x60;MFARISK&#x60;, the default value is true. | [optional] 
**allowReputation** | **Boolean** | A read-only boolean that specifies whether to use the intelligence IP reputation feature. For &#x60;TRIAL&#x60; (unpaid) licenses, the default value is true. For &#x60;ADMIN&#x60;, &#x60;GLOBAL&#x60;, &#x60;RISK&#x60;, and &#x60;MFARISK&#x60;, the default value is true. | [optional] 
**allowDataConsent** | **Boolean** | A read-only boolean that specifies whether the customer has opted in to allow user and event behavior analytics (UEBA) data collection. | [optional] 
**allowRisk** | **Boolean** | A read-only boolean that specifies whether your license permits you to configure risk features such as sign-on policies that include rules to detect anomalous changes to your locations (such as impossible travel). This capability is supported for TRIAL, RISK, and MFARISK license packages. Note, The sharing of user data to enable our machine-learning engine, which is integral to PingOne Risk, is captured in the license property license.intelligence.allowDataConsent, but it is not set to true by default in any license package. This license capability always requires active consent by the customer before it can be enabled, and if consent is given, then it allows the full scope of intelligence features included in PingOne Risk (and PingOne Risk plus MFA). | [optional] 
**allowAdvancedPredictors** | **Boolean** |  | [optional] 


