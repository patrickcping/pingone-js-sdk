# PingOnePlatformApiSsoAndBase.KeyRotationPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**algorithm** | [**EnumKeyRotationPolicyAlgorithm**](EnumKeyRotationPolicyAlgorithm.md) |  | 
**currentKeyId** | **String** | The &#x60;kid&#x60; (key identifier) of the &#x60;KrpKey&#x60; designated as &#x60;CURRENT&#x60;. | [optional] [readonly] 
**dn** | **String** | The DN this KRP will apply to generated &#x60;KrpKeys&#x60;. Is applied as both &#x60;issuerDN&#x60; and &#x60;subjectDN&#x60; because generated &#x60;KrpKeys&#x60; are self-signed. | 
**id** | **String** | The resource’s unique identifier. | [optional] [readonly] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**keyLength** | **Number** | The number of bytes of a cryptographic key this KRP will apply to generated &#x60;KrpKeys&#x60;. | 
**name** | **String** | Human-readable name displayed in the admin console. | 
**nextKeyId** | **String** | The &#x60;kid&#x60; (key identifier) of the &#x60;KrpKey&#x60; designated as &#x60;NEXT&#x60;. | [optional] [readonly] 
**rotatedAt** | **Date** | The last time this KRP was rotated. | [optional] [readonly] 
**rotationPeriod** | **Number** | The number of days to elapse before this KRP rotates &#x60;KrpKeys&#x60;. The default value is &#x60;90&#x60; days. The minimum value is &#x60;30&#x60; days. The maximum value is 1 day less than the &#x60;validityPeriod&#x60; value. | [optional] [default to 90]
**signatureAlgorithm** | [**EnumKeyRotationPolicySigAlgorithm**](EnumKeyRotationPolicySigAlgorithm.md) |  | 
**usageType** | [**EnumKeyRotationPolicyUsageType**](EnumKeyRotationPolicyUsageType.md) |  | 
**validityPeriod** | **Number** | Controls the &#x60;startsAt&#x60; and &#x60;expiresAt&#x60; fields this KRP will apply to generated &#x60;KrpKeys&#x60;. The default value is &#x60;365&#x60; days. | [optional] [default to 365]


