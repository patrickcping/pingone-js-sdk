# PingOnePlatformApiPingOneMfa.FIDO2PolicyUserDisplayNameAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[FIDO2PolicyUserDisplayNameAttributesAttributesInner]**](FIDO2PolicyUserDisplayNameAttributesAttributesInner.md) | List of strings associated with the users&#39;s account that can be displayed during registration and authentication. Each object in the array is a name:value pair where the first part is \&quot;name\&quot; and the second is the name of the user attribute, for example, &#x60;{\&quot;name\&quot;: \&quot;username\&quot;}&#x60;, &#x60;{\&quot;name\&quot;: \&quot;email\&quot;}&#x60;. If you want to use the \&quot;name\&quot; attribute for the user, you must also specify the \&quot;subAttributes\&quot;, which can be either the \&quot;given\&quot; and \&quot;family\&quot; user attributes or the \&quot;formatted\&quot; user attribute. For example, &#x60;{\&quot;name\&quot;: “name”, “subAttributes”:[{“name”: “given”}, {“name”: “family”}]}, {\&quot;name\&quot;: \&quot;email\&quot;}&#x60; or &#x60;{\&quot;name\&quot;: “name”, “subAttributes”:[{“name”: “formatted”}]}, {\&quot;name\&quot;: \&quot;email\&quot;}&#x60;. - The content of the list should reflect the preferred order. - If the first attribute is empty for the user, PingOne will continue through the list until a non-empty attribute is found. - You can specify any user attribute (including custom attributes) that meet the following criteria: attribute type must be String, validation cannot be set to enumerated values. - The array must contain the user attribute \&quot;username\&quot; - to ensure that there is at least one non-empty attribute. - You can have a maximum of six user attributes in the list.  | 


