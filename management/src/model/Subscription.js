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
import EnumSubscriptionFormat from './EnumSubscriptionFormat';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';
import SubscriptionFilterOptions from './SubscriptionFilterOptions';
import SubscriptionHttpEndpoint from './SubscriptionHttpEndpoint';
import SubscriptionTlsClientAuthKeyPair from './SubscriptionTlsClientAuthKeyPair';

/**
 * The Subscription model module.
 * @module model/Subscription
 * @version 2023-06-29
 */
class Subscription {
    /**
     * Constructs a new <code>Subscription</code>.
     * @alias module:model/Subscription
     * @param enabled {Boolean} A boolean that specifies whether a created or updated subscription should be active or suspended. A suspended state (`\"enabled\":false`) accumulates all matched events, but these events are not delivered until the subscription becomes active again (`\"enabled\":true`). For suspended subscriptions, events accumulate for a maximum of two weeks. Events older than two weeks are deleted. Restarted subscriptions receive the saved events (up to two weeks from the restart date). This is a required property.
     * @param filterOptions {module:model/SubscriptionFilterOptions} 
     * @param format {module:model/EnumSubscriptionFormat} 
     * @param httpEndpoint {module:model/SubscriptionHttpEndpoint} 
     * @param name {String} A string that specifies the subscription name. This is a required property.
     * @param verifyTlsCertificates {Boolean} A boolean that specifies whether a certificates should be verified. If this property's value is set to false, then all certificates are trusted. (Setting this property's value to false introduces a security risk.) This is a required property.
     */
    constructor(enabled, filterOptions, format, httpEndpoint, name, verifyTlsCertificates) { 
        
        Subscription.initialize(this, enabled, filterOptions, format, httpEndpoint, name, verifyTlsCertificates);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, filterOptions, format, httpEndpoint, name, verifyTlsCertificates) { 
        obj['enabled'] = enabled;
        obj['filterOptions'] = filterOptions;
        obj['format'] = format;
        obj['httpEndpoint'] = httpEndpoint;
        obj['name'] = name;
        obj['verifyTlsCertificates'] = verifyTlsCertificates;
    }

    /**
     * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subscription} obj Optional instance to populate.
     * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subscription();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('filterOptions')) {
                obj['filterOptions'] = SubscriptionFilterOptions.constructFromObject(data['filterOptions']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = EnumSubscriptionFormat.constructFromObject(data['format']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('httpEndpoint')) {
                obj['httpEndpoint'] = SubscriptionHttpEndpoint.constructFromObject(data['httpEndpoint']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tlsClientAuthKeyPair')) {
                obj['tlsClientAuthKeyPair'] = SubscriptionTlsClientAuthKeyPair.constructFromObject(data['tlsClientAuthKeyPair']);
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('verifyTlsCertificates')) {
                obj['verifyTlsCertificates'] = ApiClient.convertToType(data['verifyTlsCertificates'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Subscription</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Subscription</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Subscription.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `environment`
        if (data['environment']) { // data not null
          ObjectEnvironment.validateJSON(data['environment']);
        }
        // validate the optional field `filterOptions`
        if (data['filterOptions']) { // data not null
          SubscriptionFilterOptions.validateJSON(data['filterOptions']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `httpEndpoint`
        if (data['httpEndpoint']) { // data not null
          SubscriptionHttpEndpoint.validateJSON(data['httpEndpoint']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `tlsClientAuthKeyPair`
        if (data['tlsClientAuthKeyPair']) { // data not null
          SubscriptionTlsClientAuthKeyPair.validateJSON(data['tlsClientAuthKeyPair']);
        }

        return true;
    }


}

Subscription.RequiredProperties = ["enabled", "filterOptions", "format", "httpEndpoint", "name", "verifyTlsCertificates"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
Subscription.prototype['_links'] = undefined;

/**
 * The time the key resource expires.The date and time at which the subscription resource was created (ISO 8601 format).
 * @member {Date} createdAt
 */
Subscription.prototype['createdAt'] = undefined;

/**
 * A boolean that specifies whether a created or updated subscription should be active or suspended. A suspended state (`\"enabled\":false`) accumulates all matched events, but these events are not delivered until the subscription becomes active again (`\"enabled\":true`). For suspended subscriptions, events accumulate for a maximum of two weeks. Events older than two weeks are deleted. Restarted subscriptions receive the saved events (up to two weeks from the restart date). This is a required property.
 * @member {Boolean} enabled
 */
Subscription.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
Subscription.prototype['environment'] = undefined;

/**
 * @member {module:model/SubscriptionFilterOptions} filterOptions
 */
Subscription.prototype['filterOptions'] = undefined;

/**
 * @member {module:model/EnumSubscriptionFormat} format
 */
Subscription.prototype['format'] = undefined;

/**
 * A string that specifies the user resource’s unique identifier.
 * @member {String} id
 */
Subscription.prototype['id'] = undefined;

/**
 * @member {module:model/SubscriptionHttpEndpoint} httpEndpoint
 */
Subscription.prototype['httpEndpoint'] = undefined;

/**
 * A string that specifies the subscription name. This is a required property.
 * @member {String} name
 */
Subscription.prototype['name'] = undefined;

/**
 * @member {module:model/SubscriptionTlsClientAuthKeyPair} tlsClientAuthKeyPair
 */
Subscription.prototype['tlsClientAuthKeyPair'] = undefined;

/**
 * The date and time at which the subscription resource was last updated (ISO 8601 format).
 * @member {Date} updatedAt
 */
Subscription.prototype['updatedAt'] = undefined;

/**
 * A boolean that specifies whether a certificates should be verified. If this property's value is set to false, then all certificates are trusted. (Setting this property's value to false introduces a security risk.) This is a required property.
 * @member {Boolean} verifyTlsCertificates
 */
Subscription.prototype['verifyTlsCertificates'] = undefined;






export default Subscription;
