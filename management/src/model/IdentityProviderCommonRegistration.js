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
import IdentityProviderCommonRegistrationPopulation from './IdentityProviderCommonRegistrationPopulation';

/**
 * The IdentityProviderCommonRegistration model module.
 * @module model/IdentityProviderCommonRegistration
 * @version 2023-06-29
 */
class IdentityProviderCommonRegistration {
    /**
     * Constructs a new <code>IdentityProviderCommonRegistration</code>.
     * @alias module:model/IdentityProviderCommonRegistration
     */
    constructor() { 
        
        IdentityProviderCommonRegistration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdentityProviderCommonRegistration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityProviderCommonRegistration} obj Optional instance to populate.
     * @return {module:model/IdentityProviderCommonRegistration} The populated <code>IdentityProviderCommonRegistration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityProviderCommonRegistration();

            if (data.hasOwnProperty('population')) {
                obj['population'] = IdentityProviderCommonRegistrationPopulation.constructFromObject(data['population']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdentityProviderCommonRegistration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdentityProviderCommonRegistration</code>.
     */
    static validateJSON(data) {
        // validate the optional field `population`
        if (data['population']) { // data not null
          IdentityProviderCommonRegistrationPopulation.validateJSON(data['population']);
        }

        return true;
    }


}



/**
 * @member {module:model/IdentityProviderCommonRegistrationPopulation} population
 */
IdentityProviderCommonRegistration.prototype['population'] = undefined;






export default IdentityProviderCommonRegistration;
