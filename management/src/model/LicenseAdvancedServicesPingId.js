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
 * The LicenseAdvancedServicesPingId model module.
 * @module model/LicenseAdvancedServicesPingId
 * @version 2023-06-29
 */
class LicenseAdvancedServicesPingId {
    /**
     * Constructs a new <code>LicenseAdvancedServicesPingId</code>.
     * @alias module:model/LicenseAdvancedServicesPingId
     */
    constructor() { 
        
        LicenseAdvancedServicesPingId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseAdvancedServicesPingId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseAdvancedServicesPingId} obj Optional instance to populate.
     * @return {module:model/LicenseAdvancedServicesPingId} The populated <code>LicenseAdvancedServicesPingId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseAdvancedServicesPingId();

            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseAdvancedServicesPingId</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseAdvancedServicesPingId</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Boolean} included
 */
LicenseAdvancedServicesPingId.prototype['included'] = undefined;

/**
 * @member {String} type
 */
LicenseAdvancedServicesPingId.prototype['type'] = undefined;






export default LicenseAdvancedServicesPingId;

