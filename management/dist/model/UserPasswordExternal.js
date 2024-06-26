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
import UserPasswordExternalGateway from './UserPasswordExternalGateway';

/**
 * The UserPasswordExternal model module.
 * @module model/UserPasswordExternal
 * @version 2023-06-29
 */
class UserPasswordExternal {
  /**
   * Constructs a new <code>UserPasswordExternal</code>.
   * An object that maps the information relevant to the user’s password, and its association to external directories.
   * @alias module:model/UserPasswordExternal
   */
  constructor() {
    UserPasswordExternal.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UserPasswordExternal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserPasswordExternal} obj Optional instance to populate.
   * @return {module:model/UserPasswordExternal} The populated <code>UserPasswordExternal</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserPasswordExternal();
      if (data.hasOwnProperty('gateway')) {
        obj['gateway'] = UserPasswordExternalGateway.constructFromObject(data['gateway']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>UserPasswordExternal</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserPasswordExternal</code>.
   */
  static validateJSON(data) {
    // validate the optional field `gateway`
    if (data['gateway']) {
      // data not null
      UserPasswordExternalGateway.validateJSON(data['gateway']);
    }
    return true;
  }
}

/**
 * @member {module:model/UserPasswordExternalGateway} gateway
 */
UserPasswordExternal.prototype['gateway'] = undefined;
export default UserPasswordExternal;