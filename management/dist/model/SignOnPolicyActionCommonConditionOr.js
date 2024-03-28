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
import SignOnPolicyActionCommonConditionOrOrInner from './SignOnPolicyActionCommonConditionOrOrInner';

/**
 * The SignOnPolicyActionCommonConditionOr model module.
 * @module model/SignOnPolicyActionCommonConditionOr
 * @version 2023-06-29
 */
class SignOnPolicyActionCommonConditionOr {
  /**
   * Constructs a new <code>SignOnPolicyActionCommonConditionOr</code>.
   * @alias module:model/SignOnPolicyActionCommonConditionOr
   */
  constructor() {
    SignOnPolicyActionCommonConditionOr.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>SignOnPolicyActionCommonConditionOr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionCommonConditionOr} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionCommonConditionOr} The populated <code>SignOnPolicyActionCommonConditionOr</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionCommonConditionOr();
      if (data.hasOwnProperty('or')) {
        obj['or'] = ApiClient.convertToType(data['or'], [SignOnPolicyActionCommonConditionOrOrInner]);
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionCommonConditionOr</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionCommonConditionOr</code>.
   */
  static validateJSON(data) {
    if (data['or']) {
      // data not null
      // ensure the json data is an array
      if (!Array.isArray(data['or'])) {
        throw new Error("Expected the field `or` to be an array in the JSON data but got " + data['or']);
      }
      // validate the optional field `or` (array)
      for (const item of data['or']) {
        SignOnPolicyActionCommonConditionOrOrInner.validateJSON(item);
      }
      ;
    }
    return true;
  }
}

/**
 * @member {Array.<module:model/SignOnPolicyActionCommonConditionOrOrInner>} or
 */
SignOnPolicyActionCommonConditionOr.prototype['or'] = undefined;
export default SignOnPolicyActionCommonConditionOr;