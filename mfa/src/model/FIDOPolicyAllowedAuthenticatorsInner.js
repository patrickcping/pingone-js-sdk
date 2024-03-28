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
 * The FIDOPolicyAllowedAuthenticatorsInner model module.
 * @module model/FIDOPolicyAllowedAuthenticatorsInner
 * @version 2023-06-29
 */
class FIDOPolicyAllowedAuthenticatorsInner {
    /**
     * Constructs a new <code>FIDOPolicyAllowedAuthenticatorsInner</code>.
     * @alias module:model/FIDOPolicyAllowedAuthenticatorsInner
     * @param id {String} The identifier of the authenticator to allow.
     */
    constructor(id) { 
        
        FIDOPolicyAllowedAuthenticatorsInner.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>FIDOPolicyAllowedAuthenticatorsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FIDOPolicyAllowedAuthenticatorsInner} obj Optional instance to populate.
     * @return {module:model/FIDOPolicyAllowedAuthenticatorsInner} The populated <code>FIDOPolicyAllowedAuthenticatorsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FIDOPolicyAllowedAuthenticatorsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FIDOPolicyAllowedAuthenticatorsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FIDOPolicyAllowedAuthenticatorsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FIDOPolicyAllowedAuthenticatorsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}

FIDOPolicyAllowedAuthenticatorsInner.RequiredProperties = ["id"];

/**
 * The identifier of the authenticator to allow.
 * @member {String} id
 */
FIDOPolicyAllowedAuthenticatorsInner.prototype['id'] = undefined;






export default FIDOPolicyAllowedAuthenticatorsInner;

