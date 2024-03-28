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
import EnumNotificationsSettingsPhoneDeliverySettingsProvider from './EnumNotificationsSettingsPhoneDeliverySettingsProvider';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The NotificationsSettingsPhoneDeliverySettingsCommon model module.
 * @module model/NotificationsSettingsPhoneDeliverySettingsCommon
 * @version 2023-06-29
 */
class NotificationsSettingsPhoneDeliverySettingsCommon {
    /**
     * Constructs a new <code>NotificationsSettingsPhoneDeliverySettingsCommon</code>.
     * @alias module:model/NotificationsSettingsPhoneDeliverySettingsCommon
     * @param provider {module:model/EnumNotificationsSettingsPhoneDeliverySettingsProvider} 
     */
    constructor(provider) { 
        
        NotificationsSettingsPhoneDeliverySettingsCommon.initialize(this, provider);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provider) { 
        obj['provider'] = provider;
    }

    /**
     * Constructs a <code>NotificationsSettingsPhoneDeliverySettingsCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsSettingsPhoneDeliverySettingsCommon} obj Optional instance to populate.
     * @return {module:model/NotificationsSettingsPhoneDeliverySettingsCommon} The populated <code>NotificationsSettingsPhoneDeliverySettingsCommon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsSettingsPhoneDeliverySettingsCommon();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = EnumNotificationsSettingsPhoneDeliverySettingsProvider.constructFromObject(data['provider']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationsSettingsPhoneDeliverySettingsCommon</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationsSettingsPhoneDeliverySettingsCommon</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NotificationsSettingsPhoneDeliverySettingsCommon.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }

        return true;
    }


}

NotificationsSettingsPhoneDeliverySettingsCommon.RequiredProperties = ["provider"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
NotificationsSettingsPhoneDeliverySettingsCommon.prototype['_links'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
NotificationsSettingsPhoneDeliverySettingsCommon.prototype['id'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
NotificationsSettingsPhoneDeliverySettingsCommon.prototype['environment'] = undefined;

/**
 * @member {module:model/EnumNotificationsSettingsPhoneDeliverySettingsProvider} provider
 */
NotificationsSettingsPhoneDeliverySettingsCommon.prototype['provider'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
NotificationsSettingsPhoneDeliverySettingsCommon.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {Date} updatedAt
 */
NotificationsSettingsPhoneDeliverySettingsCommon.prototype['updatedAt'] = undefined;






export default NotificationsSettingsPhoneDeliverySettingsCommon;

