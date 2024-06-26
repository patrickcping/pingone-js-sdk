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
 * The MFASettingsPhoneExtensions model module.
 * @module model/MFASettingsPhoneExtensions
 * @version 2023-06-29
 */
class MFASettingsPhoneExtensions {
    /**
     * Constructs a new <code>MFASettingsPhoneExtensions</code>.
     * Contains settings for phone extension support.
     * @alias module:model/MFASettingsPhoneExtensions
     */
    constructor() { 
        
        MFASettingsPhoneExtensions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MFASettingsPhoneExtensions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MFASettingsPhoneExtensions} obj Optional instance to populate.
     * @return {module:model/MFASettingsPhoneExtensions} The populated <code>MFASettingsPhoneExtensions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MFASettingsPhoneExtensions();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MFASettingsPhoneExtensions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MFASettingsPhoneExtensions</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Set to `true` to allow one-time passwords to be delivered via voice to phone numbers that include extensions. Set to `false` to disable support for phone numbers with extensions. By default, support for extensions is disabled.
 * @member {Boolean} enabled
 */
MFASettingsPhoneExtensions.prototype['enabled'] = undefined;






export default MFASettingsPhoneExtensions;

