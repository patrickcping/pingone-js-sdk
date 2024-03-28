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
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The Agreement model module.
 * @module model/Agreement
 * @version 2023-06-29
 */
class Agreement {
    /**
     * Constructs a new <code>Agreement</code>.
     * @alias module:model/Agreement
     * @param enabled {Boolean} A boolean that specifies the current enabled state of the agreement. This is a required property. The agreement must support the default language to be enabled. It cannot be disabled if it is referenced by a sign-on action. When an agreement is disabled, it is not used anywhere it is configured across PingOne.
     * @param name {String} A string that specifies the name of the agreement resource. This is a required property.
     */
    constructor(enabled, name) { 
        
        Agreement.initialize(this, enabled, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, name) { 
        obj['enabled'] = enabled;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Agreement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Agreement} obj Optional instance to populate.
     * @return {module:model/Agreement} The populated <code>Agreement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Agreement();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('consentsAggregatedAt')) {
                obj['consentsAggregatedAt'] = ApiClient.convertToType(data['consentsAggregatedAt'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('totalExpiredConsents')) {
                obj['totalExpiredConsents'] = ApiClient.convertToType(data['totalExpiredConsents'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('reconsentPeriodDays')) {
                obj['reconsentPeriodDays'] = ApiClient.convertToType(data['reconsentPeriodDays'], 'Number');
            }
            if (data.hasOwnProperty('totalConsents')) {
                obj['totalConsents'] = ApiClient.convertToType(data['totalConsents'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Agreement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Agreement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Agreement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

Agreement.RequiredProperties = ["enabled", "name"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
Agreement.prototype['_links'] = undefined;

/**
 * The time the consent count metric was last updated. This value is typically updated once every 24 hours.
 * @member {Date} consentsAggregatedAt
 */
Agreement.prototype['consentsAggregatedAt'] = undefined;

/**
 * A string that specifies the description of the agreement.
 * @member {String} description
 */
Agreement.prototype['description'] = undefined;

/**
 * A boolean that specifies the current enabled state of the agreement. This is a required property. The agreement must support the default language to be enabled. It cannot be disabled if it is referenced by a sign-on action. When an agreement is disabled, it is not used anywhere it is configured across PingOne.
 * @member {Boolean} enabled
 */
Agreement.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
Agreement.prototype['environment'] = undefined;

/**
 * An integer that identifies the number of users who have consented to the agreement, but their consent has expired. This value is last calculated at the consentCountsUpdatedAt time.
 * @member {Number} totalExpiredConsents
 */
Agreement.prototype['totalExpiredConsents'] = undefined;

/**
 * A string that specifies the agreement ID.
 * @member {String} id
 */
Agreement.prototype['id'] = undefined;

/**
 * A string that specifies the name of the agreement resource. This is a required property.
 * @member {String} name
 */
Agreement.prototype['name'] = undefined;

/**
 * A number that represents the number of days until a consent to this agreement expires.
 * @member {Number} reconsentPeriodDays
 */
Agreement.prototype['reconsentPeriodDays'] = undefined;

/**
 * An integer that identifies the total number of users who have consented to the agreement. This value is last calculated at the consentCountsUpdatedAt time.
 * @member {Number} totalConsents
 */
Agreement.prototype['totalConsents'] = undefined;






export default Agreement;

