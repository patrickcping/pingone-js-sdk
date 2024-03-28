# PingOnePlatformApiSsoAndBase.UserAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryCode** | **String** | A string that specifies the country name component. When specified, the value must be in ISO 3166-1 &#x60;alpha-2&#x60; code format [ISO3166]. For example, the country codes for the United States and Sweden are &#x60;US&#x60; and \&quot;SE\&quot;, respectively. Valid characters consist of two upper-case letters (regex &#x60;[A-Z]{2}&#x60;). | [optional] 
**locality** | **String** | A string that specifies the city or locality component of the address. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex &#x60;^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$&#x60;). It can have a length of no more than 256 characters (min/max&#x3D;1/256). | [optional] 
**postalCode** | **String** | A string that specifies the zip code or postal code component of the address. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex &#x60;^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$&#x60;). It can have a length of no more than 40 characters (min/max&#x3D;1/40). | [optional] 
**region** | **String** | A string that specifies the state or region component of the address. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex &#x60;^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$&#x60;). It can have a length of no more than 256 characters (min/max&#x3D;1/256). | [optional] 
**streetAddress** | **String** | A string that specifies the full street address component, which may include house number, street name, P.O. box, and multi-line extended street address information. This attribute may contain newlines (regex &#x60;^[\\p{L}\\p{M}\\p{N}\\p{Zs}\\p{P}\\n\\r]*$&#x60;). It can have a length of no more than 256 characters (min/max&#x3D;1/256). | [optional] 


