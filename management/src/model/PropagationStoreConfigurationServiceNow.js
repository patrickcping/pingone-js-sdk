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
import EnumPropagationStoreTypeRemoveActionDisable from './EnumPropagationStoreTypeRemoveActionDisable';

/**
 * The PropagationStoreConfigurationServiceNow model module.
 * @module model/PropagationStoreConfigurationServiceNow
 * @version 2023-06-29
 */
class PropagationStoreConfigurationServiceNow {
    /**
     * Constructs a new <code>PropagationStoreConfigurationServiceNow</code>.
     * @alias module:model/PropagationStoreConfigurationServiceNow
     * @param administratorPassword {String} Password for the administrator.
     * @param administratorUsername {String} Username for the administrator.
     * @param serviceNowUrl {String} The URL for the ServiceNow account.
     */
    constructor(administratorPassword, administratorUsername, serviceNowUrl) { 
        
        PropagationStoreConfigurationServiceNow.initialize(this, administratorPassword, administratorUsername, serviceNowUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, administratorPassword, administratorUsername, serviceNowUrl) { 
        obj['Administrator_Password'] = administratorPassword;
        obj['Administrator_Username'] = administratorUsername;
        obj['ServiceNow_Url'] = serviceNowUrl;
    }

    /**
     * Constructs a <code>PropagationStoreConfigurationServiceNow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropagationStoreConfigurationServiceNow} obj Optional instance to populate.
     * @return {module:model/PropagationStoreConfigurationServiceNow} The populated <code>PropagationStoreConfigurationServiceNow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropagationStoreConfigurationServiceNow();

            if (data.hasOwnProperty('Administrator_Password')) {
                obj['Administrator_Password'] = ApiClient.convertToType(data['Administrator_Password'], 'String');
            }
            if (data.hasOwnProperty('Administrator_Username')) {
                obj['Administrator_Username'] = ApiClient.convertToType(data['Administrator_Username'], 'String');
            }
            if (data.hasOwnProperty('CREATE_USERS')) {
                obj['CREATE_USERS'] = ApiClient.convertToType(data['CREATE_USERS'], 'Boolean');
            }
            if (data.hasOwnProperty('DEPROVISION_USERS')) {
                obj['DEPROVISION_USERS'] = ApiClient.convertToType(data['DEPROVISION_USERS'], 'String');
            }
            if (data.hasOwnProperty('DISABLE_USERS')) {
                obj['DISABLE_USERS'] = ApiClient.convertToType(data['DISABLE_USERS'], 'Boolean');
            }
            if (data.hasOwnProperty('REMOVE_ACTION')) {
                obj['REMOVE_ACTION'] = EnumPropagationStoreTypeRemoveActionDisable.constructFromObject(data['REMOVE_ACTION']);
            }
            if (data.hasOwnProperty('ServiceNow_Url')) {
                obj['ServiceNow_Url'] = ApiClient.convertToType(data['ServiceNow_Url'], 'String');
            }
            if (data.hasOwnProperty('UPDATE_USERS')) {
                obj['UPDATE_USERS'] = ApiClient.convertToType(data['UPDATE_USERS'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PropagationStoreConfigurationServiceNow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PropagationStoreConfigurationServiceNow</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PropagationStoreConfigurationServiceNow.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['Administrator_Password'] && !(typeof data['Administrator_Password'] === 'string' || data['Administrator_Password'] instanceof String)) {
            throw new Error("Expected the field `Administrator_Password` to be a primitive type in the JSON string but got " + data['Administrator_Password']);
        }
        // ensure the json data is a string
        if (data['Administrator_Username'] && !(typeof data['Administrator_Username'] === 'string' || data['Administrator_Username'] instanceof String)) {
            throw new Error("Expected the field `Administrator_Username` to be a primitive type in the JSON string but got " + data['Administrator_Username']);
        }
        // ensure the json data is a string
        if (data['DEPROVISION_USERS'] && !(typeof data['DEPROVISION_USERS'] === 'string' || data['DEPROVISION_USERS'] instanceof String)) {
            throw new Error("Expected the field `DEPROVISION_USERS` to be a primitive type in the JSON string but got " + data['DEPROVISION_USERS']);
        }
        // ensure the json data is a string
        if (data['ServiceNow_Url'] && !(typeof data['ServiceNow_Url'] === 'string' || data['ServiceNow_Url'] instanceof String)) {
            throw new Error("Expected the field `ServiceNow_Url` to be a primitive type in the JSON string but got " + data['ServiceNow_Url']);
        }

        return true;
    }


}

PropagationStoreConfigurationServiceNow.RequiredProperties = ["Administrator_Password", "Administrator_Username", "ServiceNow_Url"];

/**
 * Password for the administrator.
 * @member {String} Administrator_Password
 */
PropagationStoreConfigurationServiceNow.prototype['Administrator_Password'] = undefined;

/**
 * Username for the administrator.
 * @member {String} Administrator_Username
 */
PropagationStoreConfigurationServiceNow.prototype['Administrator_Username'] = undefined;

/**
 * Whether or not users are allowed to be created.
 * @member {Boolean} CREATE_USERS
 */
PropagationStoreConfigurationServiceNow.prototype['CREATE_USERS'] = undefined;

/**
 * Whether or not users are allowed to be deprovisioned (removed) following action specified in `REMOVE_ACTION`.
 * @member {String} DEPROVISION_USERS
 */
PropagationStoreConfigurationServiceNow.prototype['DEPROVISION_USERS'] = undefined;

/**
 * Whether or not new users are allowed to be disabled.
 * @member {Boolean} DISABLE_USERS
 */
PropagationStoreConfigurationServiceNow.prototype['DISABLE_USERS'] = undefined;

/**
 * @member {module:model/EnumPropagationStoreTypeRemoveActionDisable} REMOVE_ACTION
 */
PropagationStoreConfigurationServiceNow.prototype['REMOVE_ACTION'] = undefined;

/**
 * The URL for the ServiceNow account.
 * @member {String} ServiceNow_Url
 */
PropagationStoreConfigurationServiceNow.prototype['ServiceNow_Url'] = undefined;

/**
 * Whether or not users are allowed to be updated.
 * @member {Boolean} UPDATE_USERS
 */
PropagationStoreConfigurationServiceNow.prototype['UPDATE_USERS'] = undefined;






export default PropagationStoreConfigurationServiceNow;

