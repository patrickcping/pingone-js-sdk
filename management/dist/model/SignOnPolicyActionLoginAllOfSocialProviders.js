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
 * The SignOnPolicyActionLoginAllOfSocialProviders model module.
 * @module model/SignOnPolicyActionLoginAllOfSocialProviders
 * @version 2023-06-29
 */
class SignOnPolicyActionLoginAllOfSocialProviders {
  /**
   * Constructs a new <code>SignOnPolicyActionLoginAllOfSocialProviders</code>.
   * @alias module:model/SignOnPolicyActionLoginAllOfSocialProviders
   * @param id {String} ID of the identity provider that can be used for the social login sign-on flow.
   */
  constructor(id) {
    SignOnPolicyActionLoginAllOfSocialProviders.initialize(this, id);
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
   * Constructs a <code>SignOnPolicyActionLoginAllOfSocialProviders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionLoginAllOfSocialProviders} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionLoginAllOfSocialProviders} The populated <code>SignOnPolicyActionLoginAllOfSocialProviders</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionLoginAllOfSocialProviders();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionLoginAllOfSocialProviders</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionLoginAllOfSocialProviders</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of SignOnPolicyActionLoginAllOfSocialProviders.RequiredProperties) {
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
SignOnPolicyActionLoginAllOfSocialProviders.RequiredProperties = ["id"];

/**
 * ID of the identity provider that can be used for the social login sign-on flow.
 * @member {String} id
 */
SignOnPolicyActionLoginAllOfSocialProviders.prototype['id'] = undefined;
export default SignOnPolicyActionLoginAllOfSocialProviders;