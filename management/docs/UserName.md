# PingOnePlatformApiSsoAndBase.UserName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **String** | A string that specifies the family name of the user, or Last in most Western languages (for example, ‘Jensen’ given the full name ‘Ms. Barbara J Jensen, III’). This may be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen (regex &#x60;^[\\p{L}\\p{M}\\p{N}&#39; .-]*$&#x60;). It can have a length of no more than 256 characters (min/max&#x3D;1/256). | [optional] 
**formatted** | **String** | A string that specifies the fully formatted name of the user (for example ‘Ms. Barbara J Jensen, III’). This can be explicitly set to null when updating a name to unset it. Valid characters consist of any Unicode letter, mark (for example, accent, umlaut), space, dot, apostrophe, or hyphen (regex &#x60;^[\\p{L}\\p{M}\\p{N}&#39; .-]*$&#x60;). It can have a length of no more than 256 characters (min/max&#x3D;1/256). | [optional] 
**given** | **String** | A string that specifies the given name of the user, or First in most Western languages (for example, ‘Barbara’ given the full name ‘Ms. Barbara J Jensen, III’). This may be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex &#x60;^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$&#x60;). It can have a length of no more than 256 characters (min/max&#x3D;1/256). | [optional] 
**honorificPrefix** | **String** | A string that specifies the honorific prefix(es) of the user, or title in most Western languages (for example, ‘Ms.’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it. | [optional] 
**honorificSuffix** | **String** | A string that specifies the honorific suffix(es) of the user, or suffix in most Western languages (for example, ‘III’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it. | [optional] 
**middle** | **String** | A string that specifies the the middle name(s) of the user (for exmple, ‘Jane’ given the full name ‘Ms. Barbara Jane Jensen, III’). This can be explicitly set to null when updating a name to unset it. The string can contain any letters, numbers, combining characters, math and currency symbols, dingbats and drawing characters, and invisible whitespace (regex &#x60;^[\\p{L}\\p{M}\\p{Zs}\\p{S}\\p{N}\\p{P}]*$&#x60;). It can have a length of no more than 256 characters (min/max&#x3D;1/256). | [optional] 


