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
 * The ProvisionedCredentialWalletActionsInner model module.
 * @module model/ProvisionedCredentialWalletActionsInner
 * @version 2023-06-29
 */
class ProvisionedCredentialWalletActionsInner {
    /**
     * Constructs a new <code>ProvisionedCredentialWalletActionsInner</code>.
     * @alias module:model/ProvisionedCredentialWalletActionsInner
     */
    constructor() { 
        
        ProvisionedCredentialWalletActionsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProvisionedCredentialWalletActionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisionedCredentialWalletActionsInner} obj Optional instance to populate.
     * @return {module:model/ProvisionedCredentialWalletActionsInner} The populated <code>ProvisionedCredentialWalletActionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProvisionedCredentialWalletActionsInner();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('occurredAt')) {
                obj['occurredAt'] = ApiClient.convertToType(data['occurredAt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProvisionedCredentialWalletActionsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProvisionedCredentialWalletActionsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['occurredAt'] && !(typeof data['occurredAt'] === 'string' || data['occurredAt'] instanceof String)) {
            throw new Error("Expected the field `occurredAt` to be a primitive type in the JSON string but got " + data['occurredAt']);
        }

        return true;
    }


}



/**
 * A string that specifies the action taken regarding the provisioned credential.
 * @member {String} type
 */
ProvisionedCredentialWalletActionsInner.prototype['type'] = undefined;

/**
 * A string that specifies the date and time that the action occurred.
 * @member {String} occurredAt
 */
ProvisionedCredentialWalletActionsInner.prototype['occurredAt'] = undefined;






export default ProvisionedCredentialWalletActionsInner;

