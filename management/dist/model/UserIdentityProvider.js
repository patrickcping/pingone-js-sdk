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
import EnumIdentityProvider from './EnumIdentityProvider';

/**
 * The UserIdentityProvider model module.
 * @module model/UserIdentityProvider
 * @version 2023-06-29
 */
class UserIdentityProvider {
  /**
   * Constructs a new <code>UserIdentityProvider</code>.
   * @alias module:model/UserIdentityProvider
   */
  constructor() {
    UserIdentityProvider.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UserIdentityProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserIdentityProvider} obj Optional instance to populate.
   * @return {module:model/UserIdentityProvider} The populated <code>UserIdentityProvider</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserIdentityProvider();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = EnumIdentityProvider.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>UserIdentityProvider</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserIdentityProvider</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    return true;
  }
}

/**
 * A mutable string that identifies the external identity provider used to authenticate the user. If not provided, PingOne is the identity provider. This attribute is required if the identity provider is authoritative for just-in-time user provisioning.
 * @member {String} id
 */
UserIdentityProvider.prototype['id'] = undefined;

/**
 * @member {module:model/EnumIdentityProvider} type
 */
UserIdentityProvider.prototype['type'] = undefined;
export default UserIdentityProvider;