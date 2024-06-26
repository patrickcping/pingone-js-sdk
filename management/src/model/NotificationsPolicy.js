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
import NotificationsPolicyCountryLimit from './NotificationsPolicyCountryLimit';
import NotificationsPolicyQuotasInner from './NotificationsPolicyQuotasInner';

/**
 * The NotificationsPolicy model module.
 * @module model/NotificationsPolicy
 * @version 2023-06-29
 */
class NotificationsPolicy {
    /**
     * Constructs a new <code>NotificationsPolicy</code>.
     * @alias module:model/NotificationsPolicy
     * @param name {String} The name to use for the notification policy. Must be unique among the notification policies in the environment.
     * @param quotas {Array.<module:model/NotificationsPolicyQuotasInner>} Collection of objects that define the SMS/Voice limits. Each object contain the following elements- `type`, `deliveryMethods`, `total`. Currently, a policy can contain ony one such object. Note that instead of `total`, you can use the pair of fields- `claimed` and `unclaimed`.
     */
    constructor(name, quotas) { 
        
        NotificationsPolicy.initialize(this, name, quotas);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, quotas) { 
        obj['name'] = name;
        obj['quotas'] = quotas;
    }

    /**
     * Constructs a <code>NotificationsPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsPolicy} obj Optional instance to populate.
     * @return {module:model/NotificationsPolicy} The populated <code>NotificationsPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsPolicy();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('countryLimit')) {
                obj['countryLimit'] = NotificationsPolicyCountryLimit.constructFromObject(data['countryLimit']);
            }
            if (data.hasOwnProperty('quotas')) {
                obj['quotas'] = ApiClient.convertToType(data['quotas'], [NotificationsPolicyQuotasInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NotificationsPolicy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationsPolicy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NotificationsPolicy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `countryLimit`
        if (data['countryLimit']) { // data not null
          NotificationsPolicyCountryLimit.validateJSON(data['countryLimit']);
        }
        if (data['quotas']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['quotas'])) {
                throw new Error("Expected the field `quotas` to be an array in the JSON data but got " + data['quotas']);
            }
            // validate the optional field `quotas` (array)
            for (const item of data['quotas']) {
                NotificationsPolicyQuotasInner.validateJSON(item);
            };
        }

        return true;
    }


}

NotificationsPolicy.RequiredProperties = ["name", "quotas"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
NotificationsPolicy.prototype['_links'] = undefined;

/**
 * The time the resource was created.
 * @member {Date} createdAt
 */
NotificationsPolicy.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {Date} updatedAt
 */
NotificationsPolicy.prototype['updatedAt'] = undefined;

/**
 * A string that specifies the resource’s unique identifier.
 * @member {String} id
 */
NotificationsPolicy.prototype['id'] = undefined;

/**
 * The name to use for the notification policy. Must be unique among the notification policies in the environment.
 * @member {String} name
 */
NotificationsPolicy.prototype['name'] = undefined;

/**
 * Indication of whether this policy is the default notification policy for the environment. If the parameter is not provided, the value used is `false`
 * @member {Boolean} default
 * @default false
 */
NotificationsPolicy.prototype['default'] = false;

/**
 * @member {module:model/NotificationsPolicyCountryLimit} countryLimit
 */
NotificationsPolicy.prototype['countryLimit'] = undefined;

/**
 * Collection of objects that define the SMS/Voice limits. Each object contain the following elements- `type`, `deliveryMethods`, `total`. Currently, a policy can contain ony one such object. Note that instead of `total`, you can use the pair of fields- `claimed` and `unclaimed`.
 * @member {Array.<module:model/NotificationsPolicyQuotasInner>} quotas
 */
NotificationsPolicy.prototype['quotas'] = undefined;






export default NotificationsPolicy;

