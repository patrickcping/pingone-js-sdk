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
 * The CredentialTypeOnDelete model module.
 * @module model/CredentialTypeOnDelete
 * @version 2023-06-29
 */
class CredentialTypeOnDelete {
    /**
     * Constructs a new <code>CredentialTypeOnDelete</code>.
     * @alias module:model/CredentialTypeOnDelete
     */
    constructor() { 
        
        CredentialTypeOnDelete.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CredentialTypeOnDelete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CredentialTypeOnDelete} obj Optional instance to populate.
     * @return {module:model/CredentialTypeOnDelete} The populated <code>CredentialTypeOnDelete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CredentialTypeOnDelete();

            if (data.hasOwnProperty('revokeIssuedCredentials')) {
                obj['revokeIssuedCredentials'] = ApiClient.convertToType(data['revokeIssuedCredentials'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CredentialTypeOnDelete</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CredentialTypeOnDelete</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * A boolean that specifies whether a user's issued verifiable credentials are automatically revoked when a credential type, user, or environment is deleted.
 * @member {Boolean} revokeIssuedCredentials
 */
CredentialTypeOnDelete.prototype['revokeIssuedCredentials'] = undefined;






export default CredentialTypeOnDelete;

