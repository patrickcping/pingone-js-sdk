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
import UserPasswordExternal from './UserPasswordExternal';

/**
 * The UserPassword model module.
 * @module model/UserPassword
 * @version 2023-06-29
 */
class UserPassword {
    /**
     * Constructs a new <code>UserPassword</code>.
     * An object that specifies the user&#39;s password. This property is never returned in the response.
     * @alias module:model/UserPassword
     */
    constructor() { 
        
        UserPassword.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserPassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserPassword} obj Optional instance to populate.
     * @return {module:model/UserPassword} The populated <code>UserPassword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserPassword();

            if (data.hasOwnProperty('forceChange')) {
                obj['forceChange'] = ApiClient.convertToType(data['forceChange'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('external')) {
                obj['external'] = UserPasswordExternal.constructFromObject(data['external']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserPassword</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserPassword</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // validate the optional field `external`
        if (data['external']) { // data not null
          UserPasswordExternal.validateJSON(data['external']);
        }

        return true;
    }


}



/**
 * A boolean that specifies whether the user is forced to change the password on the next log in. If not provided, the property is set to false.
 * @member {Boolean} forceChange
 */
UserPassword.prototype['forceChange'] = undefined;

/**
 * A string that specifies the user's password value. The string is either in cleartext or pre-encoded format.
 * @member {String} value
 */
UserPassword.prototype['value'] = undefined;

/**
 * @member {module:model/UserPasswordExternal} external
 */
UserPassword.prototype['external'] = undefined;






export default UserPassword;

