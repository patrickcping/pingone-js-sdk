/**
 * PingOne Platform API - PingOne MFA
 * The PingOne Platform API covering the PingOne MFA service
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
 * The FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner model module.
 * @module model/FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner
 * @version 2023-06-29
 */
class FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner {
  /**
   * Constructs a new <code>FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner</code>.
   * @alias module:model/FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner
   * @param name {String} The name of the sub-attribute to use for the user display name.
   */
  constructor(name) {
    FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner.initialize(this, name);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, name) {
    obj['name'] = name;
  }

  /**
   * Constructs a <code>FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner} obj Optional instance to populate.
   * @return {module:model/FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner} The populated <code>FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
      throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
    }
    return true;
  }
}
FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner.RequiredProperties = ["name"];

/**
 * The name of the sub-attribute to use for the user display name.
 * @member {String} name
 */
FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner.prototype['name'] = undefined;
export default FIDO2PolicyUserDisplayNameAttributesAttributesInnerSubAttributesInner;