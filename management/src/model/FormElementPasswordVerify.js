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
 * The FormElementPasswordVerify model module.
 * @module model/FormElementPasswordVerify
 * @version 2023-06-29
 */
class FormElementPasswordVerify {
    /**
     * Constructs a new <code>FormElementPasswordVerify</code>.
     * @alias module:model/FormElementPasswordVerify
     */
    constructor() { 
        
        FormElementPasswordVerify.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormElementPasswordVerify</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FormElementPasswordVerify} obj Optional instance to populate.
     * @return {module:model/FormElementPasswordVerify} The populated <code>FormElementPasswordVerify</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormElementPasswordVerify();

            if (data.hasOwnProperty('labelPasswordVerify')) {
                obj['labelPasswordVerify'] = ApiClient.convertToType(data['labelPasswordVerify'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FormElementPasswordVerify</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FormElementPasswordVerify</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['labelPasswordVerify'] && !(typeof data['labelPasswordVerify'] === 'string' || data['labelPasswordVerify'] instanceof String)) {
            throw new Error("Expected the field `labelPasswordVerify` to be a primitive type in the JSON string but got " + data['labelPasswordVerify']);
        }

        return true;
    }


}



/**
 * A string that when a second field for verifies password is used, this poperty specifies the field label for that verify field.
 * @member {String} labelPasswordVerify
 */
FormElementPasswordVerify.prototype['labelPasswordVerify'] = undefined;






export default FormElementPasswordVerify;
