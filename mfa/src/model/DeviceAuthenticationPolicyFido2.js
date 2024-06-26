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
 * The DeviceAuthenticationPolicyFido2 model module.
 * @module model/DeviceAuthenticationPolicyFido2
 * @version 2023-06-29
 */
class DeviceAuthenticationPolicyFido2 {
    /**
     * Constructs a new <code>DeviceAuthenticationPolicyFido2</code>.
     * @alias module:model/DeviceAuthenticationPolicyFido2
     * @param enabled {Boolean} A boolean that specifies whether the method is enabled or disabled in the policy.
     */
    constructor(enabled) { 
        
        DeviceAuthenticationPolicyFido2.initialize(this, enabled);
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
     * Constructs a <code>DeviceAuthenticationPolicyFido2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceAuthenticationPolicyFido2} obj Optional instance to populate.
     * @return {module:model/DeviceAuthenticationPolicyFido2} The populated <code>DeviceAuthenticationPolicyFido2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceAuthenticationPolicyFido2();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('pairingDisabled')) {
                obj['pairingDisabled'] = ApiClient.convertToType(data['pairingDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('fido2PolicyId')) {
                obj['fido2PolicyId'] = ApiClient.convertToType(data['fido2PolicyId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceAuthenticationPolicyFido2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceAuthenticationPolicyFido2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceAuthenticationPolicyFido2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['fido2PolicyId'] && !(typeof data['fido2PolicyId'] === 'string' || data['fido2PolicyId'] instanceof String)) {
            throw new Error("Expected the field `fido2PolicyId` to be a primitive type in the JSON string but got " + data['fido2PolicyId']);
        }

        return true;
    }


}

DeviceAuthenticationPolicyFido2.RequiredProperties = ["enabled"];

/**
 * A boolean that specifies whether the method is enabled or disabled in the policy.
 * @member {Boolean} enabled
 */
DeviceAuthenticationPolicyFido2.prototype['enabled'] = undefined;

/**
 * You can set `pairingDisabled` to true to prevent users from pairing new devices with the relevant method. You can use this option if you want to phase out an existing authentication method but want to allow users to continue using the method for authentication for existing devices.
 * @member {Boolean} pairingDisabled
 */
DeviceAuthenticationPolicyFido2.prototype['pairingDisabled'] = undefined;

/**
 * Specifies the UUID that represents the FIDO2 policy in PingOne. This property can be null. When null, the environment's default FIDO2 Policy is used.
 * @member {String} fido2PolicyId
 */
DeviceAuthenticationPolicyFido2.prototype['fido2PolicyId'] = undefined;






export default DeviceAuthenticationPolicyFido2;

