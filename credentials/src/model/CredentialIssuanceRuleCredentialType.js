/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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
 * The CredentialIssuanceRuleCredentialType model module.
 * @module model/CredentialIssuanceRuleCredentialType
 * @version 2023-06-29
 */
class CredentialIssuanceRuleCredentialType {
    /**
     * Constructs a new <code>CredentialIssuanceRuleCredentialType</code>.
     * @alias module:model/CredentialIssuanceRuleCredentialType
     */
    constructor() { 
        
        CredentialIssuanceRuleCredentialType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CredentialIssuanceRuleCredentialType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialIssuanceRuleCredentialType} obj Optional instance to populate.
     * @return {module:model/CredentialIssuanceRuleCredentialType} The populated <code>CredentialIssuanceRuleCredentialType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CredentialIssuanceRuleCredentialType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CredentialIssuanceRuleCredentialType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialIssuanceRuleCredentialType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * A string that specifies the iIdentifier (UUID) of the credential type with which this credential issuance rule is associated.
 * @member {String} id
 */
CredentialIssuanceRuleCredentialType.prototype['id'] = undefined;






export default CredentialIssuanceRuleCredentialType;

