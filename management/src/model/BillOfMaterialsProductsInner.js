/**
 * PingOne Platform API - SSO and Base
 * The PingOne Platform API covering the base and SSO services (otherwise known as the Management APIs)
 *
 * The version of the OpenAPI document: 2023-06-29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BillOfMaterialsProductsInnerBookmarksInner from './BillOfMaterialsProductsInnerBookmarksInner';
import BillOfMaterialsProductsInnerConsole from './BillOfMaterialsProductsInnerConsole';
import BillOfMaterialsProductsInnerDeployment from './BillOfMaterialsProductsInnerDeployment';
import EnumBillOfMaterialsProductTags from './EnumBillOfMaterialsProductTags';
import EnumProductType from './EnumProductType';

/**
 * The BillOfMaterialsProductsInner model module.
 * @module model/BillOfMaterialsProductsInner
 * @version 2023-06-29
 */
class BillOfMaterialsProductsInner {
    /**
     * Constructs a new <code>BillOfMaterialsProductsInner</code>.
     * @alias module:model/BillOfMaterialsProductsInner
     * @param type {module:model/EnumProductType} 
     */
    constructor(type) { 
        
        BillOfMaterialsProductsInner.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>BillOfMaterialsProductsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillOfMaterialsProductsInner} obj Optional instance to populate.
     * @return {module:model/BillOfMaterialsProductsInner} The populated <code>BillOfMaterialsProductsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillOfMaterialsProductsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumProductType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('console')) {
                obj['console'] = BillOfMaterialsProductsInnerConsole.constructFromObject(data['console']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [EnumBillOfMaterialsProductTags]);
            }
            if (data.hasOwnProperty('deployment')) {
                obj['deployment'] = BillOfMaterialsProductsInnerDeployment.constructFromObject(data['deployment']);
            }
            if (data.hasOwnProperty('bookmarks')) {
                obj['bookmarks'] = ApiClient.convertToType(data['bookmarks'], [BillOfMaterialsProductsInnerBookmarksInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillOfMaterialsProductsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillOfMaterialsProductsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillOfMaterialsProductsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `console`
        if (data['console']) { // data not null
          BillOfMaterialsProductsInnerConsole.validateJSON(data['console']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // validate the optional field `deployment`
        if (data['deployment']) { // data not null
          BillOfMaterialsProductsInnerDeployment.validateJSON(data['deployment']);
        }
        if (data['bookmarks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['bookmarks'])) {
                throw new Error("Expected the field `bookmarks` to be an array in the JSON data but got " + data['bookmarks']);
            }
            // validate the optional field `bookmarks` (array)
            for (const item of data['bookmarks']) {
                BillOfMaterialsProductsInnerBookmarksInner.validateJSON(item);
            };
        }

        return true;
    }


}

BillOfMaterialsProductsInner.RequiredProperties = ["type"];

/**
 * A string that specifies the BOM ID
 * @member {String} id
 */
BillOfMaterialsProductsInner.prototype['id'] = undefined;

/**
 * @member {module:model/EnumProductType} type
 */
BillOfMaterialsProductsInner.prototype['type'] = undefined;

/**
 * A string that specifies the description of the product or standalone service
 * @member {String} description
 */
BillOfMaterialsProductsInner.prototype['description'] = undefined;

/**
 * @member {module:model/BillOfMaterialsProductsInnerConsole} console
 */
BillOfMaterialsProductsInner.prototype['console'] = undefined;

/**
 * @member {Array.<module:model/EnumBillOfMaterialsProductTags>} tags
 */
BillOfMaterialsProductsInner.prototype['tags'] = undefined;

/**
 * @member {module:model/BillOfMaterialsProductsInnerDeployment} deployment
 */
BillOfMaterialsProductsInner.prototype['deployment'] = undefined;

/**
 * Optional array of custom bookmarks. Maximum of five bookmarks per product.
 * @member {Array.<module:model/BillOfMaterialsProductsInnerBookmarksInner>} bookmarks
 */
BillOfMaterialsProductsInner.prototype['bookmarks'] = undefined;






export default BillOfMaterialsProductsInner;

