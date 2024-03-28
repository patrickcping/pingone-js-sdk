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
import NotificationsSettingsRestrictionsSmsVoiceQuota from './NotificationsSettingsRestrictionsSmsVoiceQuota';

/**
 * The NotificationsSettingsRestrictions model module.
 * @module model/NotificationsSettingsRestrictions
 * @version 2023-06-29
 */
class NotificationsSettingsRestrictions {
    /**
     * Constructs a new <code>NotificationsSettingsRestrictions</code>.
     * @alias module:model/NotificationsSettingsRestrictions
     * @param smsVoiceQuota {module:model/NotificationsSettingsRestrictionsSmsVoiceQuota} 
     */
    constructor(smsVoiceQuota) { 
        
        NotificationsSettingsRestrictions.initialize(this, smsVoiceQuota);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, smsVoiceQuota) { 
        obj['smsVoiceQuota'] = smsVoiceQuota;
    }

    /**
     * Constructs a <code>NotificationsSettingsRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsSettingsRestrictions} obj Optional instance to populate.
     * @return {module:model/NotificationsSettingsRestrictions} The populated <code>NotificationsSettingsRestrictions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsSettingsRestrictions();

            if (data.hasOwnProperty('smsVoiceQuota')) {
                obj['smsVoiceQuota'] = NotificationsSettingsRestrictionsSmsVoiceQuota.constructFromObject(data['smsVoiceQuota']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationsSettingsRestrictions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationsSettingsRestrictions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NotificationsSettingsRestrictions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `smsVoiceQuota`
        if (data['smsVoiceQuota']) { // data not null
          NotificationsSettingsRestrictionsSmsVoiceQuota.validateJSON(data['smsVoiceQuota']);
        }

        return true;
    }


}

NotificationsSettingsRestrictions.RequiredProperties = ["smsVoiceQuota"];

/**
 * @member {module:model/NotificationsSettingsRestrictionsSmsVoiceQuota} smsVoiceQuota
 */
NotificationsSettingsRestrictions.prototype['smsVoiceQuota'] = undefined;






export default NotificationsSettingsRestrictions;
