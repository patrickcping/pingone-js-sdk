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
import EnumMFAPushCredentialAttrType from './EnumMFAPushCredentialAttrType';

/**
 * The MFAPushCredential model module.
 * @module model/MFAPushCredential
 * @version 2023-06-29
 */
class MFAPushCredential {
    /**
     * Constructs a new <code>MFAPushCredential</code>.
     * @alias module:model/MFAPushCredential
     * @param type {module:model/EnumMFAPushCredentialAttrType} 
     */
    constructor(type) { 
        
        MFAPushCredential.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>MFAPushCredential</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MFAPushCredential} obj Optional instance to populate.
     * @return {module:model/MFAPushCredential} The populated <code>MFAPushCredential</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MFAPushCredential();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumMFAPushCredentialAttrType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MFAPushCredential</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MFAPushCredential</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MFAPushCredential.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

MFAPushCredential.RequiredProperties = ["type"];

/**
 * @member {module:model/EnumMFAPushCredentialAttrType} type
 */
MFAPushCredential.prototype['type'] = undefined;






export default MFAPushCredential;

