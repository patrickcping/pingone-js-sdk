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

/**
 * The BillOfMaterialsProductsInnerConsole model module.
 * @module model/BillOfMaterialsProductsInnerConsole
 * @version 2023-06-29
 */
class BillOfMaterialsProductsInnerConsole {
    /**
     * Constructs a new <code>BillOfMaterialsProductsInnerConsole</code>.
     * @alias module:model/BillOfMaterialsProductsInnerConsole
     * @param href {String} Primary console link for certain products
     */
    constructor(href) { 
        
        BillOfMaterialsProductsInnerConsole.initialize(this, href);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, href) { 
        obj['href'] = href;
    }

    /**
     * Constructs a <code>BillOfMaterialsProductsInnerConsole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillOfMaterialsProductsInnerConsole} obj Optional instance to populate.
     * @return {module:model/BillOfMaterialsProductsInnerConsole} The populated <code>BillOfMaterialsProductsInnerConsole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillOfMaterialsProductsInnerConsole();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillOfMaterialsProductsInnerConsole</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillOfMaterialsProductsInnerConsole</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillOfMaterialsProductsInnerConsole.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }

        return true;
    }


}

BillOfMaterialsProductsInnerConsole.RequiredProperties = ["href"];

/**
 * Primary console link for certain products
 * @member {String} href
 */
BillOfMaterialsProductsInnerConsole.prototype['href'] = undefined;






export default BillOfMaterialsProductsInnerConsole;

