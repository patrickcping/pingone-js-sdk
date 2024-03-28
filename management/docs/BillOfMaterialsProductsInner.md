# PingOnePlatformApiSsoAndBase.BillOfMaterialsProductsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A string that specifies the BOM ID | [optional] [readonly] 
**type** | [**EnumProductType**](EnumProductType.md) |  | 
**description** | **String** | A string that specifies the description of the product or standalone service | [optional] [readonly] 
**console** | [**BillOfMaterialsProductsInnerConsole**](BillOfMaterialsProductsInnerConsole.md) |  | [optional] 
**tags** | [**[EnumBillOfMaterialsProductTags]**](EnumBillOfMaterialsProductTags.md) |  | [optional] 
**deployment** | [**BillOfMaterialsProductsInnerDeployment**](BillOfMaterialsProductsInnerDeployment.md) |  | [optional] 
**bookmarks** | [**[BillOfMaterialsProductsInnerBookmarksInner]**](BillOfMaterialsProductsInnerBookmarksInner.md) | Optional array of custom bookmarks. Maximum of five bookmarks per product. | [optional] 


