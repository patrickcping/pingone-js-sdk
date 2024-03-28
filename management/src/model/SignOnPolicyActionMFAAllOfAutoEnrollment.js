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
 * The SignOnPolicyActionMFAAllOfAutoEnrollment model module.
 * @module model/SignOnPolicyActionMFAAllOfAutoEnrollment
 * @version 2023-06-29
 */
class SignOnPolicyActionMFAAllOfAutoEnrollment {
    /**
     * Constructs a new <code>SignOnPolicyActionMFAAllOfAutoEnrollment</code>.
     * @alias module:model/SignOnPolicyActionMFAAllOfAutoEnrollment
     */
    constructor() { 
        
        SignOnPolicyActionMFAAllOfAutoEnrollment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignOnPolicyActionMFAAllOfAutoEnrollment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignOnPolicyActionMFAAllOfAutoEnrollment} obj Optional instance to populate.
     * @return {module:model/SignOnPolicyActionMFAAllOfAutoEnrollment} The populated <code>SignOnPolicyActionMFAAllOfAutoEnrollment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignOnPolicyActionMFAAllOfAutoEnrollment();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignOnPolicyActionMFAAllOfAutoEnrollment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionMFAAllOfAutoEnrollment</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * A boolean that specifies the enabled/disabled state of automatic MFA enrollment for the application.  When enabled, it allows automatic enrollment of the native application to MFA during the authentication flow.
 * @member {Boolean} enabled
 * @default false
 */
SignOnPolicyActionMFAAllOfAutoEnrollment.prototype['enabled'] = false;






export default SignOnPolicyActionMFAAllOfAutoEnrollment;

