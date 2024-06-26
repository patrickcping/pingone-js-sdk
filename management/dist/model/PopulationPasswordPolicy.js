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

/**
 * The PopulationPasswordPolicy model module.
 * @module model/PopulationPasswordPolicy
 * @version 2023-06-29
 */
class PopulationPasswordPolicy {
  /**
   * Constructs a new <code>PopulationPasswordPolicy</code>.
   * The object reference to the password policy resource. This is an optional property.
   * @alias module:model/PopulationPasswordPolicy
   * @param id {String} The ID of the password policy that is used for this population. If absent, the environment's default is used. Requried if `passwordPolicy` is used.
   */
  constructor(id) {
    PopulationPasswordPolicy.initialize(this, id);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, id) {
    obj['id'] = id;
  }

  /**
   * Constructs a <code>PopulationPasswordPolicy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PopulationPasswordPolicy} obj Optional instance to populate.
   * @return {module:model/PopulationPasswordPolicy} The populated <code>PopulationPasswordPolicy</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PopulationPasswordPolicy();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>PopulationPasswordPolicy</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PopulationPasswordPolicy</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of PopulationPasswordPolicy.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
      throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
    }
    return true;
  }
}
PopulationPasswordPolicy.RequiredProperties = ["id"];

/**
 * The ID of the password policy that is used for this population. If absent, the environment's default is used. Requried if `passwordPolicy` is used.
 * @member {String} id
 */
PopulationPasswordPolicy.prototype['id'] = undefined;
export default PopulationPasswordPolicy;