# PingOnePlatformApiPingOneMfa.FIDO2PolicyMdsAuthenticatorsRequirements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedAuthenticators** | [**[FIDO2PolicyMdsAuthenticatorsRequirementsAllowedAuthenticatorsInner]**](FIDO2PolicyMdsAuthenticatorsRequirementsAllowedAuthenticatorsInner.md) | If you set &#x60;mdsAuthenticatorsRequirements.option&#x60; to &#x60;SPECIFIC&#x60;, use this array to specify the authenticators that you want to allow. | [optional] 
**enforceDuringAuthentication** | **Boolean** | Set to true if you want the device characteristics related to attestation to be checked again at each authentication attempt and not just once during registration. Set to false to have them checked only at registration. | 
**option** | [**EnumFIDO2PolicyMDSAuthenticatorOption**](EnumFIDO2PolicyMDSAuthenticatorOption.md) |  | 


