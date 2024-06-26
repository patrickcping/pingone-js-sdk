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
 * The Language model module.
 * @module model/Language
 * @version 2023-06-29
 */
class Language {
    /**
     * Constructs a new <code>Language</code>.
     * @alias module:model/Language
     * @param _default {Boolean} Specifies whether this language is the default for the environment. This property value must be set to false when creating a language resource. It can be set to true only after the language is enabled and after the localization of an agreement resource is complete when agreements are used for the environment.
     * @param enabled {Boolean} Specifies whether this language is enabled for the environment. This property value must be set to false when creating a language.
     * @param locale {String} An ISO standard language code. For more information about standard language codes, see ISO Language Code Table.
     */
    constructor(_default, enabled, locale) { 
        
        Language.initialize(this, _default, enabled, locale);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _default, enabled, locale) { 
        obj['default'] = _default;
        obj['enabled'] = enabled;
        obj['locale'] = locale;
    }

    /**
     * Constructs a <code>Language</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Language} obj Optional instance to populate.
     * @return {module:model/Language} The populated <code>Language</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Language();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ObjectEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('customerAdded')) {
                obj['customerAdded'] = ApiClient.convertToType(data['customerAdded'], 'Boolean');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Language</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Language</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Language.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
            throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

Language.RequiredProperties = ["default", "enabled", "locale"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
Language.prototype['_links'] = undefined;

/**
 * Specifies whether this language is the default for the environment. This property value must be set to false when creating a language resource. It can be set to true only after the language is enabled and after the localization of an agreement resource is complete when agreements are used for the environment.
 * @member {Boolean} default
 */
Language.prototype['default'] = undefined;

/**
 * Specifies whether this language is enabled for the environment. This property value must be set to false when creating a language.
 * @member {Boolean} enabled
 */
Language.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
Language.prototype['environment'] = undefined;

/**
 * The resource’s unique identifier.
 * @member {String} id
 */
Language.prototype['id'] = undefined;

/**
 * An ISO standard language code. For more information about standard language codes, see ISO Language Code Table.
 * @member {String} locale
 */
Language.prototype['locale'] = undefined;

/**
 * The language name. If omitted, the ISO standard name is used.
 * @member {String} name
 */
Language.prototype['name'] = undefined;

/**
 * The time the language resource was created.
 * @member {Date} createdAt
 */
Language.prototype['createdAt'] = undefined;

/**
 * Specifies whether this language was added by a customer administrator.
 * @member {Boolean} customerAdded
 */
Language.prototype['customerAdded'] = undefined;

/**
 * The time the language resource was last updated.
 * @member {Date} updatedAt
 */
Language.prototype['updatedAt'] = undefined;






export default Language;

