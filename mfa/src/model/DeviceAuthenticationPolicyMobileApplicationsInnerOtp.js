/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
 * The DeviceAuthenticationPolicyMobileApplicationsInnerOtp model module.
 * @module model/DeviceAuthenticationPolicyMobileApplicationsInnerOtp
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyMobileApplicationsInnerOtp {
    /**
     * Constructs a new <code>DeviceAuthenticationPolicyMobileApplicationsInnerOtp</code>.
     * @alias module:model/DeviceAuthenticationPolicyMobileApplicationsInnerOtp
     * @param enabled {Boolean} Specifies whether OTP authentication is enabled or disabled for the policy.
     */
    constructor(enabled) { 
        
        DeviceAuthenticationPolicyMobileApplicationsInnerOtp.initialize(this, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled) { 
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>DeviceAuthenticationPolicyMobileApplicationsInnerOtp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerOtp} obj Optional instance to populate.
     * @return {module:model/DeviceAuthenticationPolicyMobileApplicationsInnerOtp} The populated <code>DeviceAuthenticationPolicyMobileApplicationsInnerOtp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceAuthenticationPolicyMobileApplicationsInnerOtp();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyMobileApplicationsInnerOtp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyMobileApplicationsInnerOtp</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceAuthenticationPolicyMobileApplicationsInnerOtp.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DeviceAuthenticationPolicyMobileApplicationsInnerOtp.RequiredProperties = ["enabled"];

/**
 * Specifies whether OTP authentication is enabled or disabled for the policy.
 * @member {Boolean} enabled
 */
DeviceAuthenticationPolicyMobileApplicationsInnerOtp.prototype['enabled'] = undefined;






export default DeviceAuthenticationPolicyMobileApplicationsInnerOtp;

