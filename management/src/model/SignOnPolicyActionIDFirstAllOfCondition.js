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
 * The SignOnPolicyActionIDFirstAllOfCondition model module.
 * @module model/SignOnPolicyActionIDFirstAllOfCondition
 * @version 2023-06-29
 */
class SignOnPolicyActionIDFirstAllOfCondition {
    /**
     * Constructs a new <code>SignOnPolicyActionIDFirstAllOfCondition</code>.
     * @alias module:model/SignOnPolicyActionIDFirstAllOfCondition
     * @param contains {String} 
     * @param value {String} 
     */
    constructor(contains, value) { 
        
        SignOnPolicyActionIDFirstAllOfCondition.initialize(this, contains, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contains, value) { 
        obj['contains'] = contains;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>SignOnPolicyActionIDFirstAllOfCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignOnPolicyActionIDFirstAllOfCondition} obj Optional instance to populate.
     * @return {module:model/SignOnPolicyActionIDFirstAllOfCondition} The populated <code>SignOnPolicyActionIDFirstAllOfCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignOnPolicyActionIDFirstAllOfCondition();

            if (data.hasOwnProperty('contains')) {
                obj['contains'] = ApiClient.convertToType(data['contains'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignOnPolicyActionIDFirstAllOfCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionIDFirstAllOfCondition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignOnPolicyActionIDFirstAllOfCondition.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contains'] && !(typeof data['contains'] === 'string' || data['contains'] instanceof String)) {
            throw new Error("Expected the field `contains` to be a primitive type in the JSON string but got " + data['contains']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

SignOnPolicyActionIDFirstAllOfCondition.RequiredProperties = ["contains", "value"];

/**
 * @member {String} contains
 */
SignOnPolicyActionIDFirstAllOfCondition.prototype['contains'] = undefined;

/**
 * @member {String} value
 */
SignOnPolicyActionIDFirstAllOfCondition.prototype['value'] = undefined;






export default SignOnPolicyActionIDFirstAllOfCondition;
