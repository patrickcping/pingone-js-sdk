/**
 * PingOne Platform API - Credentials
 * The PingOne Platform API covering the PingOne Credentials service
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

/**
 * The UserCredentialUserdata model module.
 * @module model/UserCredentialUserdata
 * @version 2023-06-29
 */
class UserCredentialUserdata {
  /**
   * Constructs a new <code>UserCredentialUserdata</code>.
   * @alias module:model/UserCredentialUserdata
   */
  constructor() {
    UserCredentialUserdata.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UserCredentialUserdata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCredentialUserdata} obj Optional instance to populate.
   * @return {module:model/UserCredentialUserdata} The populated <code>UserCredentialUserdata</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserCredentialUserdata();
      if (data.hasOwnProperty('CardImage')) {
        obj['CardImage'] = ApiClient.convertToType(data['CardImage'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>UserCredentialUserdata</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserCredentialUserdata</code>.
   */
  static validateJSON(data) {
    // ensure the json data is a string
    if (data['CardImage'] && !(typeof data['CardImage'] === 'string' || data['CardImage'] instanceof String)) {
      throw new Error("Expected the field `CardImage` to be a primitive type in the JSON string but got " + data['CardImage']);
    }
    return true;
  }
}

/**
 * @member {String} CardImage
 */
UserCredentialUserdata.prototype['CardImage'] = undefined;
export default UserCredentialUserdata;