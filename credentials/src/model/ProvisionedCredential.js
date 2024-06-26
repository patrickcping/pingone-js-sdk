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
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import ProvisionedCredentialClaimReference from './ProvisionedCredentialClaimReference';
import ProvisionedCredentialCredential from './ProvisionedCredentialCredential';
import ProvisionedCredentialUser from './ProvisionedCredentialUser';
import ProvisionedCredentialWalletActionsInner from './ProvisionedCredentialWalletActionsInner';

/**
 * The ProvisionedCredential model module.
 * @module model/ProvisionedCredential
 * @version 2023-06-29
 */
class ProvisionedCredential {
    /**
     * Constructs a new <code>ProvisionedCredential</code>.
     * @alias module:model/ProvisionedCredential
     */
    constructor() { 
        
        ProvisionedCredential.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProvisionedCredential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisionedCredential} obj Optional instance to populate.
     * @return {module:model/ProvisionedCredential} The populated <code>ProvisionedCredential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProvisionedCredential();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('claimReference')) {
                obj['claimReference'] = ProvisionedCredentialClaimReference.constructFromObject(data['claimReference']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('credential')) {
                obj['credential'] = ProvisionedCredentialCredential.constructFromObject(data['credential']);
            }
            if (data.hasOwnProperty('digitalWallet')) {
                obj['digitalWallet'] = ProvisionedCredentialCredential.constructFromObject(data['digitalWallet']);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('expiredAt')) {
                obj['expiredAt'] = ApiClient.convertToType(data['expiredAt'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ProvisionedCredentialUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('walletActions')) {
                obj['walletActions'] = ApiClient.convertToType(data['walletActions'], [ProvisionedCredentialWalletActionsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProvisionedCredential</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProvisionedCredential</code>.
     */
    static validateJSON(data) {
        // validate the optional field `claimReference`
        if (data['claimReference']) { // data not null
          ProvisionedCredentialClaimReference.validateJSON(data['claimReference']);
        }
        // validate the optional field `credential`
        if (data['credential']) { // data not null
          ProvisionedCredentialCredential.validateJSON(data['credential']);
        }
        // validate the optional field `digitalWallet`
        if (data['digitalWallet']) { // data not null
          ProvisionedCredentialCredential.validateJSON(data['digitalWallet']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          ProvisionedCredentialUser.validateJSON(data['user']);
        }
        if (data['walletActions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['walletActions'])) {
                throw new Error("Expected the field `walletActions` to be an array in the JSON data but got " + data['walletActions']);
            }
            // validate the optional field `walletActions` (array)
            for (const item of data['walletActions']) {
                ProvisionedCredentialWalletActionsInner.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/LinksHATEOAS} _links
 */
ProvisionedCredential.prototype['_links'] = undefined;

/**
 * @member {module:model/ProvisionedCredentialClaimReference} claimReference
 */
ProvisionedCredential.prototype['claimReference'] = undefined;

/**
 * @member {Date} createdAt
 */
ProvisionedCredential.prototype['createdAt'] = undefined;

/**
 * @member {module:model/ProvisionedCredentialCredential} credential
 */
ProvisionedCredential.prototype['credential'] = undefined;

/**
 * @member {module:model/ProvisionedCredentialCredential} digitalWallet
 */
ProvisionedCredential.prototype['digitalWallet'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
ProvisionedCredential.prototype['environment'] = undefined;

/**
 * A string that specifies the date that the provisioned credential expires. If this value is null, the provisioned credential never expires.
 * @member {Date} expiredAt
 */
ProvisionedCredential.prototype['expiredAt'] = undefined;

/**
 * @member {String} id
 */
ProvisionedCredential.prototype['id'] = undefined;

/**
 * A string that specifies the tatus of the provisioned credential.
 * @member {String} status
 */
ProvisionedCredential.prototype['status'] = undefined;

/**
 * @member {module:model/ProvisionedCredentialUser} user
 */
ProvisionedCredential.prototype['user'] = undefined;

/**
 * @member {Array.<module:model/ProvisionedCredentialWalletActionsInner>} walletActions
 */
ProvisionedCredential.prototype['walletActions'] = undefined;






export default ProvisionedCredential;

