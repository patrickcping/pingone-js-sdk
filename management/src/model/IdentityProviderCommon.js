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
import EnumIdentityProviderExt from './EnumIdentityProviderExt';
import IdentityProviderCommonIcon from './IdentityProviderCommonIcon';
import IdentityProviderCommonLoginButtonIcon from './IdentityProviderCommonLoginButtonIcon';
import IdentityProviderCommonRegistration from './IdentityProviderCommonRegistration';
import LinksHATEOAS from './LinksHATEOAS';
import ObjectEnvironment from './ObjectEnvironment';

/**
 * The IdentityProviderCommon model module.
 * @module model/IdentityProviderCommon
 * @version 2023-06-29
 */
class IdentityProviderCommon {
    /**
     * Constructs a new <code>IdentityProviderCommon</code>.
     * @alias module:model/IdentityProviderCommon
     * @param enabled {Boolean} The current enabled state of the IdP.
     * @param name {String} The name of the IdP.
     * @param type {module:model/EnumIdentityProviderExt} 
     */
    constructor(enabled, name, type) { 
        
        IdentityProviderCommon.initialize(this, enabled, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, name, type) { 
        obj['enabled'] = enabled;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>IdentityProviderCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityProviderCommon} obj Optional instance to populate.
     * @return {module:model/IdentityProviderCommon} The populated <code>IdentityProviderCommon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityProviderCommon();

            if (data.hasOwnProperty('_links')) {
                obj['_links'] = LinksHATEOAS.constructFromObject(data['_links']);
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
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = IdentityProviderCommonIcon.constructFromObject(data['icon']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('loginButtonIcon')) {
                obj['loginButtonIcon'] = IdentityProviderCommonLoginButtonIcon.constructFromObject(data['loginButtonIcon']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('registration')) {
                obj['registration'] = IdentityProviderCommonRegistration.constructFromObject(data['registration']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumIdentityProviderExt.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IdentityProviderCommon</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IdentityProviderCommon</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IdentityProviderCommon.RequiredProperties) {
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
        // validate the optional field `icon`
        if (data['icon']) { // data not null
          IdentityProviderCommonIcon.validateJSON(data['icon']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `loginButtonIcon`
        if (data['loginButtonIcon']) { // data not null
          IdentityProviderCommonLoginButtonIcon.validateJSON(data['loginButtonIcon']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `registration`
        if (data['registration']) { // data not null
          IdentityProviderCommonRegistration.validateJSON(data['registration']);
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }

        return true;
    }


}

IdentityProviderCommon.RequiredProperties = ["enabled", "name", "type"];

/**
 * @member {module:model/LinksHATEOAS} _links
 */
IdentityProviderCommon.prototype['_links'] = undefined;

/**
 * The description of the IdP.
 * @member {String} description
 */
IdentityProviderCommon.prototype['description'] = undefined;

/**
 * The current enabled state of the IdP.
 * @member {Boolean} enabled
 */
IdentityProviderCommon.prototype['enabled'] = undefined;

/**
 * @member {module:model/ObjectEnvironment} environment
 */
IdentityProviderCommon.prototype['environment'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonIcon} icon
 */
IdentityProviderCommon.prototype['icon'] = undefined;

/**
 * The resource ID.
 * @member {String} id
 */
IdentityProviderCommon.prototype['id'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonLoginButtonIcon} loginButtonIcon
 */
IdentityProviderCommon.prototype['loginButtonIcon'] = undefined;

/**
 * The name of the IdP.
 * @member {String} name
 */
IdentityProviderCommon.prototype['name'] = undefined;

/**
 * @member {module:model/IdentityProviderCommonRegistration} registration
 */
IdentityProviderCommon.prototype['registration'] = undefined;

/**
 * @member {module:model/EnumIdentityProviderExt} type
 */
IdentityProviderCommon.prototype['type'] = undefined;

/**
 * The time the resource was created.
 * @member {String} createdAt
 */
IdentityProviderCommon.prototype['createdAt'] = undefined;

/**
 * The time the resource was last updated.
 * @member {String} updatedAt
 */
IdentityProviderCommon.prototype['updatedAt'] = undefined;






export default IdentityProviderCommon;

