# PingOnePlatformApiSsoAndBase.PropagationStoreConfigurationAzureADSAMLV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** | The Azure Active Directory client ID. | 
**clientSecret** | **String** | The Azure Active Directory client secret. | 
**CREATE_USERS** | **Boolean** | Whether or not users are allowed to be created. | [optional] 
**DEPROVISION_USERS** | **Boolean** | Whether or not users are allowed to be deprovisioned (removed) following action specified in &#x60;REMOVE_ACTION&#x60;. | [optional] 
**DISABLE_USERS** | **Boolean** | Whether or not users are allowed to be disabled. | [optional] 
**PROVISION_DISABLED_USERS_PROV_OPT** | **Boolean** | Whether or not disabled users can be provisioned. Defaults to &#x60;true&#x60; and, if used, must be set to &#x60;true&#x60;. | [optional] [default to true]
**REMOVE_ACTION** | [**EnumPropagationStoreTypeRemoveActionDisableDelete**](EnumPropagationStoreTypeRemoveActionDisableDelete.md) |  | [optional] 
**removeLicensesWhenSkuIdEmpty** | **Boolean** | Whether or not remove licenses from user when &#x60;skuId&#x60; is empty. | 
**tenantDomain** | **String** | The account&#39;s Azure Active Directory domain. | 
**UPDATE_USERS** | **Boolean** | Whether or not users are allowed to be updated. | [optional] 


