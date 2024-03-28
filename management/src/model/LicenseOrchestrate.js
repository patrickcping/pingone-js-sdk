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
 * The LicenseOrchestrate model module.
 * @module model/LicenseOrchestrate
 * @version 2023-06-29
 */
class LicenseOrchestrate {
    /**
     * Constructs a new <code>LicenseOrchestrate</code>.
     * @alias module:model/LicenseOrchestrate
     */
    constructor() { 
        
        LicenseOrchestrate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseOrchestrate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseOrchestrate} obj Optional instance to populate.
     * @return {module:model/LicenseOrchestrate} The populated <code>LicenseOrchestrate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseOrchestrate();

            if (data.hasOwnProperty('allowOrchestration')) {
                obj['allowOrchestration'] = ApiClient.convertToType(data['allowOrchestration'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseOrchestrate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseOrchestrate</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} allowOrchestration
 */
LicenseOrchestrate.prototype['allowOrchestration'] = undefined;






export default LicenseOrchestrate;
