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
import SignOnPolicyActionCommonConditionIPRiskIpRisk from './SignOnPolicyActionCommonConditionIPRiskIpRisk';

/**
 * The SignOnPolicyActionCommonConditionIPRisk model module.
 * @module model/SignOnPolicyActionCommonConditionIPRisk
 * @version 2023-06-29
 */
class SignOnPolicyActionCommonConditionIPRisk {
  /**
   * Constructs a new <code>SignOnPolicyActionCommonConditionIPRisk</code>.
   * @alias module:model/SignOnPolicyActionCommonConditionIPRisk
   * @param ipRisk {module:model/SignOnPolicyActionCommonConditionIPRiskIpRisk} 
   * @param valid {String} 
   */
  constructor(ipRisk, valid) {
    SignOnPolicyActionCommonConditionIPRisk.initialize(this, ipRisk, valid);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, ipRisk, valid) {
    obj['ipRisk'] = ipRisk;
    obj['valid'] = valid;
  }

  /**
   * Constructs a <code>SignOnPolicyActionCommonConditionIPRisk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignOnPolicyActionCommonConditionIPRisk} obj Optional instance to populate.
   * @return {module:model/SignOnPolicyActionCommonConditionIPRisk} The populated <code>SignOnPolicyActionCommonConditionIPRisk</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignOnPolicyActionCommonConditionIPRisk();
      if (data.hasOwnProperty('ipRisk')) {
        obj['ipRisk'] = SignOnPolicyActionCommonConditionIPRiskIpRisk.constructFromObject(data['ipRisk']);
      }
      if (data.hasOwnProperty('valid')) {
        obj['valid'] = ApiClient.convertToType(data['valid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Validates the JSON data with respect to <code>SignOnPolicyActionCommonConditionIPRisk</code>.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignOnPolicyActionCommonConditionIPRisk</code>.
   */
  static validateJSON(data) {
    // check to make sure all required properties are present in the JSON string
    for (const property of SignOnPolicyActionCommonConditionIPRisk.RequiredProperties) {
      if (!data.hasOwnProperty(property)) {
        throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
      }
    }
    // validate the optional field `ipRisk`
    if (data['ipRisk']) {
      // data not null
      SignOnPolicyActionCommonConditionIPRiskIpRisk.validateJSON(data['ipRisk']);
    }
    // ensure the json data is a string
    if (data['valid'] && !(typeof data['valid'] === 'string' || data['valid'] instanceof String)) {
      throw new Error("Expected the field `valid` to be a primitive type in the JSON string but got " + data['valid']);
    }
    return true;
  }
}
SignOnPolicyActionCommonConditionIPRisk.RequiredProperties = ["ipRisk", "valid"];

/**
 * @member {module:model/SignOnPolicyActionCommonConditionIPRiskIpRisk} ipRisk
 */
SignOnPolicyActionCommonConditionIPRisk.prototype['ipRisk'] = undefined;

/**
 * @member {String} valid
 */
SignOnPolicyActionCommonConditionIPRisk.prototype['valid'] = undefined;
export default SignOnPolicyActionCommonConditionIPRisk;