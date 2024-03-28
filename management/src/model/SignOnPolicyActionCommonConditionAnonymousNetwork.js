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
 * The SignOnPolicyActionCommonConditionAnonymousNetwork model module.
 * @module model/SignOnPolicyActionCommonConditionAnonymousNetwork
 * @version 2023-06-29
 */
class SignOnPolicyActionCommonConditionAnonymousNetwork {
    /**
     * Constructs a new <code>SignOnPolicyActionCommonConditionAnonymousNetwork</code>.
     * @alias module:model/SignOnPolicyActionCommonConditionAnonymousNetwork
     * @param anonymousNetwork {Array.<String>} 
     * @param valid {String} 
     */
    constructor(anonymousNetwork, valid) { 
        
        SignOnPolicyActionCommonConditionAnonymousNetwork.initialize(this, anonymousNetwork, valid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, anonymousNetwork, valid) { 
        obj['anonymousNetwork'] = anonymousNetwork;
        obj['valid'] = valid;
    }

    /**
     * Constructs a <code>SignOnPolicyActionCommonConditionAnonymousNetwork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignOnPolicyActionCommonConditionAnonymousNetwork} obj Optional instance to populate.
     * @return {module:model/SignOnPolicyActionCommonConditionAnonymousNetwork} The populated <code>SignOnPolicyActionCommonConditionAnonymousNetwork</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignOnPolicyActionCommonConditionAnonymousNetwork();

            if (data.hasOwnProperty('anonymousNetwork')) {
                obj['anonymousNetwork'] = ApiClient.convertToType(data['anonymousNetwork'], ['String']);
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignOnPolicyActionCommonConditionAnonymousNetwork</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionCommonConditionAnonymousNetwork</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignOnPolicyActionCommonConditionAnonymousNetwork.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['anonymousNetwork'])) {
            throw new Error("Expected the field `anonymousNetwork` to be an array in the JSON data but got " + data['anonymousNetwork']);
        }
        // ensure the json data is a string
        if (data['valid'] && !(typeof data['valid'] === 'string' || data['valid'] instanceof String)) {
            throw new Error("Expected the field `valid` to be a primitive type in the JSON string but got " + data['valid']);
        }

        return true;
    }


}

SignOnPolicyActionCommonConditionAnonymousNetwork.RequiredProperties = ["anonymousNetwork", "valid"];

/**
 * @member {Array.<String>} anonymousNetwork
 */
SignOnPolicyActionCommonConditionAnonymousNetwork.prototype['anonymousNetwork'] = undefined;

/**
 * @member {String} valid
 */
SignOnPolicyActionCommonConditionAnonymousNetwork.prototype['valid'] = undefined;






export default SignOnPolicyActionCommonConditionAnonymousNetwork;

