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
 * The ProvisionedCredentialClaimReference model module.
 * @module model/ProvisionedCredentialClaimReference
 * @version 2023-06-29
 */
class ProvisionedCredentialClaimReference {
    /**
     * Constructs a new <code>ProvisionedCredentialClaimReference</code>.
     * @alias module:model/ProvisionedCredentialClaimReference
     */
    constructor() { 
        
        ProvisionedCredentialClaimReference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProvisionedCredentialClaimReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisionedCredentialClaimReference} obj Optional instance to populate.
     * @return {module:model/ProvisionedCredentialClaimReference} The populated <code>ProvisionedCredentialClaimReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProvisionedCredentialClaimReference();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('holder')) {
                obj['holder'] = ApiClient.convertToType(data['holder'], 'String');
            }
            if (data.hasOwnProperty('createDate')) {
                obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
            }
            if (data.hasOwnProperty('dataJson')) {
                obj['dataJson'] = ApiClient.convertToType(data['dataJson'], 'String');
            }
            if (data.hasOwnProperty('dataSignature')) {
                obj['dataSignature'] = ApiClient.convertToType(data['dataSignature'], 'String');
            }
            if (data.hasOwnProperty('dataHash')) {
                obj['dataHash'] = ApiClient.convertToType(data['dataHash'], 'String');
            }
            if (data.hasOwnProperty('partitionId')) {
                obj['partitionId'] = ApiClient.convertToType(data['partitionId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProvisionedCredentialClaimReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProvisionedCredentialClaimReference</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['issuer'] && !(typeof data['issuer'] === 'string' || data['issuer'] instanceof String)) {
            throw new Error("Expected the field `issuer` to be a primitive type in the JSON string but got " + data['issuer']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['holder'] && !(typeof data['holder'] === 'string' || data['holder'] instanceof String)) {
            throw new Error("Expected the field `holder` to be a primitive type in the JSON string but got " + data['holder']);
        }
        // ensure the json data is a string
        if (data['dataJson'] && !(typeof data['dataJson'] === 'string' || data['dataJson'] instanceof String)) {
            throw new Error("Expected the field `dataJson` to be a primitive type in the JSON string but got " + data['dataJson']);
        }
        // ensure the json data is a string
        if (data['dataSignature'] && !(typeof data['dataSignature'] === 'string' || data['dataSignature'] instanceof String)) {
            throw new Error("Expected the field `dataSignature` to be a primitive type in the JSON string but got " + data['dataSignature']);
        }
        // ensure the json data is a string
        if (data['dataHash'] && !(typeof data['dataHash'] === 'string' || data['dataHash'] instanceof String)) {
            throw new Error("Expected the field `dataHash` to be a primitive type in the JSON string but got " + data['dataHash']);
        }
        // ensure the json data is a string
        if (data['partitionId'] && !(typeof data['partitionId'] === 'string' || data['partitionId'] instanceof String)) {
            throw new Error("Expected the field `partitionId` to be a primitive type in the JSON string but got " + data['partitionId']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProvisionedCredentialClaimReference.prototype['id'] = undefined;

/**
 * @member {Number} version
 */
ProvisionedCredentialClaimReference.prototype['version'] = undefined;

/**
 * @member {String} issuer
 */
ProvisionedCredentialClaimReference.prototype['issuer'] = undefined;

/**
 * @member {String} subject
 */
ProvisionedCredentialClaimReference.prototype['subject'] = undefined;

/**
 * @member {String} holder
 */
ProvisionedCredentialClaimReference.prototype['holder'] = undefined;

/**
 * @member {Date} createDate
 */
ProvisionedCredentialClaimReference.prototype['createDate'] = undefined;

/**
 * @member {String} dataJson
 */
ProvisionedCredentialClaimReference.prototype['dataJson'] = undefined;

/**
 * @member {String} dataSignature
 */
ProvisionedCredentialClaimReference.prototype['dataSignature'] = undefined;

/**
 * @member {String} dataHash
 */
ProvisionedCredentialClaimReference.prototype['dataHash'] = undefined;

/**
 * @member {String} partitionId
 */
ProvisionedCredentialClaimReference.prototype['partitionId'] = undefined;






export default ProvisionedCredentialClaimReference;

