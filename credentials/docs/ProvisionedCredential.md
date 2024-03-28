# PingOnePlatformApiCredentials.ProvisionedCredential

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksHATEOAS**](LinksHATEOAS.md) |  | [optional] 
**claimReference** | [**ProvisionedCredentialClaimReference**](ProvisionedCredentialClaimReference.md) |  | [optional] 
**createdAt** | **Date** |  | [optional] [readonly] 
**credential** | [**ProvisionedCredentialCredential**](ProvisionedCredentialCredential.md) |  | [optional] 
**digitalWallet** | [**ProvisionedCredentialCredential**](ProvisionedCredentialCredential.md) |  | [optional] 
**environment** | [**ObjectEnvironment**](ObjectEnvironment.md) |  | [optional] 
**expiredAt** | **Date** | A string that specifies the date that the provisioned credential expires. If this value is null, the provisioned credential never expires. | [optional] [readonly] 
**id** | **String** |  | [optional] [readonly] 
**status** | **String** | A string that specifies the tatus of the provisioned credential. | [optional] [readonly] 
**user** | [**ProvisionedCredentialUser**](ProvisionedCredentialUser.md) |  | [optional] 
**walletActions** | [**[ProvisionedCredentialWalletActionsInner]**](ProvisionedCredentialWalletActionsInner.md) |  | [optional] 


