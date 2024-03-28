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
import SignOnPolicyActionCommonConditionGeovelocityValid from './SignOnPolicyActionCommonConditionGeovelocityValid';

/**
 * The SignOnPolicyActionCommonConditionGeovelocity model module.
 * @module model/SignOnPolicyActionCommonConditionGeovelocity
 * @version 2023-06-29
 */
class SignOnPolicyActionCommonConditionGeovelocity {
  /**
   * Constructs a new <code>SignOnPolicyActionCommonConditionGeovelocity</code>.
   * @alias module:model/SignOnPolicyActionCommonConditionGeovelocity
   * @param geoVelocity {String} 
   * @param valid {module:model/SignOnPolicyActionCommonConditionGeovelocityValid} 
   */
  constructor(geoVelocity, valid) {
    SignOnPolicyActionCommonConditionGeovelocity.initialize(this, geoVelocity, valid);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, geoVelocity, valid) {
    obj['geoVelocity'] = geoVelocity;
    obj['valid'] = valid;
  }

  /**
   * Constructs a <code>SignOnPolicyActionCommonConditionGeovelocity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionCommonConditionGeovelocity} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionCommonConditionGeovelocity} The populated <code>SignOnPolicyActionCommonConditionGeovelocity</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionCommonConditionGeovelocity();
      if (data.hasOwnProperty('geoVelocity')) {
        obj['geoVelocity'] = ApiClient.convertToType(data['geoVelocity'], 'String');
      }
      if (data.hasOwnProperty('valid')) {
        obj['valid'] = SignOnPolicyActionCommonConditionGeovelocityValid.constructFromObject(data['valid']);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionCommonConditionGeovelocity</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionCommonConditionGeovelocity</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of SignOnPolicyActionCommonConditionGeovelocity.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // ensure the json data is a string
    if (data['geoVelocity'] && !(typeof data['geoVelocity'] === 'string' || data['geoVelocity'] instanceof String)) {
      throw new Error("Expected the field `geoVelocity` to be a primitive type in the JSON string but got " + data['geoVelocity']);
    }
    // validate the optional field `valid`
    if (data['valid']) {
      // data not null
      SignOnPolicyActionCommonConditionGeovelocityValid.validateJSON(data['valid']);
    }
    return true;
  }
}
SignOnPolicyActionCommonConditionGeovelocity.RequiredProperties = ["geoVelocity", "valid"];

/**
 * @member {String} geoVelocity
 */
SignOnPolicyActionCommonConditionGeovelocity.prototype['geoVelocity'] = undefined;

/**
 * @member {module:model/SignOnPolicyActionCommonConditionGeovelocityValid} valid
 */
SignOnPolicyActionCommonConditionGeovelocity.prototype['valid'] = undefined;
export default SignOnPolicyActionCommonConditionGeovelocity;