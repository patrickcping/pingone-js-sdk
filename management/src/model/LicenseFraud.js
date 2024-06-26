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
 * The LicenseFraud model module.
 * @module model/LicenseFraud
 * @version 2023-06-29
 */
class LicenseFraud {
    /**
     * Constructs a new <code>LicenseFraud</code>.
     * @alias module:model/LicenseFraud
     */
    constructor() { 
        
        LicenseFraud.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseFraud</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseFraud} obj Optional instance to populate.
     * @return {module:model/LicenseFraud} The populated <code>LicenseFraud</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseFraud();

            if (data.hasOwnProperty('allowBotMaliciousDeviceDetection')) {
                obj['allowBotMaliciousDeviceDetection'] = ApiClient.convertToType(data['allowBotMaliciousDeviceDetection'], 'Boolean');
            }
            if (data.hasOwnProperty('allowAccountProtection')) {
                obj['allowAccountProtection'] = ApiClient.convertToType(data['allowAccountProtection'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseFraud</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseFraud</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} allowBotMaliciousDeviceDetection
 */
LicenseFraud.prototype['allowBotMaliciousDeviceDetection'] = undefined;

/**
 * @member {Boolean} allowAccountProtection
 */
LicenseFraud.prototype['allowAccountProtection'] = undefined;






export default LicenseFraud;

