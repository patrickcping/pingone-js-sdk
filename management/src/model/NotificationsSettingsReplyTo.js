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

/**
 * The NotificationsSettingsReplyTo model module.
 * @module model/NotificationsSettingsReplyTo
 * @version 2023-06-29
 */
class NotificationsSettingsReplyTo {
    /**
     * Constructs a new <code>NotificationsSettingsReplyTo</code>.
     * @alias module:model/NotificationsSettingsReplyTo
     */
    constructor() { 
        
        NotificationsSettingsReplyTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationsSettingsReplyTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsSettingsReplyTo} obj Optional instance to populate.
     * @return {module:model/NotificationsSettingsReplyTo} The populated <code>NotificationsSettingsReplyTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsSettingsReplyTo();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationsSettingsReplyTo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationsSettingsReplyTo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }

        return true;
    }


}



/**
 * A string that specifies the email's \"reply to\" name (relevant when `deliveryMethod` is `Email`).  See [Note](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-settings-from-replyTo-note) for details.
 * @member {String} name
 */
NotificationsSettingsReplyTo.prototype['name'] = undefined;

/**
 * A string that specifies the email's \"reply to\" address (relevant when `deliveryMethod` is `Email`). This value must be a trusted email address.  See [Note](https://apidocs.pingidentity.com/pingone/platform/v1/api/#notifications-settings-from-replyTo-note) for details.
 * @member {String} address
 */
NotificationsSettingsReplyTo.prototype['address'] = undefined;






export default NotificationsSettingsReplyTo;
