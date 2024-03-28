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
import LicenseAdvancedServicesPingId from './LicenseAdvancedServicesPingId';

/**
 * The LicenseAdvancedServices model module.
 * @module model/LicenseAdvancedServices
 * @version 2023-06-29
 */
class LicenseAdvancedServices {
    /**
     * Constructs a new <code>LicenseAdvancedServices</code>.
     * @alias module:model/LicenseAdvancedServices
     */
    constructor() { 
        
        LicenseAdvancedServices.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseAdvancedServices</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseAdvancedServices} obj Optional instance to populate.
     * @return {module:model/LicenseAdvancedServices} The populated <code>LicenseAdvancedServices</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseAdvancedServices();

            if (data.hasOwnProperty('pingId')) {
                obj['pingId'] = LicenseAdvancedServicesPingId.constructFromObject(data['pingId']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LicenseAdvancedServices</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LicenseAdvancedServices</code>.
     */
    static validateJSON(data) {
        // validate the optional field `pingId`
        if (data['pingId']) { // data not null
          LicenseAdvancedServicesPingId.validateJSON(data['pingId']);
        }

        return true;
    }


}



/**
 * @member {module:model/LicenseAdvancedServicesPingId} pingId
 */
LicenseAdvancedServices.prototype['pingId'] = undefined;






export default LicenseAdvancedServices;

