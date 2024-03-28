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
import EnumPropagationStoreTypeAqueraAuthenticationMethod from './EnumPropagationStoreTypeAqueraAuthenticationMethod';
import EnumPropagationStoreTypeAqueraGroupSourceName from './EnumPropagationStoreTypeAqueraGroupSourceName';
import EnumPropagationStoreTypeRemoveActionDisableDelete from './EnumPropagationStoreTypeRemoveActionDisableDelete';

/**
 * The PropagationStoreConfigurationAquera model module.
 * @module model/PropagationStoreConfigurationAquera
 * @version 2023-06-29
 */
class PropagationStoreConfigurationAquera {
    /**
     * Constructs a new <code>PropagationStoreConfigurationAquera</code>.
     * @alias module:model/PropagationStoreConfigurationAquera
     * @param AUTHENTICATION_METHOD {module:model/EnumPropagationStoreTypeAqueraAuthenticationMethod} 
     * @param BASIC_AUTH_PASSWORD {String} The password for account authentication.
     * @param BASIC_AUTH_USER {String} The user name for account authentication.
     * @param SCIM_URL {String} The SCIM URL.
     */
    constructor(AUTHENTICATION_METHOD, BASIC_AUTH_PASSWORD, BASIC_AUTH_USER, SCIM_URL) { 
        
        PropagationStoreConfigurationAquera.initialize(this, AUTHENTICATION_METHOD, BASIC_AUTH_PASSWORD, BASIC_AUTH_USER, SCIM_URL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, AUTHENTICATION_METHOD, BASIC_AUTH_PASSWORD, BASIC_AUTH_USER, SCIM_URL) { 
        obj['AUTHENTICATION_METHOD'] = AUTHENTICATION_METHOD;
        obj['BASIC_AUTH_PASSWORD'] = BASIC_AUTH_PASSWORD;
        obj['BASIC_AUTH_USER'] = BASIC_AUTH_USER;
        obj['SCIM_URL'] = SCIM_URL;
    }

    /**
     * Constructs a <code>PropagationStoreConfigurationAquera</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropagationStoreConfigurationAquera} obj Optional instance to populate.
     * @return {module:model/PropagationStoreConfigurationAquera} The populated <code>PropagationStoreConfigurationAquera</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropagationStoreConfigurationAquera();

            if (data.hasOwnProperty('ACCESS_TOKEN')) {
                obj['ACCESS_TOKEN'] = ApiClient.convertToType(data['ACCESS_TOKEN'], 'String');
            }
            if (data.hasOwnProperty('AUTHENTICATION_METHOD')) {
                obj['AUTHENTICATION_METHOD'] = EnumPropagationStoreTypeAqueraAuthenticationMethod.constructFromObject(data['AUTHENTICATION_METHOD']);
            }
            if (data.hasOwnProperty('BASIC_AUTH_PASSWORD')) {
                obj['BASIC_AUTH_PASSWORD'] = ApiClient.convertToType(data['BASIC_AUTH_PASSWORD'], 'String');
            }
            if (data.hasOwnProperty('BASIC_AUTH_USER')) {
                obj['BASIC_AUTH_USER'] = ApiClient.convertToType(data['BASIC_AUTH_USER'], 'String');
            }
            if (data.hasOwnProperty('CREATE_USERS')) {
                obj['CREATE_USERS'] = ApiClient.convertToType(data['CREATE_USERS'], 'Boolean');
            }
            if (data.hasOwnProperty('DISABLE_USERS')) {
                obj['DISABLE_USERS'] = ApiClient.convertToType(data['DISABLE_USERS'], 'Boolean');
            }
            if (data.hasOwnProperty('GROUP_NAME_SOURCE')) {
                obj['GROUP_NAME_SOURCE'] = EnumPropagationStoreTypeAqueraGroupSourceName.constructFromObject(data['GROUP_NAME_SOURCE']);
            }
            if (data.hasOwnProperty('REMOVE_ACTION')) {
                obj['REMOVE_ACTION'] = EnumPropagationStoreTypeRemoveActionDisableDelete.constructFromObject(data['REMOVE_ACTION']);
            }
            if (data.hasOwnProperty('SCIM_URL')) {
                obj['SCIM_URL'] = ApiClient.convertToType(data['SCIM_URL'], 'String');
            }
            if (data.hasOwnProperty('UPDATE_USERS')) {
                obj['UPDATE_USERS'] = ApiClient.convertToType(data['UPDATE_USERS'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropagationStoreConfigurationAquera</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropagationStoreConfigurationAquera</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropagationStoreConfigurationAquera.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ACCESS_TOKEN'] && !(typeof data['ACCESS_TOKEN'] === 'string' || data['ACCESS_TOKEN'] instanceof String)) {
            throw new Error("Expected the field `ACCESS_TOKEN` to be a primitive type in the JSON string but got " + data['ACCESS_TOKEN']);
        }
        // ensure the json data is a string
        if (data['BASIC_AUTH_PASSWORD'] && !(typeof data['BASIC_AUTH_PASSWORD'] === 'string' || data['BASIC_AUTH_PASSWORD'] instanceof String)) {
            throw new Error("Expected the field `BASIC_AUTH_PASSWORD` to be a primitive type in the JSON string but got " + data['BASIC_AUTH_PASSWORD']);
        }
        // ensure the json data is a string
        if (data['BASIC_AUTH_USER'] && !(typeof data['BASIC_AUTH_USER'] === 'string' || data['BASIC_AUTH_USER'] instanceof String)) {
            throw new Error("Expected the field `BASIC_AUTH_USER` to be a primitive type in the JSON string but got " + data['BASIC_AUTH_USER']);
        }
        // ensure the json data is a string
        if (data['SCIM_URL'] && !(typeof data['SCIM_URL'] === 'string' || data['SCIM_URL'] instanceof String)) {
            throw new Error("Expected the field `SCIM_URL` to be a primitive type in the JSON string but got " + data['SCIM_URL']);
        }

        return true;
    }


}

PropagationStoreConfigurationAquera.RequiredProperties = ["AUTHENTICATION_METHOD", "BASIC_AUTH_PASSWORD", "BASIC_AUTH_USER", "SCIM_URL"];

/**
 * A string specifying the access token for account authentication.
 * @member {String} ACCESS_TOKEN
 */
PropagationStoreConfigurationAquera.prototype['ACCESS_TOKEN'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeAqueraAuthenticationMethod} AUTHENTICATION_METHOD
 */
PropagationStoreConfigurationAquera.prototype['AUTHENTICATION_METHOD'] = undefined;

/**
 * The password for account authentication.
 * @member {String} BASIC_AUTH_PASSWORD
 */
PropagationStoreConfigurationAquera.prototype['BASIC_AUTH_PASSWORD'] = undefined;

/**
 * The user name for account authentication.
 * @member {String} BASIC_AUTH_USER
 */
PropagationStoreConfigurationAquera.prototype['BASIC_AUTH_USER'] = undefined;

/**
 * Whether or not users are allowed to be created.
 * @member {Boolean} CREATE_USERS
 */
PropagationStoreConfigurationAquera.prototype['CREATE_USERS'] = undefined;

/**
 * Whether or not users are allowed to be disabled.
 * @member {Boolean} DISABLE_USERS
 */
PropagationStoreConfigurationAquera.prototype['DISABLE_USERS'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeAqueraGroupSourceName} GROUP_NAME_SOURCE
 */
PropagationStoreConfigurationAquera.prototype['GROUP_NAME_SOURCE'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeRemoveActionDisableDelete} REMOVE_ACTION
 */
PropagationStoreConfigurationAquera.prototype['REMOVE_ACTION'] = undefined;

/**
 * The SCIM URL.
 * @member {String} SCIM_URL
 */
PropagationStoreConfigurationAquera.prototype['SCIM_URL'] = undefined;

/**
 * Whether or not users are allowed to be updated.
 * @member {Boolean} UPDATE_USERS
 */
PropagationStoreConfigurationAquera.prototype['UPDATE_USERS'] = undefined;






export default PropagationStoreConfigurationAquera;
