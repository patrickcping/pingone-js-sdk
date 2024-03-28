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
import LinksHATEOAS from './LinksHATEOAS';

/**
 * The UserMFAEnabled model module.
 * @module model/UserMFAEnabled
 * @version 2023-06-29
 */
class UserMFAEnabled {
    /**
     * Constructs a new <code>UserMFAEnabled</code>.
     * @alias module:model/UserMFAEnabled
     * @param mfaEnabled {Boolean} Whether multi-factor authentication is enabled. This attribute is set to `false` by default when the user is created.
     */
    constructor(mfaEnabled) { 
        
        UserMFAEnabled.initialize(this, mfaEnabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mfaEnabled) { 
        obj['mfaEnabled'] = mfaEnabled;
    }

    /**
     * Constructs a <code>UserMFAEnabled</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserMFAEnabled} obj Optional instance to populate.
     * @return {module:model/UserMFAEnabled} The populated <code>UserMFAEnabled</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserMFAEnabled();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('mfaEnabled')) {
                obj['mfaEnabled'] = ApiClient.convertToType(data['mfaEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserMFAEnabled</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserMFAEnabled</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserMFAEnabled.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

UserMFAEnabled.RequiredProperties = ["mfaEnabled"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
UserMFAEnabled.prototype['_links'] = undefined;

/**
 * Whether multi-factor authentication is enabled. This attribute is set to `false` by default when the user is created.
 * @member {Boolean} mfaEnabled
 */
UserMFAEnabled.prototype['mfaEnabled'] = undefined;






export default UserMFAEnabled;
