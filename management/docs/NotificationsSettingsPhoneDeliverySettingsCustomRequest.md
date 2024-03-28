# PingOnePlatformApiSsoAndBase.NotificationsSettingsPhoneDeliverySettingsCustomRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deliveryMethod** | [**EnumNotificationsSettingsPhoneDeliverySettingsCustomDeliveryMethod**](EnumNotificationsSettingsPhoneDeliverySettingsCustomDeliveryMethod.md) |  | 
**url** | **String** | The provider&#39;s remote gateway or customer gateway URL. For requests using the POST method, use the provider&#39;s remote gateway URL. For requests using the GET method, use the provider&#39;s remote gateway URL, including the &#x60;${to}&#x60; and &#x60;${message}&#x60; mandatory variables, and the optional &#x60;${from}&#x60; variable, for example: &#x60;https://api.transmitsms.com/send-sms.json?to&#x3D;${to}&amp;from&#x3D;${from}&amp;message&#x3D;${message}&#x60;  | 
**body** | **String** | The notification&#39;s request body. The body should include the ${to} and ${message} mandatory variables. For some vendors, the optional ${from} variable may also be required. For example: &#x60;messageType&#x3D;ARN&amp;message&#x3D;${message}&amp;phoneNumber&#x3D;${to}&amp;sender&#x3D;${from}&#x60; In addition, you can use the following optional variables: &#x60;${voice}&#x60; - the type of voice configured for notifications &#x60;${locale}&#x60; - locale &#x60;${otp}&#x60; - OTP &#x60;${user.user.name}&#x60; - user&#39;s username &#x60;${user.name.given}&#x60; - user&#39;s given name &#x60;${user.name.family}&#x60; - user&#39;s family name You can also use dynamic variables in the body. For more information, see [Dynamic variables](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-templates-dynamic-variables).  | [optional] 
**headers** | **{String: String}** | A map of the notification&#39;s request headers  | [optional] 
**method** | [**EnumNotificationsSettingsPhoneDeliverySettingsCustomRequestMethod**](EnumNotificationsSettingsPhoneDeliverySettingsCustomRequestMethod.md) |  | 
**phoneNumberFormat** | [**EnumNotificationsSettingsPhoneDeliverySettingsCustomNumberFormat**](EnumNotificationsSettingsPhoneDeliverySettingsCustomNumberFormat.md) |  | 
**beforeTag** | **String** | For voice OTP notifications only. An opening tag which is commonly used by custom providers for defining a pause between each number in the OTP number string. Possible value: &#x60;&lt;Say&gt;&#x60;  | [optional] 
**afterTag** | **String** | For voice OTP notifications only. A closing tag which is commonly used by custom providers for defining a pause between each number in the OTP number string. Possible value: &#x60;&lt;/Say&gt; &lt;Pause length&#x3D;\&quot;1\&quot;/&gt;&#x60;  | [optional] 


