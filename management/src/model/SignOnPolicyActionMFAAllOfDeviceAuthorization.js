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
import EnumSignOnPolicyExtraVerification from './EnumSignOnPolicyExtraVerification';

/**
 * The SignOnPolicyActionMFAAllOfDeviceAuthorization model module.
 * @module model/SignOnPolicyActionMFAAllOfDeviceAuthorization
 * @version 2023-06-29
 */
class SignOnPolicyActionMFAAllOfDeviceAuthorization {
    /**
     * Constructs a new <code>SignOnPolicyActionMFAAllOfDeviceAuthorization</code>.
     * @alias module:model/SignOnPolicyActionMFAAllOfDeviceAuthorization
     */
    constructor() { 
        
        SignOnPolicyActionMFAAllOfDeviceAuthorization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignOnPolicyActionMFAAllOfDeviceAuthorization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignOnPolicyActionMFAAllOfDeviceAuthorization} obj Optional instance to populate.
     * @return {module:model/SignOnPolicyActionMFAAllOfDeviceAuthorization} The populated <code>SignOnPolicyActionMFAAllOfDeviceAuthorization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignOnPolicyActionMFAAllOfDeviceAuthorization();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('extraVerification')) {
                obj['extraVerification'] = EnumSignOnPolicyExtraVerification.constructFromObject(data['extraVerification']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignOnPolicyActionMFAAllOfDeviceAuthorization</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionMFAAllOfDeviceAuthorization</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * A boolean that specifies the enabled/disabled state of automatic MFA for native devices paired with the user for the specified application.
 * @member {Boolean} enabled
 * @default false
 */
SignOnPolicyActionMFAAllOfDeviceAuthorization.prototype['enabled'] = false;

/**
 * @member {module:model/EnumSignOnPolicyExtraVerification} extraVerification
 */
SignOnPolicyActionMFAAllOfDeviceAuthorization.prototype['extraVerification'] = undefined;






export default SignOnPolicyActionMFAAllOfDeviceAuthorization;

