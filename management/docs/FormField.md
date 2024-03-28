# PingOnePlatformApiSsoAndBase.FormField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EnumFormFieldType**](EnumFormFieldType.md) |  | 
**position** | [**FormFieldCommonPosition**](FormFieldCommonPosition.md) |  | 
**attributeDisabled** | **Boolean** | A boolean that specifies whether the linked directory attribute is disabled. | [optional] [readonly] 
**key** | **String** | A string that specifies an identifier for the field component. | 
**label** | **String** | A string that specifies the social login button label. | 
**labelMode** | [**EnumFormElementLabelMode**](EnumFormElementLabelMode.md) |  | [optional] 
**required** | **Boolean** | A boolean that specifies whether the field is required. | [optional] 
**otherOptionEnabled** | **Boolean** | A boolean that specifies whether the end user can type an entry that is not in a predefined list. | [optional] 
**otherOptionKey** | **String** | A string that specifies whether the form identifies that the choice is a custom choice not from a predefined list. | [optional] 
**otherOptionLabel** | **String** | A string that specifies the label for a custom or \&quot;other\&quot; choice in a list. | [optional] 
**otherOptionInputLabel** | **String** | A string that specifies the label for the other option in drop-down controls. | [optional] 
**otherOptionAttributeDisabled** | **Boolean** | A boolean that specifies whether the directory attribute option is disabled. Set to true if it references a PingOne directory attribute. | [optional] 
**layout** | [**EnumFormElementLayout**](EnumFormElementLayout.md) |  | 
**options** | [**[FormElementOption]**](FormElementOption.md) | An array of objects (label/value pairs) that specifies the unique list of options. This is a required property when the type is &#x60;RADIO&#x60;, &#x60;CHECKBOX&#x60;, or &#x60;DROPDOWN&#x60;. | 
**validation** | [**FormElementValidation**](FormElementValidation.md) |  | 
**showPasswordRequirements** | **Boolean** | A boolean that specifies whether the password requirements are displayed. | [optional] 
**labelPasswordVerify** | **String** | A string that when a second field for verifies password is used, this poperty specifies the field label for that verify field. | [optional] 
**content** | **String** | A string that specifies the field content. | [optional] 
**styles** | [**FormSocialLoginButtonStyles**](FormSocialLoginButtonStyles.md) |  | [optional] 
**size** | [**EnumFormRecaptchaV2Size**](EnumFormRecaptchaV2Size.md) |  | 
**theme** | [**EnumFormRecaptchaV2Theme**](EnumFormRecaptchaV2Theme.md) |  | 
**alignment** | [**EnumFormItemAlignment**](EnumFormItemAlignment.md) |  | 
**qrCodeType** | [**EnumFormQrCodeType**](EnumFormQrCodeType.md) |  | 
**showBorder** | **Boolean** | A boolean that specifies the border visibility. | [optional] 
**idpType** | [**EnumFormSocialLoginIdpType**](EnumFormSocialLoginIdpType.md) |  | 
**idpName** | **String** | A string that specifies the external identity provider name. | 
**idpId** | **String** | A string that specifies the external identity provider&#39;s ID. | 
**idpEnabled** | **Boolean** | A boolean that specifies whether the external identity provider is enabled. | 
**iconSrc** | **String** | A string that specifies the HTTP link (URL format) for the external identity provider&#39;s icon. | 
**width** | **Number** | An integer that specifies the button width. Set as a percentage. | [optional] 


